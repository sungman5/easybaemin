export const basic = [
    // {
    //     id: 0,
    //     isTutorial: false,
    //     title: '쉬운 배달앱 사용법',
    //     tutoContents: [
    //         {
    //             id: '1',
    //             desc: '플레이 스토어를 연다.',
    //             img: '',
    //             alt: '',
    //         },
    //     ]
    // },
    {
        id: 0,
        isTutorial: false,
        title: '배달앱 용어사전',
        tutoContents: [
            {
                id: '1',
                desc: '',
                img: '',
                alt: '',
            },
        ],
        moreInfo: ``,
    },
    {
        id: 1,
        isTutorial: true,
        title: '배달앱 설치하기',
        tutoContents: [
            {
                id: '1',
                desc: '<p>플레이 스토어를 연다.</p>',
                img: '/assets/basic_imgs/b-3-1.jpg',
                alt: '스마트폰 바탕화면에 구글 플레이스토어 앱 아이콘이 있다.',
            },
            {
                id: '2',
                desc: '<p>검색창을 찾는다.</p>',
                img: '/assets/basic_imgs/b-3-2.jpg',
                alt: '구글 플레이스토어 첫 화면, 화면 가장 위에 있는 검색창이 강조되어 있다.',
            },
            {
                id: '3',
                desc: '<p>배달의 민족을 입력하고 돋보기를 누른다.</p>',
                img: '/assets/basic_imgs/b-3-3.jpg',
                alt: '구글 플레이스토어 화면이다. 검색창에 배달의민족이 입력되어 있고, 키보드 위의 검색을 뜻하는 돋보기가 강조되어 있다.',
            },
            {
                id: '4',
                desc: '<p>설치를 누른다.</p>',
                img: '/assets/basic_imgs/b-3-4.jpg',
                alt: '플레이스토어 배달의민족 앱 상세 정보 화면이다. 상단 오른쪽에 설치 버튼이 있고 강조되어 있다.',
            },
            {
                id: '5',
                desc: '<p>끝!</p>',
                img: '/assets/basic_imgs/b-3-5.jpg',
                alt: '스마트폰 바탕화면이다. 배달의민족 앱이 설치되어 배달의민족 아이콘이 나타나 있다.',
            },
        ],
        moreInfo: ``,
    },

    {
        id: 2,
        isTutorial: true,
        title: '주소 설정하기',
        tutoContents: [
            {
                id: '1',
                desc: '<p>배달앱을 연다.</p>',
                img: '/assets/basic_imgs/b-4-1.jpg',
                alt: '스마트폰 바탕화면이다. 배달의민족 아이콘이 강조되어 있다.',
            },
            {
                id: '2',
                desc: '<p>위치기반 서비스 동의에 체크한다.<br className="md:hidden"> 마케팅 정보 알림에 동의하면 체크하고<br className="md:hidden"> 시작하기를 누른다.</p>',
                img: '/assets/basic_imgs/b-4-2.jpg',
                alt: '스마트폰 화면에 배달의민족을 처음 실행한 화면이다. 배달의민족 앱 이용약관 동의를 확인하는 페이지다. 위치 기반 서비스 약관 동의는 필수, 마케팅 정보 앱 푸시 알림 수신 동의는 선택 동의 항목이다. 위치 기반 서비스 약관 동의는 배달받기 위해 나의 위치 정보를 확인하는 것이다. 마케팅 정보 앱 푸시 알림 수신 동의는 배달앱의 더 많은 정보를 알림으로 알려주는 것이다.',
            },
            {
                id: '3',
                desc: '<p>배달받을 주소를검색한다.</p><p className="text-sm font-medium text-BMgray400 md:text-lg">&#96;서울시 중구 소소로 123, 101호&#96;면, 소소로 123만 입력한다.</p>',
                img: '/assets/basic_imgs/b-4-3.jpg',
                alt: '배달받을 주소를 입력하는 화면이다. 검색창에 문래북로116을 입력해서 검색하고 있다.',
            },
            {
                id: '4',
                desc: '<p>상세 주소를 입력하고 완료를 누른다.</p><p className="text-sm font-medium text-center text-BMgray400 md:text-lg">상세주소: 건물 이름이나 동, 호 등 주소의 뒷부분</p>',
                img: '/assets/basic_imgs/b-4-4.jpg',
                alt: '상세 주소를 입력하는 화면이다. 트리플렉스 1504호라고 입력하고 있다.',
            },
            {
                id: '5',
                desc: '<p>끝!</p>',
                img: '/assets/basic_imgs/b-4-5.jpg',
                alt: '배달의민족 첫 화면이다. 맨 위에 주소를 나타내는 창이 강조되어 있고, 방금 입력한 주소인 서울 문래북로 116이라고 쓰여 있다.',
            },
        ],
        moreInfo: ``,
    },
    {
        id: 3,
        isTutorial: true,
        title: '회원가입 하기',
        tutoContents: [
            {
                id: '1',
                desc: '<p>첫 화면에서 <img className="inline w-6 -translate-y-0.5" src="/assets/basic_imgs/my-baemin-icon.png" alt="My배민">&nbsp;를 눌러<br><span className="font-hanna text-BMprimary">My배민</span>으로 들어간다.</p>',
                img: '/assets/basic_imgs/b-5-1.jpg',
                alt: '배달의민족 첫 화면이다. 맨 위 오른쪽에 웃고 있는 마이 배민 아이콘이 강조되어 있다. 손가락 모양의 아이콘이 마이 배민 아이콘을 가리키고 있다..',
            },
            {
                id: '2',
                desc: '<p><span className="font-hanna text-BMprimary">로그인해주세요</span>를 누른다.</p>',
                img: '/assets/basic_imgs/b-5-2.jpg',
                alt: '마이 배민 페이지 화면이다. 위쪽에 로그인해주세요 버튼이 강조되어 있다. 손가락 모양의 아이콘이 로그인해주세요 버튼을 가리키고 있다.',
            },
            {
                id: '3',
                desc: '<p><span className="font-hanna text-BMprimary">이메일 회원가입</span>을 누른다.</p> <p className="caption lg:caption-lg">페이스북, 네이버, 애플 아이디와 앱이 있다면<br/> 더 빨리 가입할 수 있다.</p>',
                img: '/assets/basic_imgs/b-5-3.jpg',
                alt: '배달의민족에서 로그인하는 화면이다. 맨 아래 중앙에 아이디 찾기, 이메일 회원가입 버튼이 있고 손가락 모양의 아이콘이 이메일 회원가입을 가리키고 있다.',
            },
            {
                id: '4',
                desc:
                    `
                <p>동의하는 내용에 체크하고<br /><span className="text-BMprimary font-hanna">시작하기</span>를 누른다.</p>
                <div className="mb-8 text-sm">
                    <p className="py-2 text-left border-b"><b className="block">[필수]배달의민족 이용약관 동의</b>배달의민족 앱을 이용하는 규칙에 동의한다.</p>
                    <p className="py-2 border-b"><b className="block">[필수]전자금융거래 이용약관 동의</b>온라인으로 주문하는 서비스 이용 규칙에 동의한다.</p>
                    <p className="py-2 border-b"><b className="block">[필수]개인정보 수집 이용 동의</b>나에 대한 개인정보를 가져가 쓰는 것에 동의한다.</p>
                    <p className="py-2 border-b"><b className="block">[선택]개인정보 수집 이용 동의</b>나에 대한 개인정보를 다른 곳에 알려주는 것에 동의한다.</p>
                    <p className="py-2 border-b"><b className="block">[선택]마케팅정보 메일, SMS 수신동의</b>문자, 메일 등으로 광고를 주고 받는 것에 동의한다.</p>
                    <p className="py-2 mb-4 border-b"><b className="block">[선택]개인정보 제3자 제공 동의</b>나에 대한 개인정보를 다른 곳에 알려주는 것에 동의한다.</p>
                    <p className="font-medium text-BMprimary">[필수]를 확인하고 꼭 체크해야 배달의 민족을 사용할 수 있다.</p>
                    <p className="font-medium">[선택]을 확인하고 체크하고 싶으면 체크한다.</p>
                </div>                
                
                `,
                img: '/assets/basic_imgs/b-5-4.jpg',
                alt: '회원가입 첫 페이지에 회원가입을 위한 약관이 나타난 화면이다. 필수 배달의민족 이용약관 동의, 필수 전자금융거래 이용약관 동의, 필수 개인정보 수집 이용 동의, 선택 개인정보 수집 이용 동의, 선택 마케팅정보 메일, SMS 수신동의, 선택 개인정보 제3자 제공 동의가 순서대로 있다. 화면 맨 아래에 시작하기 버튼이 있고 손가락 모양의 아이콘이 버튼을 가리키고 있다.',
            },
            {
                id: '5',
                desc: '<p>이름, 생년월일, 휴대전화 번호를 쓰고<br> <span className="font-hanna text-BMprimary">인증번호 요청</span>을 누른다.</p> <p className="text-sm font-medium text-center text-BMgray400">인증번호: 실제로 사용하는 전화인지 확인하는 숫자. <br>문자로 받는다.</p>',
                img: '/assets/basic_imgs/b-5-5.jpg',
                alt: '회원가입을 위한 본인인증 화면이다. 화면 맨 아래에 휴대폰 인증하기 버튼이 있고 손가락 모양의 아이콘이 버튼을 가리키고 있다.',
            },
            {
                id: '6',
                desc: '<p>문자로 온 인증번호 4자리를 입력하고<br><span className="font-hanna text-BMprimary">확인</span>을 누른다.</p>',
                img: '/assets/basic_imgs/b-5-6.jpg',
                alt: '본인인증 화면이다. 이름, 내국인/외국인, 생년월일, 성별, 휴대전화 번호를 쓰는 빈칸이 있고, 가장 아래에 인증번호 요청 버튼이 있다. 손가락 모양의 아이콘이 인증번호 요청 버튼을 가리키고 있다. 화면 오른쪽 아래 메시지함에서는 인증번호를 알려주는 새로운 메시지가 와 있다.',
            },
            {
                id: '7',
                desc: `<p>이메일 주소를 입력하고 <span className="font-hanna text-BMprimary">중복확인</span>을 누른다.</p> 
                <p className="text-sm font-medium text-center text-BMgray400"">회원가입을 하려면 이메일 주소가 있어야 한다.</p>`,
                img: '/assets/basic_imgs/b-5-7.jpg',
                alt: '메시지함에 도착한 인증번호 6자리가 입력되어 있고, 손가락 모양의 아이콘이 확인 버튼을 가리키고 있다.',
            },
            {
                id: '8',
                desc: '<p>닉네임, 비밀번호, 생년월일을 입력하고<br> 완료를 누른다.</p> <p className="text-sm font-medium text-BMgray400">비밀번호는 10자보다 길게 만든다. 영어, 숫자, 특수문자 중 2가지 종류를 섞는다.</p>',
                img: '/assets/basic_imgs/b-5-8.jpg',
                alt: '회원가입 화면이다. 아이디로 사용할 이메일 주소를 입력하는 칸에 이메일이 입력되어 있다. 이메일 주소 오른쪽에는 중복확인 버튼이 있고 손가락 모양의 아이콘이 버튼을 가리키고 있다.',
            },
            {
                id: '9',
                desc: `<p>끝!</p>`,
                img: '/assets/basic_imgs/b-5-9.jpg',
                alt: '끝.',
            },
        ],
        moreInfo: ``,
    },
    {
        id: 4,
        isTutorial: false,
        title: '첫 화면 이해하기',
        tutoContents: [
            {
                id: '1',
                desc: '',
                img: '',
                alt: '',
            },
        ],
        moreInfo: ``,
    },
];