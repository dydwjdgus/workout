
const exercises = [
  // 근력 - 하체
  { name: "스쿼트", type: "근력", part: "하체", places: ["홈트","헬스장","공원"], risk: ["무릎","허리"], level: 2, sets: { easy: [3,"10회"], normal: [3,"15회"], hard: [4,"20회"] }, rest: 60, met: 5.0,
    how: "발을 어깨너비로 벌리고 발끝은 약간 바깥쪽을 향한다. 가슴을 펴고 엉덩이를 뒤로 빼면서 무릎을 굽혀 허벅지가 바닥과 평행이 될 때까지 내려간 뒤, 발뒤꿈치로 바닥을 밀며 일어선다.",
    tips: "무릎이 발끝보다 많이 앞으로 나가지 않게 한다. 허리가 굽지 않도록 코어에 힘을 준다." },
  { name: "런지", type: "근력", part: "하체", places: ["홈트","헬스장","공원"], risk: ["무릎"], level: 2, sets: { easy: [3,"8회"], normal: [3,"12회"], hard: [4,"15회"] }, rest: 60, met: 5.0,
    how: "한 발을 크게 앞으로 내딛으며 양 무릎이 90도가 될 때까지 내려간다. 앞발 뒤꿈치로 바닥을 밀며 시작 자세로 돌아온다. 좌우 번갈아 수행한다.",
    tips: "상체는 곧게 세운다. 앞 무릎이 발끝보다 앞으로 나가지 않게 보폭을 조절한다." },
  { name: "글루트 브릿지", type: "근력", part: "하체", places: ["홈트","헬스장"], risk: [], level: 1, sets: { easy: [3,"12회"], normal: [3,"15회"], hard: [4,"20회"] }, rest: 45, met: 3.5,
    how: "등을 바닥에 대고 누워 무릎을 굽혀 발을 엉덩이 가까이 둔다. 엉덩이를 위로 들어올려 어깨-엉덩이-무릎이 일직선이 되도록 한 뒤 천천히 내린다.",
    tips: "허리 힘이 아닌 엉덩이 근육으로 들어올린다는 느낌으로 수행한다." },
  { name: "월시트", type: "근력", part: "하체", places: ["홈트","헬스장"], risk: ["무릎"], level: 2, sets: { easy: [3,"20초"], normal: [3,"40초"], hard: [4,"60초"] }, rest: 60, met: 4.0,
    how: "벽에 등을 대고 무릎이 90도가 될 때까지 미끄러지듯 내려가 자세를 유지한다. 발은 무릎 아래에 위치하도록 한다.",
    tips: "무릎이 발끝을 넘지 않도록 발 위치를 조정한다." },
  { name: "카프 레이즈", type: "근력", part: "하체", places: ["홈트","헬스장"], risk: [], level: 1, sets: { easy: [3,"15회"], normal: [3,"20회"], hard: [4,"25회"] }, rest: 30, met: 3.0,
    how: "발을 어깨너비로 벌리고 서서 발뒤꿈치를 천천히 들어올려 발끝으로 선다. 잠시 멈춘 후 천천히 내린다.",
    tips: "균형이 어려우면 벽이나 의자를 잡고 수행한다." },
  { name: "불가리안 스플릿 스쿼트", type: "근력", part: "하체", places: ["홈트","헬스장"], risk: ["무릎","고관절"], level: 3, sets: { easy: [3,"8회"], normal: [3,"10회"], hard: [4,"12회"] }, rest: 75, met: 6.0,
    how: "한 발을 뒤쪽 의자나 벤치 위에 올린다. 앞발 무릎을 굽혀 뒤쪽 무릎이 바닥에 닿기 직전까지 내려간 뒤 일어선다.",
    tips: "앞발에 체중을 실어 균형을 잡는다. 무릎이 흔들리지 않게 천천히 수행한다." },
  { name: "점프 스쿼트", type: "근력", part: "하체", places: ["홈트","헬스장","공원"], risk: ["무릎","발목"], level: 3, sets: { easy: [3,"8회"], normal: [3,"12회"], hard: [4,"15회"] }, rest: 60, met: 8.0,
    how: "스쿼트 자세에서 내려간 뒤, 폭발적으로 점프하며 일어선다. 착지 시 무릎을 굽혀 충격을 흡수한다.",
    tips: "착지할 때 발 전체로 충격을 분산한다. 무릎 관절에 무리가 오면 일반 스쿼트로 대체한다." },
  { name: "스텝업", type: "근력", part: "하체", places: ["홈트","헬스장","공원"], risk: ["무릎"], level: 2, sets: { easy: [3,"10회"], normal: [3,"12회"], hard: [4,"15회"] }, rest: 45, met: 4.5,
    how: "안정적인 박스나 계단에 한 발을 올린 뒤, 앞발에 힘을 주어 올라선다. 천천히 내려와 좌우 번갈아 수행한다.",
    tips: "올라갈 때 뒷발로 차서 올라가지 않고, 앞발 힘으로만 올라간다." },
  
  // 근력 - 상체
  { name: "푸시업", type: "근력", part: "상체", places: ["홈트","헬스장","공원"], risk: ["손목","어깨"], level: 2, sets: { easy: [3,"8회"], normal: [3,"12회"], hard: [4,"20회"] }, rest: 60, met: 4.0,
    how: "손을 어깨너비보다 약간 넓게 짚고, 머리부터 발뒤꿈치까지 일직선을 유지한다. 가슴이 바닥에 거의 닿을 때까지 내려간 후 밀어 올린다.",
    tips: "엉덩이가 올라가거나 처지지 않게 한다. 어려우면 무릎 푸시업으로 대체한다." },
  { name: "인클라인 푸시업", type: "근력", part: "상체", places: ["홈트","헬스장"], risk: ["손목"], level: 1, sets: { easy: [3,"10회"], normal: [3,"12회"], hard: [4,"15회"] }, rest: 60, met: 3.5,
    how: "벤치나 의자에 손을 올리고 발은 바닥에 둔 채 푸시업을 수행한다. 표면이 높을수록 강도가 낮아진다.",
    tips: "푸시업 초보자에게 적합. 점차 표면 높이를 낮춰 난이도를 올린다." },
  { name: "디클라인 푸시업", type: "근력", part: "상체", places: ["홈트","헬스장"], risk: ["손목","어깨"], level: 2, sets: { easy: [3,"8회"], normal: [3,"10회"], hard: [4,"15회"] }, rest: 60, met: 5.0,
    how: "발을 의자나 벤치 위에 올리고 손은 바닥에 짚은 채 푸시업을 수행한다. 가슴 윗부분과 어깨에 더 자극이 간다.",
    tips: "허리가 처지지 않도록 코어를 단단히 유지한다." },
  { name: "다이아몬드 푸시업", type: "근력", part: "상체", places: ["홈트","헬스장"], risk: ["손목","어깨","팔꿈치"], level: 3, sets: { easy: [3,"6회"], normal: [3,"10회"], hard: [4,"15회"] }, rest: 60, met: 5.0,
    how: "양손 엄지와 검지로 다이아몬드 모양을 만들어 가슴 아래에 둔다. 팔꿈치를 몸 가까이 붙이며 푸시업을 수행한다.",
    tips: "팔꿈치가 바깥으로 벌어지지 않게 한다. 손목이 아프면 일반 푸시업으로 대체." },
  { name: "딥스", type: "근력", part: "상체", places: ["홈트","헬스장","공원"], risk: ["어깨","손목"], level: 3, sets: { easy: [3,"6회"], normal: [3,"10회"], hard: [4,"15회"] }, rest: 60, met: 4.5,
    how: "평행봉이나 두 의자를 잡고 몸을 매단다. 팔꿈치가 90도가 될 때까지 내려간 후 밀어 올린다.",
    tips: "어깨를 으쓱하지 않고, 등에 힘을 주어 자세를 유지한다." },
  { name: "파이크 푸시업", type: "근력", part: "상체", places: ["홈트","헬스장"], risk: ["어깨","손목","목"], level: 3, sets: { easy: [3,"6회"], normal: [3,"10회"], hard: [4,"12회"] }, rest: 60, met: 5.0,
    how: "엉덩이를 높이 들어 V자 모양을 만든 자세에서 머리를 손 사이로 내렸다 올린다. 어깨에 강한 자극이 간다.",
    tips: "허리를 굽히지 말고 엉덩이를 충분히 들어올린 자세를 유지한다." },
  { name: "슈퍼맨", type: "근력", part: "상체", places: ["홈트","헬스장"], risk: ["허리"], level: 1, sets: { easy: [3,"10회"], normal: [3,"15회"], hard: [4,"20회"] }, rest: 45, met: 3.0,
    how: "엎드린 자세에서 양팔과 양다리를 동시에 들어올려 잠시 유지한 후 천천히 내린다.",
    tips: "목을 과도하게 젖히지 않고 시선은 바닥을 향한다." },
  { name: "친업", type: "근력", part: "상체", places: ["헬스장","공원"], risk: ["어깨","팔꿈치"], level: 3, sets: { easy: [3,"3회"], normal: [3,"6회"], hard: [4,"10회"] }, rest: 90, met: 8.0,
    how: "철봉을 손바닥이 자신을 향하도록 잡고 매달린다. 가슴이 바를 향하도록 몸을 끌어올린 뒤 천천히 내린다.",
    tips: "반동을 쓰지 말고 등과 이두로 당긴다. 어려우면 밴드 보조나 점프 친업으로 대체." },
  { name: "풀업", type: "근력", part: "상체", places: ["헬스장","공원"], risk: ["어깨","팔꿈치"], level: 3, sets: { easy: [3,"3회"], normal: [3,"6회"], hard: [4,"10회"] }, rest: 90, met: 8.0,
    how: "철봉을 손등이 자신을 향하도록 잡고 매달린다. 턱이 바를 넘을 때까지 끌어올린 뒤 천천히 내린다.",
    tips: "어깨를 으쓱하지 않고 견갑골을 모은 상태로 당긴다." },
  { name: "오스트레일리언 풀업", type: "근력", part: "상체", places: ["헬스장","공원"], risk: ["어깨"], level: 2, sets: { easy: [3,"8회"], normal: [3,"12회"], hard: [4,"15회"] }, rest: 60, met: 5.5,
    how: "낮은 바를 잡고 몸을 비스듬히 매단다. 가슴이 바에 닿을 때까지 당겨 올린 뒤 천천히 내린다.",
    tips: "풀업의 입문 단계. 발 위치를 조절해 난이도를 바꾼다." },
  
  // 근력 - 코어
  { name: "플랭크", type: "근력", part: "코어", places: ["홈트","헬스장","공원"], risk: ["허리","어깨"], level: 2, sets: { easy: [3,"20초"], normal: [3,"45초"], hard: [4,"60초"] }, rest: 45, met: 3.0,
    how: "팔꿈치를 어깨 아래에 두고 발끝으로 몸을 지탱한다. 머리-엉덩이-발뒤꿈치가 일직선이 되도록 유지한다.",
    tips: "엉덩이가 처지거나 들리지 않게 한다. 허리에 통증이 오면 즉시 중단한다." },
  { name: "사이드 플랭크", type: "근력", part: "코어", places: ["홈트","헬스장"], risk: ["어깨","허리"], level: 2, sets: { easy: [3,"15초"], normal: [3,"30초"], hard: [4,"45초"] }, rest: 45, met: 3.0,
    how: "옆으로 누워 한 팔꿈치로 몸을 지탱한다. 엉덩이를 들어 머리부터 발끝까지 일직선이 되도록 유지한다.",
    tips: "어깨가 팔꿈치 바로 위에 오도록 한다. 좌우 모두 수행한다." },
  { name: "크런치", type: "근력", part: "코어", places: ["홈트","헬스장"], risk: ["허리"], level: 2, sets: { easy: [3,"10회"], normal: [3,"15회"], hard: [4,"20회"] }, rest: 45, met: 3.5,
    how: "등을 대고 누워 무릎을 굽힌다. 손을 머리 옆에 가볍게 대고, 복부를 수축하며 어깨를 바닥에서 들어올린다.",
    tips: "목을 손으로 잡아당기지 않는다. 복부 힘으로만 올라온다." },
  { name: "레그 레이즈", type: "근력", part: "코어", places: ["홈트","헬스장"], risk: ["허리"], level: 2, sets: { easy: [3,"8회"], normal: [3,"12회"], hard: [4,"15회"] }, rest: 60, met: 4.0,
    how: "등을 대고 누워 다리를 모은 채 곧게 편다. 다리를 바닥과 수직이 될 때까지 들어올린 후 천천히 내린다.",
    tips: "허리가 바닥에서 뜨지 않게 한다. 허리가 들리면 무릎을 굽혀서 수행한다." },
  { name: "러시안 트위스트", type: "근력", part: "코어", places: ["홈트","헬스장"], risk: ["허리"], level: 2, sets: { easy: [3,"16회"], normal: [3,"20회"], hard: [4,"30회"] }, rest: 45, met: 3.5,
    how: "앉아서 무릎을 굽히고 상체를 약간 뒤로 기울인다. 양손을 모으거나 무게를 들고 좌우로 몸통을 비튼다.",
    tips: "허리만 흔들지 말고 복부를 수축하며 회전한다." },
  { name: "마운틴 클라이머", type: "근력", part: "코어", places: ["홈트","헬스장","공원"], risk: ["손목","허리"], level: 2, sets: { easy: [3,"20초"], normal: [3,"40초"], hard: [4,"60초"] }, rest: 45, met: 6.0,
    how: "푸시업 자세에서 한쪽 무릎을 가슴 쪽으로 당겼다가 빠르게 좌우 번갈아 수행한다.",
    tips: "엉덩이가 올라가지 않도록 일직선을 유지한다." },
  { name: "버드독", type: "근력", part: "코어", places: ["홈트","헬스장"], risk: [], level: 1, sets: { easy: [3,"8회"], normal: [3,"12회"], hard: [4,"15회"] }, rest: 30, met: 2.5,
    how: "네발 기기 자세에서 반대쪽 팔과 다리를 동시에 들어 일직선을 만든 뒤 천천히 내린다. 좌우 번갈아.",
    tips: "허리가 굽거나 들리지 않게 코어 안정성을 유지한다." },
  { name: "데드버그", type: "근력", part: "코어", places: ["홈트","헬스장"], risk: [], level: 1, sets: { easy: [3,"8회"], normal: [3,"12회"], hard: [4,"15회"] }, rest: 30, met: 2.5,
    how: "누워서 양팔을 천장으로 뻗고 무릎을 90도로 든다. 반대쪽 팔과 다리를 천천히 뻗었다가 돌아온다.",
    tips: "허리가 바닥에 밀착된 상태를 유지하며 천천히 수행한다." },
  { name: "할로우 홀드", type: "근력", part: "코어", places: ["홈트","헬스장"], risk: ["허리"], level: 2, sets: { easy: [3,"15초"], normal: [3,"30초"], hard: [4,"45초"] }, rest: 45, met: 3.5,
    how: "등을 대고 누워 어깨와 다리를 바닥에서 살짝 들어올린 채 유지한다. 바나나 모양을 만든다.",
    tips: "허리가 들리지 않게 복부를 강하게 수축한다. 어려우면 무릎을 굽혀 수행한다." },
  { name: "V업", type: "근력", part: "코어", places: ["홈트","헬스장"], risk: ["허리","목"], level: 2, sets: { easy: [3,"8회"], normal: [3,"12회"], hard: [4,"15회"] }, rest: 60, met: 5.0,
    how: "누운 자세에서 양팔과 양다리를 동시에 들어올려 V자 모양을 만든 뒤 천천히 내린다.",
    tips: "반동을 쓰지 않고 복부 힘으로 수행한다." },
  
  // 근력 - 헬스장 전용
  { name: "벤치프레스", type: "근력", part: "상체", places: ["헬스장"], risk: ["어깨","손목"], level: 3, sets: { easy: [3,"10회"], normal: [4,"10회"], hard: [5,"6회"] }, rest: 90, met: 5.0,
    how: "벤치에 누워 바를 어깨너비보다 약간 넓게 잡는다. 바를 가슴 중앙까지 내린 뒤 다시 밀어 올린다.",
    tips: "어깨가 들리지 않게 견갑골을 후인하강한 상태로 유지한다. 보조자 또는 세이프티바 필수." },
  { name: "인클라인 벤치프레스", type: "근력", part: "상체", places: ["헬스장"], risk: ["어깨"], level: 3, sets: { easy: [3,"10회"], normal: [4,"10회"], hard: [5,"8회"] }, rest: 90, met: 5.0,
    how: "벤치 각도를 30-45도로 세우고 바벨을 가슴 윗부분까지 내렸다 밀어 올린다.",
    tips: "각도가 너무 가파르면 어깨에 부담이 간다." },
  { name: "덤벨 플라이", type: "근력", part: "상체", places: ["헬스장"], risk: ["어깨"], level: 3, sets: { easy: [3,"12회"], normal: [3,"12회"], hard: [4,"10회"] }, rest: 60, met: 4.5,
    how: "벤치에 누워 양손에 덤벨을 들고 팔을 약간 굽힌 상태로 양옆으로 벌렸다가 가슴 위로 모은다.",
    tips: "팔꿈치가 너무 펴지면 부상 위험. 약간 굽힌 상태를 유지한다." },
  { name: "데드리프트", type: "근력", part: "전신", places: ["헬스장"], risk: ["허리"], level: 3, sets: { easy: [3,"8회"], normal: [4,"8회"], hard: [5,"5회"] }, rest: 120, met: 6.0,
    how: "바를 발 중앙 위에 두고 어깨너비로 발을 벌린다. 허리를 곧게 편 채 무릎과 고관절을 굽혀 바를 잡는다. 발뒤꿈치로 바닥을 밀며 일어선다.",
    tips: "등이 둥글게 굽으면 안 된다. 무게는 점진적으로 늘린다. 폼이 무너지면 즉시 중량을 낮춘다." },
  { name: "루마니안 데드리프트", type: "근력", part: "하체", places: ["헬스장"], risk: ["허리"], level: 3, sets: { easy: [3,"10회"], normal: [3,"10회"], hard: [4,"8회"] }, rest: 90, met: 5.5,
    how: "선 자세에서 바를 잡고, 무릎은 약간 굽힌 채 엉덩이를 뒤로 빼며 바를 다리 앞으로 내린다. 햄스트링이 늘어나는 느낌까지 내린 뒤 일어선다.",
    tips: "허리가 굽지 않게 한다. 햄스트링 유연성이 부족하면 무릎까지만 내린다." },
  { name: "랫풀다운", type: "근력", part: "상체", places: ["헬스장"], risk: ["어깨"], level: 3, sets: { easy: [3,"12회"], normal: [4,"12회"], hard: [4,"10회"] }, rest: 75, met: 4.5,
    how: "랫풀다운 머신에 앉아 바를 어깨너비보다 넓게 잡는다. 가슴 윗부분까지 바를 끌어내린 뒤 천천히 올린다.",
    tips: "상체를 너무 뒤로 젖히지 않는다. 등 근육으로 당긴다는 느낌으로." },
  { name: "레그프레스", type: "근력", part: "하체", places: ["헬스장"], risk: ["무릎"], level: 3, sets: { easy: [3,"12회"], normal: [4,"12회"], hard: [5,"10회"] }, rest: 90, met: 5.0,
    how: "머신에 앉아 발을 발판에 어깨너비로 놓는다. 무릎이 90도가 될 때까지 천천히 내린 뒤 밀어 올린다.",
    tips: "무릎이 안쪽으로 모이지 않게 한다. 무릎을 완전히 펴지 않고 약간 굽힌 상태로 마무리." },
  { name: "숄더프레스", type: "근력", part: "상체", places: ["헬스장"], risk: ["어깨","목"], level: 3, sets: { easy: [3,"10회"], normal: [4,"10회"], hard: [4,"8회"] }, rest: 75, met: 4.5,
    how: "앉아서 덤벨이나 바벨을 어깨 높이로 든다. 머리 위로 밀어 올린 뒤 천천히 어깨 높이로 내린다.",
    tips: "허리가 과도하게 젖혀지지 않게 코어에 힘을 준다." },
  { name: "바벨 로우", type: "근력", part: "상체", places: ["헬스장"], risk: ["허리","어깨"], level: 3, sets: { easy: [3,"10회"], normal: [4,"10회"], hard: [5,"8회"] }, rest: 75, met: 5.0,
    how: "바를 어깨너비로 잡고 상체를 45도 정도 숙인다. 바를 배꼽 쪽으로 끌어당겼다가 천천히 내린다.",
    tips: "허리는 곧게 유지한다. 등 근육으로 당기는 감각을 느낀다." },
  { name: "케이블 로우", type: "근력", part: "상체", places: ["헬스장"], risk: ["허리"], level: 2, sets: { easy: [3,"12회"], normal: [4,"12회"], hard: [4,"10회"] }, rest: 60, met: 4.5,
    how: "앉아서 케이블 핸들을 잡는다. 가슴을 펴고 핸들을 배 쪽으로 당겼다가 천천히 늘어뜨린다.",
    tips: "상체가 앞뒤로 흔들리지 않게 한다. 견갑골을 모은다는 느낌으로 당긴다." },
  { name: "레그컬", type: "근력", part: "하체", places: ["헬스장"], risk: ["무릎"], level: 2, sets: { easy: [3,"12회"], normal: [3,"12회"], hard: [4,"10회"] }, rest: 60, met: 4.0,
    how: "머신에 엎드려 누워 발목을 패드에 건다. 무릎을 굽혀 발뒤꿈치를 엉덩이 쪽으로 당긴 뒤 천천히 내린다.",
    tips: "허리가 들리지 않게 코어에 힘을 준다." },
  { name: "레그 익스텐션", type: "근력", part: "하체", places: ["헬스장"], risk: ["무릎"], level: 2, sets: { easy: [3,"12회"], normal: [3,"15회"], hard: [4,"12회"] }, rest: 60, met: 4.0,
    how: "머신에 앉아 발목을 패드 아래에 둔다. 무릎을 펴서 다리를 들어올린 뒤 천천히 내린다.",
    tips: "끝까지 무릎을 완전히 펴지 않는다. 무릎 부상 시 피한다." },
  { name: "바벨 컬", type: "근력", part: "상체", places: ["헬스장"], risk: ["팔꿈치","손목"], level: 2, sets: { easy: [3,"10회"], normal: [3,"12회"], hard: [4,"10회"] }, rest: 60, met: 3.5,
    how: "바를 어깨너비로 잡고 서서, 팔꿈치를 몸통 옆에 고정한 채 바를 가슴 쪽으로 들어올린 뒤 천천히 내린다.",
    tips: "반동을 쓰지 않고 이두 근육으로만 들어올린다." },
  { name: "트라이셉 익스텐션", type: "근력", part: "상체", places: ["헬스장"], risk: ["팔꿈치"], level: 2, sets: { easy: [3,"10회"], normal: [3,"12회"], hard: [4,"10회"] }, rest: 60, met: 3.5,
    how: "덤벨이나 바를 머리 위로 들고, 팔꿈치를 고정한 채 머리 뒤로 내렸다가 다시 들어올린다.",
    tips: "팔꿈치가 바깥으로 벌어지지 않게 한다." },
  
  // 유산소
  { name: "제자리 뛰기", type: "유산소", part: "전신", places: ["홈트","헬스장","공원"], risk: [], level: 2, sets: { easy: [3,"30초"], normal: [3,"60초"], hard: [4,"90초"] }, rest: 30, met: 8.0,
    how: "제자리에서 가볍게 뛰며 양손도 함께 움직인다. 무릎을 적당히 올린다.",
    tips: "착지 시 발 전체로 충격을 분산한다." },
  { name: "버피", type: "유산소", part: "전신", places: ["홈트","헬스장","공원"], risk: ["무릎","손목","허리"], level: 3, sets: { easy: [3,"5회"], normal: [3,"10회"], hard: [4,"15회"] }, rest: 60, met: 9.0,
    how: "선 자세에서 손을 바닥에 짚고 발을 뒤로 점프해 푸시업 자세를 만든다. 다시 발을 앞으로 점프해 일어서며 손을 머리 위로 점프한다.",
    tips: "초보는 점프 없이 한 동작씩 천천히 수행한다." },
  { name: "점핑잭", type: "유산소", part: "전신", places: ["홈트","헬스장","공원"], risk: [], level: 2, sets: { easy: [3,"20초"], normal: [3,"40초"], hard: [4,"60초"] }, rest: 30, met: 7.5,
    how: "양발을 모은 채 서서 점프하며 다리를 어깨너비로 벌리고 동시에 양팔을 머리 위로 든다. 다시 점프해 시작 자세로 돌아온다.",
    tips: "리듬감 있게 부드럽게 수행한다." },
  { name: "하이니", type: "유산소", part: "전신", places: ["홈트","헬스장","공원"], risk: [], level: 2, sets: { easy: [3,"20초"], normal: [3,"40초"], hard: [4,"60초"] }, rest: 30, met: 8.0,
    how: "제자리에서 빠르게 뛰며 무릎을 허리 높이까지 들어올린다. 양손은 자연스럽게 흔든다.",
    tips: "발끝으로 가볍게 뛴다." },
  { name: "조깅", type: "유산소", part: "전신", places: ["야외","공원","헬스장"], risk: ["무릎","발목"], level: 2, sets: { easy: [1,"10분"], normal: [1,"20분"], hard: [1,"30분"] }, rest: 0, met: 7.0,
    how: "일정한 속도로 가볍게 달린다. 호흡은 코로 들이쉬고 입으로 내쉰다.",
    tips: "쿠셔닝이 좋은 신발을 신는다. 첫 5분은 워밍업으로 빠르게 걷는다." },
  { name: "걷기", type: "유산소", part: "전신", places: ["야외","공원","헬스장"], risk: [], level: 1, sets: { easy: [1,"20분"], normal: [1,"30분"], hard: [1,"45분"] }, rest: 0, met: 3.5,
    how: "팔을 자연스럽게 흔들며 평소보다 빠른 속도로 걷는다. 가슴을 펴고 시선은 정면.",
    tips: "관절 부담이 적어 초보자나 회복기에 좋다." },
  { name: "사이클", type: "유산소", part: "하체", places: ["헬스장","야외"], risk: [], level: 1, sets: { easy: [1,"15분"], normal: [1,"30분"], hard: [1,"45분"] }, rest: 0, met: 6.0,
    how: "안장 높이를 무릎이 살짝 굽혀지는 정도로 맞춘다. 일정한 페이스로 페달을 밟는다.",
    tips: "관절에 부담이 적어 무릎이 약한 사람에게도 적합." },
  { name: "줄넘기", type: "유산소", part: "전신", places: ["홈트","공원","야외"], risk: [], level: 2, sets: { easy: [3,"30초"], normal: [3,"60초"], hard: [4,"90초"] }, rest: 45, met: 10.0,
    how: "발끝으로 가볍게 점프하며 줄을 손목 회전으로 돌린다. 너무 높이 뛰지 않는다.",
    tips: "쿠셔닝이 좋은 신발과 평평한 바닥에서 한다." },
  { name: "계단 오르기", type: "유산소", part: "하체", places: ["야외","헬스장"], risk: ["무릎"], level: 2, sets: { easy: [1,"5분"], normal: [1,"10분"], hard: [1,"15분"] }, rest: 0, met: 6.5,
    how: "계단을 일정한 속도로 오른다. 내려올 땐 천천히 무릎에 부담이 가지 않게.",
    tips: "내려올 때 부상 위험이 크므로 천천히." },
  { name: "스킵 (러닝 동작)", type: "유산소", part: "전신", places: ["홈트","헬스장","공원"], risk: [], level: 2, sets: { easy: [3,"30초"], normal: [3,"60초"], hard: [4,"90초"] }, rest: 30, met: 8.0,
    how: "제자리에서 한 발씩 가볍게 뛰며 무릎을 들어올리는 동작. 달리는 자세지만 앞으로 나아가지 않고 제자리에서 수행. 팔도 자연스럽게 흔들어준다.",
    tips: "발끝으로 가볍게 뛰며 착지 충격을 최소화한다. 무릎을 너무 높이 올리지 않아도 된다." },
  { name: "사이드 스텝", type: "유산소", part: "전신", places: ["홈트","헬스장","공원"], risk: [], level: 1, sets: { easy: [3,"30초"], normal: [3,"60초"], hard: [4,"90초"] }, rest: 30, met: 6.0,
    how: "어깨너비로 발을 벌리고 살짝 무릎을 굽힌 자세에서, 옆으로 한 발씩 빠르게 이동한다. 좌 → 우 → 좌 패턴으로 반복한다.",
    tips: "무릎이 발끝 방향과 일치하게 한다. 측면 근육 강화에 좋다." },
  { name: "스쿼트 + 점프 (탭댄스)", type: "유산소", part: "하체", places: ["홈트","헬스장","공원"], risk: ["무릎","발목"], level: 3, sets: { easy: [3,"20초"], normal: [3,"40초"], hard: [4,"60초"] }, rest: 45, met: 8.5,
    how: "스쿼트 자세에서 살짝 내려갔다가 가볍게 점프하며 발 위치를 바꾼다. 부드럽게 리듬을 타며 반복한다.",
    tips: "착지 시 무릎을 굽혀 충격을 흡수한다. 부드럽게 리듬감 있게 수행한다." },
  { name: "스타 점프", type: "유산소", part: "전신", places: ["홈트","헬스장","공원"], risk: ["무릎","발목","어깨"], level: 3, sets: { easy: [3,"15초"], normal: [3,"30초"], hard: [4,"45초"] }, rest: 45, met: 9.0,
    how: "쪼그려 앉은 자세에서 위로 폭발적으로 점프하며 양팔과 양다리를 별 모양으로 활짝 펼친다. 착지 후 다시 쪼그려 앉는다.",
    tips: "착지를 부드럽게. 무릎과 발목에 부담이 크므로 워밍업 후 진행한다." },
  { name: "인치웜", type: "유산소", part: "전신", places: ["홈트","헬스장","공원"], risk: ["허리","손목"], level: 2, sets: { easy: [3,"6회"], normal: [3,"10회"], hard: [4,"12회"] }, rest: 30, met: 6.0,
    how: "선 자세에서 손을 바닥에 짚고, 손으로 한 걸음씩 앞으로 걸어가 푸시업 자세까지 만든다. 그 후 발로 손까지 걸어가 다시 일어선다.",
    tips: "허리가 굽지 않게 한다. 햄스트링이 유연해야 편하게 수행 가능." },
  { name: "엘립티컬", type: "유산소", part: "전신", places: ["헬스장"], risk: [], level: 1, sets: { easy: [1,"15분"], normal: [1,"25분"], hard: [1,"40분"] }, rest: 0, met: 5.5,
    how: "엘립티컬 머신에 올라 자연스럽게 발을 밟으며 양손도 함께 움직인다.",
    tips: "관절 충격이 적어 무릎이 약한 사람에게도 좋다." },
  { name: "로잉머신", type: "유산소", part: "전신", places: ["헬스장"], risk: ["허리"], level: 2, sets: { easy: [1,"10분"], normal: [1,"20분"], hard: [1,"30분"] }, rest: 0, met: 7.0,
    how: "발판에 발을 고정하고 핸들을 잡는다. 다리로 밀고 → 상체 뒤로 기울이고 → 팔로 당기는 순서로 노젓기를 수행한다.",
    tips: "허리를 곧게 유지한다. 동작 순서를 지킨다." },
  
  // 무산소
  { name: "스프린트", type: "무산소", part: "전신", places: ["야외","공원","헬스장"], risk: ["무릎","발목"], level: 3, sets: { easy: [4,"20초"], normal: [5,"30초"], hard: [6,"30초"] }, rest: 90, met: 11.0,
    how: "전력 질주를 짧게 반복한다. 워밍업 후 진행하며, 휴식 시 천천히 걷는다.",
    tips: "워밍업 없이 하면 부상 위험. 처음엔 80% 강도부터 시작." },
  { name: "박스 점프", type: "무산소", part: "하체", places: ["헬스장","공원"], risk: ["무릎","발목"], level: 3, sets: { easy: [3,"6회"], normal: [4,"8회"], hard: [5,"10회"] }, rest: 90, met: 8.0,
    how: "안정적인 박스 앞에 서서 무릎을 굽히고 양팔을 뒤로 빼며 반동을 만든 후 점프해 박스 위에 착지한다. 내려올 땐 천천히.",
    tips: "박스 높이는 본인 수준에 맞춰 보수적으로. 점프 후 일어선 자세를 확인하고 천천히 내려온다." },
  { name: "케틀벨 스윙", type: "무산소", part: "전신", places: ["헬스장"], risk: ["허리"], level: 3, sets: { easy: [3,"12회"], normal: [4,"15회"], hard: [5,"20회"] }, rest: 60, met: 9.0,
    how: "양발을 어깨너비로 벌리고 케틀벨을 양손으로 잡는다. 엉덩이를 뒤로 빼며 케틀벨을 다리 사이로 보냈다가, 엉덩이를 강하게 펴며 케틀벨을 가슴 높이까지 흔든다.",
    tips: "팔로 들어올리지 않고 엉덩이 힘으로 흔든다. 허리가 굽지 않게 한다." },
  { name: "배틀로프", type: "무산소", part: "상체", places: ["헬스장"], risk: ["어깨"], level: 3, sets: { easy: [3,"20초"], normal: [4,"30초"], hard: [5,"45초"] }, rest: 60, met: 8.0,
    how: "로프 양 끝을 잡고 무릎을 살짝 굽힌 자세에서 양팔로 로프를 빠르게 흔든다. 파도 모양을 만든다.",
    tips: "어깨를 으쓱하지 않고 안정적으로 유지한다." },
  { name: "타바타 (전신)", type: "무산소", part: "전신", places: ["홈트","헬스장","공원"], risk: ["무릎","발목","허리"], level: 3, sets: { easy: [4,"3분"], normal: [4,"4분"], hard: [6,"4분"] }, rest: 60, met: 10.0,
    how: "한 가지 운동을 20초 전력으로 하고 10초 휴식하는 사이클을 8번 반복(총 4분). 운동 종목은 자유 선택.",
    tips: "워밍업 필수. 종목을 한 가지로 정해 폼이 무너지지 않을 정도의 강도로." },
  { name: "메디신볼 슬램", type: "무산소", part: "전신", places: ["헬스장"], risk: ["허리","어깨"], level: 3, sets: { easy: [3,"10회"], normal: [4,"12회"], hard: [5,"15회"] }, rest: 60, met: 8.0,
    how: "메디신볼을 머리 위로 들었다가 폭발적으로 바닥에 내려친다. 무릎을 굽혀 자세를 잡고 다시 들어올린다.",
    tips: "허리만 굽혀서 내리치지 않고 전신을 사용한다." },
  { name: "케틀벨 클린", type: "무산소", part: "전신", places: ["헬스장"], risk: ["허리","어깨","손목"], level: 3, sets: { easy: [3,"6회"], normal: [4,"8회"], hard: [5,"10회"] }, rest: 75, met: 8.5,
    how: "케틀벨을 다리 사이에 두고 데드리프트 자세로 잡는다. 폭발적으로 들어올려 어깨 앞 랙 포지션에 정착시킨다.",
    tips: "팔로 들어올리지 말고 하체 힘으로 시작한다. 폼이 어렵다면 트레이너 지도 권장." },
  { name: "점프 런지", type: "무산소", part: "하체", places: ["홈트","헬스장","공원"], risk: ["무릎","발목"], level: 3, sets: { easy: [3,"8회"], normal: [3,"12회"], hard: [4,"16회"] }, rest: 75, met: 8.5,
    how: "런지 자세에서 폭발적으로 점프하며 공중에서 다리를 바꿔 반대쪽 런지 자세로 착지한다.",
    tips: "착지 시 무릎이 안쪽으로 모이지 않게 한다. 무릎 관절 부담이 크다." },
  
  // 스트레칭
  { name: "햄스트링 스트레칭", type: "스트레칭", part: "하체", places: ["홈트","헬스장","공원"], risk: [], level: 1, sets: { easy: [2,"20초"], normal: [2,"30초"], hard: [3,"45초"] }, rest: 15, met: 2.0,
    how: "앉아서 한 다리를 펴고 다른 다리는 굽힌다. 펴진 다리 쪽으로 상체를 천천히 숙여 햄스트링이 늘어나는 느낌을 유지한다.",
    tips: "통증이 올 때까지 가지 말고 늘어나는 느낌까지만." },
  { name: "어깨 스트레칭", type: "스트레칭", part: "상체", places: ["홈트","헬스장","공원"], risk: [], level: 1, sets: { easy: [2,"20초"], normal: [2,"30초"], hard: [3,"45초"] }, rest: 15, met: 2.0,
    how: "한 팔을 가슴 앞으로 가로질러 뻗고 반대 손으로 팔꿈치를 당겨 어깨가 늘어나는 느낌을 유지한다. 좌우 모두.",
    tips: "어깨를 으쓱하지 않고 어깨가 내려간 상태에서 스트레칭한다." },
  { name: "고양이-소 자세", type: "스트레칭", part: "코어", places: ["홈트","헬스장"], risk: [], level: 1, sets: { easy: [2,"8회"], normal: [2,"10회"], hard: [3,"12회"] }, rest: 15, met: 2.0,
    how: "네발 기기 자세에서 숨을 들이쉬며 등을 아래로 떨어뜨리고 시선을 위로(소). 숨을 내쉬며 등을 위로 둥글게 말고 시선을 아래로(고양이).",
    tips: "호흡과 동작을 천천히 일치시킨다." },
  { name: "비둘기 자세", type: "스트레칭", part: "하체", places: ["홈트","헬스장"], risk: ["무릎"], level: 1, sets: { easy: [2,"20초"], normal: [2,"30초"], hard: [3,"45초"] }, rest: 15, met: 2.0,
    how: "한 다리를 앞으로 굽혀 앞 정강이가 매트와 평행이 되도록 두고, 뒷다리는 곧게 편다. 상체를 앞으로 숙인다.",
    tips: "무릎이 아프면 앞다리 각도를 줄인다." },
  { name: "차일드 포즈", type: "스트레칭", part: "전신", places: ["홈트","헬스장"], risk: [], level: 1, sets: { easy: [2,"30초"], normal: [2,"60초"], hard: [3,"90초"] }, rest: 15, met: 2.0,
    how: "무릎을 꿇고 앉아 엉덩이를 발뒤꿈치 위에 둔다. 양팔을 앞으로 뻗고 상체를 바닥에 가깝게 내려 휴식한다.",
    tips: "운동 후 휴식과 호흡 정리에 좋다." },
  { name: "코브라 자세", type: "스트레칭", part: "코어", places: ["홈트","헬스장"], risk: ["허리","손목"], level: 2, sets: { easy: [2,"20초"], normal: [2,"30초"], hard: [3,"45초"] }, rest: 15, met: 2.0,
    how: "엎드린 자세에서 손바닥을 가슴 옆에 짚는다. 팔을 천천히 펴며 상체를 들어 등을 부드럽게 젖힌다.",
    tips: "허리에 통증이 있으면 손 위치를 더 앞쪽으로 두고 약하게 시작." },
  { name: "삼각 자세", type: "스트레칭", part: "전신", places: ["홈트","헬스장"], risk: [], level: 2, sets: { easy: [2,"20초"], normal: [2,"30초"], hard: [3,"45초"] }, rest: 15, met: 2.5,
    how: "다리를 넓게 벌리고 한쪽 발끝을 옆으로 돌린다. 그쪽으로 상체를 기울이며 한 손은 발쪽, 반대 손은 천장으로 뻗는다.",
    tips: "무릎이 발끝 방향과 일치하게 한다." },
  { name: "다운독", type: "스트레칭", part: "전신", places: ["홈트","헬스장"], risk: ["손목","어깨"], level: 2, sets: { easy: [2,"20초"], normal: [2,"30초"], hard: [3,"45초"] }, rest: 15, met: 2.5,
    how: "엎드린 자세에서 엉덩이를 위로 들어올려 V자 모양을 만든다. 손바닥과 발뒤꿈치로 바닥을 누른다.",
    tips: "햄스트링이 빳빳하면 무릎을 살짝 굽혀도 된다." },
  { name: "허벅지 앞쪽 스트레칭", type: "스트레칭", part: "하체", places: ["홈트","헬스장","공원"], risk: [], level: 1, sets: { easy: [2,"20초"], normal: [2,"30초"], hard: [3,"45초"] }, rest: 15, met: 2.0,
    how: "선 자세에서 한 발을 뒤로 잡아 발뒤꿈치를 엉덩이 쪽으로 당긴다. 균형이 어려우면 벽을 짚는다.",
    tips: "무릎 두 개가 나란히 정렬되도록 한다." },
  { name: "엉덩이 스트레칭(피겨4)", type: "스트레칭", part: "하체", places: ["홈트","헬스장"], risk: [], level: 1, sets: { easy: [2,"20초"], normal: [2,"30초"], hard: [3,"45초"] }, rest: 15, met: 2.0,
    how: "누운 자세에서 한 발목을 반대쪽 무릎 위에 올린다. 반대쪽 허벅지를 잡고 가슴 쪽으로 당긴다.",
    tips: "엉덩이 깊은 부위가 늘어나는 느낌을 찾는다." },
  { name: "목 스트레칭", type: "스트레칭", part: "상체", places: ["홈트","헬스장","공원"], risk: [], level: 1, sets: { easy: [2,"15초"], normal: [2,"20초"], hard: [3,"30초"] }, rest: 15, met: 2.0,
    how: "앉거나 선 자세에서 한 손으로 머리 옆을 가볍게 잡고 같은 방향으로 천천히 기울인다. 반대쪽도.",
    tips: "절대 강하게 당기지 않는다. 부드럽게." },
];

