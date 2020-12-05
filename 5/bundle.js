/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/dayjs/plugin/duration.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/duration.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,s){ true?module.exports=s():undefined}(this,function(){"use strict";var t,s,n=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,i={years:31536e6,months:2592e6,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},e=function(t){return t instanceof u},r=function(t,s,n){return new u(t,n,s.$l)},o=function(t){return s.p(t)+"s"},u=function(){function s(t,s,e){var u=this;if(this.$d={},this.$l=e,s)return r(t*i[o(s)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach(function(s){u.$d[o(s)]=t[s]}),this.calMilliseconds(),this;if("string"==typeof t){var h=t.match(n);if(h)return this.$d.years=h[2],this.$d.months=h[3],this.$d.weeks=h[4],this.$d.days=h[5],this.$d.hours=h[6],this.$d.minutes=h[7],this.$d.seconds=h[8],this.calMilliseconds(),this}return this}var u=s.prototype;return u.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(s,n){return s+(t.$d[n]||0)*i[n]},0)},u.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=Math.floor(t/31536e6),t%=31536e6,this.$d.months=Math.floor(t/2592e6),t%=2592e6,this.$d.days=Math.floor(t/864e5),t%=864e5,this.$d.hours=Math.floor(t/36e5),t%=36e5,this.$d.minutes=Math.floor(t/6e4),t%=6e4,this.$d.seconds=Math.floor(t/1e3),t%=1e3,this.$d.milliseconds=t},u.toISOString=function(){var t=this.$d.years?this.$d.years+"Y":"",s=this.$d.months?this.$d.months+"M":"",n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=n?n+"D":"",e=this.$d.hours?this.$d.hours+"H":"",r=this.$d.minutes?this.$d.minutes+"M":"",o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var u=o?o+"S":"",h="P"+t+s+i+(e||r||u?"T":"")+e+r+u;return"P"===h?"P0D":h},u.toJSON=function(){return this.toISOString()},u.as=function(t){return this.$ms/i[o(t)]},u.get=function(t){var s=this.$ms,n=o(t);return"milliseconds"===n?s%=1e3:s="weeks"===n?Math.floor(s/i[n]):this.$d[n],s},u.add=function(t,s,n){var u;return u=s?t*i[o(s)]:e(t)?t.$ms:r(t,this).$ms,r(this.$ms+u*(n?-1:1),this)},u.subtract=function(t,s){return this.add(t,s,!0)},u.locale=function(t){var s=this.clone();return s.$l=t,s},u.clone=function(){return r(this.$ms,this)},u.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},u.milliseconds=function(){return this.get("milliseconds")},u.asMilliseconds=function(){return this.as("milliseconds")},u.seconds=function(){return this.get("seconds")},u.asSeconds=function(){return this.as("seconds")},u.minutes=function(){return this.get("minutes")},u.asMinutes=function(){return this.as("minutes")},u.hours=function(){return this.get("hours")},u.asHours=function(){return this.as("hours")},u.days=function(){return this.get("days")},u.asDays=function(){return this.as("days")},u.weeks=function(){return this.get("weeks")},u.asWeeks=function(){return this.as("weeks")},u.months=function(){return this.get("months")},u.asMonths=function(){return this.as("months")},u.years=function(){return this.get("years")},u.asYears=function(){return this.as("years")},s}();return function(n,i,o){t=o,s=o().$utils(),o.duration=function(t,s){var n=o.locale();return r(t,{$l:n},s)},o.isDuration=e;var u=i.prototype.add,h=i.prototype.subtract;i.prototype.add=function(t,s){return e(t)&&(t=t.asMilliseconds()),u.bind(this)(t,s)},i.prototype.subtract=function(t,s){return e(t)&&(t=t.asMilliseconds()),h.bind(this)(t,s)}}});


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: MAX_VIEW_CITIES, TRIP_ITEMS, CITIES, MENU, FILTERS, SORT, OFFERS, DESCRIPTION_SENTENCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_VIEW_CITIES", function() { return MAX_VIEW_CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIP_ITEMS", function() { return TRIP_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITIES", function() { return CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU", function() { return MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERS", function() { return FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT", function() { return SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFFERS", function() { return OFFERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCRIPTION_SENTENCES", function() { return DESCRIPTION_SENTENCES; });
const MAX_VIEW_CITIES = 3;
const TRIP_ITEMS = ['Taxi', 'Bus', 'Train', 'Ship', 'Transport', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const CITIES = ['Amsterdam', 'Chamonix', 'Geneva'];

const MENU = [
  {
    title: 'Table',
    active: true
  },{
    title: 'Stats',
    active: false
  }
];

const FILTERS = [
  {
    title: 'Everything',
    active: true
  },{
    title: 'Future',
    active: false
  },{
    title: 'Past',
    active: false
  }
];

const SORT = [
  {
    title: 'Day',
    active: true
  },
  {
    title: 'Event',
    active: false
  },
  {
    title: 'Time',
    active: false
  },
  {
    title: 'Price',
    active: false
  },
  {
    title: 'Offers',
    active: false
  }
];

const OFFERS = new Map([
  ['luggage', {
    title: 'Add luggage',
    price: 30
  }],
  ['comfort', {
    title: 'Switch to comfort class',
    price: 100
  }],
  ['meal', {
    title: 'Add meal',
    price: 15
  }],
  ['seats', {
    title: 'Choose seats',
    price: 5
  }],
  ['train', {
    title: 'Travel by train',
    price: 40
  }]
]);

const DESCRIPTION_SENTENCES = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_trip_info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/trip-info.js */ "./src/view/trip-info.js");
/* harmony import */ var _view_trip_cost_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/trip-cost.js */ "./src/view/trip-cost.js");
/* harmony import */ var _view_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/menu.js */ "./src/view/menu.js");
/* harmony import */ var _view_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/filter.js */ "./src/view/filter.js");
/* harmony import */ var _view_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/sort.js */ "./src/view/sort.js");
/* harmony import */ var _view_trip_items_list_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/trip-items-list.js */ "./src/view/trip-items-list.js");
/* harmony import */ var _view_trip_item_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/trip-item.js */ "./src/view/trip-item.js");
/* harmony import */ var _view_create_form_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/create-form.js */ "./src/view/create-form.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/point.js */ "./src/mock/point.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");











