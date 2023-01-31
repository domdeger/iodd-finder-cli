export interface DeviceEntry {
  hasMoreVersions: boolean;
  iolinkRev: IOLinkRev;
  versionString: IODDVersion;
  ioddId: number;
  productId: number;
  productVariantId: number;
  productName: string;
  deviceId: number;
  vendorId: number;
  ioddStatus: string;
  hasMd: boolean;
  vendorName: string;
  uploadDate: number;
}

type IOLinkRev = '1.0' | '1.1';
type IODDVersion = 'V1.0' | 'V1.1' | 'V1.2';