const state = {
  height: null, weight: null, age: null, gender: null,
  experience: null, history: new Set(),
  types: new Set(), cardioStyle: null,
  duration: null, place: null, injuries: new Set(),
};

const intensityLabel = {
  easy: "초급 강도 · 부담 적게",
  normal: "중급 강도 · 표준",
  hard: "고급 강도 · 도전적"
};

// ===== 운동 동작 SVG 애니메이션 =====
// 스틱맨 기반 미니멀 애니메이션
const animations = {
  "스쿼트": `
    <svg class="anim-squat" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
      <g class="body" stroke="#d4ff00" stroke-width="3" fill="none" stroke-linecap="round">
        <!-- 머리 -->
        <circle cx="110" cy="50" r="14" />
        <!-- 몸통 -->
        <line x1="110" y1="64" x2="110" y2="105" />
        <!-- 팔 (앞으로 뻗음) -->
        <line x1="110" y1="80" x2="150" y2="75" />
        <line x1="110" y1="80" x2="70" y2="75" />
        <!-- 엉덩이 -->
        <circle cx="110" cy="105" r="3" fill="#d4ff00" />
        <!-- 다리 (굽힘) -->
        <line x1="110" y1="105" x2="95" y2="135" />
        <line x1="95" y1="135" x2="95" y2="170" />
        <line x1="110" y1="105" x2="125" y2="135" />
        <line x1="125" y1="135" x2="125" y2="170" />
      </g>
    </svg>
  `,
  "푸시업": `
    <svg class="anim-pushup" viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
      <g class="body" stroke="#d4ff00" stroke-width="3" fill="none" stroke-linecap="round">
        <!-- 머리 -->
        <circle cx="50" cy="70" r="12" />
        <!-- 몸통 (수평) -->
        <line x1="62" y1="72" x2="160" y2="80" />
        <!-- 팔 (지지) -->
        <line x1="75" y1="75" x2="80" y2="115" />
        <!-- 다리 -->
        <line x1="160" y1="80" x2="180" y2="100" />
        <line x1="180" y1="100" x2="200" y2="115" />
      </g>
      <!-- 바닥 -->
      <line x1="20" y1="125" x2="210" y2="125" stroke="#444" stroke-width="2" stroke-dasharray="4 4" />
    </svg>
  `,
  "점핑잭": `
    <svg class="anim-jjack" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
      <g class="body">
        <!-- 머리 -->
        <circle cx="110" cy="55" r="13" stroke="#d4ff00" stroke-width="3" fill="none" />
        <!-- 몸통 -->
        <line x1="110" y1="68" x2="110" y2="140" stroke="#d4ff00" stroke-width="3" stroke-linecap="round" />
      </g>
      <!-- 팔 (회전) -->
      <line class="arm-left" x1="110" y1="80" x2="65" y2="120" stroke="#d4ff00" stroke-width="3" stroke-linecap="round" />
      <line class="arm-right" x1="110" y1="80" x2="155" y2="120" stroke="#d4ff00" stroke-width="3" stroke-linecap="round" />
      <!-- 다리 (회전) -->
      <line class="leg-left" x1="110" y1="140" x2="110" y2="180" stroke="#d4ff00" stroke-width="3" stroke-linecap="round" />
      <line class="leg-right" x1="110" y1="140" x2="110" y2="180" stroke="#d4ff00" stroke-width="3" stroke-linecap="round" />
    </svg>
  `,
  "플랭크": `
    <svg class="anim-plank" viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
      <g class="body" stroke="#d4ff00" stroke-width="3" fill="none" stroke-linecap="round">
        <!-- 머리 -->
        <circle cx="45" cy="80" r="12" />
        <!-- 몸통 (일직선) -->
        <line x1="57" y1="83" x2="175" y2="95" />
        <!-- 팔 (지지) -->
        <line x1="70" y1="85" x2="75" y2="120" />
        <line x1="75" y1="120" x2="95" y2="120" />
        <!-- 다리 -->
        <line x1="175" y1="95" x2="200" y2="115" />
      </g>
      <line x1="20" y1="125" x2="210" y2="125" stroke="#444" stroke-width="2" stroke-dasharray="4 4" />
    </svg>
  `,
  "런지": `
    <svg class="anim-lunge" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
      <g class="body" stroke="#d4ff00" stroke-width="3" fill="none" stroke-linecap="round">
        <circle cx="110" cy="50" r="13" />
        <line x1="110" y1="63" x2="110" y2="110" />
        <!-- 팔 -->
        <line x1="110" y1="80" x2="80" y2="100" />
        <line x1="110" y1="80" x2="140" y2="100" />
        <!-- 앞다리 (굽힘) -->
        <line x1="110" y1="110" x2="150" y2="140" />
        <line x1="150" y1="140" x2="150" y2="175" />
        <!-- 뒷다리 (뒤로) -->
        <line x1="110" y1="110" x2="80" y2="150" />
        <line x1="80" y1="150" x2="65" y2="175" />
      </g>
    </svg>
  `,
  "버피": `
    <svg class="anim-burpee" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
      <g class="body" stroke="#d4ff00" stroke-width="3" fill="none" stroke-linecap="round">
        <circle cx="110" cy="55" r="13" />
        <line x1="110" y1="68" x2="110" y2="110" />
        <line x1="110" y1="80" x2="80" y2="100" />
        <line x1="110" y1="80" x2="140" y2="100" />
        <line x1="110" y1="110" x2="95" y2="150" />
        <line x1="95" y1="150" x2="95" y2="180" />
        <line x1="110" y1="110" x2="125" y2="150" />
        <line x1="125" y1="150" x2="125" y2="180" />
      </g>
    </svg>
  `,
  "마운틴 클라이머": `
    <svg class="anim-mclimber" viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#d4ff00" stroke-width="3" fill="none" stroke-linecap="round">
        <!-- 머리 -->
        <circle cx="50" cy="75" r="12" />
        <!-- 몸통 -->
        <line x1="62" y1="78" x2="170" y2="95" />
        <!-- 팔 -->
        <line x1="70" y1="80" x2="75" y2="125" />
        <line x1="90" y1="83" x2="95" y2="125" />
      </g>
      <!-- 다리 (교차로 움직임) -->
      <line class="leg-left" x1="170" y1="95" x2="200" y2="130" stroke="#d4ff00" stroke-width="3" stroke-linecap="round" />
      <line class="leg-right" x1="170" y1="95" x2="200" y2="130" stroke="#d4ff00" stroke-width="3" stroke-linecap="round" />
      <line x1="20" y1="135" x2="210" y2="135" stroke="#444" stroke-width="2" stroke-dasharray="4 4" />
    </svg>
  `,
  "줄넘기": `
    <svg class="anim-jrope" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
      <!-- 줄 (회전) -->
      <ellipse class="rope" cx="110" cy="120" rx="65" ry="55" stroke="#9eb900" stroke-width="2" fill="none" stroke-dasharray="3 3" opacity="0.6" />
      <g class="body" stroke="#d4ff00" stroke-width="3" fill="none" stroke-linecap="round">
        <circle cx="110" cy="55" r="13" />
        <line x1="110" y1="68" x2="110" y2="130" />
        <line x1="110" y1="80" x2="85" y2="100" />
        <line x1="110" y1="80" x2="135" y2="100" />
        <line x1="110" y1="130" x2="100" y2="170" />
        <line x1="110" y1="130" x2="120" y2="170" />
      </g>
    </svg>
  `,
  "크런치": `
    <svg class="anim-crunch" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#d4ff00" stroke-width="3" fill="none" stroke-linecap="round">
        <!-- 무릎 굽힌 다리 (고정) -->
        <line x1="110" y1="130" x2="150" y2="115" />
        <line x1="150" y1="115" x2="170" y2="140" />
        <line x1="110" y1="130" x2="145" y2="120" />
      </g>
      <!-- 상체 (들어올림) -->
      <g class="upper" stroke="#d4ff00" stroke-width="3" fill="none" stroke-linecap="round">
        <circle cx="65" cy="100" r="12" />
        <line x1="77" y1="103" x2="110" y2="130" />
        <line x1="80" y1="105" x2="95" y2="95" />
      </g>
      <line x1="20" y1="145" x2="210" y2="145" stroke="#444" stroke-width="2" stroke-dasharray="4 4" />
    </svg>
  `,
  "글루트 브릿지": `
    <svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#d4ff00" stroke-width="3" fill="none" stroke-linecap="round">
        <!-- 머리 (고정) -->
        <circle cx="55" cy="130" r="12" />
        <!-- 어깨/등 (고정) -->
        <line x1="67" y1="133" x2="105" y2="135" />
      </g>
      <!-- 엉덩이 부분 (움직임) -->
      <g class="hip" stroke="#d4ff00" stroke-width="3" fill="none" stroke-linecap="round">
        <line x1="105" y1="135" x2="145" y2="115" />
        <line x1="145" y1="115" x2="170" y2="115" />
      </g>
      <g stroke="#d4ff00" stroke-width="3" fill="none" stroke-linecap="round">
        <!-- 무릎 굽힌 다리 -->
        <line x1="170" y1="115" x2="180" y2="145" />
      </g>
      <line x1="20" y1="155" x2="210" y2="155" stroke="#444" stroke-width="2" stroke-dasharray="4 4" />
    </svg>
  `,
};

