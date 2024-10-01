module.exports = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Getting started",
      link: {
        type: "doc",
        id: "getting-started/index",
      },
      items: [
        "getting-started/create-flet-app",
        'getting-started/running-app',
        'getting-started/flet-controls',
        'getting-started/custom-controls',
        'getting-started/adaptive-apps',
        'getting-started/navigation-and-routing',
        "getting-started/testing-on-ios",
        "getting-started/testing-on-android",
        'getting-started/async-apps',
      ],
    },
    {
      type: "category",
      label: "Publishing Flet app",
      link: {
        type: "doc",
        id: "publish/index",
      },
      items: [
        "publish/android",
        "publish/ios",
        "publish/macos",
        "publish/linux",
        "publish/windows",
        {
          type: "category",
          label: "Web",
          link: {
            type: "doc",
            id: "publish/web/index",
          },
          items: [
            {
              type: "category",
              label: "Static website",
              link: {
                type: "doc",
                id: "publish/web/static-website/index",
              },
              items: [
                {
                  type: "category",
                  label: "Hosting",
                  link: {
                    type: "generated-index",
                    slug: "publish/web/static-website/hosting",
                  },
                  items: [
                    "publish/web/static-website/hosting/cloudflare",
                  ],
                }
              ],
            },
            {
              type: "category",
              label: "Dynamic website",
              link: {
                type: "doc",
                id: "publish/web/dynamic-website/index",
              },
              items: [
                {
                  type: "category",
                  label: "Hosting",
                  link: {
                    type: "doc",
                    id: "publish/web/dynamic-website/hosting/index",
                  },
                  items: [
                    "publish/web/dynamic-website/hosting/fly-io",
                    "publish/web/dynamic-website/hosting/replit",
                    "publish/web/dynamic-website/hosting/self-hosting",
                  ],
                }
              ],
            }
          ],
        }
      ],
    },
    {
      type: "category",
      label: "Extending Flet",
      // link: {
      //   type: "doc",
      //   id: "create/create-flet-app",
      // },
      items: [
        "extend/integrating-existing-flutter-packages"
      ],
    },
    {
      type: "category",
      label: "Controls",
      link: {
        type: "doc",
        id: "controls/overview",
      },
      items: [
        {
          type: "category",
          label: "Layout",
          link: {
            type: "generated-index",
            slug: "controls/layout",
          },
          items: [
            "controls/card",
            "controls/column",
            "controls/container",
            "controls/cupertinolisttile",
            "controls/datatable",
            "controls/dismissible",
            "controls/divider",
            "controls/expansionpanel",
            "controls/expansiontile",
            "controls/gridview",
            "controls/listtile",
            "controls/listview",
            "controls/page",
            "controls/pagelet",
            "controls/placeholder",
            "controls/responsiverow",
            "controls/row",
            "controls/safearea",
            "controls/stack",
            "controls/tabs",
            "controls/verticaldivider",
            "controls/view",
          ],
        },
        {
          type: "category",
          label: "Navigation",
          link: {
            type: "generated-index",
            slug: "controls/app-structure-navigation",
          },
          items: [
            "controls/appbar",
            "controls/bottomappbar",
            "controls/cupertinoappbar",
            "controls/cupertinonavigationbar",
            "controls/menubar",
            "controls/navigationbar",
            "controls/navigationdrawer",
            "controls/navigationrail",
          ],
        },
        {
          type: "category",
          label: "Information Displays",
          link: {
            type: "generated-index",
            slug: "controls/information-displays",
          },
          items: [
            "controls/canvas",
            "controls/circleavatar",
            "controls/cupertinoactivityindicator",
            "controls/icon",
            "controls/image",
            {
              type: "category",
              label: "Map",
              link: {
                type: "doc",
                id: "controls/map",
              },
              items: [
                "controls/mapcirclelayer",
                "controls/mapconfiguration",
                "controls/mapmarkerlayer",
                "controls/mappolygonlayer",
                "controls/mappolylinelayer",
                "controls/maprichattribution",
                "controls/mapsimpleattribution",
                "controls/maptilelayer",
                "controls/maptextsourceattribution",
              ],
            },
            "controls/markdown",
            "controls/text",
            "controls/progressbar",
            "controls/progressring",
            "controls/webview",
          ],
        },
        {
          type: "category",
          label: "Buttons",
          link: {
            type: "doc",
            id: "controls/buttons",
          },
          items: [
            "controls/cupertinoactionsheetaction",
            "controls/cupertinobutton",
            "controls/cupertinocontextmenuaction",
            "controls/cupertinodialogaction",
            "controls/cupertinofilledbutton",
            "controls/cupertinosegmentedbutton",
            "controls/cupertinoslidingsegmentedbutton",
            "controls/elevatedbutton",
            "controls/filledbutton",
            "controls/filledtonalbutton",
            "controls/floatingactionbutton",
            "controls/iconbutton",
            "controls/menuitembutton",
            "controls/outlinedbutton",
            "controls/popupmenubutton",
            "controls/segmentedbutton",
            "controls/submenubutton",
            "controls/textbutton",
          ],
        },
        {
          type: "category",
          label: "Input and Selections",
          link: {
            type: "generated-index",
            slug: "controls/input-and-selections",
          },
          items: [
            "controls/autocomplete",
            "controls/autofillgroup",
            "controls/checkbox",
            "controls/chip",
            "controls/cupertinocheckbox",
            "controls/cupertinoradio",
            "controls/cupertinoslider",
            "controls/cupertinoswitch",
            "controls/cupertinotextfield",
            "controls/dropdown",
            "controls/radio",
            "controls/rangeslider",
            "controls/searchbar",
            "controls/slider",
            "controls/switch",
            "controls/textfield",
          ],
        },
        {
          type: "category",
          label: "Dialogs, Alerts and Panels",
          link: {
            type: "generated-index",
            slug: "controls/dialogs-alerts-panels",
          },
          items: [
            "controls/alertdialog",
            "controls/banner",
            "controls/bottomsheet",
            "controls/cupertinoactionsheet",
            "controls/cupertinoalertdialog",
            "controls/cupertinobottomsheet",
            "controls/cupertinocontextmenu",
            "controls/cupertinodatepicker",
            "controls/cupertinopicker",
            "controls/cupertinotimerpicker",
            "controls/datepicker",
            "controls/snackbar",
            "controls/timepicker"
          ],
        },
        {
          type: "category",
          label: "Charts",
          link: {
            type: "generated-index",
            slug: "controls/charts",
          },
          items: [
            "controls/barchart",
            "controls/linechart",
            "controls/matplotlibchart",
            "controls/piechart",
            "controls/plotlychart"
          ],
        },
        {
          type: "category",
          label: "Animations",
          link: {
            type: "generated-index",
            slug: "controls/animations",
          },
          items: [
            "controls/animatedswitcher",
            "controls/lottie",
            "controls/rive"
          ],
        },
        {
          type: "category",
          label: "Utility",
          link: {
            type: "generated-index",
            slug: "controls/utility",
          },
          items: [
            "controls/audio",
            "controls/audiorecorder",
            "controls/draggable",
            "controls/dragtarget",
            "controls/filepicker",
            "controls/flashlight",
            "controls/fletapp",
            "controls/geolocator",
            "controls/gesturedetector",
            "controls/hapticfeedback",
            "controls/interactiveviewer",
            "controls/mergesemantics",
            "controls/permissionhandler",
            "controls/rive",
            "controls/selectionarea",
            "controls/semantics",
            "controls/semanticsservice",
            "controls/shadermask",
            "controls/shakedetector",
            "controls/transparentpointer",
            "controls/video",
            "controls/windowdragarea",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Cookbook",
      items: [
        "cookbook/theming",
        "cookbook/keyboard-shortcuts",
        "cookbook/large-lists",
        "cookbook/drag-and-drop",
        "cookbook/file-picker-and-uploads",
        "cookbook/animations",
        "cookbook/authentication",
        "cookbook/client-storage",
        "cookbook/session-storage",
        "cookbook/encrypting-sensitive-data",
        "cookbook/pub-sub",
        "cookbook/control-refs",
        "cookbook/accessibility",
        "cookbook/logging",
        //"cookbook/packaging-desktop-app",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      link: {
        type: "generated-index",
        description:
          "Some of the awesome Flet tutorials to get your started:",
        slug: "/tutorials",
      },
      items: [
        "tutorials/python-todo",
        "tutorials/python-calculator",
        "tutorials/trello-clone",
        "tutorials/python-solitaire",
        "tutorials/python-chat",
      ],
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
        description:
          "Below is a list of all available Flet references:",
        slug: "/reference",
      },
      items: [
        "reference/colors",
        {
          type: "category",
          label: "CLI",
          link: {
            type: "doc",
            id: "reference/cli/index",
          },
          items: [
            "reference/cli/create",
            "reference/cli/run",
            "reference/cli/build",
            "reference/cli/pack",
            "reference/cli/publish",
          ],
        },
        "reference/environment-variables",
        "reference/icons",
        {
          type: "category",
          label: "Types",
          link: {
            type: "doc",
            id: "reference/types/index",
          },
          items: [
            {
              type: "category",
              label: "Dataclasses",
              items: [
                "reference/types/alignment",
                "reference/types/animation",
                "reference/types/autocompletesuggestion",
                "reference/types/badge",
                "reference/types/blur",
                "reference/types/border",
                "reference/types/borderradius",
                "reference/types/borderside",
                "reference/types/boxshadow",
                "reference/types/boxdecoration",
                "reference/types/buttonstyle",
                "reference/types/colorfilter",
                "reference/types/decorationimage",
                "reference/types/duration",
                "reference/types/filepickerfile",
                "reference/types/filepickeruploadfile",
                "reference/types/geolocatorandroidsettings",
                "reference/types/geolocatorapplesettings",
                "reference/types/geolocatorposition",
                "reference/types/geolocatorsettings",
                "reference/types/geolocatorwebsettings",
                "reference/types/gradient",
                "reference/types/inputfilter",
                "reference/types/lineargradient",
                "reference/types/locale",
                "reference/types/localeconfiguration",
                "reference/types/margin",
                "reference/types/markdowncodetheme",
                "reference/types/mapinteractionconfiguration",
                "reference/types/maplatitudelongitude",
                "reference/types/maplatitudelongitudebounds",
                "reference/types/mapstrokepattern",
                "reference/types/menustyle",
                "reference/types/offset",
                "reference/types/outlinedborder",
                "reference/types/padding",
                "reference/types/paint",
                "reference/types/paintlineargradient",
                "reference/types/paintradialgradient",
                "reference/types/paintsweepgradient",
                "reference/types/radialgradient",
                "reference/types/rotate",
                "reference/types/scale",
                "reference/types/sweepgradient",
                "reference/types/textselection",
                "reference/types/textspan",
                "reference/types/textstyle",
                "reference/types/tooltip",
                "reference/types/videosubtitleconfiguration",
              ],
            },
            {
              type: "category",
              label: "Enums",
              items: [
                "reference/types/animatedswitchertransition",
                "reference/types/animationcurve",
                "reference/types/animationvalue",
                "reference/types/applifecyclestate",
                "reference/types/attributionalignment",
                "reference/types/audioencoder",
                "reference/types/audiostate",
                "reference/types/autofillgroupdisposeaction",
                "reference/types/autofillhint",
                "reference/types/axis",
                "reference/types/blendmode",
                "reference/types/blurtilemode",
                "reference/types/bordersidestrokealign",
                "reference/types/boxshape",
                "reference/types/brightness",
                "reference/types/clipbehavior",
                "reference/types/controlstate",
                "reference/types/crossaxisalignment",
                "reference/types/charttooltipdirection",
                "reference/types/cupertinodatepickerdateorder",
                "reference/types/cupertinodatepickermode",
                "reference/types/cupertinotimerpickermode",
                "reference/types/datepickerentrymode",
                "reference/types/datepickermode",
                "reference/types/dismissdirection",
                "reference/types/filepickerfiletype",
                "reference/types/filterquality",
                "reference/types/floatingactionbuttonlocation",
                "reference/types/fontweight",
                "reference/types/geolocatoractivitytype",
                "reference/types/geolocatorpermissionstatus",
                "reference/types/gradienttilemode",
                "reference/types/imagefit",
                "reference/types/imagerepeat",
                "reference/types/inputborder",
                "reference/types/listtilealignment",
                "reference/types/listtilestyle",
                "reference/types/keyboardtype",
                "reference/types/labelposition",
                "reference/types/mainaxisalignment",
                "reference/types/markdownselectionchangecause",
                "reference/types/markdownstylesheet",
                "reference/types/mapeventsource",
                "reference/types/mapinteractiveflag",
                "reference/types/mapmultifingergesture",
                "reference/types/mappatternfit",
                "reference/types/mappointerdevicetype",
                "reference/types/maptilelayerevicterrortilestrategy",
                "reference/types/markdownextensionset",
                "reference/types/mousecursor",
                "reference/types/navigationraillabeltype",
                "reference/types/navigationbarlabelbehavior",
                "reference/types/notchshape",
                "reference/types/orientation",
                "reference/types/pageplatform",
                "reference/types/permissionstatus",
                "reference/types/permissiontype",
                "reference/types/piecharteventtype",
                "reference/types/pointmode",
                "reference/types/popupmenuposition",
                "reference/types/playlistmode",
                "reference/types/scrollmode",
                "reference/types/releasemode",
                "reference/types/shadowblurstyle",
                "reference/types/sliderinteraction",
                "reference/types/snackbarbehavior",
                "reference/types/stackfit",
                "reference/types/strokecap",
                "reference/types/strokejoin",
                "reference/types/tabalignment",
                "reference/types/textaffinity",
                "reference/types/textalign",
                "reference/types/textbaseline",
                "reference/types/textcapitalization",
                "reference/types/textdecoration",
                "reference/types/textdecorationstyle",
                "reference/types/textoverflow",
                "reference/types/textthemestyle",
                "reference/types/thememode",
                "reference/types/themevisualdensity",
                "reference/types/tileaffinity",
                "reference/types/timepickerentrymode",
                "reference/types/tooltiptriggermode",
                "reference/types/urltarget",
                "reference/types/verticalalignment",
                "reference/types/visibilitymode",
                "reference/types/visualdensity",
                "reference/types/windoweventtype",
              ],
            },
            {
              type: "category",
              label: "Events",
              items: [
                "reference/types/applifecyclestatechangeevent",
                "reference/types/audiodurationchangeevent",
                "reference/types/audiopositionchangeevent",
                "reference/types/audiostatechangeevent",
                "reference/types/autocompleteselectevent",
                "reference/types/barchartevent",
                "reference/types/canvasresizeevent",
                "reference/types/containertapevent",
                "reference/types/datepickerentrymodechangeevent",
                "reference/types/dragendevent",
                "reference/types/dragstartevent",
                "reference/types/dragtargetevent",
                "reference/types/dragupdateevent",
                "reference/types/filepickerresultevent",
                "reference/types/filepickeruploadevent",
                "reference/types/geolocatorpositionchangeevent",
                "reference/types/hoverevent",
                "reference/types/keyboardevent",
                "reference/types/interactiveviewerinteractionendevent",
                "reference/types/interactiveviewerinteractionstartevent",
                "reference/types/interactiveviewerinteractionupdateevent",
                "reference/types/longpressendevent",
                "reference/types/longpressstartevent",
                "reference/types/markdownselectionchangeevent",
                "reference/types/mapevent",
                "reference/types/mappointerevent",
                "reference/types/mappositionchangeevent",
                "reference/types/maptapevent",
                "reference/types/multitapevent",
                "reference/types/onscrollevent",
                "reference/types/pagemediadata",
                "reference/types/piechartevent",
                "reference/types/routechangeevent",
                "reference/types/scaleendevent",
                "reference/types/scalestartevent",
                "reference/types/scaleupdateevent",
                "reference/types/scrollevent",
                "reference/types/tapevent",
                "reference/types/timepickerentrymodechangeevent",
                "reference/types/viewpopevent",
                "reference/types/windowevent",
                "reference/types/windowresizeevent",
              ],
            },
            "reference/types/browsercontextmenu",
            "reference/types/window",
          ],
        },
      ],
    }
  ],
};
