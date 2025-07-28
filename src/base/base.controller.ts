export class BaseController {
  /**
   * Хуудаслалт, meta, бусад structure-ийг жигд болгоно
   */
  public mapResult(result: any = {}) {
    if (result.meta) {
      // аль хэдийн pagination structure-тэй
      return {
        meta: result.meta,
        items: result.data,
      };
    }

    if (Array.isArray(result.items) && result.total !== undefined) {
      return {
        meta: {
          total: result.total,
          count: result.count,
          limit: result.limit ?? 20,
          page: result.page ?? 1,
        },
        items: result.items,
      };
    }

    // энгийн объект бол шууд буцаана
    return result;
  }
}
