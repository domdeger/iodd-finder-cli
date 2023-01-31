import axios from 'axios';
import { promises as fs } from 'fs';
import path = require('path');
import { writer } from 'repl';
import { DriversParameterBuilder } from '../drivers-parameter-builder';
import { DeviceEntry } from './device-entry.interface';
import { PaginatedResult } from './paginated-result.interface';

export class IoddFinderApi {
  static readonly apiBaseUrl = 'https://ioddfinder.io-link.com/api';

  static async getVendorList(): Promise<string[]> {
    return IoddFinderApi.get<string[]>(`${this.apiBaseUrl}/drivers/vendors`);
  }

  public static async *GetAllDevices(): AsyncGenerator<DeviceEntry> {
    let vendors = await IoddFinderApi.getVendorList();
    for (const vendor of vendors) {
      for await (const entry of IoddFinderApi.GetDevicesForVendor(vendor)) {
        yield entry;
      }
    }
  }

  public static async DownloadIoddRated(folder: string, vendorId: number, ioddId: number) {
    const result = await axios.get(`${this.apiBaseUrl}/vendors/${vendorId}/iodds/${ioddId}/files/zip/rated`, { responseType: 'stream' });
    const filename = result.headers['content-disposition']
      .split(';')
      .find((n: any) => n.includes('filename='))
      .replace('filename=', '')
      .trim();

    await fs.writeFile(path.join(folder, filename), result.data);
  }

  public static async *GetDevicesForVendor(vendorName: string): AsyncGenerator<DeviceEntry> {
    let page = 0;
    let result: PaginatedResult<DeviceEntry> | null = null;
    do {
      result = await IoddFinderApi.get<PaginatedResult<DeviceEntry>>(
        `${this.apiBaseUrl}/drivers`,
        DriversParameterBuilder.paginatedForVendor(vendorName, page)
      );

      for (let entry of result.content) {
        yield entry;
      }
      page++;
    } while (result?.last === false);
  }

  private static async get<T>(url: string, params?: any): Promise<T> {
    const result = await axios.get<T>(url, { params });

    if (result.status >= 300) {
      throw new Error(`Received non success status code ${result.status}`);
    }

    return result.data;
  }
}
