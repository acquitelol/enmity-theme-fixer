const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const S=e.View;e.VirtualizedList,e.Form;const p=e.FormArrow;e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const N=e.FormDivider;e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const T=e.FormRow,b=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes,window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const M=window.enmity.modules.common.Users;window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const P=window.enmity.modules.common.StyleSheet,C=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components;const R=window.enmity.modules.common.Locale;window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function Y(o,t,i){return window.enmity.utilities.findInReactTree(o,t,i)}function f(o){return window.enmity.assets.getIDByName(o)}const l={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,t)=>window.enmity.modules.filters.byName(o,t),byTypeName:(o,t)=>window.enmity.modules.filters.byTypeName(o,t),byDisplayName:(o,t)=>window.enmity.modules.filters.byDisplayName(o,t)};function _(...o){return window.enmity.modules.bulk(...o)}window.enmity.modules.common;function A(o){window.enmity.plugins.registerPlugin(o)}function L(o){return window.enmity.patcher.create(o)}var k="EnmityYou",D="1.0.4",G="Allows you to use Enmity inside of the new You Tab. Enable from DevTools Widget \u279D Design Toggles :3",x=[{name:"Rosie<3",id:"581573474296791211"}],H="#ff91ff",I={name:k,version:D,description:G,authors:x,color:H};const w=L(I.name),[U,F,v,h,B]=_(l.byName("SettingsOverviewScreen",!1),l.byProps("useSettingScreen"),l.byProps("useSettingTitle"),l.byName("Icon"),l.byName("getScreens")),y=P.createThemedStyleSheet({form:{width:"100%",borderRadius:16,backgroundColor:C.colors.BACKGROUND_PRIMARY},icon:{width:16,height:16,tintColor:"#fff",margin:8}}),O={...I,onStart(){w.after(F,"useSettingScreens",(o,t,i)=>{const{Enmity:a,EnmityPlugins:c,EnmityThemes:g}=B(M.getCurrentUser());i={...i};const d=r=>({navigation:m,route:{params:s}})=>(n.useEffect(()=>{s!=null&&s.hasSetHeaderRight||(s.hasSetHeaderRight=!0,m.setOptions({headerRight:()=>n.createElement(S,{style:{left:12}},n.createElement(r.headerRight,null))}))},[]),n.createElement(r.render,null));return Object.assign(i,{ENMITY:{route:"Enmity",getComponent:()=>a.render},ENMITY_PLUGINS:{route:"EnmityPlugins",getComponent:()=>d(c)},ENMITY_THEMES:{route:"EnmityThemes",getComponent:()=>d(g)},ENMITY_PAGE:{route:"EnmityCustomPage",getComponent:()=>({navigation:r,route:{params:m}})=>{var s;const u=(s=m.pagePanel)!=null?s:S;return n.useEffect(()=>{m.pageName&&!(m!=null&&m.hasSetTitle)&&(m.hasSetTitle=!0,r.setOptions({title:m.pageName}))},[]),n.createElement(u,null)}}}),i}),w.after(v,"useSettingTitles",(o,t,i)=>(Object.assign(i,{ENMITY:"General",ENMITY_PLUGINS:"Plugins",ENMITY_THEMES:"Themes",ENMITY_PAGE:"Page"}),i)),w.after(U,"default",(o,[{navigation:t}],{props:{children:i}})=>{const{children:a}=Y(i,E=>E.children[1].type===b),c=a.findIndex(E=>E.props.title===R.Messages.PREMIUM_SETTINGS_GENERIC),{ENMITY:g,ENMITY_PLUGINS:d,ENMITY_THEMES:r}=F.useSettingScreens(),{ENMITY:m,ENMITY_PLUGINS:s,ENMITY_THEMES:u}=v.useSettingTitles();a.splice(c===-1?1:c,0,n.createElement(b,{key:"Enmity",title:"Enmity",inset:!0},n.createElement(S,{style:y.form},n.createElement(T,{label:m,leading:()=>n.createElement(h,{source:{uri:"https://files.enmity.app/icon-64.png"},style:y.icon}),trailing:n.createElement(p,null),onPress:()=>void t.push(g.route)}),n.createElement(N,null),n.createElement(T,{label:s,leading:()=>n.createElement(h,{source:f("ic_activity_24px"),style:y.icon}),trailing:n.createElement(p,null),onPress:()=>void t.push(d.route,{placeholder:s})}),n.createElement(N,null),n.createElement(T,{label:u,leading:()=>n.createElement(h,{source:f("img_nitro_star"),style:y.icon}),trailing:n.createElement(p,null),onPress:()=>void t.push(r.route,{placeholder:u})}))))})},onStop(){w.unpatchAll()}};A(O);