const POINT_COUNT = 15;
const points = new Array(POINT_COUNT).fill().map(_mock_point_js__WEBPACK_IMPORTED_MODULE_8__["generatePoint"]);
const pointsSortByDate = points.sort(function(a,b) {return a.startDate - b.startDate});

const pageBody = document.querySelector('.page-body');
const tripMain = pageBody.querySelector('.trip-main');

Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(tripMain, new _view_trip_info_js__WEBPACK_IMPORTED_MODULE_0__["default"](pointsSortByDate).getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].AFTERBEGIN);
const tripInfoSection = pageBody.querySelector('.trip-info');
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(tripInfoSection, new _view_trip_cost_js__WEBPACK_IMPORTED_MODULE_1__["default"](pointsSortByDate).getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

const tripControls = pageBody.querySelector('.trip-controls');
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(tripControls, new _view_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(tripControls, new _view_filter_js__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

const renderPoint = (pointListElement, point) => {
  const pointItem = new _view_trip_item_js__WEBPACK_IMPORTED_MODULE_6__["default"](point);
  const pointEditItem = new _view_create_form_js__WEBPACK_IMPORTED_MODULE_7__["default"](point);

  const replaceToEditForm = () => {
    pointListElement.replaceChild(pointEditItem.getElement(), pointItem.getElement());
  };

  const replaceToPointItem = () => {
    pointListElement.replaceChild(pointItem.getElement(), pointEditItem.getElement());
  };

  pointItem.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceToEditForm();
  });

  pointEditItem.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceToPointItem();
  });

  Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(pointListElement, pointItem.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
};

