export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: false,
  menuAlign: 'center',
  align: 'center',
  page:false,
  editBtn: true,
  delBtn: true,
  addBtn: true,
  refreshBtn: true,
  showClomnuBtn: true,
  searchSize: 'mini',
  slot:true,
  emptyBtn:true,
  selection: true,
  // selectable:(row,index)=>{
  //   return index===1;
  // },
  column: [
	 //  {
    //   label: '主键id',
    //   prop: 'id'
    // },
	  {
      label: '所属公司',
      prop: 'company',
      type: 'select',
      dicUrl: '/admin/dict/type/gs',
      disabled:true,
      display:false,
      'search': true
    },
	  {
      label: '开票人',
      prop: 'person',
      type: 'select',
      dicUrl: '/admin/dict/type/kpr',
      disabled:true,
      display:false,
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
      label: '状态',
      prop: 'moneyType',
      type: 'select',
      dicUrl: '/admin/dict/type/m_type',
      search: true,
      disabled:true,

    },
    {
      label: '类型',
      prop: 'type',
      type: 'select',
      dicUrl: '/admin/dict/type/y_type',
      'search': true,
      disabled:true,
    },
	  {
      label: '容量',
      prop: 'ah'
    },
	  {
      label: '单价',
      prop: 'unitPrice',
      type: 'select',
      dicUrl: '/admin/dict/type/dj'
    },
    {
      label: '金额',
      prop: 'money',
      disabled:true
    },

  ],
}
