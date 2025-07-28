// pagination
export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 20;
export const DEFAULT_SORT = true;

export class Q {
  static PAGE = {
    name: 'page',
    default: DEFAULT_PAGE,
  };
  static LIMIT = {
    name: 'limit',
    default: DEFAULT_LIMIT,
  };
  static SORT = {
    name: 'sort',
    default: DEFAULT_SORT,
  };
}

export class P {
  static ID = {
    name: 'id',
  };
}
