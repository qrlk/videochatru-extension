function createSettingsInterface() {
    return createElement('div', {}, [
        createElement('dt', {
            innerHTML: chrome.i18n.getMessage("settingsInterface")
        }),
        createElement('dd', {}, [
            createElement('span', {}, [
                createElement("p", {
                    innerText: chrome.i18n.getMessage("hideLogo"),
                    className: "tooltip",
                    title: chrome.i18n.getMessage("tooltipHideLogo"),
                }),
                createElement('input', {
                    type: "checkbox",
                    checked: settings.hideLogo,
                    id: "hideLogoCheck",
                    onclick: () => {
                        chrome.storage.sync.set({"hideLogo": hideLogoCheck.checked}, function () {
                            if (hideLogoCheck.checked) {
                                document.getElementById("logo-link").style.display = "none"
                            } else {
                                document.getElementById("logo-link").style.display = ""
                            }
                        });
                    }
                })
            ]),
        ]),
        createElement('dd', {}, [
            createElement('span', {}, [
                createElement("p", {
                    innerText: chrome.i18n.getMessage("watermark"),
                    className: "tooltip",
                    title: chrome.i18n.getMessage("tooltipWatermark"),
                }),
                createElement('input', {
                    type: "checkbox",
                    checked: settings.hideWatermark,
                    id: "hideWatermarkCheck",
                    onclick: () => {
                        chrome.storage.sync.set({"hideWatermark": hideWatermarkCheck.checked}, function () {
                            if (hideWatermarkCheck.checked) {
                                document.getElementsByClassName("remote-video__watermark")[0].style.opacity = 0.0
                            } else {
                                document.getElementsByClassName("remote-video__watermark")[0].style.opacity = 1.0
                            }
                        });
                    }
                })
            ]),
        ]),
        createElement('dd', {}, [
            createElement('span', {}, [
                createElement("p", {
                    innerText: chrome.i18n.getMessage("banner"),
                    className: "tooltip",
                    title: chrome.i18n.getMessage('tooltipBanner')
                }),
                createElement('input', {
                    type: "checkbox",
                    checked: settings.hideBanner,
                    id: "hideBannerCheck",
                    onclick: () => {
                        chrome.storage.sync.set({"hideBanner": hideBannerCheck.checked}, function () {
                            if (hideBannerCheck.checked) {
                                document.getElementsByClassName("caption remote-video__info")[0].style.opacity = 0.0
                            } else {
                                document.getElementsByClassName("caption remote-video__info")[0].style.opacity = 1.0
                            }
                        });
                    }
                })
            ]),
        ]),

        createElement('dd', {}, [
            createElement('span', {}, [
                createElement("p", {
                    innerText: chrome.i18n.getMessage('doNotReflect'),
                    className: "tooltip",
                    title: chrome.i18n.getMessage('tooltipDoNotReflect')
                }),
                createElement('input', {
                    type: "checkbox",
                    checked: settings.doNotReflect,
                    id: "doNotReflectCheck",
                    onclick: () => {
                        chrome.storage.sync.set({"doNotReflect": doNotReflectCheck.checked}, function () {
                            if (doNotReflectCheck.checked) {
                                $("#local-video").removeClass("video-container-local-video")
                            } else {
                                $("#local-video").addClass("video-container-local-video")
                            }
                        });
                    }
                })
            ]),
        ]),


        createElement('dd', {}, [
            createElement('span', {}, [
                createElement("p", {
                    innerText: chrome.i18n.getMessage('hideCamera'),
                    className: "tooltip",
                    title: chrome.i18n.getMessage('tooltiphideCamera')
                }),
                createElement('input', {
                    type: "checkbox",
                    checked: settings.hideCamera,
                    id: "hideCameraCheck",
                    onclick: () => {
                        chrome.storage.sync.set({"hideCamera": hideCameraCheck.checked}, function () {
                            if (hideCameraCheck.checked) {
                                $("#local-video-wrapper")[0].style.display = "none"
                            } else {
                                $("#local-video-wrapper")[0].style.display = ""
                            }
                        });
                    }
                })
            ]),
        ]),

        createElement('dd', {}, [
            createElement('span', {}, [
                createElement("p", {
                    innerText: chrome.i18n.getMessage('darkMode'),
                    className: "tooltip",
                    title: chrome.i18n.getMessage('tooltipDarkMode')
                }),
                createElement('input', {
                    type: "checkbox",
                    checked: settings.darkMode,
                    id: "darkModeCheck",
                    onclick: () => {
                        chrome.storage.sync.set({"darkMode": darkModeCheck.checked}, function () {
                            if (darkModeCheck.checked) {
                                connectionStatus.style.color = "#E8E6E3";
                                (document.body || document.documentElement).appendChild(dark);
                            } else {
                                connectionStatus.style.color = "#000000"
                                if (typeof darkMode != "undefined")
                                    darkMode.remove()
                            }
                        });
                    }
                })
            ]),
        ]),

        createElement('dd', {}, [
            createElement('span', {}, [
                createElement("p", {
                    innerText: chrome.i18n.getMessage('expand'),
                    className: "tooltip",
                    title: chrome.i18n.getMessage('tooltipExpand')
                }),
                createElement('input', {
                    type: "checkbox",
                    checked: settings.expand,
                    id: "expandCheck",
                    onclick: () => {
                        chrome.storage.sync.set({"expand": expandCheck.checked}, function () {
                            if (expandCheck.checked) {
                                setTimeout(() => {
                                    resizemap(true)
                                }, 100)
                            } else {
                                resizemap()
                            }
                        });
                    }
                })
            ]),
        ]),
    ])
}
