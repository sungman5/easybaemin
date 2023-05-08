export const basic = [
    {
        id: 0,
        isTutorial: false,
        title: '쉬운 배달앱 사용법',
        tutoContents: [
            {
                id: '1',
                desc: '플레이 스토어를 연다.',
                img: '',
                alt: '',
            },
        ]
    },
    {
        id: 1,
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
        id: 2,
        isTutorial: true,
        title: '배달앱 설치하기',
        tutoContents: [
            {
                id: '1',
                desc: '<p>플레이 스토어를 연다.</p>',
                img: '/assets/basic_imgs/b-3-1.jpg',
                alt: '',
            },
            {
                id: '2',
                desc: '<p>검색창을 찾는다.</p>',
                img: '/assets/basic_imgs/b-3-2.jpg',
                alt: '',
            },
            {
                id: '3',
                desc: '<p>배달의 민족을 입력하고 돋보기를 누른다.</p>',
                img: '/assets/basic_imgs/b-3-3.jpg',
                alt: '',
            },
            {
                id: '4',
                desc: '<p>설치를 누른다.</p>',
                img: '/assets/basic_imgs/b-3-4.jpg',
                alt: '',
            },
            {
                id: '5',
                desc: '<p>끝!</p>',
                img: '/assets/basic_imgs/b-3-5.jpg',
                alt: '',
            },
        ],
        moreInfo: ``,
    },

    {
        id: 3,
        isTutorial: true,
        title: '주소 설정하기',
        tutoContents: [
            {
                id: '1',
                desc: '<p>배달앱을 연다.</p>',
                img: '/assets/basic_imgs/b-4-1.jpg',
                alt: '',
            },
            {
                id: '2',
                desc: '<p>위치기반 서비스 동의에 체크한다.<br className="md:hidden"> 마케팅 정보 알림에 동의하면 체크하고<br className="md:hidden"> 시작하기를 누른다.</p>',
                img: '/assets/basic_imgs/b-4-2.jpg',
                alt: '',
            },
            {
                id: '3',
                desc: '<p>배달받을 주소를검색한다.</p><p className="text-sm font-medium text-gray-400 md:text-lg">&#96;서울시 중구 소소로 123, 101호&#96;면, 소소로 123만 입력한다.</p>',
                img: '/assets/basic_imgs/b-4-3.jpg',
                alt: '',
            },
            {
                id: '4',
                desc: '<p>상세 주소를 입력하고 완료를 누른다.</p><p className="text-sm font-medium text-center text-gray-400 md:text-lg">상세주소: 건물 이름이나 동, 호 등 주소의 뒷부분</p>',
                img: '/assets/basic_imgs/b-4-4.jpg',
                alt: '',
            },
            {
                id: '5',
                desc: '<p>끝!</p>',
                img: '/assets/basic_imgs/b-4-5.jpg',
                alt: '',
            },
        ],
        moreInfo: ``,
    },
    {
        id: 4,
        isTutorial: true,
        title: '회원가입 하기',
        tutoContents: [
            {
                id: '1',
                desc: '<p>첫 화면에서 <img className="inline w-6 -translate-y-0.5" src="/assets/basic_imgs/my-baemin-icon.png" alt="My배민">&nbsp;를 눌러<br><span className="font-hanna text-BMprimary">My배민</span>으로 들어간다.</p>',
                img: '/assets/basic_imgs/b-5-1.jpg',
                alt: '',
            },
            {
                id: '2',
                desc: '<p><span className="font-hanna text-BMprimary">로그인해주세요</span>를 누른다.</p>',
                img: '/assets/basic_imgs/b-5-2.jpg',
                alt: '',
            },
            {
                id: '3',
                desc: '<p><span className="font-hanna text-BMprimary">이메일 회원가입</span>을 누른다.</p> <p className="caption lg:caption-lg">페이스북, 네이버, 애플 아이디와 앱이 있다면<br/> 더 빨리 가입할 수 있다.</p>',
                img: '/assets/basic_imgs/b-5-3.jpg',
                alt: '',
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
                alt: '',
            },
            {
                id: '5',
                desc: '<p>이름, 생년월일, 휴대전화 번호를 쓰고<br> <span className="font-hanna text-BMprimary">인증번호 요청</span>을 누른다.</p> <p className="text-sm font-medium text-center text-gray-400">인증번호: 실제로 사용하는 전화인지 확인하는 숫자. <br>문자로 받는다.</p>',
                img: '/assets/basic_imgs/b-5-5.jpg',
                alt: '',
            },
            {
                id: '6',
                desc: '<p>문자로 온 인증번호 4자리를 입력하고<br><span className="font-hanna text-BMprimary">확인</span>을 누른다.</p>',
                img: '/assets/basic_imgs/b-5-6.jpg',
                alt: '',
            },
            {
                id: '7',
                desc: `<p>이메일 주소를 입력하고 <span className="font-hanna text-BMprimary">중복확인</span>을 누른다.</p> 
                <p className="text-sm font-medium text-center text-gray-400"">회원가입을 하려면 이메일 주소가 있어야 한다.</p>`,
                img: '/assets/basic_imgs/b-5-7.jpg',
                alt: '',
            },
            {
                id: '8',
                desc: '<p>닉네임, 비밀번호, 생년월일을 입력하고<br> 완료를 누른다.</p> <p className="text-sm font-medium text-gray-400">비밀번호는 10자보다 길게 만든다. 영어, 숫자, 특수문자 중 2가지 종류를 섞는다.</p>',
                img: '/assets/basic_imgs/b-5-8.jpg',
                alt: '',
            },
            {
                id: '9',
                desc: `<p>끝!</p>`,
                img: '/assets/basic_imgs/b-5-9.jpg',
                alt: '',
            },
        ],
        moreInfo: ``,
    },
    {
        id: 5,
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