const tripEvents = pageBody.querySelector('.trip-events');
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(tripEvents, new _view_sort_js__WEBPACK_IMPORTED_MODULE_4__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
const pointsList = new _view_trip_items_list_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(tripEvents, pointsList.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
for (let i = 0; i < POINT_COUNT; i++) {
  renderPoint(pointsList.getElement(), pointsSortByDate[i]);
}



/***/ }),

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/*! exports provided: generatePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePoint", function() { return generatePoint; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const getRandomItem = (items) => {
  return items[Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, items.length - 1)];
}

const generateDescription = (sentences) => {
  const descriptionSentencesCount = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 5);
  const newDescription = new Set();

  while (newDescription.size <= descriptionSentencesCount) {
    newDescription.add(sentences[Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, sentences.length - 1)]);
  }

  const description = Array.from(newDescription);
  return description.join(' ');
};

const generateOffers = (offers) => {
  const offersArray = Array.from(offers.values());
  const offersNumbers = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, offers.size);

  if (offersNumbers === 0) {
    return [];
  }

  const offersNew = new Set();
  while(offersNew.size < offersNumbers) {
    const index = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, offersArray.length - 1);
    offersNew.add(offersArray[index]);
  }
  return Array.from(offersNew);
};

const generatePhotosList = () => {
  const isPhotos = Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1));

  if (!isPhotos) {
    return null;
  }

  const photosCount = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 5);

  const photos = [];
  for (let i = 0; i < photosCount; i++) {
    photos[i] = `http://picsum.photos/248/152?r=${Math.random()}`;
  }

  return photos;
};

const generateDate = () => {
  const dayGap = 7;
  const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(dayGap, 'day');
  const finishDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate).add(dayGap, 'day');

  const randomStartDate = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(startDate, finishDate);
  
  return {
    startDate: randomStartDate,
    finishDate: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(randomStartDate, finishDate)
  }
}

const generatePoint = () => {
  const dates = generateDate();

  return {
    eventType: getRandomItem(_const_js__WEBPACK_IMPORTED_MODULE_2__["TRIP_ITEMS"]),
    destination: getRandomItem(_const_js__WEBPACK_IMPORTED_MODULE_2__["CITIES"]),
    offers: generateOffers(_const_js__WEBPACK_IMPORTED_MODULE_2__["OFFERS"]),
    description: generateDescription(_const_js__WEBPACK_IMPORTED_MODULE_2__["DESCRIPTION_SENTENCES"]),
    photos: generatePhotosList(),
    startDate: dates.startDate,
    finishDate: dates.finishDate,
    price: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(20, 1200),
    isFavorite: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0,1))
  };
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInteger, RenderPosition, render, renderTemplate, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend'
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  if (newElement.children.length > 1) {
    return newElement;
  }
  
  return newElement.firstChild;
};


/***/ }),

