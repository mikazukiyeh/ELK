import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent {
  cities: string[] = ['桃園市', '臺中市', '臺南市', '新北市', '高雄市']; // 添加其他城市

  iframeUrls: { [key: string]: string } = {
    '桃園市': "http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/415b1840-2d1b-11ee-afac-f7bcffaa2a37?_g=(filters:!(('$state':(store:globalState),meta:(alias:!n,disabled:!f,index:be482ab4-7ee9-4cb6-8436-119cc8f6d00c,key:county.keyword,negate:!f,params:(query:%E6%A1%83%E5%9C%92%E5%B8%82),type:phrase),query:(match_phrase:(county.keyword:%E6%A1%83%E5%9C%92%E5%B8%82)))),refreshInterval:(pause:!t,value:0),time:(from:'2023-07-12T07:34:53.486Z',to:now))",
    '臺中市': "http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/415b1840-2d1b-11ee-afac-f7bcffaa2a37?_g=(filters:!(('$state':(store:globalState),meta:(alias:!n,disabled:!f,index:be482ab4-7ee9-4cb6-8436-119cc8f6d00c,key:county.keyword,negate:!f,params:(query:%E8%87%BA%E4%B8%AD%E5%B8%82),type:phrase),query:(match_phrase:(county.keyword:%E8%87%BA%E4%B8%AD%E5%B8%82)))),refreshInterval:(pause:!t,value:0),time:(from:'2023-07-12T07:34:53.486Z',to:now))",
    '臺南市': "http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/415b1840-2d1b-11ee-afac-f7bcffaa2a37?_g=(filters:!(('$state':(store:globalState),meta:(alias:!n,disabled:!f,index:be482ab4-7ee9-4cb6-8436-119cc8f6d00c,key:county.keyword,negate:!f,params:(query:%E8%87%BA%E5%8D%97%E5%B8%82),type:phrase),query:(match_phrase:(county.keyword:%E8%87%BA%E5%8D%97%E5%B8%82)))),refreshInterval:(pause:!t,value:0),time:(from:'2023-07-12T07:34:53.486Z',to:now))",
    '新北市': "http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/415b1840-2d1b-11ee-afac-f7bcffaa2a37?_g=(filters:!(('$state':(store:globalState),meta:(alias:!n,disabled:!f,index:be482ab4-7ee9-4cb6-8436-119cc8f6d00c,key:county.keyword,negate:!f,params:(query:%E6%96%B0%E5%8C%97%E5%B8%82),type:phrase),query:(match_phrase:(county.keyword:%E6%96%B0%E5%8C%97%E5%B8%82)))),refreshInterval:(pause:!t,value:0),time:(from:'2023-07-12T07:34:53.486Z',to:now))",
    '高雄市': "http://34.80.175.10:5601/kibana_iframe/app/dashboards#/view/415b1840-2d1b-11ee-afac-f7bcffaa2a37?_g=(filters:!(('$state':(store:globalState),meta:(alias:!n,disabled:!f,index:be482ab4-7ee9-4cb6-8436-119cc8f6d00c,key:county.keyword,negate:!f,params:(query:%E9%AB%98%E9%9B%84%E5%B8%82),type:phrase),query:(match_phrase:(county.keyword:%E9%AB%98%E9%9B%84%E5%B8%82)))),refreshInterval:(pause:!t,value:0),time:(from:'2023-07-12T07:34:53.486Z',to:now))"
    // 添加其他城市的 URL 映射
  };

  selectedCity: string = '';
  iframeUrl: string = '';

  constructor(private router: Router) { }

  loadCity(city: string): void {
    this.selectedCity = city;
    this.iframeUrl = this.iframeUrls[city] || '';
  }

  navigateToHome(): void {
    this.router.navigateByUrl('/home', { skipLocationChange: true });
  }
}
