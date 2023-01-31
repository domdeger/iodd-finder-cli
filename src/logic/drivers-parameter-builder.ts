export class DriversParameterBuilder {
  static paginatedForVendor(vendorName: string, page: number) {
    return {
      status: 'APPROVED',
      size: 20,
      vendorName,
      page,
    };
  }
}