function setupSingleChip(containerId, key) {
  document.getElementById(containerId).querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.getElementById(containerId).querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state[key] = chip.dataset.value;
    });
  });
}
function setupMultiChip(containerId, key) {
  document.getElementById(containerId).querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      if (chip.classList.contains('active')) state[key].add(chip.dataset.value);
      else state[key].delete(chip.dataset.value);
    });
  });
}

setupSingleChip('experience', 'experience');
setupMultiChip('history', 'history');
setupMultiChip('types', 'types');
setupSingleChip('cardioStyle', 'cardioStyle');
setupSingleChip('duration', 'duration');
setupSingleChip('place', 'place');
setupMultiChip('injuries', 'injuries');

// ===== 기타 입력 핸들러 =====
// 기타 입력값을 state에 저장
state.customs = {
  history: "",
  types: "",
  place: "",
  injuries: "",
};

document.getElementById('history-custom').addEventListener('input', e => {
  state.customs.history = e.target.value.trim();
});
document.getElementById('types-custom').addEventListener('input', e => {
  state.customs.types = e.target.value.trim();
});
document.getElementById('place-custom').addEventListener('input', e => {
  state.customs.place = e.target.value.trim();
});
document.getElementById('injuries-custom').addEventListener('input', e => {
  state.customs.injuries = e.target.value.trim();
});

