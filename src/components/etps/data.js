const etps = [
    {   id: 1,
        name: "Сбербанк",
        logo: 'logo_sber.svg',
        search: 'sberbankсбербанкаст',
        sections: [
            {
                name: "44 ФЗ",
                url: "https://login.sberbank-ast.ru/Login.aspx"
            },
            {
                name: '223 ФЗ',
                url: 'https://login.sberbank-ast.ru/Login.aspx'
            },
            {
                name: '178 ФЗ',
                url: "https://login.sberbank-ast.ru/Login.aspx"
            }
            ]

    },
    {   id: 2,
        name: "Ртс-тендер",
        logo: 'logo_rts.svg',
        search: 'rts-tenderртстендер',
        sections: [
            {
                name: "44 ФЗ",
                url: "https://app.rts-tender.ru/auth/sso/login/participant"
            },
            {
                name: '223 ФЗ',
                url: 'https://223.rts-tender.ru/supplier/sso/Login.aspx'
            },
            {
                name: '178 ФЗ',
                url: "https://it2-auth.rts-tender.ru/Account/Login"
            }
            ],
            passwords: [{
                name: 'Иванов Д.М.',
                section: [{
                    section: '178 ФЗ',
                    login: 'login',
                    passwords: ['pass1', 'pass2']
                },
            ]
            },
            {
                name: 'Петров В.В.',
                section: [{
                    section: '223 ФЗ',
                    login: 'login',
                    passwords: ['pass$', 'pass2$']
                },
                {
                    section: '178 ФЗ',
                    login: 'login',
                    passwords: ['pass$', 'pass2$']
                },
                {
                    section: '178 ФЗ',
                    login: 'login',
                    passwords: ['pass$', 'pass2$']
                }]
            }
            ]
    },
    {   id: 3,
        name: "РОСЭЛТОРГ",
        logo: 'logo_roseltorg.svg',
        search: 'росэлторгроселторгroseltorg',
        sections: [
            {
                name: "44 ФЗ",
                url: "https://etp.roseltorg.ru/authentication/login"
            },
            {
                name: '223 ФЗ',
                url: 'https://com.roseltorg.ru/?_ga=2.94791836.1468811499.1669651418-358442491.1669651418#auth/login'
            },
            {
                name: '178 ФЗ',
                url: "https://178fz.roseltorg.ru/#auth/login"
            }
            ],
        passwords: [{
            name: 'Ivanov В.В.',
            section: [{
                section: '223 ФЗ',
                login: 'login',
                passwords: ['pass', 'pass2']
                }
            ]
            },
            {
            name: 'Petrov Д.В.',
            section: [{
                section: '223 ФЗ',
                login: 'login2',
                passwords: ['pass', 'pass2']
                },
            ]
            }
        ]
    },
    {   id: 4,
        name: "Фабрикант",
        logo: 'logo_fabrikant.svg',
        search: 'fabrikantфабрикант',
        sections: [
            {
                name: "44 ФЗ",
                url: "https://etp-ets.ru/44/catalog/procedure"
            },
            {
                name: '223 ФЗ',
                url: 'https://etp-ets.ru/223/catalog/procedure'
            },
            {
                name: 'КОМ',
                url: "https://www.fabrikant.ru/"
            }
            ],
        passwords: [{
            name: 'Ivanov А.А.',
            section: [{
                section: 'КОМ',
                login: 'login',
                passwords: ['pass', 'pass2']
            },
        ]
        },
        {
            name: 'Petrov В.В.',
            section: [{
                section: 'КОМ',
                login: 'login',
                passwords: ['pass', 'pass2']
            }]
        }
        ]
    },
    {   id: 5,
        name: "Газпром",
        logo: 'logo_gpb.svg',
        search: 'газпромgazprom',
        sections: [
            {
                name: "44 ФЗ",
                url: "https://gos.etpgpb.ru/?showAvtoLogin"
            },
            {
                name: '223 ФЗ',
                url: 'https://etp.gpb.ru/#auth/login'
            },
            {
                name: '178 ФЗ',
                url: "https://etp.gpb.ru/#auth/login"
            }
            ]
    },
    {   id: 6,
        name: "Березка",
        logo: 'logo_berezka.png',
        search: 'berezkaберезка',
        sections: [
            {
                name: "44 ФЗ",
                url: "https://agregatoreat.ru/lk/supplier"
            },

            ],
        passwords: [{
            name: 'Ivanov В.В.',
            section: [{
                section: '44 ФЗ',
                login: 'login',
                passwords: ['pass', 'pass2']
                }
            ]
            },
            {
            name: 'Petrov А.А.',
            section: [{
                section: '44 ФЗ',
                login: 'login',
                passwords: ['pass', 'pass2']
                }
            ]
            }
        ]
    },
    {   id: 7,
        name: "ТЭК-Торг",
        logo: 'logo_tektorg.svg',
        search: 'текторгтэкторгtactorgtectorgtektorgtaktorg',

        sections: [
            {
                name: "44 ФЗ",
                url: "https://44.tektorg.ru/authentication/login"
            },
            {
                name: '223 ФЗ',
                url: 'https://zakupki.tektorg.ru/#auth/login'
            },
            {
                name: '178 ФЗ',
                url: "https://sale.tektorg.ru/#auth/login"
            },
            {
                name: 'Роснефть',
                url: "https://rn.tektorg.ru/#auth/login"
            }
            ,
            {
                name: 'И-Магазин',
                url: "https://kim.tektorg.ru/#auth/login"
            }
            ],
        passwords: [
            {
            name: 'Ivanov А.А.',
            section: [{
                section: 'Роснефть',
                login: 'login',
                passwords: ['pass', 'pass2']
                }
            ]
            },
            {
            name: 'Petrov В.В.',
            section: [{
                section: 'Роснефть',
                login: 'login',
                passwords: ['pass', 'pass2']
                }
            ]
            }
        ]
    },
    {   id: 8,
        name: "Заказ РФ",
        logo: 'logo_zakazrf.svg',
        search: 'заказрфzakazrf заказ рф zakaz rf',
        sections: [
            {
                name: "44 ФЗ",
                url: "http://zakazrf.ru/Html/id/34"
            },
            {
                name: '223 ФЗ',
                url: 'http://223etp.zakazrf.ru/Html/Details/id/59'
            },
            {
                name: '178 ФЗ',
                url: "http://sale.zakazrf.ru/Logon/Customers/"
            }

            ],
            passwords: [{
                name: 'Ivanov В.В.',
                section: [{
                    section: '178 ФЗ',
                    login: 'login',
                    passwords: ['pass', 'pass2']
                    }
                ]
                },
                {
                name: 'Petrov А.А.',
                section: [{
                    section: '178 ФЗ',
                    login: 'login',
                    passwords: ['pass', 'pass2']
                    },
                ]
                }
            ]
    },
    {   id: 9,
        name: "РАД",
        logo: 'logo_rad.svg',
        search: 'radredрад',
        sections: [
            {
                name: "44 ФЗ",
                url: "https://gz.lot-online.ru/etp_front/"
            },
            {
                name: '223 ФЗ',
                url: 'https://tender.lot-online.ru/app/'
            },
            {
                name: 'МАРКЕТ',
                url: "https://market.lot-online.ru/"
            }

            ]
    }
    ,
    {   id: 10,
        name: "АСТ-ГОЗ",
        logo: 'logo_astgoz.svg',
        search: 'астгозastgoz аст-гоз ast-goz',
        sections: [
            {
                name: "ЛК",
                url: "https://www.astgoz.ru/login"
            },
            {
                name: '44 ФЗ',
                url: 'https://44.astgoz.ru/page/index'
            },
            {
                name: '223 ФЗ',
                url: "https://223.astgoz.ru/page/index"
            }

            ],
        passwords: [{
            name: 'Ivanov В.В.',
            section: [{
                section: '44 ФЗ',
                login: 'login',
                passwords: ['pass', 'pass2']
                },
                {
                section: '223 ФЗ',
                login: 'login',
                passwords: ['pass', 'pass2']
                }
            ]
            },
            {
            name: 'Petrov А.А.',
            section: [{
                section: '44 ФЗ',
                login: 'login',
                passwords: ['pass', 'pass2']
                },
                {
                section: '223 ФЗ',
                login: 'login',
                passwords: ['pass', 'pass2']
                }
            ]
            }
        ]
    },
    {   id: 11,
        name: "SETonline",
        logo: 'logo_setonline.svg',
        search: 'setonlineсетонлайнсэтонлайн',
        sections: [
            {
                name: "223 ФЗ",
                url: "https://etp.setonline.ru/"
            },
            ],
        passwords: [{
            name: 'Ivanov В.В.',
            section: [{
                section: '223 ФЗ',
                login: 'login',
                passwords: ['pass2', 'pass1']
                }
            ]
            },
        ]
    }
    ,
    {   id: 12,
        name: "B2B-Center",
        logo: 'logo_b2b.svg',
        search: 'b2bcenterб2бцентер b2b-center б2б-центер',
        sections: [
            {
                name: "ВСЕ",
                url: "https://www.b2b-center.ru/personal/"
            },
            ],
        passwords: [{
            name: 'Petrov А.А.',
            section: [{
                section: 'ВСЕ',
                login: 'login',
                passwords: ['pass', 'pass2']
                }
            ]
            },
        ]
    }
    ,
    {   id: 13,
        name: "MTC",
        logo: 'logo_mts.svg',
        search: 'мтсmts',
        sections: [
            {
                name: "КОРП",
                url: "https://sourcing.mts.ru/"
            },
            ],
        passwords: [{
            name: 'ЮУрСЦУ',
            section: [{
                section: 'КОРП',
                login: 'login',
                passwords: ['pass', 'pass2']
                }
            ]
            },
        ]
    }
    ,
    {   id: 14,
        name: "РЖД",
        logo: 'logo_rzd.svg',
        search: 'рждrzd',
        sections: [
            {
                name: "КОМИТА",
                url: "https://etp.comita.ru/"
            },
            {
                name: "E-SHOP",
                url: "https://eshoprzd.ru/home"
            },
            ],
        passwords: [{
            name: 'Petrov',
            section: [{
                section: 'КОМИТА',
                login: 'login',
                passwords: ['pass', 'pass2']
                }
            ]
            },
            {
            name: 'Ivanov А.А.',
            section: [{
                section: 'КОМИТА',
                login: 'login',
                passwords: ['pass', 'pass1']
                },
                {
                section: 'E-SHOP',
                login: 'login',
                passwords: ['pass', 'pass2']
                }
            ]
            }
        ]
    }
]

export default etps