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
  searchSize: 'mini',
  slot:true,
  emptyBtn:true,


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
      search: true,
      'search': true
    },
	  {
      label: '开票人',
      prop: 'person',
      type: 'select',
      dicUrl: '/admin/dict/type/kpr',
      search: true,
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
      label: '容量',
      prop: 'ah'
    },
	  {
      label: '单价',
      prop: 'unitPrice'
    },
    {
      label: '金额',
      prop: 'money',
      disabled:true
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
      'search': true
    },
  ]
}
