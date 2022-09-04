(() => {
  "use strict";
  var t = {
      890: (t, e, n) => {
        n.d(e, { Z: () => a });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          d = n.n(i)()(o());
        d.push([
          t.id,
          "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);",
        ]),
          d.push([
            t.id,
            '* {\n  margin: 0;\n  padding: 0;\n}\n\n#container {\n  height: 100vh;\n  overflow: auto;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  font-family: "Roboto", sans-serif;\n  color: #202020;\n}\n\n.sidebar {\n  color: #ecfdf5;\n  font-weight: 500;\n  font-size: 1.5rem;\n  background-color: #047857;\n  padding: 32px;\n  border: solid 2px #047857;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  display: grid;\n  grid-template-rows: 4rem 8fr 100%;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  font-size: 3rem;\n  min-width: max-content;\n  color: #ecfdf5;\n  padding-right: 5px;\n  padding-top: 0px;\n  grid-area: 1/1/2/2;\n}\n\n.home-tab {\n  padding-bottom: 8px;\n  font-size: 1.7rem;\n}\n\n.today-tab {\n  padding-bottom: 8px;\n  font-size: 1.7rem;\n}\n\n.this-week-tab {\n  padding-bottom: 24px;\n  font-size: 1.7rem;\n}\n\n.projects-tab {\n  grid-area: 2/1/-1/2;\n  display: flex;\n  flex-direction: column;\n}\n\n.projects-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 2rem;\n  font-weight: 900;\n}\n\n.add-projects-button {\n  margin-right: -5px;\n}\n\n.projects {\n  margin-top: 16px;\n  font-size: 2.2rem;\n}\n\n.project-tab {\n  display: flex;\n  justify-content: space-between;\n}\n\n.tab {\n  display: flex;\n  align-items: start;\n  column-gap: 12px;\n}\n\n#content {\n  width: 100%;\n  background-color: #ecfdf5;\n  box-sizing: border-box;\n  padding: 32px 64px;\n  display: grid;\n  grid-template-rows: 4rem min-content min-content 100%;\n  position: relative;\n}\n.tab-section {\n  margin-top: 24px;\n}\n\n.header-section {\n  grid-area: 1/1/2/2;\n  display: flex;\n  align-items: center;\n  column-gap: 24px;\n}\n\n.header-title {\n  font-size: 4rem;\n  font-weight: 600;\n}\n\n.header-date {\n  font-size: 1.5rem;\n  font-weight: 500;\n  padding-top: 8px;\n}\n\n#tasks-container {\n  margin-top: 20px;\n}\n\n.priority-container {\n  padding: 24px 0px;\n}\n\n.priority-container:first-of-type {\n  padding-top: 0px;\n}\n\n.task-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 16px;\n  padding-right: 24px;\n  border-radius: 2px;\n}\n\n.priority1-tasks .task-row {\n  border-bottom: 2px solid #ec6767;\n}\n.priority2-tasks .task-row {\n  border-bottom: 2px solid #ec9a57;\n}\n.priority3-tasks .task-row {\n  border-bottom: 2px solid #f0d362;\n}\n.priority4-tasks .task-row {\n  border-bottom: 2px solid #047857;\n}\n\n.task-items {\n  display: grid;\n  grid-template-columns: max-content 2fr 4fr max-content;\n  align-items: center;\n  width: 100%;\n}\n\n.task-title {\n  font-weight: 500px;\n  font-size: 1.1rem;\n  padding: 0px 8px;\n}\n\n.task-description {\n  font-weight: 300px;\n  font-size: 1rem;\n  padding: 0px 8px;\n}\n\n.task-due-date {\n  width: 12ch;\n  padding: 0px 8px;\n  text-align: center;\n}\n\n.revision-items {\n  display: flex;\n  column-gap: 8px;\n  align-items: center;\n  padding-left: 8px;\n}\n\n.priority1-tasks .task-due-date,\n.priority1-tasks .task-description,\n.priority1-tasks .revision-items {\n  border-left: 1px solid #ec6767;\n}\n.priority2-tasks .task-due-date,\n.priority2-tasks .task-description,\n.priority2-tasks .revision-items {\n  border-left: 1px solid #ec9a57;\n}\n\n.priority3-tasks .task-due-date,\n.priority3-tasks .task-description,\n.priority3-tasks .revision-items {\n  border-left: 1px solid #f0d362;\n}\n\n.priority4-tasks .task-due-date,\n.priority4-tasks .task-description,\n.priority4-tasks .revision-items,\n.due-date-field,\n.form-btns,\n.description-field {\n  border-left: 1px solid #047857;\n}\n\n.add-task-btn {\n  font-size: 1.1rem;\n  font-weight: 450;\n  color: #ecfdf5;\n  padding: 6px 16px;\n  border-radius: 8px;\n  border: 2px solid #047857;\n  background-color: #047857;\n  display: flex;\n  column-gap: 8px;\n  align-items: center;\n  justify-content: center;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\n.form-fields {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 16px;\n  padding-right: 24px;\n\n  border-radius: 2px;\n  border-bottom: 2px solid #047857;\n}\n\n.form-items {\n  display: grid;\n  grid-template-columns: max-content 2fr 4fr max-content;\n  align-items: center;\n  width: 100%;\n}\n.priority-field {\n  max-width: 2ch;\n  margin-left: -5px;\n}\n\n.title-field {\n  font-weight: 500px;\n  font-size: 1.1rem;\n  padding: 0px 8px;\n}\n\n.description-field {\n  font-weight: 300px;\n  font-size: 1rem;\n  padding: 0px 8px;\n}\n\n.due-date-field {\n  width: 12ch;\n  padding: 0px 8px;\n  text-align: center;\n}\n\n#title {\n  font-weight: 500px;\n  font-size: 1.1rem;\n  width: 100%;\n  background-color: #ecfdf5;\n  border: 1px solid #ecfdf5;\n}\n#description {\n  font-weight: 300px;\n  font-size: 1rem;\n  width: 100%;\n  background-color: #ecfdf5;\n  border: 1px solid #ecfdf5;\n}\n\n#due-date {\n  width: 13ch;\n  box-sizing: border-box;\n  background-color: #ecfdf5;\n  border: 1px solid #ecfdf5;\n}\n\n#priority {\n  width: 100%;\n}\n\n#new_project_form {\n  display: flex;\n  justify-content: space-between;\n}\n\n.project-form-items {\n  display: flex;\n  align-items: start;\n  column-gap: 12px;\n}\n\n#project-input-name {\n  color: #047857;\n  font-weight: 600;\n  font-size: 1.5rem;\n  background-color: #ecfdf5;\n  border: 1px solid #ecfdf5;\n  border-radius: 2px;\n  width: 75%;\n  padding-left: 5px;\n  margin-left: -1px;\n}\n\n.add-project-btns {\n  display: flex;\n  justify-content: center;\n}\n\n.priority1-option {\n  background-color: #ecfdf5;\n  color: #ef4444;\n  text-align: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.priority2-option {\n  background-color: #ecfdf5;\n  color: #f97316;\n  text-align: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.priority3-option {\n  background-color: #ecfdf5;\n  color: #fbbf24;\n  text-align: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.priority4-option {\n  background-color: #ecfdf5;\n}\n\n.form-btns {\n  display: flex;\n  column-gap: 8px;\n  align-items: center;\n  padding-left: 8px;\n}\n\ninput[type="checkbox"]:checked ~ div {\n  text-decoration: line-through;\n  text-decoration-color: #047857;\n}\n\ninput[type="option"] {\n  accent-color: #047857;\n}\n\ninput[type="checkbox"] {\n  background-color: #047857;\n}\n\n.footer-section {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2.5rem;\n}\n\n.github-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 8px;\n  font-size: 1.2rem;\n  font-weight: 500;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.task-row:hover {\n  background-color: #d1fae5;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\n.add-task-btn:hover {\n  transition: all 0.2s;\n  transform-origin: 50% 50%;\n  transform: scale(1.05);\n}\n\n.tab:hover,\n.add-projects-button:hover,\n.delete-project-btn:hover,\n.delete-button:hover,\n.edit-button:hover,\n.submit-form-btn:hover,\n.cancel-form-btn:hover,\n.add-project-btn:hover,\n.cancel-project-btn:hover {\n  transition: all 0.4s;\n  transform-origin: 50% 50%;\n  transform: scale(1.2);\n}\n\n.tab:active,\n.add-projects-button:active,\n.delete-project-btn:active,\n.delete-button:active,\n.edit-button:active,\n.add-task-btn:active,\ninput[type="checkbox"]:checked ~ div,\ninput[type="checkbox"]:checked {\n  opacity: 0.5;\n}\n',
            "",
          ]);
        const a = d;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var d = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var c = this[a][0];
                  null != c && (d[c] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var l = [].concat(t[s]);
                (r && d[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, d = [], a = 0; a < t.length; a++) {
            var c = t[a],
              s = r.base ? c[0] + r.base : c[0],
              l = i[s] || 0,
              p = "".concat(s, " ").concat(l);
            i[s] = l + 1;
            var u = n(p),
              m = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(m);
            else {
              var f = o(m, r);
              (r.byIndex = a),
                e.splice(a, 0, { identifier: p, updater: f, references: 1 });
            }
            d.push(p);
          }
          return d;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var d = 0; d < i.length; d++) {
              var a = n(i[d]);
              e[a].references--;
            }
            for (var c = r(t, o), s = 0; s < i.length; s++) {
              var l = n(i[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = c;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + "");
      var e = n.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var r = e.getElementsByTagName("script");
        r.length && (t = r[r.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t);
    })(),
    (n.nc = void 0),
    (() => {
      function t() {
        return (
          !!(function (t) {
            let e;
            try {
              e = window.localStorage;
              const t = "__storage_test__";
              return e.setItem(t, t), e.removeItem(t), !0;
            } catch (t) {
              return (
                t instanceof DOMException &&
                (22 === t.code ||
                  1014 === t.code ||
                  "QuotaExceededError" === t.name ||
                  "NS_ERROR_DOM_QUOTA_REACHED" === t.name) &&
                e &&
                0 !== e.length
              );
            }
          })() || (console.log("No local storage available"), !1)
        );
      }
      function e(e, n) {
        t() && localStorage.setItem(e, JSON.stringify(n));
      }
      function r(t) {
        return JSON.parse(localStorage.getItem(t || "[]"));
      }
      const o = [],
        i = [];
      function d(t) {
        let e = Object.create(a);
        return (
          (e.title = t.title),
          (e.description = t.description),
          (e.dueDate = t.dueDate),
          (e.priority = t.priority),
          (e.projectId = t.projectId),
          (e.completedTracker = t.completedTracker),
          (e.taskId = t.taskId),
          e
        );
      }
      const a = {
        getTitle() {
          return this.title;
        },
        getDescription() {
          return this.description;
        },
        getDueDate() {
          return this.dueDate;
        },
        getPriority() {
          return this.priority;
        },
        getId() {
          return this.taskId;
        },
        updateCompleteTask() {
          this.completedTracker[this.completedTracker.length - 1]
            ? this.completedTracker.push(!1)
            : this.completedTracker.push(!0);
        },
        getCompleted() {
          return this.completedTracker[this.completedTracker.length - 1];
        },
        getProjectId() {
          return this.projectId;
        },
      };
      function c(t, e, n, r, i) {
        let a = n.replace(/-/g, "/"),
          c = new Date(a).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
        "Invalid Date" === c && (c = "");
        let l = (
          "Task" +
          t.replace(/ /g, "_") +
          (function () {
            let t = Math.ceil(0),
              e = Math.floor(1e4);
            return Math.floor(Math.random() * (e - t + 1) + t);
          })()
        ).replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, "");
        o.push(
          d(
            (function (t, e, n, r, o, i, d) {
              return {
                title: t,
                description: e,
                dueDate: n,
                priority: r,
                projectId: o,
                taskId: i,
                completedTracker: [!1],
              };
            })(t, e, c, r, i, l)
          )
        ),
          s();
      }
      function s() {
        t() && (localStorage.clear(), e("taskArray", o), e("projectArray", i));
      }
      function l() {
        if (!t()) return;
        o.splice(0, o.length);
        const e = (function () {
          if (null == r("taskArray")) return o;
          return r("taskArray")
            .slice(0)
            .map((t) => d(t));
        })();
        if ((o.push(...e), null == r("projectArray"))) return;
        i.splice(0, i.length);
        const n = r("projectArray").slice(0);
        i.push(...n);
      }
      function p() {
        return l(), o;
      }
      function u() {
        return p().sort(
          (t, e) => new Date(t.getDueDate()) - new Date(e.getDueDate())
        );
      }
      function m(t) {
        let e = o.findIndex((e) =>
          (function (t, e) {
            return t.getId() == e;
          })(e, t)
        );
        return e;
      }
      function f(t) {
        i.push(t), s();
      }
      function h() {
        return l(), i;
      }
      function g(t) {
        return i.includes(t);
      }
      var b = n(379),
        v = n.n(b),
        y = n(795),
        x = n.n(y),
        k = n(569),
        E = n.n(k),
        C = n(565),
        w = n.n(C),
        L = n(216),
        j = n.n(L),
        A = n(589),
        S = n.n(A),
        D = n(890),
        T = {};
      function I(t, e) {
        if (e.length < t)
          throw new TypeError(
            t +
              " argument" +
              (t > 1 ? "s" : "") +
              " required, but only " +
              e.length +
              " present"
          );
      }
      function q(t) {
        I(1, arguments);
        var e = Object.prototype.toString.call(t);
        return t instanceof Date ||
          ("object" == typeof t && "[object Date]" === e)
          ? new Date(t.getTime())
          : "number" == typeof t || "[object Number]" === e
          ? new Date(t)
          : (("string" != typeof t && "[object String]" !== e) ||
              "undefined" == typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
      }
      function N(t) {
        I(1, arguments);
        var e = q(t);
        return e.setHours(0, 0, 0, 0), e;
      }
      function z(t, e) {
        I(2, arguments);
        var n = N(t),
          r = N(e);
        return n.getTime() === r.getTime();
      }
      function M(t) {
        return I(1, arguments), z(t, Date.now());
      }
      (T.styleTagTransform = S()),
        (T.setAttributes = w()),
        (T.insert = E().bind(null, "head")),
        (T.domAPI = x()),
        (T.insertStyleElement = j()),
        v()(D.Z, T),
        D.Z && D.Z.locals && D.Z.locals;
      const _ = function () {
        document.querySelector("#content");
        const t = document.querySelector(".sidebar");
        Et(),
          t.classList.add("today-page"),
          t.classList.add("current-tab"),
          (function () {
            const t = document.createElement("div");
            t.classList.add("header-section");
            const e = document.createElement("div");
            e.classList.add("header-title"), (e.textContent = "Today");
            const n = new Date().toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
              r = document.createElement("div");
            r.classList.add("header-date"),
              (r.textContent = n),
              t.appendChild(e),
              t.appendChild(r),
              content.appendChild(t);
          })();
        const e = (function () {
          const t = u(),
            e = [];
          for (let n = 0; n < t.length; n++)
            M(new Date(t[n].getDueDate())) && e.push(t[n]);
          return e;
        })();
        ht(e);
      };
      function O(t) {
        if (null === t || !0 === t || !1 === t) return NaN;
        var e = Number(t);
        return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
      }
      var B = {};
      function P() {
        return B;
      }
      function R(t, e) {
        var n, r, o, i, d, a, c, s;
        I(1, arguments);
        var l = P(),
          p = O(
            null !==
              (n =
                null !==
                  (r =
                    null !==
                      (o =
                        null !== (i = null == e ? void 0 : e.weekStartsOn) &&
                        void 0 !== i
                          ? i
                          : null == e ||
                            null === (d = e.locale) ||
                            void 0 === d ||
                            null === (a = d.options) ||
                            void 0 === a
                          ? void 0
                          : a.weekStartsOn) && void 0 !== o
                      ? o
                      : l.weekStartsOn) && void 0 !== r
                  ? r
                  : null === (c = l.locale) ||
                    void 0 === c ||
                    null === (s = c.options) ||
                    void 0 === s
                  ? void 0
                  : s.weekStartsOn) && void 0 !== n
              ? n
              : 0
          );
        if (!(p >= 0 && p <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var u = q(t),
          m = u.getDay(),
          f = (m < p ? 7 : 0) + m - p;
        return u.setDate(u.getDate() - f), u.setHours(0, 0, 0, 0), u;
      }
      function H(t, e, n) {
        I(2, arguments);
        var r = R(t, n),
          o = R(e, n);
        return r.getTime() === o.getTime();
      }
      function Z(t, e) {
        return I(1, arguments), H(t, Date.now(), e);
      }
      const F = function () {
          document.querySelector("#content");
          const t = document.querySelector(".sidebar");
          Et(),
            t.classList.add("week-page"),
            t.classList.add("current-tab"),
            (function () {
              const t = document.createElement("div");
              t.classList.add("header-section");
              const e = document.createElement("div");
              e.classList.add("header-title"), (e.textContent = "This Week");
              const n = new Date().toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }),
                r = document.createElement("div");
              r.classList.add("header-date"),
                (r.textContent = n),
                t.appendChild(e),
                t.appendChild(r),
                content.appendChild(t);
            })();
          const e = (function () {
            const t = u(),
              e = [];
            for (let n = 0; n < t.length; n++)
              Z(new Date(t[n].getDueDate())) && e.push(t[n]);
            return e;
          })();
          ht(e);
        },
        U = function () {
          const t = document.querySelector(".sidebar");
          Et(),
            t.classList.add("home-page"),
            t.classList.add("current-tab"),
            Ct(),
            (function () {
              const t = document.createElement("div");
              t.classList.add("header-section");
              const e = document.createElement("div");
              e.classList.add("header-title"), (e.textContent = "Home");
              const n = new Date().toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }),
                r = document.createElement("div");
              r.classList.add("header-date"),
                (r.textContent = n),
                t.appendChild(e),
                t.appendChild(r),
                content.appendChild(t);
            })(),
            ht(),
            gt(),
            bt();
        },
        $ = n.p + "4948b10606a53653c2df.svg",
        J = n.p + "51742d846415500f8964.svg",
        G = n.p + "62382b4ba7ad771c0356.svg",
        Q = n.p + "228e66852ecf50402240.svg",
        W = document.querySelector("#content"),
        Y = document.querySelector(".projects-container");
      function K() {
        wt(Y),
          (function () {
            const t = h();
            for (let e = 0; e <= t.length; e++) {
              if (null == t[e]) return;
              let n = document.createElement("div");
              n.classList.add("project-tab"),
                n.setAttribute("data-project", t[e]);
              let r = document.createElement("div");
              r.classList.add("project-tab-items"), r.classList.add("tab");
              let o = document.createElement("img");
              o.src = J;
              let i = document.createElement("div");
              i.textContent = t[e];
              let d = document.createElement("img");
              d.classList.add("delete-project-btn"),
                (d.src = G),
                r.appendChild(o),
                r.appendChild(i),
                n.appendChild(r),
                n.appendChild(d),
                Y.appendChild(n);
            }
          })(),
          document.querySelectorAll("[data-project]").forEach((t) => {
            null != t &&
              t.addEventListener("click", () => {
                let e = t.getAttribute("data-project");
                g(e) &&
                  (tt(),
                  (function (t) {
                    document
                      .querySelector(".projects-tab-title")
                      .setAttribute("data-current-project", t);
                  })(e),
                  Ct(),
                  X(e));
              });
          }),
          document.querySelectorAll(".delete-project-btn").forEach((t) => {
            null != t &&
              t.addEventListener("click", () => {
                let e = t.parentNode.getAttribute("data-project");
                if (
                  (t.parentNode.remove(),
                  (function (t) {
                    for (let e = 0; e < i.length; e++)
                      i[e] === t && i.splice(e, 1);
                    s(), l();
                  })(e),
                  (function (t) {
                    let e = [!0];
                    for (; e[e.length - 1]; ) {
                      0 === o.length && e.push(!1);
                      for (let n = 0; n < o.length; n++) {
                        if (o[n].projectId === t) {
                          o.splice(n, 1), e.push(!0);
                          break;
                        }
                        e.push(!1);
                      }
                    }
                    s(), l();
                  })(e),
                  !0 === ct())
                )
                  return Ct(), void _();
                if (1 == st()) return Ct(), void F();
                if (1 == lt()) {
                  let t = document
                    .querySelector("[data-current-project]")
                    .getAttribute("data-current-project");
                  return e === t ? (Ct(), void U()) : (Ct(), void X(t));
                }
                Ct(), U();
              });
          }),
          V(),
          bt();
      }
      function V() {
        const t = document.querySelector(".add-project-btn");
        null != t &&
          t.addEventListener("click", () => {
            const t = document.getElementById("project-input-name").value;
            null != t &&
              null != t &&
              (g(t) ? alert("Names taken bub") : f(t), K());
          });
      }
      function X(t) {
        Ct(),
          (function (t) {
            const e = document.createElement("div");
            e.classList.add("header-section");
            const n = document.createElement("div");
            n.classList.add("header-title"), (n.textContent = t);
            const r = new Date().toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
              o = document.createElement("div");
            o.classList.add("header-date"),
              (o.textContent = r),
              e.appendChild(n),
              e.appendChild(o),
              W.appendChild(e);
          })(t);
        const e = (function (t) {
          return u().filter((e) => e.getProjectId() === t);
        })(t);
        ht(e), K(), gt(), bt();
      }
      function tt() {
        let t = document.querySelector("[data-current-project]");
        null != t && t.removeAttribute("data-current-project");
      }
      const et = n.p + "e7f3f323fe9a82cd178f.svg",
        nt = n.p + "0316a1604b3c12208965.svg",
        rt = n.p + "f0a3a00342c8e5a4462e.svg";
      function ot() {
        !(function () {
          if (!0 === dt()) return -1;
          const t = document.querySelector("#content"),
            e = document.createElement("div");
          e.setAttribute("id", "form-section"),
            !0 === at() && e.classList.add("editing-form");
          const n = document.createElement("form");
          n.setAttribute("action", ""),
            n.setAttribute("method", "post"),
            n.setAttribute("id", "new_task_form"),
            n.setAttribute("class", "form-fields");
          const r = document.createElement("div");
          r.classList.add("form-items");
          const o = document.createElement("div");
          o.classList.add("form-field"), o.classList.add("priority-field");
          const i = document.createElement("label");
          i.setAttribute("for", "priority");
          const d = document.createElement("select");
          d.setAttribute("id", "priority");
          const a = document.createElement("option");
          a.setAttribute("value", "1"),
            a.classList.add("priority1-option"),
            (a.textContent = "!!!");
          const c = document.createElement("option");
          c.setAttribute("value", "2"),
            c.classList.add("priority2-option"),
            (c.textContent = "!!");
          const s = document.createElement("option");
          s.setAttribute("value", "3"),
            s.classList.add("priority3-option"),
            (s.textContent = "!");
          const l = document.createElement("option");
          l.setAttribute("value", ""),
            l.setAttribute("selected", ""),
            l.classList.add("priority4-option"),
            (l.textContent = ""),
            d.appendChild(a),
            d.appendChild(c),
            d.appendChild(s),
            d.appendChild(l),
            o.appendChild(i),
            o.appendChild(d),
            r.appendChild(o);
          const p = document.createElement("div");
          p.classList.add("form-field"), p.classList.add("title-field");
          const u = document.createElement("label");
          u.setAttribute("for", "title");
          const m = document.createElement("input");
          m.setAttribute("type", "text"),
            m.setAttribute("name", "title"),
            m.setAttribute("id", "title"),
            m.setAttribute("placeholder", "Title"),
            p.appendChild(u),
            p.appendChild(m),
            r.appendChild(p);
          const f = document.createElement("div");
          f.classList.add("form-field"), f.classList.add("description-field");
          const h = document.createElement("label");
          h.setAttribute("for", "description");
          const g = document.createElement("input");
          g.setAttribute("type", "text"),
            g.setAttribute("name", "description"),
            g.setAttribute("id", "description"),
            g.setAttribute("placeholder", "Description"),
            f.appendChild(h),
            f.appendChild(g),
            r.appendChild(f);
          const b = document.createElement("div");
          b.classList.add("form-field"), b.classList.add("due-date-field");
          const v = document.createElement("label");
          v.setAttribute("for", "due-date");
          const y = document.createElement("input");
          y.setAttribute("type", "date"),
            y.setAttribute("name", "due-date"),
            y.setAttribute("id", "due-date"),
            b.appendChild(v),
            b.appendChild(y),
            r.appendChild(b),
            n.append(r);
          const x = document.createElement("div");
          x.classList.add("form-btns");
          const k = document.createElement("img");
          k.classList.add("submit-form-btn"),
            k.setAttribute("type", "button"),
            1 == at() ? (k.src = et) : (k.src = nt),
            x.appendChild(k);
          const E = document.createElement("img");
          E.classList.add("cancel-form-btn"),
            E.setAttribute("type", "button"),
            (E.src = rt),
            x.appendChild(E),
            n.appendChild(x),
            e.appendChild(n),
            t.appendChild(e);
        })(),
          document
            .querySelector(".submit-form-btn")
            .addEventListener("click", () => {
              let t = "";
              if (!0 === at()) {
                let n = document.querySelector(".editing-task"),
                  r = m(n.getAttribute("data-task-id")),
                  o = p()[r];
                void 0 !== o.getProjectId() && ((t += o.getProjectId()), e()),
                  kt(n);
              }
              if (1 != lt()) {
                if ((!0 === dt() && it(), !0 === ct())) return Ct(), void _();
                if (1 == st()) return Ct(), void F();
                Ct(), U();
              } else {
                let n = document.querySelector("[data-current-project]");
                if ("" == t) {
                  let e = n.getAttribute("data-current-project");
                  t += e;
                }
                e();
              }
              function e() {
                it(t), Ct(), X(t);
              }
            }),
          (function () {
            const t = document.querySelector(".cancel-form-btn");
            null != t &&
              t.addEventListener("click", () => {
                const t = document.getElementById("form-section");
                null != t && (t.remove(), gt(), bt());
              });
          })();
      }
      function it(t) {
        if (!document.getElementById("title")) return;
        const e = document.getElementById("title").value,
          n = document.getElementById("description").value,
          r = document.getElementById("due-date").value,
          o = document.getElementById("priority"),
          i = o.options[o.selectedIndex].text;
        let d = "";
        "!!!" === i && (d += "1"),
          "!!" === i && (d += "2"),
          "!" === i && (d += "3"),
          c(e, n, r, d, t);
      }
      function dt() {
        return !!document.getElementById("form-section");
      }
      function at() {
        return !!document.querySelector(".editing-task");
      }
      function ct() {
        return !!document.querySelector(".today-page");
      }
      function st() {
        return !!document.querySelector(".week-page");
      }
      function lt() {
        return !!document.querySelector("[data-current-project]");
      }
      function pt(t, e) {
        for (
          var n = t < 0 ? "-" : "", r = Math.abs(t).toString();
          r.length < e;

        )
          r = "0" + r;
        return n + r;
      }
      const ut = n.p + "e7ef3acb8d2c9583ddf5.svg",
        mt = n.p + "001204a640f9379fc6d2.svg",
        ft = n.p + "15b2fdbd8a2db6dd13ed.svg";
      function ht(t) {
        const e = document.querySelector("#content");
        void 0 === t && (t = u());
        const n = [];
        let r = document.createElement("div");
        r.setAttribute("id", "tasks-container");
        let o = document.createElement("div");
        o.setAttribute("class", "priority1-tasks");
        let i = document.createElement("div");
        i.classList.add("priority-title"), o.appendChild(i);
        let d = document.createElement("div");
        d.setAttribute("class", "priority2-tasks");
        let a = document.createElement("div");
        a.classList.add("priority-title"), d.appendChild(a);
        let c = document.createElement("div");
        c.setAttribute("class", "priority3-tasks");
        let f = document.createElement("div");
        f.classList.add("priority-title"), c.appendChild(f);
        let h = document.createElement("div");
        h.setAttribute("class", "priority4-tasks");
        let g = document.createElement("div");
        g.classList.add("priority-title"), h.appendChild(g);
        for (let e = 0; e < t.length; e++) {
          (n[e] = document.createElement("div")),
            n[e].classList.add("task-row"),
            n[e].setAttribute("data-task-id", t[e].getId());
          let r = document.createElement("div");
          r.classList.add("task-items");
          let i = document.createElement("div");
          i.classList.add("revision-items");
          let a = yt(),
            s = xt(),
            l = document.createElement("div");
          l.classList.add("task-title"), (l.textContent = t[e].getTitle());
          let p = document.createElement("div");
          p.classList.add("task-description"),
            (p.textContent = t[e].getDescription());
          let u = document.createElement("div");
          u.classList.add("task-due-date"), (u.textContent = t[e].getDueDate());
          let m = document.createElement("input");
          m.setAttribute("type", "checkbox"),
            m.classList.add("completed-checkbox"),
            1 == t[e].getCompleted() && m.setAttribute("checked", ""),
            r.appendChild(m),
            r.appendChild(l),
            r.appendChild(p),
            r.appendChild(u),
            i.appendChild(a),
            i.appendChild(s),
            n[e].appendChild(r),
            n[e].appendChild(i);
          let f = t[e].getPriority();
          "1" === f && o.appendChild(n[e]),
            "2" === f && d.appendChild(n[e]),
            "3" === f && c.appendChild(n[e]),
            "" === f && h.appendChild(n[e]);
        }
        let b = document.createElement("div");
        b.classList.add("priority-container"),
          b.appendChild(i),
          b.appendChild(o);
        let v = document.createElement("div");
        v.classList.add("priority-container"),
          v.appendChild(a),
          v.appendChild(d);
        let y = document.createElement("div");
        y.classList.add("priority-container"),
          y.appendChild(f),
          y.appendChild(c);
        let x = document.createElement("div");
        x.classList.add("priority-container"),
          x.appendChild(g),
          x.appendChild(h),
          r.appendChild(b),
          r.appendChild(v),
          r.appendChild(y),
          r.appendChild(x),
          e.appendChild(r),
          document.querySelectorAll(".edit-button").forEach((t) => {
            t.addEventListener("click", () => {
              t.parentNode.parentNode.classList.add("editing-task"),
                ot(),
                vt(),
                (function (t) {
                  let e = m(t.getAttribute("data-task-id")),
                    n = p()[e];
                  (document.getElementById("title").value = n.getTitle()),
                    (document.getElementById("description").value =
                      n.getDescription()),
                    (document.getElementById("priority").value =
                      n.getPriority()),
                    "" !== n.getDueDate() &&
                      (document.getElementById("due-date").value = (function (
                        t,
                        e
                      ) {
                        var n, r;
                        I(1, arguments);
                        var o = q(t);
                        if (isNaN(o.getTime()))
                          throw new RangeError("Invalid time value");
                        var i = String(
                            null !== (n = null == e ? void 0 : e.format) &&
                              void 0 !== n
                              ? n
                              : "extended"
                          ),
                          d = String(
                            null !==
                              (r = null == e ? void 0 : e.representation) &&
                              void 0 !== r
                              ? r
                              : "complete"
                          );
                        if ("extended" !== i && "basic" !== i)
                          throw new RangeError(
                            "format must be 'extended' or 'basic'"
                          );
                        if ("date" !== d && "time" !== d && "complete" !== d)
                          throw new RangeError(
                            "representation must be 'date', 'time', or 'complete'"
                          );
                        var a = "",
                          c = "",
                          s = "extended" === i ? "-" : "",
                          l = "extended" === i ? ":" : "";
                        if ("time" !== d) {
                          var p = pt(o.getDate(), 2),
                            u = pt(o.getMonth() + 1, 2),
                            m = pt(o.getFullYear(), 4);
                          a = ""
                            .concat(m)
                            .concat(s)
                            .concat(u)
                            .concat(s)
                            .concat(p);
                        }
                        if ("date" !== d) {
                          var f = o.getTimezoneOffset();
                          if (0 !== f) {
                            var h = Math.abs(f),
                              g = pt(Math.floor(h / 60), 2),
                              b = pt(h % 60, 2);
                            c = ""
                              .concat(f < 0 ? "+" : "-")
                              .concat(g, ":")
                              .concat(b);
                          } else c = "Z";
                          var v = "" === a ? "" : "T",
                            y = [
                              pt(o.getHours(), 2),
                              pt(o.getMinutes(), 2),
                              pt(o.getSeconds(), 2),
                            ].join(l);
                          a = "".concat(a).concat(v).concat(y).concat(c);
                        }
                        return a;
                      })(new Date(n.getDueDate()), { representation: "date" }));
                })(t.parentNode.parentNode);
            });
          }),
          document.querySelectorAll(".delete-button").forEach((t) => {
            t.addEventListener("click", () => {
              kt(t.parentNode.parentNode), Lt();
            });
          }),
          Lt(),
          document.querySelectorAll(".completed-checkbox").forEach((t) => {
            t.addEventListener("click", () => {
              !(function (t) {
                let e = m(t.getAttribute("data-task-id")),
                  n = p()[e];
                !0 === n.getCompleted()
                  ? n.completedTracker.push(!1)
                  : n.completedTracker.push(!0),
                  s(),
                  l();
              })(t.parentNode.parentNode);
            });
          });
      }
      function gt() {
        const t = document.createElement("img");
        t.src = ut;
        const e = document.createElement("div");
        e.textContent = "Add Task";
        const n = document.createElement("div");
        n.classList.add("add-task-btn"),
          n.appendChild(t),
          n.appendChild(e),
          content.appendChild(n);
      }
      function bt() {
        const t = document.querySelector(".add-task-btn");
        null != t &&
          t.addEventListener("click", () => {
            ot(), vt();
          });
      }
      function vt() {
        const t = document.querySelector(".add-task-btn");
        null !== t && t.remove();
      }
      function yt() {
        const t = document.createElement("img");
        return t.classList.add("edit-button"), (t.src = ft), t;
      }
      function xt() {
        const t = document.createElement("img");
        return t.classList.add("delete-button"), (t.src = mt), t;
      }
      function kt(t) {
        let e = t.getAttribute("data-task-id");
        !(function (t) {
          let e = m(t);
          o.splice(e, 1), s();
        })(e),
          document.querySelector("[data-task-id=" + e + "]").remove();
      }
      function Et() {
        const t = document.querySelector(".sidebar");
        t.removeAttribute("class"), t.classList.add("sidebar");
      }
      function Ct() {
        wt(document.querySelector("#content"));
      }
      function wt(t) {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
      }
      function Lt() {
        const t = document.querySelector(".priority1-tasks"),
          e = document.querySelector(".priority2-tasks"),
          n = document.querySelector(".priority3-tasks"),
          r = document.querySelector(".priority4-tasks");
        jt(t), jt(e), jt(n), jt(r);
      }
      function jt(t) {
        null != t && (t.hasChildNodes() || t.parentNode.remove());
      }
      const At = n.p + "b721a6c60ca568ce2423.svg";
      function St() {
        const t = document.createElement("div");
        t.classList.add("github-section");
        const e = document.createElement("div");
        e.classList.add("github-name"),
          (e.textContent = "Copyright © 2022 Tewolden"),
          t.appendChild(e);
        const n = document.createElement("a");
        n.setAttribute("href", "https://github.com/Tewolden");
        const r = document.createElement("img");
        (r.src = At),
          n.appendChild(r),
          t.appendChild(n),
          content.appendChild(t);
      }
      1 == !(localStorage.length > 0) &&
        (c(
          "Send email",
          "tell the boss its been done.",
          "2022-09-04",
          "1",
          void 0
        ),
        c(
          "Milk",
          "Get some on the way home from work",
          "2022-09-12",
          "",
          void 0
        ),
        c("Laundry", "use the tide", "2022-09-08", "3", void 0),
        c(
          "Take out the trash",
          "put it on the curb its garbage day",
          "2022-09-10",
          "1",
          "Chores"
        ),
        c(
          "Wash dishes",
          "Use hot water this time",
          "2022-09-04",
          "2",
          "Chores"
        ),
        c("Sweep the floor", "You already know", "2022-09-04", "", "Chores"),
        f("Chores")),
        U(),
        document.querySelectorAll("[data-tab-id]").forEach((t) => {
          t.addEventListener("click", () => {
            tt();
            let e = t.getAttribute("data-tab-id");
            "3" !== e
              ? (Ct(),
                "0" === e && U(),
                "1" === e && (_(), St()),
                "2" === e && (F(), St()))
              : (function () {
                  const t = document.querySelector(".sidebar");
                  Et(),
                    t.classList.add("projects-page"),
                    K(),
                    (function () {
                      document
                        .createElement("div")
                        .setAttribute("id", "project-form-section");
                      const t = document.createElement("form");
                      t.setAttribute("action", ""),
                        t.setAttribute("method", "post"),
                        t.setAttribute("id", "new_project_form");
                      const e = document.createElement("div");
                      e.classList.add("project-form-items");
                      let n = document.createElement("img");
                      (n.src = J), e.appendChild(n);
                      const r = document.createElement("div");
                      r.classList.add("form-field"),
                        r.classList.add("project-name-field");
                      const o = document.createElement("input");
                      o.setAttribute("type", "text"),
                        o.setAttribute("name", "project-input-name"),
                        o.setAttribute("id", "project-input-name"),
                        o.setAttribute("placeholder", "Project"),
                        r.appendChild(o),
                        e.appendChild(r),
                        t.appendChild(e);
                      const i = document.createElement("div");
                      i.classList.add("add-project-btns");
                      const d = document.createElement("img");
                      d.classList.add("add-project-btn"),
                        d.setAttribute("type", "button"),
                        (d.src = $),
                        i.appendChild(d);
                      const a = document.createElement("img");
                      a.classList.add("cancel-project-btn"),
                        a.setAttribute("type", "button"),
                        (a.src = Q),
                        i.appendChild(a),
                        t.appendChild(i),
                        Y.appendChild(t);
                    })(),
                    V(),
                    (function () {
                      const t = document.querySelector(".cancel-project-btn");
                      null != t &&
                        t.addEventListener("click", () => {
                          document.getElementById("new_project_form").remove();
                        });
                    })();
                })();
          });
        }),
        K();
    })();
})();
