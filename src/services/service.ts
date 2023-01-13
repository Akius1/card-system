import http from "../utils/api.utils";

import { IResponseData } from "../types/product.type";

class ProductDataService {

  getAll() {
    return http.get<IResponseData>(`info/assets`);
  }

}

export default new ProductDataService();