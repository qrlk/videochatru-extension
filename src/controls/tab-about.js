function createTabAbout() {
    return createElement('div', {
        className: "tabs__content",
        id: "aboutPanel",
        style: "height:100%;"
    }, [
        createElement('div', {
                id: "aboutInfo",
                style: "overflow-y: auto; margin-top: 3px"
            },
            [
                createElement('span', {
                    innerHTML: chrome.i18n.getMessage("desc"),
                }),
                createElement('br'),
                createElement('br'),
                createElement('span', {}, [
                    createElement('a', {
                        target: "_blank",
                        style: "text-decoration: none!important; margin-right: 3px",
                        href: "https://discord.gg/YZKnbKGWen"
                    }, [
                        createElement('img', {
                            src: chrome.i18n.getMessage("discordBadge"),
                        }),
                    ]),
                    createElement('a', {
                        target: "_blank",
                        style: "text-decoration: none!important;",
                        href: "https://chrome.google.com/webstore/detail/alchldmijhnnapijdmchpkdeikibjgoi"
                    }, [
                        createElement('img', {
                            src: "https://img.shields.io/chrome-web-store/users/alchldmijhnnapijdmchpkdeikibjgoi?label=chrome%20users&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAW80lEQVR42u1deZAc1X3%2Bfj2zh6Rdg5B2V6t7zSlVYhuE%2FwjgQiATkhgMhBhcJlRSDuVUyoFQhjihTBUJTnAqOKbAiZ04NoQQsMuADSQOlihRgDh8CRSDkLhWq2NXQqx2de1qd7rf%2B%2BWPd3bPzB4zPbOzUr%2Farpnp7unued%2F3%2B37He91LzIysnbgtyLogI0DWMgJkLSNA1jICZC0jQNYyAmQtI0DWMgJkLSNA1jICZO14b%2Fmp7khEDXfxewYGbnrpxZfutSuKhjW8FWUuf9ojIYkvnHfe%2BX%2BxfNmS%2Bxqtb6Y6xjNrFWDPwMBNUsh7J6FtFUhPfkgAkFLcu2t3%2F02ZC2gE8GdIpGYzCYLj0%2FIrNugqSCBnJQmC4x%2F8GriBMsGBIsGemzIC1AT8vVMDvx5ugCZTgtlDgllBgD39e1OV%2FVqzYzaRIJgV4MvZAn5CCfY0PgloqvniTNUBdu3u54mc%2BPJlS2e0QNG3c1eJYoNbtXLF8hm5vuO0DkDI2gnmAijDPAsCZ0%2FjjABZywiQtYwAWcsIkLXZkVdNNV8c2LuXq8053f7lgiaaZP8pBFpU6jtT%2BB5Pb0P5n0wVfKf0uabWqxzrOXOOnpUrKFOAEzCqr7sLyG4uzmKArJ2oBFDWn0lAo7ibStQ4qDf4J6rLaNTfna%2F8h3DKjM%2BK%2Fg1NgJl6lEwlp505a5t9JA4aHcwTLS2r9y8NGuPnUY0NkDNezTQBsnrBCUyAiUu51KCk4Tp%2F7wSIAarrHK6AbJmazTgBJk4bU7R%2BOj4s8rgiwMQgUurWP7OKXQ2Zq3M31YTQ%2BfoAzykSJws00%2Fzt%2BdpeCNfH%2Bqk2ljVjMUYdiZOvv9XTcWzFs%2B%2Fi8%2BkBXr3VV%2BQ6qAriZPHhdMYCqulNmkXWWMn3ZiIAbAgXwBV3zGy0%2FsZyT5yKaeVr02NUZcfyDFn%2FzJ%2BzIi7zjClA9TJfMfhUC6vkuv3uWRgEpv9DawM%2B1wRnnvUuo3SbsUmh6cv%2BbEz%2FeDYpQK2An2ZH1Mz6Z17%2BeZp70mxTgBkHP%2FWax8zLf7Xnyc%2FsRXJ9jS1xOu7tBQignp4TUv5rTgBOS25p%2BirCWzYD72wHDx1A8P6AkjsenxKnImoGQOCuxeD5HaDTzwJ99GMNJf%2Bp5W5Tne27p3%2BAqwO9tuDzjj7ITRsR7N4BGj%2BCIKAJny8zEXwsGcwCJABmqWZES0C2nQJe2QP6xMWg5T2o%2FCbQ4n6oxP9PdJ6p3hxaNQGm7oMqYO4k4HNfH%2BSGp0C9b4Eg1ZPMAgIFAUABKEBZEtCE4EuQfoX3CslgCUAKyFwz%2BIzfQHDp74GWr6zaCBqeALv3DHCtxW2q4Iv1TwObNgIjwwhyBKYAAREQBArwgEBEYCKQfu8TgcowmSUAA7qUmhBCb1MqYEkhGMRSEWb%2BQtDaSxB88tIaW%2F%2BsIUCVfqoM%2BNGPfwhsehYojINyDuggAJgCrQCB%2Br52AQQCBwRCoK6LyDs8A0xgSBBDAQtt6cyAlAA88CWDpHEJmiSGHCyBlrngiy9F7oqray7%2FaDwCpBCcUGn3Ej3zU%2BC%2FHwcKYwrAIFDWnSMQARQE2uIBMr6fNBGgPweApkPshApwfTJmtZWN9StisLZ8EuzAt0qhv2fcBDO4tQ3BVdcgWHfJjMh%2FjQjQX9u8pYTVyzdeh3joAWBwL4gCZdXGsgMt%2FYEiARupD0hjThp8z%2FKTD%2B%2FQnxXs5CyeWe0n1S1xyuq1AmjZd5bvqQUbpdDvFy9F7vobQKtX11X%2BZxcByln9v38b%2FOJzaruWdguwRwLj30lbuXIFsIrgyFAmINQnZKk7l40YaLC1a3BAJ8F3lu%2FHCNaNCAatuxT5G76QmvXjuCBAGSzk7l2I7r4LGBrUkTx5JHBWThQ4aTdBXiwAVCdxmOv35D96mGIdqfqCtexbJniAe9ZtCMETgO%2BrQWc38rfdhmDx0ppbf2MToLwRInryCYjHfgBEhZi1K%2Fl3%2Ftx%2B1ioAxInAIKX80AFfQOokBLCfDRipB3n%2B36zzLR6etWuXYYH3APeUIQa%2B0AA2NSO47jrkL%2Ft0xcWftAlQn8EgmrxoFN77DYhNzzsLDgCSxlAliPU6mEhdh3QcAMRqO7FWAoBZbyfty60auJNKNpcmXSpoNvgkMIAirgomRoDNBmBJYRRAHVpHkmNjkN%2F9LsIdfWi68aaKujHtMYZ8PQEvl9cX%2Fv7vIH%2F1CxXFK2VWrwEAAVDAynLZBILab0P7WAo0%2BM7PU6CUIBZcUrFhxW9cYucK2LN8oMgdEHv7SS87sL7MZBNs%2BWW%2Byxs2oHB0BE233TaLxgJSKH0ngedDhzH%2B5VvAe%2FeCjJxLBgIGCwJYq4Gx3kCCBQBpqnyaBgE71ug8nw3aNhVMqGnyM%2BtMgKVLDw3AHnhk3YEv%2FYgpgNlGXoqp3IFHgk2bUOjrQ9PdXwd9qH3KwV%2FarW53BxeBf%2FgIxv7yFsj%2BfttpbNMt%2Fbt9y5IMFibIEmAhVKea9SwBIQEp1XHMItyCSCkGBAMRu21S6P3dK4RQxxISiCQ4YkCoY8J8z782EwsIBul0EbpAZK4zlj1IhuzbifDWW8GHj1RkQHUdDBo%2BeJArtfRSbfT66yF377JBHJn0zgRwscgeLtUjz9I9yUegfL4KAlnvq4lE5ccErNSbmgCzOg67qqC%2FX8ziE%2FGAcxHacg0xvGqie882EKGelWh96MHJK4bTIEBXZ0ftnxTKXHqZrI3dcQdkX1%2B8kmas1NTXPSs2VmssGnoxqsCSlZUKpQzwrJ6lsXhZehFOXcyx7XGi%2BDnc9sR1Cf96tdXb3%2BMBrtfbIFOvl%2B%2F2ovC3X03R%2Bjn9GCAt%2BRm%2F%2B%2BsIn9mordIL%2BowFCngKwACpAJCIrJ9ncnV80gUeNhavzZlMvk9ed1CZqhMnV3nrjaWb7MAG9drHJwNGmVAI3%2Bq9%2FVxxSX2OfrIeaGtH8y03p1dab5g0UP%2BgwpNPofDYj2zBxkTYRCbKV%2BAr2SSvru%2F2Q6Br%2FhpZ9os7JgMgKgadynQqF5OBEZd9lQ7CRf6AHi423%2FOAt4NJKCoiFYHvB4kMhN%2F%2FIYIzTkf%2B8k%2FVxfqnFQMMDR%2BsZGacy7n7BzBy3R8BIyOOAMY3U6KoYwd1XARvC0Nw5V02Eb%2B%2FTzJkpsSbood5x2MAN0KoUz24lI%2FYU4hYHOCBnXyfIEZ8HyTIA1BbG%2BY88h%2Bgxd1VEaCrs5PqTICJNw9eeQ1o50405YJ4ABcL7EoQIRnoee8dG9havdnO2reY3Xmy4opC2%2BOBIwCY4umgB54NDG3BxwNYemQpZfW%2BW%2FEDszNOw5xHHqzQ9U6PAMH0DjzRUr49vvV%2B7BvagTERQQhp0zsbHJk0ScKmdSp1MsGXlw6aICwyAZWboKECMqneRy5dhJAgs0i96M8sBCCFDixdoGfH%2BwXblNNdlwlI9XkleymnDjqNzxfq9%2FlTy9gfWCrR5NvvovCd76FSxZ0OaWpeB9g1uhNPHnsGj%2F3pqWDJGI0iSClVfVyPq5clgl2kB74hjkx0vJ%2F3qxw%2Blj3YWgLbY9j8XHhA%2BQSLvBzeHt%2BvR7hzwiv0WOCF9H4fEhnBxP0Wfud%2BiLfeqXlkVnMC%2FNeuB0EAdpwG9Pa0gpkxEoYQeuy9mAjSI4Ijhg%2ByUwZVoDFpGIQ3GicSxaBIlFhk0X4xsCXr45t0UsZSQmP9lrR%2BmuhZvK3%2BCZ6WeRb%2B6d6K4q2GIcDm4V9h%2B5FtOt8gPH5jj73U0SiEiKSTQxG3eiPJClQkXISXmxvCxIDRlholLb7EYvaLVQY5UVUsBThbslj18CqCEIido5I8Wr76GsRzL1RVbp9RAjy868FYRH7wFIGXLl7gSCC0OzAxQWJ41aqC18nxzvcKMYJjZd%2BSpWDplsn2tf7d9%2BlJ0A3pOE4OTk4UqaIVvnFvzay%2FpnWATYPPY7AwGK%2B9EGHj1R1Y8%2FIQWsfYkmBuLq%2BYaPJ69sZvTCHHjPbZYV29IyVz%2FcQ2b%2FCHAeRPOxVB2zzkuheBuruQ6wohh%2FZCDu2DHBqAPLDPqx%2FbMccEkBx%2FZVaDT0UDHiWy0eRhaLJ1vZDrH0Fw6edqUqybRho4PK3Df%2Bn%2FbowTwCPCOT%2BXuPpb78Q6Z24ur6Z2F12hlw6yN6pH3khf%2FG0s56e2NjRfeAHmXHUFms44Dcg3FdULSM0e0ZnJMUSHtiDc%2F2OEg8%2BAxSFHBDZFK9ajl1Jfm55JZEcj2V6z2qYqk64vOJYBu3oV64kscU7TnC4cXvrapNbvQ7moq7O%2BE0L8k28e%2FiUGxwfjYPmxwccY5y1uQvdAGHMH8%2FJNxcOeZhDGqIAmAQFunJ3cxB7TKbnFizHv5i%2Bi5aK1FvDkq6VLENhzETWjufNCNHddCGag8P4TOPbeXeDxPQg04AGxBVb9sTcJWeoqJnt1LOkRYgLA9bHM7wtyjFwOoGAALWNPY7z1d1Mv1U9ZAQ4MTV0BvrbtTmw%2Fus0r5BTv0%2FNeDjfc%2BWZsXQ6EOfn89Me%2B%2FYphezvab70ZLVdcbieHuk5Xb8YFsP9IZAFhAJ1tLWjJ%2BapDKibRyl7ofwCFHXcC4qAmDWKW7rssIo7NSHcAx9dbEpjalgY8yLEikHc3dNh0HoYXPDEl658RBbAVv%2FEPsP3Im67UW6btWBlh29nzseq1YbtOgHEsiqZPAl2Vazp3DU76138GtbZo4BX4x0LGq%2F1j6BsOsWu4gFAycgTkgsC6W8lH0BQQls9vxlmdrVjV1YLWfGBP0LL082jquAzjW38fPPp6kdXa9yUAj29z%2BwY5Ri4oBrxUayq8jJzYDZFblupAXeoE2PTB81PbMUf4nz9chJ5tB9E6xlWToPWzn0Hb7X%2FtAU8YGhVY%2F%2FYoNvePIR8AOSLk9CsCM6Ln6jcFwdi6bxy%2F3juOSALnLGnF75zVjvlzAjAzgpZOtJ69CeF7N0MOPhCbbETECRUoJkeQYwQBkJsC4KVa89jTODbvCxVX%2FeriAr605c9xIBx09X5gQiW4%2BEeHse7JvcX8mIY7aL32M5h3%2B1%2FFwP%2FJ9lE8%2FdaoAj6AtnhCTt89FpCbaOyX6022KZghJNCcI1x46jx8alWbHQlkZoi%2Bm8GD9%2BtZx14y4sl8tYAnLTyiZRjq2jyh9M%2BoCxgc%2FwCD44M2sJlKe%2Bm3T8LZz%2B%2FHKQdFbP1UlSAJ%2FoFRiX955TAGDkfIBaRm%2Fko9x0AymBS5pDcQmRyplRp8wcDRAuOprUfx5vvj%2BOL58zEnr64mWHGPYtDQ92I%2BPA3Ay4qm2KPdwNJUrD%2FlwSDG5qFfTm7yiTbextj4Bysg%2FYkXCRKU%2B535c9dg7le%2BbD%2FvPBjh9g3D2DkcFQEZSVe%2FiQQjkmoJJdR7b13kJh3Z2s%2B2%2FQV8beMQdh2MLNmw7B7kT74ALa0SrXMFWlolmpql8um1mMVJQPOx%2F23csYBth9%2Bs6HuvfTzAO8uby5NARMV90d6O9m%2B5KtkHIwJf3XgIRwtsi3fCk3JhZoEJNxssFIoMoYhvs%2FNH7awxdYwdwyG%2B%2FcohjBSkPW%2B09GFQ04dqA3ipYHD85dSsP3UCbD9UGQGoNYfnrl2pOpq5iAiCGWMi7iLm%2Fc1XgJZmAMBIgfGPLxzB0YKEN3hnSWCs2gKvl8h7jWQxCRTwHDtW71CIOzYMORXIzUe44B%2Fqgz6rbCDN2cGpEWDnyE6MitHKh41XEzavOUmTQBaRIGRpSZA783Tk111kt%2F3g16PoHYriFu9bsCUBFwHtq4Ejg%2BcK2LkDFSAyeodCfH%2BLm8odtl8PmV9ec%2FBVnekw8uHWxiPArpG%2BKiMcwvpruzDSAqsESTUwJGi54fP2a71DAk9uG4uB7st%2BnAQ%2BuIxQuMVfnySHiwnccR9%2B9SjeP%2BpUqbDgLtSr5QtvNB4BPhj7wE9OKjpGuDiPn52%2FMEaApBrI7i7k1621n%2F%2FtFyNu7kcMcC45CzwssnbPFYji95FHHD82EAw8tPmoiwXmXgEOTqoLAQKxu%2FEIUGkAmGwvXH0yDrQHFvykGrRetNbuu%2B%2BIwJa9Ycwyfen3pTxMSr9wsUCY%2BOy7CSHZKkqUOMdP3x7FviNOBcK26%2BqjADoQrCsByt0EUvKGEK5cB3InNeOZK5cWgW8IMffKy%2B2%2Bj20d86ySJ7j%2Fg4tiAGvlwoHvCJJwByLpRpybebFvzKnAh%2F64Zr7fpNbMSPWWgdQUwGYAKVzcexfOQ293UxH4ghn500%2Bzk0de7Y8S0s9WqkUCMBfoOZ8fekusFiAmuJFIsnUvQgLP9bqHT4r8WTWNAdmmgq80Zh0gZvlVMJXm5PDsdT1F4Defu8buc7TAePuAKJL%2BkhF%2FKZ8u4u4g6RLCskoSdwWb9xTcbCYAovk3ayMAQE1uFgpqc6XVtwMfacbPPtoWcwVoa7Od%2Ffag0JY4FemPAx8DOun7E0Wh0HMHpZRFMPD2YGTHCGoSCPrGlHisTUMqQBEZKpmq1BTg559dgtEmlxY2nXmG3X54XFoAojIRv5N%2BJ%2FHhBBJvXEQUcwnlXAEsAQ%2BPe5XBlgvqUQ5IzRrzqcs%2Fw3sUC8Vm1023iZ5WvHBBBy7ZuB8MhjRTraGszjyfMdCzdHIESCL%2FQWKI3WluB4B4YmPz7gVN3M5nxxj8OaLsT2qtiUtNBICT3aM1jcvIp3qtXGbyYxV18tevWoBzXtmP%2BaPxDmZ7oyZBmLu39GwcRQCKE8B7RZm5KrHb%2FhC%2F8Vfq8yVnhRvpr7W1x55mNvGjrmvlAiYZDUz0Xlpdku9sxfqrliqrg7utalGbepwLq8d4QnKJip8oTv38nL9UIagoFpB%2BpdDtL%2B1dw9L5%2F1qpQML%2FT%2FQY%2FumePp%2F6hfoLJbZXqAT7181H79MDmL%2Bn33Zwd5t%2BLp%2B7qxSknhlun8vkpJ9jKlBOlPw7xX0%2B%2B67AdbSZHCJj4OcKr9dE%2FosfaFWd9KfvAtjdpm%2Bx1gEBV%2BcFELTl8cKfnIrVz%2B6xHb%2BojSCl0I%2BCCWJEMBqv5uprwP0Z5SVIUOIxAUX%2FCNvdGs72IVLMjDVLmpy340M1kX93akr1X%2BZMJwu4b7Ir5tgzdErUA6pQx5GPzMHG6D37ubs9h0XzGFIKSCnAUkCyvotXP5jJ3p%2BngYrd2FMyqvcCO%2B975njwj6vPe8YCiilA0%2FhL6WZTJeS%2F1H9cS6y7rxYE%2BOZEG1edtKrMXeOcSpmAWnJ446pujPT22s4%2BuzsHlhFYRpYEzOZVus8xQvgLe0tim93fkUrq4znSRThnSZM9Rj7annI2TbFg1PSpaD1vMr%2F%2FzdQJ0LFw4bvMeHTS8QBOZCpTTF2mlBaunotXtmywHX7Zma2QIipepFmEtVRpiCFFHFxOkEQ6AllS6eOxdMc36z69aq6z%2FqP%2FmX7wp%2B94UUQoDgJLgP%2Fo4u5F79aqEPQ5ACXHIledvNq6AfhugFNxVbZt6NhqO%2FycJS3omscQIoSUoQY9BGsixAATwpJCAShKLJG1bh9kKRPEEiGkCHHO4iac2dFss4Dmsern63GJ3J%2FZd7GEaM555dLP3Rqj2lQCOzsWRgA%2BDODRIoVo7Ug8DMkD3z5jr3rDOLRgBH27HQlu%2BcTJCpAotMAI6d478MK49ZrtIorva7eVUBXhnUOE%2BLPfOtleR%2FP4c8hVO06f8P1sH2TtWb8EZH5pKUt6FMCHF3cvimpaCu7sWBh1diy8BsDpfrCxon2FfSYyyxLBYIoq8PjIU7bj1546D2d35yFEASIqQESODMIDzAdaxABOvg8T%2B8VfhShAihBre%2Bbg48uU%2FEsp0Xr0npr5frb%2FtUSRQLas9o3pPgCnL%2B5edM10wVdZC8%2Fm%2F9mbtcYaDMpaRoCsZQTIWkaArGUEyFpGgKxlBMhaRoCsZQTIWkaArGUEyFpGgKxlBMhaRoCsZQTIWoO0%2Fwchgys9ixzDyQAAAABJRU5ErkJggg%3D%3D&amp;style=plastic"
                        }),
                    ]),
                ]),
                createElement('br'),
                createElement('br'),
                createElement('span', {
                    innerHTML: chrome.i18n.getMessage("github"),
                }),
                createElement('br'),
                createElement('br'),
                createElement('dl', {},
                    [
                        createElement('dt', {
                            innerHTML: chrome.i18n.getMessage("author")
                        }),
                        createElement('dd', {}, [
                            createElement('a', {
                                href: "https://github.com/qrlk",
                                innerText: "qrlk",
                                style: "text-decoration: none!important;",
                                target: "_blank"
                            })
                        ]),
                        createElement('dt', {
                            innerHTML: chrome.i18n.getMessage("inspired"),
                        }),
                        createElement('dd', {}, [
                            createElement('a', {
                                href: "https://github.com/unixpickle/camera-hijack",
                                innerText: "camera-hijack",
                                style: "text-decoration: none!important;",
                                target: "_blank"
                            })
                        ]),
                        createElement('dd', {}, [
                            createElement('a', {
                                href: "https://github.com/fippo/rtcstats",
                                innerText: "rtcstats",
                                style: "text-decoration: none!important;",
                                target: "_blank"
                            })
                        ]),
                        createElement('dt', {
                            innerHTML: chrome.i18n.getMessage("libs")
                        }),
                        createElement('dd', {}, [
                            createElement('a', {
                                href: "https://jquery.com/",
                                innerText: "jquery",
                                style: "text-decoration: none!important;",
                                target: "_blank"
                            })
                        ]),
                        createElement('dd', {}, [
                            createElement('a', {
                                href: "https://github.com/justadudewhohacks/face-api.js",
                                innerText: "face-api.js",
                                style: "text-decoration: none!important;",
                                target: "_blank"
                            })
                        ]),
                        createElement('dd', {}, [
                            createElement('a', {
                                href: "https://github.com/uzairfarooq/arrive",
                                innerText: "arrive.js",
                                style: "text-decoration: none!important;",
                                target: "_blank"
                            })
                        ]),
                        createElement('dd', {}, [
                            createElement('a', {
                                href: "https://github.com/infinitered/nsfwjs",
                                innerText: "nsfwjs",
                                style: "text-decoration: none!important;",
                                target: "_blank"
                            })
                        ]),
                        createElement('dd', {}, [
                            createElement('a', {
                                href: "https://github.com/calebjacob/tooltipster",
                                innerText: "tooltipster",
                                style: "text-decoration: none!important;",
                                target: "_blank"
                            })
                        ]),
                        createElement('dt', {
                            innerHTML: "<b>Css:</b>"
                        }),

                        createElement('dd', {}, [
                            createElement('a', {
                                href: "https://darkreader.org/",
                                innerText: "dark reader",
                                style: "text-decoration: none!important;",
                                target: "_blank"
                            })
                        ]),

                        createElement('dd', {}, [
                            createElement('a', {
                                href: "https://github.com/alterebro/css-tooltip",
                                innerText: "css-tooltip",
                                style: "text-decoration: none!important;",
                                target: "_blank"
                            })
                        ]),
                        createElement('dt', {
                            innerHTML: chrome.i18n.getMessage("3rdparty")
                        }),

                        createElement('dd', {}, [
                            createElement('a', {
                                href: "https://ip-api.com/",
                                innerText: "ip-api",
                                style: "text-decoration: none!important;",
                                target: "_blank"
                            })
                        ]),
                        createElement('dd', {}, [
                            createElement('a', {
                                href: "https://carto.com",
                                innerText: "carto",
                                style: "text-decoration: none!important;",
                                target: "_blank"
                            })
                        ])
                    ]),
            ]
        )
    ])
}