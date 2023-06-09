export const advanced = [
    {
        id: 0,
        title: '음식을 빨리 배달 받고 싶어!',
        cover_img_url: '/assets/advanced_imgs/adv_id_0.jpg',
        alt: '두 명의 사람이 식탁에 앉아 배고파한다. 또 다른 사람이 급한 표정으로 배달앱을 보며 빨리 배달 오는 메뉴가 있는지 찾아보고 있다. ',
        desc:
        {
            title: '배민1',
            icon: '/assets/advanced_imgs/adv_icon_one.png',
            icon_alt: '배민1 아이콘',
            body: [
                { id: 1, item: '배민1(배민원)은 일반 배달보다 빠른 배달입니다.' },
                { id: 2, item: '일반 배달은 여러 집을 다니기 때문에 시간이 오래 걸립니다.' },
                { id: 3, item: '하지만 배민1은 한 집만 빠르게 배달합니다.' },
                { id: 4, item: '빠르게 음식을 먹고 싶을 때 배민1을 사용해보세요.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해봐요!',
            body: [
                { id: 1, item: '친구들이 놀러왔는데 음식이 없어서 빨리 배달을 시켜야 할 때' },
                { id: 2, item: '배가 너무 고파서 빨리 오는 음식을 먹고 싶을 때' },
                { id: 3, item: '방금 만든 음식을 가장 맛있는 상태로 먹고 싶을 때' },
            ]
        },
        tutorial_title: '배민1 이렇게 사용해보세요!',
        content: [
            {
                id: 1,
                img: '/assets/advanced_imgs/adv_id_0_1.jpg',
                desc: `배달의민족 첫 화면에서 배민1을 누른다.`,
                alt: '배달의민족의 첫 화면이다. 손가락 모양의 아이콘이 배민원 버튼을 가리키고 있다.',
            },
            {
                id: 2,
                img: '/assets/advanced_imgs/adv_id_0_2.jpg',
                desc: `‘검색’을 누르고 <br/>원하는 음식이나 가게 이름을 검색한다.`,
                alt: '화면에 족발, 보쌈, 돈가스, 고기, 피자 등의 다양한 음식 모양 아이콘이 있다. 화면 왼쪽 하단에 있는 검색 버튼이 강조되어 있다.'
            },
            {
                id: 3,
                img: '/assets/advanced_imgs/adv_id_0_3.jpg',
                desc: `마음에 드는 가게를 선택해서 주문한다.`,
                alt: '화면에 여러 종류의 치킨 가게가 나와 있다.',
            },
        ]

    },
    {
        id: 1,
        title: '배달팁이 싼 곳에서 주문하고 싶어!',
        cover_img_url: '/assets/advanced_imgs/adv_id_1.jpg',
        alt: '한 사람이 스마트폰 화면으로 배달앱을 보면서 배달팁이 무료인 가게를 보고 좋아한다.',
        desc:
        {
            title: '배달팁 낮은 순',
            icon: null,
            icon_alt: '',
            body: [
                { id: 1, item: '배달팁 낮은 순은 배달팁이 싼 순서대로 검색 결과를 볼 수 있는 기능입니다.' },
                { id: 2, item: '배달팁이 무료인 곳부터 볼 수 있습니다.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해봐요!',
            body: [
                { id: 1, item: '배달팁을 아끼고 싶을 때' },
            ]
        },
        tutorial_title: '배달팁 낮은 순 <br/>이렇게 사용해보세요!',
        // tutorial_title: '배달팁 낮은 순 <span class="empahis">이렇게 사용해보세요!</span>',
        content: [
            {
                id: 1,
                img: '/assets/advanced_imgs/adv_id_1_1.jpg',
                desc: `배달의민족 첫 화면에서 <br/>먹고 싶은 음식을 검색한다.`,
                alt: '배달의민족의 첫 화면이다. 상단의 검색창에 샌드위치라고 검색하고 있다.',
            },
            {
                id: 2,
                img: '/assets/advanced_imgs/adv_id_1_2.jpg',
                desc: `검색 결과에서 ‘기본순’을 누른다.`,
                alt: '샌드위치로 검색한 결과 화면이다. 배달 버튼과 기본순 버튼이 강조되어 있다.'
            },
            {
                id: 3,
                img: '/assets/advanced_imgs/adv_id_1_3.jpg',
                desc: `‘배달팁 낮은 순’을 누르면 <br/>배달팁이 낮은 가게부터 볼 수 있다.`,
                alt: '기본순 버튼을 누른 결과 화면이다. 배달 빠른 순, 배달팁 낮은 순, 주문 많은 순, 별점 높은 순, 가까운 순, 찜 많은 순의 항목이 있고 손가락 모양 아이콘이 배달팁 낮은 순을 가리키고 있다.',
            },
            {
                id: 4,
                img: '/assets/advanced_imgs/adv_id_1_4.jpg',
                desc: `마음에 드는 가게를 선택해서 주문한다.`,
                alt: '화면에 배달팁 낮은 순으로 정렬된 가게 정보가 담겨 있다.',
            },
        ]

    },
    {
        id: 2,
        title: '음식을 포장해서 먹고 싶어!',
        cover_img_url: '/assets/advanced_imgs/adv_id_2.png',
        alt: '왼쪽에 스마트폰 화면이 크게 있다. 화면 속에는 지도 위에 음식 모양의 아이콘이 있다. 오른쪽에 한 사람이 포장하기 위해 피자 가게로 걸어가고 있다.',
        desc:
        {
            title: '포장',
            icon: '/assets/advanced_imgs/adv_icon_pack.png',
            icon_alt: '포장 아이콘',
            body: [
                { id: 1, item: '포장은 주문한 음식을 직접 가지러 가는 것입니다.' },
                { id: 2, item: '집 근처 포장할 수 있는 가게를 찾을 수 있습니다.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해봐요!',
            body: [
                { id: 1, item: '집 근처의 포장할 수 있는 가게가 궁금할 때' },
                { id: 2, item: '외출했다가 돌아오는 길에 음식을 포장하고 싶을 때' },
            ]
        },
        tutorial_title: '포장 이렇게 사용해보세요!',
        content: [
            {
                id: 1,
                img: '/assets/advanced_imgs/adv_id_2_1.jpg',
                desc: `배달의민족 첫 화면에서 포장을 누른다.`,
                alt: '배달의민족의 첫 화면이다. 손가락 모양의 아이콘이 포장 버튼을 가리키고 있다.',
            },
            {
                id: 2,
                img: '/assets/advanced_imgs/adv_id_2_2.jpg',
                desc: `지도가 나오고, 포장할 수 있는 가까운 가게가 <br/>음식 모양으로 표시된다.`,
                alt: '지도 위에 음식 모양 아이콘이 표시되어 있다.'
            },
            {
                id: 3,
                img: '/assets/advanced_imgs/adv_id_2_3.jpg',
                desc: `음식 모양을 누르면 가게 정보가 나온다.`,
                alt: '손가락 모양의 아이콘이 음식 모양 아이콘을 가리키고 있다.',
            },
            {
                id: 4,
                img: '/assets/advanced_imgs/adv_id_2_4.jpg',
                desc: `지도에서 가게를 더 찾아 볼 수 있다. <br/>마음에 드는 곳을 선택해서 주문한다.`,
                alt: '지도 위에 여러 가지 음식 모양의 아이콘이 표시되어 있다. 손가락 모양 아이콘이 목록보기 버튼을 가리키고 있다.',
            },
        ]

    },
    {
        id: 3,
        title: '1인분만 주문하고 싶어!',
        cover_img_url: '/assets/advanced_imgs/adv_id_3.jpg',
        alt: '한 사람이 TV에서 음식을 먹는 장면을 보며 배달앱을 켜서 1인분의 음식을 주문하려고 하고 있다.',
        desc:
        {
            title: '1인분',
            icon: '/assets/advanced_imgs/adv_icon_single.png',
            icon_alt: '1인분 아이콘',
            body: [
                { id: 1, item: '1인분의 음식을 주문할 수 있는 기능입니다.' },
                { id: 2, item: '최소주문금액이 적어서 음식 1개만 시켜도 배달해줍니다.' },
                { id: 3, item: '1인분만 먹고 싶을 때 사용해보세요.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해봐요!',
            body: [
                { id: 1, item: '혼자서 배달음식을 시켜먹어야 할 때' },
                { id: 2, item: '시켜먹는 음식의 양이 너무 많을 때' },
                { id: 3, item: '1인분, 한 그릇의 음식을 먹고 싶을 때' },
            ]
        },
        tutorial_title: '1인분 이렇게 사용해보세요!',
        content: [
            {
                id: 1,
                img: '/assets/advanced_imgs/adv_id_3_1.jpg',
                desc: `배달의민족 첫 화면에서 <br/>먹고 싶은 음식을 검색한다.`,
                alt: '배달의민족의 첫 화면이다. 상단의 검색창에 샌드위치라고 검색하고 있다.',
            },
            {
                id: 2,
                img: '/assets/advanced_imgs/adv_id_3_2.jpg',
                desc: `검색 결과에서 ‘1인분’을 누르면 <br/>1인분만 배달해주는 가게가 나온다.`,
                alt: '샌드위치로 검색한 결과 화면이다. 배달 버튼과 1인분 버튼이 강조되어 있다.'
            },
            {
                id: 3,
                img: '/assets/advanced_imgs/adv_id_3_3.jpg',
                desc: `마음에 드는 가게를 선택해서 주문한다.`,
                alt: '화면에 1인분 주문 가능한 가게 정보들만 담겨 있다.',
            },
        ]

    },
    {
        id: 4,
        title: '예전에 먹은 음식을 또 주문하고 싶어!',
        cover_img_url: '/assets/advanced_imgs/adv_id_4.jpg',
        alt: '한 사람이 예전에 친구와 먹었던 치킨맛을 떠올리며 배달앱의 주문 내역을 보며 예전에 주문했던 치킨집 이름과 메뉴를 확인하고 있다.',
        desc:
        {
            title: '주문 내역',
            icon: null,
            icon_alt: '',
            body: [
                { id: 1, item: '주문 내역을 보면 예전에 시켰던 곳을 확인할 수 있습니다.' },
                { id: 2, item: '언제 어떤 가게에서 어떤 음식을 시켰는지 볼 수 있습니다.' },
                { id: 3, item: '주문 내역을 보고 똑같은 메뉴를 시킬 수도 있고, 가게나 음식의 리뷰를 쓸 수도 있습니다.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해봐요!',
            body: [
                { id: 1, item: '예전에 먹었던 음식이 맛있어서 또 주문하고 싶을 때' },
                { id: 2, item: '주문했던 가게의 정보, 음식 가격을 알고 싶을 때' },
                { id: 3, item: '주문했던 음식의 리뷰를 쓰고 싶을 때' },
            ]
        },
        tutorial_title: '주문내역 이렇게 사용해보세요!',
        content: [
            {
                id: 1,
                img: '/assets/advanced_imgs/adv_id_4_1.jpg',
                desc: `배달의민족 첫 화면에서‘My배민’을 누른다.`,
                alt: '배달의민족의 첫 화면이다. 손가락 모양의 아이콘이 오른쪽 상단에 있는 마이배민 아이콘을 가리키고 있다. 마이배민 아이콘은 입맛 다시는 얼굴 모양이다.',
            },
            {
                id: 2,
                img: '/assets/advanced_imgs/adv_id_4_2.jpg',
                desc: `'주문내역'을 누른다.`,
                alt: '마이배민 화면이다. 손가락 모양 아이콘이 주문내역 버튼을 가리키고 있다.'
            },
            {
                id: 3,
                img: '/assets/advanced_imgs/adv_id_4_3.jpg',
                desc: `예전에 시켰던 가게와 메뉴 이름이 나온다. <br/>가게 이름을 누르면 가게 정보를 볼 수 있다.`,
                alt: '주문 내역이 소개되어 있다. 가게명과 음식명이 담겨 있다.',
            },
        ]

    },
    {
        id: 5,
        title: '싫어하는 음식은 빼달라고 하고 싶어!',
        cover_img_url: '/assets/advanced_imgs/adv_id_5.jpg',
        alt: '고객이 배달앱으로 주문하면서 땅콩 빼달라고 요청한다. 요리사는 요청사항을 보고 땅콩을 빼고 요리한다.',
        desc:
        {
            title: '가게 사장님께',
            icon: null,
            icon_alt: '',
            body: [
                { id: 1, item: '가게 사장님께 메시지를 보내서 원하는 것을 말하면 <br />사장님이 메시지를 보고 부탁을 들어줍니다.' },
                { id: 2, item: '필요한 것이 있다면 주문하기 전에 가게 사장님께 부탁해보세요.' },
                { id: 3, item: '<p className="text-sm caption-left">*들어주기 어려운 부탁은 사장님이 들어주지 못할 수도 있습니다.</p>' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해봐요!',
            body: [
                { id: 1, item: '알레르기가 있는 재료를 빼달라고 할 때' },
                { id: 2, item: '싫어하는 재료를 빼달라고 할 때' },
                { id: 3, item: '가게 사장님에게 부탁하고 싶은 것이 있을 때' },

            ]
        },
        tutorial_title: '가게 사장님께 <br/>이렇게 사용해보세요!',
        content: [
            {
                id: 1,
                img: '/assets/advanced_imgs/adv_id_5_1.jpg',
                desc: `주문하고 싶은 가게에 들어가 <br className="2xl:hidden"/>먹고 싶은 메뉴를 장바구니에 담는다.`,
                alt: '배달앱 화면에 샌드위치 가게명과 메뉴 정보가 담겨 있다.',
            },
            {
                id: 2,
                img: '/assets/advanced_imgs/adv_id_5_2.jpg',
                desc: `장바구니에 담긴 음식을 확인하고 <br className="2xl:hidden"/>‘배달 주문하기’를 누른다.`,
                alt: '장바구니 버튼을 누른 화면이다. 배달 주문하기 버튼이 강조되어 있다.'
            },
            {
                id: 3,
                img: '/assets/advanced_imgs/adv_id_5_3.jpg',
                desc: `아래로 내리면 ‘가게 사장님께’가 있다.<br className="2xl:hidden" /> 회색 빈칸에 원하는 것을 적고 결제한다.`,
                alt: '가게 사장님께 칸이 강조되어 있다. 칸 안에는 샌드위치에 오이 빼주세요라고 적혀 있다.',
            },
        ]

    },
    {
        id: 6,
        title: '생활에 필요한 물건도 배달 받고 싶어!',
        cover_img_url: '/assets/advanced_imgs/adv_id_6.jpg',
        alt: '싱크대에 설거지할 그릇과 접시가 가득 쌓여 있는데 세제가 떨어져서 배달의민족 비마트를 켜서 세제를 검색하고 있다.',
        desc:
        {
            title: 'B마트',
            icon: '/assets/advanced_imgs/adv_icon_bmart.png',
            icon_alt: 'B마트 아이콘',
            body: [
                { id: 1, item: 'B마트(비마트)는 생활에 필요한 물건 배달입니다.' },
                { id: 2, item: '음식 재료, 세제, 화장지 등 급하게 필요한 물건을 주문하고 배달 음식처럼 빠르게 받을 수 있습니다.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해봐요!',
            body: [
                { id: 1, item: '요리에 필요한 재료를 빠르게 배달 받고 싶을 때' },
                { id: 2, item: '세제, 화장지 등 생활용품이 급하게 필요할 때' },
                { id: 3, item: '과자, 음료수, 컵라면도 배달시켜 먹고 싶을 때' },
            ]
        },
        tutorial_title: 'B마트 이렇게 사용해보세요!',
        content: [
            {
                id: 1,
                img: '/assets/advanced_imgs/adv_id_6_1.jpg',
                desc: `배달의민족 첫 화면에서 B마트(비마트)를 누른다.`,
                alt: '배달의민족의 첫 화면이다. 손가락 모양의 아이콘이 비마트 버튼을 가리키고 있다.',
            },
            {
                id: 2,
                img: '/assets/advanced_imgs/adv_id_6_2.jpg',
                desc: `‘검색’을 누르고 필요한 물건을 검색한다.`,
                alt: '비마트 화면이다. 신상품, 인기제품, 신선제품, 밀키트, 우유, 건강, 분식, 아이스크림, 화장지, 빵, 과자, 세제, 뷰티, 음료 아이콘이 담겨 있으며, 손가락 모양의 아이콘이 검색 버튼을 가리키고 있다.'
            },
            {
                id: 3,
                img: '/assets/advanced_imgs/adv_id_6_3.jpg',
                desc: `사고 싶은 물건을 선택해서 장바구니에 담는다. 음식을 주문하는 것과 똑같이 주문한다.`,
                alt: '검색창에 세제를 검색하고 있다. 다양한 세제의 정보가 담겨 있다.',
            },
        ]

    },
    {
        id: 7,
        title: '할인 받아서 음식을 주문하고 싶어!',
        cover_img_url: '/assets/advanced_imgs/adv_id_7.jpg',
        alt: '',
        desc:
        {
            title: '쿠폰',
            icon: null,
            body: [
                { id: 1, item: '쿠폰이 있으면 주문할 때 할인받을 수 있습니다.' },
                { id: 2, item: '쿠폰을 주는 가게를 확인하고 주문해보세요.' },
                { id: 3, item: '쿠폰을 사용하면 음식을 더 싸게 먹을 수 있답니다.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해봐요!',
            body:
                [
                    { id: 1, item: '돈을 아끼고 싶을 때' },
                    { id: 2, item: '딱히 먹고 싶은 음식은 없고 싸게 먹고 싶을 때' },
                ]
        },
        tutorial_title: '쿠폰 이렇게 사용해보세요!',
        content: [
            {
                id: 1,
                img: '/assets/advanced_imgs/adv_id_7_1.jpg',
                desc: `배달의민족 첫 화면에서 먹고 싶은 음식을 검색한다.`,
                alt: '구글 플레이스토어 메인화면',
            },
            {
                id: 2,
                img: '/assets/advanced_imgs/adv_id_7_2.jpg',
                desc: `검색 결과에서 ‘쿠폰’을 누르면 쿠폰을 주는 가게를 볼 수 있다.`,
                alt: '플레이스토어 검색창이 강조된 메인화면'
            },
            {
                id: 3,
                img: '/assets/advanced_imgs/adv_id_7_3.jpg',
                desc: `마음에 드는 가게를 선택하고 누른다.`,
                alt: '배달의민족 텍스트를 입력하고 검색버튼을 누르는 이미지',
            },
            {
                id: 4,
                img: '/assets/advanced_imgs/adv_id_7_4.jpg',
                desc: `쿠폰 받기를 눌러서 필요한 쿠폰을 받고 음식을 주문한다.`,
                alt: '배달의민족 텍스트를 입력하고 검색버튼을 누르는 이미지',
            },
        ]

    },
]