// 운동 시간 직접 입력: 입력하면 칩 선택 해제하고 그 값 사용
document.getElementById('duration-custom').addEventListener('input', e => {
  const val = e.target.value;
  if (val && parseInt(val) >= 10) {
    document.querySelectorAll('#duration .chip').forEach(c => c.classList.remove('active'));
    state.duration = val;
  } else if (!val) {
    state.duration = null;
  }
});
// 거꾸로 칩 선택 시 직접 입력 비움
document.querySelectorAll('#duration .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.getElementById('duration-custom').value = '';
  });
});

['height','weight','age'].forEach(id => {
  document.getElementById(id).addEventListener('input', e => {
    state[id] = e.target.value ? parseInt(e.target.value) : null;
  });
});
document.getElementById('gender').addEventListener('change', e => state.gender = e.target.value);

function generateRoutine() {
  if (!state.experience) { alert("운동 경력을 선택해줘"); return; }
  if (state.types.size === 0 && !state.customs.types) { alert("운동 종류를 1개 이상 선택해줘"); return; }
  if (!state.cardioStyle) {
    alert("운동 스타일을 선택해줘 (단일 종목 길게 또는 HIIT)");
    return;
  }
  if (!state.duration) { alert("운동 시간을 선택해줘"); return; }
  if (!state.place && !state.customs.place) { alert("장소를 선택해줘"); return; }
  
  const intensity = state.experience;
  const targetSec = parseInt(state.duration) * 60;
  
  // 장소 처리: 기타 입력이 있으면 가장 가까운 표준 장소로 매핑 안 하고 사용자가 선택한 chip을 우선
  // 표준 장소가 없고 기타만 있으면 "홈트"로 폴백
  let effectivePlace = state.place;
  let placeNote = "";
  if (!effectivePlace && state.customs.place) {
    effectivePlace = "홈트";
    placeNote = `(기타 장소 "${state.customs.place}"는 매칭이 어려워 홈트 운동으로 대체)`;
  }
  
  // 부상: 기타 부상도 회피에 포함
  const allInjuries = new Set([...state.injuries]);
  if (state.customs.injuries) {
    // 쉼표로 구분된 여러 부상 입력 가능
    state.customs.injuries.split(/[,，、\s]+/).filter(s => s.length > 0).forEach(i => allInjuries.add(i));
  }
  
  // 시간 단일 운동 (조깅, 걷기, 사이클 등) 판별
  const isLongCardio = (ex) => {
    const reps = ex.sets[intensity][1];
    return ex.type === '유산소' && reps.includes('분');
  };
  
  // 경력에 따른 난이도 필터
  // 초급 (easy): level 1~2 (너무 어려운 거 제외)
  // 중급 (normal): level 1~3 (모든 운동)
  // 고급 (hard): level 2~3 (너무 쉬운 거 제외)
  const allowedLevels = {
    easy: [1, 2],
    normal: [1, 2, 3],
    hard: [2, 3]
  }[intensity];
  
  let candidates = exercises.filter(ex => 
    state.types.has(ex.type) && 
    ex.places.includes(effectivePlace) &&
    allowedLevels.includes(ex.level || 2) // level 없으면 중급 취급
  );
  
  // 부상 회피 (선택한 칩 + 기타 입력 둘 다)
  let excluded = [];
  if (allInjuries.size > 0) {
    candidates = candidates.filter(ex => {
      const hasInjury = ex.risk.some(r => allInjuries.has(r));
      if (hasInjury) excluded.push(ex.name);
      return !hasInjury;
    });
  }
  
  if (candidates.length === 0) {
    alert("조건에 맞는 운동이 없음. 부상 부위를 줄이거나 다른 조건으로 시도해줘.");
    return;
  }
  
  const estimateTime = (ex, customSets, customReps) => {
    const sets = customSets || ex.sets[intensity][0];
    const reps = customReps || ex.sets[intensity][1];
    let repTime;
    if (reps.includes("초")) repTime = parseInt(reps);
    else if (reps.includes("분")) repTime = parseInt(reps) * 60;
    else repTime = parseInt(reps) * 3;
    return (repTime * sets) + (ex.rest * (sets - 1));
  };
  
  // 운동 종류 분리
  let longCardios = candidates.filter(isLongCardio);
  let shortExercises = candidates.filter(ex => !isLongCardio(ex));
  
  let selected = [];
  let totalSec = 0;
  
  // === 분기: 유산소 only + 단일 종목 길게 ===
  const onlyCardio = state.types.size === 1 && state.types.has('유산소');
  
  if (onlyCardio && state.cardioStyle === 'long' && longCardios.length > 0) {
    // 유산소 1개를 시간 통째로
    const cardio = longCardios[Math.floor(Math.random() * longCardios.length)];
    const cardioMinutes = parseInt(state.duration);
    selected.push({ 
      ...cardio, 
      currentSets: 1, 
      currentReps: cardioMinutes + "분", 
      estSec: cardioMinutes * 60 
    });
    totalSec = cardioMinutes * 60;
  } else if (state.cardioStyle === 'long' && !onlyCardio) {
    // === 단일 종목 길게 + 여러 운동 종류 선택한 경우 ===
    // 운동 3~5개를 골라서 각각 길게 수행
    
    const durationMin = parseInt(state.duration);
    
    // 운동 개수 결정
    let exerciseCount;
    if (durationMin <= 30) exerciseCount = 3;
    else if (durationMin <= 45) exerciseCount = 4;
    else if (durationMin <= 60) exerciseCount = 4;
    else exerciseCount = 5;
    
    // 각 운동당 시간
    const minutesPerExercise = Math.floor(durationMin / exerciseCount);
    
    // 후보 풀에서 정확히 exerciseCount개만 뽑음
    let longPool = [...candidates];
    longPool.sort(() => Math.random() - 0.5);
    const picked = longPool.slice(0, exerciseCount);
    
    // 각 운동마다 minutesPerExercise 분량으로 변환
    picked.forEach((ex, idx) => {
      if (isLongCardio(ex)) {
        selected.push({
          ...ex,
          currentSets: 1,
          currentReps: minutesPerExercise + "분",
          estSec: minutesPerExercise * 60
        });
        totalSec += minutesPerExercise * 60;
      } else {
        const [defaultSets, defaultReps] = ex.sets[intensity];
        let repTime;
        if (defaultReps.includes("초")) repTime = parseInt(defaultReps);
        else if (defaultReps.includes("분")) repTime = parseInt(defaultReps) * 60;
        else repTime = parseInt(defaultReps) * 3;
        
        const timePerSet = repTime + ex.rest;
        const exTargetSec = minutesPerExercise * 60;
        const setsNeeded = Math.max(2, Math.round(exTargetSec / timePerSet));
        const estSec = (repTime * setsNeeded) + (ex.rest * (setsNeeded - 1));
        
        selected.push({
          ...ex,
          currentSets: setsNeeded,
          currentReps: defaultReps,
          estSec: estSec
        });
        totalSec += estSec;
      }
    });
    
    // 남는 시간은 첫 운동에 흡수
    const remainingSec = (durationMin * 60) - totalSec;
    if (Math.abs(remainingSec) > 30 && selected.length > 0) {
      const first = selected[0];
      if (isLongCardio(first)) {
        const newMin = parseInt(first.currentReps) + Math.round(remainingSec / 60);
        first.currentReps = newMin + "분";
        first.estSec = newMin * 60;
        totalSec = durationMin * 60;
      }
    }
  } else {
    // === 일반 케이스 ===
    // HIIT 스타일 (long이 아닌 경우만 여기로 옴)
    
    let pool = [...shortExercises];
    
    // HIIT 스타일: 시간 단일 유산소를 짧게 (각 1.5분) 잘라서 풀에 추가
    // HIIT는 짧고 강하게 여러 운동을 도는 게 핵심
    if (state.cardioStyle === 'hiit') {
      longCardios.forEach(cardio => {
        pool.push({ 
          ...cardio, 
          _customSets: 1,
          _customReps: "90초"
        });
      });
    }
    
    pool.sort(() => Math.random() - 0.5);
    
    // 운동 개수 목표: HIIT는 6개 기본 (시간 길면 약간 늘림)
    // 30분=6개, 45분=7개, 60분=8개, 90분=10개
    const targetCount = state.cardioStyle === 'hiit' 
      ? (parseInt(state.duration) <= 30 ? 6 
         : parseInt(state.duration) <= 45 ? 7
         : parseInt(state.duration) <= 60 ? 8 
         : 10)
      : Math.max(4, Math.floor(parseInt(state.duration) / 8));
    
    // 이미 선택된 운동 추적
    const usedNames = new Set(selected.map(s => s.name));
    
    // HIIT 운동 변환 함수: 세트 1-2개, 휴식 20초로 짧게
    const toHiitVersion = (ex, customSets, customReps) => {
      if (state.cardioStyle !== 'hiit') {
        return { sets: customSets || ex.sets[intensity][0], reps: customReps || ex.sets[intensity][1], rest: ex.rest };
      }
      // HIIT 변환: 세트 1-2개, 휴식 20초
      const defaultReps = customReps || ex.sets[intensity][1];
      // 초 단위 운동은 30-45초로 통일, 회 단위는 절반으로
      let hiitReps = defaultReps;
      if (defaultReps.includes("초")) {
        hiitReps = "30초";
      } else if (defaultReps.includes("회")) {
        // 절반으로 (최소 6회)
        const num = parseInt(defaultReps);
        hiitReps = Math.max(6, Math.floor(num / 2)) + "회";
      } else if (defaultReps.includes("분")) {
        hiitReps = customReps || "90초";
      }
      return { sets: customSets || 1, reps: hiitReps, rest: 20 };
    };
    
    // 시간 추정 (HIIT 변환 적용)
    const estimateHiitTime = (ex, customSets, customReps) => {
      const v = toHiitVersion(ex, customSets, customReps);
      let repTime;
      if (v.reps.includes("초")) repTime = parseInt(v.reps);
      else if (v.reps.includes("분")) repTime = parseInt(v.reps) * 60;
      else repTime = parseInt(v.reps) * 3;
      return (repTime * v.sets) + (v.rest * (v.sets - 1));
    };
    
    // 1차: 풀에서 운동 추가 (정확히 targetCount까지만)
    for (const ex of pool) {
      if (selected.length >= targetCount) break; // targetCount 도달하면 무조건 중단
      if (usedNames.has(ex.name)) continue;
      
      const customSets = ex._customSets;
      const customReps = ex._customReps;
      const t = estimateHiitTime(ex, customSets, customReps);
      
      if (totalSec + t <= targetSec + 60) {
        const v = toHiitVersion(ex, customSets, customReps);
        selected.push({ 
          ...ex, 
          currentSets: v.sets, 
          currentReps: v.reps, 
          rest: v.rest,
          estSec: t 
        });
        totalSec += t;
        usedNames.add(ex.name);
      }
    }
    
    // 2차: 시간이 부족하면 세트 늘려서 채움 (운동이 충분히 있을 때)
    if (totalSec < targetSec * 0.9 && selected.length >= 3) {
      let safety = 0;
      while (totalSec < targetSec * 0.95 && safety < 80) {
        safety++;
        let added = false;
        
        const sortable = [...selected].sort((a, b) => a.estSec - b.estSec);
        for (const item of sortable) {
          if (item.currentSets >= 10) continue;
          
          const reps = item.currentReps;
          let repTime;
          if (reps.includes("초")) repTime = parseInt(reps);
          else if (reps.includes("분")) repTime = parseInt(reps) * 60;
          else repTime = parseInt(reps) * 3;
          const addTime = repTime + item.rest;
          
          if (totalSec + addTime <= targetSec + 60) {
            const original = selected.find(s => s.name === item.name);
            original.currentSets += 1;
            original.estSec += addTime;
            totalSec += addTime;
            added = true;
            if (totalSec >= targetSec * 0.95) break;
          }
        }
        if (!added) break;
      }
    }
    
    // 3차: 운동 종류가 매우 적을 때 (1~2개) 세트 한도 풀어서라도 채우기
    if (totalSec < targetSec * 0.85 && selected.length > 0 && selected.length < 3) {
      let safety = 0;
      while (totalSec < targetSec * 0.9 && safety < 100) {
        safety++;
        let added = false;
        
        for (const item of selected) {
          // 한도 풀음 (운동이 너무 적을 때는 어쩔 수 없이 세트 많이)
          if (item.currentSets >= 12) continue;
          
          const reps = item.currentReps;
          let repTime;
          if (reps.includes("초")) repTime = parseInt(reps);
          else if (reps.includes("분")) repTime = parseInt(reps) * 60;
          else repTime = parseInt(reps) * 3;
          const addTime = repTime + item.rest;
          
          if (totalSec + addTime <= targetSec + 60) {
            item.currentSets += 1;
            item.estSec += addTime;
            totalSec += addTime;
            added = true;
            if (totalSec >= targetSec * 0.9) break;
          }
        }
        if (!added) break;
      }
    }
    
    // 4차: 최소 운동 개수 보장 (운동 수가 부족할 때만)
    if (selected.length < targetCount) {
      const reshuffled = [...pool].sort(() => Math.random() - 0.5);
      for (const ex of reshuffled) {
        if (selected.length >= targetCount) break;
        if (usedNames.has(ex.name)) continue;
        
        const customSets = ex._customSets;
        const customReps = ex._customReps;
        const t = estimateHiitTime(ex, customSets, customReps);
        const v = toHiitVersion(ex, customSets, customReps);
        selected.push({ 
          ...ex, 
          currentSets: v.sets, 
          currentReps: v.reps, 
          rest: v.rest,
          estSec: t 
        });
        totalSec += t;
        usedNames.add(ex.name);
      }
    }
    
    // 5차: 그래도 시간이 많이 부족하면 사용자에게 안내
    if (totalSec < targetSec * 0.7) {
      placeNote = (placeNote ? placeNote + " · " : "") + 
        `조건에 맞는 운동이 적어 ${Math.round(totalSec/60)}분으로 구성됨. 조건을 완화하면 더 채워짐`;
    }
  }
  
  if (selected.length === 0) {
    alert("운동을 구성할 수 없음. 조건을 완화해줘.");
    return;
  }
  
  // ===== 운동 순서 정렬 =====
  // 1. 가벼운 유산소 (워밍업) - 점핑잭, 제자리 뛰기, 걷기 등
  // 2. 메인 운동 - 근력, 무산소, 강한 유산소
  // 3. 스트레칭 (마무리)
  const warmupExercises = ['점핑잭', '제자리 뛰기', '걷기', '하이니', '사이드 스텝', '스킵 (러닝 동작)'];
  
  const getOrderPriority = (ex) => {
    // 스트레칭은 무조건 마지막
    if (ex.type === '스트레칭') return 3;
    // 워밍업용 가벼운 유산소
    if (warmupExercises.includes(ex.name)) return 1;
    // 나머지 메인 운동
    return 2;
  };
  
  selected.sort((a, b) => {
    const pa = getOrderPriority(a);
    const pb = getOrderPriority(b);
    return pa - pb;
  });
  
  let totalCal = 0;
  if (state.weight) {
    selected.forEach(ex => {
      totalCal += ex.met * state.weight * (ex.estSec / 3600);
    });
  }
  
  document.getElementById('total-time').textContent = Math.round(totalSec / 60) + "분";
  document.getElementById('total-count').textContent = selected.length + "개";
  document.getElementById('total-cal').textContent = state.weight ? Math.round(totalCal) + "kcal" : "—";
  
  const styleLabel = state.cardioStyle === 'long' ? '단일 종목 길게' : 'HIIT 스타일';
  document.getElementById('intensity-badge').textContent = `${intensityLabel[intensity]} · ${styleLabel}`;
  
  const excludedEl = document.getElementById('excluded');
  let noteMsg = "";
  if (excluded.length > 0) {
    noteMsg += `부상 회피: ${excluded.length}개 운동 제외됨 (${excluded.slice(0,3).join(", ")}${excluded.length > 3 ? " 등" : ""})`;
  }
  if (placeNote) {
    noteMsg += (noteMsg ? " · " : "") + placeNote;
  }
  if (noteMsg) {
    excludedEl.style.display = "block";
    excludedEl.textContent = noteMsg;
  } else {
    excludedEl.style.display = "none";
  }
  
  const list = document.getElementById('list');
  list.innerHTML = selected.map((ex, i) => `
    <div class="exercise-card">
      <div class="exercise-main" data-idx="${i}">
        <div class="ex-num">${String(i+1).padStart(2,'0')}</div>
        <div class="ex-info">
          <div class="ex-name">${ex.name}</div>
          <div class="ex-meta">
            <span class="ex-tag">${ex.type}</span>
            <span class="ex-tag">${ex.part}</span>
            <span class="ex-tag level-${ex.level || 2}">${['', '초급', '중급', '고급'][ex.level || 2]}</span>
          </div>
          <div class="ex-toggle">▼ 자세히 보기</div>
        </div>
        <div class="ex-sets">
          ${ex.currentSets} × ${ex.currentReps}
          <div class="ex-rest">${ex.rest > 0 ? '휴식 ' + ex.rest + '초' : '연속 수행'}</div>
        </div>
      </div>
      <div class="exercise-detail">
        <div class="detail-inner">
          <div class="detail-section">
            <div class="detail-title">수행 방법</div>
            <div class="detail-text">${ex.how}</div>
          </div>
          <div class="detail-section">
            <div class="detail-title">주의 사항</div>
            <div class="detail-warn">${ex.tips}</div>
          </div>
          ${ex.risk.length > 0 ? `
          <div class="detail-section">
            <div class="detail-title">위험 부위</div>
            <div class="detail-text">${ex.risk.map(r => `<span class="ex-tag">${r}</span>`).join('')}</div>
          </div>` : ''}
          <div class="detail-section">
            <div class="detail-title">동작 미리보기</div>
            ${animations[ex.name] ? `
              <div class="animation-box">${animations[ex.name]}</div>
            ` : ''}
            <a class="video-btn" href="https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name + ' 운동 방법')}" target="_blank" rel="noopener" style="margin-top: ${animations[ex.name] ? '10px' : '4px'}">
              ▶ 유튜브에서 ${ex.name} 영상 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.exercise-main').forEach(main => {
    main.addEventListener('click', () => {
      const detail = main.nextElementSibling;
      const toggle = main.querySelector('.ex-toggle');
      detail.classList.toggle('open');
      toggle.textContent = detail.classList.contains('open') ? '▲ 접기' : '▼ 자세히 보기';
    });
  });
  
  document.getElementById('result').classList.add('show');
  document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  // 저장 기능을 위해 현재 루틴 기억
  window.lastGeneratedRoutine = selected;
}

document.getElementById('generate').addEventListener('click', generateRoutine);
document.getElementById('regenerate').addEventListener('click', generateRoutine);

// ===== 초기화 함수 =====
function resetAll(scrollToTop = true) {
  // state 초기화
  state.height = null;
  state.weight = null;
  state.age = null;
  state.gender = null;
  state.experience = null;
  state.history.clear();
  state.types.clear();
  state.cardioStyle = null;
  state.duration = null;
  state.place = null;
  state.injuries.clear();
  state.customs = { history: "", types: "", place: "", injuries: "" };
  
  // 입력 필드 초기화
  ['height', 'weight', 'age', 'gender', 'duration-custom',
   'history-custom', 'types-custom', 'place-custom', 'injuries-custom'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  
  // 모든 chip 비활성화
  document.querySelectorAll('.chip.active').forEach(c => c.classList.remove('active'));
  
  // 결과 화면 숨김
  document.getElementById('result').classList.remove('show');
  
  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

document.getElementById('reset').addEventListener('click', () => {
  if (confirm("모든 입력을 초기화할까?")) {
    resetAll();
  }
});

document.getElementById('restart').addEventListener('click', () => {
  resetAll();
});

// ===== 루틴 저장 기능 =====
let currentRoutine = null; // 현재 표시 중인 루틴 (저장용)

// 결과 생성 시 currentRoutine에 저장하기 위한 wrapper
const originalGenerate = generateRoutine;
window.lastGeneratedRoutine = null;

function saveCurrentRoutine() {
  if (!window.lastGeneratedRoutine) {
    alert("저장할 루틴이 없음. 먼저 루틴을 생성해줘.");
    return;
  }
  
  const routine = {
    id: Date.now(),
    date: new Date().toISOString(),
    style: state.cardioStyle,
    duration: state.duration,
    place: state.place || state.customs.place,
    types: [...state.types],
    intensity: state.experience,
    exercises: window.lastGeneratedRoutine.map(ex => ({
      name: ex.name,
      type: ex.type,
      part: ex.part,
      sets: ex.currentSets,
      reps: ex.currentReps,
      rest: ex.rest
    }))
  };
  
  try {
    const existing = JSON.parse(localStorage.getItem('saved_routines') || '[]');
    existing.unshift(routine); // 최신이 위로
    // 최대 10개까지만 저장
    if (existing.length > 10) existing.length = 10;
    localStorage.setItem('saved_routines', JSON.stringify(existing));
    alert("루틴 저장 완료! 하단 '저장된 루틴' 섹션에서 확인 가능");
    renderSavedRoutines();
  } catch (e) {
    alert("저장 실패: " + e.message);
  }
}

function loadSavedRoutines() {
  try {
    return JSON.parse(localStorage.getItem('saved_routines') || '[]');
  } catch (e) {
    return [];
  }
}

function deleteSavedRoutine(id) {
  if (!confirm("이 루틴을 삭제할까?")) return;
  try {
    const existing = loadSavedRoutines().filter(r => r.id !== id);
    localStorage.setItem('saved_routines', JSON.stringify(existing));
    renderSavedRoutines();
  } catch (e) {
    alert("삭제 실패: " + e.message);
  }
}

function applySavedRoutine(id) {
  const routine = loadSavedRoutines().find(r => r.id === id);
  if (!routine) return;
  
  // 결과 화면에 표시
  const totalSec = routine.exercises.reduce((sum, ex) => {
    let repTime;
    if (ex.reps.includes("초")) repTime = parseInt(ex.reps);
    else if (ex.reps.includes("분")) repTime = parseInt(ex.reps) * 60;
    else repTime = parseInt(ex.reps) * 3;
    return sum + (repTime * ex.sets) + (ex.rest * (ex.sets - 1));
  }, 0);
  
  document.getElementById('total-time').textContent = Math.round(totalSec / 60) + "분";
  document.getElementById('total-count').textContent = routine.exercises.length + "개";
  document.getElementById('total-cal').textContent = "—";
  document.getElementById('intensity-badge').textContent = `${intensityLabel[routine.intensity] || '저장된 루틴'} · ${routine.style === 'long' ? '단일 종목 길게' : 'HIIT 스타일'}`;
  document.getElementById('excluded').style.display = "none";
  
  const list = document.getElementById('list');
  list.innerHTML = routine.exercises.map((ex, i) => {
    const fullEx = exercises.find(e => e.name === ex.name);
    if (!fullEx) return '';
    return `
      <div class="exercise-card">
        <div class="exercise-main" data-idx="${i}">
          <div class="ex-num">${String(i+1).padStart(2,'0')}</div>
          <div class="ex-info">
            <div class="ex-name">${ex.name}</div>
            <div class="ex-meta">
              <span class="ex-tag">${ex.type}</span>
              <span class="ex-tag">${ex.part}</span>
              <span class="ex-tag level-${fullEx.level || 2}">${['', '초급', '중급', '고급'][fullEx.level || 2]}</span>
            </div>
            <div class="ex-toggle">▼ 자세히 보기</div>
          </div>
          <div class="ex-sets">
            ${ex.sets} × ${ex.reps}
            <div class="ex-rest">${ex.rest > 0 ? '휴식 ' + ex.rest + '초' : '연속 수행'}</div>
          </div>
        </div>
        <div class="exercise-detail">
          <div class="detail-inner">
            <div class="detail-section">
              <div class="detail-title">수행 방법</div>
              <div class="detail-text">${fullEx.how}</div>
            </div>
            <div class="detail-section">
              <div class="detail-title">주의 사항</div>
              <div class="detail-warn">${fullEx.tips}</div>
            </div>
            <div class="detail-section">
              <div class="detail-title">동작 미리보기</div>
              ${animations[ex.name] ? `<div class="animation-box">${animations[ex.name]}</div>` : ''}
              <a class="video-btn" href="https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name + ' 운동 방법')}" target="_blank" rel="noopener" style="margin-top: ${animations[ex.name] ? '10px' : '4px'}">
                ▶ 유튜브에서 ${ex.name} 영상 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  document.querySelectorAll('.exercise-main').forEach(main => {
    main.addEventListener('click', () => {
      const detail = main.nextElementSibling;
      const toggle = main.querySelector('.ex-toggle');
      detail.classList.toggle('open');
      toggle.textContent = detail.classList.contains('open') ? '▲ 접기' : '▼ 자세히 보기';
    });
  });
  
  // 현재 루틴으로 설정 (다시 저장 가능)
  window.lastGeneratedRoutine = routine.exercises.map(ex => ({
    ...exercises.find(e => e.name === ex.name),
    currentSets: ex.sets,
    currentReps: ex.reps,
    rest: ex.rest
  }));
  
  document.getElementById('result').classList.add('show');
  document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderSavedRoutines() {
  const saved = loadSavedRoutines();
  const section = document.getElementById('saved-section');
  const list = document.getElementById('saved-list');
  
  if (saved.length === 0) {
    section.style.display = "none";
    return;
  }
  
  section.style.display = "block";
  list.innerHTML = saved.map(r => {
    const date = new Date(r.date);
    const dateStr = `${date.getMonth()+1}/${date.getDate()} ${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}`;
    const summary = r.exercises.slice(0, 3).map(e => e.name).join(", ") + (r.exercises.length > 3 ? ` 외 ${r.exercises.length - 3}개` : "");
    return `
      <div class="saved-card">
        <div class="saved-info">
          <div class="saved-date">${dateStr}</div>
          <div class="saved-meta">${r.duration}분 · ${r.place} · ${r.style === 'long' ? '길게' : 'HIIT'} · ${r.exercises.length}개</div>
          <div class="saved-list-summary">${summary}</div>
        </div>
        <div class="saved-actions">
          <button class="saved-btn" data-action="apply" data-id="${r.id}">불러오기</button>
          <button class="saved-btn delete" data-action="delete" data-id="${r.id}">삭제</button>
        </div>
      </div>
    `;
  }).join('');
  
  // 이벤트 위임으로 핸들러 등록
  list.querySelectorAll('.saved-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = btn.dataset.action;
      const id = parseInt(btn.dataset.id);
      if (action === 'apply') applySavedRoutine(id);
      else if (action === 'delete') deleteSavedRoutine(id);
    });
  });
}

