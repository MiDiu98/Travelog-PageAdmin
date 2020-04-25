import { environment } from 'src/environments/environment.local';

export  class Constant {
  public static URL_API = environment.backendPath;
  public static PORT = environment.backendPort;
  public static PREFIX = "api";

  //192.168.78.114:9999/API
  public static COMMON_URL = [Constant.URL_API, Constant.PREFIX].join('/');

  public static LOGIN_URL = [Constant.URL_API, Constant.PREFIX, 'admin', 'login'].join('/');
}
