import { Args, Command, Flags, ux } from '@oclif/core';
import delay = require('delay');
import { DeviceEntry } from '../logic/api-models/device-entry.interface';
import { printError } from '../logic/error-handling';
import { IoddFinderApi } from '../logic/ioddfinder-api';
import { toArrayAsync } from '../logic/tools';

export default class Download extends Command {
  static description = 'Download iodds';

  static examples = [
    `<%= config.bin %> <%= command.id %> list
`,
  ];

  static args = {};

  static flags = {
    vendor: Flags.string({
      char: 'v',
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(Download);

    if (flags.vendor) {
      const vendorName = flags.vendor;

      const devices = await toArrayAsync(IoddFinderApi.GetDevicesForVendor(vendorName));
      const downloadedIodds: number[] = [];
      let processedCount = 0;
      for (let device of devices) {
        try {
          processedCount++;
          if (downloadedIodds.includes(device.ioddId)) {
            continue;
          }

          ux.action.start(`Downloading iodd for device Id ${device.deviceId} ${processedCount}/${devices.length}`);
          const fileName = await IoddFinderApi.DownloadIoddRated('./out', device.vendorId, device.ioddId);
          ux.log(`Downloaded iodd file ${fileName}`);
          downloadedIodds.push(device.ioddId);

          const delayMs = this.getRndDelay();
          await delay(delayMs);
        } catch (e) {
          printError(e, this);
        }
      }
    }
    const vendors = await IoddFinderApi.getVendorList();
    for (const vendor of vendors) {
      this.log(vendor);
    }
  }

  getRndDelay() {
    return Math.floor(5000 + Math.random() * 3000);
  }
}
