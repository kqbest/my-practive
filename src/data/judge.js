import { reactive } from 'vue'

const judge = reactive([{
    title: '发包单位及其工作人员在建筑工程发包中不得收受贿赂、回扣或者索取其他好处',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '建设工程招标的，应当按照招标文件规定的评标标准和程序对标书进行评价比较，在具备相应资质条件的投标者中，按报价最低原则选定中标者',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '承包建筑工程的单位应当持有依法取得的资质证书，取得证书后可以承揽任何工程',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '设计单位应当向建筑施工企业提供与施工现场相关的地下管线资料，建筑施工企业应当采取措施加以保护',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '《中华人民共和国安全生产法》是属于行政法规的范畴',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '矿山、金属冶炼、建筑施工、道路运输单位和危险物品的生产、经营、储存单位，应当设置安全生产管理机构或者配备专职安全生产管理人员',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '生产经营单位应当在有较大危险因素的生产经营场所和有关设施、设备上，设置明显的安全警示标志',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '生产经营单位应当安排用于配备劳动防护用品、进行安全生产培训的经费',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '生产经营单位必须依法参加工伤社会保险，为从业人员缴纳保险费',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '国家对严重危及生产安全的工艺、设备实行改进制度。生产经营单位不得使用应当淘汰的危及生产安全的工艺、设备',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '生产经营单位的从业人员有权了解其作业场所和工作岗位存在的危险因素、防范措施及事故应急措施，有权对本单位的安全生产工作提出建议',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '施工单位必须遵守安全生产法律、法规的规定，保证建设工程的经济效益及技术先进性',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '施工单位的项目负责人应当由取得相应执业资格的人员担任，对建设工程项目的安全施工负责',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '施工现场临时搭建的建筑物应当符合安全使用要求。施工现场使用的装配式活动房屋应当具有产品合格证',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '施工单位应当在施工现场建立消防安全责任制度，确定消防安全责任人',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '施工单位专职安全生产管理人员依法对本单位的安全生产工作全面负责',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '建设工程实行施工总承包的，由监理单位对施工现场的安全生产负总责',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '施工现场暂时停止施工的，监理单位应当做好现场防护',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '建设单位对因建设工程施工可能造成损害的毗邻建筑物、构筑物和地下管线等，应当采取专项防护措施',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '建设工程施工前，施工单位负责项目管理的技术人员应当对有关安全施工的技术要求向施工作业班组、作业人员作出详细说明，并由技术人员签字确认',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '专职安全生产管理人员对违章指挥、违章操作的，应当立即报告，但无权制止施工单位的行为',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '施工单位应当制定本单位生产安全事故应急救援预案，建立应急救援组织或者配备应急救援人员，配备必要的应急救援器材、设备，并定期组织演练',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '设计单位应当按照法律、法规和工程建设强制性标准进行设计，防止因设计不合理导致生产安全事故的发生',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '建筑施工企业安全生产许可证颁发管理机关应当每年向同级安全生产监督管理部门通报其安全生产许可证颁发和管理情况',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '国务院安全生产监督管理部门和省、自治区、直辖市人民政府、县级市人民政府安全生产监督管理部门对建筑施工企业取得安全生产许可证的情况进行监督',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '情况紧急时，事故现场有关人员可以直接向事故发生地县级以上人民政府安全生产监督管理部门和负有安全生产监督管理职责的有关部门报告',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '事故发生后，有关单位和人员应妥善保护事故现场以及相关证据',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '安全生产监督管理部门和负有安全生产监督管理职责的有关部门应当向社会公布值班电话，受理事故报告和举报',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '未造成人员伤亡的一般事故，县级人民政府也可以委托事故发生单位组织事故调查组进行调查',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '上级人民政府认为必要时，可以调查下级人民政府负责调查的事故',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '事故调查组有权向有关单位和个人了解与事故有关的情况，并要求其提供相关文件、资料，有关单位和个人不得拒绝',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '事故调查报告报送负责事故调查的人民政府后，事故调查工作即告结束',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '事故调查中需要进行技术鉴定的，事故调查组应当委托具有国家规定资质的单位进行技术鉴定，不可以直接组织专家进行技术鉴定',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '事故调查组成员可随时发布有关事故的信息',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '根据《建筑起重机械安全监督管理规定》,实行施工总承包的，由施工总承包单位组织验收',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '根据《建筑起重机械安全监督管理规定》,检验检测机构和检验检测人员对检验检测结果、鉴定结论依法承担法律责任',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '根据《建筑起重机械安全监督管理规定》,使用单位应当在建筑起重机械活动范围内设置明显的安全警示标志，对集中作业区做好安全防护',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '根据《建筑起重机械安全监督管理规定》,使用单位应当设置相应的设备管理机构或者配备专职的设备管理人员',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '监理单位发现施工单位未落实施工组织设计及专项施工方案中安全防护和文明施工措施的，有权责令其立即整改',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '依法进行工程招投标的项目，招标方或具有资质的中介机构编制招标文件时，没必要单独列出安全防护、文明施工措施项目清单',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '施工现场劳动保护用品的质量情况不作为认定企业是否降低安全生产条件的内容之一',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '劳务分包单位施工人员在50人－200人的，应当配备1名专职安全生产管理人员',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '《建设工程高大模板支撑系统施工安全监督管理导则》规定，模板支撑系统可以与施工脚手架、物料周转料平台等架体相连接',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '建筑施工企业更换项目经理，应按照规定程序进行',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '项目负责人应对在工程设计使用年限内的工程质量承担相应责任',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '根据国发[2010]23号文，要强化企业安全生产属地管理',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '根据浙政发[2010]47号文，要建立安全生产“黑名单”制度',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '各地建设行政主管部门每年要定期或不定期的开展对企业是否具备安全生产条件进行检查，检查比例不少于企业总数的10％',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '企业职工必须全部经过安全培训合格后上岗',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '安全生产监督管理要严格落实“定岗定位”、“一岗一责”',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '全面开展安全生产标准化建设，强制企业开展安全生产标准化活动',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '据省建设厅《关于切实加强建设工程领域安全生产工作的意见》，质监部门负责对流通领域建筑材料和劳动防护用品的质量实施监督管理',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '根据省建设厅《关于切实加强建设工程领域安全生产工作的意见》，各级各有关部门每季度至少组织一次安全生产大检查，部门主要负责人及分管负责人要带头参加检查',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '建筑业企业必须按规定与所招的劳务人员签订劳动合同，并依法为其交纳有关社会保险',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '土体经过挖掘后，组织遭受破坏，体积因松散而增加的性质称为土的可松性',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '土坡坡度要根据工程地质和土坡高度，结合当地同类土体的稳定坡度值确定',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '土方开挖施工时应遵循自上而下的开挖顺序，严禁先切除坡脚，并不得超挖',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '流砂的发生与动水压力有关，动水压力系指地下水在渗流时受到土颗粒的阻力，同时水对土颗粒相应地产生一种反作用力，这一反作用力就称为动水压力',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '挡土墙的作用主要用来维护土体边坡的稳定，防止坡体的滑移和土边坡的坍塌',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '基坑(槽)施工中可不防止地面水流入坑沟内',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '盾构进出洞的整个工艺流程是起始和结束两个环节',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '盾构进出洞都存在相当大的危险性，因此，对策和监控措施必须落实到位',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '行车垂直运输主要包括运用行车将盾构推进所需的施工材料吊运至井下，将井下的出土箱等重物吊至地面',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '支撑体系中，严禁将上段的钢管立杆与下段钢管立杆错开固定在水平拉杆上',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '门架钢管模板支架，加固杆、剪刀撑必须与脚手架同步搭设',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '安装钢筋模板组合体时，吊索应按模板设计的吊点位置绑扎',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '在下层楼板上支模板时无需考虑楼板的承载能力',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '计算模板及支架结构或物体的强度、稳定性和连接的强度时，应采用荷载设计值',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '计算模板的承载能力极限状态，应采用荷载效应的基本组合',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '模板支撑架必须与脚手架进行可靠连接，增加整个体系的稳定性',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '化学纤维绳应远离明火和高温，但可在露天长期暴晒',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '多次使用过的桅杆，在重新组装时，每5m长度内中心线偏差和局部塑性变形不应大于10㎜',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '电动卷扬机用完后，可以不切断电源，但要将控制器放到零位，用保险闸自动刹紧，并拉紧跑绳',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '较重要的地锚在使用时，必须设专人检查绳卡是否牢固，地锚有无松动及被拉出的危险',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '履带式起重机操作灵活，使用方便，车身能360°回转，并且可以载荷行驶，越野性能好，机动性好，可长距离转移并对道路无破坏性',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '大型吊车吊装技术的基本原理就是利用吊车提升重物的能力，通过吊车旋转、变幅等动作，将工件吊装到指定的空间位置',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '桅杆滑移法吊装是利用桅杆起重机提升滑轮组能够向上提升这一动作，设置尾排及其他索具配合，将立式静置工件吊装就位',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '拆除管道及容器时，必须查清其残留物的种类、化学性质，采取相应措施后，方可进行拆除施工',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '拆除工程施工过程中，当发生重大险情或生产安全事故时，应及时排除险情、组织抢救、保护事故现场，并向有关部门报告',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '挖掘机向运土车辆装车时，司机离开驾驶室后也不得将铲斗越过驾驶室装车',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '铲运机上、下坡道时，应低速行驶，不得中途换档，下坡时不得空档滑行',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '在行驶或作业中，除驾驶室外，装载机任何地方均严禁乘坐或站立人员',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '施工现场应按地基承载力不少于65kP对的要求进行整平压实',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '桩锤启动前应注意使桩帽、桩锤和桩在同一轴线上，防止偏心打桩',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '搅拌机作业中，当料斗升起时，严禁任何人在料斗下停留或通过',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '搅拌车运输混凝土途中，发现水分蒸发，可适当加水，以保证混凝土质量',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '当塔机吊重超过最大起重量并小于最大起重量的120％时，应停止提升方向的运行，但允许机构有下降方向的运动',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '起重机可以越过无防护设施的外电架空线路作业',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '塔机安装时，地下节严禁重复使用，严禁采用标准节代替',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '塔机顶升、加节过程中，吊臂可以作缓慢的回转动作，因此回转制动器不必刹住',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '起重机的缆风绳安全系数必须大于2',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '施工升降机运行到最上层或最下层时，可以采用限位装置作为停止运行的控制开关',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '施工机具应有专人管理，无人操作时应切断电源',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '连墙件在脚手架中的作用是不论有风无风均受力，既承传水平风荷载，又承传因约束脚手架平面外变形所产生的水平力',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '作用于脚手架上的风荷载标准值WK的大小与工程所在地区的基本风压W0、风压高度变化系数μZ、风荷体型系数μS等因素有关',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '对脚手架立杆接长的规定是：除顶层顶步外，其余各层各步必须采用搭接连接',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '钢管扣件式脚手架的安全网应固定在外立杆的外侧，将网围在各杆件的外侧',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '外脚手架的卸料平台应与脚手架断开，有单独的支撑系统，严禁与脚手架连接',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '扣件拧紧扭力矩不应小于40N.m，主要这是因为拧紧扭力矩过小，会使脚手架的整体刚度过低，降低脚手架的整体稳定性',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '暴风雪及台风暴雨后，应对高处作业安全设施逐一加以检查。发现有松动、变形、损坏或脱落等现象，应立即修理完善',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '对邻近的人与物有坠落危险性的其他竖向孔、洞口，均应予以设盖板或加以防护，并有固定其位置的措施',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '防护棚搭设与拆除时，在设警戒区，并派专人监护后可以上下同时进行',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '高处作业安全防护措施验收时，方案编制人、施工负责人、监理工程师、安全员均应参加验收，架子工则无需参加验收',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '攀登和悬空高处作业人员以及搭设高处作业安全设施的人员，必须经过上岗培训，并定期进行体格检查',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '采用人字梯作业时，只有高级工可以站在梯子上移动梯子或在最顶层作业',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '施工前，应逐级进行安全技术教育及交底，落实所有安全技术措施和人身防护用品，未经落实时不得进行施工',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '多层建筑施工所使用的密目式安全网，没有阻燃性能的要求',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '施工现场用电工程的二级漏电保护系统中，漏电保护器可以分设于分配电箱和开关箱中',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '一般场所开关箱中漏电保护器的额定漏电动作电流应不大于30mA，额定漏电动作时间不应大于0.01s',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '需要三相五线制配电的电缆线路必须采用五芯电缆',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '塔式起重机的机体已经接地，其电气设备的外露可导电部分可不再与PE线连接',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '配电箱和开关箱中的隔离开关可采用普通断路器',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '配电箱和开关箱中的隔离开关可采用具有可见分断点的断路器',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '我省施工现场临时用电采用三级配电三级漏电保护',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '室外使用的电焊机应设有防水、防晒、防砸的机棚，并备有消防用品',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '焊接铜、铝、锌、锡、铅等有色金属时，同焊接普通钢材一样，焊工应采用相同的安全措施',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '焊件进行临时点固时可由配合焊工作业的人员进行',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '电焊钳过热，应浸在水中冷却后使用',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '职业健康检查费用由劳动者本人承担',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '用人单位与劳动者订立劳动合同时，应当将工作过程中可能产生的职业病危害及其后果、职业病防护措施和待遇等告知劳动者，不须在劳动合同中写明',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '劳动者离开用人单位时，要索取本人职业健康监护档案复印件时，用人单位可以有偿提供',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '患矽肺病的人主要是吸入了硅酸盐粉尘',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '尘肺病就是矽肺病',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '接触苯会中毒，而接触甲苯不会中毒',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '建设项目的职业病防护设施应按照规定与主体工程同时投入生产和使用',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '当可燃物和着火源结合在一起即可能着火燃烧',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '能与空气中的氧或其他氧化剂起剧烈反应的物质，都称为可燃物质',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '物质的燃点越高，发生的危险性越大',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '建筑物的耐火等级是以梁、柱为基准划分的',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '在高压电线下面，可以搭设较矮的临时建筑物，但不得堆放易燃材料',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '贮存易燃物品的仓库大门应当向内开',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '在一、二、三级动火区域进行焊割作业，焊工必须持操作证动火作业',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '电源开关、控制箱等设施加锁后不用设专人负责',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '施工场地要在结冻前平整完工、道路要畅通，并有防止路面结冰的措施',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '工地职工宿舍冬季煤炉设专人管理、房间设通风孔',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '锅炉房可以与人员集中的房间相邻',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '锅炉的水位事故包括缺水和满水事故',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '满水的主要危害是降低蒸汽品质，损害甚至破坏过热器',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '使用中的气瓶与明火距离不应小于10m',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '施工企业应建立健全安全生产管理体系，明确各类岗位人员的安全生产责任',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '项目部对班组安全生产责任考核每半月不少于一次',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '砌体围挡宜采用空斗墙砌筑方式',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '现场出入口应设专人管理，根据需要可设门卫值班室',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '易燃易爆物品可和其它材料一起储藏在库房内，但应制定防火措施',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '施工现场必须设有“五牌二图”，并固定在现场主要进出口处的外脚手架上',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '办公区、生活区宜位于人员坠落半径和塔吊等机械作业半径之外。当不能满足要求时，应设置双层安全防护棚',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '两层活动房层高不宜大于3.5m，总高度不宜大于6.5m',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '施工现场环境保护应编制专项施工方案',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '施工现场易产生扬尘污染的路面、裸露的场地及集中堆放土方等，必须种植绿色植被，防止扬尘飞扬',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '在大风天气里可以进行对环境产生扬尘污染的土方回填、运转作业',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '施工污水经沉淀后方可排入市政雨水管网或河流',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '现场动用明火必须办理动火批准手续，配备动火监护人员和灭火器材，动火过程有专人监护',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '为了安全使用，施工现场不同使用功能临时用房应分开建造，如现场办公用房、宿舍不应组合建造',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '当工程桩采用挤土型桩时,宜先进行支护结构施工,再施工工程桩',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '工程桩后施工、逆作法施工、盆式或岛式施工等都可能对基坑支护结构产生影响，应采取措施避免或减少不利影响',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '挖土机械不得直接在工程桩顶部行走',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '挖土机械严禁碰撞工程桩',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '脚手架基础影响范围内不得进行挖掘作业',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '钢管脚手架严禁使用壁厚小于3.0mm的钢管',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '钢管脚手架搭设使用的扣件应采用可锻铸铁，不得有裂纹',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '剪刀撑应从底部边角沿长度和高度方向连续设置至顶部',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '脚手架拆除时，先将连墙件整层拆除后再拆脚手架',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '承插型盘扣式钢管脚手架首层立杆宜采用不同长度的立杆交叉布置',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '悬挑脚手架的悬挑梁必须采用角钢',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '附着支承结构应采用焊接件与建筑物进行可靠连接',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '卸料平台必要时可与脚手架连接，但严禁与支模架、垂直运输机械等连接',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '支撑结构使用过程中，严禁拆除构配件',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '模板支撑架安装后的扣件螺栓扭紧力矩应达到45~60N.m',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '进入施工现场作业区者必须戴好安全帽',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '施工现场安全帽宜有企业标志，分色佩戴',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '室外配电线路采用单根绝缘导线架空敷设',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '配电箱、开关箱的电源进线端严禁采用插头和插座活动连接',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '齿轮齿条式货用升降机的最大安装高度应符合产品使用说明书的规定',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '施工升降机紧急情况下应能及时切断货用施工升降机的总控制电源，电源切断后工作照明应同时断电',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '当施工升降机基础设置在地下室顶板、楼面等主体结构上时，应对主体结构进行验算',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '附墙架附着点处可设置在非建筑主体结构处，其承载力应滿足使用说明书的要求',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '当货用升降机井架式导轨架与建筑结构时，附墙架间距应符合使用说明书的要求，并不得大于9m',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '货用升降机吊笼与升降机导轨架的颜色应统一',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '每隔三个班次作业前，应按规定日检、试车；使用期间，使用单位应按使用说明书的要求对施工升降机进行定期检查保养',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '塔式起重机的安装、顶升、降节和拆除应编制专项施工方案',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '使用单位或产权单位应按照自身的要求对塔式起重机进行自行检测和维护保养',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '行走式塔式起重机轨道应设置极限位置阻挡器',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '塔式起重机附着装置的杆件与建筑物及塔身之间的连接，不应采用铰接，应该焊接以保证强度',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '附着杆应可调节杆长（短）',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '塔式起重机拆卸作业应连续进行；当遇特殊情况拆卸作业不能继续时，应采取措施保证塔式起重机处于安全状态',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '塔式起重机应确保在非工作工况时臂架能随风转动',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '起重吊装因天气原因停止作业的，重新作业前，应先试吊，确认各种安全装置、制动器灵敏可靠后方可进行作业',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '起重机进场使用后应进行检查，各项技术及安全性能合格即可用',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '气瓶必须装有防震圈和安全防护帽。乙炔瓶使用中应增设回火装置',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '打桩机的行走路线地基承载力应符合专项施工方案的要求',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '相关人员应对吊篮悬挂机构支撑点处结构的承载能力进行复核确认',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '高处作业吊篮电器箱的防水、防震、防尘措施要可靠',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '非电工严禁私拆乱接电气线路、插头、插座、电气设备、电灯等',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '电线在地面、施工楼面上拖拉要注意安全',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '绿色施工是指工程建设中，在保证质量的前提下，通过科学管理和技术进步，最大限度地节约资源与减少对环境负面影响的施工活动',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '尽量避免或减少施工过程中的光污染。严禁夜间施工',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '事故——是一种违背意志、失去控制，不希望有的意外事件',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '事故隐患——未被事先识别或未采取必要的风险控制措施，可能直接导致事故的根源',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '人的不安全行为对事故发生起着决定性的作用',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '特别重大、重大事故逐级上报至国务院住房城乡建设主管部门，一般事故、较大事故逐级上报至省级住房城乡建设主管部门。必要时，住房城乡建设主管部门可以越级上报事故情况',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '项目部每周或每旬由公司主要负责人带队组织定期的安全大检查',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '施工班组每天上班前由施工员和安全值日人员组织班前安全检查',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '建筑施工企业和项目部应建立定期安全检查制度，明确检查方式、时间、内容、整改、处置措施和复查等内容。检查次数企业每月不应少于一次，项目部每周不应少于一次，专职安全生产管理人员应每天巡查，每次检查应有书面记录',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '作业人员发现安全隐患的应立即停止施工，报告公司负责人',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '安全技术交底工作完毕后，所有参加交底的人员必须履行签字手续，班组、交底人、安全员三方各留执一份，并记录存档',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '安全技术交底必须在分部分项工程作业过程中进行，交底时不但要口头讲解，同时应有书面文字材料（或影像资料），“交底内容”栏不够填写的可附有关资料',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '模板工程所用的钢管、扣件等承重杆件、连接件应具有产品合格证、生产许可证、检测报告等，并对其表面观感、重量、力学性能等物理指标进行检查和抽样检测，并有检测机构出具检测报告',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '模板工程的验收应按施工部位分层分段验收。验收结果应尽量量化，按照《验收表》、模板支架专项施工方案以及标准规范等逐项验收',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '新钢管、扣件应有产品质保书、生产许可证、检测报告等，并对其观感质量、重量、力学性能等物理指标进行全数检测',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '临时用电安全技术综合验收由总承包项目部组织，项目负责人、项目技术负责人、专职安全员、安装电工、专业监理工程师应当参加验收并加盖施工项目部章',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '大型临时施工用电验收应由监理专业工程师参加。验收中发现不符合要求的，总监应另签发整改记录，并进行复验',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '绝缘电阻和漏电保护器测试由安装员进行，测试设备应定期校核',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '错误'
  },
  {
    title: '打桩机操作指挥人员应持有有效证件上岗',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '工程项目部应当有专人对机械设备进行日常维护保养，并填写维护保养记录',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  },
  {
    title: '安全技术归档文件应为原件。因各种原因不能使用原件的，应在复印件上加盖原件存放单位的印章，并应有经办人签字及时间',
    list: [{
      code: '正确',
      value: '正确'
    }, {
      code: '错误',
      value: '错误'
    }],
    isShow: false,
    handAnswer: '',
    answer: '正确'
  }
])

judge.map((k, i) => { k.index = i })

export default judge