document.getElementById('save-routine').addEventListener('click', saveCurrentRoutine);

// ===== 타이머 기능 =====
let timerState = {
  routine: [],
  currentExIdx: 0,
  currentSet: 1,
  isResting: false,
  remainingSec: 0,
  totalSec: 0,
  interval: null,
  isPaused: false,
};

function parseTimeToSeconds(reps) {
  if (reps.includes("초")) return parseInt(reps);
  if (reps.includes("분")) return parseInt(reps) * 60;
  // 회 단위는 평균 3초 가정
  return parseInt(reps) * 3;
}

function startTimer() {
  if (!window.lastGeneratedRoutine || window.lastGeneratedRoutine.length === 0) {
    alert("타이머를 시작할 루틴이 없음.");
    return;
  }
  
  timerState.routine = window.lastGeneratedRoutine;
  timerState.currentExIdx = 0;
  timerState.currentSet = 1;
  timerState.isResting = false;
  timerState.isPaused = false;
  
  startCurrentPhase();
  document.getElementById('timer-modal').classList.add('show');
}

function startCurrentPhase() {
  const ex = timerState.routine[timerState.currentExIdx];
  if (!ex) {
    // 모든 운동 완료
    finishTimer();
    return;
  }
  
  if (timerState.isResting) {
    // 휴식
    timerState.remainingSec = ex.rest;
    timerState.totalSec = ex.rest;
    document.getElementById('timer-phase').textContent = "휴식";
    document.getElementById('timer-phase').classList.add('rest');
    document.getElementById('timer-display').classList.add('rest');
  } else {
    // 운동
    timerState.remainingSec = parseTimeToSeconds(ex.currentReps);
    timerState.totalSec = timerState.remainingSec;
    document.getElementById('timer-phase').textContent = "운동";
    document.getElementById('timer-phase').classList.remove('rest');
    document.getElementById('timer-display').classList.remove('rest');
  }
  
  document.getElementById('timer-exercise').textContent = ex.name;
  document.getElementById('timer-set').textContent = `${timerState.currentSet} / ${ex.currentSets} 세트${timerState.isResting ? ' · 휴식 중' : ''}`;
  
  updateTimerDisplay();
  
  // 기존 인터벌 정리
  if (timerState.interval) clearInterval(timerState.interval);
  timerState.interval = setInterval(tick, 1000);
}

