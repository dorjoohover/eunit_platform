import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_SORT,
} from 'src/common/const/app.const';

export class PaginationDto {
  page: number = DEFAULT_PAGE;
  limit: number = DEFAULT_LIMIT;
  sort: boolean = DEFAULT_SORT;

  constructor(query: any) {
    this.page = parseInt(query.page) || DEFAULT_PAGE;
    this.limit = parseInt(query.limit) || DEFAULT_LIMIT;
    this.sort = query.sort || DEFAULT_SORT;
  }
}
