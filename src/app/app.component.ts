import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  data = [];
  interval;

  ngOnInit() {
    this.data = this.createData(30);
    this.updateData(this.data, 200);
  }

  createData(length = 1) {
    return Array(length)
      .fill(0)
      .map((val) => {
        return {
          value: val,
          color: null
        }
      });
  }

  updateData (data, delay = 500) {
    const update = () => {
      data.map((item) => {
        item.value = Math.floor(Math.random() * 100) + 1;
        item.color = '#' + ((1<<24)*Math.random()|0).toString(16);
        return item;
      });
    };

    this.interval = setInterval(update, delay);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
