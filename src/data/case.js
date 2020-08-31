import { reactive } from 'vue'

const caseData = reactive([{
    title: '【背景材料】 某小区十号楼地下室有一电气设备，该设备一次电源线长度为10．5m；接头处没有用橡皮包布包扎，绝缘处磨损，电源线裸露；安装在该设备上的漏电开关内的拉杆脱落，漏电开关失灵。某工程公司在该地下室施工中，付某等3名抹灰工将该电气设备移至新操作点，移动过程中付某触电死亡',
    plist: [{
        title: '下列属于特种作业人员的是（ ）',
        list: [{
            code: 'A',
            value: '电工'
          },
          {
            code: 'B',
            value: '木工'
          },
          {
            code: 'C',
            value: '水暖工'
          },
          {
            code: 'D',
            value: '瓦工'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '下列关于特种作业的说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '特种作业人员未经培训考核即从事特种作业并造成重大安全事故，不得追究其刑事责任'
          },
          {
            code: 'B',
            value: '对特种作业人员专门的安全作业培训，是指由有关主管部门组织的专门针对特种作业人员的培训'
          },
          {
            code: 'C',
            value: '特种作业是指容易发生人员伤亡事故；对操作者本人、他人及周围设施的安全有重大危害的作业'
          },
          {
            code: 'D',
            value: '特种作业人员可不考核从事相应工种作业的疾病和生理缺陷糟况'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '配电系统应设置配电柜或（ ），实行三级配电，三级保护',
        list: [{
            code: 'A',
            value: '插座'
          },
          {
            code: 'B',
            value: '总配电箱'
          },
          {
            code: 'C',
            value: '分配电箱'
          },
          {
            code: 'D',
            value: '熔断器'
          },
          {
            code: 'E',
            value: '开关箱'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'BCE'
      },
      {
        title: '特种作业人员必须按照国家有关规定经过专门的安全作业培训，并取得特种作业操作资格证书后，方可上岗作业',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某工程公司在一大厦广场基础工程进行护坡桩锚杆作业。当天工地主要负责人、安全员、电工等有关人员不在现场。下锚杆筋笼时，班组长因故请假也不在现场，13名民工在无人指挥的情况下自行作业，因钢筋笼将配电箱引出的380V电缆线磨破，使钢筋笼带电，造成5人触电死亡',
    plist: [{
        title: '这起事故直接原因是（ ）',
        list: [{
            code: 'A',
            value: '由13名民工进行作业，人员过多'
          },
          {
            code: 'B',
            value: '工地主要负责人不在现场'
          },
          {
            code: 'C',
            value: '班组长请假'
          },
          {
            code: 'D',
            value: '380V电缆线磨破漏电'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '下列对于三类人员的安全管理职责的说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '施工单位主要负责人对工程项目的安全生产工作不需负责任'
          },
          {
            code: 'B',
            value: '施工单位的项目负责人对本企业的安全负全部责任'
          },
          {
            code: 'C',
            value: '现场安全生产管理人员负责对安全生产进行现场监督检查'
          },
          {
            code: 'D',
            value: '专职安全生产管理人员对违章指挥、违章操作的，应当立即报告，并可以越级上报，但无权制止施工单位的行为'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '五芯电缆必须包含（ ）颜色绝缘芯线',
        list: [{
            code: 'A',
            value: '黄/红'
          },
          {
            code: 'B',
            value: '淡蓝'
          },
          {
            code: 'C',
            value: '绿/红'
          },
          {
            code: 'D',
            value: '黑色'
          },
          {
            code: 'E',
            value: '绿/黄'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'BE'
      },
      {
        title: '这起事故中造成触电伤害原因之一是民工违章作业',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某公司在一工地用吊篮进行外装修作业时，施工员指派一名抹灰工升吊篮，由于吊篮未挂保险钢丝绳，在上升时突然一个倒链急剧下滑，吊篮随即倾斜，由于一作业人员未系安全带，从吊篮坠落死亡',
    plist: [{
        title: '作业时工人将安全带挂在（ ）上',
        list: [{
            code: 'A',
            value: '吊篮升降用的钢丝绳'
          },
          {
            code: 'B',
            value: '安全绳'
          },
          {
            code: 'C',
            value: '吊篮栏边'
          },
          {
            code: 'D',
            value: '吊篮两端'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '下列关于施工员布置这项工作的说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '事故责任在于设备，与施工员无关'
          },
          {
            code: 'B',
            value: '可以安排未经培训的抹灰工操作吊篮的升降'
          },
          {
            code: 'C',
            value: '施工现场的工作布置由施工员安排，没有违章指挥'
          },
          {
            code: 'D',
            value: '抹灰工对于施工员的违章指挥可以拒绝接受'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '吊篮使用单位应根据不同（ ）的变化，采取相应的安全防护措施',
        list: [{
            code: 'A',
            value: '施工阶段'
          },
          {
            code: 'B',
            value: '周围环境'
          },
          {
            code: 'C',
            value: '季节'
          },
          {
            code: 'D',
            value: '气候'
          },
          {
            code: 'E',
            value: '操作人员'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCD'
      },
      {
        title: '高处作业吊篮必须设置保险锁',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某工地按施工进度要求正在搭设扣件式脚手架，安全员巡视检查发现新购进的扣件表面粗糙，商标模糊，向架子工询问，工人说有的扣件螺栓滑丝，有的扣件一拧，小盖口就裂了。安全员对此批扣件质量发生怀疑',
    plist: [{
        title: '为防止安全事故的发生，安全员处理此事，下列方法正确的是（ ）',
        list: [{
            code: 'A',
            value: '保存此批扣件，用于上部脚手架的搭设'
          },
          {
            code: 'B',
            value: '把有问题扣件扔掉，好的继续使用'
          },
          {
            code: 'C',
            value: '告诉工人将坏掉的扣件保留，以便万一发生事故时留作证据'
          },
          {
            code: 'D',
            value: '扣件检验不合格，将所有扣件清除出现场，追回已使用的扣件，并向有关负责人报告追查不合格产品的来源'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '下列关于脚手架工程的规定正确的是（ ）',
        list: [{
            code: 'A',
            value: '常规的脚手架工程，可以不编制专项施工方案，做好验收即可'
          },
          {
            code: 'B',
            value: '对脚手架工程所使用的钢管、扣件应检查验收其质量，脚手板、安全网可以不必验收'
          },
          {
            code: 'C',
            value: '脚手架工程必须编制专项施工方案，并严格按照经审批的方案搭设'
          },
          {
            code: 'D',
            value: '从事特种作业的架子工因持有特种作业操作证，不必进行入场安全教育'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '钢管脚手架搭设使用的扣件规格与钢管匹配，采用可锻铸铁，不得有（ ）等锻造缺陷',
        list: [{
            code: 'A',
            value: '压痕'
          },
          {
            code: 'B',
            value: '裂纹'
          },
          {
            code: 'C',
            value: '气孔'
          },
          {
            code: 'D',
            value: '缩松'
          },
          {
            code: 'E',
            value: '砂眼'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'BCDE'
      },
      {
        title: '国家对扣件式钢管脚手架使用的扣件实行生产许可证制度',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 焊工贾某、王某在市职业大学教学楼工地，焊接一个(4．5×2×I．5)m3的膨胀水箱。两人完成了4／5的工作量下班后，为了赶工程进度，工地负责人又安排了油漆工加班 施工，要求将焊好的部分刷上防锈漆。因箱顶离屋顶仅有50cm间隙，通风不良，到第二天油漆还未干。而焊工上班后，虽了解到水箱上油漆未干，但因不愿误工，由贾某钻进水箱内侧扶焊，王某站在外面焊接，刚一打火“轰’’的一声，水箱上的油漆全部燃烧起来。顿时，贾某被火焰吞噬，在王某的帮助下，才爬出水箱逃命。但两人均已被烧伤',
    plist: [{
        title: '下列关于施工现场油漆作业与焊接作业可否同时进行的说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '可以'
          },
          {
            code: 'B',
            value: '不可以'
          },
          {
            code: 'C',
            value: '经批准可以'
          },
          {
            code: 'D',
            value: '经备案可以'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '下列施工现场消防器材的配备说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '30m高度以上高层建筑施工现场，应设置具有足够扬程的高压水泵或其他防火设备和设施'
          },
          {
            code: 'B',
            value: '临时木工间、油漆间和木、机具间等每25m2配备一只种类合适的灭火器'
          },
          {
            code: 'C',
            value: '大型临时设施总面积超过50000m2，应备有专供消防用的太平桶、积水桶(池)、黄砂池等设施，上述设施周围不得堆放物品'
          },
          {
            code: 'D',
            value: '临时搭设的建筑物区域内，每100m2配备5只I0L灭火器'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '施工现场消防防火重点部位，如（ ）等应采取必要的消防安全措施，配备专用消防器材，并有专人负责',
        list: [{
            code: 'A',
            value: '易燃易爆物品堆放间'
          },
          {
            code: 'B',
            value: '工人宿舍'
          },
          {
            code: 'C',
            value: '木工间'
          },
          {
            code: 'D',
            value: '油漆间'
          },
          {
            code: 'E',
            value: '档案室'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ACD'
      },
      {
        title: '施工现场动火前、动火过程中要严格进行环境安全检查',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某公司在一工地用吊篮架进行外装修作业时，首层安全网已经拆除，施工员指派一名抹灰工升降吊篮，在用倒链升降时，未挂保险钢丝绳，突然一个倒链急剧下滑，吊篮随即倾斜，使一名工人从吊篮上摔下死亡',
    plist: [{
        title: '下列关于本事故的说法错误的',
        list: [{
            code: 'A',
            value: '施工员违章指挥，不应指派抹灰工进行操作'
          },
          {
            code: 'B',
            value: '项目负责人没有亲自指挥'
          },
          {
            code: 'C',
            value: '作业时没有对升降装置进行认真检查，设备带“病”作业'
          },
          {
            code: 'D',
            value: '违反高处作业规定，支设的水平安全网在高处作业未完成时被拆除'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '下列关于施工员布置这项工作的说法正确的',
        list: [{
            code: 'A',
            value: '事故责任在于设备，与施工员无关'
          },
          {
            code: 'B',
            value: '对于临时安排抹灰工操作一下升降吊篮没有什么，是施工员统筹考虑现场实际的正确工作布置'
          },
          {
            code: 'C',
            value: '施工现场的工作布置由施工员安排，没有违章指挥'
          },
          {
            code: 'D',
            value: '抹灰工对于施工员布置的明显有较大危险而且没有防护设施的工作可以不接受'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '高处作业吊篮应设置作业人员专用的挂设安全带的（ ）',
        list: [{
            code: 'A',
            value: '安全绳'
          },
          {
            code: 'B',
            value: '安全锁扣'
          },
          {
            code: 'C',
            value: '安全栏杆'
          },
          {
            code: 'D',
            value: '安全网'
          },
          {
            code: 'E',
            value: '安全外架'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'AB'
      },
      {
        title: '上述事故中，“用吊篮架进行外装修作业时，首层安全网拆除”的做法是错误的，属于违章作业',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某施工队在某单位租借一间平房，承揽装修工程，由原来仅加工的木工活，要再增加做铝合金和塑钢门窗加工，没有正式电工。房间里要重新布置一下，原有一单相小电气设备(多功能木工机械)要移位，该设备的一次电源线是使用软电缆线沿墙边明设 在水泥地面上的。缆线绝缘层已有磨损，电缆线裸露，接头处也没有用绝缘胶布包好，安装在该设备上的漏电开关也已失灵。在移动过程中田某等两名触电死亡，学徒工看见后又用手直接去拉田某也被电死',
    plist: [{
        title: '下列关于电工的说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '电工不属于特种作业人员范围'
          },
          {
            code: 'B',
            value: '电工不需要特别的培训，只要懂得电工作原理的人就可以在施工现场操作用电'
          },
          {
            code: 'C',
            value: '电工需要按照特种作业人员的培训和考核要求进行培训和考核合格后才可上岗'
          },
          {
            code: 'D',
            value: '对于投资100万元以下的的建设项目，可以不需要电工'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '对于本案例中造成3人死亡的事故，下列说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '本案例事故发生在自己公司工作场地修缮作业过程中，不属于对外承揽项目施工过程中发生的事故，不应按照事故报告程序上报，自行处理即可'
          },
          {
            code: 'B',
            value: '本案例事故发生在自己公司工作场地修缮作业过程中，不属于工伤保险范围之内'
          },
          {
            code: 'C',
            value: '本案例事故属于重大伤亡事故，应立即上报'
          },
          {
            code: 'D',
            value: '本案例的事故由于是在租赁的房间内由于电缆线布置不当及裸露的原因而引发的事故，事故责任在于房屋出租方'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '对较大事故的判定，下列说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '造成3人以上10人以下死亡'
          },
          {
            code: 'B',
            value: '造成3人以下死亡'
          },
          {
            code: 'C',
            value: '10人以上50人以下重伤'
          },
          {
            code: 'D',
            value: '1000万元以上5000万元以下直接经济损失'
          },
          {
            code: 'E',
            value: '10人以下重伤'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ACD'
      },
      {
        title: '上述事故中，只有最后的学徒工的做法是错误的，其前两名人员的死亡属于意外，很难控制',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 某建筑公司，为了安排下岗职工就业，在集镇路边30m2房间内，开了一个电气焊修理门市部。为了节约资金，焊机用的是已停用一年的旧机，一次测电源用的是闸刀开关，并安装在室内，门口路边就是焊接与切割场所。室内既是焊切工具、氧气瓶、乙炔瓶的储存间，又是工人中午吃饭休息的场所。公司对工人只进行了短期培训，便开始作业',
    plist: [{
        title: '下列关于焊机的说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '焊机属于小型工具，使用时没有危险'
          },
          {
            code: 'B',
            value: '焊机属于电气设备，停用一段时间后可以继续使用，不需要重新进行检测'
          },
          {
            code: 'C',
            value: '焊机操作人员没有特殊要求'
          },
          {
            code: 'D',
            value: '焊机操作人员需要持证上岗'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '下列关于焊工的说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '焊工不属于特种作业人员'
          },
          {
            code: 'B',
            value: '该案例中对焊工的培训是合格的'
          },
          {
            code: 'C',
            value: '焊工的上岗条件没有特殊要求'
          },
          {
            code: 'D',
            value: '焊工应该按照《特种作业人员安全技术培训考核管理办法》的要求进行培训和考核'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '下列关于焊工的说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '应当参加教育培训，一个有效期内不少于48学时'
          },
          {
            code: 'B',
            value: '应当参加教育培训，一个有效期内不少于24学时'
          },
          {
            code: 'C',
            value: '首次取得证书即可直接上岗作业'
          },
          {
            code: 'D',
            value: '作业中发现危及安全的紧急情况时，必须向专职安全员报告'
          },
          {
            code: 'E',
            value: '新参加工作，必须接受三级安全教育'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ADE'
      },
      {
        title: '上述施工企业的是为了安排下岗职工就业的行为，公司对职工的培训可以不和其他职工的培训一样，不受限制',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 大地公司在东征县小李乡进行一项建筑工程建设。已于2004年2月1日领取安全许可证。但因故不能施工，故需向有关部门申请延期。请回答大地公司董事长向您咨询的几个问题',
    plist: [{
        title: '大地公司应当向（ ）申请延期',
        list: [{
            code: 'A',
            value: '东征县建设局'
          },
          {
            code: 'B',
            value: '小李乡建设行政主管部门'
          },
          {
            code: 'C',
            value: '东征县人民政府'
          },
          {
            code: 'D',
            value: '小李乡人民政府'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '大地公司应当在（ ）之前申请延期',
        list: [{
            code: 'A',
            value: '2004年2月28日'
          },
          {
            code: 'B',
            value: '2004年4月30日'
          },
          {
            code: 'C',
            value: '2004年3月31日'
          },
          {
            code: 'D',
            value: '2004年5月31日'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '根据浙江省住房和城乡建设厅的规定，各级建设行政主管部门在发放(　)前应当对企业《安全生产许可证》、“三类人员”证书进行审查',
        list: [{
            code: 'A',
            value: '施工许可证'
          },
          {
            code: 'B',
            value: '工程竣工备案表'
          },
          {
            code: 'C',
            value: '中标通知书'
          },
          {
            code: 'D',
            value: '房屋产权证'
          },
          {
            code: 'E',
            value: '规划许可证'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'AC'
      },
      {
        title: '若工程于2004年7月1日恢复施工，建设单位应当报发证机关核验安全许可证',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 大发公司在原南县进行一项建筑工程建设，由原南县建筑设计局设计，原南第二建筑公司承建，委托正平监理公司监理。有一高层建筑毗邻施工地点，可能会因大发公司的工程而产生地基下降',
    plist: [{
        title: '（ ）应当向原南第二建筑公司提供与施工现场相关的地下管线资料，原南第二建筑公司应当采取措施加以保护',
        list: [{
            code: 'A',
            value: '大发公司'
          },
          {
            code: 'B',
            value: '原南县建筑设计局'
          },
          {
            code: 'C',
            value: '正平监理公司'
          },
          {
            code: 'D',
            value: '原南县人民政府'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '（ ）应当遵守有关环境保护和安全生产的法律、法规的规定，采取控制和处理施工现场的各种粉尘、废气、废水、固体废物以及噪声、振动对环境的污染和危害的措施',
        list: [{
            code: 'A',
            value: '大发公司'
          },
          {
            code: 'B',
            value: '原南第二建筑公司'
          },
          {
            code: 'C',
            value: '原南县建筑设计局'
          },
          {
            code: 'D',
            value: '正平监理公司'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '对于按规定需要验收的危险性较大的分部分项工程，（ ）应当组织有关人员进行验收',
        list: [{
            code: 'A',
            value: '设计单位'
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
            value: '建设单位'
          },
          {
            code: 'E',
            value: '勘察单位'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'BC'
      },
      {
        title: '原南第二建筑公司在编制施工组织设计时，应当根据建筑工程的特点制定相应的安全技术措施',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 原南第二建筑公司是原南友谊酒店扩建项目的总承包商，大政公司、大发公司是部分工程的分包商。原南第二建筑公司的董事长是张三，负责该项目的项目经理叫李四，王五是原南第二建筑公司的安全生产部门经理',
    plist: [{
        title: '（ ）对原南第二建筑公司的安全生产负责',
        list: [{
            code: 'A',
            value: '张三'
          },
          {
            code: 'B',
            value: '李四'
          },
          {
            code: 'C',
            value: '王五'
          },
          {
            code: 'D',
            value: '张三和王五'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '施工现场安全由（ ）负责',
        list: [{
            code: 'A',
            value: '大政公司'
          },
          {
            code: 'B',
            value: '大发公司'
          },
          {
            code: 'C',
            value: '原南友谊酒店'
          },
          {
            code: 'D',
            value: '原南第二建筑公司'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '李四的安全工作责任表述正确的有（ ）',
        list: [{
            code: 'A',
            value: '可以在两个及以上项目担任项目经理'
          },
          {
            code: 'B',
            value: '要参加地基基础、主体结构等分部工程的验收'
          },
          {
            code: 'C',
            value: '必须在起重机械安装拆卸等危险性较大分部分项工程施工期间现场带班'
          },
          {
            code: 'D',
            value: '指派安全员审核特种作业人员的资格证书'
          },
          {
            code: 'E',
            value: '组织做好隐蔽工程的验收'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'BCE'
      },
      {
        title: '原南第二建筑公司必须为从事危险作业的职工办理意外伤害保险，支付保险费',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 东平建筑公司承建原北市白云山隧道项目，现缺乏一种进口挖掘机，公司领导决定采用租赁方式向原北市建筑机械租赁公司租赁，以节约资金',
    plist: [{
        title: '若原北市建筑机械租赁公司的此种进口挖掘机确实性能良好，但缺少产品合格证，下列关于该挖掘机能否对外出租的说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '不能'
          },
          {
            code: 'B',
            value: '可以'
          },
          {
            code: 'C',
            value: '经原北市建筑局批准后可以出租'
          },
          {
            code: 'D',
            value: '经原北市人民政府批准后可以出租'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '因为工期紧迫，东平建筑公司需要立即使用此挖掘机，在这种情况下下列关于原北市建筑机械租赁公司是否需要对出租的机械设备和施工机具及配件的安全性能进行检测，并在签订租赁协议时，出具检测合格证明的说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '应当检测'
          },
          {
            code: 'B',
            value: '可以不检测'
          },
          {
            code: 'C',
            value: '经原北市建筑局批准后可以不检测'
          },
          {
            code: 'D',
            value: '经原北市人民政府批准后可以不检测'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '根据《建筑起重机械安全监督管理规定》,出租单位在建筑起重机械首次出租前，自购建筑起重机械的使用单位在建筑起重机械首次安装前，应当持建筑起重机械（ ）到本单位工商注册所在地县级以上地方人民政府建设主管部门办理备案',
        list: [{
            code: 'A',
            value: '特种设备制造许可证'
          },
          {
            code: 'B',
            value: '产品合格证'
          },
          {
            code: 'C',
            value: '制造监督检验证明'
          },
          {
            code: 'D',
            value: '自检合格证明'
          },
          {
            code: 'E',
            value: '安装使用说明书'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'AB'
      },
      {
        title: '原北市建筑机械租赁公司应当按照安全施工的要求配备齐全有效的保险、限位等安全设施和装置',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 东平建筑公司是原南市一件建筑施工企业，单位主要负责人是张三，该公司现承建原北市市政府办公楼项目，由李四担任项目经理，王五担任项目副经理，赵六是东平建筑公司的安全生产部门经理',
    plist: [{
        title: '（ ）对本单位的安全生产工作全面负责',
        list: [{
            code: 'A',
            value: '张三'
          },
          {
            code: 'B',
            value: '李四'
          },
          {
            code: 'C',
            value: '王五'
          },
          {
            code: 'D',
            value: '赵六'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '（ ）对原北市市政府办公楼项目的安全施工负责',
        list: [{
            code: 'A',
            value: '张三'
          },
          {
            code: 'B',
            value: '李四'
          },
          {
            code: 'C',
            value: '王五'
          },
          {
            code: 'D',
            value: '赵六'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '根据《建筑施工项目经理质量安全违法违规行为记分管理规定》李四有下列行为之一的，一次记6分',
        list: [{
            code: 'A',
            value: '送检试样弄虚作假的'
          },
          {
            code: 'B',
            value: '使用安全保护装置失效的起重机械的'
          },
          {
            code: 'C',
            value: '挪用安全生产费用的'
          },
          {
            code: 'D',
            value: '未落实质量安全责任制的'
          },
          {
            code: 'E',
            value: '谎报、瞒报质量安全事故的'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'AB'
      },
      {
        title: '东平建筑公司机构调整后，为精简机构，可以不再设置安全生产管理机构',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 太平建筑公司承建黄平市友好饭店的扩建项目，该项目由黄平市建筑设计院设计，广平监理公司监理',
    plist: [{
        title: '太平建筑公司在施工现场入口处、施工起重机械、临时用电设施、脚手架、出入通道口、楼梯口、电梯井口、孔洞口、桥梁口、隧道口、基坑边沿、爆破物及有害危险气体和液体存放处等危险部位，设置了明显的安全警示标志。这些安全警示标志必须符合（ ）',
        list: [{
            code: 'A',
            value: '行业标准'
          },
          {
            code: 'B',
            value: '地区标准'
          },
          {
            code: 'C',
            value: '黄平市建筑局的要求'
          },
          {
            code: 'D',
            value: '国家标准'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '因为黄平市友好饭店未按约定提供施工所需建筑材料，致使工程暂时停止施工，（ ）应当做好现场防护',
        list: [{
            code: 'A',
            value: '黄平市建筑设计院'
          },
          {
            code: 'B',
            value: '广平监理公司'
          },
          {
            code: 'C',
            value: '太平建筑公司'
          },
          {
            code: 'D',
            value: '黄平市友好饭店'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '黄平市建筑设计院不按照建筑工程质量、安全标准进行设计的（ ）',
        list: [{
            code: 'A',
            value: '责令改正，处以罚款'
          },
          {
            code: 'B',
            value: '造成工程质量事故的，责令停业整顿，降低资质等级或者吊销资质证书，没收违法所得，并处罚款'
          },
          {
            code: 'C',
            value: '造成损失的，承担赔偿责任'
          },
          {
            code: 'D',
            value: '构成犯罪的，依法追究刑事责任'
          },
          {
            code: 'E',
            value: '直接追究单位的刑事责任'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCD'
      },
      {
        title: '黄平市友好饭店应当根据不同施工阶段和周围环境及季节、气候的变化，在施工现场采取相应的安全施工措施',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 太平建筑公司承建黄平市友好饭店的扩建项目，部分工程分包给黄平二建、黄平三建，整个项目由亚冬监理公司监理。太平建筑公司董事长对生产安全事故的应急救援和调查处理提出以下问题，请回答',
    plist: [{
        title: '若黄平二建负责部分的工程在施工中发生生产安全事故，应由（ ）负责上报事故',
        list: [{
            code: 'A',
            value: '太平建筑公司'
          },
          {
            code: 'B',
            value: '黄平二建'
          },
          {
            code: 'C',
            value: '亚冬监理'
          },
          {
            code: 'D',
            value: '黄平市建筑局'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '发生生产安全事故后，（ ）应当采取措施防止事故扩大，保护事故现场',
        list: [{
            code: 'A',
            value: '太平建筑公司'
          },
          {
            code: 'B',
            value: '黄平二建'
          },
          {
            code: 'C',
            value: '亚冬监理'
          },
          {
            code: 'D',
            value: '黄平市建筑局'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '如若发生事故，太平建筑公司董事长有下列（ ）行为之一的，处上一年年收入40%至80%的罚款',
        list: [{
            code: 'A',
            value: '不立即组织事故抢救的'
          },
          {
            code: 'B',
            value: '谎报或者瞒报事故的'
          },
          {
            code: 'C',
            value: '迟报或者漏报事故的'
          },
          {
            code: 'D',
            value: '事故发生后逃匿的'
          },
          {
            code: 'E',
            value: '在事故调查处理期间擅离职守的'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ACE'
      },
      {
        title: '此项目应由太平建筑公司统一组织编制建设工程生产安全事故应急救援预案',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 肥东市白云饭店为提高饭店档次，经单位负责人决定对饭店进行装修，工程由肥东三建负责施工。此次装修将涉及承重结构的变动。请就此案例回答下列问题',
    plist: [{
        title: '为赶工期，下列关于可否在设计方案提出前就进行施工的说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '可以'
          },
          {
            code: 'B',
            value: '不可以'
          },
          {
            code: 'C',
            value: '经肥东市人民政府批准后可以'
          },
          {
            code: 'D',
            value: '经肥东市建设局批准后可以'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '装修过程中原租用白云饭店15层写字间的宏富贸易公司可否按自己的需要自行变动房屋的承重结构的说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '经肥东市建设局批准后可以'
          },
          {
            code: 'B',
            value: '经肥东市人民政府批准后可以'
          },
          {
            code: 'C',
            value: '不可以'
          },
          {
            code: 'D',
            value: '可以'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '《建设工程安全生产管理条例》中的建设工程指（ ）',
        list: [{
            code: 'A',
            value: '土木工程'
          },
          {
            code: 'B',
            value: '建筑工程'
          },
          {
            code: 'C',
            value: '线路管道'
          },
          {
            code: 'D',
            value: '设备安装工程'
          },
          {
            code: 'E',
            value: '装修工程'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCDE'
      },
      {
        title: '白云饭店应当在施工前委托饭店原设计单位或者具有相应资质等级的设计单位提出设计方案',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 元广建设集团是一大型建筑公司，根据《中华人民共和国安全生产法》和《中华人民共和国安全许可证条例》的有关规定应领取安全生产许可证，请回答该公司董事长提出的下述问题',
    plist: [{
        title: '若元广建设集团是中央管理的建筑施工企业，则它的安全生产许可证的颁发和管理由（ ）负责',
        list: [{
            code: 'A',
            value: '国务院'
          },
          {
            code: 'B',
            value: '国务院建设行政主管部门'
          },
          {
            code: 'C',
            value: '中国建筑业协会'
          },
          {
            code: 'D',
            value: '国务院安全主管部门'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '元广建设集团向安全生产许可证颁发管理机关申请领取安全生产许可证，安全生产许可证颁发管理机关应当自收到申请之日起（ ）日内审查完毕',
        list: [{
            code: 'A',
            value: '30'
          },
          {
            code: 'B',
            value: '45'
          },
          {
            code: 'C',
            value: '15'
          },
          {
            code: 'D',
            value: '60'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '企业取得安全生产许可证，应当具备下列（ ）安全生产条件',
        list: [{
            code: 'A',
            value: '建立、健全安全生产责任制，制定完备的安全生产规章制度和操作规程'
          },
          {
            code: 'B',
            value: '主要负责人和安全生产管理人员经考核合格'
          },
          {
            code: 'C',
            value: '安全投入符合安全生产要求'
          },
          {
            code: 'D',
            value: '设置安全生产管理机构，配备专职安全生产管理人员'
          },
          {
            code: 'E',
            value: '从业人员经安全生产教育和培训合格'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCDE'
      },
      {
        title: '若元广建设集团未领取安全生产许可证，可以从事生产活动',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 有工程设置了一道重力式挡土墙，该地土质松软，挡土墙基础埋深0．5m，墙后有一道山坡，施工过程中，挡土墙倒塌，引起土方边坡的坍塌',
    plist: [{
        title: '土按照坚硬程度和开挖方法及使用工具可分为（ ）类',
        list: [{
            code: 'A',
            value: '六'
          },
          {
            code: 'B',
            value: '七'
          },
          {
            code: 'C',
            value: '八'
          },
          {
            code: 'D',
            value: '十'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '在挡土墙中，构造简单、施工方便、便于就地取材，而且主要是靠自身的重力来抵抗倾覆的挡土墙是（ ）',
        list: [{
            code: 'A',
            value: '重力式挡土墙'
          },
          {
            code: 'B',
            value: '钢筋混凝土挡土墙'
          },
          {
            code: 'C',
            value: '锚杆挡土墙'
          },
          {
            code: 'D',
            value: '锚定板挡土墙'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '重力式挡土墙的基本形式有（ ）',
        list: [{
            code: 'A',
            value: '平板式'
          },
          {
            code: 'B',
            value: '倾斜式'
          },
          {
            code: 'C',
            value: '独立式'
          },
          {
            code: 'D',
            value: '垂直式'
          },
          {
            code: 'E',
            value: '放射式'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'BD'
      },
      {
        title: '确定挡土墙基础埋深的影响因素较多，相对于土质地基，岩石地基的挡土墙埋置深度应更大',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 在施工现场搭设了一个长6m、宽0.6m、高4.5m的现浇混凝土梁的模板，其支撑用Ф48和Ф51的两种型号钢管直接支撑在地面上，浇筑混凝土时，支撑下地面沉陷，模板严重变形',
    plist: [{
        title: '模板支架搭设场地应清理、平整、排水通畅，支架地基土应夯实，地基宜高于自然地坪（ ）',
        list: [{
            code: 'A',
            value: '10mm'
          },
          {
            code: 'B',
            value: '20mm'
          },
          {
            code: 'C',
            value: '30mm'
          },
          {
            code: 'D',
            value: '50mm'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '扣件不得使用不合格品，使用中扣件的螺杆螺帽的拧紧力矩应在（ ）',
        list: [{
            code: 'A',
            value: '45 N.m~65 N.m'
          },
          {
            code: 'B',
            value: '40 N.m~60 N.m'
          },
          {
            code: 'C',
            value: '40 N.m~65 N.m'
          },
          {
            code: 'D',
            value: '45 N.m~60 N.m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '扣件式钢管支架使用中应定期检查（ ）',
        list: [{
            code: 'A',
            value: '地基积水，底座松动、立杆悬空'
          },
          {
            code: 'B',
            value: '扣件螺栓松动'
          },
          {
            code: 'C',
            value: '立杆沉降与垂直偏差'
          },
          {
            code: 'D',
            value: '安全防护是否完好'
          },
          {
            code: 'E',
            value: '立柱是否沾有混凝土'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCD'
      },
      {
        title: '在同一支撑体系中，两种不同规格的钢管不得混用',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某工地工人在拆除楼板钢模时，尚未办好审批手续。由于面积大，模板未拆完。中午吃饭时，工人吴某从未拆完的钢模板下经过，突然上边已活动的几块钢模板掉了下来，刚好击中吴某头部，经抢救无效死亡',
    plist: [{
        title: '跨度为6m的楼板，其底模拆除时的混凝土强度应不小于设计的混凝土立方体抗压强度标准值的（ ）',
        list: [{
            code: 'A',
            value: '50%'
          },
          {
            code: 'B',
            value: '75%'
          },
          {
            code: 'C',
            value: '85%'
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
        title: '对于梁板结构的模板拆除顺序，以下说法正确的是（ ）',
        list: [{
            code: 'A',
            value: '拆板底模—拆梁侧模—拆梁底模'
          },
          {
            code: 'B',
            value: '拆梁侧模—拆板底模—拆梁底模'
          },
          {
            code: 'C',
            value: '拆梁侧模—拆梁底模—拆板底模'
          },
          {
            code: 'D',
            value: '拆板底模—拆梁底模—拆梁侧模'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '下列有关模板拆除的说法，正确的是（ ）',
        list: [{
            code: 'A',
            value: '模板拆除前应履行审批手续'
          },
          {
            code: 'B',
            value: '模板的拆除应按专项方案进行，且方案必须经过专家论证'
          },
          {
            code: 'C',
            value: '模板拆除作业区应设围栏，并有专人负责监护'
          },
          {
            code: 'D',
            value: '拆下的模板构配件，若下面无人，可以直接抛掷'
          },
          {
            code: 'E',
            value: '拆模过程如遇中途停歇，对于已松动又很难临时固定的构配件必须一次拆除'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ACE'
      },
      {
        title: '拆模时的混凝土强度应以标准养护条件下的混凝土试块试压强度为准',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 5月15日下午，工程项目部施工员接到业主电话，要求施工单位派民工拆除工地西边外围临时房。次日上午，由普工班长孙某组织几位民工拆墙，民工自作主张，采用先敲松墙脚砖头再往前推的方法。当民工在拆除南边第三条墙底部占墙长约一半时，因该墙体质量上下部不均，约3.2m高的墙壁突然倒塌，民工谢某当场压住，经送医院抢救无效死亡',
    plist: [{
        title: '拆除施工采用的脚手架、安全网必须由（ ）搭设',
        list: [{
            code: 'A',
            value: '技术人员'
          },
          {
            code: 'B',
            value: '安全人员'
          },
          {
            code: 'C',
            value: '管理人员'
          },
          {
            code: 'D',
            value: '专业人员'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '对于高度不超过2层，面积不大于1000m2的砖木结构，一般采用（ ）方法拆除',
        list: [{
            code: 'A',
            value: '混合拆除'
          },
          {
            code: 'B',
            value: '爆破拆除'
          },
          {
            code: 'C',
            value: '机械拆除'
          },
          {
            code: 'D',
            value: '人工拆除'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '以下有关拆除工程的说法，正确的是（ ）',
        list: [{
            code: 'A',
            value: '人工拆除建筑墙体时，不得采用掏掘或推倒的方法'
          },
          {
            code: 'B',
            value: '人工拆除建筑的栏杆、楼梯等构件，应先于主体结构拆除'
          },
          {
            code: 'C',
            value: '拆除施工程序应按先承重结构后非承重结构的原则拆除'
          },
          {
            code: 'D',
            value: '拆除施工应分段进行，不得垂直交叉作业'
          },
          {
            code: 'E',
            value: '拆除工程施工前，必须对施工作业人员进行书面安全技术交底'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ADE'
      },
      {
        title: '拆除原用于有毒、可燃气体的管道及容器时，必须查清其残留物的种类、化学性质，采取相应措施后，方可进行拆除施工',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某工地因断料而停工，搅拌机操作工苏某将搅拌机料斗升起并用保险钩钩住料斗后（料斗重约200kg，离地2.5m），就在料斗下方对余料进行清理，这时普工崔某主动过来帮助一起清理，后因清理出来的余料较多，苏某离开去接拖车用来装料，此时料斗突然脱钩落下，将正在下面清理的崔某上半身压住，后经送医院抢救无效死亡',
    plist: [{
        title: '本起事故的直接原因是（ ）',
        list: [{
            code: 'A',
            value: '普工崔某没有戴好安全帽'
          },
          {
            code: 'B',
            value: '搅拌机进场未经验收合格擅自使用'
          },
          {
            code: 'C',
            value: '周边没有设置安全警戒线'
          },
          {
            code: 'D',
            value: '管理人员现场监管不到位'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '混凝土搅拌机料斗放到最低位置时，在料斗与地面之间应加一层垫木，起（ ）作用',
        list: [{
            code: 'A',
            value: '填高'
          },
          {
            code: 'B',
            value: '隔水'
          },
          {
            code: 'C',
            value: '缓冲'
          },
          {
            code: 'D',
            value: '终止'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '建筑施工所用的都是周期式混凝土搅拌机，这类搅拌机按搅拌原理又可分为（ ）',
        list: [{
            code: 'A',
            value: '自动式'
          },
          {
            code: 'B',
            value: '自落式'
          },
          {
            code: 'C',
            value: '联动式'
          },
          {
            code: 'D',
            value: '强制式'
          },
          {
            code: 'E',
            value: '双翻式'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'BD'
      },
      {
        title: '料斗提升时，除操作人员外，严禁其他人在料斗下停留',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 一住宅小区施工现场，钢筋工王某正在使用钢筋切断机切割钢筋，由于切刀附近有些钢筋的断头，王某考虑到开关箱还有一些距离（约4m），为节省时间，王某直接用手去清理，结果导致4只手指被截断',
    plist: [{
        title: '切断短料时，手和切刀之间的距离应保持在（ ）以上，如手握端小于400mm时，应采用套管或夹具将钢筋短头压住或夹牢',
        list: [{
            code: 'A',
            value: '100mm'
          },
          {
            code: 'B',
            value: '150mm'
          },
          {
            code: 'C',
            value: '200mm'
          },
          {
            code: 'D',
            value: '250mm'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '钢筋切断机的接送料工作台面与切刀下部应（ ）',
        list: [{
            code: 'A',
            value: '保持水平'
          },
          {
            code: 'B',
            value: '略高5mm'
          },
          {
            code: 'C',
            value: '略高10mm'
          },
          {
            code: 'D',
            value: '略低5mm'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '施工现场常用的钢筋加工机械有（ ）等',
        list: [{
            code: 'A',
            value: '钢筋切断机'
          },
          {
            code: 'B',
            value: '钢筋调直机'
          },
          {
            code: 'C',
            value: '钢筋弯曲机'
          },
          {
            code: 'D',
            value: '钢筋弯扭机'
          },
          {
            code: 'E',
            value: '钢筋镦头机'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCE'
      },
      {
        title: '钢筋切断机在运转过程中，严禁用手直接清除切刀附近的断头和杂物',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 9月10日上午，一小区工程9号楼工地使用的QTG40塔吊在将距塔基有10m远的路边一堆重约2.7吨的钢筋，吊到距塔基25m远的钢筋堆场时，途中发生塔吊塔身下端断裂，造成塔吊被毁，驾驶室严重变形，吊机司机经抢救无效死亡',
    plist: [{
        title: '塔机最重要的安全装置是（ ），它应始终处于正常工作状态',
        list: [{
            code: 'A',
            value: '起重量限制器'
          },
          {
            code: 'B',
            value: '起升高度限位器'
          },
          {
            code: 'C',
            value: '幅度限位器'
          },
          {
            code: 'D',
            value: '力矩限制器'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '臂架根部铰点高度大于（ ）的塔机，应安装风速仪，当风速大于工作极限风速时，应能发出停止作业的警报',
        list: [{
            code: 'A',
            value: '30m'
          },
          {
            code: 'B',
            value: '50m'
          },
          {
            code: 'C',
            value: '60m'
          },
          {
            code: 'D',
            value: '80m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '塔机最基本的工作机构是（ ）',
        list: [{
            code: 'A',
            value: '起升机构'
          },
          {
            code: 'B',
            value: '变幅机构'
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
            value: '限位机构'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCD'
      },
      {
        title: 'QTG40塔机是一种汽车式塔式起重机',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 某大厦主体工程和外装修工程已基本完成，当4名工人乘施工升降机吊笼在该大厦第9层拆卸SS100型钢丝绳升降机架体时，升降机吊笼从33m高处坠落在地面，造成4人死亡',
    plist: [{
        title: '施工升降机主要的安全装置是（ ）',
        list: [{
            code: 'A',
            value: '防坠安全器'
          },
          {
            code: 'B',
            value: '载重量限制器'
          },
          {
            code: 'C',
            value: '钢丝绳防脱槽装置'
          },
          {
            code: 'D',
            value: '断绳保护装置'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '安装在吊笼上部的重要也是最后一道安全装置是（ ）',
        list: [{
            code: 'A',
            value: '上限位开关'
          },
          {
            code: 'B',
            value: '上极限开关'
          },
          {
            code: 'C',
            value: '安全钩'
          },
          {
            code: 'D',
            value: '防坠装置'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '建筑施工升降机按驱动方式分为（ ）',
        list: [{
            code: 'A',
            value: '齿轮齿条驱动'
          },
          {
            code: 'B',
            value: '卷扬机钢丝绳驱动'
          },
          {
            code: 'C',
            value: '电动机驱动'
          },
          {
            code: 'D',
            value: '单轴轮机驱动'
          },
          {
            code: 'E',
            value: '混合驱动'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABE'
      },
      {
        title: '施工升降机严禁载人',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 某工程的1号物料提升机吊笼停在二层，女工唐某进行卸料作业，操作人员临时离开。这时另一班组喊叫要求提升相邻的2号提升机，此时，经过此地的工人胡某开动了正在卸料的1号提升机；唐某正跨于吊笼与平台之间，上升的提升机把唐某掀翻，从二层井架平台坠落到井架底，头部撞在井架立杆上，抢救多日后，因颅内出血过重死亡',
    plist: [{
        title: '物料提升机是指额定起重量在（ ）以下，以地面卷扬机为牵引动力，由底架、立柱及天梁组成架体，吊笼沿导轨升降运动，垂直输送物料的起重设备',
        list: [{
            code: 'A',
            value: '800kg'
          },
          {
            code: 'B',
            value: '1000kg'
          },
          {
            code: 'C',
            value: '1500kg'
          },
          {
            code: 'D',
            value: '2000kg'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '物料提升机的吊笼两侧应设置高度不小于（ ）的安全挡板或挡网',
        list: [{
            code: 'A',
            value: '800mm'
          },
          {
            code: 'B',
            value: '900mm'
          },
          {
            code: 'C',
            value: '1000mm'
          },
          {
            code: 'D',
            value: '1100mm'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '物料提升机的稳定性能主要取决于物料提升机的（ ）',
        list: [{
            code: 'A',
            value: '地基'
          },
          {
            code: 'B',
            value: '基础'
          },
          {
            code: 'C',
            value: '附墙架'
          },
          {
            code: 'D',
            value: '缆风绳'
          },
          {
            code: 'E',
            value: '地锚'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'BCDE'
      },
      {
        title: '本起事故的主要原因是女工唐某违规操作',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 某建筑工地正在进行主体施工，搭设脚手架外侧未挂设密目式安全网，当日风很大，张某从楼底下经过，突然从五楼楼板边缘处掉下一块1m长4cm×6cm的方木，正好击中张某头部（未戴安全帽），经送医院抢救无效死亡',
    plist: [{
        title: '密目式安全网是指在网上任意一处的10cm×10cm=100cm2的面积上，其目数应（ ）',
        list: [{
            code: 'A',
            value: '小于2000'
          },
          {
            code: 'B',
            value: '大于2000'
          },
          {
            code: 'C',
            value: '小于1500'
          },
          {
            code: 'D',
            value: '大于1500'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '施工现场所选择的安全帽，在工人戴帽的情况下，帽衬顶端与帽壳内面的每一侧面的水平距离保持在（ ）',
        list: [{
            code: 'A',
            value: '5mm'
          },
          {
            code: 'B',
            value: '5~10mm'
          },
          {
            code: 'C',
            value: '2~10mm'
          },
          {
            code: 'D',
            value: '5~20mm'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '安全帽的材质必须满足（  ）的要求',
        list: [{
            code: 'A',
            value: '侧向刚性能良好'
          },
          {
            code: 'B',
            value: '耐低温性能良好'
          },
          {
            code: 'C',
            value: '耐高温性能良好'
          },
          {
            code: 'D',
            value: '耐穿透'
          },
          {
            code: 'E',
            value: '耐冲击'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABDE'
      },
      {
        title: '进入施工现场必须携带安全帽',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 24日上午8时许，某音乐厅项目开始屋面混凝土浇捣施工作业。25日5时10分左右，屋面浇捣施工作业即将完成时，在无任何预兆情况下，屋面突然坍塌，现场作业的24人随屋面混凝土、钢筋、模板坠落，其中4人经抢救无效死亡，20人受伤。经调查，导致这起事故的直接原因是搭设支模架的钢管、扣件质量不合格；支模架搭设不规范，立杆步距大小不一，立杆间距过大，竖向剪刀撑数量极少，水平剪刀撑未设等',
    plist: [{
        title: '剪刀撑斜杆与地面的夹角应在（ ）之间',
        list: [{
            code: 'A',
            value: '45°~60°'
          },
          {
            code: 'B',
            value: '30°~45°'
          },
          {
            code: 'C',
            value: '30°~60°'
          },
          {
            code: 'D',
            value: '40°~60°'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '支架立杆必须设置纵、横向扫地杆，纵向扫地杆的设置应（ ）',
        list: [{
            code: 'A',
            value: '距离底座不小于150mm，在横向扫地杆的下方'
          },
          {
            code: 'B',
            value: '距离底座不大于150mm，在横向扫地杆的下方'
          },
          {
            code: 'C',
            value: '距离底座不小于200mm，在横向扫地杆的上方'
          },
          {
            code: 'D',
            value: '距离底座不大于200mm，在横向扫地杆的上方'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '下列有关扣件式钢管支架的说法，正确的是（ ）',
        list: [{
            code: 'A',
            value: '立杆接长必须采用对接'
          },
          {
            code: 'B',
            value: '立杆接长也可以采用搭接'
          },
          {
            code: 'C',
            value: '水平杆步距不应大于1.5m'
          },
          {
            code: 'D',
            value: '主节点处必须设有纵、横向水平杆'
          },
          {
            code: 'E',
            value: '各杆件端头伸出扣件盖板边缘的长度不应小于100mm'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ADE'
      },
      {
        title: '立杆步距、间距、剪刀撑应根据经批准的施工方案设置',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 一高层住宅工程正在装修，外脚手架已经拆到了五层楼板处，三个班组做了分工，一组负责贴面砖，二组负责拆除脚手架的连墙件，三组负责拆除脚手架架体，当五层面砖刚贴完一半时，二组已经将脚手架的连墙件全部拆除，当一组拟转移到下层作业时，脚手架向外倒塌，架上人员全部坠落',
    plist: [{
        title: '纵向水平杆采用搭接接长时，其搭接应满足（ ）要求',
        list: [{
            code: 'A',
            value: '搭接长度不应小于1m，对称设置2个旋转扣件固定'
          },
          {
            code: 'B',
            value: '搭接长度不应小于1.2m，等间距设置3个旋转扣件固定'
          },
          {
            code: 'C',
            value: '搭接长度不应小于1m，等间距设置3个旋转扣件固定'
          },
          {
            code: 'D',
            value: '搭接长度不应小于1.2m，对称设置2个旋转扣件固定'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '脚手架除底层外的各层步距不应大于（ ）',
        list: [{
            code: 'A',
            value: '2.5m'
          },
          {
            code: 'B',
            value: '2.2m'
          },
          {
            code: 'C',
            value: '2m'
          },
          {
            code: 'D',
            value: '1.8m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '连墙件设置要求有（ ）',
        list: [{
            code: 'A',
            value: '连墙件的设置数量应满足计算要求'
          },
          {
            code: 'B',
            value: '偏离主节点的距离不应大于300mm'
          },
          {
            code: 'C',
            value: '宜靠近主节点设置'
          },
          {
            code: 'D',
            value: '应从脚手架底层第二步纵向水平杆处开始设置'
          },
          {
            code: 'E',
            value: '宜优先采用矩形或方形布置'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABC'
      },
      {
        title: '本起事故的主要原因是第三组没有及时将架体拆除',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 9月28日上午，某公司新建厂区进入涂料粉刷工序。油漆工胡某用2.5m高移动式操作平台，在成品仓库二楼2-3轴线，F-G位置屋面的次梁天棚刮腻子时，因操作平台无围护栏杆，胡某后退操作踩空坠落，经送医院抢救无效死亡',
    plist: [{
        title: '高处作业可分为四级，高度在5~15m时，应为（ ）高处作业',
        list: [{
            code: 'A',
            value: '一级'
          },
          {
            code: 'B',
            value: '二级'
          },
          {
            code: 'C',
            value: '三级'
          },
          {
            code: 'D',
            value: '四级'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '操作平台的面积和高度应满足（ ）要求',
        list: [{
            code: 'A',
            value: '面积不超过15m2，高度不超过5m'
          },
          {
            code: 'B',
            value: '面积不超过10m2，高度不超过3m'
          },
          {
            code: 'C',
            value: '面积不超过15m2，高度不超过3m'
          },
          {
            code: 'D',
            value: '面积不超过10m2，高度不超过5m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '以下有关搭设临边防护栏杆的要求，正确的是（ ）',
        list: [{
            code: 'A',
            value: '上杆离地离度为1.0~1.2m'
          },
          {
            code: 'B',
            value: '下杆离地高度为0.6~0.8m'
          },
          {
            code: 'C',
            value: '坡度大于1:2.2的屋面，防护栏杆应高1.2m'
          },
          {
            code: 'D',
            value: '在防护栏杆上杆任何处，均能经受任何方向1kN的外力'
          },
          {
            code: 'E',
            value: '栏杆柱在混凝土楼面固定时，可用预埋件与钢管焊牢'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ADE'
      },
      {
        title: '本起事故的直接原因是移动式操作平台无围护栏杆',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某高层住宅工地进行墙面清理，未经施工负责人同意将15层的电梯井预留口防护栏杆拆掉，作业完毕未进行恢复。抹灰工张某上厕所随便在转弯处解手，不小心从电梯井预留口掉了下去，当场死亡。经现场勘查，电梯井内未设防护网',
    plist: [{
        title: '电梯井内每隔两层或最多（ ）应设一道安全平网',
        list: [{
            code: 'A',
            value: '5m'
          },
          {
            code: 'B',
            value: '10m'
          },
          {
            code: 'C',
            value: '15m'
          },
          {
            code: 'D',
            value: '20m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '对于边长为150~300cm的水平洞口，必须（ ）',
        list: [{
            code: 'A',
            value: '直接用竹、木等盖板，盖住洞口'
          },
          {
            code: 'B',
            value: '设置以扣件扣接钢管而成的网络，再在其上满铺竹笆或脚手板'
          },
          {
            code: 'C',
            value: '可不设防护栏杆，但应在洞口下张设安全平网'
          },
          {
            code: 'D',
            value: '四周应设防护栏杆，洞口下张设安全网'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '对于落地的竖向洞口，其防护措施的做法正确的是（ ）',
        list: [{
            code: 'A',
            value: '加装开关式的安全门'
          },
          {
            code: 'B',
            value: '加装工具式的安全门'
          },
          {
            code: 'C',
            value: '加装固定式的安全门'
          },
          {
            code: 'D',
            value: '使用密目式安全网封闭'
          },
          {
            code: 'E',
            value: '使用防护栏杆，下设挡脚板'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCE'
      },
      {
        title: '未经施工负责人同意随意拆除安全防护设施，在作业完毕未立即恢复，这是导致本起事故的直接原因',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 6月20日上午，电工班组长陈某安排电工刘某、普工王某移装某办公楼项目二楼西边吊顶内疏散指示灯。10时左右，2人到达作业点下方的走廊处，为便于作业，王某下楼去拿手提式应急灯。当王某回到作业点时，发现刘某因触电而仰躺在吊顶内，后经送医院抢救无效死亡',
    plist: [{
        title: '开关箱与其供电的固定式用电设备的水平距离不宜超过（ ）',
        list: [{
            code: 'A',
            value: '2m'
          },
          {
            code: 'B',
            value: '3m'
          },
          {
            code: 'C',
            value: '4m'
          },
          {
            code: 'D',
            value: '5m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '施工现场用电工程的基本供配电系统应按（ ）设置',
        list: [{
            code: 'A',
            value: '一级'
          },
          {
            code: 'B',
            value: '二级'
          },
          {
            code: 'C',
            value: '三级'
          },
          {
            code: 'D',
            value: '四级'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '施工现场需要编制用电组织设计的基准条件是（ ）',
        list: [{
            code: 'A',
            value: '用电设备5台及以上'
          },
          {
            code: 'B',
            value: '用电设备总容量100kW及以上'
          },
          {
            code: 'C',
            value: '用电设备总容量50kW及以上'
          },
          {
            code: 'D',
            value: '用电设备总容量10台及以上'
          },
          {
            code: 'E',
            value: '用电设备5台及以上，且用电设备总容量100kW及以上'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'AC'
      },
      {
        title: '在TN-S接地、接零保护系统中，N线和PE线均有可能带电',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 在某工地的上部距地面7m左右处，有一条10kV排挤线路经东西方向穿过。5月17日开始土方回填，至5月底完成土方回填时，排挤线路间隔地面净空只剩5.6m，期间施工单位曾多次要求建设单位尽快迁移，但始终未得以解决，而施工单位就一直违章在高压排挤线下方不采取任何措施冒险作业。当8月3日承包人温某正违章指挥12名民工，将6m长的钢筋笼放进桩孔时，由于顶部钢筋距高压线过近而产生电弧，11名民工被击倒在地，造成3人死亡，3人受伤事故',
    plist: [{
        title: '在建工程（含脚手架）周边与10kV外电架空线路的边线之间的最小安全操作距离为（ ）',
        list: [{
            code: 'A',
            value: '4m'
          },
          {
            code: 'B',
            value: '6m'
          },
          {
            code: 'C',
            value: '8m'
          },
          {
            code: 'D',
            value: '10m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '对外电线路防护应做到坚固稳定，能防止直径为（ ）的固体异物穿越，并须在防护隔离处悬挂醒目的警告标志牌',
        list: [{
            code: 'A',
            value: '1mm'
          },
          {
            code: 'B',
            value: '1.5mm'
          },
          {
            code: 'C',
            value: '2mm'
          },
          {
            code: 'D',
            value: '2.5mm'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '对外电线路防护的基本措施可以是（ ）',
        list: [{
            code: 'A',
            value: '保证安全操作距离'
          },
          {
            code: 'B',
            value: '搭设安全防护设施'
          },
          {
            code: 'C',
            value: '迁移外电线路'
          },
          {
            code: 'D',
            value: '停用外电线路'
          },
          {
            code: 'E',
            value: '施工人员做好绝缘防护'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCD'
      },
      {
        title: '由于高压线路的四周空间存在强电场，导致四周的导体成为带电体，因此规范规定在高压排挤线路下方作业应保持一定的安全间隔，防止发生触电事故',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 7月14日，民工代某等5人进行某工地地下室外墙防水涂料涂刷作业，其中1人在地面上拌、送料，其余4人下到基坑作业。到下午3时许，在基坑下约8m深处作业的民工突然晕倒跌落坑底（当时基坑底部有深约0.7m的积水），在地面上作业的民工发现后立即喊叫救人。在基坑下约4m处作业的另外3人见状急忙去抢救，结果也相断晕倒并跌落坑底积水中。周围人员听到呼救声，迅速赶来救人，在抢救过程中，营救人员也出现胸闷、头晕、意识模糊等症状。先后有14人被送往医院救治，其中2人在现场经医生确认死亡，2人经医院抢救无效死亡。经事后调查，涂刷作业使用的防水涂料中含有严重超标的苯系物质',
    plist: [{
        title: '在建筑施工中，油漆、环氧树脂、冷沥青、塑料以及喷漆、粘接、机件的浸洗等，均用苯作为有机溶剂、稀释剂和清洗剂。有些粘接剂含苯、甲苯或丙酮的浓度高，容易发生苯的（  ）',
        list: [{
            code: 'A',
            value: '轻度中毒'
          },
          {
            code: 'B',
            value: '中度中毒'
          },
          {
            code: 'C',
            value: '慢性中毒'
          },
          {
            code: 'D',
            value: '急性中毒'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '本起事故发生的原因，除了防水涂料中苯超标外，主要是（ ）',
        list: [{
            code: 'A',
            value: '人员意识淡薄'
          },
          {
            code: 'B',
            value: '没有戴安全帽'
          },
          {
            code: 'C',
            value: '安全交底不清'
          },
          {
            code: 'D',
            value: '现场通风不畅'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '在施工过程中，有毒物质进入人体主要是经（ ）进入',
        list: [{
            code: 'A',
            value: '呼吸道'
          },
          {
            code: 'B',
            value: '消化道'
          },
          {
            code: 'C',
            value: '皮肤'
          },
          {
            code: 'D',
            value: '食物'
          },
          {
            code: 'E',
            value: '饮用水'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'AC'
      },
      {
        title: '本起事故的直接原因是工地地下室外墙采用防水涂料',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 某医院工程北配楼正在进行装修施工，电焊工张某在地上一层焊接水暖支架时，焊渣跌落至地下一层，引燃了堆放在地下一层的聚苯乙烯保温材料，从而引发大火',
    plist: [{
        title: '我国消防工作的方针是（ ）',
        list: [{
            code: 'A',
            value: '以防为主，防治结合'
          },
          {
            code: 'B',
            value: '以防为主，防消结合'
          },
          {
            code: 'C',
            value: '安全第一，预防为主'
          },
          {
            code: 'D',
            value: '预防为主，综合治理'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '施工现场内贮存易燃易爆危险品的仓库、库区，属于（ ）动火区域',
        list: [{
            code: 'A',
            value: '一级'
          },
          {
            code: 'B',
            value: '二级'
          },
          {
            code: 'C',
            value: '三级'
          },
          {
            code: 'D',
            value: '四级'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '在施工现场禁火区域内动火，作业前必须申请办理动火证，动火证必须注明（ ）',
        list: [{
            code: 'A',
            value: '动火地点'
          },
          {
            code: 'B',
            value: '动火时间'
          },
          {
            code: 'C',
            value: '动火人'
          },
          {
            code: 'D',
            value: '动火成本'
          },
          {
            code: 'E',
            value: '防火措施'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCE'
      },
      {
        title: '电焊工张某违规操作是引起本起事故的主要原因',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某冷库内装修工地，照明用碘钨灯直接用木棍连接放在装修好的墙边，夜里无人施工，碘钨灯烤着墙边的装修材料，引起大火，损失40余万元',
    plist: [{
        title: '聚光灯及碘钨灯等高热灯具与易燃易爆物的防护距离不宜小于（ ），且不得直接照射易燃物',
        list: [{
            code: 'A',
            value: '200mm'
          },
          {
            code: 'B',
            value: '300mm'
          },
          {
            code: 'C',
            value: '500mm'
          },
          {
            code: 'D',
            value: '1000mm'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '施工现场必须设立消防车通道，其宽度应不小于（ ）',
        list: [{
            code: 'A',
            value: '2.5m'
          },
          {
            code: 'B',
            value: '3.5m'
          },
          {
            code: 'C',
            value: '4.5m'
          },
          {
            code: 'D',
            value: '5.5m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '施工现场要明确划分出（ ），各区域之间一定要有可靠的防火间距',
        list: [{
            code: 'A',
            value: '动火作业区'
          },
          {
            code: 'B',
            value: '禁火作业区'
          },
          {
            code: 'C',
            value: '仓库区'
          },
          {
            code: 'D',
            value: '现场生活区'
          },
          {
            code: 'E',
            value: '机械作业区'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'BCD'
      },
      {
        title: '物质的闪点越低，发生起火的危险性就越大',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某建筑公司购置1台由某塔机生产厂生产的QTC25A塔式起重机，该塔机厂雇用李某进行首次安装。按照塔机安装的程序，塔身、塔帽、配重臂安装完毕后，着手安装起重臂(该塔机是自装式水平臂塔机)。起重臂在安装时对吊点位置、吊索的拴系方式、重心所处位置均有严格的技术要求。按照要求应设置六倍率吊索。李某等人设置了2个吊点，使用4根钢丝绳，在吊索未拴牢的情况下，将起重臂拉起，在安装拉杆时，吊点处的钢丝绳在冲击力的作用下，将起重臂两根侧向斜腹杆拉断后，向起重臂根部水平方向移动约450mm。起重臂瞬间下沉，造成钢丝绳断裂，起重臂以铰接点为轴心坠落，在起重臂上的五名操作工人随之坠落，造成4人死亡，1人受伤。经事故调查，该塔机无技术图纸，无生产工艺，无产品检验报告，作业人员未系安全带，无证作业',
    plist: [{
        title: '塔式起重机的主参数为（ ）',
        list: [{
            code: 'A',
            value: '公称起重力矩'
          },
          {
            code: 'B',
            value: '起升高度'
          },
          {
            code: 'C',
            value: '工作幅度'
          },
          {
            code: 'D',
            value: '起重量'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '下列不属于塔式起重机金属结构的部分为（ ）',
        list: [{
            code: 'A',
            value: '底架'
          },
          {
            code: 'B',
            value: '塔身'
          },
          {
            code: 'C',
            value: '起重臂'
          },
          {
            code: 'D',
            value: '起升机构'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '塔式起重机按变幅方式分可分为（ ）',
        list: [{
            code: 'A',
            value: '小车变幅塔式起重机'
          },
          {
            code: 'B',
            value: '动臂变幅塔式起重机'
          },
          {
            code: 'C',
            value: '折臂式塔式起重机'
          },
          {
            code: 'D',
            value: '自行架设塔式起重机'
          },
          {
            code: 'E',
            value: '固定式塔式起重机'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABC'
      },
      {
        title: '该塔机生产厂违法雇用无安装资质的安装单位',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某工程的1号物料提升机吊笼停在2层，女工唐某进行卸料作业，操作人员临时离开。这时另一班组喊叫要求提升相邻的2号提升机，经过此地的工人胡某却开动了正在卸料的1号提升机；唐某正跨于吊笼与平台之间，上升的提升机把唐某掀翻，从二层井架平台坠落到井架底，头部撞在井架立杆上，抢救多日后，因颅内出血过重死亡',
    plist: [{
        title: '物料提升机的吊笼装载额定载重量，悬挂或运行中发生断绳时，断绳保护装置必须可靠地把吊笼刹制在导轨上，最大制动滑落距离应不大于（ ）m',
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
        answer: 'A'
      },
      {
        title: '当物料提升机吊笼内载荷达到额定载重量的（ ）%时，应发出报警信号',
        list: [{
            code: 'A',
            value: '70'
          },
          {
            code: 'B',
            value: '90'
          },
          {
            code: 'C',
            value: '100'
          },
          {
            code: 'D',
            value: '80'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '物料提升机组装后应进行验收，并进行（ ）试验',
        list: [{
            code: 'A',
            value: '载人试验'
          },
          {
            code: 'B',
            value: '不需要任何试验'
          },
          {
            code: 'C',
            value: '超载试验'
          },
          {
            code: 'D',
            value: '动载试验'
          },
          {
            code: 'E',
            value: '空载试验'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'CDE'
      },
      {
        title: '当有人在高处提升机吊笼处作业时，提升机操作人员擅自离岗',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某公寓楼工程发生了一起施工升降机吊笼冒顶坠落事故，造成吊笼内的3名员工死亡。该工程由裙体相连的A.B.C三幢32层高层公寓楼组成，施工总承包单位某建筑公司将该工程的部分装饰工程分包给某装饰公司。事故发生时，工程外墙装修即将结束，内装修进入修补阶段。A楼的施工升降机已拆卸至1 3层高度。发生事故的施工升降机位于A楼，由某设备租赁公司提供并负责日常维修检查工作，总承包单位工程项目部使用并配备了电梯司机。事故发生当日6时20分左右，某装饰公司员工鲍某等3人在电梯司机尚未上班到岗的情况下，擅自驾乘A楼施工升降机右笼前往7层，在上升过程中，由于超高极限开关未起作用，上行停车操作失控，发生吊笼冒顶，酿成事故',
    plist: [{
        title: '施工升降机提升吊笼的钢丝绳的安全系数不得小于（ ）',
        list: [{
            code: 'A',
            value: '10'
          },
          {
            code: 'B',
            value: '11'
          },
          {
            code: 'C',
            value: '12'
          },
          {
            code: 'D',
            value: '13'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '施工升降机提升吊笼的钢丝绳的直径不得小于（ ）mm',
        list: [{
            code: 'A',
            value: '8'
          },
          {
            code: 'B',
            value: '9'
          },
          {
            code: 'C',
            value: '10'
          },
          {
            code: 'D',
            value: '11'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '下列属于施工升降机的安全保护装置的是（ ）',
        list: [{
            code: 'A',
            value: '导轨架'
          },
          {
            code: 'B',
            value: '防坠安全器'
          },
          {
            code: 'C',
            value: '缓冲弹簧'
          },
          {
            code: 'D',
            value: '安全钩'
          },
          {
            code: 'E',
            value: '配重'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'BCD'
      },
      {
        title: '鲍某等3人非电梯司机，无证且擅自操作施工升降机，对事故应负直接责任',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 一高层住宅工程，正在装修，外脚手架已经拆到了五层楼板处，三个班组的分工为一组贴面砖，二组负责剪断脚手架的连墙件，三组拆除脚手架，当五层面砖刚完成一半时，二组已经将15m高的脚手架连墙件全部拆除，当一组拟转移到下层作业时，脚手架向外倒塌，架上人员全部坠落',
    plist: [{
        title: '扣件式脚手架规范规定，每根钢管的重量不应超过（ ）kg',
        list: [{
            code: 'A',
            value: '20'
          },
          {
            code: 'B',
            value: '25'
          },
          {
            code: 'C',
            value: '30'
          },
          {
            code: 'D',
            value: '35'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '当脚手架的扣件夹紧钢管时，开口处的最小距离应不小于（ ）mm',
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
            value: '12'
          },
          {
            code: 'D',
            value: '14'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '下列属于扣件式脚手架上的永久荷载的是（ ）',
        list: [{
            code: 'A',
            value: '结构自重'
          },
          {
            code: 'B',
            value: '构配件自重'
          },
          {
            code: 'C',
            value: '施工荷载'
          },
          {
            code: 'D',
            value: '风荷载'
          },
          {
            code: 'E',
            value: '水平荷载'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'AB'
      },
      {
        title: '拆除脚手架前，没有编制拆除方案，只在现场临时作了分工是造成此事故的原因之一',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某工地在3层楼施工，工人在搬运砖块，由于该作业层未满铺脚手架，而只有少数脚手板，并且有的接头处无固定，工人王某在搬了三次砖块后，一脚踏在一块未固定的探头板上，立时倾翻，王某掉下，造成大腿骨骨折',
    plist: [{
        title: '扣件活动部位应能灵活转动，旋转扣件的两旋转面间隙应小于（ ）mm',
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
        answer: 'A'
      },
      {
        title: '脚手架架高超过（ ）m时，连墙件应采取抗上升翻流作用的连墙措施',
        list: [{
            code: 'A',
            value: '30'
          },
          {
            code: 'B',
            value: '40'
          },
          {
            code: 'C',
            value: '50'
          },
          {
            code: 'D',
            value: '60'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '与一般建筑钢结构相比，下列关于扣件式脚手架的结构特点叙述正确的是（ ）',
        list: [{
            code: 'A',
            value: '所受荷载变异性较大'
          },
          {
            code: 'B',
            value: '脚手架及其组成构配件存在较大的初始缺陷'
          },
          {
            code: 'C',
            value: '扣件连接点属于刚性连接'
          },
          {
            code: 'D',
            value: '连墙件对脚手架的约束性存在较大差异'
          },
          {
            code: 'E',
            value: '扣件连接点属于柔性连接'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABD'
      },
      {
        title: '作业层跳板下应搭设大眼安全网',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某12层高的公寓工程，在建筑物的四周搭设了一道40m的封圈型扣件式钢管外脚手架，外装修以后需将脚手架拆除。拆除时，将拆下来的构配件随手往地面抛掷，当拆到30m高时，往下掷一根钢管，刚好打在路过此处戴安全帽的施工员头上，安全帽破碎，施工员当场死亡',
    plist: [{
        title: '单管立杆扣件式脚手架的搭设高度不宜超过（ ）m',
        list: [{
            code: 'A',
            value: '40'
          },
          {
            code: 'B',
            value: '50'
          },
          {
            code: 'C',
            value: '60'
          },
          {
            code: 'D',
            value: '70'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '分段悬挑脚手架每段高度不宜超过（ ）m',
        list: [{
            code: 'A',
            value: '20'
          },
          {
            code: 'B',
            value: '25'
          },
          {
            code: 'C',
            value: '30'
          },
          {
            code: 'D',
            value: '35'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '下列关于扣件式脚手架基本要求叙述正确的是（ ）',
        list: [{
            code: 'A',
            value: '必须设置纵、横向水平杆和立杆'
          },
          {
            code: 'B',
            value: '脚手架立杆基础必须坚实，并有足够承载力'
          },
          {
            code: 'C',
            value: '应设置纵向剪刀撑和横向斜撑'
          },
          {
            code: 'D',
            value: '脚手架要有足够的纵向和横向整体刚度'
          },
          {
            code: 'E',
            value: '必须按设计要求布置足够数量、分布均匀的连墙件'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCDE'
      },
      {
        title: '拆除脚手架没有设置警戒区域及专人监护',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某建筑工地进行主体施工，搭设脚手架外侧未挂设密目式安全网，当日风很大，张某从楼底下经过，突然从五楼楼板边缘处掉下一块1m长4cm×6cm的方木，正好击中张某头部(未戴安全帽)，经送医院抢救无效死亡',
    plist: [{
        title: '高处作业可分为（ ）级',
        list: [{
            code: 'A',
            value: '三'
          },
          {
            code: 'B',
            value: '四'
          },
          {
            code: 'C',
            value: '五'
          },
          {
            code: 'D',
            value: '六'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '强风高处作业是指阵风风力（ ）级以上的情况进行的高处作业',
        list: [{
            code: 'A',
            value: '三'
          },
          {
            code: 'B',
            value: '四'
          },
          {
            code: 'C',
            value: '五'
          },
          {
            code: 'D',
            value: '六'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '下列关于高处作业时的安全防护技术措施正确的是（ ）',
        list: [{
            code: 'A',
            value: '作业前应认真检查所有的安全设施是否可靠'
          },
          {
            code: 'B',
            value: '凡从事高处作业人员应接受高处作业安全知识的教育'
          },
          {
            code: 'C',
            value: '高处作业人员应经过体检合格后方可上岗'
          },
          {
            code: 'D',
            value: '高处作业所用工具、材料严禁投掷'
          },
          {
            code: 'E',
            value: '高处作业应设置联系信号或通信装置，并指定专人负责'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCDE'
      },
      {
        title: '张某违章未戴安全帽',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某施工工地，早晨上班，土建队的木工班继续拆除热电厂蒸发站工程7m高的混凝土平台模板，当一名工人从4—5轴线中间的钢窗进入操作地点时，他左手攀着钢窗开窗器立管跃入室内，突然喊了两声“电着我了”。该班长立即跑去找电工切断电源线，但因电源来自安装队使用的卷扬机上的电源线，土建队电工不清楚，直到7、8分钟后，才切断电源，触电工人经抢救无效死亡。经查拆除的模板钢支架由4．8m处落下，一端砸断了卷扬机的电源线，另一端倒在拆下的钢管上，钢管又搭在钢窗上',
    plist: [{
        title: '配电柜正面的操作通道宽度，双列面对面布置时不应小于（ ）m',
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
        answer: 'B'
      },
      {
        title: '配电柜正面的操作通道宽度，单列布置或双列背对背布置时不应小于（ ）m',
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
        title: '配电室的位置应符合（ ）的原则',
        list: [{
            code: 'A',
            value: '远离电源'
          },
          {
            code: 'B',
            value: '靠近负荷中心'
          },
          {
            code: 'C',
            value: '进、出线方便'
          },
          {
            code: 'D',
            value: '周边道路通畅'
          },
          {
            code: 'E',
            value: '周围环境无积水'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'BCDE'
      },
      {
        title: '事故的直接原因是卷扬机电源线被轧断后，又与钢管和钢窗相连，使钢窗带电，二人手扶钢窗触电死亡',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某工地没按有关夏季施工的要求，把职工宿舍建在山沟低洼处，一场暴风雨过后，突然来的山洪将宿舍及15名工人一起冲跑，造成10人死亡',
    plist: [{
        title: '降水强度的划分按照降水强度的大小分为（ ）个等级',
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
        answer: 'B'
      },
      {
        title: '在做雨期施工的准备工作时，临时道路应起拱千分之（ ）',
        list: [{
            code: 'A',
            value: '三'
          },
          {
            code: 'B',
            value: '四'
          },
          {
            code: 'C',
            value: '五'
          },
          {
            code: 'D',
            value: '六'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '下列关于土方与地基基础工程的雨期施工应采取的措施叙述正确的是（ ）',
        list: [{
            code: 'A',
            value: '雨期施工要及早加强对边坡坡角、支撑等的处理'
          },
          {
            code: 'B',
            value: '土方堆放高度不得过高'
          },
          {
            code: 'C',
            value: '不得靠近围墙'
          },
          {
            code: 'D',
            value: '不得靠近临时建筑'
          },
          {
            code: 'E',
            value: '发现危险征兆应当立即采取措施'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCDE'
      },
      {
        title: '雨季应有防洪水措施',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 10月25日，当日12时20分左右，某小区8号楼2楼一处商住房发生火灾。这个房间被附近一个工地租下来,临时当做农民工的宿舍，里面住了40多名农民工。火是从二楼着起来的。附近的邻居一边报警，一边急忙跑到工地报信。“汪、汪、…”人群中传来两声狗叫，只见一个头戴安全帽的工人紧紧地抱着一条狗，坐在一堆刚刚抢出来的被子上。据这位工人介绍，着火时，他刚刚走出宿舍，当时屋内火苗已经蹿起老高，不知道里面什么样。情急之下，他拎起一桶水冲进屋内，看见他们养来看家的小狗仍坚守在“岗位”上，他急忙将清水浇到蹿起的火苗上，抱起小狗和行李跑出火海。当他准备再次进屋抢救财产时，火势越来越大，已经无法靠近。大火被扑灭。一名工人说，屋内没有其他火源和电源',
    plist: [{
        title: '临时宿舍等生活设施，距离小量易燃品贮藏室的间距不小于（ ）m',
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
        title: '临时宿舍距离火灾危险性大的生产场所间距不得小于（ ）m',
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
        title: '下列关于施工现场防火时，作业棚和临时生活设施的叙述正确的是（ ）',
        list: [{
            code: 'A',
            value: '临时生活设施应尽可能搭建在距离修建建筑物20m以外的地区'
          },
          {
            code: 'B',
            value: '为节约空间可以搭设在高压架空线的正下方'
          },
          {
            code: 'C',
            value: '距离高压架空线的水平距离不应小于6m'
          },
          {
            code: 'D',
            value: '距离高压架空线的水平距离不应小于7m'
          },
          {
            code: 'E',
            value: '距离高压架空线的水平距离不应小于8m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'AC'
      },
      {
        title: '宿舍有人吸烟，点燃易燃物后，引起火灾',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 有一项工程设置了一道重力式挡土墙，该地土质松软，挡土墙基础埋深0．5m，墙后有一道山坡，施工过程中，挡土墙倒塌，引起土方边坡的坍塌',
    plist: [{
        title: '重力式挡土墙一般是使用在开挖深度为（ ）之内',
        list: [{
            code: 'A',
            value: '3m'
          },
          {
            code: 'B',
            value: '4m'
          },
          {
            code: 'C',
            value: '5m'
          },
          {
            code: 'D',
            value: '6m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '土石根据其坚硬程度和开挖方法及使用工具可分为 （ ）类',
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
        title: '挡土墙基础埋置深度，应根据地基土的（ ）等来确定',
        list: [{
            code: 'A',
            value: '容许承载力'
          },
          {
            code: 'B',
            value: '冻结深度'
          },
          {
            code: 'C',
            value: '岩石风化程度'
          },
          {
            code: 'D',
            value: '人为原因等'
          },
          {
            code: 'E',
            value: '雨水冲刷'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCE'
      },
      {
        title: '事故原因之一是挡土墙埋置过深',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 某地一大酿酒厂要建一小型污水处理厂，需开挖1.5m深的基坑，无降水措施，放坡不大，无支护，两名工人加夜班挖剩余部分土，土质为回填土。离基坑1m外有原排污下水道，下水道向外渗水，夜里正当工人挖土时，原污水管突然爆裂，水冲泥土造成塌方',
    plist: [{
        title: '人工开挖土方时，两人的操作间距应保持（ ）',
        list: [{
            code: 'A',
            value: '1m'
          },
          {
            code: 'B',
            value: '1～2m'
          },
          {
            code: 'C',
            value: '2～3m'
          },
          {
            code: 'D',
            value: '3～4m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '符合（ ）情况属于三级基坑',
        list: [{
            code: 'A',
            value: '开挖深度小于7米'
          },
          {
            code: 'B',
            value: '开挖深度大于7米'
          },
          {
            code: 'C',
            value: '与历史文物建筑临近'
          },
          {
            code: 'D',
            value: '有重要管线需要保护'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '挖土时应遵守（ ）规定',
        list: [{
            code: 'A',
            value: '自上而下挖掘'
          },
          {
            code: 'B',
            value: '发现裂缝时要支撑或放坡'
          },
          {
            code: 'C',
            value: '踩踏土壁及支撑上下'
          },
          {
            code: 'D',
            value: '至多留0.3m深人工修挖'
          },
          {
            code: 'E',
            value: '弃土堆与基坑距离大于0.8m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABE'
      },
      {
        title: '事故原因之一无支护及降水措施',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某工地一名工人站在一楼的窗户台上与墙顶上的另一工人一起安装钢模板，半小时后，站在墙顶上的工人不小心从墙头上掉了下来',
    plist: [{
        title: '现浇钢筋混凝土梁、板，当跨度大于（ ），模板应起拱',
        list: [{
            code: 'A',
            value: '2m'
          },
          {
            code: 'B',
            value: '3m'
          },
          {
            code: 'C',
            value: '4m'
          },
          {
            code: 'D',
            value: '5m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '采用扣件式钢管支模时，立杆顶端的计算长度为（ ）',
        list: [{
            code: 'A',
            value: 'h+1.5a'
          },
          {
            code: 'B',
            value: 'h+2.0a'
          },
          {
            code: 'C',
            value: 'h+2.5a'
          },
          {
            code: 'D',
            value: 'h+3.0a'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '安装模板时应做到（ ）',
        list: [{
            code: 'A',
            value: '不得漏浆'
          },
          {
            code: 'B',
            value: '尺寸正确'
          },
          {
            code: 'C',
            value: '上下应用人接应'
          },
          {
            code: 'D',
            value: '随装随运'
          },
          {
            code: 'E',
            value: '严禁抛掷'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'CDE'
      },
      {
        title: '安装模板时不允许站在窗户台上,但允许墙顶上',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 某工程因抢进度，提前拆除模板。该楼四层楼板在制定拆除方案时，未考虑安全措施，也未经审批。在接近拆完时，突然一大片混凝土楼板掉落，4名拆模工人压在下边，经抢救无效死亡',
    plist: [{
        title: '楼板跨度在8m以上时，底模拆除时混凝土强度应达到设计强度的（ ）',
        list: [{
            code: 'A',
            value: '100%'
          },
          {
            code: 'B',
            value: '75%'
          },
          {
            code: 'C',
            value: '85%'
          },
          {
            code: 'D',
            value: '50%'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '模板拆除时，拆下的构配件严禁（ ）',
        list: [{
            code: 'A',
            value: '传递'
          },
          {
            code: 'B',
            value: '抛掷'
          },
          {
            code: 'C',
            value: '清理'
          },
          {
            code: 'D',
            value: '运走'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '梁、板结构模板拆除应遵守（ ）规定',
        list: [{
            code: 'A',
            value: '先拆板的底模，再拆梁的侧模和梁底模'
          },
          {
            code: 'B',
            value: '先拆梁的侧模和梁底模，再拆板的底模'
          },
          {
            code: 'C',
            value: '分段分片进行'
          },
          {
            code: 'D',
            value: '作业人员站在安全稳定的位置'
          },
          {
            code: 'E',
            value: '全部拆除后再清理、码放'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ACDE'
      },
      {
        title: '因抢进度提前拆除模板无需审批',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】 某工地工人在拆现浇楼板钢模时，审批手续还未办好，由于面积大，一时拆不完，中午吃饭时，工人吴某从未拆完的钢模板下经过，突然上边已活动的几块钢模板掉了下来，刚好击中吴某头部，经抢救无效死亡',
    plist: [{
        title: '楼板模板及其支架(楼层高度4m以下)定型组合钢模板自重标准值为（ ）',
        list: [{
            code: 'A',
            value: '1.50kN／㎡'
          },
          {
            code: 'B',
            value: '1.20kN／㎡'
          },
          {
            code: 'C',
            value: '1.10kN/㎡'
          },
          {
            code: 'D',
            value: '0.30kN／㎡'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '模板结构中钢支架立柱及桁架杆件的受压构件长细比不应大于（ ）',
        list: [{
            code: 'A',
            value: '100'
          },
          {
            code: 'B',
            value: '150'
          },
          {
            code: 'C',
            value: '160'
          },
          {
            code: 'D',
            value: '170'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '一般模板的组成部分为（ ）',
        list: [{
            code: 'A',
            value: '模板面'
          },
          {
            code: 'B',
            value: '支撑结构'
          },
          {
            code: 'C',
            value: '螺栓'
          },
          {
            code: 'D',
            value: '加固'
          },
          {
            code: 'E',
            value: '连接配件'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABE'
      },
      {
        title: '事故原因之一是模板未按规定连续拆除，而中途停歇',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 某省建公司在公路局宿舍工程中，安装的龙门架全高20m。9月1日安装到15m高度，临时缆风绳共4根锚在10m高处。9月3日由副班长×××带领4人和部分民工继续安装，先将缆风绳由10m高处移至15m处锚固。9时30分安装到20m高时，突遇一阵强东风。龙门架晃动数次后，将东南方向的缆风绳拉断，龙门架向西倾倒。在高空作业的4人随同龙门架坠落地。副班长×××等3人死亡，1人紧抱在主柱上，造成重伤。后查缆风绳锚固点的水平角度不符合要求，且东南角方向的缆风绳在离锚固点2m处，原已磨断2／3仍继续使用，其他缆风绳也没有收紧',
    plist: [{
        title: '用作缆风绳的钢丝绳安全系数为（ ）',
        list: [{
            code: 'A',
            value: '3.5'
          },
          {
            code: 'B',
            value: '3.75'
          },
          {
            code: 'C',
            value: '4.5'
          },
          {
            code: 'D',
            value: '5~6'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '在施工现场，应标出龙门架的组对位置、工件就位时龙门架所到达的位置以及行走路线的刻度，以监测龙门架两侧移动的同步性 ，要求误差小于跨度的（ ）',
        list: [{
            code: 'A',
            value: '1／2000'
          },
          {
            code: 'B',
            value: '1／1000'
          },
          {
            code: 'C',
            value: '1／500'
          },
          {
            code: 'D',
            value: '1／200'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '移动式龙门桅杆吊装，施工人员进入施工岗位吊装前必须做好( )',
        list: [{
            code: 'A',
            value: '接受技术交底'
          },
          {
            code: 'B',
            value: '组织自检、互检'
          },
          {
            code: 'C',
            value: '填写安全技术卡片'
          },
          {
            code: 'D',
            value: '确定锚固点'
          },
          {
            code: 'E',
            value: '组织联合安全检查'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCE'
      },
      {
        title: '龙门架倒塌是遇风时由于其他缆风绳也没有收紧，故全部风载荷由磨断2／3的钢丝绳负担被拉断而导致',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】 王师傅已有三年多推土机操作经验，近期他参加正处于施工紧张阶段的挖土筑路工程，当晚，项目部施工技术人员及工程队长向施工人员进行技术交底，并提出提前完工的要求。第二天一早，王师傅对推土机进行班前保养及例行检查，在观察推土机周围无障碍物，确定安全后，启动机械，进行施工作业。时值盛夏、天气炎热，项目部准备了防暑饮料、派人送到机前，为抓紧时问赶任务，王师傅一边推一边接过饮料自饮。工程地带有一段坡道，下坡时，他空档滑行，为企业节省了很多油料。当他发现有一台推土机因故无法启动时，主动过去用推土机顶推帮助启动。作业中，他感觉机械底盘有异响，就将推土机停到地势较高的坡道上，然后王师傅熄火下机钻进底盘下检查，突然推土机向下坡方向自行滑移，王师傅未及脱身，惨遭不幸',
    plist: [{
        title: '分析事故原因有以下几种,①作业前对推土机进行班前保养及例行检查②推土机作业时上下人，传递物件③下坡时，空档滑行④推土机起动时用其他机械推顶启动⑤坡道上停机，未落下铲刀，变速杆未挂低速档，未接合主离合器，未锁住制动踏板．履带未楔住.其中正确的有（ ）',
        list: [{
            code: 'A',
            value: '①②③④'
          },
          {
            code: 'B',
            value: '②③④⑤'
          },
          {
            code: 'C',
            value: '①③④⑤'
          },
          {
            code: 'D',
            value: '①②③⑤'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '两台以上推土机在同一地区作业时，前后距离应大于8m，左右距离应大于（ ）',
        list: [{
            code: 'A',
            value: '1.0m'
          },
          {
            code: 'B',
            value: '1.5m'
          },
          {
            code: 'C',
            value: '2.0m'
          },
          {
            code: 'D',
            value: '2.5m'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '推土机在坡道上停机时，应（ ）',
        list: [{
            code: 'A',
            value: '将变速杆挂低速档'
          },
          {
            code: 'B',
            value: '接合主离合器'
          },
          {
            code: 'C',
            value: '操纵人员不得离开'
          },
          {
            code: 'D',
            value: '锁住制动踏板'
          },
          {
            code: 'E',
            value: '将履带或轮胎楔住'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABDE'
      },
      {
        title: '作业前,项目部施工技术人员及工程队长向施工人员进行技术交底，并提出提前完工的要求',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】某工程安全检查结果如下:（1）安全管理：保证项目得45分，一般项目得35分；（2）文明施工：保证项目得46分，一般项目得34分；（3）脚手架：保证项目得42分，一般项目得36分；(4)模板支架：保证项目得50分，一般项目得35分；(5)“三宝”“四口”防护：扣18分；（6）施工用电：保证项目得38分，一般项目得36分；（7）物料提升机：保证项目小计42分，一般项目得36分；（8）施工机具：得82分；（9）“基坑支护、土方作业”：得85分；现场无塔吊、起重吊装',
    plist: [{
        title: '文明施工分项在汇总表中得分为（ ）',
        list: [{
            code: 'A',
            value: '0'
          },
          {
            code: 'B',
            value: '8'
          },
          {
            code: 'C',
            value: '12'
          },
          {
            code: 'D',
            value: '80'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '施工用电分项在汇总表中得分为（ ）',
        list: [{
            code: 'A',
            value: '0'
          },
          {
            code: 'B',
            value: '38'
          },
          {
            code: 'C',
            value: '74'
          },
          {
            code: 'D',
            value: '7.4'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '安全管理检查评分表中，属于保证项目的有（ ）',
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
            value: '安全检查'
          },
          {
            code: 'D',
            value: '安全教育'
          },
          {
            code: 'E',
            value: '特种作业持证上岗'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ABCD'
      },
      {
        title: '汇总表总计得分是72.1分，大于70分，该工程的安全检查评定等级为合格',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】某工程安全检查结果如下:（1）安全管理：保证项目得45分，一般项目得35分；（2）文明施工：保证项目得50分，一般项目得34分；（3）脚手架：保证项目得42分，一般项目得36分；(4)模板支架：保证项目得50分，一般项目得35分；(5)“三宝”“四口”防护：扣18分；（6）施工用电：保证项目得44分，一般项目得36分；（7）物料提升机：保证项目小计42分，一般项目得36分；（8）施工机具：得82分；（9）“基坑支护、土方作业”：得85分；现场无塔吊、起重吊装',
    plist: [{
        title: '高处作业分项在汇总表中得分为（ ）',
        list: [{
            code: 'A',
            value: '18'
          },
          {
            code: 'B',
            value: '12.3'
          },
          {
            code: 'C',
            value: '8.2'
          },
          {
            code: 'D',
            value: '4.1'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '汇总表总计得分为（ ）分',
        list: [{
            code: 'A',
            value: '0'
          },
          {
            code: 'B',
            value: '73.5'
          },
          {
            code: 'C',
            value: '77.8'
          },
          {
            code: 'D',
            value: '81.6'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '（ ）项目的检查评分表实得分数，应为所对应专业的检查评分表实得分数的算术平均值',
        list: [{
            code: 'A',
            value: '脚手架'
          },
          {
            code: 'B',
            value: '模板支架'
          },
          {
            code: 'C',
            value: '物料提升机、施工升降机'
          },
          {
            code: 'D',
            value: '塔式起重机、起重吊装'
          },
          {
            code: 'E',
            value: '施工机具'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'ACD'
      },
      {
        title: '多人对同一项目检查评分时，应按加权评分方法确定分值。权数的分配原则应为：专职安全人员的权数为0.6，其他人员的权数为0.4',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】某年3月6日上午7时05分许，某工地四号楼前发生一起物体打击事故。致1人死亡。3月6日上午6点3 0分，某工地项目部架子班组工人洪某某与冯某某在四号楼18—19层进行外脚手架拆除作业。对第五根剪刀撑钢管进行拆除时（此时洪某某在上方19层位置，冯某某在下方1 8层位置），两人约好先由洪某某解开最上方的扣件（此根钢管有四个扣件）并抓住钢管，待冯某某解开剩下三个扣件后再一起将钢管抬出。7点05分许，冯某某在解最后一个扣件时，以为洪某某依旧抓着钢管（此时洪某某并没有抓住，也没有告知下方的冯某某），致使该六米长的钢管坠落。与此同时，由另一公司分包的水电班组谭某某（没戴安全帽）等3名工人正好从四号楼下经过去上班，坠落的钢管刚好砸中谭某某头部，致其倒地不起、大出血、呼之不应。随后被送往医院，经抢救无效死亡',
    plist: [{
        title: '进入施工现场不戴安全帽属于（ ）',
        list: [{
            code: 'A',
            value: '违反上岗规定'
          },
          {
            code: 'B',
            value: '不按规定使用安全防护用品'
          },
          {
            code: 'C',
            value: '违章作业'
          },
          {
            code: 'D',
            value: '放松安全警惕性不注意保护自己和保护别人的行为'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '脚手架工程中可能导致物体打击事故的危险源是（ ）',
        list: [{
            code: 'A',
            value: '人员与物料到达工作平台的方法不合理'
          },
          {
            code: 'B',
            value: '无交底与验收'
          },
          {
            code: 'C',
            value: '架体防护不符合要求'
          },
          {
            code: 'D',
            value: '脚手架材质不符合要求'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '造成该事故的直接原因有（ ）',
        list: [{
            code: 'A',
            value: '洪某某、冯某某违章操作和谭某某没有佩戴安全帽进入施工区域的不安全行为'
          },
          {
            code: 'B',
            value: '四号楼前地面上虽有设置警戒线，但警戒的范围过小，不符合安全距离要求，且地面没有设专人指挥'
          },
          {
            code: 'C',
            value: '施工单位及其项目部未认真落实安全生产责任制，安全管理工作流于形式'
          },
          {
            code: 'D',
            value: '分包施工单位及其项目部未认真落实安全生产责任制，安全管理工作流于形式'
          },
          {
            code: 'E',
            value: '监理单位项目部没有切实履行好监理职责，现场安全监管不到位'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'AB'
      },
      {
        title: '人的不安全行为包括现场管理者（工作负责人）的不安全行为和工作人员的不安全行为',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】某年3月3日下午，某大桥建设工地，正在起吊重物的汽车式起重机发生侧翻，造成3名司索人员落水，其中1人获救，2人死亡。3月3日下午，大桥建设工地现场负责人程某某安排带班人员李某某、汽车式起重机操作员孙某某等人在桥梁合笼处进行吊装作业。16时许，孙某某在李某某的指挥下驾驶一台汽车式起重机将桥底的8片贝雷架起吊至一定位置停下，三名司索人员刘某某、何某某、颜某某在未穿戴救生衣、保险带等防护用品的情况下站在悬空（与水面距离约5米）的贝雷架上进行司索作业。停顿保持了约一分钟，汽车式起重机发生侧翻，贝雷架连同三人一起掉入水中。刘某某会游泳，浮出水面，被人救起，何某某、颜某某沉入水中。何某某在20分钟后被找到，急送当地人民医院抢救，因溺水时间过长，抢救无效死亡。当晚21时许，颜某某的尸体被打捞上岸',
    plist: [{
        title: '下列属于起重吊装作业重大危险源的是（ ）',
        list: [{
            code: 'A',
            value: '违章指挥'
          },
          {
            code: 'B',
            value: '起重吊装超载作业'
          },
          {
            code: 'C',
            value: '高处作业的安全防护措施不符合要求'
          },
          {
            code: 'D',
            value: '高处作业人员违章作业'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '事故发生后，应迅速辩别事故的类别、性质、危害程度，适时启动相应的应急救援预案，（ ）是应急救援的首要任务',
        list: [{
            code: 'A',
            value: '指导群众防护，组织群众撤离'
          },
          {
            code: 'B',
            value: '抢救受害人员'
          },
          {
            code: 'C',
            value: '迅速控制危险源'
          },
          {
            code: 'D',
            value: '做好现场隔离和清理，消除危害后果'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'B'
      },
      {
        title: '引起此事故的间接原因有（ ）',
        list: [{
            code: 'A',
            value: '汽车式起重机起重力矩限制器（超载保护装置）失效'
          },
          {
            code: 'B',
            value: '吊装时超载(根据鉴定报告，实际起重量为3492kg，是额定起重量2645 kg的1.32倍)'
          },
          {
            code: 'C',
            value: '操作人员孙某某取得特种作业操作证即上岗作业，违反“作业前检查安全限位装置和指示仪表均应正常”的安全操作规程'
          },
          {
            code: 'D',
            value: '分包劳务单位未取得安全生产许可证，不具备安全生产条件'
          },
          {
            code: 'E',
            value: '项目业主未严格按照《建设工程施工合同》规定，督促项目经理认真履行安全管理职责'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'CDE'
      },
      {
        title: '起重伤害是指从事各种起重作业时发生的机械伤害事故，包括起重设备引起的触电及检修时制动失灵造成的伤害,不包括上下驾驶室时发生的坠落伤害',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  },
  {
    title: '【背景材料】某年9月9日下午16时15分左右，某工地在塔吊塔基开挖时，发生泥浆池坍塌事故，造成7人死亡，3人受伤。直接经济损失315万元。9月9日下午3时左右，2号塔吊基坑全部开挖到基底设计标高后，项目部经理徐某某在坑底现场指挥，安排王某某等9名操作工人进入基坑开始桩头清理、支模等工作。据受伤人员王某某事后介绍，4时15分左右，在基坑作业的王某某曾听到有人喊“啊唷，塌方”，同时，他看到塔吊基坑北侧土体开始坍塌，王赶忙扔掉手上铁锹，马上往南边爬；当爬到塔吊基坑边坡上部时，看到泥浆水往下流动，池内泥浆随之倾泻而下，很快就将塔吊基坑淹没。在基坑内的徐某某因拼命向南边逃跑，腿部被泥浆淹埋，茹某某因抓住架子，被泥浆淹埋到胸部。事故造成徐某某、王某某、茹某某3人受伤，另7名工人被埋。事故发生后；当地有关部门接到报案后，立刻启动了应急救援预案实施抢救，市委、市政府领导亲临现场指导搜救。经过努力，至10日上午，7名被埋人员陆续在事故现场找到，经确认均已死亡',
    plist: [{
        title: '下列属于基坑支护作业重大危险源的是（ ）',
        list: [{
            code: 'A',
            value: '支护方案或设计缺乏或者不符合要求'
          },
          {
            code: 'B',
            value: '临边防护措施缺乏或者不符合要求'
          },
          {
            code: 'C',
            value: '人员上下通道缺乏或设置不合理'
          },
          {
            code: 'D',
            value: '基坑作业环境不符合要求或缺乏垂直作业上下隔离防护措施'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'A'
      },
      {
        title: '下列（ ）不是坍塌事故应急救援应坚持的原则',
        list: [{
            code: 'A',
            value: '统一指挥、密切协同'
          },
          {
            code: 'B',
            value: '以快制快、行动果断'
          },
          {
            code: 'C',
            value: '迅速、就地、准确、坚持'
          },
          {
            code: 'D',
            value: '科学施救、稳妥可靠'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'C'
      },
      {
        title: '造成此事故的直接原因有（ ）',
        list: [{
            code: 'A',
            value: '工程项目部缺乏科学可行的塔吊基坑开挖方案，违章作业'
          },
          {
            code: 'B',
            value: '监理公司现场监理和监理责任不到位'
          },
          {
            code: 'C',
            value: '业主单位违法开工建设'
          },
          {
            code: 'D',
            value: '施工单位安全生产责任不落实'
          },
          {
            code: 'E',
            value: '相关管理部门监管责任不到位'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'AB'
      },
      {
        title: '坍塌事故发生后，应迅速安排专人及时切断有关电闸，并立即组织抢险人员尽快到达事故现场',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】某年5月21日上午10时许，某建筑工地发生一起机械伤害事故，造成一名工人死亡，直接经济损失30万元。5月20日，项目部施工员曾某某打电话给甘肃人赵某某，告知生活区路面损坏，需要浇捣混凝土，口头约定工资600元。5月21日上午，赵某某带冯某某等5人到工地，在曾某某口头交底下，8时开始搅拌混凝土，赵某某操作搅拌机，冯某某在后斗入料。料斗提升是依靠电动机带动轮盘上的钢丝做圆弧运动。10时许，搅拌第12包水泥时，料斗提升过程中，因连接料斗钢丝绳上的马鞍扣松懈，致使钢丝绳滑出，料斗在重力作用下坠落，砸中在料斗下搬运水泥的冯某某，头部被砸压在料斗下，赵某某当即想法抢救，在场的人用钢管撬和人力提拉料斗，由于配料过重未能提升起料斗，随后调用塔吊吊起料斗，将伤者抬出后立即送往当地中医院救治，经抢救无效死',
    plist: [{
        title: '在拌和作业中，离合器、制动器、钢丝绳达不到要求，可能导致发生机械伤害事故，应采取（ ）控制措施',
        list: [{
            code: 'A',
            value: '制定目标指标和管理方案'
          },
          {
            code: 'B',
            value: '执行运行控制程序'
          },
          {
            code: 'C',
            value: '教育与培训'
          },
          {
            code: 'D',
            value: '执行运行程序和监督检查'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '在《施工机具检查评分表》中，离合器、制动器、钢丝绳达不到要求每项扣（ ）分',
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
        title: '造成此事故的直接原因有（ ）',
        list: [{
            code: 'A',
            value: '项目部对机械日常检查未落实所致，未能及时发现和排除设备存在的安全隐患'
          },
          {
            code: 'B',
            value: '料斗提升时由于配料过重，大轮钢丝绳上一只马鞍扣开始脱落，料斗向一边偏离，砸到正在搬运水泥的冯某某头部致使死亡'
          },
          {
            code: 'C',
            value: '冯某某违反劳动作业安全规定，擅自进入正在运行的料斗底下搬运水泥'
          },
          {
            code: 'D',
            value: '未进行有效的管理和安全教育'
          },
          {
            code: 'E',
            value: '班前交底、工作交接制度未真正落实'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'BC'
      },
      {
        title: '机械伤害是指被机械设备或工具绞、碾、碰、割、戳等造成的人身伤害，不包括车辆、起重设备引起的伤害',
        isShow: false,
        handAnswer: '',
        answer: '正确'
      }
    ]
  },
  {
    title: '【背景材料】某年6月16日上午，某工程工地发生一起触电事故，造成1人死亡。6月16日上午6时30分左右，某市政公司工程项目部钢筋班班长汪某某指派王某某、谢某某、李某某等人在该工程东兴河桥梁钢筋工地进行钢筋切割、焊接作业。7时左右，谢某某、李某某两人开始焊接同一个钢筋笼，8时30分左右，李某某突然听到在其东侧作业的谢某某叫了他一声，当李某某转过头去时发现谢某某已趴在钢筋笼上不动了，就急忙叫王某某，王某某立即赶来将用于电焊作业的电源闸刀切断，并立即拨打了120，将谢某某送到市第二人民医院，经抢救无效于当天上午10时死亡．经医院确诊谢某某系触电身亡',
    plist: [{
        title: '下列电气焊作业危险源，（ ）可能导致火灾、爆炸事故',
        list: [{
            code: 'A',
            value: '未做保护接零、无漏电保护器'
          },
          {
            code: 'B',
            value: '无二次侧空载降压保护器或无触电保护器'
          },
          {
            code: 'C',
            value: '焊把线接头超过3处或绝缘老化'
          },
          {
            code: 'D',
            value: '气瓶违章存放'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '触电事故应急救援的下列说法不正确的是（ ）',
        list: [{
            code: 'A',
            value: '如果开关或按钮距离触电地点很近，应迅速拉开开关，切断电源；如果够不着插座开关，就关上总开关'
          },
          {
            code: 'B',
            value: '如果开关距离触电地点很远，可用绝缘手钳或用干燥木柄的斧、刀、铁锹等把电线切断'
          },
          {
            code: 'C',
            value: '若无法关上开关，可站在绝缘物上，如一叠厚报纸、塑料布、木板之类，或用扫帚或木椅等非导电体将伤者拨离电源'
          },
          {
            code: 'D',
            value: '触电者如神志不清，应就地仰面躺开，确保气道通畅，并用5秒的时间间隔呼叫伤员或摆动伤员头部，以判断伤员是否意识丧失'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'D'
      },
      {
        title: '造成此事故的直接原因有（ ）',
        list: [{
            code: 'A',
            value: '市政公司及其工程项目部安全管理不到位'
          },
          {
            code: 'B',
            value: '安全生产责任制落实存在漏洞'
          },
          {
            code: 'C',
            value: '对职工的安全教育不够到位，作业现场安全监管不力'
          },
          {
            code: 'D',
            value: '谢某某安全意识差，无电焊工操作证从事电焊作业'
          },
          {
            code: 'E',
            value: '电焊机二次侧的电缆线多处破皮老化，铜丝裸露在外且电焊机上未安装二次侧漏电保护装置'
          }
        ],
        isShow: false,
        handAnswer: '',
        answer: 'CD'
      },
      {
        title: '触电是指由于电流经过人体导致的生理伤害，不包括雷击伤害',
        isShow: false,
        handAnswer: '',
        answer: '错误'
      }
    ]
  }
])

caseData.map((k, i) => { k.index = i })

export default caseData