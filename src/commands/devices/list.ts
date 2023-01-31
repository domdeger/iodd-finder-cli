import { Args, Command, Flags, ux } from '@oclif/core';
import { IoddFinderApi } from '../../logic/ioddfinder-api';
import 'core-js/full/array/from-async';
import { DeviceEntry } from '../../logic/api-models/device-entry.interface';

export default class DeviceList extends Command {
  static description = 'List available devices available through the iodd finder.';

  static examples = [
    `<%= config.bin %> <%= command.id %> list
`,
  ];

  static args = {
    vendor: Args.string({
      name: 'vendor',
      required: false,

      description: 'Defines the vendor for which the devices shall be listed',
    }),
  };

  static flags = {
    ...ux.table.flags(),
    all: Flags.boolean({
      char: 'a',
    }),
  };

  async run(): Promise<void> {
    const { flags, args } = await this.parse(DeviceList);

    if (args.vendor) {
      ux.action.start(`Loading devices for  ${args.vendor}`);
      await this.printTable(IoddFinderApi.GetDevicesForVendor(args.vendor), flags);

      ux.action.stop();

      return;
    }

    if (flags.all) {
      ux.action.start(`Iterating devices for all vendors, this could take a while...`);

      await this.printTable(IoddFinderApi.GetAllDevices(), flags);

      ux.action.stop();
    }
  }

  async printTable(generator: AsyncGenerator<DeviceEntry>, flags: any) {
    const vendors = [];
    for await (const device of generator) {
      vendors.push(device);
    }

    ux.action.stop();

    ux.table(
      vendors as any,
      {
        deviceId: {},
        productName: {},
        productId: {},
        productVariantId: {},
        versionString: {},
        ioddStatus: {},
        ioddId: {},
        iolinkRev: {},
        vendorName: {},
      },
      {
        ...flags,
      }
    );
  }
}