function tick() {
  if (timerState.isPaused) return;
  
  timerState.remainingSec--;
  updateTimerDisplay();
  
  if (timerState.remainingSec <= 0) {
    // 비프음 대신 짧은 진동 효과 (모바일)
    if (navigator.vibrate) navigator.vibrate(200);
    nextPhase();
  }
}

function updateTimerDisplay() {
  const min = Math.floor(timerState.remainingSec / 60);
  const sec = timerState.remainingSec % 60;
  document.getElementById('timer-display').textContent = 
    `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  
  const pct = timerState.totalSec > 0 ? ((timerState.totalSec - timerState.remainingSec) / timerState.totalSec) * 100 : 0;
  document.getElementById('timer-progress-bar').style.width = pct + "%";
}

function nextPhase() {
  const ex = timerState.routine[timerState.currentExIdx];
  
  if (timerState.isResting) {
    // 휴식 끝 → 다음 세트 운동 시작
    timerState.currentSet++;
    timerState.isResting = false;
    startCurrentPhase();
  } else {
    // 운동 끝
    if (timerState.currentSet < ex.currentSets) {
      // 휴식 시작
      timerState.isResting = true;
      startCurrentPhase();
    } else {
      // 모든 세트 완료 → 다음 운동
      timerState.currentExIdx++;
      timerState.currentSet = 1;
      timerState.isResting = false;
      
      if (timerState.currentExIdx >= timerState.routine.length) {
        finishTimer();
      } else {
        startCurrentPhase();
      }
    }
  }
}

function finishTimer() {
  clearInterval(timerState.interval);
  document.getElementById('timer-phase').textContent = "완료!";
  document.getElementById('timer-exercise').textContent = "수고했어";
  document.getElementById('timer-set').textContent = "모든 운동을 끝냈음";
  document.getElementById('timer-display').textContent = "DONE";
  document.getElementById('timer-display').classList.add('done');
  document.getElementById('timer-progress-bar').style.width = "100%";
  if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 400]);
}

function closeTimer() {
  if (timerState.interval) clearInterval(timerState.interval);
  document.getElementById('timer-modal').classList.remove('show');
  document.getElementById('timer-display').classList.remove('rest', 'done');
  document.getElementById('timer-phase').classList.remove('rest');
}

function togglePause() {
  timerState.isPaused = !timerState.isPaused;
  document.getElementById('timer-pause').textContent = timerState.isPaused ? "재개" : "일시정지";
}

function skipPhase() {
  if (timerState.interval) clearInterval(timerState.interval);
  nextPhase();
}

document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('timer-close').addEventListener('click', closeTimer);
document.getElementById('timer-pause').addEventListener('click', togglePause);
document.getElementById('timer-skip').addEventListener('click', skipPhase);

// 페이지 로드 시 저장된 루틴 표시
renderSavedRoutines();

