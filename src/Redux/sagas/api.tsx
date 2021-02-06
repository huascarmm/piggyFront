import axios from "axios";
import { JsonObjectExpression } from "typescript";

class Api {
  get(url: string): any {
    console.log(url);
  }

  post(url: string, content: JsonObjectExpression): Promise<any> {
    return new Promise((sucess, fail) => {
      axios
        .post(url, { content })
        .then((res) => {
          sucess(res);
        })
        .catch((err) => {
          fail(err.message);
        });
    });
  }
}

export default new Api();
