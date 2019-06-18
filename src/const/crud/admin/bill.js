/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */


export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  editBtn: true,
  delBtn: true,
  addBtn: true,
  refreshBtn: true,
  showClomnuBtn: true,
  slot:true,


  column: [
	 //  {
    //   label: '主键id',
    //   prop: 'id'
    // },
	  {
      label: '所属公司',
      prop: 'company',
      'search': true
    },
	  {
      label: '经手人',
      prop: 'person',
      'search': true
    },
	  {
      label: '买主',
      prop: 'buyer',
      'search': true
    },
	  {
      label: '车牌号',
      prop: 'busNumber',
      'search': true
    },
	  {
      label: '日期',
      type: 'date',
      prop: 'time',

      format: 'yyyy-MM-dd',
      valueFormat: 'yyyy-MM-dd'
    },
	  {
      label: '类型',
      prop: 'type',
      type: 'select',
      dicUrl: '/admin/dict/type/y_type',
      'search': true
    },
	  {
      label: '状态',
      prop: 'moneyType',
      type: 'select',
      dicUrl: '/admin/dict/type/m_type',
      'search': true
    },
	  {
      label: '金额',
      prop: 'money'
    },
	  {
      label: '容量',
      prop: 'ah'
    },
	  {
      label: '单价',
      prop: 'unitPrice'
    },
  ]
}
