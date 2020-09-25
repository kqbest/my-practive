import { reactive } from 'vue'

const multipleSelect = reactive([{
    title: '超越本单位资质等级承揽工程的，（ ）',
    list: [{
        code: 'A',
        value: '责令停止违法行为'
      },
      {
        code: 'B',
        value: '处以罚款'
      },
      {
        code: 'C',
        value: '可以责令停业整顿，降低资质等级'
      },
      {
        code: 'D',
        value: '情节严重的，吊销资质证书'
      },
      {
        code: 'E',
        value: '有违法所得的，予以没收'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '承包单位将承包的工程转包的，或者违反中华人民共和国建筑法规定进行分包的，（ ）',
    list: [{
        code: 'A',
        value: '没收违法所得，并处罚款'
      },
      {
        code: 'B',
        value: '责令改正'
      },
      {
        code: 'C',
        value: '直接追究单位的刑事责任'
      },
      {
        code: 'D',
        value: '可以责令停业整顿，降低资质等级'
      },
      {
        code: 'E',
        value: '情节严重的，吊销资质证书'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  },
  {
    title: '根据《中华人民共和国建筑法》，建筑施工企业在编制施工组织设计时，对专业性较强的工程项目（ ）',
    list: [{
        code: 'A',
        value: '应当编制专项安全施工组织设计'
      },
      {
        code: 'B',
        value: '视情况决定是否编制专项安全施工组织设计'
      },
      {
        code: 'C',
        value: '不必编制专项安全施工组织设计'
      },
      {
        code: 'D',
        value: '采取安全技术措施'
      },
      {
        code: 'E',
        value: '视情况决定是否采取安全技术措施'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AD'
  },
  {
    title: '根据《中华人民共和国建筑法》，建筑施工企业应当在施工现场（ ）',
    list: [{
        code: 'A',
        value: '采取维护安全的措施'
      },
      {
        code: 'B',
        value: '采取防范危险的措施'
      },
      {
        code: 'C',
        value: '采取预防火灾的措施'
      },
      {
        code: 'D',
        value: '有条件的，应当对施工现场实行封闭管理'
      },
      {
        code: 'E',
        value: '对可能造成损害的毗邻的建筑物采取安全防护措施'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '安全生产的目的包括（ ）',
    list: [{
        code: 'A',
        value: '防止和减少生产安全事故'
      },
      {
        code: 'B',
        value: '保障人民群众生命和财产安全'
      },
      {
        code: 'C',
        value: '促进经济社会持续健康发展'
      },
      {
        code: 'D',
        value: '减少项目成本'
      },
      {
        code: 'E',
        value: '加快项目进度'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABC'
  },
  {
    title: '生产经营单位对重大危险源应当登记建档，进行定期（ ），并制定应急预案，告知从业人员和相关人员在紧急情况下应当采取的应急措施',
    list: [{
        code: 'A',
        value: '检查'
      },
      {
        code: 'B',
        value: '检测'
      },
      {
        code: 'C',
        value: '评估'
      },
      {
        code: 'D',
        value: '监控'
      },
      {
        code: 'E',
        value: '报告'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCD'
  },
  {
    title: '某施工单位项目部在城市街区进行深基坑开挖工程，依照《安全生产法》规定，以下表述正确的是（ ）',
    list: [{
        code: 'A',
        value: '施工单位应当登记建档'
      },
      {
        code: 'B',
        value: '施工单位应当制定应急预案'
      },
      {
        code: 'C',
        value: '施工单位作的应急措施应经安全监督部门批准'
      },
      {
        code: 'D',
        value: '施工单位作的应急措施应经安全监督部门论证'
      },
      {
        code: 'E',
        value: '施工单位作的应急措施应经安全监督部门备案'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABE'
  },
  {
    title: '（ ）单位有进行安全生产宣传教育的义务，有对违反安全生产法律、法规的行为进行舆论监督的权利',
    list: [{
        code: 'A',
        value: '新闻'
      },
      {
        code: 'B',
        value: '出版'
      },
      {
        code: 'C',
        value: '广播'
      },
      {
        code: 'D',
        value: '电影'
      },
      {
        code: 'E',
        value: '电视'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '负有安全生产监督管理职责的部门（ ）',
    list: [{
        code: 'A',
        value: '应当公开举报电话、信箱或者电子邮件地址'
      },
      {
        code: 'B',
        value: '应当受理有关安全生产的举报'
      },
      {
        code: 'C',
        value: '受理的举报事项经调查核实后，应当形成书面材料'
      },
      {
        code: 'D',
        value: '需要落实整改措施的，报经有关负责人签字并督促落实'
      },
      {
        code: 'E',
        value: '建立举报制度'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '安全生产监督检查人员（ ）',
    list: [{
        code: 'A',
        value: '执行监督检查任务时，必须出示有效的监督执法证件'
      },
      {
        code: 'B',
        value: '对涉及被检查单位的技术秘密和业务秘密，应当为其保密'
      },
      {
        code: 'C',
        value: '应当将检查的时间、地点、内容、发现的问题及其处理情况，作出书面记录，并由检查人员和被检查单位的负责人签字'
      },
      {
        code: 'D',
        value: '被检查单位的负责人拒绝签字的，检查人员应当将情况记录在案，并向负有安全生产监督管理职责的部门报告'
      },
      {
        code: 'E',
        value: '应当忠于职守，坚持原则，秉公执法'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '发生生产安全事故，对负有责任的生产经营单位除要求其依法承担相应的赔偿等责任外，由安全生产监督管理部门依照（ ）规定处以罚款',
    list: [{
        code: 'A',
        value: '发生一般事故，处二十万元以上五十万元以下的罚款'
      },
      {
        code: 'B',
        value: '发生较大事故，处五十万元以上一百万元以下的罚款'
      },
      {
        code: 'C',
        value: '发生重大事故，处一百万元以上五百万元以下的罚款'
      },
      {
        code: 'D',
        value: '发生特别重大事故，处五百万元以上一千万元以下的罚款'
      },
      {
        code: 'E',
        value: '发生特别重大事故，情况特别严重的，处一千万元以上二千万元以下的罚款'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '下列（ ），必须遵守安全生产法律、法规的规定，保证建设工程安全生产',
    list: [{
        code: 'A',
        value: '建设单位'
      },
      {
        code: 'B',
        value: '设计单位'
      },
      {
        code: 'C',
        value: '施工单位'
      },
      {
        code: 'D',
        value: '工程监理单位'
      },
      {
        code: 'E',
        value: '建设行政主管部门'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '根据《建设工程安全生产管理条例》，建设单位在编制工程概算时，应当确定（ ）所需费用',
    list: [{
        code: 'A',
        value: '现场卫生条件'
      },
      {
        code: 'B',
        value: '建设工程安全作业环境'
      },
      {
        code: 'C',
        value: '工程施工'
      },
      {
        code: 'D',
        value: '安全施工措施'
      },
      {
        code: 'E',
        value: '建设工程安全措施'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BD'
  },
  {
    title: '某施工单位拟租赁一家设备公司的塔吊，依照《建设工程安全生产管理条例》，设备公司应出具塔吊的（ ）',
    list: [{
        code: 'A',
        value: '发票'
      },
      {
        code: 'B',
        value: '原始合同'
      },
      {
        code: 'C',
        value: '检测合格证明'
      },
      {
        code: 'D',
        value: '生产许可证'
      },
      {
        code: 'E',
        value: '产品合格证'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CDE'
  },
  {
    title: '根据《建设工程安全生产管理条例》施工单位在采用（ ）时，应当对作业人员进行相应的安全生产教育培训',
    list: [{
        code: 'A',
        value: '新工艺'
      },
      {
        code: 'B',
        value: '新材料'
      },
      {
        code: 'C',
        value: '新结构'
      },
      {
        code: 'D',
        value: '新设备'
      },
      {
        code: 'E',
        value: '新技术'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  },
  {
    title: '施工现场的（ ）必须由专人管理，定期进行检查、维修和保养，建立相应的资料档案，并按照国家有关规定及时报废',
    list: [{
        code: 'A',
        value: '全部建筑材料'
      },
      {
        code: 'B',
        value: '施工机具及配件'
      },
      {
        code: 'C',
        value: '机械设备'
      },
      {
        code: 'D',
        value: '安全防护用具'
      },
      {
        code: 'E',
        value: '半成品'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCD'
  },
  {
    title: '县级以上人民政府负有建设工程安全生产监督管理职责的部门在各自的职责范围内履行安全监督检查职责时，有权采取下列（ ）措施',
    list: [{
        code: 'A',
        value: '要求被检查单位提供有关建设工程安全生产的文件和资料'
      },
      {
        code: 'B',
        value: '进入被检查单位施工现场进行检查'
      },
      {
        code: 'C',
        value: '纠正施工中违反安全生产要求的行为'
      },
      {
        code: 'D',
        value: '对检查中发现的安全事故隐患，责令立即排除'
      },
      {
        code: 'E',
        value: '重大安全事故隐患排除前或者排除过程中无法保证安全的，责令从危险区域内撤出作业人员或者暂时停止施工'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '根据《建设工程安全生产管理条例》，发生生产安全事故后，（ ）',
    list: [{
        code: 'A',
        value: '马上报警'
      },
      {
        code: 'B',
        value: '施工单位应当采取措施防止事故扩大'
      },
      {
        code: 'C',
        value: '保护事故现场'
      },
      {
        code: 'D',
        value: '施工单位不许采取任何措施'
      },
      {
        code: 'E',
        value: '需要移动现场物品时，应当做出标记和书面记录，妥善保管有关证物'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCE'
  },
  {
    title: '违反《建设工程安全生产管理条例》的规定，勘察单位、设计单位有下列（ ）行为之一的，责令限期改正，处10万元以上30万元以下的罚款；情节严重的，责令停业整顿，降低资质等级，直至吊销资质证书；造成重大安全事故，构成犯罪的，对直接责任人员，依照刑法有关规定追究刑事责任；造成损失的，依法承担赔偿责任',
    list: [{
        code: 'A',
        value: '超越本单位资质等级承揽工程的'
      },
      {
        code: 'B',
        value: '允许其他单位或者个人以本单位名义承揽工程的'
      },
      {
        code: 'C',
        value: '未按照法律、法规和工程建设强制性标准进行勘察、设计的'
      },
      {
        code: 'D',
        value: '未取得或以欺诈手段骗取资质证书承揽工程的'
      },
      {
        code: 'E',
        value: '采用新结构、新材料、新工艺的建设工程和特殊结构的建设工程，设计单位未在设计中提出保障施工作业人员安全和预防生产安全事故的措施建议的'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CE'
  },
  {
    title: '违反《建设工程安全生产管理条例》的规定，施工单位有下列（ ）行为之一的，责令限期改正；逾期未改正的，责令停业整顿，并处5万元以上10万元以下的罚款；造成重大安全事故，构成犯罪的，对直接责任人员，依照刑法有关规定追究刑事责任',
    list: [{
        code: 'A',
        value: '施工前未对有关安全施工的技术要求作出详细说明的'
      },
      {
        code: 'B',
        value: '未根据不同施工阶段和周围环境及季节、气候的变化，在施工现场采取相应的安全施工措施，或者在城市市区内的建设工程的施工现场未实行封闭围挡的'
      },
      {
        code: 'C',
        value: '在尚未竣工的建筑物内设置员工集体宿舍的'
      },
      {
        code: 'D',
        value: '施工现场临时搭建的建筑物不符合安全使用要求的'
      },
      {
        code: 'E',
        value: '未对因建设工程施工可能造成损害的毗邻建筑物、构筑物和地下管线等采取专项防护措施的'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '根据《建设工程安全生产管理条例》，下列说法正确的是（ ）',
    list: [{
        code: 'A',
        value: '施工单位取得资质证书后，降低安全生产条件的，责令限期改正；经整改仍未达到与其资质等级相适应的安全生产条件的，责令停业整顿，降低其资质等级直至吊销资质证书'
      },
      {
        code: 'B',
        value: '有关法律、行政法规对建设工程安全生产违法行为的行政处罚决定机关另有规定的，《建设工程安全生产管理条例》优先'
      },
      {
        code: 'C',
        value: '抢险救灾和农民自建低层住宅的安全生产管理，也适用《建设工程安全生产管理条例》'
      },
      {
        code: 'D',
        value: '军事建设工程的安全生产管理，按照中央军事委员会的有关规定执行'
      },
      {
        code: 'E',
        value: '军事建设工程的安全生产管理，也适用《建设工程安全生产管理条例》'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AD'
  },
  {
    title: '根据《建设工程安全生产管理条例》，（ ）的建设工程，设计单位应当在设计中提出保障施工作业人员安全和预防生产安全事故的措施建议',
    list: [{
        code: 'A',
        value: '采用新结构'
      },
      {
        code: 'B',
        value: '采用新材料'
      },
      {
        code: 'C',
        value: '特殊结构'
      },
      {
        code: 'D',
        value: '特殊位置'
      },
      {
        code: 'E',
        value: '采用新工艺'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  },
  {
    title: '根据《建设工程安全生产管理条例》，下列说法正确的是（ ）',
    list: [{
        code: 'A',
        value: '工程监理单位应审查施工组织设计中的安全技术措施或者专项施工方案是否符合工程建设强制性标准'
      },
      {
        code: 'B',
        value: '设计单位和注册建筑师等注册执业人员应当对其设计负责'
      },
      {
        code: 'C',
        value: '工程监理单位在实施监理过程中，发现存在安全事故隐患的，应当要求施工单位整改；情况严重的，应及时报告建设单位，但没有权利要求施工单位暂时停止施工'
      },
      {
        code: 'D',
        value: '工程监理单位在实施监理过程中，发现存在安全事故隐患的，应当要求施工单位整改；情况严重的，应当要求施工单位暂时停止施工，并及时报告建设单位'
      },
      {
        code: 'E',
        value: '工程监理单位和监理工程师应当按照法律、法规和工程建设强制性标准实施监理，并对建设工程安全生产承担监理责任'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  },
  {
    title: '安全生产许可证颁发管理机关工作人员有下列（ ）行为之一的，给予降级或者撤职的行政处分；构成犯罪的，依法追究刑事责任',
    list: [{
        code: 'A',
        value: '向不符合《安全生产许可证条例》规定的安全生产条件的企业颁发安全生产许可证的'
      },
      {
        code: 'B',
        value: '发现企业未依法取得安全生产许可证擅自从事生产活动，不依法处理的'
      },
      {
        code: 'C',
        value: '发现取得安全生产许可证的企业不再具备《安全生产许可证条例》规定的安全生产条件，不依法处理的'
      },
      {
        code: 'D',
        value: '接到对违反《安全生产许可证条例》规定行为的举报后，不及时处理的'
      },
      {
        code: 'E',
        value: '在安全生产许可证颁发、管理和监督检查工作中，索取或者接受企业的财物，或者谋取其他利益的'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '企业违反《安全生产许可证条例》，未取得安全生产许可证擅自进行生产的（ ）',
    list: [{
        code: 'A',
        value: '责令停止生产'
      },
      {
        code: 'B',
        value: '没收违法所得'
      },
      {
        code: 'C',
        value: '并处10万元以上50万元以下的罚款'
      },
      {
        code: 'D',
        value: '造成重大事故或者其他严重后果，构成犯罪的，依法追究刑事责任'
      },
      {
        code: 'E',
        value: '并处50万元以上的罚款'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '《生产安全事故报告和调查处理条例》是为了（ ），根据《中华人民共和国安全生产法》和有关法律制定的',
    list: [{
        code: 'A',
        value: '规范生产安全事故的报告和调查处理'
      },
      {
        code: 'B',
        value: '加强安全生产监督管理'
      },
      {
        code: 'C',
        value: '落实生产安全事故责任追究制度'
      },
      {
        code: 'D',
        value: '防止生产安全事故'
      },
      {
        code: 'E',
        value: '减少生产安全事故'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACDE'
  },
  {
    title: '（ ）的报告和调查处理不适用《生产安全事故报告和调查处理条例》',
    list: [{
        code: 'A',
        value: '环境污染事故'
      },
      {
        code: 'B',
        value: '核设施事故'
      },
      {
        code: 'C',
        value: '国防科研生产事故'
      },
      {
        code: 'D',
        value: '生产经营活动中发生的造成人身伤亡'
      },
      {
        code: 'E',
        value: '工程质量事故'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABC'
  },
  {
    title: '根据《生产安全事故报告和调查处理条例》，较大事故，是指（ ）的事故',
    list: [{
        code: 'A',
        value: '造成3人以上10人以下死亡'
      },
      {
        code: 'B',
        value: '10人以上50人以下重伤'
      },
      {
        code: 'C',
        value: '1000万元以上5000万元以下直接经济损失'
      },
      {
        code: 'D',
        value: '5000万元以上1亿元以下直接经济损失'
      },
      {
        code: 'E',
        value: '造成10人以上30人以下死亡'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABC'
  },
  {
    title: '事故报告应当及时、准确、完整，任何单位和个人对事故不得（ ）',
    list: [{
        code: 'A',
        value: '迟报'
      },
      {
        code: 'B',
        value: '漏报'
      },
      {
        code: 'C',
        value: '谎报'
      },
      {
        code: 'D',
        value: '瞒报'
      },
      {
        code: 'E',
        value: '通报'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '报告事故应当包括（ ）',
    list: [{
        code: 'A',
        value: '事故发生单位概况'
      },
      {
        code: 'B',
        value: '事故发生的时间、地点以及事故现场情况'
      },
      {
        code: 'C',
        value: '事故的简要经过'
      },
      {
        code: 'D',
        value: '已经采取的措施'
      },
      {
        code: 'E',
        value: '事故处理结果'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '因抢救人员、防止事故扩大以及疏通交通等原因，需要移动事故现场物件的，应当（ ）',
    list: [{
        code: 'A',
        value: '做出标志'
      },
      {
        code: 'B',
        value: '绘制现场简图并作出书面记录'
      },
      {
        code: 'C',
        value: '直接移动'
      },
      {
        code: 'D',
        value: '妥善保存现场重要痕迹、物证'
      },
      {
        code: 'E',
        value: '等待处理'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABD'
  },
  {
    title: '事故调查组应（ ）',
    list: [{
        code: 'A',
        value: '查明事故发生的经过、原因、人员伤亡情况及直接经济损失'
      },
      {
        code: 'B',
        value: '认定事故的性质和事故责任'
      },
      {
        code: 'C',
        value: '提出对事故责任者的处理建议'
      },
      {
        code: 'D',
        value: '总结事故教训，提出防范和整改措施'
      },
      {
        code: 'E',
        value: '向事故发生单位直接下达处理通知'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '事故调查组成员在事故调查工作中应当（ ）',
    list: [{
        code: 'A',
        value: '诚信公正、恪尽职守'
      },
      {
        code: 'B',
        value: '遵守事故调查组的纪律'
      },
      {
        code: 'C',
        value: '保守事故调查的秘密'
      },
      {
        code: 'D',
        value: '可随时发布有关事故的信息'
      },
      {
        code: 'E',
        value: '可直接发布事故处理结果'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABC'
  },
  {
    title: '《生产安全事故报告和调查处理条例》规定，事故发生单位及其有关人员有下列（ ）行为之一的，对事故发生单位处100万元以上500万元以下的罚款；对主要负责人、直接负责的主管人员和其他直接责任人员处上一年年收入60%至100%的罚款',
    list: [{
        code: 'A',
        value: '伪造或者故意破坏事故现场的'
      },
      {
        code: 'B',
        value: '迟报或者漏报事故的'
      },
      {
        code: 'C',
        value: '拒绝接受调查或者拒绝提供有关情况和资料的'
      },
      {
        code: 'D',
        value: '在事故调查中作伪证或者指使他人作伪证的'
      },
      {
        code: 'E',
        value: '转移、隐匿资金、财产，或者销毁有关证据、资料的'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACDE'
  },
  {
    title: '职工有下列（ ）情形之一的，视同工伤而不是认定为工伤',
    list: [{
        code: 'A',
        value: '在工作时间和工作场所内，因工作原因受到事故伤害的'
      },
      {
        code: 'B',
        value: '在抢险救灾等维护国家利益、公共利益活动中受到伤害的'
      },
      {
        code: 'C',
        value: '在工作时间和工作岗位，突发疾病死亡或者在48小时之内经抢救无效死亡的'
      },
      {
        code: 'D',
        value: '工作时间前后在工作场所内，从事与工作有关的预备性或者收尾性工作受到事故伤害的'
      },
      {
        code: 'E',
        value: '职工原在军队服役，因战、因公负伤致残，已取得革命伤残军人证，到用人单位后旧伤复发的'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCE'
  },
  {
    title: '工伤职工有下列情形（ ），停止享受工伤保险待遇',
    list: [{
        code: 'A',
        value: '丧失享受待遇条件的'
      },
      {
        code: 'B',
        value: '拒不接受劳动能力鉴定的'
      },
      {
        code: 'C',
        value: '拒绝治疗的'
      },
      {
        code: 'D',
        value: '患职业病的'
      },
      {
        code: 'E',
        value: '事故鉴定错误的'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABC'
  },
  {
    title: '根据《建筑起重机械安全监督管理规定》,安装单位应当将建筑起重机械安装、拆卸工程专项施工方案，安装、拆卸人员名单，安装、拆卸时间等材料报（ ）审核后，告知工程所在地县级以上地方人民政府建设主管部门',
    list: [{
        code: 'A',
        value: '建设单位'
      },
      {
        code: 'B',
        value: '施工总承包单位'
      },
      {
        code: 'C',
        value: '监理单位'
      },
      {
        code: 'D',
        value: '质量监督部门'
      },
      {
        code: 'E',
        value: '制造单位'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BC'
  },
  {
    title: '根据《建筑起重机械安全监督管理规定》,建筑起重机械安装完毕后，安装单位应当按照安全技术标准及安装使用说明书的有关要求对建筑起重机械进行（　）',
    list: [{
        code: 'A',
        value: '抽检'
      },
      {
        code: 'B',
        value: '自检'
      },
      {
        code: 'C',
        value: '互检'
      },
      {
        code: 'D',
        value: '调试'
      },
      {
        code: 'E',
        value: '试运转'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BDE'
  },
  {
    title: '根据《建筑起重机械安全监督管理规定》,建筑起重机械安装、拆卸工程档案应当包括以下（ ）资料',
    list: [{
        code: 'A',
        value: '安装、拆卸合同及安全协议书'
      },
      {
        code: 'B',
        value: '安装、拆卸工程专项施工方案'
      },
      {
        code: 'C',
        value: '安全施工技术交底的有关资料'
      },
      {
        code: 'D',
        value: '安装工程验收资料'
      },
      {
        code: 'E',
        value: '安装、拆卸工程生产安全事故应急救援预案'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '根据《建筑起重机械安全监督管理规定》,审核建筑起重机械安装、拆卸工程专项施工方案是（ ）应当履行的安全职责',
    list: [{
        code: 'A',
        value: '安装单位'
      },
      {
        code: 'B',
        value: '使用单位'
      },
      {
        code: 'C',
        value: '总承包单位'
      },
      {
        code: 'D',
        value: '监理单位'
      },
      {
        code: 'E',
        value: '建设单位'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CD'
  },
  {
    title: '建设单位与施工单位应当在施工合同中明确安全防护、文明施工措施费用，以及（ ）等条款',
    list: [{
        code: 'A',
        value: '费用预付'
      },
      {
        code: 'B',
        value: '费用垫付'
      },
      {
        code: 'C',
        value: '支付计划'
      },
      {
        code: 'D',
        value: '使用要求'
      },
      {
        code: 'E',
        value: '调整方式'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACDE'
  },
  {
    title: '施工单位应当确保安全防护、文明施工措施费专款专用，施工单位(　)负责对建筑工程安全防护、文明施工措施的组织实施进行现场监督检查，并有权向建设主管部门反映情况',
    list: [{
        code: 'A',
        value: '安全生产管理机构'
      },
      {
        code: 'B',
        value: '项目负责人'
      },
      {
        code: 'C',
        value: '项目技术负责人'
      },
      {
        code: 'D',
        value: '专职安全生产管理人员'
      },
      {
        code: 'E',
        value: '主要负责人'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AD'
  },
  {
    title: '根据《建筑起重机械备案登记办法》规定，(　)的建筑起重机械，使用登记机关不予使用登记并有权责令使用单位立即停止使用或者拆除',
    list: [{
        code: 'A',
        value: '经检验达不到安全技术标准规定的'
      },
      {
        code: 'B',
        value: '超过制造厂家或者安全技术标准规定的使用年限的'
      },
      {
        code: 'C',
        value: '属国家和地方明令淘汰或者禁止使用的'
      },
      {
        code: 'D',
        value: '未经安装验收或者经安装验收不合格的'
      },
      {
        code: 'E',
        value: '未经检验检测或者经检验检测不合格的'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '《建设工程高大模板支撑系统施工安全监督管理导则》规定，安全技术交底的内容应包括模板支撑工程（ ）等内容，并保留记录',
    list: [{
        code: 'A',
        value: '工艺'
      },
      {
        code: 'B',
        value: '工序'
      },
      {
        code: 'C',
        value: '荷载大小'
      },
      {
        code: 'D',
        value: '作业要点'
      },
      {
        code: 'E',
        value: '搭设安全技术要求'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  },
  {
    title: '《建设工程高大模板支撑系统施工安全监督管理导则》规定，施工过程中检查项目应符合（ ）等要求',
    list: [{
        code: 'A',
        value: '安全网和各种安全防护设施符合要求'
      },
      {
        code: 'B',
        value: '立柱的规格尺寸和垂直度应符合要求，不得出现偏心荷载'
      },
      {
        code: 'C',
        value: '底座位置应正确，顶托螺杆伸出长度应符合规定'
      },
      {
        code: 'D',
        value: '垫木应满足设计要求'
      },
      {
        code: 'E',
        value: '立柱底部基础应回填夯实'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '以下内容中，应由项目经理负责组织的内容有（ ）',
    list: [{
        code: 'A',
        value: '编制施工组织设计'
      },
      {
        code: 'B',
        value: '制定质量安全技术措施'
      },
      {
        code: 'C',
        value: '单位工程和工程竣工验收'
      },
      {
        code: 'D',
        value: '实施危险性较大分部分项工程专项施工方案'
      },
      {
        code: 'E',
        value: '质量安全技术交底'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  },
  {
    title: '承重支撑架包括（ ）',
    list: [{
        code: 'A',
        value: '现浇混凝土工程的承重支模架'
      },
      {
        code: 'B',
        value: '落地脚手架'
      },
      {
        code: 'C',
        value: '钢结构安装使用的满堂承重架'
      },
      {
        code: 'D',
        value: '悬挑脚手架'
      },
      {
        code: 'E',
        value: '空间网架结构安装使用的满堂承重架'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACE'
  },
  {
    title: '《国务院关于进一步加强企业安全生产工作的通知》提出安全生产的形势依然十 分严峻，暴露出一些企业（ ），一些地方和部门安全监管不到位等突出问题',
    list: [{
        code: 'A',
        value: '重生产轻安全'
      },
      {
        code: 'B',
        value: '安全管理薄弱'
      },
      {
        code: 'C',
        value: '主体责任不落实'
      },
      {
        code: 'D',
        value: '重质量轻安全'
      },
      {
        code: 'E',
        value: '技术水平不达标'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABC'
  },
  {
    title: '《国务院关于进一步加强企业安全生产工作的通知》提出要进一步规范企业生产经营行为，加强对生产现场监督检查，严格查处（ ）行为',
    list: [{
        code: 'A',
        value: '违章指挥'
      },
      {
        code: 'B',
        value: '违规作业'
      },
      {
        code: 'C',
        value: '违反技术标准'
      },
      {
        code: 'D',
        value: '违反劳动纪律'
      },
      {
        code: 'E',
        value: '责任不明'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABD'
  },
  {
    title: '浙江省《关于进一步加强安全生产工作的意见》中指出在今后四年，每年要确保全省安全生产（ ）指标“零增长”，并力争有所下降',
    list: [{
        code: 'A',
        value: '伤亡人数'
      },
      {
        code: 'B',
        value: '死亡人数'
      },
      {
        code: 'C',
        value: '直接经济损失'
      },
      {
        code: 'D',
        value: '经济损失'
      },
      {
        code: 'E',
        value: '事故起数'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCE'
  },
  {
    title: '浙江省《关于进一步加强安全生产工作的意见》对如何落实生产经营单位安全生产主体责任提出了（ ）要求',
    list: [{
        code: 'A',
        value: '加强生产经营单位安全管理'
      },
      {
        code: 'B',
        value: '推进企业安全生产标准化建设'
      },
      {
        code: 'C',
        value: '明确安全生产管理人员责任'
      },
      {
        code: 'D',
        value: '建立企业安全诚信机制'
      },
      {
        code: 'E',
        value: '建立安全生产社会监督体系'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABD'
  },
  {
    title: '《浙江省人民政府关于进一步加强企业安全生产工作的实施意见》提出要尽快建成完善的安全生产应急救援体系，在高危行业强制推行一批安全适用的（ ）',
    list: [{
        code: 'A',
        value: '技术标准'
      },
      {
        code: 'B',
        value: '技术装备'
      },
      {
        code: 'C',
        value: '防护设施'
      },
      {
        code: 'D',
        value: '生产工具'
      },
      {
        code: 'E',
        value: '劳保用品'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BC'
  },
  {
    title: '省建设厅《关于切实加强建设工程领域安全生产工作的意见》提出，力争到2012年，全省建设工程领域安全生产保障能力明显提高，建立起较为完善的安全生产（ ）',
    list: [{
        code: 'A',
        value: '责任与目标考核体系'
      },
      {
        code: 'B',
        value: '法规制度体系'
      },
      {
        code: 'C',
        value: '政府监管体系'
      },
      {
        code: 'D',
        value: '基础保障体系'
      },
      {
        code: 'E',
        value: '信用惩戒体系'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '省建设厅《关于切实加强建设工程领域安全生产工作的意见》提出，针对建设工程（ ）的特点，建立有效的应急响应机制，形成高效顺畅、运转协调的建设工程领域安全生产应急救援体系',
    list: [{
        code: 'A',
        value: '工期长'
      },
      {
        code: 'B',
        value: '投资大'
      },
      {
        code: 'C',
        value: '高风险'
      },
      {
        code: 'D',
        value: '易发事故'
      },
      {
        code: 'E',
        value: '易突发事故'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CDE'
  },
  {
    title: '浙江省委省政府《关于加强安全生产促进安全发展的意见》（浙委发〔2014〕5号）提出，要综合运用法律、经济和教育、协商等手段，推进执法联动、管理联抓、问题联治、信息联通，确保（ ）和违法追究“五到位”，形成综合整治长效机制',
    list: [{
        code: 'A',
        value: '隐患排查'
      },
      {
        code: 'B',
        value: '隐患治理'
      },
      {
        code: 'C',
        value: '防范措施'
      },
      {
        code: 'D',
        value: '安全管理'
      },
      {
        code: 'E',
        value: '事故查处'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  },
  {
    title: '建设工程的劳务作业分包队伍必须（ ）',
    list: [{
        code: 'A',
        value: '达到一定的人数'
      },
      {
        code: 'B',
        value: '有资质'
      },
      {
        code: 'C',
        value: '成建制'
      },
      {
        code: 'D',
        value: '有独立法人资格'
      },
      {
        code: 'E',
        value: '有施工机械'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCD'
  },
  {
    title: '基础土方工程施工组织设计内容应包括（ ）',
    list: [{
        code: 'A',
        value: '勘察测量，场地平整方案'
      },
      {
        code: 'B',
        value: '排水、降水设计、支护结构体系选择和设计'
      },
      {
        code: 'C',
        value: '土方开挖方案设计'
      },
      {
        code: 'D',
        value: '基坑及周围建筑、构筑物道路管道的监测方案和保护措施'
      },
      {
        code: 'E',
        value: '楼板及屋面板混凝土浇筑方案'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '按地基的承载能力及其与地质成因的关系，将土分为（ ）',
    list: [{
        code: 'A',
        value: '岩石'
      },
      {
        code: 'B',
        value: '碎石土'
      },
      {
        code: 'C',
        value: '人工填土'
      },
      {
        code: 'D',
        value: '砂土'
      },
      {
        code: 'E',
        value: '黏性土'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '在膨胀土地区土方开挖时要符合（ ）等连续进行的规定',
    list: [{
        code: 'A',
        value: '开挖'
      },
      {
        code: 'B',
        value: '作垫层'
      },
      {
        code: 'C',
        value: '基础施工'
      },
      {
        code: 'D',
        value: '回填土连续进行'
      },
      {
        code: 'E',
        value: '工程验收'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '符合下列( )条件的为一级基坑',
    list: [{
        code: 'A',
        value: '开挖深度大于7m'
      },
      {
        code: 'B',
        value: '开挖深度大于10m'
      },
      {
        code: 'C',
        value: '与临近建筑物重要设施的距离在开挖深度以内的基坑'
      },
      {
        code: 'D',
        value: '基坑范围内有历史文物，近代优秀建筑重要管线等严加保护的基坑'
      },
      {
        code: 'E',
        value: '重要工程或支撑结构作主体结构的一部分'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  },
  {
    title: '挡土墙的计算内容包括下列（ ）',
    list: [{
        code: 'A',
        value: '挡土墙高度计算'
      },
      {
        code: 'B',
        value: '倾覆稳定性验算'
      },
      {
        code: 'C',
        value: '滑动稳定性验算'
      },
      {
        code: 'D',
        value: '墙身强度验算'
      },
      {
        code: 'E',
        value: '土压力计算'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  },
  {
    title: '为了排水，基坑开挖过程中，（ ）',
    list: [{
        code: 'A',
        value: '在坑底设集水井'
      },
      {
        code: 'B',
        value: '沿坑底的周围或中央开挖排水沟'
      },
      {
        code: 'C',
        value: '把水引入集水井'
      },
      {
        code: 'D',
        value: '然后用水泵抽走'
      },
      {
        code: 'E',
        value: '抽出的水应予以引开，严防倒流'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '洞口防护作业的范围包括（ ）',
    list: [{
        code: 'A',
        value: '行车轨道与结构井的临边防护'
      },
      {
        code: 'B',
        value: '拌浆施工区域的临边围护'
      },
      {
        code: 'C',
        value: '结构井井口的防护'
      },
      {
        code: 'D',
        value: '每一层结构井的临边围护'
      },
      {
        code: 'E',
        value: '结构上中小型预留孔的围护'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '盾构施工过程中的（ ）环节必须有安全保护措施',
    list: [{
        code: 'A',
        value: '盾构机进洞'
      },
      {
        code: 'B',
        value: '盾构机推进开挖'
      },
      {
        code: 'C',
        value: '安全教育'
      },
      {
        code: 'D',
        value: '盾构机出洞'
      },
      {
        code: 'E',
        value: '加强检查'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABD'
  },
  {
    title: '盾构施工开工阶段整个流程包括（ ）',
    list: [{
        code: 'A',
        value: '盾构机进出洞'
      },
      {
        code: 'B',
        value: '管片进场'
      },
      {
        code: 'C',
        value: '垂直运输和水平运输'
      },
      {
        code: 'D',
        value: '车架段交叉作业'
      },
      {
        code: 'E',
        value: '管片拼装'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '模板工程专项施工组织设计应包括( )',
    list: [{
        code: 'A',
        value: '模板结构设计计算书'
      },
      {
        code: 'B',
        value: '基坑支护方案'
      },
      {
        code: 'C',
        value: '安装与拆除程序与方法'
      },
      {
        code: 'D',
        value: '施工安全、消防措施'
      },
      {
        code: 'E',
        value: '模板结构布置图、构件详图、节点大样'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACDE'
  },
  {
    title: '模板按其功能分类，常用的模板主要有（ ）',
    list: [{
        code: 'A',
        value: '定型组合模板'
      },
      {
        code: 'B',
        value: '墙体大模板'
      },
      {
        code: 'C',
        value: '飞模'
      },
      {
        code: 'D',
        value: '滑动模板'
      },
      {
        code: 'E',
        value: '柱模板、梁模板'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '直接夹紧柱模板的柱箍常使用（ ）制成，其受力状态为拉弯杆件',
    list: [{
        code: 'A',
        value: '扁钢'
      },
      {
        code: 'B',
        value: '角钢'
      },
      {
        code: 'C',
        value: '槽钢'
      },
      {
        code: 'D',
        value: '木楞'
      },
      {
        code: 'E',
        value: '竹杆'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '门式钢管支架验收现场的检查项目有( )',
    list: [{
        code: 'A',
        value: '构配件齐全，质量合格，连接件牢固'
      },
      {
        code: 'B',
        value: '防护设施符合规定'
      },
      {
        code: 'C',
        value: '基础符合要求'
      },
      {
        code: 'D',
        value: '验收人员培训证明'
      },
      {
        code: 'E',
        value: '水平度与垂直度合格'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  },
  {
    title: '以下（ ）的混凝土模板支撑的安全专项施工方案，应组织专家论证',
    list: [{
        code: 'A',
        value: '高度超过8m'
      },
      {
        code: 'B',
        value: '跨度超过18m'
      },
      {
        code: 'C',
        value: '施工总荷载大于10KN/㎡'
      },
      {
        code: 'D',
        value: '集中荷载大于15KN'
      },
      {
        code: 'E',
        value: '集中线荷载大于20KN/m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABE'
  },
  {
    title: '模板及支架应能可靠的承受浇筑混凝土的（ ）',
    list: [{
        code: 'A',
        value: '施工荷载'
      },
      {
        code: 'B',
        value: '温度'
      },
      {
        code: 'C',
        value: '侧压力'
      },
      {
        code: 'D',
        value: '重量'
      },
      {
        code: 'E',
        value: '湿度'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACD'
  },
  {
    title: '安装独立梁模板时应设操作平台，严禁操作人员有（ ）的行为',
    list: [{
        code: 'A',
        value: '站在独立梁底模操作'
      },
      {
        code: 'B',
        value: '站在支柱架上操作'
      },
      {
        code: 'C',
        value: '站在柱模支架上操作'
      },
      {
        code: 'D',
        value: '站在扶梯上操作'
      },
      {
        code: 'E',
        value: '在底模、柱模支架上通行'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  },
  {
    title: '绳夹在使用时应注意( )',
    list: [{
        code: 'A',
        value: '其数量和间距与钢丝绳直径成正比'
      },
      {
        code: 'B',
        value: '一般绳夹的间距最小为钢丝绳直径的6倍'
      },
      {
        code: 'C',
        value: '绳夹的数量不得少于3个'
      },
      {
        code: 'D',
        value: '钢丝绳受力后绳夹可以移动'
      },
      {
        code: 'E',
        value: '钢丝绳受力变形后，为防止继续变形，可不拧紧绳夹'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABC'
  },
  {
    title: '多台千斤顶同时作业时，要( )',
    list: [{
        code: 'A',
        value: '编写施工方案'
      },
      {
        code: 'B',
        value: '确保同步降落 '
      },
      {
        code: 'C',
        value: '保证同步顶升'
      },
      {
        code: 'D',
        value: '动作一致 '
      },
      {
        code: 'E',
        value: '服从统一指挥 '
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  },
  {
    title: '下列属于手拉葫芦优点的有( )',
    list: [{
        code: 'A',
        value: '比其他的起重机械容易掌握'
      },
      {
        code: 'B',
        value: '使用稳当 '
      },
      {
        code: 'C',
        value: '携带方便'
      },
      {
        code: 'D',
        value: '手拉力大 '
      },
      {
        code: 'E',
        value: '结构紧凑 '
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  },
  {
    title: '手拉葫芦的适用范围包括( )',
    list: [{
        code: 'A',
        value: '构件或设备运输时拉紧捆绑的绳索'
      },
      {
        code: 'B',
        value: '小型设备或重物的短距离吊装'
      },
      {
        code: 'C',
        value: '起吊重型设备 '
      },
      {
        code: 'D',
        value: '拉紧扒杆的缆风绳'
      },
      {
        code: 'E',
        value: '起吊轻型构件 '
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  },
  {
    title: '下列属于对起重吊装使用的地锚要求的有( )',
    list: [{
        code: 'A',
        value: '严格按设计进行制作'
      },
      {
        code: 'B',
        value: '使用时不准超载'
      },
      {
        code: 'C',
        value: '使用时可适当超载'
      },
      {
        code: 'D',
        value: '可以根据现场的条件随意制作'
      },
      {
        code: 'E',
        value: '做好制作地锚的隐蔽工程记录'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABE'
  },
  {
    title: '在起重作业中常用的起重机械主要有( )',
    list: [{
        code: 'A',
        value: '塔式起重机'
      },
      {
        code: 'B',
        value: '汽车式起重机 '
      },
      {
        code: 'C',
        value: '手拉葫芦'
      },
      {
        code: 'D',
        value: '轮胎式起重机 '
      },
      {
        code: 'E',
        value: '履带式起重机'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  },
  {
    title: '桅杆扳转法吊装技术按工件和桅杆的运动形式可分为( )',
    list: [{
        code: 'A',
        value: '单转法'
      },
      {
        code: 'B',
        value: '单桅杆扳转法'
      },
      {
        code: 'C',
        value: '双转法'
      },
      {
        code: 'D',
        value: '双桅杆扳转法'
      },
      {
        code: 'E',
        value: '单吊点扳吊'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AC'
  },
  {
    title: '大型构件与设备液压同步提升系统主要由（ ）等部分组成',
    list: [{
        code: 'A',
        value: '柔性钢绞线或刚性支架承重系统'
      },
      {
        code: 'B',
        value: '电液比例液压控制系统'
      },
      {
        code: 'C',
        value: '计算机控制系统'
      },
      {
        code: 'D',
        value: '传感器检测系统'
      },
      {
        code: 'E',
        value: '液压提升器'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '铲运机作业过程由（ ）组成',
    list: [{
        code: 'A',
        value: '预松土'
      },
      {
        code: 'B',
        value: '铲土'
      },
      {
        code: 'C',
        value: '运土'
      },
      {
        code: 'D',
        value: '卸土'
      },
      {
        code: 'E',
        value: '返回'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  },
  {
    title: '单斗挖掘机的工作装置可分为（ ）作业',
    list: [{
        code: 'A',
        value: '反铲'
      },
      {
        code: 'B',
        value: '拉铲'
      },
      {
        code: 'C',
        value: '斜铲'
      },
      {
        code: 'D',
        value: '正铲'
      },
      {
        code: 'E',
        value: '抓斗'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AE'
  },
  {
    title: '打桩机工作时，严禁( )等动作同时进行',
    list: [{
        code: 'A',
        value: '吊送桩器'
      },
      {
        code: 'B',
        value: '行走 '
      },
      {
        code: 'C',
        value: '吊锺'
      },
      {
        code: 'D',
        value: '回转 '
      },
      {
        code: 'E',
        value: '吊桩 '
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  },
  {
    title: '平杆式柴油锤由（ ）等组成',
    list: [{
        code: 'A',
        value: '活塞'
      },
      {
        code: 'B',
        value: '平杆'
      },
      {
        code: 'C',
        value: '缸锤'
      },
      {
        code: 'D',
        value: '顶横梁'
      },
      {
        code: 'E',
        value: '燃油系统'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '打桩机类型应根据（ ）、施工工艺等综合考虑选择',
    list: [{
        code: 'A',
        value: '桩长'
      },
      {
        code: 'B',
        value: '桩径'
      },
      {
        code: 'C',
        value: '地质条件'
      },
      {
        code: 'D',
        value: '桩的类型'
      },
      {
        code: 'E',
        value: '桩的型号'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '钢筋调直机作用为（ ）',
    list: [{
        code: 'A',
        value: '拉伸'
      },
      {
        code: 'B',
        value: '调直'
      },
      {
        code: 'C',
        value: '切断'
      },
      {
        code: 'D',
        value: '输送'
      },
      {
        code: 'E',
        value: '消除氧化皮'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  },
  {
    title: '下列( )是塔式起重机拆装工艺编制的主要依据',
    list: [{
        code: 'A',
        value: '随机的使用、拆装说明书'
      },
      {
        code: 'B',
        value: '国家有关塔式起重机的技术标准和规范、规程'
      },
      {
        code: 'C',
        value: '随机的整机、部件的装配图、电气原理及接线图'
      },
      {
        code: 'D',
        value: '已有的拆装工艺及过去拆装作业中积累的技术资料'
      },
      {
        code: 'E',
        value: '其他单位的拆装工艺或有关资料'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '塔式起重机金属结构基本部件包括(   )',
    list: [{
        code: 'A',
        value: '转台'
      },
      {
        code: 'B',
        value: '卷扬机 '
      },
      {
        code: 'C',
        value: '底架'
      },
      {
        code: 'D',
        value: '塔身 '
      },
      {
        code: 'E',
        value: '平衡臂 '
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACDE'
  },
  {
    title: '塔式起重机最基本的工作机构包括( )',
    list: [{
        code: 'A',
        value: '起升机构'
      },
      {
        code: 'B',
        value: '限位机构'
      },
      {
        code: 'C',
        value: '回转机构'
      },
      {
        code: 'D',
        value: '行走机构'
      },
      {
        code: 'E',
        value: '变幅机构'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACDE'
  },
  {
    title: '吊钩禁止补焊，下列( )情况应予报废',
    list: [{
        code: 'A',
        value: '用20倍放大镜观察表面有裂纹及破口'
      },
      {
        code: 'B',
        value: '挂绳处断面磨损量超过原高的10％'
      },
      {
        code: 'C',
        value: '心轴磨损量超过其直径的5％'
      },
      {
        code: 'D',
        value: '表面有碰损'
      },
      {
        code: 'E',
        value: '开口度比原尺寸增加15％'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  },
  {
    title: '滑轮达到下列( )任意一个条件时即应报废',
    list: [{
        code: 'A',
        value: '轮缘破损'
      },
      {
        code: 'B',
        value: '槽底磨损量超过相应钢丝绳直径的25％'
      },
      {
        code: 'C',
        value: '有裂纹'
      },
      {
        code: 'D',
        value: '转动不灵活'
      },
      {
        code: 'E',
        value: '槽底壁厚磨损达原壁厚的20％'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  },
  {
    title: '塔式起重机力矩限制器起作用时，允许( )',
    list: [{
        code: 'A',
        value: '吊钩下降'
      },
      {
        code: 'B',
        value: '载荷向臂根方向运行'
      },
      {
        code: 'C',
        value: '吊钩上升'
      },
      {
        code: 'D',
        value: '载荷向臂端方向运行'
      },
      {
        code: 'E',
        value: '载荷自由下降'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AB'
  },
  {
    title: '建筑起重机械安装与拆卸作业，以下( )应当进行现场监督',
    list: [{
        code: 'A',
        value: '安装单位专业技术人员'
      },
      {
        code: 'B',
        value: '安装单位专职安全员'
      },
      {
        code: 'C',
        value: '设计单位专业技术人员'
      },
      {
        code: 'D',
        value: '使用单位专职安全员'
      },
      {
        code: 'E',
        value: '监理单位专职安全员'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  },
  {
    title: '脚手架专项施工方案的内容中，属于施工安全保证措施的是（ ）',
    list: [{
        code: 'A',
        value: '组织措施'
      },
      {
        code: 'B',
        value: '技术措施'
      },
      {
        code: 'C',
        value: '应急预案'
      },
      {
        code: 'D',
        value: '进度计划'
      },
      {
        code: 'E',
        value: '监测监控'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  },
  {
    title: '脚手架所用钢管应采用Q235A钢，此钢材的重要质量标准和性能是( )',
    list: [{
        code: 'A',
        value: '管壁厚度不均匀'
      },
      {
        code: 'B',
        value: '抗锈蚀性能好'
      },
      {
        code: 'C',
        value: '抗冲击性好'
      },
      {
        code: 'D',
        value: '标准屈服强度不低于235N／mm2'
      },
      {
        code: 'E',
        value: '可焊性能好'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BD'
  },
  {
    title: '在荷载分类中，将脚手板重量归于( )',
    list: [{
        code: 'A',
        value: '可变荷载'
      },
      {
        code: 'B',
        value: '永久荷载'
      },
      {
        code: 'C',
        value: '施工荷载'
      },
      {
        code: 'D',
        value: '变型荷载'
      },
      {
        code: 'E',
        value: '构配件自重'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BE'
  },
  {
    title: '纵、横向水平杆的计算内容包括( )',
    list: [{
        code: 'A',
        value: '抗弯强度和挠度'
      },
      {
        code: 'B',
        value: '地基承载力'
      },
      {
        code: 'C',
        value: '抗压强度和挠度'
      },
      {
        code: 'D',
        value: '抗剪强度和挠度'
      },
      {
        code: 'E',
        value: '与立杆的连接扣件抗滑承载力'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AE'
  },
  {
    title: '为保证脚手架立杆的安全使用，规范规定对其计算内容应有( )',
    list: [{
        code: 'A',
        value: '抗压强度'
      },
      {
        code: 'B',
        value: '稳定'
      },
      {
        code: 'C',
        value: '容许长细比'
      },
      {
        code: 'D',
        value: '抗弯强度'
      },
      {
        code: 'E',
        value: '抗剪强度'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BC'
  },
  {
    title: '计算脚手架立杆稳定时，应进行不同的荷载效应组合，它们是( )',
    list: [{
        code: 'A',
        value: '永久荷载+施工荷载'
      },
      {
        code: 'B',
        value: '永久荷载+0.85施工荷载'
      },
      {
        code: 'C',
        value: '永久荷载+施工荷载+风荷载'
      },
      {
        code: 'D',
        value: '永久荷载+0.85(施工荷载+风荷载)'
      },
      {
        code: 'E',
        value: '永久荷载'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AD'
  },
  {
    title: '计算立杆稳定性时，应选取其危险部位(或称最不利部位)，当脚手架以相同步距、纵距、横距和连墙件布置，且风荷不大时，危险部位在( )',
    list: [{
        code: 'A',
        value: '脚手架顶层立杆段'
      },
      {
        code: 'B',
        value: '脚手架半高处立杆段'
      },
      {
        code: 'C',
        value: '脚手架底层立杆段'
      },
      {
        code: 'D',
        value: '双管立杆的双管立杆段'
      },
      {
        code: 'E',
        value: '双管立杆变截面处的单立杆段'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CE'
  },
  {
    title: '下列关于毛竹临边防护栏杆的规定，( )是正确的',
    list: [{
        code: 'A',
        value: '毛竹横杆小头有效直径不应小于70mm'
      },
      {
        code: 'B',
        value: '栏杆柱小头直径不应小于60mm'
      },
      {
        code: 'C',
        value: '使用不小于16号的镀锌钢丝绑扎'
      },
      {
        code: 'D',
        value: '毛竹横杆小头有效直径不应小于80mm'
      },
      {
        code: 'E',
        value: '栏杆柱小头直径不应小于80㎜'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACE'
  },
  {
    title: '下列关于钢筋临边防护栏杆的规定，( )是正确的',
    list: [{
        code: 'A',
        value: '钢筋横杆上杆的直径不应小于16mm'
      },
      {
        code: 'B',
        value: '下杆直径不应小于14mm'
      },
      {
        code: 'C',
        value: '栏杆柱直径不应小于18mm'
      },
      {
        code: 'D',
        value: '采用电焊或镀锌钢丝绑扎固定'
      },
      {
        code: 'E',
        value: '栏杆柱直径不应小于20mm'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '进行模板支撑和拆卸时的悬空作业，下列（ ）规定是正确的',
    list: [{
        code: 'A',
        value: '严禁在连接件和支撑上攀登上下'
      },
      {
        code: 'B',
        value: '严禁在上下同一垂直面上装、拆模板'
      },
      {
        code: 'C',
        value: '支设临空构筑物模板时，应搭设支架或脚手架'
      },
      {
        code: 'D',
        value: '模板上留有预留洞时，应在安装后将洞口覆盖'
      },
      {
        code: 'E',
        value: '拆模的高处作业，应配置登高用具或搭设支架'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '高处作业中的（ ）必须在施工前进行检查，确认其完好，方可投入使用',
    list: [{
        code: 'A',
        value: '安全标志'
      },
      {
        code: 'B',
        value: '工具'
      },
      {
        code: 'C',
        value: '仪表'
      },
      {
        code: 'D',
        value: '电器设施'
      },
      {
        code: 'E',
        value: '各种设备'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '进行高处作业前，应逐级进行安全技术教育及交底，落实所有（ ）',
    list: [{
        code: 'A',
        value: '安全思想教育'
      },
      {
        code: 'B',
        value: '安全技术'
      },
      {
        code: 'C',
        value: '人身防护用品'
      },
      {
        code: 'D',
        value: '安全技术措施'
      },
      {
        code: 'E',
        value: '技术交底'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CD'
  },
  {
    title: '安全网主要由（ ）组成',
    list: [{
        code: 'A',
        value: '网体'
      },
      {
        code: 'B',
        value: '边绳'
      },
      {
        code: 'C',
        value: '包装绳'
      },
      {
        code: 'D',
        value: '筋绳'
      },
      {
        code: 'E',
        value: '系绳'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  },
  {
    title: '安全网应有产品合格证，并符合（ ）等要求',
    list: [{
        code: 'A',
        value: '贯穿试验'
      },
      {
        code: 'B',
        value: '防水型'
      },
      {
        code: 'C',
        value: '耐高温性能'
      },
      {
        code: 'D',
        value: '冲击试验'
      },
      {
        code: 'E',
        value: '阻燃型'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ADE'
  },
  {
    title: '三相四线配电的电缆线路采用的五芯电缆必须包含（ ）颜色的绝缘芯线',
    list: [{
        code: 'A',
        value: '红色'
      },
      {
        code: 'B',
        value: '绿色'
      },
      {
        code: 'C',
        value: '淡蓝色'
      },
      {
        code: 'D',
        value: '黑色'
      },
      {
        code: 'E',
        value: '绿/黄双色'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CE'
  },
  {
    title: '施工现场需要编制用电组织设计的基准条件是( )',
    list: [{
        code: 'A',
        value: '用电设备5台及以上'
      },
      {
        code: 'B',
        value: '用电设备总容量50kW及以上'
      },
      {
        code: 'C',
        value: '用电设备10台及以上'
      },
      {
        code: 'D',
        value: '用电设备总容量l00kW及以上'
      },
      {
        code: 'E',
        value: '用电设备5台及以上，且用电设备总容量100kW及以上'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AB'
  },
  {
    title: '总配电箱中漏电保护器的额定漏电动作电流I△和额定漏电动作时间T△，可分别选择为（ ）',
    list: [{
        code: 'A',
        value: 'I△=500mA,  T△=0.1s'
      },
      {
        code: 'B',
        value: 'I△=200mA,T△=0.15s'
      },
      {
        code: 'C',
        value: 'I△=100mA,T△=0.2s'
      },
      {
        code: 'D',
        value: 'I△=75mA,T△=0.2s'
      },
      {
        code: 'E',
        value: 'I△=50mA,  T△=0.2s'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  },
  {
    title: '人工接地体材料可采用（ ）',
    list: [{
        code: 'A',
        value: '圆钢'
      },
      {
        code: 'B',
        value: '角钢'
      },
      {
        code: 'C',
        value: '螺纹钢'
      },
      {
        code: 'D',
        value: '钢管'
      },
      {
        code: 'E',
        value: '铝板'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABD'
  },
  {
    title: '电缆线路可以( )敷设',
    list: [{
        code: 'A',
        value: '沿地面'
      },
      {
        code: 'B',
        value: '埋地'
      },
      {
        code: 'C',
        value: '沿电杆或支架'
      },
      {
        code: 'D',
        value: '沿围墙'
      },
      {
        code: 'E',
        value: '沿脚手架'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCD'
  },
  {
    title: '对外电线路防护的基本措施有（ ）',
    list: [{
        code: 'A',
        value: '保证安全操作距离'
      },
      {
        code: 'B',
        value: '停用外电线路'
      },
      {
        code: 'C',
        value: '施工人员主观防范'
      },
      {
        code: 'D',
        value: '搭设安全防护设施'
      },
      {
        code: 'E',
        value: '迁移外电线路'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  },
  {
    title: '搭设外电防护设施的主要材料是（ ）',
    list: [{
        code: 'A',
        value: '木材'
      },
      {
        code: 'B',
        value: '竹材'
      },
      {
        code: 'C',
        value: '钢管'
      },
      {
        code: 'D',
        value: '钢筋'
      },
      {
        code: 'E',
        value: '安全网'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AB'
  },
  {
    title: '在没有采取相应安全措施情况下，( )不允许焊割作业',
    list: [{
        code: 'A',
        value: '制作、加工和贮存易燃易爆危险品的房间内'
      },
      {
        code: 'B',
        value: '贮存易燃易爆危险品的储罐和容器'
      },
      {
        code: 'C',
        value: '设备带电'
      },
      {
        code: 'D',
        value: '刚涂刷过油漆的建筑构件和设备'
      },
      {
        code: 'E',
        value: '盛过易燃液体而未进行彻底清洗处理过的容器'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '焊接或者切割的基本特点包括( )',
    list: [{
        code: 'A',
        value: '高温'
      },
      {
        code: 'B',
        value: '高压'
      },
      {
        code: 'C',
        value: '易燃'
      },
      {
        code: 'D',
        value: '易爆'
      },
      {
        code: 'E',
        value: '易烫伤'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '可采取以下（ ）措施来控制噪声的传播',
    list: [{
        code: 'A',
        value: '消声'
      },
      {
        code: 'B',
        value: '吸声'
      },
      {
        code: 'C',
        value: '隔声'
      },
      {
        code: 'D',
        value: '隔振'
      },
      {
        code: 'E',
        value: '阻尼'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABD'
  },
  {
    title: '建筑施工可能产生的尘肺病有（ ）',
    list: [{
        code: 'A',
        value: '其他尘肺'
      },
      {
        code: 'B',
        value: '焊工尘肺'
      },
      {
        code: 'C',
        value: '矽肺'
      },
      {
        code: 'D',
        value: '硅酸盐肺'
      },
      {
        code: 'E',
        value: '混合性肺'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '在（ ）涂刷各种防腐涂料作业时，必须根据场地大小，采取多台抽风机把苯等有害气体抽出室外，以防止急性苯中毒',
    list: [{
        code: 'A',
        value: '露台'
      },
      {
        code: 'B',
        value: '地面'
      },
      {
        code: 'C',
        value: '通风不良的车间'
      },
      {
        code: 'D',
        value: '通风不良的地下室'
      },
      {
        code: 'E',
        value: '通风不良的防水池内'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CDE'
  },
  {
    title: '职业活动中存在的(有害)因素以及在作业过程中产生的其他职业有害因素统称职业病危害因素，包括（ ）因素',
    list: [{
        code: 'A',
        value: '化学'
      },
      {
        code: 'B',
        value: '物理'
      },
      {
        code: 'C',
        value: '生物'
      },
      {
        code: 'D',
        value: '噪声'
      },
      {
        code: 'E',
        value: '辐射'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABC'
  },
  {
    title: '用人单位按照职业病防治要求，用于( )等费用，按照国家有关规定，在生产成本中据实列支',
    list: [{
        code: 'A',
        value: '安全知识培训'
      },
      {
        code: 'B',
        value: '工作场所卫生检测'
      },
      {
        code: 'C',
        value: '健康监护'
      },
      {
        code: 'D',
        value: '职业卫生培训'
      },
      {
        code: 'E',
        value: '预防和治理职业病危害'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  },
  {
    title: '职业病防治法是根据宪法制定的，是为了( )',
    list: [{
        code: 'A',
        value: '预防'
      },
      {
        code: 'B',
        value: '控制'
      },
      {
        code: 'C',
        value: '消除职业病危害'
      },
      {
        code: 'D',
        value: '防治职业病'
      },
      {
        code: 'E',
        value: '保护劳动者及其相关权益'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '产生职业病危害的用人单位设立的设备、工具、用具等设施应符合保护劳动者( )的要求',
    list: [{
        code: 'A',
        value: '生理健康'
      },
      {
        code: 'B',
        value: '思想健康'
      },
      {
        code: 'C',
        value: '心理健康'
      },
      {
        code: 'D',
        value: '职业道德'
      },
      {
        code: 'E',
        value: '不使用'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AC'
  },
  {
    title: '露天贮存的物品应当( )存放，并留出必要的防火间距',
    list: [{
        code: 'A',
        value: '分类'
      },
      {
        code: 'B',
        value: '分档'
      },
      {
        code: 'C',
        value: '分堆'
      },
      {
        code: 'D',
        value: '分组'
      },
      {
        code: 'E',
        value: '分垛'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACDE'
  },
  {
    title: '按照防火要求，施工现场应当明确划分（ ）区域',
    list: [{
        code: 'A',
        value: '禁火'
      },
      {
        code: 'B',
        value: '仓库'
      },
      {
        code: 'C',
        value: '办公区'
      },
      {
        code: 'D',
        value: '生活'
      },
      {
        code: 'E',
        value: '生产区'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABD'
  },
  {
    title: '易燃易爆化学物品出厂时，必须有产品安全说明书。说明书中必须有经法定检验机构测定的该物品的( )',
    list: [{
        code: 'A',
        value: '燃点'
      },
      {
        code: 'B',
        value: '闪点'
      },
      {
        code: 'C',
        value: '自燃点'
      },
      {
        code: 'D',
        value: '爆炸极限'
      },
      {
        code: 'E',
        value: '浓度极限'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '扑救火灾选择灭火剂的基本要求是( )',
    list: [{
        code: 'A',
        value: '灭火性能高'
      },
      {
        code: 'B',
        value: '使用方便'
      },
      {
        code: 'C',
        value: '来源丰富'
      },
      {
        code: 'D',
        value: '对人体无害'
      },
      {
        code: 'E',
        value: '成本低廉'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '水是一种( )的灭火剂',
    list: [{
        code: 'A',
        value: '最常用'
      },
      {
        code: 'B',
        value: '来源最丰富'
      },
      {
        code: 'C',
        value: '效果最好'
      },
      {
        code: 'D',
        value: '最经济'
      },
      {
        code: 'E',
        value: '使用最方便'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABE'
  },
  {
    title: '一般临时设施中，( )为重点防火部位，应当配备两个10L的灭火器',
    list: [{
        code: 'A',
        value: '配电室'
      },
      {
        code: 'B',
        value: '食堂'
      },
      {
        code: 'C',
        value: '澡堂'
      },
      {
        code: 'D',
        value: '宿舍'
      },
      {
        code: 'E',
        value: '动火处'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABD'
  },
  {
    title: '某市安全监督站对某建筑工地木工作业区检查，发现该作业区管理混乱，木工机具下面的电机被木屑刨花埋住，安检人员下发了隐患整改通知书，由于该工地未及时对事故隐患进行及时整改，当天中午工人下班后，该工地木工棚发生火灾事故。事故的主要原因是（ ）',
    list: [{
        code: 'A',
        value: '未配备消防器材'
      },
      {
        code: 'B',
        value: '未设专人看护'
      },
      {
        code: 'C',
        value: '未挂安全警示牌'
      },
      {
        code: 'D',
        value: '未及时清理电机边的刨花锯末'
      },
      {
        code: 'E',
        value: '工人下班后未拉闸断电'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BDE'
  },
  {
    title: '季节性施工主要指的是（ ）',
    list: [{
        code: 'A',
        value: '冬季'
      },
      {
        code: 'B',
        value: '雨季'
      },
      {
        code: 'C',
        value: '春季'
      },
      {
        code: 'D',
        value: '夏季'
      },
      {
        code: 'E',
        value: '秋季'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AB'
  },
  {
    title: '夏期施工主要应采取的措施为( )',
    list: [{
        code: 'A',
        value: '防偷盗'
      },
      {
        code: 'B',
        value: '防洪水'
      },
      {
        code: 'C',
        value: '防雷电'
      },
      {
        code: 'D',
        value: '防倒塌'
      },
      {
        code: 'E',
        value: '防中暑'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  },
  {
    title: '施工现场高出建筑物的( )等设备应有防风、防雷电的措施',
    list: [{
        code: 'A',
        value: '塔吊'
      },
      {
        code: 'B',
        value: '施工升降机'
      },
      {
        code: 'C',
        value: '施工作业面'
      },
      {
        code: 'D',
        value: '脚手架'
      },
      {
        code: 'E',
        value: '井架、物料提升机'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  },
  {
    title: '夏季人员中暑的特征有（ ）',
    list: [{
        code: 'A',
        value: '体温不断升高'
      },
      {
        code: 'B',
        value: '头昏、耳鸣'
      },
      {
        code: 'C',
        value: '胸闷、心悸、恶心'
      },
      {
        code: 'D',
        value: '身体软弱无力'
      },
      {
        code: 'E',
        value: '大量出汗、口渴'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '锅炉的附属设备除了过热器、省煤器、空气预热器、锅炉通风设备、给水设备、除尘器外还有（ ）',
    list: [{
        code: 'A',
        value: '对流管束'
      },
      {
        code: 'B',
        value: '水质软化设备'
      },
      {
        code: 'C',
        value: '常用钠离子交换器'
      },
      {
        code: 'D',
        value: '附属管道'
      },
      {
        code: 'E',
        value: '上煤出渣系统'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  },
  {
    title: '施工现场临时锅炉房设置的位置应考虑周围临建的环境，不宜和（ ）等相邻',
    list: [{
        code: 'A',
        value: '木工棚'
      },
      {
        code: 'B',
        value: '变压室'
      },
      {
        code: 'C',
        value: '易燃易爆材料仓库'
      },
      {
        code: 'D',
        value: '钢筋棚'
      },
      {
        code: 'E',
        value: '食堂'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABC'
  },
  {
    title: '永久性气体气瓶主要用于盛装（ ）等气体',
    list: [{
        code: 'A',
        value: '一氧化碳'
      },
      {
        code: 'B',
        value: '硫化氢'
      },
      {
        code: 'C',
        value: '丙烷'
      },
      {
        code: 'D',
        value: '氨'
      },
      {
        code: 'E',
        value: '氢气'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AE'
  },
  {
    title: '气瓶的安全使用应注意( )',
    list: [{
        code: 'A',
        value: '防止气瓶受热'
      },
      {
        code: 'B',
        value: '正确操作'
      },
      {
        code: 'C',
        value: '加强气瓶的维护'
      },
      {
        code: 'D',
        value: '气瓶使用到最后应留有余气，以防止混入其他气体或杂质而造成事故'
      },
      {
        code: 'E',
        value: '气瓶使用单位不得自行改变充装气体的品种、擅自更换气瓶的颜色标志'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '施工企业和企业内部职能部门、（　）之间应签订安全生产目标责任书',
    list: [{
        code: 'A',
        value: '班组和作业人员'
      },
      {
        code: 'B',
        value: '施工企业和项目部'
      },
      {
        code: 'C',
        value: '施工企业和监理单位'
      },
      {
        code: 'D',
        value: '总包和分包单位'
      },
      {
        code: 'E',
        value: '项目部和班组'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BDE'
  },
  {
    title: '季节性安全检查，应在（　）等恶劣气象的前后分别进行',
    list: [{
        code: 'A',
        value: '地震'
      },
      {
        code: 'B',
        value: '台风'
      },
      {
        code: 'C',
        value: '冬季'
      },
      {
        code: 'D',
        value: '夏季'
      },
      {
        code: 'E',
        value: '雨期'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCE'
  },
  {
    title: '现场围挡应做到坚固、稳定、整洁、美观，不应采用（　）等作为围档材料',
    list: [{
        code: 'A',
        value: '砌体'
      },
      {
        code: 'B',
        value: '彩钢板'
      },
      {
        code: 'C',
        value: '彩条布'
      },
      {
        code: 'D',
        value: '竹笆'
      },
      {
        code: 'E',
        value: '粘土实心砖'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CDE'
  },
  {
    title: '施工现场必须设有“五牌二图”，五牌指的是工程概况牌、（　）',
    list: [{
        code: 'A',
        value: '环境保护牌'
      },
      {
        code: 'B',
        value: '消防保卫牌'
      },
      {
        code: 'C',
        value: '文明施工牌'
      },
      {
        code: 'D',
        value: '安全生产牌'
      },
      {
        code: 'E',
        value: '管理人员名单及监督电话牌'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  },
  {
    title: '施工现场必须设有“五牌二图”，二图指的是（　）',
    list: [{
        code: 'A',
        value: '施工现场组织架构图'
      },
      {
        code: 'B',
        value: '施工现场平面图'
      },
      {
        code: 'C',
        value: '施工现场消防平面布置图'
      },
      {
        code: 'D',
        value: '施工现场文明施工图'
      },
      {
        code: 'E',
        value: '施工现场材料堆放图'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BC'
  },
  {
    title: '施工现场所设的“五牌二图”的标牌应（　）等',
    list: [{
        code: 'A',
        value: '规格统一'
      },
      {
        code: 'B',
        value: '位置合理'
      },
      {
        code: 'C',
        value: '字迹端正'
      },
      {
        code: 'D',
        value: '线条清晰'
      },
      {
        code: 'E',
        value: '表示明确'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '（　）宜设在临时建筑的底层',
    list: [{
        code: 'A',
        value: '资料室'
      },
      {
        code: 'B',
        value: '餐厅'
      },
      {
        code: 'C',
        value: '会议室'
      },
      {
        code: 'D',
        value: '民工学校'
      },
      {
        code: 'E',
        value: '办公室'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '宿舍内(包括值班室)严禁使用煤气灶、煤油炉及（　）等大功率器具',
    list: [{
        code: 'A',
        value: '电饭煲'
      },
      {
        code: 'B',
        value: '热得快'
      },
      {
        code: 'C',
        value: '电炒锅'
      },
      {
        code: 'D',
        value: '电炉'
      },
      {
        code: 'E',
        value: '空调'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  },
  {
    title: '环境保护专项施工方案应依据下列（　）文件资料编制',
    list: [{
        code: 'A',
        value: '工程招投标文件'
      },
      {
        code: 'B',
        value: '工程施工组织设计'
      },
      {
        code: 'C',
        value: '工程周边施工环境情况'
      },
      {
        code: 'D',
        value: '国家环境保护法律法规'
      },
      {
        code: 'E',
        value: '国家、行业、地方标准及技术管理法规，以及行政文件规定'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '环境保护专项施工方案的内容主要包括（　）等',
    list: [{
        code: 'A',
        value: '工程概况'
      },
      {
        code: 'B',
        value: '扬尘控制措施'
      },
      {
        code: 'C',
        value: '噪声控制措施'
      },
      {
        code: 'D',
        value: '光污染控制措施'
      },
      {
        code: 'E',
        value: '固体废弃物控制措施'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '按照环境空气质量预测结果、空气污染程度、大气重污染持续时间和影响范围，将大气重污染预警级别分为I级、Ⅱ级和Ⅲ级，分别用（　）标示',
    list: [{
        code: 'A',
        value: '红色'
      },
      {
        code: 'B',
        value: '紫色'
      },
      {
        code: 'C',
        value: '橙色'
      },
      {
        code: 'D',
        value: '青色'
      },
      {
        code: 'E',
        value: '黄色'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACE'
  },
  {
    title: '施工现场降尘措施包括（　）',
    list: [{
        code: 'A',
        value: '人工洒水'
      },
      {
        code: 'B',
        value: '洒水车洒水'
      },
      {
        code: 'C',
        value: '道路两侧安装喷淋系统'
      },
      {
        code: 'D',
        value: '塔式起重机臂架上安装喷淋系统'
      },
      {
        code: 'E',
        value: '雾化'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '施工现场必须根据施工平面布置图规划，结合消防要求绘制消防平面布置图，明确（　）',
    list: [{
        code: 'A',
        value: '现场出入口'
      },
      {
        code: 'B',
        value: '临时道路'
      },
      {
        code: 'C',
        value: '易燃易爆危险品库房'
      },
      {
        code: 'D',
        value: '消防器材配备位置'
      },
      {
        code: 'E',
        value: '消防通道设置'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '在建工程的易燃易爆危险品存放场所及使用场所、动火作业场所、可燃材料存放、加工及使用场所、发电机房、（　）等处，灭火器配置数量应安全规定经计算确定',
    list: [{
        code: 'A',
        value: '变配电房'
      },
      {
        code: 'B',
        value: '厨房操作间'
      },
      {
        code: 'C',
        value: '锅炉房'
      },
      {
        code: 'D',
        value: '宿舍'
      },
      {
        code: 'E',
        value: '办公用房'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  },
  {
    title: '基坑工程施工应具备（ ）条件',
    list: [{
        code: 'A',
        value: '基础结构设计文件交底完成'
      },
      {
        code: 'B',
        value: '基坑支护工程施工专项施工方案已按规定办理审批手续'
      },
      {
        code: 'C',
        value: '超过一定规模的危险性较大的基坑支护工程有专项施工方案'
      },
      {
        code: 'D',
        value: '已对周围地上及地下环境采取了保护或其他措施'
      },
      {
        code: 'E',
        value: '基坑监测方案已编制并审批完成，监测仪器已布置到位'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  },
  {
    title: '确保基坑安全的关键是（ ）',
    list: [{
        code: 'A',
        value: '新设备'
      },
      {
        code: 'B',
        value: '新工艺'
      },
      {
        code: 'C',
        value: '全程控制'
      },
      {
        code: 'D',
        value: '新技术'
      },
      {
        code: 'E',
        value: '全员参与'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CE'
  },
  {
    title: '钢支撑体系施工应符合（ ）要求',
    list: [{
        code: 'A',
        value: '采用工具式钢支撑体系'
      },
      {
        code: 'B',
        value: '钢支撑节点宜进行承载力试验'
      },
      {
        code: 'C',
        value: '支撑体系的杆件及节点件进场后应按设计及验收标准进行验收，符合要求方可使用'
      },
      {
        code: 'D',
        value: '预压力的施加应在支撑的一侧进行'
      },
      {
        code: 'E',
        value: '预压力直接施加至设计值'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABC'
  },
  {
    title: '基坑工程监测应包括（ ）',
    list: [{
        code: 'A',
        value: '专业单位监测'
      },
      {
        code: 'B',
        value: '建设单位现场监测'
      },
      {
        code: 'C',
        value: '施工企业现场监测'
      },
      {
        code: 'D',
        value: '监理单位现场监测'
      },
      {
        code: 'E',
        value: '政府监督部门现场监测'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AC'
  },
  {
    title: '施工现场禁止使用（ ）脚手架',
    list: [{
        code: 'A',
        value: '悬挑式脚手架'
      },
      {
        code: 'B',
        value: '竹木脚手架'
      },
      {
        code: 'C',
        value: '扣件式钢管脚手架'
      },
      {
        code: 'D',
        value: '扣件式钢管悬挑卸料平台'
      },
      {
        code: 'E',
        value: '钢管悬挑式脚手架'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BDE'
  },
  {
    title: '纵向水平杆的接头宜采用搭接,搭接时有以下( )具体要求',
    list: [{
        code: 'A',
        value: '搭接长度不应小于1m'
      },
      {
        code: 'B',
        value: '搭接长度0.5m'
      },
      {
        code: 'C',
        value: '端部扣件盖板边缘至搭接杆端的距离不应小于500mm'
      },
      {
        code: 'D',
        value: '端部扣件盖板边缘至搭接杆端的距离不应小于100mm'
      },
      {
        code: 'E',
        value: '等间距设置3个旋转扣件固定'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ADE'
  },
  {
    title: '剪刀撑与横向斜撑设置应符合（ ）规定',
    list: [{
        code: 'A',
        value: '剪刀撑、横向斜撑搭设应随立杆、纵向和横向水平杆等同步搭设'
      },
      {
        code: 'B',
        value: '每道剪刀撑跨越立杆根数为3～5根'
      },
      {
        code: 'C',
        value: '倾角为30°～45°'
      },
      {
        code: 'D',
        value: '搭接长度不小于1m'
      },
      {
        code: 'E',
        value: '采用搭接'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ADE'
  },
  {
    title: '落地式外脚手架宜设置上下人行斜道。斜道应符合（ ）',
    list: [{
        code: 'A',
        value: '斜道悬挑搭设在脚手架的外侧'
      },
      {
        code: 'B',
        value: '斜道的设置应为之字形，坡度不应大于1∶3'
      },
      {
        code: 'C',
        value: '斜道立杆借用脚手架立杆'
      },
      {
        code: 'D',
        value: '斜道侧面及平台外侧应设置剪刀撑'
      },
      {
        code: 'E',
        value: '斜道两侧及转角平台外围均应设180mm挡脚板'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BDE'
  }, {
    title: '满堂脚手架设置纵、横向扫地杆符合（ ）要求',
    list: [{
        code: 'A',
        value: '纵向扫地杆应采用直角扣件固定在距底座上皮不大于200mm处的立杆上'
      },
      {
        code: 'B',
        value: '纵向扫地杆应采用直角扣件固定在距底座上皮不大于200mm处的横杆上'
      },
      {
        code: 'C',
        value: '横向扫地杆应采用直角扣件固定在紧靠纵向扫地杆下方的立杆上'
      },
      {
        code: 'D',
        value: '横向扫地杆应采用直角扣件固定在紧靠纵向扫地杆下方的横杆上'
      },
      {
        code: 'E',
        value: '脚手架立杆基础不在同一高度上时，必须将高处的纵向扫地杆向低处延长两跨与立杆固定'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACE'
  }, {
    title: '有关悬挑脚手架悬挑梁设置的说法正确的是（ ）',
    list: [{
        code: 'A',
        value: '悬挑梁水平锚固段应大于悬挑段的1.25倍，与建筑物连接可靠'
      },
      {
        code: 'B',
        value: '预埋U型拉环应使用HPB235级钢筋，其直径不宜小于18mm'
      },
      {
        code: 'C',
        value: '拉索柔性材料仅作安全储备措施，不得作悬挑结构的受力构件'
      },
      {
        code: 'D',
        value: '采用预埋U型螺栓扣环时，螺栓丝口外露不应小于3扣'
      },
      {
        code: 'E',
        value: '预埋U型圆钢扣环、拉环埋入混凝土的锚固长度不应小于30d'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACDE'
  }, {
    title: '附着式升降脚手架架体悬臂高度应满足（ ）',
    list: [{
        code: 'A',
        value: '不得大于架体高度的1/4'
      },
      {
        code: 'B',
        value: '不得大于架体高度的1/5'
      },
      {
        code: 'C',
        value: '不得大于架体高度的2/5'
      },
      {
        code: 'D',
        value: '不得大于5m'
      },
      {
        code: 'E',
        value: '不得大于6m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CE'
  }, {
    title: '附着式升降脚手架必须具有（ ）的安全装置',
    list: [{
        code: 'A',
        value: '防超载'
      },
      {
        code: 'B',
        value: '防滑脱'
      },
      {
        code: 'C',
        value: '防倾覆'
      },
      {
        code: 'D',
        value: '防坠落'
      },
      {
        code: 'E',
        value: '同步升降控制'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CDE'
  }, {
    title: '附着式升降脚手架每次升降前，应按规范要求进行检查，经（ ）共同检查合格后，方可进行升降作业',
    list: [{
        code: 'A',
        value: '总包单位'
      },
      {
        code: 'B',
        value: '分包单位'
      },
      {
        code: 'C',
        value: '租赁单位'
      },
      {
        code: 'D',
        value: '安拆单位'
      },
      {
        code: 'E',
        value: '监理单位'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  }, {
    title: '支撑结构的拆除要求（ ）',
    list: [{
        code: 'A',
        value: '拆除作业应分层、分段进行'
      },
      {
        code: 'B',
        value: '上至下顺序拆除'
      },
      {
        code: 'C',
        value: '当只拆除部分支撑结构时，直接拆除后保留剩余部分'
      },
      {
        code: 'D',
        value: '拆除的构配件向下抛掷'
      },
      {
        code: 'E',
        value: '设有缆风绳的支撑结构，缆风绳应对称拆除'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABE'
  }, {
    title: '模板支撑结构监测的内容应包括（ ）',
    list: [{
        code: 'A',
        value: '稳定性'
      },
      {
        code: 'B',
        value: '内力监测'
      },
      {
        code: 'C',
        value: '位移监测'
      },
      {
        code: 'D',
        value: '刚度'
      },
      {
        code: 'E',
        value: '强度'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BC'
  }, {
    title: '建筑施工中通常所说的“三宝”是指( )',
    list: [{
        code: 'A',
        value: '安全带'
      },
      {
        code: 'B',
        value: '安全锁'
      },
      {
        code: 'C',
        value: '安全鞋'
      },
      {
        code: 'D',
        value: '安全网'
      },
      {
        code: 'E',
        value: '安全帽'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ADE'
  }, {
    title: '楼板面短边长大于1500mm的水平洞口,如何设防（ ）',
    list: [{
        code: 'A',
        value: '满铺木板或脚手片'
      },
      {
        code: 'B',
        value: '网格式盖件'
      },
      {
        code: 'C',
        value: '杆件内侧挂密目式安全网'
      },
      {
        code: 'D',
        value: '四周设置1.2m高三道防护栏杆'
      },
      {
        code: 'E',
        value: '洞口处应张挂安全平网'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CDE'
  }, {
    title: '外电线路电压110（kV）,在外电架空线路附近吊装时，起重机的任何部位或被吊物边缘在最大偏斜时与架空线路边线的最小安全距离（ ）',
    list: [{
        code: 'A',
        value: '沿垂直方3.0m'
      },
      {
        code: 'B',
        value: '沿垂直方5.0m'
      },
      {
        code: 'C',
        value: '沿水平方向4.0m'
      },
      {
        code: 'D',
        value: '沿水平方向6.0m'
      },
      {
        code: 'E',
        value: '沿水平方向7.0m'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BC'
  }, {
    title: '开关箱中的漏电断路器在正常情况下可用于( )',
    list: [{
        code: 'A',
        value: '电路的过载保护'
      },
      {
        code: 'B',
        value: '频繁通、断电路'
      },
      {
        code: 'C',
        value: '电源隔离'
      },
      {
        code: 'D',
        value: '电路的短路保护'
      },
      {
        code: 'E',
        value: '电路的漏电保护'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ADE'
  }, {
    title: '对于非钢丝绳式施工升降机，下列导轨架垂直度偏差符合要求的是（ ）',
    list: [{
        code: 'A',
        value: '导轨架架设高度70m﹤h≤100m时，垂直度偏差≤70mm'
      },
      {
        code: 'B',
        value: '导轨架架设高度70m﹤h≤100m时，垂直度偏差≤80mm'
      },
      {
        code: 'C',
        value: '导轨架架设高度70m﹤h≤100m时，垂直度偏差≤90mm'
      },
      {
        code: 'D',
        value: '导轨架架设高度100m﹤h≤150m时，垂直度偏差≤90mm'
      },
      {
        code: 'E',
        value: '导轨架架设高度150m﹤h≤200m时，垂直度偏差≤110mm'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ADE'
  }, {
    title: '当货用施工升降机采用缆风绳稳固导轨架时，缆风绳设置应符合的规定，下列叙述正确的是（ ）',
    list: [{
      code: 'A',
      value: '缆风绳与导轨架的连接处应采取防止钢丝绳受剪破坏的措施。'
    }, {
      code: 'B',
      value: '缆风绳与导轨架的连接处可不采取防止钢丝绳受剪破坏的措施。'
    }, {
      code: 'C',
      value: '缆风绳宜设置在导轨架的底部'
    }, {
      code: 'D',
      value: '缆风绳宜设置在导轨架的顶部'
    }, {
      code: 'E',
      value: '当中间设置缆风绳时，应采取增加导轨架刚度的措施。'
    }],
    isShow: false,
    handAnswer: '',
    answer: 'ADE'
  }, {
    title: '下列关于人货两用施工升降机安装作业叙述正确选项的是（ ）',
    list: [{
        code: 'A',
        value: '当导轨架或附墙架上有人作业时，严禁开机'
      },
      {
        code: 'B',
        value: '安装时应确保人货两用施工升降机运行通道内无障碍物'
      },
      {
        code: 'C',
        value: '当需安装导轨架加强标准节时，应确保普通标准节和加强标准节的安装部位正确，不得用普通标准节替代加强标准节。'
      },
      {
        code: 'D',
        value: '安装作业时必须将按钮盒或操作盒移至吊笼顶部操作'
      },
      {
        code: 'E',
        value: '导轨架安装时，应进行垂直度测量校正'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  }, {
    title: '下列关于货用施工升降机安装作业叙述正确的是（ ）',
    list: [{
        code: 'A',
        value: '安装井架式导轨架，应有可靠的作业平台'
      },
      {
        code: 'B',
        value: '杆件等材料上、下传送，宜采用机具设备'
      },
      {
        code: 'C',
        value: '每次加节完毕后，应对导轨架的垂直度进行校正'
      },
      {
        code: 'D',
        value: '且应按规定及时重新设置行程限位和极限限位，经验收合格后方能运行'
      },
      {
        code: 'E',
        value: '导轨架自由端高度、附墙架形式、附着高度、附墙架与水平面之间的夹角等少数条件可不符合使用说明书的要求。'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  }, {
    title: '下列关于施工升降机安装验收中应符合的规定,叙述正确选项的是（ ）',
    list: [{
        code: 'A',
        value: '施工升降机安装完毕，安装单位应进行自检'
      },
      {
        code: 'B',
        value: '自检合格后报检测机构检测'
      },
      {
        code: 'C',
        value: '在30日内报当地建设主管部门使用登记。'
      },
      {
        code: 'D',
        value: '登记标志应当置于或者附着于该设备的显著位置。'
      },
      {
        code: 'E',
        value: '检测合格后由使用单位组织安装单位、施工总承包单位和监理单位进行验收。'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  }, {
    title: '施工升降机验收资料中应包括( )',
    list: [{
        code: 'A',
        value: '安装或拆卸告知表'
      },
      {
        code: 'B',
        value: '质量控制表'
      },
      {
        code: 'C',
        value: '施工进度计划表'
      },
      {
        code: 'D',
        value: '型式试验报告'
      },
      {
        code: 'E',
        value: '产品合格证'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ADE'
  }, {
    title: '当发生防坠安全器动作制停吊笼的情况时，应采取的措施为（ ）',
    list: [{
        code: 'A',
        value: '查明制停原因，排除故障'
      },
      {
        code: 'B',
        value: '不需要检查吊笼、导轨架及钢丝绳'
      },
      {
        code: 'C',
        value: '并应检查吊笼、导轨架及钢丝绳'
      },
      {
        code: 'D',
        value: '不需重新调整复位防坠安全器'
      },
      {
        code: 'E',
        value: '应确认无误并重新调整复位防坠安全器后运行'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACE'
  }, {
    title: '塔式起重机制造单位必须具备的质量技术资料有（ ）',
    list: [{
        code: 'A',
        value: '特种人员上岗证'
      },
      {
        code: 'B',
        value: '使用说明书'
      },
      {
        code: 'C',
        value: '产品出厂应随机附有产品合格证'
      },
      {
        code: 'D',
        value: '型式试验报告'
      },
      {
        code: 'E',
        value: '有特种设备制造许可证'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  }, {
    title: '下列关于塔式起重机叙述正确的是（ ）',
    list: [{
        code: 'A',
        value: '当塔式起重机作附着使用时，附着装置的设置和悬臂高度应符合使用说明书的规定。'
      },
      {
        code: 'B',
        value: '当塔式起重机作附着使用时，附着装置的设置和悬臂高度可以此超过使用说明书的规定。'
      },
      {
        code: 'C',
        value: '当塔身与建筑物超过使用说明书规定的距离时，应进行专项设计和制作，并在安装专项方案中明确。'
      },
      {
        code: 'D',
        value: '当塔身与建筑物超过使用说明书规定的距离时，不需进行专项设计，但需要在安装专项方案中明确。'
      },
      {
        code: 'E',
        value: '当塔身与建筑物超过使用说明书规定的距离时，应进行专项设计和制作，但安装专项方案中不需明确。'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AC'
  }, {
    title: '进入塔式起重机安装拆卸作业现场的工作人员做到( )',
    list: [{
        code: 'A',
        value: '高处作业人员可不系安全带，但必须穿防滑鞋。'
      },
      {
        code: 'B',
        value: '高处作业人员应系安全带，穿防滑鞋。'
      },
      {
        code: 'C',
        value: '部分技术高超的技术人员可以不佩戴安全防护用品'
      },
      {
        code: 'D',
        value: '高处作业人员应系安全带，天气晴朗可不穿防滑鞋。'
      },
      {
        code: 'E',
        value: '佩戴安全防护用品'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BE'
  }, {
    title: '下列关于塔式起重机安装作业叙述正确的是（ ）',
    list: [{
        code: 'A',
        value: '安装前应根据专项施工方案，检查塔式起重机基础的隐蔽工程验收记录和混凝土强度报告等相关资料'
      },
      {
        code: 'B',
        value: '以及辅助安装设备的就位点基础及地基承载力等'
      },
      {
        code: 'C',
        value: '辅助安装设备就位后，应对其机械和安全性能进行检查，合格后方可作业'
      },
      {
        code: 'D',
        value: '辅助安装设备就位后，可不对对其机械和安全性能进行检查'
      },
      {
        code: 'E',
        value: '安装所使用的钢丝绳、卡环、吊钩等起重机具应经检查合格后方可使用'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  }, {
    title: '下列叙述满足自升式塔式起重机进行顶升加节的要求的是（ ）',
    list: [{
        code: 'A',
        value: '顶升系统必须完好'
      },
      {
        code: 'B',
        value: '顶升前应确保顶升横梁搁置正确、爬爪和爬爪座无异常'
      },
      {
        code: 'C',
        value: '应确保塔式起重机的平衡'
      },
      {
        code: 'D',
        value: '应有顶升加节意外故障应急对策与措施'
      },
      {
        code: 'E',
        value: '结构件必须完好'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  }, {
    title: '塔式起重机安装验收书中（ ）验收人均应签字确认',
    list: [{
        code: 'A',
        value: '施工总承包单位'
      },
      {
        code: 'B',
        value: '安装单位'
      },
      {
        code: 'C',
        value: '使用单位'
      },
      {
        code: 'D',
        value: '租赁单位'
      },
      {
        code: 'E',
        value: '监理单位'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  }, {
    title: '塔式起重机的电气系统应符合（ ）',
    list: [{
        code: 'A',
        value: '切断总电源的紧急开关，应符合要求'
      },
      {
        code: 'B',
        value: '失压及零位保护'
      },
      {
        code: 'C',
        value: '错相与缺相保护'
      },
      {
        code: 'D',
        value: '在塔式起重机安装、维修、调整和使用可以根据需要改变电路'
      },
      {
        code: 'E',
        value: '按要求设置短路和过电流保护'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  }, {
    title: '钢丝绳与地锚设置应符合（ ）',
    list: [{
        code: 'A',
        value: '起重钢丝绳应符合《钢丝绳》(GB/T8918)等有关标准的规定'
      },
      {
        code: 'B',
        value: '缆风绳安全系数必须大于3.5'
      },
      {
        code: 'C',
        value: '缆风绳安全系数必须大于3.75'
      },
      {
        code: 'D',
        value: '滑轮、地锚的设置应符合专项施工方案的要求'
      },
      {
        code: 'E',
        value: '起重钢丝绳的选用应符合起重设备性能和技术要求，磨损、断丝不得超标'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  }, {
    title: '下列关于起重作业叙述正确的是（ ）',
    list: [{
        code: 'A',
        value: '起重吊装作业时应设置警戒线，悬挂警戒标志，并派专人监护'
      },
      {
        code: 'B',
        value: '不得在不安全的状态情况下进行吊装作业'
      },
      {
        code: 'C',
        value: '不得起吊重量不明重物或超载'
      },
      {
        code: 'D',
        value: '索具、钢丝绳规格型号、绳径倍数应符合设计或专项施工方案的要求'
      },
      {
        code: 'E',
        value: '起重吊点的确定应符合设计或专项施工方案的要求'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  }, {
    title: '下列关于手持电动工具的使用叙述正确的是（ ）',
    list: [{
        code: 'A',
        value: '在潮湿和金属构架等导电良好的场所使用Ⅰ类手持电动工具，必须穿戴绝缘用品'
      },
      {
        code: 'B',
        value: '在潮湿和金属构架等导电良好的场所使用Ⅱ类手持电动工具，必须穿戴绝缘用品'
      },
      {
        code: 'C',
        value: '在潮湿和金属构架等导电良好的场所使用Ⅲ类手持电动工具，必须穿戴绝缘用品'
      },
      {
        code: 'D',
        value: '使用手持电动工具可以随意接长电源线和更换插头'
      },
      {
        code: 'E',
        value: '使用手持电动工具不得随意接长电源线和更换插头'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'AE'
  }, {
    title: '下列关于卷扬机的使用叙述正确的是（ ）',
    list: [{
        code: 'A',
        value: '卷筒上的钢丝绳应排列整齐，当重叠或斜绕时，应停机重新排列，紧急情况时，需用手拉脚踩钢丝绳。'
      },
      {
        code: 'B',
        value: '卷扬机基座应平稳牢固、周围排水畅通、地锚设置可靠，并应搭设防护棚'
      },
      {
        code: 'C',
        value: '操作人员位置的设置应能看清指挥人员和拖动或起吊的物件'
      },
      {
        code: 'D',
        value: '钢丝绳与卷筒及起重物应连接牢固，不得与机架或地面摩擦'
      },
      {
        code: 'E',
        value: '钢丝绳通过道路时，应设过路保护装置或设置围栏'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  }, {
    title: '高处作业吊篮应当具有（ ）',
    list: [{
        code: 'A',
        value: '使用说明书'
      },
      {
        code: 'B',
        value: '资质证书'
      },
      {
        code: 'C',
        value: '产品合格证'
      },
      {
        code: 'D',
        value: '特种作业人员上岗证'
      },
      {
        code: 'E',
        value: '型式检验报告'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACE'
  }, {
    title: '下列关于高处作业吊篮叙述正确的是（ ）',
    list: [{
        code: 'A',
        value: '应有重量标记'
      },
      {
        code: 'B',
        value: '配重块的重量应符合设计规定'
      },
      {
        code: 'C',
        value: '严禁使用破损的配重块，特殊情况时可以用他替代物'
      },
      {
        code: 'D',
        value: '应有防止随意移动的措施'
      },
      {
        code: 'E',
        value: '配重块应稳定可靠地安放在配重架上'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  }, {
    title: '安全生产六大纪律包括（ ）',
    list: [{
        code: 'A',
        value: '不懂电气和机械的人员，严禁使用和玩弄机电设备'
      },
      {
        code: 'B',
        value: '各种电动机械设备必须有可靠有效的安全接零（地）和防雷装置，方可使用'
      },
      {
        code: 'C',
        value: '高处作业时，不准往下或向上乱抛材料和物品'
      },
      {
        code: 'D',
        value: '2m以上的高处、悬空作业无安全设施的，必须戴好安全带、扣好保险钩'
      },
      {
        code: 'E',
        value: '进入现场必须戴好安全帽，扣好帽带，并正确使用个人劳动防护用品'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  }, {
    title: '防止违章操作和事故发生的十项操作规定包括（ ）',
    list: [{
        code: 'A',
        value: '隐患未排除，有伤害自己、伤害他人或被他人伤害的不安全因素存在时，盲目操作'
      },
      {
        code: 'B',
        value: '安全帽、安全带等作业所必需的个人防护用品不落实，不盲目操作'
      },
      {
        code: 'C',
        value: '新技术、新工艺、新设备、新材料、新岗位无安全措施，未进行安全培训教育和交底，严禁操作'
      },
      {
        code: 'D',
        value: '施工环境和作业对象情况不清，施工前无安全措施和安全技术交底，严禁操作'
      },
      {
        code: 'E',
        value: '新工人未经三级安全教育，复工换岗人员和进入新工地人员未经安全教育，不得上岗操作'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  }, {
    title: '起重吊装“十不吊”规定包括（ ）',
    list: [{
        code: 'A',
        value: '安全装置不灵不吊'
      },
      {
        code: 'B',
        value: '放在地上的物件不吊'
      },
      {
        code: 'C',
        value: '光线阴暗、视线不清不吊'
      },
      {
        code: 'D',
        value: '棱角物件无防护措施不吊'
      },
      {
        code: 'E',
        value: '歪拉斜挂物件不吊'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACDE'
  }, {
    title: '工程项目施工实行总承包的，应成立由（ ）组成的安全管理领导小组',
    list: [{
        code: 'A',
        value: '总承包单位项目经理'
      },
      {
        code: 'B',
        value: '专业承包单位项目经理'
      },
      {
        code: 'C',
        value: '劳务分包单位项目经理'
      },
      {
        code: 'D',
        value: '总承包单位技术负责人'
      },
      {
        code: 'E',
        value: '专职安全生产管理人员'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  }, {
    title: '事故的特征包括（ ）',
    list: [{
        code: 'A',
        value: '安全性'
      },
      {
        code: 'B',
        value: '排他性'
      },
      {
        code: 'C',
        value: '危险性'
      },
      {
        code: 'D',
        value: '意外性'
      },
      {
        code: 'E',
        value: '紧急性'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CDE'
  }, {
    title: '事故发展四阶段包括事故的（ ）',
    list: [{
        code: 'A',
        value: '孕育阶段'
      },
      {
        code: 'B',
        value: '准备阶段'
      },
      {
        code: 'C',
        value: '成长阶段'
      },
      {
        code: 'D',
        value: '爆发阶段'
      },
      {
        code: 'E',
        value: '持续阶段'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACDE'
  }, {
    title: '应急管理是一个动态的过程，包括（ ）阶段',
    list: [{
        code: 'A',
        value: '.预防'
      },
      {
        code: 'B',
        value: '准备'
      },
      {
        code: 'C',
        value: '处理'
      },
      {
        code: 'D',
        value: '响应'
      },
      {
        code: 'E',
        value: '恢复'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  }, {
    title: '应急预案的管理遵循（ ）的原则',
    list: [{
        code: 'A',
        value: '综合协调'
      },
      {
        code: 'B',
        value: '分类管理'
      },
      {
        code: 'C',
        value: '分级负责'
      },
      {
        code: 'D',
        value: '属地为主'
      },
      {
        code: 'E',
        value: '统一管理'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  }, {
    title: '建筑施工安全检查评定划分为（ ）三个等级',
    list: [{
        code: 'A',
        value: '优秀'
      },
      {
        code: 'B',
        value: '优良'
      },
      {
        code: 'C',
        value: '及格'
      },
      {
        code: 'D',
        value: '合格'
      },
      {
        code: 'E',
        value: '不合格'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BDE'
  }, {
    title: '建筑施工企业应定期对安全生产管理的（ ）进行评估，确定安全生产管理需改进的方面，制定并实施改进措施，并对其有效性进行跟踪验证和评价',
    list: [{
        code: 'A',
        value: '规范性'
      },
      {
        code: 'B',
        value: '保障性'
      },
      {
        code: 'C',
        value: '有效性'
      },
      {
        code: 'D',
        value: '符合性'
      },
      {
        code: 'E',
        value: '适宜性'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CDE'
  }, {
    title: '建筑施工企业对安全检查中发现的问题和隐患，应（ ）组织整改，并跟踪复查',
    list: [{
        code: 'A',
        value: '定人'
      },
      {
        code: 'B',
        value: '定时间'
      },
      {
        code: 'C',
        value: '定计划'
      },
      {
        code: 'D',
        value: '定经费'
      },
      {
        code: 'E',
        value: '定措施'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABE'
  }, {
    title: '建筑施工企业安全检查的内容应包括（ ）',
    list: [{
        code: 'A',
        value: '安全目标的实现程度'
      },
      {
        code: 'B',
        value: '安全生产职责的落实情况'
      },
      {
        code: 'C',
        value: '各项安全管理制度的执行情况'
      },
      {
        code: 'D',
        value: '施工现场安全隐患排查和安全防护情况'
      },
      {
        code: 'E',
        value: '生产安全事故、未遂事故和其他违规违法事件的调查、处理情况'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCDE'
  }, {
    title: '安全技术交底的基本要求是（ ）',
    list: [{
        code: 'A',
        value: '项目经理部必须实行逐级安全技术交底制度，纵向延伸到班组全体作业人员'
      },
      {
        code: 'B',
        value: '安全技术交底工作在正式作业过程中进行，技术交底必须具体、明确，针对性强'
      },
      {
        code: 'C',
        value: '技术交底的内容应针对分部分项工程施工中给作业人员带来的潜在危害和存在问题'
      },
      {
        code: 'D',
        value: '应优先采用新的安全技术措施'
      },
      {
        code: 'E',
        value: '保持书面安全技术交底签字记录，施工负责人、生产班组、现场安全员三方各留一份'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ACDE'
  }, {
    title: '安全技术交底包括（ ）',
    list: [{
        code: 'A',
        value: '总分包之间的交底'
      },
      {
        code: 'B',
        value: '分项工程或安全专项方案交底'
      },
      {
        code: 'C',
        value: '采用“四新”安全交底'
      },
      {
        code: 'D',
        value: '上岗后交底'
      },
      {
        code: 'E',
        value: '季节性安全交底及一些特殊工作的交底'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  }, {
    title: '施工总平面图布置应按不同施工阶段分别绘制，一般可分为（ ）等施工阶段绘制总平面布置图',
    list: [{
        code: 'A',
        value: '基础'
      },
      {
        code: 'B',
        value: '主体'
      },
      {
        code: 'C',
        value: '装饰'
      },
      {
        code: 'D',
        value: '安装'
      },
      {
        code: 'E',
        value: '竣工验收'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABC'
  }, {
    title: '企业安全岗位管理制度主要包括（ ）等',
    list: [{
        code: 'A',
        value: '安全生产责任制度'
      },
      {
        code: 'B',
        value: '安全教育培训制度'
      },
      {
        code: 'C',
        value: '安全技术交底制度'
      },
      {
        code: 'D',
        value: '安全生产考核和奖惩制度'
      },
      {
        code: 'E',
        value: '企业负责人和项目负责人带班制度'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  }, {
    title: '企业安全技术措施管理制度主要包括（ ）',
    list: [{
        code: 'A',
        value: '企业负责人和项目负责人带班制度'
      },
      {
        code: 'B',
        value: '安全生产考核和奖惩制度'
      },
      {
        code: 'C',
        value: '安全技术交底制度'
      },
      {
        code: 'D',
        value: '施工组织设计编审制度'
      },
      {
        code: 'E',
        value: '危险性较大的分部分项工程安全专项施工方案（措施）的编审制度'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'CDE'
  }, {
    title: '企业安全生产费用投入和物资管理制度主要包括（ ）等',
    list: [{
        code: 'A',
        value: '安全标志管理制度'
      },
      {
        code: 'B',
        value: '设施和防护用品制度'
      },
      {
        code: 'C',
        value: '设备安全管理制度'
      },
      {
        code: 'D',
        value: '安全检查测试工具配备管理制度'
      },
      {
        code: 'E',
        value: '安全文明资金保障制度'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  }, {
    title: '企业安全日常管理制度主要包括（ ）等',
    list: [{
        code: 'A',
        value: '危险源控制制度'
      },
      {
        code: 'B',
        value: '安全检查及隐患排查制度'
      },
      {
        code: 'C',
        value: '安全文明资金保障制度'
      },
      {
        code: 'D',
        value: '安全生产应急救援制度'
      },
      {
        code: 'E',
        value: '生产安全事故报告处理制度'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABDE'
  }, {
    title: '企业文明（绿色）施工管理制度主要包括（ ）等',
    list: [{
        code: 'A',
        value: '卫生管理制度、安全生产规章制度应形成书面资料在台帐中存档'
      },
      {
        code: 'B',
        value: '施工区（生活区）场容场貌管理制度'
      },
      {
        code: 'C',
        value: '消防管理和动火审批制度'
      },
      {
        code: 'D',
        value: '治安保卫工作制度'
      },
      {
        code: 'E',
        value: '安全文明资金保障制度'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCD'
  }, {
    title: '三级安全教育是指项目部对进入施工现场的新工人进行的首次安全生产教育，“三级”一般是指（ ）',
    list: [{
        code: 'A',
        value: '建设主管部门'
      },
      {
        code: 'B',
        value: '公司（分公司）级'
      },
      {
        code: 'C',
        value: '工地（项目部）级'
      },
      {
        code: 'D',
        value: '安全监督部门'
      },
      {
        code: 'E',
        value: '班组级'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCE'
  }, {
    title: '除“三宝”外，施工中应对“四口五临边”及时加设防护。“四口”是指（ ）',
    list: [{
        code: 'A',
        value: '电梯（管道）井口'
      },
      {
        code: 'B',
        value: '预留洞口'
      },
      {
        code: 'C',
        value: '通道口'
      },
      {
        code: 'D',
        value: '施工洞口'
      },
      {
        code: 'E',
        value: '楼梯口'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ABCE'
  }, {
    title: '除“三宝”外，施工中应对“四口五临边”及时加设防护。“五临边”是指尚未安装栏杆的（ ）周边等',
    list: [{
        code: 'A',
        value: '施工现场'
      },
      {
        code: 'B',
        value: '卸料平台'
      },
      {
        code: 'C',
        value: '屋面'
      },
      {
        code: 'D',
        value: '阳台'
      },
      {
        code: 'E',
        value: '基坑'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'BCDE'
  }, {
    title: '下列属于班组级安全生产教育内容的是（ ）',
    list: [{
        code: 'A',
        value: '企业安全文化'
      },
      {
        code: 'B',
        value: '企业安全生产规章制度'
      },
      {
        code: 'C',
        value: '通用安全技术'
      },
      {
        code: 'D',
        value: '岗位间工作衔接配合的安全要求'
      },
      {
        code: 'E',
        value: '岗位安全操作规程'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'DE'
  }, {
    title: '安全教育具有以下（ ）特点',
    list: [{
        code: 'A',
        value: '全员性'
      },
      {
        code: 'B',
        value: '劳动性'
      },
      {
        code: 'C',
        value: '流动性'
      },
      {
        code: 'D',
        value: '长期性'
      },
      {
        code: 'E',
        value: '专业性'
      }
    ],
    isShow: false,
    handAnswer: '',
    answer: 'ADE'
  }
])

multipleSelect.map((k, i) => { k.index = i; k.type = '3' })

export default multipleSelect