/***/ "./src/view/create-form.js":
/*!*********************************!*\
  !*** ./src/view/create-form.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateForm; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const generateEventsItems = (events, eventType) => {
  const eventsList = [];

  for (let i = 0; i < events.length; i++) {
    eventsList[i] = `
      <div class="event__type-item">
        <input id="event-type-${events[i].toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
          value="${events[i].toLowerCase()}" ${(events[i] === eventType) ? 'checked' : ''}>
        <label class="event__type-label  event__type-label--${events[i].toLowerCase()}" for="event-type-${events[i].toLowerCase()}-1">${events[i]}</label>
      </div>`
  }

  return eventsList.join('');
};

const generateDatalist = (array) => {
  const list = [];

  for (let i = 0; i <array.length; i++) {
    list[i] = `<option value=${array[i]}></option>`;
  }
  return list.join('');
};

const generateOffers = (offersForm, offers) => {
  const offersList = new Set();
  
  for (let value of offersForm.entries()) {
    offersList.add(
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer--${value[0]}-1" type="checkbox"
          name="event-offer-${value[0]}" ${(offers.indexOf(value[1]) !== -1) ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer--${value[0]}-1">
          <span class="event__offer-title">${value[1].title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${value[1].price}</span>
        </label>
      </div>`
    );
  }

  return Array.from(offersList).join('');
};

const generatePhotosList = (photos) => {
  const photosList = [];
  if (photos) {
    for (let i = 0; i < photos.length; i++) {
      photosList[i] = `<img class="event__photo" src="${photos[i]}" alt="Event photo">`
    };
  };
  return photosList.join('');
}

const createForm = (point) => {
  const {eventType, destination, price, startDate, finishDate, description, offers, photos} = point;
  
  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${eventType.toLowerCase()}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${generateEventsItems(_const_js__WEBPACK_IMPORTED_MODULE_2__["TRIP_ITEMS"], eventType)}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
          ${eventType}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text"
            name="event-destination" value="${destination}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${generateDatalist(_const_js__WEBPACK_IMPORTED_MODULE_2__["CITIES"])}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"
            value="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate).format('D/MM/YY HH:mm')}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
            value="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(finishDate).format('D/MM/YY HH:mm')}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
            ${generateOffers(_const_js__WEBPACK_IMPORTED_MODULE_2__["OFFERS"], offers)}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>

          <div class="event__photos-container ${(!photos) ? 'visually-hidden' : ''}">
            <div class="event__photos-tape">
              ${generatePhotosList(photos)}
            </div>
          </div>
        </section>
      </section>
    </form>
  </li>`;
};

class CreateForm {
  constructor(points) {
    this._points = points;
    this._element = null;
  }

  getTemplate() {
    return createForm(this._points);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
};

/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteFilters; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



const generateFilter = (filters) => {
  const filtersList = [];
  for (const filter of filters) {
    filtersList.push(
      `<div class="trip-filters__filter">
        <input id="filter-${filter.title.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"
          value="${filter.title.toLowerCase()}" ${(filter.active) ? 'checked' : ''}>
        <label class="trip-filters__filter-label" for="filter-${filter.title.toLowerCase()}">${filter.title}</label>
      </div>`);
  }

  return filtersList.join('');
}

const filters = () => {
  return `<h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
      ${generateFilter(_const_js__WEBPACK_IMPORTED_MODULE_0__["FILTERS"])}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;
};

class SiteFilters {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return filters();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
};

/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenu; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



const generateSorting = (menu) => {
  const menuList = [];
  for (const item of menu.values()) {
    menuList.push(
      `<a class="${(item.active) ? 'trip-tabs__btn  trip-tabs__btn--active' : 'trip-tabs__btn'}" href="#">${item.title}</a>`
      );
  }

  return menuList.join('');
}

const createMenu = () => {
  return `<h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      ${generateSorting(_const_js__WEBPACK_IMPORTED_MODULE_0__["MENU"])}
    </nav>`;
};

class SiteMenu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMenu();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
};

/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteSorting; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



const generateSorting = (sorting) => {
  const sortList = [];
  for (const sort of sorting.values()) {
    sortList.push(`<div class="trip-sort__item  trip-sort__item--${sort.title.toLowerCase()}">
      <input id="sort-${sort.title.toLowerCase()}" class="trip-sort__input visually-hidden" type="radio" name="trip-sort" value="sort-${sort.title.toLowerCase()}" ${(sort.active) ? 'checked' : ''}>
      <label class="trip-sort__btn" for="sort-${sort.title.toLowerCase()}">${sort.title}</label>
    </div>`);
  }

  return sortList.join('');
}

const sorting = () => {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${generateSorting(_const_js__WEBPACK_IMPORTED_MODULE_0__["SORT"])}
    </form>`;
};

class SiteSorting {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return sorting();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
};

/***/ }),

/***/ "./src/view/trip-cost.js":
/*!*******************************!*\
  !*** ./src/view/trip-cost.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripCost; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const generateTotalPrice = (points) => {
  const startPrice = 0;
  const totalPrice = points.reduce((a, b) => a + b.price, startPrice);
  return totalPrice;
};

const tripCost = (points) => {
  return `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${generateTotalPrice(points)}</span>
    </p>`;
};

class TripCost {
  constructor(points) {
    this._points = points;
    this._element = null;
  }

  getTemplate() {
    return tripCost(this._points);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
};

/***/ }),

