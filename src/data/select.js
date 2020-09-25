import { reactive } from 'vue'

const select = reactive([{
    title: '从事建筑活动的专业技术人员，应当（ ）从事建筑活动',
    list: [{
        code: 'A',
        value: '依法取得相应的执业资格证书，但可在执业资格证书许可的范围外'
      },
      {
        code: 'B',
        value: '依法取得相应的执业资格证书，并在执业资格证书许可的范围内'
      },
      {
        code: 'C',
        value: '不必取得执业资格证书'
      },
      {
        code: 'D',
        value: '依法取得相应的职业资格证书，但可在执业资格证书许可的范围外'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '建筑工程总承包单位可以将承包工程中的（ ）工程发包给具有相应资质条件的分包单位',
    list: [{
        code: 'A',
        value: '全部'
      },
      {
        code: 'B',
        value: '部分'
      },
      {
        code: 'C',
        value: '绝大部分'
      },
      {
        code: 'D',
        value: '任意比例部分'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '实行监理的建筑工程，由（ ）委托具有相应资质条件的工程监理单位监理',
    list: [{
        code: 'A',
        value: '总承包单位'
      },
      {
        code: 'B',
        value: '分包单位'
      },
      {
        code: 'C',
        value: '建设单位'
      },
      {
        code: 'D',
        value: '各级人民政府建设行政主管部门'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '（ ）负责建筑安全生产的管理',
    list: [{
        code: 'A',
        value: '劳动行政主管部门'
      },
      {
        code: 'B',
        value: '建筑业协会'
      },
      {
        code: 'C',
        value: '建设行政主管部门'
      },
      {
        code: 'D',
        value: '国务院'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '施工中发生事故时，（ ）应当采取紧急措施减少人员伤亡和事故损失，并按照国家有关规定及时向有关部门报告',
    list: [{
        code: 'A',
        value: '建设单位'
      },
      {
        code: 'B',
        value: '监理单位'
      },
      {
        code: 'C',
        value: '相关责任人员'
      },
      {
        code: 'D',
        value: '建筑施工企业'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '(　)应当加强对安全生产工作的领导，建立健全安全生产工作协调机制',
    list: [{
        code: 'A',
        value: '国务院和地方各级人民政府'
      },
      {
        code: 'B',
        value: '县级以上人民政府'
      },
      {
        code: 'C',
        value: '地方各级人民政府'
      },
      {
        code: 'D',
        value: '国务院和县级以上地方各级人民政府'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '有关协会组织依照法律、行政法规和章程，为生产经营单位提供安全生产方面的信息、培训等服务，发挥( )作用，促进生产经营单位加强安全生产管理',
    list: [{
        code: 'A',
        value: '约束'
      },
      {
        code: 'B',
        value: '自律'
      },
      {
        code: 'C',
        value: '监督'
      },
      {
        code: 'D',
        value: '协调'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '生产经营单位应当具备的安全生产条件所必需的资金投入，由生产经营单位的决策机构、( )，并对由于安全生产所必需的资金投入不足导致的后果承担责任',
    list: [{
        code: 'A',
        value: '主要负责人或者个人经营的投资人予以保证'
      },
      {
        code: 'B',
        value: '相关负责人或者集体经营的投资人予以保证'
      },
      {
        code: 'C',
        value: '相关负责人或者个人经营的投资人予以保证'
      },
      {
        code: 'D',
        value: '主要负责人或者集体经营的投资人予以保证'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '从业人员发现直接危及人身安全的紧急情况时，有权停止作业或者在采取可能的应急措施后(　)作业场所',
    list: [{
        code: 'A',
        value: '撤离'
      },
      {
        code: 'B',
        value: '不能撤离'
      },
      {
        code: 'C',
        value: '保护'
      },
      {
        code: 'D',
        value: '检查'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '因生产安全事故受到损害的从业人员，除依法享有工伤保险外，依照有关民事法律尚有获得赔偿的权利的，有权向本单位提出（ ）',
    list: [{
        code: 'A',
        value: '任何要求'
      },
      {
        code: 'B',
        value: '保护要求'
      },
      {
        code: 'C',
        value: '辞职要求'
      },
      {
        code: 'D',
        value: '赔偿要求'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '从业人员在作业过程中，应当严格遵守本单位的安全生产操作规程，服从管理，正确佩戴和使用（ ）',
    list: [{
        code: 'A',
        value: '劳动生产用品'
      },
      {
        code: 'B',
        value: '劳动防护用品'
      },
      {
        code: 'C',
        value: '劳动标识'
      },
      {
        code: 'D',
        value: '劳动联系工具'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '生产经营单位的主要负责人未履行《中华人民共和国安全生产法》规定的安全生产管理职责的，责令限期改正；逾期未改正的，处二万元以上五万元以下的罚款，责令( )',
    list: [{
        code: 'A',
        value: '交纳罚款'
      },
      {
        code: 'B',
        value: '生产经营单位停产停业整顿'
      },
      {
        code: 'C',
        value: '停业'
      },
      {
        code: 'D',
        value: '破产'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '生产经营单位的从业人员不服从管理，违反安全生产规章制度或者操作规程的，由生产经营单位给予批评教育，依照有关规章制度给予处分；构成犯罪的，依照法律有关规定追究(　)',
    list: [{
        code: 'A',
        value: '行政责任'
      },
      {
        code: 'B',
        value: '刑事责任'
      },
      {
        code: 'C',
        value: '民事责任'
      },
      {
        code: 'D',
        value: '赔偿责任'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '为了提高城市形象，完善城市功能，经有关部门批准拟拆除某写字楼，下列关于拆除写字楼的说法正确的是（ ）',
    list: [{
        code: 'A',
        value: '施工单位拆除写字楼前，应得到工程所在地的建设行政主管部门批准'
      },
      {
        code: 'B',
        value: '拆除写字楼前，施工单位应到工程所在地的建设行政主管部门备案'
      },
      {
        code: 'C',
        value: '建设单位拆除写字楼前，应持有关资料报工程所在地的建设行政主管部门批准'
      },
      {
        code: 'D',
        value: '在拆除写字楼前，建设单位应持有关资料报工程所在地的建设行政主管部门备案'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '某重点工程按照法律规定不需办理施工许可证，持有开工报告即可开工建设，下列说法正确的是（ ）',
    list: [{
        code: 'A',
        value: '建设单位应将保证安全施工的措施报送开工报告发证机构审查'
      },
      {
        code: 'B',
        value: '建设单位应将保证安全施工的措施报送开工报告发证机构备案'
      },
      {
        code: 'C',
        value: '建设单位应将保证安全施工的措施报送建设行政主管部门批准'
      },
      {
        code: 'D',
        value: '建设单位应将保证安全施工的措施报送建设行政主管部门备案'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '根据《建设工程安全生产管理条例》，依法批准开工报告的建设工程，建设单位应当自开工报告批准之日起（ ）日内，将保证安全施工的措施报送建设工程所在地的县级以上地方人民政府建设行政主管部门或者其他有关部门备案',
    list: [{
        code: 'A',
        value: '7'
      },
      {
        code: 'B',
        value: '10'
      },
      {
        code: 'C',
        value: '15'
      },
      {
        code: 'D',
        value: '28'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '根据《建设工程安全生产管理条例》，施工单位应当设立（ ），配备专职安全生产管理人员',
    list: [{
        code: 'A',
        value: '安全生产管理机构'
      },
      {
        code: 'B',
        value: '安全生产监督机构'
      },
      {
        code: 'C',
        value: '安全生产实施机构'
      },
      {
        code: 'D',
        value: '安全生产保障机构'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '根据《建设工程安全生产管理条例》，专职安全生产管理人员对违章指挥、违章操作的，应当（ ）',
    list: [{
        code: 'A',
        value: '立即上报'
      },
      {
        code: 'B',
        value: '处以罚款'
      },
      {
        code: 'C',
        value: '立即制止'
      },
      {
        code: 'D',
        value: '给予处分'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '专职安全生产管理人员的配备办法由（ ）会同其他有关部门制定',
    list: [{
        code: 'A',
        value: '企业负责人'
      },
      {
        code: 'B',
        value: '地方政府'
      },
      {
        code: 'C',
        value: '国务院建设行政主管部门'
      },
      {
        code: 'D',
        value: '项目经理部'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '施工现场暂时停止施工的，施工单位应当做好现场防护，所需费用由（ ）承担或按合同约定执行',
    list: [{
        code: 'A',
        value: '设计方'
      },
      {
        code: 'B',
        value: '施工方'
      },
      {
        code: 'C',
        value: '责任方'
      },
      {
        code: 'D',
        value: '业主方'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '根据《建设工程安全生产管理条例》，分包单位应当服从总承包单位的安全生产管理，分包单位不服从管理导致生产安全事故的，由分包单位承担（ ）',
    list: [{
        code: 'A',
        value: '全部责任'
      },
      {
        code: 'B',
        value: '合同中约定的责任'
      },
      {
        code: 'C',
        value: '一般责任'
      },
      {
        code: 'D',
        value: '主要责任'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '根据《建设工程安全生产管理条例》，施工单位应当自施工起重机械验收合格之日起（ ）日内，向建设行政主管部门或者其他有关部门登记',
    list: [{
        code: 'A',
        value: '10'
      },
      {
        code: 'B',
        value: '20'
      },
      {
        code: 'C',
        value: '28'
      },
      {
        code: 'D',
        value: '30'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '根据《建设工程安全生产管理条例》，作业人员进入新的岗位或者新的施工现场前，应当接受（ ）',
    list: [{
        code: 'A',
        value: '质量教育'
      },
      {
        code: 'B',
        value: '安全生产教育培训'
      },
      {
        code: 'C',
        value: '生产教育培训'
      },
      {
        code: 'D',
        value: '机械操作规程培训'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '建设工程实行施工总承包的，由总承包单位统一组织编制建设工程生产安全事故应急救援预案，工程(　)按照应急救援预案，建立应急救援组织或者配备应急救援人员，配备救援器材、设备，并定期组织演练',
    list: [{
        code: 'A',
        value: '总承包单位'
      },
      {
        code: 'B',
        value: '分包单位'
      },
      {
        code: 'C',
        value: '施工单位'
      },
      {
        code: 'D',
        value: '总承包单位和分包单位'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '违反《建设工程安全生产管理条例》的规定，施工单位的主要负责人、项目负责人、专职安全生产管理人员、作业人员或者特种作业人员，未经安全教育培训或者经考核不合格即从事相关工作的，责令限期改正；逾期未改正的，责令停业整顿，依照《中华人民共和国安全生产法》的有关规定处以罚款；造成重大安全事故，构成犯罪的，对直接责任人员，依照刑法有关规定追究(　)',
    list: [{
        code: 'A',
        value: '民事责任'
      },
      {
        code: 'B',
        value: '行政责任'
      },
      {
        code: 'C',
        value: '刑事责任'
      },
      {
        code: 'D',
        value: '赔偿责任'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '《建设工程安全生产管理条例》规定的(　)，由建设行政主管部门或者其他有关部门依照法定职权决定',
    list: [{
        code: 'A',
        value: '民事责任'
      },
      {
        code: 'B',
        value: '行政责任'
      },
      {
        code: 'C',
        value: '刑事责任'
      },
      {
        code: 'D',
        value: '赔偿责任'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '根据《建设工程安全生产管理条例》，违反消防安全管理规定的行为，由(　)依法处罚',
    list: [{
        code: 'A',
        value: '人民法院'
      },
      {
        code: 'B',
        value: '检察机关'
      },
      {
        code: 'C',
        value: '安全监督机构'
      },
      {
        code: 'D',
        value: '公安消防机构'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '安全生产许可证有效期满需要延期的，企业应当于期满前（ ）个月向原安全生产许可证颁发管理机关办理延期手续',
    list: [{
        code: 'A',
        value: '3'
      },
      {
        code: 'B',
        value: '6'
      },
      {
        code: 'C',
        value: '9'
      },
      {
        code: 'D',
        value: '12'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '安全生产许可证有效期满未办理延期手续，继续进行生产的，责令停止生产，限期补办延期手续，没收违法所得，并处(　)的罚款；逾期仍不办理延期手续，继续进行生产的，依照《安全生产许可证条例》第十九条的规定处罚',
    list: [{
        code: 'A',
        value: '3万元以上10万元以下'
      },
      {
        code: 'B',
        value: '1万元以上5万元以下'
      },
      {
        code: 'C',
        value: '5万元以上10万元以下'
      },
      {
        code: 'D',
        value: '5万元以上7万元以下'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '根据（ ）和有关法律，制定《生产安全事故报告和调查处理条例》',
    list: [{
        code: 'A',
        value: '《建筑法》'
      },
      {
        code: 'B',
        value: '《中华人民共和国安全生产法》'
      },
      {
        code: 'C',
        value: '《建筑工程安全生产管理条例》'
      },
      {
        code: 'D',
        value: '《建设工程质量管理条例》'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '事故发生后，事故现场有关人员应当（ ）向本单位负责人报告',
    list: [{
        code: 'A',
        value: '立即'
      },
      {
        code: 'B',
        value: '1小时内'
      },
      {
        code: 'C',
        value: '2小时内'
      },
      {
        code: 'D',
        value: '3小时内'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '事故发生后，单位负责人接到报告后，应当于（ ）向事故发生地县级以上人民政府安全生产监督管理部门和负有安全生产监督管理职责的有关部门报告',
    list: [{
        code: 'A',
        value: '立即'
      },
      {
        code: 'B',
        value: '1小时内'
      },
      {
        code: 'C',
        value: '2小时内'
      },
      {
        code: 'D',
        value: '3小时内'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '国务院安全生产监督管理部门和负有安全生产监督管理职责的有关部门以及省级人民政府接到发生特别重大事故、重大事故的报告后，应当（ ）报告国务院',
    list: [{
        code: 'A',
        value: '立即'
      },
      {
        code: 'B',
        value: '1小时内'
      },
      {
        code: 'C',
        value: '2小时内'
      },
      {
        code: 'D',
        value: '3小时内'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '（ ）由国务院或者国务院授权有关部门组织事故调查组进行调查',
    list: [{
        code: 'A',
        value: '重大事故'
      },
      {
        code: 'B',
        value: '较大事故'
      },
      {
        code: 'C',
        value: '特别重大事故'
      },
      {
        code: 'D',
        value: '一般事故'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '（ ）由事故发生地省级人民政府负责调查',
    list: [{
        code: 'A',
        value: '重大事故'
      },
      {
        code: 'B',
        value: '较大事故'
      },
      {
        code: 'C',
        value: '特别重大事故'
      },
      {
        code: 'D',
        value: '一般事故'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '重大事故、较大事故、一般事故，负责事故调查的人民政府应当自收到事故调查报告之日起（ ）内作出批复',
    list: [{
        code: 'A',
        value: '5日'
      },
      {
        code: 'B',
        value: '10日'
      },
      {
        code: 'C',
        value: '15日'
      },
      {
        code: 'D',
        value: '30日'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '《生产安全事故报告和调查处理条例》规定，事故发生单位对事故发生负有责任的，发生（ ）的，处200万元以上500万元以下的罚款',
    list: [{
        code: 'A',
        value: '一般事故'
      },
      {
        code: 'B',
        value: '较大事故'
      },
      {
        code: 'C',
        value: '重大事故'
      },
      {
        code: 'D',
        value: '特别重大事故'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '《生产安全事故报告和调查处理条例》规定，事故发生单位主要负责人未依法履行安全生产管理职责，导致事故发生的，发生（ ）的，处上一年年收入60％的罚款；属于国家工作人员的，并依法给予处分；构成犯罪的，依法追究刑事责任',
    list: [{
        code: 'A',
        value: '一般事故'
      },
      {
        code: 'B',
        value: '较大事故'
      },
      {
        code: 'C',
        value: '重大事故'
      },
      {
        code: 'D',
        value: '特别重大事故'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '事故发生单位及其有关人员（ ），对事故发生单位处100万元以上500万元以下的罚款',
    list: [{
        code: 'A',
        value: '不立即组织事故抢救的'
      },
      {
        code: 'B',
        value: '迟报或者漏报事故的'
      },
      {
        code: 'C',
        value: '在事故调查处理期间擅离职守的'
      },
      {
        code: 'D',
        value: '伪造或者故意破坏事故现场的'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '事故发生单位及其有关人员转移、隐匿资金、财产，或者销毁有关证据、资料的，对事故发生单位处（ ）的罚款',
    list: [{
        code: 'A',
        value: '100～500万元'
      },
      {
        code: 'B',
        value: '200～500万元'
      },
      {
        code: 'C',
        value: '300～600万元'
      },
      {
        code: 'D',
        value: '400～700万元'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '根据《建筑起重机械安全监督管理规定》，建筑起重机械安装完毕后，(　)应当组织出租、安装、监理等有关单位进行验收，或者委托具有相应资质的检验检测机构进行验收',
    list: [{
        code: 'A',
        value: '建设单位'
      },
      {
        code: 'B',
        value: '使用单位'
      },
      {
        code: 'C',
        value: '安装单位'
      },
      {
        code: 'D',
        value: '主管部门'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '投标方安全防护、文明施工措施的报价，不得低于依据工程所在地工程造价管理机构测定费率计算所需费用总额的(　)',
    list: [{
        code: 'A',
        value: '80％'
      },
      {
        code: 'B',
        value: '85％'
      },
      {
        code: 'C',
        value: '90％'
      },
      {
        code: 'D',
        value: '95％'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '建设单位与施工单位在施工合同中对安全防护、文明施工措施费用预付、支付计划未作约定或约定不明的，合同工期在一年以上的(含一年)，预付安全防护、文明施工措施费用不得低于该费用总额的(　)，其余费用应当按照施工进度支付',
    list: [{
        code: 'A',
        value: '20％'
      },
      {
        code: 'B',
        value: '30％'
      },
      {
        code: 'C',
        value: '40％'
      },
      {
        code: 'D',
        value: '50％'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '实行施工总承包的工程项目，施工总承包企业应加强对施工现场内( )劳动保护用品的监督检查',
    list: [{
        code: 'A',
        value: '特种作业人员'
      },
      {
        code: 'B',
        value: '管理人员'
      },
      {
        code: 'C',
        value: '所有施工作业人员'
      },
      {
        code: 'D',
        value: '外来人员'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '监理单位要加强对施工现场劳动保护用品的监督检查。发现有不使用、或使用不符合要求的劳动保护用品，应责令相关企业立即改正。对拒不改正的，应当向(　)报告',
    list: [{
        code: 'A',
        value: '建设行政主管部门'
      },
      {
        code: 'B',
        value: '建设单位'
      },
      {
        code: 'C',
        value: '相关协会'
      },
      {
        code: 'D',
        value: '设计单位'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '根据《建筑起重机械备案登记办法》规定，施工总承包单位、监理单位应当在收到安装单位提交的齐全有效的资料之日起(　)个工作日内审核完毕并签署意见',
    list: [{
        code: 'A',
        value: '1'
      },
      {
        code: 'B',
        value: '2'
      },
      {
        code: 'C',
        value: '3'
      },
      {
        code: 'D',
        value: '5'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '根据《建筑起重机械备案登记办法》规定，使用登记机关应当自收到使用单位提交的资料之日起(　)个工作日内，对于符合登记条件且资料齐全的建筑起重机械核发建筑起重机械使用登记证明',
    list: [{
        code: 'A',
        value: '3'
      },
      {
        code: 'B',
        value: '5'
      },
      {
        code: 'C',
        value: '7'
      },
      {
        code: 'D',
        value: '10'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '建筑施工企业安全生产管理机构专职安全生产管理人员的配备应满足要求，并应根据企业经营规模、设备管理和生产需要予以增加。建筑施工总承包特级资质不少于(　)人',
    list: [{
        code: 'A',
        value: '4'
      },
      {
        code: 'B',
        value: '5'
      },
      {
        code: 'C',
        value: '6'
      },
      {
        code: 'D',
        value: '7'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '总承包单位要按照规定配备项目专职安全生产管理人员，1万～5万平方米的建筑工程配备不少于(　)人',
    list: [{
        code: 'A',
        value: '1'
      },
      {
        code: 'B',
        value: '2'
      },
      {
        code: 'C',
        value: '3'
      },
      {
        code: 'D',
        value: '4'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '《建设工程高大模板支撑系统施工安全监督管理导则》规定，对承重杆件的外观抽检数量不得低于搭设用量的（ ），发现质量不符合标准、情况严重的，要进行100％的检验',
    list: [{
        code: 'A',
        value: '5％'
      },
      {
        code: 'B',
        value: '10％'
      },
      {
        code: 'C',
        value: '30％'
      },
      {
        code: 'D',
        value: '40％'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '危险性较大分部分项工程施工期间，项目经理未在现场带班的，一次记（　）',
    list: [{
        code: 'A',
        value: '12分'
      },
      {
        code: 'B',
        value: '6分'
      },
      {
        code: 'C',
        value: '3分'
      },
      {
        code: 'D',
        value: '1分'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '建筑施工项目经理（以下简称项目经理）质量安全违法违规行为记分周期为（　），满分为12分',
    list: [{
        code: 'A',
        value: '12个月'
      },
      {
        code: 'B',
        value: '6个月'
      },
      {
        code: 'C',
        value: '实际工期'
      },
      {
        code: 'D',
        value: '合同工期'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '要严格安全生产准入前置条件，把符合(　)作为高危行业企业准入的前置条件',
    list: [{
        code: 'A',
        value: '安全生产许可证'
      },
      {
        code: 'B',
        value: '安全生产管理措施'
      },
      {
        code: 'C',
        value: '安全生产标准'
      },
      {
        code: 'D',
        value: '安全生产技术措施'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '浙江省《关于进一步加强安全生产工作的意见》要求通过四年的努力，企业负责人、安全管理人员的培训率达到(　)',
    list: [{
        code: 'A',
        value: '85％'
      },
      {
        code: 'B',
        value: '90％'
      },
      {
        code: 'C',
        value: '95％'
      },
      {
        code: 'D',
        value: '100％'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '根据省建设厅《关于切实加强建设工程领域安全生产工作的意见》，（ ）部门负责建设工程领域安全生产的综合监督管理',
    list: [{
        code: 'A',
        value: '安监'
      },
      {
        code: 'B',
        value: '建设'
      },
      {
        code: 'C',
        value: '发展改革'
      },
      {
        code: 'D',
        value: '工商'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '根据省建设厅《关于切实加强建设工程领域安全生产工作的意见》，未作约定或约定不明的，合同工期在一年以内的，建设单位预付安全防护、文明施工措施费用不得低于该项费用总额的（ ）',
    list: [{
        code: 'A',
        value: '10％'
      },
      {
        code: 'B',
        value: '30％'
      },
      {
        code: 'C',
        value: '50％'
      },
      {
        code: 'D',
        value: '70％'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '根据省建设厅《关于切实加强建设工程领域安全生产工作的意见》，要按照公开、公平、公正、（ ）的原则，积极创新招投标方式，实行综合最优价中标',
    list: [{
        code: 'A',
        value: '合法'
      },
      {
        code: 'B',
        value: '合理'
      },
      {
        code: 'C',
        value: '诚信'
      },
      {
        code: 'D',
        value: '择优'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '浙江省委省政府《关于加强安全生产促进安全发展的意见》（浙委发〔2014〕5号）提出，要加强对各项基本建设程序执行情况的检查和（　）的安全监管，落实重大项目重要部位、重点环节的监控措施',
    list: [{
        code: 'A',
        value: '建筑施工现场'
      },
      {
        code: 'B',
        value: '建筑施工企业'
      },
      {
        code: 'C',
        value: '建筑设计单位'
      },
      {
        code: 'D',
        value: '建筑责任主体'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '针对较大事故多发易发部位、环节的现状，通过创新管理方式、方法，采用系统、综合的治理举措，深入开展安全生产较大事故防控专项行动，全面加强安全生产重点行业事故隐患整治，切实增强（　）',
    list: [{
        code: 'A',
        value: '事故防控能力'
      },
      {
        code: 'B',
        value: '事故防止能力'
      },
      {
        code: 'C',
        value: '事故处理能力'
      },
      {
        code: 'D',
        value: '事故控制能力'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '各地建设行政主管部门要牢固树立安全发展理念，始终把（　）放在首位',
    list: [{
        code: 'A',
        value: '效益'
      },
      {
        code: 'B',
        value: '生命安全'
      },
      {
        code: 'C',
        value: '利益'
      },
      {
        code: 'D',
        value: '质量'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '在斜坡上挖土方，应做成坡势以利（ ）',
    list: [{
        code: 'A',
        value: '蓄水'
      },
      {
        code: 'B',
        value: '泄水'
      },
      {
        code: 'C',
        value: '省力'
      },
      {
        code: 'D',
        value: '行走'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '采用钢筋混凝土灌注桩时，开挖标准是桩身混凝土达到（ ）',
    list: [{
        code: 'A',
        value: '设计强度后'
      },
      {
        code: 'B',
        value: '混凝土灌注72h'
      },
      {
        code: 'C',
        value: '混凝土灌注24h'
      },
      {
        code: 'D',
        value: '混凝土凝固后'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '进场土方开挖施工机械应由（ ）检查验收合格后方可作业，并应有验收记录',
    list: [{
        code: 'A',
        value: '施工企业安全管理部门'
      },
      {
        code: 'B',
        value: '施工现场项目经理'
      },
      {
        code: 'C',
        value: '施工现场安全管理人员'
      },
      {
        code: 'D',
        value: '施工企业技术管理部门'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '钢支撑体系施工时，钢支撑节点应具有（ ）试验报告',
    list: [{
        code: 'A',
        value: '安全性能'
      },
      {
        code: 'B',
        value: '稳定性能'
      },
      {
        code: 'C',
        value: '破坏性能'
      },
      {
        code: 'D',
        value: '承载力'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '土钉墙支护的土钉钢筋宜采用（ ）',
    list: [{
        code: 'A',
        value: 'I级钢筋'
      },
      {
        code: 'B',
        value: 'Ⅱ、Ⅲ级钢筋'
      },
      {
        code: 'C',
        value: '钢丝束'
      },
      {
        code: 'D',
        value: '钢绞线'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '土钉墙支护的土钉钢筋直径宜为（ ）',
    list: [{
        code: 'A',
        value: '8～20㎜'
      },
      {
        code: 'B',
        value: '12～28㎜'
      },
      {
        code: 'C',
        value: '10～30㎜'
      },
      {
        code: 'D',
        value: '16～32㎜'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '土层锚杆预应力张拉至设计荷载的（ ）后，再按设计要求锁定',
    list: [{
        code: 'A',
        value: '0.75～0.9倍'
      },
      {
        code: 'B',
        value: '0.7～0.8倍'
      },
      {
        code: 'C',
        value: '0.9 ～1.0倍'
      },
      {
        code: 'D',
        value: '0.8～0.9倍'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '临时性挖方砂土(不包括细砂、粉砂)边坡值应为（ ）',
    list: [{
        code: 'A',
        value: '1：1.25～1：1.50'
      },
      {
        code: 'B',
        value: '1：1.00～l：1.25'
      },
      {
        code: 'C',
        value: '1：0.75～1：1.00'
      },
      {
        code: 'D',
        value: '1：0.50～1：1.00'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '顶管法顶进长度超过（ ）应有预防缺氧、窒息的措施',
    list: [{
        code: 'A',
        value: '20m'
      },
      {
        code: 'B',
        value: '30m'
      },
      {
        code: 'C',
        value: '40m'
      },
      {
        code: 'D',
        value: '50m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '顶管施工时，氧气瓶与乙炔瓶不得 （ ）',
    list: [{
        code: 'A',
        value: '进入坑内'
      },
      {
        code: 'B',
        value: '乱放'
      },
      {
        code: 'C',
        value: '混放'
      },
      {
        code: 'D',
        value: '压在一起'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '盾构机头部每天都应检测可燃气体的浓度，做到预测、预防和序控工作，并做好（ ）',
    list: [{
        code: 'A',
        value: '计划工作'
      },
      {
        code: 'B',
        value: '记录台账'
      },
      {
        code: 'C',
        value: '检测到位'
      },
      {
        code: 'D',
        value: '专人负责'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '扣件式钢管的底座，其抗压承载力设计值为（ ）',
    list: [{
        code: 'A',
        value: '20kN'
      },
      {
        code: 'B',
        value: '30kN'
      },
      {
        code: 'C',
        value: '40kN'
      },
      {
        code: 'D',
        value: '50kN'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '当验算模板及其支架的刚度时，结构表面隐蔽的模板，其最大变形值不应超过模板构件计算跨度的（ ）',
    list: [{
        code: 'A',
        value: '1／200'
      },
      {
        code: 'B',
        value: '1／250'
      },
      {
        code: 'C',
        value: '1／300'
      },
      {
        code: 'D',
        value: '1／400'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '木支架受压立杆除满足计算需要外，其梢直径不得少于（ ）',
    list: [{
        code: 'A',
        value: '50mm'
      },
      {
        code: 'B',
        value: '60mm'
      },
      {
        code: 'C',
        value: '70mm'
      },
      {
        code: 'D',
        value: '80mm'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '模板结构中钢、木杆件受拉时长细比分别不应大于（ ）',
    list: [{
        code: 'A',
        value: '450，300'
      },
      {
        code: 'B',
        value: '350，250'
      },
      {
        code: 'C',
        value: '250，150'
      },
      {
        code: 'D',
        value: '150，100'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '多排扣件式钢管模板支架，四周应设通长竖向剪刀撑，中间纵横方向每隔（ ）应设置一道竖向剪刀撑',
    list: [{
        code: 'A',
        value: '4～5个立杆间距或5～7m'
      },
      {
        code: 'B',
        value: '6～8个立杆间距或7～9m'
      },
      {
        code: 'C',
        value: '8～10个立杆间距或8～10m'
      },
      {
        code: 'D',
        value: '2～4个立杆间距或2～4m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '扣件式钢管支架高于（ ）时应设置水平剪刀撑',
    list: [{
        code: 'A',
        value: '7.0m'
      },
      {
        code: 'B',
        value: '6.0m'
      },
      {
        code: 'C',
        value: '5.0m'
      },
      {
        code: 'D',
        value: '4.0m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '现浇钢筋混凝土梁、板，当设计无具体要求时，起拱高度可为全跨度的（ ）',
    list: [{
        code: 'A',
        value: '1／100～3／1000'
      },
      {
        code: 'B',
        value: '1／1000～3／1000'
      },
      {
        code: 'C',
        value: '1／1000～1／1500'
      },
      {
        code: 'D',
        value: '1／1500～1／2000'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '木立柱水平拉杆及剪刀撑若采用木板时，其截面尺寸不应小于（ ）',
    list: [{
        code: 'A',
        value: '25mm×80mm'
      },
      {
        code: 'B',
        value: '20mm×60mm'
      },
      {
        code: 'C',
        value: '25mm×50mm'
      },
      {
        code: 'D',
        value: '20mm×70mm'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '吊挂和捆绑用钢丝绳的安全系数是（ ）',
    list: [{
        code: 'A',
        value: '2.5'
      },
      {
        code: 'B',
        value: '3.5'
      },
      {
        code: 'C',
        value: '6'
      },
      {
        code: 'D',
        value: '8'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '多次弯曲造成的（ ）是钢丝绳破坏的主要原因之一',
    list: [{
        code: 'A',
        value: '拉伸'
      },
      {
        code: 'B',
        value: '扭转'
      },
      {
        code: 'C',
        value: '变形'
      },
      {
        code: 'D',
        value: '弯曲疲劳'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '千斤顶是一种用比较小的力就能把重物升高、降低或移动的简单机具，结构简单，使用方便，承载能力可从1～300t，顶升高度一般为（ ），顶升速度可达10～35mm／min',
    list: [{
        code: 'A',
        value: '1200mm'
      },
      {
        code: 'B',
        value: '900mm'
      },
      {
        code: 'C',
        value: '600mm'
      },
      {
        code: 'D',
        value: '300mm'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '手拉葫芦的起重链条直径磨损超过（ ）应予报废更新',
    list: [{
        code: 'A',
        value: '5％'
      },
      {
        code: 'B',
        value: '8％'
      },
      {
        code: 'C',
        value: '9％'
      },
      {
        code: 'D',
        value: '10％'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '手拉葫芦的提升机构是靠（ ）工作的',
    list: [{
        code: 'A',
        value: '链轮'
      },
      {
        code: 'B',
        value: '手拉链'
      },
      {
        code: 'C',
        value: '起重链'
      },
      {
        code: 'D',
        value: '齿轮传动装置'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '汽车式起重机约70％以上的翻车事故是因（ ）造成的，因此，在使用汽车起重机时应特别引起重视',
    list: [{
        code: 'A',
        value: '大风'
      },
      {
        code: 'B',
        value: '超载或支腿陷落'
      },
      {
        code: 'C',
        value: '道路不平'
      },
      {
        code: 'D',
        value: '无人指挥'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '在国内200t以上高大工件的吊装很少使用大型吊车，300t以上高大工件的吊装极少采用大型吊车，主要是由于（ ）',
    list: [{
        code: 'A',
        value: '经济实力和装备水平的限制'
      },
      {
        code: 'B',
        value: '占地面积的限制'
      },
      {
        code: 'C',
        value: '地基地耐力的限制'
      },
      {
        code: 'D',
        value: '吊装工艺的限制'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '滑移法在滑行中发现异常情况，（ ）',
    list: [{
        code: 'A',
        value: '可以不加理会，继续滑移'
      },
      {
        code: 'B',
        value: '必须立即停滑，静止一段时间后继续滑移'
      },
      {
        code: 'C',
        value: '必须立即停滑，找出原因方可继续滑移'
      },
      {
        code: 'D',
        value: '可以边滑移，边找原因'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '拆除施工采用的脚手架、安全网，必须由（ ）搭设，经有关人员验收合格后，方可使用',
    list: [{
        code: 'A',
        value: '安全部门'
      },
      {
        code: 'B',
        value: '专业人员'
      },
      {
        code: 'C',
        value: '施工人员'
      },
      {
        code: 'D',
        value: '技术部门'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '作业人员必须配备相应的（ ）用品，并正确使用',
    list: [{
        code: 'A',
        value: '生产'
      },
      {
        code: 'B',
        value: '安全'
      },
      {
        code: 'C',
        value: '防护'
      },
      {
        code: 'D',
        value: '个人劳动保护'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '推土机在深沟、基坑或陡坡地区作业时，其垂直边坡深度一般不超过（ ），否则应放出安全边坡',
    list: [{
        code: 'A',
        value: '2.0m'
      },
      {
        code: 'B',
        value: '2.5m'
      },
      {
        code: 'C',
        value: '3.0m'
      },
      {
        code: 'D',
        value: '5.0m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '挖掘机在拉铲或反铲作业时，履带距工作面边缘距离应大于（ ）',
    list: [{
        code: 'A',
        value: '0.5m'
      },
      {
        code: 'B',
        value: '1m'
      },
      {
        code: 'C',
        value: '1.5m'
      },
      {
        code: 'D',
        value: '2m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '轮胎压路机最适于碾压（ ）',
    list: [{
        code: 'A',
        value: '沥青路面'
      },
      {
        code: 'B',
        value: '砂土层　'
      },
      {
        code: 'C',
        value: '黏土层'
      },
      {
        code: 'D',
        value: '碎石层'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '振动压路机的生产效率相当于静作用压路机的（ ）倍',
    list: [{
        code: 'A',
        value: '7～8'
      },
      {
        code: 'B',
        value: '5～6'
      },
      {
        code: 'C',
        value: '3～4'
      },
      {
        code: 'D',
        value: '1～2'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '泵送混凝土过程中，因供料中断被迫暂停时，停机时间不得超过（ ）min',
    list: [{
        code: 'A',
        value: '20'
      },
      {
        code: 'B',
        value: '30'
      },
      {
        code: 'C',
        value: '40'
      },
      {
        code: 'D',
        value: '50'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '作业时，振动棒插入混凝土中的深度不应超过（ ）',
    list: [{
        code: 'A',
        value: '1／3～2／3'
      },
      {
        code: 'B',
        value: '1／3～1／2'
      },
      {
        code: 'C',
        value: '2／3～3／4'
      },
      {
        code: 'D',
        value: '3／4～4／5'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '混凝土搅拌机每次加入的拌合料，不得超过搅拌机规定值的（ ）',
    list: [{
        code: 'A',
        value: '20%'
      },
      {
        code: 'B',
        value: '15%'
      },
      {
        code: 'C',
        value: '5%'
      },
      {
        code: 'D',
        value: '10%'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '振动棒各插点间距应均匀，一般间距不超过振动棒有效作业半径的（ ）倍',
    list: [{
        code: 'A',
        value: '1.5'
      },
      {
        code: 'B',
        value: '2'
      },
      {
        code: 'C',
        value: '2.5'
      },
      {
        code: 'D',
        value: '3'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '塔式起重机最基本的工作机构包括（ ）',
    list: [{
        code: 'A',
        value: '起升机构、变幅机构、回转机构和行走机构'
      },
      {
        code: 'B',
        value: '起升机构、限位机构、回转机构和行走机构'
      },
      {
        code: 'C',
        value: '起升机构、变幅机构、回转机构和自升机构'
      },
      {
        code: 'D',
        value: '起升机构、变幅机构、回转机构和限位机构'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '出现（ ）的情况，吊钩应报废',
    list: [{
        code: 'A',
        value: '挂绳处断面磨损量超过原高的20％'
      },
      {
        code: 'B',
        value: '挂绳处断面磨损量超过原高的15％'
      },
      {
        code: 'C',
        value: '挂绳处断面磨损量超过原高的10％'
      },
      {
        code: 'D',
        value: '挂绳处断面磨损量超过原高的5％'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '下列（ ）是用来防止运行小车超过最大或最小幅度的两个极限位置的安全装置',
    list: [{
        code: 'A',
        value: '超高限制器'
      },
      {
        code: 'B',
        value: '起重量限制器'
      },
      {
        code: 'C',
        value: '行程限制器'
      },
      {
        code: 'D',
        value: '幅度限制器'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '内爬升塔机的固定间隔不得大于（ ）个楼层',
    list: [{
        code: 'A',
        value: '2'
      },
      {
        code: 'B',
        value: '3'
      },
      {
        code: 'C',
        value: '4'
      },
      {
        code: 'D',
        value: '5'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '钢丝绳式施工升降机垂直度偏差应（　）mm',
    list: [{
        code: 'A',
        value: '≤70'
      },
      {
        code: 'B',
        value: '≤110'
      },
      {
        code: 'C',
        value: '≤（1.5／1000）h'
      },
      {
        code: 'D',
        value: '≤（1／1000）h'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '施工升降机是一种使用工作笼(吊笼)沿（ ）作垂直(或倾斜)运动用来运送人员和物料的机械',
    list: [{
        code: 'A',
        value: '标准节'
      },
      {
        code: 'B',
        value: '导轨架'
      },
      {
        code: 'C',
        value: '导管'
      },
      {
        code: 'D',
        value: '通道'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '施工升降机的防坠安全器在使用（ ）后，要进行一次额定载重量的坠落试验',
    list: [{
        code: 'A',
        value: '2个月'
      },
      {
        code: 'B',
        value: '3个月'
      },
      {
        code: 'C',
        value: '4个月'
      },
      {
        code: 'D',
        value: '5个月'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '《井架及龙门架物料提升机安全技术规范》规定，物料提升机的额定载重量为（ ）',
    list: [{
        code: 'A',
        value: '3000kg以上'
      },
      {
        code: 'B',
        value: '1500kg以下'
      },
      {
        code: 'C',
        value: '2000kg以上'
      },
      {
        code: 'D',
        value: '2000kg以下'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '剪刀撑的设置宽度（ ）',
    list: [{
        code: 'A',
        value: '不应小于4跨，且不应小于6m'
      },
      {
        code: 'B',
        value: '不应小于3跨，且不应小于4.5m'
      },
      {
        code: 'C',
        value: '不应小于3跨，且不应小于5m'
      },
      {
        code: 'D',
        value: '不应大于4跨，且不应大于6m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '双排脚手架应设置（ ）',
    list: [{
        code: 'A',
        value: '剪刀撑与横向斜撑'
      },
      {
        code: 'B',
        value: '剪刀撑'
      },
      {
        code: 'C',
        value: '横向斜撑'
      },
      {
        code: 'D',
        value: '可不设剪刀撑和横向斜撑'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '为计算简便，并确保安全，对脚手架立杆要求（ ）',
    list: [{
        code: 'A',
        value: '仅按轴心压杆计算'
      },
      {
        code: 'B',
        value: '仅按压弯杆计算'
      },
      {
        code: 'C',
        value: '仅按拉弯构件计算'
      },
      {
        code: 'D',
        value: '既按轴心压杆又按压弯杆计算'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '计算纵向或横向水平杆与立杆的连接扣件抗滑承载力时，应采用扣件抗滑承载力的设计值，其值为（ ）',
    list: [{
        code: 'A',
        value: '10kN'
      },
      {
        code: 'B',
        value: '3.2kN'
      },
      {
        code: 'C',
        value: '8kN'
      },
      {
        code: 'D',
        value: '40kN'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '计算纵向水平杆(大横杆)的内力和挠度时，应按（ ）',
    list: [{
        code: 'A',
        value: '两跨连续梁计算'
      },
      {
        code: 'B',
        value: '两端固接的单跨梁计算'
      },
      {
        code: 'C',
        value: '三跨连续梁计算'
      },
      {
        code: 'D',
        value: '既可按单跨梁又可按三跨连续梁计算'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '脚手架施工荷载按均布荷载计算取值正确的是（ ）',
    list: [{
        code: 'A',
        value: '承重架5kN／m2，装修架4kN／m2'
      },
      {
        code: 'B',
        value: '承重架2kN／m2，装修架lkN／m2'
      },
      {
        code: 'C',
        value: '承重架2.7kN／m2、装修架2.5kN／m2'
      },
      {
        code: 'D',
        value: '承重架(结构施工架)3kN／m2、装修架2kN／m2'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '脚手架拆除时必须（ ）',
    list: [{
        code: 'A',
        value: '由上到下逐层进行'
      },
      {
        code: 'B',
        value: '严禁上下同时作业'
      },
      {
        code: 'C',
        value: '每层先拆连墙件，再拆脚手架'
      },
      {
        code: 'D',
        value: '分段拆除高差大于两步时，应增设连墙件'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '脚手架上各构配件拆除时（ ）',
    list: [{
        code: 'A',
        value: '严禁抛掷至地面'
      },
      {
        code: 'B',
        value: '可将配件一个个地抛掷到地面'
      },
      {
        code: 'C',
        value: '应在高处将构配件捆绑在一起，一次抛掷到地面'
      },
      {
        code: 'D',
        value: '待下班后，工地上没有人时，再将构配件抛掷到地面'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '高处作业的安全技术措施及其所需料具，必须列入工程的（ ）',
    list: [{
        code: 'A',
        value: '预算单'
      },
      {
        code: 'B',
        value: '施工组织设计'
      },
      {
        code: 'C',
        value: '结算单'
      },
      {
        code: 'D',
        value: '验收单'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '坡度大于1：2.2的屋面，应设置（ ）高防护栏杆',
    list: [{
        code: 'A',
        value: '1m'
      },
      {
        code: 'B',
        value: '1.2m'
      },
      {
        code: 'C',
        value: '1.3m'
      },
      {
        code: 'D',
        value: '1.5m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '分层施工楼梯口和梯段边，必须安装临时护栏。顶层楼梯口应随工程结构进度安装（ ）',
    list: [{
        code: 'A',
        value: '临时护栏'
      },
      {
        code: 'B',
        value: '安全立网'
      },
      {
        code: 'C',
        value: '警告牌'
      },
      {
        code: 'D',
        value: '正式防护栏杆'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '临边防护栏杆的上杆离地高度为（ ）',
    list: [{
        code: 'A',
        value: '0.5～0.6m'
      },
      {
        code: 'B',
        value: '1.0～1.2m'
      },
      {
        code: 'C',
        value: '1.5～1.8m'
      },
      {
        code: 'D',
        value: '2.0～2.4m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '位于车辆行驶道旁的洞口、深沟与管道坑、槽，所加盖板应能承受不小于当地额定卡车后轮有效承载力（ ）倍的荷载',
    list: [{
        code: 'A',
        value: '1'
      },
      {
        code: 'B',
        value: '1.5'
      },
      {
        code: 'C',
        value: '2'
      },
      {
        code: 'D',
        value: '2.5'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '梯子如需接长使用，必须有可靠的连接措施，连接后梯梁的强度，不应低于（ ）',
    list: [{
        code: 'A',
        value: '单梯梯梁强度的90％'
      },
      {
        code: 'B',
        value: '单梯梯梁强度的80％'
      },
      {
        code: 'C',
        value: '单梯梯梁强度的70％'
      },
      {
        code: 'D',
        value: '单梯梯梁的强度'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '悬空作业所用的索具、脚手板、吊篮、吊笼、平台等设备，均需经过（ ）或检证方可使用',
    list: [{
        code: 'A',
        value: '安全员检查'
      },
      {
        code: 'B',
        value: '施工人员验收'
      },
      {
        code: 'C',
        value: '先试用'
      },
      {
        code: 'D',
        value: '技术鉴定'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '安全帽耐冲击试验，传递到头模上的力不应超过（ ）',
    list: [{
        code: 'A',
        value: '400kg'
      },
      {
        code: 'B',
        value: '500kg'
      },
      {
        code: 'C',
        value: '600kg'
      },
      {
        code: 'D',
        value: '700kg'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '配电柜后面的维护通道宽度，单列布置或双列背对背布置时不应小于（ ）',
    list: [{
        code: 'A',
        value: '1.5m'
      },
      {
        code: 'B',
        value: '1.0m'
      },
      {
        code: 'C',
        value: '0.8m'
      },
      {
        code: 'D',
        value: '0.5m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '开关箱中设置刀型开关DK、断路器KK、漏电保护器RCD，则从电源进线端开始其联接次序应依次是( )',
    list: [{
        code: 'A',
        value: 'DK-KK-RCD'
      },
      {
        code: 'B',
        value: 'DK-RCD-KK'
      },
      {
        code: 'C',
        value: 'KK-RCD-DK'
      },
      {
        code: 'D',
        value: 'RCD-KK-DK'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '施工现场用电系统中，N线的绝缘色应是（ ）',
    list: [{
        code: 'A',
        value: '黑色'
      },
      {
        code: 'B',
        value: '白色'
      },
      {
        code: 'C',
        value: '淡蓝色'
      },
      {
        code: 'D',
        value: '棕色'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '架空线路的同一横担上，Ll(A)、L2(B)、L3(C)、N、PE五条线的排列次序是面向负荷侧从左起依次为（ ）',
    list: [{
        code: 'A',
        value: 'Ll、L2、L3、N、PE'
      },
      {
        code: 'B',
        value: 'N、PE、Ll、L2、L3'
      },
      {
        code: 'C',
        value: 'Ll、L2、N、L3、PE'
      },
      {
        code: 'D',
        value: 'Ll、N、L2、L3、PE'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '间接接触触电的主要保护措施是在配电装置中设置（ ）',
    list: [{
        code: 'A',
        value: '隔离开关'
      },
      {
        code: 'B',
        value: '漏电保护器'
      },
      {
        code: 'C',
        value: '断路器'
      },
      {
        code: 'D',
        value: '熔断器'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: 'Ⅱ类手持式电动工具适用场所是（ ）',
    list: [{
        code: 'A',
        value: '潮湿场所'
      },
      {
        code: 'B',
        value: '金属容器内'
      },
      {
        code: 'C',
        value: '地沟中'
      },
      {
        code: 'D',
        value: '管道内'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '在地沟、管道内等狭窄场所使用手持式电动工具时，必须选用（ ）',
    list: [{
        code: 'A',
        value: '塑料外壳Ⅱ类工具'
      },
      {
        code: 'B',
        value: 'I类工具'
      },
      {
        code: 'C',
        value: '金属外壳Ⅱ类工具'
      },
      {
        code: 'D',
        value: 'Ⅲ类工具'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '施工现场的机动车道与220／380V架空线路交叉时的最小垂直距离应是（ ）',
    list: [{
        code: 'A',
        value: '4m'
      },
      {
        code: 'B',
        value: '5m'
      },
      {
        code: 'C',
        value: '6m'
      },
      {
        code: 'D',
        value: '7m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '高空施焊时必须使用标准的防火安全带，戴（ ）',
    list: [{
        code: 'A',
        value: '焊具'
      },
      {
        code: 'B',
        value: '安全帽'
      },
      {
        code: 'C',
        value: '头罩'
      },
      {
        code: 'D',
        value: '工具'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '电焊时严禁借用金属管道、金属脚手架、结构钢筋等金属物搭接代替（ ）使用',
    list: [{
        code: 'A',
        value: '导线'
      },
      {
        code: 'B',
        value: '支撑物'
      },
      {
        code: 'C',
        value: '零线'
      },
      {
        code: 'D',
        value: '地线'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '焊接方法可分为（ ）三大类',
    list: [{
        code: 'A',
        value: '电焊、气焊、熔焊'
      },
      {
        code: 'B',
        value: '熔焊、气焊、压焊、'
      },
      {
        code: 'C',
        value: '气焊、压焊、钎焊'
      },
      {
        code: 'D',
        value: '熔焊、压焊、钎焊'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '交流焊机空载电压不得超过（ ）',
    list: [{
        code: 'A',
        value: '1l0V'
      },
      {
        code: 'B',
        value: '80V'
      },
      {
        code: 'C',
        value: '60V'
      },
      {
        code: 'D',
        value: '36V'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '在潮湿场地及触电危险性较大的环境，安全电压为（ ）',
    list: [{
        code: 'A',
        value: '3V'
      },
      {
        code: 'B',
        value: '12V'
      },
      {
        code: 'C',
        value: '36V'
      },
      {
        code: 'D',
        value: '24V'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '职业病危害预评价、职业病危害控制效果评价由依法设立的取得省级以上人民政府卫生行政部门资质认证的（ ）进行',
    list: [{
        code: 'A',
        value: '防疫机构'
      },
      {
        code: 'B',
        value: '职业卫生技术服务机构'
      },
      {
        code: 'C',
        value: '中介机构'
      },
      {
        code: 'D',
        value: '医疗卫生机构'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '建设项目在（ ），建设单位应当进行职业病危害控制效果评价',
    list: [{
        code: 'A',
        value: '竣工验收前'
      },
      {
        code: 'B',
        value: '竣工验收后'
      },
      {
        code: 'C',
        value: '设计阶段'
      },
      {
        code: 'D',
        value: '施工阶段'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '国家标准规定，车间空气中苯的最高允许浓度为（ ）',
    list: [{
        code: 'A',
        value: '100mg／m3'
      },
      {
        code: 'B',
        value: '90mg/m3'
      },
      {
        code: 'C',
        value: '80mg／m3'
      },
      {
        code: 'D',
        value: '40mg／m3'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '国家标准规定车间空气中铅烟的最高允许浓度为（ ），凡超标均应采取措施',
    list: [{
        code: 'A',
        value: '0.05mg／m3'
      },
      {
        code: 'B',
        value: '0.003mg／m3'
      },
      {
        code: 'C',
        value: '0.03mg／m3'
      },
      {
        code: 'D',
        value: '0.005 mg／m3'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '职业病防治法规定（ ）依法享有职业卫生保护的权利',
    list: [{
        code: 'A',
        value: '劳动者'
      },
      {
        code: 'B',
        value: '用人单位'
      },
      {
        code: 'C',
        value: '地方政府'
      },
      {
        code: 'D',
        value: '法人单位'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '（ ）必须采用有效的职业病防护设施，并为劳动者提供符合职业病防治要求的个人使用的职业病防护用品',
    list: [{
        code: 'A',
        value: '组织机构'
      },
      {
        code: 'B',
        value: '职业卫生技术服务机构'
      },
      {
        code: 'C',
        value: '用人单位'
      },
      {
        code: 'D',
        value: '卫生行政部门'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '对可能发生急性职业损伤的有毒、有害工作场所，用人单位应当设置报警装置，配置现场急救用品、冲洗设备、应急撤离通道和必要的（ ）',
    list: [{
        code: 'A',
        value: '警戒区'
      },
      {
        code: 'B',
        value: '泄险区'
      },
      {
        code: 'C',
        value: '隔离墙'
      },
      {
        code: 'D',
        value: '消防设施'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '用人单位应当按照国务院卫生行政部门的规定，（ ）对工作场所进行职业病危害因素检测、评价',
    list: [{
        code: 'A',
        value: '定期'
      },
      {
        code: 'B',
        value: '必要时'
      },
      {
        code: 'C',
        value: '不定期'
      },
      {
        code: 'D',
        value: '一年一次'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '施工现场动火证由（ ）审批',
    list: [{
        code: 'A',
        value: '公司安全科'
      },
      {
        code: 'B',
        value: '工程项目技术负责人'
      },
      {
        code: 'C',
        value: '工程项目部负责人'
      },
      {
        code: 'D',
        value: '安全员'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '易燃的废品集中场地距离在建的建筑物和其他区域不小于（ ）',
    list: [{
        code: 'A',
        value: '15m'
      },
      {
        code: 'B',
        value: '20m'
      },
      {
        code: 'C',
        value: '25m'
      },
      {
        code: 'D',
        value: '30m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '施工现场必须设立消防车通道，通道宽度不小于（ ）',
    list: [{
        code: 'A',
        value: '4.5m'
      },
      {
        code: 'B',
        value: '4m'
      },
      {
        code: 'C',
        value: '3.5m'
      },
      {
        code: 'D',
        value: '3m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '按照消防的有关规定，（ ）以上建筑物为高层建筑',
    list: [{
        code: 'A',
        value: '24m'
      },
      {
        code: 'B',
        value: '30m'
      },
      {
        code: 'C',
        value: '34m'
      },
      {
        code: 'D',
        value: '40m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '冬期施工时氧气瓶瓶颈冻结，应采取（ ）的措施解冻',
    list: [{
        code: 'A',
        value: '明火烘烤'
      },
      {
        code: 'B',
        value: '热水解冻'
      },
      {
        code: 'C',
        value: '用铁锤轻打'
      },
      {
        code: 'D',
        value: '反复震荡'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '安全检查标准规定，（ ）以上的高层建筑应当设置临时消防水源加压泵和输水管道',
    list: [{
        code: 'A',
        value: '24m'
      },
      {
        code: 'B',
        value: '30m'
      },
      {
        code: 'C',
        value: '35m'
      },
      {
        code: 'D',
        value: '40m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '适用于扑救易燃气体、液体和电器设备火灾的是（ ）灭火剂',
    list: [{
        code: 'A',
        value: 'D类干粉'
      },
      {
        code: 'B',
        value: 'ABCD干粉'
      },
      {
        code: 'C',
        value: 'BC干粉'
      },
      {
        code: 'D',
        value: '泡沫'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '（ ）燃烧的火灾不能用水扑救',
    list: [{
        code: 'A',
        value: '木制品'
      },
      {
        code: 'B',
        value: '塑料品'
      },
      {
        code: 'C',
        value: '玻璃钢制品'
      },
      {
        code: 'D',
        value: '电气装置'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '道路两侧做宽、深各（ ）的排水沟',
    list: [{
        code: 'A',
        value: '100～50mm'
      },
      {
        code: 'B',
        value: '300～200mm'
      },
      {
        code: 'C',
        value: '150～100mm'
      },
      {
        code: 'D',
        value: '200～150mm'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '夏季职工宿舍要（ ）',
    list: [{
        code: 'A',
        value: '防蚊蝇'
      },
      {
        code: 'B',
        value: '防火'
      },
      {
        code: 'C',
        value: '防偷盗'
      },
      {
        code: 'D',
        value: '防触电'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '入冬前搞好相关人员（ ）',
    list: [{
        code: 'A',
        value: '配发工作服'
      },
      {
        code: 'B',
        value: '安全技术培训、安全技术交底'
      },
      {
        code: 'C',
        value: '配发安全帽'
      },
      {
        code: 'D',
        value: '配发安全带'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '冻土爆破施工离高压电线（ ）',
    list: [{
        code: 'A',
        value: '50m'
      },
      {
        code: 'B',
        value: '100m'
      },
      {
        code: 'C',
        value: '150m'
      },
      {
        code: 'D',
        value: '200m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '冻土爆破如有哑炮，应在距离原炮眼（ ）以外地方另行打眼',
    list: [{
        code: 'A',
        value: '50㎝'
      },
      {
        code: 'B',
        value: '40㎝'
      },
      {
        code: 'C',
        value: '30㎝'
      },
      {
        code: 'D',
        value: '60㎝'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '锅炉主要受压部件中起汇集、贮存、净化蒸汽和补充给水作用的是（ ）',
    list: [{
        code: 'A',
        value: '水冷壁'
      },
      {
        code: 'B',
        value: '对流管束'
      },
      {
        code: 'C',
        value: '锅筒'
      },
      {
        code: 'D',
        value: '集箱'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '锅炉上装设的安全泄压装置是（ ）',
    list: [{
        code: 'A',
        value: '易熔塞'
      },
      {
        code: 'B',
        value: '安全阀'
      },
      {
        code: 'C',
        value: '防爆片'
      },
      {
        code: 'D',
        value: '防爆帽'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '水位计是锅炉上主要（ ）之一',
    list: [{
        code: 'A',
        value: '附属设备'
      },
      {
        code: 'B',
        value: '安全装置'
      },
      {
        code: 'C',
        value: '部件'
      },
      {
        code: 'D',
        value: '结构'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '锅炉要承受较高的压力，需要较厚的（ ）',
    list: [{
        code: 'A',
        value: '防爆片'
      },
      {
        code: 'B',
        value: '密封件'
      },
      {
        code: 'C',
        value: '壳壁'
      },
      {
        code: 'D',
        value: '法兰'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '焊接气瓶除了由瓶体、瓶阀、瓶帽、底座、防震圈组成外，一般还有（ ）',
    list: [{
        code: 'A',
        value: '护罩'
      },
      {
        code: 'B',
        value: '手轮'
      },
      {
        code: 'C',
        value: '压紧螺母'
      },
      {
        code: 'D',
        value: '爆破膜'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '从事建筑生产活动的专业技术人员，应依法取得相应的（　）证书，并在证书许可的范围内从事建筑施工活动',
    list: [{
        code: 'A',
        value: '职业资格'
      },
      {
        code: 'B',
        value: '执业资格'
      },
      {
        code: 'C',
        value: '管理资格'
      },
      {
        code: 'D',
        value: '职业健康'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '施工现场工程项目部的专职安全生产管理人员配备要求：市政基础设施工程项目建安工程费1亿元及以上的工程不少于（　）人',
    list: [{
        code: 'A',
        value: '2'
      },
      {
        code: 'B',
        value: '3'
      },
      {
        code: 'C',
        value: '4'
      },
      {
        code: 'D',
        value: '5'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '砌体围挡应设置混凝土壁柱，墙体与壁柱之间应设置（　）的拉结筋',
    list: [{
        code: 'A',
        value: '2Φ8@500'
      },
      {
        code: 'B',
        value: '2Φ6@500'
      },
      {
        code: 'C',
        value: '2Φ6@300'
      },
      {
        code: 'D',
        value: '2Φ8@300'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '工地大门口应设置门卫值班室，配备一定数量的安全帽，严格执行外来人员进场（　）制度',
    list: [{
        code: 'A',
        value: '登记'
      },
      {
        code: 'B',
        value: '检查'
      },
      {
        code: 'C',
        value: '教育'
      },
      {
        code: 'D',
        value: '备案'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '施工现场的主通道宽度应在（　）m以上',
    list: [{
        code: 'A',
        value: '3'
      },
      {
        code: 'B',
        value: '3.5'
      },
      {
        code: 'C',
        value: '4'
      },
      {
        code: 'D',
        value: '4.5'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '材料堆放垛高不应超过（　）m并与围档保持一定的安全距离',
    list: [{
        code: 'A',
        value: '1'
      },
      {
        code: 'B',
        value: '1.5'
      },
      {
        code: 'C',
        value: '1.8'
      },
      {
        code: 'D',
        value: '2'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '施工现场应按有关规定成立（　），配备电视机、书报、杂志等文体活动设施、用品',
    list: [{
        code: 'A',
        value: '职工之家'
      },
      {
        code: 'B',
        value: '民工学校'
      },
      {
        code: 'C',
        value: '工会'
      },
      {
        code: 'D',
        value: '科普基地'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '临时建筑最大允许长度不应大于（　）m',
    list: [{
        code: 'A',
        value: '60'
      },
      {
        code: 'B',
        value: '55'
      },
      {
        code: 'C',
        value: '50'
      },
      {
        code: 'D',
        value: '40'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '办公用房室内净高不应低于（　）m',
    list: [{
        code: 'A',
        value: '2'
      },
      {
        code: 'B',
        value: '2.5'
      },
      {
        code: 'C',
        value: '3'
      },
      {
        code: 'D',
        value: '3.5'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '对暂不施工的场地及停工满（　）个月以上建筑工程，建设单位应对工地内的裸露地面采取绿化，网、膜覆盖等措施，防止扬尘污染',
    list: [{
        code: 'A',
        value: '半'
      },
      {
        code: 'B',
        value: '1'
      },
      {
        code: 'C',
        value: '1个半'
      },
      {
        code: 'D',
        value: '2'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '在禁止现场搅拌区域内新开工建设的建设工程应使用（　）',
    list: [{
        code: 'A',
        value: '预拌混凝土和预拌砂浆'
      },
      {
        code: 'B',
        value: '预拌混凝土和现场搅拌砂浆'
      },
      {
        code: 'C',
        value: '现场搅拌混凝土和现场搅拌砂浆'
      },
      {
        code: 'D',
        value: '现场搅拌混凝土和预拌砂浆'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '施工现场需要夜间施工的，必须有（　）以上人民政府或者其有关主管部门的证明',
    list: [{
        code: 'A',
        value: '县级'
      },
      {
        code: 'B',
        value: '市级'
      },
      {
        code: 'C',
        value: '设区市'
      },
      {
        code: 'D',
        value: '省级'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '建筑工地应制定（　），建筑垃圾的回收利用应符合现行国家标准的规定',
    list: [{
        code: 'A',
        value: '垃圾减量计划'
      },
      {
        code: 'B',
        value: '垃圾分类计划'
      },
      {
        code: 'C',
        value: '垃圾回收计划'
      },
      {
        code: 'D',
        value: '垃圾再利用计划'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '对有可能造成二次污染的废弃物应（　）储存，并设置醒目标识',
    list: [{
        code: 'A',
        value: '密闭'
      },
      {
        code: 'B',
        value: '单独'
      },
      {
        code: 'C',
        value: '分类'
      },
      {
        code: 'D',
        value: '合并'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '施工现场必须制订消防预案，建立健全消防防火责任制和管理制度，配备消防器材及（　）消防人员',
    list: [{
        code: 'A',
        value: '专职'
      },
      {
        code: 'B',
        value: '兼职'
      },
      {
        code: 'C',
        value: '义务'
      },
      {
        code: 'D',
        value: '专业'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '施工现场应单独设置易燃易爆危险品仓库，与在建工程的防火间距不应小于（　）m，可燃材料堆场及其加工场、固定作业场所与在建工程的防火间距不应小于（　）m，其他临时用房、临时设施与在建工程的防火间距不应小于（　）m',
    list: [{
        code: 'A',
        value: '15；10；6'
      },
      {
        code: 'B',
        value: '6；10；15'
      },
      {
        code: 'C',
        value: '10；6；15'
      },
      {
        code: 'D',
        value: '10；15；6'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '基坑工程的（ ）对基坑工程的安全至关重要',
    list: [{
        code: 'A',
        value: '空间尺度'
      },
      {
        code: 'B',
        value: '暴露范围'
      },
      {
        code: 'C',
        value: '暴露时间'
      },
      {
        code: 'D',
        value: '时空效应'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '当基坑降水可能对周围环境产生影响时，应对周边环境进行（ ）',
    list: [{
        code: 'A',
        value: '检查'
      },
      {
        code: 'B',
        value: '修复'
      },
      {
        code: 'C',
        value: '监测'
      },
      {
        code: 'D',
        value: '控制'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '基坑工程施工期间（ ）应安排专人进行巡视检查',
    list: [{
        code: 'A',
        value: '建设单位'
      },
      {
        code: 'B',
        value: '施工单位'
      },
      {
        code: 'C',
        value: '监理单位'
      },
      {
        code: 'D',
        value: '设计单位'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '基坑检测基准点不应少于（ ）',
    list: [{
        code: 'A',
        value: '1个'
      },
      {
        code: 'B',
        value: '2个'
      },
      {
        code: 'C',
        value: '3个'
      },
      {
        code: 'D',
        value: '4个'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '施工企业现场监测的监测对象和技术要求应在（ ）中明确',
    list: [{
        code: 'A',
        value: '基坑支护设计单位'
      },
      {
        code: 'B',
        value: '建筑设计单位'
      },
      {
        code: 'C',
        value: '施工技术标准'
      },
      {
        code: 'D',
        value: '专项施工方案'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '脚手架拆除前应对拆除人员进行安全技术交底，交底双方履行（ ）',
    list: [{
        code: 'A',
        value: '签字手续'
      },
      {
        code: 'B',
        value: '交接手续'
      },
      {
        code: 'C',
        value: '现场勘测程序'
      },
      {
        code: 'D',
        value: '责任划分协定'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '横向水平杆两端各伸出扣件盖板边缘长度不应少于（ ）.并保持一致',
    list: [{
        code: 'A',
        value: '200mm'
      },
      {
        code: 'B',
        value: '150mm'
      },
      {
        code: 'C',
        value: '100mm'
      },
      {
        code: 'D',
        value: '50mm'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '下列有关运料斜道的宽度和坡度的规定正确的是（ ）',
    list: [{
        code: 'A',
        value: '不宜小于1.5m和宜采用1：7'
      },
      {
        code: 'B',
        value: '不宜小于0.5m和宜采用1：3'
      },
      {
        code: 'C',
        value: '不宜小于1.5m和宜采用1：6'
      },
      {
        code: 'D',
        value: '不宜小于0.8m和宜采用1：6'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '脚手架立杆底座底面标高宜高于自然地坪（ ）',
    list: [{
        code: 'A',
        value: '50mm'
      },
      {
        code: 'B',
        value: '70mm'
      },
      {
        code: 'C',
        value: '80mm'
      },
      {
        code: 'D',
        value: '100mm'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '门式钢管脚手架立杆下部应设置纵横扫地杆,纵横扫地杆设置时，应符合（ ）',
    list: [{
        code: 'A',
        value: '纵上横下'
      },
      {
        code: 'B',
        value: '横上纵下'
      },
      {
        code: 'C',
        value: '纵横向扫地杆平行设置'
      },
      {
        code: 'D',
        value: '纵横向扫地杆设置没有要求'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '碗扣式脚手架可调底座及可调托撑丝杆与螺母捏合长度不少于（ ），插入立杆内的长度不得小于150mm',
    list: [{
        code: 'A',
        value: '4扣'
      },
      {
        code: 'B',
        value: '5扣'
      },
      {
        code: 'C',
        value: '6扣'
      },
      {
        code: 'D',
        value: '7扣'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '单立杆满堂脚手架搭设高度不宜超过（ ）',
    list: [{
        code: 'A',
        value: '24m'
      },
      {
        code: 'B',
        value: '25m'
      },
      {
        code: 'C',
        value: '30m'
      },
      {
        code: 'D',
        value: '36m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '悬挑式脚手架锚固位置设置在楼板上时，楼板厚度不应小于（ ），否则应采取加固措施',
    list: [{
        code: 'A',
        value: '100mm'
      },
      {
        code: 'B',
        value: '120mm'
      },
      {
        code: 'C',
        value: '140mm'
      },
      {
        code: 'D',
        value: '150mm'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '附着式升降脚手架架体宽度不应大于（ ）',
    list: [{
        code: 'A',
        value: '0.9m'
      },
      {
        code: 'B',
        value: '1m'
      },
      {
        code: 'C',
        value: '1.2m'
      },
      {
        code: 'D',
        value: '1.5m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '单片附着式升降脚手架架体的水平悬挑长度不得大于（ ）',
    list: [{
        code: 'A',
        value: '1.5m'
      },
      {
        code: 'B',
        value: '2m'
      },
      {
        code: 'C',
        value: '1/2水平支承跨度'
      },
      {
        code: 'D',
        value: '1/4水平支承跨度'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '附着升降脚手架升降用索具、吊具的安全系数应大于（ ）',
    list: [{
        code: 'A',
        value: '10'
      },
      {
        code: 'B',
        value: '8'
      },
      {
        code: 'C',
        value: '6'
      },
      {
        code: 'D',
        value: '5'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '当模板支撑架高度大于4.8m时，顶端和底部必须设置（ ）',
    list: [{
        code: 'A',
        value: '斜杆'
      },
      {
        code: 'B',
        value: '竖向剪刀撑'
      },
      {
        code: 'C',
        value: '水平剪刀撑'
      },
      {
        code: 'D',
        value: '支架'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '模板拆除（ ）及以上强风或雨、雪时，应停止作业',
    list: [{
        code: 'A',
        value: '四级'
      },
      {
        code: 'B',
        value: '五级'
      },
      {
        code: 'C',
        value: '六级'
      },
      {
        code: 'D',
        value: '七级'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '安全带一般应做到（  ）',
    list: [{
        code: 'A',
        value: '高挂低用'
      },
      {
        code: 'B',
        value: '高挂高用'
      },
      {
        code: 'C',
        value: '低挂高用'
      },
      {
        code: 'D',
        value: '低挂低用'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '电梯井口安全防护栅门高度不得低于（ ）',
    list: [{
        code: 'A',
        value: '1.8m'
      },
      {
        code: 'B',
        value: '1.5m'
      },
      {
        code: 'C',
        value: '1m'
      },
      {
        code: 'D',
        value: '0.8m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '分配电箱与开关箱的距离不得超过（ ）',
    list: [{
        code: 'A',
        value: '10m'
      },
      {
        code: 'B',
        value: '20m'
      },
      {
        code: 'C',
        value: '30m'
      },
      {
        code: 'D',
        value: '40m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '配电室内配电屏的正面操作通道宽度应不小于（ ）',
    list: [{
        code: 'A',
        value: '2m'
      },
      {
        code: 'B',
        value: '1.5m'
      },
      {
        code: 'C',
        value: '1m'
      },
      {
        code: 'D',
        value: '0.5m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '使用单位应委托有建筑起重设备安装专业承包资质的单位对货用施工升降机进行检查，每月不少于（ ）',
    list: [{
        code: 'A',
        value: '1次'
      },
      {
        code: 'B',
        value: '2次'
      },
      {
        code: 'C',
        value: '3次'
      },
      {
        code: 'D',
        value: '4次'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '出厂年限超过（ ）年的齿轮齿条式货用施工升降机，应进行安全评估，评估合格后方可继续使用',
    list: [{
        code: 'A',
        value: '5'
      },
      {
        code: 'B',
        value: '6'
      },
      {
        code: 'C',
        value: '7'
      },
      {
        code: 'D',
        value: '8'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '施工现场使用的龙门架、井架式物料提升机，最大安装高度不应超过（ ）m',
    list: [{
        code: 'A',
        value: '30'
      },
      {
        code: 'B',
        value: '36'
      },
      {
        code: 'C',
        value: '38'
      },
      {
        code: 'D',
        value: '32'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '齿轮齿条式人货两用施工升降机出厂时带对重的，若拆除对重后使用，额定载重量必须（ ），且其使用要求应符合使用说明书和《施工升降机》（GB/T10054）的规定',
    list: [{
        code: 'A',
        value: '减少15%'
      },
      {
        code: 'B',
        value: '减半'
      },
      {
        code: 'C',
        value: '加倍'
      },
      {
        code: 'D',
        value: '减少25%'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '人货两用施工升降机使用期间，每（ ）个月应进行1次1.25倍额定载重量的超载试验，确保制动器性能安全可靠',
    list: [{
        code: 'A',
        value: '2'
      },
      {
        code: 'B',
        value: '3'
      },
      {
        code: 'C',
        value: '4'
      },
      {
        code: 'D',
        value: '5'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '施工升降机传动系统应设常闭式制动器，其额定制动力矩应不低于作业时额定力矩的（ ）倍',
    list: [{
        code: 'A',
        value: '1.5'
      },
      {
        code: 'B',
        value: '2.0'
      },
      {
        code: 'C',
        value: '2.5'
      },
      {
        code: 'D',
        value: '3.0'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '施工升降机金属结构和电气设备金属外壳均应接地，接地电阻不应大于（ ）Ω',
    list: [{
        code: 'A',
        value: '4'
      },
      {
        code: 'B',
        value: '6'
      },
      {
        code: 'C',
        value: '8'
      },
      {
        code: 'D',
        value: '10'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '工作照明开关应与主电源开关相互独立。当主电源被切断时（ ）',
    list: [{
        code: 'A',
        value: '工作照明不应断电，并应有明显标志'
      },
      {
        code: 'B',
        value: '工作照明应断电，并应有明显标志'
      },
      {
        code: 'C',
        value: '工作照明不应断电，但不应有明显标志'
      },
      {
        code: 'D',
        value: '工作照明应断电，但不需要有明显标志'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '使用单位对塔式起重机进行检查，每月不少于（ ）次',
    list: [{
        code: 'A',
        value: '2'
      },
      {
        code: 'B',
        value: '3'
      },
      {
        code: 'C',
        value: '4'
      },
      {
        code: 'D',
        value: '5'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '出厂年限超过（ ）的塔式起重机，每满（ ）应检测一次',
    list: [{
        code: 'A',
        value: '4年、2年'
      },
      {
        code: 'B',
        value: '5年、2年'
      },
      {
        code: 'C',
        value: '4年、3年'
      },
      {
        code: 'D',
        value: '5年、3年'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '处于高位塔式起重机的吊钩升至最高点或平衡重的最低位与低位塔式起重机中处于最高位置部件之间的垂直距离不应小于（ ）m',
    list: [{
        code: 'A',
        value: '2'
      },
      {
        code: 'B',
        value: '3'
      },
      {
        code: 'C',
        value: '4'
      },
      {
        code: 'D',
        value: '5'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '连接件及其防松防脱件（ ）用其它代用品代用',
    list: [{
        code: 'A',
        value: '允许'
      },
      {
        code: 'B',
        value: '严禁'
      },
      {
        code: 'C',
        value: '可以'
      },
      {
        code: 'D',
        value: '适宜'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '当遇特殊情况塔式起重机安装作业不能连续进行时，应采取的措施为（ ）',
    list: [{
        code: 'A',
        value: '将已安装的部位固定牢固并达到安全状态即可，无需检查确认隐患'
      },
      {
        code: 'B',
        value: '直接拆除已安装的部位'
      },
      {
        code: 'C',
        value: '将已安装的部位固定牢固并达到安全状态，经检查确认无隐患后，方可停止作业'
      },
      {
        code: 'D',
        value: '直接停止作业即可'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '塔式起重机独立状态（或附着状态下最高附着点以上塔身）塔身轴心线对支承面的垂直度不大于（ ）',
    list: [{
        code: 'A',
        value: '1／1000'
      },
      {
        code: 'B',
        value: '2／1000'
      },
      {
        code: 'C',
        value: '3／1000'
      },
      {
        code: 'D',
        value: '4／1000'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '塔式起重机附着状态下最高附着点以下塔身轴心线对支承面的垂直度不大于（ ）',
    list: [{
        code: 'A',
        value: '1／1000'
      },
      {
        code: 'B',
        value: '2／1000'
      },
      {
        code: 'C',
        value: '3／1000'
      },
      {
        code: 'D',
        value: '4／1000'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '塔式起重机独立安装高度不宜大于使用说明书规定的最大独立高度的（ ）',
    list: [{
        code: 'A',
        value: '60%'
      },
      {
        code: 'B',
        value: '80%'
      },
      {
        code: 'C',
        value: '100%'
      },
      {
        code: 'D',
        value: '120%'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '自制起重扒杆吊装作业的表述最完整的是（ ）',
    list: [{
        code: 'A',
        value: '起重扒杆必须按照设计进行安装，作业前进行试吊，验收合格后方可使用，并做好书面记录'
      },
      {
        code: 'B',
        value: '起重扒杆必须按照设计进行安装，天气情况良好时，作业前可不进行试吊，验收合格后方可使用，但要做好书面记录'
      },
      {
        code: 'C',
        value: '起重扒杆必须按照业主要求进行安装，作业前进行试吊，验收合格之前即可使用，并做好书面记录'
      },
      {
        code: 'D',
        value: '起重扒杆必须按照设计进行安装，作业前进行试吊，验收合格后方可使用，书面记录可以忽略'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '构件堆放应整齐、稳固，且堆放场地应符合堆载要求，（ ）',
    list: [{
        code: 'A',
        value: '建筑结构上不得堆放材料'
      },
      {
        code: 'B',
        value: '在建筑物结构上堆放材料，不得超过设计允许的荷载规定'
      },
      {
        code: 'C',
        value: '在建筑物结构上堆放材料，可以超过设计允许的荷载规定'
      },
      {
        code: 'D',
        value: '在建筑物结构上堆放材料，不得超过设计允许荷载规定的150%'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '电焊机使用时二次线长度不得超过（ ）m，并设有防护罩',
    list: [{
        code: 'A',
        value: '20'
      },
      {
        code: 'B',
        value: '30'
      },
      {
        code: 'C',
        value: '40'
      },
      {
        code: 'D',
        value: '50'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '混凝土泵车的使用作业中需要移动车身时，应将上段布料杆折叠固定，移动速度不得超过（ ）km/h',
    list: [{
        code: 'A',
        value: '5'
      },
      {
        code: 'B',
        value: '10'
      },
      {
        code: 'C',
        value: '15'
      },
      {
        code: 'D',
        value: '20'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '高处作业吊篮的电源电缆线（ ），防止插头接线受力，引起断路、短路',
    list: [{
        code: 'A',
        value: '应有保护措施，固定在设备上'
      },
      {
        code: 'B',
        value: '可以没有保护措施，且不需固定在设备上，以便操作'
      },
      {
        code: 'C',
        value: '应有保护措施，且不需固定在设备上，以便操作'
      },
      {
        code: 'D',
        value: '应有保护措施，但是是否固定在设备上，需要看具体操作情况而定'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '施工范围下方如有道路、通道时，应采取的措施（ ）',
    list: [{
        code: 'A',
        value: '可不设置设置警示线或安全护栏，但要在周围设置醒目的警示标志并派专人监护'
      },
      {
        code: 'B',
        value: '必须设置警示线或安全护栏，不需要在周围设置醒目的警示标志，需要派专人监护'
      },
      {
        code: 'C',
        value: '必须设置警示线或安全护栏，并且在周围设置醒目的警示标志并派专人监护'
      },
      {
        code: 'D',
        value: '必须设置警示线或安全护栏，并且在周围设置醒目的警示标志但不需派专人监护'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '未被事先识别或未采取必要的风险控制措施，可能直接或间接导致事故的根源是（ ）',
    list: [{
        code: 'A',
        value: '事故'
      },
      {
        code: 'B',
        value: '隐患'
      },
      {
        code: 'C',
        value: '风险'
      },
      {
        code: 'D',
        value: '危险'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '表示禁止人们进入危险的环境的是（ ）',
    list: [{
        code: 'A',
        value: '红色与白色相间条纹'
      },
      {
        code: 'B',
        value: '黄色与黑色相间条纹'
      },
      {
        code: 'C',
        value: '蓝色与白色相间条纹'
      },
      {
        code: 'D',
        value: '绿色与白色相间条纹'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '表示提示人们特别注意的意思的是（ ）',
    list: [{
        code: 'A',
        value: '红色与白色相间条纹'
      },
      {
        code: 'B',
        value: '黄色与黑色相间条纹'
      },
      {
        code: 'C',
        value: '蓝色与白色相间条纹'
      },
      {
        code: 'D',
        value: '绿色与白色相间条纹'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '表示必须遵守规定的条纹的是（ ）',
    list: [{
        code: 'A',
        value: '红色与白色相间条纹'
      },
      {
        code: 'B',
        value: '黄色与黑色相间条纹'
      },
      {
        code: 'C',
        value: '蓝色与白色相间条纹'
      },
      {
        code: 'D',
        value: '绿色与白色相间条纹'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '强调人们必须做出某种动作或采取防范措施的图形标志是（ ）',
    list: [{
        code: 'A',
        value: '提示标志'
      },
      {
        code: 'B',
        value: '警告标志'
      },
      {
        code: 'C',
        value: '指令标志'
      },
      {
        code: 'D',
        value: '禁止标志'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '生产经营单位制定的应急预案应当至少每（ ）修订一次,预案修订情况应有记录并归档',
    list: [{
        code: 'A',
        value: '一年'
      },
      {
        code: 'B',
        value: '二年'
      },
      {
        code: 'C',
        value: '三年'
      },
      {
        code: 'D',
        value: '四年'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '某工程安全检查结果如下文明施工：保证项目得50分，一般项目得36分；则文明施工分项在汇总表得分是（ ）',
    list: [{
        code: 'A',
        value: '86分'
      },
      {
        code: 'B',
        value: '8.6分'
      },
      {
        code: 'C',
        value: '0分'
      },
      {
        code: 'D',
        value: '12.9分'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '企业应针对承建工程所在地区的气候与环境特点，组织（ ）的安全检查',
    list: [{
        code: 'A',
        value: '不定期'
      },
      {
        code: 'B',
        value: '专业性'
      },
      {
        code: 'C',
        value: '季节性'
      },
      {
        code: 'D',
        value: '节假日前后'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '根据《建设工程施工现场安全资料管理规程》（CECS266：2009）安全管理资料管理要求，以下叙述不正确的是（ ）',
    list: [{
        code: 'A',
        value: '施工现场安全管理资料的管理应为工程项目施工管理的重要组成部分，是预防安全生产事故和提高文明施工管理的有效措施'
      },
      {
        code: 'B',
        value: '建设单位、监理单位和施工单位应负责各自的安全管理资料管理工作，逐级建立健全施工现场安全资料管理岗位责任制，明确负责人，落实各岗位责任'
      },
      {
        code: 'C',
        value: '施工现场安全管理资料应字迹清晰，签字、盖章等手续齐全，计算机形成的资料可打印、手写签名'
      },
      {
        code: 'D',
        value: '施工现场安全管理资料应为原件，不能为复印件'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '根据《建设工程施工现场安全资料管理规程》（CECS266：2009）施工单位的管理职责，以下叙述不正确的是（ ）',
    list: [{
        code: 'A',
        value: '实行总承包施工的工程项目，总包单位应负责施工现场安全管理资料的形成、收集和整理，分包单位不负责'
      },
      {
        code: 'B',
        value: '施工现场安全管理资料应随工程建设进度形成，保证资料的真实性、有效性和完整性'
      },
      {
        code: 'C',
        value: '施工单位应指定施工现场安全管理资料责任人，负责安全管理资料的收集、整理和组卷'
      },
      {
        code: 'D',
        value: '施工单位应负责施工现场施工安全管理资料的管理工作'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '根据《建设工程施工现场安全资料管理规程》（CECS266：2009）施工现场安全管理资料分类与整理，以下叙述不正确的是（ ）',
    list: [{
        code: 'A',
        value: '安全管理资料分类应以形成资料的单位来划分'
      },
      {
        code: 'B',
        value: '施工现场安全管理资料整理应以单位工程分别进行整理及组卷'
      },
      {
        code: 'C',
        value: '施工现场安全管理资料组卷应按资料形成的参与单位组卷'
      },
      {
        code: 'D',
        value: '每卷资料排列顺序为封面、资料、附录及封底'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '建筑施工特种作业操作资格证书采用住建部规定的统一样式，在全国通用，有效期为（ ）',
    list: [{
        code: 'A',
        value: '一年'
      },
      {
        code: 'B',
        value: '两年'
      },
      {
        code: 'C',
        value: '三年'
      },
      {
        code: 'D',
        value: '四年'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '有效期满需要延期的，特种作业人员应当于期满前（ ）向原考核发证机关申请办理延期复核手续',
    list: [{
        code: 'A',
        value: '四个月'
      },
      {
        code: 'B',
        value: '三个月'
      },
      {
        code: 'C',
        value: '两个月'
      },
      {
        code: 'D',
        value: '一个月'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '项目负责人必须确保每月在现场带班生产的实际时间不少于本月施工时间的（ ），不得擅自离岗',
    list: [{
        code: 'A',
        value: '70%'
      },
      {
        code: 'B',
        value: '80%'
      },
      {
        code: 'C',
        value: '90%'
      },
      {
        code: 'D',
        value: '100%'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '模板拆除前应由施工人员提出申请并经（ ）和监理工程师批准。未经批准不得拆模',
    list: [{
        code: 'A',
        value: '施工员'
      },
      {
        code: 'B',
        value: '项目安全员'
      },
      {
        code: 'C',
        value: '项目负责人　'
      },
      {
        code: 'D',
        value: '项目技术负责人'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '附着式升降脚手架安全技术综合验收时，应对扣件的扭力矩进行检查，合格率应达（ ）；对所有螺栓联接处进行全数检查',
    list: [{
        code: 'A',
        value: '70%'
      },
      {
        code: 'B',
        value: '80%'
      },
      {
        code: 'C',
        value: '90%'
      },
      {
        code: 'D',
        value: '100%'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '附着式升降脚手架安装后应组织专门验收，验收由总承包单位组织，（ ）可以不参加验收',
    list: [{
        code: 'A',
        value: '租赁单位'
      },
      {
        code: 'B',
        value: '安装单位'
      },
      {
        code: 'C',
        value: '监理单位'
      },
      {
        code: 'D',
        value: '建设单位'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '下面关于机械安全使用叙述不正确的是（ ）',
    list: [{
        code: 'A',
        value: '机械不得带病运转'
      },
      {
        code: 'B',
        value: '用电机械设备必须从配电箱接出'
      },
      {
        code: 'C',
        value: '安全防护装置不完整的或已失效的机械不得使用'
      },
      {
        code: 'D',
        value: '各种机械操作人员应经过专业培训、考核合格或取得操作证方可持证上岗'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  },
  {
    title: '根据《建筑工程安全检查标准》JGJ59检查评定，安全生产管理检查评定一般项目包括（ ）',
    list: [{
        code: 'A',
        value: '安全生产责任制'
      },
      {
        code: 'B',
        value: '施工组织设计'
      },
      {
        code: 'C',
        value: '安全技术交底'
      },
      {
        code: 'D',
        value: '特种作业持证上岗'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '下列属于物体打击的是（ ）',
    list: [{
        code: 'A',
        value: '空中落物、崩块和滚动物体的砸伤'
      },
      {
        code: 'B',
        value: '从脚手架或垂直运输设施坠落'
      },
      {
        code: 'C',
        value: '从机械设备上坠落'
      },
      {
        code: 'D',
        value: '从楼面、屋顶、高台边缘坠落'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '下列属于起重伤害的是（ ）',
    list: [{
        code: 'A',
        value: '机械转动部分的绞入、碾压和拖带伤害'
      },
      {
        code: 'B',
        value: '机械部件的飞出伤害'
      },
      {
        code: 'C',
        value: '从机械设备上坠落'
      },
      {
        code: 'D',
        value: '吊物失衡、脱钩、倾翻、变形和折断事故的伤害'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '高处坠落的致害物是（ ）',
    list: [{
        code: 'A',
        value: '脚手架或作业区的外立面无护栏和架面未满铺脚手板'
      },
      {
        code: 'B',
        value: '高空作业未佩挂安全带'
      },
      {
        code: 'C',
        value: '施工人员受自身的重力运动伤害'
      },
      {
        code: 'D',
        value: '失控坠落的梯笼和其他载人设备'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '生产经营单位应当制定本单位的应急预案演练计划，根据本单位的事故预防重点，每半年至少组织一次（ ）演练',
    list: [{
        code: 'A',
        value: '综合应急预案'
      },
      {
        code: 'B',
        value: '专项应急预案'
      },
      {
        code: 'C',
        value: '现场处置方案'
      },
      {
        code: 'D',
        value: '现场应急预案'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'C'
  },
  {
    title: '属于扣件式钢管脚手架检查评分表中一般项目的是（ ）',
    list: [{
        code: 'A',
        value: '施工方案'
      },
      {
        code: 'B',
        value: '立杆基础'
      },
      {
        code: 'C',
        value: '架体与建筑结构拉结'
      },
      {
        code: 'D',
        value: '架体防护'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '属于施工用电检查评分表中一般项目的是（ ）',
    list: [{
        code: 'A',
        value: '配电室与配电装置'
      },
      {
        code: 'B',
        value: '配电箱与开关箱'
      },
      {
        code: 'C',
        value: '配电线路'
      },
      {
        code: 'D',
        value: '接地与接零保护系统'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'A'
  },
  {
    title: '属于塔式起重机检查评分表中一般项目的是（ ）',
    list: [{
        code: 'A',
        value: '行程限位装置'
      },
      {
        code: 'B',
        value: '吊钩、滑轮、卷筒与钢丝绳'
      },
      {
        code: 'C',
        value: '载荷限制装置'
      },
      {
        code: 'D',
        value: '基础与轨道'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'D'
  },
  {
    title: '不属于按教育的时间分类的是（ ）',
    list: [{
        code: 'A',
        value: '经常性的安全教育'
      },
      {
        code: 'B',
        value: '长期性的安全教育'
      },
      {
        code: 'C',
        value: '节假日加班的安全教育'
      },
      {
        code: 'D',
        value: '季节性施工的安全教育'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'B'
  }
])

select.map((k, i) => { k.index = i; k.type = '2' })

export default select