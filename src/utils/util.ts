import {Option} from '@angular/cli/models/interface';

export default {

  formateDate(time) {
    if (!time) {
      return '';
    }
    const date = new Date(time);
    // tslint:disable-next-line:max-line-length
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  },

  pagination(data, callback) {
    return {
      onChange: (current) => {
        callback(current);
      },
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total_count,
      showTotal: () => {
        return `共${data.result.total_count}条`;
      },
      showQuickJumper: true
    };
  },

  // 格式化金额,单位:分(eg:430分=4.30元)
  formatFee(fee, suffix = '') {
    if (!fee) {
      return 0;
    }
    return Number(fee).toFixed(2) + suffix;
  },

  // 格式化公里（eg:3000 = 3公里）
  formatMileage(mileage, text) {
    if (!mileage) {
      return 0;
    }
    if (mileage >= 1000) {
      text = text || ' km';
      return Math.floor(mileage / 100) / 10 + text;
    } else {
      text = text || ' m';
      return mileage + text;
    }
  },

  // 隐藏手机号中间4位
  formatPhone(phone) {
    phone += '';
    return phone.replace(/(\d{3})\d*(\d{4})/g, '$1***$2');
  },

  // 隐藏身份证号中11位
  // tslint:disable-next-line:variable-name
  formatIdentity(number: any) {
    number += '';
    return number.replace(/(\d{3})\d*(\d{4})/g, '$1***********$2');
  },

  /**
   * ETable 行点击通用函数
   * @ param selectedRowKeys
   * @ param selectedRows
   * @ param selectedIds
   */
  updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
    if (selectedIds) {
      this.setState({
        selectedRowKeys,
        selectedIds,
        selectedItem: selectedRows
      });
    } else {
      this.setState({
        selectedRowKeys,
        selectedItem: selectedRows
      });
    }
  },
};