/***/ "./src/view/trip-info.js":
/*!*******************************!*\
  !*** ./src/view/trip-info.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripInfo; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");





const generateTripRoute = (points) => {
  
  const cities = new Set();
  for (let i = 0; i < points.length; i++) {
    cities.add(points[i].destination);
  };
  const travelCities = Array.from(cities);
  const startCity = travelCities[0];
  const finishCity = travelCities[travelCities.length - 1];

  if (startCity === finishCity) {
    return `<h1 class="trip-info__title">${startCity}</h1>`;
  } else if (startCity !== finishCity && travelCities.length < _const__WEBPACK_IMPORTED_MODULE_2__["MAX_VIEW_CITIES"]) {
    return `<h1 class="trip-info__title">${startCity} &mdash; ${finishCity}</h1>`;
  } else {
    return `<h1 class="trip-info__title">${startCity} &mdash; ${(travelCities.length === _const__WEBPACK_IMPORTED_MODULE_2__["MAX_VIEW_CITIES"]) ? travelCities[1] : '...'} &mdash; ${finishCity}</h1>`;
  }
}

const generateTripDates = (points) => {
  const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(points[0].startDate);
  let finishDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(points[points.length - 1].finishDate);

  if (startDate.isSame(finishDate, 'D')) {
    return `<p class="trip-info__dates">${startDate.format('MMM D')}</p>`;
  };

  if (finishDate.diff(startDate, 'month') > 0) {
    finishDate = finishDate.format('MMM D');
  } else {
    finishDate = finishDate.format('D');
  };

  return `<p class="trip-info__dates">${startDate.format('MMM D')}&nbsp;&mdash;&nbsp;${finishDate}</p>`;
};

const tripInfo = (points) => {
  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      ${generateTripRoute(points)}

      ${generateTripDates(points)}
    </div>
  </section>`;
};

class TripInfo {
  constructor(points) {
    this._points = points;
    this._element = null;
  }

  getTemplate() {
    return tripInfo(this._points);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
};

/***/ }),

/***/ "./src/view/trip-item.js":
/*!*******************************!*\
  !*** ./src/view/trip-item.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PoinItem; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");

const duration = __webpack_require__(/*! dayjs/plugin/duration */ "./node_modules/dayjs/plugin/duration.js");
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(duration);


const offers = (point) => {
  const offers = point.offers;

  if (offers.length === 0) {
    return '';
  }

  const offersList = [];

  for (const offer of offers) {
    offersList.push(`<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>`);
  };
  
  return offersList.join('');
};

const generateDuration = (point) => {
  const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(point.startDate);
  const finishDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(point.finishDate);

  const duration = dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.duration(finishDate.diff(startDate));

  if (duration.get('days') > 0) {
    return `${duration.get('days')}D ${duration.get('hours')}H ${duration.get('minutes')}M`;
  } else if (duration.get('hours') > 0) {
    return `${duration.get('hours')}H ${duration.get('minutes')}M`;
  } else {
    return `${duration.get('minutes')}M`;
  }
};

const pointItem = (point) => {
  const {eventType, destination, price, isFavorite, startDate, finishDate} = point;
  
  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate).format('YYYY-MM-D')}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate).format('D MMM')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${eventType} ${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate).format('YYYY-MM-DTHH:mm')}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate).format('HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(finishDate).format('YYYY-MM-DTHH:mm')}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(finishDate).format('HH:mm')}</time>
        </p>
        <p class="event__duration">${generateDuration(point)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offers(point)}
      </ul>
      <button class="${(isFavorite) ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn'}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path
            d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

class PoinItem {
  constructor(points) {
    this._points = points;
    this._element = null;
  }

  getTemplate() {
    return pointItem(this._points);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
};


/***/ }),

/***/ "./src/view/trip-items-list.js":
/*!*************************************!*\
  !*** ./src/view/trip-items-list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointsList; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const pointsList = () => {
  return `<ul class="trip-events__list"></ul>`;
}

class PointsList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return pointsList();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
      return this._element;
    }

    removeElement() {
      this._element = null;
  }
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map