import ll from "maplibre-gl";
const Tm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mLYpUHOwgopChOtlFRRxrFYpQIdQKrTqYXPoHTRqSFBdHwbXg4M9i1cHFWVcHV0EQ/AFxdnBSdJESv0sKLWK847iH97735e47QGhWmWaFEoCm22YmlRRz+VWx5xUhmmGMIi4zy5iTpDR8x9c9Any/i/Ms/7o/R79asBgQEIkTzDBt4g3imU3b4LxPHGVlWSU+J54w6YLEj1xXPH7jXHJZ4JlRM5uZJ44Si6UuVrqYlU2NeJo4pmo65Qs5j1XOW5y1ap2178lfGCnoK8tcpzWCFBaxBAkiFNRRQRU24rTrpFjI0HnSxz/s+iVyKeSqgJFjATVokF0/+B/87q1VnJr0kiJJIPziOB9jQM8u0Go4zvex47ROgOAzcKV3/LUmMPtJeqOjxY6AgW3g4rqjKXvA5Q4w9GTIpuxKQVpCsQi8n9E35YHBW6Bvzetb+xynD0CWepW+AQ4OgfESZa/7vLu3u2//1rT79wN2rHKoBaSKHQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+gEBAUlKJesuC4AABWbSURBVHja7Z3fcxTHEce/t1ohYekA2QaBDBgocGLHNmW7Kg4pV9l5SeUleci/4b9H/0aeU3mJXXEF5yEmEOw4hgKFH7JBtpEQwhLS3eVhunV9w+7tHWh3e2Z7q64OyZJ18+Mz3+7pme4W7Bn6tBdXWwD4lYj3FMA0gCkAswCOAJihrw8AOAfgdwDOAmgDmKDf3YunB6ADYB3AdQB/BnANwEMAWwA2ANwH8Ii+3gSwA6BLv8vvvfWPD/VslPOflnVBLhQQYKQCiEl6zQCYB/AigGMA3gBwGMB+guQQgFfpfZKg2sunC2AbwCqA/9H7FoCfAKwA+ArAtwB+BHCPoNmmFwOzw6AAgMFigIyrFhMChgMERJu+PkJQHCNI5un7qfi9F+i9VUJf88TeBvCY3js06TcIih8Jkq9IUTZIde6R2myI3zNVMUBGAiOlST1NrwMAjgM4BeAtAUKbIJklxZim35WAJSXB4UPSlROcINkkRXlEcKwLcP4NYAnAHQJlk17bUlUMlIYDkgHGPpr8BwEcJWVYAPA2AXKcwGAza0ooRiL6s1Vx//Yy3rtCUbaEebVOYCwBuAJgmZTmOwBrBNETA6XBgAwBYw7ACYLhbYLjRYLlIP3MpOest2oAYhxgep5zvk0QrBEUPxIkVwia2wAeGCgNBGQEME4DeIcAOUHm1bRwztMaVWIv1WVHOOubZGbdJkAuAbhpoDQIELErlRSAcZq+nhNqMeEpReh91vOUpSNU5QGBcbMAlG5Tdr1aDYGjRROdYxZFYOzzHO4Y+8o3w3YIgCJQOLbSaYKatBoAR0JKsB/Ay2Q+nRkRjKaYoL0RQblBZtj3cPGWbQDdmCFpRQyGVI0DcFuybwL4FVx0+6SBMRYot+Ci9p8DuAq3dfwwdjVpRQxHCheoO0xKcY7geJNgaRsYY4GyTlBcJUiukbKswAUqd2KEpBUhHBM06WfgotznAVwgQE6TmbWffiYxMEYCpUsA/ETm1U0C5CKAy3DR+g36mU5MkLQiAsM3qeYJjg/pfZ6+P4X+wUEDYzxQOmRSPYSLyF8G8Cm934vR5GpFBEeWSXWB4DiGwXNSMDieCRJg8LzXtwTHxVhNrlZEcMzCRb59k+owgZOaauypmuwQCCsZJtcy3HZw8JCkEcHxCoB3AXxkJlUli2oqVHmGFqIZsRDdZUjai6vBBhXTwOHgo+gMx2/ofcEzqQyMvYfEP7YzhcGjOCBINgBshwpJGigciYBjwYPjFQFHYnCUDgovQKzi/rMsIAkuqJgGCscU+kfSz5NZxXDMmr9ROSS8YPmQsLrwUfqt0CBpBQrHS+SE/xzArwmSBYNDjfP+iJTjMoC/A/ianPgf4LaBg4GkFRAcLbjI9xyA1wH8Fu6G31m4yLjtVOmC5DFc5P063A3GvwD4D9yxlScIZHcrCQgO9jmOknK8Re9Hvd0Tg6N+5z0tGKtJAC1xDcEAeU44UuGQnyez6iz6x0ZsG1cfJBPon6A+65nCuwuadkiSQODIinMcMTiCgeTIsM0UzZCkyjvZh0PGOV4wOILwbydorBbQP67Cz24wMeO/GSAF6iE71o9z2G5VWJDIhc536u8A2Ggvrqp02lPFcEzBHV+wOEeckPBu1xYrSHtxVd1R+UQhHGxaHYA7bHghy7kzOIL0SfzNlgs0xge0+iOpwo7kTpyHCwaew2BaT4MjfCXxx3eFlKSrzR9RoyCe33EsZ4Wxs1XhQ5LkWAjHeONFk4okiuBIPL+DbwIexuCRdXvCh2SiYKwTLZAkSuDgSHnuqmJwRAlJnrWgJtKuxcSSAaU8v8Oe+CDJ8kdkALjZCuKZVi+jn7dqYGcDcWY19EsX5L3kz8YGiL9jyWmZXtZiaqVKVpFZuIyHfgfFYlrllSfojdFPdZZXqMIf4QVyDS5Dyjr6JRt6jQMk4wj7GfSPrquR2D2Cwi9BwAEyruxUpPI8ieROntbSC89rYp+luXAHlGurvbjaqiuAmNa8erANegIuV+5JuIyHIZtWWdnT/SI2G/DS4xT0Eacz4qPiecV7QuwzGR9p0xx4By5TCt8dqU1FagEkQz1O02uOvhdivMNP18n1N7LKoN2HuzwkA2S9HLOKt0NfR7+Sblb5t0mEm0aV2+rPh9t1q0haY4f46nEi0F2rvITPsoJTViHNFfTTdfZG6KcryC8gKitghZpvOGtO1K4ilQMygnqEMqhFJQOWMFgD0C/FvAWvDPOQnZ4HBJQsQX0VT9dQDLmUQ968qFVFUiUrRWjqIZ3tvFoaS/S1rCK74znrow42A8WmyAO4JNJchfc6ATKs5kkSCCSqVKRSQCJQDz+J8yMUly3z65Dv7nCNuhpSv3VF32yLv79GCnWL/nZW1Sz2VbRfMFOnIqmCFSIU9cjKSbsEV3WpsPDlOED4j/i9ngcM1xfMUjEG5Qypi8xRDOWQqFGRyjpJRM33w12a+RDAH+HO4cyhX15Zs0nVwWDOp4tk3txCTRVhCyr3noSLK8g7NbN4uq67tofLVT+gfv4TXJmFu3A1SirLq1W1giRkNx8lxzIE9fDriy8D+ALAJzR4XIqsllLJ9Hd6BMq25xc9FDtn/Nn44tmkYkh8FXkbwH8hEs/FaGLxsYJpsfuye3JT6UCxv8G1xLlozCcEyTKZW9vsY9QV8c0AhQOUm56pt4N+5vtp6DzO45/wXqA5M00K3qnKzKoEkIwj7bLBE8rh4AyBN5BdA6MDRak0BShyQ+GugGMD7tTsGfQzUmqFJGtBXYNLhF2Js55W2FiWzOMkmUep8YlSOLq0+t4H8E8AnwH4BoFUUVr/+FCvvbjKO2eP4M42bdFnfw3ABwDeo3HYr9Tc8k3ya7RjV5mzXvrkzEjEcIpeB5WaV9LneEjK8RmAfwD4EoMFK1Xnl2U1wWDJtC+pLZ9R2x5KE1GpmXVQzJtKEzykFa8E83B5Wo8rdc6lWbJBPsc1Uo5lAKu0CgdTyTXD5OLP/Q21ja+5tqHvZLBvebwFd4btB1KRbhUTt8qVoE2QtBWrh5++/yKZVWuhwZEBCgc416hNmTUFlapILXOnKvtfVoSSW4xanXJ/K3clZDhyIFlB9o5cB/puL9Y2f0r9IxnZ2Y8oVQ/2O4ZOnBjqfgtIhi0EmvwRX0WOoMLs8GlFELL/8QY1cEqZgkjTaikA02OvTcmsBWxS0QLG92L4mP9VuMOapQcNkwro5+uiL8LdX9CWW5cd1ydwRxtuwB0fuS9NjhjUI2N3S8Z5rlPbdytAKVkU/DIYfAemkpwFpQGSUd+j0oY9w2q6AXfQ7xLc2ard7c+Y4PAgkdvZt6jtuydnlZlZuQttmWZW2QriS+M8dAUHffW4icGTo1HCkQFJXvs1pRuqxVSvwsRi+/Yw9CWgzlIPjSto0/ugVTCXggSEG8WX8aehKzBYpB69mNUjwx8JQUUYkmkMJvcI1sSqvEGmHtGrSKULbimAZMQ/KpPEMdVjGy6qvESvRqnHEBXh/lhD/1CgFkgy51RZjnpSMnwyp9Nh6Ip/8Gnd7+CyjzRVPfJU5Ar1zSYqvKCkbU6V7YNwinttDro8cvEjXLCMt3UbpR4ZKsLbvpyuiFOk1t0nWVZJ6XdZkhIbw///FP00mZrMK44kf0sTYRM6zyHVsXBsop/wTp4k0GRmyVzFKGtuVXWaV5NzzubVFlwE+Su4Y+2aTAkNpuc99LNBbinqmxaeznYflpM+RFG0rJJsSqzDS2rQRPMqw8xiX4TzCWty1CudU0lD54LMUsLJ3Uw9rH8aD0hIK6RKhW1aHzVRQeS9D78EgT3WR40HRB7zXjH/o9AP4Qwujdzha6KJxSskV31qamBwlL6SfdT1+tAAacAE6JrvUeiLdJvcP4lNAnusjwwQe+wxQOyxxwCxp+qnZYDY4NuT3TeVnXkyQHROAG2HKLX1T2WnZg0QXYqh8Ri+iifnNqjWGiIGSEmQZF7kqiKdfkDzQvNtUAPEBl+FeaU1XVN0gGhLhKw9mbYW51xjuqZK51RSUUO0HekIoRyDBgXRmq6psiMwScl0azwUWGs6/QAddG2VwCo9RJmU3JDMY+UKQNGeM7juvtFYrqKWY/hlNlrrpZu8rPOaS1JX2Tey9LK2chWVz6lSAMm5dKMtjaVMp881uCebamYNqWWvqVxF7pwq67JbUlGDNtGvSqrFWfdrcJ+Azsq7VTvmM9QX2mrZS+f8Cc2p0hfcJLYGPYOjLmtwz9GuTaNURKjHPuoD7g9ttewrX3CrUpANhY66v2K+02AV0d4XtZnsZQOiOTuGv2qeplejVCRDPZ7qByWLRS1zqTRAAsnSZyoSRh/Ulg0zqYh8rVn6ilbPJGYVobYlAahHbfMoqZN8xSpyEv1t3yghEXDwtu5J5epRiyVSlYJoztLnq8gZAGfhIsi79yBigkT4HXzs/wi1+Yxi9ahlDpUKSEDZwmVk/RSACwDOwwXLZiP0R2R7F6itF6jt2tpbazb+pMIVQHO2cDY3+J7IeQAfAXiXJtALACZiUBFqAyvHArXxI2qzvBujqa21zZ+0xhVgjuzfnpLB8CeOVL/d08jtxdVOqDl8BRxDFwKF6lGbBVKlgoRQ0SnP9DgNF1WeClVJPDgOUptCMCVrrXhVuoKsf3yo115czasJOKtsxeLPMUE7OfMAzgF4Da48MuBKI2+1F1c7CCAjvOeQMxwL1KZz1MYZMQ7aqoHl1kysou+TihuaWVUW+kp7ye3PMwA+APA+gF/AHQEP4oJVxgWoY9SG96lNZyC2s6G3VF5tVXerPKXp1yW/A711yRmSabgt0PcA/B7AHwD8EsBxYZKojJOIOAebjMfps/+B2vIetW0aOpPDSd/jDmqq216Fky7NrG0yUZbo9aqYaD1lgySd9qPIrve+DHerbbu9uNrVYHIJ1WAVzNqtmifl0HpJTKqHnC9rqLiWfVrzivAzAC9Bb9odhmQ/nk40x6bLfTIBngDYoYWgclAEGPy59hEERzJ2q2aUmlXqLI7KAPFURNqUGp31PJ+kDeAVz66/DuAWOfEbVYOSA8YM3Db6SbgIub9bNaEcDt85H/BZq1x80pobzrsSh6ArJpIHSUvY85z04QaASwBuAridBwovEnsIBYaAcQJuG/cdcsRPoZ9CVHsCuDznfBM11ElMa+gAua/9Je2qvAz92Q1bos/YD2kTLKcJkCxQtmlguwQLxgXGA0ICO4F+fi8fjNP09RxBLe+Wa47jqHDOawEksJhIHiS+E+xPTgZliUB5SO3jK8d8TVQCM46C8c7UNL0O0N8+lQHGDClLijDKGKhxzutUkDz78qByMyvPL8kzb5Zo9WMT4Z5QlG0MJtPrFQDJGwSTAsp59DOyvE2AZIHRQlhpVVWFA1IlnXCWBnsf+kkCEAAkLRq0LFBepV069rX4mMQG3HmiUe5V+1kO2+jnFH4D/ZxeR2mBCRkMVc55bYAMiYmcFLZ9L6CBzQNlFm4Le4vMybcIDD50599r6OWolMxEz2lSOWUq+xbT4m+HCIY657xuBZGO2G2y2eVVz8kABzgLlCka3IO0EcHm1QaZRY9HVBAZpGQzi2Mycss25Az1/pyo1TmvFRChIk9ot+cmvU4EqiJ5oMidpin084TN0YTvjDD4/P+Y8pxtP+N6yHdVWD14PtTunNetILGqiA8KPFh4kCUw4+5iIRIoiubCbSg4q1db3EFcx/VV5AF9T9sp371QlUS8UmGKDXtNCuVIEF/h0cJ5UOf5tlThyhGTihSpC2BVrdSqR60K0kAVsScw9agdkBBWEHuaPfa1A2IqYuqhVT20KIipiKmH2jFXAYipiKmHRvXQpCCmIqYeKsdaDSCmIqYe2tRDm4KYiph6qBtjVYCMoCJdgyR4OLqhqIdGBclbYW7BHRXXVFfEnmczrXZoLG+FYCGoAyRDRW7AZQ65D+AnuBOw9oT5dGgM79OY3tCsHkD9Z7GKVOQR3LHnz9G/Mcf5nEK4Y23PoGm1BeB7AFdpTJcgcu1q/OAqs4jQShJkh9oz8oJ3lcZ2C0BXaxLwRHnHDpNkc9jDdMyDMpnVAuKVb5NOnTns4TvmA2OouYSEagURppY57HE65l3t9VXSADrYHHZzzE1BnsFhvwm9RXjsCdgxDwqQHKm+Ri8ztcwxN0CEw85JxW5mrUimIuaYN1ZBLDZijrkBsgedb5DUrh6dmBaxoAApiI2Yw67HtMo1g0NSjyAVpCA2UpTr1p5yAeFT2Pdi2UhJAx8M3kK8iH5cZIL+HVP2wVBMq8dwpR4u05gMbMWHph6h+iC+w75CA/IpvQ8rKWBPOXAUjkWIcAQLiICkcNUySCrxO+T2+0Uai29pbDqhwhE0IDHbvYE9WQFcLjcXvD8YNCDerpYFEOszrbKOAAUVEIxVQaSpZWe16jWt/IWpEzocUQBSIPVmall/GyAjntWqrRBkhOpRqNgxqEdUCjLCsXi7gbh3plVU0fJhTxrhIGZJ/2G4moBc+swCiM8OSKN2DWPyQfJMraf25U1Fnsu0ii5a3hhAMkytvMiuQfLsfkd00fJGASIgGbbamT/yfH5HVNHypvkgRfay+SN704/RRMsbpyCeP7Jj/khpfkcU0fJGAuKZWuaPlON3dGKGI3pAzB8xv8N8EPNHzO8wBTF/xPwOA8T8EfM7DJAA/JGm3h/hAGvj/Y7GAjKifd1poNPeE+rReL+j0YAU+CPLaGaWRpklZrnpfkfTFSTPH/kEwBc0QZrktEuzc5n64JMm+x3ySdHQZ/3jQ7324qqcGJxHK4Xb+uVt3wnEu/070kLRVDgaDUiOaZHCJZ07TO8MSYwFeoY55U01Nc3EyvFHRnFOe5HBMdJmRZPVo/GACEiGraSxQeLDkeeUd5sOhwEymtN+NzJzQ5qVd80pNx/keZx2floAjiP8pNhZO1Z/NafcAHnW1ZXhiGFnq0kqaSZWyU57oX0e2EQa2c8y9TBAxoUk9J2tkdtjcBgg40ASw86W7VgZIKVCMqrN3lMOh+1YmZNeDiRDdrYA4BUAs6IfW8rhsB0rA6SUyebvbOVB0lL6mSUctmNlgOy5imAIJNpiJMNiHQNwmHoYIGVDoi1GMrLfZHCYk16G0645RmKxDgNEHSRaYiQW6zBAVEGiKUZisQ4DRCUkGmIkFuswJ121415njMRiHQaI+mecGMleQlIEh8U6DBA1KoKKIRkLDlMPA6RJkBgcBohBYnAYIAbJeJAYHAaIQWJwGCAGyXiQGBwGiEGSA4nBYYAYJDmQGBwGiEGSAwkMDgPEIBkOicFhgBgkGZDM0L83DA4DxCDpP1xi4Sh9/R2ASwaHAdJkSPjuRgJgEv167QBwFcDfAPwLdhuw1sfug9QAiXDCH8Pd+Psa7v7GHXpdpu/do58xOGp6/g9eQPkxBqxc0wAAAABJRU5ErkJggg==";
let ku;
try {
  ku = "free";
} catch {
  ku = process.env.VITE_GEOMAN_VERSION || null;
}
const ot = "gm", se = `_${ot}`, ht = ku === "pro", $f = {
  draw: {
    marker: {
      type: "draw",
      eventType: "toggle",
      targetMode: "marker",
      settings: {
        exclusive: !0
      }
    },
    circle_marker: {
      type: "draw",
      eventType: "toggle",
      targetMode: "circle_marker",
      settings: {
        exclusive: !0
      }
    },
    text_marker: {
      type: "draw",
      eventType: "toggle",
      targetMode: "text_marker",
      settings: {
        exclusive: !0
      }
    },
    circle: {
      type: "draw",
      eventType: "toggle",
      targetMode: "circle",
      settings: {
        exclusive: !0
      }
    },
    ellipse: {
      type: "draw",
      eventType: "toggle",
      targetMode: "ellipse",
      settings: {
        exclusive: !0
      }
    },
    line: {
      type: "draw",
      eventType: "toggle",
      targetMode: "line",
      settings: {
        exclusive: !0
      }
    },
    rectangle: {
      type: "draw",
      eventType: "toggle",
      targetMode: "rectangle",
      settings: {
        exclusive: !0
      }
    },
    polygon: {
      type: "draw",
      eventType: "toggle",
      targetMode: "polygon",
      settings: {
        exclusive: !0
      }
    },
    freehand: {
      type: "draw",
      eventType: "toggle",
      targetMode: "freehand",
      settings: {
        exclusive: !0
      }
    },
    custom_shape: {
      type: "draw",
      eventType: "toggle",
      targetMode: "custom_shape",
      settings: {
        exclusive: !0
      }
    }
  },
  edit: {
    drag: {
      type: "edit",
      eventType: "toggle",
      targetMode: "drag",
      settings: {
        exclusive: !0
      }
    },
    change: {
      type: "edit",
      eventType: "toggle",
      targetMode: "change",
      settings: {
        exclusive: !0
      }
    },
    rotate: {
      type: "edit",
      eventType: "toggle",
      targetMode: "rotate",
      settings: {
        exclusive: !0
      }
    },
    scale: {
      type: "edit",
      eventType: "toggle",
      targetMode: "scale",
      settings: {
        exclusive: !0
      }
    },
    copy: {
      type: "edit",
      eventType: "toggle",
      targetMode: "copy",
      settings: {
        exclusive: !0
      }
    },
    cut: {
      type: "edit",
      eventType: "toggle",
      targetMode: "cut",
      settings: {
        exclusive: !0
      }
    },
    split: {
      type: "edit",
      eventType: "toggle",
      targetMode: "split",
      settings: {
        exclusive: !0
      }
    },
    union: {
      type: "edit",
      eventType: "toggle",
      targetMode: "union",
      settings: {
        exclusive: !0
      }
    },
    difference: {
      type: "edit",
      eventType: "toggle",
      targetMode: "difference",
      settings: {
        exclusive: !0
      }
    },
    line_simplification: {
      type: "edit",
      eventType: "toggle",
      targetMode: "line_simplification",
      settings: {
        exclusive: !0
      }
    },
    lasso: {
      type: "edit",
      eventType: "toggle",
      targetMode: "lasso",
      settings: {
        exclusive: !0
      }
    },
    delete: {
      type: "edit",
      eventType: "toggle",
      targetMode: "delete",
      settings: {
        exclusive: !0
      }
    }
  },
  helper: {
    shape_markers: {
      type: "helper",
      eventType: "toggle",
      targetMode: "shape_markers",
      settings: {
        exclusive: !1,
        enabledBy: ["drag", "change", "rotate", "scale", "line_simplification"]
      }
    },
    snapping: {
      type: "helper",
      eventType: "toggle",
      targetMode: "snapping",
      settings: {
        exclusive: !1
      }
    },
    pin: {
      type: "helper",
      eventType: "toggle",
      targetMode: "pin",
      settings: {
        exclusive: !1
      }
    },
    snap_guides: {
      type: "helper",
      eventType: "toggle",
      targetMode: "snap_guides",
      settings: {
        exclusive: !1
      }
    },
    measurements: {
      type: "helper",
      eventType: "toggle",
      targetMode: "measurements",
      settings: {
        exclusive: !1
      }
    },
    auto_trace: {
      type: "helper",
      eventType: "toggle",
      targetMode: "auto_trace",
      settings: {
        exclusive: !1
      }
    },
    geofencing: {
      type: "helper",
      eventType: "toggle",
      targetMode: "geofencing",
      settings: {
        exclusive: !1
      }
    },
    zoom_to_features: {
      type: "helper",
      eventType: "click",
      targetMode: "zoom_to_features",
      settings: {
        exclusive: !1
      }
    },
    click_to_edit: {
      type: "helper",
      eventType: "toggle",
      targetMode: "click_to_edit",
      settings: {
        exclusive: !1
      }
    }
  }
}, Am = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="m22.775 29.562 6.75-6.75-5.625-5.625-3.6 3.6-3.15-3.15 3.6-3.6-5.626-5.55-6.75 6.75zm25.95 26.101 6.75-6.825-5.624-5.625-3.6 3.6-3.15-3.15 3.6-3.6-5.55-5.55-6.75 6.75zm.6-46.126 5.25 5.25ZM16.7 59.039H5v-11.7l14.55-14.551L2 15.237l13.05-13.2 17.7 17.624L46.1 6.312q.676-.676 1.5-.976.826-.3 1.65-.3.826 0 1.65.3.826.3 1.5.976l5.326 5.325q.675.675.975 1.5.3.825.3 1.65t-.3 1.65q-.3.825-.975 1.5l-13.35 13.35L62 48.913l-13.125 13.05-17.551-17.55Zm-7.2-4.5h5.25l29.476-29.552-5.25-5.25L9.5 49.288Zm32.1-32.178-2.625-2.625 5.25 5.25Z"/>
</svg>`, Vf = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="none" d="M0 0h24v24H0Z"/>
    <circle cx="32" cy="32" r="26" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="7"/>
    <circle cx="32" cy="32" r="5" fill="currentColor"/>
</svg>`, Cm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="none" d="M0 0h24v24H0Z"/>
    <circle cx="32" cy="32" r="26" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="7"/>
    <path stroke="currentColor" stroke-dasharray="3" stroke-width="4" d="M6 32h52M32 6v52"/>
</svg>`, Nm = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 64 64"
   version="1.1"
   id="svg2"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <path
     fill="none"
     d="M 0,0 H 24 V 24 H 0 Z"
     id="path1"
     style="display:inline" />
  <ellipse
     cx="32"
     cy="32"
     fill="currentColor"
     fill-opacity="0.15"
     stroke="currentColor"
     stroke-width="7"
     id="circle1"
     rx="26.787416"
     ry="15.158148" />
  <path
     stroke="currentColor"
     stroke-dasharray="3"
     stroke-width="4"
     d="M 6.4966994,32 H 58 M 32,18.552705 v 30.15073"
     id="path2"
     style="stroke-width:3;stroke-dasharray:3;stroke-dashoffset:0" />
</svg>
`, Pm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path
            fill="currentColor"
            d="M32 61.4 19.85 49.42l3.28-3.235 6.634 6.542V34.205H10.98l6.26 6.174-3.279 3.234L2.185 32l11.852-11.686 3.28 3.234-6.336 6.247h18.783V11.273l-6.261 6.174-3.28-3.234L32 2.6l11.777 11.613-3.28 3.234-6.26-6.174v18.522h18.782l-6.26-6.174 3.279-3.234L61.815 32 50.038 43.613l-3.28-3.234 6.261-6.174H34.236v18.522l6.634-6.542 3.28 3.234z"
    />
</svg>
`, Om = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <line x1="8" y1="50" x2="24" y2="20" stroke="currentColor" stroke-width="8"/>
    <line x1="24" y1="20" x2="40" y2="54" stroke="currentColor" stroke-width="8"/>
    <line x1="40" y1="54" x2="54" y2="10" stroke="currentColor" stroke-width="8"/>
    <circle cx="8" cy="50" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="24" cy="20" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="40" cy="54" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="54" cy="10" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
</svg>
`, Rm = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M32 62.81s23.107-21.898 23.107-38.512a23.107 23.107 0 0 0-46.214 0C8.893 40.912 32 62.809 32 62.809m0-26.958a11.554 11.554 0 1 1 0-23.107 11.554 11.554 0 0 1 0 23.107"/>
</svg>
`, Dm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <!-- Polygon -->
    <polygon points="8,28 40,6 55,35 51,55 18,54" fill="none" stroke="currentColor" stroke-width="8"/>

    <!-- Vertex Circles -->
    <circle cx="9" cy="28" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="40" cy="8" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="55" cy="35" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="50" cy="55" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="18" cy="54" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
</svg>
`, Fm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <!-- Rectangle -->
    <polygon points="10,10 54,10 54,54 10,54" fill="none" stroke="currentColor" stroke-width="8"/>

    <!-- Vertex Circles -->
    <circle cx="10" cy="10" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="54" cy="10" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="54" cy="54" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="10" cy="54" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
</svg>
`, Gm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M39.063 42.14 22.288 28.12 7.96 44.603l11.338 9.854h9.059zm-3.498 12.317h25.941v5.465h-44.25L4.377 48.726a5.465 5.465 0 0 1-.542-7.711L34.311 5.958a5.465 5.465 0 0 1 7.712-.538l16.496 14.343a5.465 5.465 0 0 1 .541 7.709z"/>
</svg>`, Bm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M58.709 17.724c-.3-.6-.601-.901-.902-1.502l-.3-.601c-.301-.601-.602-.902-.902-1.503l-.3-.601c-.301-.601-.602-.902-1.203-1.503l-.6-.901 8.414-9.317-13.825.3-13.824.301 1.502 13.524 1.503 13.524 9.617-10.819v.3l.3.602c.301.3.301.6.602.6l.3.602c0 .6 0 .901.3 1.202.903 2.104 1.804 4.208 2.105 6.311.6 4.208 0 8.716-1.804 12.623l-.6 1.202-.301.3-.902 1.503-.3.601c-.601.601-1.202 1.503-1.804 2.104-1.502 1.503-3.305 3.005-5.109 3.907-1.803 1.202-3.907 1.803-6.311 2.404-2.104.301-4.508.601-6.612.301-2.404-.3-4.508-.902-6.612-1.503-2.103-.901-3.907-2.104-5.71-3.606l-1.202-1.202-.601-.902-.601-.601c-.3-.3-.601-.601-.601-.902l-.902-1.202-.3-.3-.602-1.203c0-.3-.3-.3-.3-.6l-.902-1.503-.3-.601-.902-2.705q-.901-3.607-.901-7.213V27.04c0-.601 0-.901.3-1.202l.3-1.803.602-1.803c.901-2.405 2.103-4.509 3.606-6.612q2.254-3.156 5.41-5.41c.6-.3.901-1.202.3-1.803-.3-.3-.6-.601-.901-.601h-.601l-.3.3c-2.706 1.202-4.81 3.006-6.913 4.809-2.104 2.104-3.607 4.508-5.11 7.213-2.704 5.41-3.606 11.42-2.404 17.431.3 1.503.601 2.705.902 4.207l.902 2.405c.3.3.6.6.6 1.202l.602 1.202c0 .3.3.601.3.601l.902 1.503c.3.601.6.901.901 1.503l.301.6c.3.301.601.902.902 1.203l2.103 1.803c2.104 2.104 4.809 3.907 7.514 5.41q4.057 2.254 9.016 2.705c1.503.3 3.005.3 4.508.3 1.803 0 3.306 0 4.809-.3 3.005-.602 6.311-1.503 9.016-3.006l.6-.3c.602-.3.903-.601 1.504-.902l2.103-1.202c.601-.3.902-.601 1.203-.902l.6-.6a3.622 3.622 0 0 0 1.503-1.504l.3-.3c.902-.902 2.105-2.104 2.706-3.005l1.803-2.705 1.202-1.804c3.005-5.71 4.208-12.322 3.306-18.633-.601-3.306-1.503-6.612-3.005-9.317z"/>
</svg>
`, Um = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path stroke="currentColor"
          stroke-width="3.8"
          d="m2.155 32.345 42.35-29.82M18.963 60.919l42.35-29.82M31.443 2.332l29.82 42.35M2.207 19.515l29.82 42.35"/>
</svg>
`, zm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="none" d="M0 0h24v24H0Z"/>
    <path fill="currentColor"
          d="M6.962 3.385h50.076a3.577 3.577 0 0 1 3.577 3.577v50.076a3.577 3.577 0 0 1-3.577 3.577H6.962a3.577 3.577 0 0 1-3.577-3.577V6.962a3.577 3.577 0 0 1 3.577-3.577Zm3.577 7.154v42.922h42.922V10.539Zm7.154 7.154h28.614v7.153H17.693Zm0 14.307h28.614v7.154H17.693Z"/>
</svg>
`, qm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M16.862 2.13 7.297 21.17a2.091 2.091 0 0 0-.193 1.288l4.107 24.166-7.618 13.15 3.619 2.096 7.997-13.804a2.091 2.091 0 0 0 .252-1.397l-4.119-24.235 9.256-18.428Zm40.876.255-1.25 2.49 2.668 1.341 1.25-2.49zm-2.593 5.16-2.68 5.337 2.668 1.341 2.682-5.338zm-4.022 8.007-2.682 5.338 2.67 1.34 2.681-5.337zm-18.67 5.83.055 6.984-11.118.087.056 7.242 11.12-.088.054 6.985 10.521-10.688zm18.927 2.817-2.945.5 1.001 5.89 2.945-.5zm1.502 8.835-2.945.5 1.001 5.89 2.945-.5zm1.502 8.834-2.945.5.74 4.355-.24.413 2.585 1.499.51-.881a1.494 1.494 0 0 0 .18-1zm-3.943 7.854-2.994 5.17 2.584 1.496 2.994-5.169zm-4.492 7.754-1.497 2.584 2.584 1.497 1.498-2.584z"/>
</svg>
`, Ym = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M41.687.926a2.173 2.173 0 0 0-.433.045c-4.075.232-7.358 3.618-7.358 7.747 0 .084.01.164.012.246l-12.987 4.261a7.842 7.842 0 0 0-6.126-3.563 2.173 2.173 0 0 0-.424-.043 2.173 2.173 0 0 0-.435.044c-4.073.232-7.358 3.618-7.358 7.747 0 3.143 1.901 5.869 4.604 7.097L8.377 35.11a2.173 2.173 0 0 0-.028.007C4.274 35.35.99 38.736.99 42.865c0 4.277 3.514 7.791 7.791 7.791 2.497 0 4.727-1.201 6.157-3.048l12.887 6.235a7.67 7.67 0 0 0-.139 1.44c0 4.277 3.515 7.791 7.792 7.791 4.278 0 7.793-3.514 7.793-7.792a7.67 7.67 0 0 0-1.885-5.027l.508-1.05-3.263-1.579 4.505-29.969.888-.29-.368-1.122a7.78 7.78 0 0 0 2.28-1.018l.447 1.364 4.72-1.547-.774-2.359-2.522.826a7.73 7.73 0 0 0 1.672-4.793c0-4.132-3.288-7.52-7.368-7.748a2.173 2.173 0 0 0-.424-.044zm0 4.346a3.414 3.414 0 0 1 3.447 3.446 3.415 3.415 0 0 1-3.446 3.447 3.414 3.414 0 0 1-3.446-3.447 3.414 3.414 0 0 1 3.445-3.446zm20.076 3.725a1.242 1.242 0 0 0-.382.062l-1.612.528.578 1.76-.293 1.94 2.456.37.486-3.234a1.242 1.242 0 0 0-1.233-1.426Zm-4.354 1.364-4.72 1.548.775 2.36 4.719-1.548-.774-2.36zm-22.153 2.732a7.877 7.877 0 0 0 3.735 2.922l-.062.408-.397.13.26.793-4.255 28.298-3.818-1.847-1.082 2.235 3.718 1.798a7.841 7.841 0 0 0-3.543 2.147l-13.272-6.42c.02-.23.035-.458.035-.692 0-2.888-1.609-5.408-3.969-6.745l2.912-11.012c3.74-.562 6.645-3.81 6.645-7.698l-.001-.02 13.094-4.297zm-20.885.87a3.414 3.414 0 0 1 3.445 3.447 3.414 3.414 0 0 1-3.445 3.447 3.414 3.414 0 0 1-3.447-3.447 3.414 3.414 0 0 1 3.446-3.446zm45.314 1.78-.738 4.912 2.456.37.738-4.912zM36.172 17.33l-1.793.588a1.242 1.242 0 0 0-.813.862l-.788 2.978 2.401.634.615-2.325 1.15-.377-.773-2.36zm22.405 5.781-.737 4.913 2.455.368.739-4.91zm-26.432 1.048-1.27 4.802 2.401.634 1.27-4.802zm25.325 6.32-.739 4.913 2.457.368.738-4.911-2.456-.37zm-27.23.882-1.27 4.802 2.402.634 1.27-4.801zm26.124 6.486-.739 4.91 2.455.37.74-4.912-2.457-.368zm-28.027.717-1.27 4.803 2.4.634 1.27-4.802-2.401-.634zm-19.555.856a3.414 3.414 0 0 1 3.446 3.446 3.414 3.414 0 0 1-3.446 3.447 3.414 3.414 0 0 1-3.445-3.447 3.414 3.414 0 0 1 3.445-3.446zm46.473 5.795-.739 4.91 2.456.37.74-4.911zm-11.124 5.072-1.082 2.236 4.47 2.164 1.083-2.237zm-8.651 1.55a3.414 3.414 0 0 1 3.445 3.446 3.414 3.414 0 0 1-3.445 3.447 3.414 3.414 0 0 1-3.447-3.447 3.414 3.414 0 0 1 3.446-3.446zm18.669.745-.358 2.378-2.953-1.428-1.083 2.236 4.472 2.163.541-1.117 1.228.183.608-4.046-2.455-.37z"/>
</svg>
`, Hm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <circle cx="49.754" cy="50.219" r="10.098" fill="none" stroke="currentColor" stroke-width="5.1"/>
    <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4.491"
          d="M44.516 26.657H17.842l6.669-11.55 6.668-11.55 6.669 11.55Z"/>
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="6"
          stroke-width="4.683" d="M4.481 40.605h20.761v19.093H4.481z"/>
</svg>
`, Jm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path stroke="currentColor" fill="currentColor" stroke-width="2"
          d="M44.095 2.247a2.285 2.285 0 0 0-.135.04L12.025 12.762a2.285 2.285 0 0 0-1.497 1.588l-7.772 29.4a2.285 2.285 0 0 0 1.213 2.641L35.397 61.6a2.285 2.285 0 0 0 2.873-.754l22.64-32.582a2.285 2.285 0 0 0 .05-2.534L46.6 3.23a2.285 2.285 0 0 0-2.504-.982ZM43.7 7.182l12.203 19.12-5.167 1.76 1.052 3.09 2.031-.693L38.07 53.122l.01-1.375-3.262-.023-.034 4.5-27.13-13.127 6.975-26.38Zm3.946 21.932-6.18 2.105 1.052 3.09 6.18-2.105zm-9.27 3.157-2.329.793a1.632 1.632 0 0 0-1.105 1.534l-.03 4.068 3.265.024.02-2.91 1.232-.419zm-3.488 9.66-.047 6.529 3.264.023.048-6.528z"/>
</svg>
`, $m = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="m41.478 7.967-.033 3.069c1.887.02 3.772.337 5.561.933l.97-2.913a21.337 21.337 0 0 0-6.498-1.09Zm-3.294.215a21.567 21.567 0 0 0-6.298 1.915l1.332 2.766a18.518 18.518 0 0 1 5.401-1.641zm12.836 2.155-1.402 2.73a18.497 18.497 0 0 1 4.572 3.312l2.16-2.179a21.548 21.548 0 0 0-5.331-3.863ZM22.783 13.06c-11.848 0-21.486 9.638-21.486 21.486 0 11.849 9.638 21.486 21.486 21.486a21.37 21.37 0 0 0 14.288-5.466c.003 0 .006 0 .009.002.04-.036.078-.075.117-.11l.077-.072a21.285 21.285 0 0 0 1.51-1.532 22.128 22.128 0 0 0 .867-1.025 19.557 19.557 0 0 1-.88-.095c-.196-.025-.389-.058-.582-.09-.097-.015-.194-.028-.29-.045a18.378 18.378 0 0 1-1.576-.359l-.118-.03c-7.753-2.172-13.422-9.271-13.422-17.728a18.34 18.34 0 0 1 5.867-13.478c.1-.093.199-.185.3-.276.153-.136.31-.268.467-.4.097-.08.193-.163.291-.242.255-.203.514-.402.78-.592a21.534 21.534 0 0 0-1.76-.592l-.018-.005c-.176-.05-.355-.095-.533-.141-.132-.035-.263-.073-.397-.105-.213-.051-.43-.095-.646-.14-.077-.016-.153-.035-.231-.05H26.9a21.37 21.37 0 0 0-4.118-.4Zm35.728 3.64-2.472 1.82a18.424 18.424 0 0 1 2.61 5.004l2.907-.986a21.474 21.474 0 0 0-3.045-5.839Zm3.864 9.034-3.022.534c.328 1.86.37 3.772.118 5.642l3.042.409a21.448 21.448 0 0 0-.138-6.585zm-3.496 8.943a18.539 18.539 0 0 1-2.416 5.104l2.543 1.72a21.586 21.586 0 0 0 2.815-5.952zM54.703 42a18.288 18.288 0 0 1-4.428 3.492l1.505 2.675a21.348 21.348 0 0 0 5.173-4.08zm-6.995 4.69a18.512 18.512 0 0 1-5.526 1.158l.163 3.065a21.56 21.56 0 0 0 6.444-1.35z"/>
</svg>
`, Vm = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M44.698 2.661a1.644 1.644 0 0 1 2.328 0l9.866 9.866a1.644 1.644 0 0 1 0 2.329L24.004 47.744a1.644 1.644 0 0 1-.552.362L7.008 54.683a1.644 1.644 0 0 1-2.138-2.138l6.578-16.444a1.644 1.644 0 0 1 .362-.552zm-3.089 7.742 7.542 7.541 4.252-4.252-7.541-7.541zm5.216 9.866-7.54-7.54-21.378 21.376v.964h1.644a1.644 1.644 0 0 1 1.645 1.644v1.645h1.644a1.644 1.644 0 0 1 1.645 1.644v1.644h.963zM14.724 37.29l-.35.348L9.35 50.204l12.566-5.025.349-.35a1.644 1.644 0 0 1-1.07-1.538v-1.645h-1.644a1.644 1.644 0 0 1-1.644-1.644v-1.644h-1.644a1.644 1.644 0 0 1-1.54-1.07"/>
    <path stroke="currentColor" stroke-width="5.107"
          d="M6.298 59.53c3.44-1.692 6.88-3.384 10.558-4.319s7.594-1.111 11.719-.298c4.125.814 8.459 2.617 13.483 2.655 5.023.038 10.737-1.689 16.45-3.415"/>
</svg>
`, Xm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M31.226 17.87c-4.69 0-8.532 3.832-8.532 8.508 0 1.812.58 3.495 1.558 4.88l5.932 10.255c.831 1.085 1.383.879 2.074-.058l6.543-11.135c.132-.24.236-.493.327-.753a8.396 8.396 0 0 0 .628-3.19c0-4.675-3.841-8.506-8.53-8.506zm0 3.987a4.5 4.5 0 0 1 4.532 4.52 4.5 4.5 0 0 1-4.532 4.521 4.5 4.5 0 0 1-4.534-4.52 4.5 4.5 0 0 1 4.533-4.52z"/>
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="6"
          stroke-width="5" d="M8.97 53.509 4.423 19.145 35.698 4.199l23.88 25.127L43.06 59.801Z"/>
</svg>
`, Wm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <ellipse cx="4.907" cy="-32.051" fill="none" stroke="currentColor" stroke-dasharray="13.7543, 6.87718"
             stroke-width="5.489" rx="20.4" ry="13.713" transform="matrix(-.71127 .70292 -.86047 -.5095 0 0)"/>
    <path fill="currentColor"
          d="M34.597 25.275a1.934 1.934 0 0 0-2.04 2.165l2.922 31.37c.188 1.523 1.989 2.235 3.165 1.249l6.169-5.004 2.765 4.79c1.59 2.756 4.115 3.431 6.87 1.841 2.756-1.59 3.433-4.114 1.841-6.87l-2.755-4.773 7.31-2.803c1.443-.525 1.728-2.44.503-3.365L35.64 25.66a1.93 1.93 0 0 0-1.042-.383z"/>
</svg>
`, jm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M1.947 25.554c-2.176 3.77-.867 8.656 2.903 10.832 2.126 1.229 4.607 1.346 6.757.539l8.252 12.152a7.79 7.79 0 0 0-.701 1.005c-2.176 3.77-.867 8.656 2.903 10.833 3.77 2.177 8.655.867 10.832-2.903 2.1-3.64.93-8.294-2.543-10.572a2.211 2.211 0 0 0-.36-.26 2.211 2.211 0 0 0-.404-.181 7.955 7.955 0 0 0-6.086-.432l-8.348-12.292c.19-.252.369-.512.53-.79 1.457-2.526 1.339-5.537-.03-7.907l8.202-8.256c3.494 1.335 7.562.025 9.575-3.229l13.899 2.913c.266 2.435 1.634 4.721 3.899 6.03 3.77 2.176 8.655.866 10.832-2.904 2.101-3.64.93-8.294-2.543-10.572a2.211 2.211 0 0 0-.36-.26 2.211 2.211 0 0 0-.403-.181c-3.71-1.87-8.328-.556-10.429 3.083-.084.147-.155.297-.228.446l-13.5-2.83c-.053-2.55-1.329-5.023-3.58-6.499a2.211 2.211 0 0 0-.358-.259 2.211 2.211 0 0 0-.405-.181c-3.708-1.87-8.326-.556-10.428 3.083-1.61 2.79-1.307 6.19.486 8.652l-7.84 7.892a2.211 2.211 0 0 0-.094-.036c-3.71-1.87-8.328-.556-10.429 3.084zm3.83 2.211a3.473 3.473 0 0 1 4.79-1.282 3.472 3.472 0 0 1 1.284 4.789 3.473 3.473 0 0 1-4.79 1.284 3.475 3.475 0 0 1-1.283-4.79ZM23.656 8.173a3.474 3.474 0 0 1 4.79-1.283 3.472 3.472 0 0 1 1.283 4.79 3.473 3.473 0 0 1-4.789 1.284 3.475 3.475 0 0 1-1.284-4.791zm-.666 44.12a3.474 3.474 0 0 1 4.79-1.283 3.472 3.472 0 0 1 1.283 4.79 3.473 3.473 0 0 1-4.79 1.284 3.475 3.475 0 0 1-1.283-4.791zm29.166-37.88a3.474 3.474 0 0 1 4.79-1.283 3.472 3.472 0 0 1 1.283 4.79 3.473 3.473 0 0 1-4.79 1.284 3.475 3.475 0 0 1-1.283-4.791z"/>
    <path fill="currentColor"
          d="M12.9 13.516c-.63.177-.685.37-.88.95l-1.069 3.18 2.995 1.006.844-2.506 2.074-.882-1.236-2.908zm19.209 5.25 4.378 4.554 2.277-2.19-4.379-4.554zm8.132 3.106 1.441 2.812 5.623-2.882-1.441-2.812zM5.448 46.082l3.144.304.608-6.29-3.145-.303zm4.623 3.728 5.762 2.592 1.297-2.88-5.762-2.593z"/>
</svg>
`, Zm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M1.717 38.645a2.675 2.668 79.7 0 0-.307 3.769L16.754 60.55a2.675 2.668 79.7 0 0 3.76.312l41.769-35.508a2.675 2.668 79.7 0 0 .307-3.769L47.246 3.45a2.675 2.668 79.7 0 0-3.76-.312zm5.486 2.352 37.702-32.05 11.892 14.056-2.717 2.31-4.458-5.269-2.033 1.729 4.457 5.269-3.11 2.643-4.457-5.268-2.034 1.728 4.458 5.27-3.106 2.64-4.458-5.27-2.033 1.73 4.457 5.268-3.11 2.644-6.194-7.32-2.033 1.728 6.193 7.32-3.11 2.645-4.457-5.269-2.034 1.729 4.458 5.268-3.106 2.64-4.458-5.268-2.033 1.73 4.457 5.268-3.11 2.643-4.457-5.268-2.034 1.729 4.458 5.268-2.098 1.783z"/>
</svg>
`, Km = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M7.839 34.833c-7.104-9.763-5.332-23.33 4.2-30.266C21.572-2.369 35.03.123 42.13 9.882L56.166 29.17c7.098 9.755 5.329 23.325-4.204 30.262-9.533 6.936-22.989 4.444-30.09-5.315L7.841 34.836Zm5.063-25.476c-6.079 5.766-7.006 15.598-1.634 22.98l.778 1.07 12.002-8.732zm3.43-2.495L27.476 22.18l12.002-8.733-.781-1.073c-5.37-7.38-15.01-9.522-22.367-5.512m25.643 10.014L14.54 36.836l10.762 14.79c5.818 7.997 16.653 9.842 24.163 4.378 7.51-5.465 9.088-16.342 3.267-24.342z"/>
</svg>
`, Qm = `\uFEFF<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M42.012 2.106a4.092 4.092 0 0 0-5.741.735 4.092 4.092 0 0 0 .572 5.607L23.964 23.45a8.185 8.185 0 0 0-10.458 2.142l5.18 4.005 5.454 4.218L7.87 59.22a1.124 7.304 37.712 0 0 1.54 1.19l20.494-22.138 5.454 4.217 5.18 4.005a8.185 8.185 0 0 0-.558-10.66l11.277-16.24a4.092 4.092 0 0 0 5.572-.858 4.092 4.092 0 0 0-.735-5.74z"/>
</svg>
`, ev = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g fill="currentColor" stroke="currentColor">
        <path d="m37.62 5.028-.337.284-4.039 4.068 3.547 3.523L39.875 9.8l2.846.596 1.025-4.893-4.176-.877Zm9.995 6.393 9.787 2.053 1.026-4.895-9.787-2.05zm14.68 3.078 9.787 2.05 1.025-4.892-9.787-2.053zm-39.623 5.522 3.547 3.523 7.049-7.094-3.547-3.523zm-10.57 10.642 3.546 3.524 7.047-7.094-3.547-3.524zM1.529 41.306l3.55 3.523 7.046-7.096-3.547-3.523Zm70.977 4.027 3.91 3.115 3.44-4.387-1.118-6.55zM.947 48.319l5.617 8.274 4.137-2.809-5.617-8.273Zm62.211 8.744 3.91 3.116 6.233-7.82-3.91-3.116zM9.373 60.73l5.62 8.272 4.134-2.809-5.617-8.271zm44.438 8.067 3.91 3.115 6.232-7.82-3.91-3.117zM17.8 73.138l5.617 8.273 4.137-2.808-5.617-8.274zm26.662 7.388 3.91 3.116 6.232-7.82-3.91-3.116zm-18.236 5.022 5.617 8.273 4.136-2.81-5.617-8.272zm8.888 6.709 3.91 3.117 6.233-7.822-3.91-3.115z"
              stroke-width="3"
              transform="translate(2.517 1.586) scale(.60827)"/>
        <path d="M22.672 20.02a3.5 3.5 0 0 0-2.506 1.034L-.514 41.872a3.5 3.5 0 0 0-.412 4.434L18 74.176a3.5 3.5 0 0 0 5.633.216l33.494-42.038a3.5 3.5 0 0 0-2.018-5.605l-31.742-6.654a3.5 3.5 0 0 0-.695-.074zm1.121 7.317 24.32 5.098-26.992 33.877L6.484 44.759Z"
              stroke-width="3"
              transform="translate(2.517 1.586) scale(.60827)"/>
        <path d="m78.734 7.668 2.61 11.396-18.145 4.154 2.705 11.816L84.05 30.88l2.609 11.396L100 21.011Z"
              stroke-width="3"
              transform="translate(1.586 1.586) scale(.60827)"/>
    </g>
</svg>
`, tv = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor" fill-rule="evenodd"
          d="M19.435 3.417c-4.478 0-8.96 1.693-12.343 5.076-6.766 6.766-6.766 17.913 0 24.679h.006c2.754 2.749 5.563 5.561 8.357 8.357 1.857 1.859 3.696 3.696 5.553 5.553l.949.949 1.892 1.898 9.496-9.49-1.898-1.898-6.502-6.502c-2.796-2.797-5.6-5.606-8.363-8.362-1.65-1.653-1.652-4.042 0-5.694 1.653-1.653 4.047-1.653 5.7 0l8.357 8.362 6.502 6.502 1.898 1.893 9.49-9.49-1.893-1.893-6.507-6.502-8.357-8.362c-3.384-3.383-7.86-5.076-12.337-5.076Zm0 2.68c3.789 0 7.577 1.432 10.439 4.294l8.357 8.362-5.694 5.694-8.357-8.362a6.7 6.7 0 0 0-9.496 0 6.697 6.697 0 0 0 0 9.49c2.76 2.755 5.566 5.564 8.363 8.362l-5.694 5.694c-2.795-2.796-5.601-5.607-8.357-8.357H8.99c-5.724-5.724-5.724-15.16 0-20.883 2.861-2.862 6.655-4.294 10.444-4.294ZM57.709 29.03a4.266 4.266 0 0 0-4.268 4.268c0 1.594.881 2.973 2.176 3.707-.714 4.997-1.424 10.107-2.176 15.037-.934 0-1.792.309-2.495.818l-7.115-5.07a4.25 4.25 0 0 0 .115-.965 4.27 4.27 0 1 0-4.268 4.268 4.23 4.23 0 0 0 2.732-1.012l6.973 4.965a4.22 4.22 0 0 0-.215 1.269 4.27 4.27 0 0 0 4.273 4.268 4.266 4.266 0 0 0 4.268-4.268 4.247 4.247 0 0 0-1.657-3.356l2.208-15.446c2.095-.273 3.722-2.045 3.722-4.215a4.27 4.27 0 0 0-4.273-4.268z"
    />
</svg>
`, nv = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g fill="currentColor">
        <path d="m4.879 2.684-2.832 2.8L7.65 11.15l2.832-2.801Zm8.403 8.495-2.832 2.802 5.603 5.662 2.831-2.802zm8.404 8.494-2.832 2.8 5.602 5.664 2.832-2.802z"
        />
        <path d="M27.814 7.408a3.576 3.576 0 0 0-1.161-.176 3.2 3.2 0 0 0-.878.138l7.963 26.068L7.18 27.3c-.543 2.352 1.67 6.055 4.962 6.816l23.054 5.297 2.326 6.42c-2.27-.175-4.279 1.912-4.908 3.805-.535 1.698-.512 3.656.085 5.61.597 1.954 1.671 3.59 3.064 4.7 1.393 1.11 3.238 1.71 5.023 1.164 8.064-3.039 2.135-15.793.467-20.58 5.917 1.023 18.77 5.88 20.578-1.979.42-1.819-.306-3.616-1.509-4.929-1.203-1.313-2.909-2.27-4.9-2.73-1.99-.46-3.866-.547-5.602.303-1.737.849-3.768 2.642-3.468 4.73a6.17 6.17 0 0 0 .012.43l-6.563-1.794-6.88-22.632c-.702-2.297-3.445-3.99-5.108-4.523Zm26.824 26.88c1.36.315 2.472.99 3.116 1.692.644.703.795 1.307.684 1.79-.112.482-.511.956-1.399 1.305-.887.348-2.182.467-3.542.152-1.361-.314-2.472-.99-3.116-1.693-.644-.703-.797-1.304-.686-1.787.112-.482.513-.956 1.4-1.305a5.198 5.198 0 0 1 1.594-.327 6.98 6.98 0 0 1 1.949.173zM37.846 49.174c.333.069.71.25 1.13.585.746.594 1.497 1.654 1.905 2.99.408 1.335.379 2.635.092 3.545-.287.91-.731 1.34-1.205 1.484-.473.145-1.085.036-1.831-.558-.746-.594-1.496-1.655-1.904-2.99-.407-1.336-.378-2.637-.092-3.546.287-.91.732-1.342 1.206-1.486.118-.036.245-.057.38-.058.102 0 .207.011.319.034z"
        />
    </g>
</svg>
`, rv = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M41.233 7.917c-5.5 0-10.519 2.077-14.328 5.482a21.443 21.443 0 0 0-4.138-.404c-11.88 0-21.544 9.664-21.544 21.544s9.664 21.544 21.544 21.544c5.5 0 10.519-2.077 14.328-5.482 1.34.263 2.722.404 4.138.404 11.88 0 21.544-9.664 21.544-21.544S53.113 7.917 41.233 7.917zm-9.969 6.791a21.61 21.61 0 0 1 5.598 3.499l-2.01 2.33a18.557 18.557 0 0 0-4.8-2.999Zm-7.927 2.765 2.557 1.714a18.558 18.558 0 0 0-2.396 5.128l-2.955-.86a21.614 21.614 0 0 1 2.794-5.982zm15.86 3.08a21.413 21.413 0 0 1 3.46 5.628l-2.839 1.188a18.357 18.357 0 0 0-2.963-4.817zm-19.334 6.142 3.053.399a18.348 18.348 0 0 0 .144 5.654l-3.027.552a21.407 21.407 0 0 1-.17-6.605Zm23.834 2.63a21.81 21.81 0 0 1 .548 3.263c.1 1.1.115 2.207.044 3.31l-3.07-.195c.12-1.888-.056-3.8-.511-5.64zm-19.918 6.172a18.37 18.37 0 0 0 2.64 5.003l-2.466 1.84a21.427 21.427 0 0 1-3.083-5.84Zm17.042 3.016 3.004.666a21.486 21.486 0 0 1-2.404 6.15l-2.66-1.547a18.434 18.434 0 0 0 2.06-5.27zm-12.535 4.124a18.554 18.554 0 0 0 4.6 3.302l-1.392 2.744a21.611 21.611 0 0 1-5.363-3.85Z"/>
</svg>
`, iv = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M1.585 1.585V13.75h5.17v1.52H8.58v-1.52h5.17V1.585Zm3.041 3.041h6.083v6.083H4.626Zm9.429 2.13V8.58h3.65V6.755Zm5.475 0V8.58h3.65V6.755Zm5.474 0V8.58h3.65V6.755Zm5.475 0V8.58h3.65V6.755Zm5.475 0V8.58h3.65V6.755Zm5.475 0v1.597a1.521 1.521 0 0 0-.325.152l-15.686 9.758a1.52 1.52 0 0 0-.199 2.437l23.512 20.553a1.52 1.52 0 0 0 2.477-.78l4.212-17.037v.352h1.825v-3.65H55.42v1.524a1.52 1.52 0 0 0-.222-.296L43.002 8.741a1.521 1.521 0 0 0-.182-.16h2.259V6.754Zm5.475 0V8.58h3.65V6.755Zm5.474 0V8.58h3.65V6.755Zm3.042 2.432v3.65h1.825v-3.65Zm-13.752 2.549 10.757 11.137-3.57 14.446-20.087-17.559Zm13.752 2.926v3.65h1.825v-3.65ZM6.755 17.096v3.65H8.58v-3.65zm0 5.475v3.65h1.628a1.52 1.52 0 0 0 1.02.909l12.683 3.406 7.905 12.694c.168.27.417.481.712.602l13.39 4.576a1.52 1.52 0 0 0 1.157-2.814l-12.936-4.389L24.35 28.42a1.52 1.52 0 0 0-.896-.664L10.19 24.193a1.52 1.52 0 0 0-1.61.557v-2.178zm48.665 3.042v3.65h1.825v-3.65ZM6.755 28.046v3.65H8.58v-3.65zm48.665 3.042v3.65h1.825v-3.65ZM6.755 33.52v3.65H8.58v-3.65zm48.665 3.041v3.65h1.825v-3.65ZM6.755 38.996v3.65H8.58v-3.65zm48.665 3.041v3.65h1.825v-3.65zm-35.382.913c-3.454 0-6.287 2.833-6.287 6.287 0 3.076 2.248 5.654 5.179 6.183h-1.225v1.825h3.65V55.42h-.206c2.712-.5 4.777-2.796 5.055-5.59l.002-.002a1.52 1.52 0 0 0 0-1.18c-.314-3.168-2.922-5.698-6.168-5.698zM6.755 44.47v3.65H8.58v-3.65zm13.283 1.521a3.223 3.223 0 0 1 3.246 3.246 3.223 3.223 0 0 1-3.246 3.246 3.223 3.223 0 0 1-3.246-3.246 3.223 3.223 0 0 1 3.246-3.246zm35.382 1.52v2.738h-5.17v12.166h12.165V50.25h-5.17v-2.737ZM6.755 49.946v3.65H8.58v-3.65zm46.536 3.346h6.083v6.083H53.29ZM6.755 55.42v1.825h3.65V55.42H7.668Zm5.475 0v1.825h3.65V55.42zm10.95 0v1.825h3.65V55.42zm5.474 0v1.825h3.65V55.42zm5.475 0v1.825h3.65V55.42zm5.475 0v1.825h3.65V55.42zm5.475 0v1.825h3.65V55.42z"/>
</svg>
`, wt = {
  marker: Rm,
  circle: Cm,
  ellipse: Nm,
  circle_marker: Vf,
  text_marker: zm,
  line: Om,
  rectangle: Fm,
  polygon: Dm,
  freehand: Vm,
  custom_shape: Hm,
  drag: Pm,
  change: Am,
  rotate: Bm,
  scale: ev,
  copy: Ym,
  cut: Jm,
  split: nv,
  delete: Gm,
  union: rv,
  difference: $m,
  line_simplification: jm,
  lasso: Wm,
  shape_markers: null,
  snapping: tv,
  pin: Qm,
  snap_guides: Um,
  measurements: Zm,
  auto_trace: qm,
  geofencing: Xm,
  zoom_to_features: iv,
  click_to_edit: Km
}, Jo = (t) => [
  {
    type: "circle",
    paint: {
      "circle-radius": t.circleMarkerRadius,
      "circle-color": t.fillColor,
      "circle-opacity": t.fillOpacity,
      "circle-stroke-color": t.lineColor,
      "circle-stroke-width": t.lineWidth,
      "circle-stroke-opacity": t.lineOpacity
    }
  }
], wi = (t) => [
  {
    type: "circle",
    paint: {
      "circle-radius": 7,
      "circle-color": "#ffffff",
      "circle-opacity": 1,
      "circle-stroke-color": t.lineColor,
      "circle-stroke-width": 2,
      "circle-stroke-opacity": 1
    }
  }
], $o = (t) => [
  {
    type: "line",
    paint: {
      "line-color": t.lineColor,
      "line-opacity": t.lineOpacity,
      "line-width": t.lineWidth
    }
  }
], Vo = () => [
  {
    type: "symbol",
    layout: {
      "icon-image": "default-marker",
      "icon-size": 0.18,
      "icon-allow-overlap": !0,
      "icon-anchor": "bottom"
    }
  }
], Xt = (t) => [
  {
    type: "fill",
    paint: {
      "fill-color": t.fillColor,
      "fill-opacity": t.fillOpacity
    }
  },
  {
    type: "line",
    paint: {
      "line-color": t.lineColor,
      "line-opacity": t.lineOpacity,
      "line-width": t.lineWidth
    }
  }
], Xo = (t) => [
  {
    type: "circle",
    paint: {
      "circle-radius": 6,
      "circle-color": "#ffffff",
      "circle-opacity": 0.6,
      "circle-stroke-color": t.lineColor,
      "circle-stroke-width": 2,
      "circle-stroke-opacity": 1
    }
  }
], Wo = () => [
  {
    type: "line",
    paint: {
      "line-color": "#00979f",
      "line-width": 1.8,
      "line-dasharray": [2, 1]
    }
  }
], It = `__${ot}_`, mn = `${It}id`, Uc = 6e4, K = {
  // order matters here, layers order will be aligned according to these items
  ...ht && { standby: `${ot}_standby` },
  // available only in the pro version
  main: `${ot}_main`,
  temporary: `${ot}_temporary`
}, jo = () => [
  {
    type: "symbol",
    layout: {
      "text-field": ["get", `${It}text`],
      "text-justify": "center"
    },
    paint: {
      "text-color": "black",
      "text-halo-color": "#fff",
      "text-halo-width": 2
    }
  }
], Ge = {
  [K.main]: {
    lineColor: "#278cda",
    lineOpacity: 0.8,
    lineWidth: 3,
    fillColor: "#4fb3ff",
    fillOpacity: 0.4,
    circleMarkerRadius: 10
  },
  [K.temporary]: {
    lineColor: "#ff5600",
    lineOpacity: 0.8,
    lineWidth: 3,
    fillColor: "#4fb3ff",
    fillOpacity: 0.4,
    circleMarkerRadius: 10
  },
  ...ht && {
    [K.standby]: {
      lineColor: "#787878",
      lineOpacity: 0.8,
      lineWidth: 3,
      fillColor: "#a5a5a5",
      fillOpacity: 0.4,
      circleMarkerRadius: 10
    }
  }
}, sv = {
  // order matters here, layers order will be aligned according to these items
  polygon: {
    [K.main]: Xt(Ge[K.main]),
    [K.temporary]: Xt(Ge[K.temporary]),
    ...ht && { [K.standby]: Xt(Ge[K.standby]) }
  },
  ellipse: {
    [K.main]: Xt(Ge[K.main]),
    [K.temporary]: Xt(Ge[K.temporary]),
    ...ht && { [K.standby]: Xt(Ge[K.standby]) }
  },
  rectangle: {
    [K.main]: Xt(Ge[K.main]),
    [K.temporary]: Xt(Ge[K.temporary]),
    ...ht && { [K.standby]: Xt(Ge[K.standby]) }
  },
  circle: {
    [K.main]: Xt(Ge[K.main]),
    [K.temporary]: Xt(Ge[K.temporary]),
    ...ht && { [K.standby]: Xt(Ge[K.standby]) }
  },
  circle_marker: {
    [K.main]: Jo(Ge[K.main]),
    [K.temporary]: Jo(Ge[K.temporary]),
    ...ht && { [K.standby]: Jo(Ge[K.standby]) }
  },
  line: {
    [K.main]: $o(Ge[K.main]),
    [K.temporary]: $o(Ge[K.temporary]),
    ...ht && { [K.standby]: $o(Ge[K.standby]) }
  },
  marker: {
    [K.temporary]: Vo(),
    [K.main]: Vo(),
    ...ht && { [K.standby]: Vo() }
  },
  text_marker: {
    [K.main]: jo(),
    [K.temporary]: jo(),
    ...ht && { [K.standby]: jo() }
  },
  dom_marker: {
    // not a geojson source, layers aren't required
    [K.main]: [],
    [K.temporary]: [],
    ...ht && { [K.standby]: [] }
  },
  center_marker: {
    [K.main]: wi(Ge[K.main]),
    [K.temporary]: wi(Ge[K.temporary]),
    ...ht && { [K.standby]: wi(Ge[K.standby]) }
  },
  vertex_marker: {
    [K.main]: wi(Ge[K.main]),
    [K.temporary]: wi(Ge[K.temporary]),
    ...ht && { [K.standby]: wi(Ge[K.standby]) }
  },
  edge_marker: {
    [K.main]: Xo(Ge[K.main]),
    [K.temporary]: Xo(Ge[K.temporary]),
    ...ht && {
      [K.standby]: Xo(Ge[K.standby])
    }
  },
  snap_guide: {
    // todo: check which sources can't display snap guides (and other shapes) and remove layers
    [K.main]: Wo(),
    [K.temporary]: Wo(),
    ...ht && { [K.standby]: Wo() }
  }
}, av = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0A95F0" class="bi bi-geo-alt-fill"
     viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
`, ov = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
    <circle cx="10.5" cy="10.5" r="9.213" fill="#fff" stroke="#278cda" stroke-width="2.303"/>
</svg>
`, uv = {
  settings: {
    throttlingDelay: 10,
    useDefaultLayers: !0,
    controlsPosition: "top-left",
    controlsUiEnabledByDefault: !0,
    controlsCollapsible: !1,
    controlsStyles: {
      controlGroupClass: "maplibregl-ctrl maplibregl-ctrl-group",
      controlContainerClass: "gm-control-container",
      controlButtonClass: "gm-control-button"
    },
    idGenerator: null,
    markerIcons: {
      default: av,
      control: ov
    }
  },
  layerStyles: sv,
  controls: {
    draw: {
      marker: {
        title: "Marker",
        icon: wt.marker,
        uiEnabled: !0,
        active: !1
      },
      circle_marker: {
        title: "Circle Marker",
        icon: wt.circle_marker,
        uiEnabled: !0,
        active: !1
      },
      text_marker: {
        title: "Text Marker",
        icon: wt.text_marker,
        uiEnabled: !0,
        active: !1
      },
      circle: {
        title: "Circle",
        icon: wt.circle,
        uiEnabled: !0,
        active: !1
      },
      ellipse: {
        title: "Ellipse",
        icon: wt.ellipse,
        uiEnabled: !0,
        active: !1
      },
      line: {
        title: "Line",
        icon: wt.line,
        uiEnabled: !0,
        active: !1
      },
      rectangle: {
        title: "Rectangle",
        icon: wt.rectangle,
        uiEnabled: !0,
        active: !1
      },
      polygon: {
        title: "Polygon",
        icon: wt.polygon,
        uiEnabled: !0,
        active: !1
      }
    },
    edit: {
      drag: {
        title: "Drag",
        icon: wt.drag,
        uiEnabled: !0,
        active: !1
      },
      change: {
        title: "Change",
        icon: wt.change,
        uiEnabled: !0,
        active: !1
      },
      rotate: {
        title: "Rotate",
        icon: wt.rotate,
        uiEnabled: !0,
        active: !1
      },
      cut: {
        title: "Cut",
        icon: wt.cut,
        uiEnabled: !0,
        active: !1
      },
      delete: {
        title: "Delete",
        icon: wt.delete,
        uiEnabled: !0,
        active: !1
      }
    },
    helper: {
      shape_markers: {
        title: "Shape markers",
        icon: null,
        uiEnabled: !1,
        active: !1
      },
      snapping: {
        title: "Snapping",
        icon: wt.snapping,
        uiEnabled: !0,
        active: !1
      },
      zoom_to_features: {
        title: "Zoom to features",
        icon: wt.zoom_to_features,
        uiEnabled: !0,
        active: !1
      }
    }
  }
};
var Xf = typeof global == "object" && global && global.Object === Object && global, lv = typeof self == "object" && self && self.Object === Object && self, Mn = Xf || lv || Function("return this")(), rn = Mn.Symbol, Wf = Object.prototype, cv = Wf.hasOwnProperty, hv = Wf.toString, fs = rn ? rn.toStringTag : void 0;
function fv(t) {
  var e = cv.call(t, fs), r = t[fs];
  try {
    t[fs] = void 0;
    var s = !0;
  } catch {
  }
  var u = hv.call(t);
  return s && (e ? t[fs] = r : delete t[fs]), u;
}
var gv = Object.prototype, dv = gv.toString;
function pv(t) {
  return dv.call(t);
}
var mv = "[object Null]", vv = "[object Undefined]", zc = rn ? rn.toStringTag : void 0;
function ri(t) {
  return t == null ? t === void 0 ? vv : mv : zc && zc in Object(t) ? fv(t) : pv(t);
}
function Jn(t) {
  return t != null && typeof t == "object";
}
var yv = "[object Symbol]";
function Fi(t) {
  return typeof t == "symbol" || Jn(t) && ri(t) == yv;
}
function Ni(t, e) {
  for (var r = -1, s = t == null ? 0 : t.length, u = Array(s); ++r < s; )
    u[r] = e(t[r], r, t);
  return u;
}
var Lt = Array.isArray, qc = rn ? rn.prototype : void 0, Yc = qc ? qc.toString : void 0;
function jf(t) {
  if (typeof t == "string")
    return t;
  if (Lt(t))
    return Ni(t, jf) + "";
  if (Fi(t))
    return Yc ? Yc.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var _v = /\s/;
function Ev(t) {
  for (var e = t.length; e-- && _v.test(t.charAt(e)); )
    ;
  return e;
}
var xv = /^\s+/;
function wv(t) {
  return t && t.slice(0, Ev(t) + 1).replace(xv, "");
}
function Tt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Hc = NaN, kv = /^[-+]0x[0-9a-f]+$/i, Sv = /^0b[01]+$/i, Mv = /^0o[0-7]+$/i, Iv = parseInt;
function Jc(t) {
  if (typeof t == "number")
    return t;
  if (Fi(t))
    return Hc;
  if (Tt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Tt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = wv(t);
  var r = Sv.test(t);
  return r || Mv.test(t) ? Iv(t.slice(2), r ? 2 : 8) : kv.test(t) ? Hc : +t;
}
function po(t) {
  return t;
}
var bv = "[object AsyncFunction]", Lv = "[object Function]", Tv = "[object GeneratorFunction]", Av = "[object Proxy]";
function cl(t) {
  if (!Tt(t))
    return !1;
  var e = ri(t);
  return e == Lv || e == Tv || e == bv || e == Av;
}
var Zo = Mn["__core-js_shared__"], $c = (function() {
  var t = /[^.]+$/.exec(Zo && Zo.keys && Zo.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function Cv(t) {
  return !!$c && $c in t;
}
var Nv = Function.prototype, Pv = Nv.toString;
function ii(t) {
  if (t != null) {
    try {
      return Pv.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Ov = /[\\^$.*+?()[\]{}|]/g, Rv = /^\[object .+?Constructor\]$/, Dv = Function.prototype, Fv = Object.prototype, Gv = Dv.toString, Bv = Fv.hasOwnProperty, Uv = RegExp(
  "^" + Gv.call(Bv).replace(Ov, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zv(t) {
  if (!Tt(t) || Cv(t))
    return !1;
  var e = cl(t) ? Uv : Rv;
  return e.test(ii(t));
}
function qv(t, e) {
  return t?.[e];
}
function si(t, e) {
  var r = qv(t, e);
  return zv(r) ? r : void 0;
}
var Su = si(Mn, "WeakMap"), Vc = Object.create, Yv = /* @__PURE__ */ (function() {
  function t() {
  }
  return function(e) {
    if (!Tt(e))
      return {};
    if (Vc)
      return Vc(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
})();
function Hv(t, e, r) {
  switch (r.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, r[0]);
    case 2:
      return t.call(e, r[0], r[1]);
    case 3:
      return t.call(e, r[0], r[1], r[2]);
  }
  return t.apply(e, r);
}
function Jv() {
}
function $v(t, e) {
  var r = -1, s = t.length;
  for (e || (e = Array(s)); ++r < s; )
    e[r] = t[r];
  return e;
}
var Vv = 800, Xv = 16, Wv = Date.now;
function jv(t) {
  var e = 0, r = 0;
  return function() {
    var s = Wv(), u = Xv - (s - r);
    if (r = s, u > 0) {
      if (++e >= Vv)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function Zv(t) {
  return function() {
    return t;
  };
}
var $a = (function() {
  try {
    var t = si(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), Kv = $a ? function(t, e) {
  return $a(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Zv(e),
    writable: !0
  });
} : po, Qv = jv(Kv);
function ey(t, e) {
  for (var r = -1, s = t == null ? 0 : t.length; ++r < s && e(t[r], r, t) !== !1; )
    ;
  return t;
}
function ty(t, e, r, s) {
  for (var u = t.length, c = r + -1; ++c < u; )
    if (e(t[c], c, t))
      return c;
  return -1;
}
function ny(t) {
  return t !== t;
}
function ry(t, e, r) {
  for (var s = r - 1, u = t.length; ++s < u; )
    if (t[s] === e)
      return s;
  return -1;
}
function iy(t, e, r) {
  return e === e ? ry(t, e, r) : ty(t, ny, r);
}
function Zf(t, e) {
  var r = t == null ? 0 : t.length;
  return !!r && iy(t, e, 0) > -1;
}
var sy = 9007199254740991, ay = /^(?:0|[1-9]\d*)$/;
function mo(t, e) {
  var r = typeof t;
  return e = e ?? sy, !!e && (r == "number" || r != "symbol" && ay.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Vs(t, e, r) {
  e == "__proto__" && $a ? $a(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function Xs(t, e) {
  return t === e || t !== t && e !== e;
}
var oy = Object.prototype, uy = oy.hasOwnProperty;
function hl(t, e, r) {
  var s = t[e];
  (!(uy.call(t, e) && Xs(s, r)) || r === void 0 && !(e in t)) && Vs(t, e, r);
}
function ly(t, e, r, s) {
  var u = !r;
  r || (r = {});
  for (var c = -1, f = e.length; ++c < f; ) {
    var h = e[c], p = void 0;
    p === void 0 && (p = t[h]), u ? Vs(r, h, p) : hl(r, h, p);
  }
  return r;
}
var Xc = Math.max;
function cy(t, e, r) {
  return e = Xc(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var s = arguments, u = -1, c = Xc(s.length - e, 0), f = Array(c); ++u < c; )
      f[u] = s[e + u];
    u = -1;
    for (var h = Array(e + 1); ++u < e; )
      h[u] = s[u];
    return h[e] = r(f), Hv(t, this, h);
  };
}
function fl(t, e) {
  return Qv(cy(t, e, po), t + "");
}
var hy = 9007199254740991;
function gl(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= hy;
}
function Xi(t) {
  return t != null && gl(t.length) && !cl(t);
}
function Mu(t, e, r) {
  if (!Tt(r))
    return !1;
  var s = typeof e;
  return (s == "number" ? Xi(r) && mo(e, r.length) : s == "string" && e in r) ? Xs(r[e], t) : !1;
}
function Kf(t) {
  return fl(function(e, r) {
    var s = -1, u = r.length, c = u > 1 ? r[u - 1] : void 0, f = u > 2 ? r[2] : void 0;
    for (c = t.length > 3 && typeof c == "function" ? (u--, c) : void 0, f && Mu(r[0], r[1], f) && (c = u < 3 ? void 0 : c, u = 1), e = Object(e); ++s < u; ) {
      var h = r[s];
      h && t(e, h, s, c);
    }
    return e;
  });
}
var fy = Object.prototype;
function dl(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || fy;
  return t === r;
}
function gy(t, e) {
  for (var r = -1, s = Array(t); ++r < t; )
    s[r] = e(r);
  return s;
}
var dy = "[object Arguments]";
function Wc(t) {
  return Jn(t) && ri(t) == dy;
}
var Qf = Object.prototype, py = Qf.hasOwnProperty, my = Qf.propertyIsEnumerable, Fs = Wc(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Wc : function(t) {
  return Jn(t) && py.call(t, "callee") && !my.call(t, "callee");
};
function vy() {
  return !1;
}
var eg = typeof exports == "object" && exports && !exports.nodeType && exports, jc = eg && typeof module == "object" && module && !module.nodeType && module, yy = jc && jc.exports === eg, Zc = yy ? Mn.Buffer : void 0, _y = Zc ? Zc.isBuffer : void 0, Gs = _y || vy, Ey = "[object Arguments]", xy = "[object Array]", wy = "[object Boolean]", ky = "[object Date]", Sy = "[object Error]", My = "[object Function]", Iy = "[object Map]", by = "[object Number]", Ly = "[object Object]", Ty = "[object RegExp]", Ay = "[object Set]", Cy = "[object String]", Ny = "[object WeakMap]", Py = "[object ArrayBuffer]", Oy = "[object DataView]", Ry = "[object Float32Array]", Dy = "[object Float64Array]", Fy = "[object Int8Array]", Gy = "[object Int16Array]", By = "[object Int32Array]", Uy = "[object Uint8Array]", zy = "[object Uint8ClampedArray]", qy = "[object Uint16Array]", Yy = "[object Uint32Array]", He = {};
He[Ry] = He[Dy] = He[Fy] = He[Gy] = He[By] = He[Uy] = He[zy] = He[qy] = He[Yy] = !0;
He[Ey] = He[xy] = He[Py] = He[wy] = He[Oy] = He[ky] = He[Sy] = He[My] = He[Iy] = He[by] = He[Ly] = He[Ty] = He[Ay] = He[Cy] = He[Ny] = !1;
function Hy(t) {
  return Jn(t) && gl(t.length) && !!He[ri(t)];
}
function vo(t) {
  return function(e) {
    return t(e);
  };
}
var tg = typeof exports == "object" && exports && !exports.nodeType && exports, As = tg && typeof module == "object" && module && !module.nodeType && module, Jy = As && As.exports === tg, Ko = Jy && Xf.process, Gi = (function() {
  try {
    var t = As && As.require && As.require("util").types;
    return t || Ko && Ko.binding && Ko.binding("util");
  } catch {
  }
})(), Kc = Gi && Gi.isTypedArray, pl = Kc ? vo(Kc) : Hy, $y = Object.prototype, Vy = $y.hasOwnProperty;
function ng(t, e) {
  var r = Lt(t), s = !r && Fs(t), u = !r && !s && Gs(t), c = !r && !s && !u && pl(t), f = r || s || u || c, h = f ? gy(t.length, String) : [], p = h.length;
  for (var d in t)
    (e || Vy.call(t, d)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    u && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    c && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    mo(d, p))) && h.push(d);
  return h;
}
function rg(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var Xy = rg(Object.keys, Object), Wy = Object.prototype, jy = Wy.hasOwnProperty;
function Zy(t) {
  if (!dl(t))
    return Xy(t);
  var e = [];
  for (var r in Object(t))
    jy.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function yo(t) {
  return Xi(t) ? ng(t) : Zy(t);
}
function Ky(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var Qy = Object.prototype, e0 = Qy.hasOwnProperty;
function t0(t) {
  if (!Tt(t))
    return Ky(t);
  var e = dl(t), r = [];
  for (var s in t)
    s == "constructor" && (e || !e0.call(t, s)) || r.push(s);
  return r;
}
function ig(t) {
  return Xi(t) ? ng(t, !0) : t0(t);
}
var n0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r0 = /^\w*$/;
function ml(t, e) {
  if (Lt(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || Fi(t) ? !0 : r0.test(t) || !n0.test(t) || e != null && t in Object(e);
}
var Bs = si(Object, "create");
function i0() {
  this.__data__ = Bs ? Bs(null) : {}, this.size = 0;
}
function s0(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var a0 = "__lodash_hash_undefined__", o0 = Object.prototype, u0 = o0.hasOwnProperty;
function l0(t) {
  var e = this.__data__;
  if (Bs) {
    var r = e[t];
    return r === a0 ? void 0 : r;
  }
  return u0.call(e, t) ? e[t] : void 0;
}
var c0 = Object.prototype, h0 = c0.hasOwnProperty;
function f0(t) {
  var e = this.__data__;
  return Bs ? e[t] !== void 0 : h0.call(e, t);
}
var g0 = "__lodash_hash_undefined__";
function d0(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = Bs && e === void 0 ? g0 : e, this;
}
function jr(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var s = t[e];
    this.set(s[0], s[1]);
  }
}
jr.prototype.clear = i0;
jr.prototype.delete = s0;
jr.prototype.get = l0;
jr.prototype.has = f0;
jr.prototype.set = d0;
function p0() {
  this.__data__ = [], this.size = 0;
}
function _o(t, e) {
  for (var r = t.length; r--; )
    if (Xs(t[r][0], e))
      return r;
  return -1;
}
var m0 = Array.prototype, v0 = m0.splice;
function y0(t) {
  var e = this.__data__, r = _o(e, t);
  if (r < 0)
    return !1;
  var s = e.length - 1;
  return r == s ? e.pop() : v0.call(e, r, 1), --this.size, !0;
}
function _0(t) {
  var e = this.__data__, r = _o(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function E0(t) {
  return _o(this.__data__, t) > -1;
}
function x0(t, e) {
  var r = this.__data__, s = _o(r, t);
  return s < 0 ? (++this.size, r.push([t, e])) : r[s][1] = e, this;
}
function lr(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var s = t[e];
    this.set(s[0], s[1]);
  }
}
lr.prototype.clear = p0;
lr.prototype.delete = y0;
lr.prototype.get = _0;
lr.prototype.has = E0;
lr.prototype.set = x0;
var Us = si(Mn, "Map");
function w0() {
  this.size = 0, this.__data__ = {
    hash: new jr(),
    map: new (Us || lr)(),
    string: new jr()
  };
}
function k0(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Eo(t, e) {
  var r = t.__data__;
  return k0(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function S0(t) {
  var e = Eo(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function M0(t) {
  return Eo(this, t).get(t);
}
function I0(t) {
  return Eo(this, t).has(t);
}
function b0(t, e) {
  var r = Eo(this, t), s = r.size;
  return r.set(t, e), this.size += r.size == s ? 0 : 1, this;
}
function cr(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var s = t[e];
    this.set(s[0], s[1]);
  }
}
cr.prototype.clear = w0;
cr.prototype.delete = S0;
cr.prototype.get = M0;
cr.prototype.has = I0;
cr.prototype.set = b0;
var L0 = "Expected a function";
function vl(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(L0);
  var r = function() {
    var s = arguments, u = e ? e.apply(this, s) : s[0], c = r.cache;
    if (c.has(u))
      return c.get(u);
    var f = t.apply(this, s);
    return r.cache = c.set(u, f) || c, f;
  };
  return r.cache = new (vl.Cache || cr)(), r;
}
vl.Cache = cr;
var T0 = 500;
function A0(t) {
  var e = vl(t, function(s) {
    return r.size === T0 && r.clear(), s;
  }), r = e.cache;
  return e;
}
var C0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, N0 = /\\(\\)?/g, P0 = A0(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(C0, function(r, s, u, c) {
    e.push(u ? c.replace(N0, "$1") : s || r);
  }), e;
});
function O0(t) {
  return t == null ? "" : jf(t);
}
function yl(t, e) {
  return Lt(t) ? t : ml(t, e) ? [t] : P0(O0(t));
}
function Ws(t) {
  if (typeof t == "string" || Fi(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function _l(t, e) {
  e = yl(e, t);
  for (var r = 0, s = e.length; t != null && r < s; )
    t = t[Ws(e[r++])];
  return r && r == s ? t : void 0;
}
function Bi(t, e, r) {
  var s = t == null ? void 0 : _l(t, e);
  return s === void 0 ? r : s;
}
function sg(t, e) {
  for (var r = -1, s = e.length, u = t.length; ++r < s; )
    t[u + r] = e[r];
  return t;
}
var Qc = rn ? rn.isConcatSpreadable : void 0;
function R0(t) {
  return Lt(t) || Fs(t) || !!(Qc && t && t[Qc]);
}
function D0(t, e, r, s, u) {
  var c = -1, f = t.length;
  for (r || (r = R0), u || (u = []); ++c < f; ) {
    var h = t[c];
    r(h) ? sg(u, h) : u[u.length] = h;
  }
  return u;
}
var ag = rg(Object.getPrototypeOf, Object), F0 = "[object Object]", G0 = Function.prototype, B0 = Object.prototype, og = G0.toString, U0 = B0.hasOwnProperty, z0 = og.call(Object);
function ug(t) {
  if (!Jn(t) || ri(t) != F0)
    return !1;
  var e = ag(t);
  if (e === null)
    return !0;
  var r = U0.call(e, "constructor") && e.constructor;
  return typeof r == "function" && r instanceof r && og.call(r) == z0;
}
function q0() {
  this.__data__ = new lr(), this.size = 0;
}
function Y0(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function H0(t) {
  return this.__data__.get(t);
}
function J0(t) {
  return this.__data__.has(t);
}
var $0 = 200;
function V0(t, e) {
  var r = this.__data__;
  if (r instanceof lr) {
    var s = r.__data__;
    if (!Us || s.length < $0 - 1)
      return s.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new cr(s);
  }
  return r.set(t, e), this.size = r.size, this;
}
function wn(t) {
  var e = this.__data__ = new lr(t);
  this.size = e.size;
}
wn.prototype.clear = q0;
wn.prototype.delete = Y0;
wn.prototype.get = H0;
wn.prototype.has = J0;
wn.prototype.set = V0;
var lg = typeof exports == "object" && exports && !exports.nodeType && exports, eh = lg && typeof module == "object" && module && !module.nodeType && module, X0 = eh && eh.exports === lg, th = X0 ? Mn.Buffer : void 0, nh = th ? th.allocUnsafe : void 0;
function cg(t, e) {
  if (e)
    return t.slice();
  var r = t.length, s = nh ? nh(r) : new t.constructor(r);
  return t.copy(s), s;
}
function W0(t, e) {
  for (var r = -1, s = t == null ? 0 : t.length, u = 0, c = []; ++r < s; ) {
    var f = t[r];
    e(f, r, t) && (c[u++] = f);
  }
  return c;
}
function j0() {
  return [];
}
var Z0 = Object.prototype, K0 = Z0.propertyIsEnumerable, rh = Object.getOwnPropertySymbols, Q0 = rh ? function(t) {
  return t == null ? [] : (t = Object(t), W0(rh(t), function(e) {
    return K0.call(t, e);
  }));
} : j0;
function e_(t, e, r) {
  var s = e(t);
  return Lt(t) ? s : sg(s, r(t));
}
function Iu(t) {
  return e_(t, yo, Q0);
}
var bu = si(Mn, "DataView"), Lu = si(Mn, "Promise"), Pi = si(Mn, "Set"), ih = "[object Map]", t_ = "[object Object]", sh = "[object Promise]", ah = "[object Set]", oh = "[object WeakMap]", uh = "[object DataView]", n_ = ii(bu), r_ = ii(Us), i_ = ii(Lu), s_ = ii(Pi), a_ = ii(Su), pn = ri;
(bu && pn(new bu(new ArrayBuffer(1))) != uh || Us && pn(new Us()) != ih || Lu && pn(Lu.resolve()) != sh || Pi && pn(new Pi()) != ah || Su && pn(new Su()) != oh) && (pn = function(t) {
  var e = ri(t), r = e == t_ ? t.constructor : void 0, s = r ? ii(r) : "";
  if (s)
    switch (s) {
      case n_:
        return uh;
      case r_:
        return ih;
      case i_:
        return sh;
      case s_:
        return ah;
      case a_:
        return oh;
    }
  return e;
});
var o_ = Object.prototype, u_ = o_.hasOwnProperty;
function l_(t) {
  var e = t.length, r = new t.constructor(e);
  return e && typeof t[0] == "string" && u_.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
var Va = Mn.Uint8Array;
function El(t) {
  var e = new t.constructor(t.byteLength);
  return new Va(e).set(new Va(t)), e;
}
function c_(t, e) {
  var r = El(t.buffer);
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var h_ = /\w*$/;
function f_(t) {
  var e = new t.constructor(t.source, h_.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var lh = rn ? rn.prototype : void 0, ch = lh ? lh.valueOf : void 0;
function g_(t) {
  return ch ? Object(ch.call(t)) : {};
}
function hg(t, e) {
  var r = e ? El(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var d_ = "[object Boolean]", p_ = "[object Date]", m_ = "[object Map]", v_ = "[object Number]", y_ = "[object RegExp]", __ = "[object Set]", E_ = "[object String]", x_ = "[object Symbol]", w_ = "[object ArrayBuffer]", k_ = "[object DataView]", S_ = "[object Float32Array]", M_ = "[object Float64Array]", I_ = "[object Int8Array]", b_ = "[object Int16Array]", L_ = "[object Int32Array]", T_ = "[object Uint8Array]", A_ = "[object Uint8ClampedArray]", C_ = "[object Uint16Array]", N_ = "[object Uint32Array]";
function P_(t, e, r) {
  var s = t.constructor;
  switch (e) {
    case w_:
      return El(t);
    case d_:
    case p_:
      return new s(+t);
    case k_:
      return c_(t);
    case S_:
    case M_:
    case I_:
    case b_:
    case L_:
    case T_:
    case A_:
    case C_:
    case N_:
      return hg(t, r);
    case m_:
      return new s();
    case v_:
    case E_:
      return new s(t);
    case y_:
      return f_(t);
    case __:
      return new s();
    case x_:
      return g_(t);
  }
}
function fg(t) {
  return typeof t.constructor == "function" && !dl(t) ? Yv(ag(t)) : {};
}
var O_ = "[object Map]";
function R_(t) {
  return Jn(t) && pn(t) == O_;
}
var hh = Gi && Gi.isMap, D_ = hh ? vo(hh) : R_, F_ = "[object Set]";
function G_(t) {
  return Jn(t) && pn(t) == F_;
}
var fh = Gi && Gi.isSet, B_ = fh ? vo(fh) : G_, U_ = 1, gg = "[object Arguments]", z_ = "[object Array]", q_ = "[object Boolean]", Y_ = "[object Date]", H_ = "[object Error]", dg = "[object Function]", J_ = "[object GeneratorFunction]", $_ = "[object Map]", V_ = "[object Number]", pg = "[object Object]", X_ = "[object RegExp]", W_ = "[object Set]", j_ = "[object String]", Z_ = "[object Symbol]", K_ = "[object WeakMap]", Q_ = "[object ArrayBuffer]", e1 = "[object DataView]", t1 = "[object Float32Array]", n1 = "[object Float64Array]", r1 = "[object Int8Array]", i1 = "[object Int16Array]", s1 = "[object Int32Array]", a1 = "[object Uint8Array]", o1 = "[object Uint8ClampedArray]", u1 = "[object Uint16Array]", l1 = "[object Uint32Array]", qe = {};
qe[gg] = qe[z_] = qe[Q_] = qe[e1] = qe[q_] = qe[Y_] = qe[t1] = qe[n1] = qe[r1] = qe[i1] = qe[s1] = qe[$_] = qe[V_] = qe[pg] = qe[X_] = qe[W_] = qe[j_] = qe[Z_] = qe[a1] = qe[o1] = qe[u1] = qe[l1] = !0;
qe[H_] = qe[dg] = qe[K_] = !1;
function Oa(t, e, r, s, u, c) {
  var f, h = e & U_;
  if (f !== void 0)
    return f;
  if (!Tt(t))
    return t;
  var p = Lt(t);
  if (p)
    f = l_(t);
  else {
    var d = pn(t), v = d == dg || d == J_;
    if (Gs(t))
      return cg(t, h);
    if (d == pg || d == gg || v && !u)
      f = v ? {} : fg(t);
    else {
      if (!qe[d])
        return u ? t : {};
      f = P_(t, d, h);
    }
  }
  c || (c = new wn());
  var _ = c.get(t);
  if (_)
    return _;
  c.set(t, f), B_(t) ? t.forEach(function(S) {
    f.add(Oa(S, e, r, S, t, c));
  }) : D_(t) && t.forEach(function(S, C) {
    f.set(C, Oa(S, e, r, C, t, c));
  });
  var x = Iu, M = p ? void 0 : x(t);
  return ey(M || t, function(S, C) {
    M && (C = S, S = t[C]), hl(f, C, Oa(S, e, r, C, t, c));
  }), f;
}
var c1 = 1, h1 = 4;
function sn(t) {
  return Oa(t, c1 | h1);
}
var f1 = "__lodash_hash_undefined__";
function g1(t) {
  return this.__data__.set(t, f1), this;
}
function d1(t) {
  return this.__data__.has(t);
}
function Ui(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new cr(); ++e < r; )
    this.add(t[e]);
}
Ui.prototype.add = Ui.prototype.push = g1;
Ui.prototype.has = d1;
function p1(t, e) {
  for (var r = -1, s = t == null ? 0 : t.length; ++r < s; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
function Xa(t, e) {
  return t.has(e);
}
var m1 = 1, v1 = 2;
function mg(t, e, r, s, u, c) {
  var f = r & m1, h = t.length, p = e.length;
  if (h != p && !(f && p > h))
    return !1;
  var d = c.get(t), v = c.get(e);
  if (d && v)
    return d == e && v == t;
  var _ = -1, x = !0, M = r & v1 ? new Ui() : void 0;
  for (c.set(t, e), c.set(e, t); ++_ < h; ) {
    var S = t[_], C = e[_];
    if (s)
      var F = f ? s(C, S, _, e, t, c) : s(S, C, _, t, e, c);
    if (F !== void 0) {
      if (F)
        continue;
      x = !1;
      break;
    }
    if (M) {
      if (!p1(e, function(O, I) {
        if (!Xa(M, I) && (S === O || u(S, O, r, s, c)))
          return M.push(I);
      })) {
        x = !1;
        break;
      }
    } else if (!(S === C || u(S, C, r, s, c))) {
      x = !1;
      break;
    }
  }
  return c.delete(t), c.delete(e), x;
}
function y1(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(s, u) {
    r[++e] = [u, s];
  }), r;
}
function xl(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(s) {
    r[++e] = s;
  }), r;
}
var _1 = 1, E1 = 2, x1 = "[object Boolean]", w1 = "[object Date]", k1 = "[object Error]", S1 = "[object Map]", M1 = "[object Number]", I1 = "[object RegExp]", b1 = "[object Set]", L1 = "[object String]", T1 = "[object Symbol]", A1 = "[object ArrayBuffer]", C1 = "[object DataView]", gh = rn ? rn.prototype : void 0, Qo = gh ? gh.valueOf : void 0;
function N1(t, e, r, s, u, c, f) {
  switch (r) {
    case C1:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case A1:
      return !(t.byteLength != e.byteLength || !c(new Va(t), new Va(e)));
    case x1:
    case w1:
    case M1:
      return Xs(+t, +e);
    case k1:
      return t.name == e.name && t.message == e.message;
    case I1:
    case L1:
      return t == e + "";
    case S1:
      var h = y1;
    case b1:
      var p = s & _1;
      if (h || (h = xl), t.size != e.size && !p)
        return !1;
      var d = f.get(t);
      if (d)
        return d == e;
      s |= E1, f.set(t, e);
      var v = mg(h(t), h(e), s, u, c, f);
      return f.delete(t), v;
    case T1:
      if (Qo)
        return Qo.call(t) == Qo.call(e);
  }
  return !1;
}
var P1 = 1, O1 = Object.prototype, R1 = O1.hasOwnProperty;
function D1(t, e, r, s, u, c) {
  var f = r & P1, h = Iu(t), p = h.length, d = Iu(e), v = d.length;
  if (p != v && !f)
    return !1;
  for (var _ = p; _--; ) {
    var x = h[_];
    if (!(f ? x in e : R1.call(e, x)))
      return !1;
  }
  var M = c.get(t), S = c.get(e);
  if (M && S)
    return M == e && S == t;
  var C = !0;
  c.set(t, e), c.set(e, t);
  for (var F = f; ++_ < p; ) {
    x = h[_];
    var O = t[x], I = e[x];
    if (s)
      var H = f ? s(I, O, x, e, t, c) : s(O, I, x, t, e, c);
    if (!(H === void 0 ? O === I || u(O, I, r, s, c) : H)) {
      C = !1;
      break;
    }
    F || (F = x == "constructor");
  }
  if (C && !F) {
    var X = t.constructor, J = e.constructor;
    X != J && "constructor" in t && "constructor" in e && !(typeof X == "function" && X instanceof X && typeof J == "function" && J instanceof J) && (C = !1);
  }
  return c.delete(t), c.delete(e), C;
}
var F1 = 1, dh = "[object Arguments]", ph = "[object Array]", pa = "[object Object]", G1 = Object.prototype, mh = G1.hasOwnProperty;
function B1(t, e, r, s, u, c) {
  var f = Lt(t), h = Lt(e), p = f ? ph : pn(t), d = h ? ph : pn(e);
  p = p == dh ? pa : p, d = d == dh ? pa : d;
  var v = p == pa, _ = d == pa, x = p == d;
  if (x && Gs(t)) {
    if (!Gs(e))
      return !1;
    f = !0, v = !1;
  }
  if (x && !v)
    return c || (c = new wn()), f || pl(t) ? mg(t, e, r, s, u, c) : N1(t, e, p, r, s, u, c);
  if (!(r & F1)) {
    var M = v && mh.call(t, "__wrapped__"), S = _ && mh.call(e, "__wrapped__");
    if (M || S) {
      var C = M ? t.value() : t, F = S ? e.value() : e;
      return c || (c = new wn()), u(C, F, r, s, c);
    }
  }
  return x ? (c || (c = new wn()), D1(t, e, r, s, u, c)) : !1;
}
function xo(t, e, r, s, u) {
  return t === e ? !0 : t == null || e == null || !Jn(t) && !Jn(e) ? t !== t && e !== e : B1(t, e, r, s, xo, u);
}
var U1 = 1, z1 = 2;
function q1(t, e, r, s) {
  var u = r.length, c = u;
  if (t == null)
    return !c;
  for (t = Object(t); u--; ) {
    var f = r[u];
    if (f[2] ? f[1] !== t[f[0]] : !(f[0] in t))
      return !1;
  }
  for (; ++u < c; ) {
    f = r[u];
    var h = f[0], p = t[h], d = f[1];
    if (f[2]) {
      if (p === void 0 && !(h in t))
        return !1;
    } else {
      var v = new wn(), _;
      if (!(_ === void 0 ? xo(d, p, U1 | z1, s, v) : _))
        return !1;
    }
  }
  return !0;
}
function vg(t) {
  return t === t && !Tt(t);
}
function Y1(t) {
  for (var e = yo(t), r = e.length; r--; ) {
    var s = e[r], u = t[s];
    e[r] = [s, u, vg(u)];
  }
  return e;
}
function yg(t, e) {
  return function(r) {
    return r == null ? !1 : r[t] === e && (e !== void 0 || t in Object(r));
  };
}
function H1(t) {
  var e = Y1(t);
  return e.length == 1 && e[0][2] ? yg(e[0][0], e[0][1]) : function(r) {
    return r === t || q1(r, t, e);
  };
}
function J1(t, e) {
  return t != null && e in Object(t);
}
function $1(t, e, r) {
  e = yl(e, t);
  for (var s = -1, u = e.length, c = !1; ++s < u; ) {
    var f = Ws(e[s]);
    if (!(c = t != null && r(t, f)))
      break;
    t = t[f];
  }
  return c || ++s != u ? c : (u = t == null ? 0 : t.length, !!u && gl(u) && mo(f, u) && (Lt(t) || Fs(t)));
}
function V1(t, e) {
  return t != null && $1(t, e, J1);
}
var X1 = 1, W1 = 2;
function j1(t, e) {
  return ml(t) && vg(e) ? yg(Ws(t), e) : function(r) {
    var s = Bi(r, t);
    return s === void 0 && s === e ? V1(r, t) : xo(e, s, X1 | W1);
  };
}
function Z1(t) {
  return function(e) {
    return e?.[t];
  };
}
function K1(t) {
  return function(e) {
    return _l(e, t);
  };
}
function Q1(t) {
  return ml(t) ? Z1(Ws(t)) : K1(t);
}
function _g(t) {
  return typeof t == "function" ? t : t == null ? po : typeof t == "object" ? Lt(t) ? j1(t[0], t[1]) : H1(t) : Q1(t);
}
function eE(t, e, r, s) {
  for (var u = -1, c = t == null ? 0 : t.length; ++u < c; ) {
    var f = t[u];
    e(s, f, r(f), t);
  }
  return s;
}
function tE(t) {
  return function(e, r, s) {
    for (var u = -1, c = Object(e), f = s(e), h = f.length; h--; ) {
      var p = f[++u];
      if (r(c[p], p, c) === !1)
        break;
    }
    return e;
  };
}
var Eg = tE();
function nE(t, e) {
  return t && Eg(t, e, yo);
}
function rE(t, e) {
  return function(r, s) {
    if (r == null)
      return r;
    if (!Xi(r))
      return t(r, s);
    for (var u = r.length, c = -1, f = Object(r); ++c < u && s(f[c], c, f) !== !1; )
      ;
    return r;
  };
}
var xg = rE(nE);
function iE(t, e, r, s) {
  return xg(t, function(u, c, f) {
    e(s, u, r(u), f);
  }), s;
}
function wg(t, e) {
  return function(r, s) {
    var u = Lt(r) ? eE : iE, c = e ? e() : {};
    return u(r, t, _g(s), c);
  };
}
var sE = Object.prototype, aE = sE.hasOwnProperty, oE = wg(function(t, e, r) {
  aE.call(t, r) ? ++t[r] : Vs(t, r, 1);
}), eu = function() {
  return Mn.Date.now();
}, uE = "Expected a function", lE = Math.max, cE = Math.min;
function kg(t, e, r) {
  var s, u, c, f, h, p, d = 0, v = !1, _ = !1, x = !0;
  if (typeof t != "function")
    throw new TypeError(uE);
  e = Jc(e) || 0, Tt(r) && (v = !!r.leading, _ = "maxWait" in r, c = _ ? lE(Jc(r.maxWait) || 0, e) : c, x = "trailing" in r ? !!r.trailing : x);
  function M(U) {
    var W = s, E = u;
    return s = u = void 0, d = U, f = t.apply(E, W), f;
  }
  function S(U) {
    return d = U, h = setTimeout(O, e), v ? M(U) : f;
  }
  function C(U) {
    var W = U - p, E = U - d, w = e - W;
    return _ ? cE(w, c - E) : w;
  }
  function F(U) {
    var W = U - p, E = U - d;
    return p === void 0 || W >= e || W < 0 || _ && E >= c;
  }
  function O() {
    var U = eu();
    if (F(U))
      return I(U);
    h = setTimeout(O, C(U));
  }
  function I(U) {
    return h = void 0, x && s ? M(U) : (s = u = void 0, f);
  }
  function H() {
    h !== void 0 && clearTimeout(h), d = 0, s = p = u = h = void 0;
  }
  function X() {
    return h === void 0 ? f : I(eu());
  }
  function J() {
    var U = eu(), W = F(U);
    if (s = arguments, u = this, p = U, W) {
      if (h === void 0)
        return S(p);
      if (_)
        return clearTimeout(h), h = setTimeout(O, e), M(p);
    }
    return h === void 0 && (h = setTimeout(O, e)), f;
  }
  return J.cancel = H, J.flush = X, J;
}
function Tu(t, e, r) {
  (r !== void 0 && !Xs(t[e], r) || r === void 0 && !(e in t)) && Vs(t, e, r);
}
function Sg(t) {
  return Jn(t) && Xi(t);
}
function Au(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
function hE(t) {
  return ly(t, ig(t));
}
function fE(t, e, r, s, u, c, f) {
  var h = Au(t, r), p = Au(e, r), d = f.get(p);
  if (d) {
    Tu(t, r, d);
    return;
  }
  var v = c ? c(h, p, r + "", t, e, f) : void 0, _ = v === void 0;
  if (_) {
    var x = Lt(p), M = !x && Gs(p), S = !x && !M && pl(p);
    v = p, x || M || S ? Lt(h) ? v = h : Sg(h) ? v = $v(h) : M ? (_ = !1, v = cg(p, !0)) : S ? (_ = !1, v = hg(p, !0)) : v = [] : ug(p) || Fs(p) ? (v = h, Fs(h) ? v = hE(h) : (!Tt(h) || cl(h)) && (v = fg(p))) : _ = !1;
  }
  _ && (f.set(p, v), u(v, p, s, c, f), f.delete(p)), Tu(t, r, v);
}
function wl(t, e, r, s, u) {
  t !== e && Eg(e, function(c, f) {
    if (u || (u = new wn()), Tt(c))
      fE(t, e, f, r, wl, s, u);
    else {
      var h = s ? s(Au(t, f), c, f + "", t, e, u) : void 0;
      h === void 0 && (h = c), Tu(t, f, h);
    }
  }, ig);
}
var gE = Kf(function(t, e, r, s) {
  wl(t, e, r, s);
});
function dE(t, e, r) {
  for (var s = -1, u = t == null ? 0 : t.length; ++s < u; )
    if (r(e, t[s]))
      return !0;
  return !1;
}
function pE(t, e) {
  var r = -1, s = Xi(t) ? Array(t.length) : [];
  return xg(t, function(u, c, f) {
    s[++r] = e(u, c, f);
  }), s;
}
function mE(t, e) {
  return Ni(e, function(r) {
    return t[r];
  });
}
function vE(t) {
  return t == null ? [] : mE(t, yo(t));
}
var yE = Math.min;
function _E(t, e, r) {
  for (var s = Zf, u = t[0].length, c = t.length, f = c, h = Array(c), p = 1 / 0, d = []; f--; ) {
    var v = t[f];
    p = yE(v.length, p), h[f] = u >= 120 && v.length >= 120 ? new Ui(f && v) : void 0;
  }
  v = t[0];
  var _ = -1, x = h[0];
  e:
    for (; ++_ < u && d.length < p; ) {
      var M = v[_], S = M;
      if (M = M !== 0 ? M : 0, !(x ? Xa(x, S) : s(d, S))) {
        for (f = c; --f; ) {
          var C = h[f];
          if (!(C ? Xa(C, S) : s(t[f], S)))
            continue e;
        }
        x && x.push(S), d.push(M);
      }
    }
  return d;
}
function EE(t) {
  return Sg(t) ? t : [];
}
var xE = fl(function(t) {
  var e = Ni(t, EE);
  return e.length && e[0] === t[0] ? _E(e) : [];
});
function Wi(t, e) {
  return xo(t, e);
}
var wE = wg(function(t, e, r) {
  Vs(t, r, e);
}), kE = Kf(function(t, e, r) {
  wl(t, e, r);
});
function SE(t, e, r, s) {
  if (!Tt(t))
    return t;
  e = yl(e, t);
  for (var u = -1, c = e.length, f = c - 1, h = t; h != null && ++u < c; ) {
    var p = Ws(e[u]), d = r;
    if (p === "__proto__" || p === "constructor" || p === "prototype")
      return t;
    if (u != f) {
      var v = h[p];
      d = void 0, d === void 0 && (d = Tt(v) ? v : mo(e[u + 1]) ? [] : {});
    }
    hl(h, p, d), h = h[p];
  }
  return t;
}
function ME(t, e) {
  var r = t.length;
  for (t.sort(e); r--; )
    t[r] = t[r].value;
  return t;
}
function IE(t, e) {
  if (t !== e) {
    var r = t !== void 0, s = t === null, u = t === t, c = Fi(t), f = e !== void 0, h = e === null, p = e === e, d = Fi(e);
    if (!h && !d && !c && t > e || c && f && p && !h && !d || s && f && p || !r && p || !u)
      return 1;
    if (!s && !c && !d && t < e || d && r && u && !s && !c || h && r && u || !f && u || !p)
      return -1;
  }
  return 0;
}
function bE(t, e, r) {
  for (var s = -1, u = t.criteria, c = e.criteria, f = u.length, h = r.length; ++s < f; ) {
    var p = IE(u[s], c[s]);
    if (p) {
      if (s >= h)
        return p;
      var d = r[s];
      return p * (d == "desc" ? -1 : 1);
    }
  }
  return t.index - e.index;
}
function LE(t, e, r) {
  e.length ? e = Ni(e, function(c) {
    return Lt(c) ? function(f) {
      return _l(f, c.length === 1 ? c[0] : c);
    } : c;
  }) : e = [po];
  var s = -1;
  e = Ni(e, vo(_g));
  var u = pE(t, function(c, f, h) {
    var p = Ni(e, function(d) {
      return d(c);
    });
    return { criteria: p, index: ++s, value: c };
  });
  return ME(u, function(c, f) {
    return bE(c, f, r);
  });
}
function TE(t, e, r) {
  return t == null ? t : SE(t, e, r);
}
var vh = fl(function(t, e) {
  if (t == null)
    return [];
  var r = e.length;
  return r > 1 && Mu(t, e[0], e[1]) ? e = [] : r > 2 && Mu(e[0], e[1], e[2]) && (e = [e[0]]), LE(t, D0(e), []);
}), AE = "Expected a function";
function Mg(t, e, r) {
  var s = !0, u = !0;
  if (typeof t != "function")
    throw new TypeError(AE);
  return Tt(r) && (s = "leading" in r ? !!r.leading : s, u = "trailing" in r ? !!r.trailing : u), kg(t, e, {
    leading: s,
    maxWait: e,
    trailing: u
  });
}
var CE = 1 / 0, NE = Pi && 1 / xl(new Pi([, -0]))[1] == CE ? function(t) {
  return new Pi(t);
} : Jv, PE = 200;
function OE(t, e, r) {
  var s = -1, u = Zf, c = t.length, f = !0, h = [], p = h;
  if (r)
    f = !1, u = dE;
  else if (c >= PE) {
    var d = NE(t);
    if (d)
      return xl(d);
    f = !1, u = Xa, p = new Ui();
  } else
    p = h;
  e:
    for (; ++s < c; ) {
      var v = t[s], _ = v;
      if (v = r || v !== 0 ? v : 0, f && _ === _) {
        for (var x = p.length; x--; )
          if (p[x] === _)
            continue e;
        h.push(v);
      } else u(p, _, r) || (p !== h && p.push(_), h.push(v));
    }
  return h;
}
function yh(t, e) {
  return e = typeof e == "function" ? e : void 0, t && t.length ? OE(t, void 0, e) : [];
}
function Ig(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ra = { exports: {} }, RE = Ra.exports, _h;
function DE() {
  return _h || (_h = 1, (function(t) {
    (function(e, r) {
      t.exports ? t.exports = r() : e.log = r();
    })(RE, function() {
      var e = function() {
      }, r = "undefined", s = typeof window !== r && typeof window.navigator !== r && /Trident\/|MSIE /.test(window.navigator.userAgent), u = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
      ], c = {}, f = null;
      function h(C, F) {
        var O = C[F];
        if (typeof O.bind == "function")
          return O.bind(C);
        try {
          return Function.prototype.bind.call(O, C);
        } catch {
          return function() {
            return Function.prototype.apply.apply(O, [C, arguments]);
          };
        }
      }
      function p() {
        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
      }
      function d(C) {
        return C === "debug" && (C = "log"), typeof console === r ? !1 : C === "trace" && s ? p : console[C] !== void 0 ? h(console, C) : console.log !== void 0 ? h(console, "log") : e;
      }
      function v() {
        for (var C = this.getLevel(), F = 0; F < u.length; F++) {
          var O = u[F];
          this[O] = F < C ? e : this.methodFactory(O, C, this.name);
        }
        if (this.log = this.debug, typeof console === r && C < this.levels.SILENT)
          return "No console available for logging";
      }
      function _(C) {
        return function() {
          typeof console !== r && (v.call(this), this[C].apply(this, arguments));
        };
      }
      function x(C, F, O) {
        return d(C) || _.apply(this, arguments);
      }
      function M(C, F) {
        var O = this, I, H, X, J = "loglevel";
        typeof C == "string" ? J += ":" + C : typeof C == "symbol" && (J = void 0);
        function U(T) {
          var A = (u[T] || "silent").toUpperCase();
          if (!(typeof window === r || !J)) {
            try {
              window.localStorage[J] = A;
              return;
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(J) + "=" + A + ";";
            } catch {
            }
          }
        }
        function W() {
          var T;
          if (!(typeof window === r || !J)) {
            try {
              T = window.localStorage[J];
            } catch {
            }
            if (typeof T === r)
              try {
                var A = window.document.cookie, G = encodeURIComponent(J), R = A.indexOf(G + "=");
                R !== -1 && (T = /^([^;]+)/.exec(
                  A.slice(R + G.length + 1)
                )[1]);
              } catch {
              }
            return O.levels[T] === void 0 && (T = void 0), T;
          }
        }
        function E() {
          if (!(typeof window === r || !J)) {
            try {
              window.localStorage.removeItem(J);
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(J) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            } catch {
            }
          }
        }
        function w(T) {
          var A = T;
          if (typeof A == "string" && O.levels[A.toUpperCase()] !== void 0 && (A = O.levels[A.toUpperCase()]), typeof A == "number" && A >= 0 && A <= O.levels.SILENT)
            return A;
          throw new TypeError("log.setLevel() called with invalid level: " + T);
        }
        O.name = C, O.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5
        }, O.methodFactory = F || x, O.getLevel = function() {
          return X ?? H ?? I;
        }, O.setLevel = function(T, A) {
          return X = w(T), A !== !1 && U(X), v.call(O);
        }, O.setDefaultLevel = function(T) {
          H = w(T), W() || O.setLevel(T, !1);
        }, O.resetLevel = function() {
          X = null, E(), v.call(O);
        }, O.enableAll = function(T) {
          O.setLevel(O.levels.TRACE, T);
        }, O.disableAll = function(T) {
          O.setLevel(O.levels.SILENT, T);
        }, O.rebuild = function() {
          if (f !== O && (I = w(f.getLevel())), v.call(O), f === O)
            for (var T in c)
              c[T].rebuild();
        }, I = w(
          f ? f.getLevel() : "WARN"
        );
        var b = W();
        b != null && (X = w(b)), v.call(O);
      }
      f = new M(), f.getLogger = function(F) {
        if (typeof F != "symbol" && typeof F != "string" || F === "")
          throw new TypeError("You must supply a name when creating a logger.");
        var O = c[F];
        return O || (O = c[F] = new M(
          F,
          f.methodFactory
        )), O;
      };
      var S = typeof window !== r ? window.log : void 0;
      return f.noConflict = function() {
        return typeof window !== r && window.log === f && (window.log = S), f;
      }, f.getLoggers = function() {
        return c;
      }, f.default = f, f;
    });
  })(Ra)), Ra.exports;
}
var FE = DE();
const te = /* @__PURE__ */ Ig(FE), GE = (t, e) => {
  let r = null;
  try {
    t.forEach((s) => {
      if (e(s))
        throw r = s, new Error("found");
    });
  } catch {
  }
  return r;
};
function Cu(t, e, r = []) {
  e(t, r), Array.isArray(t) ? t.forEach((s, u) => Cu(s, e, [...r, u])) : ug(t) ? Object.entries(t).forEach(
    ([s, u]) => Cu(u, e, [...r, s])
  ) : t !== null && typeof t == "object" && te.warn(`forEachDeep: unknown collection type (${t}), path "${r.join(".")}"`);
}
const BE = (t) => {
  const e = ["shape_markers"], r = t.settings.controlsUiEnabledByDefault;
  Cu(t, (s, u) => {
    const c = u.at(2);
    if (u.length === 4 && u.at(-1) === "uiEnabled") {
      if (e.includes(c))
        return;
      TE(t, u, r);
    }
  });
}, Nu = () => sn(uv), bg = !1;
var kl = Array.isArray, UE = Array.prototype.indexOf, Sl = Array.from, Lg = Object.defineProperty, Cs = Object.getOwnPropertyDescriptor, zE = Object.getOwnPropertyDescriptors, qE = Object.prototype, YE = Array.prototype, Tg = Object.getPrototypeOf, Eh = Object.isExtensible;
function HE(t) {
  return typeof t == "function";
}
const vn = () => {
};
function JE(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ag() {
  var t, e, r = new Promise((s, u) => {
    t = s, e = u;
  });
  return { promise: r, resolve: t, reject: e };
}
function Wa(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const r = [];
  for (const s of t)
    if (r.push(s), r.length === e) break;
  return r;
}
const _t = 2, Ml = 4, Il = 8, Wn = 16, hr = 32, ai = 64, wo = 128, mt = 1024, Dt = 2048, fr = 4096, Yt = 8192, Ir = 16384, ko = 32768, Zr = 65536, xh = 1 << 17, $E = 1 << 18, ji = 1 << 19, VE = 1 << 20, nn = 256, ja = 512, Za = 32768, Pu = 1 << 21, bl = 1 << 22, Vr = 1 << 23, Ns = Symbol("$state"), XE = Symbol(""), Ti = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Cg(t) {
  return t === this.v;
}
function Ng(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Pg(t) {
  return !Ng(t, this.v);
}
function Og(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function WE() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function jE(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ZE() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function KE(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function QE() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ex() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function tx() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function nx() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function rx() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let ix = !1;
const So = 1, Mo = 2, Rg = 4, sx = 8, ax = 16, ox = 1, ux = 2, lx = 4, cx = 1, hx = 2, dt = Symbol(), fx = "http://www.w3.org/1999/xhtml";
let vt = null;
function zi(t) {
  vt = t;
}
function Dg(t) {
  return (
    /** @type {T} */
    gx().get(t)
  );
}
function Zi(t, e = !1, r) {
  vt = {
    p: vt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Ki(t) {
  var e = (
    /** @type {ComponentContext} */
    vt
  ), r = e.e;
  if (r !== null) {
    e.e = null;
    for (var s of r)
      rd(s);
  }
  return e.i = !0, vt = e.p, /** @type {T} */
  {};
}
function Fg() {
  return !0;
}
function gx(t) {
  return vt === null && Og(), vt.c ??= new Map(dx(vt) || void 0);
}
function dx(t) {
  let e = t.p;
  for (; e !== null; ) {
    const r = e.c;
    if (r !== null)
      return r;
    e = e.p;
  }
  return null;
}
let Ai = [];
function px() {
  var t = Ai;
  Ai = [], JE(t);
}
function js(t) {
  if (Ai.length === 0) {
    var e = Ai;
    queueMicrotask(() => {
      e === Ai && px();
    });
  }
  Ai.push(t);
}
function mx() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function vx() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let yx = !1;
function xs(t) {
  if (typeof t != "object" || t === null || Ns in t)
    return t;
  const e = Tg(t);
  if (e !== qE && e !== YE)
    return t;
  var r = /* @__PURE__ */ new Map(), s = kl(t), u = /* @__PURE__ */ gn(0), c = Xr, f = (h) => {
    if (Xr === c)
      return h();
    var p = Ie, d = Xr;
    Rt(null), Lh(c);
    var v = h();
    return Rt(p), Lh(d), v;
  };
  return s && r.set("length", /* @__PURE__ */ gn(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(h, p, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && ex();
        var v = r.get(p);
        return v === void 0 ? v = f(() => {
          var _ = /* @__PURE__ */ gn(d.value);
          return r.set(p, _), _;
        }) : pt(v, d.value, !0), !0;
      },
      deleteProperty(h, p) {
        var d = r.get(p);
        if (d === void 0) {
          if (p in h) {
            const v = f(() => /* @__PURE__ */ gn(dt));
            r.set(p, v), Ps(u);
          }
        } else
          pt(d, dt), Ps(u);
        return !0;
      },
      get(h, p, d) {
        if (p === Ns)
          return t;
        var v = r.get(p), _ = p in h;
        if (v === void 0 && (!_ || Cs(h, p)?.writable) && (v = f(() => {
          var M = xs(_ ? h[p] : dt), S = /* @__PURE__ */ gn(M);
          return S;
        }), r.set(p, v)), v !== void 0) {
          var x = we(v);
          return x === dt ? void 0 : x;
        }
        return Reflect.get(h, p, d);
      },
      getOwnPropertyDescriptor(h, p) {
        var d = Reflect.getOwnPropertyDescriptor(h, p);
        if (d && "value" in d) {
          var v = r.get(p);
          v && (d.value = we(v));
        } else if (d === void 0) {
          var _ = r.get(p), x = _?.v;
          if (_ !== void 0 && x !== dt)
            return {
              enumerable: !0,
              configurable: !0,
              value: x,
              writable: !0
            };
        }
        return d;
      },
      has(h, p) {
        if (p === Ns)
          return !0;
        var d = r.get(p), v = d !== void 0 && d.v !== dt || Reflect.has(h, p);
        if (d !== void 0 || be !== null && (!v || Cs(h, p)?.writable)) {
          d === void 0 && (d = f(() => {
            var x = v ? xs(h[p]) : dt, M = /* @__PURE__ */ gn(x);
            return M;
          }), r.set(p, d));
          var _ = we(d);
          if (_ === dt)
            return !1;
        }
        return v;
      },
      set(h, p, d, v) {
        var _ = r.get(p), x = p in h;
        if (s && p === "length")
          for (var M = d; M < /** @type {Source<number>} */
          _.v; M += 1) {
            var S = r.get(M + "");
            S !== void 0 ? pt(S, dt) : M in h && (S = f(() => /* @__PURE__ */ gn(dt)), r.set(M + "", S));
          }
        if (_ === void 0)
          (!x || Cs(h, p)?.writable) && (_ = f(() => /* @__PURE__ */ gn(void 0)), pt(_, xs(d)), r.set(p, _));
        else {
          x = _.v !== dt;
          var C = f(() => xs(d));
          pt(_, C);
        }
        var F = Reflect.getOwnPropertyDescriptor(h, p);
        if (F?.set && F.set.call(v, d), !x) {
          if (s && typeof p == "string") {
            var O = (
              /** @type {Source<number>} */
              r.get("length")
            ), I = Number(p);
            Number.isInteger(I) && I >= O.v && pt(O, I + 1);
          }
          Ps(u);
        }
        return !0;
      },
      ownKeys(h) {
        we(u);
        var p = Reflect.ownKeys(h).filter((_) => {
          var x = r.get(_);
          return x === void 0 || x.v !== dt;
        });
        for (var [d, v] of r)
          v.v !== dt && !(d in h) && p.push(d);
        return p;
      },
      setPrototypeOf() {
        tx();
      }
    }
  );
}
function wh(t) {
  try {
    if (t !== null && typeof t == "object" && Ns in t)
      return t[Ns];
  } catch {
  }
  return t;
}
function _x(t, e) {
  return Object.is(wh(t), wh(e));
}
var kh, Gg, Bg, Ug;
function Ex() {
  if (kh === void 0) {
    kh = window, Gg = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, r = Text.prototype;
    Bg = Cs(e, "firstChild").get, Ug = Cs(e, "nextSibling").get, Eh(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Eh(r) && (r.__t = void 0);
  }
}
function Ar(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function kr(t) {
  return Bg.call(t);
}
// @__NO_SIDE_EFFECTS__
function Zs(t) {
  return Ug.call(t);
}
function En(t, e) {
  return /* @__PURE__ */ kr(t);
}
function Hn(t, e = !1) {
  {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ kr(
        /** @type {Node} */
        t
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Zs(r) : r;
  }
}
function zs(t, e = 1, r = !1) {
  let s = t;
  for (; e--; )
    s = /** @type {TemplateNode} */
    /* @__PURE__ */ Zs(s);
  return s;
}
function xx(t) {
  t.textContent = "";
}
function zg() {
  return !1;
}
function qg(t) {
  var e = be;
  if (e === null)
    return Ie.f |= Vr, t;
  if ((e.f & ko) === 0) {
    if ((e.f & wo) === 0)
      throw t;
    e.b.error(t);
  } else
    qi(t, e);
}
function qi(t, e) {
  for (; e !== null; ) {
    if ((e.f & wo) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (r) {
        t = r;
      }
    e = e.parent;
  }
  throw t;
}
const ma = /* @__PURE__ */ new Set();
let Ze = null, Da = null, yn = null, xr = [], Ll = null, Ou = !1;
class Un {
  committed = !1;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #r = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #u = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #a = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #o = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    xr = [], Da = null, this.apply();
    var r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const s of e)
      this.#i(s, r);
    this.is_fork || this.#l(), this.#r > 0 || this.is_fork ? (this.#s(r.effects), this.#s(r.render_effects), this.#s(r.block_effects)) : (Da = this, Ze = null, Sh(r.render_effects), Sh(r.effects), Da = null, this.#u?.resolve()), yn = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #i(e, r) {
    e.f ^= mt;
    for (var s = e.first; s !== null; ) {
      var u = s.f, c = (u & (hr | ai)) !== 0, f = c && (u & mt) !== 0, h = f || (u & Yt) !== 0 || this.skipped_effects.has(s);
      if ((s.f & wo) !== 0 && s.b?.is_pending() && (r = {
        parent: r,
        effect: s,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !h && s.fn !== null) {
        c ? s.f ^= mt : (u & Ml) !== 0 ? r.effects.push(s) : Qs(s) && ((s.f & Wn) !== 0 && r.block_effects.push(s), Ys(s));
        var p = s.first;
        if (p !== null) {
          s = p;
          continue;
        }
      }
      var d = s.parent;
      for (s = s.next; s === null && d !== null; )
        d === r.effect && (this.#s(r.effects), this.#s(r.render_effects), this.#s(r.block_effects), r = /** @type {EffectTarget} */
        r.parent), s = d.next, d = d.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(e) {
    for (const r of e)
      ((r.f & Dt) !== 0 ? this.#a : this.#o).push(r), yt(r, mt);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, r) {
    this.previous.has(e) || this.previous.set(e, r), this.current.set(e, e.v), yn?.set(e, e.v);
  }
  activate() {
    Ze = this;
  }
  deactivate() {
    Ze = null, yn = null;
  }
  flush() {
    if (this.activate(), xr.length > 0) {
      if (wx(), Ze !== null && Ze !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of this.#t) e(this);
    this.#t.clear();
  }
  #l() {
    if (this.#r === 0) {
      for (const e of this.#e) e();
      this.#e.clear();
    }
    this.#n === 0 && this.#c();
  }
  #c() {
    if (ma.size > 1) {
      this.previous.clear();
      var e = yn, r = !0, s = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const u of ma) {
        if (u === this) {
          r = !1;
          continue;
        }
        const c = [];
        for (const [h, p] of this.current) {
          if (u.current.has(h))
            if (r && p !== u.current.get(h))
              u.current.set(h, p);
            else
              continue;
          c.push(h);
        }
        if (c.length === 0)
          continue;
        const f = [...u.current.keys()].filter((h) => !this.current.has(h));
        if (f.length > 0) {
          const h = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
          for (const d of c)
            Yg(d, f, h, p);
          if (xr.length > 0) {
            Ze = u, u.apply();
            for (const d of xr)
              u.#i(d, s);
            xr = [], u.deactivate();
          }
        }
      }
      Ze = null, yn = e;
    }
    this.committed = !0, ma.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    this.#n += 1, e && (this.#r += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    this.#n -= 1, e && (this.#r -= 1), this.revive();
  }
  revive() {
    for (const e of this.#a)
      yt(e, Dt), Kr(e);
    for (const e of this.#o)
      yt(e, fr), Kr(e);
    this.#a = [], this.#o = [], this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    this.#e.add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#u ??= Ag()).promise;
  }
  static ensure() {
    if (Ze === null) {
      const e = Ze = new Un();
      ma.add(Ze), Un.enqueue(() => {
        Ze === e && e.flush();
      });
    }
    return Ze;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    js(e);
  }
  apply() {
  }
}
function wx() {
  var t = Oi;
  Ou = !0;
  try {
    var e = 0;
    for (Ih(!0); xr.length > 0; ) {
      var r = Un.ensure();
      if (e++ > 1e3) {
        var s, u;
        kx();
      }
      r.process(xr), br.clear();
    }
  } finally {
    Ou = !1, Ih(t), Ll = null;
  }
}
function kx() {
  try {
    QE();
  } catch (t) {
    qi(t, Ll);
  }
}
let rr = null;
function Sh(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var s = t[r++];
      if ((s.f & (Ir | Yt)) === 0 && Qs(s) && (rr = /* @__PURE__ */ new Set(), Ys(s), s.deps === null && s.first === null && s.nodes_start === null && (s.teardown === null && s.ac === null ? ld(s) : s.fn = null), rr?.size > 0)) {
        br.clear();
        for (const u of rr) {
          if ((u.f & (Ir | Yt)) !== 0) continue;
          const c = [u];
          let f = u.parent;
          for (; f !== null; )
            rr.has(f) && (rr.delete(f), c.push(f)), f = f.parent;
          for (let h = c.length - 1; h >= 0; h--) {
            const p = c[h];
            (p.f & (Ir | Yt)) === 0 && Ys(p);
          }
        }
        rr.clear();
      }
    }
    rr = null;
  }
}
function Yg(t, e, r, s) {
  if (!r.has(t) && (r.add(t), t.reactions !== null))
    for (const u of t.reactions) {
      const c = u.f;
      (c & _t) !== 0 ? Yg(
        /** @type {Derived} */
        u,
        e,
        r,
        s
      ) : (c & (bl | Wn)) !== 0 && (c & Dt) === 0 && // we may have scheduled this one already
      Hg(u, e, s) && (yt(u, Dt), Kr(
        /** @type {Effect} */
        u
      ));
    }
}
function Hg(t, e, r) {
  const s = r.get(t);
  if (s !== void 0) return s;
  if (t.deps !== null)
    for (const u of t.deps) {
      if (e.includes(u))
        return !0;
      if ((u.f & _t) !== 0 && Hg(
        /** @type {Derived} */
        u,
        e,
        r
      ))
        return r.set(
          /** @type {Derived} */
          u,
          !0
        ), !0;
    }
  return r.set(t, !1), !1;
}
function Kr(t) {
  for (var e = Ll = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (Ou && e === be && (r & Wn) !== 0)
      return;
    if ((r & (ai | hr)) !== 0) {
      if ((r & mt) === 0) return;
      e.f ^= mt;
    }
  }
  xr.push(e);
}
function Sx(t) {
  let e = 0, r = Qr(0), s;
  return () => {
    Ux() && (we(r), sd(() => (e === 0 && (s = ea(() => t(() => Ps(r)))), e += 1, () => {
      js(() => {
        e -= 1, e === 0 && (s?.(), s = void 0, Ps(r));
      });
    })));
  };
}
var Mx = Zr | ji | wo;
function Ix(t, e, r) {
  new bx(t, e, r);
}
class bx {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #u;
  /** @type {Effect} */
  #a;
  /** @type {Effect | null} */
  #o = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {DocumentFragment | null} */
  #l = null;
  /** @type {TemplateNode | null} */
  #c = null;
  #g = 0;
  #h = 0;
  #d = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #f = null;
  #_ = Sx(() => (this.#f = Qr(this.#g), () => {
    this.#f = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, r, s) {
    this.#t = e, this.#r = r, this.#u = s, this.parent = /** @type {Effect} */
    be.b, this.#e = !!this.#r.pending, this.#a = Nl(() => {
      be.b = this;
      {
        var u = this.#v();
        try {
          this.#o = dn(() => s(u));
        } catch (c) {
          this.error(c);
        }
        this.#h > 0 ? this.#m() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, Mx);
  }
  #E() {
    try {
      this.#o = dn(() => this.#u(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #x() {
    const e = this.#r.pending;
    e && (this.#i = dn(() => e(this.#t)), Un.enqueue(() => {
      var r = this.#v();
      this.#o = this.#p(() => (Un.ensure(), dn(() => this.#u(r)))), this.#h > 0 ? this.#m() : (Ri(
        /** @type {Effect} */
        this.#i,
        () => {
          this.#i = null;
        }
      ), this.#e = !1);
    }));
  }
  #v() {
    var e = this.#t;
    return this.#e && (this.#c = Ar(), this.#t.before(this.#c), e = this.#c), e;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#e || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #p(e) {
    var r = be, s = Ie, u = vt;
    $n(this.#a), Rt(this.#a), zi(this.#a.ctx);
    try {
      return e();
    } catch (c) {
      return qg(c), null;
    } finally {
      $n(r), Rt(s), zi(u);
    }
  }
  #m() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#o !== null && (this.#l = document.createDocumentFragment(), this.#l.append(
      /** @type {TemplateNode} */
      this.#c
    ), fd(this.#o, this.#l)), this.#i === null && (this.#i = dn(() => e(this.#t)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #y(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#y(e);
      return;
    }
    this.#h += e, this.#h === 0 && (this.#e = !1, this.#i && Ri(this.#i, () => {
      this.#i = null;
    }), this.#l && (this.#t.before(this.#l), this.#l = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    this.#y(e), this.#g += e, this.#f && Yi(this.#f, this.#g);
  }
  get_effect_pending() {
    return this.#_(), we(
      /** @type {Source<number>} */
      this.#f
    );
  }
  /** @param {unknown} error */
  error(e) {
    var r = this.#r.onerror;
    let s = this.#r.failed;
    if (this.#d || !r && !s)
      throw e;
    this.#o && (bt(this.#o), this.#o = null), this.#i && (bt(this.#i), this.#i = null), this.#s && (bt(this.#s), this.#s = null);
    var u = !1, c = !1;
    const f = () => {
      if (u) {
        vx();
        return;
      }
      u = !0, c && rx(), Un.ensure(), this.#g = 0, this.#s !== null && Ri(this.#s, () => {
        this.#s = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#p(() => (this.#d = !1, dn(() => this.#u(this.#t)))), this.#h > 0 ? this.#m() : this.#e = !1;
    };
    var h = Ie;
    try {
      Rt(null), c = !0, r?.(e, f), c = !1;
    } catch (p) {
      qi(p, this.#a && this.#a.parent);
    } finally {
      Rt(h);
    }
    s && js(() => {
      this.#s = this.#p(() => {
        Un.ensure(), this.#d = !0;
        try {
          return dn(() => {
            s(
              this.#t,
              () => e,
              () => f
            );
          });
        } catch (p) {
          return qi(
            p,
            /** @type {Effect} */
            this.#a.parent
          ), null;
        } finally {
          this.#d = !1;
        }
      });
    });
  }
}
function Lx(t, e, r, s) {
  const u = Tl;
  if (r.length === 0 && t.length === 0) {
    s(e.map(u));
    return;
  }
  var c = Ze, f = (
    /** @type {Effect} */
    be
  ), h = Tx();
  function p() {
    Promise.all(r.map((d) => /* @__PURE__ */ Ax(d))).then((d) => {
      h();
      try {
        s([...e.map(u), ...d]);
      } catch (v) {
        (f.f & Ir) === 0 && qi(v, f);
      }
      c?.deactivate(), Ka();
    }).catch((d) => {
      qi(d, f);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    h();
    try {
      return p();
    } finally {
      c?.deactivate(), Ka();
    }
  }) : p();
}
function Tx() {
  var t = be, e = Ie, r = vt, s = Ze;
  return function(c = !0) {
    $n(t), Rt(e), zi(r), c && s?.activate();
  };
}
function Ka() {
  $n(null), Rt(null), zi(null);
}
// @__NO_SIDE_EFFECTS__
function Tl(t) {
  var e = _t | Dt, r = Ie !== null && (Ie.f & _t) !== 0 ? (
    /** @type {Derived} */
    Ie
  ) : null;
  return be === null || r !== null && (r.f & nn) !== 0 ? e |= nn : be.f |= ji, {
    ctx: vt,
    deps: null,
    effects: null,
    equals: Cg,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      dt
    ),
    wv: 0,
    parent: r ?? be,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ax(t, e) {
  let r = (
    /** @type {Effect | null} */
    be
  );
  r === null && WE();
  var s = (
    /** @type {Boundary} */
    r.b
  ), u = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), c = Qr(
    /** @type {V} */
    dt
  ), f = !Ie, h = /* @__PURE__ */ new Map();
  return Yx(() => {
    var p = Ag();
    u = p.promise;
    try {
      Promise.resolve(t()).then(p.resolve, p.reject).then(() => {
        d === Ze && d.committed && d.deactivate(), Ka();
      });
    } catch (x) {
      p.reject(x), Ka();
    }
    var d = (
      /** @type {Batch} */
      Ze
    );
    if (f) {
      var v = !s.is_pending();
      s.update_pending_count(1), d.increment(v), h.get(d)?.reject(Ti), h.delete(d), h.set(d, p);
    }
    const _ = (x, M = void 0) => {
      if (d.activate(), M)
        M !== Ti && (c.f |= Vr, Yi(c, M));
      else {
        (c.f & Vr) !== 0 && (c.f ^= Vr), Yi(c, x);
        for (const [S, C] of h) {
          if (h.delete(S), S === d) break;
          C.reject(Ti);
        }
      }
      f && (s.update_pending_count(-1), d.decrement(v));
    };
    p.promise.then(_, (x) => _(null, x || "unknown"));
  }), Cl(() => {
    for (const p of h.values())
      p.reject(Ti);
  }), new Promise((p) => {
    function d(v) {
      function _() {
        v === u ? p(c) : d(u);
      }
      v.then(_, _);
    }
    d(u);
  });
}
// @__NO_SIDE_EFFECTS__
function wr(t) {
  const e = /* @__PURE__ */ Tl(t);
  return Zg(e), e;
}
// @__NO_SIDE_EFFECTS__
function Cx(t) {
  const e = /* @__PURE__ */ Tl(t);
  return e.equals = Pg, e;
}
function Jg(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      bt(
        /** @type {Effect} */
        e[r]
      );
  }
}
function Nx(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & _t) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Al(t) {
  var e, r = be;
  $n(Nx(t));
  try {
    t.f &= ~Za, Jg(t), e = td(t);
  } finally {
    $n(r);
  }
  return e;
}
function $g(t) {
  var e = Al(t);
  if (t.equals(e) || (t.v = e, t.wv = Qg()), !Qi)
    if (yn !== null)
      yn.set(t, t.v);
    else {
      var r = (Sr || (t.f & nn) !== 0) && t.deps !== null ? fr : mt;
      yt(t, r);
    }
}
let Ru = /* @__PURE__ */ new Set();
const br = /* @__PURE__ */ new Map();
let Vg = !1;
function Qr(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Cg,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function gn(t, e) {
  const r = Qr(t);
  return Zg(r), r;
}
// @__NO_SIDE_EFFECTS__
function Xg(t, e = !1, r = !0) {
  const s = Qr(t);
  return e || (s.equals = Pg), s;
}
function pt(t, e, r = !1) {
  Ie !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!_n || (Ie.f & xh) !== 0) && Fg() && (Ie.f & (_t | Wn | bl | xh)) !== 0 && !sr?.includes(t) && nx();
  let s = r ? xs(e) : e;
  return Yi(t, s);
}
function Yi(t, e) {
  if (!t.equals(e)) {
    var r = t.v;
    Qi ? br.set(t, e) : br.set(t, r), t.v = e;
    var s = Un.ensure();
    s.capture(t, r), (t.f & _t) !== 0 && ((t.f & Dt) !== 0 && Al(
      /** @type {Derived} */
      t
    ), yt(t, (t.f & nn) === 0 ? mt : fr)), t.wv = Qg(), Wg(t, Dt), be !== null && (be.f & mt) !== 0 && (be.f & (hr | ai)) === 0 && (Qt === null ? Rx([t]) : Qt.push(t)), !s.is_fork && Ru.size > 0 && !Vg && Px();
  }
  return e;
}
function Px() {
  Vg = !1;
  const t = Array.from(Ru);
  for (const e of t)
    (e.f & mt) !== 0 && yt(e, fr), Qs(e) && Ys(e);
  Ru.clear();
}
function Ps(t) {
  pt(t, t.v + 1);
}
function Wg(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var s = r.length, u = 0; u < s; u++) {
      var c = r[u], f = c.f, h = (f & Dt) === 0;
      h && yt(c, e), (f & _t) !== 0 ? (f & Za) === 0 && (c.f |= Za, Wg(
        /** @type {Derived} */
        c,
        fr
      )) : h && ((f & Wn) !== 0 && rr !== null && rr.add(
        /** @type {Effect} */
        c
      ), Kr(
        /** @type {Effect} */
        c
      ));
    }
}
let Mh = !1;
function Ox() {
  Mh || (Mh = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Ks(t) {
  var e = Ie, r = be;
  Rt(null), $n(null);
  try {
    return t();
  } finally {
    Rt(e), $n(r);
  }
}
function jg(t, e, r, s = r) {
  t.addEventListener(e, () => Ks(r));
  const u = t.__on_r;
  u ? t.__on_r = () => {
    u(), s(!0);
  } : t.__on_r = () => s(!0), Ox();
}
let Oi = !1;
function Ih(t) {
  Oi = t;
}
let Qi = !1;
function bh(t) {
  Qi = t;
}
let Ie = null, _n = !1;
function Rt(t) {
  Ie = t;
}
let be = null;
function $n(t) {
  be = t;
}
let sr = null;
function Zg(t) {
  Ie !== null && (sr === null ? sr = [t] : sr.push(t));
}
let Mt = null, Ut = 0, Qt = null;
function Rx(t) {
  Qt = t;
}
let Kg = 1, qs = 0, Xr = qs;
function Lh(t) {
  Xr = t;
}
let Sr = !1;
function Qg() {
  return ++Kg;
}
function Qs(t) {
  var e = t.f;
  if ((e & Dt) !== 0)
    return !0;
  if ((e & fr) !== 0) {
    var r = t.deps, s = (e & nn) !== 0;
    if (e & _t && (t.f &= ~Za), r !== null) {
      var u, c, f = (e & ja) !== 0, h = s && be !== null && !Sr, p = r.length;
      if ((f || h) && (be === null || (be.f & Ir) === 0)) {
        var d = (
          /** @type {Derived} */
          t
        ), v = d.parent;
        for (u = 0; u < p; u++)
          c = r[u], (f || !c?.reactions?.includes(d)) && (c.reactions ??= []).push(d);
        f && (d.f ^= ja), h && v !== null && (v.f & nn) === 0 && (d.f ^= nn);
      }
      for (u = 0; u < p; u++)
        if (c = r[u], Qs(
          /** @type {Derived} */
          c
        ) && $g(
          /** @type {Derived} */
          c
        ), c.wv > t.wv)
          return !0;
    }
    (!s || be !== null && !Sr) && yt(t, mt);
  }
  return !1;
}
function ed(t, e, r = !0) {
  var s = t.reactions;
  if (s !== null && !sr?.includes(t))
    for (var u = 0; u < s.length; u++) {
      var c = s[u];
      (c.f & _t) !== 0 ? ed(
        /** @type {Derived} */
        c,
        e,
        !1
      ) : e === c && (r ? yt(c, Dt) : (c.f & mt) !== 0 && yt(c, fr), Kr(
        /** @type {Effect} */
        c
      ));
    }
}
function td(t) {
  var e = Mt, r = Ut, s = Qt, u = Ie, c = Sr, f = sr, h = vt, p = _n, d = Xr, v = t.f;
  Mt = /** @type {null | Value[]} */
  null, Ut = 0, Qt = null, Sr = (v & nn) !== 0 && (_n || !Oi || Ie === null), Ie = (v & (hr | ai)) === 0 ? t : null, sr = null, zi(t.ctx), _n = !1, Xr = ++qs, t.ac !== null && (Ks(() => {
    t.ac.abort(Ti);
  }), t.ac = null);
  try {
    t.f |= Pu;
    var _ = (
      /** @type {Function} */
      t.fn
    ), x = _(), M = t.deps;
    if (Mt !== null) {
      var S;
      if (Qa(t, Ut), M !== null && Ut > 0)
        for (M.length = Ut + Mt.length, S = 0; S < Mt.length; S++)
          M[Ut + S] = Mt[S];
      else
        t.deps = M = Mt;
      if (!Sr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (v & _t) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (S = Ut; S < M.length; S++)
          (M[S].reactions ??= []).push(t);
    } else M !== null && Ut < M.length && (Qa(t, Ut), M.length = Ut);
    if (Fg() && Qt !== null && !_n && M !== null && (t.f & (_t | fr | Dt)) === 0)
      for (S = 0; S < /** @type {Source[]} */
      Qt.length; S++)
        ed(
          Qt[S],
          /** @type {Effect} */
          t
        );
    return u !== null && u !== t && (qs++, Qt !== null && (s === null ? s = Qt : s.push(.../** @type {Source[]} */
    Qt))), (t.f & Vr) !== 0 && (t.f ^= Vr), x;
  } catch (C) {
    return qg(C);
  } finally {
    t.f ^= Pu, Mt = e, Ut = r, Qt = s, Ie = u, Sr = c, sr = f, zi(h), _n = p, Xr = d;
  }
}
function Dx(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var s = UE.call(r, t);
    if (s !== -1) {
      var u = r.length - 1;
      u === 0 ? r = e.reactions = null : (r[s] = r[u], r.pop());
    }
  }
  r === null && (e.f & _t) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Mt === null || !Mt.includes(e)) && (yt(e, fr), (e.f & (nn | ja)) === 0 && (e.f ^= ja), Jg(
    /** @type {Derived} **/
    e
  ), Qa(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Qa(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var s = e; s < r.length; s++)
      Dx(t, r[s]);
}
function Ys(t) {
  var e = t.f;
  if ((e & Ir) === 0) {
    yt(t, mt);
    var r = be, s = Oi;
    be = t, Oi = !0;
    try {
      (e & Wn) !== 0 ? Hx(t) : od(t), ad(t);
      var u = td(t);
      t.teardown = typeof u == "function" ? u : null, t.wv = Kg;
      var c;
      bg && ix && (t.f & Dt) !== 0 && t.deps;
    } finally {
      Oi = s, be = r;
    }
  }
}
function we(t) {
  var e = t.f, r = (e & _t) !== 0;
  if (Ie !== null && !_n) {
    var s = be !== null && (be.f & Ir) !== 0;
    if (!s && !sr?.includes(t)) {
      var u = Ie.deps;
      if ((Ie.f & Pu) !== 0)
        t.rv < qs && (t.rv = qs, Mt === null && u !== null && u[Ut] === t ? Ut++ : Mt === null ? Mt = [t] : (!Sr || !Mt.includes(t)) && Mt.push(t));
      else {
        (Ie.deps ??= []).push(t);
        var c = t.reactions;
        c === null ? t.reactions = [Ie] : c.includes(Ie) || c.push(Ie);
      }
    }
  } else if (r && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var f = (
      /** @type {Derived} */
      t
    ), h = f.parent;
    h !== null && (h.f & nn) === 0 && (f.f ^= nn);
  }
  if (Qi) {
    if (br.has(t))
      return br.get(t);
    if (r) {
      f = /** @type {Derived} */
      t;
      var p = f.v;
      return ((f.f & mt) === 0 && f.reactions !== null || nd(f)) && (p = Al(f)), br.set(f, p), p;
    }
  } else if (r) {
    if (f = /** @type {Derived} */
    t, yn?.has(f))
      return yn.get(f);
    Qs(f) && $g(f);
  }
  if (yn?.has(t))
    return yn.get(t);
  if ((t.f & Vr) !== 0)
    throw t.v;
  return t.v;
}
function nd(t) {
  if (t.v === dt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (br.has(e) || (e.f & _t) !== 0 && nd(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function ea(t) {
  var e = _n;
  try {
    return _n = !0, t();
  } finally {
    _n = e;
  }
}
const Fx = -7169;
function yt(t, e) {
  t.f = t.f & Fx | e;
}
function Gx(t) {
  be === null && Ie === null && KE(), Ie !== null && (Ie.f & nn) !== 0 && be === null && ZE(), Qi && jE();
}
function Bx(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function gr(t, e, r, s = !0) {
  var u = be;
  u !== null && (u.f & Yt) !== 0 && (t |= Yt);
  var c = {
    ctx: vt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Dt,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: u,
    b: u && u.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      Ys(c), c.f |= ko;
    } catch (p) {
      throw bt(c), p;
    }
  else e !== null && Kr(c);
  if (s) {
    var f = c;
    if (r && f.deps === null && f.teardown === null && f.nodes_start === null && f.first === f.last && // either `null`, or a singular child
    (f.f & ji) === 0 && (f = f.first, (t & Wn) !== 0 && (t & Zr) !== 0 && f !== null && (f.f |= Zr)), f !== null && (f.parent = u, u !== null && Bx(f, u), Ie !== null && (Ie.f & _t) !== 0 && (t & ai) === 0)) {
      var h = (
        /** @type {Derived} */
        Ie
      );
      (h.effects ??= []).push(f);
    }
  }
  return c;
}
function Ux() {
  return Ie !== null && !_n;
}
function Cl(t) {
  const e = gr(Il, null, !1);
  return yt(e, mt), e.teardown = t, e;
}
function zx(t) {
  Gx();
  var e = (
    /** @type {Effect} */
    be.f
  ), r = !Ie && (e & hr) !== 0 && (e & ko) === 0;
  if (r) {
    var s = (
      /** @type {ComponentContext} */
      vt
    );
    (s.e ??= []).push(t);
  } else
    return rd(t);
}
function rd(t) {
  return gr(Ml | VE, t, !1);
}
function qx(t) {
  Un.ensure();
  const e = gr(ai | ji, t, !0);
  return (r = {}) => new Promise((s) => {
    r.outro ? Ri(e, () => {
      bt(e), s(void 0);
    }) : (bt(e), s(void 0));
  });
}
function id(t) {
  return gr(Ml, t, !1);
}
function Yx(t) {
  return gr(bl | ji, t, !0);
}
function sd(t, e = 0) {
  return gr(Il | e, t, !0);
}
function xn(t, e = [], r = [], s = []) {
  Lx(s, e, r, (u) => {
    gr(Il, () => t(...u.map(we)), !0);
  });
}
function Nl(t, e = 0) {
  var r = gr(Wn | e, t, !0);
  return r;
}
function dn(t, e = !0) {
  return gr(hr | ji, t, !0, e);
}
function ad(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = Qi, s = Ie;
    bh(!0), Rt(null);
    try {
      e.call(null);
    } finally {
      bh(r), Rt(s);
    }
  }
}
function od(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    const u = r.ac;
    u !== null && Ks(() => {
      u.abort(Ti);
    });
    var s = r.next;
    (r.f & ai) !== 0 ? r.parent = null : bt(r, e), r = s;
  }
}
function Hx(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & hr) === 0 && bt(e), e = r;
  }
}
function bt(t, e = !0) {
  var r = !1;
  (e || (t.f & $E) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (ud(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), r = !0), od(t, e && !r), Qa(t, 0), yt(t, Ir);
  var s = t.transitions;
  if (s !== null)
    for (const c of s)
      c.stop();
  ad(t);
  var u = t.parent;
  u !== null && u.first !== null && ld(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function ud(t, e) {
  for (; t !== null; ) {
    var r = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Zs(t)
    );
    t.remove(), t = r;
  }
}
function ld(t) {
  var e = t.parent, r = t.prev, s = t.next;
  r !== null && (r.next = s), s !== null && (s.prev = r), e !== null && (e.first === t && (e.first = s), e.last === t && (e.last = r));
}
function Ri(t, e, r = !0) {
  var s = [];
  Pl(t, s, !0), cd(s, () => {
    r && bt(t), e && e();
  });
}
function cd(t, e) {
  var r = t.length;
  if (r > 0) {
    var s = () => --r || e();
    for (var u of t)
      u.out(s);
  } else
    e();
}
function Pl(t, e, r) {
  if ((t.f & Yt) === 0) {
    if (t.f ^= Yt, t.transitions !== null)
      for (const f of t.transitions)
        (f.is_global || r) && e.push(f);
    for (var s = t.first; s !== null; ) {
      var u = s.next, c = (s.f & Zr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & hr) !== 0 && (t.f & Wn) !== 0;
      Pl(s, e, c ? r : !1), s = u;
    }
  }
}
function Ol(t) {
  hd(t, !0);
}
function hd(t, e) {
  if ((t.f & Yt) !== 0) {
    t.f ^= Yt, (t.f & mt) === 0 && (yt(t, Dt), Kr(t));
    for (var r = t.first; r !== null; ) {
      var s = r.next, u = (r.f & Zr) !== 0 || (r.f & hr) !== 0;
      hd(r, u ? e : !1), r = s;
    }
    if (t.transitions !== null)
      for (const c of t.transitions)
        (c.is_global || e) && c.in();
  }
}
function fd(t, e) {
  for (var r = t.nodes_start, s = t.nodes_end; r !== null; ) {
    var u = r === s ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Zs(r)
    );
    e.append(r), r = u;
  }
}
const Jx = ["touchstart", "touchmove"];
function $x(t) {
  return Jx.includes(t);
}
const gd = /* @__PURE__ */ new Set(), Du = /* @__PURE__ */ new Set();
function Io(t) {
  for (var e = 0; e < t.length; e++)
    gd.add(t[e]);
  for (var r of Du)
    r(t);
}
let Th = null;
function va(t) {
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), s = t.type, u = t.composedPath?.() || [], c = (
    /** @type {null | Element} */
    u[0] || t.target
  );
  Th = t;
  var f = 0, h = Th === t && t.__root;
  if (h) {
    var p = u.indexOf(h);
    if (p !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var d = u.indexOf(e);
    if (d === -1)
      return;
    p <= d && (f = p);
  }
  if (c = /** @type {Element} */
  u[f] || t.target, c !== e) {
    Lg(t, "currentTarget", {
      configurable: !0,
      get() {
        return c || r;
      }
    });
    var v = Ie, _ = be;
    Rt(null), $n(null);
    try {
      for (var x, M = []; c !== null; ) {
        var S = c.assignedSlot || c.parentNode || /** @type {any} */
        c.host || null;
        try {
          var C = c["__" + s];
          C != null && (!/** @type {any} */
          c.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === c) && C.call(c, t);
        } catch (F) {
          x ? M.push(F) : x = F;
        }
        if (t.cancelBubble || S === e || S === null)
          break;
        c = S;
      }
      if (x) {
        for (let F of M)
          queueMicrotask(() => {
            throw F;
          });
        throw x;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Rt(v), $n(_);
    }
  }
}
function dd(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Hs(t, e) {
  var r = (
    /** @type {Effect} */
    be
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function on(t, e) {
  var r = (e & cx) !== 0, s = (e & hx) !== 0, u, c = !t.startsWith("<!>");
  return () => {
    u === void 0 && (u = dd(c ? t : "<!>" + t), r || (u = /** @type {Node} */
    /* @__PURE__ */ kr(u)));
    var f = (
      /** @type {TemplateNode} */
      s || Gg ? document.importNode(u, !0) : u.cloneNode(!0)
    );
    if (r) {
      var h = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kr(f)
      ), p = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Hs(h, p);
    } else
      Hs(f, f);
    return f;
  };
}
function Ah(t = "") {
  {
    var e = Ar(t + "");
    return Hs(e, e), e;
  }
}
function Lr() {
  var t = document.createDocumentFragment(), e = document.createComment(""), r = Ar();
  return t.append(e, r), Hs(e, r), t;
}
function Ke(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let Fu = !0;
function Di(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ??= t.nodeValue) && (t.__t = r, t.nodeValue = r + "");
}
function Vx(t, e) {
  return Xx(t, e);
}
const ki = /* @__PURE__ */ new Map();
function Xx(t, { target: e, anchor: r, props: s = {}, events: u, context: c, intro: f = !0 }) {
  Ex();
  var h = /* @__PURE__ */ new Set(), p = (_) => {
    for (var x = 0; x < _.length; x++) {
      var M = _[x];
      if (!h.has(M)) {
        h.add(M);
        var S = $x(M);
        e.addEventListener(M, va, { passive: S });
        var C = ki.get(M);
        C === void 0 ? (document.addEventListener(M, va, { passive: S }), ki.set(M, 1)) : ki.set(M, C + 1);
      }
    }
  };
  p(Sl(gd)), Du.add(p);
  var d = void 0, v = qx(() => {
    var _ = r ?? e.appendChild(Ar());
    return Ix(
      /** @type {TemplateNode} */
      _,
      {
        pending: () => {
        }
      },
      (x) => {
        if (c) {
          Zi({});
          var M = (
            /** @type {ComponentContext} */
            vt
          );
          M.c = c;
        }
        u && (s.$$events = u), Fu = f, d = t(x, s) || {}, Fu = !0, c && Ki();
      }
    ), () => {
      for (var x of h) {
        e.removeEventListener(x, va);
        var M = (
          /** @type {number} */
          ki.get(x)
        );
        --M === 0 ? (document.removeEventListener(x, va), ki.delete(x)) : ki.set(x, M);
      }
      Du.delete(p), _ !== r && _.parentNode?.removeChild(_);
    };
  });
  return Gu.set(d, v), d;
}
let Gu = /* @__PURE__ */ new WeakMap();
function Wx(t, e) {
  const r = Gu.get(t);
  return r ? (Gu.delete(t), r(e)) : Promise.resolve();
}
class jx {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #e = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Effect>} */
  #t = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Branch>} */
  #n = /* @__PURE__ */ new Map();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #r = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, r = !0) {
    this.anchor = e, this.#r = r;
  }
  #u = () => {
    var e = (
      /** @type {Batch} */
      Ze
    );
    if (this.#e.has(e)) {
      var r = (
        /** @type {Key} */
        this.#e.get(e)
      ), s = this.#t.get(r);
      if (s)
        Ol(s);
      else {
        var u = this.#n.get(r);
        u && (this.#t.set(r, u.effect), this.#n.delete(r), u.fragment.lastChild.remove(), this.anchor.before(u.fragment), s = u.effect);
      }
      for (const [c, f] of this.#e) {
        if (this.#e.delete(c), c === e)
          break;
        const h = this.#n.get(f);
        h && (bt(h.effect), this.#n.delete(f));
      }
      for (const [c, f] of this.#t) {
        if (c === r) continue;
        const h = () => {
          if (Array.from(this.#e.values()).includes(c)) {
            var d = document.createDocumentFragment();
            fd(f, d), d.append(Ar()), this.#n.set(c, { effect: f, fragment: d });
          } else
            bt(f);
          this.#t.delete(c);
        };
        this.#r || !s ? Ri(f, h, !1) : h();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #a = (e) => {
    this.#e.delete(e);
    const r = Array.from(this.#e.values());
    for (const [s, u] of this.#n)
      r.includes(s) || (bt(u.effect), this.#n.delete(s));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, r) {
    var s = (
      /** @type {Batch} */
      Ze
    ), u = zg();
    if (r && !this.#t.has(e) && !this.#n.has(e))
      if (u) {
        var c = document.createDocumentFragment(), f = Ar();
        c.append(f), this.#n.set(e, {
          effect: dn(() => r(f)),
          fragment: c
        });
      } else
        this.#t.set(
          e,
          dn(() => r(this.anchor))
        );
    if (this.#e.set(s, e), u) {
      for (const [h, p] of this.#t)
        h === e ? s.skipped_effects.delete(p) : s.skipped_effects.add(p);
      for (const [h, p] of this.#n)
        h === e ? s.skipped_effects.delete(p.effect) : s.skipped_effects.add(p.effect);
      s.oncommit(this.#u), s.ondiscard(this.#a);
    } else
      this.#u();
  }
}
function tn(t, e, r = !1) {
  var s = new jx(t), u = r ? Zr : 0;
  function c(f, h) {
    s.ensure(f, h);
  }
  Nl(() => {
    var f = !1;
    e((h, p = !0) => {
      f = !0, c(p, h);
    }), f || c(!1, null);
  }, u);
}
function Zx(t, e) {
  return e;
}
function Kx(t, e, r) {
  for (var s = t.items, u = [], c = e.length, f = 0; f < c; f++)
    Pl(e[f].e, u, !0);
  var h = c > 0 && u.length === 0 && r !== null;
  if (h) {
    var p = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    xx(p), p.append(
      /** @type {Element} */
      r
    ), s.clear(), Fn(t, e[0].prev, e[c - 1].next);
  }
  cd(u, () => {
    for (var d = 0; d < c; d++) {
      var v = e[d];
      h || (s.delete(v.k), Fn(t, v.prev, v.next)), bt(v.e, !h);
    }
  });
}
function Js(t, e, r, s, u, c = null) {
  var f = t, h = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, p = (e & Rg) !== 0;
  if (p) {
    var d = (
      /** @type {Element} */
      t
    );
    f = d.appendChild(Ar());
  }
  var v = null, _ = !1, x = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ Cx(() => {
    var O = r();
    return kl(O) ? O : O == null ? [] : Sl(O);
  }), S, C;
  function F() {
    Qx(
      C,
      S,
      h,
      x,
      f,
      u,
      e,
      s,
      r
    ), c !== null && (S.length === 0 ? v ? Ol(v) : v = dn(() => c(f)) : v !== null && Ri(v, () => {
      v = null;
    }));
  }
  Nl(() => {
    C ??= /** @type {Effect} */
    be, S = /** @type {V[]} */
    we(M);
    var O = S.length;
    if (!(_ && O === 0)) {
      _ = O === 0;
      var I, H, X, J;
      if (zg()) {
        var U = /* @__PURE__ */ new Set(), W = (
          /** @type {Batch} */
          Ze
        );
        for (H = 0; H < O; H += 1) {
          X = S[H], J = s(X, H);
          var E = h.items.get(J) ?? x.get(J);
          E ? (e & (So | Mo)) !== 0 && pd(E, X, H, e) : (I = md(
            null,
            h,
            null,
            null,
            X,
            J,
            H,
            u,
            e,
            r,
            !0
          ), x.set(J, I)), U.add(J);
        }
        for (const [w, b] of h.items)
          U.has(w) || W.skipped_effects.add(b.e);
        W.oncommit(F);
      } else
        F();
      we(M);
    }
  });
}
function Qx(t, e, r, s, u, c, f, h, p) {
  var d = (f & sx) !== 0, v = (f & (So | Mo)) !== 0, _ = e.length, x = r.items, M = r.first, S = M, C, F = null, O, I = [], H = [], X, J, U, W;
  if (d)
    for (W = 0; W < _; W += 1)
      X = e[W], J = h(X, W), U = x.get(J), U !== void 0 && (U.a?.measure(), (O ??= /* @__PURE__ */ new Set()).add(U));
  for (W = 0; W < _; W += 1) {
    if (X = e[W], J = h(X, W), U = x.get(J), U === void 0) {
      var E = s.get(J);
      if (E !== void 0) {
        s.delete(J), x.set(J, E);
        var w = F ? F.next : S;
        Fn(r, F, E), Fn(r, E, w), tu(E, w, u), F = E;
      } else {
        var b = S ? (
          /** @type {TemplateNode} */
          S.e.nodes_start
        ) : u;
        F = md(
          b,
          r,
          F,
          F === null ? r.first : F.next,
          X,
          J,
          W,
          c,
          f,
          p
        );
      }
      x.set(J, F), I = [], H = [], S = F.next;
      continue;
    }
    if (v && pd(U, X, W, f), (U.e.f & Yt) !== 0 && (Ol(U.e), d && (U.a?.unfix(), (O ??= /* @__PURE__ */ new Set()).delete(U))), U !== S) {
      if (C !== void 0 && C.has(U)) {
        if (I.length < H.length) {
          var T = H[0], A;
          F = T.prev;
          var G = I[0], R = I[I.length - 1];
          for (A = 0; A < I.length; A += 1)
            tu(I[A], T, u);
          for (A = 0; A < H.length; A += 1)
            C.delete(H[A]);
          Fn(r, G.prev, R.next), Fn(r, F, G), Fn(r, R, T), S = T, F = R, W -= 1, I = [], H = [];
        } else
          C.delete(U), tu(U, S, u), Fn(r, U.prev, U.next), Fn(r, U, F === null ? r.first : F.next), Fn(r, F, U), F = U;
        continue;
      }
      for (I = [], H = []; S !== null && S.k !== J; )
        (S.e.f & Yt) === 0 && (C ??= /* @__PURE__ */ new Set()).add(S), H.push(S), S = S.next;
      if (S === null)
        continue;
      U = S;
    }
    I.push(U), F = U, S = U.next;
  }
  if (S !== null || C !== void 0) {
    for (var P = C === void 0 ? [] : Sl(C); S !== null; )
      (S.e.f & Yt) === 0 && P.push(S), S = S.next;
    var D = P.length;
    if (D > 0) {
      var Y = (f & Rg) !== 0 && _ === 0 ? u : null;
      if (d) {
        for (W = 0; W < D; W += 1)
          P[W].a?.measure();
        for (W = 0; W < D; W += 1)
          P[W].a?.fix();
      }
      Kx(r, P, Y);
    }
  }
  d && js(() => {
    if (O !== void 0)
      for (U of O)
        U.a?.apply();
  }), t.first = r.first && r.first.e, t.last = F && F.e;
  for (var z of s.values())
    bt(z.e);
  s.clear();
}
function pd(t, e, r, s) {
  (s & So) !== 0 && Yi(t.v, e), (s & Mo) !== 0 ? Yi(
    /** @type {Value<number>} */
    t.i,
    r
  ) : t.i = r;
}
function md(t, e, r, s, u, c, f, h, p, d, v) {
  var _ = (p & So) !== 0, x = (p & ax) === 0, M = _ ? x ? /* @__PURE__ */ Xg(u, !1, !1) : Qr(u) : u, S = (p & Mo) === 0 ? f : Qr(f), C = {
    i: S,
    v: M,
    k: c,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: s
  };
  try {
    if (t === null) {
      var F = document.createDocumentFragment();
      F.append(t = Ar());
    }
    return C.e = dn(() => h(
      /** @type {Node} */
      t,
      M,
      S,
      d
    ), yx), C.e.prev = r && r.e, C.e.next = s && s.e, r === null ? v || (e.first = C) : (r.next = C, r.e.next = C.e), s !== null && (s.prev = C, s.e.prev = C.e), C;
  } finally {
  }
}
function tu(t, e, r) {
  for (var s = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : r, u = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : r, c = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); c !== null && c !== s; ) {
    var f = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Zs(c)
    );
    u.before(c), c = f;
  }
}
function Fn(t, e, r) {
  e === null ? t.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e);
}
function vd(t, e, r = !1, s = !1, u = !1) {
  var c = t, f = "";
  xn(() => {
    var h = (
      /** @type {Effect} */
      be
    );
    if (f !== (f = e() ?? "") && (h.nodes_start !== null && (ud(
      h.nodes_start,
      /** @type {TemplateNode} */
      h.nodes_end
    ), h.nodes_start = h.nodes_end = null), f !== "")) {
      var p = f + "";
      r ? p = `<svg>${p}</svg>` : s && (p = `<math>${p}</math>`);
      var d = dd(p);
      if ((r || s) && (d = /** @type {Element} */
      /* @__PURE__ */ kr(d)), Hs(
        /** @type {TemplateNode} */
        /* @__PURE__ */ kr(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), r || s)
        for (; /* @__PURE__ */ kr(d); )
          c.before(
            /** @type {Node} */
            /* @__PURE__ */ kr(d)
          );
      else
        c.before(d);
    }
  });
}
function yd(t) {
  var e, r, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var u = t.length;
    for (e = 0; e < u; e++) t[e] && (r = yd(t[e])) && (s && (s += " "), s += r);
  } else for (r in t) t[r] && (s && (s += " "), s += r);
  return s;
}
function ew() {
  for (var t, e, r = 0, s = "", u = arguments.length; r < u; r++) (t = arguments[r]) && (e = yd(t)) && (s && (s += " "), s += e);
  return s;
}
function tw(t) {
  return typeof t == "object" ? ew(t) : t ?? "";
}
const Ch = [...` 	
\r\f \v\uFEFF`];
function nw(t, e, r) {
  var s = t == null ? "" : "" + t;
  if (e && (s = s ? s + " " + e : e), r) {
    for (var u in r)
      if (r[u])
        s = s ? s + " " + u : u;
      else if (s.length)
        for (var c = u.length, f = 0; (f = s.indexOf(u, f)) >= 0; ) {
          var h = f + c;
          (f === 0 || Ch.includes(s[f - 1])) && (h === s.length || Ch.includes(s[h])) ? s = (f === 0 ? "" : s.substring(0, f)) + s.substring(h + 1) : f = h;
        }
  }
  return s === "" ? null : s;
}
function Os(t, e, r, s, u, c) {
  var f = t.__className;
  if (f !== r || f === void 0) {
    var h = nw(r, s, c);
    h == null ? t.removeAttribute("class") : t.className = h, t.__className = r;
  } else if (c && u !== c)
    for (var p in c) {
      var d = !!c[p];
      (u == null || d !== !!u[p]) && t.classList.toggle(p, d);
    }
  return c;
}
function _d(t, e, r = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!kl(e))
      return mx();
    for (var s of t.options)
      s.selected = e.includes(Rs(s));
    return;
  }
  for (s of t.options) {
    var u = Rs(s);
    if (_x(u, e)) {
      s.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function rw(t) {
  var e = new MutationObserver(() => {
    _d(t, t.__value);
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Cl(() => {
    e.disconnect();
  });
}
function iw(t, e, r = e) {
  var s = /* @__PURE__ */ new WeakSet(), u = !0;
  jg(t, "change", (c) => {
    var f = c ? "[selected]" : ":checked", h;
    if (t.multiple)
      h = [].map.call(t.querySelectorAll(f), Rs);
    else {
      var p = t.querySelector(f) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      h = p && Rs(p);
    }
    r(h), Ze !== null && s.add(Ze);
  }), id(() => {
    var c = e();
    if (t === document.activeElement) {
      var f = (
        /** @type {Batch} */
        Da ?? Ze
      );
      if (s.has(f))
        return;
    }
    if (_d(t, c, u), u && c === void 0) {
      var h = t.querySelector(":checked");
      h !== null && (c = Rs(h), r(c));
    }
    t.__value = c, u = !1;
  }), rw(t);
}
function Rs(t) {
  return "__value" in t ? t.__value : t.value;
}
const sw = Symbol("is custom element"), aw = Symbol("is html");
function Mr(t, e, r, s) {
  var u = ow(t);
  u[e] !== (u[e] = r) && (e === "loading" && (t[XE] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && uw(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function ow(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [sw]: t.nodeName.includes("-"),
      [aw]: t.namespaceURI === fx
    }
  );
}
var Nh = /* @__PURE__ */ new Map();
function uw(t) {
  var e = t.getAttribute("is") || t.nodeName, r = Nh.get(e);
  if (r) return r;
  Nh.set(e, r = []);
  for (var s, u = t, c = Element.prototype; c !== u; ) {
    s = zE(u);
    for (var f in s)
      s[f].set && r.push(f);
    u = Tg(u);
  }
  return r;
}
const lw = () => performance.now(), ir = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => lw(),
  tasks: /* @__PURE__ */ new Set()
};
function Ed() {
  const t = ir.now();
  ir.tasks.forEach((e) => {
    e.c(t) || (ir.tasks.delete(e), e.f());
  }), ir.tasks.size !== 0 && ir.tick(Ed);
}
function cw(t) {
  let e;
  return ir.tasks.size === 0 && ir.tick(Ed), {
    promise: new Promise((r) => {
      ir.tasks.add(e = { c: t, f: r });
    }),
    abort() {
      ir.tasks.delete(e);
    }
  };
}
function ya(t, e) {
  Ks(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function hw(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function Ph(t) {
  const e = {}, r = t.split(";");
  for (const s of r) {
    const [u, c] = s.split(":");
    if (!u || c === void 0) break;
    const f = hw(u.trim());
    e[f] = c.trim();
  }
  return e;
}
const fw = (t) => t;
function Oh(t, e, r, s) {
  var u = (t & ox) !== 0, c = (t & ux) !== 0, f = u && c, h = (t & lx) !== 0, p = f ? "both" : u ? "in" : "out", d, v = e.inert, _ = e.style.overflow, x, M;
  function S() {
    return Ks(() => d ??= r()(e, s?.() ?? /** @type {P} */
    {}, {
      direction: p
    }));
  }
  var C = {
    is_global: h,
    in() {
      if (e.inert = v, !u) {
        M?.abort(), M?.reset?.();
        return;
      }
      c || x?.abort(), ya(e, "introstart"), x = Bu(e, S(), M, 1, () => {
        ya(e, "introend"), x?.abort(), x = d = void 0, e.style.overflow = _;
      });
    },
    out(H) {
      if (!c) {
        H?.(), d = void 0;
        return;
      }
      e.inert = !0, ya(e, "outrostart"), M = Bu(e, S(), x, 0, () => {
        ya(e, "outroend"), H?.();
      });
    },
    stop: () => {
      x?.abort(), M?.abort();
    }
  }, F = (
    /** @type {Effect} */
    be
  );
  if ((F.transitions ??= []).push(C), u && Fu) {
    var O = h;
    if (!O) {
      for (var I = (
        /** @type {Effect | null} */
        F.parent
      ); I && (I.f & Zr) !== 0; )
        for (; (I = I.parent) && (I.f & Wn) === 0; )
          ;
      O = !I || (I.f & ko) !== 0;
    }
    O && id(() => {
      ea(() => C.in());
    });
  }
}
function Bu(t, e, r, s, u) {
  var c = s === 1;
  if (HE(e)) {
    var f, h = !1;
    return js(() => {
      if (!h) {
        var F = e({ direction: c ? "in" : "out" });
        f = Bu(t, F, r, s, u);
      }
    }), {
      abort: () => {
        h = !0, f?.abort();
      },
      deactivate: () => f.deactivate(),
      reset: () => f.reset(),
      t: () => f.t()
    };
  }
  if (r?.deactivate(), !e?.duration)
    return u(), {
      abort: vn,
      deactivate: vn,
      reset: vn,
      t: () => s
    };
  const { delay: p = 0, css: d, tick: v, easing: _ = fw } = e;
  var x = [];
  if (c && r === void 0 && (v && v(0, 1), d)) {
    var M = Ph(d(0, 1));
    x.push(M, M);
  }
  var S = () => 1 - s, C = t.animate(x, { duration: p, fill: "forwards" });
  return C.onfinish = () => {
    C.cancel();
    var F = r?.t() ?? 1 - s;
    r?.abort();
    var O = s - F, I = (
      /** @type {number} */
      e.duration * Math.abs(O)
    ), H = [];
    if (I > 0) {
      var X = !1;
      if (d)
        for (var J = Math.ceil(I / 16.666666666666668), U = 0; U <= J; U += 1) {
          var W = F + O * _(U / J), E = Ph(d(W, 1 - W));
          H.push(E), X ||= E.overflow === "hidden";
        }
      X && (t.style.overflow = "hidden"), S = () => {
        var w = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          C.currentTime
        );
        return F + O * _(w / I);
      }, v && cw(() => {
        if (C.playState !== "running") return !1;
        var w = S();
        return v(w, 1 - w), !0;
      });
    }
    C = t.animate(H, { duration: I, fill: "forwards" }), C.onfinish = () => {
      S = () => s, v?.(s, 1 - s), u();
    };
  }, {
    abort: () => {
      C && (C.cancel(), C.effect = null, C.onfinish = vn);
    },
    deactivate: () => {
      u = vn;
    },
    reset: () => {
      s === 0 && v?.(1, 0);
    },
    t: () => S()
  };
}
function gw(t, e, r = e) {
  jg(t, "change", (s) => {
    var u = s ? t.defaultChecked : t.checked;
    r(u);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  ea(e) == null && r(t.checked), sd(() => {
    var s = e();
    t.checked = !!s;
  });
}
let Uu = Symbol();
function xd(t, e, r) {
  const s = r[e] ??= {
    store: null,
    source: /* @__PURE__ */ Xg(void 0),
    unsubscribe: vn
  };
  if (s.store !== t && !(Uu in r))
    if (s.unsubscribe(), s.store = t ?? null, t == null)
      s.source.v = void 0, s.unsubscribe = vn;
    else {
      var u = !0;
      s.unsubscribe = kd(t, (c) => {
        u ? s.source.v = c : pt(s.source, c);
      }), u = !1;
    }
  return t && Uu in r ? mw(t) : we(s.source);
}
function wd() {
  const t = {};
  function e() {
    Cl(() => {
      for (var r in t)
        t[r].unsubscribe();
      Lg(t, Uu, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function dw(t) {
  vt === null && Og(), zx(() => {
    const e = ea(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function kd(t, e, r) {
  if (t == null)
    return e(void 0), vn;
  const s = ea(
    () => t.subscribe(
      e,
      // @ts-expect-error
      r
    )
  );
  return s.unsubscribe ? () => s.unsubscribe() : s;
}
const Si = [];
function pw(t, e = vn) {
  let r = null;
  const s = /* @__PURE__ */ new Set();
  function u(h) {
    if (Ng(t, h) && (t = h, r)) {
      const p = !Si.length;
      for (const d of s)
        d[1](), Si.push(d, t);
      if (p) {
        for (let d = 0; d < Si.length; d += 2)
          Si[d][0](Si[d + 1]);
        Si.length = 0;
      }
    }
  }
  function c(h) {
    u(h(
      /** @type {T} */
      t
    ));
  }
  function f(h, p = vn) {
    const d = [h, p];
    return s.add(d), s.size === 1 && (r = e(u, c) || vn), h(
      /** @type {T} */
      t
    ), () => {
      s.delete(d), s.size === 0 && r && (r(), r = null);
    };
  }
  return { set: u, update: c, subscribe: f };
}
function mw(t) {
  let e;
  return kd(t, (r) => e = r)(), e;
}
const vw = {
  controls: sn($f),
  options: Nu().controls,
  settings: Nu().settings
}, Rl = pw(vw), yw = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(yw);
const _w = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M7.474 17.988h49.045L31.996 46.012zm-3.85 3.37 24.522 28.019a5.113 5.113 0 0 0 7.7 0l24.523-28.02c2.894-3.308.542-8.482-3.85-8.482H7.474a5.113 5.113 0 0 0-3.85 8.482"/>
</svg>
`, Ew = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M7.474 46.012h49.045L31.996 17.988Zm-3.85-3.37 24.522-28.019a5.113 5.113 0 0 1 7.7 0l24.523 28.02c2.894 3.308.542 8.482-3.85 8.482H7.474a5.113 5.113 0 0 1-3.85-8.482"/>
</svg>
`;
var xw = /* @__PURE__ */ on("<option> </option>"), ww = /* @__PURE__ */ on('<label class="svelte-18zciyf"> </label> <select class="svelte-18zciyf"></select>', 1), kw = /* @__PURE__ */ on('<label class="svelte-18zciyf"><input type="checkbox" class="svelte-18zciyf"/> </label>'), Sw = /* @__PURE__ */ on('<div class="action-option svelte-18zciyf"><!></div>');
function Mw(t, e) {
  Zi(e, !0);
  let r = /* @__PURE__ */ gn("");
  dw(() => {
    e.actionOption && (e.actionOption.type === "select" ? pt(r, e.actionOption.value.value, !0) : e.actionOption.type === "toggle" && pt(r, e.actionOption.value, !0));
  });
  const s = (h) => {
    if (!e.actionInstance || !e.actionOption) {
      te.error("Can't apply option value", e.actionInstance, e.actionOption);
      return;
    }
    if (e.actionOption?.type === "toggle") {
      const p = h.target;
      pt(r, p.checked, !0);
    } else if (e.actionOption?.type === "select") {
      const p = h.target;
      pt(r, p.value, !0);
    }
    e.actionInstance.applyOptionValue(e.name, we(r));
  };
  var u = Lr(), c = Hn(u);
  {
    var f = (h) => {
      var p = Sw(), d = En(p);
      {
        var v = (x) => {
          var M = ww(), S = Hn(M), C = En(S), F = zs(S, 2);
          F.__change = s, Js(F, 21, () => e.actionOption.choices, Zx, (O, I) => {
            var H = xw(), X = En(H), J = {};
            xn(() => {
              Di(X, we(I).title), J !== (J = we(I).value) && (H.value = (H.__value = we(I).value) ?? "");
            }), Ke(O, H);
          }), xn(() => {
            Mr(S, "for", e.name), Di(C, e.actionOption.label), Mr(F, "id", e.name);
          }), iw(F, () => we(r), (O) => pt(r, O)), Ke(x, M);
        }, _ = (x) => {
          var M = Lr(), S = Hn(M);
          {
            var C = (F) => {
              var O = kw(), I = En(O);
              I.__change = s;
              var H = zs(I);
              xn(
                (X) => {
                  Mr(O, "for", e.name), Mr(I, "id", X), Di(H, ` ${e.actionOption.label ?? ""}`);
                },
                [() => String(e.name)]
              ), gw(I, () => we(r), (X) => pt(r, X)), Ke(F, O);
            };
            tn(
              S,
              (F) => {
                e.actionOption.type === "toggle" && typeof we(r) == "boolean" && F(C);
              },
              !0
            );
          }
          Ke(x, M);
        };
        tn(d, (x) => {
          e.actionOption.type === "select" ? x(v) : x(_, !1);
        });
      }
      Ke(h, p);
    };
    tn(c, (h) => {
      e.actionOption && h(f);
    });
  }
  Ke(t, u), Ki();
}
Io(["change"]);
var Iw = /* @__PURE__ */ on('<button type="submit" class="sub-action svelte-1xmw7n6"> </button>');
function bw(t, e) {
  Zi(e, !0);
  const r = (f) => {
    if (f.preventDefault(), !e.actionInstance || !e.subAction) {
      te.error("Can't run a SubAction", e.actionInstance, e.subAction);
      return;
    }
    e.subAction.method();
  };
  var s = Lr(), u = Hn(s);
  {
    var c = (f) => {
      var h = Iw();
      h.__click = r;
      var p = En(h);
      xn(() => {
        Mr(h, "id", `subaction-${e.name}`), Mr(h, "title", e.subAction.label), Di(p, e.subAction.label);
      }), Ke(f, h);
    };
    tn(u, (f) => {
      e.subAction && f(c);
    });
  }
  Ke(t, s), Ki();
}
Io(["click"]);
var Lw = /* @__PURE__ */ on("<!> <!>", 1);
function Tw(t, e) {
  Zi(e, !0);
  const r = Dg("gm"), s = e.control.type, u = e.control.targetMode;
  let c = /* @__PURE__ */ gn(null);
  s && u && pt(c, r.actionInstances[`${s}__${u}`] || null, !0);
  var f = Lr(), h = Hn(f);
  {
    var p = (d) => {
      var v = Lw(), _ = Hn(v);
      Js(_, 17, () => Object.entries(we(c).options), ([M, S]) => M, (M, S) => {
        var C = /* @__PURE__ */ wr(() => Wa(we(S), 2));
        let F = () => we(C)[0], O = () => we(C)[1];
        Mw(M, {
          get name() {
            return F();
          },
          get actionInstance() {
            return we(c);
          },
          get actionOption() {
            return O();
          }
        });
      });
      var x = zs(_, 2);
      Js(x, 17, () => Object.entries(we(c).actions), ([M, S]) => M, (M, S) => {
        var C = /* @__PURE__ */ wr(() => Wa(we(S), 2));
        let F = () => we(C)[0], O = () => we(C)[1];
        bw(M, {
          get name() {
            return F();
          },
          get actionInstance() {
            return we(c);
          },
          get subAction() {
            return O();
          }
        });
      }), Ke(d, v);
    };
    tn(h, (d) => {
      we(c) && d(p);
    });
  }
  Ke(t, f), Ki();
}
/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */
const {
  entries: Sd,
  setPrototypeOf: Rh,
  isFrozen: Aw,
  getPrototypeOf: Cw,
  getOwnPropertyDescriptor: Nw
} = Object;
let {
  freeze: At,
  seal: an,
  create: zu
} = Object, {
  apply: qu,
  construct: Yu
} = typeof Reflect < "u" && Reflect;
At || (At = function(e) {
  return e;
});
an || (an = function(e) {
  return e;
});
qu || (qu = function(e, r) {
  for (var s = arguments.length, u = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++)
    u[c - 2] = arguments[c];
  return e.apply(r, u);
});
Yu || (Yu = function(e) {
  for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
    s[u - 1] = arguments[u];
  return new e(...s);
});
const _a = Ct(Array.prototype.forEach), Pw = Ct(Array.prototype.lastIndexOf), Dh = Ct(Array.prototype.pop), gs = Ct(Array.prototype.push), Ow = Ct(Array.prototype.splice), Fa = Ct(String.prototype.toLowerCase), nu = Ct(String.prototype.toString), ru = Ct(String.prototype.match), ds = Ct(String.prototype.replace), Rw = Ct(String.prototype.indexOf), Dw = Ct(String.prototype.trim), fn = Ct(Object.prototype.hasOwnProperty), kt = Ct(RegExp.prototype.test), ps = Fw(TypeError);
function Ct(t) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
      s[u - 1] = arguments[u];
    return qu(t, e, s);
  };
}
function Fw(t) {
  return function() {
    for (var e = arguments.length, r = new Array(e), s = 0; s < e; s++)
      r[s] = arguments[s];
    return Yu(t, r);
  };
}
function Me(t, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fa;
  Rh && Rh(t, null);
  let s = e.length;
  for (; s--; ) {
    let u = e[s];
    if (typeof u == "string") {
      const c = r(u);
      c !== u && (Aw(e) || (e[s] = c), u = c);
    }
    t[u] = !0;
  }
  return t;
}
function Gw(t) {
  for (let e = 0; e < t.length; e++)
    fn(t, e) || (t[e] = null);
  return t;
}
function nr(t) {
  const e = zu(null);
  for (const [r, s] of Sd(t))
    fn(t, r) && (Array.isArray(s) ? e[r] = Gw(s) : s && typeof s == "object" && s.constructor === Object ? e[r] = nr(s) : e[r] = s);
  return e;
}
function ms(t, e) {
  for (; t !== null; ) {
    const s = Nw(t, e);
    if (s) {
      if (s.get)
        return Ct(s.get);
      if (typeof s.value == "function")
        return Ct(s.value);
    }
    t = Cw(t);
  }
  function r() {
    return null;
  }
  return r;
}
const Fh = At(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), iu = At(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), su = At(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Bw = At(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), au = At(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Uw = At(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gh = At(["#text"]), Bh = At(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ou = At(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Uh = At(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ea = At(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), zw = an(/\{\{[\w\W]*|[\w\W]*\}\}/gm), qw = an(/<%[\w\W]*|[\w\W]*%>/gm), Yw = an(/\$\{[\w\W]*/gm), Hw = an(/^data-[\-\w.\u00B7-\uFFFF]+$/), Jw = an(/^aria-[\-\w]+$/), Md = an(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), $w = an(/^(?:\w+script|data):/i), Vw = an(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Id = an(/^html$/i), Xw = an(/^[a-z][.\w]*(-[.\w]+)+$/i);
var zh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Jw,
  ATTR_WHITESPACE: Vw,
  CUSTOM_ELEMENT: Xw,
  DATA_ATTR: Hw,
  DOCTYPE_NAME: Id,
  ERB_EXPR: qw,
  IS_ALLOWED_URI: Md,
  IS_SCRIPT_OR_DATA: $w,
  MUSTACHE_EXPR: zw,
  TMPLIT_EXPR: Yw
});
const vs = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Ww = function() {
  return typeof window > "u" ? null : window;
}, jw = function(e, r) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let s = null;
  const u = "data-tt-policy-suffix";
  r && r.hasAttribute(u) && (s = r.getAttribute(u));
  const c = "dompurify" + (s ? "#" + s : "");
  try {
    return e.createPolicy(c, {
      createHTML(f) {
        return f;
      },
      createScriptURL(f) {
        return f;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + c + " could not be created."), null;
  }
}, qh = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function bd() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ww();
  const e = (ge) => bd(ge);
  if (e.version = "3.3.0", e.removed = [], !t || !t.document || t.document.nodeType !== vs.document || !t.Element)
    return e.isSupported = !1, e;
  let {
    document: r
  } = t;
  const s = r, u = s.currentScript, {
    DocumentFragment: c,
    HTMLTemplateElement: f,
    Node: h,
    Element: p,
    NodeFilter: d,
    NamedNodeMap: v = t.NamedNodeMap || t.MozNamedAttrMap,
    HTMLFormElement: _,
    DOMParser: x,
    trustedTypes: M
  } = t, S = p.prototype, C = ms(S, "cloneNode"), F = ms(S, "remove"), O = ms(S, "nextSibling"), I = ms(S, "childNodes"), H = ms(S, "parentNode");
  if (typeof f == "function") {
    const ge = r.createElement("template");
    ge.content && ge.content.ownerDocument && (r = ge.content.ownerDocument);
  }
  let X, J = "";
  const {
    implementation: U,
    createNodeIterator: W,
    createDocumentFragment: E,
    getElementsByTagName: w
  } = r, {
    importNode: b
  } = s;
  let T = qh();
  e.isSupported = typeof Sd == "function" && typeof H == "function" && U && U.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: A,
    ERB_EXPR: G,
    TMPLIT_EXPR: R,
    DATA_ATTR: P,
    ARIA_ATTR: D,
    IS_SCRIPT_OR_DATA: Y,
    ATTR_WHITESPACE: z,
    CUSTOM_ELEMENT: j
  } = zh;
  let {
    IS_ALLOWED_URI: Z
  } = zh, re = null;
  const pe = Me({}, [...Fh, ...iu, ...su, ...au, ...Gh]);
  let le = null;
  const ae = Me({}, [...Bh, ...ou, ...Uh, ...Ea]);
  let oe = Object.seal(zu(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ee = null, Ce = null;
  const $ = Object.seal(zu(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let In = !0, Le = !0, ce = !1, N = !0, Ne = !1, De = !0, ke = !1, ui = !1, Dr = !1, pr = !1, ne = !1, Fr = !1, rs = !0, bn = !1;
  const No = "user-content-";
  let _e = !0, un = !1, ln = {}, Ln = null;
  const ve = Me({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let li = null;
  const Se = Me({}, ["audio", "video", "img", "source", "image", "track"]);
  let ye = null;
  const sa = Me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Nt = "http://www.w3.org/1998/Math/MathML", ci = "http://www.w3.org/2000/svg", de = "http://www.w3.org/1999/xhtml";
  let mr = de, is = !1, Gr = null;
  const Pt = Me({}, [Nt, ci, de], nu);
  let Tn = Me({}, ["mi", "mo", "mn", "ms", "mtext"]), Et = Me({}, ["annotation-xml"]);
  const aa = Me({}, ["title", "style", "font", "a", "script"]);
  let An = null;
  const Po = ["application/xhtml+xml", "text/html"], oa = "text/html";
  let Be = null, ie = null;
  const hi = r.createElement("form"), Br = function(B) {
    return B instanceof RegExp || B instanceof Function;
  }, jn = function() {
    let B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ie && ie === B)) {
      if ((!B || typeof B != "object") && (B = {}), B = nr(B), An = // eslint-disable-next-line unicorn/prefer-includes
      Po.indexOf(B.PARSER_MEDIA_TYPE) === -1 ? oa : B.PARSER_MEDIA_TYPE, Be = An === "application/xhtml+xml" ? nu : Fa, re = fn(B, "ALLOWED_TAGS") ? Me({}, B.ALLOWED_TAGS, Be) : pe, le = fn(B, "ALLOWED_ATTR") ? Me({}, B.ALLOWED_ATTR, Be) : ae, Gr = fn(B, "ALLOWED_NAMESPACES") ? Me({}, B.ALLOWED_NAMESPACES, nu) : Pt, ye = fn(B, "ADD_URI_SAFE_ATTR") ? Me(nr(sa), B.ADD_URI_SAFE_ATTR, Be) : sa, li = fn(B, "ADD_DATA_URI_TAGS") ? Me(nr(Se), B.ADD_DATA_URI_TAGS, Be) : Se, Ln = fn(B, "FORBID_CONTENTS") ? Me({}, B.FORBID_CONTENTS, Be) : ve, Ee = fn(B, "FORBID_TAGS") ? Me({}, B.FORBID_TAGS, Be) : nr({}), Ce = fn(B, "FORBID_ATTR") ? Me({}, B.FORBID_ATTR, Be) : nr({}), ln = fn(B, "USE_PROFILES") ? B.USE_PROFILES : !1, In = B.ALLOW_ARIA_ATTR !== !1, Le = B.ALLOW_DATA_ATTR !== !1, ce = B.ALLOW_UNKNOWN_PROTOCOLS || !1, N = B.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ne = B.SAFE_FOR_TEMPLATES || !1, De = B.SAFE_FOR_XML !== !1, ke = B.WHOLE_DOCUMENT || !1, pr = B.RETURN_DOM || !1, ne = B.RETURN_DOM_FRAGMENT || !1, Fr = B.RETURN_TRUSTED_TYPE || !1, Dr = B.FORCE_BODY || !1, rs = B.SANITIZE_DOM !== !1, bn = B.SANITIZE_NAMED_PROPS || !1, _e = B.KEEP_CONTENT !== !1, un = B.IN_PLACE || !1, Z = B.ALLOWED_URI_REGEXP || Md, mr = B.NAMESPACE || de, Tn = B.MATHML_TEXT_INTEGRATION_POINTS || Tn, Et = B.HTML_INTEGRATION_POINTS || Et, oe = B.CUSTOM_ELEMENT_HANDLING || {}, B.CUSTOM_ELEMENT_HANDLING && Br(B.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (oe.tagNameCheck = B.CUSTOM_ELEMENT_HANDLING.tagNameCheck), B.CUSTOM_ELEMENT_HANDLING && Br(B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (oe.attributeNameCheck = B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), B.CUSTOM_ELEMENT_HANDLING && typeof B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (oe.allowCustomizedBuiltInElements = B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ne && (Le = !1), ne && (pr = !0), ln && (re = Me({}, Gh), le = [], ln.html === !0 && (Me(re, Fh), Me(le, Bh)), ln.svg === !0 && (Me(re, iu), Me(le, ou), Me(le, Ea)), ln.svgFilters === !0 && (Me(re, su), Me(le, ou), Me(le, Ea)), ln.mathMl === !0 && (Me(re, au), Me(le, Uh), Me(le, Ea))), B.ADD_TAGS && (typeof B.ADD_TAGS == "function" ? $.tagCheck = B.ADD_TAGS : (re === pe && (re = nr(re)), Me(re, B.ADD_TAGS, Be))), B.ADD_ATTR && (typeof B.ADD_ATTR == "function" ? $.attributeCheck = B.ADD_ATTR : (le === ae && (le = nr(le)), Me(le, B.ADD_ATTR, Be))), B.ADD_URI_SAFE_ATTR && Me(ye, B.ADD_URI_SAFE_ATTR, Be), B.FORBID_CONTENTS && (Ln === ve && (Ln = nr(Ln)), Me(Ln, B.FORBID_CONTENTS, Be)), _e && (re["#text"] = !0), ke && Me(re, ["html", "head", "body"]), re.table && (Me(re, ["tbody"]), delete Ee.tbody), B.TRUSTED_TYPES_POLICY) {
        if (typeof B.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ps('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof B.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ps('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        X = B.TRUSTED_TYPES_POLICY, J = X.createHTML("");
      } else
        X === void 0 && (X = jw(M, u)), X !== null && typeof J == "string" && (J = X.createHTML(""));
      At && At(B), ie = B;
    }
  }, ss = Me({}, [...iu, ...su, ...Bw]), fi = Me({}, [...au, ...Uw]), ua = function(B) {
    let Q = H(B);
    (!Q || !Q.tagName) && (Q = {
      namespaceURI: mr,
      tagName: "template"
    });
    const he = Fa(B.tagName), Ue = Fa(Q.tagName);
    return Gr[B.namespaceURI] ? B.namespaceURI === ci ? Q.namespaceURI === de ? he === "svg" : Q.namespaceURI === Nt ? he === "svg" && (Ue === "annotation-xml" || Tn[Ue]) : !!ss[he] : B.namespaceURI === Nt ? Q.namespaceURI === de ? he === "math" : Q.namespaceURI === ci ? he === "math" && Et[Ue] : !!fi[he] : B.namespaceURI === de ? Q.namespaceURI === ci && !Et[Ue] || Q.namespaceURI === Nt && !Tn[Ue] ? !1 : !fi[he] && (aa[he] || !ss[he]) : !!(An === "application/xhtml+xml" && Gr[B.namespaceURI]) : !1;
  }, rt = function(B) {
    gs(e.removed, {
      element: B
    });
    try {
      H(B).removeChild(B);
    } catch {
      F(B);
    }
  }, Cn = function(B, Q) {
    try {
      gs(e.removed, {
        attribute: Q.getAttributeNode(B),
        from: Q
      });
    } catch {
      gs(e.removed, {
        attribute: null,
        from: Q
      });
    }
    if (Q.removeAttribute(B), B === "is")
      if (pr || ne)
        try {
          rt(Q);
        } catch {
        }
      else
        try {
          Q.setAttribute(B, "");
        } catch {
        }
  }, Ur = function(B) {
    let Q = null, he = null;
    if (Dr)
      B = "<remove></remove>" + B;
    else {
      const ze = ru(B, /^[\r\n\t ]+/);
      he = ze && ze[0];
    }
    An === "application/xhtml+xml" && mr === de && (B = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + B + "</body></html>");
    const Ue = X ? X.createHTML(B) : B;
    if (mr === de)
      try {
        Q = new x().parseFromString(Ue, An);
      } catch {
      }
    if (!Q || !Q.documentElement) {
      Q = U.createDocument(mr, "template", null);
      try {
        Q.documentElement.innerHTML = is ? J : Ue;
      } catch {
      }
    }
    const et = Q.body || Q.documentElement;
    return B && he && et.insertBefore(r.createTextNode(he), et.childNodes[0] || null), mr === de ? w.call(Q, ke ? "html" : "body")[0] : ke ? Q.documentElement : et;
  }, la = function(B) {
    return W.call(
      B.ownerDocument || B,
      B,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, gi = function(B) {
    return B instanceof _ && (typeof B.nodeName != "string" || typeof B.textContent != "string" || typeof B.removeChild != "function" || !(B.attributes instanceof v) || typeof B.removeAttribute != "function" || typeof B.setAttribute != "function" || typeof B.namespaceURI != "string" || typeof B.insertBefore != "function" || typeof B.hasChildNodes != "function");
  }, ca = function(B) {
    return typeof h == "function" && B instanceof h;
  };
  function $e(ge, B, Q) {
    _a(ge, (he) => {
      he.call(e, B, Q, ie);
    });
  }
  const di = function(B) {
    let Q = null;
    if ($e(T.beforeSanitizeElements, B, null), gi(B))
      return rt(B), !0;
    const he = Be(B.nodeName);
    if ($e(T.uponSanitizeElement, B, {
      tagName: he,
      allowedTags: re
    }), De && B.hasChildNodes() && !ca(B.firstElementChild) && kt(/<[/\w!]/g, B.innerHTML) && kt(/<[/\w!]/g, B.textContent) || B.nodeType === vs.progressingInstruction || De && B.nodeType === vs.comment && kt(/<[/\w]/g, B.data))
      return rt(B), !0;
    if (!($.tagCheck instanceof Function && $.tagCheck(he)) && (!re[he] || Ee[he])) {
      if (!Ee[he] && Nn(he) && (oe.tagNameCheck instanceof RegExp && kt(oe.tagNameCheck, he) || oe.tagNameCheck instanceof Function && oe.tagNameCheck(he)))
        return !1;
      if (_e && !Ln[he]) {
        const Ue = H(B) || B.parentNode, et = I(B) || B.childNodes;
        if (et && Ue) {
          const ze = et.length;
          for (let it = ze - 1; it >= 0; --it) {
            const Ft = C(et[it], !0);
            Ft.__removalCount = (B.__removalCount || 0) + 1, Ue.insertBefore(Ft, O(B));
          }
        }
      }
      return rt(B), !0;
    }
    return B instanceof p && !ua(B) || (he === "noscript" || he === "noembed" || he === "noframes") && kt(/<\/no(script|embed|frames)/i, B.innerHTML) ? (rt(B), !0) : (Ne && B.nodeType === vs.text && (Q = B.textContent, _a([A, G, R], (Ue) => {
      Q = ds(Q, Ue, " ");
    }), B.textContent !== Q && (gs(e.removed, {
      element: B.cloneNode()
    }), B.textContent = Q)), $e(T.afterSanitizeElements, B, null), !1);
  }, vr = function(B, Q, he) {
    if (rs && (Q === "id" || Q === "name") && (he in r || he in hi))
      return !1;
    if (!(Le && !Ce[Q] && kt(P, Q))) {
      if (!(In && kt(D, Q))) {
        if (!($.attributeCheck instanceof Function && $.attributeCheck(Q, B))) {
          if (!le[Q] || Ce[Q]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Nn(B) && (oe.tagNameCheck instanceof RegExp && kt(oe.tagNameCheck, B) || oe.tagNameCheck instanceof Function && oe.tagNameCheck(B)) && (oe.attributeNameCheck instanceof RegExp && kt(oe.attributeNameCheck, Q) || oe.attributeNameCheck instanceof Function && oe.attributeNameCheck(Q, B)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              Q === "is" && oe.allowCustomizedBuiltInElements && (oe.tagNameCheck instanceof RegExp && kt(oe.tagNameCheck, he) || oe.tagNameCheck instanceof Function && oe.tagNameCheck(he)))
            ) return !1;
          } else if (!ye[Q]) {
            if (!kt(Z, ds(he, z, ""))) {
              if (!((Q === "src" || Q === "xlink:href" || Q === "href") && B !== "script" && Rw(he, "data:") === 0 && li[B])) {
                if (!(ce && !kt(Y, ds(he, z, "")))) {
                  if (he)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Nn = function(B) {
    return B !== "annotation-xml" && ru(B, j);
  }, Pn = function(B) {
    $e(T.beforeSanitizeAttributes, B, null);
    const {
      attributes: Q
    } = B;
    if (!Q || gi(B))
      return;
    const he = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: le,
      forceKeepAttr: void 0
    };
    let Ue = Q.length;
    for (; Ue--; ) {
      const et = Q[Ue], {
        name: ze,
        namespaceURI: it,
        value: Ft
      } = et, Zn = Be(ze), os = Ft;
      let Re = ze === "value" ? os : Dw(os);
      if (he.attrName = Zn, he.attrValue = Re, he.keepAttr = !0, he.forceKeepAttr = void 0, $e(T.uponSanitizeAttribute, B, he), Re = he.attrValue, bn && (Zn === "id" || Zn === "name") && (Cn(ze, B), Re = No + Re), De && kt(/((--!?|])>)|<\/(style|title|textarea)/i, Re)) {
        Cn(ze, B);
        continue;
      }
      if (Zn === "attributename" && ru(Re, "href")) {
        Cn(ze, B);
        continue;
      }
      if (he.forceKeepAttr)
        continue;
      if (!he.keepAttr) {
        Cn(ze, B);
        continue;
      }
      if (!N && kt(/\/>/i, Re)) {
        Cn(ze, B);
        continue;
      }
      Ne && _a([A, G, R], (pi) => {
        Re = ds(Re, pi, " ");
      });
      const Kn = Be(B.nodeName);
      if (!vr(Kn, Zn, Re)) {
        Cn(ze, B);
        continue;
      }
      if (X && typeof M == "object" && typeof M.getAttributeType == "function" && !it)
        switch (M.getAttributeType(Kn, Zn)) {
          case "TrustedHTML": {
            Re = X.createHTML(Re);
            break;
          }
          case "TrustedScriptURL": {
            Re = X.createScriptURL(Re);
            break;
          }
        }
      if (Re !== os)
        try {
          it ? B.setAttributeNS(it, ze, Re) : B.setAttribute(ze, Re), gi(B) ? rt(B) : Dh(e.removed);
        } catch {
          Cn(ze, B);
        }
    }
    $e(T.afterSanitizeAttributes, B, null);
  }, as = function ge(B) {
    let Q = null;
    const he = la(B);
    for ($e(T.beforeSanitizeShadowDOM, B, null); Q = he.nextNode(); )
      $e(T.uponSanitizeShadowNode, Q, null), di(Q), Pn(Q), Q.content instanceof c && ge(Q.content);
    $e(T.afterSanitizeShadowDOM, B, null);
  };
  return e.sanitize = function(ge) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Q = null, he = null, Ue = null, et = null;
    if (is = !ge, is && (ge = "<!-->"), typeof ge != "string" && !ca(ge))
      if (typeof ge.toString == "function") {
        if (ge = ge.toString(), typeof ge != "string")
          throw ps("dirty is not a string, aborting");
      } else
        throw ps("toString is not a function");
    if (!e.isSupported)
      return ge;
    if (ui || jn(B), e.removed = [], typeof ge == "string" && (un = !1), un) {
      if (ge.nodeName) {
        const Ft = Be(ge.nodeName);
        if (!re[Ft] || Ee[Ft])
          throw ps("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (ge instanceof h)
      Q = Ur("<!---->"), he = Q.ownerDocument.importNode(ge, !0), he.nodeType === vs.element && he.nodeName === "BODY" || he.nodeName === "HTML" ? Q = he : Q.appendChild(he);
    else {
      if (!pr && !Ne && !ke && // eslint-disable-next-line unicorn/prefer-includes
      ge.indexOf("<") === -1)
        return X && Fr ? X.createHTML(ge) : ge;
      if (Q = Ur(ge), !Q)
        return pr ? null : Fr ? J : "";
    }
    Q && Dr && rt(Q.firstChild);
    const ze = la(un ? ge : Q);
    for (; Ue = ze.nextNode(); )
      di(Ue), Pn(Ue), Ue.content instanceof c && as(Ue.content);
    if (un)
      return ge;
    if (pr) {
      if (ne)
        for (et = E.call(Q.ownerDocument); Q.firstChild; )
          et.appendChild(Q.firstChild);
      else
        et = Q;
      return (le.shadowroot || le.shadowrootmode) && (et = b.call(s, et, !0)), et;
    }
    let it = ke ? Q.outerHTML : Q.innerHTML;
    return ke && re["!doctype"] && Q.ownerDocument && Q.ownerDocument.doctype && Q.ownerDocument.doctype.name && kt(Id, Q.ownerDocument.doctype.name) && (it = "<!DOCTYPE " + Q.ownerDocument.doctype.name + `>
` + it), Ne && _a([A, G, R], (Ft) => {
      it = ds(it, Ft, " ");
    }), X && Fr ? X.createHTML(it) : it;
  }, e.setConfig = function() {
    let ge = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    jn(ge), ui = !0;
  }, e.clearConfig = function() {
    ie = null, ui = !1;
  }, e.isValidAttribute = function(ge, B, Q) {
    ie || jn({});
    const he = Be(ge), Ue = Be(B);
    return vr(he, Ue, Q);
  }, e.addHook = function(ge, B) {
    typeof B == "function" && gs(T[ge], B);
  }, e.removeHook = function(ge, B) {
    if (B !== void 0) {
      const Q = Pw(T[ge], B);
      return Q === -1 ? void 0 : Ow(T[ge], Q, 1)[0];
    }
    return Dh(T[ge]);
  }, e.removeHooks = function(ge) {
    T[ge] = [];
  }, e.removeAllHooks = function() {
    T = qh();
  }, e;
}
var Ld = bd(), Zw = /* @__PURE__ */ on("<div><!></div>"), Kw = /* @__PURE__ */ on('<div><button type="button"><!></button> <!></div>');
function Qw(t, e) {
  Zi(e, !0);
  const r = () => xd(Rl, "$controlsStore", s), [s, u] = wd(), c = /* @__PURE__ */ wr(() => e.controlOptions?.icon ? Ld.sanitize(e.controlOptions.icon.trim()) : null), f = Dg("gm"), h = f.control.getDefaultPosition(), p = () => {
    e.control && e.controlOptions ? f.options.toggleMode(e.control.type, e.control.targetMode) : te.error("Control or controlOptions not defined", e.control, e.controlOptions);
  };
  var d = Lr(), v = Hn(d);
  {
    var _ = (x) => {
      var M = Kw(), S = En(M);
      let C;
      S.__click = p;
      var F = En(S);
      {
        var O = (J) => {
          var U = Lr(), W = Hn(U);
          vd(W, () => we(c)), Ke(J, U);
        }, I = (J) => {
          var U = Lr(), W = Hn(U);
          {
            var E = (b) => {
              var T = Ah();
              xn((A) => Di(T, A), [() => e.controlOptions.title.slice(0, 2)]), Ke(b, T);
            }, w = (b) => {
              var T = Ah();
              xn(() => Di(T, e.control.targetMode)), Ke(b, T);
            };
            tn(
              W,
              (b) => {
                e.controlOptions.title ? b(E) : b(w, !1);
              },
              !0
            );
          }
          Ke(J, U);
        };
        tn(F, (J) => {
          e.controlOptions.icon ? J(O) : J(I, !1);
        });
      }
      var H = zs(S, 2);
      {
        var X = (J) => {
          var U = Zw();
          let W;
          var E = En(U);
          Tw(E, {
            get control() {
              return e.control;
            }
          }), xn((w) => W = Os(U, 1, "control-menu svelte-1q85gr9", null, W, w), [
            () => ({
              "menu-right": h.endsWith("left"),
              "menu-left": h.endsWith("right")
            })
          ]), Ke(J, U);
        };
        tn(H, (J) => {
          e.controlOptions.active && J(X);
        });
      }
      xn(() => {
        Os(M, 1, tw(r().settings.controlsStyles.controlContainerClass), "svelte-1q85gr9"), Mr(S, "id", `id_${e.control.type}_${e.control.targetMode}`), C = Os(S, 1, `${r().settings.controlsStyles.controlButtonClass} ${e.control.type}-${e.control.targetMode}`, "svelte-1q85gr9", C, { active: e.controlOptions.active }), Mr(S, "title", e.controlOptions.title);
      }), Ke(x, M);
    };
    tn(v, (x) => {
      e.control && e.controlOptions && e.controlOptions.uiEnabled && x(_);
    });
  }
  Ke(t, d), Ki(), u();
}
Io(["click"]);
function ek(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Yh(t, { delay: e = 0, duration: r = 400, easing: s = ek, axis: u = "y" } = {}) {
  const c = getComputedStyle(t), f = +c.opacity, h = u === "y" ? "height" : "width", p = parseFloat(c[h]), d = u === "y" ? ["top", "bottom"] : ["left", "right"], v = d.map(
    (O) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${O[0].toUpperCase()}${O.slice(1)}`
    )
  ), _ = parseFloat(c[`padding${v[0]}`]), x = parseFloat(c[`padding${v[1]}`]), M = parseFloat(c[`margin${v[0]}`]), S = parseFloat(c[`margin${v[1]}`]), C = parseFloat(
    c[`border${v[0]}Width`]
  ), F = parseFloat(
    c[`border${v[1]}Width`]
  );
  return {
    delay: e,
    duration: r,
    easing: s,
    css: (O) => `overflow: hidden;opacity: ${Math.min(O * 20, 1) * f};${h}: ${O * p}px;padding-${d[0]}: ${O * _}px;padding-${d[1]}: ${O * x}px;margin-${d[0]}: ${O * M}px;margin-${d[1]}: ${O * S}px;border-${d[0]}-width: ${O * C}px;border-${d[1]}-width: ${O * F}px;min-${h}: 0`
  };
}
var tk = /* @__PURE__ */ on('<div><button class="gm-control-button"><!></button></div>'), nk = /* @__PURE__ */ on("<div></div>"), rk = /* @__PURE__ */ on("<div></div>"), ik = /* @__PURE__ */ on('<div class="gm-reactive-controls svelte-qjysea"><!> <!></div>');
function sk(t, e) {
  Zi(e, !0);
  const r = () => xd(Rl, "$controlsStore", s), [s, u] = wd();
  let c = /* @__PURE__ */ gn(!0), f = /* @__PURE__ */ wr(() => r().settings.controlsCollapsible), h = /* @__PURE__ */ wr(() => r().settings.controlsStyles);
  const p = (F, O) => r().controls?.[F]?.[O] || null, d = () => {
    pt(c, !we(c));
  }, v = () => Ld.sanitize(we(c) ? _w : Ew);
  var _ = ik(), x = En(_);
  {
    var M = (F) => {
      var O = tk(), I = En(O);
      I.__click = d;
      var H = En(I);
      vd(H, v), xn(() => Os(O, 1, `${we(h).controlGroupClass} group-settings`, "svelte-qjysea")), Ke(F, O);
    };
    tn(x, (F) => {
      we(f) && F(M);
    });
  }
  var S = zs(x, 2);
  {
    var C = (F) => {
      var O = rk();
      Js(O, 5, () => Object.entries(r().options), ([I, H]) => I, (I, H) => {
        var X = /* @__PURE__ */ wr(() => Wa(we(H), 2));
        let J = () => we(X)[0], U = () => we(X)[1];
        var W = nk();
        Js(W, 21, () => Object.entries(U()), ([E, w]) => E, (E, w) => {
          var b = /* @__PURE__ */ wr(() => Wa(we(w), 2));
          let T = () => we(b)[0], A = () => we(b)[1];
          const G = /* @__PURE__ */ wr(() => p(J(), T()));
          var R = Lr(), P = Hn(R);
          {
            var D = (Y) => {
              Qw(Y, {
                get control() {
                  return we(G);
                },
                get controlOptions() {
                  return A();
                }
              });
            };
            tn(P, (Y) => {
              we(G) && Y(D);
            });
          }
          Ke(E, R);
        }), xn(() => Os(W, 1, `${we(h).controlGroupClass} group-${J()}`, "svelte-qjysea")), Ke(I, W);
      }), Oh(1, O, () => Yh, () => ({ duration: 180 })), Oh(2, O, () => Yh, () => ({ duration: 140 })), Ke(F, O);
    };
    tn(S, (F) => {
      we(c) && F(C);
    });
  }
  Ke(t, _), Ki(), u();
}
Io(["click"]);
class ak {
  gm;
  constructor(e) {
    this.gm = e;
  }
}
const tt = (t) => Object.keys(t), Hu = (t) => Object.values(t), Tr = (t, e) => e.includes(t);
class ok extends ak {
  controls = sn($f);
  reactiveControls = null;
  container = void 0;
  eventHandlers = {
    [`${se}:draw`]: this.handleModeEvent.bind(this),
    [`${se}:edit`]: this.handleModeEvent.bind(this),
    [`${se}:helper`]: this.handleModeEvent.bind(this)
  };
  onAdd() {
    if (this.createControls(), this.gm.events.bus.attachEvents(this.eventHandlers), !this.container)
      throw new Error("Controls container is not initialized");
    return this.container;
  }
  createControls(e = void 0) {
    if (this.controlsAdded()) {
      te.warn("Can't add controls: controls already added");
      return;
    }
    this.container = e || this.createHtmlContainer(), this.createReactivePanel();
  }
  onRemove() {
    this.gm.events.bus.detachEvents(this.eventHandlers), this.reactiveControls && (Wx(this.reactiveControls), this.reactiveControls = null), this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container), this.container = void 0;
  }
  handleModeEvent(e) {
    return tc(e) ? (["mode_started", "mode_ended"].includes(e.action) && this.updateReactivePanel(), { next: !0 }) : { next: !0 };
  }
  controlsAdded() {
    return !!this.reactiveControls;
  }
  createReactivePanel() {
    if (!this.container) {
      te.error("Can't create reactive panel: container is not initialized");
      return;
    }
    this.syncModeStates();
    const e = /* @__PURE__ */ new Map();
    e.set("gm", this.gm), this.reactiveControls = Vx(sk, {
      target: this.container,
      context: e
    }), this.updateReactivePanel();
  }
  updateReactivePanel() {
    Rl.update(() => ({
      controls: this.controls,
      options: this.gm.options.controls,
      settings: this.gm.options.settings
    }));
  }
  createHtmlContainer() {
    const e = document.createElement("div");
    return e.classList.add("geoman-controls"), e;
  }
  syncModeStates() {
    this.eachControlWithOptions(({ control: e }) => {
      this.gm.options.syncModeState(e.type, e.targetMode);
    });
  }
  eachControlWithOptions(e) {
    return tt(this.controls).forEach((r) => {
      const s = this.controls[r];
      return Object.keys(s).forEach((u) => {
        const c = u, f = this.getControl({ modeType: r, modeName: c }), h = this.gm.options.getControlOptions({
          modeType: r,
          modeName: c
        });
        f && h && e({ control: f, controlOptions: h });
      });
    });
  }
  getControl({
    modeType: e,
    modeName: r
  }) {
    return e && r && this.controls[e][r] || null;
  }
  getDefaultPosition() {
    return this.gm.options.settings.controlsPosition;
  }
}
class uk {
  gm;
  globalEventsListener = null;
  constructor(e) {
    this.gm = e;
  }
  get map() {
    return this.gm.mapAdapter.getMapInstance();
  }
  async processEvent(e, r) {
    await this.fireToMap({
      type: "system",
      eventName: e.split(":")[1],
      payload: {
        ...r,
        level: "user"
      }
    }), r.action === "mode_start" || r.action === "mode_end" ? await this.forwardModeToggledEvent(r) : r.action === "feature_created" ? await this.forwardFeatureCreated(r) : r.action === "feature_removed" ? await this.forwardFeatureRemoved(r) : r.action === "feature_updated" ? await this.forwardFeatureUpdated(r) : r.action === "feature_edit_start" ? await this.forwardFeatureEditStart(r) : r.action === "feature_edit_end" ? await this.forwardFeatureEditEnd(r) : (r.action === "loaded" || r.action === "unloaded") && await this.forwardGeomanLoaded(r);
  }
  async forwardModeToggledEvent(e) {
    const r = e.action === "mode_start";
    if (e.actionType === "draw") {
      const s = "globaldrawmodetoggled", u = {
        name: `${ot}:${s}`,
        actionType: e.actionType,
        action: e.action,
        enabled: r,
        shape: e.mode,
        map: this.map
      };
      await this.fireToMap({ type: "converted", eventName: s, payload: u });
      const c = r ? "drawstart" : "drawend", f = {
        name: `${ot}:${c}`,
        actionType: e.actionType,
        action: e.action,
        shape: e.mode,
        map: this.map
      };
      await this.fireToMap({
        type: "converted",
        eventName: c,
        payload: f
      });
    } else if (e.actionType === "edit") {
      const u = `global${this.getConvertedEditModeName(e.mode)}modetoggled`, c = {
        name: `${ot}:${u}`,
        actionType: e.actionType,
        action: e.action,
        enabled: r,
        map: this.map
      };
      await this.fireToMap({
        type: "converted",
        eventName: u,
        payload: c
      });
    } else if (e.actionType === "helper") {
      const s = `global${e.mode}modetoggled`, u = {
        name: `${ot}:${s}`,
        actionType: e.actionType,
        action: e.action,
        enabled: r,
        map: this.map
      };
      await this.fireToMap({
        type: "converted",
        eventName: s,
        payload: u
      });
    }
  }
  async forwardFeatureCreated(e) {
    const r = {
      name: `${ot}:create`,
      actionType: e.actionType,
      action: e.action,
      shape: e.mode,
      feature: e.featureData,
      map: this.map
    };
    await this.fireToMap({ type: "converted", eventName: "create", payload: r });
  }
  async forwardFeatureRemoved(e) {
    const r = {
      name: `${ot}:remove`,
      actionType: e.actionType,
      action: e.action,
      shape: e.mode,
      feature: e.featureData,
      map: this.map
    };
    await this.fireToMap({ type: "converted", eventName: "remove", payload: r });
  }
  async forwardFeatureUpdated(e) {
    const r = this.getConvertedEditModeName(e.mode), s = ["lasso"], u = {
      name: `${ot}:${r}`,
      actionType: e.actionType,
      action: e.action,
      map: this.map
    };
    e.sourceFeatures.length === 1 && !s.includes(e.mode) ? u.originalFeature = e.sourceFeatures[0] : u.originalFeatures = e.sourceFeatures, e.targetFeatures.length === 1 && !s.includes(e.mode) ? (u.feature = e.targetFeatures[0], u.shape = u.feature.shape) : u.features = e.targetFeatures, await this.fireToMap({ type: "converted", eventName: `${r}`, payload: u });
  }
  async forwardFeatureEditStart(e) {
    const r = this.getConvertedEditModeName(e.mode), s = {
      name: `${ot}:${r}start`,
      actionType: e.actionType,
      action: e.action,
      shape: e.feature.shape,
      feature: e.feature,
      map: this.map
    };
    await this.fireToMap({ type: "converted", eventName: `${r}start`, payload: s });
  }
  async forwardFeatureEditEnd(e) {
    const r = this.getConvertedEditModeName(e.mode), s = {
      name: `${ot}:${r}end`,
      actionType: e.actionType,
      action: e.action,
      shape: e.feature.shape,
      feature: e.feature,
      map: this.map
    };
    await this.fireToMap({ type: "converted", eventName: `${r}end`, payload: s });
  }
  async forwardGeomanLoaded(e) {
    const r = {
      name: `${ot}:${e.action}`,
      actionType: e.actionType,
      action: e.action,
      map: this.map,
      [ot]: this.gm
    };
    await this.fireToMap({
      type: "converted",
      eventName: `${r.action}`,
      payload: r
    });
  }
  async fireToMap({
    type: e,
    eventName: r,
    payload: s
  }) {
    const c = `${e === "system" ? se : ot}:${r}`;
    "feature" in s && s.feature?.source && await s.feature.source.waitForLoad(), this.globalEventsListener?.(s), this.gm.mapAdapter.fire(c, s);
  }
  getConvertedEditModeName(e) {
    return e === "change" ? "edit" : e;
  }
}
const Td = (t) => kn(t) && t.name === `${se}:control:switch`, kn = (t) => !!(t && typeof t == "object" && ["level", "name", "actionType", "action"].every((r) => r in t)), lk = (t) => !!(t && typeof t == "object" && ["type", "originalEvent", "target"].every((r) => r in t));
class ck {
  gm;
  forwarder;
  mapEventHandlers = {};
  gmEventHandlers = {};
  constructor(e) {
    this.gm = e, this.forwarder = new uk(e);
  }
  fireEvent(e, r) {
    const s = this.gmEventHandlers[e];
    if (!s)
      return;
    const { controlHandler: u } = s;
    u(r), this.forwarder.processEvent(e, r).then();
  }
  attachEvents(e) {
    tt(e).forEach((r) => {
      const s = e[r];
      s && this.on(r, s);
    });
  }
  detachEvents(e) {
    tt(e).forEach((r) => {
      const s = e[r];
      s && this.off(r, s);
    });
  }
  detachAllEvents() {
    tt(this.gmEventHandlers).forEach((e) => {
      Array.from(this.gmEventHandlers[e]?.handlers || []).forEach((s) => {
        this.off(e, s);
      });
    }), tt(this.mapEventHandlers).forEach((e) => {
      Array.from(this.mapEventHandlers[e]?.handlers || []).forEach((s) => {
        this.off(e, s);
      });
    });
  }
  on(e, r) {
    e.startsWith(se) ? this.onGmEvent(e, r) : this.onMapEvent(e, r);
  }
  onGmEvent(e, r) {
    this.gmEventHandlers[e] || (this.gmEventHandlers[e] = this.createEventSection(e)), this.gmEventHandlers[e]?.handlers.unshift(r);
  }
  onMapEvent(e, r) {
    if (!this.mapEventHandlers[e]) {
      const s = this.createEventSection(e);
      this.gm.mapAdapter.on(e, s.controlHandler), this.mapEventHandlers[e] = s;
    }
    this.mapEventHandlers[e]?.handlers.unshift(r);
  }
  off(e, r) {
    e.startsWith(`${se}`) ? this.offGmEvent(e, r) : this.offMapEvent(e, r);
  }
  offGmEvent(e, r) {
    const s = this.gmEventHandlers[e]?.handlers || [], u = s.findIndex((c) => r === c);
    u === -1 ? te.warn("MapEvents: handler not found", e, r) : (s.splice(u, 1), s.length === 0 && delete this.gmEventHandlers[e]);
  }
  offMapEvent(e, r) {
    const s = this.mapEventHandlers[e]?.handlers || [], u = s.findIndex((c) => r === c);
    if (u === -1)
      te.warn("MapEvents: handler not found", e, r);
    else if (s.splice(u, 1), s.length === 0) {
      const c = this.mapEventHandlers[e]?.controlHandler;
      c && this.gm.mapAdapter.off(e, c), delete this.mapEventHandlers[e];
    }
  }
  createEventSection(e) {
    return {
      handlers: [],
      controlHandler: (r) => {
        let s;
        if (kn(r) && e.startsWith(`${se}`) ? s = this.gmEventHandlers[e] : s = this.mapEventHandlers[e], !s) {
          te.debug(`No handlers for eventName: "${e}"`);
          return;
        }
        s.handlers.some((u) => {
          let c;
          return kn(r) || lk(r) ? c = u(r) : te.error("EventsBus: unknown event type", r), c && typeof c == "object" && "next" in c ? !c.next : (te.error('EventsBus: handler should return an object with a "next" property'), !1);
        });
      }
    };
  }
}
class bo {
  gm;
  constructor(e) {
    this.gm = e;
  }
  trackExclusiveModes(e) {
    if (e.action !== "mode_start")
      return;
    const { sectionName: r, modeName: s } = this.getControlIds(e) || {};
    this.getControl(e)?.settings.exclusive && this.gm.control.eachControlWithOptions((c) => {
      const f = c.control.type, h = c.control.targetMode;
      f === r && h === s || c.controlOptions.active && c.control.settings.exclusive && this.gm.options.disableMode(f, h);
    });
  }
  trackRelatedModes(e) {
    tc(e) && this.gm.control.eachControlWithOptions((r) => {
      const s = r.control, { type: u, targetMode: c } = s;
      s.settings.enabledBy?.includes(e.mode) && (e.action === "mode_start" ? (this.gm.options.isModeEnabled(u, c) && this.gm.options.disableMode(u, c), this.gm.options.enableMode(u, c)) : e.action === "mode_end" ? this.gm.options.disableMode(u, c) : te.error("Unknown mode action", e.action));
    });
  }
  getControl(e) {
    const { modeName: r, sectionName: s } = this.getControlIds(e) || {};
    return r && s ? this.gm.control.getControl({ modeType: s, modeName: r }) : null;
  }
  getControlOptions(e) {
    const { modeName: r, sectionName: s } = this.getControlIds(e) || {};
    return r && s ? this.gm.options.getControlOptions({ modeType: s, modeName: r }) : null;
  }
  getControlIds(e) {
    let r = null, s = null;
    return e.action === "mode_start" ? (r = e.actionType, s = e.mode) : Td(e) && (r = e.section, s = e.target), r && s ? { sectionName: r, modeName: s } : null;
  }
}
class hk extends bo {
  eventHandlers = {
    [`${se}:control`]: this.handleControlEvent.bind(this)
  };
  constructor(e, r) {
    super(e), r.attachEvents(this.eventHandlers);
  }
  handleControlEvent(e) {
    return Td(e) ? (this.getControl(e) || te.error("Control not found, event payload", e), { next: !0 }) : { next: !0 };
  }
}
const Ad = ["draw", "edit", "helper"], fk = [...Ad, "control"], Wr = [
  // shapes
  "marker",
  "circle",
  "circle_marker",
  "ellipse",
  "text_marker",
  "line",
  "rectangle",
  "polygon"
], gk = [
  "dom_marker",
  "vertex_marker",
  "center_marker",
  "edge_marker",
  "snap_guide"
], Cd = [...Wr, ...gk], dk = ["freehand", "custom_shape"], Nd = [...Wr, ...dk], Pd = [
  "shape_markers",
  "pin",
  "snapping",
  "snap_guides",
  "measurements",
  "auto_trace",
  "geofencing",
  "zoom_to_features",
  "click_to_edit"
], Od = [
  "drag",
  "change",
  "rotate",
  "scale",
  "copy",
  "cut",
  "split",
  "union",
  "difference",
  "line_simplification",
  "lasso",
  "delete"
], pk = (t) => Array.isArray(t) && t.length === 2 && typeof t[0] == "number" && typeof t[1] == "number", xa = {
  id: (t) => typeof t == "string" || typeof t == "number",
  shape: (t) => typeof t == "string" && Tr(t, Cd),
  center: (t) => pk(t),
  xSemiAxis: (t) => typeof t == "number",
  ySemiAxis: (t) => typeof t == "number",
  angle: (t) => typeof t == "number",
  text: (t) => typeof t == "string",
  disableEdit: (t) => typeof t == "boolean"
};
class Dl {
  isMarkerInstanceAvailable() {
    return this.markerInstance ? !0 : (te.error("Marker instance is not available"), !1);
  }
}
var at = 63710088e-1, Rd = {
  centimeters: at * 100,
  centimetres: at * 100,
  degrees: 360 / (2 * Math.PI),
  feet: at * 3.28084,
  inches: at * 39.37,
  kilometers: at / 1e3,
  kilometres: at / 1e3,
  meters: at,
  metres: at,
  miles: at / 1609.344,
  millimeters: at * 1e3,
  millimetres: at * 1e3,
  nauticalmiles: at / 1852,
  radians: 1,
  yards: at * 1.0936
};
function Sn(t, e, r = {}) {
  const s = { type: "Feature" };
  return (r.id === 0 || r.id) && (s.id = r.id), r.bbox && (s.bbox = r.bbox), s.properties = e || {}, s.geometry = t, s;
}
function zn(t, e, r = {}) {
  if (!t)
    throw new Error("coordinates is required");
  if (!Array.isArray(t))
    throw new Error("coordinates must be an Array");
  if (t.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!eo(t[0]) || !eo(t[1]))
    throw new Error("coordinates must contain numbers");
  return Sn({
    type: "Point",
    coordinates: t
  }, e, r);
}
function or(t, e, r = {}) {
  for (const u of t) {
    if (u.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (u[u.length - 1].length !== u[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let c = 0; c < u[u.length - 1].length; c++)
      if (u[u.length - 1][c] !== u[0][c])
        throw new Error("First and last Position are not equivalent.");
  }
  return Sn({
    type: "Polygon",
    coordinates: t
  }, e, r);
}
function Hi(t, e, r = {}) {
  if (t.length < 2)
    throw new Error("coordinates must be an array of two or more positions");
  return Sn({
    type: "LineString",
    coordinates: t
  }, e, r);
}
function nt(t, e = {}) {
  const r = { type: "FeatureCollection" };
  return e.id && (r.id = e.id), e.bbox && (r.bbox = e.bbox), r.features = t, r;
}
function mk(t, e, r = {}) {
  return Sn({
    type: "MultiLineString",
    coordinates: t
  }, e, r);
}
function Fl(t, e, r = {}) {
  return Sn({
    type: "MultiPolygon",
    coordinates: t
  }, e, r);
}
function Gl(t, e = "kilometers") {
  const r = Rd[e];
  if (!r)
    throw new Error(e + " units is invalid");
  return t * r;
}
function Bl(t, e = "kilometers") {
  const r = Rd[e];
  if (!r)
    throw new Error(e + " units is invalid");
  return t / r;
}
function ei(t) {
  return t % (2 * Math.PI) * 180 / Math.PI;
}
function ut(t) {
  return t % 360 * Math.PI / 180;
}
function Dd(t, e = "kilometers", r = "kilometers") {
  if (!(t >= 0))
    throw new Error("length must be a positive number");
  return Gl(Bl(t, e), r);
}
function eo(t) {
  return !isNaN(t) && t !== null && !Array.isArray(t);
}
function Lo(t) {
  return t !== null && typeof t == "object" && !Array.isArray(t);
}
function Nr(t, e, r) {
  if (t !== null)
    for (var s, u, c, f, h, p, d, v = 0, _ = 0, x, M = t.type, S = M === "FeatureCollection", C = M === "Feature", F = S ? t.features.length : 1, O = 0; O < F; O++) {
      d = S ? t.features[O].geometry : C ? t.geometry : t, x = d ? d.type === "GeometryCollection" : !1, h = x ? d.geometries.length : 1;
      for (var I = 0; I < h; I++) {
        var H = 0, X = 0;
        if (f = x ? d.geometries[I] : d, f !== null) {
          p = f.coordinates;
          var J = f.type;
          switch (v = r && (J === "Polygon" || J === "MultiPolygon") ? 1 : 0, J) {
            case null:
              break;
            case "Point":
              if (e(
                p,
                _,
                O,
                H,
                X
              ) === !1)
                return !1;
              _++, H++;
              break;
            case "LineString":
            case "MultiPoint":
              for (s = 0; s < p.length; s++) {
                if (e(
                  p[s],
                  _,
                  O,
                  H,
                  X
                ) === !1)
                  return !1;
                _++, J === "MultiPoint" && H++;
              }
              J === "LineString" && H++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (s = 0; s < p.length; s++) {
                for (u = 0; u < p[s].length - v; u++) {
                  if (e(
                    p[s][u],
                    _,
                    O,
                    H,
                    X
                  ) === !1)
                    return !1;
                  _++;
                }
                J === "MultiLineString" && H++, J === "Polygon" && X++;
              }
              J === "Polygon" && H++;
              break;
            case "MultiPolygon":
              for (s = 0; s < p.length; s++) {
                for (X = 0, u = 0; u < p[s].length; u++) {
                  for (c = 0; c < p[s][u].length - v; c++) {
                    if (e(
                      p[s][u][c],
                      _,
                      O,
                      H,
                      X
                    ) === !1)
                      return !1;
                    _++;
                  }
                  X++;
                }
                H++;
              }
              break;
            case "GeometryCollection":
              for (s = 0; s < f.geometries.length; s++)
                if (Nr(f.geometries[s], e, r) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Vn(t, e) {
  if (t.type === "Feature")
    e(t, 0);
  else if (t.type === "FeatureCollection")
    for (var r = 0; r < t.features.length && e(t.features[r], r) !== !1; r++)
      ;
}
function vk(t, e, r) {
  var s = r;
  return Vn(t, function(u, c) {
    c === 0 && r === void 0 ? s = u : s = e(s, u, c);
  }), s;
}
function Pr(t, e) {
  var r, s, u, c, f, h, p, d, v, _, x = 0, M = t.type === "FeatureCollection", S = t.type === "Feature", C = M ? t.features.length : 1;
  for (r = 0; r < C; r++) {
    for (h = M ? t.features[r].geometry : S ? t.geometry : t, d = M ? t.features[r].properties : S ? t.properties : {}, v = M ? t.features[r].bbox : S ? t.bbox : void 0, _ = M ? t.features[r].id : S ? t.id : void 0, p = h ? h.type === "GeometryCollection" : !1, f = p ? h.geometries.length : 1, u = 0; u < f; u++) {
      if (c = p ? h.geometries[u] : h, c === null) {
        if (e(
          null,
          x,
          d,
          v,
          _
        ) === !1)
          return !1;
        continue;
      }
      switch (c.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (e(
            c,
            x,
            d,
            v,
            _
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (s = 0; s < c.geometries.length; s++)
            if (e(
              c.geometries[s],
              x,
              d,
              v,
              _
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    x++;
  }
}
function yk(t, e, r) {
  var s = r;
  return Pr(
    t,
    function(u, c, f, h, p) {
      s = e(
        s,
        u,
        c,
        f,
        h,
        p
      );
    }
  ), s;
}
function Cr(t, e) {
  Pr(t, function(r, s, u, c, f) {
    var h = r === null ? null : r.type;
    switch (h) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Sn(r, u, { bbox: c, id: f }),
          s,
          0
        ) === !1 ? !1 : void 0;
    }
    var p;
    switch (h) {
      case "MultiPoint":
        p = "Point";
        break;
      case "MultiLineString":
        p = "LineString";
        break;
      case "MultiPolygon":
        p = "Polygon";
        break;
    }
    for (var d = 0; d < r.coordinates.length; d++) {
      var v = r.coordinates[d], _ = {
        type: p,
        coordinates: v
      };
      if (e(Sn(_, u), s, d) === !1)
        return !1;
    }
  });
}
function Bn(t, e = {}) {
  if (t.bbox != null && e.recompute !== !0)
    return t.bbox;
  const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Nr(t, (s) => {
    r[0] > s[0] && (r[0] = s[0]), r[1] > s[1] && (r[1] = s[1]), r[2] < s[0] && (r[2] = s[0]), r[3] < s[1] && (r[3] = s[1]);
  }), r;
}
var Fd = Bn;
function Qe(t) {
  if (!t)
    throw new Error("coord is required");
  if (!Array.isArray(t)) {
    if (t.type === "Feature" && t.geometry !== null && t.geometry.type === "Point")
      return [...t.geometry.coordinates];
    if (t.type === "Point")
      return [...t.coordinates];
  }
  if (Array.isArray(t) && t.length >= 2 && !Array.isArray(t[0]) && !Array.isArray(t[1]))
    return [...t];
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function qt(t) {
  if (Array.isArray(t))
    return t;
  if (t.type === "Feature") {
    if (t.geometry !== null)
      return t.geometry.coordinates;
  } else if (t.coordinates)
    return t.coordinates;
  throw new Error(
    "coords must be GeoJSON Feature, Geometry Object or an Array"
  );
}
function ta(t) {
  return t.type === "Feature" ? t.geometry : t;
}
function Hh(t, e) {
  return t.type === "FeatureCollection" ? "FeatureCollection" : t.type === "GeometryCollection" ? "GeometryCollection" : t.type === "Feature" && t.geometry !== null ? t.geometry.type : t.type;
}
function Gd(t, e, r, s = {}) {
  const u = Qe(t), c = ut(u[0]), f = ut(u[1]), h = ut(r), p = Bl(e, s.units), d = Math.asin(
    Math.sin(f) * Math.cos(p) + Math.cos(f) * Math.sin(p) * Math.cos(h)
  ), v = c + Math.atan2(
    Math.sin(h) * Math.sin(p) * Math.cos(f),
    Math.cos(p) - Math.sin(f) * Math.sin(d)
  ), _ = ei(v), x = ei(d);
  return zn([_, x], s.properties);
}
function _k(t, e, r = {}) {
  const s = r.steps || 64, u = r.properties ? r.properties : !Array.isArray(t) && t.type === "Feature" && t.properties ? t.properties : {}, c = [];
  for (let f = 0; f < s; f++)
    c.push(
      Gd(t, e, f * -360 / s, r).geometry.coordinates
    );
  return c.push(c[0]), or([c], u);
}
var Ek = _k;
function Bd(t, e = {}) {
  let r = 0, s = 0, u = 0;
  return Nr(
    t,
    function(c) {
      r += c[0], s += c[1], u++;
    },
    !0
  ), zn([r / u, s / u], e.properties);
}
var Ud = Bd;
function xk(t, e, r = {}) {
  let s;
  return r.final ? s = Jh(Qe(e), Qe(t)) : s = Jh(Qe(t), Qe(e)), s > 180 ? -(360 - s) : s;
}
function Jh(t, e) {
  const r = ut(t[1]), s = ut(e[1]);
  let u = ut(e[0] - t[0]);
  u > Math.PI && (u -= 2 * Math.PI), u < -Math.PI && (u += 2 * Math.PI);
  const c = Math.log(
    Math.tan(s / 2 + Math.PI / 4) / Math.tan(r / 2 + Math.PI / 4)
  ), f = Math.atan2(u, c);
  return (ei(f) + 360) % 360;
}
function wk(t, e, r = {}) {
  const s = Qe(t), u = Qe(e);
  u[0] += u[0] - s[0] > 180 ? -360 : s[0] - u[0] > 180 ? 360 : 0;
  const c = kk(s, u);
  return Dd(c, "meters", r.units);
}
function kk(t, e, r) {
  r = r === void 0 ? at : Number(r);
  const s = r, u = t[1] * Math.PI / 180, c = e[1] * Math.PI / 180, f = c - u;
  let h = Math.abs(e[0] - t[0]) * Math.PI / 180;
  h > Math.PI && (h -= 2 * Math.PI);
  const p = Math.log(
    Math.tan(c / 2 + Math.PI / 4) / Math.tan(u / 2 + Math.PI / 4)
  ), d = Math.abs(p) > 1e-11 ? f / p : Math.cos(u);
  return Math.sqrt(
    f * f + d * d * h * h
  ) * s;
}
function Sk(t, e, r, s = {}) {
  const u = e < 0;
  let c = Dd(
    Math.abs(e),
    s.units,
    "meters"
  );
  u && (c = -Math.abs(c));
  const f = Qe(t), h = Mk(
    f,
    c,
    r
  );
  return h[0] += h[0] - f[0] > 180 ? -360 : f[0] - h[0] > 180 ? 360 : 0, zn(h, s.properties);
}
function Mk(t, e, r, s) {
  s = s === void 0 ? at : Number(s);
  const u = e / s, c = t[0] * Math.PI / 180, f = ut(t[1]), h = ut(r), p = u * Math.cos(h);
  let d = f + p;
  Math.abs(d) > Math.PI / 2 && (d = d > 0 ? Math.PI - d : -Math.PI - d);
  const v = Math.log(
    Math.tan(d / 2 + Math.PI / 4) / Math.tan(f / 2 + Math.PI / 4)
  ), _ = Math.abs(v) > 1e-11 ? p / v : Math.cos(f), x = u * Math.sin(h) / _;
  return [
    ((c + x) * 180 / Math.PI + 540) % 360 - 180,
    d * 180 / Math.PI
  ];
}
function To(t) {
  if (!t)
    throw new Error("geojson is required");
  switch (t.type) {
    case "Feature":
      return zd(t);
    case "FeatureCollection":
      return Ik(t);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return Ul(t);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function zd(t) {
  const e = { type: "Feature" };
  return Object.keys(t).forEach((r) => {
    switch (r) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        e[r] = t[r];
    }
  }), e.properties = qd(t.properties), t.geometry == null ? e.geometry = null : e.geometry = Ul(t.geometry), e;
}
function qd(t) {
  const e = {};
  return t && Object.keys(t).forEach((r) => {
    const s = t[r];
    typeof s == "object" ? s === null ? e[r] = null : Array.isArray(s) ? e[r] = s.map((u) => u) : e[r] = qd(s) : e[r] = s;
  }), e;
}
function Ik(t) {
  const e = { type: "FeatureCollection" };
  return Object.keys(t).forEach((r) => {
    switch (r) {
      case "type":
      case "features":
        return;
      default:
        e[r] = t[r];
    }
  }), e.features = t.features.map((r) => zd(r)), e;
}
function Ul(t) {
  const e = { type: t.type };
  return t.bbox && (e.bbox = t.bbox), t.type === "GeometryCollection" ? (e.geometries = t.geometries.map((r) => Ul(r)), e) : (e.coordinates = Yd(t.coordinates), e);
}
function Yd(t) {
  const e = t;
  return typeof e[0] != "object" ? e.slice() : e.map((r) => Yd(r));
}
var Hd = To;
function Jd(t, e, r) {
  if (r = r || {}, !Lo(r)) throw new Error("options is invalid");
  const s = r.pivot, u = r.mutate;
  if (!t) throw new Error("geojson is required");
  if (e == null || isNaN(e))
    throw new Error("angle is required");
  if (e === 0) return t;
  const c = s ?? Bd(t);
  return (u === !1 || u === void 0) && (t = To(t)), Nr(t, function(f) {
    const p = xk(c, f) + e, d = wk(c, f), v = qt(
      Sk(c, d, p)
    );
    f[0] = v[0], f[1] = v[1];
  }), t;
}
var bk = Jd;
function $h(t, e, r, s) {
  s = s || {};
  let u = s.steps || 64;
  const c = s.units || "kilometers";
  let f = s.angle || 0;
  const h = s.pivot || t, p = s.properties || {};
  if (!t) throw new Error("center is required");
  if (!e) throw new Error("xSemiAxis is required");
  if (!r) throw new Error("ySemiAxis is required");
  if (!Lo(s)) throw new Error("options must be an object");
  if (!eo(u)) throw new Error("steps must be a number");
  if (!eo(f)) throw new Error("angle must be a number");
  const d = Qe(Jd(zn(Qe(t)), f, { pivot: h }));
  f = -90 + f, u = Math.ceil(u / 4);
  const v = [], _ = [], x = e, M = r, S = M, C = (x - M) / (Math.PI / 2), F = (x + M) * Math.PI / 4, O = 0.5, I = u;
  let H = 0, X = 0;
  for (let U = 0; U < u; U++)
    X += H, C === 0 ? H = F / I / S : H = (-(C * X + S) + Math.sqrt(Math.pow(C * X + S, 2) - 4 * (O * C) * -(F / I))) / (2 * (O * C)), X != 0 && v.push(X);
  _.push(0);
  for (let U = 0; U < v.length; U++)
    _.push(v[U]);
  _.push(Math.PI / 2);
  for (let U = 0; U < v.length; U++)
    _.push(Math.PI - v[v.length - U - 1]);
  _.push(Math.PI);
  for (let U = 0; U < v.length; U++)
    _.push(Math.PI + v[U]);
  _.push(3 * Math.PI / 2);
  for (let U = 0; U < v.length; U++)
    _.push(2 * Math.PI - v[v.length - U - 1]);
  _.push(0);
  const J = [];
  for (const U of _) {
    const W = Math.atan2(M * Math.sin(U), x * Math.cos(U)), E = Math.sqrt(
      Math.pow(x, 2) * Math.pow(M, 2) / (Math.pow(x * Math.sin(W), 2) + Math.pow(M * Math.cos(W), 2))
    );
    J.push(
      Gd(d, E, f + ei(W), {
        units: c
      }).geometry.coordinates
    );
  }
  return or([J], p);
}
function $d(t, e, r = {}) {
  if (r.final === !0)
    return Lk(t, e);
  const s = Qe(t), u = Qe(e), c = ut(s[0]), f = ut(u[0]), h = ut(s[1]), p = ut(u[1]), d = Math.sin(f - c) * Math.cos(p), v = Math.cos(h) * Math.sin(p) - Math.sin(h) * Math.cos(p) * Math.cos(f - c);
  return ei(Math.atan2(d, v));
}
function Lk(t, e) {
  let r = $d(e, t);
  return r = (r + 180) % 360, r;
}
var to = $d;
function zt(t, e, r = {}) {
  var s = Qe(t), u = Qe(e), c = ut(u[1] - s[1]), f = ut(u[0] - s[0]), h = ut(s[1]), p = ut(u[1]), d = Math.pow(Math.sin(c / 2), 2) + Math.pow(Math.sin(f / 2), 2) * Math.cos(h) * Math.cos(p);
  return Gl(
    2 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d)),
    r.units
  );
}
var Vd = zt;
function Ju(t, e = {}) {
  const r = ta(t);
  switch (!e.properties && t.type === "Feature" && (e.properties = t.properties), r.type) {
    case "Polygon":
      return Xd(r, e);
    case "MultiPolygon":
      return Wd(r, e);
    default:
      throw new Error("invalid poly");
  }
}
function Xd(t, e = {}) {
  const s = ta(t).coordinates, u = e.properties ? e.properties : t.type === "Feature" ? t.properties : {};
  return jd(s, u);
}
function Wd(t, e = {}) {
  const s = ta(t).coordinates, u = e.properties ? e.properties : t.type === "Feature" ? t.properties : {}, c = [];
  return s.forEach((f) => {
    c.push(jd(f, u));
  }), nt(c);
}
function jd(t, e) {
  return t.length > 1 ? mk(t, e) : Hi(t[0], e);
}
const Vh = (t, e) => t[0] === e[0] && t[1] === e[1], Ds = (t) => t.type === "Feature" && t.geometry.type === "LineString", Xh = (t) => t.type === "Feature" && t.geometry.type === "MultiLineString", zl = (t) => t.type === "Feature" && t.geometry.type === "Polygon", ql = (t) => t.type === "Feature" && t.geometry.type === "MultiPolygon", Wh = (t) => ({
  type: "FeatureCollection",
  features: t.geometry.coordinates.map((e) => ({
    type: "Feature",
    properties: t.properties,
    geometry: {
      type: "LineString",
      coordinates: e
    }
  }))
}), uu = (t, e) => ({
  lng: e[0] - t[0],
  lat: e[1] - t[1]
}), no = (t) => Array.isArray(t) && t.length >= 2 && t.length <= 3 && t.every((e) => typeof e == "number"), na = (t, e, r = !1) => {
  let s = 0;
  const u = ["features", "geometries", "geometry", "coordinates"], c = (f, h, p = !1) => {
    no(f) ? (e({ coordinate: f, path: h }, s), s += 1) : Array.isArray(f) ? f.forEach((d, v) => {
      p && r && v === f.length - 1 && no(d) || c(d, [...h, v], p);
    }) : typeof f == "object" && f !== null && tt(f).forEach((d) => {
      const v = f[d];
      if (u.includes(d) && v) {
        const _ = "type" in f && f.type, x = _ === "Polygon" || _ === "MultiPolygon";
        c(v, [...h, d], x);
      }
    });
  };
  c(t, []);
}, Tk = (t, e) => {
  let r = { coordinate: [0, 0], path: [] }, s = -1;
  try {
    na(t, (u, c) => {
      if (e[0] === u.coordinate[0] && e[1] === u.coordinate[1])
        throw s = c, r = u, new Error("stop");
    });
  } catch {
    if (r)
      return {
        index: s,
        coordinate: r.coordinate,
        path: r.path
      };
  }
  return null;
}, Yl = (t, e) => {
  let r = 0;
  const s = ["features", "geometries", "geometry", "coordinates"], u = (c, f, h, p) => {
    no(c) && no(f) ? (e(
      {
        start: { coordinate: [...c], path: h },
        end: { coordinate: [...f], path: p }
      },
      r
    ), r += 1) : Array.isArray(c) ? c.forEach((d, v) => {
      u(
        d,
        c[v + 1],
        [...h, v],
        [...h, v + 1]
      );
    }) : typeof c == "object" && c !== null && tt(c).forEach((d) => {
      const v = c[d];
      s.includes(d) && v && u(v, void 0, [...h, d], []);
    });
  };
  u(t, void 0, [], []);
}, Ao = (t, e) => {
  let r = {
    absCoordIndex: -1,
    featureIndex: -1,
    multiFeatureIndex: -1,
    geometryIndex: -1
  };
  try {
    Nr(
      t,
      (s, u, c, f, h) => {
        if (s[0] === e[0] && s[1] === e[1])
          throw r = { absCoordIndex: u, featureIndex: c, multiFeatureIndex: f, geometryIndex: h }, new Error("found");
      }
    );
  } catch {
  }
  return r;
}, fI = (t, e, r = {}) => ({
  type: "Feature",
  properties: r,
  geometry: {
    type: "LineString",
    coordinates: [t, e]
  }
}), bi = (t, e) => {
  const [r, s] = t, [u, c] = e, f = Math.min(r, u), h = Math.min(s, c), p = Math.max(r, u), d = Math.max(s, c);
  return [f, h, p, d];
}, $u = (t, e) => {
  const r = bi(t, e), s = [r[0], r[1]], u = [r[2], r[3]], c = s[0], f = s[1], h = u[0], p = u[1];
  return {
    type: "Feature",
    properties: {
      shape: "rectangle"
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [c, f],
          [h, f],
          [h, p],
          [c, p],
          [c, f]
        ]
      ]
    }
  };
}, Zd = (t) => [t.geometry.coordinates[0], t.geometry.coordinates[1]], Hl = (t) => {
  const e = Fd(t);
  return [
    [e[0], e[1]],
    // South-West (min-x, min-y)
    [e[2], e[3]]
    // North-East (max-x, max-y)
  ];
}, Ak = (t) => [t[0][0], t[0][1], t[1][0], t[1][1]], Ck = (t, e) => {
  const [r, s, u, c] = t, [f, h] = e;
  return f >= r && f <= u && h >= s && h <= c;
}, gI = (t, e) => {
  const r = Ak(t);
  return Ck(r, e);
}, lu = (t) => {
  let e = 0;
  return Nr(
    t,
    () => {
      e += 1;
    },
    !0
  ), e;
}, Nk = (t) => {
  const e = [];
  return Nr(
    t,
    (r) => {
      e.push([r[0], r[1]]);
    },
    !0
  ), e;
}, Jl = (t) => {
  const e = Nk(t);
  return e.some((r) => !Wi(e[0], r));
}, Kd = (t) => {
  let e = null;
  try {
    na(t, (r) => {
      throw e = r.coordinate, new Error("found");
    });
  } catch {
    return e;
  }
  return null;
}, Ga = (t, e) => Math.sqrt((t[0] - e[0]) ** 2 + (t[1] - e[1]) ** 2), Pk = (t, e, r) => {
  const [s, u] = [t[0], t[1]], [c, f] = [e[0], e[1]], [h, p] = [r[0], r[1]], d = c - s, v = f - u, _ = h - s, x = p - u, M = _ * d + x * v, S = d * d + v * v;
  let C = M / S;
  return C = Math.max(0, Math.min(1, C)), [s + C * d, u + C * v];
}, Ok = (t, e) => {
  const { absCoordIndex: r } = Ao(t, e);
  return r !== -1 ? (t.geometry.coordinates.splice(r, 1), !0) : !1;
}, Rk = (t, e) => {
  const r = Ao(t, e);
  if (r.absCoordIndex !== -1) {
    const s = [r.geometryIndex], u = Bi(
      t.geometry.coordinates,
      s
    ), c = u.findIndex((f) => Wi(f, e));
    return u.length <= 4 ? (t.geometry.coordinates.splice(r.geometryIndex, 1), !0) : (u.splice(c, 1), c === 0 && (u[u.length - 1] = [...u[0]]), !0);
  }
  return !1;
}, Dk = (t, e) => {
  const r = Ao(t, e);
  if (r.absCoordIndex !== -1) {
    const s = [
      r.multiFeatureIndex,
      r.geometryIndex
    ], u = Bi(
      t.geometry.coordinates,
      s
    ), c = u.findIndex((f) => Wi(f, e));
    if (u.length <= 4) {
      s.pop();
      const f = Bi(
        t.geometry.coordinates,
        r.multiFeatureIndex
      );
      return f.splice(r.geometryIndex, 1), f.length === 0 && t.geometry.coordinates.splice(r.multiFeatureIndex, 1), !0;
    }
    return u.splice(c, 1), c === 0 && (u[u.length - 1] = [...u[0]]), !0;
  }
  return !1;
}, Fk = (t, e) => Ds(t) ? Ok(t, e) : zl(t) ? Rk(t, e) : ql(t) ? Dk(t, e) : !1, dI = (t) => {
  let e = 0;
  return Yl(t, (r) => {
    e += zt(r.start.coordinate, r.end.coordinate, {
      units: "meters"
    });
  }), e;
}, pI = (t) => {
  const e = {
    type: "FeatureCollection",
    features: []
  };
  return t.features.forEach((r) => {
    if (Ds(r))
      e.features.push(r);
    else if (zl(r)) {
      const s = Xd(r);
      Ds(s) ? e.features.push(s) : Xh(s) && Wh(s).features.forEach((c) => {
        e.features.push(c);
      });
    } else ql(r) ? Wd(r).features.forEach((u) => {
      Ds(u) ? e.features.push(u) : Xh(u) && Wh(u).features.forEach((f) => {
        e.features.push(f);
      });
    }) : te.warn("AutoTraceHelper.getFeaturesGeoJsonAsLines: Feature is not supported", r);
  }), e;
}, Gk = (t, e = "marker") => ({
  type: "Feature",
  properties: {
    shape: e
  },
  geometry: {
    type: "Point",
    coordinates: t
  }
}), $l = ({
  center: t,
  radius: e,
  steps: r = 80
}) => {
  const s = Ek(t, e, {
    steps: r,
    units: "meters"
  });
  return s.geometry.coordinates[0][0] = [...s.geometry.coordinates[0][0]], s;
}, jh = ({
  center: t,
  xSemiAxisLngLat: e,
  rimLngLat: r
}) => {
  let s = zt(t, e, { units: "meters" });
  s === 0 && (s = 1);
  const u = to(t, e) - 90;
  let c = 0;
  if (r) {
    const h = -u * Math.PI / 180, d = -(to(t, r) - 90) * Math.PI / 180, v = zt(t, r, { units: "meters" }), _ = v * Math.cos(d), x = v * Math.sin(d), M = _ * Math.cos(h) + x * Math.sin(h), S = _ * -Math.sin(h) + x * Math.cos(h), C = M * M / (s * s);
    c = Math.abs(S) / Math.sqrt(1 - C), isNaN(c) && (c = 0);
  }
  return {
    xSemiAxis: s,
    ySemiAxis: c,
    angle: u
  };
}, Qd = 80, Co = ({
  center: t,
  xSemiAxis: e,
  ySemiAxis: r,
  angle: s,
  properties: u = {}
}) => {
  const c = {
    steps: Qd,
    angle: s,
    units: "meters"
  };
  if (r === void 0 || r === 0) {
    const h = $h(t, e, 1, c);
    return Hi(h.geometry.coordinates[0].slice(0, 41), {
      shape: "line"
    });
  }
  const f = $h(t, e, r, {
    ...c,
    properties: {
      ...u,
      [`${It}shape`]: "ellipse",
      [`${It}center`]: t,
      [`${It}xSemiAxis`]: e,
      [`${It}ySemiAxis`]: r,
      [`${It}angle`]: s
    }
  });
  return f.geometry.coordinates[0][0] = [...f.geometry.coordinates[0][0]], f;
}, Bk = [
  "circle",
  "ellipse",
  "rectangle"
];
class ro {
  gm;
  id = "no-id";
  parent = null;
  markers;
  source;
  _geoJson = null;
  constructor(e) {
    this.gm = e.gm, this.id = e.id, this.source = e.source, this.parent = e.parent, this.markers = /* @__PURE__ */ new Map(), this.addGeoJson({
      ...e.geoJsonShapeFeature,
      properties: {
        ...this.parseExtraProperties(e.geoJsonShapeFeature),
        ...this.parseGmShapeProperties(e.geoJsonShapeFeature)
      }
    });
  }
  get shape() {
    const e = this.getShapeProperty("shape");
    if (typeof e == "string" && Tr(e, Cd))
      return e;
    throw new Error(`Wrong shape type: "${e}"`);
  }
  set shape(e) {
    this.setShapeProperty("shape", e);
  }
  get temporary() {
    return this.source.id === K.temporary;
  }
  get sourceName() {
    return this.source.id;
  }
  getShapeProperty(e, r) {
    const s = r?.properties || this._geoJson?.properties || {}, u = xa[e], c = s[`${It}${e}`] ?? s[e];
    if (u && u(c))
      return c;
  }
  setShapeProperty(e, r) {
    if (!this._geoJson) {
      te.error("FeatureData.setShapeProperty(): geojson is not set");
      return;
    }
    this._geoJson.properties[`${It}${e}`] = r, this.updateGeoJsonProperties(this._geoJson.properties);
  }
  deleteShapeProperty(e) {
    if (!this._geoJson) {
      te.error("FeatureData.deleteShapeProperty(): geojson is not set");
      return;
    }
    delete this._geoJson.properties[`${It}${e}`], this.updateGeoJsonProperties(this._geoJson.properties);
  }
  parseGmShapeProperties(e) {
    const r = this.getShapeProperty("shape", e) || this.gm.features.getFeatureShapeByGeoJson(e);
    r || te.error(`FeatureData.importGmShapeProperties(): unknown shape: ${r}`);
    const u = {
      ...Object.fromEntries(
        tt(xa).map((c) => [c, this.getShapeProperty(c, e)])
      ),
      id: this.id,
      shape: r || void 0
    };
    return Object.fromEntries(
      tt(u).filter((c) => u[c] !== void 0).map((c) => [`${It}${c}`, u[c]])
    );
  }
  parseExtraProperties(e) {
    const r = sn(e.properties) || {};
    return tt(xa).forEach((s) => {
      delete r[s], delete r[`${It}${s}`];
    }), r;
  }
  getGeoJson() {
    if (this._geoJson)
      return this._geoJson;
    throw new Error(`Missing GeoJSON for feature: "${this.shape}:${this.id}"`);
  }
  addGeoJson(e) {
    this._geoJson = {
      ...e,
      id: this.id
    }, this.updateGeoJsonCenter(this._geoJson), this.gm.features.updateManager.updateSource({
      diff: { add: [this._geoJson] },
      sourceName: this.sourceName
    });
  }
  removeGeoJson() {
    if (!this._geoJson)
      throw new Error(`Feature not found: "${this.id}"`);
    this.gm.features.updateManager.updateSource({
      diff: { remove: [this.id] },
      sourceName: this.sourceName
    });
  }
  removeMarkers() {
    this.markers.forEach((e) => {
      e.instance instanceof Dl ? e.instance.remove() : this.gm.features.delete(e.instance);
    }), this.markers = /* @__PURE__ */ new Map();
  }
  updateGeoJsonGeometry(e) {
    const r = this.getGeoJson();
    if (!r)
      throw new Error(`Feature not found: "${this.id}"`);
    this._geoJson = { ...r, geometry: e };
    const s = {
      update: [this._geoJson]
    };
    this.gm.features.updateManager.updateSource({
      diff: s,
      sourceName: this.sourceName
    });
  }
  updateGeoJsonProperties(e) {
    if (!this._geoJson)
      throw new Error(`Feature not found: "${this.id}"`);
    this._geoJson.properties = { ...this._geoJson.properties, ...e };
    const r = { update: [this._geoJson] };
    this.gm.features.updateManager.updateSource({
      diff: r,
      sourceName: this.sourceName
    });
  }
  setGeoJsonCustomProperties(e) {
    if (!this._geoJson)
      throw new Error(`Feature not found: "${this.id}"`);
    const r = this.parseGmShapeProperties(this._geoJson);
    this._geoJson.properties = { ...e, ...r };
    const s = { update: [this._geoJson] };
    this.gm.features.updateManager.updateSource({
      diff: s,
      sourceName: this.sourceName
    });
  }
  updateGeoJsonCustomProperties(e) {
    if (!this._geoJson)
      throw new Error(`Feature not found: "${this.id}"`);
    const r = this.parseGmShapeProperties(this._geoJson);
    this._geoJson.properties = {
      ...this._geoJson.properties,
      ...e,
      ...r
    };
    const s = { update: [this._geoJson] };
    this.gm.features.updateManager.updateSource({
      diff: s,
      sourceName: this.sourceName
    });
  }
  deleteGeoJsonCustomProperties(e) {
    if (!this._geoJson)
      throw new Error(`Feature not found: "${this.id}"`);
    const r = tt(xa).map(
      (f) => `${It}${f}`
    ), s = e.filter((f) => !r.includes(f)), u = { ...this._geoJson.properties };
    s.forEach((f) => {
      delete this._geoJson.properties[f], u[f] = void 0;
    });
    const c = { update: [{ ...this._geoJson, properties: u }] };
    this.gm.features.updateManager.updateSource({
      diff: c,
      sourceName: this.sourceName
    });
  }
  updateGeoJsonCenter(e) {
    if (this.shape === "circle") {
      const r = Zd(Ud(e));
      this.setShapeProperty("center", r);
    }
  }
  convertToPolygon() {
    return this.isConvertableToPolygon() ? (this.shape = "polygon", this.deleteShapeProperty("center"), this.deleteShapeProperty("angle"), this.deleteShapeProperty("xSemiAxis"), this.deleteShapeProperty("ySemiAxis"), !0) : !1;
  }
  isConvertableToPolygon() {
    return Bk.includes(this.shape);
  }
  // changeSource({ sourceName, atomic }: { sourceName: FeatureSourceName; atomic: boolean }) {
  //   if (atomic) {
  //     this.gm.features.updateManager.withAtomicSourcesUpdate(() =>
  //       this.actualChangeSource({ sourceName, atomic }),
  //     );
  //   } else {
  //     this.actualChangeSource({ sourceName, atomic });
  //   }
  // }
  changeSource({ sourceName: e, atomic: r }) {
    if (this.source.id === e) {
      te.error(
        `FeatureData.changeSource: feature "${this.id}" already has the source "${e}"`
      );
      return;
    }
    const s = this.gm.features.sources[e];
    if (!s) {
      te.error(`FeatureData.changeSource: missing source "${e}"`);
      return;
    }
    const u = this.getGeoJson();
    if (!u) {
      te.error("FeatureData.changeSource: missing shape GeoJSON");
      return;
    }
    this.removeGeoJson(), this.source = s, this.addGeoJson(u), this.markers.forEach((c) => {
      c.instance instanceof ro && c.instance.changeSource({ sourceName: e, atomic: r });
    });
  }
  fireFeatureUpdatedEvent({ mode: e }) {
    const r = {
      name: `${se}:edit:feature_updated`,
      level: "system",
      actionType: "edit",
      action: "feature_updated",
      mode: e,
      sourceFeatures: [this],
      targetFeatures: [this],
      markerData: null
    };
    this.gm.events.fire(`${se}:edit`, r);
  }
  delete() {
    this.removeGeoJson(), this.removeMarkers();
  }
}
const Vl = (t) => kn(t) && t.actionType === "helper", Uk = (t) => kn(t) && t.name === `${se}:helper:geofencing_violation`;
class Xl {
  gm;
  options = {};
  settings = {};
  actions = {};
  flags = {
    featureCreateAllowed: !0,
    featureUpdateAllowed: !0,
    actionInProgress: !1
  };
  internalEventHandlers = {
    [`${se}:helper`]: this.handleHelperEvent.bind(this)
  };
  constructor(e) {
    this.gm = e;
  }
  get snappingHelper() {
    return this.gm.actionInstances.helper__snapping || null;
  }
  startAction() {
    this.gm.events.bus.attachEvents(this.internalEventHandlers), this.gm.events.bus.attachEvents(this.eventHandlers), this.onStartAction();
  }
  endAction() {
    this.onEndAction(), this.gm.events.bus.detachEvents(this.eventHandlers), this.gm.events.bus.detachEvents(this.internalEventHandlers);
  }
  getOptionValue(e) {
    const r = this.options[e];
    if (!r)
      throw new Error(`Option ${e} not found`);
    if (["toggle", "hidden"].includes(r.type))
      return r.value;
    if (r.type === "select")
      return r.value.value;
    throw new Error(`Unknown option type: ${JSON.stringify(r)}`);
  }
  getSettingValue(e) {
    if (e in this.settings)
      return this.settings[e];
  }
  applyOptionValue(e, r) {
    const s = this.options[e];
    if (!s) {
      te.error("Option not found", e, r);
      return;
    }
    if (s.type === "toggle" && typeof r == "boolean")
      s.value = r;
    else if (s.type === "select") {
      const u = s.choices.find((c) => c.value === r);
      u && (s.value = u);
    } else s.type === "hidden" ? s.value = r : te.error("Can't apply option value", e, r, s);
  }
  handleHelperEvent(e) {
    return Uk(e) ? this.handleGeofencingViolationEvent(e) : { next: !0 };
  }
  handleGeofencingViolationEvent(e) {
    return e.actionType === "draw" ? this.flags.featureCreateAllowed = !1 : e.actionType === "edit" && (this.flags.featureUpdateAllowed = !1), { next: !0 };
  }
}
const Wl = (t) => kn(t) && t.actionType === "draw", ep = (t) => kn(t) && (t.name === `${se}:draw:shape` || t.name === `${se}:draw:shape_with_data`), tp = (t) => ep(t) && t.variant === "line_drawer", mI = (t) => ep(t) && t.variant === "freehand_drawer";
class dr extends Xl {
  actionType = "draw";
  shape = null;
  featureData = null;
  saveFeature() {
    if (this.featureData) {
      const e = this.featureData.getGeoJson();
      this.removeTmpFeature(), this.gm.features.createFeature({
        sourceName: K.main,
        shapeGeoJson: e
      });
    } else
      te.error("BaseDraw.saveFeature: no featureData to save");
  }
  removeTmpFeature() {
    this.featureData && (this.featureData.temporary || te.error("Not a temporary feature to remove", this.featureData), this.gm.features.delete(this.featureData), this.featureData = null);
  }
  fireBeforeFeatureCreate({
    geoJsonFeatures: e,
    forceMode: r = void 0
  }) {
    this.flags.featureCreateAllowed = !0;
    const s = {
      name: `${se}:feature:before_create`,
      level: "system",
      actionType: "draw",
      mode: r || this.mode,
      action: "before_create",
      geoJsonFeatures: e
    };
    this.gm.events.fire(`${se}:${this.actionType}`, s);
  }
  fireMarkerPointerStartEvent() {
    if (!this.gm.markerPointer.marker || !this.shape)
      return;
    const e = this.gm.markerPointer.marker, r = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      variant: null,
      actionType: "draw",
      mode: this.shape,
      action: "start",
      markerData: {
        type: "dom",
        instance: e,
        position: {
          coordinate: e.getLngLat(),
          path: [-1]
        }
      },
      featureData: this.featureData
    };
    this.gm.events.fire(`${se}:draw`, r);
  }
  fireMarkerPointerUpdateEvent() {
    if (!this.gm.markerPointer.marker || !this.shape)
      return;
    const e = this.gm.markerPointer.marker, r = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      variant: null,
      actionType: "draw",
      mode: this.shape,
      action: "update",
      markerData: {
        type: "dom",
        instance: e,
        position: {
          coordinate: e.getLngLat(),
          path: [-1]
        }
      },
      featureData: this.featureData
    };
    this.gm.events.fire(`${se}:draw`, r);
  }
  fireMarkerPointerFinishEvent() {
    if (!this.shape)
      return;
    const e = {
      name: `${se}:draw:shape`,
      level: "system",
      variant: null,
      actionType: "draw",
      mode: this.shape,
      action: "finish"
    };
    this.gm.events.fire(`${se}:draw`, e);
  }
  forwardLineDrawerEvent(e) {
    if (!tp(e) || !this.shape)
      return { next: !0 };
    if (e.action === "start" || e.action === "update") {
      const r = {
        name: `${se}:draw:shape_with_data`,
        level: "system",
        actionType: "draw",
        mode: this.shape,
        variant: null,
        action: e.action,
        featureData: e.featureData,
        markerData: e.markerData
      };
      this.gm.events.fire(`${se}:draw`, r);
    } else if (e.action === "finish" || e.action === "cancel") {
      const r = {
        name: `${se}:draw:shape`,
        level: "system",
        actionType: "draw",
        mode: this.shape,
        variant: null,
        action: e.action
      };
      this.gm.events.fire(`${se}:draw`, r);
    }
    return { next: !0 };
  }
  fireStartEvent(e, r = null) {
    if (!this.shape)
      return;
    const s = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "start",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${se}:draw`, s);
  }
  fireUpdateEvent(e, r = null) {
    if (!this.shape)
      return;
    const s = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "update",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${se}:draw`, s);
  }
  fireFinishEvent() {
    if (!this.shape)
      return;
    const e = {
      name: `${se}:draw:shape`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "finish"
    };
    this.gm.events.fire(`${se}:draw`, e);
  }
}
class jl extends dr {
  mode = "circle";
  shape = "circle";
  eventHandlers = {
    mousemove: this.onMouseMove.bind(this),
    click: this.onMouseClick.bind(this)
  };
  circleCenterPoint = null;
  circleCenterLngLat = null;
  onStartAction() {
    this.gm.markerPointer.enable();
  }
  onEndAction() {
    this.removeTmpFeature(), this.gm.markerPointer.disable(), this.fireFinishEvent();
  }
  getFeatureGeoJson(e) {
    return {
      type: "Feature",
      properties: {
        shape: this.shape
      },
      geometry: {
        type: "Point",
        coordinates: e
      }
    };
  }
  getControlMarkerData() {
    const e = this.gm.markerPointer.marker;
    return e ? {
      type: "dom",
      instance: e,
      position: {
        coordinate: e.getLngLat(),
        path: [-1]
      }
    } : null;
  }
  createFeature() {
    const e = this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(this.circleCenterLngLat || [0, 0]),
      sourceName: K.temporary
    });
    return e && this.circleCenterLngLat && e.setShapeProperty("center", this.circleCenterLngLat), e;
  }
  createMarker() {
    const e = document.createElement("div");
    e.innerHTML = Vf;
    const r = e.firstChild;
    return r.style.color = "#278cda", r.style.width = "28px", r.style.height = "28px", r.style.pointerEvents = "none", this.gm.mapAdapter.createDomMarker(
      {
        draggable: !1,
        anchor: "center",
        element: r
      },
      [0, 0]
    );
  }
}
class zk extends jl {
  mode = "circle_marker";
  shape = "circle_marker";
  onStartAction() {
    this.gm.markerPointer.enable({
      customMarker: this.createMarker()
    });
  }
  onEndAction() {
    this.fireMarkerPointerFinishEvent(), super.onEndAction();
  }
  onMouseMove() {
    return this.fireMarkerPointerUpdateEvent(), { next: !0 };
  }
  onMouseClick(e) {
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    return this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(r)] }), this.flags.featureCreateAllowed && (this.featureData = this.createFeature(), this.circleCenterLngLat = r, this.circleCenterPoint = this.gm.mapAdapter.project(this.circleCenterLngLat), this.updateFeaturePosition(this.circleCenterLngLat), this.saveFeature()), { next: !1 };
  }
  updateFeaturePosition(e) {
    if (!this.featureData)
      return;
    const r = this.getFeatureGeoJson(e);
    this.featureData.updateGeoJsonGeometry(r.geometry);
  }
}
const qk = () => window.PointerEvent && "maxTouchPoints" in navigator ? navigator.maxTouchPoints > 0 ? !window.matchMedia("(hover: hover)").matches : !1 : matchMedia("(hover: none)").matches || "ontouchstart" in window ? !0 : "msMaxTouchPoints" in navigator && typeof navigator.msMaxTouchPoints == "number" && navigator.msMaxTouchPoints > 0, oi = (t, e, r = 10) => {
  const s = { ...t };
  return tt(t).forEach((u) => {
    const c = t[u];
    typeof c == "function" ? s[u] = Mg(c.bind(e), r, {
      leading: !0,
      trailing: !1
    }) : te.error("convertToThrottled: item is not a function", t[u]);
  }), s;
}, Yk = (t, e, r = 10) => {
  const s = { ...t };
  return tt(t).forEach((u) => {
    const c = t[u];
    typeof c == "function" ? s[u] = kg(c.bind(e), r, {
      leading: !1,
      trailing: !0
    }) : te.error("convertToDebounced: item is not a function", t[u]);
  }), s;
}, Vu = async (t, e) => {
  const r = "Promise race timeout";
  await Promise.race([
    t,
    new Promise((s, u) => {
      setTimeout(
        () => u(
          new Error(
            `Timeout ${Uc / 1e3} seconds: ${e || r}`
          )
        ),
        Uc
      );
    })
  ]);
}, np = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "contextmenu",
  "touchstart",
  "touchend",
  "touchmove",
  "touchcancel"
], Hk = ["load"];
function vI(t) {
  return np.includes(t);
}
function yI(t) {
  return Hk.includes(t);
}
const Jk = (t) => !!(t && typeof t == "object" && "once" in t && typeof t.once == "function"), je = (t, e = { warning: !1 }) => {
  if (!t)
    return e.warning && te.warn("Empty event", t), !1;
  const r = typeof t == "object" && "lngLat" in t && "point" in t && "type" in t && "originalEvent" in t && typeof t.type == "string" && np.includes(t.type);
  return !r && e.warning && te.warn("Not a pointer event", t), r;
}, $k = (t) => t.originalEvent.ctrlKey || t.originalEvent.shiftKey || t.originalEvent.altKey || t.originalEvent.metaKey, Vk = (t) => {
  const e = ["symbol", "fill", "line", "circle"];
  return !!t && typeof t == "object" && "type" in t && e.includes(t.type);
};
class Xk extends jl {
  mode = "circle";
  shape = "circle";
  throttledMethods = oi(
    {
      updateFeatureGeoJson: this.updateFeatureGeoJson
    },
    this,
    this.gm.options.settings.throttlingDelay
  );
  onMouseClick(e) {
    if (!je(e))
      return { next: !0 };
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    if (this.circleCenterPoint && this.circleCenterLngLat)
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [this.getCircleGeoJson(this.circleCenterLngLat, r)]
      }), this.flags.featureCreateAllowed && (this.saveCircleFeature(r), this.circleCenterLngLat = null, this.circleCenterPoint = null, this.fireFinishEvent());
    else if (this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(r)] }), this.flags.featureCreateAllowed) {
      this.circleCenterLngLat = r, this.circleCenterPoint = this.gm.mapAdapter.project(this.circleCenterLngLat), this.featureData = this.createFeature();
      const s = this.getControlMarkerData();
      this.featureData && s && this.fireStartEvent(this.featureData, s);
    }
    return { next: !1 };
  }
  onMouseMove() {
    if (this.circleCenterLngLat && this.gm.markerPointer.marker) {
      const e = this.gm.markerPointer.marker.getLngLat();
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [this.getCircleGeoJson(this.circleCenterLngLat, e)]
      }), this.flags.featureCreateAllowed && this.throttledMethods.updateFeatureGeoJson(e);
    }
    return this.circleCenterPoint || this.fireMarkerPointerUpdateEvent(), { next: !1 };
  }
  updateFeatureGeoJson(e) {
    if (this.featureData && this.circleCenterLngLat) {
      const r = this.getCircleGeoJson(this.circleCenterLngLat, e);
      this.featureData.updateGeoJsonGeometry(r.geometry);
      const s = this.getControlMarkerData();
      s && this.fireUpdateEvent(this.featureData, s);
    }
  }
  saveCircleFeature(e) {
    if (this.circleCenterLngLat && this.featureData) {
      const r = this.gm.markerPointer.marker?.getLngLat() || e;
      this.updateFeatureGeoJson(r), this.featureData.setShapeProperty("center", this.circleCenterLngLat), this.isFeatureGeoJsonValid() ? this.saveFeature() : this.removeTmpFeature();
    }
  }
  isFeatureGeoJsonValid() {
    return this.featureData ? Jl(this.featureData.getGeoJson()) : !1;
  }
  getCircleGeoJson(e, r) {
    const s = this.gm.mapAdapter.getDistance(e, r);
    return {
      ...$l({ center: e, radius: s }),
      properties: {
        shape: this.shape
      }
    };
  }
}
class Or extends Xl {
  actionType = "helper";
}
const rp = (t) => !!t && typeof t == "object" && t instanceof Or && "removeSnapGuides" in t && "updateSnapGuides" in t && t.mode === "snap_guides" && typeof t.removeSnapGuides == "function" && typeof t.updateSnapGuides == "function", Wk = (t) => !!t && typeof t == "object" && t instanceof Or && "getShortestPath" in t && t.mode === "auto_trace" && typeof t.getShortestPath == "function", jk = (t) => !!t && typeof t == "object" && t instanceof Or && "getSharedMarkers" in t && t.mode === "pin" && typeof t.getSharedMarkers == "function";
function Zk(t, e = {}) {
  var r, s, u, c = e.properties, f = (r = e.autoComplete) != null ? r : !0, h = (s = e.orderCoords) != null ? s : !0, p = (u = e.mutate) != null ? u : !1;
  switch (p || (t = To(t)), t.type) {
    case "FeatureCollection":
      var d = [];
      return t.features.forEach(function(v) {
        d.push(
          qt(Zh(v, {}, f, h))
        );
      }), Fl(d, c);
    default:
      return Zh(t, c, f, h);
  }
}
function Zh(t, e, r, s) {
  e = e || (t.type === "Feature" ? t.properties : {});
  var u = ta(t), c = u.coordinates, f = u.type;
  if (!c.length) throw new Error("line must contain coordinates");
  switch (f) {
    case "LineString":
      return r && (c = Kh(c)), or([c], e);
    case "MultiLineString":
      var h = [], p = 0;
      return c.forEach(function(d) {
        if (r && (d = Kh(d)), s) {
          var v = Kk(Bn(Hi(d)));
          v > p ? (h.unshift(d), p = v) : h.push(d);
        } else
          h.push(d);
      }), or(h, e);
    default:
      throw new Error("geometry type " + f + " is not supported");
  }
}
function Kh(t) {
  var e = t[0], r = e[0], s = e[1], u = t[t.length - 1], c = u[0], f = u[1];
  return (r !== c || s !== f) && t.push(e), t;
}
function Kk(t) {
  var e = t[0], r = t[1], s = t[2], u = t[3];
  return Math.abs(e - s) * Math.abs(r - u);
}
var Zl = Zk;
class Kl extends dr {
  mode = "line";
  snappingKey = "line_drawer";
  drawOptions;
  shapeLngLats = [];
  throttledMethods = oi(
    {
      onMouseMove: this.onMouseMove
    },
    this,
    this.gm.options.settings.throttlingDelay
  );
  eventHandlers = {
    [`${se}:helper`]: this.handleGmHelperEvent.bind(this),
    click: this.onMouseClick.bind(this),
    mousemove: this.throttledMethods.onMouseMove.bind(this)
  };
  drawerEventHandlers = {
    firstMarkerClick: null,
    lastMarkerClick: null,
    nMarkerClick: null
  };
  constructor(e, r = {
    snappingMarkers: "none",
    targetShape: "line"
  }) {
    super(e), this.drawOptions = r;
  }
  get snapGuidesInstance() {
    const e = this.gm.actionInstances.helper__snap_guides;
    return rp(e) ? e : null;
  }
  get autoTraceEnabled() {
    return this.gm.options.controls.helper.auto_trace?.active || !1;
  }
  get autoTraceHelperInstance() {
    return this.autoTraceEnabled && Object.values(this.gm.actionInstances).find(Wk) || null;
  }
  onStartAction() {
    this.gm.markerPointer.enable();
  }
  onEndAction() {
    this.gm.markerPointer.disable(), this.endShape(), this.snapGuidesInstance?.removeSnapGuides();
  }
  handleGmHelperEvent(e) {
    return Vl(e) ? (e.mode === "snap_guides" && e.action === "mode_start" && this.updateSnapGuides(), { next: !0 }) : (te.error("LineDrawer.handleGmHelperEvent: invalid event", e), { next: !0 });
  }
  updateSnapGuides() {
    if (this.snapGuidesInstance) {
      const e = this.featureData?.getGeoJson();
      e && e.geometry.coordinates.pop(), this.snapGuidesInstance.updateSnapGuides(
        e || null,
        this.shapeLngLats.at(-1) || null,
        !0
      );
    }
  }
  on(e, r) {
    this.drawerEventHandlers[e] = r;
  }
  onMouseClick(e) {
    if (!je(e, { warning: !0 }))
      return { next: !0 };
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    if (this.featureData) {
      const s = this.getClickedMarkerInfo(e);
      this.handleNextVertex(r, s);
    } else this.isFeatureAllowed(Gk(r)) && this.startShape(r);
    return this.updateSnapGuides(), { next: !0 };
  }
  handleNextVertex(e, r) {
    if (!this.featureData) {
      te.error("LineDrawer.handleNextVertex: no featureData");
      return;
    }
    const s = this.featureData.markers.size, u = this.getMarkerClickEventData(r.index);
    r.index < s - 1 && this.addPoint(e, r), r.index !== -1 && (r.index === 0 ? this.drawerEventHandlers.firstMarkerClick?.(u) : r.index > 0 && r.index === s - 1 && this.drawerEventHandlers.lastMarkerClick?.(u), r.index >= 0 && this.drawerEventHandlers.nMarkerClick?.(u));
  }
  getMarkerClickEventData(e) {
    const r = this.getFeatureGeoJson({ withControlMarker: !1 });
    return {
      markerIndex: e,
      shapeCoordinates: this.getShapeCoordinates({ withControlMarker: !1 }),
      geoJson: r,
      bounds: Hl(r)
    };
  }
  onMouseMove(e) {
    return je(e, { warning: !0 }) ? (this.featureData && this.shapeLngLats.length && this.updateFeatureSource(), { next: !0 }) : { next: !0 };
  }
  startShape(e) {
    this.shapeLngLats = [e], this.featureData = this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson({ withControlMarker: !0 }),
      sourceName: K.temporary
    });
    const r = {
      type: "dom",
      instance: this.createMarker(e),
      position: {
        coordinate: e,
        path: ["geometry", "coordinates", 0]
      }
    };
    this.featureData && (this.featureData.markers.set(r.position.path.join("."), r), this.setSnapping(), this.fireStartEvent(this.featureData, r)), this.gm.mapAdapter.disableMapInteractions(["doubleClickZoom"]);
  }
  endShape() {
    const e = this.getFeatureGeoJson({ withControlMarker: !1 });
    this.removeSnapping(), this.removeTmpFeature(), this.shapeLngLats = [], this.gm.mapAdapter.enableMapInteractions(["doubleClickZoom"]), this.fireStopEvent(e);
  }
  setSnapping() {
    if (!this.snappingHelper)
      return;
    const e = this.drawOptions.snappingMarkers;
    e === "none" ? this.snappingHelper.setCustomSnappingCoordinates(this.snappingKey, []) : e === "all" && this.shapeLngLats.length ? this.snappingHelper.setCustomSnappingCoordinates(this.snappingKey, this.shapeLngLats) : e === "first" && this.shapeLngLats.length ? this.snappingHelper.setCustomSnappingCoordinates(this.snappingKey, [this.shapeLngLats[0]]) : e === "last" && this.shapeLngLats.length ? this.snappingHelper.setCustomSnappingCoordinates(this.snappingKey, [
      this.shapeLngLats[this.shapeLngLats.length - 1]
    ]) : te.error("LineDrawer.setSnapping: invalid data", e, this.shapeLngLats);
  }
  removeSnapping() {
    this.snappingHelper && this.snappingHelper.clearCustomSnappingCoordinates(this.snappingKey);
  }
  getClickedMarkerInfo(e) {
    if (!this.featureData)
      return { index: -1, path: null };
    let r = 0, s = null;
    try {
      this.featureData.markers.forEach((u, c) => {
        if (u.instance instanceof Dl) {
          const f = u.instance.getElement() || null, h = e.originalEvent.target, p = h instanceof Element ? h : null;
          if (f && f.contains(p))
            throw s = c, new Error("stop");
        }
        r += 1;
      });
    } catch {
      if (s)
        return { index: r, path: s };
    }
    return { index: -1, path: null };
  }
  addPoint(e, r) {
    const s = this.featureData;
    if (!s) {
      te.error("LineDrawer.addPoint: no featureData");
      return;
    }
    const u = this.getAddedLngLats(e, r), c = this.getFeatureGeoJsonWithType({
      withControlMarker: !0,
      coordinates: this.shapeLngLats.concat(u)
    });
    this.isFeatureAllowed(c) && (u.forEach((f) => {
      this.shapeLngLats.push(f);
      const h = this.addMarker(f, s);
      this.fireUpdateEvent(s, h);
    }), this.updateFeatureSource());
  }
  isFeatureAllowed(e) {
    return this.gm.getActiveDrawModes().length ? (this.fireBeforeFeatureCreate({ geoJsonFeatures: [e] }), this.flags.featureCreateAllowed) : !0;
  }
  getAddedLngLats(e, r) {
    if (!this.featureData)
      return te.error("LineDrawer.getCurrentLngLats: no featureData"), [];
    const u = this.getMarkerInfoLngLat(r) || e;
    return [...this.getAutoTracePath(u)?.slice(1, -1) || [], u];
  }
  getAutoTracePath(e) {
    const r = this.shapeLngLats.at(-1);
    return this.autoTraceEnabled && this.autoTraceHelperInstance && r && this.autoTraceHelperInstance.getShortestPath(r, e) || null;
  }
  getMarkerInfoLngLat(e) {
    if (this.featureData && e.path) {
      const r = this.featureData.markers.get(e.path);
      if (r && r.type === "dom")
        return r.instance.getLngLat();
      te.error("LineDrawer.addPoint: no markerData", e);
    }
    return null;
  }
  addMarker(e, r) {
    const s = {
      type: "dom",
      instance: this.createMarker(e),
      position: {
        coordinate: e,
        path: ["geometry", "coordinates", this.shapeLngLats.length]
      }
    };
    return r.markers.set(s.position.path.join("."), {
      type: "dom",
      instance: s.instance,
      position: {
        coordinate: e,
        path: []
      }
    }), s;
  }
  createMarker(e) {
    return this.gm.mapAdapter.createDomMarker(
      {
        element: this.gm.createSvgMarkerElement("control", {
          pointerEvents: "auto",
          cursor: "pointer"
        }),
        anchor: "center"
      },
      e
    );
  }
  updateFeatureSource() {
    if (this.featureData && (this.featureData.updateGeoJsonGeometry(
      this.getFeatureGeoJson({ withControlMarker: !0 }).geometry
    ), this.gm.markerPointer.marker)) {
      const e = {
        type: "dom",
        instance: this.gm.markerPointer.marker,
        position: {
          coordinate: this.gm.markerPointer.marker.getLngLat(),
          path: ["geometry", "coordinates", this.shapeLngLats.length]
        }
      };
      this.fireUpdateEvent(this.featureData, e);
    }
  }
  getFeatureGeoJson({
    withControlMarker: e,
    coordinates: r = void 0
  }) {
    return {
      type: "Feature",
      properties: {
        shape: "line"
      },
      geometry: {
        type: "LineString",
        coordinates: r || this.getShapeCoordinates({ withControlMarker: e })
      }
    };
  }
  getFeatureGeoJsonWithType({
    withControlMarker: e,
    coordinates: r = void 0
  }) {
    const s = this.getFeatureGeoJson({ withControlMarker: e, coordinates: r });
    return this.drawOptions.targetShape === "polygon" && s.geometry.coordinates.length > 3 ? Zl(s, {
      properties: s.properties
    }) : s;
  }
  getShapeCoordinates({ withControlMarker: e }) {
    const r = [...this.shapeLngLats];
    return e && this.gm.markerPointer.marker && r.push(this.gm.markerPointer.marker.getLngLat()), r;
  }
  fireStartEvent(e, r) {
    const s = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: "line",
      variant: "line_drawer",
      action: "start",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${se}:draw`, s);
  }
  fireUpdateEvent(e, r) {
    const s = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: "line",
      variant: "line_drawer",
      action: "update",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${se}:draw`, s);
  }
  fireStopEvent(e) {
    const r = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: "line",
      action: "finish",
      variant: "line_drawer",
      geoJsonFeature: e,
      markerData: null,
      featureData: null
    };
    this.gm.events.fire(`${se}:draw`, r);
  }
}
class Qk extends dr {
  mode = "line";
  shape = "line";
  lineDrawer = new Kl(this.gm, { snappingMarkers: "first", targetShape: "line" });
  eventHandlers = {
    [`${se}:draw`]: this.forwardLineDrawerEvent.bind(this),
    mousemove: this.onMouseMove.bind(this)
  };
  onStartAction() {
    this.lineDrawer.startAction(), this.lineDrawer.on("nMarkerClick", this.lineFinished.bind(this));
  }
  onEndAction() {
    this.lineDrawer.endAction();
  }
  onMouseMove(e) {
    return je(e) ? (this.lineDrawer.featureData || this.fireMarkerPointerUpdateEvent(), { next: !0 }) : { next: !0 };
  }
  lineFinished(e) {
    this.lineDrawer.endShape();
    let r = e.shapeCoordinates;
    return e.markerIndex > 0 && (r = r.slice(0, e.markerIndex + 1)), r.length < 2 ? null : this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(r),
      sourceName: K.main
    });
  }
  getFeatureGeoJson(e) {
    return {
      type: "Feature",
      properties: {
        shape: this.shape
      },
      geometry: {
        type: "LineString",
        coordinates: e
      }
    };
  }
}
class e2 extends dr {
  mode = "marker";
  shape = "marker";
  eventHandlers = {
    click: this.onMouseClick.bind(this),
    mousemove: this.onMouseMove.bind(this)
  };
  onStartAction() {
    const e = this.createMarker();
    this.gm.markerPointer.enable({ customMarker: e }), this.fireMarkerPointerStartEvent();
  }
  onEndAction() {
    this.gm.markerPointer.disable(), this.fireMarkerPointerFinishEvent();
  }
  onMouseClick(e) {
    return je(e) && (this.featureData = this.createFeature(e), this.featureData && this.saveFeature()), { next: !1 };
  }
  onMouseMove(e) {
    return !je(e) || !this.gm.markerPointer.marker ? { next: !0 } : (this.fireMarkerPointerUpdateEvent(), { next: !0 });
  }
  createFeature(e) {
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray(), s = this.getFeatureGeoJson(r);
    return s && (this.fireBeforeFeatureCreate({ geoJsonFeatures: [s] }), this.flags.featureCreateAllowed) ? this.gm.features.createFeature({
      shapeGeoJson: s,
      sourceName: K.temporary
    }) : null;
  }
  getFeatureGeoJson(e) {
    return {
      type: "Feature",
      properties: {
        shape: this.shape
      },
      geometry: {
        type: "Point",
        coordinates: e
      }
    };
  }
  createMarker() {
    const e = this.gm.createSvgMarkerElement("default", {
      width: "36px",
      height: "36px",
      pointerEvents: "none"
    });
    return this.gm.mapAdapter.createDomMarker(
      {
        draggable: !1,
        anchor: "bottom",
        element: e
      },
      [0, 0]
    );
  }
}
function t2(t) {
  var e = {
    MultiPoint: {
      coordinates: [],
      properties: []
    },
    MultiLineString: {
      coordinates: [],
      properties: []
    },
    MultiPolygon: {
      coordinates: [],
      properties: []
    }
  };
  return Vn(t, (r) => {
    var s;
    switch ((s = r.geometry) == null ? void 0 : s.type) {
      case "Point":
        e.MultiPoint.coordinates.push(r.geometry.coordinates), e.MultiPoint.properties.push(r.properties);
        break;
      case "MultiPoint":
        e.MultiPoint.coordinates.push(...r.geometry.coordinates), e.MultiPoint.properties.push(r.properties);
        break;
      case "LineString":
        e.MultiLineString.coordinates.push(r.geometry.coordinates), e.MultiLineString.properties.push(r.properties);
        break;
      case "MultiLineString":
        e.MultiLineString.coordinates.push(
          ...r.geometry.coordinates
        ), e.MultiLineString.properties.push(r.properties);
        break;
      case "Polygon":
        e.MultiPolygon.coordinates.push(r.geometry.coordinates), e.MultiPolygon.properties.push(r.properties);
        break;
      case "MultiPolygon":
        e.MultiPolygon.coordinates.push(...r.geometry.coordinates), e.MultiPolygon.properties.push(r.properties);
        break;
    }
  }), nt(
    Object.keys(e).filter(function(r) {
      return e[r].coordinates.length;
    }).sort().map(function(r) {
      var s = { type: r, coordinates: e[r].coordinates }, u = { collectedProperties: e[r].properties };
      return Sn(s, u);
    })
  );
}
var n2 = t2;
function r2(t, e, r, s, u) {
  ip(t, e, r || 0, s || t.length - 1, u || i2);
}
function ip(t, e, r, s, u) {
  for (; s > r; ) {
    if (s - r > 600) {
      var c = s - r + 1, f = e - r + 1, h = Math.log(c), p = 0.5 * Math.exp(2 * h / 3), d = 0.5 * Math.sqrt(h * p * (c - p) / c) * (f - c / 2 < 0 ? -1 : 1), v = Math.max(r, Math.floor(e - f * p / c + d)), _ = Math.min(s, Math.floor(e + (c - f) * p / c + d));
      ip(t, e, v, _, u);
    }
    var x = t[e], M = r, S = s;
    for (ys(t, r, e), u(t[s], x) > 0 && ys(t, r, s); M < S; ) {
      for (ys(t, M, S), M++, S--; u(t[M], x) < 0; ) M++;
      for (; u(t[S], x) > 0; ) S--;
    }
    u(t[r], x) === 0 ? ys(t, r, S) : (S++, ys(t, S, s)), S <= e && (r = S + 1), e <= S && (s = S - 1);
  }
}
function ys(t, e, r) {
  var s = t[e];
  t[e] = t[r], t[r] = s;
}
function i2(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
class Kt {
  constructor(e = 9) {
    this._maxEntries = Math.max(4, e), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(e) {
    let r = this.data;
    const s = [];
    if (!ka(e, r)) return s;
    const u = this.toBBox, c = [];
    for (; r; ) {
      for (let f = 0; f < r.children.length; f++) {
        const h = r.children[f], p = r.leaf ? u(h) : h;
        ka(e, p) && (r.leaf ? s.push(h) : hu(e, p) ? this._all(h, s) : c.push(h));
      }
      r = c.pop();
    }
    return s;
  }
  collides(e) {
    let r = this.data;
    if (!ka(e, r)) return !1;
    const s = [];
    for (; r; ) {
      for (let u = 0; u < r.children.length; u++) {
        const c = r.children[u], f = r.leaf ? this.toBBox(c) : c;
        if (ka(e, f)) {
          if (r.leaf || hu(e, f)) return !0;
          s.push(c);
        }
      }
      r = s.pop();
    }
    return !1;
  }
  load(e) {
    if (!(e && e.length)) return this;
    if (e.length < this._minEntries) {
      for (let s = 0; s < e.length; s++)
        this.insert(e[s]);
      return this;
    }
    let r = this._build(e.slice(), 0, e.length - 1, 0);
    if (!this.data.children.length)
      this.data = r;
    else if (this.data.height === r.height)
      this._splitRoot(this.data, r);
    else {
      if (this.data.height < r.height) {
        const s = this.data;
        this.data = r, r = s;
      }
      this._insert(r, this.data.height - r.height - 1, !0);
    }
    return this;
  }
  insert(e) {
    return e && this._insert(e, this.data.height - 1), this;
  }
  clear() {
    return this.data = Li([]), this;
  }
  remove(e, r) {
    if (!e) return this;
    let s = this.data;
    const u = this.toBBox(e), c = [], f = [];
    let h, p, d;
    for (; s || c.length; ) {
      if (s || (s = c.pop(), p = c[c.length - 1], h = f.pop(), d = !0), s.leaf) {
        const v = s2(e, s.children, r);
        if (v !== -1)
          return s.children.splice(v, 1), c.push(s), this._condense(c), this;
      }
      !d && !s.leaf && hu(s, u) ? (c.push(s), f.push(h), h = 0, p = s, s = s.children[0]) : p ? (h++, s = p.children[h], d = !1) : s = null;
    }
    return this;
  }
  toBBox(e) {
    return e;
  }
  compareMinX(e, r) {
    return e.minX - r.minX;
  }
  compareMinY(e, r) {
    return e.minY - r.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(e) {
    return this.data = e, this;
  }
  _all(e, r) {
    const s = [];
    for (; e; )
      e.leaf ? r.push(...e.children) : s.push(...e.children), e = s.pop();
    return r;
  }
  _build(e, r, s, u) {
    const c = s - r + 1;
    let f = this._maxEntries, h;
    if (c <= f)
      return h = Li(e.slice(r, s + 1)), Mi(h, this.toBBox), h;
    u || (u = Math.ceil(Math.log(c) / Math.log(f)), f = Math.ceil(c / Math.pow(f, u - 1))), h = Li([]), h.leaf = !1, h.height = u;
    const p = Math.ceil(c / f), d = p * Math.ceil(Math.sqrt(f));
    Qh(e, r, s, d, this.compareMinX);
    for (let v = r; v <= s; v += d) {
      const _ = Math.min(v + d - 1, s);
      Qh(e, v, _, p, this.compareMinY);
      for (let x = v; x <= _; x += p) {
        const M = Math.min(x + p - 1, _);
        h.children.push(this._build(e, x, M, u - 1));
      }
    }
    return Mi(h, this.toBBox), h;
  }
  _chooseSubtree(e, r, s, u) {
    for (; u.push(r), !(r.leaf || u.length - 1 === s); ) {
      let c = 1 / 0, f = 1 / 0, h;
      for (let p = 0; p < r.children.length; p++) {
        const d = r.children[p], v = cu(d), _ = u2(e, d) - v;
        _ < f ? (f = _, c = v < c ? v : c, h = d) : _ === f && v < c && (c = v, h = d);
      }
      r = h || r.children[0];
    }
    return r;
  }
  _insert(e, r, s) {
    const u = s ? e : this.toBBox(e), c = [], f = this._chooseSubtree(u, this.data, r, c);
    for (f.children.push(e), ks(f, u); r >= 0 && c[r].children.length > this._maxEntries; )
      this._split(c, r), r--;
    this._adjustParentBBoxes(u, c, r);
  }
  // split overflowed node into two
  _split(e, r) {
    const s = e[r], u = s.children.length, c = this._minEntries;
    this._chooseSplitAxis(s, c, u);
    const f = this._chooseSplitIndex(s, c, u), h = Li(s.children.splice(f, s.children.length - f));
    h.height = s.height, h.leaf = s.leaf, Mi(s, this.toBBox), Mi(h, this.toBBox), r ? e[r - 1].children.push(h) : this._splitRoot(s, h);
  }
  _splitRoot(e, r) {
    this.data = Li([e, r]), this.data.height = e.height + 1, this.data.leaf = !1, Mi(this.data, this.toBBox);
  }
  _chooseSplitIndex(e, r, s) {
    let u, c = 1 / 0, f = 1 / 0;
    for (let h = r; h <= s - r; h++) {
      const p = ws(e, 0, h, this.toBBox), d = ws(e, h, s, this.toBBox), v = l2(p, d), _ = cu(p) + cu(d);
      v < c ? (c = v, u = h, f = _ < f ? _ : f) : v === c && _ < f && (f = _, u = h);
    }
    return u || s - r;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(e, r, s) {
    const u = e.leaf ? this.compareMinX : a2, c = e.leaf ? this.compareMinY : o2, f = this._allDistMargin(e, r, s, u), h = this._allDistMargin(e, r, s, c);
    f < h && e.children.sort(u);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(e, r, s, u) {
    e.children.sort(u);
    const c = this.toBBox, f = ws(e, 0, r, c), h = ws(e, s - r, s, c);
    let p = wa(f) + wa(h);
    for (let d = r; d < s - r; d++) {
      const v = e.children[d];
      ks(f, e.leaf ? c(v) : v), p += wa(f);
    }
    for (let d = s - r - 1; d >= r; d--) {
      const v = e.children[d];
      ks(h, e.leaf ? c(v) : v), p += wa(h);
    }
    return p;
  }
  _adjustParentBBoxes(e, r, s) {
    for (let u = s; u >= 0; u--)
      ks(r[u], e);
  }
  _condense(e) {
    for (let r = e.length - 1, s; r >= 0; r--)
      e[r].children.length === 0 ? r > 0 ? (s = e[r - 1].children, s.splice(s.indexOf(e[r]), 1)) : this.clear() : Mi(e[r], this.toBBox);
  }
}
function s2(t, e, r) {
  if (!r) return e.indexOf(t);
  for (let s = 0; s < e.length; s++)
    if (r(t, e[s])) return s;
  return -1;
}
function Mi(t, e) {
  ws(t, 0, t.children.length, e, t);
}
function ws(t, e, r, s, u) {
  u || (u = Li(null)), u.minX = 1 / 0, u.minY = 1 / 0, u.maxX = -1 / 0, u.maxY = -1 / 0;
  for (let c = e; c < r; c++) {
    const f = t.children[c];
    ks(u, t.leaf ? s(f) : f);
  }
  return u;
}
function ks(t, e) {
  return t.minX = Math.min(t.minX, e.minX), t.minY = Math.min(t.minY, e.minY), t.maxX = Math.max(t.maxX, e.maxX), t.maxY = Math.max(t.maxY, e.maxY), t;
}
function a2(t, e) {
  return t.minX - e.minX;
}
function o2(t, e) {
  return t.minY - e.minY;
}
function cu(t) {
  return (t.maxX - t.minX) * (t.maxY - t.minY);
}
function wa(t) {
  return t.maxX - t.minX + (t.maxY - t.minY);
}
function u2(t, e) {
  return (Math.max(e.maxX, t.maxX) - Math.min(e.minX, t.minX)) * (Math.max(e.maxY, t.maxY) - Math.min(e.minY, t.minY));
}
function l2(t, e) {
  const r = Math.max(t.minX, e.minX), s = Math.max(t.minY, e.minY), u = Math.min(t.maxX, e.maxX), c = Math.min(t.maxY, e.maxY);
  return Math.max(0, u - r) * Math.max(0, c - s);
}
function hu(t, e) {
  return t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY;
}
function ka(t, e) {
  return e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY;
}
function Li(t) {
  return {
    children: t,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  };
}
function Qh(t, e, r, s, u) {
  const c = [e, r];
  for (; c.length; ) {
    if (r = c.pop(), e = c.pop(), r - e <= s) continue;
    const f = e + Math.ceil((r - e) / s / 2) * s;
    r2(t, f, e, r, u), c.push(e, f, f, r);
  }
}
function c2(t) {
  return yk(
    t,
    (e, r) => e + h2(r),
    0
  );
}
function h2(t) {
  let e = 0, r;
  switch (t.type) {
    case "Polygon":
      return ef(t.coordinates);
    case "MultiPolygon":
      for (r = 0; r < t.coordinates.length; r++)
        e += ef(t.coordinates[r]);
      return e;
    case "Point":
    case "MultiPoint":
    case "LineString":
    case "MultiLineString":
      return 0;
  }
  return 0;
}
function ef(t) {
  let e = 0;
  if (t && t.length > 0) {
    e += Math.abs(tf(t[0]));
    for (let r = 1; r < t.length; r++)
      e -= Math.abs(tf(t[r]));
  }
  return e;
}
var f2 = at * at / 2, fu = Math.PI / 180;
function tf(t) {
  const e = t.length - 1;
  if (e <= 2) return 0;
  let r = 0, s = 0;
  for (; s < e; ) {
    const u = t[s], c = t[s + 1 === e ? 0 : s + 1], f = t[s + 2 >= e ? (s + 2) % e : s + 2], h = u[0] * fu, p = c[1] * fu, d = f[0] * fu;
    r += (d - h) * Math.sin(p), s++;
  }
  return r * f2;
}
const ar = 11102230246251565e-32, gt = 134217729, g2 = (3 + 8 * ar) * ar;
function gu(t, e, r, s, u) {
  let c, f, h, p, d = e[0], v = s[0], _ = 0, x = 0;
  v > d == v > -d ? (c = d, d = e[++_]) : (c = v, v = s[++x]);
  let M = 0;
  if (_ < t && x < r)
    for (v > d == v > -d ? (f = d + c, h = c - (f - d), d = e[++_]) : (f = v + c, h = c - (f - v), v = s[++x]), c = f, h !== 0 && (u[M++] = h); _ < t && x < r; )
      v > d == v > -d ? (f = c + d, p = f - c, h = c - (f - p) + (d - p), d = e[++_]) : (f = c + v, p = f - c, h = c - (f - p) + (v - p), v = s[++x]), c = f, h !== 0 && (u[M++] = h);
  for (; _ < t; )
    f = c + d, p = f - c, h = c - (f - p) + (d - p), d = e[++_], c = f, h !== 0 && (u[M++] = h);
  for (; x < r; )
    f = c + v, p = f - c, h = c - (f - p) + (v - p), v = s[++x], c = f, h !== 0 && (u[M++] = h);
  return (c !== 0 || M === 0) && (u[M++] = c), M;
}
function d2(t, e) {
  let r = e[0];
  for (let s = 1; s < t; s++) r += e[s];
  return r;
}
function ra(t) {
  return new Float64Array(t);
}
const p2 = (3 + 16 * ar) * ar, m2 = (2 + 12 * ar) * ar, v2 = (9 + 64 * ar) * ar * ar, Ii = ra(4), nf = ra(8), rf = ra(12), sf = ra(16), St = ra(4);
function y2(t, e, r, s, u, c, f) {
  let h, p, d, v, _, x, M, S, C, F, O, I, H, X, J, U, W, E;
  const w = t - u, b = r - u, T = e - c, A = s - c;
  X = w * A, x = gt * w, M = x - (x - w), S = w - M, x = gt * A, C = x - (x - A), F = A - C, J = S * F - (X - M * C - S * C - M * F), U = T * b, x = gt * T, M = x - (x - T), S = T - M, x = gt * b, C = x - (x - b), F = b - C, W = S * F - (U - M * C - S * C - M * F), O = J - W, _ = J - O, Ii[0] = J - (O + _) + (_ - W), I = X + O, _ = I - X, H = X - (I - _) + (O - _), O = H - U, _ = H - O, Ii[1] = H - (O + _) + (_ - U), E = I + O, _ = E - I, Ii[2] = I - (E - _) + (O - _), Ii[3] = E;
  let G = d2(4, Ii), R = m2 * f;
  if (G >= R || -G >= R || (_ = t - w, h = t - (w + _) + (_ - u), _ = r - b, d = r - (b + _) + (_ - u), _ = e - T, p = e - (T + _) + (_ - c), _ = s - A, v = s - (A + _) + (_ - c), h === 0 && p === 0 && d === 0 && v === 0) || (R = v2 * f + g2 * Math.abs(G), G += w * v + A * h - (T * d + b * p), G >= R || -G >= R)) return G;
  X = h * A, x = gt * h, M = x - (x - h), S = h - M, x = gt * A, C = x - (x - A), F = A - C, J = S * F - (X - M * C - S * C - M * F), U = p * b, x = gt * p, M = x - (x - p), S = p - M, x = gt * b, C = x - (x - b), F = b - C, W = S * F - (U - M * C - S * C - M * F), O = J - W, _ = J - O, St[0] = J - (O + _) + (_ - W), I = X + O, _ = I - X, H = X - (I - _) + (O - _), O = H - U, _ = H - O, St[1] = H - (O + _) + (_ - U), E = I + O, _ = E - I, St[2] = I - (E - _) + (O - _), St[3] = E;
  const P = gu(4, Ii, 4, St, nf);
  X = w * v, x = gt * w, M = x - (x - w), S = w - M, x = gt * v, C = x - (x - v), F = v - C, J = S * F - (X - M * C - S * C - M * F), U = T * d, x = gt * T, M = x - (x - T), S = T - M, x = gt * d, C = x - (x - d), F = d - C, W = S * F - (U - M * C - S * C - M * F), O = J - W, _ = J - O, St[0] = J - (O + _) + (_ - W), I = X + O, _ = I - X, H = X - (I - _) + (O - _), O = H - U, _ = H - O, St[1] = H - (O + _) + (_ - U), E = I + O, _ = E - I, St[2] = I - (E - _) + (O - _), St[3] = E;
  const D = gu(P, nf, 4, St, rf);
  X = h * v, x = gt * h, M = x - (x - h), S = h - M, x = gt * v, C = x - (x - v), F = v - C, J = S * F - (X - M * C - S * C - M * F), U = p * d, x = gt * p, M = x - (x - p), S = p - M, x = gt * d, C = x - (x - d), F = d - C, W = S * F - (U - M * C - S * C - M * F), O = J - W, _ = J - O, St[0] = J - (O + _) + (_ - W), I = X + O, _ = I - X, H = X - (I - _) + (O - _), O = H - U, _ = H - O, St[1] = H - (O + _) + (_ - U), E = I + O, _ = E - I, St[2] = I - (E - _) + (O - _), St[3] = E;
  const Y = gu(D, rf, 4, St, sf);
  return sf[Y - 1];
}
function _2(t, e, r, s, u, c) {
  const f = (e - c) * (r - u), h = (t - u) * (s - c), p = f - h, d = Math.abs(f + h);
  return Math.abs(p) >= p2 * d ? p : -y2(t, e, r, s, u, c, d);
}
function E2(t, e) {
  var r, s, u = 0, c, f, h, p, d, v, _, x = t[0], M = t[1], S = e.length;
  for (r = 0; r < S; r++) {
    s = 0;
    var C = e[r], F = C.length - 1;
    if (v = C[0], v[0] !== C[F][0] && v[1] !== C[F][1])
      throw new Error("First and last coordinates in a ring must be the same");
    for (f = v[0] - x, h = v[1] - M, s; s < F; s++) {
      if (_ = C[s + 1], p = _[0] - x, d = _[1] - M, h === 0 && d === 0) {
        if (p <= 0 && f >= 0 || f <= 0 && p >= 0)
          return 0;
      } else if (d >= 0 && h <= 0 || d <= 0 && h >= 0) {
        if (c = _2(f, p, h, d, 0, 0), c === 0)
          return 0;
        (c > 0 && d > 0 && h <= 0 || c < 0 && d <= 0 && h > 0) && u++;
      }
      v = _, h = d, f = p;
    }
  }
  return u % 2 !== 0;
}
function ti(t, e, r = {}) {
  if (!t)
    throw new Error("point is required");
  if (!e)
    throw new Error("polygon is required");
  const s = Qe(t), u = ta(e), c = u.type, f = e.bbox;
  let h = u.coordinates;
  if (f && x2(s, f) === !1)
    return !1;
  c === "Polygon" && (h = [h]);
  let p = !1;
  for (var d = 0; d < h.length; ++d) {
    const v = E2(s, h[d]);
    if (v === 0) return !r.ignoreBoundary;
    v && (p = !0);
  }
  return p;
}
function x2(t, e) {
  return e[0] <= t[0] && e[1] <= t[1] && e[2] >= t[0] && e[3] >= t[1];
}
function w2(t, e, r) {
  if (t.geometry.type !== "Polygon")
    throw new Error("The input feature must be a Polygon");
  r === void 0 && (r = 1);
  var s = t.geometry.coordinates, u = [], c = {};
  if (r) {
    for (var f = [], h = 0; h < s.length; h++)
      for (var p = 0; p < s[h].length - 1; p++)
        f.push(F(h, p));
    var d = new Kt();
    d.load(f);
  }
  for (var v = 0; v < s.length; v++)
    for (var _ = 0; _ < s[v].length - 1; _++)
      if (r) {
        var x = d.search(F(v, _));
        x.forEach(function(O) {
          var I = O.ring, H = O.edge;
          C(v, _, I, H);
        });
      } else
        for (var M = 0; M < s.length; M++)
          for (var S = 0; S < s[M].length - 1; S++)
            C(v, _, M, S);
  return e || (u = {
    type: "Feature",
    geometry: { type: "MultiPoint", coordinates: u }
  }), u;
  function C(O, I, H, X) {
    var J = s[O][I], U = s[O][I + 1], W = s[H][X], E = s[H][X + 1], w = k2(J, U, W, E);
    if (w !== null) {
      var b, T;
      if (U[0] !== J[0] ? b = (w[0] - J[0]) / (U[0] - J[0]) : b = (w[1] - J[1]) / (U[1] - J[1]), E[0] !== W[0] ? T = (w[0] - W[0]) / (E[0] - W[0]) : T = (w[1] - W[1]) / (E[1] - W[1]), !(b >= 1 || b <= 0 || T >= 1 || T <= 0)) {
        var A = w, G = !c[A];
        G && (c[A] = !0), e ? u.push(
          e(
            w,
            O,
            I,
            J,
            U,
            b,
            H,
            X,
            W,
            E,
            T,
            G
          )
        ) : u.push(w);
      }
    }
  }
  function F(O, I) {
    var H = s[O][I], X = s[O][I + 1], J, U, W, E;
    return H[0] < X[0] ? (J = H[0], U = X[0]) : (J = X[0], U = H[0]), H[1] < X[1] ? (W = H[1], E = X[1]) : (W = X[1], E = H[1]), {
      minX: J,
      minY: W,
      maxX: U,
      maxY: E,
      ring: O,
      edge: I
    };
  }
}
function k2(t, e, r, s) {
  if (Ss(t, r) || Ss(t, s) || Ss(e, r) || Ss(s, r))
    return null;
  var u = t[0], c = t[1], f = e[0], h = e[1], p = r[0], d = r[1], v = s[0], _ = s[1], x = (u - f) * (d - _) - (c - h) * (p - v);
  if (x === 0) return null;
  var M = ((u * h - c * f) * (p - v) - (u - f) * (p * _ - d * v)) / x, S = ((u * h - c * f) * (d - _) - (c - h) * (p * _ - d * v)) / x;
  return [M, S];
}
function Ss(t, e) {
  if (!t || !e || t.length !== e.length) return !1;
  for (var r = 0, s = t.length; r < s; r++)
    if (t[r] instanceof Array && e[r] instanceof Array) {
      if (!Ss(t[r], e[r])) return !1;
    } else if (t[r] !== e[r])
      return !1;
  return !0;
}
function S2(t) {
  if (t.type != "Feature")
    throw new Error("The input must a geojson object of type Feature");
  if (t.geometry === void 0 || t.geometry == null)
    throw new Error(
      "The input must a geojson object with a non-empty geometry"
    );
  if (t.geometry.type != "Polygon")
    throw new Error("The input must be a geojson Polygon");
  for (var e = t.geometry.coordinates.length, r = [], I = 0; I < e; I++) {
    var s = t.geometry.coordinates[I];
    Ms(s[0], s[s.length - 1]) || s.push(s[0]);
    for (var u = 0; u < s.length - 1; u++)
      r.push(s[u]);
  }
  if (!I2(r))
    throw new Error(
      "The input polygon may not have duplicate vertices (except for the first and last vertex of each ring)"
    );
  var c = r.length, f = w2(
    t,
    function(ae, oe, Ee, Ce, $, In, Le, ce, N, Ne, De, ke) {
      return [
        ae,
        oe,
        Ee,
        Ce,
        $,
        In,
        Le,
        ce,
        N,
        Ne,
        De,
        ke
      ];
    }
  ), h = f.length;
  if (h == 0) {
    for (var W = [], I = 0; I < e; I++)
      W.push(
        or([t.geometry.coordinates[I]], {
          parent: -1,
          winding: M2(t.geometry.coordinates[I])
        })
      );
    var j = nt(W);
    return Z(), re(), j;
  }
  for (var p = [], d = [], I = 0; I < e; I++) {
    p.push([]);
    for (var u = 0; u < t.geometry.coordinates[I].length - 1; u++)
      p[I].push([
        new af(
          t.geometry.coordinates[I][Ci(u + 1, t.geometry.coordinates[I].length - 1)],
          1,
          [I, u],
          [I, Ci(u + 1, t.geometry.coordinates[I].length - 1)],
          void 0
        )
      ]), d.push(
        new of(
          t.geometry.coordinates[I][u],
          [I, Ci(u - 1, t.geometry.coordinates[I].length - 1)],
          [I, u],
          void 0,
          void 0,
          !1,
          !0
        )
      );
  }
  for (var I = 0; I < h; I++)
    p[f[I][1]][f[I][2]].push(
      new af(
        f[I][0],
        f[I][5],
        [f[I][1], f[I][2]],
        [f[I][6], f[I][7]],
        void 0
      )
    ), f[I][11] && d.push(
      new of(
        f[I][0],
        [f[I][1], f[I][2]],
        [f[I][6], f[I][7]],
        void 0,
        void 0,
        !0,
        !0
      )
    );
  for (var v = d.length, I = 0; I < p.length; I++)
    for (var u = 0; u < p[I].length; u++)
      p[I][u].sort(function(oe, Ee) {
        return oe.param < Ee.param ? -1 : 1;
      });
  for (var _ = [], I = 0; I < v; I++)
    _.push({
      minX: d[I].coord[0],
      minY: d[I].coord[1],
      maxX: d[I].coord[0],
      maxY: d[I].coord[1],
      index: I
    });
  var x = new Kt();
  x.load(_);
  for (var I = 0; I < p.length; I++)
    for (var u = 0; u < p[I].length; u++)
      for (var M = 0; M < p[I][u].length; M++) {
        var S;
        M == p[I][u].length - 1 ? S = p[I][Ci(u + 1, t.geometry.coordinates[I].length - 1)][0].coord : S = p[I][u][M + 1].coord;
        var C = x.search({
          minX: S[0],
          minY: S[1],
          maxX: S[0],
          maxY: S[1]
        })[0];
        p[I][u][M].nxtIsectAlongEdgeIn = C.index;
      }
  for (var I = 0; I < p.length; I++)
    for (var u = 0; u < p[I].length; u++)
      for (var M = 0; M < p[I][u].length; M++) {
        var S = p[I][u][M].coord, C = x.search({
          minX: S[0],
          minY: S[1],
          maxX: S[0],
          maxY: S[1]
        })[0], F = C.index;
        F < c ? d[F].nxtIsectAlongRingAndEdge2 = p[I][u][M].nxtIsectAlongEdgeIn : Ms(
          d[F].ringAndEdge1,
          p[I][u][M].ringAndEdgeIn
        ) ? d[F].nxtIsectAlongRingAndEdge1 = p[I][u][M].nxtIsectAlongEdgeIn : d[F].nxtIsectAlongRingAndEdge2 = p[I][u][M].nxtIsectAlongEdgeIn;
      }
  for (var O = [], I = 0, u = 0; u < e; u++) {
    for (var H = I, M = 0; M < t.geometry.coordinates[u].length - 1; M++)
      d[I].coord[0] < d[H].coord[0] && (H = I), I++;
    for (var X = d[H].nxtIsectAlongRingAndEdge2, M = 0; M < d.length; M++)
      if (d[M].nxtIsectAlongRingAndEdge1 == H || d[M].nxtIsectAlongRingAndEdge2 == H) {
        var J = M;
        break;
      }
    var U = Ba(
      [
        d[J].coord,
        d[H].coord,
        d[X].coord
      ],
      !0
    ) ? 1 : -1;
    O.push({ isect: H, parent: -1, winding: U });
  }
  O.sort(function(le, ae) {
    return d[le.isect].coord > d[ae.isect].coord ? -1 : 1;
  });
  for (var W = []; O.length > 0; ) {
    var E = O.pop(), w = E.isect, b = E.parent, T = E.winding, A = W.length, G = [d[w].coord], R = w;
    if (d[w].ringAndEdge1Walkable)
      var P = d[w].ringAndEdge1, D = d[w].nxtIsectAlongRingAndEdge1;
    else
      var P = d[w].ringAndEdge2, D = d[w].nxtIsectAlongRingAndEdge2;
    for (; !Ms(d[w].coord, d[D].coord); ) {
      G.push(d[D].coord);
      for (var Y = void 0, I = 0; I < O.length; I++)
        if (O[I].isect == D) {
          Y = I;
          break;
        }
      if (Y != null && O.splice(Y, 1), Ms(P, d[D].ringAndEdge1)) {
        if (P = d[D].ringAndEdge2, d[D].ringAndEdge2Walkable = !1, d[D].ringAndEdge1Walkable) {
          var z = { isect: D };
          Ba(
            [
              d[R].coord,
              d[D].coord,
              d[d[D].nxtIsectAlongRingAndEdge2].coord
            ],
            T == 1
          ) ? (z.parent = b, z.winding = -T) : (z.parent = A, z.winding = T), O.push(z);
        }
        R = D, D = d[D].nxtIsectAlongRingAndEdge2;
      } else {
        if (P = d[D].ringAndEdge1, d[D].ringAndEdge1Walkable = !1, d[D].ringAndEdge2Walkable) {
          var z = { isect: D };
          Ba(
            [
              d[R].coord,
              d[D].coord,
              d[d[D].nxtIsectAlongRingAndEdge1].coord
            ],
            T == 1
          ) ? (z.parent = b, z.winding = -T) : (z.parent = A, z.winding = T), O.push(z);
        }
        R = D, D = d[D].nxtIsectAlongRingAndEdge1;
      }
    }
    G.push(d[D].coord), W.push(
      or([G], {
        index: A,
        parent: b,
        winding: T,
        netWinding: void 0
      })
    );
  }
  var j = nt(W);
  Z(), re();
  function Z() {
    for (var le = [], ae = 0; ae < j.features.length; ae++)
      j.features[ae].properties.parent == -1 && le.push(ae);
    if (le.length > 1)
      for (var ae = 0; ae < le.length; ae++) {
        for (var oe = -1, Ee = 1 / 0, Ce = 0; Ce < j.features.length; Ce++)
          le[ae] != Ce && ti(
            j.features[le[ae]].geometry.coordinates[0][0],
            j.features[Ce],
            { ignoreBoundary: !0 }
          ) && c2(j.features[Ce]) < Ee && (oe = Ce);
        j.features[le[ae]].properties.parent = oe;
      }
  }
  function re() {
    for (var le = 0; le < j.features.length; le++)
      if (j.features[le].properties.parent == -1) {
        var ae = j.features[le].properties.winding;
        j.features[le].properties.netWinding = ae, pe(le, ae);
      }
  }
  function pe(le, ae) {
    for (var oe = 0; oe < j.features.length; oe++)
      if (j.features[oe].properties.parent == le) {
        var Ee = ae + j.features[oe].properties.winding;
        j.features[oe].properties.netWinding = Ee, pe(oe, Ee);
      }
  }
  return j;
}
var af = function(t, e, r, s, u) {
  this.coord = t, this.param = e, this.ringAndEdgeIn = r, this.ringAndEdgeOut = s, this.nxtIsectAlongEdgeIn = u;
}, of = function(t, e, r, s, u, c, f) {
  this.coord = t, this.ringAndEdge1 = e, this.ringAndEdge2 = r, this.nxtIsectAlongRingAndEdge1 = s, this.nxtIsectAlongRingAndEdge2 = u, this.ringAndEdge1Walkable = c, this.ringAndEdge2Walkable = f;
};
function Ba(t, e) {
  if (typeof e > "u" && (e = !0), t.length != 3)
    throw new Error("This function requires an array of three points [x,y]");
  var r = (t[1][0] - t[0][0]) * (t[2][1] - t[0][1]) - (t[1][1] - t[0][1]) * (t[2][0] - t[0][0]);
  return r >= 0 == e;
}
function M2(t) {
  for (var e = 0, r = 0; r < t.length - 1; r++)
    t[r][0] < t[e][0] && (e = r);
  if (Ba(
    [
      t[Ci(e - 1, t.length - 1)],
      t[e],
      t[Ci(e + 1, t.length - 1)]
    ],
    !0
  ))
    var s = 1;
  else
    var s = -1;
  return s;
}
function Ms(t, e) {
  if (!t || !e || t.length != e.length) return !1;
  for (var r = 0, s = t.length; r < s; r++)
    if (t[r] instanceof Array && e[r] instanceof Array) {
      if (!Ms(t[r], e[r])) return !1;
    } else if (t[r] != e[r])
      return !1;
  return !0;
}
function Ci(t, e) {
  return (t % e + e) % e;
}
function I2(t) {
  for (var e = {}, r = 1, s = 0, u = t.length; s < u; ++s) {
    if (Object.prototype.hasOwnProperty.call(e, t[s])) {
      r = 0;
      break;
    }
    e[t[s]] = 1;
  }
  return r;
}
function b2(t) {
  var e = [];
  return Cr(t, function(r) {
    r.geometry.type === "Polygon" && Vn(S2(r), function(s) {
      e.push(or(s.geometry.coordinates, r.properties));
    });
  }), nt(e);
}
var L2 = b2;
class T2 extends dr {
  mode = "polygon";
  shape = "polygon";
  lineDrawer = new Kl(this.gm, { snappingMarkers: "first", targetShape: "polygon" });
  eventHandlers = {
    [`${se}:draw`]: this.forwardLineDrawerEvent.bind(this),
    mousemove: this.onMouseMove.bind(this)
  };
  onEndAction() {
    this.lineDrawer.endAction();
  }
  onStartAction() {
    this.lineDrawer.startAction(), this.lineDrawer.on("firstMarkerClick", this.polygonFinished.bind(this));
  }
  onMouseMove(e) {
    return je(e) ? (this.lineDrawer.featureData || this.fireMarkerPointerUpdateEvent(), { next: !0 }) : { next: !0 };
  }
  polygonFinished(e) {
    if (this.lineDrawer.endShape(), e.shapeCoordinates.length < 3)
      return;
    const r = this.fixShapeGeoJson(Zl(e.geoJson));
    r && this.gm.features.createFeature({
      shapeGeoJson: {
        ...r,
        properties: {
          // we don't need to have collected properties for a new polygon
          // ...geoJsonPolygon.properties,
          shape: this.shape
        }
      },
      sourceName: K.main
    });
  }
  fixShapeGeoJson(e) {
    try {
      return Hd(n2(L2(e))).features[0];
    } catch {
      return null;
    }
  }
}
class A2 extends dr {
  mode = "rectangle";
  shape = "rectangle";
  startLngLat = null;
  eventHandlers = {
    mousemove: this.onMouseMove.bind(this),
    click: this.onMouseClick.bind(this)
  };
  throttledMethods = oi(
    {
      updateFeaturePosition: this.updateFeaturePosition
    },
    this,
    this.gm.options.settings.throttlingDelay
  );
  onStartAction() {
    this.gm.markerPointer.enable();
  }
  onEndAction() {
    this.removeTmpFeature(), this.startLngLat = null, this.gm.markerPointer.disable(), this.fireFinishEvent();
  }
  onMouseClick(e) {
    if (!je(e, { warning: !0 }))
      return { next: !1 };
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    if (this.startLngLat) {
      const s = this.getFeatureGeoJson(bi(this.startLngLat, r));
      this.fireBeforeFeatureCreate({ geoJsonFeatures: [s] }), this.flags.featureCreateAllowed && this.finishShape(r);
    } else {
      const s = this.getFeatureGeoJson(bi(r, r));
      if (this.fireBeforeFeatureCreate({ geoJsonFeatures: [s] }), this.flags.featureCreateAllowed) {
        const u = this.startShape(r);
        if (u) {
          const c = this.getControlMarkerData(["geometry", "coordinates", 4]);
          this.fireStartEvent(u, c);
        }
      }
    }
    return { next: !1 };
  }
  onMouseMove(e) {
    if (!je(e, { warning: !0 }))
      return { next: !1 };
    if (!this.startLngLat)
      return this.fireMarkerPointerUpdateEvent(), { next: !1 };
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray(), s = bi(this.startLngLat, r), u = this.getFeatureGeoJson(s);
    return this.fireBeforeFeatureCreate({ geoJsonFeatures: [u] }), this.flags.featureCreateAllowed && this.throttledMethods.updateFeaturePosition(s), { next: !1 };
  }
  startShape(e) {
    this.startLngLat = e;
    const r = bi(this.startLngLat, this.startLngLat);
    return this.featureData = this.createFeature(r), this.featureData;
  }
  finishShape(e) {
    if (this.startLngLat) {
      const r = bi(this.startLngLat, e);
      this.throttledMethods.updateFeaturePosition(r);
    }
    this.featureData && (this.isFeatureGeoJsonValid() ? this.saveFeature() : this.removeTmpFeature()), this.startLngLat = null, this.fireFinishEvent();
  }
  createFeature(e) {
    return this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(e),
      sourceName: K.temporary
    });
  }
  isFeatureGeoJsonValid() {
    return this.featureData ? Jl(this.featureData.getGeoJson()) : !1;
  }
  getFeatureGeoJson(e) {
    return {
      ...$u(
        [e[0], e[2]],
        [e[2], e[3]]
      ),
      properties: {
        shape: this.shape
      }
    };
  }
  updateFeaturePosition(e) {
    if (!this.featureData)
      return;
    const r = $u(
      [e[0], e[1]],
      [e[2], e[3]]
    );
    this.featureData.updateGeoJsonGeometry(r.geometry);
    const s = this.getControlMarkerData(["geometry", "coordinates", 4]);
    this.fireUpdateEvent(this.featureData, s);
  }
  getControlMarkerData(e) {
    const r = this.gm.markerPointer.marker;
    return r ? {
      type: "dom",
      instance: r,
      position: {
        coordinate: r.getLngLat(),
        path: e
      }
    } : null;
  }
  fireStartEvent(e, r) {
    const s = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "start",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${se}:draw`, s);
  }
  fireUpdateEvent(e, r) {
    const s = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "update",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${se}:draw`, s);
  }
  fireFinishEvent() {
    const e = {
      name: `${se}:draw:shape`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "finish"
    };
    this.gm.events.fire(`${se}:draw`, e);
  }
}
class C2 extends dr {
  mode = "text_marker";
  shape = "text_marker";
  textarea = null;
  eventHandlers = {
    click: this.onMouseClick.bind(this),
    mousemove: this.onMouseMove.bind(this)
  };
  onStartAction() {
    this.gm.markerPointer.enable({ invisibleMarker: !0 });
  }
  onEndAction() {
    this.removeTextarea(), this.removeTmpFeature(), this.featureData = null, this.gm.markerPointer.disable(), this.fireMarkerPointerFinishEvent();
  }
  onMouseMove(e) {
    return je(e, { warning: !0 }) ? (this.fireMarkerPointerUpdateEvent(), { next: !0 }) : { next: !0 };
  }
  onMouseClick(e) {
    if (!je(e, { warning: !0 }))
      return { next: !0 };
    if (this.textarea)
      this.endShape(), this.gm.markerPointer.enable({ invisibleMarker: !0, lngLat: e.lngLat.toArray() }), this.fireMarkerPointerUpdateEvent();
    else {
      const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
      this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(r)] }), this.flags.featureCreateAllowed && (this.featureData = this.createFeature(r), this.gm.markerPointer.disable(), this.fireMarkerPointerFinishEvent());
    }
    return { next: !1 };
  }
  createFeature(e) {
    const r = this.gm.mapAdapter.project(e);
    return this.createTextarea(r), this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(e),
      sourceName: K.temporary
    });
  }
  endShape() {
    const e = this.textarea?.value || "";
    this.removeTextarea(), e.trim() ? (this.updateFeatureSource(e), this.saveFeature()) : this.removeTmpFeature();
  }
  createTextarea(e) {
    this.textarea = document.createElement("textarea"), this.textarea.style.position = "absolute", this.textarea.style.left = `${e[0]}px`, this.textarea.style.top = `${e[1]}px`, this.textarea.style.opacity = "0.7", this.gm.mapAdapter.getContainer().appendChild(this.textarea), this.textarea.focus();
  }
  removeTextarea() {
    this.textarea?.remove(), this.textarea = null;
  }
  getFeatureGeoJson(e) {
    return {
      type: "Feature",
      properties: {
        shape: this.shape,
        text: ""
      },
      geometry: {
        type: "Point",
        coordinates: e
      }
    };
  }
  updateFeatureSource(e) {
    this.featureData && this.featureData.updateGeoJsonProperties({ shape: this.shape, text: e });
  }
}
class N2 extends jl {
  mode = "ellipse";
  shape = "ellipse";
  xSemiAxisPoint = null;
  xSemiAxisLngLat = null;
  throttledMethods = oi(
    {
      updateFeatureGeoJson: this.updateFeatureGeoJson
    },
    this,
    this.gm.options.settings.throttlingDelay
  );
  onMouseClick(e) {
    if (!je(e))
      return { next: !0 };
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    if (this.circleCenterLngLat && this.xSemiAxisLngLat)
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [
          this.getEllipseGeoJson(this.circleCenterLngLat, this.xSemiAxisLngLat, r)
        ]
      }), this.flags.featureCreateAllowed && (this.saveEllipseFeature(r), this.circleCenterLngLat = null, this.circleCenterPoint = null, this.xSemiAxisPoint = null, this.xSemiAxisLngLat = null, this.fireFinishEvent());
    else if (this.circleCenterLngLat)
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [this.getEllipseGeoJson(this.circleCenterLngLat, r)]
      }), this.flags.featureCreateAllowed && (this.xSemiAxisLngLat = r, this.xSemiAxisPoint = this.gm.mapAdapter.project(this.circleCenterLngLat));
    else if (this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(r)] }), this.flags.featureCreateAllowed) {
      this.circleCenterLngLat = r, this.circleCenterPoint = this.gm.mapAdapter.project(this.circleCenterLngLat), this.featureData = this.createFeature();
      const s = this.getControlMarkerData();
      this.featureData && s && this.fireStartEvent(this.featureData, s);
    }
    return { next: !1 };
  }
  onMouseMove() {
    if (this.circleCenterLngLat && this.gm.markerPointer.marker) {
      const e = this.gm.markerPointer.marker.getLngLat();
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [
          this.xSemiAxisLngLat ? this.getEllipseGeoJson(this.circleCenterLngLat, this.xSemiAxisLngLat, e) : this.getEllipseGeoJson(this.circleCenterLngLat, e)
        ]
      }), this.flags.featureCreateAllowed && this.throttledMethods.updateFeatureGeoJson(e);
    }
    return this.circleCenterLngLat || this.fireMarkerPointerUpdateEvent(), { next: !1 };
  }
  updateFeatureGeoJson(e) {
    if (!this.featureData || !this.circleCenterLngLat)
      return;
    const r = this.xSemiAxisLngLat ? this.getEllipseGeoJson(this.circleCenterLngLat, this.xSemiAxisLngLat, e) : this.getEllipseGeoJson(this.circleCenterLngLat, e);
    this.featureData.updateGeoJsonGeometry(r.geometry), this.featureData.updateGeoJsonProperties({
      shape: r.properties.shape
    });
    const s = this.getControlMarkerData();
    s && this.fireUpdateEvent(this.featureData, s);
  }
  saveEllipseFeature(e) {
    if (!(!this.circleCenterLngLat || !this.xSemiAxisLngLat) && this.featureData) {
      const r = this.gm.markerPointer.marker?.getLngLat() || e;
      this.updateFeatureGeoJson(r);
      const { xSemiAxis: s, ySemiAxis: u, angle: c } = jh({
        center: this.circleCenterLngLat,
        xSemiAxisLngLat: this.xSemiAxisLngLat,
        rimLngLat: r
      });
      this.featureData.setShapeProperty("center", this.circleCenterLngLat), this.featureData.setShapeProperty("xSemiAxis", s), this.featureData.setShapeProperty("ySemiAxis", u), this.featureData.setShapeProperty("angle", c), this.isFeatureGeoJsonValid() ? this.saveFeature() : this.removeTmpFeature();
    }
  }
  isFeatureGeoJsonValid() {
    return this.featureData ? Jl(this.featureData.getGeoJson()) : !1;
  }
  getEllipseGeoJson(e, r, s) {
    const { xSemiAxis: u, ySemiAxis: c, angle: f } = jh({
      center: e,
      xSemiAxisLngLat: r,
      rimLngLat: s
    });
    return Co({ center: e, xSemiAxis: u, ySemiAxis: c, angle: f });
  }
}
const Xu = {
  marker: e2,
  ellipse: N2,
  circle: Xk,
  circle_marker: zk,
  text_marker: C2,
  line: Qk,
  rectangle: A2,
  polygon: T2,
  freehand: null,
  custom_shape: null
}, P2 = (t, e) => Xu[e] ? new Xu[e](t) : (te.error(`Draw "${e}" is not available`), null), es = (t) => kn(t) && t.actionType === "edit", O2 = (t) => Ad.includes(t), _I = (t) => fk.includes(t), R2 = (t) => Nd.includes(t), D2 = (t) => Od.includes(t), F2 = (t) => Pd.includes(t), G2 = (t) => R2(t) || D2(t) || F2(t);
class B2 extends bo {
  eventHandlers = {
    [`${se}:draw`]: this.handleDrawEvent.bind(this)
  };
  constructor(e, r) {
    super(e), r.attachEvents(this.eventHandlers);
  }
  handleDrawEvent(e) {
    if (!Wl(e))
      return { next: !0 };
    const r = `${e.actionType}__${e.mode}`;
    return e.action === "mode_start" ? (this.trackExclusiveModes(e), this.start(r, e), this.trackRelatedModes(e)) : e.action === "mode_end" && (this.trackRelatedModes(e), this.end(r)), { next: !0 };
  }
  start(e, r) {
    const s = P2(this.gm, r.mode);
    s && (e in this.gm.actionInstances && te.error(`Action instance "${e}" already exists`), this.gm.actionInstances[e] = s, s.startAction());
  }
  end(e) {
    const r = this.gm.actionInstances[e];
    r instanceof dr ? (r.endAction(), delete this.gm.actionInstances[e]) : console.error(`Wrong action instance for draw event "${e}":`, r);
  }
}
class ts extends Xl {
  actionType = "edit";
  featureData = null;
  cursorExcludedLayerIds = ["rectangle-line", "polygon-line", "circle-line"];
  layerEventHandlersData = [];
  startAction() {
    this.setEventsForLayers("mouseenter", this.setCursorToPointer.bind(this)), this.setEventsForLayers("mouseleave", this.setCursorToEmpty.bind(this)), super.startAction();
  }
  endAction() {
    this.clearEventsForLayers(), super.endAction();
  }
  setCursorToPointer() {
    this.flags.actionInProgress || this.gm.mapAdapter.setCursor("pointer");
  }
  setCursorToEmpty() {
    this.flags.actionInProgress || this.gm.mapAdapter.setCursor("");
  }
  getFeatureByMouseEvent({
    event: e,
    sourceNames: r
  }) {
    const s = this.gm.features.getFeatureByMouseEvent({
      event: e,
      sourceNames: r
    });
    return !s || s.getShapeProperty("disableEdit") === !0 ? null : s;
  }
  setEventsForLayers(e, r) {
    this.gm.features.layers.map((u) => u.id).filter(
      (u) => !this.cursorExcludedLayerIds.some((c) => u.includes(c))
    ).forEach((u) => {
      this.gm.mapAdapter.on(e, u, r), this.layerEventHandlersData.push({ eventName: e, layerId: u, callback: r });
    });
  }
  clearEventsForLayers() {
    this.layerEventHandlersData.forEach(({ eventName: e, layerId: r, callback: s }) => {
      this.gm.mapAdapter.off(e, r, s);
    }), this.layerEventHandlersData = [];
  }
  updateFeatureGeoJson({
    featureData: e,
    featureGeoJson: r,
    forceMode: s = void 0
  }) {
    return this.flags.featureUpdateAllowed ? (e.updateGeoJsonGeometry(r.geometry), Wi(e.getGeoJson().properties, r.properties) || e.updateGeoJsonProperties(r.properties), this.fireFeatureUpdatedEvent({
      sourceFeatures: [e],
      targetFeatures: [e],
      forceMode: s
    }), !0) : !1;
  }
  fireBeforeFeatureUpdate({
    features: e,
    geoJsonFeatures: r,
    forceMode: s = void 0
  }) {
    this.flags.featureUpdateAllowed = !0;
    const u = {
      name: `${se}:feature:before_update`,
      level: "system",
      actionType: "edit",
      mode: s || this.mode,
      action: "before_update",
      features: e,
      geoJsonFeatures: r
    };
    this.gm.events.fire(`${se}:${this.actionType}`, u);
  }
  fireFeatureUpdatedEvent({
    sourceFeatures: e,
    targetFeatures: r,
    markerData: s = void 0,
    forceMode: u = void 0
  }) {
    const c = {
      name: `${se}:edit:feature_updated`,
      level: "system",
      actionType: "edit",
      action: "feature_updated",
      mode: u || this.mode,
      sourceFeatures: e,
      targetFeatures: r,
      markerData: s || null
    };
    this.gm.events.fire(`${se}:edit`, c);
  }
  fireFeatureEditStartEvent({
    feature: e,
    forceMode: r = void 0
  }) {
    const s = {
      name: `${se}:edit:feature_edit_start`,
      level: "system",
      actionType: "edit",
      action: "feature_edit_start",
      mode: r || this.mode,
      feature: e
    };
    this.gm.events.fire(`${se}:edit`, s);
  }
  fireFeatureEditEndEvent({
    feature: e,
    forceMode: r = void 0
  }) {
    const s = {
      name: `${se}:edit:feature_edit_end`,
      level: "system",
      actionType: "edit",
      action: "feature_edit_end",
      mode: r || this.mode,
      feature: e
    };
    this.gm.events.fire(`${se}:edit`, s);
  }
  fireMarkerPointerUpdateEvent() {
    if (!this.gm.markerPointer.marker)
      return;
    const e = this.gm.markerPointer.marker, r = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      variant: null,
      actionType: "draw",
      mode: this.getLineDrawerMode(),
      action: "update",
      markerData: {
        type: "dom",
        instance: e,
        position: {
          coordinate: e.getLngLat(),
          path: [-1]
        }
      },
      featureData: null
    };
    this.gm.events.fire(`${se}:draw`, r);
  }
  forwardLineDrawerEvent(e) {
    if (!tp(e) || !["cut", "split"].includes(this.mode))
      return { next: !0 };
    if (e.action === "start" || e.action === "update") {
      const r = {
        name: `${se}:draw:shape_with_data`,
        level: "system",
        actionType: "draw",
        mode: this.getLineDrawerMode(),
        variant: null,
        action: e.action,
        featureData: e.featureData,
        markerData: e.markerData
      };
      this.gm.events.fire(`${se}:draw`, r);
    } else if (e.action === "finish" || e.action === "cancel") {
      const r = {
        name: `${se}:draw:shape`,
        level: "system",
        actionType: "draw",
        mode: this.getLineDrawerMode(),
        variant: null,
        action: e.action
      };
      this.gm.events.fire(`${se}:draw`, r);
    }
    return { next: !0 };
  }
  fireFeatureRemovedEvent(e) {
    if (Tr(e.shape, Wr)) {
      const r = {
        name: `${se}:edit:feature_removed`,
        level: "system",
        actionType: "edit",
        mode: e.shape,
        action: "feature_removed",
        featureData: e
      };
      this.gm.events.fire(`${se}:edit`, r);
    }
  }
  getLineDrawerMode() {
    return this.mode === "cut" ? "polygon" : (this.mode === "split", "line");
  }
}
function U2(t, e = {}) {
  const r = Bn(t), s = (r[0] + r[2]) / 2, u = (r[1] + r[3]) / 2;
  return zn([s, u], e.properties, e);
}
var Ua = { exports: {} }, z2 = Ua.exports, uf;
function q2() {
  return uf || (uf = 1, (function(t, e) {
    (function(r, s) {
      t.exports = s();
    })(z2, (function() {
      function r(o, n) {
        (n == null || n > o.length) && (n = o.length);
        for (var i = 0, a = Array(n); i < n; i++) a[i] = o[i];
        return a;
      }
      function s(o, n, i) {
        return n = v(n), (function(a, l) {
          if (l && (typeof l == "object" || typeof l == "function")) return l;
          if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
          return (function(g) {
            if (g === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g;
          })(a);
        })(o, x() ? Reflect.construct(n, i || [], v(o).constructor) : n.apply(o, i));
      }
      function u(o, n) {
        if (!(o instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function c(o, n, i) {
        if (x()) return Reflect.construct.apply(null, arguments);
        var a = [null];
        a.push.apply(a, n);
        var l = new (o.bind.apply(o, a))();
        return i && M(l, i.prototype), l;
      }
      function f(o, n) {
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(o, F(a.key), a);
        }
      }
      function h(o, n, i) {
        return n && f(o.prototype, n), i && f(o, i), Object.defineProperty(o, "prototype", { writable: !1 }), o;
      }
      function p(o, n) {
        var i = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
        if (!i) {
          if (Array.isArray(o) || (i = O(o)) || n) {
            i && (o = i);
            var a = 0, l = function() {
            };
            return { s: l, n: function() {
              return a >= o.length ? { done: !0 } : { done: !1, value: o[a++] };
            }, e: function(k) {
              throw k;
            }, f: l };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var g, m = !0, y = !1;
        return { s: function() {
          i = i.call(o);
        }, n: function() {
          var k = i.next();
          return m = k.done, k;
        }, e: function(k) {
          y = !0, g = k;
        }, f: function() {
          try {
            m || i.return == null || i.return();
          } finally {
            if (y) throw g;
          }
        } };
      }
      function d() {
        return d = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(o, n, i) {
          var a = (function(g, m) {
            for (; !{}.hasOwnProperty.call(g, m) && (g = v(g)) !== null; ) ;
            return g;
          })(o, n);
          if (a) {
            var l = Object.getOwnPropertyDescriptor(a, n);
            return l.get ? l.get.call(arguments.length < 3 ? o : i) : l.value;
          }
        }, d.apply(null, arguments);
      }
      function v(o) {
        return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }, v(o);
      }
      function _(o, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
        o.prototype = Object.create(n && n.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, "prototype", { writable: !1 }), n && M(o, n);
      }
      function x() {
        try {
          var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
          })));
        } catch {
        }
        return (x = function() {
          return !!o;
        })();
      }
      function M(o, n) {
        return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, a) {
          return i.__proto__ = a, i;
        }, M(o, n);
      }
      function S(o, n, i, a) {
        var l = d(v(1 & a ? o.prototype : o), n, i);
        return 2 & a && typeof l == "function" ? function(g) {
          return l.apply(i, g);
        } : l;
      }
      function C(o) {
        return (function(n) {
          if (Array.isArray(n)) return r(n);
        })(o) || (function(n) {
          if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
        })(o) || O(o) || (function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        })();
      }
      function F(o) {
        var n = (function(i, a) {
          if (typeof i != "object" || !i) return i;
          var l = i[Symbol.toPrimitive];
          if (l !== void 0) {
            var g = l.call(i, a);
            if (typeof g != "object") return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(i);
        })(o, "string");
        return typeof n == "symbol" ? n : n + "";
      }
      function O(o, n) {
        if (o) {
          if (typeof o == "string") return r(o, n);
          var i = {}.toString.call(o).slice(8, -1);
          return i === "Object" && o.constructor && (i = o.constructor.name), i === "Map" || i === "Set" ? Array.from(o) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? r(o, n) : void 0;
        }
      }
      function I(o) {
        var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
        return I = function(i) {
          if (i === null || !(function(l) {
            try {
              return Function.toString.call(l).indexOf("[native code]") !== -1;
            } catch {
              return typeof l == "function";
            }
          })(i)) return i;
          if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
          if (n !== void 0) {
            if (n.has(i)) return n.get(i);
            n.set(i, a);
          }
          function a() {
            return c(i, arguments, v(this).constructor);
          }
          return a.prototype = Object.create(i.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), M(a, i);
        }, I(o);
      }
      var H = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getEndCapStyle", value: function() {
          return this._endCapStyle;
        } }, { key: "isSingleSided", value: function() {
          return this._isSingleSided;
        } }, { key: "setQuadrantSegments", value: function(n) {
          this._quadrantSegments = n, this._quadrantSegments === 0 && (this._joinStyle = o.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = o.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), n <= 0 && (this._quadrantSegments = 1), this._joinStyle !== o.JOIN_ROUND && (this._quadrantSegments = o.DEFAULT_QUADRANT_SEGMENTS);
        } }, { key: "getJoinStyle", value: function() {
          return this._joinStyle;
        } }, { key: "setJoinStyle", value: function(n) {
          this._joinStyle = n;
        } }, { key: "setSimplifyFactor", value: function(n) {
          this._simplifyFactor = n < 0 ? 0 : n;
        } }, { key: "getSimplifyFactor", value: function() {
          return this._simplifyFactor;
        } }, { key: "getQuadrantSegments", value: function() {
          return this._quadrantSegments;
        } }, { key: "setEndCapStyle", value: function(n) {
          this._endCapStyle = n;
        } }, { key: "getMitreLimit", value: function() {
          return this._mitreLimit;
        } }, { key: "setMitreLimit", value: function(n) {
          this._mitreLimit = n;
        } }, { key: "setSingleSided", value: function(n) {
          this._isSingleSided = n;
        } }], [{ key: "constructor_", value: function() {
          if (this._quadrantSegments = o.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = o.CAP_ROUND, this._joinStyle = o.JOIN_ROUND, this._mitreLimit = o.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = o.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
            if (arguments.length === 1) {
              var n = arguments[0];
              this.setQuadrantSegments(n);
            } else if (arguments.length === 2) {
              var i = arguments[0], a = arguments[1];
              this.setQuadrantSegments(i), this.setEndCapStyle(a);
            } else if (arguments.length === 4) {
              var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3];
              this.setQuadrantSegments(l), this.setEndCapStyle(g), this.setJoinStyle(m), this.setMitreLimit(y);
            }
          }
        } }, { key: "bufferDistanceError", value: function(n) {
          var i = Math.PI / 2 / n;
          return 1 - Math.cos(i / 2);
        } }]);
      })();
      H.CAP_ROUND = 1, H.CAP_FLAT = 2, H.CAP_SQUARE = 3, H.JOIN_ROUND = 1, H.JOIN_MITRE = 2, H.JOIN_BEVEL = 3, H.DEFAULT_QUADRANT_SEGMENTS = 8, H.DEFAULT_MITRE_LIMIT = 5, H.DEFAULT_SIMPLIFY_FACTOR = 0.01;
      var X = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ Exception: n })[0], a;
        }
        return _(n, o), h(n, [{ key: "toString", value: function() {
          return this.message;
        } }]);
      })(I(Error)), J = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ IllegalArgumentException: n })[0], a;
        }
        return _(n, o), h(n);
      })(X), U = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "filter", value: function(o) {
        } }]);
      })();
      function W() {
      }
      function E() {
      }
      function w() {
      }
      var b, T, A, G, R, P, D, Y, z = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "equalsWithTolerance", value: function(o, n, i) {
          return Math.abs(o - n) <= i;
        } }]);
      })(), j = (function() {
        return h((function o(n, i) {
          u(this, o), this.low = i || 0, this.high = n || 0;
        }), null, [{ key: "toBinaryString", value: function(o) {
          var n, i = "";
          for (n = 2147483648; n > 0; n >>>= 1) i += (o.high & n) === n ? "1" : "0";
          for (n = 2147483648; n > 0; n >>>= 1) i += (o.low & n) === n ? "1" : "0";
          return i;
        } }]);
      })();
      function Z() {
      }
      function re() {
      }
      Z.NaN = NaN, Z.isNaN = function(o) {
        return Number.isNaN(o);
      }, Z.isInfinite = function(o) {
        return !Number.isFinite(o);
      }, Z.MAX_VALUE = Number.MAX_VALUE, Z.POSITIVE_INFINITY = Number.POSITIVE_INFINITY, Z.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, typeof Float64Array == "function" && typeof Int32Array == "function" ? (P = 2146435072, D = new Float64Array(1), Y = new Int32Array(D.buffer), Z.doubleToLongBits = function(o) {
        D[0] = o;
        var n = 0 | Y[0], i = 0 | Y[1];
        return (i & P) === P && 1048575 & i && n !== 0 && (n = 0, i = 2146959360), new j(i, n);
      }, Z.longBitsToDouble = function(o) {
        return Y[0] = o.low, Y[1] = o.high, D[0];
      }) : (b = 1023, T = Math.log2, A = Math.floor, G = Math.pow, R = (function() {
        for (var o = 53; o > 0; o--) {
          var n = G(2, o) - 1;
          if (A(T(n)) + 1 === o) return n;
        }
        return 0;
      })(), Z.doubleToLongBits = function(o) {
        var n, i, a, l, g, m, y, k, L;
        if (o < 0 || 1 / o === Number.NEGATIVE_INFINITY ? (m = 1 << 31, o = -o) : m = 0, o === 0) return new j(k = m, L = 0);
        if (o === 1 / 0) return new j(k = 2146435072 | m, L = 0);
        if (o != o) return new j(k = 2146959360, L = 0);
        if (l = 0, L = 0, (n = A(o)) > 1) if (n <= R) (l = A(T(n))) <= 20 ? (L = 0, k = n << 20 - l & 1048575) : (L = n % (i = G(2, a = l - 20)) << 32 - a, k = n / i & 1048575);
        else for (a = n, L = 0; (a = A(i = a / 2)) !== 0; ) l++, L >>>= 1, L |= (1 & k) << 31, k >>>= 1, i !== a && (k |= 524288);
        if (y = l + b, g = n === 0, n = o - n, l < 52 && n !== 0) for (a = 0; ; ) {
          if ((i = 2 * n) >= 1 ? (n = i - 1, g ? (y--, g = !1) : (a <<= 1, a |= 1, l++)) : (n = i, g ? --y == 0 && (l++, g = !1) : (a <<= 1, l++)), l === 20) k |= a, a = 0;
          else if (l === 52) {
            L |= a;
            break;
          }
          if (i === 1) {
            l < 20 ? k |= a << 20 - l : l < 52 && (L |= a << 52 - l);
            break;
          }
        }
        return k |= y << 20, new j(k |= m, L);
      }, Z.longBitsToDouble = function(o) {
        var n, i, a, l, g = o.high, m = o.low, y = g & 1 << 31 ? -1 : 1;
        for (a = ((2146435072 & g) >> 20) - b, l = 0, i = 1 << 19, n = 1; n <= 20; n++) g & i && (l += G(2, -n)), i >>>= 1;
        for (i = 1 << 31, n = 21; n <= 52; n++) m & i && (l += G(2, -n)), i >>>= 1;
        if (a === -1023) {
          if (l === 0) return 0 * y;
          a = -1022;
        } else {
          if (a === 1024) return l === 0 ? y / 0 : NaN;
          l += 1;
        }
        return y * l * G(2, a);
      });
      var pe = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ RuntimeException: n })[0], a;
        }
        return _(n, o), h(n);
      })(X), le = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, null, [{ key: "constructor_", value: function() {
          if (arguments.length === 0) pe.constructor_.call(this);
          else if (arguments.length === 1) {
            var i = arguments[0];
            pe.constructor_.call(this, i);
          }
        } }]);
      })(pe), ae = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "shouldNeverReachHere", value: function() {
          if (arguments.length === 0) o.shouldNeverReachHere(null);
          else if (arguments.length === 1) {
            var n = arguments[0];
            throw new le("Should never reach here" + (n !== null ? ": " + n : ""));
          }
        } }, { key: "isTrue", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            o.isTrue(n, null);
          } else if (arguments.length === 2) {
            var i = arguments[1];
            if (!arguments[0]) throw i === null ? new le() : new le(i);
          }
        } }, { key: "equals", value: function() {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            o.equals(n, i, null);
          } else if (arguments.length === 3) {
            var a = arguments[0], l = arguments[1], g = arguments[2];
            if (!l.equals(a)) throw new le("Expected " + a + " but encountered " + l + (g !== null ? ": " + g : ""));
          }
        } }]);
      })(), oe = new ArrayBuffer(8), Ee = new Float64Array(oe), Ce = new Int32Array(oe), $ = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getM", value: function() {
          return Z.NaN;
        } }, { key: "setOrdinate", value: function(n, i) {
          switch (n) {
            case o.X:
              this.x = i;
              break;
            case o.Y:
              this.y = i;
              break;
            case o.Z:
              this.setZ(i);
              break;
            default:
              throw new J("Invalid ordinate index: " + n);
          }
        } }, { key: "equals2D", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return this.x === n.x && this.y === n.y;
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return !!z.equalsWithTolerance(this.x, i.x, a) && !!z.equalsWithTolerance(this.y, i.y, a);
          }
        } }, { key: "setM", value: function(n) {
          throw new J("Invalid ordinate index: " + o.M);
        } }, { key: "getZ", value: function() {
          return this.z;
        } }, { key: "getOrdinate", value: function(n) {
          switch (n) {
            case o.X:
              return this.x;
            case o.Y:
              return this.y;
            case o.Z:
              return this.getZ();
          }
          throw new J("Invalid ordinate index: " + n);
        } }, { key: "equals3D", value: function(n) {
          return this.x === n.x && this.y === n.y && (this.getZ() === n.getZ() || Z.isNaN(this.getZ()) && Z.isNaN(n.getZ()));
        } }, { key: "equals", value: function(n) {
          return n instanceof o && this.equals2D(n);
        } }, { key: "equalInZ", value: function(n, i) {
          return z.equalsWithTolerance(this.getZ(), n.getZ(), i);
        } }, { key: "setX", value: function(n) {
          this.x = n;
        } }, { key: "compareTo", value: function(n) {
          var i = n;
          return this.x < i.x ? -1 : this.x > i.x ? 1 : this.y < i.y ? -1 : this.y > i.y ? 1 : 0;
        } }, { key: "getX", value: function() {
          return this.x;
        } }, { key: "setZ", value: function(n) {
          this.z = n;
        } }, { key: "clone", value: function() {
          try {
            return null;
          } catch (n) {
            if (n instanceof CloneNotSupportedException) return ae.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
            throw n;
          }
        } }, { key: "copy", value: function() {
          return new o(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ", " + this.getZ() + ")";
        } }, { key: "distance3D", value: function(n) {
          var i = this.x - n.x, a = this.y - n.y, l = this.getZ() - n.getZ();
          return Math.sqrt(i * i + a * a + l * l);
        } }, { key: "getY", value: function() {
          return this.y;
        } }, { key: "setY", value: function(n) {
          this.y = n;
        } }, { key: "distance", value: function(n) {
          var i = this.x - n.x, a = this.y - n.y;
          return Math.sqrt(i * i + a * a);
        } }, { key: "hashCode", value: function() {
          var n = 17;
          return n = 37 * (n = 37 * n + o.hashCode(this.x)) + o.hashCode(this.y);
        } }, { key: "setCoordinate", value: function(n) {
          this.x = n.x, this.y = n.y, this.z = n.getZ();
        } }, { key: "interfaces_", get: function() {
          return [W, E, w];
        } }], [{ key: "constructor_", value: function() {
          if (this.x = null, this.y = null, this.z = null, arguments.length === 0) o.constructor_.call(this, 0, 0);
          else if (arguments.length === 1) {
            var n = arguments[0];
            o.constructor_.call(this, n.x, n.y, n.getZ());
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            o.constructor_.call(this, i, a, o.NULL_ORDINATE);
          } else if (arguments.length === 3) {
            var l = arguments[0], g = arguments[1], m = arguments[2];
            this.x = l, this.y = g, this.z = m;
          }
        } }, { key: "hashCode", value: function(n) {
          return Ee[0] = n, Ce[0] ^ Ce[1];
        } }]);
      })(), In = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "compare", value: function(n, i) {
          var a = o.compare(n.x, i.x);
          if (a !== 0) return a;
          var l = o.compare(n.y, i.y);
          return l !== 0 ? l : this._dimensionsToTest <= 2 ? 0 : o.compare(n.getZ(), i.getZ());
        } }, { key: "interfaces_", get: function() {
          return [re];
        } }], [{ key: "constructor_", value: function() {
          if (this._dimensionsToTest = 2, arguments.length === 0) o.constructor_.call(this, 2);
          else if (arguments.length === 1) {
            var n = arguments[0];
            if (n !== 2 && n !== 3) throw new J("only 2 or 3 dimensions may be specified");
            this._dimensionsToTest = n;
          }
        } }, { key: "compare", value: function(n, i) {
          return n < i ? -1 : n > i ? 1 : Z.isNaN(n) ? Z.isNaN(i) ? 0 : -1 : Z.isNaN(i) ? 1 : 0;
        } }]);
      })();
      $.DimensionalComparator = In, $.NULL_ORDINATE = Z.NaN, $.X = 0, $.Y = 1, $.Z = 2, $.M = 3;
      var Le = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getArea", value: function() {
          return this.getWidth() * this.getHeight();
        } }, { key: "equals", value: function(n) {
          if (!(n instanceof o)) return !1;
          var i = n;
          return this.isNull() ? i.isNull() : this._maxx === i.getMaxX() && this._maxy === i.getMaxY() && this._minx === i.getMinX() && this._miny === i.getMinY();
        } }, { key: "intersection", value: function(n) {
          if (this.isNull() || n.isNull() || !this.intersects(n)) return new o();
          var i = this._minx > n._minx ? this._minx : n._minx, a = this._miny > n._miny ? this._miny : n._miny;
          return new o(i, this._maxx < n._maxx ? this._maxx : n._maxx, a, this._maxy < n._maxy ? this._maxy : n._maxy);
        } }, { key: "isNull", value: function() {
          return this._maxx < this._minx;
        } }, { key: "getMaxX", value: function() {
          return this._maxx;
        } }, { key: "covers", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof $) {
              var n = arguments[0];
              return this.covers(n.x, n.y);
            }
            if (arguments[0] instanceof o) {
              var i = arguments[0];
              return !this.isNull() && !i.isNull() && i.getMinX() >= this._minx && i.getMaxX() <= this._maxx && i.getMinY() >= this._miny && i.getMaxY() <= this._maxy;
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            return !this.isNull() && a >= this._minx && a <= this._maxx && l >= this._miny && l <= this._maxy;
          }
        } }, { key: "intersects", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var n = arguments[0];
              return !this.isNull() && !n.isNull() && !(n._minx > this._maxx || n._maxx < this._minx || n._miny > this._maxy || n._maxy < this._miny);
            }
            if (arguments[0] instanceof $) {
              var i = arguments[0];
              return this.intersects(i.x, i.y);
            }
          } else if (arguments.length === 2) {
            if (arguments[0] instanceof $ && arguments[1] instanceof $) {
              var a = arguments[0], l = arguments[1];
              return !this.isNull() && !((a.x < l.x ? a.x : l.x) > this._maxx) && !((a.x > l.x ? a.x : l.x) < this._minx) && !((a.y < l.y ? a.y : l.y) > this._maxy) && !((a.y > l.y ? a.y : l.y) < this._miny);
            }
            if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
              var g = arguments[0], m = arguments[1];
              return !this.isNull() && !(g > this._maxx || g < this._minx || m > this._maxy || m < this._miny);
            }
          }
        } }, { key: "getMinY", value: function() {
          return this._miny;
        } }, { key: "getDiameter", value: function() {
          if (this.isNull()) return 0;
          var n = this.getWidth(), i = this.getHeight();
          return Math.sqrt(n * n + i * i);
        } }, { key: "getMinX", value: function() {
          return this._minx;
        } }, { key: "expandToInclude", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof $) {
              var n = arguments[0];
              this.expandToInclude(n.x, n.y);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              if (i.isNull()) return null;
              this.isNull() ? (this._minx = i.getMinX(), this._maxx = i.getMaxX(), this._miny = i.getMinY(), this._maxy = i.getMaxY()) : (i._minx < this._minx && (this._minx = i._minx), i._maxx > this._maxx && (this._maxx = i._maxx), i._miny < this._miny && (this._miny = i._miny), i._maxy > this._maxy && (this._maxy = i._maxy));
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            this.isNull() ? (this._minx = a, this._maxx = a, this._miny = l, this._maxy = l) : (a < this._minx && (this._minx = a), a > this._maxx && (this._maxx = a), l < this._miny && (this._miny = l), l > this._maxy && (this._maxy = l));
          }
        } }, { key: "minExtent", value: function() {
          if (this.isNull()) return 0;
          var n = this.getWidth(), i = this.getHeight();
          return n < i ? n : i;
        } }, { key: "getWidth", value: function() {
          return this.isNull() ? 0 : this._maxx - this._minx;
        } }, { key: "compareTo", value: function(n) {
          var i = n;
          return this.isNull() ? i.isNull() ? 0 : -1 : i.isNull() ? 1 : this._minx < i._minx ? -1 : this._minx > i._minx ? 1 : this._miny < i._miny ? -1 : this._miny > i._miny ? 1 : this._maxx < i._maxx ? -1 : this._maxx > i._maxx ? 1 : this._maxy < i._maxy ? -1 : this._maxy > i._maxy ? 1 : 0;
        } }, { key: "translate", value: function(n, i) {
          if (this.isNull()) return null;
          this.init(this.getMinX() + n, this.getMaxX() + n, this.getMinY() + i, this.getMaxY() + i);
        } }, { key: "copy", value: function() {
          return new o(this);
        } }, { key: "toString", value: function() {
          return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
        } }, { key: "setToNull", value: function() {
          this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
        } }, { key: "disjoint", value: function(n) {
          return !(!this.isNull() && !n.isNull()) || n._minx > this._maxx || n._maxx < this._minx || n._miny > this._maxy || n._maxy < this._miny;
        } }, { key: "getHeight", value: function() {
          return this.isNull() ? 0 : this._maxy - this._miny;
        } }, { key: "maxExtent", value: function() {
          if (this.isNull()) return 0;
          var n = this.getWidth(), i = this.getHeight();
          return n > i ? n : i;
        } }, { key: "expandBy", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.expandBy(n, n);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            if (this.isNull()) return null;
            this._minx -= i, this._maxx += i, this._miny -= a, this._maxy += a, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
          }
        } }, { key: "contains", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var n = arguments[0];
              return this.covers(n);
            }
            if (arguments[0] instanceof $) {
              var i = arguments[0];
              return this.covers(i);
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            return this.covers(a, l);
          }
        } }, { key: "centre", value: function() {
          return this.isNull() ? null : new $((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
        } }, { key: "init", value: function() {
          if (arguments.length === 0) this.setToNull();
          else if (arguments.length === 1) {
            if (arguments[0] instanceof $) {
              var n = arguments[0];
              this.init(n.x, n.x, n.y, n.y);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this._minx = i._minx, this._maxx = i._maxx, this._miny = i._miny, this._maxy = i._maxy;
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            this.init(a.x, l.x, a.y, l.y);
          } else if (arguments.length === 4) {
            var g = arguments[0], m = arguments[1], y = arguments[2], k = arguments[3];
            g < m ? (this._minx = g, this._maxx = m) : (this._minx = m, this._maxx = g), y < k ? (this._miny = y, this._maxy = k) : (this._miny = k, this._maxy = y);
          }
        } }, { key: "getMaxY", value: function() {
          return this._maxy;
        } }, { key: "distance", value: function(n) {
          if (this.intersects(n)) return 0;
          var i = 0;
          this._maxx < n._minx ? i = n._minx - this._maxx : this._minx > n._maxx && (i = this._minx - n._maxx);
          var a = 0;
          return this._maxy < n._miny ? a = n._miny - this._maxy : this._miny > n._maxy && (a = this._miny - n._maxy), i === 0 ? a : a === 0 ? i : Math.sqrt(i * i + a * a);
        } }, { key: "hashCode", value: function() {
          var n = 17;
          return n = 37 * (n = 37 * (n = 37 * (n = 37 * n + $.hashCode(this._minx)) + $.hashCode(this._maxx)) + $.hashCode(this._miny)) + $.hashCode(this._maxy);
        } }, { key: "interfaces_", get: function() {
          return [W, w];
        } }], [{ key: "constructor_", value: function() {
          if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0) this.init();
          else if (arguments.length === 1) {
            if (arguments[0] instanceof $) {
              var n = arguments[0];
              this.init(n.x, n.x, n.y, n.y);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this.init(i);
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            this.init(a.x, l.x, a.y, l.y);
          } else if (arguments.length === 4) {
            var g = arguments[0], m = arguments[1], y = arguments[2], k = arguments[3];
            this.init(g, m, y, k);
          }
        } }, { key: "intersects", value: function() {
          if (arguments.length === 3) {
            var n = arguments[0], i = arguments[1], a = arguments[2];
            return a.x >= (n.x < i.x ? n.x : i.x) && a.x <= (n.x > i.x ? n.x : i.x) && a.y >= (n.y < i.y ? n.y : i.y) && a.y <= (n.y > i.y ? n.y : i.y);
          }
          if (arguments.length === 4) {
            var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3], k = Math.min(m.x, y.x), L = Math.max(m.x, y.x), q = Math.min(l.x, g.x), V = Math.max(l.x, g.x);
            return !(q > L) && !(V < k) && (k = Math.min(m.y, y.y), L = Math.max(m.y, y.y), q = Math.min(l.y, g.y), V = Math.max(l.y, g.y), !(q > L) && !(V < k));
          }
        } }]);
      })(), ce = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isGeometryCollection", value: function() {
          return this.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION;
        } }, { key: "getFactory", value: function() {
          return this._factory;
        } }, { key: "getGeometryN", value: function(n) {
          return this;
        } }, { key: "getArea", value: function() {
          return 0;
        } }, { key: "isRectangle", value: function() {
          return !1;
        } }, { key: "equalsExact", value: function(n) {
          return this === n || this.equalsExact(n, 0);
        } }, { key: "geometryChanged", value: function() {
          this.apply(o.geometryChangedFilter);
        } }, { key: "geometryChangedAction", value: function() {
          this._envelope = null;
        } }, { key: "equalsNorm", value: function(n) {
          return n !== null && this.norm().equalsExact(n.norm());
        } }, { key: "getLength", value: function() {
          return 0;
        } }, { key: "getNumGeometries", value: function() {
          return 1;
        } }, { key: "compareTo", value: function() {
          var n;
          if (arguments.length === 1) {
            var i = arguments[0];
            return n = i, this.getTypeCode() !== n.getTypeCode() ? this.getTypeCode() - n.getTypeCode() : this.isEmpty() && n.isEmpty() ? 0 : this.isEmpty() ? -1 : n.isEmpty() ? 1 : this.compareToSameClass(i);
          }
          if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            return n = a, this.getTypeCode() !== n.getTypeCode() ? this.getTypeCode() - n.getTypeCode() : this.isEmpty() && n.isEmpty() ? 0 : this.isEmpty() ? -1 : n.isEmpty() ? 1 : this.compareToSameClass(a, l);
          }
        } }, { key: "getUserData", value: function() {
          return this._userData;
        } }, { key: "getSRID", value: function() {
          return this._SRID;
        } }, { key: "getEnvelope", value: function() {
          return this.getFactory().toGeometry(this.getEnvelopeInternal());
        } }, { key: "checkNotGeometryCollection", value: function(n) {
          if (n.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION) throw new J("This method does not support GeometryCollection arguments");
        } }, { key: "equal", value: function(n, i, a) {
          return a === 0 ? n.equals(i) : n.distance(i) <= a;
        } }, { key: "norm", value: function() {
          var n = this.copy();
          return n.normalize(), n;
        } }, { key: "reverse", value: function() {
          var n = this.reverseInternal();
          return this.envelope != null && (n.envelope = this.envelope.copy()), n.setSRID(this.getSRID()), n;
        } }, { key: "copy", value: function() {
          var n = this.copyInternal();
          return n.envelope = this._envelope == null ? null : this._envelope.copy(), n._SRID = this._SRID, n._userData = this._userData, n;
        } }, { key: "getPrecisionModel", value: function() {
          return this._factory.getPrecisionModel();
        } }, { key: "getEnvelopeInternal", value: function() {
          return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new Le(this._envelope);
        } }, { key: "setSRID", value: function(n) {
          this._SRID = n;
        } }, { key: "setUserData", value: function(n) {
          this._userData = n;
        } }, { key: "compare", value: function(n, i) {
          for (var a = n.iterator(), l = i.iterator(); a.hasNext() && l.hasNext(); ) {
            var g = a.next(), m = l.next(), y = g.compareTo(m);
            if (y !== 0) return y;
          }
          return a.hasNext() ? 1 : l.hasNext() ? -1 : 0;
        } }, { key: "hashCode", value: function() {
          return this.getEnvelopeInternal().hashCode();
        } }, { key: "isEquivalentClass", value: function(n) {
          return this.getClass() === n.getClass();
        } }, { key: "isGeometryCollectionOrDerived", value: function() {
          return this.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION || this.getTypeCode() === o.TYPECODE_MULTIPOINT || this.getTypeCode() === o.TYPECODE_MULTILINESTRING || this.getTypeCode() === o.TYPECODE_MULTIPOLYGON;
        } }, { key: "interfaces_", get: function() {
          return [E, W, w];
        } }, { key: "getClass", value: function() {
          return o;
        } }], [{ key: "hasNonEmptyElements", value: function(n) {
          for (var i = 0; i < n.length; i++) if (!n[i].isEmpty()) return !0;
          return !1;
        } }, { key: "hasNullElements", value: function(n) {
          for (var i = 0; i < n.length; i++) if (n[i] === null) return !0;
          return !1;
        } }]);
      })();
      ce.constructor_ = function(o) {
        o && (this._envelope = null, this._userData = null, this._factory = o, this._SRID = o.getSRID());
      }, ce.TYPECODE_POINT = 0, ce.TYPECODE_MULTIPOINT = 1, ce.TYPECODE_LINESTRING = 2, ce.TYPECODE_LINEARRING = 3, ce.TYPECODE_MULTILINESTRING = 4, ce.TYPECODE_POLYGON = 5, ce.TYPECODE_MULTIPOLYGON = 6, ce.TYPECODE_GEOMETRYCOLLECTION = 7, ce.TYPENAME_POINT = "Point", ce.TYPENAME_MULTIPOINT = "MultiPoint", ce.TYPENAME_LINESTRING = "LineString", ce.TYPENAME_LINEARRING = "LinearRing", ce.TYPENAME_MULTILINESTRING = "MultiLineString", ce.TYPENAME_POLYGON = "Polygon", ce.TYPENAME_MULTIPOLYGON = "MultiPolygon", ce.TYPENAME_GEOMETRYCOLLECTION = "GeometryCollection", ce.geometryChangedFilter = { get interfaces_() {
        return [U];
      }, filter: function(o) {
        o.geometryChangedAction();
      } };
      var N = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "toLocationSymbol", value: function(n) {
          switch (n) {
            case o.EXTERIOR:
              return "e";
            case o.BOUNDARY:
              return "b";
            case o.INTERIOR:
              return "i";
            case o.NONE:
              return "-";
          }
          throw new J("Unknown location value: " + n);
        } }]);
      })();
      N.INTERIOR = 0, N.BOUNDARY = 1, N.EXTERIOR = 2, N.NONE = -1;
      var Ne = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "add", value: function() {
        } }, { key: "addAll", value: function() {
        } }, { key: "isEmpty", value: function() {
        } }, { key: "iterator", value: function() {
        } }, { key: "size", value: function() {
        } }, { key: "toArray", value: function() {
        } }, { key: "remove", value: function() {
        } }]);
      })(), De = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ NoSuchElementException: n })[0], a;
        }
        return _(n, o), h(n);
      })(X), ke = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ UnsupportedOperationException: n })[0], a;
        }
        return _(n, o), h(n);
      })(X), ui = (function(o) {
        function n() {
          return u(this, n), s(this, n, arguments);
        }
        return _(n, o), h(n, [{ key: "contains", value: function() {
        } }]);
      })(Ne), Dr = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n)).map = /* @__PURE__ */ new Map(), i instanceof Ne && a.addAll(i), a;
        }
        return _(n, o), h(n, [{ key: "contains", value: function(i) {
          var a = i.hashCode ? i.hashCode() : i;
          return !!this.map.has(a);
        } }, { key: "add", value: function(i) {
          var a = i.hashCode ? i.hashCode() : i;
          return !this.map.has(a) && !!this.map.set(a, i);
        } }, { key: "addAll", value: function(i) {
          var a, l = p(i);
          try {
            for (l.s(); !(a = l.n()).done; ) {
              var g = a.value;
              this.add(g);
            }
          } catch (m) {
            l.e(m);
          } finally {
            l.f();
          }
          return !0;
        } }, { key: "remove", value: function() {
          throw new ke();
        } }, { key: "size", value: function() {
          return this.map.size;
        } }, { key: "isEmpty", value: function() {
          return this.map.size === 0;
        } }, { key: "toArray", value: function() {
          return Array.from(this.map.values());
        } }, { key: "iterator", value: function() {
          return new pr(this.map);
        } }, { key: Symbol.iterator, value: function() {
          return this.map;
        } }]);
      })(ui), pr = (function() {
        return h((function o(n) {
          u(this, o), this.iterator = n.values();
          var i = this.iterator.next(), a = i.done, l = i.value;
          this.done = a, this.value = l;
        }), [{ key: "next", value: function() {
          if (this.done) throw new De();
          var o = this.value, n = this.iterator.next(), i = n.done, a = n.value;
          return this.done = i, this.value = a, o;
        } }, { key: "hasNext", value: function() {
          return !this.done;
        } }, { key: "remove", value: function() {
          throw new ke();
        } }]);
      })(), ne = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "opposite", value: function(n) {
          return n === o.LEFT ? o.RIGHT : n === o.RIGHT ? o.LEFT : n;
        } }]);
      })();
      ne.ON = 0, ne.LEFT = 1, ne.RIGHT = 2;
      var Fr = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ EmptyStackException: n })[0], a;
        }
        return _(n, o), h(n);
      })(X), rs = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n, [i])).name = Object.keys({ IndexOutOfBoundsException: n })[0], a;
        }
        return _(n, o), h(n);
      })(X), bn = (function(o) {
        function n() {
          return u(this, n), s(this, n, arguments);
        }
        return _(n, o), h(n, [{ key: "get", value: function() {
        } }, { key: "set", value: function() {
        } }, { key: "isEmpty", value: function() {
        } }]);
      })(Ne), No = (function(o) {
        function n() {
          var i;
          return u(this, n), (i = s(this, n)).array = [], i;
        }
        return _(n, o), h(n, [{ key: "add", value: function(i) {
          return this.array.push(i), !0;
        } }, { key: "get", value: function(i) {
          if (i < 0 || i >= this.size()) throw new rs();
          return this.array[i];
        } }, { key: "push", value: function(i) {
          return this.array.push(i), i;
        } }, { key: "pop", value: function() {
          if (this.array.length === 0) throw new Fr();
          return this.array.pop();
        } }, { key: "peek", value: function() {
          if (this.array.length === 0) throw new Fr();
          return this.array[this.array.length - 1];
        } }, { key: "empty", value: function() {
          return this.array.length === 0;
        } }, { key: "isEmpty", value: function() {
          return this.empty();
        } }, { key: "search", value: function(i) {
          return this.array.indexOf(i);
        } }, { key: "size", value: function() {
          return this.array.length;
        } }, { key: "toArray", value: function() {
          return this.array.slice();
        } }]);
      })(bn);
      function _e(o, n) {
        return o.interfaces_ && o.interfaces_.indexOf(n) > -1;
      }
      var un = (function() {
        return h((function o(n) {
          u(this, o), this.str = n;
        }), [{ key: "append", value: function(o) {
          this.str += o;
        } }, { key: "setCharAt", value: function(o, n) {
          this.str = this.str.substr(0, o) + n + this.str.substr(o + 1);
        } }, { key: "toString", value: function() {
          return this.str;
        } }]);
      })(), ln = (function() {
        function o(n) {
          u(this, o), this.value = n;
        }
        return h(o, [{ key: "intValue", value: function() {
          return this.value;
        } }, { key: "compareTo", value: function(n) {
          return this.value < n ? -1 : this.value > n ? 1 : 0;
        } }], [{ key: "compare", value: function(n, i) {
          return n < i ? -1 : n > i ? 1 : 0;
        } }, { key: "isNan", value: function(n) {
          return Number.isNaN(n);
        } }, { key: "valueOf", value: function(n) {
          return new o(n);
        } }]);
      })(), Ln = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "isWhitespace", value: function(o) {
          return o <= 32 && o >= 0 || o === 127;
        } }, { key: "toUpperCase", value: function(o) {
          return o.toUpperCase();
        } }]);
      })(), ve = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "le", value: function(n) {
          return this._hi < n._hi || this._hi === n._hi && this._lo <= n._lo;
        } }, { key: "extractSignificantDigits", value: function(n, i) {
          var a = this.abs(), l = o.magnitude(a._hi), g = o.TEN.pow(l);
          (a = a.divide(g)).gt(o.TEN) ? (a = a.divide(o.TEN), l += 1) : a.lt(o.ONE) && (a = a.multiply(o.TEN), l -= 1);
          for (var m = l + 1, y = new un(), k = o.MAX_PRINT_DIGITS - 1, L = 0; L <= k; L++) {
            n && L === m && y.append(".");
            var q = Math.trunc(a._hi);
            if (q < 0) break;
            var V = !1, ee = 0;
            q > 9 ? (V = !0, ee = "9") : ee = "0" + q, y.append(ee), a = a.subtract(o.valueOf(q)).multiply(o.TEN), V && a.selfAdd(o.TEN);
            var ue = !0, fe = o.magnitude(a._hi);
            if (fe < 0 && Math.abs(fe) >= k - L && (ue = !1), !ue) break;
          }
          return i[0] = l, y.toString();
        } }, { key: "sqr", value: function() {
          return this.multiply(this);
        } }, { key: "doubleValue", value: function() {
          return this._hi + this._lo;
        } }, { key: "subtract", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0];
            return this.add(n.negate());
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return this.add(-i);
          }
        } }, { key: "equals", value: function() {
          if (arguments.length === 1 && arguments[0] instanceof o) {
            var n = arguments[0];
            return this._hi === n._hi && this._lo === n._lo;
          }
        } }, { key: "isZero", value: function() {
          return this._hi === 0 && this._lo === 0;
        } }, { key: "selfSubtract", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0];
            return this.isNaN() ? this : this.selfAdd(-n._hi, -n._lo);
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return this.isNaN() ? this : this.selfAdd(-i, 0);
          }
        } }, { key: "getSpecialNumberString", value: function() {
          return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
        } }, { key: "min", value: function(n) {
          return this.le(n) ? this : n;
        } }, { key: "selfDivide", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var n = arguments[0];
              return this.selfDivide(n._hi, n._lo);
            }
            if (typeof arguments[0] == "number") {
              var i = arguments[0];
              return this.selfDivide(i, 0);
            }
          } else if (arguments.length === 2) {
            var a, l, g, m, y = arguments[0], k = arguments[1], L = null, q = null, V = null, ee = null;
            return g = this._hi / y, ee = (L = (V = o.SPLIT * g) - (L = V - g)) * (q = (ee = o.SPLIT * y) - (q = ee - y)) - (m = g * y) + L * (l = y - q) + (a = g - L) * q + a * l, ee = g + (V = (this._hi - m - ee + this._lo - g * k) / y), this._hi = ee, this._lo = g - ee + V, this;
          }
        } }, { key: "dump", value: function() {
          return "DD<" + this._hi + ", " + this._lo + ">";
        } }, { key: "divide", value: function() {
          if (arguments[0] instanceof o) {
            var n, i, a, l, g = arguments[0], m = null, y = null, k = null, L = null;
            return n = (a = this._hi / g._hi) - (m = (k = o.SPLIT * a) - (m = k - a)), L = m * (y = (L = o.SPLIT * g._hi) - (y = L - g._hi)) - (l = a * g._hi) + m * (i = g._hi - y) + n * y + n * i, new o(L = a + (k = (this._hi - l - L + this._lo - a * g._lo) / g._hi), a - L + k);
          }
          if (typeof arguments[0] == "number") {
            var q = arguments[0];
            return Z.isNaN(q) ? o.createNaN() : o.copy(this).selfDivide(q, 0);
          }
        } }, { key: "ge", value: function(n) {
          return this._hi > n._hi || this._hi === n._hi && this._lo >= n._lo;
        } }, { key: "pow", value: function(n) {
          if (n === 0) return o.valueOf(1);
          var i = new o(this), a = o.valueOf(1), l = Math.abs(n);
          if (l > 1) for (; l > 0; ) l % 2 == 1 && a.selfMultiply(i), (l /= 2) > 0 && (i = i.sqr());
          else a = i;
          return n < 0 ? a.reciprocal() : a;
        } }, { key: "ceil", value: function() {
          if (this.isNaN()) return o.NaN;
          var n = Math.ceil(this._hi), i = 0;
          return n === this._hi && (i = Math.ceil(this._lo)), new o(n, i);
        } }, { key: "compareTo", value: function(n) {
          var i = n;
          return this._hi < i._hi ? -1 : this._hi > i._hi ? 1 : this._lo < i._lo ? -1 : this._lo > i._lo ? 1 : 0;
        } }, { key: "rint", value: function() {
          return this.isNaN() ? this : this.add(0.5).floor();
        } }, { key: "setValue", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0];
            return this.init(n), this;
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return this.init(i), this;
          }
        } }, { key: "max", value: function(n) {
          return this.ge(n) ? this : n;
        } }, { key: "sqrt", value: function() {
          if (this.isZero()) return o.valueOf(0);
          if (this.isNegative()) return o.NaN;
          var n = 1 / Math.sqrt(this._hi), i = this._hi * n, a = o.valueOf(i), l = this.subtract(a.sqr())._hi * (0.5 * n);
          return a.add(l);
        } }, { key: "selfAdd", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var n = arguments[0];
              return this.selfAdd(n._hi, n._lo);
            }
            if (typeof arguments[0] == "number") {
              var i, a, l, g, m, y = arguments[0], k = null;
              return k = (l = this._hi + y) - (g = l - this._hi), a = (m = (k = y - g + (this._hi - k)) + this._lo) + (l - (i = l + m)), this._hi = i + a, this._lo = a + (i - this._hi), this;
            }
          } else if (arguments.length === 2) {
            var L, q, V, ee, ue = arguments[0], fe = arguments[1], me = null, Ae = null, Te = null;
            V = this._hi + ue, q = this._lo + fe, Ae = V - (Te = V - this._hi), me = q - (ee = q - this._lo);
            var Fe = (L = V + (Te = (Ae = ue - Te + (this._hi - Ae)) + q)) + (Te = (me = fe - ee + (this._lo - me)) + (Te + (V - L))), ct = Te + (L - Fe);
            return this._hi = Fe, this._lo = ct, this;
          }
        } }, { key: "selfMultiply", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var n = arguments[0];
              return this.selfMultiply(n._hi, n._lo);
            }
            if (typeof arguments[0] == "number") {
              var i = arguments[0];
              return this.selfMultiply(i, 0);
            }
          } else if (arguments.length === 2) {
            var a, l, g = arguments[0], m = arguments[1], y = null, k = null, L = null, q = null;
            y = (L = o.SPLIT * this._hi) - this._hi, q = o.SPLIT * g, y = L - y, a = this._hi - y, k = q - g;
            var V = (L = this._hi * g) + (q = y * (k = q - k) - L + y * (l = g - k) + a * k + a * l + (this._hi * m + this._lo * g)), ee = q + (y = L - V);
            return this._hi = V, this._lo = ee, this;
          }
        } }, { key: "selfSqr", value: function() {
          return this.selfMultiply(this);
        } }, { key: "floor", value: function() {
          if (this.isNaN()) return o.NaN;
          var n = Math.floor(this._hi), i = 0;
          return n === this._hi && (i = Math.floor(this._lo)), new o(n, i);
        } }, { key: "negate", value: function() {
          return this.isNaN() ? this : new o(-this._hi, -this._lo);
        } }, { key: "clone", value: function() {
          try {
            return null;
          } catch (n) {
            if (n instanceof CloneNotSupportedException) return null;
            throw n;
          }
        } }, { key: "multiply", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0];
            return n.isNaN() ? o.createNaN() : o.copy(this).selfMultiply(n);
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return Z.isNaN(i) ? o.createNaN() : o.copy(this).selfMultiply(i, 0);
          }
        } }, { key: "isNaN", value: function() {
          return Z.isNaN(this._hi);
        } }, { key: "intValue", value: function() {
          return Math.trunc(this._hi);
        } }, { key: "toString", value: function() {
          var n = o.magnitude(this._hi);
          return n >= -3 && n <= 20 ? this.toStandardNotation() : this.toSciNotation();
        } }, { key: "toStandardNotation", value: function() {
          var n = this.getSpecialNumberString();
          if (n !== null) return n;
          var i = new Array(1).fill(null), a = this.extractSignificantDigits(!0, i), l = i[0] + 1, g = a;
          if (a.charAt(0) === ".") g = "0" + a;
          else if (l < 0) g = "0." + o.stringOfChar("0", -l) + a;
          else if (a.indexOf(".") === -1) {
            var m = l - a.length;
            g = a + o.stringOfChar("0", m) + ".0";
          }
          return this.isNegative() ? "-" + g : g;
        } }, { key: "reciprocal", value: function() {
          var n, i, a, l, g = null, m = null, y = null, k = null;
          n = (a = 1 / this._hi) - (g = (y = o.SPLIT * a) - (g = y - a)), m = (k = o.SPLIT * this._hi) - this._hi;
          var L = a + (y = (1 - (l = a * this._hi) - (k = g * (m = k - m) - l + g * (i = this._hi - m) + n * m + n * i) - a * this._lo) / this._hi);
          return new o(L, a - L + y);
        } }, { key: "toSciNotation", value: function() {
          if (this.isZero()) return o.SCI_NOT_ZERO;
          var n = this.getSpecialNumberString();
          if (n !== null) return n;
          var i = new Array(1).fill(null), a = this.extractSignificantDigits(!1, i), l = o.SCI_NOT_EXPONENT_CHAR + i[0];
          if (a.charAt(0) === "0") throw new IllegalStateException("Found leading zero: " + a);
          var g = "";
          a.length > 1 && (g = a.substring(1));
          var m = a.charAt(0) + "." + g;
          return this.isNegative() ? "-" + m + l : m + l;
        } }, { key: "abs", value: function() {
          return this.isNaN() ? o.NaN : this.isNegative() ? this.negate() : new o(this);
        } }, { key: "isPositive", value: function() {
          return this._hi > 0 || this._hi === 0 && this._lo > 0;
        } }, { key: "lt", value: function(n) {
          return this._hi < n._hi || this._hi === n._hi && this._lo < n._lo;
        } }, { key: "add", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0];
            return o.copy(this).selfAdd(n);
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return o.copy(this).selfAdd(i);
          }
        } }, { key: "init", value: function() {
          if (arguments.length === 1) {
            if (typeof arguments[0] == "number") {
              var n = arguments[0];
              this._hi = n, this._lo = 0;
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this._hi = i._hi, this._lo = i._lo;
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            this._hi = a, this._lo = l;
          }
        } }, { key: "gt", value: function(n) {
          return this._hi > n._hi || this._hi === n._hi && this._lo > n._lo;
        } }, { key: "isNegative", value: function() {
          return this._hi < 0 || this._hi === 0 && this._lo < 0;
        } }, { key: "trunc", value: function() {
          return this.isNaN() ? o.NaN : this.isPositive() ? this.floor() : this.ceil();
        } }, { key: "signum", value: function() {
          return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
        } }, { key: "interfaces_", get: function() {
          return [w, W, E];
        } }], [{ key: "constructor_", value: function() {
          if (this._hi = 0, this._lo = 0, arguments.length === 0) this.init(0);
          else if (arguments.length === 1) {
            if (typeof arguments[0] == "number") {
              var n = arguments[0];
              this.init(n);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this.init(i);
            } else if (typeof arguments[0] == "string") {
              var a = arguments[0];
              o.constructor_.call(this, o.parse(a));
            }
          } else if (arguments.length === 2) {
            var l = arguments[0], g = arguments[1];
            this.init(l, g);
          }
        } }, { key: "determinant", value: function() {
          if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var n = arguments[0], i = arguments[1], a = arguments[2], l = arguments[3];
            return o.determinant(o.valueOf(n), o.valueOf(i), o.valueOf(a), o.valueOf(l));
          }
          if (arguments[3] instanceof o && arguments[2] instanceof o && arguments[0] instanceof o && arguments[1] instanceof o) {
            var g = arguments[1], m = arguments[2], y = arguments[3];
            return arguments[0].multiply(y).selfSubtract(g.multiply(m));
          }
        } }, { key: "sqr", value: function(n) {
          return o.valueOf(n).selfMultiply(n);
        } }, { key: "valueOf", value: function() {
          if (typeof arguments[0] == "string") {
            var n = arguments[0];
            return o.parse(n);
          }
          if (typeof arguments[0] == "number") return new o(arguments[0]);
        } }, { key: "sqrt", value: function(n) {
          return o.valueOf(n).sqrt();
        } }, { key: "parse", value: function(n) {
          for (var i = 0, a = n.length; Ln.isWhitespace(n.charAt(i)); ) i++;
          var l = !1;
          if (i < a) {
            var g = n.charAt(i);
            g !== "-" && g !== "+" || (i++, g === "-" && (l = !0));
          }
          for (var m = new o(), y = 0, k = 0, L = 0, q = !1; !(i >= a); ) {
            var V = n.charAt(i);
            if (i++, Ln.isDigit(V)) {
              var ee = V - "0";
              m.selfMultiply(o.TEN), m.selfAdd(ee), y++;
            } else {
              if (V !== ".") {
                if (V === "e" || V === "E") {
                  var ue = n.substring(i);
                  try {
                    L = ln.parseInt(ue);
                  } catch (Fe) {
                    throw Fe instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + ue + " in string " + n) : Fe;
                  }
                  break;
                }
                throw new NumberFormatException("Unexpected character '" + V + "' at position " + i + " in string " + n);
              }
              k = y, q = !0;
            }
          }
          var fe = m;
          q || (k = y);
          var me = y - k - L;
          if (me === 0) fe = m;
          else if (me > 0) {
            var Ae = o.TEN.pow(me);
            fe = m.divide(Ae);
          } else if (me < 0) {
            var Te = o.TEN.pow(-me);
            fe = m.multiply(Te);
          }
          return l ? fe.negate() : fe;
        } }, { key: "createNaN", value: function() {
          return new o(Z.NaN, Z.NaN);
        } }, { key: "copy", value: function(n) {
          return new o(n);
        } }, { key: "magnitude", value: function(n) {
          var i = Math.abs(n), a = Math.log(i) / Math.log(10), l = Math.trunc(Math.floor(a));
          return 10 * Math.pow(10, l) <= i && (l += 1), l;
        } }, { key: "stringOfChar", value: function(n, i) {
          for (var a = new un(), l = 0; l < i; l++) a.append(n);
          return a.toString();
        } }]);
      })();
      ve.PI = new ve(3.141592653589793, 12246467991473532e-32), ve.TWO_PI = new ve(6.283185307179586, 24492935982947064e-32), ve.PI_2 = new ve(1.5707963267948966, 6123233995736766e-32), ve.E = new ve(2.718281828459045, 14456468917292502e-32), ve.NaN = new ve(Z.NaN, Z.NaN), ve.EPS = 123259516440783e-46, ve.SPLIT = 134217729, ve.MAX_PRINT_DIGITS = 32, ve.TEN = ve.valueOf(10), ve.ONE = ve.valueOf(1), ve.SCI_NOT_EXPONENT_CHAR = "E", ve.SCI_NOT_ZERO = "0.0E0";
      var li = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "orientationIndex", value: function(n, i, a) {
          var l = o.orientationIndexFilter(n, i, a);
          if (l <= 1) return l;
          var g = ve.valueOf(i.x).selfAdd(-n.x), m = ve.valueOf(i.y).selfAdd(-n.y), y = ve.valueOf(a.x).selfAdd(-i.x), k = ve.valueOf(a.y).selfAdd(-i.y);
          return g.selfMultiply(k).selfSubtract(m.selfMultiply(y)).signum();
        } }, { key: "signOfDet2x2", value: function() {
          if (arguments[3] instanceof ve && arguments[2] instanceof ve && arguments[0] instanceof ve && arguments[1] instanceof ve) {
            var n = arguments[1], i = arguments[2], a = arguments[3];
            return arguments[0].multiply(a).selfSubtract(n.multiply(i)).signum();
          }
          if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3], k = ve.valueOf(l), L = ve.valueOf(g), q = ve.valueOf(m), V = ve.valueOf(y);
            return k.multiply(V).selfSubtract(L.multiply(q)).signum();
          }
        } }, { key: "intersection", value: function(n, i, a, l) {
          var g = new ve(n.y).selfSubtract(i.y), m = new ve(i.x).selfSubtract(n.x), y = new ve(n.x).selfMultiply(i.y).selfSubtract(new ve(i.x).selfMultiply(n.y)), k = new ve(a.y).selfSubtract(l.y), L = new ve(l.x).selfSubtract(a.x), q = new ve(a.x).selfMultiply(l.y).selfSubtract(new ve(l.x).selfMultiply(a.y)), V = m.multiply(q).selfSubtract(L.multiply(y)), ee = k.multiply(y).selfSubtract(g.multiply(q)), ue = g.multiply(L).selfSubtract(k.multiply(m)), fe = V.selfDivide(ue).doubleValue(), me = ee.selfDivide(ue).doubleValue();
          return Z.isNaN(fe) || Z.isInfinite(fe) || Z.isNaN(me) || Z.isInfinite(me) ? null : new $(fe, me);
        } }, { key: "orientationIndexFilter", value: function(n, i, a) {
          var l = null, g = (n.x - a.x) * (i.y - a.y), m = (n.y - a.y) * (i.x - a.x), y = g - m;
          if (g > 0) {
            if (m <= 0) return o.signum(y);
            l = g + m;
          } else {
            if (!(g < 0) || m >= 0) return o.signum(y);
            l = -g - m;
          }
          var k = o.DP_SAFE_EPSILON * l;
          return y >= k || -y >= k ? o.signum(y) : 2;
        } }, { key: "signum", value: function(n) {
          return n > 0 ? 1 : n < 0 ? -1 : 0;
        } }]);
      })();
      li.DP_SAFE_EPSILON = 1e-15;
      var Se = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "getM", value: function(o) {
          if (this.hasM()) {
            var n = this.getDimension() - this.getMeasures();
            return this.getOrdinate(o, n);
          }
          return Z.NaN;
        } }, { key: "setOrdinate", value: function(o, n, i) {
        } }, { key: "getZ", value: function(o) {
          return this.hasZ() ? this.getOrdinate(o, 2) : Z.NaN;
        } }, { key: "size", value: function() {
        } }, { key: "getOrdinate", value: function(o, n) {
        } }, { key: "getCoordinate", value: function() {
        } }, { key: "getCoordinateCopy", value: function(o) {
        } }, { key: "createCoordinate", value: function() {
        } }, { key: "getDimension", value: function() {
        } }, { key: "hasM", value: function() {
          return this.getMeasures() > 0;
        } }, { key: "getX", value: function(o) {
        } }, { key: "hasZ", value: function() {
          return this.getDimension() - this.getMeasures() > 2;
        } }, { key: "getMeasures", value: function() {
          return 0;
        } }, { key: "expandEnvelope", value: function(o) {
        } }, { key: "copy", value: function() {
        } }, { key: "getY", value: function(o) {
        } }, { key: "toCoordinateArray", value: function() {
        } }, { key: "interfaces_", get: function() {
          return [E];
        } }]);
      })();
      Se.X = 0, Se.Y = 1, Se.Z = 2, Se.M = 3;
      var ye = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "index", value: function(n, i, a) {
          return li.orientationIndex(n, i, a);
        } }, { key: "isCCW", value: function() {
          if (arguments[0] instanceof Array) {
            var n = arguments[0], i = n.length - 1;
            if (i < 3) throw new J("Ring has fewer than 4 points, so orientation cannot be determined");
            for (var a = n[0], l = 0, g = 1; g <= i; g++) {
              var m = n[g];
              m.y > a.y && (a = m, l = g);
            }
            var y = l;
            do
              (y -= 1) < 0 && (y = i);
            while (n[y].equals2D(a) && y !== l);
            var k = l;
            do
              k = (k + 1) % i;
            while (n[k].equals2D(a) && k !== l);
            var L = n[y], q = n[k];
            if (L.equals2D(a) || q.equals2D(a) || L.equals2D(q)) return !1;
            var V = o.index(L, a, q);
            return V === 0 ? L.x > q.x : V > 0;
          }
          if (_e(arguments[0], Se)) {
            var ee = arguments[0], ue = ee.size() - 1;
            if (ue < 3) throw new J("Ring has fewer than 4 points, so orientation cannot be determined");
            for (var fe = ee.getCoordinate(0), me = 0, Ae = 1; Ae <= ue; Ae++) {
              var Te = ee.getCoordinate(Ae);
              Te.y > fe.y && (fe = Te, me = Ae);
            }
            var Fe = null, ct = me;
            do
              (ct -= 1) < 0 && (ct = ue), Fe = ee.getCoordinate(ct);
            while (Fe.equals2D(fe) && ct !== me);
            var ft = null, Yr = me;
            do
              Yr = (Yr + 1) % ue, ft = ee.getCoordinate(Yr);
            while (ft.equals2D(fe) && Yr !== me);
            if (Fe.equals2D(fe) || ft.equals2D(fe) || Fe.equals2D(ft)) return !1;
            var hs = o.index(Fe, fe, ft);
            return hs === 0 ? Fe.x > ft.x : hs > 0;
          }
        } }]);
      })();
      ye.CLOCKWISE = -1, ye.RIGHT = ye.CLOCKWISE, ye.COUNTERCLOCKWISE = 1, ye.LEFT = ye.COUNTERCLOCKWISE, ye.COLLINEAR = 0, ye.STRAIGHT = ye.COLLINEAR;
      var sa = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getCoordinate", value: function() {
          return this._minCoord;
        } }, { key: "getRightmostSide", value: function(o, n) {
          var i = this.getRightmostSideOfSegment(o, n);
          return i < 0 && (i = this.getRightmostSideOfSegment(o, n - 1)), i < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(o)), i;
        } }, { key: "findRightmostEdgeAtVertex", value: function() {
          var o = this._minDe.getEdge().getCoordinates();
          ae.isTrue(this._minIndex > 0 && this._minIndex < o.length, "rightmost point expected to be interior vertex of edge");
          var n = o[this._minIndex - 1], i = o[this._minIndex + 1], a = ye.index(this._minCoord, i, n), l = !1;
          (n.y < this._minCoord.y && i.y < this._minCoord.y && a === ye.COUNTERCLOCKWISE || n.y > this._minCoord.y && i.y > this._minCoord.y && a === ye.CLOCKWISE) && (l = !0), l && (this._minIndex = this._minIndex - 1);
        } }, { key: "getRightmostSideOfSegment", value: function(o, n) {
          var i = o.getEdge().getCoordinates();
          if (n < 0 || n + 1 >= i.length || i[n].y === i[n + 1].y) return -1;
          var a = ne.LEFT;
          return i[n].y < i[n + 1].y && (a = ne.RIGHT), a;
        } }, { key: "getEdge", value: function() {
          return this._orientedDe;
        } }, { key: "checkForRightmostCoordinate", value: function(o) {
          for (var n = o.getEdge().getCoordinates(), i = 0; i < n.length - 1; i++) (this._minCoord === null || n[i].x > this._minCoord.x) && (this._minDe = o, this._minIndex = i, this._minCoord = n[i]);
        } }, { key: "findRightmostEdgeAtNode", value: function() {
          var o = this._minDe.getNode().getEdges();
          this._minDe = o.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
        } }, { key: "findEdge", value: function(o) {
          for (var n = o.iterator(); n.hasNext(); ) {
            var i = n.next();
            i.isForward() && this.checkForRightmostCoordinate(i);
          }
          ae.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === ne.LEFT && (this._orientedDe = this._minDe.getSym());
        } }], [{ key: "constructor_", value: function() {
          this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
        } }]);
      })(), Nt = (function(o) {
        function n(i, a) {
          var l;
          return u(this, n), (l = s(this, n, [a ? i + " [ " + a + " ]" : i])).pt = a ? new $(a) : void 0, l.name = Object.keys({ TopologyException: n })[0], l;
        }
        return _(n, o), h(n, [{ key: "getCoordinate", value: function() {
          return this.pt;
        } }]);
      })(pe), ci = (function() {
        return h((function o() {
          u(this, o), this.array = [];
        }), [{ key: "addLast", value: function(o) {
          this.array.push(o);
        } }, { key: "removeFirst", value: function() {
          return this.array.shift();
        } }, { key: "isEmpty", value: function() {
          return this.array.length === 0;
        } }]);
      })(), de = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n)).array = [], i instanceof Ne && a.addAll(i), a;
        }
        return _(n, o), h(n, [{ key: "interfaces_", get: function() {
          return [bn, Ne];
        } }, { key: "ensureCapacity", value: function() {
        } }, { key: "add", value: function(i) {
          return arguments.length === 1 ? this.array.push(i) : this.array.splice(arguments[0], 0, arguments[1]), !0;
        } }, { key: "clear", value: function() {
          this.array = [];
        } }, { key: "addAll", value: function(i) {
          var a, l = p(i);
          try {
            for (l.s(); !(a = l.n()).done; ) {
              var g = a.value;
              this.array.push(g);
            }
          } catch (m) {
            l.e(m);
          } finally {
            l.f();
          }
        } }, { key: "set", value: function(i, a) {
          var l = this.array[i];
          return this.array[i] = a, l;
        } }, { key: "iterator", value: function() {
          return new mr(this);
        } }, { key: "get", value: function(i) {
          if (i < 0 || i >= this.size()) throw new rs();
          return this.array[i];
        } }, { key: "isEmpty", value: function() {
          return this.array.length === 0;
        } }, { key: "sort", value: function(i) {
          i ? this.array.sort((function(a, l) {
            return i.compare(a, l);
          })) : this.array.sort();
        } }, { key: "size", value: function() {
          return this.array.length;
        } }, { key: "toArray", value: function() {
          return this.array.slice();
        } }, { key: "remove", value: function(i) {
          for (var a = 0, l = this.array.length; a < l; a++) if (this.array[a] === i) return !!this.array.splice(a, 1);
          return !1;
        } }, { key: Symbol.iterator, value: function() {
          return this.array.values();
        } }]);
      })(bn), mr = (function() {
        return h((function o(n) {
          u(this, o), this.arrayList = n, this.position = 0;
        }), [{ key: "next", value: function() {
          if (this.position === this.arrayList.size()) throw new De();
          return this.arrayList.get(this.position++);
        } }, { key: "hasNext", value: function() {
          return this.position < this.arrayList.size();
        } }, { key: "set", value: function(o) {
          return this.arrayList.set(this.position - 1, o);
        } }, { key: "remove", value: function() {
          this.arrayList.remove(this.arrayList.get(this.position));
        } }]);
      })(), is = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "clearVisitedEdges", value: function() {
          for (var o = this._dirEdgeList.iterator(); o.hasNext(); )
            o.next().setVisited(!1);
        } }, { key: "getRightmostCoordinate", value: function() {
          return this._rightMostCoord;
        } }, { key: "computeNodeDepth", value: function(o) {
          for (var n = null, i = o.getEdges().iterator(); i.hasNext(); ) {
            var a = i.next();
            if (a.isVisited() || a.getSym().isVisited()) {
              n = a;
              break;
            }
          }
          if (n === null) throw new Nt("unable to find edge to compute depths at " + o.getCoordinate());
          o.getEdges().computeDepths(n);
          for (var l = o.getEdges().iterator(); l.hasNext(); ) {
            var g = l.next();
            g.setVisited(!0), this.copySymDepths(g);
          }
        } }, { key: "computeDepth", value: function(o) {
          this.clearVisitedEdges();
          var n = this._finder.getEdge();
          n.getNode(), n.getLabel(), n.setEdgeDepths(ne.RIGHT, o), this.copySymDepths(n), this.computeDepths(n);
        } }, { key: "create", value: function(o) {
          this.addReachable(o), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
        } }, { key: "findResultEdges", value: function() {
          for (var o = this._dirEdgeList.iterator(); o.hasNext(); ) {
            var n = o.next();
            n.getDepth(ne.RIGHT) >= 1 && n.getDepth(ne.LEFT) <= 0 && !n.isInteriorAreaEdge() && n.setInResult(!0);
          }
        } }, { key: "computeDepths", value: function(o) {
          var n = new Dr(), i = new ci(), a = o.getNode();
          for (i.addLast(a), n.add(a), o.setVisited(!0); !i.isEmpty(); ) {
            var l = i.removeFirst();
            n.add(l), this.computeNodeDepth(l);
            for (var g = l.getEdges().iterator(); g.hasNext(); ) {
              var m = g.next().getSym();
              if (!m.isVisited()) {
                var y = m.getNode();
                n.contains(y) || (i.addLast(y), n.add(y));
              }
            }
          }
        } }, { key: "compareTo", value: function(o) {
          var n = o;
          return this._rightMostCoord.x < n._rightMostCoord.x ? -1 : this._rightMostCoord.x > n._rightMostCoord.x ? 1 : 0;
        } }, { key: "getEnvelope", value: function() {
          if (this._env === null) {
            for (var o = new Le(), n = this._dirEdgeList.iterator(); n.hasNext(); ) for (var i = n.next().getEdge().getCoordinates(), a = 0; a < i.length - 1; a++) o.expandToInclude(i[a]);
            this._env = o;
          }
          return this._env;
        } }, { key: "addReachable", value: function(o) {
          var n = new No();
          for (n.add(o); !n.empty(); ) {
            var i = n.pop();
            this.add(i, n);
          }
        } }, { key: "copySymDepths", value: function(o) {
          var n = o.getSym();
          n.setDepth(ne.LEFT, o.getDepth(ne.RIGHT)), n.setDepth(ne.RIGHT, o.getDepth(ne.LEFT));
        } }, { key: "add", value: function(o, n) {
          o.setVisited(!0), this._nodes.add(o);
          for (var i = o.getEdges().iterator(); i.hasNext(); ) {
            var a = i.next();
            this._dirEdgeList.add(a);
            var l = a.getSym().getNode();
            l.isVisited() || n.push(l);
          }
        } }, { key: "getNodes", value: function() {
          return this._nodes;
        } }, { key: "getDirectedEdges", value: function() {
          return this._dirEdgeList;
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._finder = null, this._dirEdgeList = new de(), this._nodes = new de(), this._rightMostCoord = null, this._env = null, this._finder = new sa();
        } }]);
      })(), Gr = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "intersection", value: function(o, n, i, a) {
          var l = o.x < n.x ? o.x : n.x, g = o.y < n.y ? o.y : n.y, m = o.x > n.x ? o.x : n.x, y = o.y > n.y ? o.y : n.y, k = i.x < a.x ? i.x : a.x, L = i.y < a.y ? i.y : a.y, q = i.x > a.x ? i.x : a.x, V = i.y > a.y ? i.y : a.y, ee = ((l > k ? l : k) + (m < q ? m : q)) / 2, ue = ((g > L ? g : L) + (y < V ? y : V)) / 2, fe = o.x - ee, me = o.y - ue, Ae = n.x - ee, Te = n.y - ue, Fe = i.x - ee, ct = i.y - ue, ft = a.x - ee, Yr = a.y - ue, hs = me - Te, Oc = Ae - fe, Rc = fe * Te - Ae * me, Dc = ct - Yr, Fc = ft - Fe, Gc = Fe * Yr - ft * ct, Bc = hs * Fc - Dc * Oc, Yo = (Oc * Gc - Fc * Rc) / Bc, Ho = (Dc * Rc - hs * Gc) / Bc;
          return Z.isNaN(Yo) || Z.isInfinite(Yo) || Z.isNaN(Ho) || Z.isInfinite(Ho) ? null : new $(Yo + ee, Ho + ue);
        } }]);
      })(), Pt = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "arraycopy", value: function(o, n, i, a, l) {
          for (var g = 0, m = n; m < n + l; m++) i[a + g] = o[m], g++;
        } }, { key: "getProperty", value: function(o) {
          return { "line.separator": `
` }[o];
        } }]);
      })(), Tn = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "log10", value: function(n) {
          var i = Math.log(n);
          return Z.isInfinite(i) || Z.isNaN(i) ? i : i / o.LOG_10;
        } }, { key: "min", value: function(n, i, a, l) {
          var g = n;
          return i < g && (g = i), a < g && (g = a), l < g && (g = l), g;
        } }, { key: "clamp", value: function() {
          if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var n = arguments[0], i = arguments[1], a = arguments[2];
            return n < i ? i : n > a ? a : n;
          }
          if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var l = arguments[0], g = arguments[1], m = arguments[2];
            return l < g ? g : l > m ? m : l;
          }
        } }, { key: "wrap", value: function(n, i) {
          return n < 0 ? i - -n % i : n % i;
        } }, { key: "max", value: function() {
          if (arguments.length === 3) {
            var n = arguments[1], i = arguments[2], a = arguments[0];
            return n > a && (a = n), i > a && (a = i), a;
          }
          if (arguments.length === 4) {
            var l = arguments[1], g = arguments[2], m = arguments[3], y = arguments[0];
            return l > y && (y = l), g > y && (y = g), m > y && (y = m), y;
          }
        } }, { key: "average", value: function(n, i) {
          return (n + i) / 2;
        } }]);
      })();
      Tn.LOG_10 = Math.log(10);
      var Et = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "segmentToSegment", value: function(n, i, a, l) {
          if (n.equals(i)) return o.pointToSegment(n, a, l);
          if (a.equals(l)) return o.pointToSegment(l, n, i);
          var g = !1;
          if (Le.intersects(n, i, a, l)) {
            var m = (i.x - n.x) * (l.y - a.y) - (i.y - n.y) * (l.x - a.x);
            if (m === 0) g = !0;
            else {
              var y = (n.y - a.y) * (l.x - a.x) - (n.x - a.x) * (l.y - a.y), k = ((n.y - a.y) * (i.x - n.x) - (n.x - a.x) * (i.y - n.y)) / m, L = y / m;
              (L < 0 || L > 1 || k < 0 || k > 1) && (g = !0);
            }
          } else g = !0;
          return g ? Tn.min(o.pointToSegment(n, a, l), o.pointToSegment(i, a, l), o.pointToSegment(a, n, i), o.pointToSegment(l, n, i)) : 0;
        } }, { key: "pointToSegment", value: function(n, i, a) {
          if (i.x === a.x && i.y === a.y) return n.distance(i);
          var l = (a.x - i.x) * (a.x - i.x) + (a.y - i.y) * (a.y - i.y), g = ((n.x - i.x) * (a.x - i.x) + (n.y - i.y) * (a.y - i.y)) / l;
          if (g <= 0) return n.distance(i);
          if (g >= 1) return n.distance(a);
          var m = ((i.y - n.y) * (a.x - i.x) - (i.x - n.x) * (a.y - i.y)) / l;
          return Math.abs(m) * Math.sqrt(l);
        } }, { key: "pointToLinePerpendicular", value: function(n, i, a) {
          var l = (a.x - i.x) * (a.x - i.x) + (a.y - i.y) * (a.y - i.y), g = ((i.y - n.y) * (a.x - i.x) - (i.x - n.x) * (a.y - i.y)) / l;
          return Math.abs(g) * Math.sqrt(l);
        } }, { key: "pointToSegmentString", value: function(n, i) {
          if (i.length === 0) throw new J("Line array must contain at least one vertex");
          for (var a = n.distance(i[0]), l = 0; l < i.length - 1; l++) {
            var g = o.pointToSegment(n, i[l], i[l + 1]);
            g < a && (a = g);
          }
          return a;
        } }]);
      })(), aa = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "create", value: function() {
          if (arguments.length === 1) arguments[0] instanceof Array || _e(arguments[0], Se);
          else if (arguments.length !== 2) {
            if (arguments.length === 3) {
              var o = arguments[0], n = arguments[1];
              return this.create(o, n);
            }
          }
        } }]);
      })(), An = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "filter", value: function(o) {
        } }]);
      })(), Po = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "ofLine", value: function(o) {
          var n = o.size();
          if (n <= 1) return 0;
          var i = 0, a = new $();
          o.getCoordinate(0, a);
          for (var l = a.x, g = a.y, m = 1; m < n; m++) {
            o.getCoordinate(m, a);
            var y = a.x, k = a.y, L = y - l, q = k - g;
            i += Math.sqrt(L * L + q * q), l = y, g = k;
          }
          return i;
        } }]);
      })(), oa = h((function o() {
        u(this, o);
      })), Be = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "copyCoord", value: function(n, i, a, l) {
          for (var g = Math.min(n.getDimension(), a.getDimension()), m = 0; m < g; m++) a.setOrdinate(l, m, n.getOrdinate(i, m));
        } }, { key: "isRing", value: function(n) {
          var i = n.size();
          return i === 0 || !(i <= 3) && n.getOrdinate(0, Se.X) === n.getOrdinate(i - 1, Se.X) && n.getOrdinate(0, Se.Y) === n.getOrdinate(i - 1, Se.Y);
        } }, { key: "scroll", value: function() {
          if (arguments.length === 2) {
            if (_e(arguments[0], Se) && Number.isInteger(arguments[1])) {
              var n = arguments[0], i = arguments[1];
              o.scroll(n, i, o.isRing(n));
            } else if (_e(arguments[0], Se) && arguments[1] instanceof $) {
              var a = arguments[0], l = arguments[1], g = o.indexOf(l, a);
              if (g <= 0) return null;
              o.scroll(a, g);
            }
          } else if (arguments.length === 3) {
            var m = arguments[0], y = arguments[1], k = arguments[2];
            if (y <= 0) return null;
            for (var L = m.copy(), q = k ? m.size() - 1 : m.size(), V = 0; V < q; V++) for (var ee = 0; ee < m.getDimension(); ee++) m.setOrdinate(V, ee, L.getOrdinate((y + V) % q, ee));
            if (k) for (var ue = 0; ue < m.getDimension(); ue++) m.setOrdinate(q, ue, m.getOrdinate(0, ue));
          }
        } }, { key: "isEqual", value: function(n, i) {
          var a = n.size();
          if (a !== i.size()) return !1;
          for (var l = Math.min(n.getDimension(), i.getDimension()), g = 0; g < a; g++) for (var m = 0; m < l; m++) {
            var y = n.getOrdinate(g, m), k = i.getOrdinate(g, m);
            if (n.getOrdinate(g, m) !== i.getOrdinate(g, m) && (!Z.isNaN(y) || !Z.isNaN(k))) return !1;
          }
          return !0;
        } }, { key: "minCoordinateIndex", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return o.minCoordinateIndex(n, 0, n.size() - 1);
          }
          if (arguments.length === 3) {
            for (var i = arguments[0], a = arguments[2], l = -1, g = null, m = arguments[1]; m <= a; m++) {
              var y = i.getCoordinate(m);
              (g === null || g.compareTo(y) > 0) && (g = y, l = m);
            }
            return l;
          }
        } }, { key: "extend", value: function(n, i, a) {
          var l = n.create(a, i.getDimension()), g = i.size();
          if (o.copy(i, 0, l, 0, g), g > 0) for (var m = g; m < a; m++) o.copy(i, g - 1, l, m, 1);
          return l;
        } }, { key: "reverse", value: function(n) {
          for (var i = n.size() - 1, a = Math.trunc(i / 2), l = 0; l <= a; l++) o.swap(n, l, i - l);
        } }, { key: "swap", value: function(n, i, a) {
          if (i === a) return null;
          for (var l = 0; l < n.getDimension(); l++) {
            var g = n.getOrdinate(i, l);
            n.setOrdinate(i, l, n.getOrdinate(a, l)), n.setOrdinate(a, l, g);
          }
        } }, { key: "copy", value: function(n, i, a, l, g) {
          for (var m = 0; m < g; m++) o.copyCoord(n, i + m, a, l + m);
        } }, { key: "ensureValidRing", value: function(n, i) {
          var a = i.size();
          return a === 0 ? i : a <= 3 ? o.createClosedRing(n, i, 4) : i.getOrdinate(0, Se.X) === i.getOrdinate(a - 1, Se.X) && i.getOrdinate(0, Se.Y) === i.getOrdinate(a - 1, Se.Y) ? i : o.createClosedRing(n, i, a + 1);
        } }, { key: "indexOf", value: function(n, i) {
          for (var a = 0; a < i.size(); a++) if (n.x === i.getOrdinate(a, Se.X) && n.y === i.getOrdinate(a, Se.Y)) return a;
          return -1;
        } }, { key: "createClosedRing", value: function(n, i, a) {
          var l = n.create(a, i.getDimension()), g = i.size();
          o.copy(i, 0, l, 0, g);
          for (var m = g; m < a; m++) o.copy(i, 0, l, m, 1);
          return l;
        } }, { key: "minCoordinate", value: function(n) {
          for (var i = null, a = 0; a < n.size(); a++) {
            var l = n.getCoordinate(a);
            (i === null || i.compareTo(l) > 0) && (i = l);
          }
          return i;
        } }]);
      })(), ie = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "toDimensionSymbol", value: function(n) {
          switch (n) {
            case o.FALSE:
              return o.SYM_FALSE;
            case o.TRUE:
              return o.SYM_TRUE;
            case o.DONTCARE:
              return o.SYM_DONTCARE;
            case o.P:
              return o.SYM_P;
            case o.L:
              return o.SYM_L;
            case o.A:
              return o.SYM_A;
          }
          throw new J("Unknown dimension value: " + n);
        } }, { key: "toDimensionValue", value: function(n) {
          switch (Ln.toUpperCase(n)) {
            case o.SYM_FALSE:
              return o.FALSE;
            case o.SYM_TRUE:
              return o.TRUE;
            case o.SYM_DONTCARE:
              return o.DONTCARE;
            case o.SYM_P:
              return o.P;
            case o.SYM_L:
              return o.L;
            case o.SYM_A:
              return o.A;
          }
          throw new J("Unknown dimension symbol: " + n);
        } }]);
      })();
      ie.P = 0, ie.L = 1, ie.A = 2, ie.FALSE = -1, ie.TRUE = -2, ie.DONTCARE = -3, ie.SYM_FALSE = "F", ie.SYM_TRUE = "T", ie.SYM_DONTCARE = "*", ie.SYM_P = "0", ie.SYM_L = "1", ie.SYM_A = "2";
      var hi = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "filter", value: function(o) {
        } }]);
      })(), Br = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "filter", value: function(o, n) {
        } }, { key: "isDone", value: function() {
        } }, { key: "isGeometryChanged", value: function() {
        } }]);
      })(), jn = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "computeEnvelopeInternal", value: function() {
          return this.isEmpty() ? new Le() : this._points.expandEnvelope(new Le());
        } }, { key: "isRing", value: function() {
          return this.isClosed() && this.isSimple();
        } }, { key: "getCoordinates", value: function() {
          return this._points.toCoordinateArray();
        } }, { key: "copyInternal", value: function() {
          return new n(this._points.copy(), this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            if (!this.isEquivalentClass(i)) return !1;
            var l = i;
            if (this._points.size() !== l._points.size()) return !1;
            for (var g = 0; g < this._points.size(); g++) if (!this.equal(this._points.getCoordinate(g), l._points.getCoordinate(g), a)) return !1;
            return !0;
          }
          return S(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "normalize", value: function() {
          for (var i = 0; i < Math.trunc(this._points.size() / 2); i++) {
            var a = this._points.size() - 1 - i;
            if (!this._points.getCoordinate(i).equals(this._points.getCoordinate(a))) {
              if (this._points.getCoordinate(i).compareTo(this._points.getCoordinate(a)) > 0) {
                var l = this._points.copy();
                Be.reverse(l), this._points = l;
              }
              return null;
            }
          }
        } }, { key: "getCoordinate", value: function() {
          return this.isEmpty() ? null : this._points.getCoordinate(0);
        } }, { key: "getBoundaryDimension", value: function() {
          return this.isClosed() ? ie.FALSE : 0;
        } }, { key: "isClosed", value: function() {
          return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
        } }, { key: "reverseInternal", value: function() {
          var i = this._points.copy();
          return Be.reverse(i), this.getFactory().createLineString(i);
        } }, { key: "getEndPoint", value: function() {
          return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
        } }, { key: "getTypeCode", value: function() {
          return ce.TYPECODE_LINESTRING;
        } }, { key: "getDimension", value: function() {
          return 1;
        } }, { key: "getLength", value: function() {
          return Po.ofLine(this._points);
        } }, { key: "getNumPoints", value: function() {
          return this._points.size();
        } }, { key: "compareToSameClass", value: function() {
          if (arguments.length === 1) {
            for (var i = arguments[0], a = 0, l = 0; a < this._points.size() && l < i._points.size(); ) {
              var g = this._points.getCoordinate(a).compareTo(i._points.getCoordinate(l));
              if (g !== 0) return g;
              a++, l++;
            }
            return a < this._points.size() ? 1 : l < i._points.size() ? -1 : 0;
          }
          if (arguments.length === 2) {
            var m = arguments[0];
            return arguments[1].compare(this._points, m._points);
          }
        } }, { key: "apply", value: function() {
          if (_e(arguments[0], An)) for (var i = arguments[0], a = 0; a < this._points.size(); a++) i.filter(this._points.getCoordinate(a));
          else if (_e(arguments[0], Br)) {
            var l = arguments[0];
            if (this._points.size() === 0) return null;
            for (var g = 0; g < this._points.size() && (l.filter(this._points, g), !l.isDone()); g++) ;
            l.isGeometryChanged() && this.geometryChanged();
          } else _e(arguments[0], hi) ? arguments[0].filter(this) : _e(arguments[0], U) && arguments[0].filter(this);
        } }, { key: "getBoundary", value: function() {
          throw new ke();
        } }, { key: "isEquivalentClass", value: function(i) {
          return i instanceof n;
        } }, { key: "getCoordinateN", value: function(i) {
          return this._points.getCoordinate(i);
        } }, { key: "getGeometryType", value: function() {
          return ce.TYPENAME_LINESTRING;
        } }, { key: "getCoordinateSequence", value: function() {
          return this._points;
        } }, { key: "isEmpty", value: function() {
          return this._points.size() === 0;
        } }, { key: "init", value: function(i) {
          if (i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), i.size() === 1) throw new J("Invalid number of points in LineString (found " + i.size() + " - must be 0 or >= 2)");
          this._points = i;
        } }, { key: "isCoordinate", value: function(i) {
          for (var a = 0; a < this._points.size(); a++) if (this._points.getCoordinate(a).equals(i)) return !0;
          return !1;
        } }, { key: "getStartPoint", value: function() {
          return this.isEmpty() ? null : this.getPointN(0);
        } }, { key: "getPointN", value: function(i) {
          return this.getFactory().createPoint(this._points.getCoordinate(i));
        } }, { key: "interfaces_", get: function() {
          return [oa];
        } }], [{ key: "constructor_", value: function() {
          if (this._points = null, arguments.length !== 0) {
            if (arguments.length === 2) {
              var i = arguments[0], a = arguments[1];
              ce.constructor_.call(this, a), this.init(i);
            }
          }
        } }]);
      })(ce), ss = h((function o() {
        u(this, o);
      })), fi = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "computeEnvelopeInternal", value: function() {
          if (this.isEmpty()) return new Le();
          var i = new Le();
          return i.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), i;
        } }, { key: "getCoordinates", value: function() {
          return this.isEmpty() ? [] : [this.getCoordinate()];
        } }, { key: "copyInternal", value: function() {
          return new n(this._coordinates.copy(), this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && (!(!this.isEmpty() || !i.isEmpty()) || this.isEmpty() === i.isEmpty() && this.equal(i.getCoordinate(), this.getCoordinate(), a));
          }
          return S(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "normalize", value: function() {
        } }, { key: "getCoordinate", value: function() {
          return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
        } }, { key: "getBoundaryDimension", value: function() {
          return ie.FALSE;
        } }, { key: "reverseInternal", value: function() {
          return this.getFactory().createPoint(this._coordinates.copy());
        } }, { key: "getTypeCode", value: function() {
          return ce.TYPECODE_POINT;
        } }, { key: "getDimension", value: function() {
          return 0;
        } }, { key: "getNumPoints", value: function() {
          return this.isEmpty() ? 0 : 1;
        } }, { key: "getX", value: function() {
          if (this.getCoordinate() === null) throw new IllegalStateException("getX called on empty Point");
          return this.getCoordinate().x;
        } }, { key: "compareToSameClass", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0];
            return this.getCoordinate().compareTo(i.getCoordinate());
          }
          if (arguments.length === 2) {
            var a = arguments[0];
            return arguments[1].compare(this._coordinates, a._coordinates);
          }
        } }, { key: "apply", value: function() {
          if (_e(arguments[0], An)) {
            var i = arguments[0];
            if (this.isEmpty()) return null;
            i.filter(this.getCoordinate());
          } else if (_e(arguments[0], Br)) {
            var a = arguments[0];
            if (this.isEmpty()) return null;
            a.filter(this._coordinates, 0), a.isGeometryChanged() && this.geometryChanged();
          } else _e(arguments[0], hi) ? arguments[0].filter(this) : _e(arguments[0], U) && arguments[0].filter(this);
        } }, { key: "getBoundary", value: function() {
          return this.getFactory().createGeometryCollection();
        } }, { key: "getGeometryType", value: function() {
          return ce.TYPENAME_POINT;
        } }, { key: "getCoordinateSequence", value: function() {
          return this._coordinates;
        } }, { key: "getY", value: function() {
          if (this.getCoordinate() === null) throw new IllegalStateException("getY called on empty Point");
          return this.getCoordinate().y;
        } }, { key: "isEmpty", value: function() {
          return this._coordinates.size() === 0;
        } }, { key: "init", value: function(i) {
          i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), ae.isTrue(i.size() <= 1), this._coordinates = i;
        } }, { key: "isSimple", value: function() {
          return !0;
        } }, { key: "interfaces_", get: function() {
          return [ss];
        } }], [{ key: "constructor_", value: function() {
          this._coordinates = null;
          var i = arguments[0], a = arguments[1];
          ce.constructor_.call(this, a), this.init(i);
        } }]);
      })(ce), ua = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "ofRing", value: function() {
          if (arguments[0] instanceof Array) {
            var n = arguments[0];
            return Math.abs(o.ofRingSigned(n));
          }
          if (_e(arguments[0], Se)) {
            var i = arguments[0];
            return Math.abs(o.ofRingSigned(i));
          }
        } }, { key: "ofRingSigned", value: function() {
          if (arguments[0] instanceof Array) {
            var n = arguments[0];
            if (n.length < 3) return 0;
            for (var i = 0, a = n[0].x, l = 1; l < n.length - 1; l++) {
              var g = n[l].x - a, m = n[l + 1].y;
              i += g * (n[l - 1].y - m);
            }
            return i / 2;
          }
          if (_e(arguments[0], Se)) {
            var y = arguments[0], k = y.size();
            if (k < 3) return 0;
            var L = new $(), q = new $(), V = new $();
            y.getCoordinate(0, q), y.getCoordinate(1, V);
            var ee = q.x;
            V.x -= ee;
            for (var ue = 0, fe = 1; fe < k - 1; fe++) L.y = q.y, q.x = V.x, q.y = V.y, y.getCoordinate(fe + 1, V), V.x -= ee, ue += q.x * (L.y - V.y);
            return ue / 2;
          }
        } }]);
      })(), rt = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "sort", value: function() {
          var o = arguments, n = arguments[0];
          if (arguments.length === 1) n.sort((function(ee, ue) {
            return ee.compareTo(ue);
          }));
          else if (arguments.length === 2) n.sort((function(ee, ue) {
            return o[1].compare(ee, ue);
          }));
          else if (arguments.length === 3) {
            var i = n.slice(arguments[1], arguments[2]);
            i.sort();
            var a = n.slice(0, arguments[1]).concat(i, n.slice(arguments[2], n.length));
            n.splice(0, n.length);
            var l, g = p(a);
            try {
              for (g.s(); !(l = g.n()).done; ) {
                var m = l.value;
                n.push(m);
              }
            } catch (ee) {
              g.e(ee);
            } finally {
              g.f();
            }
          } else if (arguments.length === 4) {
            var y = n.slice(arguments[1], arguments[2]);
            y.sort((function(ee, ue) {
              return o[3].compare(ee, ue);
            }));
            var k = n.slice(0, arguments[1]).concat(y, n.slice(arguments[2], n.length));
            n.splice(0, n.length);
            var L, q = p(k);
            try {
              for (q.s(); !(L = q.n()).done; ) {
                var V = L.value;
                n.push(V);
              }
            } catch (ee) {
              q.e(ee);
            } finally {
              q.f();
            }
          }
        } }, { key: "asList", value: function(o) {
          var n, i = new de(), a = p(o);
          try {
            for (a.s(); !(n = a.n()).done; ) {
              var l = n.value;
              i.add(l);
            }
          } catch (g) {
            a.e(g);
          } finally {
            a.f();
          }
          return i;
        } }, { key: "copyOf", value: function(o, n) {
          return o.slice(0, n);
        } }]);
      })(), Cn = h((function o() {
        u(this, o);
      })), Ur = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "computeEnvelopeInternal", value: function() {
          return this._shell.getEnvelopeInternal();
        } }, { key: "getCoordinates", value: function() {
          if (this.isEmpty()) return [];
          for (var i = new Array(this.getNumPoints()).fill(null), a = -1, l = this._shell.getCoordinates(), g = 0; g < l.length; g++) i[++a] = l[g];
          for (var m = 0; m < this._holes.length; m++) for (var y = this._holes[m].getCoordinates(), k = 0; k < y.length; k++) i[++a] = y[k];
          return i;
        } }, { key: "getArea", value: function() {
          var i = 0;
          i += ua.ofRing(this._shell.getCoordinateSequence());
          for (var a = 0; a < this._holes.length; a++) i -= ua.ofRing(this._holes[a].getCoordinateSequence());
          return i;
        } }, { key: "copyInternal", value: function() {
          for (var i = this._shell.copy(), a = new Array(this._holes.length).fill(null), l = 0; l < this._holes.length; l++) a[l] = this._holes[l].copy();
          return new n(i, a, this._factory);
        } }, { key: "isRectangle", value: function() {
          if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5) return !1;
          for (var i = this._shell.getCoordinateSequence(), a = this.getEnvelopeInternal(), l = 0; l < 5; l++) {
            var g = i.getX(l);
            if (g !== a.getMinX() && g !== a.getMaxX()) return !1;
            var m = i.getY(l);
            if (m !== a.getMinY() && m !== a.getMaxY()) return !1;
          }
          for (var y = i.getX(0), k = i.getY(0), L = 1; L <= 4; L++) {
            var q = i.getX(L), V = i.getY(L);
            if (q !== y == (V !== k)) return !1;
            y = q, k = V;
          }
          return !0;
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            if (!this.isEquivalentClass(i)) return !1;
            var l = i, g = this._shell, m = l._shell;
            if (!g.equalsExact(m, a) || this._holes.length !== l._holes.length) return !1;
            for (var y = 0; y < this._holes.length; y++) if (!this._holes[y].equalsExact(l._holes[y], a)) return !1;
            return !0;
          }
          return S(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "normalize", value: function() {
          if (arguments.length === 0) {
            this._shell = this.normalized(this._shell, !0);
            for (var i = 0; i < this._holes.length; i++) this._holes[i] = this.normalized(this._holes[i], !1);
            rt.sort(this._holes);
          } else if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            if (a.isEmpty()) return null;
            var g = a.getCoordinateSequence(), m = Be.minCoordinateIndex(g, 0, g.size() - 2);
            Be.scroll(g, m, !0), ye.isCCW(g) === l && Be.reverse(g);
          }
        } }, { key: "getCoordinate", value: function() {
          return this._shell.getCoordinate();
        } }, { key: "getNumInteriorRing", value: function() {
          return this._holes.length;
        } }, { key: "getBoundaryDimension", value: function() {
          return 1;
        } }, { key: "reverseInternal", value: function() {
          for (var i = this.getExteriorRing().reverse(), a = new Array(this.getNumInteriorRing()).fill(null), l = 0; l < a.length; l++) a[l] = this.getInteriorRingN(l).reverse();
          return this.getFactory().createPolygon(i, a);
        } }, { key: "getTypeCode", value: function() {
          return ce.TYPECODE_POLYGON;
        } }, { key: "getDimension", value: function() {
          return 2;
        } }, { key: "getLength", value: function() {
          var i = 0;
          i += this._shell.getLength();
          for (var a = 0; a < this._holes.length; a++) i += this._holes[a].getLength();
          return i;
        } }, { key: "getNumPoints", value: function() {
          for (var i = this._shell.getNumPoints(), a = 0; a < this._holes.length; a++) i += this._holes[a].getNumPoints();
          return i;
        } }, { key: "convexHull", value: function() {
          return this.getExteriorRing().convexHull();
        } }, { key: "normalized", value: function(i, a) {
          var l = i.copy();
          return this.normalize(l, a), l;
        } }, { key: "compareToSameClass", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0], a = this._shell, l = i._shell;
            return a.compareToSameClass(l);
          }
          if (arguments.length === 2) {
            var g = arguments[1], m = arguments[0], y = this._shell, k = m._shell, L = y.compareToSameClass(k, g);
            if (L !== 0) return L;
            for (var q = this.getNumInteriorRing(), V = m.getNumInteriorRing(), ee = 0; ee < q && ee < V; ) {
              var ue = this.getInteriorRingN(ee), fe = m.getInteriorRingN(ee), me = ue.compareToSameClass(fe, g);
              if (me !== 0) return me;
              ee++;
            }
            return ee < q ? 1 : ee < V ? -1 : 0;
          }
        } }, { key: "apply", value: function() {
          if (_e(arguments[0], An)) {
            var i = arguments[0];
            this._shell.apply(i);
            for (var a = 0; a < this._holes.length; a++) this._holes[a].apply(i);
          } else if (_e(arguments[0], Br)) {
            var l = arguments[0];
            if (this._shell.apply(l), !l.isDone()) for (var g = 0; g < this._holes.length && (this._holes[g].apply(l), !l.isDone()); g++) ;
            l.isGeometryChanged() && this.geometryChanged();
          } else if (_e(arguments[0], hi))
            arguments[0].filter(this);
          else if (_e(arguments[0], U)) {
            var m = arguments[0];
            m.filter(this), this._shell.apply(m);
            for (var y = 0; y < this._holes.length; y++) this._holes[y].apply(m);
          }
        } }, { key: "getBoundary", value: function() {
          if (this.isEmpty()) return this.getFactory().createMultiLineString();
          var i = new Array(this._holes.length + 1).fill(null);
          i[0] = this._shell;
          for (var a = 0; a < this._holes.length; a++) i[a + 1] = this._holes[a];
          return i.length <= 1 ? this.getFactory().createLinearRing(i[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(i);
        } }, { key: "getGeometryType", value: function() {
          return ce.TYPENAME_POLYGON;
        } }, { key: "getExteriorRing", value: function() {
          return this._shell;
        } }, { key: "isEmpty", value: function() {
          return this._shell.isEmpty();
        } }, { key: "getInteriorRingN", value: function(i) {
          return this._holes[i];
        } }, { key: "interfaces_", get: function() {
          return [Cn];
        } }], [{ key: "constructor_", value: function() {
          this._shell = null, this._holes = null;
          var i = arguments[0], a = arguments[1], l = arguments[2];
          if (ce.constructor_.call(this, l), i === null && (i = this.getFactory().createLinearRing()), a === null && (a = []), ce.hasNullElements(a)) throw new J("holes must not contain null elements");
          if (i.isEmpty() && ce.hasNonEmptyElements(a)) throw new J("shell is empty but holes are not");
          this._shell = i, this._holes = a;
        } }]);
      })(ce), la = (function(o) {
        function n() {
          return u(this, n), s(this, n, arguments);
        }
        return _(n, o), h(n);
      })(ui), gi = (function(o) {
        function n(i) {
          var a;
          return u(this, n), (a = s(this, n)).array = [], i instanceof Ne && a.addAll(i), a;
        }
        return _(n, o), h(n, [{ key: "contains", value: function(i) {
          var a, l = p(this.array);
          try {
            for (l.s(); !(a = l.n()).done; )
              if (a.value.compareTo(i) === 0) return !0;
          } catch (g) {
            l.e(g);
          } finally {
            l.f();
          }
          return !1;
        } }, { key: "add", value: function(i) {
          if (this.contains(i)) return !1;
          for (var a = 0, l = this.array.length; a < l; a++)
            if (this.array[a].compareTo(i) === 1) return !!this.array.splice(a, 0, i);
          return this.array.push(i), !0;
        } }, { key: "addAll", value: function(i) {
          var a, l = p(i);
          try {
            for (l.s(); !(a = l.n()).done; ) {
              var g = a.value;
              this.add(g);
            }
          } catch (m) {
            l.e(m);
          } finally {
            l.f();
          }
          return !0;
        } }, { key: "remove", value: function() {
          throw new ke();
        } }, { key: "size", value: function() {
          return this.array.length;
        } }, { key: "isEmpty", value: function() {
          return this.array.length === 0;
        } }, { key: "toArray", value: function() {
          return this.array.slice();
        } }, { key: "iterator", value: function() {
          return new ca(this.array);
        } }]);
      })(la), ca = (function() {
        return h((function o(n) {
          u(this, o), this.array = n, this.position = 0;
        }), [{ key: "next", value: function() {
          if (this.position === this.array.length) throw new De();
          return this.array[this.position++];
        } }, { key: "hasNext", value: function() {
          return this.position < this.array.length;
        } }, { key: "remove", value: function() {
          throw new ke();
        } }]);
      })(), $e = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "computeEnvelopeInternal", value: function() {
          for (var i = new Le(), a = 0; a < this._geometries.length; a++) i.expandToInclude(this._geometries[a].getEnvelopeInternal());
          return i;
        } }, { key: "getGeometryN", value: function(i) {
          return this._geometries[i];
        } }, { key: "getCoordinates", value: function() {
          for (var i = new Array(this.getNumPoints()).fill(null), a = -1, l = 0; l < this._geometries.length; l++) for (var g = this._geometries[l].getCoordinates(), m = 0; m < g.length; m++) i[++a] = g[m];
          return i;
        } }, { key: "getArea", value: function() {
          for (var i = 0, a = 0; a < this._geometries.length; a++) i += this._geometries[a].getArea();
          return i;
        } }, { key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new n(i, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            if (!this.isEquivalentClass(i)) return !1;
            var l = i;
            if (this._geometries.length !== l._geometries.length) return !1;
            for (var g = 0; g < this._geometries.length; g++) if (!this._geometries[g].equalsExact(l._geometries[g], a)) return !1;
            return !0;
          }
          return S(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "normalize", value: function() {
          for (var i = 0; i < this._geometries.length; i++) this._geometries[i].normalize();
          rt.sort(this._geometries);
        } }, { key: "getCoordinate", value: function() {
          return this.isEmpty() ? null : this._geometries[0].getCoordinate();
        } }, { key: "getBoundaryDimension", value: function() {
          for (var i = ie.FALSE, a = 0; a < this._geometries.length; a++) i = Math.max(i, this._geometries[a].getBoundaryDimension());
          return i;
        } }, { key: "reverseInternal", value: function() {
          for (var i = this._geometries.length, a = new de(i), l = 0; l < i; l++) a.add(this._geometries[l].reverse());
          return this.getFactory().buildGeometry(a);
        } }, { key: "getTypeCode", value: function() {
          return ce.TYPECODE_GEOMETRYCOLLECTION;
        } }, { key: "getDimension", value: function() {
          for (var i = ie.FALSE, a = 0; a < this._geometries.length; a++) i = Math.max(i, this._geometries[a].getDimension());
          return i;
        } }, { key: "getLength", value: function() {
          for (var i = 0, a = 0; a < this._geometries.length; a++) i += this._geometries[a].getLength();
          return i;
        } }, { key: "getNumPoints", value: function() {
          for (var i = 0, a = 0; a < this._geometries.length; a++) i += this._geometries[a].getNumPoints();
          return i;
        } }, { key: "getNumGeometries", value: function() {
          return this._geometries.length;
        } }, { key: "compareToSameClass", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0], a = new gi(rt.asList(this._geometries)), l = new gi(rt.asList(i._geometries));
            return this.compare(a, l);
          }
          if (arguments.length === 2) {
            for (var g = arguments[1], m = arguments[0], y = this.getNumGeometries(), k = m.getNumGeometries(), L = 0; L < y && L < k; ) {
              var q = this.getGeometryN(L), V = m.getGeometryN(L), ee = q.compareToSameClass(V, g);
              if (ee !== 0) return ee;
              L++;
            }
            return L < y ? 1 : L < k ? -1 : 0;
          }
        } }, { key: "apply", value: function() {
          if (_e(arguments[0], An)) for (var i = arguments[0], a = 0; a < this._geometries.length; a++) this._geometries[a].apply(i);
          else if (_e(arguments[0], Br)) {
            var l = arguments[0];
            if (this._geometries.length === 0) return null;
            for (var g = 0; g < this._geometries.length && (this._geometries[g].apply(l), !l.isDone()); g++) ;
            l.isGeometryChanged() && this.geometryChanged();
          } else if (_e(arguments[0], hi)) {
            var m = arguments[0];
            m.filter(this);
            for (var y = 0; y < this._geometries.length; y++) this._geometries[y].apply(m);
          } else if (_e(arguments[0], U)) {
            var k = arguments[0];
            k.filter(this);
            for (var L = 0; L < this._geometries.length; L++) this._geometries[L].apply(k);
          }
        } }, { key: "getBoundary", value: function() {
          return ce.checkNotGeometryCollection(this), ae.shouldNeverReachHere(), null;
        } }, { key: "getGeometryType", value: function() {
          return ce.TYPENAME_GEOMETRYCOLLECTION;
        } }, { key: "isEmpty", value: function() {
          for (var i = 0; i < this._geometries.length; i++) if (!this._geometries[i].isEmpty()) return !1;
          return !0;
        } }], [{ key: "constructor_", value: function() {
          if (this._geometries = null, arguments.length !== 0) {
            if (arguments.length === 2) {
              var i = arguments[0], a = arguments[1];
              if (ce.constructor_.call(this, a), i === null && (i = []), ce.hasNullElements(i)) throw new J("geometries must not contain null elements");
              this._geometries = i;
            }
          }
        } }]);
      })(ce), di = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new n(i, this._factory);
        } }, { key: "isValid", value: function() {
          return !0;
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && S(n, "equalsExact", this, 1).call(this, i, a);
          }
          return S(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "getCoordinate", value: function() {
          if (arguments.length === 1 && Number.isInteger(arguments[0])) {
            var i = arguments[0];
            return this._geometries[i].getCoordinate();
          }
          return S(n, "getCoordinate", this, 1).apply(this, arguments);
        } }, { key: "getBoundaryDimension", value: function() {
          return ie.FALSE;
        } }, { key: "getTypeCode", value: function() {
          return ce.TYPECODE_MULTIPOINT;
        } }, { key: "getDimension", value: function() {
          return 0;
        } }, { key: "getBoundary", value: function() {
          return this.getFactory().createGeometryCollection();
        } }, { key: "getGeometryType", value: function() {
          return ce.TYPENAME_MULTIPOINT;
        } }, { key: "interfaces_", get: function() {
          return [ss];
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          $e.constructor_.call(this, i, a);
        } }]);
      })($e), vr = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "copyInternal", value: function() {
          return new n(this._points.copy(), this._factory);
        } }, { key: "getBoundaryDimension", value: function() {
          return ie.FALSE;
        } }, { key: "isClosed", value: function() {
          return !!this.isEmpty() || S(n, "isClosed", this, 1).call(this);
        } }, { key: "reverseInternal", value: function() {
          var i = this._points.copy();
          return Be.reverse(i), this.getFactory().createLinearRing(i);
        } }, { key: "getTypeCode", value: function() {
          return ce.TYPECODE_LINEARRING;
        } }, { key: "validateConstruction", value: function() {
          if (!this.isEmpty() && !S(n, "isClosed", this, 1).call(this)) throw new J("Points of LinearRing do not form a closed linestring");
          if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < n.MINIMUM_VALID_SIZE) throw new J("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
        } }, { key: "getGeometryType", value: function() {
          return ce.TYPENAME_LINEARRING;
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          jn.constructor_.call(this, i, a), this.validateConstruction();
        } }]);
      })(jn);
      vr.MINIMUM_VALID_SIZE = 4;
      var Nn = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "setOrdinate", value: function(i, a) {
          switch (i) {
            case n.X:
              this.x = a;
              break;
            case n.Y:
              this.y = a;
              break;
            default:
              throw new J("Invalid ordinate index: " + i);
          }
        } }, { key: "getZ", value: function() {
          return $.NULL_ORDINATE;
        } }, { key: "getOrdinate", value: function(i) {
          switch (i) {
            case n.X:
              return this.x;
            case n.Y:
              return this.y;
          }
          throw new J("Invalid ordinate index: " + i);
        } }, { key: "setZ", value: function(i) {
          throw new J("CoordinateXY dimension 2 does not support z-ordinate");
        } }, { key: "copy", value: function() {
          return new n(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ")";
        } }, { key: "setCoordinate", value: function(i) {
          this.x = i.x, this.y = i.y, this.z = i.getZ();
        } }], [{ key: "constructor_", value: function() {
          if (arguments.length === 0) $.constructor_.call(this);
          else if (arguments.length === 1) {
            if (arguments[0] instanceof n) {
              var i = arguments[0];
              $.constructor_.call(this, i.x, i.y);
            } else if (arguments[0] instanceof $) {
              var a = arguments[0];
              $.constructor_.call(this, a.x, a.y);
            }
          } else if (arguments.length === 2) {
            var l = arguments[0], g = arguments[1];
            $.constructor_.call(this, l, g, $.NULL_ORDINATE);
          }
        } }]);
      })($);
      Nn.X = 0, Nn.Y = 1, Nn.Z = -1, Nn.M = -1;
      var Pn = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "getM", value: function() {
          return this._m;
        } }, { key: "setOrdinate", value: function(i, a) {
          switch (i) {
            case n.X:
              this.x = a;
              break;
            case n.Y:
              this.y = a;
              break;
            case n.M:
              this._m = a;
              break;
            default:
              throw new J("Invalid ordinate index: " + i);
          }
        } }, { key: "setM", value: function(i) {
          this._m = i;
        } }, { key: "getZ", value: function() {
          return $.NULL_ORDINATE;
        } }, { key: "getOrdinate", value: function(i) {
          switch (i) {
            case n.X:
              return this.x;
            case n.Y:
              return this.y;
            case n.M:
              return this._m;
          }
          throw new J("Invalid ordinate index: " + i);
        } }, { key: "setZ", value: function(i) {
          throw new J("CoordinateXY dimension 2 does not support z-ordinate");
        } }, { key: "copy", value: function() {
          return new n(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + " m=" + this.getM() + ")";
        } }, { key: "setCoordinate", value: function(i) {
          this.x = i.x, this.y = i.y, this.z = i.getZ(), this._m = i.getM();
        } }], [{ key: "constructor_", value: function() {
          if (this._m = null, arguments.length === 0) $.constructor_.call(this), this._m = 0;
          else if (arguments.length === 1) {
            if (arguments[0] instanceof n) {
              var i = arguments[0];
              $.constructor_.call(this, i.x, i.y), this._m = i._m;
            } else if (arguments[0] instanceof $) {
              var a = arguments[0];
              $.constructor_.call(this, a.x, a.y), this._m = this.getM();
            }
          } else if (arguments.length === 3) {
            var l = arguments[0], g = arguments[1], m = arguments[2];
            $.constructor_.call(this, l, g, $.NULL_ORDINATE), this._m = m;
          }
        } }]);
      })($);
      Pn.X = 0, Pn.Y = 1, Pn.Z = -1, Pn.M = 2;
      var as = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "getM", value: function() {
          return this._m;
        } }, { key: "setOrdinate", value: function(i, a) {
          switch (i) {
            case $.X:
              this.x = a;
              break;
            case $.Y:
              this.y = a;
              break;
            case $.Z:
              this.z = a;
              break;
            case $.M:
              this._m = a;
              break;
            default:
              throw new J("Invalid ordinate index: " + i);
          }
        } }, { key: "setM", value: function(i) {
          this._m = i;
        } }, { key: "getOrdinate", value: function(i) {
          switch (i) {
            case $.X:
              return this.x;
            case $.Y:
              return this.y;
            case $.Z:
              return this.getZ();
            case $.M:
              return this.getM();
          }
          throw new J("Invalid ordinate index: " + i);
        } }, { key: "copy", value: function() {
          return new n(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ", " + this.getZ() + " m=" + this.getM() + ")";
        } }, { key: "setCoordinate", value: function(i) {
          this.x = i.x, this.y = i.y, this.z = i.getZ(), this._m = i.getM();
        } }], [{ key: "constructor_", value: function() {
          if (this._m = null, arguments.length === 0) $.constructor_.call(this), this._m = 0;
          else if (arguments.length === 1) {
            if (arguments[0] instanceof n) {
              var i = arguments[0];
              $.constructor_.call(this, i), this._m = i._m;
            } else if (arguments[0] instanceof $) {
              var a = arguments[0];
              $.constructor_.call(this, a), this._m = this.getM();
            }
          } else if (arguments.length === 4) {
            var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3];
            $.constructor_.call(this, l, g, m), this._m = y;
          }
        } }]);
      })($), ge = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "measures", value: function(n) {
          return n instanceof Nn ? 0 : n instanceof Pn || n instanceof as ? 1 : 0;
        } }, { key: "dimension", value: function(n) {
          return n instanceof Nn ? 2 : n instanceof Pn ? 3 : n instanceof as ? 4 : 3;
        } }, { key: "create", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return o.create(n, 0);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return i === 2 ? new Nn() : i === 3 && a === 0 ? new $() : i === 3 && a === 1 ? new Pn() : i === 4 && a === 1 ? new as() : new $();
          }
        } }]);
      })(), B = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "getCoordinate", value: function(i) {
          return this.get(i);
        } }, { key: "addAll", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "boolean" && _e(arguments[0], Ne)) {
            for (var i = arguments[1], a = !1, l = arguments[0].iterator(); l.hasNext(); ) this.add(l.next(), i), a = !0;
            return a;
          }
          return S(n, "addAll", this, 1).apply(this, arguments);
        } }, { key: "clone", value: function() {
          for (var i = S(n, "clone", this, 1).call(this), a = 0; a < this.size(); a++) i.add(a, this.get(a).clone());
          return i;
        } }, { key: "toCoordinateArray", value: function() {
          if (arguments.length === 0) return this.toArray(n.coordArrayType);
          if (arguments.length === 1) {
            if (arguments[0]) return this.toArray(n.coordArrayType);
            for (var i = this.size(), a = new Array(i).fill(null), l = 0; l < i; l++) a[l] = this.get(i - l - 1);
            return a;
          }
        } }, { key: "add", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0];
            return S(n, "add", this, 1).call(this, i);
          }
          if (arguments.length === 2) {
            if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
              var a = arguments[0], l = arguments[1];
              return this.add(a, l, !0), !0;
            }
            if (arguments[0] instanceof $ && typeof arguments[1] == "boolean") {
              var g = arguments[0];
              if (!arguments[1] && this.size() >= 1 && this.get(this.size() - 1).equals2D(g)) return null;
              S(n, "add", this, 1).call(this, g);
            } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
              var m = arguments[0], y = arguments[1];
              return this.add(m, y), !0;
            }
          } else if (arguments.length === 3) {
            if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
              var k = arguments[0], L = arguments[1];
              if (arguments[2]) for (var q = 0; q < k.length; q++) this.add(k[q], L);
              else for (var V = k.length - 1; V >= 0; V--) this.add(k[V], L);
              return !0;
            }
            if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof $) {
              var ee = arguments[0], ue = arguments[1];
              if (!arguments[2]) {
                var fe = this.size();
                if (fe > 0 && (ee > 0 && this.get(ee - 1).equals2D(ue) || ee < fe && this.get(ee).equals2D(ue)))
                  return null;
              }
              S(n, "add", this, 1).call(this, ee, ue);
            }
          } else if (arguments.length === 4) {
            var me = arguments[0], Ae = arguments[1], Te = arguments[2], Fe = arguments[3], ct = 1;
            Te > Fe && (ct = -1);
            for (var ft = Te; ft !== Fe; ft += ct) this.add(me[ft], Ae);
            return !0;
          }
        } }, { key: "closeRing", value: function() {
          if (this.size() > 0) {
            var i = this.get(0).copy();
            this.add(i, !1);
          }
        } }], [{ key: "constructor_", value: function() {
          if (arguments.length !== 0) {
            if (arguments.length === 1) {
              var i = arguments[0];
              this.ensureCapacity(i.length), this.add(i, !0);
            } else if (arguments.length === 2) {
              var a = arguments[0], l = arguments[1];
              this.ensureCapacity(a.length), this.add(a, l);
            }
          }
        } }]);
      })(de);
      B.coordArrayType = new Array(0).fill(null);
      var Q = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "isRing", value: function(n) {
          return !(n.length < 4) && !!n[0].equals2D(n[n.length - 1]);
        } }, { key: "ptNotInList", value: function(n, i) {
          for (var a = 0; a < n.length; a++) {
            var l = n[a];
            if (o.indexOf(l, i) < 0) return l;
          }
          return null;
        } }, { key: "scroll", value: function(n, i) {
          var a = o.indexOf(i, n);
          if (a < 0) return null;
          var l = new Array(n.length).fill(null);
          Pt.arraycopy(n, a, l, 0, n.length - a), Pt.arraycopy(n, 0, l, n.length - a, a), Pt.arraycopy(l, 0, n, 0, n.length);
        } }, { key: "equals", value: function() {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            if (n === i) return !0;
            if (n === null || i === null || n.length !== i.length) return !1;
            for (var a = 0; a < n.length; a++) if (!n[a].equals(i[a])) return !1;
            return !0;
          }
          if (arguments.length === 3) {
            var l = arguments[0], g = arguments[1], m = arguments[2];
            if (l === g) return !0;
            if (l === null || g === null || l.length !== g.length) return !1;
            for (var y = 0; y < l.length; y++) if (m.compare(l[y], g[y]) !== 0) return !1;
            return !0;
          }
        } }, { key: "intersection", value: function(n, i) {
          for (var a = new B(), l = 0; l < n.length; l++) i.intersects(n[l]) && a.add(n[l], !0);
          return a.toCoordinateArray();
        } }, { key: "measures", value: function(n) {
          if (n === null || n.length === 0) return 0;
          var i, a = 0, l = p(n);
          try {
            for (l.s(); !(i = l.n()).done; ) {
              var g = i.value;
              a = Math.max(a, ge.measures(g));
            }
          } catch (m) {
            l.e(m);
          } finally {
            l.f();
          }
          return a;
        } }, { key: "hasRepeatedPoints", value: function(n) {
          for (var i = 1; i < n.length; i++) if (n[i - 1].equals(n[i])) return !0;
          return !1;
        } }, { key: "removeRepeatedPoints", value: function(n) {
          return o.hasRepeatedPoints(n) ? new B(n, !1).toCoordinateArray() : n;
        } }, { key: "reverse", value: function(n) {
          for (var i = n.length - 1, a = Math.trunc(i / 2), l = 0; l <= a; l++) {
            var g = n[l];
            n[l] = n[i - l], n[i - l] = g;
          }
        } }, { key: "removeNull", value: function(n) {
          for (var i = 0, a = 0; a < n.length; a++) n[a] !== null && i++;
          var l = new Array(i).fill(null);
          if (i === 0) return l;
          for (var g = 0, m = 0; m < n.length; m++) n[m] !== null && (l[g++] = n[m]);
          return l;
        } }, { key: "copyDeep", value: function() {
          if (arguments.length === 1) {
            for (var n = arguments[0], i = new Array(n.length).fill(null), a = 0; a < n.length; a++) i[a] = n[a].copy();
            return i;
          }
          if (arguments.length === 5) for (var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3], k = arguments[4], L = 0; L < k; L++) m[y + L] = l[g + L].copy();
        } }, { key: "isEqualReversed", value: function(n, i) {
          for (var a = 0; a < n.length; a++) {
            var l = n[a], g = i[n.length - a - 1];
            if (l.compareTo(g) !== 0) return !1;
          }
          return !0;
        } }, { key: "envelope", value: function(n) {
          for (var i = new Le(), a = 0; a < n.length; a++) i.expandToInclude(n[a]);
          return i;
        } }, { key: "toCoordinateArray", value: function(n) {
          return n.toArray(o.coordArrayType);
        } }, { key: "dimension", value: function(n) {
          if (n === null || n.length === 0) return 3;
          var i, a = 0, l = p(n);
          try {
            for (l.s(); !(i = l.n()).done; ) {
              var g = i.value;
              a = Math.max(a, ge.dimension(g));
            }
          } catch (m) {
            l.e(m);
          } finally {
            l.f();
          }
          return a;
        } }, { key: "atLeastNCoordinatesOrNothing", value: function(n, i) {
          return i.length >= n ? i : [];
        } }, { key: "indexOf", value: function(n, i) {
          for (var a = 0; a < i.length; a++) if (n.equals(i[a])) return a;
          return -1;
        } }, { key: "increasingDirection", value: function(n) {
          for (var i = 0; i < Math.trunc(n.length / 2); i++) {
            var a = n.length - 1 - i, l = n[i].compareTo(n[a]);
            if (l !== 0) return l;
          }
          return 1;
        } }, { key: "compare", value: function(n, i) {
          for (var a = 0; a < n.length && a < i.length; ) {
            var l = n[a].compareTo(i[a]);
            if (l !== 0) return l;
            a++;
          }
          return a < i.length ? -1 : a < n.length ? 1 : 0;
        } }, { key: "minCoordinate", value: function(n) {
          for (var i = null, a = 0; a < n.length; a++) (i === null || i.compareTo(n[a]) > 0) && (i = n[a]);
          return i;
        } }, { key: "extract", value: function(n, i, a) {
          i = Tn.clamp(i, 0, n.length);
          var l = (a = Tn.clamp(a, -1, n.length)) - i + 1;
          a < 0 && (l = 0), i >= n.length && (l = 0), a < i && (l = 0);
          var g = new Array(l).fill(null);
          if (l === 0) return g;
          for (var m = 0, y = i; y <= a; y++) g[m++] = n[y];
          return g;
        } }]);
      })(), he = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "compare", value: function(o, n) {
          var i = o, a = n;
          return Q.compare(i, a);
        } }, { key: "interfaces_", get: function() {
          return [re];
        } }]);
      })(), Ue = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "compare", value: function(o, n) {
          var i = o, a = n;
          if (i.length < a.length) return -1;
          if (i.length > a.length) return 1;
          if (i.length === 0) return 0;
          var l = Q.compare(i, a);
          return Q.isEqualReversed(i, a) ? 0 : l;
        } }, { key: "OLDcompare", value: function(o, n) {
          var i = o, a = n;
          if (i.length < a.length) return -1;
          if (i.length > a.length) return 1;
          if (i.length === 0) return 0;
          for (var l = Q.increasingDirection(i), g = Q.increasingDirection(a), m = l > 0 ? 0 : i.length - 1, y = g > 0 ? 0 : i.length - 1, k = 0; k < i.length; k++) {
            var L = i[m].compareTo(a[y]);
            if (L !== 0) return L;
            m += l, y += g;
          }
          return 0;
        } }, { key: "interfaces_", get: function() {
          return [re];
        } }]);
      })();
      Q.ForwardComparator = he, Q.BidirectionalComparator = Ue, Q.coordArrayType = new Array(0).fill(null);
      var et = (function() {
        return h((function o(n) {
          u(this, o), this.str = n;
        }), [{ key: "append", value: function(o) {
          this.str += o;
        } }, { key: "setCharAt", value: function(o, n) {
          this.str = this.str.substr(0, o) + n + this.str.substr(o + 1);
        } }, { key: "toString", value: function() {
          return this.str;
        } }]);
      })(), ze = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getM", value: function(n) {
          return this.hasM() ? this._coordinates[n].getM() : Z.NaN;
        } }, { key: "setOrdinate", value: function(n, i, a) {
          switch (i) {
            case Se.X:
              this._coordinates[n].x = a;
              break;
            case Se.Y:
              this._coordinates[n].y = a;
              break;
            default:
              this._coordinates[n].setOrdinate(i, a);
          }
        } }, { key: "getZ", value: function(n) {
          return this.hasZ() ? this._coordinates[n].getZ() : Z.NaN;
        } }, { key: "size", value: function() {
          return this._coordinates.length;
        } }, { key: "getOrdinate", value: function(n, i) {
          switch (i) {
            case Se.X:
              return this._coordinates[n].x;
            case Se.Y:
              return this._coordinates[n].y;
            default:
              return this._coordinates[n].getOrdinate(i);
          }
        } }, { key: "getCoordinate", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return this._coordinates[n];
          }
          if (arguments.length === 2) {
            var i = arguments[0];
            arguments[1].setCoordinate(this._coordinates[i]);
          }
        } }, { key: "getCoordinateCopy", value: function(n) {
          var i = this.createCoordinate();
          return i.setCoordinate(this._coordinates[n]), i;
        } }, { key: "createCoordinate", value: function() {
          return ge.create(this.getDimension(), this.getMeasures());
        } }, { key: "getDimension", value: function() {
          return this._dimension;
        } }, { key: "getX", value: function(n) {
          return this._coordinates[n].x;
        } }, { key: "getMeasures", value: function() {
          return this._measures;
        } }, { key: "expandEnvelope", value: function(n) {
          for (var i = 0; i < this._coordinates.length; i++) n.expandToInclude(this._coordinates[i]);
          return n;
        } }, { key: "copy", value: function() {
          for (var n = new Array(this.size()).fill(null), i = 0; i < this._coordinates.length; i++) {
            var a = this.createCoordinate();
            a.setCoordinate(this._coordinates[i]), n[i] = a;
          }
          return new o(n, this._dimension, this._measures);
        } }, { key: "toString", value: function() {
          if (this._coordinates.length > 0) {
            var n = new et(17 * this._coordinates.length);
            n.append("("), n.append(this._coordinates[0]);
            for (var i = 1; i < this._coordinates.length; i++) n.append(", "), n.append(this._coordinates[i]);
            return n.append(")"), n.toString();
          }
          return "()";
        } }, { key: "getY", value: function(n) {
          return this._coordinates[n].y;
        } }, { key: "toCoordinateArray", value: function() {
          return this._coordinates;
        } }, { key: "interfaces_", get: function() {
          return [Se, w];
        } }], [{ key: "constructor_", value: function() {
          if (this._dimension = 3, this._measures = 0, this._coordinates = null, arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var n = arguments[0];
              o.constructor_.call(this, n, Q.dimension(n), Q.measures(n));
            } else if (Number.isInteger(arguments[0])) {
              var i = arguments[0];
              this._coordinates = new Array(i).fill(null);
              for (var a = 0; a < i; a++) this._coordinates[a] = new $();
            } else if (_e(arguments[0], Se)) {
              var l = arguments[0];
              if (l === null) return this._coordinates = new Array(0).fill(null), null;
              this._dimension = l.getDimension(), this._measures = l.getMeasures(), this._coordinates = new Array(l.size()).fill(null);
              for (var g = 0; g < this._coordinates.length; g++) this._coordinates[g] = l.getCoordinateCopy(g);
            }
          } else if (arguments.length === 2) {
            if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
              var m = arguments[0], y = arguments[1];
              o.constructor_.call(this, m, y, Q.measures(m));
            } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
              var k = arguments[0], L = arguments[1];
              this._coordinates = new Array(k).fill(null), this._dimension = L;
              for (var q = 0; q < k; q++) this._coordinates[q] = ge.create(L);
            }
          } else if (arguments.length === 3) {
            if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
              var V = arguments[0], ee = arguments[1], ue = arguments[2];
              this._dimension = ee, this._measures = ue, this._coordinates = V === null ? new Array(0).fill(null) : V;
            } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
              var fe = arguments[0], me = arguments[1], Ae = arguments[2];
              this._coordinates = new Array(fe).fill(null), this._dimension = me, this._measures = Ae;
              for (var Te = 0; Te < fe; Te++) this._coordinates[Te] = this.createCoordinate();
            }
          }
        } }]);
      })(), it = (function() {
        function o() {
          u(this, o);
        }
        return h(o, [{ key: "readResolve", value: function() {
          return o.instance();
        } }, { key: "create", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) return new ze(arguments[0]);
            if (_e(arguments[0], Se)) return new ze(arguments[0]);
          } else {
            if (arguments.length === 2) {
              var n = arguments[1];
              return n > 3 && (n = 3), n < 2 && (n = 2), new ze(arguments[0], n);
            }
            if (arguments.length === 3) {
              var i = arguments[2], a = arguments[1] - i;
              return i > 1 && (i = 1), a > 3 && (a = 3), a < 2 && (a = 2), new ze(arguments[0], a + i, i);
            }
          }
        } }, { key: "interfaces_", get: function() {
          return [aa, w];
        } }], [{ key: "instance", value: function() {
          return o.instanceObject;
        } }]);
      })();
      it.instanceObject = new it();
      var Ft = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new n(i, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && S(n, "equalsExact", this, 1).call(this, i, a);
          }
          return S(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "getBoundaryDimension", value: function() {
          return 1;
        } }, { key: "getTypeCode", value: function() {
          return ce.TYPECODE_MULTIPOLYGON;
        } }, { key: "getDimension", value: function() {
          return 2;
        } }, { key: "getBoundary", value: function() {
          if (this.isEmpty()) return this.getFactory().createMultiLineString();
          for (var i = new de(), a = 0; a < this._geometries.length; a++) for (var l = this._geometries[a].getBoundary(), g = 0; g < l.getNumGeometries(); g++) i.add(l.getGeometryN(g));
          var m = new Array(i.size()).fill(null);
          return this.getFactory().createMultiLineString(i.toArray(m));
        } }, { key: "getGeometryType", value: function() {
          return ce.TYPENAME_MULTIPOLYGON;
        } }, { key: "interfaces_", get: function() {
          return [Cn];
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          $e.constructor_.call(this, i, a);
        } }]);
      })($e), Zn = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "get", value: function() {
        } }, { key: "put", value: function() {
        } }, { key: "size", value: function() {
        } }, { key: "values", value: function() {
        } }, { key: "entrySet", value: function() {
        } }]);
      })(), os = (function(o) {
        function n() {
          var i;
          return u(this, n), (i = s(this, n)).map = /* @__PURE__ */ new Map(), i;
        }
        return _(n, o), h(n, [{ key: "get", value: function(i) {
          return this.map.get(i) || null;
        } }, { key: "put", value: function(i, a) {
          return this.map.set(i, a), a;
        } }, { key: "values", value: function() {
          for (var i = new de(), a = this.map.values(), l = a.next(); !l.done; ) i.add(l.value), l = a.next();
          return i;
        } }, { key: "entrySet", value: function() {
          var i = new Dr();
          return this.map.entries().forEach((function(a) {
            return i.add(a);
          })), i;
        } }, { key: "size", value: function() {
          return this.map.size();
        } }]);
      })(Zn), Re = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "equals", value: function(n) {
          if (!(n instanceof o)) return !1;
          var i = n;
          return this._modelType === i._modelType && this._scale === i._scale;
        } }, { key: "compareTo", value: function(n) {
          var i = n, a = this.getMaximumSignificantDigits(), l = i.getMaximumSignificantDigits();
          return ln.compare(a, l);
        } }, { key: "getScale", value: function() {
          return this._scale;
        } }, { key: "isFloating", value: function() {
          return this._modelType === o.FLOATING || this._modelType === o.FLOATING_SINGLE;
        } }, { key: "getType", value: function() {
          return this._modelType;
        } }, { key: "toString", value: function() {
          var n = "UNKNOWN";
          return this._modelType === o.FLOATING ? n = "Floating" : this._modelType === o.FLOATING_SINGLE ? n = "Floating-Single" : this._modelType === o.FIXED && (n = "Fixed (Scale=" + this.getScale() + ")"), n;
        } }, { key: "makePrecise", value: function() {
          if (typeof arguments[0] == "number") {
            var n = arguments[0];
            return Z.isNaN(n) || this._modelType === o.FLOATING_SINGLE ? n : this._modelType === o.FIXED ? Math.round(n * this._scale) / this._scale : n;
          }
          if (arguments[0] instanceof $) {
            var i = arguments[0];
            if (this._modelType === o.FLOATING) return null;
            i.x = this.makePrecise(i.x), i.y = this.makePrecise(i.y);
          }
        } }, { key: "getMaximumSignificantDigits", value: function() {
          var n = 16;
          return this._modelType === o.FLOATING ? n = 16 : this._modelType === o.FLOATING_SINGLE ? n = 6 : this._modelType === o.FIXED && (n = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), n;
        } }, { key: "setScale", value: function(n) {
          this._scale = Math.abs(n);
        } }, { key: "interfaces_", get: function() {
          return [w, W];
        } }], [{ key: "constructor_", value: function() {
          if (this._modelType = null, this._scale = null, arguments.length === 0) this._modelType = o.FLOATING;
          else if (arguments.length === 1) {
            if (arguments[0] instanceof Kn) {
              var n = arguments[0];
              this._modelType = n, n === o.FIXED && this.setScale(1);
            } else if (typeof arguments[0] == "number") {
              var i = arguments[0];
              this._modelType = o.FIXED, this.setScale(i);
            } else if (arguments[0] instanceof o) {
              var a = arguments[0];
              this._modelType = a._modelType, this._scale = a._scale;
            }
          }
        } }, { key: "mostPrecise", value: function(n, i) {
          return n.compareTo(i) >= 0 ? n : i;
        } }]);
      })(), Kn = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "readResolve", value: function() {
          return o.nameToTypeMap.get(this._name);
        } }, { key: "toString", value: function() {
          return this._name;
        } }, { key: "interfaces_", get: function() {
          return [w];
        } }], [{ key: "constructor_", value: function() {
          this._name = null;
          var n = arguments[0];
          this._name = n, o.nameToTypeMap.put(n, this);
        } }]);
      })();
      Kn.nameToTypeMap = new os(), Re.Type = Kn, Re.FIXED = new Kn("FIXED"), Re.FLOATING = new Kn("FLOATING"), Re.FLOATING_SINGLE = new Kn("FLOATING SINGLE"), Re.maximumPreciseValue = 9007199254740992;
      var pi = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new n(i, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && S(n, "equalsExact", this, 1).call(this, i, a);
          }
          return S(n, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "getBoundaryDimension", value: function() {
          return this.isClosed() ? ie.FALSE : 0;
        } }, { key: "isClosed", value: function() {
          if (this.isEmpty()) return !1;
          for (var i = 0; i < this._geometries.length; i++) if (!this._geometries[i].isClosed()) return !1;
          return !0;
        } }, { key: "getTypeCode", value: function() {
          return ce.TYPECODE_MULTILINESTRING;
        } }, { key: "getDimension", value: function() {
          return 1;
        } }, { key: "getBoundary", value: function() {
          throw new ke();
        } }, { key: "getGeometryType", value: function() {
          return ce.TYPENAME_MULTILINESTRING;
        } }, { key: "interfaces_", get: function() {
          return [oa];
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          $e.constructor_.call(this, i, a);
        } }]);
      })($e), mi = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "createEmpty", value: function(n) {
          switch (n) {
            case -1:
              return this.createGeometryCollection();
            case 0:
              return this.createPoint();
            case 1:
              return this.createLineString();
            case 2:
              return this.createPolygon();
            default:
              throw new J("Invalid dimension: " + n);
          }
        } }, { key: "toGeometry", value: function(n) {
          return n.isNull() ? this.createPoint() : n.getMinX() === n.getMaxX() && n.getMinY() === n.getMaxY() ? this.createPoint(new $(n.getMinX(), n.getMinY())) : n.getMinX() === n.getMaxX() || n.getMinY() === n.getMaxY() ? this.createLineString([new $(n.getMinX(), n.getMinY()), new $(n.getMaxX(), n.getMaxY())]) : this.createPolygon(this.createLinearRing([new $(n.getMinX(), n.getMinY()), new $(n.getMinX(), n.getMaxY()), new $(n.getMaxX(), n.getMaxY()), new $(n.getMaxX(), n.getMinY()), new $(n.getMinX(), n.getMinY())]), null);
        } }, { key: "createLineString", value: function() {
          if (arguments.length === 0) return this.createLineString(this.getCoordinateSequenceFactory().create([]));
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var n = arguments[0];
              return this.createLineString(n !== null ? this.getCoordinateSequenceFactory().create(n) : null);
            }
            if (_e(arguments[0], Se)) return new jn(arguments[0], this);
          }
        } }, { key: "createMultiLineString", value: function() {
          return arguments.length === 0 ? new pi(null, this) : arguments.length === 1 ? new pi(arguments[0], this) : void 0;
        } }, { key: "buildGeometry", value: function(n) {
          for (var i = null, a = !1, l = !1, g = n.iterator(); g.hasNext(); ) {
            var m = g.next(), y = m.getTypeCode();
            i === null && (i = y), y !== i && (a = !0), m instanceof $e && (l = !0);
          }
          if (i === null) return this.createGeometryCollection();
          if (a || l) return this.createGeometryCollection(o.toGeometryArray(n));
          var k = n.iterator().next();
          if (n.size() > 1) {
            if (k instanceof Ur) return this.createMultiPolygon(o.toPolygonArray(n));
            if (k instanceof jn) return this.createMultiLineString(o.toLineStringArray(n));
            if (k instanceof fi) return this.createMultiPoint(o.toPointArray(n));
            ae.shouldNeverReachHere("Unhandled geometry type: " + k.getGeometryType());
          }
          return k;
        } }, { key: "createMultiPointFromCoords", value: function(n) {
          return this.createMultiPoint(n !== null ? this.getCoordinateSequenceFactory().create(n) : null);
        } }, { key: "createPoint", value: function() {
          if (arguments.length === 0) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
          if (arguments.length === 1) {
            if (arguments[0] instanceof $) {
              var n = arguments[0];
              return this.createPoint(n !== null ? this.getCoordinateSequenceFactory().create([n]) : null);
            }
            if (_e(arguments[0], Se)) return new fi(arguments[0], this);
          }
        } }, { key: "getCoordinateSequenceFactory", value: function() {
          return this._coordinateSequenceFactory;
        } }, { key: "createPolygon", value: function() {
          if (arguments.length === 0) return this.createPolygon(null, null);
          if (arguments.length === 1) {
            if (_e(arguments[0], Se)) {
              var n = arguments[0];
              return this.createPolygon(this.createLinearRing(n));
            }
            if (arguments[0] instanceof Array) {
              var i = arguments[0];
              return this.createPolygon(this.createLinearRing(i));
            }
            if (arguments[0] instanceof vr) {
              var a = arguments[0];
              return this.createPolygon(a, null);
            }
          } else if (arguments.length === 2)
            return new Ur(arguments[0], arguments[1], this);
        } }, { key: "getSRID", value: function() {
          return this._SRID;
        } }, { key: "createGeometryCollection", value: function() {
          return arguments.length === 0 ? new $e(null, this) : arguments.length === 1 ? new $e(arguments[0], this) : void 0;
        } }, { key: "getPrecisionModel", value: function() {
          return this._precisionModel;
        } }, { key: "createLinearRing", value: function() {
          if (arguments.length === 0) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var n = arguments[0];
              return this.createLinearRing(n !== null ? this.getCoordinateSequenceFactory().create(n) : null);
            }
            if (_e(arguments[0], Se)) return new vr(arguments[0], this);
          }
        } }, { key: "createMultiPolygon", value: function() {
          return arguments.length === 0 ? new Ft(null, this) : arguments.length === 1 ? new Ft(arguments[0], this) : void 0;
        } }, { key: "createMultiPoint", value: function() {
          if (arguments.length === 0) return new di(null, this);
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) return new di(arguments[0], this);
            if (_e(arguments[0], Se)) {
              var n = arguments[0];
              if (n === null) return this.createMultiPoint(new Array(0).fill(null));
              for (var i = new Array(n.size()).fill(null), a = 0; a < n.size(); a++) {
                var l = this.getCoordinateSequenceFactory().create(1, n.getDimension(), n.getMeasures());
                Be.copy(n, a, l, 0, 1), i[a] = this.createPoint(l);
              }
              return this.createMultiPoint(i);
            }
          }
        } }, { key: "interfaces_", get: function() {
          return [w];
        } }], [{ key: "constructor_", value: function() {
          if (this._precisionModel = null, this._coordinateSequenceFactory = null, this._SRID = null, arguments.length === 0) o.constructor_.call(this, new Re(), 0);
          else if (arguments.length === 1) {
            if (_e(arguments[0], aa)) {
              var n = arguments[0];
              o.constructor_.call(this, new Re(), 0, n);
            } else if (arguments[0] instanceof Re) {
              var i = arguments[0];
              o.constructor_.call(this, i, 0, o.getDefaultCoordinateSequenceFactory());
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            o.constructor_.call(this, a, l, o.getDefaultCoordinateSequenceFactory());
          } else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1], y = arguments[2];
            this._precisionModel = g, this._coordinateSequenceFactory = y, this._SRID = m;
          }
        } }, { key: "toMultiPolygonArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "toGeometryArray", value: function(n) {
          if (n === null) return null;
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "getDefaultCoordinateSequenceFactory", value: function() {
          return it.instance();
        } }, { key: "toMultiLineStringArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "toLineStringArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "toMultiPointArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "toLinearRingArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "toPointArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "toPolygonArray", value: function(n) {
          var i = new Array(n.size()).fill(null);
          return n.toArray(i);
        } }, { key: "createPointFromInternalCoord", value: function(n, i) {
          return i.getPrecisionModel().makePrecise(n), i.getFactory().createPoint(n);
        } }]);
      })(), Oo = "XY", Rp = "XYZ", Dp = "XYM", Fp = "XYZM", nc = { POINT: "Point", LINE_STRING: "LineString", LINEAR_RING: "LinearRing", POLYGON: "Polygon", MULTI_POINT: "MultiPoint", MULTI_LINE_STRING: "MultiLineString", MULTI_POLYGON: "MultiPolygon", GEOMETRY_COLLECTION: "GeometryCollection", CIRCLE: "Circle" }, rc = "EMPTY", ha = 1, Qn = 2, yr = 3, ic = 4, vi = 5, Gp = 6;
      for (var Bp in nc) nc[Bp].toUpperCase();
      var Up = (function() {
        return h((function o(n) {
          u(this, o), this.wkt = n, this.index_ = -1;
        }), [{ key: "isAlpha_", value: function(o) {
          return o >= "a" && o <= "z" || o >= "A" && o <= "Z";
        } }, { key: "isNumeric_", value: function(o, n) {
          return o >= "0" && o <= "9" || o == "." && !(n !== void 0 && n);
        } }, { key: "isWhiteSpace_", value: function(o) {
          return o == " " || o == "	" || o == "\r" || o == `
`;
        } }, { key: "nextChar_", value: function() {
          return this.wkt.charAt(++this.index_);
        } }, { key: "nextToken", value: function() {
          var o, n = this.nextChar_(), i = this.index_, a = n;
          if (n == "(") o = Qn;
          else if (n == ",") o = vi;
          else if (n == ")") o = yr;
          else if (this.isNumeric_(n) || n == "-") o = ic, a = this.readNumber_();
          else if (this.isAlpha_(n)) o = ha, a = this.readText_();
          else {
            if (this.isWhiteSpace_(n)) return this.nextToken();
            if (n !== "") throw new Error("Unexpected character: " + n);
            o = Gp;
          }
          return { position: i, value: a, type: o };
        } }, { key: "readNumber_", value: function() {
          var o, n = this.index_, i = !1, a = !1;
          do
            o == "." ? i = !0 : o != "e" && o != "E" || (a = !0), o = this.nextChar_();
          while (this.isNumeric_(o, i) || !a && (o == "e" || o == "E") || a && (o == "-" || o == "+"));
          return parseFloat(this.wkt.substring(n, this.index_--));
        } }, { key: "readText_", value: function() {
          var o, n = this.index_;
          do
            o = this.nextChar_();
          while (this.isAlpha_(o));
          return this.wkt.substring(n, this.index_--).toUpperCase();
        } }]);
      })(), zp = (function() {
        return h((function o(n, i) {
          u(this, o), this.lexer_ = n, this.token_, this.layout_ = Oo, this.factory = i;
        }), [{ key: "consume_", value: function() {
          this.token_ = this.lexer_.nextToken();
        } }, { key: "isTokenType", value: function(o) {
          return this.token_.type == o;
        } }, { key: "match", value: function(o) {
          var n = this.isTokenType(o);
          return n && this.consume_(), n;
        } }, { key: "parse", value: function() {
          return this.consume_(), this.parseGeometry_();
        } }, { key: "parseGeometryLayout_", value: function() {
          var o = Oo, n = this.token_;
          if (this.isTokenType(ha)) {
            var i = n.value;
            i === "Z" ? o = Rp : i === "M" ? o = Dp : i === "ZM" && (o = Fp), o !== Oo && this.consume_();
          }
          return o;
        } }, { key: "parseGeometryCollectionText_", value: function() {
          if (this.match(Qn)) {
            var o = [];
            do
              o.push(this.parseGeometry_());
            while (this.match(vi));
            if (this.match(yr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePointText_", value: function() {
          if (this.match(Qn)) {
            var o = this.parsePoint_();
            if (this.match(yr)) return o;
          } else if (this.isEmptyGeometry_()) return null;
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseLineStringText_", value: function() {
          if (this.match(Qn)) {
            var o = this.parsePointList_();
            if (this.match(yr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePolygonText_", value: function() {
          if (this.match(Qn)) {
            var o = this.parseLineStringTextList_();
            if (this.match(yr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseMultiPointText_", value: function() {
          var o;
          if (this.match(Qn)) {
            if (o = this.token_.type == Qn ? this.parsePointTextList_() : this.parsePointList_(), this.match(yr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseMultiLineStringText_", value: function() {
          if (this.match(Qn)) {
            var o = this.parseLineStringTextList_();
            if (this.match(yr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseMultiPolygonText_", value: function() {
          if (this.match(Qn)) {
            var o = this.parsePolygonTextList_();
            if (this.match(yr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePoint_", value: function() {
          for (var o = [], n = this.layout_.length, i = 0; i < n; ++i) {
            var a = this.token_;
            if (!this.match(ic)) break;
            o.push(a.value);
          }
          if (o.length == n) return o;
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePointList_", value: function() {
          for (var o = [this.parsePoint_()]; this.match(vi); ) o.push(this.parsePoint_());
          return o;
        } }, { key: "parsePointTextList_", value: function() {
          for (var o = [this.parsePointText_()]; this.match(vi); ) o.push(this.parsePointText_());
          return o;
        } }, { key: "parseLineStringTextList_", value: function() {
          for (var o = [this.parseLineStringText_()]; this.match(vi); ) o.push(this.parseLineStringText_());
          return o;
        } }, { key: "parsePolygonTextList_", value: function() {
          for (var o = [this.parsePolygonText_()]; this.match(vi); ) o.push(this.parsePolygonText_());
          return o;
        } }, { key: "isEmptyGeometry_", value: function() {
          var o = this.isTokenType(ha) && this.token_.value == rc;
          return o && this.consume_(), o;
        } }, { key: "formatErrorMessage_", value: function() {
          return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
        } }, { key: "parseGeometry_", value: function() {
          var o = this.factory, n = function(me) {
            return c($, C(me));
          }, i = function(me) {
            var Ae = me.map((function(Te) {
              return o.createLinearRing(Te.map(n));
            }));
            return Ae.length > 1 ? o.createPolygon(Ae[0], Ae.slice(1)) : o.createPolygon(Ae[0]);
          }, a = this.token_;
          if (this.match(ha)) {
            var l = a.value;
            if (this.layout_ = this.parseGeometryLayout_(), l == "GEOMETRYCOLLECTION") {
              var g = this.parseGeometryCollectionText_();
              return o.createGeometryCollection(g);
            }
            switch (l) {
              case "POINT":
                var m = this.parsePointText_();
                return m ? o.createPoint(c($, C(m))) : o.createPoint();
              case "LINESTRING":
                var y = this.parseLineStringText_().map(n);
                return o.createLineString(y);
              case "LINEARRING":
                var k = this.parseLineStringText_().map(n);
                return o.createLinearRing(k);
              case "POLYGON":
                var L = this.parsePolygonText_();
                return L && L.length !== 0 ? i(L) : o.createPolygon();
              case "MULTIPOINT":
                var q = this.parseMultiPointText_();
                if (!q || q.length === 0) return o.createMultiPoint();
                var V = q.map(n).map((function(me) {
                  return o.createPoint(me);
                }));
                return o.createMultiPoint(V);
              case "MULTILINESTRING":
                var ee = this.parseMultiLineStringText_().map((function(me) {
                  return o.createLineString(me.map(n));
                }));
                return o.createMultiLineString(ee);
              case "MULTIPOLYGON":
                var ue = this.parseMultiPolygonText_();
                if (!ue || ue.length === 0) return o.createMultiPolygon();
                var fe = ue.map(i);
                return o.createMultiPolygon(fe);
              default:
                throw new Error("Invalid geometry type: " + l);
            }
          }
          throw new Error(this.formatErrorMessage_());
        } }]);
      })();
      function sc(o) {
        if (o.isEmpty()) return "";
        var n = o.getCoordinate(), i = [n.x, n.y];
        return n.z === void 0 || Number.isNaN(n.z) || i.push(n.z), n.m === void 0 || Number.isNaN(n.m) || i.push(n.m), i.join(" ");
      }
      function us(o) {
        for (var n = o.getCoordinates().map((function(g) {
          var m = [g.x, g.y];
          return g.z === void 0 || Number.isNaN(g.z) || m.push(g.z), g.m === void 0 || Number.isNaN(g.m) || m.push(g.m), m;
        })), i = [], a = 0, l = n.length; a < l; ++a) i.push(n[a].join(" "));
        return i.join(", ");
      }
      function ac(o) {
        var n = [];
        n.push("(" + us(o.getExteriorRing()) + ")");
        for (var i = 0, a = o.getNumInteriorRing(); i < a; ++i) n.push("(" + us(o.getInteriorRingN(i)) + ")");
        return n.join(", ");
      }
      var qp = { Point: sc, LineString: us, LinearRing: us, Polygon: ac, MultiPoint: function(o) {
        for (var n = [], i = 0, a = o.getNumGeometries(); i < a; ++i) n.push("(" + sc(o.getGeometryN(i)) + ")");
        return n.join(", ");
      }, MultiLineString: function(o) {
        for (var n = [], i = 0, a = o.getNumGeometries(); i < a; ++i) n.push("(" + us(o.getGeometryN(i)) + ")");
        return n.join(", ");
      }, MultiPolygon: function(o) {
        for (var n = [], i = 0, a = o.getNumGeometries(); i < a; ++i) n.push("(" + ac(o.getGeometryN(i)) + ")");
        return n.join(", ");
      }, GeometryCollection: function(o) {
        for (var n = [], i = 0, a = o.getNumGeometries(); i < a; ++i) n.push(oc(o.getGeometryN(i)));
        return n.join(", ");
      } };
      function oc(o) {
        var n = o.getGeometryType(), i = qp[n];
        n = n.toUpperCase();
        var a = (function(l) {
          var g = "";
          if (l.isEmpty()) return g;
          var m = l.getCoordinate();
          return m.z === void 0 || Number.isNaN(m.z) || (g += "Z"), m.m === void 0 || Number.isNaN(m.m) || (g += "M"), g;
        })(o);
        return a.length > 0 && (n += " " + a), o.isEmpty() ? n + " " + rc : n + " (" + i(o) + ")";
      }
      var Yp = (function() {
        return h((function o(n) {
          u(this, o), this.geometryFactory = n || new mi(), this.precisionModel = this.geometryFactory.getPrecisionModel();
        }), [{ key: "read", value: function(o) {
          var n = new Up(o);
          return new zp(n, this.geometryFactory).parse();
        } }, { key: "write", value: function(o) {
          return oc(o);
        } }]);
      })(), Ro = (function() {
        return h((function o(n) {
          u(this, o), this.parser = new Yp(n);
        }), [{ key: "write", value: function(o) {
          return this.parser.write(o);
        } }], [{ key: "toLineString", value: function(o, n) {
          if (arguments.length !== 2) throw new Error("Not implemented");
          return "LINESTRING ( " + o.x + " " + o.y + ", " + n.x + " " + n.y + " )";
        } }]);
      })(), Je = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getIndexAlongSegment", value: function(n, i) {
          return this.computeIntLineIndex(), this._intLineIndex[n][i];
        } }, { key: "getTopologySummary", value: function() {
          var n = new et();
          return this.isEndPoint() && n.append(" endpoint"), this._isProper && n.append(" proper"), this.isCollinear() && n.append(" collinear"), n.toString();
        } }, { key: "computeIntersection", value: function(n, i, a, l) {
          this._inputLines[0][0] = n, this._inputLines[0][1] = i, this._inputLines[1][0] = a, this._inputLines[1][1] = l, this._result = this.computeIntersect(n, i, a, l);
        } }, { key: "getIntersectionNum", value: function() {
          return this._result;
        } }, { key: "computeIntLineIndex", value: function() {
          if (arguments.length === 0) this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map((function() {
            return Array(2);
          })), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
          else if (arguments.length === 1) {
            var n = arguments[0];
            this.getEdgeDistance(n, 0) > this.getEdgeDistance(n, 1) ? (this._intLineIndex[n][0] = 0, this._intLineIndex[n][1] = 1) : (this._intLineIndex[n][0] = 1, this._intLineIndex[n][1] = 0);
          }
        } }, { key: "isProper", value: function() {
          return this.hasIntersection() && this._isProper;
        } }, { key: "setPrecisionModel", value: function(n) {
          this._precisionModel = n;
        } }, { key: "isInteriorIntersection", value: function() {
          if (arguments.length === 0) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);
          if (arguments.length === 1) {
            for (var n = arguments[0], i = 0; i < this._result; i++) if (!this._intPt[i].equals2D(this._inputLines[n][0]) && !this._intPt[i].equals2D(this._inputLines[n][1])) return !0;
            return !1;
          }
        } }, { key: "getIntersection", value: function(n) {
          return this._intPt[n];
        } }, { key: "isEndPoint", value: function() {
          return this.hasIntersection() && !this._isProper;
        } }, { key: "hasIntersection", value: function() {
          return this._result !== o.NO_INTERSECTION;
        } }, { key: "getEdgeDistance", value: function(n, i) {
          return o.computeEdgeDistance(this._intPt[i], this._inputLines[n][0], this._inputLines[n][1]);
        } }, { key: "isCollinear", value: function() {
          return this._result === o.COLLINEAR_INTERSECTION;
        } }, { key: "toString", value: function() {
          return Ro.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + Ro.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
        } }, { key: "getEndpoint", value: function(n, i) {
          return this._inputLines[n][i];
        } }, { key: "isIntersection", value: function(n) {
          for (var i = 0; i < this._result; i++) if (this._intPt[i].equals2D(n)) return !0;
          return !1;
        } }, { key: "getIntersectionAlongSegment", value: function(n, i) {
          return this.computeIntLineIndex(), this._intPt[this._intLineIndex[n][i]];
        } }], [{ key: "constructor_", value: function() {
          this._result = null, this._inputLines = Array(2).fill().map((function() {
            return Array(2);
          })), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new $(), this._intPt[1] = new $(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
        } }, { key: "computeEdgeDistance", value: function(n, i, a) {
          var l = Math.abs(a.x - i.x), g = Math.abs(a.y - i.y), m = -1;
          if (n.equals(i)) m = 0;
          else if (n.equals(a)) m = l > g ? l : g;
          else {
            var y = Math.abs(n.x - i.x), k = Math.abs(n.y - i.y);
            (m = l > g ? y : k) !== 0 || n.equals(i) || (m = Math.max(y, k));
          }
          return ae.isTrue(!(m === 0 && !n.equals(i)), "Bad distance calculation"), m;
        } }, { key: "nonRobustComputeEdgeDistance", value: function(n, i, a) {
          var l = n.x - i.x, g = n.y - i.y, m = Math.sqrt(l * l + g * g);
          return ae.isTrue(!(m === 0 && !n.equals(i)), "Invalid distance calculation"), m;
        } }]);
      })();
      Je.DONT_INTERSECT = 0, Je.DO_INTERSECT = 1, Je.COLLINEAR = 2, Je.NO_INTERSECTION = 0, Je.POINT_INTERSECTION = 1, Je.COLLINEAR_INTERSECTION = 2;
      var zr = (function(o) {
        function n() {
          return u(this, n), s(this, n);
        }
        return _(n, o), h(n, [{ key: "isInSegmentEnvelopes", value: function(i) {
          var a = new Le(this._inputLines[0][0], this._inputLines[0][1]), l = new Le(this._inputLines[1][0], this._inputLines[1][1]);
          return a.contains(i) && l.contains(i);
        } }, { key: "computeIntersection", value: function() {
          if (arguments.length !== 3) return S(n, "computeIntersection", this, 1).apply(this, arguments);
          var i = arguments[0], a = arguments[1], l = arguments[2];
          if (this._isProper = !1, Le.intersects(a, l, i) && ye.index(a, l, i) === 0 && ye.index(l, a, i) === 0) return this._isProper = !0, (i.equals(a) || i.equals(l)) && (this._isProper = !1), this._result = Je.POINT_INTERSECTION, null;
          this._result = Je.NO_INTERSECTION;
        } }, { key: "intersection", value: function(i, a, l, g) {
          var m = this.intersectionSafe(i, a, l, g);
          return this.isInSegmentEnvelopes(m) || (m = new $(n.nearestEndpoint(i, a, l, g))), this._precisionModel !== null && this._precisionModel.makePrecise(m), m;
        } }, { key: "checkDD", value: function(i, a, l, g, m) {
          var y = li.intersection(i, a, l, g), k = this.isInSegmentEnvelopes(y);
          Pt.out.println("DD in env = " + k + "  --------------------- " + y), m.distance(y) > 1e-4 && Pt.out.println("Distance = " + m.distance(y));
        } }, { key: "intersectionSafe", value: function(i, a, l, g) {
          var m = Gr.intersection(i, a, l, g);
          return m === null && (m = n.nearestEndpoint(i, a, l, g)), m;
        } }, { key: "computeCollinearIntersection", value: function(i, a, l, g) {
          var m = Le.intersects(i, a, l), y = Le.intersects(i, a, g), k = Le.intersects(l, g, i), L = Le.intersects(l, g, a);
          return m && y ? (this._intPt[0] = l, this._intPt[1] = g, Je.COLLINEAR_INTERSECTION) : k && L ? (this._intPt[0] = i, this._intPt[1] = a, Je.COLLINEAR_INTERSECTION) : m && k ? (this._intPt[0] = l, this._intPt[1] = i, !l.equals(i) || y || L ? Je.COLLINEAR_INTERSECTION : Je.POINT_INTERSECTION) : m && L ? (this._intPt[0] = l, this._intPt[1] = a, !l.equals(a) || y || k ? Je.COLLINEAR_INTERSECTION : Je.POINT_INTERSECTION) : y && k ? (this._intPt[0] = g, this._intPt[1] = i, !g.equals(i) || m || L ? Je.COLLINEAR_INTERSECTION : Je.POINT_INTERSECTION) : y && L ? (this._intPt[0] = g, this._intPt[1] = a, !g.equals(a) || m || k ? Je.COLLINEAR_INTERSECTION : Je.POINT_INTERSECTION) : Je.NO_INTERSECTION;
        } }, { key: "computeIntersect", value: function(i, a, l, g) {
          if (this._isProper = !1, !Le.intersects(i, a, l, g)) return Je.NO_INTERSECTION;
          var m = ye.index(i, a, l), y = ye.index(i, a, g);
          if (m > 0 && y > 0 || m < 0 && y < 0) return Je.NO_INTERSECTION;
          var k = ye.index(l, g, i), L = ye.index(l, g, a);
          return k > 0 && L > 0 || k < 0 && L < 0 ? Je.NO_INTERSECTION : m === 0 && y === 0 && k === 0 && L === 0 ? this.computeCollinearIntersection(i, a, l, g) : (m === 0 || y === 0 || k === 0 || L === 0 ? (this._isProper = !1, i.equals2D(l) || i.equals2D(g) ? this._intPt[0] = i : a.equals2D(l) || a.equals2D(g) ? this._intPt[0] = a : m === 0 ? this._intPt[0] = new $(l) : y === 0 ? this._intPt[0] = new $(g) : k === 0 ? this._intPt[0] = new $(i) : L === 0 && (this._intPt[0] = new $(a))) : (this._isProper = !0, this._intPt[0] = this.intersection(i, a, l, g)), Je.POINT_INTERSECTION);
        } }], [{ key: "nearestEndpoint", value: function(i, a, l, g) {
          var m = i, y = Et.pointToSegment(i, l, g), k = Et.pointToSegment(a, l, g);
          return k < y && (y = k, m = a), (k = Et.pointToSegment(l, i, a)) < y && (y = k, m = l), (k = Et.pointToSegment(g, i, a)) < y && (y = k, m = g), m;
        } }]);
      })(Je), Hp = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "countSegment", value: function(n, i) {
          if (n.x < this._p.x && i.x < this._p.x) return null;
          if (this._p.x === i.x && this._p.y === i.y) return this._isPointOnSegment = !0, null;
          if (n.y === this._p.y && i.y === this._p.y) {
            var a = n.x, l = i.x;
            return a > l && (a = i.x, l = n.x), this._p.x >= a && this._p.x <= l && (this._isPointOnSegment = !0), null;
          }
          if (n.y > this._p.y && i.y <= this._p.y || i.y > this._p.y && n.y <= this._p.y) {
            var g = ye.index(n, i, this._p);
            if (g === ye.COLLINEAR) return this._isPointOnSegment = !0, null;
            i.y < n.y && (g = -g), g === ye.LEFT && this._crossingCount++;
          }
        } }, { key: "isPointInPolygon", value: function() {
          return this.getLocation() !== N.EXTERIOR;
        } }, { key: "getLocation", value: function() {
          return this._isPointOnSegment ? N.BOUNDARY : this._crossingCount % 2 == 1 ? N.INTERIOR : N.EXTERIOR;
        } }, { key: "isOnSegment", value: function() {
          return this._isPointOnSegment;
        } }], [{ key: "constructor_", value: function() {
          this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
          var n = arguments[0];
          this._p = n;
        } }, { key: "locatePointInRing", value: function() {
          if (arguments[0] instanceof $ && _e(arguments[1], Se)) {
            for (var n = arguments[1], i = new o(arguments[0]), a = new $(), l = new $(), g = 1; g < n.size(); g++) if (n.getCoordinate(g, a), n.getCoordinate(g - 1, l), i.countSegment(a, l), i.isOnSegment()) return i.getLocation();
            return i.getLocation();
          }
          if (arguments[0] instanceof $ && arguments[1] instanceof Array) {
            for (var m = arguments[1], y = new o(arguments[0]), k = 1; k < m.length; k++) {
              var L = m[k], q = m[k - 1];
              if (y.countSegment(L, q), y.isOnSegment()) return y.getLocation();
            }
            return y.getLocation();
          }
        } }]);
      })(), Do = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "isOnLine", value: function() {
          if (arguments[0] instanceof $ && _e(arguments[1], Se)) {
            for (var n = arguments[0], i = arguments[1], a = new zr(), l = new $(), g = new $(), m = i.size(), y = 1; y < m; y++) if (i.getCoordinate(y - 1, l), i.getCoordinate(y, g), a.computeIntersection(n, l, g), a.hasIntersection()) return !0;
            return !1;
          }
          if (arguments[0] instanceof $ && arguments[1] instanceof Array) {
            for (var k = arguments[0], L = arguments[1], q = new zr(), V = 1; V < L.length; V++) {
              var ee = L[V - 1], ue = L[V];
              if (q.computeIntersection(k, ee, ue), q.hasIntersection()) return !0;
            }
            return !1;
          }
        } }, { key: "locateInRing", value: function(n, i) {
          return Hp.locatePointInRing(n, i);
        } }, { key: "isInRing", value: function(n, i) {
          return o.locateInRing(n, i) !== N.EXTERIOR;
        } }]);
      })(), Ht = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "setAllLocations", value: function(n) {
          for (var i = 0; i < this.location.length; i++) this.location[i] = n;
        } }, { key: "isNull", value: function() {
          for (var n = 0; n < this.location.length; n++) if (this.location[n] !== N.NONE) return !1;
          return !0;
        } }, { key: "setAllLocationsIfNull", value: function(n) {
          for (var i = 0; i < this.location.length; i++) this.location[i] === N.NONE && (this.location[i] = n);
        } }, { key: "isLine", value: function() {
          return this.location.length === 1;
        } }, { key: "merge", value: function(n) {
          if (n.location.length > this.location.length) {
            var i = new Array(3).fill(null);
            i[ne.ON] = this.location[ne.ON], i[ne.LEFT] = N.NONE, i[ne.RIGHT] = N.NONE, this.location = i;
          }
          for (var a = 0; a < this.location.length; a++) this.location[a] === N.NONE && a < n.location.length && (this.location[a] = n.location[a]);
        } }, { key: "getLocations", value: function() {
          return this.location;
        } }, { key: "flip", value: function() {
          if (this.location.length <= 1) return null;
          var n = this.location[ne.LEFT];
          this.location[ne.LEFT] = this.location[ne.RIGHT], this.location[ne.RIGHT] = n;
        } }, { key: "toString", value: function() {
          var n = new un();
          return this.location.length > 1 && n.append(N.toLocationSymbol(this.location[ne.LEFT])), n.append(N.toLocationSymbol(this.location[ne.ON])), this.location.length > 1 && n.append(N.toLocationSymbol(this.location[ne.RIGHT])), n.toString();
        } }, { key: "setLocations", value: function(n, i, a) {
          this.location[ne.ON] = n, this.location[ne.LEFT] = i, this.location[ne.RIGHT] = a;
        } }, { key: "get", value: function(n) {
          return n < this.location.length ? this.location[n] : N.NONE;
        } }, { key: "isArea", value: function() {
          return this.location.length > 1;
        } }, { key: "isAnyNull", value: function() {
          for (var n = 0; n < this.location.length; n++) if (this.location[n] === N.NONE) return !0;
          return !1;
        } }, { key: "setLocation", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.setLocation(ne.ON, n);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.location[i] = a;
          }
        } }, { key: "init", value: function(n) {
          this.location = new Array(n).fill(null), this.setAllLocations(N.NONE);
        } }, { key: "isEqualOnSide", value: function(n, i) {
          return this.location[i] === n.location[i];
        } }, { key: "allPositionsEqual", value: function(n) {
          for (var i = 0; i < this.location.length; i++) if (this.location[i] !== n) return !1;
          return !0;
        } }], [{ key: "constructor_", value: function() {
          if (this.location = null, arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var n = arguments[0];
              this.init(n.length);
            } else if (Number.isInteger(arguments[0])) {
              var i = arguments[0];
              this.init(1), this.location[ne.ON] = i;
            } else if (arguments[0] instanceof o) {
              var a = arguments[0];
              if (this.init(a.location.length), a !== null) for (var l = 0; l < this.location.length; l++) this.location[l] = a.location[l];
            }
          } else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1], y = arguments[2];
            this.init(3), this.location[ne.ON] = g, this.location[ne.LEFT] = m, this.location[ne.RIGHT] = y;
          }
        } }]);
      })(), Jt = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getGeometryCount", value: function() {
          var n = 0;
          return this.elt[0].isNull() || n++, this.elt[1].isNull() || n++, n;
        } }, { key: "setAllLocations", value: function(n, i) {
          this.elt[n].setAllLocations(i);
        } }, { key: "isNull", value: function(n) {
          return this.elt[n].isNull();
        } }, { key: "setAllLocationsIfNull", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.setAllLocationsIfNull(0, n), this.setAllLocationsIfNull(1, n);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.elt[i].setAllLocationsIfNull(a);
          }
        } }, { key: "isLine", value: function(n) {
          return this.elt[n].isLine();
        } }, { key: "merge", value: function(n) {
          for (var i = 0; i < 2; i++) this.elt[i] === null && n.elt[i] !== null ? this.elt[i] = new Ht(n.elt[i]) : this.elt[i].merge(n.elt[i]);
        } }, { key: "flip", value: function() {
          this.elt[0].flip(), this.elt[1].flip();
        } }, { key: "getLocation", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return this.elt[n].get(ne.ON);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return this.elt[i].get(a);
          }
        } }, { key: "toString", value: function() {
          var n = new un();
          return this.elt[0] !== null && (n.append("A:"), n.append(this.elt[0].toString())), this.elt[1] !== null && (n.append(" B:"), n.append(this.elt[1].toString())), n.toString();
        } }, { key: "isArea", value: function() {
          if (arguments.length === 0) return this.elt[0].isArea() || this.elt[1].isArea();
          if (arguments.length === 1) {
            var n = arguments[0];
            return this.elt[n].isArea();
          }
        } }, { key: "isAnyNull", value: function(n) {
          return this.elt[n].isAnyNull();
        } }, { key: "setLocation", value: function() {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            this.elt[n].setLocation(ne.ON, i);
          } else if (arguments.length === 3) {
            var a = arguments[0], l = arguments[1], g = arguments[2];
            this.elt[a].setLocation(l, g);
          }
        } }, { key: "isEqualOnSide", value: function(n, i) {
          return this.elt[0].isEqualOnSide(n.elt[0], i) && this.elt[1].isEqualOnSide(n.elt[1], i);
        } }, { key: "allPositionsEqual", value: function(n, i) {
          return this.elt[n].allPositionsEqual(i);
        } }, { key: "toLine", value: function(n) {
          this.elt[n].isArea() && (this.elt[n] = new Ht(this.elt[n].location[0]));
        } }], [{ key: "constructor_", value: function() {
          if (this.elt = new Array(2).fill(null), arguments.length === 1) {
            if (Number.isInteger(arguments[0])) {
              var n = arguments[0];
              this.elt[0] = new Ht(n), this.elt[1] = new Ht(n);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this.elt[0] = new Ht(i.elt[0]), this.elt[1] = new Ht(i.elt[1]);
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            this.elt[0] = new Ht(N.NONE), this.elt[1] = new Ht(N.NONE), this.elt[a].setLocation(l);
          } else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1], y = arguments[2];
            this.elt[0] = new Ht(g, m, y), this.elt[1] = new Ht(g, m, y);
          } else if (arguments.length === 4) {
            var k = arguments[0], L = arguments[1], q = arguments[2], V = arguments[3];
            this.elt[0] = new Ht(N.NONE, N.NONE, N.NONE), this.elt[1] = new Ht(N.NONE, N.NONE, N.NONE), this.elt[k].setLocations(L, q, V);
          }
        } }, { key: "toLineLabel", value: function(n) {
          for (var i = new o(N.NONE), a = 0; a < 2; a++) i.setLocation(a, n.getLocation(a));
          return i;
        } }]);
      })(), fa = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "computeRing", value: function() {
          if (this._ring !== null) return null;
          for (var o = new Array(this._pts.size()).fill(null), n = 0; n < this._pts.size(); n++) o[n] = this._pts.get(n);
          this._ring = this._geometryFactory.createLinearRing(o), this._isHole = ye.isCCW(this._ring.getCoordinates());
        } }, { key: "isIsolated", value: function() {
          return this._label.getGeometryCount() === 1;
        } }, { key: "computePoints", value: function(o) {
          this._startDe = o;
          var n = o, i = !0;
          do {
            if (n === null) throw new Nt("Found null DirectedEdge");
            if (n.getEdgeRing() === this) throw new Nt("Directed Edge visited twice during ring-building at " + n.getCoordinate());
            this._edges.add(n);
            var a = n.getLabel();
            ae.isTrue(a.isArea()), this.mergeLabel(a), this.addPoints(n.getEdge(), n.isForward(), i), i = !1, this.setEdgeRing(n, this), n = this.getNext(n);
          } while (n !== this._startDe);
        } }, { key: "getLinearRing", value: function() {
          return this._ring;
        } }, { key: "getCoordinate", value: function(o) {
          return this._pts.get(o);
        } }, { key: "computeMaxNodeDegree", value: function() {
          this._maxNodeDegree = 0;
          var o = this._startDe;
          do {
            var n = o.getNode().getEdges().getOutgoingDegree(this);
            n > this._maxNodeDegree && (this._maxNodeDegree = n), o = this.getNext(o);
          } while (o !== this._startDe);
          this._maxNodeDegree *= 2;
        } }, { key: "addPoints", value: function(o, n, i) {
          var a = o.getCoordinates();
          if (n) {
            var l = 1;
            i && (l = 0);
            for (var g = l; g < a.length; g++) this._pts.add(a[g]);
          } else {
            var m = a.length - 2;
            i && (m = a.length - 1);
            for (var y = m; y >= 0; y--) this._pts.add(a[y]);
          }
        } }, { key: "isHole", value: function() {
          return this._isHole;
        } }, { key: "setInResult", value: function() {
          var o = this._startDe;
          do
            o.getEdge().setInResult(!0), o = o.getNext();
          while (o !== this._startDe);
        } }, { key: "containsPoint", value: function(o) {
          var n = this.getLinearRing();
          if (!n.getEnvelopeInternal().contains(o) || !Do.isInRing(o, n.getCoordinates())) return !1;
          for (var i = this._holes.iterator(); i.hasNext(); )
            if (i.next().containsPoint(o)) return !1;
          return !0;
        } }, { key: "addHole", value: function(o) {
          this._holes.add(o);
        } }, { key: "isShell", value: function() {
          return this._shell === null;
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "getMaxNodeDegree", value: function() {
          return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
        } }, { key: "getShell", value: function() {
          return this._shell;
        } }, { key: "mergeLabel", value: function() {
          if (arguments.length === 1) {
            var o = arguments[0];
            this.mergeLabel(o, 0), this.mergeLabel(o, 1);
          } else if (arguments.length === 2) {
            var n = arguments[1], i = arguments[0].getLocation(n, ne.RIGHT);
            if (i === N.NONE) return null;
            if (this._label.getLocation(n) === N.NONE) return this._label.setLocation(n, i), null;
          }
        } }, { key: "setShell", value: function(o) {
          this._shell = o, o !== null && o.addHole(this);
        } }, { key: "toPolygon", value: function(o) {
          for (var n = new Array(this._holes.size()).fill(null), i = 0; i < this._holes.size(); i++) n[i] = this._holes.get(i).getLinearRing();
          return o.createPolygon(this.getLinearRing(), n);
        } }], [{ key: "constructor_", value: function() {
          if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new de(), this._pts = new de(), this._label = new Jt(N.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new de(), this._geometryFactory = null, arguments.length !== 0) {
            if (arguments.length === 2) {
              var o = arguments[0], n = arguments[1];
              this._geometryFactory = n, this.computePoints(o), this.computeRing();
            }
          }
        } }]);
      })(), Jp = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "setEdgeRing", value: function(i, a) {
          i.setMinEdgeRing(a);
        } }, { key: "getNext", value: function(i) {
          return i.getNextMin();
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          fa.constructor_.call(this, i, a);
        } }]);
      })(fa), $p = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "buildMinimalRings", value: function() {
          var i = new de(), a = this._startDe;
          do {
            if (a.getMinEdgeRing() === null) {
              var l = new Jp(a, this._geometryFactory);
              i.add(l);
            }
            a = a.getNext();
          } while (a !== this._startDe);
          return i;
        } }, { key: "setEdgeRing", value: function(i, a) {
          i.setEdgeRing(a);
        } }, { key: "linkDirectedEdgesForMinimalEdgeRings", value: function() {
          var i = this._startDe;
          do
            i.getNode().getEdges().linkMinimalDirectedEdges(this), i = i.getNext();
          while (i !== this._startDe);
        } }, { key: "getNext", value: function(i) {
          return i.getNext();
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          fa.constructor_.call(this, i, a);
        } }]);
      })(fa), uc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "setVisited", value: function(o) {
          this._isVisited = o;
        } }, { key: "setInResult", value: function(o) {
          this._isInResult = o;
        } }, { key: "isCovered", value: function() {
          return this._isCovered;
        } }, { key: "isCoveredSet", value: function() {
          return this._isCoveredSet;
        } }, { key: "setLabel", value: function(o) {
          this._label = o;
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "setCovered", value: function(o) {
          this._isCovered = o, this._isCoveredSet = !0;
        } }, { key: "updateIM", value: function(o) {
          ae.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(o);
        } }, { key: "isInResult", value: function() {
          return this._isInResult;
        } }, { key: "isVisited", value: function() {
          return this._isVisited;
        } }], [{ key: "constructor_", value: function() {
          if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
            if (arguments.length === 1) {
              var o = arguments[0];
              this._label = o;
            }
          }
        } }]);
      })(), ga = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "isIncidentEdgeInResult", value: function() {
          for (var i = this.getEdges().getEdges().iterator(); i.hasNext(); )
            if (i.next().getEdge().isInResult()) return !0;
          return !1;
        } }, { key: "isIsolated", value: function() {
          return this._label.getGeometryCount() === 1;
        } }, { key: "getCoordinate", value: function() {
          return this._coord;
        } }, { key: "print", value: function(i) {
          i.println("node " + this._coord + " lbl: " + this._label);
        } }, { key: "computeIM", value: function(i) {
        } }, { key: "computeMergedLocation", value: function(i, a) {
          var l = N.NONE;
          if (l = this._label.getLocation(a), !i.isNull(a)) {
            var g = i.getLocation(a);
            l !== N.BOUNDARY && (l = g);
          }
          return l;
        } }, { key: "setLabel", value: function() {
          if (arguments.length !== 2 || !Number.isInteger(arguments[1]) || !Number.isInteger(arguments[0])) return S(n, "setLabel", this, 1).apply(this, arguments);
          var i = arguments[0], a = arguments[1];
          this._label === null ? this._label = new Jt(i, a) : this._label.setLocation(i, a);
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "mergeLabel", value: function() {
          if (arguments[0] instanceof n) {
            var i = arguments[0];
            this.mergeLabel(i._label);
          } else if (arguments[0] instanceof Jt) for (var a = arguments[0], l = 0; l < 2; l++) {
            var g = this.computeMergedLocation(a, l);
            this._label.getLocation(l) === N.NONE && this._label.setLocation(l, g);
          }
        } }, { key: "add", value: function(i) {
          this._edges.insert(i), i.setNode(this);
        } }, { key: "setLabelBoundary", value: function(i) {
          if (this._label === null) return null;
          var a = N.NONE;
          this._label !== null && (a = this._label.getLocation(i));
          var l = null;
          switch (a) {
            case N.BOUNDARY:
              l = N.INTERIOR;
              break;
            case N.INTERIOR:
            default:
              l = N.BOUNDARY;
          }
          this._label.setLocation(i, l);
        } }], [{ key: "constructor_", value: function() {
          this._coord = null, this._edges = null;
          var i = arguments[0], a = arguments[1];
          this._coord = i, this._edges = a, this._label = new Jt(0, N.NONE);
        } }]);
      })(uc), Vp = (function(o) {
        function n() {
          return u(this, n), s(this, n, arguments);
        }
        return _(n, o), h(n);
      })(Zn);
      function lc(o) {
        return o == null ? 0 : o.color;
      }
      function Oe(o) {
        return o == null ? null : o.parent;
      }
      function On(o, n) {
        o !== null && (o.color = n);
      }
      function Fo(o) {
        return o == null ? null : o.left;
      }
      function cc(o) {
        return o == null ? null : o.right;
      }
      var ls = (function(o) {
        function n() {
          var i;
          return u(this, n), (i = s(this, n)).root_ = null, i.size_ = 0, i;
        }
        return _(n, o), h(n, [{ key: "get", value: function(i) {
          for (var a = this.root_; a !== null; ) {
            var l = i.compareTo(a.key);
            if (l < 0) a = a.left;
            else {
              if (!(l > 0)) return a.value;
              a = a.right;
            }
          }
          return null;
        } }, { key: "put", value: function(i, a) {
          if (this.root_ === null) return this.root_ = { key: i, value: a, left: null, right: null, parent: null, color: 0, getValue: function() {
            return this.value;
          }, getKey: function() {
            return this.key;
          } }, this.size_ = 1, null;
          var l, g, m = this.root_;
          do
            if (l = m, (g = i.compareTo(m.key)) < 0) m = m.left;
            else {
              if (!(g > 0)) {
                var y = m.value;
                return m.value = a, y;
              }
              m = m.right;
            }
          while (m !== null);
          var k = { key: i, left: null, right: null, value: a, parent: l, color: 0, getValue: function() {
            return this.value;
          }, getKey: function() {
            return this.key;
          } };
          return g < 0 ? l.left = k : l.right = k, this.fixAfterInsertion(k), this.size_++, null;
        } }, { key: "fixAfterInsertion", value: function(i) {
          var a;
          for (i.color = 1; i != null && i !== this.root_ && i.parent.color === 1; ) Oe(i) === Fo(Oe(Oe(i))) ? lc(a = cc(Oe(Oe(i)))) === 1 ? (On(Oe(i), 0), On(a, 0), On(Oe(Oe(i)), 1), i = Oe(Oe(i))) : (i === cc(Oe(i)) && (i = Oe(i), this.rotateLeft(i)), On(Oe(i), 0), On(Oe(Oe(i)), 1), this.rotateRight(Oe(Oe(i)))) : lc(a = Fo(Oe(Oe(i)))) === 1 ? (On(Oe(i), 0), On(a, 0), On(Oe(Oe(i)), 1), i = Oe(Oe(i))) : (i === Fo(Oe(i)) && (i = Oe(i), this.rotateRight(i)), On(Oe(i), 0), On(Oe(Oe(i)), 1), this.rotateLeft(Oe(Oe(i))));
          this.root_.color = 0;
        } }, { key: "values", value: function() {
          var i = new de(), a = this.getFirstEntry();
          if (a !== null) for (i.add(a.value); (a = n.successor(a)) !== null; ) i.add(a.value);
          return i;
        } }, { key: "entrySet", value: function() {
          var i = new Dr(), a = this.getFirstEntry();
          if (a !== null) for (i.add(a); (a = n.successor(a)) !== null; ) i.add(a);
          return i;
        } }, { key: "rotateLeft", value: function(i) {
          if (i != null) {
            var a = i.right;
            i.right = a.left, a.left != null && (a.left.parent = i), a.parent = i.parent, i.parent == null ? this.root_ = a : i.parent.left === i ? i.parent.left = a : i.parent.right = a, a.left = i, i.parent = a;
          }
        } }, { key: "rotateRight", value: function(i) {
          if (i != null) {
            var a = i.left;
            i.left = a.right, a.right != null && (a.right.parent = i), a.parent = i.parent, i.parent == null ? this.root_ = a : i.parent.right === i ? i.parent.right = a : i.parent.left = a, a.right = i, i.parent = a;
          }
        } }, { key: "getFirstEntry", value: function() {
          var i = this.root_;
          if (i != null) for (; i.left != null; ) i = i.left;
          return i;
        } }, { key: "size", value: function() {
          return this.size_;
        } }, { key: "containsKey", value: function(i) {
          for (var a = this.root_; a !== null; ) {
            var l = i.compareTo(a.key);
            if (l < 0) a = a.left;
            else {
              if (!(l > 0)) return !0;
              a = a.right;
            }
          }
          return !1;
        } }], [{ key: "successor", value: function(i) {
          var a;
          if (i === null) return null;
          if (i.right !== null) {
            for (a = i.right; a.left !== null; ) a = a.left;
            return a;
          }
          a = i.parent;
          for (var l = i; a !== null && l === a.right; ) l = a, a = a.parent;
          return a;
        } }]);
      })(Vp), hc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "find", value: function(o) {
          return this.nodeMap.get(o);
        } }, { key: "addNode", value: function() {
          if (arguments[0] instanceof $) {
            var o = arguments[0], n = this.nodeMap.get(o);
            return n === null && (n = this.nodeFact.createNode(o), this.nodeMap.put(o, n)), n;
          }
          if (arguments[0] instanceof ga) {
            var i = arguments[0], a = this.nodeMap.get(i.getCoordinate());
            return a === null ? (this.nodeMap.put(i.getCoordinate(), i), i) : (a.mergeLabel(i), a);
          }
        } }, { key: "print", value: function(o) {
          for (var n = this.iterator(); n.hasNext(); )
            n.next().print(o);
        } }, { key: "iterator", value: function() {
          return this.nodeMap.values().iterator();
        } }, { key: "values", value: function() {
          return this.nodeMap.values();
        } }, { key: "getBoundaryNodes", value: function(o) {
          for (var n = new de(), i = this.iterator(); i.hasNext(); ) {
            var a = i.next();
            a.getLabel().getLocation(o) === N.BOUNDARY && n.add(a);
          }
          return n;
        } }, { key: "add", value: function(o) {
          var n = o.getCoordinate();
          this.addNode(n).add(o);
        } }], [{ key: "constructor_", value: function() {
          this.nodeMap = new ls(), this.nodeFact = null;
          var o = arguments[0];
          this.nodeFact = o;
        } }]);
      })(), xt = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "isNorthern", value: function(n) {
          return n === o.NE || n === o.NW;
        } }, { key: "isOpposite", value: function(n, i) {
          return n !== i && (n - i + 4) % 4 === 2;
        } }, { key: "commonHalfPlane", value: function(n, i) {
          if (n === i) return n;
          if ((n - i + 4) % 4 === 2) return -1;
          var a = n < i ? n : i;
          return a === 0 && (n > i ? n : i) === 3 ? 3 : a;
        } }, { key: "isInHalfPlane", value: function(n, i) {
          return i === o.SE ? n === o.SE || n === o.SW : n === i || n === i + 1;
        } }, { key: "quadrant", value: function() {
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var n = arguments[0], i = arguments[1];
            if (n === 0 && i === 0) throw new J("Cannot compute the quadrant for point ( " + n + ", " + i + " )");
            return n >= 0 ? i >= 0 ? o.NE : o.SE : i >= 0 ? o.NW : o.SW;
          }
          if (arguments[0] instanceof $ && arguments[1] instanceof $) {
            var a = arguments[0], l = arguments[1];
            if (l.x === a.x && l.y === a.y) throw new J("Cannot compute the quadrant for two identical points " + a);
            return l.x >= a.x ? l.y >= a.y ? o.NE : o.SE : l.y >= a.y ? o.NW : o.SW;
          }
        } }]);
      })();
      xt.NE = 0, xt.NW = 1, xt.SW = 2, xt.SE = 3;
      var fc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "compareDirection", value: function(n) {
          return this._dx === n._dx && this._dy === n._dy ? 0 : this._quadrant > n._quadrant ? 1 : this._quadrant < n._quadrant ? -1 : ye.index(n._p0, n._p1, this._p1);
        } }, { key: "getDy", value: function() {
          return this._dy;
        } }, { key: "getCoordinate", value: function() {
          return this._p0;
        } }, { key: "setNode", value: function(n) {
          this._node = n;
        } }, { key: "print", value: function(n) {
          var i = Math.atan2(this._dy, this._dx), a = this.getClass().getName(), l = a.lastIndexOf("."), g = a.substring(l + 1);
          n.print("  " + g + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + i + "   " + this._label);
        } }, { key: "compareTo", value: function(n) {
          var i = n;
          return this.compareDirection(i);
        } }, { key: "getDirectedCoordinate", value: function() {
          return this._p1;
        } }, { key: "getDx", value: function() {
          return this._dx;
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "getQuadrant", value: function() {
          return this._quadrant;
        } }, { key: "getNode", value: function() {
          return this._node;
        } }, { key: "toString", value: function() {
          var n = Math.atan2(this._dy, this._dx), i = this.getClass().getName(), a = i.lastIndexOf(".");
          return "  " + i.substring(a + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + n + "   " + this._label;
        } }, { key: "computeLabel", value: function(n) {
        } }, { key: "init", value: function(n, i) {
          this._p0 = n, this._p1 = i, this._dx = i.x - n.x, this._dy = i.y - n.y, this._quadrant = xt.quadrant(this._dx, this._dy), ae.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
            var n = arguments[0];
            this._edge = n;
          } else if (arguments.length === 3) {
            var i = arguments[0], a = arguments[1], l = arguments[2];
            o.constructor_.call(this, i, a, l, null);
          } else if (arguments.length === 4) {
            var g = arguments[0], m = arguments[1], y = arguments[2], k = arguments[3];
            o.constructor_.call(this, g), this.init(m, y), this._label = k;
          }
        } }]);
      })(), Go = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "getNextMin", value: function() {
          return this._nextMin;
        } }, { key: "getDepth", value: function(i) {
          return this._depth[i];
        } }, { key: "setVisited", value: function(i) {
          this._isVisited = i;
        } }, { key: "computeDirectedLabel", value: function() {
          this._label = new Jt(this._edge.getLabel()), this._isForward || this._label.flip();
        } }, { key: "getNext", value: function() {
          return this._next;
        } }, { key: "setDepth", value: function(i, a) {
          if (this._depth[i] !== -999 && this._depth[i] !== a) throw new Nt("assigned depths do not match", this.getCoordinate());
          this._depth[i] = a;
        } }, { key: "isInteriorAreaEdge", value: function() {
          for (var i = !0, a = 0; a < 2; a++) this._label.isArea(a) && this._label.getLocation(a, ne.LEFT) === N.INTERIOR && this._label.getLocation(a, ne.RIGHT) === N.INTERIOR || (i = !1);
          return i;
        } }, { key: "setNextMin", value: function(i) {
          this._nextMin = i;
        } }, { key: "print", value: function(i) {
          S(n, "print", this, 1).call(this, i), i.print(" " + this._depth[ne.LEFT] + "/" + this._depth[ne.RIGHT]), i.print(" (" + this.getDepthDelta() + ")"), this._isInResult && i.print(" inResult");
        } }, { key: "setMinEdgeRing", value: function(i) {
          this._minEdgeRing = i;
        } }, { key: "isLineEdge", value: function() {
          var i = this._label.isLine(0) || this._label.isLine(1), a = !this._label.isArea(0) || this._label.allPositionsEqual(0, N.EXTERIOR), l = !this._label.isArea(1) || this._label.allPositionsEqual(1, N.EXTERIOR);
          return i && a && l;
        } }, { key: "setEdgeRing", value: function(i) {
          this._edgeRing = i;
        } }, { key: "getMinEdgeRing", value: function() {
          return this._minEdgeRing;
        } }, { key: "getDepthDelta", value: function() {
          var i = this._edge.getDepthDelta();
          return this._isForward || (i = -i), i;
        } }, { key: "setInResult", value: function(i) {
          this._isInResult = i;
        } }, { key: "getSym", value: function() {
          return this._sym;
        } }, { key: "isForward", value: function() {
          return this._isForward;
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "printEdge", value: function(i) {
          this.print(i), i.print(" "), this._isForward ? this._edge.print(i) : this._edge.printReverse(i);
        } }, { key: "setSym", value: function(i) {
          this._sym = i;
        } }, { key: "setVisitedEdge", value: function(i) {
          this.setVisited(i), this._sym.setVisited(i);
        } }, { key: "setEdgeDepths", value: function(i, a) {
          var l = this.getEdge().getDepthDelta();
          this._isForward || (l = -l);
          var g = 1;
          i === ne.LEFT && (g = -1);
          var m = ne.opposite(i), y = a + l * g;
          this.setDepth(i, a), this.setDepth(m, y);
        } }, { key: "getEdgeRing", value: function() {
          return this._edgeRing;
        } }, { key: "isInResult", value: function() {
          return this._isInResult;
        } }, { key: "setNext", value: function(i) {
          this._next = i;
        } }, { key: "isVisited", value: function() {
          return this._isVisited;
        } }], [{ key: "constructor_", value: function() {
          this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999];
          var i = arguments[0], a = arguments[1];
          if (fc.constructor_.call(this, i), this._isForward = a, a) this.init(i.getCoordinate(0), i.getCoordinate(1));
          else {
            var l = i.getNumPoints() - 1;
            this.init(i.getCoordinate(l), i.getCoordinate(l - 1));
          }
          this.computeDirectedLabel();
        } }, { key: "depthFactor", value: function(i, a) {
          return i === N.EXTERIOR && a === N.INTERIOR ? 1 : i === N.INTERIOR && a === N.EXTERIOR ? -1 : 0;
        } }]);
      })(fc), gc = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "createNode", value: function(o) {
          return new ga(o, null);
        } }]);
      })(), dc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "printEdges", value: function(o) {
          o.println("Edges:");
          for (var n = 0; n < this._edges.size(); n++) {
            o.println("edge " + n + ":");
            var i = this._edges.get(n);
            i.print(o), i.eiList.print(o);
          }
        } }, { key: "find", value: function(o) {
          return this._nodes.find(o);
        } }, { key: "addNode", value: function() {
          if (arguments[0] instanceof ga) {
            var o = arguments[0];
            return this._nodes.addNode(o);
          }
          if (arguments[0] instanceof $) {
            var n = arguments[0];
            return this._nodes.addNode(n);
          }
        } }, { key: "getNodeIterator", value: function() {
          return this._nodes.iterator();
        } }, { key: "linkResultDirectedEdges", value: function() {
          for (var o = this._nodes.iterator(); o.hasNext(); )
            o.next().getEdges().linkResultDirectedEdges();
        } }, { key: "debugPrintln", value: function(o) {
          Pt.out.println(o);
        } }, { key: "isBoundaryNode", value: function(o, n) {
          var i = this._nodes.find(n);
          if (i === null) return !1;
          var a = i.getLabel();
          return a !== null && a.getLocation(o) === N.BOUNDARY;
        } }, { key: "linkAllDirectedEdges", value: function() {
          for (var o = this._nodes.iterator(); o.hasNext(); )
            o.next().getEdges().linkAllDirectedEdges();
        } }, { key: "matchInSameDirection", value: function(o, n, i, a) {
          return !!o.equals(i) && ye.index(o, n, a) === ye.COLLINEAR && xt.quadrant(o, n) === xt.quadrant(i, a);
        } }, { key: "getEdgeEnds", value: function() {
          return this._edgeEndList;
        } }, { key: "debugPrint", value: function(o) {
          Pt.out.print(o);
        } }, { key: "getEdgeIterator", value: function() {
          return this._edges.iterator();
        } }, { key: "findEdgeInSameDirection", value: function(o, n) {
          for (var i = 0; i < this._edges.size(); i++) {
            var a = this._edges.get(i), l = a.getCoordinates();
            if (this.matchInSameDirection(o, n, l[0], l[1]) || this.matchInSameDirection(o, n, l[l.length - 1], l[l.length - 2])) return a;
          }
          return null;
        } }, { key: "insertEdge", value: function(o) {
          this._edges.add(o);
        } }, { key: "findEdgeEnd", value: function(o) {
          for (var n = this.getEdgeEnds().iterator(); n.hasNext(); ) {
            var i = n.next();
            if (i.getEdge() === o) return i;
          }
          return null;
        } }, { key: "addEdges", value: function(o) {
          for (var n = o.iterator(); n.hasNext(); ) {
            var i = n.next();
            this._edges.add(i);
            var a = new Go(i, !0), l = new Go(i, !1);
            a.setSym(l), l.setSym(a), this.add(a), this.add(l);
          }
        } }, { key: "add", value: function(o) {
          this._nodes.add(o), this._edgeEndList.add(o);
        } }, { key: "getNodes", value: function() {
          return this._nodes.values();
        } }, { key: "findEdge", value: function(o, n) {
          for (var i = 0; i < this._edges.size(); i++) {
            var a = this._edges.get(i), l = a.getCoordinates();
            if (o.equals(l[0]) && n.equals(l[1])) return a;
          }
          return null;
        } }], [{ key: "constructor_", value: function() {
          if (this._edges = new de(), this._nodes = null, this._edgeEndList = new de(), arguments.length === 0) this._nodes = new hc(new gc());
          else if (arguments.length === 1) {
            var o = arguments[0];
            this._nodes = new hc(o);
          }
        } }, { key: "linkResultDirectedEdges", value: function(o) {
          for (var n = o.iterator(); n.hasNext(); )
            n.next().getEdges().linkResultDirectedEdges();
        } }]);
      })(), Xp = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "sortShellsAndHoles", value: function(n, i, a) {
          for (var l = n.iterator(); l.hasNext(); ) {
            var g = l.next();
            g.isHole() ? a.add(g) : i.add(g);
          }
        } }, { key: "computePolygons", value: function(n) {
          for (var i = new de(), a = n.iterator(); a.hasNext(); ) {
            var l = a.next().toPolygon(this._geometryFactory);
            i.add(l);
          }
          return i;
        } }, { key: "placeFreeHoles", value: function(n, i) {
          for (var a = i.iterator(); a.hasNext(); ) {
            var l = a.next();
            if (l.getShell() === null) {
              var g = o.findEdgeRingContaining(l, n);
              if (g === null) throw new Nt("unable to assign hole to a shell", l.getCoordinate(0));
              l.setShell(g);
            }
          }
        } }, { key: "buildMinimalEdgeRings", value: function(n, i, a) {
          for (var l = new de(), g = n.iterator(); g.hasNext(); ) {
            var m = g.next();
            if (m.getMaxNodeDegree() > 2) {
              m.linkDirectedEdgesForMinimalEdgeRings();
              var y = m.buildMinimalRings(), k = this.findShell(y);
              k !== null ? (this.placePolygonHoles(k, y), i.add(k)) : a.addAll(y);
            } else l.add(m);
          }
          return l;
        } }, { key: "buildMaximalEdgeRings", value: function(n) {
          for (var i = new de(), a = n.iterator(); a.hasNext(); ) {
            var l = a.next();
            if (l.isInResult() && l.getLabel().isArea() && l.getEdgeRing() === null) {
              var g = new $p(l, this._geometryFactory);
              i.add(g), g.setInResult();
            }
          }
          return i;
        } }, { key: "placePolygonHoles", value: function(n, i) {
          for (var a = i.iterator(); a.hasNext(); ) {
            var l = a.next();
            l.isHole() && l.setShell(n);
          }
        } }, { key: "getPolygons", value: function() {
          return this.computePolygons(this._shellList);
        } }, { key: "findShell", value: function(n) {
          for (var i = 0, a = null, l = n.iterator(); l.hasNext(); ) {
            var g = l.next();
            g.isHole() || (a = g, i++);
          }
          return ae.isTrue(i <= 1, "found two shells in MinimalEdgeRing list"), a;
        } }, { key: "add", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.add(n.getEdgeEnds(), n.getNodes());
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            dc.linkResultDirectedEdges(a);
            var l = this.buildMaximalEdgeRings(i), g = new de(), m = this.buildMinimalEdgeRings(l, this._shellList, g);
            this.sortShellsAndHoles(m, this._shellList, g), this.placeFreeHoles(this._shellList, g);
          }
        } }], [{ key: "constructor_", value: function() {
          this._geometryFactory = null, this._shellList = new de();
          var n = arguments[0];
          this._geometryFactory = n;
        } }, { key: "findEdgeRingContaining", value: function(n, i) {
          for (var a = n.getLinearRing(), l = a.getEnvelopeInternal(), g = a.getCoordinateN(0), m = null, y = null, k = i.iterator(); k.hasNext(); ) {
            var L = k.next(), q = L.getLinearRing(), V = q.getEnvelopeInternal();
            if (!V.equals(l) && V.contains(l)) {
              g = Q.ptNotInList(a.getCoordinates(), q.getCoordinates());
              var ee = !1;
              Do.isInRing(g, q.getCoordinates()) && (ee = !0), ee && (m === null || y.contains(V)) && (y = (m = L).getLinearRing().getEnvelopeInternal());
            }
          }
          return m;
        } }]);
      })(), pc = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "getBounds", value: function() {
        } }]);
      })(), er = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getItem", value: function() {
          return this._item;
        } }, { key: "getBounds", value: function() {
          return this._bounds;
        } }, { key: "interfaces_", get: function() {
          return [pc, w];
        } }], [{ key: "constructor_", value: function() {
          this._bounds = null, this._item = null;
          var o = arguments[0], n = arguments[1];
          this._bounds = o, this._item = n;
        } }]);
      })(), da = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "poll", value: function() {
          if (this.isEmpty()) return null;
          var o = this._items.get(1);
          return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), o;
        } }, { key: "size", value: function() {
          return this._size;
        } }, { key: "reorder", value: function(o) {
          for (var n = null, i = this._items.get(o); 2 * o <= this._size && ((n = 2 * o) !== this._size && this._items.get(n + 1).compareTo(this._items.get(n)) < 0 && n++, this._items.get(n).compareTo(i) < 0); o = n) this._items.set(o, this._items.get(n));
          this._items.set(o, i);
        } }, { key: "clear", value: function() {
          this._size = 0, this._items.clear();
        } }, { key: "peek", value: function() {
          return this.isEmpty() ? null : this._items.get(1);
        } }, { key: "isEmpty", value: function() {
          return this._size === 0;
        } }, { key: "add", value: function(o) {
          this._items.add(null), this._size += 1;
          var n = this._size;
          for (this._items.set(0, o); o.compareTo(this._items.get(Math.trunc(n / 2))) < 0; n /= 2) this._items.set(n, this._items.get(Math.trunc(n / 2)));
          this._items.set(n, o);
        } }], [{ key: "constructor_", value: function() {
          this._size = null, this._items = null, this._size = 0, this._items = new de(), this._items.add(null);
        } }]);
      })(), Wp = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "insert", value: function(o, n) {
        } }, { key: "remove", value: function(o, n) {
        } }, { key: "query", value: function() {
        } }]);
      })(), $t = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getLevel", value: function() {
          return this._level;
        } }, { key: "size", value: function() {
          return this._childBoundables.size();
        } }, { key: "getChildBoundables", value: function() {
          return this._childBoundables;
        } }, { key: "addChildBoundable", value: function(o) {
          ae.isTrue(this._bounds === null), this._childBoundables.add(o);
        } }, { key: "isEmpty", value: function() {
          return this._childBoundables.isEmpty();
        } }, { key: "getBounds", value: function() {
          return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
        } }, { key: "interfaces_", get: function() {
          return [pc, w];
        } }], [{ key: "constructor_", value: function() {
          if (this._childBoundables = new de(), this._bounds = null, this._level = null, arguments.length !== 0) {
            if (arguments.length === 1) {
              var o = arguments[0];
              this._level = o;
            }
          }
        } }]);
      })(), yi = { reverseOrder: function() {
        return { compare: function(o, n) {
          return n.compareTo(o);
        } };
      }, min: function(o) {
        return yi.sort(o), o.get(0);
      }, sort: function(o, n) {
        var i = o.toArray();
        n ? rt.sort(i, n) : rt.sort(i);
        for (var a = o.iterator(), l = 0, g = i.length; l < g; l++) a.next(), a.set(i[l]);
      }, singletonList: function(o) {
        var n = new de();
        return n.add(o), n;
      } }, jp = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "maxDistance", value: function(n, i, a, l, g, m, y, k) {
          var L = o.distance(n, i, g, m);
          return L = Math.max(L, o.distance(n, i, y, k)), L = Math.max(L, o.distance(a, l, g, m)), L = Math.max(L, o.distance(a, l, y, k));
        } }, { key: "distance", value: function(n, i, a, l) {
          var g = a - n, m = l - i;
          return Math.sqrt(g * g + m * m);
        } }, { key: "maximumDistance", value: function(n, i) {
          var a = Math.min(n.getMinX(), i.getMinX()), l = Math.min(n.getMinY(), i.getMinY()), g = Math.max(n.getMaxX(), i.getMaxX()), m = Math.max(n.getMaxY(), i.getMaxY());
          return o.distance(a, l, g, m);
        } }, { key: "minMaxDistance", value: function(n, i) {
          var a = n.getMinX(), l = n.getMinY(), g = n.getMaxX(), m = n.getMaxY(), y = i.getMinX(), k = i.getMinY(), L = i.getMaxX(), q = i.getMaxY(), V = o.maxDistance(a, l, a, m, y, k, y, q);
          return V = Math.min(V, o.maxDistance(a, l, a, m, y, k, L, k)), V = Math.min(V, o.maxDistance(a, l, a, m, L, q, y, q)), V = Math.min(V, o.maxDistance(a, l, a, m, L, q, L, k)), V = Math.min(V, o.maxDistance(a, l, g, l, y, k, y, q)), V = Math.min(V, o.maxDistance(a, l, g, l, y, k, L, k)), V = Math.min(V, o.maxDistance(a, l, g, l, L, q, y, q)), V = Math.min(V, o.maxDistance(a, l, g, l, L, q, L, k)), V = Math.min(V, o.maxDistance(g, m, a, m, y, k, y, q)), V = Math.min(V, o.maxDistance(g, m, a, m, y, k, L, k)), V = Math.min(V, o.maxDistance(g, m, a, m, L, q, y, q)), V = Math.min(V, o.maxDistance(g, m, a, m, L, q, L, k)), V = Math.min(V, o.maxDistance(g, m, g, l, y, k, y, q)), V = Math.min(V, o.maxDistance(g, m, g, l, y, k, L, k)), V = Math.min(V, o.maxDistance(g, m, g, l, L, q, y, q)), V = Math.min(V, o.maxDistance(g, m, g, l, L, q, L, k));
        } }]);
      })(), _i = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "maximumDistance", value: function() {
          return jp.maximumDistance(this._boundable1.getBounds(), this._boundable2.getBounds());
        } }, { key: "expandToQueue", value: function(n, i) {
          var a = o.isComposite(this._boundable1), l = o.isComposite(this._boundable2);
          if (a && l) return o.area(this._boundable1) > o.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, !1, n, i), null) : (this.expand(this._boundable2, this._boundable1, !0, n, i), null);
          if (a) return this.expand(this._boundable1, this._boundable2, !1, n, i), null;
          if (l) return this.expand(this._boundable2, this._boundable1, !0, n, i), null;
          throw new J("neither boundable is composite");
        } }, { key: "isLeaves", value: function() {
          return !(o.isComposite(this._boundable1) || o.isComposite(this._boundable2));
        } }, { key: "compareTo", value: function(n) {
          var i = n;
          return this._distance < i._distance ? -1 : this._distance > i._distance ? 1 : 0;
        } }, { key: "expand", value: function(n, i, a, l, g) {
          for (var m = n.getChildBoundables().iterator(); m.hasNext(); ) {
            var y = m.next(), k = null;
            (k = a ? new o(i, y, this._itemDistance) : new o(y, i, this._itemDistance)).getDistance() < g && l.add(k);
          }
        } }, { key: "getBoundable", value: function(n) {
          return n === 0 ? this._boundable1 : this._boundable2;
        } }, { key: "getDistance", value: function() {
          return this._distance;
        } }, { key: "distance", value: function() {
          return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
          var n = arguments[0], i = arguments[1], a = arguments[2];
          this._boundable1 = n, this._boundable2 = i, this._itemDistance = a, this._distance = this.distance();
        } }, { key: "area", value: function(n) {
          return n.getBounds().getArea();
        } }, { key: "isComposite", value: function(n) {
          return n instanceof $t;
        } }]);
      })(), mc = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "visitItem", value: function(o) {
        } }]);
      })(), Ei = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "queryInternal", value: function() {
          if (_e(arguments[2], mc) && arguments[0] instanceof Object && arguments[1] instanceof $t) for (var n = arguments[0], i = arguments[2], a = arguments[1].getChildBoundables(), l = 0; l < a.size(); l++) {
            var g = a.get(l);
            this.getIntersectsOp().intersects(g.getBounds(), n) && (g instanceof $t ? this.queryInternal(n, g, i) : g instanceof er ? i.visitItem(g.getItem()) : ae.shouldNeverReachHere());
          }
          else if (_e(arguments[2], bn) && arguments[0] instanceof Object && arguments[1] instanceof $t) for (var m = arguments[0], y = arguments[2], k = arguments[1].getChildBoundables(), L = 0; L < k.size(); L++) {
            var q = k.get(L);
            this.getIntersectsOp().intersects(q.getBounds(), m) && (q instanceof $t ? this.queryInternal(m, q, y) : q instanceof er ? y.add(q.getItem()) : ae.shouldNeverReachHere());
          }
        } }, { key: "getNodeCapacity", value: function() {
          return this._nodeCapacity;
        } }, { key: "lastNode", value: function(n) {
          return n.get(n.size() - 1);
        } }, { key: "size", value: function() {
          if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
          if (arguments.length === 1) {
            for (var n = 0, i = arguments[0].getChildBoundables().iterator(); i.hasNext(); ) {
              var a = i.next();
              a instanceof $t ? n += this.size(a) : a instanceof er && (n += 1);
            }
            return n;
          }
        } }, { key: "removeItem", value: function(n, i) {
          for (var a = null, l = n.getChildBoundables().iterator(); l.hasNext(); ) {
            var g = l.next();
            g instanceof er && g.getItem() === i && (a = g);
          }
          return a !== null && (n.getChildBoundables().remove(a), !0);
        } }, { key: "itemsTree", value: function() {
          if (arguments.length === 0) {
            this.build();
            var n = this.itemsTree(this._root);
            return n === null ? new de() : n;
          }
          if (arguments.length === 1) {
            for (var i = arguments[0], a = new de(), l = i.getChildBoundables().iterator(); l.hasNext(); ) {
              var g = l.next();
              if (g instanceof $t) {
                var m = this.itemsTree(g);
                m !== null && a.add(m);
              } else g instanceof er ? a.add(g.getItem()) : ae.shouldNeverReachHere();
            }
            return a.size() <= 0 ? null : a;
          }
        } }, { key: "insert", value: function(n, i) {
          ae.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new er(n, i));
        } }, { key: "boundablesAtLevel", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0], i = new de();
            return this.boundablesAtLevel(n, this._root, i), i;
          }
          if (arguments.length === 3) {
            var a = arguments[0], l = arguments[1], g = arguments[2];
            if (ae.isTrue(a > -2), l.getLevel() === a) return g.add(l), null;
            for (var m = l.getChildBoundables().iterator(); m.hasNext(); ) {
              var y = m.next();
              y instanceof $t ? this.boundablesAtLevel(a, y, g) : (ae.isTrue(y instanceof er), a === -1 && g.add(y));
            }
            return null;
          }
        } }, { key: "query", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.build();
            var i = new de();
            return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), n) && this.queryInternal(n, this._root, i), i;
          }
          if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            if (this.build(), this.isEmpty()) return null;
            this.getIntersectsOp().intersects(this._root.getBounds(), a) && this.queryInternal(a, this._root, l);
          }
        } }, { key: "build", value: function() {
          if (this._built) return null;
          this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
        } }, { key: "getRoot", value: function() {
          return this.build(), this._root;
        } }, { key: "remove", value: function() {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            return this.build(), !!this.getIntersectsOp().intersects(this._root.getBounds(), n) && this.remove(n, this._root, i);
          }
          if (arguments.length === 3) {
            var a = arguments[0], l = arguments[1], g = arguments[2], m = this.removeItem(l, g);
            if (m) return !0;
            for (var y = null, k = l.getChildBoundables().iterator(); k.hasNext(); ) {
              var L = k.next();
              if (this.getIntersectsOp().intersects(L.getBounds(), a) && L instanceof $t && (m = this.remove(a, L, g))) {
                y = L;
                break;
              }
            }
            return y !== null && y.getChildBoundables().isEmpty() && l.getChildBoundables().remove(y), m;
          }
        } }, { key: "createHigherLevels", value: function(n, i) {
          ae.isTrue(!n.isEmpty());
          var a = this.createParentBoundables(n, i + 1);
          return a.size() === 1 ? a.get(0) : this.createHigherLevels(a, i + 1);
        } }, { key: "depth", value: function() {
          if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
          if (arguments.length === 1) {
            for (var n = 0, i = arguments[0].getChildBoundables().iterator(); i.hasNext(); ) {
              var a = i.next();
              if (a instanceof $t) {
                var l = this.depth(a);
                l > n && (n = l);
              }
            }
            return n + 1;
          }
        } }, { key: "createParentBoundables", value: function(n, i) {
          ae.isTrue(!n.isEmpty());
          var a = new de();
          a.add(this.createNode(i));
          var l = new de(n);
          yi.sort(l, this.getComparator());
          for (var g = l.iterator(); g.hasNext(); ) {
            var m = g.next();
            this.lastNode(a).getChildBoundables().size() === this.getNodeCapacity() && a.add(this.createNode(i)), this.lastNode(a).addChildBoundable(m);
          }
          return a;
        } }, { key: "isEmpty", value: function() {
          return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
        } }, { key: "interfaces_", get: function() {
          return [w];
        } }], [{ key: "constructor_", value: function() {
          if (this._root = null, this._built = !1, this._itemBoundables = new de(), this._nodeCapacity = null, arguments.length === 0) o.constructor_.call(this, o.DEFAULT_NODE_CAPACITY);
          else if (arguments.length === 1) {
            var n = arguments[0];
            ae.isTrue(n > 1, "Node capacity must be greater than 1"), this._nodeCapacity = n;
          }
        } }, { key: "compareDoubles", value: function(n, i) {
          return n > i ? 1 : n < i ? -1 : 0;
        } }]);
      })();
      Ei.IntersectsOp = function() {
      }, Ei.DEFAULT_NODE_CAPACITY = 10;
      var Zp = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "distance", value: function(o, n) {
        } }]);
      })(), Rn = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "createParentBoundablesFromVerticalSlices", value: function(i, a) {
          ae.isTrue(i.length > 0);
          for (var l = new de(), g = 0; g < i.length; g++) l.addAll(this.createParentBoundablesFromVerticalSlice(i[g], a));
          return l;
        } }, { key: "nearestNeighbourK", value: function() {
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return this.nearestNeighbourK(i, Z.POSITIVE_INFINITY, a);
          }
          if (arguments.length === 3) {
            var l = arguments[0], g = arguments[2], m = arguments[1], y = new da();
            y.add(l);
            for (var k = new da(); !y.isEmpty() && m >= 0; ) {
              var L = y.poll(), q = L.getDistance();
              if (q >= m) break;
              L.isLeaves() ? k.size() < g ? k.add(L) : (k.peek().getDistance() > q && (k.poll(), k.add(L)), m = k.peek().getDistance()) : L.expandToQueue(y, m);
            }
            return n.getItems(k);
          }
        } }, { key: "createNode", value: function(i) {
          return new vc(i);
        } }, { key: "size", value: function() {
          return arguments.length === 0 ? S(n, "size", this, 1).call(this) : S(n, "size", this, 1).apply(this, arguments);
        } }, { key: "insert", value: function() {
          if (!(arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof Le)) return S(n, "insert", this, 1).apply(this, arguments);
          var i = arguments[0], a = arguments[1];
          if (i.isNull()) return null;
          S(n, "insert", this, 1).call(this, i, a);
        } }, { key: "getIntersectsOp", value: function() {
          return n.intersectsOp;
        } }, { key: "verticalSlices", value: function(i, a) {
          for (var l = Math.trunc(Math.ceil(i.size() / a)), g = new Array(a).fill(null), m = i.iterator(), y = 0; y < a; y++) {
            g[y] = new de();
            for (var k = 0; m.hasNext() && k < l; ) {
              var L = m.next();
              g[y].add(L), k++;
            }
          }
          return g;
        } }, { key: "query", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0];
            return S(n, "query", this, 1).call(this, i);
          }
          if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            S(n, "query", this, 1).call(this, a, l);
          }
        } }, { key: "getComparator", value: function() {
          return n.yComparator;
        } }, { key: "createParentBoundablesFromVerticalSlice", value: function(i, a) {
          return S(n, "createParentBoundables", this, 1).call(this, i, a);
        } }, { key: "remove", value: function() {
          if (arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof Le) {
            var i = arguments[0], a = arguments[1];
            return S(n, "remove", this, 1).call(this, i, a);
          }
          return S(n, "remove", this, 1).apply(this, arguments);
        } }, { key: "depth", value: function() {
          return arguments.length === 0 ? S(n, "depth", this, 1).call(this) : S(n, "depth", this, 1).apply(this, arguments);
        } }, { key: "createParentBoundables", value: function(i, a) {
          ae.isTrue(!i.isEmpty());
          var l = Math.trunc(Math.ceil(i.size() / this.getNodeCapacity())), g = new de(i);
          yi.sort(g, n.xComparator);
          var m = this.verticalSlices(g, Math.trunc(Math.ceil(Math.sqrt(l))));
          return this.createParentBoundablesFromVerticalSlices(m, a);
        } }, { key: "nearestNeighbour", value: function() {
          if (arguments.length === 1) {
            if (_e(arguments[0], Zp)) {
              var i = arguments[0];
              if (this.isEmpty()) return null;
              var a = new _i(this.getRoot(), this.getRoot(), i);
              return this.nearestNeighbour(a);
            }
            if (arguments[0] instanceof _i) {
              var l = arguments[0], g = Z.POSITIVE_INFINITY, m = null, y = new da();
              for (y.add(l); !y.isEmpty() && g > 0; ) {
                var k = y.poll(), L = k.getDistance();
                if (L >= g) break;
                k.isLeaves() ? (g = L, m = k) : k.expandToQueue(y, g);
              }
              return m === null ? null : [m.getBoundable(0).getItem(), m.getBoundable(1).getItem()];
            }
          } else {
            if (arguments.length === 2) {
              var q = arguments[0], V = arguments[1];
              if (this.isEmpty() || q.isEmpty()) return null;
              var ee = new _i(this.getRoot(), q.getRoot(), V);
              return this.nearestNeighbour(ee);
            }
            if (arguments.length === 3) {
              var ue = arguments[2], fe = new er(arguments[0], arguments[1]), me = new _i(this.getRoot(), fe, ue);
              return this.nearestNeighbour(me)[0];
            }
            if (arguments.length === 4) {
              var Ae = arguments[2], Te = arguments[3], Fe = new er(arguments[0], arguments[1]), ct = new _i(this.getRoot(), Fe, Ae);
              return this.nearestNeighbourK(ct, Te);
            }
          }
        } }, { key: "isWithinDistance", value: function() {
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1], l = Z.POSITIVE_INFINITY, g = new da();
            for (g.add(i); !g.isEmpty(); ) {
              var m = g.poll(), y = m.getDistance();
              if (y > a) return !1;
              if (m.maximumDistance() <= a) return !0;
              if (m.isLeaves()) {
                if ((l = y) <= a) return !0;
              } else m.expandToQueue(g, l);
            }
            return !1;
          }
          if (arguments.length === 3) {
            var k = arguments[0], L = arguments[1], q = arguments[2], V = new _i(this.getRoot(), k.getRoot(), L);
            return this.isWithinDistance(V, q);
          }
        } }, { key: "interfaces_", get: function() {
          return [Wp, w];
        } }], [{ key: "constructor_", value: function() {
          if (arguments.length === 0) n.constructor_.call(this, n.DEFAULT_NODE_CAPACITY);
          else if (arguments.length === 1) {
            var i = arguments[0];
            Ei.constructor_.call(this, i);
          }
        } }, { key: "centreX", value: function(i) {
          return n.avg(i.getMinX(), i.getMaxX());
        } }, { key: "avg", value: function(i, a) {
          return (i + a) / 2;
        } }, { key: "getItems", value: function(i) {
          for (var a = new Array(i.size()).fill(null), l = 0; !i.isEmpty(); ) {
            var g = i.poll();
            a[l] = g.getBoundable(0).getItem(), l++;
          }
          return a;
        } }, { key: "centreY", value: function(i) {
          return n.avg(i.getMinY(), i.getMaxY());
        } }]);
      })(Ei), vc = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "computeBounds", value: function() {
          for (var i = null, a = this.getChildBoundables().iterator(); a.hasNext(); ) {
            var l = a.next();
            i === null ? i = new Le(l.getBounds()) : i.expandToInclude(l.getBounds());
          }
          return i;
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0];
          $t.constructor_.call(this, i);
        } }]);
      })($t);
      Rn.STRtreeNode = vc, Rn.xComparator = new ((function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "interfaces_", get: function() {
          return [re];
        } }, { key: "compare", value: function(o, n) {
          return Ei.compareDoubles(Rn.centreX(o.getBounds()), Rn.centreX(n.getBounds()));
        } }]);
      })())(), Rn.yComparator = new ((function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "interfaces_", get: function() {
          return [re];
        } }, { key: "compare", value: function(o, n) {
          return Ei.compareDoubles(Rn.centreY(o.getBounds()), Rn.centreY(n.getBounds()));
        } }]);
      })())(), Rn.intersectsOp = new ((function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "interfaces_", get: function() {
          return [IntersectsOp];
        } }, { key: "intersects", value: function(o, n) {
          return o.intersects(n);
        } }]);
      })())(), Rn.DEFAULT_NODE_CAPACITY = 10;
      var Kp = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "relativeSign", value: function(n, i) {
          return n < i ? -1 : n > i ? 1 : 0;
        } }, { key: "compare", value: function(n, i, a) {
          if (i.equals2D(a)) return 0;
          var l = o.relativeSign(i.x, a.x), g = o.relativeSign(i.y, a.y);
          switch (n) {
            case 0:
              return o.compareValue(l, g);
            case 1:
              return o.compareValue(g, l);
            case 2:
              return o.compareValue(g, -l);
            case 3:
              return o.compareValue(-l, g);
            case 4:
              return o.compareValue(-l, -g);
            case 5:
              return o.compareValue(-g, -l);
            case 6:
              return o.compareValue(-g, l);
            case 7:
              return o.compareValue(l, -g);
          }
          return ae.shouldNeverReachHere("invalid octant value"), 0;
        } }, { key: "compareValue", value: function(n, i) {
          return n < 0 ? -1 : n > 0 ? 1 : i < 0 ? -1 : i > 0 ? 1 : 0;
        } }]);
      })(), Qp = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getCoordinate", value: function() {
          return this.coord;
        } }, { key: "print", value: function(o) {
          o.print(this.coord), o.print(" seg # = " + this.segmentIndex);
        } }, { key: "compareTo", value: function(o) {
          var n = o;
          return this.segmentIndex < n.segmentIndex ? -1 : this.segmentIndex > n.segmentIndex ? 1 : this.coord.equals2D(n.coord) ? 0 : this._isInterior ? n._isInterior ? Kp.compare(this._segmentOctant, this.coord, n.coord) : 1 : -1;
        } }, { key: "isEndPoint", value: function(o) {
          return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === o;
        } }, { key: "toString", value: function() {
          return this.segmentIndex + ":" + this.coord.toString();
        } }, { key: "isInterior", value: function() {
          return this._isInterior;
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
          var o = arguments[0], n = arguments[1], i = arguments[2], a = arguments[3];
          this._segString = o, this.coord = new $(n), this.segmentIndex = i, this._segmentOctant = a, this._isInterior = !n.equals2D(o.getCoordinate(i));
        } }]);
      })(), em = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "hasNext", value: function() {
        } }, { key: "next", value: function() {
        } }, { key: "remove", value: function() {
        } }]);
      })(), tm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getSplitCoordinates", value: function() {
          var o = new B();
          this.addEndpoints();
          for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
            var a = n.next();
            this.addEdgeCoordinates(i, a, o), i = a;
          }
          return o.toCoordinateArray();
        } }, { key: "addCollapsedNodes", value: function() {
          var o = new de();
          this.findCollapsesFromInsertedNodes(o), this.findCollapsesFromExistingVertices(o);
          for (var n = o.iterator(); n.hasNext(); ) {
            var i = n.next().intValue();
            this.add(this._edge.getCoordinate(i), i);
          }
        } }, { key: "createSplitEdgePts", value: function(o, n) {
          var i = n.segmentIndex - o.segmentIndex + 2;
          if (i === 2) return [new $(o.coord), new $(n.coord)];
          var a = this._edge.getCoordinate(n.segmentIndex), l = n.isInterior() || !n.coord.equals2D(a);
          l || i--;
          var g = new Array(i).fill(null), m = 0;
          g[m++] = new $(o.coord);
          for (var y = o.segmentIndex + 1; y <= n.segmentIndex; y++) g[m++] = this._edge.getCoordinate(y);
          return l && (g[m] = new $(n.coord)), g;
        } }, { key: "print", value: function(o) {
          o.println("Intersections:");
          for (var n = this.iterator(); n.hasNext(); )
            n.next().print(o);
        } }, { key: "findCollapsesFromExistingVertices", value: function(o) {
          for (var n = 0; n < this._edge.size() - 2; n++) {
            var i = this._edge.getCoordinate(n);
            this._edge.getCoordinate(n + 1);
            var a = this._edge.getCoordinate(n + 2);
            i.equals2D(a) && o.add(ln.valueOf(n + 1));
          }
        } }, { key: "addEdgeCoordinates", value: function(o, n, i) {
          var a = this.createSplitEdgePts(o, n);
          i.add(a, !1);
        } }, { key: "iterator", value: function() {
          return this._nodeMap.values().iterator();
        } }, { key: "addSplitEdges", value: function(o) {
          this.addEndpoints(), this.addCollapsedNodes();
          for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
            var a = n.next(), l = this.createSplitEdge(i, a);
            o.add(l), i = a;
          }
        } }, { key: "findCollapseIndex", value: function(o, n, i) {
          if (!o.coord.equals2D(n.coord)) return !1;
          var a = n.segmentIndex - o.segmentIndex;
          return n.isInterior() || a--, a === 1 && (i[0] = o.segmentIndex + 1, !0);
        } }, { key: "findCollapsesFromInsertedNodes", value: function(o) {
          for (var n = new Array(1).fill(null), i = this.iterator(), a = i.next(); i.hasNext(); ) {
            var l = i.next();
            this.findCollapseIndex(a, l, n) && o.add(ln.valueOf(n[0])), a = l;
          }
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "addEndpoints", value: function() {
          var o = this._edge.size() - 1;
          this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(o), o);
        } }, { key: "createSplitEdge", value: function(o, n) {
          var i = this.createSplitEdgePts(o, n);
          return new qr(i, this._edge.getData());
        } }, { key: "add", value: function(o, n) {
          var i = new Qp(this._edge, o, n, this._edge.getSegmentOctant(n)), a = this._nodeMap.get(i);
          return a !== null ? (ae.isTrue(a.coord.equals2D(o), "Found equal nodes with different coordinates"), a) : (this._nodeMap.put(i, i), i);
        } }, { key: "checkSplitEdgesCorrectness", value: function(o) {
          var n = this._edge.getCoordinates(), i = o.get(0).getCoordinate(0);
          if (!i.equals2D(n[0])) throw new pe("bad split edge start point at " + i);
          var a = o.get(o.size() - 1).getCoordinates(), l = a[a.length - 1];
          if (!l.equals2D(n[n.length - 1])) throw new pe("bad split edge end point at " + l);
        } }], [{ key: "constructor_", value: function() {
          this._nodeMap = new ls(), this._edge = null;
          var o = arguments[0];
          this._edge = o;
        } }]);
      })(), nm = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "octant", value: function() {
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var n = arguments[0], i = arguments[1];
            if (n === 0 && i === 0) throw new J("Cannot compute the octant for point ( " + n + ", " + i + " )");
            var a = Math.abs(n), l = Math.abs(i);
            return n >= 0 ? i >= 0 ? a >= l ? 0 : 1 : a >= l ? 7 : 6 : i >= 0 ? a >= l ? 3 : 2 : a >= l ? 4 : 5;
          }
          if (arguments[0] instanceof $ && arguments[1] instanceof $) {
            var g = arguments[0], m = arguments[1], y = m.x - g.x, k = m.y - g.y;
            if (y === 0 && k === 0) throw new J("Cannot compute the octant for two identical points " + g);
            return o.octant(y, k);
          }
        } }]);
      })(), rm = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "getCoordinates", value: function() {
        } }, { key: "size", value: function() {
        } }, { key: "getCoordinate", value: function(o) {
        } }, { key: "isClosed", value: function() {
        } }, { key: "setData", value: function(o) {
        } }, { key: "getData", value: function() {
        } }]);
      })(), im = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "addIntersection", value: function(o, n) {
        } }, { key: "interfaces_", get: function() {
          return [rm];
        } }]);
      })(), qr = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getCoordinates", value: function() {
          return this._pts;
        } }, { key: "size", value: function() {
          return this._pts.length;
        } }, { key: "getCoordinate", value: function(n) {
          return this._pts[n];
        } }, { key: "isClosed", value: function() {
          return this._pts[0].equals(this._pts[this._pts.length - 1]);
        } }, { key: "getSegmentOctant", value: function(n) {
          return n === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(n), this.getCoordinate(n + 1));
        } }, { key: "setData", value: function(n) {
          this._data = n;
        } }, { key: "safeOctant", value: function(n, i) {
          return n.equals2D(i) ? 0 : nm.octant(n, i);
        } }, { key: "getData", value: function() {
          return this._data;
        } }, { key: "addIntersection", value: function() {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            this.addIntersectionNode(n, i);
          } else if (arguments.length === 4) {
            var a = arguments[1], l = arguments[3], g = new $(arguments[0].getIntersection(l));
            this.addIntersection(g, a);
          }
        } }, { key: "toString", value: function() {
          return Ro.toLineString(new ze(this._pts));
        } }, { key: "getNodeList", value: function() {
          return this._nodeList;
        } }, { key: "addIntersectionNode", value: function(n, i) {
          var a = i, l = a + 1;
          if (l < this._pts.length) {
            var g = this._pts[l];
            n.equals2D(g) && (a = l);
          }
          return this._nodeList.add(n, a);
        } }, { key: "addIntersections", value: function(n, i, a) {
          for (var l = 0; l < n.getIntersectionNum(); l++) this.addIntersection(n, i, a, l);
        } }, { key: "interfaces_", get: function() {
          return [im];
        } }], [{ key: "constructor_", value: function() {
          this._nodeList = new tm(this), this._pts = null, this._data = null;
          var n = arguments[0], i = arguments[1];
          this._pts = n, this._data = i;
        } }, { key: "getNodedSubstrings", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0], i = new de();
            return o.getNodedSubstrings(n, i), i;
          }
          if (arguments.length === 2) for (var a = arguments[1], l = arguments[0].iterator(); l.hasNext(); )
            l.next().getNodeList().addSplitEdges(a);
        } }]);
      })(), Gt = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "minX", value: function() {
          return Math.min(this.p0.x, this.p1.x);
        } }, { key: "orientationIndex", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0], i = ye.index(this.p0, this.p1, n.p0), a = ye.index(this.p0, this.p1, n.p1);
            return i >= 0 && a >= 0 || i <= 0 && a <= 0 ? Math.max(i, a) : 0;
          }
          if (arguments[0] instanceof $) {
            var l = arguments[0];
            return ye.index(this.p0, this.p1, l);
          }
        } }, { key: "toGeometry", value: function(n) {
          return n.createLineString([this.p0, this.p1]);
        } }, { key: "isVertical", value: function() {
          return this.p0.x === this.p1.x;
        } }, { key: "equals", value: function(n) {
          if (!(n instanceof o)) return !1;
          var i = n;
          return this.p0.equals(i.p0) && this.p1.equals(i.p1);
        } }, { key: "intersection", value: function(n) {
          var i = new zr();
          return i.computeIntersection(this.p0, this.p1, n.p0, n.p1), i.hasIntersection() ? i.getIntersection(0) : null;
        } }, { key: "project", value: function() {
          if (arguments[0] instanceof $) {
            var n = arguments[0];
            if (n.equals(this.p0) || n.equals(this.p1)) return new $(n);
            var i = this.projectionFactor(n), a = new $();
            return a.x = this.p0.x + i * (this.p1.x - this.p0.x), a.y = this.p0.y + i * (this.p1.y - this.p0.y), a;
          }
          if (arguments[0] instanceof o) {
            var l = arguments[0], g = this.projectionFactor(l.p0), m = this.projectionFactor(l.p1);
            if (g >= 1 && m >= 1 || g <= 0 && m <= 0) return null;
            var y = this.project(l.p0);
            g < 0 && (y = this.p0), g > 1 && (y = this.p1);
            var k = this.project(l.p1);
            return m < 0 && (k = this.p0), m > 1 && (k = this.p1), new o(y, k);
          }
        } }, { key: "normalize", value: function() {
          this.p1.compareTo(this.p0) < 0 && this.reverse();
        } }, { key: "angle", value: function() {
          return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
        } }, { key: "getCoordinate", value: function(n) {
          return n === 0 ? this.p0 : this.p1;
        } }, { key: "distancePerpendicular", value: function(n) {
          return Et.pointToLinePerpendicular(n, this.p0, this.p1);
        } }, { key: "minY", value: function() {
          return Math.min(this.p0.y, this.p1.y);
        } }, { key: "midPoint", value: function() {
          return o.midPoint(this.p0, this.p1);
        } }, { key: "projectionFactor", value: function(n) {
          if (n.equals(this.p0)) return 0;
          if (n.equals(this.p1)) return 1;
          var i = this.p1.x - this.p0.x, a = this.p1.y - this.p0.y, l = i * i + a * a;
          return l <= 0 ? Z.NaN : ((n.x - this.p0.x) * i + (n.y - this.p0.y) * a) / l;
        } }, { key: "closestPoints", value: function(n) {
          var i = this.intersection(n);
          if (i !== null) return [i, i];
          var a = new Array(2).fill(null), l = Z.MAX_VALUE, g = null, m = this.closestPoint(n.p0);
          l = m.distance(n.p0), a[0] = m, a[1] = n.p0;
          var y = this.closestPoint(n.p1);
          (g = y.distance(n.p1)) < l && (l = g, a[0] = y, a[1] = n.p1);
          var k = n.closestPoint(this.p0);
          (g = k.distance(this.p0)) < l && (l = g, a[0] = this.p0, a[1] = k);
          var L = n.closestPoint(this.p1);
          return (g = L.distance(this.p1)) < l && (l = g, a[0] = this.p1, a[1] = L), a;
        } }, { key: "closestPoint", value: function(n) {
          var i = this.projectionFactor(n);
          return i > 0 && i < 1 ? this.project(n) : this.p0.distance(n) < this.p1.distance(n) ? this.p0 : this.p1;
        } }, { key: "maxX", value: function() {
          return Math.max(this.p0.x, this.p1.x);
        } }, { key: "getLength", value: function() {
          return this.p0.distance(this.p1);
        } }, { key: "compareTo", value: function(n) {
          var i = n, a = this.p0.compareTo(i.p0);
          return a !== 0 ? a : this.p1.compareTo(i.p1);
        } }, { key: "reverse", value: function() {
          var n = this.p0;
          this.p0 = this.p1, this.p1 = n;
        } }, { key: "equalsTopo", value: function(n) {
          return this.p0.equals(n.p0) && this.p1.equals(n.p1) || this.p0.equals(n.p1) && this.p1.equals(n.p0);
        } }, { key: "lineIntersection", value: function(n) {
          return Gr.intersection(this.p0, this.p1, n.p0, n.p1);
        } }, { key: "maxY", value: function() {
          return Math.max(this.p0.y, this.p1.y);
        } }, { key: "pointAlongOffset", value: function(n, i) {
          var a = this.p0.x + n * (this.p1.x - this.p0.x), l = this.p0.y + n * (this.p1.y - this.p0.y), g = this.p1.x - this.p0.x, m = this.p1.y - this.p0.y, y = Math.sqrt(g * g + m * m), k = 0, L = 0;
          if (i !== 0) {
            if (y <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
            k = i * g / y, L = i * m / y;
          }
          return new $(a - L, l + k);
        } }, { key: "setCoordinates", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            this.setCoordinates(n.p0, n.p1);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.p0.x = i.x, this.p0.y = i.y, this.p1.x = a.x, this.p1.y = a.y;
          }
        } }, { key: "segmentFraction", value: function(n) {
          var i = this.projectionFactor(n);
          return i < 0 ? i = 0 : (i > 1 || Z.isNaN(i)) && (i = 1), i;
        } }, { key: "toString", value: function() {
          return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
        } }, { key: "isHorizontal", value: function() {
          return this.p0.y === this.p1.y;
        } }, { key: "reflect", value: function(n) {
          var i = this.p1.getY() - this.p0.getY(), a = this.p0.getX() - this.p1.getX(), l = this.p0.getY() * (this.p1.getX() - this.p0.getX()) - this.p0.getX() * (this.p1.getY() - this.p0.getY()), g = i * i + a * a, m = i * i - a * a, y = n.getX(), k = n.getY();
          return new $((-m * y - 2 * i * a * k - 2 * i * l) / g, (m * k - 2 * i * a * y - 2 * a * l) / g);
        } }, { key: "distance", value: function() {
          if (arguments[0] instanceof o) {
            var n = arguments[0];
            return Et.segmentToSegment(this.p0, this.p1, n.p0, n.p1);
          }
          if (arguments[0] instanceof $) {
            var i = arguments[0];
            return Et.pointToSegment(i, this.p0, this.p1);
          }
        } }, { key: "pointAlong", value: function(n) {
          var i = new $();
          return i.x = this.p0.x + n * (this.p1.x - this.p0.x), i.y = this.p0.y + n * (this.p1.y - this.p0.y), i;
        } }, { key: "hashCode", value: function() {
          var n = Z.doubleToLongBits(this.p0.x);
          n ^= 31 * Z.doubleToLongBits(this.p0.y);
          var i = Math.trunc(n) ^ Math.trunc(n >> 32), a = Z.doubleToLongBits(this.p1.x);
          return a ^= 31 * Z.doubleToLongBits(this.p1.y), i ^ (Math.trunc(a) ^ Math.trunc(a >> 32));
        } }, { key: "interfaces_", get: function() {
          return [W, w];
        } }], [{ key: "constructor_", value: function() {
          if (this.p0 = null, this.p1 = null, arguments.length === 0) o.constructor_.call(this, new $(), new $());
          else if (arguments.length === 1) {
            var n = arguments[0];
            o.constructor_.call(this, n.p0, n.p1);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.p0 = i, this.p1 = a;
          } else if (arguments.length === 4) {
            var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3];
            o.constructor_.call(this, new $(l, g), new $(m, y));
          }
        } }, { key: "midPoint", value: function(n, i) {
          return new $((n.x + i.x) / 2, (n.y + i.y) / 2);
        } }]);
      })(), sm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "overlap", value: function() {
          if (arguments.length !== 2) {
            if (arguments.length === 4) {
              var o = arguments[1], n = arguments[2], i = arguments[3];
              arguments[0].getLineSegment(o, this._overlapSeg1), n.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
            }
          }
        } }], [{ key: "constructor_", value: function() {
          this._overlapSeg1 = new Gt(), this._overlapSeg2 = new Gt();
        } }]);
      })(), yc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getLineSegment", value: function(o, n) {
          n.p0 = this._pts[o], n.p1 = this._pts[o + 1];
        } }, { key: "computeSelect", value: function(o, n, i, a) {
          var l = this._pts[n], g = this._pts[i];
          if (i - n == 1) return a.select(this, n), null;
          if (!o.intersects(l, g)) return null;
          var m = Math.trunc((n + i) / 2);
          n < m && this.computeSelect(o, n, m, a), m < i && this.computeSelect(o, m, i, a);
        } }, { key: "getCoordinates", value: function() {
          for (var o = new Array(this._end - this._start + 1).fill(null), n = 0, i = this._start; i <= this._end; i++) o[n++] = this._pts[i];
          return o;
        } }, { key: "computeOverlaps", value: function() {
          if (arguments.length === 2) {
            var o = arguments[0], n = arguments[1];
            this.computeOverlaps(this._start, this._end, o, o._start, o._end, n);
          } else if (arguments.length === 6) {
            var i = arguments[0], a = arguments[1], l = arguments[2], g = arguments[3], m = arguments[4], y = arguments[5];
            if (a - i == 1 && m - g == 1) return y.overlap(this, i, l, g), null;
            if (!this.overlaps(i, a, l, g, m)) return null;
            var k = Math.trunc((i + a) / 2), L = Math.trunc((g + m) / 2);
            i < k && (g < L && this.computeOverlaps(i, k, l, g, L, y), L < m && this.computeOverlaps(i, k, l, L, m, y)), k < a && (g < L && this.computeOverlaps(k, a, l, g, L, y), L < m && this.computeOverlaps(k, a, l, L, m, y));
          }
        } }, { key: "setId", value: function(o) {
          this._id = o;
        } }, { key: "select", value: function(o, n) {
          this.computeSelect(o, this._start, this._end, n);
        } }, { key: "getEnvelope", value: function() {
          if (this._env === null) {
            var o = this._pts[this._start], n = this._pts[this._end];
            this._env = new Le(o, n);
          }
          return this._env;
        } }, { key: "overlaps", value: function(o, n, i, a, l) {
          return Le.intersects(this._pts[o], this._pts[n], i._pts[a], i._pts[l]);
        } }, { key: "getEndIndex", value: function() {
          return this._end;
        } }, { key: "getStartIndex", value: function() {
          return this._start;
        } }, { key: "getContext", value: function() {
          return this._context;
        } }, { key: "getId", value: function() {
          return this._id;
        } }], [{ key: "constructor_", value: function() {
          this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
          var o = arguments[0], n = arguments[1], i = arguments[2], a = arguments[3];
          this._pts = o, this._start = n, this._end = i, this._context = a;
        } }]);
      })(), am = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "findChainEnd", value: function(n, i) {
          for (var a = i; a < n.length - 1 && n[a].equals2D(n[a + 1]); ) a++;
          if (a >= n.length - 1) return n.length - 1;
          for (var l = xt.quadrant(n[a], n[a + 1]), g = i + 1; g < n.length && !(!n[g - 1].equals2D(n[g]) && xt.quadrant(n[g - 1], n[g]) !== l); )
            g++;
          return g - 1;
        } }, { key: "getChains", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return o.getChains(n, null);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1], l = new de(), g = 0;
            do {
              var m = o.findChainEnd(i, g), y = new yc(i, g, m, a);
              l.add(y), g = m;
            } while (g < i.length - 1);
            return l;
          }
        } }]);
      })(), Bo = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "computeNodes", value: function(o) {
        } }, { key: "getNodedSubstrings", value: function() {
        } }]);
      })(), _c = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "setSegmentIntersector", value: function(o) {
          this._segInt = o;
        } }, { key: "interfaces_", get: function() {
          return [Bo];
        } }], [{ key: "constructor_", value: function() {
          if (this._segInt = null, arguments.length !== 0) {
            if (arguments.length === 1) {
              var o = arguments[0];
              this.setSegmentIntersector(o);
            }
          }
        } }]);
      })(), Uo = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "getMonotoneChains", value: function() {
          return this._monoChains;
        } }, { key: "getNodedSubstrings", value: function() {
          return qr.getNodedSubstrings(this._nodedSegStrings);
        } }, { key: "getIndex", value: function() {
          return this._index;
        } }, { key: "add", value: function(i) {
          for (var a = am.getChains(i.getCoordinates(), i).iterator(); a.hasNext(); ) {
            var l = a.next();
            l.setId(this._idCounter++), this._index.insert(l.getEnvelope(), l), this._monoChains.add(l);
          }
        } }, { key: "computeNodes", value: function(i) {
          this._nodedSegStrings = i;
          for (var a = i.iterator(); a.hasNext(); ) this.add(a.next());
          this.intersectChains();
        } }, { key: "intersectChains", value: function() {
          for (var i = new Ec(this._segInt), a = this._monoChains.iterator(); a.hasNext(); ) for (var l = a.next(), g = this._index.query(l.getEnvelope()).iterator(); g.hasNext(); ) {
            var m = g.next();
            if (m.getId() > l.getId() && (l.computeOverlaps(m, i), this._nOverlaps++), this._segInt.isDone()) return null;
          }
        } }], [{ key: "constructor_", value: function() {
          if (this._monoChains = new de(), this._index = new Rn(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, arguments.length !== 0) {
            if (arguments.length === 1) {
              var i = arguments[0];
              _c.constructor_.call(this, i);
            }
          }
        } }]);
      })(_c), Ec = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "overlap", value: function() {
          if (arguments.length !== 4) return S(n, "overlap", this, 1).apply(this, arguments);
          var i = arguments[1], a = arguments[2], l = arguments[3], g = arguments[0].getContext(), m = a.getContext();
          this._si.processIntersections(g, i, m, l);
        } }], [{ key: "constructor_", value: function() {
          this._si = null;
          var i = arguments[0];
          this._si = i;
        } }]);
      })(sm);
      Uo.SegmentOverlapAction = Ec;
      var cn = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isDeletable", value: function(n, i, a, l) {
          var g = this._inputLine[n], m = this._inputLine[i], y = this._inputLine[a];
          return !!this.isConcave(g, m, y) && !!this.isShallow(g, m, y, l) && this.isShallowSampled(g, m, n, a, l);
        } }, { key: "deleteShallowConcavities", value: function() {
          for (var n = 1, i = this.findNextNonDeletedIndex(n), a = this.findNextNonDeletedIndex(i), l = !1; a < this._inputLine.length; ) {
            var g = !1;
            this.isDeletable(n, i, a, this._distanceTol) && (this._isDeleted[i] = o.DELETE, g = !0, l = !0), n = g ? a : i, i = this.findNextNonDeletedIndex(n), a = this.findNextNonDeletedIndex(i);
          }
          return l;
        } }, { key: "isShallowConcavity", value: function(n, i, a, l) {
          return ye.index(n, i, a) === this._angleOrientation && Et.pointToSegment(i, n, a) < l;
        } }, { key: "isShallowSampled", value: function(n, i, a, l, g) {
          var m = Math.trunc((l - a) / o.NUM_PTS_TO_CHECK);
          m <= 0 && (m = 1);
          for (var y = a; y < l; y += m) if (!this.isShallow(n, i, this._inputLine[y], g)) return !1;
          return !0;
        } }, { key: "isConcave", value: function(n, i, a) {
          var l = ye.index(n, i, a) === this._angleOrientation;
          return l;
        } }, { key: "simplify", value: function(n) {
          this._distanceTol = Math.abs(n), n < 0 && (this._angleOrientation = ye.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
          var i = !1;
          do
            i = this.deleteShallowConcavities();
          while (i);
          return this.collapseLine();
        } }, { key: "findNextNonDeletedIndex", value: function(n) {
          for (var i = n + 1; i < this._inputLine.length && this._isDeleted[i] === o.DELETE; ) i++;
          return i;
        } }, { key: "isShallow", value: function(n, i, a, l) {
          return Et.pointToSegment(i, n, a) < l;
        } }, { key: "collapseLine", value: function() {
          for (var n = new B(), i = 0; i < this._inputLine.length; i++) this._isDeleted[i] !== o.DELETE && n.add(this._inputLine[i]);
          return n.toCoordinateArray();
        } }], [{ key: "constructor_", value: function() {
          this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = ye.COUNTERCLOCKWISE;
          var n = arguments[0];
          this._inputLine = n;
        } }, { key: "simplify", value: function(n, i) {
          return new o(n).simplify(i);
        } }]);
      })();
      cn.INIT = 0, cn.DELETE = 1, cn.KEEP = 1, cn.NUM_PTS_TO_CHECK = 10;
      var xc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getCoordinates", value: function() {
          return this._ptList.toArray(o.COORDINATE_ARRAY_TYPE);
        } }, { key: "setPrecisionModel", value: function(n) {
          this._precisionModel = n;
        } }, { key: "addPt", value: function(n) {
          var i = new $(n);
          if (this._precisionModel.makePrecise(i), this.isRedundant(i)) return null;
          this._ptList.add(i);
        } }, { key: "reverse", value: function() {
        } }, { key: "addPts", value: function(n, i) {
          if (i) for (var a = 0; a < n.length; a++) this.addPt(n[a]);
          else for (var l = n.length - 1; l >= 0; l--) this.addPt(n[l]);
        } }, { key: "isRedundant", value: function(n) {
          if (this._ptList.size() < 1) return !1;
          var i = this._ptList.get(this._ptList.size() - 1);
          return n.distance(i) < this._minimimVertexDistance;
        } }, { key: "toString", value: function() {
          return new mi().createLineString(this.getCoordinates()).toString();
        } }, { key: "closeRing", value: function() {
          if (this._ptList.size() < 1) return null;
          var n = new $(this._ptList.get(0)), i = this._ptList.get(this._ptList.size() - 1);
          if (n.equals(i)) return null;
          this._ptList.add(n);
        } }, { key: "setMinimumVertexDistance", value: function(n) {
          this._minimimVertexDistance = n;
        } }], [{ key: "constructor_", value: function() {
          this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new de();
        } }]);
      })();
      xc.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);
      var Bt = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "toDegrees", value: function(n) {
          return 180 * n / Math.PI;
        } }, { key: "normalize", value: function(n) {
          for (; n > Math.PI; ) n -= o.PI_TIMES_2;
          for (; n <= -Math.PI; ) n += o.PI_TIMES_2;
          return n;
        } }, { key: "angle", value: function() {
          if (arguments.length === 1) {
            var n = arguments[0];
            return Math.atan2(n.y, n.x);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1], l = a.x - i.x, g = a.y - i.y;
            return Math.atan2(g, l);
          }
        } }, { key: "isAcute", value: function(n, i, a) {
          var l = n.x - i.x, g = n.y - i.y;
          return l * (a.x - i.x) + g * (a.y - i.y) > 0;
        } }, { key: "isObtuse", value: function(n, i, a) {
          var l = n.x - i.x, g = n.y - i.y;
          return l * (a.x - i.x) + g * (a.y - i.y) < 0;
        } }, { key: "interiorAngle", value: function(n, i, a) {
          var l = o.angle(i, n), g = o.angle(i, a);
          return Math.abs(g - l);
        } }, { key: "normalizePositive", value: function(n) {
          if (n < 0) {
            for (; n < 0; ) n += o.PI_TIMES_2;
            n >= o.PI_TIMES_2 && (n = 0);
          } else {
            for (; n >= o.PI_TIMES_2; ) n -= o.PI_TIMES_2;
            n < 0 && (n = 0);
          }
          return n;
        } }, { key: "angleBetween", value: function(n, i, a) {
          var l = o.angle(i, n), g = o.angle(i, a);
          return o.diff(l, g);
        } }, { key: "diff", value: function(n, i) {
          var a = null;
          return (a = n < i ? i - n : n - i) > Math.PI && (a = 2 * Math.PI - a), a;
        } }, { key: "toRadians", value: function(n) {
          return n * Math.PI / 180;
        } }, { key: "getTurn", value: function(n, i) {
          var a = Math.sin(i - n);
          return a > 0 ? o.COUNTERCLOCKWISE : a < 0 ? o.CLOCKWISE : o.NONE;
        } }, { key: "angleBetweenOriented", value: function(n, i, a) {
          var l = o.angle(i, n), g = o.angle(i, a) - l;
          return g <= -Math.PI ? g + o.PI_TIMES_2 : g > Math.PI ? g - o.PI_TIMES_2 : g;
        } }]);
      })();
      Bt.PI_TIMES_2 = 2 * Math.PI, Bt.PI_OVER_2 = Math.PI / 2, Bt.PI_OVER_4 = Math.PI / 4, Bt.COUNTERCLOCKWISE = ye.COUNTERCLOCKWISE, Bt.CLOCKWISE = ye.CLOCKWISE, Bt.NONE = ye.COLLINEAR;
      var cs = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "addNextSegment", value: function(n, i) {
          if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = n, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
          var a = ye.index(this._s0, this._s1, this._s2), l = a === ye.CLOCKWISE && this._side === ne.LEFT || a === ye.COUNTERCLOCKWISE && this._side === ne.RIGHT;
          a === 0 ? this.addCollinear(i) : l ? this.addOutsideTurn(a, i) : this.addInsideTurn(a, i);
        } }, { key: "addLineEndCap", value: function(n, i) {
          var a = new Gt(n, i), l = new Gt();
          this.computeOffsetSegment(a, ne.LEFT, this._distance, l);
          var g = new Gt();
          this.computeOffsetSegment(a, ne.RIGHT, this._distance, g);
          var m = i.x - n.x, y = i.y - n.y, k = Math.atan2(y, m);
          switch (this._bufParams.getEndCapStyle()) {
            case H.CAP_ROUND:
              this._segList.addPt(l.p1), this.addDirectedFillet(i, k + Math.PI / 2, k - Math.PI / 2, ye.CLOCKWISE, this._distance), this._segList.addPt(g.p1);
              break;
            case H.CAP_FLAT:
              this._segList.addPt(l.p1), this._segList.addPt(g.p1);
              break;
            case H.CAP_SQUARE:
              var L = new $();
              L.x = Math.abs(this._distance) * Math.cos(k), L.y = Math.abs(this._distance) * Math.sin(k);
              var q = new $(l.p1.x + L.x, l.p1.y + L.y), V = new $(g.p1.x + L.x, g.p1.y + L.y);
              this._segList.addPt(q), this._segList.addPt(V);
          }
        } }, { key: "getCoordinates", value: function() {
          return this._segList.getCoordinates();
        } }, { key: "addMitreJoin", value: function(n, i, a, l) {
          var g = Gr.intersection(i.p0, i.p1, a.p0, a.p1);
          if (g !== null && (l <= 0 ? 1 : g.distance(n) / Math.abs(l)) <= this._bufParams.getMitreLimit()) return this._segList.addPt(g), null;
          this.addLimitedMitreJoin(i, a, l, this._bufParams.getMitreLimit());
        } }, { key: "addOutsideTurn", value: function(n, i) {
          if (this._offset0.p1.distance(this._offset1.p0) < this._distance * o.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
          this._bufParams.getJoinStyle() === H.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === H.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (i && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, n, this._distance), this._segList.addPt(this._offset1.p0));
        } }, { key: "createSquare", value: function(n) {
          this._segList.addPt(new $(n.x + this._distance, n.y + this._distance)), this._segList.addPt(new $(n.x + this._distance, n.y - this._distance)), this._segList.addPt(new $(n.x - this._distance, n.y - this._distance)), this._segList.addPt(new $(n.x - this._distance, n.y + this._distance)), this._segList.closeRing();
        } }, { key: "addSegments", value: function(n, i) {
          this._segList.addPts(n, i);
        } }, { key: "addFirstSegment", value: function() {
          this._segList.addPt(this._offset1.p0);
        } }, { key: "addCornerFillet", value: function(n, i, a, l, g) {
          var m = i.x - n.x, y = i.y - n.y, k = Math.atan2(y, m), L = a.x - n.x, q = a.y - n.y, V = Math.atan2(q, L);
          l === ye.CLOCKWISE ? k <= V && (k += 2 * Math.PI) : k >= V && (k -= 2 * Math.PI), this._segList.addPt(i), this.addDirectedFillet(n, k, V, l, g), this._segList.addPt(a);
        } }, { key: "addLastSegment", value: function() {
          this._segList.addPt(this._offset1.p1);
        } }, { key: "initSideSegments", value: function(n, i, a) {
          this._s1 = n, this._s2 = i, this._side = a, this._seg1.setCoordinates(n, i), this.computeOffsetSegment(this._seg1, a, this._distance, this._offset1);
        } }, { key: "addLimitedMitreJoin", value: function(n, i, a, l) {
          var g = this._seg0.p1, m = Bt.angle(g, this._seg0.p0), y = Bt.angleBetweenOriented(this._seg0.p0, g, this._seg1.p1) / 2, k = Bt.normalize(m + y), L = Bt.normalize(k + Math.PI), q = l * a, V = a - q * Math.abs(Math.sin(y)), ee = g.x + q * Math.cos(L), ue = g.y + q * Math.sin(L), fe = new $(ee, ue), me = new Gt(g, fe), Ae = me.pointAlongOffset(1, V), Te = me.pointAlongOffset(1, -V);
          this._side === ne.LEFT ? (this._segList.addPt(Ae), this._segList.addPt(Te)) : (this._segList.addPt(Te), this._segList.addPt(Ae));
        } }, { key: "addDirectedFillet", value: function(n, i, a, l, g) {
          var m = l === ye.CLOCKWISE ? -1 : 1, y = Math.abs(i - a), k = Math.trunc(y / this._filletAngleQuantum + 0.5);
          if (k < 1) return null;
          for (var L = y / k, q = new $(), V = 0; V < k; V++) {
            var ee = i + m * V * L;
            q.x = n.x + g * Math.cos(ee), q.y = n.y + g * Math.sin(ee), this._segList.addPt(q);
          }
        } }, { key: "computeOffsetSegment", value: function(n, i, a, l) {
          var g = i === ne.LEFT ? 1 : -1, m = n.p1.x - n.p0.x, y = n.p1.y - n.p0.y, k = Math.sqrt(m * m + y * y), L = g * a * m / k, q = g * a * y / k;
          l.p0.x = n.p0.x - q, l.p0.y = n.p0.y + L, l.p1.x = n.p1.x - q, l.p1.y = n.p1.y + L;
        } }, { key: "addInsideTurn", value: function(n, i) {
          if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection()) this._segList.addPt(this._li.getIntersection(0));
          else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * o.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this._segList.addPt(this._offset0.p1);
          else {
            if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
              var a = new $((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
              this._segList.addPt(a);
              var l = new $((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
              this._segList.addPt(l);
            } else this._segList.addPt(this._s1);
            this._segList.addPt(this._offset1.p0);
          }
        } }, { key: "createCircle", value: function(n) {
          var i = new $(n.x + this._distance, n.y);
          this._segList.addPt(i), this.addDirectedFillet(n, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
        } }, { key: "addBevelJoin", value: function(n, i) {
          this._segList.addPt(n.p1), this._segList.addPt(i.p0);
        } }, { key: "init", value: function(n) {
          this._distance = n, this._maxCurveSegmentError = n * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new xc(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(n * o.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
        } }, { key: "addCollinear", value: function(n) {
          this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === H.JOIN_BEVEL || this._bufParams.getJoinStyle() === H.JOIN_MITRE ? (n && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, ye.CLOCKWISE, this._distance));
        } }, { key: "closeRing", value: function() {
          this._segList.closeRing();
        } }, { key: "hasNarrowConcaveAngle", value: function() {
          return this._hasNarrowConcaveAngle;
        } }], [{ key: "constructor_", value: function() {
          this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new Gt(), this._seg1 = new Gt(), this._offset0 = new Gt(), this._offset1 = new Gt(), this._side = 0, this._hasNarrowConcaveAngle = !1;
          var n = arguments[0], i = arguments[1], a = arguments[2];
          this._precisionModel = n, this._bufParams = i, this._li = new zr(), this._filletAngleQuantum = Math.PI / 2 / i.getQuadrantSegments(), i.getQuadrantSegments() >= 8 && i.getJoinStyle() === H.JOIN_ROUND && (this._closingSegLengthFactor = o.MAX_CLOSING_SEG_LEN_FACTOR), this.init(a);
        } }]);
      })();
      cs.OFFSET_SEGMENT_SEPARATION_FACTOR = 1e-3, cs.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = 1e-3, cs.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, cs.MAX_CLOSING_SEG_LEN_FACTOR = 80;
      var om = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getOffsetCurve", value: function(n, i) {
          if (this._distance = i, i === 0) return null;
          var a = i < 0, l = Math.abs(i), g = this.getSegGen(l);
          n.length <= 1 ? this.computePointCurve(n[0], g) : this.computeOffsetCurve(n, a, g);
          var m = g.getCoordinates();
          return a && Q.reverse(m), m;
        } }, { key: "computeSingleSidedBufferCurve", value: function(n, i, a) {
          var l = this.simplifyTolerance(this._distance);
          if (i) {
            a.addSegments(n, !0);
            var g = cn.simplify(n, -l), m = g.length - 1;
            a.initSideSegments(g[m], g[m - 1], ne.LEFT), a.addFirstSegment();
            for (var y = m - 2; y >= 0; y--) a.addNextSegment(g[y], !0);
          } else {
            a.addSegments(n, !1);
            var k = cn.simplify(n, l), L = k.length - 1;
            a.initSideSegments(k[0], k[1], ne.LEFT), a.addFirstSegment();
            for (var q = 2; q <= L; q++) a.addNextSegment(k[q], !0);
          }
          a.addLastSegment(), a.closeRing();
        } }, { key: "computeRingBufferCurve", value: function(n, i, a) {
          var l = this.simplifyTolerance(this._distance);
          i === ne.RIGHT && (l = -l);
          var g = cn.simplify(n, l), m = g.length - 1;
          a.initSideSegments(g[m - 1], g[0], i);
          for (var y = 1; y <= m; y++) {
            var k = y !== 1;
            a.addNextSegment(g[y], k);
          }
          a.closeRing();
        } }, { key: "computeLineBufferCurve", value: function(n, i) {
          var a = this.simplifyTolerance(this._distance), l = cn.simplify(n, a), g = l.length - 1;
          i.initSideSegments(l[0], l[1], ne.LEFT);
          for (var m = 2; m <= g; m++) i.addNextSegment(l[m], !0);
          i.addLastSegment(), i.addLineEndCap(l[g - 1], l[g]);
          var y = cn.simplify(n, -a), k = y.length - 1;
          i.initSideSegments(y[k], y[k - 1], ne.LEFT);
          for (var L = k - 2; L >= 0; L--) i.addNextSegment(y[L], !0);
          i.addLastSegment(), i.addLineEndCap(y[1], y[0]), i.closeRing();
        } }, { key: "computePointCurve", value: function(n, i) {
          switch (this._bufParams.getEndCapStyle()) {
            case H.CAP_ROUND:
              i.createCircle(n);
              break;
            case H.CAP_SQUARE:
              i.createSquare(n);
          }
        } }, { key: "getLineCurve", value: function(n, i) {
          if (this._distance = i, this.isLineOffsetEmpty(i)) return null;
          var a = Math.abs(i), l = this.getSegGen(a);
          if (n.length <= 1) this.computePointCurve(n[0], l);
          else if (this._bufParams.isSingleSided()) {
            var g = i < 0;
            this.computeSingleSidedBufferCurve(n, g, l);
          } else this.computeLineBufferCurve(n, l);
          return l.getCoordinates();
        } }, { key: "getBufferParameters", value: function() {
          return this._bufParams;
        } }, { key: "simplifyTolerance", value: function(n) {
          return n * this._bufParams.getSimplifyFactor();
        } }, { key: "getRingCurve", value: function(n, i, a) {
          if (this._distance = a, n.length <= 2) return this.getLineCurve(n, a);
          if (a === 0) return o.copyCoordinates(n);
          var l = this.getSegGen(a);
          return this.computeRingBufferCurve(n, i, l), l.getCoordinates();
        } }, { key: "computeOffsetCurve", value: function(n, i, a) {
          var l = this.simplifyTolerance(this._distance);
          if (i) {
            var g = cn.simplify(n, -l), m = g.length - 1;
            a.initSideSegments(g[m], g[m - 1], ne.LEFT), a.addFirstSegment();
            for (var y = m - 2; y >= 0; y--) a.addNextSegment(g[y], !0);
          } else {
            var k = cn.simplify(n, l), L = k.length - 1;
            a.initSideSegments(k[0], k[1], ne.LEFT), a.addFirstSegment();
            for (var q = 2; q <= L; q++) a.addNextSegment(k[q], !0);
          }
          a.addLastSegment();
        } }, { key: "isLineOffsetEmpty", value: function(n) {
          return n === 0 || n < 0 && !this._bufParams.isSingleSided();
        } }, { key: "getSegGen", value: function(n) {
          return new cs(this._precisionModel, this._bufParams, n);
        } }], [{ key: "constructor_", value: function() {
          this._distance = 0, this._precisionModel = null, this._bufParams = null;
          var n = arguments[0], i = arguments[1];
          this._precisionModel = n, this._bufParams = i;
        } }, { key: "copyCoordinates", value: function(n) {
          for (var i = new Array(n.length).fill(null), a = 0; a < i.length; a++) i[a] = new $(n[a]);
          return i;
        } }]);
      })(), wc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "findStabbedSegments", value: function() {
          if (arguments.length === 1) {
            for (var o = arguments[0], n = new de(), i = this._subgraphs.iterator(); i.hasNext(); ) {
              var a = i.next(), l = a.getEnvelope();
              o.y < l.getMinY() || o.y > l.getMaxY() || this.findStabbedSegments(o, a.getDirectedEdges(), n);
            }
            return n;
          }
          if (arguments.length === 3) {
            if (_e(arguments[2], bn) && arguments[0] instanceof $ && arguments[1] instanceof Go) {
              for (var g = arguments[0], m = arguments[1], y = arguments[2], k = m.getEdge().getCoordinates(), L = 0; L < k.length - 1; L++)
                if (this._seg.p0 = k[L], this._seg.p1 = k[L + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse(), !(Math.max(this._seg.p0.x, this._seg.p1.x) < g.x || this._seg.isHorizontal() || g.y < this._seg.p0.y || g.y > this._seg.p1.y || ye.index(this._seg.p0, this._seg.p1, g) === ye.RIGHT)) {
                  var q = m.getDepth(ne.LEFT);
                  this._seg.p0.equals(k[L]) || (q = m.getDepth(ne.RIGHT));
                  var V = new kc(this._seg, q);
                  y.add(V);
                }
            } else if (_e(arguments[2], bn) && arguments[0] instanceof $ && _e(arguments[1], bn)) for (var ee = arguments[0], ue = arguments[2], fe = arguments[1].iterator(); fe.hasNext(); ) {
              var me = fe.next();
              me.isForward() && this.findStabbedSegments(ee, me, ue);
            }
          }
        } }, { key: "getDepth", value: function(o) {
          var n = this.findStabbedSegments(o);
          return n.size() === 0 ? 0 : yi.min(n)._leftDepth;
        } }], [{ key: "constructor_", value: function() {
          this._subgraphs = null, this._seg = new Gt();
          var o = arguments[0];
          this._subgraphs = o;
        } }]);
      })(), kc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "compareTo", value: function(o) {
          var n = o;
          if (this._upwardSeg.minX() >= n._upwardSeg.maxX()) return 1;
          if (this._upwardSeg.maxX() <= n._upwardSeg.minX()) return -1;
          var i = this._upwardSeg.orientationIndex(n._upwardSeg);
          return i !== 0 || (i = -1 * n._upwardSeg.orientationIndex(this._upwardSeg)) !== 0 ? i : this._upwardSeg.compareTo(n._upwardSeg);
        } }, { key: "compareX", value: function(o, n) {
          var i = o.p0.compareTo(n.p0);
          return i !== 0 ? i : o.p1.compareTo(n.p1);
        } }, { key: "toString", value: function() {
          return this._upwardSeg.toString();
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._upwardSeg = null, this._leftDepth = null;
          var o = arguments[0], n = arguments[1];
          this._upwardSeg = new Gt(o), this._leftDepth = n;
        } }]);
      })();
      wc.DepthSegment = kc;
      var Sc = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, null, [{ key: "constructor_", value: function() {
          X.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
        } }]);
      })(X), zo = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getY", value: function() {
          var n = this.y / this.w;
          if (Z.isNaN(n) || Z.isInfinite(n)) throw new Sc();
          return n;
        } }, { key: "getX", value: function() {
          var n = this.x / this.w;
          if (Z.isNaN(n) || Z.isInfinite(n)) throw new Sc();
          return n;
        } }, { key: "getCoordinate", value: function() {
          var n = new $();
          return n.x = this.getX(), n.y = this.getY(), n;
        } }], [{ key: "constructor_", value: function() {
          if (this.x = null, this.y = null, this.w = null, arguments.length === 0) this.x = 0, this.y = 0, this.w = 1;
          else if (arguments.length === 1) {
            var n = arguments[0];
            this.x = n.x, this.y = n.y, this.w = 1;
          } else if (arguments.length === 2) {
            if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
              var i = arguments[0], a = arguments[1];
              this.x = i, this.y = a, this.w = 1;
            } else if (arguments[0] instanceof o && arguments[1] instanceof o) {
              var l = arguments[0], g = arguments[1];
              this.x = l.y * g.w - g.y * l.w, this.y = g.x * l.w - l.x * g.w, this.w = l.x * g.y - g.x * l.y;
            } else if (arguments[0] instanceof $ && arguments[1] instanceof $) {
              var m = arguments[0], y = arguments[1];
              this.x = m.y - y.y, this.y = y.x - m.x, this.w = m.x * y.y - y.x * m.y;
            }
          } else if (arguments.length === 3) {
            var k = arguments[0], L = arguments[1], q = arguments[2];
            this.x = k, this.y = L, this.w = q;
          } else if (arguments.length === 4) {
            var V = arguments[0], ee = arguments[1], ue = arguments[2], fe = arguments[3], me = V.y - ee.y, Ae = ee.x - V.x, Te = V.x * ee.y - ee.x * V.y, Fe = ue.y - fe.y, ct = fe.x - ue.x, ft = ue.x * fe.y - fe.x * ue.y;
            this.x = Ae * ft - ct * Te, this.y = Fe * Te - me * ft, this.w = me * ct - Fe * Ae;
          }
        } }]);
      })(), um = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "area", value: function() {
          return o.area(this.p0, this.p1, this.p2);
        } }, { key: "signedArea", value: function() {
          return o.signedArea(this.p0, this.p1, this.p2);
        } }, { key: "interpolateZ", value: function(n) {
          if (n === null) throw new J("Supplied point is null.");
          return o.interpolateZ(n, this.p0, this.p1, this.p2);
        } }, { key: "longestSideLength", value: function() {
          return o.longestSideLength(this.p0, this.p1, this.p2);
        } }, { key: "isAcute", value: function() {
          return o.isAcute(this.p0, this.p1, this.p2);
        } }, { key: "circumcentre", value: function() {
          return o.circumcentre(this.p0, this.p1, this.p2);
        } }, { key: "area3D", value: function() {
          return o.area3D(this.p0, this.p1, this.p2);
        } }, { key: "centroid", value: function() {
          return o.centroid(this.p0, this.p1, this.p2);
        } }, { key: "inCentre", value: function() {
          return o.inCentre(this.p0, this.p1, this.p2);
        } }], [{ key: "constructor_", value: function() {
          this.p0 = null, this.p1 = null, this.p2 = null;
          var n = arguments[0], i = arguments[1], a = arguments[2];
          this.p0 = n, this.p1 = i, this.p2 = a;
        } }, { key: "area", value: function(n, i, a) {
          return Math.abs(((a.x - n.x) * (i.y - n.y) - (i.x - n.x) * (a.y - n.y)) / 2);
        } }, { key: "signedArea", value: function(n, i, a) {
          return ((a.x - n.x) * (i.y - n.y) - (i.x - n.x) * (a.y - n.y)) / 2;
        } }, { key: "det", value: function(n, i, a, l) {
          return n * l - i * a;
        } }, { key: "interpolateZ", value: function(n, i, a, l) {
          var g = i.x, m = i.y, y = a.x - g, k = l.x - g, L = a.y - m, q = l.y - m, V = y * q - k * L, ee = n.x - g, ue = n.y - m, fe = (q * ee - k * ue) / V, me = (-L * ee + y * ue) / V;
          return i.getZ() + fe * (a.getZ() - i.getZ()) + me * (l.getZ() - i.getZ());
        } }, { key: "longestSideLength", value: function(n, i, a) {
          var l = n.distance(i), g = i.distance(a), m = a.distance(n), y = l;
          return g > y && (y = g), m > y && (y = m), y;
        } }, { key: "circumcentreDD", value: function(n, i, a) {
          var l = ve.valueOf(n.x).subtract(a.x), g = ve.valueOf(n.y).subtract(a.y), m = ve.valueOf(i.x).subtract(a.x), y = ve.valueOf(i.y).subtract(a.y), k = ve.determinant(l, g, m, y).multiply(2), L = l.sqr().add(g.sqr()), q = m.sqr().add(y.sqr()), V = ve.determinant(g, L, y, q), ee = ve.determinant(l, L, m, q), ue = ve.valueOf(a.x).subtract(V.divide(k)).doubleValue(), fe = ve.valueOf(a.y).add(ee.divide(k)).doubleValue();
          return new $(ue, fe);
        } }, { key: "isAcute", value: function(n, i, a) {
          return !!Bt.isAcute(n, i, a) && !!Bt.isAcute(i, a, n) && !!Bt.isAcute(a, n, i);
        } }, { key: "circumcentre", value: function(n, i, a) {
          var l = a.x, g = a.y, m = n.x - l, y = n.y - g, k = i.x - l, L = i.y - g, q = 2 * o.det(m, y, k, L), V = o.det(y, m * m + y * y, L, k * k + L * L), ee = o.det(m, m * m + y * y, k, k * k + L * L);
          return new $(l - V / q, g + ee / q);
        } }, { key: "perpendicularBisector", value: function(n, i) {
          var a = i.x - n.x, l = i.y - n.y, g = new zo(n.x + a / 2, n.y + l / 2, 1), m = new zo(n.x - l + a / 2, n.y + a + l / 2, 1);
          return new zo(g, m);
        } }, { key: "angleBisector", value: function(n, i, a) {
          var l = i.distance(n), g = l / (l + i.distance(a)), m = a.x - n.x, y = a.y - n.y;
          return new $(n.x + g * m, n.y + g * y);
        } }, { key: "area3D", value: function(n, i, a) {
          var l = i.x - n.x, g = i.y - n.y, m = i.getZ() - n.getZ(), y = a.x - n.x, k = a.y - n.y, L = a.getZ() - n.getZ(), q = g * L - m * k, V = m * y - l * L, ee = l * k - g * y, ue = q * q + V * V + ee * ee, fe = Math.sqrt(ue) / 2;
          return fe;
        } }, { key: "centroid", value: function(n, i, a) {
          var l = (n.x + i.x + a.x) / 3, g = (n.y + i.y + a.y) / 3;
          return new $(l, g);
        } }, { key: "inCentre", value: function(n, i, a) {
          var l = i.distance(a), g = n.distance(a), m = n.distance(i), y = l + g + m, k = (l * n.x + g * i.x + m * a.x) / y, L = (l * n.y + g * i.y + m * a.y) / y;
          return new $(k, L);
        } }]);
      })(), lm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "addRingSide", value: function(o, n, i, a, l) {
          if (n === 0 && o.length < vr.MINIMUM_VALID_SIZE) return null;
          var g = a, m = l;
          o.length >= vr.MINIMUM_VALID_SIZE && ye.isCCW(o) && (g = l, m = a, i = ne.opposite(i));
          var y = this._curveBuilder.getRingCurve(o, i, n);
          this.addCurve(y, g, m);
        } }, { key: "addRingBothSides", value: function(o, n) {
          this.addRingSide(o, n, ne.LEFT, N.EXTERIOR, N.INTERIOR), this.addRingSide(o, n, ne.RIGHT, N.INTERIOR, N.EXTERIOR);
        } }, { key: "addPoint", value: function(o) {
          if (this._distance <= 0) return null;
          var n = o.getCoordinates(), i = this._curveBuilder.getLineCurve(n, this._distance);
          this.addCurve(i, N.EXTERIOR, N.INTERIOR);
        } }, { key: "addPolygon", value: function(o) {
          var n = this._distance, i = ne.LEFT;
          this._distance < 0 && (n = -this._distance, i = ne.RIGHT);
          var a = o.getExteriorRing(), l = Q.removeRepeatedPoints(a.getCoordinates());
          if (this._distance < 0 && this.isErodedCompletely(a, this._distance) || this._distance <= 0 && l.length < 3) return null;
          this.addRingSide(l, n, i, N.EXTERIOR, N.INTERIOR);
          for (var g = 0; g < o.getNumInteriorRing(); g++) {
            var m = o.getInteriorRingN(g), y = Q.removeRepeatedPoints(m.getCoordinates());
            this._distance > 0 && this.isErodedCompletely(m, -this._distance) || this.addRingSide(y, n, ne.opposite(i), N.INTERIOR, N.EXTERIOR);
          }
        } }, { key: "isTriangleErodedCompletely", value: function(o, n) {
          var i = new um(o[0], o[1], o[2]), a = i.inCentre();
          return Et.pointToSegment(a, i.p0, i.p1) < Math.abs(n);
        } }, { key: "addLineString", value: function(o) {
          if (this._curveBuilder.isLineOffsetEmpty(this._distance)) return null;
          var n = Q.removeRepeatedPoints(o.getCoordinates());
          if (Q.isRing(n) && !this._curveBuilder.getBufferParameters().isSingleSided()) this.addRingBothSides(n, this._distance);
          else {
            var i = this._curveBuilder.getLineCurve(n, this._distance);
            this.addCurve(i, N.EXTERIOR, N.INTERIOR);
          }
        } }, { key: "addCurve", value: function(o, n, i) {
          if (o === null || o.length < 2) return null;
          var a = new qr(o, new Jt(0, N.BOUNDARY, n, i));
          this._curveList.add(a);
        } }, { key: "getCurves", value: function() {
          return this.add(this._inputGeom), this._curveList;
        } }, { key: "add", value: function(o) {
          if (o.isEmpty()) return null;
          if (o instanceof Ur) this.addPolygon(o);
          else if (o instanceof jn) this.addLineString(o);
          else if (o instanceof fi) this.addPoint(o);
          else if (o instanceof di) this.addCollection(o);
          else if (o instanceof pi) this.addCollection(o);
          else if (o instanceof Ft) this.addCollection(o);
          else {
            if (!(o instanceof $e)) throw new ke(o.getGeometryType());
            this.addCollection(o);
          }
        } }, { key: "isErodedCompletely", value: function(o, n) {
          var i = o.getCoordinates();
          if (i.length < 4) return n < 0;
          if (i.length === 4) return this.isTriangleErodedCompletely(i, n);
          var a = o.getEnvelopeInternal(), l = Math.min(a.getHeight(), a.getWidth());
          return n < 0 && 2 * Math.abs(n) > l;
        } }, { key: "addCollection", value: function(o) {
          for (var n = 0; n < o.getNumGeometries(); n++) {
            var i = o.getGeometryN(n);
            this.add(i);
          }
        } }], [{ key: "constructor_", value: function() {
          this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new de();
          var o = arguments[0], n = arguments[1], i = arguments[2];
          this._inputGeom = o, this._distance = n, this._curveBuilder = i;
        } }]);
      })(), cm = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "locate", value: function(o) {
        } }]);
      })(), hm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "next", value: function() {
          if (this._atStart) return this._atStart = !1, o.isAtomic(this._parent) && this._index++, this._parent;
          if (this._subcollectionIterator !== null) {
            if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
            this._subcollectionIterator = null;
          }
          if (this._index >= this._max) throw new De();
          var n = this._parent.getGeometryN(this._index++);
          return n instanceof $e ? (this._subcollectionIterator = new o(n), this._subcollectionIterator.next()) : n;
        } }, { key: "remove", value: function() {
          throw new ke(this.getClass().getName());
        } }, { key: "hasNext", value: function() {
          if (this._atStart) return !0;
          if (this._subcollectionIterator !== null) {
            if (this._subcollectionIterator.hasNext()) return !0;
            this._subcollectionIterator = null;
          }
          return !(this._index >= this._max);
        } }, { key: "interfaces_", get: function() {
          return [em];
        } }], [{ key: "constructor_", value: function() {
          this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
          var n = arguments[0];
          this._parent = n, this._atStart = !0, this._index = 0, this._max = n.getNumGeometries();
        } }, { key: "isAtomic", value: function(n) {
          return !(n instanceof $e);
        } }]);
      })(), fm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "locate", value: function(n) {
          return o.locate(n, this._geom);
        } }, { key: "interfaces_", get: function() {
          return [cm];
        } }], [{ key: "constructor_", value: function() {
          this._geom = null;
          var n = arguments[0];
          this._geom = n;
        } }, { key: "locatePointInPolygon", value: function(n, i) {
          if (i.isEmpty()) return N.EXTERIOR;
          var a = i.getExteriorRing(), l = o.locatePointInRing(n, a);
          if (l !== N.INTERIOR) return l;
          for (var g = 0; g < i.getNumInteriorRing(); g++) {
            var m = i.getInteriorRingN(g), y = o.locatePointInRing(n, m);
            if (y === N.BOUNDARY) return N.BOUNDARY;
            if (y === N.INTERIOR) return N.EXTERIOR;
          }
          return N.INTERIOR;
        } }, { key: "locatePointInRing", value: function(n, i) {
          return i.getEnvelopeInternal().intersects(n) ? Do.locateInRing(n, i.getCoordinates()) : N.EXTERIOR;
        } }, { key: "containsPointInPolygon", value: function(n, i) {
          return N.EXTERIOR !== o.locatePointInPolygon(n, i);
        } }, { key: "locateInGeometry", value: function(n, i) {
          if (i instanceof Ur) return o.locatePointInPolygon(n, i);
          if (i instanceof $e) for (var a = new hm(i); a.hasNext(); ) {
            var l = a.next();
            if (l !== i) {
              var g = o.locateInGeometry(n, l);
              if (g !== N.EXTERIOR) return g;
            }
          }
          return N.EXTERIOR;
        } }, { key: "isContained", value: function(n, i) {
          return N.EXTERIOR !== o.locate(n, i);
        } }, { key: "locate", value: function(n, i) {
          return i.isEmpty() ? N.EXTERIOR : i.getEnvelopeInternal().intersects(n) ? o.locateInGeometry(n, i) : N.EXTERIOR;
        } }]);
      })(), gm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getNextCW", value: function(o) {
          this.getEdges();
          var n = this._edgeList.indexOf(o), i = n - 1;
          return n === 0 && (i = this._edgeList.size() - 1), this._edgeList.get(i);
        } }, { key: "propagateSideLabels", value: function(o) {
          for (var n = N.NONE, i = this.iterator(); i.hasNext(); ) {
            var a = i.next().getLabel();
            a.isArea(o) && a.getLocation(o, ne.LEFT) !== N.NONE && (n = a.getLocation(o, ne.LEFT));
          }
          if (n === N.NONE) return null;
          for (var l = n, g = this.iterator(); g.hasNext(); ) {
            var m = g.next(), y = m.getLabel();
            if (y.getLocation(o, ne.ON) === N.NONE && y.setLocation(o, ne.ON, l), y.isArea(o)) {
              var k = y.getLocation(o, ne.LEFT), L = y.getLocation(o, ne.RIGHT);
              if (L !== N.NONE) {
                if (L !== l) throw new Nt("side location conflict", m.getCoordinate());
                k === N.NONE && ae.shouldNeverReachHere("found single null side (at " + m.getCoordinate() + ")"), l = k;
              } else ae.isTrue(y.getLocation(o, ne.LEFT) === N.NONE, "found single null side"), y.setLocation(o, ne.RIGHT, l), y.setLocation(o, ne.LEFT, l);
            }
          }
        } }, { key: "getCoordinate", value: function() {
          var o = this.iterator();
          return o.hasNext() ? o.next().getCoordinate() : null;
        } }, { key: "print", value: function(o) {
          Pt.out.println("EdgeEndStar:   " + this.getCoordinate());
          for (var n = this.iterator(); n.hasNext(); )
            n.next().print(o);
        } }, { key: "isAreaLabelsConsistent", value: function(o) {
          return this.computeEdgeEndLabels(o.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
        } }, { key: "checkAreaLabelsConsistent", value: function(o) {
          var n = this.getEdges();
          if (n.size() <= 0) return !0;
          var i = n.size() - 1, a = n.get(i).getLabel().getLocation(o, ne.LEFT);
          ae.isTrue(a !== N.NONE, "Found unlabelled area edge");
          for (var l = a, g = this.iterator(); g.hasNext(); ) {
            var m = g.next().getLabel();
            ae.isTrue(m.isArea(o), "Found non-area edge");
            var y = m.getLocation(o, ne.LEFT), k = m.getLocation(o, ne.RIGHT);
            if (y === k || k !== l) return !1;
            l = y;
          }
          return !0;
        } }, { key: "findIndex", value: function(o) {
          this.iterator();
          for (var n = 0; n < this._edgeList.size(); n++)
            if (this._edgeList.get(n) === o) return n;
          return -1;
        } }, { key: "iterator", value: function() {
          return this.getEdges().iterator();
        } }, { key: "getEdges", value: function() {
          return this._edgeList === null && (this._edgeList = new de(this._edgeMap.values())), this._edgeList;
        } }, { key: "getLocation", value: function(o, n, i) {
          return this._ptInAreaLocation[o] === N.NONE && (this._ptInAreaLocation[o] = fm.locate(n, i[o].getGeometry())), this._ptInAreaLocation[o];
        } }, { key: "toString", value: function() {
          var o = new un();
          o.append("EdgeEndStar:   " + this.getCoordinate()), o.append(`
`);
          for (var n = this.iterator(); n.hasNext(); ) {
            var i = n.next();
            o.append(i), o.append(`
`);
          }
          return o.toString();
        } }, { key: "computeEdgeEndLabels", value: function(o) {
          for (var n = this.iterator(); n.hasNext(); )
            n.next().computeLabel(o);
        } }, { key: "computeLabelling", value: function(o) {
          this.computeEdgeEndLabels(o[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
          for (var n = [!1, !1], i = this.iterator(); i.hasNext(); ) for (var a = i.next().getLabel(), l = 0; l < 2; l++) a.isLine(l) && a.getLocation(l) === N.BOUNDARY && (n[l] = !0);
          for (var g = this.iterator(); g.hasNext(); ) for (var m = g.next(), y = m.getLabel(), k = 0; k < 2; k++) if (y.isAnyNull(k)) {
            var L = N.NONE;
            if (n[k]) L = N.EXTERIOR;
            else {
              var q = m.getCoordinate();
              L = this.getLocation(k, q, o);
            }
            y.setAllLocationsIfNull(k, L);
          }
        } }, { key: "getDegree", value: function() {
          return this._edgeMap.size();
        } }, { key: "insertEdgeEnd", value: function(o, n) {
          this._edgeMap.put(o, n), this._edgeList = null;
        } }], [{ key: "constructor_", value: function() {
          this._edgeMap = new ls(), this._edgeList = null, this._ptInAreaLocation = [N.NONE, N.NONE];
        } }]);
      })(), dm = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "linkResultDirectedEdges", value: function() {
          this.getResultAreaEdges();
          for (var i = null, a = null, l = this._SCANNING_FOR_INCOMING, g = 0; g < this._resultAreaEdgeList.size(); g++) {
            var m = this._resultAreaEdgeList.get(g), y = m.getSym();
            if (m.getLabel().isArea()) switch (i === null && m.isInResult() && (i = m), l) {
              case this._SCANNING_FOR_INCOMING:
                if (!y.isInResult()) continue;
                a = y, l = this._LINKING_TO_OUTGOING;
                break;
              case this._LINKING_TO_OUTGOING:
                if (!m.isInResult()) continue;
                a.setNext(m), l = this._SCANNING_FOR_INCOMING;
            }
          }
          if (l === this._LINKING_TO_OUTGOING) {
            if (i === null) throw new Nt("no outgoing dirEdge found", this.getCoordinate());
            ae.isTrue(i.isInResult(), "unable to link last incoming dirEdge"), a.setNext(i);
          }
        } }, { key: "insert", value: function(i) {
          var a = i;
          this.insertEdgeEnd(a, a);
        } }, { key: "getRightmostEdge", value: function() {
          var i = this.getEdges(), a = i.size();
          if (a < 1) return null;
          var l = i.get(0);
          if (a === 1) return l;
          var g = i.get(a - 1), m = l.getQuadrant(), y = g.getQuadrant();
          return xt.isNorthern(m) && xt.isNorthern(y) ? l : xt.isNorthern(m) || xt.isNorthern(y) ? l.getDy() !== 0 ? l : g.getDy() !== 0 ? g : (ae.shouldNeverReachHere("found two horizontal edges incident on node"), null) : g;
        } }, { key: "print", value: function(i) {
          Pt.out.println("DirectedEdgeStar: " + this.getCoordinate());
          for (var a = this.iterator(); a.hasNext(); ) {
            var l = a.next();
            i.print("out "), l.print(i), i.println(), i.print("in "), l.getSym().print(i), i.println();
          }
        } }, { key: "getResultAreaEdges", value: function() {
          if (this._resultAreaEdgeList !== null) return this._resultAreaEdgeList;
          this._resultAreaEdgeList = new de();
          for (var i = this.iterator(); i.hasNext(); ) {
            var a = i.next();
            (a.isInResult() || a.getSym().isInResult()) && this._resultAreaEdgeList.add(a);
          }
          return this._resultAreaEdgeList;
        } }, { key: "updateLabelling", value: function(i) {
          for (var a = this.iterator(); a.hasNext(); ) {
            var l = a.next().getLabel();
            l.setAllLocationsIfNull(0, i.getLocation(0)), l.setAllLocationsIfNull(1, i.getLocation(1));
          }
        } }, { key: "linkAllDirectedEdges", value: function() {
          this.getEdges();
          for (var i = null, a = null, l = this._edgeList.size() - 1; l >= 0; l--) {
            var g = this._edgeList.get(l), m = g.getSym();
            a === null && (a = m), i !== null && m.setNext(i), i = g;
          }
          a.setNext(i);
        } }, { key: "computeDepths", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0], a = this.findIndex(i), l = i.getDepth(ne.LEFT), g = i.getDepth(ne.RIGHT), m = this.computeDepths(a + 1, this._edgeList.size(), l);
            if (this.computeDepths(0, a, m) !== g) throw new Nt("depth mismatch at " + i.getCoordinate());
          } else if (arguments.length === 3) {
            for (var y = arguments[1], k = arguments[2], L = arguments[0]; L < y; L++) {
              var q = this._edgeList.get(L);
              q.setEdgeDepths(ne.RIGHT, k), k = q.getDepth(ne.LEFT);
            }
            return k;
          }
        } }, { key: "mergeSymLabels", value: function() {
          for (var i = this.iterator(); i.hasNext(); ) {
            var a = i.next();
            a.getLabel().merge(a.getSym().getLabel());
          }
        } }, { key: "linkMinimalDirectedEdges", value: function(i) {
          for (var a = null, l = null, g = this._SCANNING_FOR_INCOMING, m = this._resultAreaEdgeList.size() - 1; m >= 0; m--) {
            var y = this._resultAreaEdgeList.get(m), k = y.getSym();
            switch (a === null && y.getEdgeRing() === i && (a = y), g) {
              case this._SCANNING_FOR_INCOMING:
                if (k.getEdgeRing() !== i) continue;
                l = k, g = this._LINKING_TO_OUTGOING;
                break;
              case this._LINKING_TO_OUTGOING:
                if (y.getEdgeRing() !== i) continue;
                l.setNextMin(y), g = this._SCANNING_FOR_INCOMING;
            }
          }
          g === this._LINKING_TO_OUTGOING && (ae.isTrue(a !== null, "found null for first outgoing dirEdge"), ae.isTrue(a.getEdgeRing() === i, "unable to link last incoming dirEdge"), l.setNextMin(a));
        } }, { key: "getOutgoingDegree", value: function() {
          if (arguments.length === 0) {
            for (var i = 0, a = this.iterator(); a.hasNext(); )
              a.next().isInResult() && i++;
            return i;
          }
          if (arguments.length === 1) {
            for (var l = arguments[0], g = 0, m = this.iterator(); m.hasNext(); )
              m.next().getEdgeRing() === l && g++;
            return g;
          }
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "findCoveredLineEdges", value: function() {
          for (var i = N.NONE, a = this.iterator(); a.hasNext(); ) {
            var l = a.next(), g = l.getSym();
            if (!l.isLineEdge()) {
              if (l.isInResult()) {
                i = N.INTERIOR;
                break;
              }
              if (g.isInResult()) {
                i = N.EXTERIOR;
                break;
              }
            }
          }
          if (i === N.NONE) return null;
          for (var m = i, y = this.iterator(); y.hasNext(); ) {
            var k = y.next(), L = k.getSym();
            k.isLineEdge() ? k.getEdge().setCovered(m === N.INTERIOR) : (k.isInResult() && (m = N.EXTERIOR), L.isInResult() && (m = N.INTERIOR));
          }
        } }, { key: "computeLabelling", value: function(i) {
          S(n, "computeLabelling", this, 1).call(this, i), this._label = new Jt(N.NONE);
          for (var a = this.iterator(); a.hasNext(); ) for (var l = a.next().getEdge().getLabel(), g = 0; g < 2; g++) {
            var m = l.getLocation(g);
            m !== N.INTERIOR && m !== N.BOUNDARY || this._label.setLocation(g, N.INTERIOR);
          }
        } }], [{ key: "constructor_", value: function() {
          this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
        } }]);
      })(gm), pm = (function(o) {
        function n() {
          return u(this, n), s(this, n);
        }
        return _(n, o), h(n, [{ key: "createNode", value: function(i) {
          return new ga(i, new dm());
        } }]);
      })(gc), Mc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "compareTo", value: function(n) {
          var i = n;
          return o.compareOriented(this._pts, this._orientation, i._pts, i._orientation);
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._pts = null, this._orientation = null;
          var n = arguments[0];
          this._pts = n, this._orientation = o.orientation(n);
        } }, { key: "orientation", value: function(n) {
          return Q.increasingDirection(n) === 1;
        } }, { key: "compareOriented", value: function(n, i, a, l) {
          for (var g = i ? 1 : -1, m = l ? 1 : -1, y = i ? n.length : -1, k = l ? a.length : -1, L = i ? 0 : n.length - 1, q = l ? 0 : a.length - 1; ; ) {
            var V = n[L].compareTo(a[q]);
            if (V !== 0) return V;
            var ee = (L += g) === y, ue = (q += m) === k;
            if (ee && !ue) return -1;
            if (!ee && ue) return 1;
            if (ee && ue) return 0;
          }
        } }]);
      })(), mm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "print", value: function(o) {
          o.print("MULTILINESTRING ( ");
          for (var n = 0; n < this._edges.size(); n++) {
            var i = this._edges.get(n);
            n > 0 && o.print(","), o.print("(");
            for (var a = i.getCoordinates(), l = 0; l < a.length; l++) l > 0 && o.print(","), o.print(a[l].x + " " + a[l].y);
            o.println(")");
          }
          o.print(")  ");
        } }, { key: "addAll", value: function(o) {
          for (var n = o.iterator(); n.hasNext(); ) this.add(n.next());
        } }, { key: "findEdgeIndex", value: function(o) {
          for (var n = 0; n < this._edges.size(); n++) if (this._edges.get(n).equals(o)) return n;
          return -1;
        } }, { key: "iterator", value: function() {
          return this._edges.iterator();
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "get", value: function(o) {
          return this._edges.get(o);
        } }, { key: "findEqualEdge", value: function(o) {
          var n = new Mc(o.getCoordinates());
          return this._ocaMap.get(n);
        } }, { key: "add", value: function(o) {
          this._edges.add(o);
          var n = new Mc(o.getCoordinates());
          this._ocaMap.put(n, o);
        } }], [{ key: "constructor_", value: function() {
          this._edges = new de(), this._ocaMap = new ls();
        } }]);
      })(), Ic = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "processIntersections", value: function(o, n, i, a) {
        } }, { key: "isDone", value: function() {
        } }]);
      })(), vm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isTrivialIntersection", value: function(n, i, a, l) {
          if (n === a && this._li.getIntersectionNum() === 1) {
            if (o.isAdjacentSegments(i, l)) return !0;
            if (n.isClosed()) {
              var g = n.size() - 1;
              if (i === 0 && l === g || l === 0 && i === g) return !0;
            }
          }
          return !1;
        } }, { key: "getProperIntersectionPoint", value: function() {
          return this._properIntersectionPoint;
        } }, { key: "hasProperInteriorIntersection", value: function() {
          return this._hasProperInterior;
        } }, { key: "getLineIntersector", value: function() {
          return this._li;
        } }, { key: "hasProperIntersection", value: function() {
          return this._hasProper;
        } }, { key: "processIntersections", value: function(n, i, a, l) {
          if (n === a && i === l) return null;
          this.numTests++;
          var g = n.getCoordinates()[i], m = n.getCoordinates()[i + 1], y = a.getCoordinates()[l], k = a.getCoordinates()[l + 1];
          this._li.computeIntersection(g, m, y, k), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(n, i, a, l) || (this._hasIntersection = !0, n.addIntersections(this._li, i, 0), a.addIntersections(this._li, l, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
        } }, { key: "hasIntersection", value: function() {
          return this._hasIntersection;
        } }, { key: "isDone", value: function() {
          return !1;
        } }, { key: "hasInteriorIntersection", value: function() {
          return this._hasInterior;
        } }, { key: "interfaces_", get: function() {
          return [Ic];
        } }], [{ key: "constructor_", value: function() {
          this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
          var n = arguments[0];
          this._li = n;
        } }, { key: "isAdjacentSegments", value: function(n, i) {
          return Math.abs(n - i) === 1;
        } }]);
      })(), ym = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getSegmentIndex", value: function() {
          return this.segmentIndex;
        } }, { key: "getCoordinate", value: function() {
          return this.coord;
        } }, { key: "print", value: function(o) {
          o.print(this.coord), o.print(" seg # = " + this.segmentIndex), o.println(" dist = " + this.dist);
        } }, { key: "compareTo", value: function(o) {
          var n = o;
          return this.compare(n.segmentIndex, n.dist);
        } }, { key: "isEndPoint", value: function(o) {
          return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === o;
        } }, { key: "toString", value: function() {
          return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
        } }, { key: "getDistance", value: function() {
          return this.dist;
        } }, { key: "compare", value: function(o, n) {
          return this.segmentIndex < o ? -1 : this.segmentIndex > o ? 1 : this.dist < n ? -1 : this.dist > n ? 1 : 0;
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this.coord = null, this.segmentIndex = null, this.dist = null;
          var o = arguments[0], n = arguments[1], i = arguments[2];
          this.coord = new $(o), this.segmentIndex = n, this.dist = i;
        } }]);
      })(), _m = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "print", value: function(o) {
          o.println("Intersections:");
          for (var n = this.iterator(); n.hasNext(); )
            n.next().print(o);
        } }, { key: "iterator", value: function() {
          return this._nodeMap.values().iterator();
        } }, { key: "addSplitEdges", value: function(o) {
          this.addEndpoints();
          for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
            var a = n.next(), l = this.createSplitEdge(i, a);
            o.add(l), i = a;
          }
        } }, { key: "addEndpoints", value: function() {
          var o = this.edge.pts.length - 1;
          this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[o], o, 0);
        } }, { key: "createSplitEdge", value: function(o, n) {
          var i = n.segmentIndex - o.segmentIndex + 2, a = this.edge.pts[n.segmentIndex], l = n.dist > 0 || !n.coord.equals2D(a);
          l || i--;
          var g = new Array(i).fill(null), m = 0;
          g[m++] = new $(o.coord);
          for (var y = o.segmentIndex + 1; y <= n.segmentIndex; y++) g[m++] = this.edge.pts[y];
          return l && (g[m] = n.coord), new Lc(g, new Jt(this.edge._label));
        } }, { key: "add", value: function(o, n, i) {
          var a = new ym(o, n, i), l = this._nodeMap.get(a);
          return l !== null ? l : (this._nodeMap.put(a, a), a);
        } }, { key: "isIntersection", value: function(o) {
          for (var n = this.iterator(); n.hasNext(); )
            if (n.next().coord.equals(o)) return !0;
          return !1;
        } }], [{ key: "constructor_", value: function() {
          this._nodeMap = new ls(), this.edge = null;
          var o = arguments[0];
          this.edge = o;
        } }]);
      })(), Em = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isIntersects", value: function() {
          return !this.isDisjoint();
        } }, { key: "isCovers", value: function() {
          return (o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) || o.isTrue(this._matrix[N.INTERIOR][N.BOUNDARY]) || o.isTrue(this._matrix[N.BOUNDARY][N.INTERIOR]) || o.isTrue(this._matrix[N.BOUNDARY][N.BOUNDARY])) && this._matrix[N.EXTERIOR][N.INTERIOR] === ie.FALSE && this._matrix[N.EXTERIOR][N.BOUNDARY] === ie.FALSE;
        } }, { key: "isCoveredBy", value: function() {
          return (o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) || o.isTrue(this._matrix[N.INTERIOR][N.BOUNDARY]) || o.isTrue(this._matrix[N.BOUNDARY][N.INTERIOR]) || o.isTrue(this._matrix[N.BOUNDARY][N.BOUNDARY])) && this._matrix[N.INTERIOR][N.EXTERIOR] === ie.FALSE && this._matrix[N.BOUNDARY][N.EXTERIOR] === ie.FALSE;
        } }, { key: "set", value: function() {
          if (arguments.length === 1) for (var n = arguments[0], i = 0; i < n.length; i++) {
            var a = Math.trunc(i / 3), l = i % 3;
            this._matrix[a][l] = ie.toDimensionValue(n.charAt(i));
          }
          else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1], y = arguments[2];
            this._matrix[g][m] = y;
          }
        } }, { key: "isContains", value: function() {
          return o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && this._matrix[N.EXTERIOR][N.INTERIOR] === ie.FALSE && this._matrix[N.EXTERIOR][N.BOUNDARY] === ie.FALSE;
        } }, { key: "setAtLeast", value: function() {
          if (arguments.length === 1) for (var n = arguments[0], i = 0; i < n.length; i++) {
            var a = Math.trunc(i / 3), l = i % 3;
            this.setAtLeast(a, l, ie.toDimensionValue(n.charAt(i)));
          }
          else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1], y = arguments[2];
            this._matrix[g][m] < y && (this._matrix[g][m] = y);
          }
        } }, { key: "setAtLeastIfValid", value: function(n, i, a) {
          n >= 0 && i >= 0 && this.setAtLeast(n, i, a);
        } }, { key: "isWithin", value: function() {
          return o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && this._matrix[N.INTERIOR][N.EXTERIOR] === ie.FALSE && this._matrix[N.BOUNDARY][N.EXTERIOR] === ie.FALSE;
        } }, { key: "isTouches", value: function(n, i) {
          return n > i ? this.isTouches(i, n) : (n === ie.A && i === ie.A || n === ie.L && i === ie.L || n === ie.L && i === ie.A || n === ie.P && i === ie.A || n === ie.P && i === ie.L) && this._matrix[N.INTERIOR][N.INTERIOR] === ie.FALSE && (o.isTrue(this._matrix[N.INTERIOR][N.BOUNDARY]) || o.isTrue(this._matrix[N.BOUNDARY][N.INTERIOR]) || o.isTrue(this._matrix[N.BOUNDARY][N.BOUNDARY]));
        } }, { key: "isOverlaps", value: function(n, i) {
          return n === ie.P && i === ie.P || n === ie.A && i === ie.A ? o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && o.isTrue(this._matrix[N.INTERIOR][N.EXTERIOR]) && o.isTrue(this._matrix[N.EXTERIOR][N.INTERIOR]) : n === ie.L && i === ie.L && this._matrix[N.INTERIOR][N.INTERIOR] === 1 && o.isTrue(this._matrix[N.INTERIOR][N.EXTERIOR]) && o.isTrue(this._matrix[N.EXTERIOR][N.INTERIOR]);
        } }, { key: "isEquals", value: function(n, i) {
          return n === i && o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && this._matrix[N.INTERIOR][N.EXTERIOR] === ie.FALSE && this._matrix[N.BOUNDARY][N.EXTERIOR] === ie.FALSE && this._matrix[N.EXTERIOR][N.INTERIOR] === ie.FALSE && this._matrix[N.EXTERIOR][N.BOUNDARY] === ie.FALSE;
        } }, { key: "toString", value: function() {
          for (var n = new et("123456789"), i = 0; i < 3; i++) for (var a = 0; a < 3; a++) n.setCharAt(3 * i + a, ie.toDimensionSymbol(this._matrix[i][a]));
          return n.toString();
        } }, { key: "setAll", value: function(n) {
          for (var i = 0; i < 3; i++) for (var a = 0; a < 3; a++) this._matrix[i][a] = n;
        } }, { key: "get", value: function(n, i) {
          return this._matrix[n][i];
        } }, { key: "transpose", value: function() {
          var n = this._matrix[1][0];
          return this._matrix[1][0] = this._matrix[0][1], this._matrix[0][1] = n, n = this._matrix[2][0], this._matrix[2][0] = this._matrix[0][2], this._matrix[0][2] = n, n = this._matrix[2][1], this._matrix[2][1] = this._matrix[1][2], this._matrix[1][2] = n, this;
        } }, { key: "matches", value: function(n) {
          if (n.length !== 9) throw new J("Should be length 9: " + n);
          for (var i = 0; i < 3; i++) for (var a = 0; a < 3; a++) if (!o.matches(this._matrix[i][a], n.charAt(3 * i + a))) return !1;
          return !0;
        } }, { key: "add", value: function(n) {
          for (var i = 0; i < 3; i++) for (var a = 0; a < 3; a++) this.setAtLeast(i, a, n.get(i, a));
        } }, { key: "isDisjoint", value: function() {
          return this._matrix[N.INTERIOR][N.INTERIOR] === ie.FALSE && this._matrix[N.INTERIOR][N.BOUNDARY] === ie.FALSE && this._matrix[N.BOUNDARY][N.INTERIOR] === ie.FALSE && this._matrix[N.BOUNDARY][N.BOUNDARY] === ie.FALSE;
        } }, { key: "isCrosses", value: function(n, i) {
          return n === ie.P && i === ie.L || n === ie.P && i === ie.A || n === ie.L && i === ie.A ? o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && o.isTrue(this._matrix[N.INTERIOR][N.EXTERIOR]) : n === ie.L && i === ie.P || n === ie.A && i === ie.P || n === ie.A && i === ie.L ? o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && o.isTrue(this._matrix[N.EXTERIOR][N.INTERIOR]) : n === ie.L && i === ie.L && this._matrix[N.INTERIOR][N.INTERIOR] === 0;
        } }, { key: "interfaces_", get: function() {
          return [E];
        } }], [{ key: "constructor_", value: function() {
          if (this._matrix = null, arguments.length === 0) this._matrix = Array(3).fill().map((function() {
            return Array(3);
          })), this.setAll(ie.FALSE);
          else if (arguments.length === 1) {
            if (typeof arguments[0] == "string") {
              var n = arguments[0];
              o.constructor_.call(this), this.set(n);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              o.constructor_.call(this), this._matrix[N.INTERIOR][N.INTERIOR] = i._matrix[N.INTERIOR][N.INTERIOR], this._matrix[N.INTERIOR][N.BOUNDARY] = i._matrix[N.INTERIOR][N.BOUNDARY], this._matrix[N.INTERIOR][N.EXTERIOR] = i._matrix[N.INTERIOR][N.EXTERIOR], this._matrix[N.BOUNDARY][N.INTERIOR] = i._matrix[N.BOUNDARY][N.INTERIOR], this._matrix[N.BOUNDARY][N.BOUNDARY] = i._matrix[N.BOUNDARY][N.BOUNDARY], this._matrix[N.BOUNDARY][N.EXTERIOR] = i._matrix[N.BOUNDARY][N.EXTERIOR], this._matrix[N.EXTERIOR][N.INTERIOR] = i._matrix[N.EXTERIOR][N.INTERIOR], this._matrix[N.EXTERIOR][N.BOUNDARY] = i._matrix[N.EXTERIOR][N.BOUNDARY], this._matrix[N.EXTERIOR][N.EXTERIOR] = i._matrix[N.EXTERIOR][N.EXTERIOR];
            }
          }
        } }, { key: "matches", value: function() {
          if (Number.isInteger(arguments[0]) && typeof arguments[1] == "string") {
            var n = arguments[0], i = arguments[1];
            return i === ie.SYM_DONTCARE || i === ie.SYM_TRUE && (n >= 0 || n === ie.TRUE) || i === ie.SYM_FALSE && n === ie.FALSE || i === ie.SYM_P && n === ie.P || i === ie.SYM_L && n === ie.L || i === ie.SYM_A && n === ie.A;
          }
          if (typeof arguments[0] == "string" && typeof arguments[1] == "string") {
            var a = arguments[1];
            return new o(arguments[0]).matches(a);
          }
        } }, { key: "isTrue", value: function(n) {
          return n >= 0 || n === ie.TRUE;
        } }]);
      })(), xm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "size", value: function() {
          return this._size;
        } }, { key: "addAll", value: function(n) {
          return n === null || n.length === 0 ? null : (this.ensureCapacity(this._size + n.length), Pt.arraycopy(n, 0, this._data, this._size, n.length), void (this._size += n.length));
        } }, { key: "ensureCapacity", value: function(n) {
          if (n <= this._data.length) return null;
          var i = Math.max(n, 2 * this._data.length);
          this._data = rt.copyOf(this._data, i);
        } }, { key: "toArray", value: function() {
          var n = new Array(this._size).fill(null);
          return Pt.arraycopy(this._data, 0, n, 0, this._size), n;
        } }, { key: "add", value: function(n) {
          this.ensureCapacity(this._size + 1), this._data[this._size] = n, ++this._size;
        } }], [{ key: "constructor_", value: function() {
          if (this._data = null, this._size = 0, arguments.length === 0) o.constructor_.call(this, 10);
          else if (arguments.length === 1) {
            var n = arguments[0];
            this._data = new Array(n).fill(null);
          }
        } }]);
      })(), wm = (function() {
        function o() {
          u(this, o);
        }
        return h(o, [{ key: "getChainStartIndices", value: function(n) {
          var i = 0, a = new xm(Math.trunc(n.length / 2));
          a.add(i);
          do {
            var l = this.findChainEnd(n, i);
            a.add(l), i = l;
          } while (i < n.length - 1);
          return a.toArray();
        } }, { key: "findChainEnd", value: function(n, i) {
          for (var a = xt.quadrant(n[i], n[i + 1]), l = i + 1; l < n.length && xt.quadrant(n[l - 1], n[l]) === a; )
            l++;
          return l - 1;
        } }, { key: "OLDgetChainStartIndices", value: function(n) {
          var i = 0, a = new de();
          a.add(i);
          do {
            var l = this.findChainEnd(n, i);
            a.add(l), i = l;
          } while (i < n.length - 1);
          return o.toIntArray(a);
        } }], [{ key: "toIntArray", value: function(n) {
          for (var i = new Array(n.size()).fill(null), a = 0; a < i.length; a++) i[a] = n.get(a).intValue();
          return i;
        } }]);
      })(), km = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getCoordinates", value: function() {
          return this.pts;
        } }, { key: "getMaxX", value: function(o) {
          var n = this.pts[this.startIndex[o]].x, i = this.pts[this.startIndex[o + 1]].x;
          return n > i ? n : i;
        } }, { key: "getMinX", value: function(o) {
          var n = this.pts[this.startIndex[o]].x, i = this.pts[this.startIndex[o + 1]].x;
          return n < i ? n : i;
        } }, { key: "computeIntersectsForChain", value: function() {
          if (arguments.length === 4) {
            var o = arguments[0], n = arguments[1], i = arguments[2], a = arguments[3];
            this.computeIntersectsForChain(this.startIndex[o], this.startIndex[o + 1], n, n.startIndex[i], n.startIndex[i + 1], a);
          } else if (arguments.length === 6) {
            var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3], k = arguments[4], L = arguments[5];
            if (g - l == 1 && k - y == 1) return L.addIntersections(this.e, l, m.e, y), null;
            if (!this.overlaps(l, g, m, y, k)) return null;
            var q = Math.trunc((l + g) / 2), V = Math.trunc((y + k) / 2);
            l < q && (y < V && this.computeIntersectsForChain(l, q, m, y, V, L), V < k && this.computeIntersectsForChain(l, q, m, V, k, L)), q < g && (y < V && this.computeIntersectsForChain(q, g, m, y, V, L), V < k && this.computeIntersectsForChain(q, g, m, V, k, L));
          }
        } }, { key: "overlaps", value: function(o, n, i, a, l) {
          return Le.intersects(this.pts[o], this.pts[n], i.pts[a], i.pts[l]);
        } }, { key: "getStartIndexes", value: function() {
          return this.startIndex;
        } }, { key: "computeIntersects", value: function(o, n) {
          for (var i = 0; i < this.startIndex.length - 1; i++) for (var a = 0; a < o.startIndex.length - 1; a++) this.computeIntersectsForChain(i, o, a, n);
        } }], [{ key: "constructor_", value: function() {
          this.e = null, this.pts = null, this.startIndex = null;
          var o = arguments[0];
          this.e = o, this.pts = o.getCoordinates();
          var n = new wm();
          this.startIndex = n.getChainStartIndices(this.pts);
        } }]);
      })(), bc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getDepth", value: function(n, i) {
          return this._depth[n][i];
        } }, { key: "setDepth", value: function(n, i, a) {
          this._depth[n][i] = a;
        } }, { key: "isNull", value: function() {
          if (arguments.length === 0) {
            for (var n = 0; n < 2; n++) for (var i = 0; i < 3; i++) if (this._depth[n][i] !== o.NULL_VALUE) return !1;
            return !0;
          }
          if (arguments.length === 1) {
            var a = arguments[0];
            return this._depth[a][1] === o.NULL_VALUE;
          }
          if (arguments.length === 2) {
            var l = arguments[0], g = arguments[1];
            return this._depth[l][g] === o.NULL_VALUE;
          }
        } }, { key: "normalize", value: function() {
          for (var n = 0; n < 2; n++) if (!this.isNull(n)) {
            var i = this._depth[n][1];
            this._depth[n][2] < i && (i = this._depth[n][2]), i < 0 && (i = 0);
            for (var a = 1; a < 3; a++) {
              var l = 0;
              this._depth[n][a] > i && (l = 1), this._depth[n][a] = l;
            }
          }
        } }, { key: "getDelta", value: function(n) {
          return this._depth[n][ne.RIGHT] - this._depth[n][ne.LEFT];
        } }, { key: "getLocation", value: function(n, i) {
          return this._depth[n][i] <= 0 ? N.EXTERIOR : N.INTERIOR;
        } }, { key: "toString", value: function() {
          return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
        } }, { key: "add", value: function() {
          if (arguments.length === 1) for (var n = arguments[0], i = 0; i < 2; i++) for (var a = 1; a < 3; a++) {
            var l = n.getLocation(i, a);
            l !== N.EXTERIOR && l !== N.INTERIOR || (this.isNull(i, a) ? this._depth[i][a] = o.depthAtLocation(l) : this._depth[i][a] += o.depthAtLocation(l));
          }
          else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1];
            arguments[2] === N.INTERIOR && this._depth[g][m]++;
          }
        } }], [{ key: "constructor_", value: function() {
          this._depth = Array(2).fill().map((function() {
            return Array(3);
          }));
          for (var n = 0; n < 2; n++) for (var i = 0; i < 3; i++) this._depth[n][i] = o.NULL_VALUE;
        } }, { key: "depthAtLocation", value: function(n) {
          return n === N.EXTERIOR ? 0 : n === N.INTERIOR ? 1 : o.NULL_VALUE;
        } }]);
      })();
      bc.NULL_VALUE = -1;
      var Lc = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "getDepth", value: function() {
          return this._depth;
        } }, { key: "getCollapsedEdge", value: function() {
          var i = new Array(2).fill(null);
          return i[0] = this.pts[0], i[1] = this.pts[1], new n(i, Jt.toLineLabel(this._label));
        } }, { key: "isIsolated", value: function() {
          return this._isIsolated;
        } }, { key: "getCoordinates", value: function() {
          return this.pts;
        } }, { key: "setIsolated", value: function(i) {
          this._isIsolated = i;
        } }, { key: "setName", value: function(i) {
          this._name = i;
        } }, { key: "equals", value: function(i) {
          if (!(i instanceof n)) return !1;
          var a = i;
          if (this.pts.length !== a.pts.length) return !1;
          for (var l = !0, g = !0, m = this.pts.length, y = 0; y < this.pts.length; y++) if (this.pts[y].equals2D(a.pts[y]) || (l = !1), this.pts[y].equals2D(a.pts[--m]) || (g = !1), !l && !g) return !1;
          return !0;
        } }, { key: "getCoordinate", value: function() {
          if (arguments.length === 0) return this.pts.length > 0 ? this.pts[0] : null;
          if (arguments.length === 1) {
            var i = arguments[0];
            return this.pts[i];
          }
        } }, { key: "print", value: function(i) {
          i.print("edge " + this._name + ": "), i.print("LINESTRING (");
          for (var a = 0; a < this.pts.length; a++) a > 0 && i.print(","), i.print(this.pts[a].x + " " + this.pts[a].y);
          i.print(")  " + this._label + " " + this._depthDelta);
        } }, { key: "computeIM", value: function(i) {
          n.updateIM(this._label, i);
        } }, { key: "isCollapsed", value: function() {
          return !!this._label.isArea() && this.pts.length === 3 && !!this.pts[0].equals(this.pts[2]);
        } }, { key: "isClosed", value: function() {
          return this.pts[0].equals(this.pts[this.pts.length - 1]);
        } }, { key: "getMaximumSegmentIndex", value: function() {
          return this.pts.length - 1;
        } }, { key: "getDepthDelta", value: function() {
          return this._depthDelta;
        } }, { key: "getNumPoints", value: function() {
          return this.pts.length;
        } }, { key: "printReverse", value: function(i) {
          i.print("edge " + this._name + ": ");
          for (var a = this.pts.length - 1; a >= 0; a--) i.print(this.pts[a] + " ");
          i.println("");
        } }, { key: "getMonotoneChainEdge", value: function() {
          return this._mce === null && (this._mce = new km(this)), this._mce;
        } }, { key: "getEnvelope", value: function() {
          if (this._env === null) {
            this._env = new Le();
            for (var i = 0; i < this.pts.length; i++) this._env.expandToInclude(this.pts[i]);
          }
          return this._env;
        } }, { key: "addIntersection", value: function(i, a, l, g) {
          var m = new $(i.getIntersection(g)), y = a, k = i.getEdgeDistance(l, g), L = y + 1;
          if (L < this.pts.length) {
            var q = this.pts[L];
            m.equals2D(q) && (y = L, k = 0);
          }
          this.eiList.add(m, y, k);
        } }, { key: "toString", value: function() {
          var i = new et();
          i.append("edge " + this._name + ": "), i.append("LINESTRING (");
          for (var a = 0; a < this.pts.length; a++) a > 0 && i.append(","), i.append(this.pts[a].x + " " + this.pts[a].y);
          return i.append(")  " + this._label + " " + this._depthDelta), i.toString();
        } }, { key: "isPointwiseEqual", value: function(i) {
          if (this.pts.length !== i.pts.length) return !1;
          for (var a = 0; a < this.pts.length; a++) if (!this.pts[a].equals2D(i.pts[a])) return !1;
          return !0;
        } }, { key: "setDepthDelta", value: function(i) {
          this._depthDelta = i;
        } }, { key: "getEdgeIntersectionList", value: function() {
          return this.eiList;
        } }, { key: "addIntersections", value: function(i, a, l) {
          for (var g = 0; g < i.getIntersectionNum(); g++) this.addIntersection(i, a, l, g);
        } }], [{ key: "constructor_", value: function() {
          if (this.pts = null, this._env = null, this.eiList = new _m(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new bc(), this._depthDelta = 0, arguments.length === 1) {
            var i = arguments[0];
            n.constructor_.call(this, i, null);
          } else if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            this.pts = a, this._label = l;
          }
        } }, { key: "updateIM", value: function() {
          if (!(arguments.length === 2 && arguments[1] instanceof Em && arguments[0] instanceof Jt)) return S(n, "updateIM", this).apply(this, arguments);
          var i = arguments[0], a = arguments[1];
          a.setAtLeastIfValid(i.getLocation(0, ne.ON), i.getLocation(1, ne.ON), 1), i.isArea() && (a.setAtLeastIfValid(i.getLocation(0, ne.LEFT), i.getLocation(1, ne.LEFT), 2), a.setAtLeastIfValid(i.getLocation(0, ne.RIGHT), i.getLocation(1, ne.RIGHT), 2));
        } }]);
      })(uc), Tc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "setWorkingPrecisionModel", value: function(n) {
          this._workingPrecisionModel = n;
        } }, { key: "insertUniqueEdge", value: function(n) {
          var i = this._edgeList.findEqualEdge(n);
          if (i !== null) {
            var a = i.getLabel(), l = n.getLabel();
            i.isPointwiseEqual(n) || (l = new Jt(n.getLabel())).flip(), a.merge(l);
            var g = o.depthDelta(l), m = i.getDepthDelta() + g;
            i.setDepthDelta(m);
          } else this._edgeList.add(n), n.setDepthDelta(o.depthDelta(n.getLabel()));
        } }, { key: "buildSubgraphs", value: function(n, i) {
          for (var a = new de(), l = n.iterator(); l.hasNext(); ) {
            var g = l.next(), m = g.getRightmostCoordinate(), y = new wc(a).getDepth(m);
            g.computeDepth(y), g.findResultEdges(), a.add(g), i.add(g.getDirectedEdges(), g.getNodes());
          }
        } }, { key: "createSubgraphs", value: function(n) {
          for (var i = new de(), a = n.getNodes().iterator(); a.hasNext(); ) {
            var l = a.next();
            if (!l.isVisited()) {
              var g = new is();
              g.create(l), i.add(g);
            }
          }
          return yi.sort(i, yi.reverseOrder()), i;
        } }, { key: "createEmptyResultGeometry", value: function() {
          return this._geomFact.createPolygon();
        } }, { key: "getNoder", value: function(n) {
          if (this._workingNoder !== null) return this._workingNoder;
          var i = new Uo(), a = new zr();
          return a.setPrecisionModel(n), i.setSegmentIntersector(new vm(a)), i;
        } }, { key: "buffer", value: function(n, i) {
          var a = this._workingPrecisionModel;
          a === null && (a = n.getPrecisionModel()), this._geomFact = n.getFactory();
          var l = new om(a, this._bufParams), g = new lm(n, i, l).getCurves();
          if (g.size() <= 0) return this.createEmptyResultGeometry();
          this.computeNodedEdges(g, a), this._graph = new dc(new pm()), this._graph.addEdges(this._edgeList.getEdges());
          var m = this.createSubgraphs(this._graph), y = new Xp(this._geomFact);
          this.buildSubgraphs(m, y);
          var k = y.getPolygons();
          return k.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(k);
        } }, { key: "computeNodedEdges", value: function(n, i) {
          var a = this.getNoder(i);
          a.computeNodes(n);
          for (var l = a.getNodedSubstrings().iterator(); l.hasNext(); ) {
            var g = l.next(), m = g.getCoordinates();
            if (m.length !== 2 || !m[0].equals2D(m[1])) {
              var y = g.getData(), k = new Lc(g.getCoordinates(), new Jt(y));
              this.insertUniqueEdge(k);
            }
          }
        } }, { key: "setNoder", value: function(n) {
          this._workingNoder = n;
        } }], [{ key: "constructor_", value: function() {
          this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new mm();
          var n = arguments[0];
          this._bufParams = n;
        } }, { key: "depthDelta", value: function(n) {
          var i = n.getLocation(0, ne.LEFT), a = n.getLocation(0, ne.RIGHT);
          return i === N.INTERIOR && a === N.EXTERIOR ? 1 : i === N.EXTERIOR && a === N.INTERIOR ? -1 : 0;
        } }, { key: "convertSegStrings", value: function(n) {
          for (var i = new mi(), a = new de(); n.hasNext(); ) {
            var l = n.next(), g = i.createLineString(l.getCoordinates());
            a.add(g);
          }
          return i.buildGeometry(a);
        } }]);
      })(), Sm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "rescale", value: function() {
          if (_e(arguments[0], Ne)) for (var n = arguments[0].iterator(); n.hasNext(); ) {
            var i = n.next();
            this.rescale(i.getCoordinates());
          }
          else if (arguments[0] instanceof Array) {
            for (var a = arguments[0], l = 0; l < a.length; l++) a[l].x = a[l].x / this._scaleFactor + this._offsetX, a[l].y = a[l].y / this._scaleFactor + this._offsetY;
            a.length === 2 && a[0].equals2D(a[1]) && Pt.out.println(a);
          }
        } }, { key: "scale", value: function() {
          if (_e(arguments[0], Ne)) {
            for (var n = arguments[0], i = new de(n.size()), a = n.iterator(); a.hasNext(); ) {
              var l = a.next();
              i.add(new qr(this.scale(l.getCoordinates()), l.getData()));
            }
            return i;
          }
          if (arguments[0] instanceof Array) {
            for (var g = arguments[0], m = new Array(g.length).fill(null), y = 0; y < g.length; y++) m[y] = new $(Math.round((g[y].x - this._offsetX) * this._scaleFactor), Math.round((g[y].y - this._offsetY) * this._scaleFactor), g[y].getZ());
            return Q.removeRepeatedPoints(m);
          }
        } }, { key: "isIntegerPrecision", value: function() {
          return this._scaleFactor === 1;
        } }, { key: "getNodedSubstrings", value: function() {
          var n = this._noder.getNodedSubstrings();
          return this._isScaled && this.rescale(n), n;
        } }, { key: "computeNodes", value: function(n) {
          var i = n;
          this._isScaled && (i = this.scale(n)), this._noder.computeNodes(i);
        } }, { key: "interfaces_", get: function() {
          return [Bo];
        } }], [{ key: "constructor_", value: function() {
          if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            o.constructor_.call(this, n, i, 0, 0);
          } else if (arguments.length === 4) {
            var a = arguments[0], l = arguments[1];
            this._noder = a, this._scaleFactor = l, this._isScaled = !this.isIntegerPrecision();
          }
        } }]);
      })(), Ac = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "checkEndPtVertexIntersections", value: function() {
          if (arguments.length === 0) for (var n = this._segStrings.iterator(); n.hasNext(); ) {
            var i = n.next().getCoordinates();
            this.checkEndPtVertexIntersections(i[0], this._segStrings), this.checkEndPtVertexIntersections(i[i.length - 1], this._segStrings);
          }
          else if (arguments.length === 2) {
            for (var a = arguments[0], l = arguments[1].iterator(); l.hasNext(); ) for (var g = l.next().getCoordinates(), m = 1; m < g.length - 1; m++) if (g[m].equals(a)) throw new pe("found endpt/interior pt intersection at index " + m + " :pt " + a);
          }
        } }, { key: "checkInteriorIntersections", value: function() {
          if (arguments.length === 0) for (var n = this._segStrings.iterator(); n.hasNext(); ) for (var i = n.next(), a = this._segStrings.iterator(); a.hasNext(); ) {
            var l = a.next();
            this.checkInteriorIntersections(i, l);
          }
          else if (arguments.length === 2) for (var g = arguments[0], m = arguments[1], y = g.getCoordinates(), k = m.getCoordinates(), L = 0; L < y.length - 1; L++) for (var q = 0; q < k.length - 1; q++) this.checkInteriorIntersections(g, L, m, q);
          else if (arguments.length === 4) {
            var V = arguments[0], ee = arguments[1], ue = arguments[2], fe = arguments[3];
            if (V === ue && ee === fe) return null;
            var me = V.getCoordinates()[ee], Ae = V.getCoordinates()[ee + 1], Te = ue.getCoordinates()[fe], Fe = ue.getCoordinates()[fe + 1];
            if (this._li.computeIntersection(me, Ae, Te, Fe), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, me, Ae) || this.hasInteriorIntersection(this._li, Te, Fe))) throw new pe("found non-noded intersection at " + me + "-" + Ae + " and " + Te + "-" + Fe);
          }
        } }, { key: "checkValid", value: function() {
          this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
        } }, { key: "checkCollapses", value: function() {
          if (arguments.length === 0) for (var n = this._segStrings.iterator(); n.hasNext(); ) {
            var i = n.next();
            this.checkCollapses(i);
          }
          else if (arguments.length === 1) for (var a = arguments[0].getCoordinates(), l = 0; l < a.length - 2; l++) this.checkCollapse(a[l], a[l + 1], a[l + 2]);
        } }, { key: "hasInteriorIntersection", value: function(n, i, a) {
          for (var l = 0; l < n.getIntersectionNum(); l++) {
            var g = n.getIntersection(l);
            if (!g.equals(i) && !g.equals(a)) return !0;
          }
          return !1;
        } }, { key: "checkCollapse", value: function(n, i, a) {
          if (n.equals(a)) throw new pe("found non-noded collapse at " + o.fact.createLineString([n, i, a]));
        } }], [{ key: "constructor_", value: function() {
          this._li = new zr(), this._segStrings = null;
          var n = arguments[0];
          this._segStrings = n;
        } }]);
      })();
      Ac.fact = new mi();
      var qo = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "intersectsScaled", value: function(n, i) {
          var a = Math.min(n.x, i.x), l = Math.max(n.x, i.x), g = Math.min(n.y, i.y), m = Math.max(n.y, i.y), y = this._maxx < a || this._minx > l || this._maxy < g || this._miny > m;
          if (y) return !1;
          var k = this.intersectsToleranceSquare(n, i);
          return ae.isTrue(!(y && k), "Found bad envelope test"), k;
        } }, { key: "initCorners", value: function(n) {
          var i = 0.5;
          this._minx = n.x - i, this._maxx = n.x + i, this._miny = n.y - i, this._maxy = n.y + i, this._corner[0] = new $(this._maxx, this._maxy), this._corner[1] = new $(this._minx, this._maxy), this._corner[2] = new $(this._minx, this._miny), this._corner[3] = new $(this._maxx, this._miny);
        } }, { key: "intersects", value: function(n, i) {
          return this._scaleFactor === 1 ? this.intersectsScaled(n, i) : (this.copyScaled(n, this._p0Scaled), this.copyScaled(i, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
        } }, { key: "scale", value: function(n) {
          return Math.round(n * this._scaleFactor);
        } }, { key: "getCoordinate", value: function() {
          return this._originalPt;
        } }, { key: "copyScaled", value: function(n, i) {
          i.x = this.scale(n.x), i.y = this.scale(n.y);
        } }, { key: "getSafeEnvelope", value: function() {
          if (this._safeEnv === null) {
            var n = o.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
            this._safeEnv = new Le(this._originalPt.x - n, this._originalPt.x + n, this._originalPt.y - n, this._originalPt.y + n);
          }
          return this._safeEnv;
        } }, { key: "intersectsPixelClosure", value: function(n, i) {
          return this._li.computeIntersection(n, i, this._corner[0], this._corner[1]), !!this._li.hasIntersection() || (this._li.computeIntersection(n, i, this._corner[1], this._corner[2]), !!this._li.hasIntersection() || (this._li.computeIntersection(n, i, this._corner[2], this._corner[3]), !!this._li.hasIntersection() || (this._li.computeIntersection(n, i, this._corner[3], this._corner[0]), !!this._li.hasIntersection())));
        } }, { key: "intersectsToleranceSquare", value: function(n, i) {
          var a = !1, l = !1;
          return this._li.computeIntersection(n, i, this._corner[0], this._corner[1]), !!this._li.isProper() || (this._li.computeIntersection(n, i, this._corner[1], this._corner[2]), !!this._li.isProper() || (this._li.hasIntersection() && (a = !0), this._li.computeIntersection(n, i, this._corner[2], this._corner[3]), !!this._li.isProper() || (this._li.hasIntersection() && (l = !0), this._li.computeIntersection(n, i, this._corner[3], this._corner[0]), !!this._li.isProper() || !(!a || !l) || !!n.equals(this._pt) || !!i.equals(this._pt))));
        } }, { key: "addSnappedNode", value: function(n, i) {
          var a = n.getCoordinate(i), l = n.getCoordinate(i + 1);
          return !!this.intersects(a, l) && (n.addIntersection(this.getCoordinate(), i), !0);
        } }], [{ key: "constructor_", value: function() {
          this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
          var n = arguments[0], i = arguments[1], a = arguments[2];
          if (this._originalPt = n, this._pt = n, this._scaleFactor = i, this._li = a, i <= 0) throw new J("Scale factor must be non-zero");
          i !== 1 && (this._pt = new $(this.scale(n.x), this.scale(n.y)), this._p0Scaled = new $(), this._p1Scaled = new $()), this.initCorners(this._pt);
        } }]);
      })();
      qo.SAFE_ENV_EXPANSION_FACTOR = 0.75;
      var Mm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "select", value: function() {
          if (arguments.length !== 1) {
            if (arguments.length === 2) {
              var o = arguments[1];
              arguments[0].getLineSegment(o, this.selectedSegment), this.select(this.selectedSegment);
            }
          }
        } }], [{ key: "constructor_", value: function() {
          this.selectedSegment = new Gt();
        } }]);
      })(), Cc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "snap", value: function() {
          if (arguments.length === 1) {
            var o = arguments[0];
            return this.snap(o, null, -1);
          }
          if (arguments.length === 3) {
            var n = arguments[0], i = arguments[1], a = arguments[2], l = n.getSafeEnvelope(), g = new Nc(n, i, a);
            return this._index.query(l, new ((function() {
              return h((function m() {
                u(this, m);
              }), [{ key: "interfaces_", get: function() {
                return [mc];
              } }, { key: "visitItem", value: function(m) {
                m.select(l, g);
              } }]);
            })())()), g.isNodeAdded();
          }
        } }], [{ key: "constructor_", value: function() {
          this._index = null;
          var o = arguments[0];
          this._index = o;
        } }]);
      })(), Nc = (function(o) {
        function n() {
          var i;
          return u(this, n), i = s(this, n), n.constructor_.apply(i, arguments), i;
        }
        return _(n, o), h(n, [{ key: "isNodeAdded", value: function() {
          return this._isNodeAdded;
        } }, { key: "select", value: function() {
          if (!(arguments.length === 2 && Number.isInteger(arguments[1]) && arguments[0] instanceof yc)) return S(n, "select", this, 1).apply(this, arguments);
          var i = arguments[1], a = arguments[0].getContext();
          if (this._parentEdge === a && (i === this._hotPixelVertexIndex || i + 1 === this._hotPixelVertexIndex)) return null;
          this._isNodeAdded |= this._hotPixel.addSnappedNode(a, i);
        } }], [{ key: "constructor_", value: function() {
          this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
          var i = arguments[0], a = arguments[1], l = arguments[2];
          this._hotPixel = i, this._parentEdge = a, this._hotPixelVertexIndex = l;
        } }]);
      })(Mm);
      Cc.HotPixelSnapAction = Nc;
      var Im = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "processIntersections", value: function(o, n, i, a) {
          if (o === i && n === a) return null;
          var l = o.getCoordinates()[n], g = o.getCoordinates()[n + 1], m = i.getCoordinates()[a], y = i.getCoordinates()[a + 1];
          if (this._li.computeIntersection(l, g, m, y), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
            for (var k = 0; k < this._li.getIntersectionNum(); k++) this._interiorIntersections.add(this._li.getIntersection(k));
            o.addIntersections(this._li, n, 0), i.addIntersections(this._li, a, 1);
          }
        } }, { key: "isDone", value: function() {
          return !1;
        } }, { key: "getInteriorIntersections", value: function() {
          return this._interiorIntersections;
        } }, { key: "interfaces_", get: function() {
          return [Ic];
        } }], [{ key: "constructor_", value: function() {
          this._li = null, this._interiorIntersections = null;
          var o = arguments[0];
          this._li = o, this._interiorIntersections = new de();
        } }]);
      })(), bm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "checkCorrectness", value: function(o) {
          var n = qr.getNodedSubstrings(o), i = new Ac(n);
          try {
            i.checkValid();
          } catch (a) {
            if (!(a instanceof X)) throw a;
            a.printStackTrace();
          }
        } }, { key: "getNodedSubstrings", value: function() {
          return qr.getNodedSubstrings(this._nodedSegStrings);
        } }, { key: "snapRound", value: function(o, n) {
          var i = this.findInteriorIntersections(o, n);
          this.computeIntersectionSnaps(i), this.computeVertexSnaps(o);
        } }, { key: "findInteriorIntersections", value: function(o, n) {
          var i = new Im(n);
          return this._noder.setSegmentIntersector(i), this._noder.computeNodes(o), i.getInteriorIntersections();
        } }, { key: "computeVertexSnaps", value: function() {
          if (_e(arguments[0], Ne)) for (var o = arguments[0].iterator(); o.hasNext(); ) {
            var n = o.next();
            this.computeVertexSnaps(n);
          }
          else if (arguments[0] instanceof qr) for (var i = arguments[0], a = i.getCoordinates(), l = 0; l < a.length; l++) {
            var g = new qo(a[l], this._scaleFactor, this._li);
            this._pointSnapper.snap(g, i, l) && i.addIntersection(a[l], l);
          }
        } }, { key: "computeNodes", value: function(o) {
          this._nodedSegStrings = o, this._noder = new Uo(), this._pointSnapper = new Cc(this._noder.getIndex()), this.snapRound(o, this._li);
        } }, { key: "computeIntersectionSnaps", value: function(o) {
          for (var n = o.iterator(); n.hasNext(); ) {
            var i = n.next(), a = new qo(i, this._scaleFactor, this._li);
            this._pointSnapper.snap(a);
          }
        } }, { key: "interfaces_", get: function() {
          return [Bo];
        } }], [{ key: "constructor_", value: function() {
          this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
          var o = arguments[0];
          this._pm = o, this._li = new zr(), this._li.setPrecisionModel(o), this._scaleFactor = o.getScale();
        } }]);
      })(), xi = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "bufferFixedPrecision", value: function(n) {
          var i = new Sm(new bm(new Re(1)), n.getScale()), a = new Tc(this._bufParams);
          a.setWorkingPrecisionModel(n), a.setNoder(i), this._resultGeometry = a.buffer(this._argGeom, this._distance);
        } }, { key: "bufferReducedPrecision", value: function() {
          if (arguments.length === 0) {
            for (var n = o.MAX_PRECISION_DIGITS; n >= 0; n--) {
              try {
                this.bufferReducedPrecision(n);
              } catch (g) {
                if (!(g instanceof Nt)) throw g;
                this._saveException = g;
              }
              if (this._resultGeometry !== null) return null;
            }
            throw this._saveException;
          }
          if (arguments.length === 1) {
            var i = arguments[0], a = o.precisionScaleFactor(this._argGeom, this._distance, i), l = new Re(a);
            this.bufferFixedPrecision(l);
          }
        } }, { key: "computeGeometry", value: function() {
          if (this.bufferOriginalPrecision(), this._resultGeometry !== null) return null;
          var n = this._argGeom.getFactory().getPrecisionModel();
          n.getType() === Re.FIXED ? this.bufferFixedPrecision(n) : this.bufferReducedPrecision();
        } }, { key: "setQuadrantSegments", value: function(n) {
          this._bufParams.setQuadrantSegments(n);
        } }, { key: "bufferOriginalPrecision", value: function() {
          try {
            var n = new Tc(this._bufParams);
            this._resultGeometry = n.buffer(this._argGeom, this._distance);
          } catch (i) {
            if (!(i instanceof pe)) throw i;
            this._saveException = i;
          }
        } }, { key: "getResultGeometry", value: function(n) {
          return this._distance = n, this.computeGeometry(), this._resultGeometry;
        } }, { key: "setEndCapStyle", value: function(n) {
          this._bufParams.setEndCapStyle(n);
        } }], [{ key: "constructor_", value: function() {
          if (this._argGeom = null, this._distance = null, this._bufParams = new H(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
            var n = arguments[0];
            this._argGeom = n;
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this._argGeom = i, this._bufParams = a;
          }
        } }, { key: "bufferOp", value: function() {
          if (arguments.length === 2) {
            var n = arguments[1];
            return new o(arguments[0]).getResultGeometry(n);
          }
          if (arguments.length === 3) {
            if (Number.isInteger(arguments[2]) && arguments[0] instanceof ce && typeof arguments[1] == "number") {
              var i = arguments[1], a = arguments[2], l = new o(arguments[0]);
              return l.setQuadrantSegments(a), l.getResultGeometry(i);
            }
            if (arguments[2] instanceof H && arguments[0] instanceof ce && typeof arguments[1] == "number") {
              var g = arguments[1];
              return new o(arguments[0], arguments[2]).getResultGeometry(g);
            }
          } else if (arguments.length === 4) {
            var m = arguments[1], y = arguments[2], k = arguments[3], L = new o(arguments[0]);
            return L.setQuadrantSegments(y), L.setEndCapStyle(k), L.getResultGeometry(m);
          }
        } }, { key: "precisionScaleFactor", value: function(n, i, a) {
          var l = n.getEnvelopeInternal(), g = Tn.max(Math.abs(l.getMaxX()), Math.abs(l.getMaxY()), Math.abs(l.getMinX()), Math.abs(l.getMinY())) + 2 * (i > 0 ? i : 0), m = a - Math.trunc(Math.log(g) / Math.log(10) + 1);
          return Math.pow(10, m);
        } }]);
      })();
      xi.CAP_ROUND = H.CAP_ROUND, xi.CAP_BUTT = H.CAP_FLAT, xi.CAP_FLAT = H.CAP_FLAT, xi.CAP_SQUARE = H.CAP_SQUARE, xi.MAX_PRECISION_DIGITS = 12;
      var Lm = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], Pc = (function() {
        return h((function o(n) {
          u(this, o), this.geometryFactory = n || new mi();
        }), [{ key: "read", value: function(o) {
          var n, i = (n = typeof o == "string" ? JSON.parse(o) : o).type;
          if (!Vt[i]) throw new Error("Unknown GeoJSON type: " + n.type);
          return Lm.indexOf(i) !== -1 ? Vt[i].call(this, n.coordinates) : i === "GeometryCollection" ? Vt[i].call(this, n.geometries) : Vt[i].call(this, n);
        } }, { key: "write", value: function(o) {
          var n = o.getGeometryType();
          if (!Dn[n]) throw new Error("Geometry is not supported");
          return Dn[n].call(this, o);
        } }]);
      })(), Vt = { Feature: function(o) {
        var n = {};
        for (var i in o) n[i] = o[i];
        if (o.geometry) {
          var a = o.geometry.type;
          if (!Vt[a]) throw new Error("Unknown GeoJSON type: " + o.type);
          n.geometry = this.read(o.geometry);
        }
        return o.bbox && (n.bbox = Vt.bbox.call(this, o.bbox)), n;
      }, FeatureCollection: function(o) {
        var n = {};
        if (o.features) {
          n.features = [];
          for (var i = 0; i < o.features.length; ++i) n.features.push(this.read(o.features[i]));
        }
        return o.bbox && (n.bbox = this.parse.bbox.call(this, o.bbox)), n;
      }, coordinates: function(o) {
        for (var n = [], i = 0; i < o.length; ++i) {
          var a = o[i];
          n.push(c($, C(a)));
        }
        return n;
      }, bbox: function(o) {
        return this.geometryFactory.createLinearRing([new $(o[0], o[1]), new $(o[2], o[1]), new $(o[2], o[3]), new $(o[0], o[3]), new $(o[0], o[1])]);
      }, Point: function(o) {
        var n = c($, C(o));
        return this.geometryFactory.createPoint(n);
      }, MultiPoint: function(o) {
        for (var n = [], i = 0; i < o.length; ++i) n.push(Vt.Point.call(this, o[i]));
        return this.geometryFactory.createMultiPoint(n);
      }, LineString: function(o) {
        var n = Vt.coordinates.call(this, o);
        return this.geometryFactory.createLineString(n);
      }, MultiLineString: function(o) {
        for (var n = [], i = 0; i < o.length; ++i) n.push(Vt.LineString.call(this, o[i]));
        return this.geometryFactory.createMultiLineString(n);
      }, Polygon: function(o) {
        for (var n = Vt.coordinates.call(this, o[0]), i = this.geometryFactory.createLinearRing(n), a = [], l = 1; l < o.length; ++l) {
          var g = o[l], m = Vt.coordinates.call(this, g), y = this.geometryFactory.createLinearRing(m);
          a.push(y);
        }
        return this.geometryFactory.createPolygon(i, a);
      }, MultiPolygon: function(o) {
        for (var n = [], i = 0; i < o.length; ++i) {
          var a = o[i];
          n.push(Vt.Polygon.call(this, a));
        }
        return this.geometryFactory.createMultiPolygon(n);
      }, GeometryCollection: function(o) {
        for (var n = [], i = 0; i < o.length; ++i) {
          var a = o[i];
          n.push(this.read(a));
        }
        return this.geometryFactory.createGeometryCollection(n);
      } }, Dn = { coordinate: function(o) {
        var n = [o.x, o.y];
        return o.z && n.push(o.z), o.m && n.push(o.m), n;
      }, Point: function(o) {
        return { type: "Point", coordinates: Dn.coordinate.call(this, o.getCoordinate()) };
      }, MultiPoint: function(o) {
        for (var n = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], l = Dn.Point.call(this, a);
          n.push(l.coordinates);
        }
        return { type: "MultiPoint", coordinates: n };
      }, LineString: function(o) {
        for (var n = [], i = o.getCoordinates(), a = 0; a < i.length; ++a) {
          var l = i[a];
          n.push(Dn.coordinate.call(this, l));
        }
        return { type: "LineString", coordinates: n };
      }, MultiLineString: function(o) {
        for (var n = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], l = Dn.LineString.call(this, a);
          n.push(l.coordinates);
        }
        return { type: "MultiLineString", coordinates: n };
      }, Polygon: function(o) {
        var n = [], i = Dn.LineString.call(this, o._shell);
        n.push(i.coordinates);
        for (var a = 0; a < o._holes.length; ++a) {
          var l = o._holes[a], g = Dn.LineString.call(this, l);
          n.push(g.coordinates);
        }
        return { type: "Polygon", coordinates: n };
      }, MultiPolygon: function(o) {
        for (var n = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], l = Dn.Polygon.call(this, a);
          n.push(l.coordinates);
        }
        return { type: "MultiPolygon", coordinates: n };
      }, GeometryCollection: function(o) {
        for (var n = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], l = a.getGeometryType();
          n.push(Dn[l].call(this, a));
        }
        return { type: "GeometryCollection", geometries: n };
      } };
      return { BufferOp: xi, GeoJSONReader: (function() {
        return h((function o(n) {
          u(this, o), this.parser = new Pc(n || new mi());
        }), [{ key: "read", value: function(o) {
          return this.parser.read(o);
        } }]);
      })(), GeoJSONWriter: (function() {
        return h((function o() {
          u(this, o), this.parser = new Pc(this.geometryFactory);
        }), [{ key: "write", value: function(o) {
          return this.parser.write(o);
        } }]);
      })() };
    }));
  })(Ua)), Ua.exports;
}
var Y2 = q2();
const H2 = /* @__PURE__ */ Ig(Y2);
function Rr() {
  return new io();
}
function io() {
  this.reset();
}
io.prototype = {
  constructor: io,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(t) {
    lf(Sa, t, this.t), lf(this, Sa.s, this.s), this.s ? this.t += Sa.t : this.s = Sa.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var Sa = new io();
function lf(t, e, r) {
  var s = t.s = e + r, u = s - e, c = s - u;
  t.t = e - c + (r - u);
}
var Ye = 1e-6, Pe = Math.PI, qn = Pe / 2, cf = Pe / 4, Xn = Pe * 2, _r = 180 / Pe, en = Pe / 180, lt = Math.abs, J2 = Math.atan, Ji = Math.atan2, Xe = Math.cos, We = Math.sin, ns = Math.sqrt;
function sp(t) {
  return t > 1 ? 0 : t < -1 ? Pe : Math.acos(t);
}
function ni(t) {
  return t > 1 ? qn : t < -1 ? -qn : Math.asin(t);
}
function Is() {
}
function so(t, e) {
  t && ff.hasOwnProperty(t.type) && ff[t.type](t, e);
}
var hf = {
  Feature: function(t, e) {
    so(t.geometry, e);
  },
  FeatureCollection: function(t, e) {
    for (var r = t.features, s = -1, u = r.length; ++s < u; ) so(r[s].geometry, e);
  }
}, ff = {
  Sphere: function(t, e) {
    e.sphere();
  },
  Point: function(t, e) {
    t = t.coordinates, e.point(t[0], t[1], t[2]);
  },
  MultiPoint: function(t, e) {
    for (var r = t.coordinates, s = -1, u = r.length; ++s < u; ) t = r[s], e.point(t[0], t[1], t[2]);
  },
  LineString: function(t, e) {
    Wu(t.coordinates, e, 0);
  },
  MultiLineString: function(t, e) {
    for (var r = t.coordinates, s = -1, u = r.length; ++s < u; ) Wu(r[s], e, 0);
  },
  Polygon: function(t, e) {
    gf(t.coordinates, e);
  },
  MultiPolygon: function(t, e) {
    for (var r = t.coordinates, s = -1, u = r.length; ++s < u; ) gf(r[s], e);
  },
  GeometryCollection: function(t, e) {
    for (var r = t.geometries, s = -1, u = r.length; ++s < u; ) so(r[s], e);
  }
};
function Wu(t, e, r) {
  var s = -1, u = t.length - r, c;
  for (e.lineStart(); ++s < u; ) c = t[s], e.point(c[0], c[1], c[2]);
  e.lineEnd();
}
function gf(t, e) {
  var r = -1, s = t.length;
  for (e.polygonStart(); ++r < s; ) Wu(t[r], e, 1);
  e.polygonEnd();
}
function $2(t, e) {
  t && hf.hasOwnProperty(t.type) ? hf[t.type](t, e) : so(t, e);
}
Rr();
Rr();
function ju(t) {
  return [Ji(t[1], t[0]), ni(t[2])];
}
function $i(t) {
  var e = t[0], r = t[1], s = Xe(r);
  return [s * Xe(e), s * We(e), We(r)];
}
function Ma(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
}
function ao(t, e) {
  return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
}
function du(t, e) {
  t[0] += e[0], t[1] += e[1], t[2] += e[2];
}
function Ia(t, e) {
  return [t[0] * e, t[1] * e, t[2] * e];
}
function Zu(t) {
  var e = ns(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
  t[0] /= e, t[1] /= e, t[2] /= e;
}
Rr();
function ap(t, e) {
  function r(s, u) {
    return s = t(s, u), e(s[0], s[1]);
  }
  return t.invert && e.invert && (r.invert = function(s, u) {
    return s = e.invert(s, u), s && t.invert(s[0], s[1]);
  }), r;
}
function Ku(t, e) {
  return [t > Pe ? t - Xn : t < -Pe ? t + Xn : t, e];
}
Ku.invert = Ku;
function V2(t, e, r) {
  return (t %= Xn) ? e || r ? ap(pf(t), mf(e, r)) : pf(t) : e || r ? mf(e, r) : Ku;
}
function df(t) {
  return function(e, r) {
    return e += t, [e > Pe ? e - Xn : e < -Pe ? e + Xn : e, r];
  };
}
function pf(t) {
  var e = df(t);
  return e.invert = df(-t), e;
}
function mf(t, e) {
  var r = Xe(t), s = We(t), u = Xe(e), c = We(e);
  function f(h, p) {
    var d = Xe(p), v = Xe(h) * d, _ = We(h) * d, x = We(p), M = x * r + v * s;
    return [
      Ji(_ * u - M * c, v * r - x * s),
      ni(M * u + _ * c)
    ];
  }
  return f.invert = function(h, p) {
    var d = Xe(p), v = Xe(h) * d, _ = We(h) * d, x = We(p), M = x * u - _ * c;
    return [
      Ji(_ * u + x * c, v * r + M * s),
      ni(M * r - v * s)
    ];
  }, f;
}
function X2(t, e, r, s, u, c) {
  if (r) {
    var f = Xe(e), h = We(e), p = s * r;
    u == null ? (u = e + s * Xn, c = e - p / 2) : (u = vf(f, u), c = vf(f, c), (s > 0 ? u < c : u > c) && (u += s * Xn));
    for (var d, v = u; s > 0 ? v > c : v < c; v -= p)
      d = ju([f, -h * Xe(v), -h * We(v)]), t.point(d[0], d[1]);
  }
}
function vf(t, e) {
  e = $i(e), e[0] -= t, Zu(e);
  var r = sp(-e[1]);
  return ((-e[2] < 0 ? -r : r) + Xn - Ye) % Xn;
}
function op() {
  var t = [], e;
  return {
    point: function(r, s) {
      e.push([r, s]);
    },
    lineStart: function() {
      t.push(e = []);
    },
    lineEnd: Is,
    rejoin: function() {
      t.length > 1 && t.push(t.pop().concat(t.shift()));
    },
    result: function() {
      var r = t;
      return t = [], e = null, r;
    }
  };
}
function W2(t, e, r, s, u, c) {
  var f = t[0], h = t[1], p = e[0], d = e[1], v = 0, _ = 1, x = p - f, M = d - h, S;
  if (S = r - f, !(!x && S > 0)) {
    if (S /= x, x < 0) {
      if (S < v) return;
      S < _ && (_ = S);
    } else if (x > 0) {
      if (S > _) return;
      S > v && (v = S);
    }
    if (S = u - f, !(!x && S < 0)) {
      if (S /= x, x < 0) {
        if (S > _) return;
        S > v && (v = S);
      } else if (x > 0) {
        if (S < v) return;
        S < _ && (_ = S);
      }
      if (S = s - h, !(!M && S > 0)) {
        if (S /= M, M < 0) {
          if (S < v) return;
          S < _ && (_ = S);
        } else if (M > 0) {
          if (S > _) return;
          S > v && (v = S);
        }
        if (S = c - h, !(!M && S < 0)) {
          if (S /= M, M < 0) {
            if (S > _) return;
            S > v && (v = S);
          } else if (M > 0) {
            if (S < v) return;
            S < _ && (_ = S);
          }
          return v > 0 && (t[0] = f + v * x, t[1] = h + v * M), _ < 1 && (e[0] = f + _ * x, e[1] = h + _ * M), !0;
        }
      }
    }
  }
}
function za(t, e) {
  return lt(t[0] - e[0]) < Ye && lt(t[1] - e[1]) < Ye;
}
function ba(t, e, r, s) {
  this.x = t, this.z = e, this.o = r, this.e = s, this.v = !1, this.n = this.p = null;
}
function up(t, e, r, s, u) {
  var c = [], f = [], h, p;
  if (t.forEach(function(S) {
    if (!((C = S.length - 1) <= 0)) {
      var C, F = S[0], O = S[C], I;
      if (za(F, O)) {
        for (u.lineStart(), h = 0; h < C; ++h) u.point((F = S[h])[0], F[1]);
        u.lineEnd();
        return;
      }
      c.push(I = new ba(F, S, null, !0)), f.push(I.o = new ba(F, null, I, !1)), c.push(I = new ba(O, S, null, !1)), f.push(I.o = new ba(O, null, I, !0));
    }
  }), !!c.length) {
    for (f.sort(e), yf(c), yf(f), h = 0, p = f.length; h < p; ++h)
      f[h].e = r = !r;
    for (var d = c[0], v, _; ; ) {
      for (var x = d, M = !0; x.v; ) if ((x = x.n) === d) return;
      v = x.z, u.lineStart();
      do {
        if (x.v = x.o.v = !0, x.e) {
          if (M)
            for (h = 0, p = v.length; h < p; ++h) u.point((_ = v[h])[0], _[1]);
          else
            s(x.x, x.n.x, 1, u);
          x = x.n;
        } else {
          if (M)
            for (v = x.p.z, h = v.length - 1; h >= 0; --h) u.point((_ = v[h])[0], _[1]);
          else
            s(x.x, x.p.x, -1, u);
          x = x.p;
        }
        x = x.o, v = x.z, M = !M;
      } while (!x.v);
      u.lineEnd();
    }
  }
}
function yf(t) {
  if (e = t.length) {
    for (var e, r = 0, s = t[0], u; ++r < e; )
      s.n = u = t[r], u.p = s, s = u;
    s.n = u = t[0], u.p = s;
  }
}
function lp(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function j2(t) {
  return t.length === 1 && (t = Z2(t)), {
    left: function(e, r, s, u) {
      for (s == null && (s = 0), u == null && (u = e.length); s < u; ) {
        var c = s + u >>> 1;
        t(e[c], r) < 0 ? s = c + 1 : u = c;
      }
      return s;
    },
    right: function(e, r, s, u) {
      for (s == null && (s = 0), u == null && (u = e.length); s < u; ) {
        var c = s + u >>> 1;
        t(e[c], r) > 0 ? u = c : s = c + 1;
      }
      return s;
    }
  };
}
function Z2(t) {
  return function(e, r) {
    return lp(t(e), r);
  };
}
j2(lp);
function cp(t) {
  for (var e = t.length, r, s = -1, u = 0, c, f; ++s < e; ) u += t[s].length;
  for (c = new Array(u); --e >= 0; )
    for (f = t[e], r = f.length; --r >= 0; )
      c[--u] = f[r];
  return c;
}
var bs = 1e9, La = -bs;
function K2(t, e, r, s) {
  function u(d, v) {
    return t <= d && d <= r && e <= v && v <= s;
  }
  function c(d, v, _, x) {
    var M = 0, S = 0;
    if (d == null || (M = f(d, _)) !== (S = f(v, _)) || p(d, v) < 0 ^ _ > 0)
      do
        x.point(M === 0 || M === 3 ? t : r, M > 1 ? s : e);
      while ((M = (M + _ + 4) % 4) !== S);
    else
      x.point(v[0], v[1]);
  }
  function f(d, v) {
    return lt(d[0] - t) < Ye ? v > 0 ? 0 : 3 : lt(d[0] - r) < Ye ? v > 0 ? 2 : 1 : lt(d[1] - e) < Ye ? v > 0 ? 1 : 0 : v > 0 ? 3 : 2;
  }
  function h(d, v) {
    return p(d.x, v.x);
  }
  function p(d, v) {
    var _ = f(d, 1), x = f(v, 1);
    return _ !== x ? _ - x : _ === 0 ? v[1] - d[1] : _ === 1 ? d[0] - v[0] : _ === 2 ? d[1] - v[1] : v[0] - d[0];
  }
  return function(d) {
    var v = d, _ = op(), x, M, S, C, F, O, I, H, X, J, U, W = {
      point: E,
      lineStart: A,
      lineEnd: G,
      polygonStart: b,
      polygonEnd: T
    };
    function E(P, D) {
      u(P, D) && v.point(P, D);
    }
    function w() {
      for (var P = 0, D = 0, Y = M.length; D < Y; ++D)
        for (var z = M[D], j = 1, Z = z.length, re = z[0], pe, le, ae = re[0], oe = re[1]; j < Z; ++j)
          pe = ae, le = oe, re = z[j], ae = re[0], oe = re[1], le <= s ? oe > s && (ae - pe) * (s - le) > (oe - le) * (t - pe) && ++P : oe <= s && (ae - pe) * (s - le) < (oe - le) * (t - pe) && --P;
      return P;
    }
    function b() {
      v = _, x = [], M = [], U = !0;
    }
    function T() {
      var P = w(), D = U && P, Y = (x = cp(x)).length;
      (D || Y) && (d.polygonStart(), D && (d.lineStart(), c(null, null, 1, d), d.lineEnd()), Y && up(x, h, P, c, d), d.polygonEnd()), v = d, x = M = S = null;
    }
    function A() {
      W.point = R, M && M.push(S = []), J = !0, X = !1, I = H = NaN;
    }
    function G() {
      x && (R(C, F), O && X && _.rejoin(), x.push(_.result())), W.point = E, X && v.lineEnd();
    }
    function R(P, D) {
      var Y = u(P, D);
      if (M && S.push([P, D]), J)
        C = P, F = D, O = Y, J = !1, Y && (v.lineStart(), v.point(P, D));
      else if (Y && X) v.point(P, D);
      else {
        var z = [I = Math.max(La, Math.min(bs, I)), H = Math.max(La, Math.min(bs, H))], j = [P = Math.max(La, Math.min(bs, P)), D = Math.max(La, Math.min(bs, D))];
        W2(z, j, t, e, r, s) ? (X || (v.lineStart(), v.point(z[0], z[1])), v.point(j[0], j[1]), Y || v.lineEnd(), U = !1) : Y && (v.lineStart(), v.point(P, D), U = !1);
      }
      I = P, H = D, X = Y;
    }
    return W;
  };
}
var pu = Rr();
function Q2(t, e) {
  var r = e[0], s = e[1], u = [We(r), -Xe(r), 0], c = 0, f = 0;
  pu.reset();
  for (var h = 0, p = t.length; h < p; ++h)
    if (v = (d = t[h]).length)
      for (var d, v, _ = d[v - 1], x = _[0], M = _[1] / 2 + cf, S = We(M), C = Xe(M), F = 0; F < v; ++F, x = I, S = X, C = J, _ = O) {
        var O = d[F], I = O[0], H = O[1] / 2 + cf, X = We(H), J = Xe(H), U = I - x, W = U >= 0 ? 1 : -1, E = W * U, w = E > Pe, b = S * X;
        if (pu.add(Ji(b * W * We(E), C * J + b * Xe(E))), c += w ? U + W * Xn : U, w ^ x >= r ^ I >= r) {
          var T = ao($i(_), $i(O));
          Zu(T);
          var A = ao(u, T);
          Zu(A);
          var G = (w ^ U >= 0 ? -1 : 1) * ni(A[2]);
          (s > G || s === G && (T[0] || T[1])) && (f += w ^ U >= 0 ? 1 : -1);
        }
      }
  return (c < -Ye || c < Ye && pu < -Ye) ^ f & 1;
}
Rr();
function _f(t) {
  return t;
}
Rr();
Rr();
var Vi = 1 / 0, oo = Vi, $s = -Vi, uo = $s, Ef = {
  point: eS,
  lineStart: Is,
  lineEnd: Is,
  polygonStart: Is,
  polygonEnd: Is,
  result: function() {
    var t = [[Vi, oo], [$s, uo]];
    return $s = uo = -(oo = Vi = 1 / 0), t;
  }
};
function eS(t, e) {
  t < Vi && (Vi = t), t > $s && ($s = t), e < oo && (oo = e), e > uo && (uo = e);
}
Rr();
function hp(t, e, r, s) {
  return function(u, c) {
    var f = e(c), h = u.invert(s[0], s[1]), p = op(), d = e(p), v = !1, _, x, M, S = {
      point: C,
      lineStart: O,
      lineEnd: I,
      polygonStart: function() {
        S.point = H, S.lineStart = X, S.lineEnd = J, x = [], _ = [];
      },
      polygonEnd: function() {
        S.point = C, S.lineStart = O, S.lineEnd = I, x = cp(x);
        var U = Q2(_, h);
        x.length ? (v || (c.polygonStart(), v = !0), up(x, nS, U, r, c)) : U && (v || (c.polygonStart(), v = !0), c.lineStart(), r(null, null, 1, c), c.lineEnd()), v && (c.polygonEnd(), v = !1), x = _ = null;
      },
      sphere: function() {
        c.polygonStart(), c.lineStart(), r(null, null, 1, c), c.lineEnd(), c.polygonEnd();
      }
    };
    function C(U, W) {
      var E = u(U, W);
      t(U = E[0], W = E[1]) && c.point(U, W);
    }
    function F(U, W) {
      var E = u(U, W);
      f.point(E[0], E[1]);
    }
    function O() {
      S.point = F, f.lineStart();
    }
    function I() {
      S.point = C, f.lineEnd();
    }
    function H(U, W) {
      M.push([U, W]);
      var E = u(U, W);
      d.point(E[0], E[1]);
    }
    function X() {
      d.lineStart(), M = [];
    }
    function J() {
      H(M[0][0], M[0][1]), d.lineEnd();
      var U = d.clean(), W = p.result(), E, w = W.length, b, T, A;
      if (M.pop(), _.push(M), M = null, !!w) {
        if (U & 1) {
          if (T = W[0], (b = T.length - 1) > 0) {
            for (v || (c.polygonStart(), v = !0), c.lineStart(), E = 0; E < b; ++E) c.point((A = T[E])[0], A[1]);
            c.lineEnd();
          }
          return;
        }
        w > 1 && U & 2 && W.push(W.pop().concat(W.shift())), x.push(W.filter(tS));
      }
    }
    return S;
  };
}
function tS(t) {
  return t.length > 1;
}
function nS(t, e) {
  return ((t = t.x)[0] < 0 ? t[1] - qn - Ye : qn - t[1]) - ((e = e.x)[0] < 0 ? e[1] - qn - Ye : qn - e[1]);
}
const xf = hp(
  function() {
    return !0;
  },
  rS,
  sS,
  [-Pe, -qn]
);
function rS(t) {
  var e = NaN, r = NaN, s = NaN, u;
  return {
    lineStart: function() {
      t.lineStart(), u = 1;
    },
    point: function(c, f) {
      var h = c > 0 ? Pe : -Pe, p = lt(c - e);
      lt(p - Pe) < Ye ? (t.point(e, r = (r + f) / 2 > 0 ? qn : -qn), t.point(s, r), t.lineEnd(), t.lineStart(), t.point(h, r), t.point(c, r), u = 0) : s !== h && p >= Pe && (lt(e - s) < Ye && (e -= s * Ye), lt(c - h) < Ye && (c -= h * Ye), r = iS(e, r, c, f), t.point(s, r), t.lineEnd(), t.lineStart(), t.point(h, r), u = 0), t.point(e = c, r = f), s = h;
    },
    lineEnd: function() {
      t.lineEnd(), e = r = NaN;
    },
    clean: function() {
      return 2 - u;
    }
  };
}
function iS(t, e, r, s) {
  var u, c, f = We(t - r);
  return lt(f) > Ye ? J2((We(e) * (c = Xe(s)) * We(r) - We(s) * (u = Xe(e)) * We(t)) / (u * c * f)) : (e + s) / 2;
}
function sS(t, e, r, s) {
  var u;
  if (t == null)
    u = r * qn, s.point(-Pe, u), s.point(0, u), s.point(Pe, u), s.point(Pe, 0), s.point(Pe, -u), s.point(0, -u), s.point(-Pe, -u), s.point(-Pe, 0), s.point(-Pe, u);
  else if (lt(t[0] - e[0]) > Ye) {
    var c = t[0] < e[0] ? Pe : -Pe;
    u = r * c / 2, s.point(-c, u), s.point(0, u), s.point(c, u);
  } else
    s.point(e[0], e[1]);
}
function aS(t, e) {
  var r = Xe(t), s = r > 0, u = lt(r) > Ye;
  function c(v, _, x, M) {
    X2(M, t, e, x, v, _);
  }
  function f(v, _) {
    return Xe(v) * Xe(_) > r;
  }
  function h(v) {
    var _, x, M, S, C;
    return {
      lineStart: function() {
        S = M = !1, C = 1;
      },
      point: function(F, O) {
        var I = [F, O], H, X = f(F, O), J = s ? X ? 0 : d(F, O) : X ? d(F + (F < 0 ? Pe : -Pe), O) : 0;
        if (!_ && (S = M = X) && v.lineStart(), X !== M && (H = p(_, I), (!H || za(_, H) || za(I, H)) && (I[0] += Ye, I[1] += Ye, X = f(I[0], I[1]))), X !== M)
          C = 0, X ? (v.lineStart(), H = p(I, _), v.point(H[0], H[1])) : (H = p(_, I), v.point(H[0], H[1]), v.lineEnd()), _ = H;
        else if (u && _ && s ^ X) {
          var U;
          !(J & x) && (U = p(I, _, !0)) && (C = 0, s ? (v.lineStart(), v.point(U[0][0], U[0][1]), v.point(U[1][0], U[1][1]), v.lineEnd()) : (v.point(U[1][0], U[1][1]), v.lineEnd(), v.lineStart(), v.point(U[0][0], U[0][1])));
        }
        X && (!_ || !za(_, I)) && v.point(I[0], I[1]), _ = I, M = X, x = J;
      },
      lineEnd: function() {
        M && v.lineEnd(), _ = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return C | (S && M) << 1;
      }
    };
  }
  function p(v, _, x) {
    var M = $i(v), S = $i(_), C = [1, 0, 0], F = ao(M, S), O = Ma(F, F), I = F[0], H = O - I * I;
    if (!H) return !x && v;
    var X = r * O / H, J = -r * I / H, U = ao(C, F), W = Ia(C, X), E = Ia(F, J);
    du(W, E);
    var w = U, b = Ma(W, w), T = Ma(w, w), A = b * b - T * (Ma(W, W) - 1);
    if (!(A < 0)) {
      var G = ns(A), R = Ia(w, (-b - G) / T);
      if (du(R, W), R = ju(R), !x) return R;
      var P = v[0], D = _[0], Y = v[1], z = _[1], j;
      D < P && (j = P, P = D, D = j);
      var Z = D - P, re = lt(Z - Pe) < Ye, pe = re || Z < Ye;
      if (!re && z < Y && (j = Y, Y = z, z = j), pe ? re ? Y + z > 0 ^ R[1] < (lt(R[0] - P) < Ye ? Y : z) : Y <= R[1] && R[1] <= z : Z > Pe ^ (P <= R[0] && R[0] <= D)) {
        var le = Ia(w, (-b + G) / T);
        return du(le, W), [R, ju(le)];
      }
    }
  }
  function d(v, _) {
    var x = s ? t : Pe - t, M = 0;
    return v < -x ? M |= 1 : v > x && (M |= 2), _ < -x ? M |= 4 : _ > x && (M |= 8), M;
  }
  return hp(f, h, c, s ? [0, -t] : [-Pe, t - Pe]);
}
function fp(t) {
  return function(e) {
    var r = new Qu();
    for (var s in t) r[s] = t[s];
    return r.stream = e, r;
  };
}
function Qu() {
}
Qu.prototype = {
  constructor: Qu,
  point: function(t, e) {
    this.stream.point(t, e);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function gp(t, e, r) {
  var s = e[1][0] - e[0][0], u = e[1][1] - e[0][1], c = t.clipExtent && t.clipExtent();
  t.scale(150).translate([0, 0]), c != null && t.clipExtent(null), $2(r, t.stream(Ef));
  var f = Ef.result(), h = Math.min(s / (f[1][0] - f[0][0]), u / (f[1][1] - f[0][1])), p = +e[0][0] + (s - h * (f[1][0] + f[0][0])) / 2, d = +e[0][1] + (u - h * (f[1][1] + f[0][1])) / 2;
  return c != null && t.clipExtent(c), t.scale(h * 150).translate([p, d]);
}
function oS(t, e, r) {
  return gp(t, [[0, 0], e], r);
}
var wf = 16, uS = Xe(30 * en);
function kf(t, e) {
  return +e ? cS(t, e) : lS(t);
}
function lS(t) {
  return fp({
    point: function(e, r) {
      e = t(e, r), this.stream.point(e[0], e[1]);
    }
  });
}
function cS(t, e) {
  function r(s, u, c, f, h, p, d, v, _, x, M, S, C, F) {
    var O = d - s, I = v - u, H = O * O + I * I;
    if (H > 4 * e && C--) {
      var X = f + x, J = h + M, U = p + S, W = ns(X * X + J * J + U * U), E = ni(U /= W), w = lt(lt(U) - 1) < Ye || lt(c - _) < Ye ? (c + _) / 2 : Ji(J, X), b = t(w, E), T = b[0], A = b[1], G = T - s, R = A - u, P = I * G - O * R;
      (P * P / H > e || lt((O * G + I * R) / H - 0.5) > 0.3 || f * x + h * M + p * S < uS) && (r(s, u, c, f, h, p, T, A, w, X /= W, J /= W, U, C, F), F.point(T, A), r(T, A, w, X, J, U, d, v, _, x, M, S, C, F));
    }
  }
  return function(s) {
    var u, c, f, h, p, d, v, _, x, M, S, C, F = {
      point: O,
      lineStart: I,
      lineEnd: X,
      polygonStart: function() {
        s.polygonStart(), F.lineStart = J;
      },
      polygonEnd: function() {
        s.polygonEnd(), F.lineStart = I;
      }
    };
    function O(E, w) {
      E = t(E, w), s.point(E[0], E[1]);
    }
    function I() {
      _ = NaN, F.point = H, s.lineStart();
    }
    function H(E, w) {
      var b = $i([E, w]), T = t(E, w);
      r(_, x, v, M, S, C, _ = T[0], x = T[1], v = E, M = b[0], S = b[1], C = b[2], wf, s), s.point(_, x);
    }
    function X() {
      F.point = O, s.lineEnd();
    }
    function J() {
      I(), F.point = U, F.lineEnd = W;
    }
    function U(E, w) {
      H(u = E, w), c = _, f = x, h = M, p = S, d = C, F.point = H;
    }
    function W() {
      r(_, x, v, M, S, C, c, f, u, h, p, d, wf, s), F.lineEnd = X, X();
    }
    return F;
  };
}
var hS = fp({
  point: function(t, e) {
    this.stream.point(t * en, e * en);
  }
});
function fS(t) {
  return gS(function() {
    return t;
  })();
}
function gS(t) {
  var e, r = 150, s = 480, u = 250, c, f, h = 0, p = 0, d = 0, v = 0, _ = 0, x, M, S = null, C = xf, F = null, O, I, H, X = _f, J = 0.5, U = kf(T, J), W, E;
  function w(R) {
    return R = M(R[0] * en, R[1] * en), [R[0] * r + c, f - R[1] * r];
  }
  function b(R) {
    return R = M.invert((R[0] - c) / r, (f - R[1]) / r), R && [R[0] * _r, R[1] * _r];
  }
  function T(R, P) {
    return R = e(R, P), [R[0] * r + c, f - R[1] * r];
  }
  w.stream = function(R) {
    return W && E === R ? W : W = hS(C(x, U(X(E = R))));
  }, w.clipAngle = function(R) {
    return arguments.length ? (C = +R ? aS(S = R * en, 6 * en) : (S = null, xf), G()) : S * _r;
  }, w.clipExtent = function(R) {
    return arguments.length ? (X = R == null ? (F = O = I = H = null, _f) : K2(F = +R[0][0], O = +R[0][1], I = +R[1][0], H = +R[1][1]), G()) : F == null ? null : [[F, O], [I, H]];
  }, w.scale = function(R) {
    return arguments.length ? (r = +R, A()) : r;
  }, w.translate = function(R) {
    return arguments.length ? (s = +R[0], u = +R[1], A()) : [s, u];
  }, w.center = function(R) {
    return arguments.length ? (h = R[0] % 360 * en, p = R[1] % 360 * en, A()) : [h * _r, p * _r];
  }, w.rotate = function(R) {
    return arguments.length ? (d = R[0] % 360 * en, v = R[1] % 360 * en, _ = R.length > 2 ? R[2] % 360 * en : 0, A()) : [d * _r, v * _r, _ * _r];
  }, w.precision = function(R) {
    return arguments.length ? (U = kf(T, J = R * R), G()) : ns(J);
  }, w.fitExtent = function(R, P) {
    return gp(w, R, P);
  }, w.fitSize = function(R, P) {
    return oS(w, R, P);
  };
  function A() {
    M = ap(x = V2(d, v, _), e);
    var R = e(h, p);
    return c = s - R[0] * r, f = u + R[1] * r, G();
  }
  function G() {
    return W = E = null, w;
  }
  return function() {
    return e = t.apply(this, arguments), w.invert = e.invert && b, A();
  };
}
function dp(t) {
  return function(e, r) {
    var s = Xe(e), u = Xe(r), c = t(s * u);
    return [
      c * u * We(e),
      c * We(r)
    ];
  };
}
function pp(t) {
  return function(e, r) {
    var s = ns(e * e + r * r), u = t(s), c = We(u), f = Xe(u);
    return [
      Ji(e * c, s * f),
      ni(s && r * c / s)
    ];
  };
}
var dS = dp(function(t) {
  return ns(2 / (1 + t));
});
dS.invert = pp(function(t) {
  return 2 * ni(t / 2);
});
var mp = dp(function(t) {
  return (t = sp(t)) && t / We(t);
});
mp.invert = pp(function(t) {
  return t;
});
function pS() {
  return fS(mp).scale(79.4188).clipAngle(180 - 1e-3);
}
function Sf(t, e) {
  return [t, e];
}
Sf.invert = Sf;
var { BufferOp: mS, GeoJSONReader: vS, GeoJSONWriter: yS } = H2;
function _S(t, e, r) {
  r = r || {};
  var s = r.units || "kilometers", u = r.steps || 8;
  if (!t) throw new Error("geojson is required");
  if (typeof r != "object") throw new Error("options must be an object");
  if (typeof u != "number") throw new Error("steps must be an number");
  if (e === void 0) throw new Error("radius is required");
  if (u <= 0) throw new Error("steps must be greater than 0");
  var c = [];
  switch (t.type) {
    case "GeometryCollection":
      return Pr(t, function(f) {
        var h = qa(f, e, s, u);
        h && c.push(h);
      }), nt(c);
    case "FeatureCollection":
      return Vn(t, function(f) {
        var h = qa(f, e, s, u);
        h && Vn(h, function(p) {
          p && c.push(p);
        });
      }), nt(c);
  }
  return qa(t, e, s, u);
}
function qa(t, e, r, s) {
  var u = t.properties || {}, c = t.type === "Feature" ? t.geometry : t;
  if (c.type === "GeometryCollection") {
    var f = [];
    return Pr(t, function(C) {
      var F = qa(C, e, r, s);
      F && f.push(F);
    }), nt(f);
  }
  var h = ES(c), p = {
    type: c.type,
    coordinates: yp(c.coordinates, h)
  }, d = new vS(), v = d.read(p), _ = Gl(Bl(e, r), "meters"), x = mS.bufferOp(v, _, s), M = new yS();
  if (x = M.write(x), !vp(x.coordinates)) {
    var S = {
      type: x.type,
      coordinates: _p(x.coordinates, h)
    };
    return Sn(S, u);
  }
}
function vp(t) {
  return Array.isArray(t[0]) ? vp(t[0]) : isNaN(t[0]);
}
function yp(t, e) {
  return typeof t[0] != "object" ? e(t) : t.map(function(r) {
    return yp(r, e);
  });
}
function _p(t, e) {
  return typeof t[0] != "object" ? e.invert(t) : t.map(function(r) {
    return _p(r, e);
  });
}
function ES(t) {
  var e = U2(t).geometry.coordinates, r = [-e[0], -e[1]];
  return pS().rotate(r).scale(at);
}
var xS = _S;
class Ep {
  constructor(e = [], r = wS) {
    if (this.data = e, this.length = this.data.length, this.compare = r, this.length > 0)
      for (let s = (this.length >> 1) - 1; s >= 0; s--) this._down(s);
  }
  push(e) {
    this.data.push(e), this.length++, this._up(this.length - 1);
  }
  pop() {
    if (this.length === 0) return;
    const e = this.data[0], r = this.data.pop();
    return this.length--, this.length > 0 && (this.data[0] = r, this._down(0)), e;
  }
  peek() {
    return this.data[0];
  }
  _up(e) {
    const { data: r, compare: s } = this, u = r[e];
    for (; e > 0; ) {
      const c = e - 1 >> 1, f = r[c];
      if (s(u, f) >= 0) break;
      r[e] = f, e = c;
    }
    r[e] = u;
  }
  _down(e) {
    const { data: r, compare: s } = this, u = this.length >> 1, c = r[e];
    for (; e < u; ) {
      let f = (e << 1) + 1, h = r[f];
      const p = f + 1;
      if (p < this.length && s(r[p], h) < 0 && (f = p, h = r[p]), s(h, c) >= 0) break;
      r[e] = h, e = f;
    }
    r[e] = c;
  }
}
function wS(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function xp(t, e) {
  return t.p.x > e.p.x ? 1 : t.p.x < e.p.x ? -1 : t.p.y !== e.p.y ? t.p.y > e.p.y ? 1 : -1 : 1;
}
function kS(t, e) {
  return t.rightSweepEvent.p.x > e.rightSweepEvent.p.x ? 1 : t.rightSweepEvent.p.x < e.rightSweepEvent.p.x ? -1 : t.rightSweepEvent.p.y !== e.rightSweepEvent.p.y ? t.rightSweepEvent.p.y < e.rightSweepEvent.p.y ? 1 : -1 : 1;
}
class Mf {
  constructor(e, r, s, u) {
    this.p = {
      x: e[0],
      y: e[1]
    }, this.featureId = r, this.ringId = s, this.eventId = u, this.otherEvent = null, this.isLeftEndpoint = null;
  }
  isSamePoint(e) {
    return this.p.x === e.p.x && this.p.y === e.p.y;
  }
}
function SS(t, e) {
  if (t.type === "FeatureCollection") {
    const r = t.features;
    for (let s = 0; s < r.length; s++)
      If(r[s], e);
  } else
    If(t, e);
}
let Ta = 0, Aa = 0, Ca = 0;
function If(t, e) {
  const r = t.type === "Feature" ? t.geometry : t;
  let s = r.coordinates;
  (r.type === "Polygon" || r.type === "MultiLineString") && (s = [s]), r.type === "LineString" && (s = [[s]]);
  for (let u = 0; u < s.length; u++)
    for (let c = 0; c < s[u].length; c++) {
      let f = s[u][c][0], h = null;
      Aa = Aa + 1;
      for (let p = 0; p < s[u][c].length - 1; p++) {
        h = s[u][c][p + 1];
        const d = new Mf(f, Ta, Aa, Ca), v = new Mf(h, Ta, Aa, Ca + 1);
        d.otherEvent = v, v.otherEvent = d, xp(d, v) > 0 ? (v.isLeftEndpoint = !0, d.isLeftEndpoint = !1) : (d.isLeftEndpoint = !0, v.isLeftEndpoint = !1), e.push(d), e.push(v), f = h, Ca = Ca + 1;
      }
    }
  Ta = Ta + 1;
}
let MS = class {
  constructor(e) {
    this.leftSweepEvent = e, this.rightSweepEvent = e.otherEvent;
  }
};
function IS(t, e) {
  if (t === null || e === null || t.leftSweepEvent.ringId === e.leftSweepEvent.ringId && (t.rightSweepEvent.isSamePoint(e.leftSweepEvent) || t.rightSweepEvent.isSamePoint(e.leftSweepEvent) || t.rightSweepEvent.isSamePoint(e.rightSweepEvent) || t.leftSweepEvent.isSamePoint(e.leftSweepEvent) || t.leftSweepEvent.isSamePoint(e.rightSweepEvent))) return !1;
  const r = t.leftSweepEvent.p.x, s = t.leftSweepEvent.p.y, u = t.rightSweepEvent.p.x, c = t.rightSweepEvent.p.y, f = e.leftSweepEvent.p.x, h = e.leftSweepEvent.p.y, p = e.rightSweepEvent.p.x, d = e.rightSweepEvent.p.y, v = (d - h) * (u - r) - (p - f) * (c - s), _ = (p - f) * (s - h) - (d - h) * (r - f), x = (u - r) * (s - h) - (c - s) * (r - f);
  if (v === 0)
    return !1;
  const M = _ / v, S = x / v;
  if (M >= 0 && M <= 1 && S >= 0 && S <= 1) {
    const C = r + M * (u - r), F = s + M * (c - s);
    return [C, F];
  }
  return !1;
}
function bS(t, e) {
  e = e || !1;
  const r = [], s = new Ep([], kS);
  for (; t.length; ) {
    const u = t.pop();
    if (u.isLeftEndpoint) {
      const c = new MS(u);
      for (let f = 0; f < s.data.length; f++) {
        const h = s.data[f];
        if (e && h.leftSweepEvent.featureId === u.featureId)
          continue;
        const p = IS(c, h);
        p !== !1 && r.push(p);
      }
      s.push(c);
    } else u.isLeftEndpoint === !1 && s.pop();
  }
  return r;
}
function LS(t, e) {
  const r = new Ep([], xp);
  return SS(t, r), bS(r, e);
}
var TS = LS;
function ia(t, e, r = {}) {
  const { removeDuplicates: s = !0, ignoreSelfIntersections: u = !0 } = r;
  let c = [];
  t.type === "FeatureCollection" ? c = c.concat(t.features) : t.type === "Feature" ? c.push(t) : (t.type === "LineString" || t.type === "Polygon" || t.type === "MultiLineString" || t.type === "MultiPolygon") && c.push(Sn(t)), e.type === "FeatureCollection" ? c = c.concat(e.features) : e.type === "Feature" ? c.push(e) : (e.type === "LineString" || e.type === "Polygon" || e.type === "MultiLineString" || e.type === "MultiPolygon") && c.push(Sn(e));
  const f = TS(
    nt(c),
    u
  );
  let h = [];
  if (s) {
    const p = {};
    f.forEach((d) => {
      const v = d.join(",");
      p[v] || (p[v] = !0, h.push(d));
    });
  } else
    h = f;
  return nt(h.map((p) => zn(p)));
}
var AS = ia;
function el(t) {
  const e = qt(t);
  let r = 0, s = 1, u, c;
  for (; s < e.length; )
    u = c || e[0], c = e[s], r += (c[0] - u[0]) * (c[1] + u[1]), s++;
  return r > 0;
}
function CS(t, e = {}) {
  var r, s;
  if (e = e || {}, !Lo(e)) throw new Error("options is invalid");
  const u = (r = e.mutate) != null ? r : !1, c = (s = e.reverse) != null ? s : !1;
  if (!t) throw new Error("<geojson> is required");
  if (typeof c != "boolean")
    throw new Error("<reverse> must be a boolean");
  if (typeof u != "boolean")
    throw new Error("<mutate> must be a boolean");
  !u && t.type !== "Point" && t.type !== "MultiPoint" && (t = To(t));
  const f = [];
  switch (t.type) {
    case "GeometryCollection":
      return Pr(t, function(h) {
        Ya(h, c);
      }), t;
    case "FeatureCollection":
      return Vn(t, function(h) {
        const p = Ya(h, c);
        Vn(p, function(d) {
          f.push(d);
        });
      }), nt(f);
  }
  return Ya(t, c);
}
function Ya(t, e) {
  switch (t.type === "Feature" ? t.geometry.type : t.type) {
    case "GeometryCollection":
      return Pr(t, function(s) {
        Ya(s, e);
      }), t;
    case "LineString":
      return bf(qt(t), e), t;
    case "Polygon":
      return Lf(qt(t), e), t;
    case "MultiLineString":
      return qt(t).forEach(function(s) {
        bf(s, e);
      }), t;
    case "MultiPolygon":
      return qt(t).forEach(function(s) {
        Lf(s, e);
      }), t;
    case "Point":
    case "MultiPoint":
      return t;
  }
}
function bf(t, e) {
  el(t) === e && t.reverse();
}
function Lf(t, e) {
  el(t[0]) !== e && t[0].reverse();
  for (let r = 1; r < t.length; r++)
    el(t[r]) === e && t[r].reverse();
}
var NS = CS;
const PS = ["Point", "MultiPoint"], OS = [
  "LineString",
  "MultiLineString",
  "Polygon",
  "MultiPolygon"
], wp = (t) => PS.includes(t.geometry.type), tl = (t) => OS.includes(t.geometry.type), RS = (t, e) => (na(t, (r) => {
  const s = r.coordinate;
  s[0] += e.lng, s[1] += e.lat;
}), t), DS = (t, e) => {
  const s = t.getBounds(), u = Vd(s[0], s[1], { units: "meters" });
  return xS(e, u * 1e-4, { units: "meters" }) || null;
}, kp = (t, e) => {
  const r = sn(t.getGeoJson());
  return RS(r, e), r;
}, xI = (t, e) => {
  const r = kp(t, e), s = t.getShapeProperty("center");
  s && (t.setShapeProperty("center", s[0] + e.lng), t.setShapeProperty("center", s[1] + e.lat)), t.updateGeoJsonGeometry(r.geometry);
}, FS = (t, e) => {
  try {
    na(t, (r) => {
      if (!ti(r.coordinate, e))
        throw new Error("stop");
    });
  } catch {
    return !1;
  }
  return !0;
}, Tf = (t, e) => {
  const r = FS(t, e);
  return wp(t) ? r : r && tl(t) ? !AS(t, e, { ignoreSelfIntersections: !0 }).features.length : !1;
}, Ql = (t) => {
  const e = t.getGeoJson();
  return typeof e != "object" ? null : Kd(e);
}, GS = (t) => {
  if (tl(t)) {
    const e = NS(t, { mutate: !1 });
    if (e.type === "Feature" && tl(e))
      return {
        ...e,
        properties: t.properties || {}
      };
  }
  return wp(t) ? t : null;
}, BS = (t, e) => {
  const r = t.properties?.[e];
  return typeof r == "string" || typeof r == "number" ? r : null;
};
class ec extends ts {
  mode = "drag";
  previousLngLat = null;
  pointBasedShapes = ["marker", "circle_marker", "text_marker"];
  throttledMethods = oi(
    {
      onMouseMove: this.onMouseMove
    },
    this,
    this.gm.options.settings.throttlingDelay
  );
  eventHandlers = {
    [`${se}:edit`]: this.handleGmEdit.bind(this),
    mousedown: this.onMouseDown.bind(this),
    touchstart: this.onMouseDown.bind(this),
    mousemove: this.throttledMethods.onMouseMove.bind(this),
    touchmove: this.throttledMethods.onMouseMove.bind(this),
    mouseup: this.onMouseUp.bind(this),
    touchend: this.onMouseUp.bind(this)
  };
  getUpdatedGeoJsonHandlers = {
    marker: this.moveSource.bind(this),
    ellipse: this.moveEllipse.bind(this),
    circle: this.moveCircle.bind(this),
    circle_marker: this.moveSource.bind(this),
    text_marker: this.moveSource.bind(this),
    line: this.moveSource.bind(this),
    rectangle: this.moveSource.bind(this),
    polygon: this.moveSource.bind(this)
  };
  onMouseDown(e) {
    if (!je(e))
      return { next: !0 };
    const r = this.getFeatureByMouseEvent({ event: e, sourceNames: [K.main] });
    return r && this.getUpdatedGeoJsonHandlers[r.shape] ? (this.featureData = r, this.featureData.changeSource({ sourceName: K.temporary, atomic: !0 }), this.gm.mapAdapter.setDragPan(!1), this.flags.actionInProgress = !0, this.snappingHelper?.addExcludedFeature(this.featureData), this.isPointBasedShape() && this.alignShapeCenterWithControlMarker(this.featureData, e), this.fireFeatureEditStartEvent({ feature: this.featureData, forceMode: "drag" }), { next: !1 }) : { next: !0 };
  }
  onMouseUp(e) {
    return !this.featureData || !je(e, { warning: !0 }) ? { next: !0 } : (this.snappingHelper?.clearExcludedFeatures(), this.featureData.changeSource({ sourceName: K.main, atomic: !0 }), this.previousLngLat = null, this.gm.mapAdapter.setDragPan(!0), this.fireFeatureEditEndEvent({ feature: this.featureData, forceMode: "drag" }), this.flags.actionInProgress = !1, this.featureData = null, { next: !0 });
  }
  onMouseMove(e) {
    if (!this.flags.actionInProgress || !je(e, { warning: !0 }))
      return { next: !0 };
    if (this.featureData) {
      const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
      this.moveFeature(this.featureData, r);
    }
    return { next: !1 };
  }
  isPointBasedShape() {
    return !!this.featureData && this.pointBasedShapes.includes(this.featureData.shape);
  }
  alignShapeCenterWithControlMarker(e, r) {
    const s = Ql(e);
    s && (this.gm.markerPointer.marker?.setLngLat(s), this.onMouseMove(r));
  }
  moveFeature(e, r) {
    if (!this.flags.actionInProgress)
      return;
    if (!this.previousLngLat) {
      this.previousLngLat = r;
      return;
    }
    const s = this.getUpdatedGeoJsonHandlers[e.shape];
    if (s) {
      const u = s(e, this.previousLngLat, r);
      if (!u) {
        te.error("BaseDrag.moveFeature: invalid updatedGeoJson", e);
        return;
      }
      this.fireBeforeFeatureUpdate({
        features: [e],
        geoJsonFeatures: [u],
        forceMode: "drag"
      });
      const c = this.updateFeatureGeoJson({
        featureData: e,
        featureGeoJson: u,
        forceMode: "drag"
      });
      Wi(e.getGeoJson().properties, u.properties) || e.updateGeoJsonProperties(u.properties), c && (this.previousLngLat = r);
    }
  }
  moveSource(e, r, s) {
    const u = uu(r, s);
    return kp(e, u);
  }
  moveEllipse(e, r, s) {
    if (e.shape !== "ellipse")
      return te.error("BaseDrag.moveCircle: invalid shape type", e), null;
    const u = e.getShapeProperty("center"), c = e.getShapeProperty("xSemiAxis"), f = e.getShapeProperty("ySemiAxis"), h = e.getShapeProperty("angle");
    if (!Array.isArray(u) || typeof c != "number" || typeof f != "number" || typeof h != "number")
      return te.error(
        "BaseDrag.moveEllipse: missing center, xSemiAxis, ySemiAxis or angle in the featureData",
        e
      ), null;
    const p = uu(r, s), d = [
      u[0] + p.lng,
      u[1] + p.lat
    ];
    return Co({
      center: d,
      xSemiAxis: c,
      ySemiAxis: f,
      angle: h
    });
  }
  moveCircle(e, r, s) {
    if (e.shape !== "circle")
      return te.error("BaseDrag.moveCircle: invalid shape type", e), null;
    const u = e.getShapeProperty("center");
    if (!Array.isArray(u))
      return te.error("BaseDrag.moveCircle: missing center in the featureData", e), null;
    const c = e.getGeoJson(), f = uu(r, s), h = Kd(c);
    if (!h)
      return te.error("BaseDrag.moveCircle: missing center circleRimLngLat"), null;
    const p = [
      u[0] + f.lng,
      u[1] + f.lat
    ];
    e.setShapeProperty("center", p);
    const d = $l({
      center: p,
      radius: this.gm.mapAdapter.getDistance(u, h)
    });
    return {
      type: "Feature",
      properties: {
        shape: "circle"
      },
      geometry: d.geometry
    };
  }
}
const US = {
  imperial: "en-US",
  metric: "nb-NO"
}, Sp = {
  distance: {
    metric: [
      { range: [0, 1], unit: "cm", factor: 100 },
      { range: [1, 1e4], unit: "m", factor: 1 },
      { range: [1e4, 1 / 0], unit: "km", factor: 1e-3 }
    ],
    imperial: [
      { range: [0, 0.3048], factor: 39.3701, unit: "in" },
      { range: [0.3048, 1609.344], factor: 3.28084, unit: "ft" },
      { range: [1609.344, 1 / 0], factor: 621371e-9, unit: "mi" }
    ]
  },
  area: {
    metric: [
      { range: [0, 1], unit: "cm²", factor: 1e4 },
      { range: [1, 1e4], unit: "m²", factor: 1 },
      { range: [1e5, 1 / 0], unit: "km²", factor: 1e-6 }
    ],
    imperial: [
      { range: [0, 0.092903], factor: 1550.0031, unit: "in²" },
      { range: [0.092903, 4046.856], factor: 10.7639, unit: "ft²" },
      { range: [4046.856, 2589988], factor: 247105e-9, unit: "ac" },
      { range: [2589988, 1 / 0], factor: 3861e-10, unit: "mi²" }
    ]
  }
}, zS = (t, e) => (t % e + e) % e, lo = (t, e) => new Intl.NumberFormat(US[e.units], {
  minimumFractionDigits: e.minimumFractionDigits ?? 0,
  maximumFractionDigits: e.maximumFractionDigits ?? 2
}).format(t), wI = (t, e) => {
  const s = Sp.distance[e.units].find((u) => t >= u.range[0] && t < u.range[1]);
  return s ? `${lo(t * s.factor, e)} ${s.unit}` : lo(t, e);
}, kI = (t, e) => {
  const s = Sp.area[e.units].find((u) => t >= u.range[0] && t < u.range[1]);
  return s ? `${lo(t * s.factor, e)} ${s.unit}` : lo(t, e);
};
class qS extends ec {
  mode = "change";
  cutVertexShapeTypes = ["line", "polygon", "rectangle"];
  markerData = null;
  shapeUpdateHandlers = {
    marker: this.updateSingleVertex.bind(this),
    circle: this.updateCircle.bind(this),
    circle_marker: this.updateSingleVertex.bind(this),
    ellipse: this.updateEllipse.bind(this),
    text_marker: this.updateSingleVertex.bind(this),
    line: this.updateSingleVertex.bind(this),
    rectangle: this.updateRectangle.bind(this),
    polygon: this.updateSingleVertex.bind(this)
  };
  get snapGuidesInstance() {
    const e = this.gm.actionInstances.helper__snap_guides;
    return rp(e) ? e : null;
  }
  onStartAction() {
  }
  onEndAction() {
    this.snapGuidesInstance?.removeSnapGuides();
  }
  handleGmEdit(e) {
    if (!es(e))
      return { next: !0 };
    if (e.action === "marker_move" && e.lngLatStart && e.markerData) {
      if (e.markerData.type === "vertex")
        return this.moveVertex(e), { next: !1 };
      if (e.lngLatEnd)
        return this.moveSource(e.featureData, e.lngLatStart, e.lngLatEnd), { next: !1 };
    }
    return e.action === "marker_right_click" ? (this.cutVertex(e), this.fireFeatureEditEndEvent({ feature: e.featureData })) : e.action === "edge_marker_click" ? this.insertVertex(e) : e.action === "marker_captured" ? (this.setCursorToPointer(), e.featureData.changeSource({ sourceName: K.temporary, atomic: !0 }), this.flags.actionInProgress = !0, this.fireFeatureEditStartEvent({ feature: e.featureData })) : e.action === "marker_released" && (this.markerData = null, this.snapGuidesInstance?.removeSnapGuides(), e.featureData.changeSource({ sourceName: K.main, atomic: !0 }), this.fireFeatureEditEndEvent({ feature: e.featureData }), this.flags.actionInProgress = !1), { next: !0 };
  }
  moveVertex(e) {
    this.markerData || (this.markerData = e.markerData || null, this.snapGuidesInstance?.updateSnapGuides(e.featureData.getGeoJson(), e.lngLatStart));
    const r = e.featureData, s = r.shape, u = this.shapeUpdateHandlers[s]?.(e) || null;
    u ? (this.fireBeforeFeatureUpdate({
      features: [r],
      geoJsonFeatures: [u]
    }), this.updateFeatureGeoJson({ featureData: r, featureGeoJson: u })) : te.error("EditChange.moveVertex: invalid geojson", u, e);
  }
  cutVertex(e) {
    const r = e.featureData;
    if (e.markerData.type !== "vertex" || !this.cutVertexShapeTypes.includes(r.shape))
      return;
    let s = !1;
    const u = r.getGeoJson(), c = e.markerData.instance;
    if (Ds(u)) {
      if (lu(u) <= 2) {
        this.gm.features.delete(r);
        return;
      }
    } else if (ql(u)) {
      if (lu(u) <= 3) {
        this.gm.features.delete(r);
        return;
      }
    } else if (zl(u) && lu(u) <= 3) {
      this.gm.features.delete(r);
      return;
    }
    const f = Ql(c);
    f && (s = Fk(u, f)), s ? (r.convertToPolygon(), r.updateGeoJsonGeometry(u.geometry), this.fireFeatureUpdatedEvent({
      sourceFeatures: [r],
      targetFeatures: [r],
      markerData: e.markerData
    })) : te.error("EditChange.cutVertex: feature not updated", e);
  }
  insertVertex(e) {
    if (e.markerData.type !== "edge")
      return;
    const r = e.featureData.getGeoJson(), s = e.markerData.segment.end.path, u = s.pop(), c = Bi(r, s);
    typeof u == "number" && (c.splice(u, 0, [...e.markerData.position.coordinate]), e.featureData.updateGeoJsonGeometry(r.geometry), e.featureData.convertToPolygon(), this.fireFeatureUpdatedEvent({
      sourceFeatures: [e.featureData],
      targetFeatures: [e.featureData],
      markerData: e.markerData
    }));
  }
  updateSingleVertex({ featureData: e, lngLatEnd: r, markerData: s }) {
    const u = sn(e.getGeoJson()), c = sn(s.position.path), f = c.pop(), h = Bi(u, c);
    return Array.isArray(h) && typeof f == "number" ? (h[f] = [...r], f === 0 && e.shape === "polygon" && (h[h.length - 1] = [...r])) : te.error("BaseDrag.moveSingleVertex: invalid coordinates", u, c), u;
  }
  updateCircle({ featureData: e, lngLatEnd: r }) {
    const s = e.getShapeProperty("center");
    if (e.shape !== "circle" || !s)
      return te.error("BaseDrag.moveCircle: invalid shape type / missing center", e), null;
    const u = $l({
      center: s,
      radius: this.gm.mapAdapter.getDistance(s, r)
    });
    return {
      type: "Feature",
      properties: {
        shape: "circle"
      },
      geometry: u.geometry
    };
  }
  updateEllipse(e) {
    const { featureData: r, lngLatEnd: s, markerData: u } = e;
    if (r.shape !== "ellipse")
      return te.error("EditChange.updateEllipse: invalid shape type", r), null;
    const c = r.getShapeProperty("center");
    let f = r.getShapeProperty("xSemiAxis"), h = r.getShapeProperty("ySemiAxis");
    const p = r.getShapeProperty("angle");
    if (!Array.isArray(c) || typeof f != "number" || typeof h != "number" || typeof p != "number")
      return te.error(
        "updateEllipse: missing center, xSemiAxis, ySemiAxis or angle in the featureData",
        r
      ), null;
    const d = this.gm.mapAdapter.getDistance(c, s), v = u.position.path[3], _ = Math.floor(v / Qd * 4);
    return (_ === 0 || _ === 2 ? "x" : "y") === "x" ? f = d : h = d, Co({
      center: c,
      xSemiAxis: f,
      ySemiAxis: h,
      angle: p
    });
  }
  updateRectangle({ featureData: e, lngLatStart: r, lngLatEnd: s }) {
    const c = e.getGeoJson(), f = c.geometry.coordinates[0], { absCoordIndex: h } = Ao(c, r);
    if (h === -1)
      return te.error("EditChange.updateRectangle: start vertex not found", e), null;
    const p = zS(h - 2, 4), d = f[p];
    return $u(s, d);
  }
}
const YS = ["mode_start", "mode_started", "mode_end", "mode_ended"], tc = (t) => kn(t) && Tr(t.action, YS), Mp = (t) => t.length > 0;
function HS(t, e, {
  ignoreSelfIntersections: r = !0
} = { ignoreSelfIntersections: !0 }) {
  let s = !0;
  return Cr(t, (u) => {
    Cr(e, (c) => {
      if (s === !1)
        return !1;
      s = JS(
        u.geometry,
        c.geometry,
        r
      );
    });
  }), s;
}
function JS(t, e, r) {
  switch (t.type) {
    case "Point":
      switch (e.type) {
        case "Point":
          return !WS(t.coordinates, e.coordinates);
        case "LineString":
          return !Af(e, t);
        case "Polygon":
          return !ti(t, e);
      }
      break;
    case "LineString":
      switch (e.type) {
        case "Point":
          return !Af(t, e);
        case "LineString":
          return !$S(t, e, r);
        case "Polygon":
          return !Cf(e, t, r);
      }
      break;
    case "Polygon":
      switch (e.type) {
        case "Point":
          return !ti(e, t);
        case "LineString":
          return !Cf(t, e, r);
        case "Polygon":
          return !VS(e, t, r);
      }
  }
  return !1;
}
function Af(t, e) {
  for (let r = 0; r < t.coordinates.length - 1; r++)
    if (XS(
      t.coordinates[r],
      t.coordinates[r + 1],
      e.coordinates
    ))
      return !0;
  return !1;
}
function $S(t, e, r) {
  return ia(t, e, {
    ignoreSelfIntersections: r
  }).features.length > 0;
}
function Cf(t, e, r) {
  for (const u of e.coordinates)
    if (ti(u, t))
      return !0;
  return ia(e, Ju(t), {
    ignoreSelfIntersections: r
  }).features.length > 0;
}
function VS(t, e, r) {
  for (const u of t.coordinates[0])
    if (ti(u, e))
      return !0;
  for (const u of e.coordinates[0])
    if (ti(u, t))
      return !0;
  return ia(
    Ju(t),
    Ju(e),
    { ignoreSelfIntersections: r }
  ).features.length > 0;
}
function XS(t, e, r) {
  const s = r[0] - t[0], u = r[1] - t[1], c = e[0] - t[0], f = e[1] - t[1];
  return s * f - u * c !== 0 ? !1 : Math.abs(c) >= Math.abs(f) ? c > 0 ? t[0] <= r[0] && r[0] <= e[0] : e[0] <= r[0] && r[0] <= t[0] : f > 0 ? t[1] <= r[1] && r[1] <= e[1] : e[1] <= r[1] && r[1] <= t[1];
}
function WS(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function jS(t, e, {
  ignoreSelfIntersections: r = !0
} = {}) {
  let s = !1;
  return Cr(t, (u) => {
    Cr(e, (c) => {
      if (s === !0)
        return !0;
      s = !HS(u.geometry, c.geometry, {
        ignoreSelfIntersections: r
      });
    });
  }), s;
}
var Ip = jS, ZS = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mu = Math.ceil, jt = Math.floor, Ot = "[BigNumber Error] ", Nf = Ot + "Number primitive has more than 15 significant digits: ", hn = 1e14, xe = 14, vu = 9007199254740991, yu = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Er = 1e7, st = 1e9;
function bp(t) {
  var e, r, s, u = I.prototype = { constructor: I, toString: null, valueOf: null }, c = new I(1), f = 20, h = 4, p = -7, d = 21, v = -1e7, _ = 1e7, x = !1, M = 1, S = 0, C = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, F = "0123456789abcdefghijklmnopqrstuvwxyz", O = !0;
  function I(E, w) {
    var b, T, A, G, R, P, D, Y, z = this;
    if (!(z instanceof I)) return new I(E, w);
    if (w == null) {
      if (E && E._isBigNumber === !0) {
        z.s = E.s, !E.c || E.e > _ ? z.c = z.e = null : E.e < v ? z.c = [z.e = 0] : (z.e = E.e, z.c = E.c.slice());
        return;
      }
      if ((P = typeof E == "number") && E * 0 == 0) {
        if (z.s = 1 / E < 0 ? (E = -E, -1) : 1, E === ~~E) {
          for (G = 0, R = E; R >= 10; R /= 10, G++) ;
          G > _ ? z.c = z.e = null : (z.e = G, z.c = [E]);
          return;
        }
        Y = String(E);
      } else {
        if (!ZS.test(Y = String(E))) return s(z, Y, P);
        z.s = Y.charCodeAt(0) == 45 ? (Y = Y.slice(1), -1) : 1;
      }
      (G = Y.indexOf(".")) > -1 && (Y = Y.replace(".", "")), (R = Y.search(/e/i)) > 0 ? (G < 0 && (G = R), G += +Y.slice(R + 1), Y = Y.substring(0, R)) : G < 0 && (G = Y.length);
    } else {
      if (Ve(w, 2, F.length, "Base"), w == 10 && O)
        return z = new I(E), U(z, f + z.e + 1, h);
      if (Y = String(E), P = typeof E == "number") {
        if (E * 0 != 0) return s(z, Y, P, w);
        if (z.s = 1 / E < 0 ? (Y = Y.slice(1), -1) : 1, I.DEBUG && Y.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Nf + E);
      } else
        z.s = Y.charCodeAt(0) === 45 ? (Y = Y.slice(1), -1) : 1;
      for (b = F.slice(0, w), G = R = 0, D = Y.length; R < D; R++)
        if (b.indexOf(T = Y.charAt(R)) < 0) {
          if (T == ".") {
            if (R > G) {
              G = D;
              continue;
            }
          } else if (!A && (Y == Y.toUpperCase() && (Y = Y.toLowerCase()) || Y == Y.toLowerCase() && (Y = Y.toUpperCase()))) {
            A = !0, R = -1, G = 0;
            continue;
          }
          return s(z, String(E), P, w);
        }
      P = !1, Y = r(Y, w, 10, z.s), (G = Y.indexOf(".")) > -1 ? Y = Y.replace(".", "") : G = Y.length;
    }
    for (R = 0; Y.charCodeAt(R) === 48; R++) ;
    for (D = Y.length; Y.charCodeAt(--D) === 48; ) ;
    if (Y = Y.slice(R, ++D)) {
      if (D -= R, P && I.DEBUG && D > 15 && (E > vu || E !== jt(E)))
        throw Error(Nf + z.s * E);
      if ((G = G - R - 1) > _)
        z.c = z.e = null;
      else if (G < v)
        z.c = [z.e = 0];
      else {
        if (z.e = G, z.c = [], R = (G + 1) % xe, G < 0 && (R += xe), R < D) {
          for (R && z.c.push(+Y.slice(0, R)), D -= xe; R < D; )
            z.c.push(+Y.slice(R, R += xe));
          R = xe - (Y = Y.slice(R)).length;
        } else
          R -= D;
        for (; R--; Y += "0") ;
        z.c.push(+Y);
      }
    } else
      z.c = [z.e = 0];
  }
  I.clone = bp, I.ROUND_UP = 0, I.ROUND_DOWN = 1, I.ROUND_CEIL = 2, I.ROUND_FLOOR = 3, I.ROUND_HALF_UP = 4, I.ROUND_HALF_DOWN = 5, I.ROUND_HALF_EVEN = 6, I.ROUND_HALF_CEIL = 7, I.ROUND_HALF_FLOOR = 8, I.EUCLID = 9, I.config = I.set = function(E) {
    var w, b;
    if (E != null)
      if (typeof E == "object") {
        if (E.hasOwnProperty(w = "DECIMAL_PLACES") && (b = E[w], Ve(b, 0, st, w), f = b), E.hasOwnProperty(w = "ROUNDING_MODE") && (b = E[w], Ve(b, 0, 8, w), h = b), E.hasOwnProperty(w = "EXPONENTIAL_AT") && (b = E[w], b && b.pop ? (Ve(b[0], -st, 0, w), Ve(b[1], 0, st, w), p = b[0], d = b[1]) : (Ve(b, -st, st, w), p = -(d = b < 0 ? -b : b))), E.hasOwnProperty(w = "RANGE"))
          if (b = E[w], b && b.pop)
            Ve(b[0], -st, -1, w), Ve(b[1], 1, st, w), v = b[0], _ = b[1];
          else if (Ve(b, -st, st, w), b)
            v = -(_ = b < 0 ? -b : b);
          else
            throw Error(Ot + w + " cannot be zero: " + b);
        if (E.hasOwnProperty(w = "CRYPTO"))
          if (b = E[w], b === !!b)
            if (b)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                x = b;
              else
                throw x = !b, Error(Ot + "crypto unavailable");
            else
              x = b;
          else
            throw Error(Ot + w + " not true or false: " + b);
        if (E.hasOwnProperty(w = "MODULO_MODE") && (b = E[w], Ve(b, 0, 9, w), M = b), E.hasOwnProperty(w = "POW_PRECISION") && (b = E[w], Ve(b, 0, st, w), S = b), E.hasOwnProperty(w = "FORMAT"))
          if (b = E[w], typeof b == "object") C = b;
          else throw Error(Ot + w + " not an object: " + b);
        if (E.hasOwnProperty(w = "ALPHABET"))
          if (b = E[w], typeof b == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(b))
            O = b.slice(0, 10) == "0123456789", F = b;
          else
            throw Error(Ot + w + " invalid: " + b);
      } else
        throw Error(Ot + "Object expected: " + E);
    return {
      DECIMAL_PLACES: f,
      ROUNDING_MODE: h,
      EXPONENTIAL_AT: [p, d],
      RANGE: [v, _],
      CRYPTO: x,
      MODULO_MODE: M,
      POW_PRECISION: S,
      FORMAT: C,
      ALPHABET: F
    };
  }, I.isBigNumber = function(E) {
    if (!E || E._isBigNumber !== !0) return !1;
    if (!I.DEBUG) return !0;
    var w, b, T = E.c, A = E.e, G = E.s;
    e: if ({}.toString.call(T) == "[object Array]") {
      if ((G === 1 || G === -1) && A >= -st && A <= st && A === jt(A)) {
        if (T[0] === 0) {
          if (A === 0 && T.length === 1) return !0;
          break e;
        }
        if (w = (A + 1) % xe, w < 1 && (w += xe), String(T[0]).length == w) {
          for (w = 0; w < T.length; w++)
            if (b = T[w], b < 0 || b >= hn || b !== jt(b)) break e;
          if (b !== 0) return !0;
        }
      }
    } else if (T === null && A === null && (G === null || G === 1 || G === -1))
      return !0;
    throw Error(Ot + "Invalid BigNumber: " + E);
  }, I.maximum = I.max = function() {
    return X(arguments, -1);
  }, I.minimum = I.min = function() {
    return X(arguments, 1);
  }, I.random = (function() {
    var E = 9007199254740992, w = Math.random() * E & 2097151 ? function() {
      return jt(Math.random() * E);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(b) {
      var T, A, G, R, P, D = 0, Y = [], z = new I(c);
      if (b == null ? b = f : Ve(b, 0, st), R = mu(b / xe), x)
        if (crypto.getRandomValues) {
          for (T = crypto.getRandomValues(new Uint32Array(R *= 2)); D < R; )
            P = T[D] * 131072 + (T[D + 1] >>> 11), P >= 9e15 ? (A = crypto.getRandomValues(new Uint32Array(2)), T[D] = A[0], T[D + 1] = A[1]) : (Y.push(P % 1e14), D += 2);
          D = R / 2;
        } else if (crypto.randomBytes) {
          for (T = crypto.randomBytes(R *= 7); D < R; )
            P = (T[D] & 31) * 281474976710656 + T[D + 1] * 1099511627776 + T[D + 2] * 4294967296 + T[D + 3] * 16777216 + (T[D + 4] << 16) + (T[D + 5] << 8) + T[D + 6], P >= 9e15 ? crypto.randomBytes(7).copy(T, D) : (Y.push(P % 1e14), D += 7);
          D = R / 7;
        } else
          throw x = !1, Error(Ot + "crypto unavailable");
      if (!x)
        for (; D < R; )
          P = w(), P < 9e15 && (Y[D++] = P % 1e14);
      for (R = Y[--D], b %= xe, R && b && (P = yu[xe - b], Y[D] = jt(R / P) * P); Y[D] === 0; Y.pop(), D--) ;
      if (D < 0)
        Y = [G = 0];
      else {
        for (G = -1; Y[0] === 0; Y.splice(0, 1), G -= xe) ;
        for (D = 1, P = Y[0]; P >= 10; P /= 10, D++) ;
        D < xe && (G -= xe - D);
      }
      return z.e = G, z.c = Y, z;
    };
  })(), I.sum = function() {
    for (var E = 1, w = arguments, b = new I(w[0]); E < w.length; ) b = b.plus(w[E++]);
    return b;
  }, r = /* @__PURE__ */ (function() {
    var E = "0123456789";
    function w(b, T, A, G) {
      for (var R, P = [0], D, Y = 0, z = b.length; Y < z; ) {
        for (D = P.length; D--; P[D] *= T) ;
        for (P[0] += G.indexOf(b.charAt(Y++)), R = 0; R < P.length; R++)
          P[R] > A - 1 && (P[R + 1] == null && (P[R + 1] = 0), P[R + 1] += P[R] / A | 0, P[R] %= A);
      }
      return P.reverse();
    }
    return function(b, T, A, G, R) {
      var P, D, Y, z, j, Z, re, pe, le = b.indexOf("."), ae = f, oe = h;
      for (le >= 0 && (z = S, S = 0, b = b.replace(".", ""), pe = new I(T), Z = pe.pow(b.length - le), S = z, pe.c = w(
        tr(Wt(Z.c), Z.e, "0"),
        10,
        A,
        E
      ), pe.e = pe.c.length), re = w(b, T, A, R ? (P = F, E) : (P = E, F)), Y = z = re.length; re[--z] == 0; re.pop()) ;
      if (!re[0]) return P.charAt(0);
      if (le < 0 ? --Y : (Z.c = re, Z.e = Y, Z.s = G, Z = e(Z, pe, ae, oe, A), re = Z.c, j = Z.r, Y = Z.e), D = Y + ae + 1, le = re[D], z = A / 2, j = j || D < 0 || re[D + 1] != null, j = oe < 4 ? (le != null || j) && (oe == 0 || oe == (Z.s < 0 ? 3 : 2)) : le > z || le == z && (oe == 4 || j || oe == 6 && re[D - 1] & 1 || oe == (Z.s < 0 ? 8 : 7)), D < 1 || !re[0])
        b = j ? tr(P.charAt(1), -ae, P.charAt(0)) : P.charAt(0);
      else {
        if (re.length = D, j)
          for (--A; ++re[--D] > A; )
            re[D] = 0, D || (++Y, re = [1].concat(re));
        for (z = re.length; !re[--z]; ) ;
        for (le = 0, b = ""; le <= z; b += P.charAt(re[le++])) ;
        b = tr(b, Y, P.charAt(0));
      }
      return b;
    };
  })(), e = /* @__PURE__ */ (function() {
    function E(T, A, G) {
      var R, P, D, Y, z = 0, j = T.length, Z = A % Er, re = A / Er | 0;
      for (T = T.slice(); j--; )
        D = T[j] % Er, Y = T[j] / Er | 0, R = re * D + Y * Z, P = Z * D + R % Er * Er + z, z = (P / G | 0) + (R / Er | 0) + re * Y, T[j] = P % G;
      return z && (T = [z].concat(T)), T;
    }
    function w(T, A, G, R) {
      var P, D;
      if (G != R)
        D = G > R ? 1 : -1;
      else
        for (P = D = 0; P < G; P++)
          if (T[P] != A[P]) {
            D = T[P] > A[P] ? 1 : -1;
            break;
          }
      return D;
    }
    function b(T, A, G, R) {
      for (var P = 0; G--; )
        T[G] -= P, P = T[G] < A[G] ? 1 : 0, T[G] = P * R + T[G] - A[G];
      for (; !T[0] && T.length > 1; T.splice(0, 1)) ;
    }
    return function(T, A, G, R, P) {
      var D, Y, z, j, Z, re, pe, le, ae, oe, Ee, Ce, $, In, Le, ce, N, Ne = T.s == A.s ? 1 : -1, De = T.c, ke = A.c;
      if (!De || !De[0] || !ke || !ke[0])
        return new I(
          // Return NaN if either NaN, or both Infinity or 0.
          !T.s || !A.s || (De ? ke && De[0] == ke[0] : !ke) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            De && De[0] == 0 || !ke ? Ne * 0 : Ne / 0
          )
        );
      for (le = new I(Ne), ae = le.c = [], Y = T.e - A.e, Ne = G + Y + 1, P || (P = hn, Y = Zt(T.e / xe) - Zt(A.e / xe), Ne = Ne / xe | 0), z = 0; ke[z] == (De[z] || 0); z++) ;
      if (ke[z] > (De[z] || 0) && Y--, Ne < 0)
        ae.push(1), j = !0;
      else {
        for (In = De.length, ce = ke.length, z = 0, Ne += 2, Z = jt(P / (ke[0] + 1)), Z > 1 && (ke = E(ke, Z, P), De = E(De, Z, P), ce = ke.length, In = De.length), $ = ce, oe = De.slice(0, ce), Ee = oe.length; Ee < ce; oe[Ee++] = 0) ;
        N = ke.slice(), N = [0].concat(N), Le = ke[0], ke[1] >= P / 2 && Le++;
        do {
          if (Z = 0, D = w(ke, oe, ce, Ee), D < 0) {
            if (Ce = oe[0], ce != Ee && (Ce = Ce * P + (oe[1] || 0)), Z = jt(Ce / Le), Z > 1)
              for (Z >= P && (Z = P - 1), re = E(ke, Z, P), pe = re.length, Ee = oe.length; w(re, oe, pe, Ee) == 1; )
                Z--, b(re, ce < pe ? N : ke, pe, P), pe = re.length, D = 1;
            else
              Z == 0 && (D = Z = 1), re = ke.slice(), pe = re.length;
            if (pe < Ee && (re = [0].concat(re)), b(oe, re, Ee, P), Ee = oe.length, D == -1)
              for (; w(ke, oe, ce, Ee) < 1; )
                Z++, b(oe, ce < Ee ? N : ke, Ee, P), Ee = oe.length;
          } else D === 0 && (Z++, oe = [0]);
          ae[z++] = Z, oe[0] ? oe[Ee++] = De[$] || 0 : (oe = [De[$]], Ee = 1);
        } while (($++ < In || oe[0] != null) && Ne--);
        j = oe[0] != null, ae[0] || ae.splice(0, 1);
      }
      if (P == hn) {
        for (z = 1, Ne = ae[0]; Ne >= 10; Ne /= 10, z++) ;
        U(le, G + (le.e = z + Y * xe - 1) + 1, R, j);
      } else
        le.e = Y, le.r = +j;
      return le;
    };
  })();
  function H(E, w, b, T) {
    var A, G, R, P, D;
    if (b == null ? b = h : Ve(b, 0, 8), !E.c) return E.toString();
    if (A = E.c[0], R = E.e, w == null)
      D = Wt(E.c), D = T == 1 || T == 2 && (R <= p || R >= d) ? Pa(D, R) : tr(D, R, "0");
    else if (E = U(new I(E), w, b), G = E.e, D = Wt(E.c), P = D.length, T == 1 || T == 2 && (w <= G || G <= p)) {
      for (; P < w; D += "0", P++) ;
      D = Pa(D, G);
    } else if (w -= R + (T === 2 && G > R), D = tr(D, G, "0"), G + 1 > P) {
      if (--w > 0) for (D += "."; w--; D += "0") ;
    } else if (w += G - P, w > 0)
      for (G + 1 == P && (D += "."); w--; D += "0") ;
    return E.s < 0 && A ? "-" + D : D;
  }
  function X(E, w) {
    for (var b, T, A = 1, G = new I(E[0]); A < E.length; A++)
      T = new I(E[A]), (!T.s || (b = Hr(G, T)) === w || b === 0 && G.s === w) && (G = T);
    return G;
  }
  function J(E, w, b) {
    for (var T = 1, A = w.length; !w[--A]; w.pop()) ;
    for (A = w[0]; A >= 10; A /= 10, T++) ;
    return (b = T + b * xe - 1) > _ ? E.c = E.e = null : b < v ? E.c = [E.e = 0] : (E.e = b, E.c = w), E;
  }
  s = /* @__PURE__ */ (function() {
    var E = /^(-?)0([xbo])(?=\w[\w.]*$)/i, w = /^([^.]+)\.$/, b = /^\.([^.]+)$/, T = /^-?(Infinity|NaN)$/, A = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(G, R, P, D) {
      var Y, z = P ? R : R.replace(A, "");
      if (T.test(z))
        G.s = isNaN(z) ? null : z < 0 ? -1 : 1;
      else {
        if (!P && (z = z.replace(E, function(j, Z, re) {
          return Y = (re = re.toLowerCase()) == "x" ? 16 : re == "b" ? 2 : 8, !D || D == Y ? Z : j;
        }), D && (Y = D, z = z.replace(w, "$1").replace(b, "0.$1")), R != z))
          return new I(z, Y);
        if (I.DEBUG)
          throw Error(Ot + "Not a" + (D ? " base " + D : "") + " number: " + R);
        G.s = null;
      }
      G.c = G.e = null;
    };
  })();
  function U(E, w, b, T) {
    var A, G, R, P, D, Y, z, j = E.c, Z = yu;
    if (j) {
      e: {
        for (A = 1, P = j[0]; P >= 10; P /= 10, A++) ;
        if (G = w - A, G < 0)
          G += xe, R = w, D = j[Y = 0], z = jt(D / Z[A - R - 1] % 10);
        else if (Y = mu((G + 1) / xe), Y >= j.length)
          if (T) {
            for (; j.length <= Y; j.push(0)) ;
            D = z = 0, A = 1, G %= xe, R = G - xe + 1;
          } else
            break e;
        else {
          for (D = P = j[Y], A = 1; P >= 10; P /= 10, A++) ;
          G %= xe, R = G - xe + A, z = R < 0 ? 0 : jt(D / Z[A - R - 1] % 10);
        }
        if (T = T || w < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        j[Y + 1] != null || (R < 0 ? D : D % Z[A - R - 1]), T = b < 4 ? (z || T) && (b == 0 || b == (E.s < 0 ? 3 : 2)) : z > 5 || z == 5 && (b == 4 || T || b == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (G > 0 ? R > 0 ? D / Z[A - R] : 0 : j[Y - 1]) % 10 & 1 || b == (E.s < 0 ? 8 : 7)), w < 1 || !j[0])
          return j.length = 0, T ? (w -= E.e + 1, j[0] = Z[(xe - w % xe) % xe], E.e = -w || 0) : j[0] = E.e = 0, E;
        if (G == 0 ? (j.length = Y, P = 1, Y--) : (j.length = Y + 1, P = Z[xe - G], j[Y] = R > 0 ? jt(D / Z[A - R] % Z[R]) * P : 0), T)
          for (; ; )
            if (Y == 0) {
              for (G = 1, R = j[0]; R >= 10; R /= 10, G++) ;
              for (R = j[0] += P, P = 1; R >= 10; R /= 10, P++) ;
              G != P && (E.e++, j[0] == hn && (j[0] = 1));
              break;
            } else {
              if (j[Y] += P, j[Y] != hn) break;
              j[Y--] = 0, P = 1;
            }
        for (G = j.length; j[--G] === 0; j.pop()) ;
      }
      E.e > _ ? E.c = E.e = null : E.e < v && (E.c = [E.e = 0]);
    }
    return E;
  }
  function W(E) {
    var w, b = E.e;
    return b === null ? E.toString() : (w = Wt(E.c), w = b <= p || b >= d ? Pa(w, b) : tr(w, b, "0"), E.s < 0 ? "-" + w : w);
  }
  return u.absoluteValue = u.abs = function() {
    var E = new I(this);
    return E.s < 0 && (E.s = 1), E;
  }, u.comparedTo = function(E, w) {
    return Hr(this, new I(E, w));
  }, u.decimalPlaces = u.dp = function(E, w) {
    var b, T, A, G = this;
    if (E != null)
      return Ve(E, 0, st), w == null ? w = h : Ve(w, 0, 8), U(new I(G), E + G.e + 1, w);
    if (!(b = G.c)) return null;
    if (T = ((A = b.length - 1) - Zt(this.e / xe)) * xe, A = b[A]) for (; A % 10 == 0; A /= 10, T--) ;
    return T < 0 && (T = 0), T;
  }, u.dividedBy = u.div = function(E, w) {
    return e(this, new I(E, w), f, h);
  }, u.dividedToIntegerBy = u.idiv = function(E, w) {
    return e(this, new I(E, w), 0, 1);
  }, u.exponentiatedBy = u.pow = function(E, w) {
    var b, T, A, G, R, P, D, Y, z, j = this;
    if (E = new I(E), E.c && !E.isInteger())
      throw Error(Ot + "Exponent not an integer: " + W(E));
    if (w != null && (w = new I(w)), P = E.e > 14, !j.c || !j.c[0] || j.c[0] == 1 && !j.e && j.c.length == 1 || !E.c || !E.c[0])
      return z = new I(Math.pow(+W(j), P ? E.s * (2 - Na(E)) : +W(E))), w ? z.mod(w) : z;
    if (D = E.s < 0, w) {
      if (w.c ? !w.c[0] : !w.s) return new I(NaN);
      T = !D && j.isInteger() && w.isInteger(), T && (j = j.mod(w));
    } else {
      if (E.e > 9 && (j.e > 0 || j.e < -1 || (j.e == 0 ? j.c[0] > 1 || P && j.c[1] >= 24e7 : j.c[0] < 8e13 || P && j.c[0] <= 9999975e7)))
        return G = j.s < 0 && Na(E) ? -0 : 0, j.e > -1 && (G = 1 / G), new I(D ? 1 / G : G);
      S && (G = mu(S / xe + 2));
    }
    for (P ? (b = new I(0.5), D && (E.s = 1), Y = Na(E)) : (A = Math.abs(+W(E)), Y = A % 2), z = new I(c); ; ) {
      if (Y) {
        if (z = z.times(j), !z.c) break;
        G ? z.c.length > G && (z.c.length = G) : T && (z = z.mod(w));
      }
      if (A) {
        if (A = jt(A / 2), A === 0) break;
        Y = A % 2;
      } else if (E = E.times(b), U(E, E.e + 1, 1), E.e > 14)
        Y = Na(E);
      else {
        if (A = +W(E), A === 0) break;
        Y = A % 2;
      }
      j = j.times(j), G ? j.c && j.c.length > G && (j.c.length = G) : T && (j = j.mod(w));
    }
    return T ? z : (D && (z = c.div(z)), w ? z.mod(w) : G ? U(z, S, h, R) : z);
  }, u.integerValue = function(E) {
    var w = new I(this);
    return E == null ? E = h : Ve(E, 0, 8), U(w, w.e + 1, E);
  }, u.isEqualTo = u.eq = function(E, w) {
    return Hr(this, new I(E, w)) === 0;
  }, u.isFinite = function() {
    return !!this.c;
  }, u.isGreaterThan = u.gt = function(E, w) {
    return Hr(this, new I(E, w)) > 0;
  }, u.isGreaterThanOrEqualTo = u.gte = function(E, w) {
    return (w = Hr(this, new I(E, w))) === 1 || w === 0;
  }, u.isInteger = function() {
    return !!this.c && Zt(this.e / xe) > this.c.length - 2;
  }, u.isLessThan = u.lt = function(E, w) {
    return Hr(this, new I(E, w)) < 0;
  }, u.isLessThanOrEqualTo = u.lte = function(E, w) {
    return (w = Hr(this, new I(E, w))) === -1 || w === 0;
  }, u.isNaN = function() {
    return !this.s;
  }, u.isNegative = function() {
    return this.s < 0;
  }, u.isPositive = function() {
    return this.s > 0;
  }, u.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, u.minus = function(E, w) {
    var b, T, A, G, R = this, P = R.s;
    if (E = new I(E, w), w = E.s, !P || !w) return new I(NaN);
    if (P != w)
      return E.s = -w, R.plus(E);
    var D = R.e / xe, Y = E.e / xe, z = R.c, j = E.c;
    if (!D || !Y) {
      if (!z || !j) return z ? (E.s = -w, E) : new I(j ? R : NaN);
      if (!z[0] || !j[0])
        return j[0] ? (E.s = -w, E) : new I(z[0] ? R : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          h == 3 ? -0 : 0
        ));
    }
    if (D = Zt(D), Y = Zt(Y), z = z.slice(), P = D - Y) {
      for ((G = P < 0) ? (P = -P, A = z) : (Y = D, A = j), A.reverse(), w = P; w--; A.push(0)) ;
      A.reverse();
    } else
      for (T = (G = (P = z.length) < (w = j.length)) ? P : w, P = w = 0; w < T; w++)
        if (z[w] != j[w]) {
          G = z[w] < j[w];
          break;
        }
    if (G && (A = z, z = j, j = A, E.s = -E.s), w = (T = j.length) - (b = z.length), w > 0) for (; w--; z[b++] = 0) ;
    for (w = hn - 1; T > P; ) {
      if (z[--T] < j[T]) {
        for (b = T; b && !z[--b]; z[b] = w) ;
        --z[b], z[T] += hn;
      }
      z[T] -= j[T];
    }
    for (; z[0] == 0; z.splice(0, 1), --Y) ;
    return z[0] ? J(E, z, Y) : (E.s = h == 3 ? -1 : 1, E.c = [E.e = 0], E);
  }, u.modulo = u.mod = function(E, w) {
    var b, T, A = this;
    return E = new I(E, w), !A.c || !E.s || E.c && !E.c[0] ? new I(NaN) : !E.c || A.c && !A.c[0] ? new I(A) : (M == 9 ? (T = E.s, E.s = 1, b = e(A, E, 0, 3), E.s = T, b.s *= T) : b = e(A, E, 0, M), E = A.minus(b.times(E)), !E.c[0] && M == 1 && (E.s = A.s), E);
  }, u.multipliedBy = u.times = function(E, w) {
    var b, T, A, G, R, P, D, Y, z, j, Z, re, pe, le, ae, oe = this, Ee = oe.c, Ce = (E = new I(E, w)).c;
    if (!Ee || !Ce || !Ee[0] || !Ce[0])
      return !oe.s || !E.s || Ee && !Ee[0] && !Ce || Ce && !Ce[0] && !Ee ? E.c = E.e = E.s = null : (E.s *= oe.s, !Ee || !Ce ? E.c = E.e = null : (E.c = [0], E.e = 0)), E;
    for (T = Zt(oe.e / xe) + Zt(E.e / xe), E.s *= oe.s, D = Ee.length, j = Ce.length, D < j && (pe = Ee, Ee = Ce, Ce = pe, A = D, D = j, j = A), A = D + j, pe = []; A--; pe.push(0)) ;
    for (le = hn, ae = Er, A = j; --A >= 0; ) {
      for (b = 0, Z = Ce[A] % ae, re = Ce[A] / ae | 0, R = D, G = A + R; G > A; )
        Y = Ee[--R] % ae, z = Ee[R] / ae | 0, P = re * Y + z * Z, Y = Z * Y + P % ae * ae + pe[G] + b, b = (Y / le | 0) + (P / ae | 0) + re * z, pe[G--] = Y % le;
      pe[G] = b;
    }
    return b ? ++T : pe.splice(0, 1), J(E, pe, T);
  }, u.negated = function() {
    var E = new I(this);
    return E.s = -E.s || null, E;
  }, u.plus = function(E, w) {
    var b, T = this, A = T.s;
    if (E = new I(E, w), w = E.s, !A || !w) return new I(NaN);
    if (A != w)
      return E.s = -w, T.minus(E);
    var G = T.e / xe, R = E.e / xe, P = T.c, D = E.c;
    if (!G || !R) {
      if (!P || !D) return new I(A / 0);
      if (!P[0] || !D[0]) return D[0] ? E : new I(P[0] ? T : A * 0);
    }
    if (G = Zt(G), R = Zt(R), P = P.slice(), A = G - R) {
      for (A > 0 ? (R = G, b = D) : (A = -A, b = P), b.reverse(); A--; b.push(0)) ;
      b.reverse();
    }
    for (A = P.length, w = D.length, A - w < 0 && (b = D, D = P, P = b, w = A), A = 0; w; )
      A = (P[--w] = P[w] + D[w] + A) / hn | 0, P[w] = hn === P[w] ? 0 : P[w] % hn;
    return A && (P = [A].concat(P), ++R), J(E, P, R);
  }, u.precision = u.sd = function(E, w) {
    var b, T, A, G = this;
    if (E != null && E !== !!E)
      return Ve(E, 1, st), w == null ? w = h : Ve(w, 0, 8), U(new I(G), E, w);
    if (!(b = G.c)) return null;
    if (A = b.length - 1, T = A * xe + 1, A = b[A]) {
      for (; A % 10 == 0; A /= 10, T--) ;
      for (A = b[0]; A >= 10; A /= 10, T++) ;
    }
    return E && G.e + 1 > T && (T = G.e + 1), T;
  }, u.shiftedBy = function(E) {
    return Ve(E, -vu, vu), this.times("1e" + E);
  }, u.squareRoot = u.sqrt = function() {
    var E, w, b, T, A, G = this, R = G.c, P = G.s, D = G.e, Y = f + 4, z = new I("0.5");
    if (P !== 1 || !R || !R[0])
      return new I(!P || P < 0 && (!R || R[0]) ? NaN : R ? G : 1 / 0);
    if (P = Math.sqrt(+W(G)), P == 0 || P == 1 / 0 ? (w = Wt(R), (w.length + D) % 2 == 0 && (w += "0"), P = Math.sqrt(+w), D = Zt((D + 1) / 2) - (D < 0 || D % 2), P == 1 / 0 ? w = "5e" + D : (w = P.toExponential(), w = w.slice(0, w.indexOf("e") + 1) + D), b = new I(w)) : b = new I(P + ""), b.c[0]) {
      for (D = b.e, P = D + Y, P < 3 && (P = 0); ; )
        if (A = b, b = z.times(A.plus(e(G, A, Y, 1))), Wt(A.c).slice(0, P) === (w = Wt(b.c)).slice(0, P))
          if (b.e < D && --P, w = w.slice(P - 3, P + 1), w == "9999" || !T && w == "4999") {
            if (!T && (U(A, A.e + f + 2, 0), A.times(A).eq(G))) {
              b = A;
              break;
            }
            Y += 4, P += 4, T = 1;
          } else {
            (!+w || !+w.slice(1) && w.charAt(0) == "5") && (U(b, b.e + f + 2, 1), E = !b.times(b).eq(G));
            break;
          }
    }
    return U(b, b.e + f + 1, h, E);
  }, u.toExponential = function(E, w) {
    return E != null && (Ve(E, 0, st), E++), H(this, E, w, 1);
  }, u.toFixed = function(E, w) {
    return E != null && (Ve(E, 0, st), E = E + this.e + 1), H(this, E, w);
  }, u.toFormat = function(E, w, b) {
    var T, A = this;
    if (b == null)
      E != null && w && typeof w == "object" ? (b = w, w = null) : E && typeof E == "object" ? (b = E, E = w = null) : b = C;
    else if (typeof b != "object")
      throw Error(Ot + "Argument not an object: " + b);
    if (T = A.toFixed(E, w), A.c) {
      var G, R = T.split("."), P = +b.groupSize, D = +b.secondaryGroupSize, Y = b.groupSeparator || "", z = R[0], j = R[1], Z = A.s < 0, re = Z ? z.slice(1) : z, pe = re.length;
      if (D && (G = P, P = D, D = G, pe -= G), P > 0 && pe > 0) {
        for (G = pe % P || P, z = re.substr(0, G); G < pe; G += P) z += Y + re.substr(G, P);
        D > 0 && (z += Y + re.slice(G)), Z && (z = "-" + z);
      }
      T = j ? z + (b.decimalSeparator || "") + ((D = +b.fractionGroupSize) ? j.replace(
        new RegExp("\\d{" + D + "}\\B", "g"),
        "$&" + (b.fractionGroupSeparator || "")
      ) : j) : z;
    }
    return (b.prefix || "") + T + (b.suffix || "");
  }, u.toFraction = function(E) {
    var w, b, T, A, G, R, P, D, Y, z, j, Z, re = this, pe = re.c;
    if (E != null && (P = new I(E), !P.isInteger() && (P.c || P.s !== 1) || P.lt(c)))
      throw Error(Ot + "Argument " + (P.isInteger() ? "out of range: " : "not an integer: ") + W(P));
    if (!pe) return new I(re);
    for (w = new I(c), Y = b = new I(c), T = D = new I(c), Z = Wt(pe), G = w.e = Z.length - re.e - 1, w.c[0] = yu[(R = G % xe) < 0 ? xe + R : R], E = !E || P.comparedTo(w) > 0 ? G > 0 ? w : Y : P, R = _, _ = 1 / 0, P = new I(Z), D.c[0] = 0; z = e(P, w, 0, 1), A = b.plus(z.times(T)), A.comparedTo(E) != 1; )
      b = T, T = A, Y = D.plus(z.times(A = Y)), D = A, w = P.minus(z.times(A = w)), P = A;
    return A = e(E.minus(b), T, 0, 1), D = D.plus(A.times(Y)), b = b.plus(A.times(T)), D.s = Y.s = re.s, G = G * 2, j = e(Y, T, G, h).minus(re).abs().comparedTo(
      e(D, b, G, h).minus(re).abs()
    ) < 1 ? [Y, T] : [D, b], _ = R, j;
  }, u.toNumber = function() {
    return +W(this);
  }, u.toPrecision = function(E, w) {
    return E != null && Ve(E, 1, st), H(this, E, w, 2);
  }, u.toString = function(E) {
    var w, b = this, T = b.s, A = b.e;
    return A === null ? T ? (w = "Infinity", T < 0 && (w = "-" + w)) : w = "NaN" : (E == null ? w = A <= p || A >= d ? Pa(Wt(b.c), A) : tr(Wt(b.c), A, "0") : E === 10 && O ? (b = U(new I(b), f + A + 1, h), w = tr(Wt(b.c), b.e, "0")) : (Ve(E, 2, F.length, "Base"), w = r(tr(Wt(b.c), A, "0"), 10, E, T, !0)), T < 0 && b.c[0] && (w = "-" + w)), w;
  }, u.valueOf = u.toJSON = function() {
    return W(this);
  }, u._isBigNumber = !0, u[Symbol.toStringTag] = "BigNumber", u[Symbol.for("nodejs.util.inspect.custom")] = u.valueOf, t != null && I.set(t), I;
}
function Zt(t) {
  var e = t | 0;
  return t > 0 || t === e ? e : e - 1;
}
function Wt(t) {
  for (var e, r, s = 1, u = t.length, c = t[0] + ""; s < u; ) {
    for (e = t[s++] + "", r = xe - e.length; r--; e = "0" + e) ;
    c += e;
  }
  for (u = c.length; c.charCodeAt(--u) === 48; ) ;
  return c.slice(0, u + 1 || 1);
}
function Hr(t, e) {
  var r, s, u = t.c, c = e.c, f = t.s, h = e.s, p = t.e, d = e.e;
  if (!f || !h) return null;
  if (r = u && !u[0], s = c && !c[0], r || s) return r ? s ? 0 : -h : f;
  if (f != h) return f;
  if (r = f < 0, s = p == d, !u || !c) return s ? 0 : !u ^ r ? 1 : -1;
  if (!s) return p > d ^ r ? 1 : -1;
  for (h = (p = u.length) < (d = c.length) ? p : d, f = 0; f < h; f++) if (u[f] != c[f]) return u[f] > c[f] ^ r ? 1 : -1;
  return p == d ? 0 : p > d ^ r ? 1 : -1;
}
function Ve(t, e, r, s) {
  if (t < e || t > r || t !== jt(t))
    throw Error(Ot + (s || "Argument") + (typeof t == "number" ? t < e || t > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(t));
}
function Na(t) {
  var e = t.c.length - 1;
  return Zt(t.e / xe) == e && t.c[e] % 2 != 0;
}
function Pa(t, e) {
  return (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) + (e < 0 ? "e" : "e+") + e;
}
function tr(t, e, r) {
  var s, u;
  if (e < 0) {
    for (u = r + "."; ++e; u += r) ;
    t = u + t;
  } else if (s = t.length, ++e > s) {
    for (u = r, e -= s; --e; u += r) ;
    t += u;
  } else e < s && (t = t.slice(0, e) + "." + t.slice(e));
  return t;
}
var Yn = bp(), KS = class {
  key;
  left = null;
  right = null;
  constructor(t) {
    this.key = t;
  }
}, _s = class extends KS {
  constructor(t) {
    super(t);
  }
}, QS = class {
  size = 0;
  modificationCount = 0;
  splayCount = 0;
  splay(t) {
    const e = this.root;
    if (e == null)
      return this.compare(t, t), -1;
    let r = null, s = null, u = null, c = null, f = e;
    const h = this.compare;
    let p;
    for (; ; )
      if (p = h(f.key, t), p > 0) {
        let d = f.left;
        if (d == null || (p = h(d.key, t), p > 0 && (f.left = d.right, d.right = f, f = d, d = f.left, d == null)))
          break;
        r == null ? s = f : r.left = f, r = f, f = d;
      } else if (p < 0) {
        let d = f.right;
        if (d == null || (p = h(d.key, t), p < 0 && (f.right = d.left, d.left = f, f = d, d = f.right, d == null)))
          break;
        u == null ? c = f : u.right = f, u = f, f = d;
      } else
        break;
    return u != null && (u.right = f.left, f.left = c), r != null && (r.left = f.right, f.right = s), this.root !== f && (this.root = f, this.splayCount++), p;
  }
  splayMin(t) {
    let e = t, r = e.left;
    for (; r != null; ) {
      const s = r;
      e.left = s.right, s.right = e, e = s, r = e.left;
    }
    return e;
  }
  splayMax(t) {
    let e = t, r = e.right;
    for (; r != null; ) {
      const s = r;
      e.right = s.left, s.left = e, e = s, r = e.right;
    }
    return e;
  }
  _delete(t) {
    if (this.root == null || this.splay(t) != 0) return null;
    let r = this.root;
    const s = r, u = r.left;
    if (this.size--, u == null)
      this.root = r.right;
    else {
      const c = r.right;
      r = this.splayMax(u), r.right = c, this.root = r;
    }
    return this.modificationCount++, s;
  }
  addNewRoot(t, e) {
    this.size++, this.modificationCount++;
    const r = this.root;
    if (r == null) {
      this.root = t;
      return;
    }
    e < 0 ? (t.left = r, t.right = r.right, r.right = null) : (t.right = r, t.left = r.left, r.left = null), this.root = t;
  }
  _first() {
    const t = this.root;
    return t == null ? null : (this.root = this.splayMin(t), this.root);
  }
  _last() {
    const t = this.root;
    return t == null ? null : (this.root = this.splayMax(t), this.root);
  }
  clear() {
    this.root = null, this.size = 0, this.modificationCount++;
  }
  has(t) {
    return this.validKey(t) && this.splay(t) == 0;
  }
  defaultCompare() {
    return (t, e) => t < e ? -1 : t > e ? 1 : 0;
  }
  wrap() {
    return {
      getRoot: () => this.root,
      setRoot: (t) => {
        this.root = t;
      },
      getSize: () => this.size,
      getModificationCount: () => this.modificationCount,
      getSplayCount: () => this.splayCount,
      setSplayCount: (t) => {
        this.splayCount = t;
      },
      splay: (t) => this.splay(t),
      has: (t) => this.has(t)
    };
  }
}, co = class Ls extends QS {
  root = null;
  compare;
  validKey;
  constructor(e, r) {
    super(), this.compare = e ?? this.defaultCompare(), this.validKey = r ?? ((s) => s != null && s != null);
  }
  delete(e) {
    return this.validKey(e) ? this._delete(e) != null : !1;
  }
  deleteAll(e) {
    for (const r of e)
      this.delete(r);
  }
  forEach(e) {
    const r = this[Symbol.iterator]();
    let s;
    for (; s = r.next(), !s.done; )
      e(s.value, s.value, this);
  }
  add(e) {
    const r = this.splay(e);
    return r != 0 && this.addNewRoot(new _s(e), r), this;
  }
  addAndReturn(e) {
    const r = this.splay(e);
    return r != 0 && this.addNewRoot(new _s(e), r), this.root.key;
  }
  addAll(e) {
    for (const r of e)
      this.add(r);
  }
  isEmpty() {
    return this.root == null;
  }
  isNotEmpty() {
    return this.root != null;
  }
  single() {
    if (this.size == 0) throw "Bad state: No element";
    if (this.size > 1) throw "Bad state: Too many element";
    return this.root.key;
  }
  first() {
    if (this.size == 0) throw "Bad state: No element";
    return this._first().key;
  }
  last() {
    if (this.size == 0) throw "Bad state: No element";
    return this._last().key;
  }
  lastBefore(e) {
    if (e == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(e) < 0) return this.root.key;
    let s = this.root.left;
    if (s == null) return null;
    let u = s.right;
    for (; u != null; )
      s = u, u = s.right;
    return s.key;
  }
  firstAfter(e) {
    if (e == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(e) > 0) return this.root.key;
    let s = this.root.right;
    if (s == null) return null;
    let u = s.left;
    for (; u != null; )
      s = u, u = s.left;
    return s.key;
  }
  retainAll(e) {
    const r = new Ls(this.compare, this.validKey), s = this.modificationCount;
    for (const u of e) {
      if (s != this.modificationCount)
        throw "Concurrent modification during iteration.";
      this.validKey(u) && this.splay(u) == 0 && r.add(this.root.key);
    }
    r.size != this.size && (this.root = r.root, this.size = r.size, this.modificationCount++);
  }
  lookup(e) {
    return !this.validKey(e) || this.splay(e) != 0 ? null : this.root.key;
  }
  intersection(e) {
    const r = new Ls(this.compare, this.validKey);
    for (const s of this)
      e.has(s) && r.add(s);
    return r;
  }
  difference(e) {
    const r = new Ls(this.compare, this.validKey);
    for (const s of this)
      e.has(s) || r.add(s);
    return r;
  }
  union(e) {
    const r = this.clone();
    return r.addAll(e), r;
  }
  clone() {
    const e = new Ls(this.compare, this.validKey);
    return e.size = this.size, e.root = this.copyNode(this.root), e;
  }
  copyNode(e) {
    if (e == null) return null;
    function r(u, c) {
      let f, h;
      do {
        if (f = u.left, h = u.right, f != null) {
          const p = new _s(f.key);
          c.left = p, r(f, p);
        }
        if (h != null) {
          const p = new _s(h.key);
          c.right = p, u = h, c = p;
        }
      } while (h != null);
    }
    const s = new _s(e.key);
    return r(e, s), s;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new tM(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return new eM(this.wrap());
  }
  [Symbol.toStringTag] = "[object Set]";
}, Lp = class {
  tree;
  path = new Array();
  modificationCount = null;
  splayCount;
  constructor(t) {
    this.tree = t, this.splayCount = t.getSplayCount();
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    return this.moveNext() ? { done: !1, value: this.current() } : { done: !0, value: null };
  }
  current() {
    if (!this.path.length) return null;
    const t = this.path[this.path.length - 1];
    return this.getValue(t);
  }
  rebuildPath(t) {
    this.path.splice(0, this.path.length), this.tree.splay(t), this.path.push(this.tree.getRoot()), this.splayCount = this.tree.getSplayCount();
  }
  findLeftMostDescendent(t) {
    for (; t != null; )
      this.path.push(t), t = t.left;
  }
  moveNext() {
    if (this.modificationCount != this.tree.getModificationCount()) {
      if (this.modificationCount == null) {
        this.modificationCount = this.tree.getModificationCount();
        let r = this.tree.getRoot();
        for (; r != null; )
          this.path.push(r), r = r.left;
        return this.path.length > 0;
      }
      throw "Concurrent modification during iteration.";
    }
    if (!this.path.length) return !1;
    this.splayCount != this.tree.getSplayCount() && this.rebuildPath(this.path[this.path.length - 1].key);
    let t = this.path[this.path.length - 1], e = t.right;
    if (e != null) {
      for (; e != null; )
        this.path.push(e), e = e.left;
      return !0;
    }
    for (this.path.pop(); this.path.length && this.path[this.path.length - 1].right === t; )
      t = this.path.pop();
    return this.path.length > 0;
  }
}, eM = class extends Lp {
  getValue(t) {
    return t.key;
  }
}, tM = class extends Lp {
  getValue(t) {
    return [t.key, t.key];
  }
}, Tp = (t) => () => t, nl = (t) => {
  const e = t ? (r, s) => s.minus(r).abs().isLessThanOrEqualTo(t) : Tp(!1);
  return (r, s) => e(r, s) ? 0 : r.comparedTo(s);
};
function nM(t) {
  const e = t ? (r, s, u, c, f) => r.exponentiatedBy(2).isLessThanOrEqualTo(
    c.minus(s).exponentiatedBy(2).plus(f.minus(u).exponentiatedBy(2)).times(t)
  ) : Tp(!1);
  return (r, s, u) => {
    const c = r.x, f = r.y, h = u.x, p = u.y, d = f.minus(p).times(s.x.minus(h)).minus(c.minus(h).times(s.y.minus(p)));
    return e(d, c, f, h, p) ? 0 : d.comparedTo(0);
  };
}
var rM = (t) => t, iM = (t) => {
  if (t) {
    const e = new co(nl(t)), r = new co(nl(t)), s = (c, f) => f.addAndReturn(c), u = (c) => ({
      x: s(c.x, e),
      y: s(c.y, r)
    });
    return u({ x: new Yn(0), y: new Yn(0) }), u;
  }
  return rM;
}, rl = (t) => ({
  set: (e) => {
    ur = rl(e);
  },
  reset: () => rl(t),
  compare: nl(t),
  snap: iM(t),
  orient: nM(t)
}), ur = rl(), Es = (t, e) => t.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(t.ur.x) && t.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(t.ur.y), il = (t, e) => {
  if (e.ur.x.isLessThan(t.ll.x) || t.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(t.ll.y) || t.ur.y.isLessThan(e.ll.y))
    return null;
  const r = t.ll.x.isLessThan(e.ll.x) ? e.ll.x : t.ll.x, s = t.ur.x.isLessThan(e.ur.x) ? t.ur.x : e.ur.x, u = t.ll.y.isLessThan(e.ll.y) ? e.ll.y : t.ll.y, c = t.ur.y.isLessThan(e.ur.y) ? t.ur.y : e.ur.y;
  return { ll: { x: r, y: u }, ur: { x: s, y: c } };
}, Ha = (t, e) => t.x.times(e.y).minus(t.y.times(e.x)), Ap = (t, e) => t.x.times(e.x).plus(t.y.times(e.y)), ho = (t) => Ap(t, t).sqrt(), sM = (t, e, r) => {
  const s = { x: e.x.minus(t.x), y: e.y.minus(t.y) }, u = { x: r.x.minus(t.x), y: r.y.minus(t.y) };
  return Ha(u, s).div(ho(u)).div(ho(s));
}, aM = (t, e, r) => {
  const s = { x: e.x.minus(t.x), y: e.y.minus(t.y) }, u = { x: r.x.minus(t.x), y: r.y.minus(t.y) };
  return Ap(u, s).div(ho(u)).div(ho(s));
}, Pf = (t, e, r) => e.y.isZero() ? null : { x: t.x.plus(e.x.div(e.y).times(r.minus(t.y))), y: r }, Of = (t, e, r) => e.x.isZero() ? null : { x: r, y: t.y.plus(e.y.div(e.x).times(r.minus(t.x))) }, oM = (t, e, r, s) => {
  if (e.x.isZero()) return Of(r, s, t.x);
  if (s.x.isZero()) return Of(t, e, r.x);
  if (e.y.isZero()) return Pf(r, s, t.y);
  if (s.y.isZero()) return Pf(t, e, r.y);
  const u = Ha(e, s);
  if (u.isZero()) return null;
  const c = { x: r.x.minus(t.x), y: r.y.minus(t.y) }, f = Ha(c, e).div(u), h = Ha(c, s).div(u), p = t.x.plus(h.times(e.x)), d = r.x.plus(f.times(s.x)), v = t.y.plus(h.times(e.y)), _ = r.y.plus(f.times(s.y)), x = p.plus(d).div(2), M = v.plus(_).div(2);
  return { x, y: M };
}, Gn = class Cp {
  point;
  isLeft;
  segment;
  otherSE;
  consumedBy;
  // for ordering sweep events in the sweep event queue
  static compare(e, r) {
    const s = Cp.comparePoints(e.point, r.point);
    return s !== 0 ? s : (e.point !== r.point && e.link(r), e.isLeft !== r.isLeft ? e.isLeft ? 1 : -1 : go.compare(e.segment, r.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(e, r) {
    return e.x.isLessThan(r.x) ? -1 : e.x.isGreaterThan(r.x) ? 1 : e.y.isLessThan(r.y) ? -1 : e.y.isGreaterThan(r.y) ? 1 : 0;
  }
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(e, r) {
    e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = r;
  }
  link(e) {
    if (e.point === this.point)
      throw new Error("Tried to link already linked events");
    const r = e.point.events;
    for (let s = 0, u = r.length; s < u; s++) {
      const c = r[s];
      this.point.events.push(c), c.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const e = this.point.events.length;
    for (let r = 0; r < e; r++) {
      const s = this.point.events[r];
      if (s.segment.consumedBy === void 0)
        for (let u = r + 1; u < e; u++) {
          const c = this.point.events[u];
          c.consumedBy === void 0 && s.otherSE.point.events === c.otherSE.point.events && s.segment.consume(c.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const e = [];
    for (let r = 0, s = this.point.events.length; r < s; r++) {
      const u = this.point.events[r];
      u !== this && !u.segment.ringOut && u.segment.isInResult() && e.push(u);
    }
    return e;
  }
  /**
   * Returns a comparator function for sorting linked events that will
   * favor the event that will give us the smallest left-side angle.
   * All ring construction starts as low as possible heading to the right,
   * so by always turning left as sharp as possible we'll get polygons
   * without uncessary loops & holes.
   *
   * The comparator function has a compute cache such that it avoids
   * re-computing already-computed values.
   */
  getLeftmostComparator(e) {
    const r = /* @__PURE__ */ new Map(), s = (u) => {
      const c = u.otherSE;
      r.set(u, {
        sine: sM(this.point, e.point, c.point),
        cosine: aM(this.point, e.point, c.point)
      });
    };
    return (u, c) => {
      r.has(u) || s(u), r.has(c) || s(c);
      const { sine: f, cosine: h } = r.get(u), { sine: p, cosine: d } = r.get(c);
      return f.isGreaterThanOrEqualTo(0) && p.isGreaterThanOrEqualTo(0) ? h.isLessThan(d) ? 1 : h.isGreaterThan(d) ? -1 : 0 : f.isLessThan(0) && p.isLessThan(0) ? h.isLessThan(d) ? -1 : h.isGreaterThan(d) ? 1 : 0 : p.isLessThan(f) ? -1 : p.isGreaterThan(f) ? 1 : 0;
    };
  }
}, uM = class sl {
  events;
  poly;
  _isExteriorRing;
  _enclosingRing;
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(e) {
    const r = [];
    for (let s = 0, u = e.length; s < u; s++) {
      const c = e[s];
      if (!c.isInResult() || c.ringOut) continue;
      let f = null, h = c.leftSE, p = c.rightSE;
      const d = [h], v = h.point, _ = [];
      for (; f = h, h = p, d.push(h), h.point !== v; )
        for (; ; ) {
          const x = h.getAvailableLinkedEvents();
          if (x.length === 0) {
            const C = d[0].point, F = d[d.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${C.x}, ${C.y}]. Last matching segment found ends at [${F.x}, ${F.y}].`
            );
          }
          if (x.length === 1) {
            p = x[0].otherSE;
            break;
          }
          let M = null;
          for (let C = 0, F = _.length; C < F; C++)
            if (_[C].point === h.point) {
              M = C;
              break;
            }
          if (M !== null) {
            const C = _.splice(M)[0], F = d.splice(C.index);
            F.unshift(F[0].otherSE), r.push(new sl(F.reverse()));
            continue;
          }
          _.push({
            index: d.length,
            point: h.point
          });
          const S = h.getLeftmostComparator(f);
          p = x.sort(S)[0].otherSE;
          break;
        }
      r.push(new sl(d));
    }
    return r;
  }
  constructor(e) {
    this.events = e;
    for (let r = 0, s = e.length; r < s; r++)
      e[r].segment.ringOut = this;
    this.poly = null;
  }
  getGeom() {
    let e = this.events[0].point;
    const r = [e];
    for (let d = 1, v = this.events.length - 1; d < v; d++) {
      const _ = this.events[d].point, x = this.events[d + 1].point;
      ur.orient(_, e, x) !== 0 && (r.push(_), e = _);
    }
    if (r.length === 1) return null;
    const s = r[0], u = r[1];
    ur.orient(s, e, u) === 0 && r.shift(), r.push(r[0]);
    const c = this.isExteriorRing() ? 1 : -1, f = this.isExteriorRing() ? 0 : r.length - 1, h = this.isExteriorRing() ? r.length : -1, p = [];
    for (let d = f; d != h; d += c)
      p.push([r[d].x.toNumber(), r[d].y.toNumber()]);
    return p;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const e = this.enclosingRing();
      this._isExteriorRing = e ? !e.isExteriorRing() : !0;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    let e = this.events[0];
    for (let u = 1, c = this.events.length; u < c; u++) {
      const f = this.events[u];
      Gn.compare(e, f) > 0 && (e = f);
    }
    let r = e.segment.prevInResult(), s = r ? r.prevInResult() : null;
    for (; ; ) {
      if (!r) return null;
      if (!s) return r.ringOut;
      if (s.ringOut !== r.ringOut)
        return s.ringOut?.enclosingRing() !== r.ringOut ? r.ringOut : r.ringOut?.enclosingRing();
      r = s.prevInResult(), s = r ? r.prevInResult() : null;
    }
  }
}, Rf = class {
  exteriorRing;
  interiorRings;
  constructor(t) {
    this.exteriorRing = t, t.poly = this, this.interiorRings = [];
  }
  addInterior(t) {
    this.interiorRings.push(t), t.poly = this;
  }
  getGeom() {
    const t = this.exteriorRing.getGeom();
    if (t === null) return null;
    const e = [t];
    for (let r = 0, s = this.interiorRings.length; r < s; r++) {
      const u = this.interiorRings[r].getGeom();
      u !== null && e.push(u);
    }
    return e;
  }
}, lM = class {
  rings;
  polys;
  constructor(t) {
    this.rings = t, this.polys = this._composePolys(t);
  }
  getGeom() {
    const t = [];
    for (let e = 0, r = this.polys.length; e < r; e++) {
      const s = this.polys[e].getGeom();
      s !== null && t.push(s);
    }
    return t;
  }
  _composePolys(t) {
    const e = [];
    for (let r = 0, s = t.length; r < s; r++) {
      const u = t[r];
      if (!u.poly)
        if (u.isExteriorRing()) e.push(new Rf(u));
        else {
          const c = u.enclosingRing();
          c?.poly || e.push(new Rf(c)), c?.poly?.addInterior(u);
        }
    }
    return e;
  }
}, cM = class {
  queue;
  tree;
  segments;
  constructor(t, e = go.compare) {
    this.queue = t, this.tree = new co(e), this.segments = [];
  }
  process(t) {
    const e = t.segment, r = [];
    if (t.consumedBy)
      return t.isLeft ? this.queue.delete(t.otherSE) : this.tree.delete(e), r;
    t.isLeft && this.tree.add(e);
    let s = e, u = e;
    do
      s = this.tree.lastBefore(s);
    while (s != null && s.consumedBy != null);
    do
      u = this.tree.firstAfter(u);
    while (u != null && u.consumedBy != null);
    if (t.isLeft) {
      let c = null;
      if (s) {
        const h = s.getIntersection(e);
        if (h !== null && (e.isAnEndpoint(h) || (c = h), !s.isAnEndpoint(h))) {
          const p = this._splitSafely(s, h);
          for (let d = 0, v = p.length; d < v; d++)
            r.push(p[d]);
        }
      }
      let f = null;
      if (u) {
        const h = u.getIntersection(e);
        if (h !== null && (e.isAnEndpoint(h) || (f = h), !u.isAnEndpoint(h))) {
          const p = this._splitSafely(u, h);
          for (let d = 0, v = p.length; d < v; d++)
            r.push(p[d]);
        }
      }
      if (c !== null || f !== null) {
        let h = null;
        c === null ? h = f : f === null ? h = c : h = Gn.comparePoints(
          c,
          f
        ) <= 0 ? c : f, this.queue.delete(e.rightSE), r.push(e.rightSE);
        const p = e.split(h);
        for (let d = 0, v = p.length; d < v; d++)
          r.push(p[d]);
      }
      r.length > 0 ? (this.tree.delete(e), r.push(t)) : (this.segments.push(e), e.prev = s);
    } else {
      if (s && u) {
        const c = s.getIntersection(u);
        if (c !== null) {
          if (!s.isAnEndpoint(c)) {
            const f = this._splitSafely(s, c);
            for (let h = 0, p = f.length; h < p; h++)
              r.push(f[h]);
          }
          if (!u.isAnEndpoint(c)) {
            const f = this._splitSafely(u, c);
            for (let h = 0, p = f.length; h < p; h++)
              r.push(f[h]);
          }
        }
      }
      this.tree.delete(e);
    }
    return r;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(t, e) {
    this.tree.delete(t);
    const r = t.rightSE;
    this.queue.delete(r);
    const s = t.split(e);
    return s.push(r), t.consumedBy === void 0 && this.tree.add(t), s;
  }
}, hM = class {
  type;
  numMultiPolys;
  run(t, e, r) {
    Ts.type = t;
    const s = [new Ff(e, !0)];
    for (let d = 0, v = r.length; d < v; d++)
      s.push(new Ff(r[d], !1));
    if (Ts.numMultiPolys = s.length, Ts.type === "difference") {
      const d = s[0];
      let v = 1;
      for (; v < s.length; )
        il(s[v].bbox, d.bbox) !== null ? v++ : s.splice(v, 1);
    }
    if (Ts.type === "intersection")
      for (let d = 0, v = s.length; d < v; d++) {
        const _ = s[d];
        for (let x = d + 1, M = s.length; x < M; x++)
          if (il(_.bbox, s[x].bbox) === null) return [];
      }
    const u = new co(Gn.compare);
    for (let d = 0, v = s.length; d < v; d++) {
      const _ = s[d].getSweepEvents();
      for (let x = 0, M = _.length; x < M; x++)
        u.add(_[x]);
    }
    const c = new cM(u);
    let f = null;
    for (u.size != 0 && (f = u.first(), u.delete(f)); f; ) {
      const d = c.process(f);
      for (let v = 0, _ = d.length; v < _; v++) {
        const x = d[v];
        x.consumedBy === void 0 && u.add(x);
      }
      u.size != 0 ? (f = u.first(), u.delete(f)) : f = null;
    }
    ur.reset();
    const h = uM.factory(c.segments);
    return new lM(h).getGeom();
  }
}, Ts = new hM(), fo = Ts, fM = 0, go = class Ja {
  id;
  leftSE;
  rightSE;
  rings;
  windings;
  ringOut;
  consumedBy;
  prev;
  _prevInResult;
  _beforeState;
  _afterState;
  _isInResult;
  /* This compare() function is for ordering segments in the sweep
   * line tree, and does so according to the following criteria:
   *
   * Consider the vertical line that lies an infinestimal step to the
   * right of the right-more of the two left endpoints of the input
   * segments. Imagine slowly moving a point up from negative infinity
   * in the increasing y direction. Which of the two segments will that
   * point intersect first? That segment comes 'before' the other one.
   *
   * If neither segment would be intersected by such a line, (if one
   * or more of the segments are vertical) then the line to be considered
   * is directly on the right-more of the two left inputs.
   */
  static compare(e, r) {
    const s = e.leftSE.point.x, u = r.leftSE.point.x, c = e.rightSE.point.x, f = r.rightSE.point.x;
    if (f.isLessThan(s)) return 1;
    if (c.isLessThan(u)) return -1;
    const h = e.leftSE.point.y, p = r.leftSE.point.y, d = e.rightSE.point.y, v = r.rightSE.point.y;
    if (s.isLessThan(u)) {
      if (p.isLessThan(h) && p.isLessThan(d)) return 1;
      if (p.isGreaterThan(h) && p.isGreaterThan(d)) return -1;
      const _ = e.comparePoint(r.leftSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
      const x = r.comparePoint(e.rightSE.point);
      return x !== 0 ? x : -1;
    }
    if (s.isGreaterThan(u)) {
      if (h.isLessThan(p) && h.isLessThan(v)) return -1;
      if (h.isGreaterThan(p) && h.isGreaterThan(v)) return 1;
      const _ = r.comparePoint(e.leftSE.point);
      if (_ !== 0) return _;
      const x = e.comparePoint(r.rightSE.point);
      return x < 0 ? 1 : x > 0 ? -1 : 1;
    }
    if (h.isLessThan(p)) return -1;
    if (h.isGreaterThan(p)) return 1;
    if (c.isLessThan(f)) {
      const _ = r.comparePoint(e.rightSE.point);
      if (_ !== 0) return _;
    }
    if (c.isGreaterThan(f)) {
      const _ = e.comparePoint(r.rightSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
    }
    if (!c.eq(f)) {
      const _ = d.minus(h), x = c.minus(s), M = v.minus(p), S = f.minus(u);
      if (_.isGreaterThan(x) && M.isLessThan(S)) return 1;
      if (_.isLessThan(x) && M.isGreaterThan(S)) return -1;
    }
    return c.isGreaterThan(f) ? 1 : c.isLessThan(f) || d.isLessThan(v) ? -1 : d.isGreaterThan(v) ? 1 : e.id < r.id ? -1 : e.id > r.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, r, s, u) {
    this.id = ++fM, this.leftSE = e, e.segment = this, e.otherSE = r, this.rightSE = r, r.segment = this, r.otherSE = e, this.rings = s, this.windings = u;
  }
  static fromRing(e, r, s) {
    let u, c, f;
    const h = Gn.comparePoints(e, r);
    if (h < 0)
      u = e, c = r, f = 1;
    else if (h > 0)
      u = r, c = e, f = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const p = new Gn(u, !0), d = new Gn(c, !1);
    return new Ja(p, d, [s], [f]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(e) {
    this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const e = this.leftSE.point.y, r = this.rightSE.point.y;
    return {
      ll: { x: this.leftSE.point.x, y: e.isLessThan(r) ? e : r },
      ur: { x: this.rightSE.point.x, y: e.isGreaterThan(r) ? e : r }
    };
  }
  /* A vector from the left point to the right */
  vector() {
    return {
      x: this.rightSE.point.x.minus(this.leftSE.point.x),
      y: this.rightSE.point.y.minus(this.leftSE.point.y)
    };
  }
  isAnEndpoint(e) {
    return e.x.eq(this.leftSE.point.x) && e.y.eq(this.leftSE.point.y) || e.x.eq(this.rightSE.point.x) && e.y.eq(this.rightSE.point.y);
  }
  /* Compare this segment with a point.
   *
   * A point P is considered to be colinear to a segment if there
   * exists a distance D such that if we travel along the segment
   * from one * endpoint towards the other a distance D, we find
   * ourselves at point P.
   *
   * Return value indicates:
   *
   *   1: point lies above the segment (to the left of vertical)
   *   0: point is colinear to segment
   *  -1: point lies below the segment (to the right of vertical)
   */
  comparePoint(e) {
    return ur.orient(this.leftSE.point, e, this.rightSE.point);
  }
  /**
   * Given another segment, returns the first non-trivial intersection
   * between the two segments (in terms of sweep line ordering), if it exists.
   *
   * A 'non-trivial' intersection is one that will cause one or both of the
   * segments to be split(). As such, 'trivial' vs. 'non-trivial' intersection:
   *
   *   * endpoint of segA with endpoint of segB --> trivial
   *   * endpoint of segA with point along segB --> non-trivial
   *   * endpoint of segB with point along segA --> non-trivial
   *   * point along segA with point along segB --> non-trivial
   *
   * If no non-trivial intersection exists, return null
   * Else, return null.
   */
  getIntersection(e) {
    const r = this.bbox(), s = e.bbox(), u = il(r, s);
    if (u === null) return null;
    const c = this.leftSE.point, f = this.rightSE.point, h = e.leftSE.point, p = e.rightSE.point, d = Es(r, h) && this.comparePoint(h) === 0, v = Es(s, c) && e.comparePoint(c) === 0, _ = Es(r, p) && this.comparePoint(p) === 0, x = Es(s, f) && e.comparePoint(f) === 0;
    if (v && d)
      return x && !_ ? f : !x && _ ? p : null;
    if (v)
      return _ && c.x.eq(p.x) && c.y.eq(p.y) ? null : c;
    if (d)
      return x && f.x.eq(h.x) && f.y.eq(h.y) ? null : h;
    if (x && _) return null;
    if (x) return f;
    if (_) return p;
    const M = oM(c, this.vector(), h, e.vector());
    return M === null || !Es(u, M) ? null : ur.snap(M);
  }
  /**
   * Split the given segment into multiple segments on the given points.
   *  * Each existing segment will retain its leftSE and a new rightSE will be
   *    generated for it.
   *  * A new segment will be generated which will adopt the original segment's
   *    rightSE, and a new leftSE will be generated for it.
   *  * If there are more than two points given to split on, new segments
   *    in the middle will be generated with new leftSE and rightSE's.
   *  * An array of the newly generated SweepEvents will be returned.
   *
   * Warning: input array of points is modified
   */
  split(e) {
    const r = [], s = e.events !== void 0, u = new Gn(e, !0), c = new Gn(e, !1), f = this.rightSE;
    this.replaceRightSE(c), r.push(c), r.push(u);
    const h = new Ja(
      u,
      f,
      this.rings.slice(),
      this.windings.slice()
    );
    return Gn.comparePoints(h.leftSE.point, h.rightSE.point) > 0 && h.swapEvents(), Gn.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), s && (u.checkForConsuming(), c.checkForConsuming()), r;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const e = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let r = 0, s = this.windings.length; r < s; r++)
      this.windings[r] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(e) {
    let r = this, s = e;
    for (; r.consumedBy; ) r = r.consumedBy;
    for (; s.consumedBy; ) s = s.consumedBy;
    const u = Ja.compare(r, s);
    if (u !== 0) {
      if (u > 0) {
        const c = r;
        r = s, s = c;
      }
      if (r.prev === s) {
        const c = r;
        r = s, s = c;
      }
      for (let c = 0, f = s.rings.length; c < f; c++) {
        const h = s.rings[c], p = s.windings[c], d = r.rings.indexOf(h);
        d === -1 ? (r.rings.push(h), r.windings.push(p)) : r.windings[d] += p;
      }
      s.rings = null, s.windings = null, s.consumedBy = r, s.leftSE.consumedBy = r.leftSE, s.rightSE.consumedBy = r.rightSE;
    }
  }
  /* The first segment previous segment chain that is in the result */
  prevInResult() {
    return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
  }
  beforeState() {
    if (this._beforeState !== void 0) return this._beforeState;
    if (!this.prev)
      this._beforeState = {
        rings: [],
        windings: [],
        multiPolys: []
      };
    else {
      const e = this.prev.consumedBy || this.prev;
      this._beforeState = e.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const e = this.beforeState();
    this._afterState = {
      rings: e.rings.slice(0),
      windings: e.windings.slice(0),
      multiPolys: []
    };
    const r = this._afterState.rings, s = this._afterState.windings, u = this._afterState.multiPolys;
    for (let h = 0, p = this.rings.length; h < p; h++) {
      const d = this.rings[h], v = this.windings[h], _ = r.indexOf(d);
      _ === -1 ? (r.push(d), s.push(v)) : s[_] += v;
    }
    const c = [], f = [];
    for (let h = 0, p = r.length; h < p; h++) {
      if (s[h] === 0) continue;
      const d = r[h], v = d.poly;
      if (f.indexOf(v) === -1)
        if (d.isExterior) c.push(v);
        else {
          f.indexOf(v) === -1 && f.push(v);
          const _ = c.indexOf(d.poly);
          _ !== -1 && c.splice(_, 1);
        }
    }
    for (let h = 0, p = c.length; h < p; h++) {
      const d = c[h].multiPoly;
      u.indexOf(d) === -1 && u.push(d);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const e = this.beforeState().multiPolys, r = this.afterState().multiPolys;
    switch (fo.type) {
      case "union": {
        const s = e.length === 0, u = r.length === 0;
        this._isInResult = s !== u;
        break;
      }
      case "intersection": {
        let s, u;
        e.length < r.length ? (s = e.length, u = r.length) : (s = r.length, u = e.length), this._isInResult = u === fo.numMultiPolys && s < u;
        break;
      }
      case "xor": {
        const s = Math.abs(e.length - r.length);
        this._isInResult = s % 2 === 1;
        break;
      }
      case "difference": {
        const s = (u) => u.length === 1 && u[0].isSubject;
        this._isInResult = s(e) !== s(r);
        break;
      }
    }
    return this._isInResult;
  }
}, Df = class {
  poly;
  isExterior;
  segments;
  bbox;
  constructor(t, e, r) {
    if (!Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = r, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const s = ur.snap({ x: new Yn(t[0][0]), y: new Yn(t[0][1]) });
    this.bbox = {
      ll: { x: s.x, y: s.y },
      ur: { x: s.x, y: s.y }
    };
    let u = s;
    for (let c = 1, f = t.length; c < f; c++) {
      if (typeof t[c][0] != "number" || typeof t[c][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const h = ur.snap({ x: new Yn(t[c][0]), y: new Yn(t[c][1]) });
      h.x.eq(u.x) && h.y.eq(u.y) || (this.segments.push(go.fromRing(u, h, this)), h.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = h.x), h.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = h.y), h.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = h.x), h.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = h.y), u = h);
    }
    (!s.x.eq(u.x) || !s.y.eq(u.y)) && this.segments.push(go.fromRing(u, s, this));
  }
  getSweepEvents() {
    const t = [];
    for (let e = 0, r = this.segments.length; e < r; e++) {
      const s = this.segments[e];
      t.push(s.leftSE), t.push(s.rightSE);
    }
    return t;
  }
}, gM = class {
  multiPoly;
  exteriorRing;
  interiorRings;
  bbox;
  constructor(t, e) {
    if (!Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Df(t[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let r = 1, s = t.length; r < s; r++) {
      const u = new Df(t[r], this, !1);
      u.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = u.bbox.ll.x), u.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = u.bbox.ll.y), u.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = u.bbox.ur.x), u.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = u.bbox.ur.y), this.interiorRings.push(u);
    }
    this.multiPoly = e;
  }
  getSweepEvents() {
    const t = this.exteriorRing.getSweepEvents();
    for (let e = 0, r = this.interiorRings.length; e < r; e++) {
      const s = this.interiorRings[e].getSweepEvents();
      for (let u = 0, c = s.length; u < c; u++)
        t.push(s[u]);
    }
    return t;
  }
}, Ff = class {
  isSubject;
  polys;
  bbox;
  constructor(t, e) {
    if (!Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof t[0][0][0] == "number" && (t = [t]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: { x: new Yn(Number.POSITIVE_INFINITY), y: new Yn(Number.POSITIVE_INFINITY) },
      ur: { x: new Yn(Number.NEGATIVE_INFINITY), y: new Yn(Number.NEGATIVE_INFINITY) }
    };
    for (let r = 0, s = t.length; r < s; r++) {
      const u = new gM(t[r], this);
      u.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = u.bbox.ll.x), u.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = u.bbox.ll.y), u.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = u.bbox.ur.x), u.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = u.bbox.ur.y), this.polys.push(u);
    }
    this.isSubject = e;
  }
  getSweepEvents() {
    const t = [];
    for (let e = 0, r = this.polys.length; e < r; e++) {
      const s = this.polys[e].getSweepEvents();
      for (let u = 0, c = s.length; u < c; u++)
        t.push(s[u]);
    }
    return t;
  }
}, dM = (t, ...e) => fo.run("union", t, e), pM = (t, ...e) => fo.run("difference", t, e);
ur.set;
function mM(t) {
  const e = [];
  if (Pr(t, (u) => {
    e.push(u.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const r = t.features[0].properties || {}, s = pM(e[0], ...e.slice(1));
  return s.length === 0 ? null : s.length === 1 ? or(s[0], r) : Fl(s, r);
}
var Np = mM;
function Pp(t) {
  var e = new Kt(t);
  return e.insert = function(r) {
    if (r.type !== "Feature") throw new Error("invalid feature");
    return r.bbox = r.bbox ? r.bbox : Bn(r), Kt.prototype.insert.call(this, r);
  }, e.load = function(r) {
    var s = [];
    return Array.isArray(r) ? r.forEach(function(u) {
      if (u.type !== "Feature") throw new Error("invalid features");
      u.bbox = u.bbox ? u.bbox : Bn(u), s.push(u);
    }) : Vn(r, function(u) {
      if (u.type !== "Feature") throw new Error("invalid features");
      u.bbox = u.bbox ? u.bbox : Bn(u), s.push(u);
    }), Kt.prototype.load.call(this, s);
  }, e.remove = function(r, s) {
    if (r.type !== "Feature") throw new Error("invalid feature");
    return r.bbox = r.bbox ? r.bbox : Bn(r), Kt.prototype.remove.call(this, r, s);
  }, e.clear = function() {
    return Kt.prototype.clear.call(this);
  }, e.search = function(r) {
    var s = Kt.prototype.search.call(this, this.toBBox(r));
    return nt(s);
  }, e.collides = function(r) {
    return Kt.prototype.collides.call(this, this.toBBox(r));
  }, e.all = function() {
    var r = Kt.prototype.all.call(this);
    return nt(r);
  }, e.toJSON = function() {
    return Kt.prototype.toJSON.call(this);
  }, e.fromJSON = function(r) {
    return Kt.prototype.fromJSON.call(this, r);
  }, e.toBBox = function(r) {
    var s;
    if (r.bbox) s = r.bbox;
    else if (Array.isArray(r) && r.length === 4) s = r;
    else if (Array.isArray(r) && r.length === 6)
      s = [r[0], r[1], r[3], r[4]];
    else if (r.type === "Feature") s = Bn(r);
    else if (r.type === "FeatureCollection") s = Bn(r);
    else throw new Error("invalid geojson");
    return {
      minX: s[0],
      minY: s[1],
      maxX: s[2],
      maxY: s[3]
    };
  }, e;
}
function vM(t) {
  var e = t[0], r = t[1], s = t[2], u = t[3], c = zt(t.slice(0, 2), [s, r]), f = zt(t.slice(0, 2), [e, u]);
  if (c >= f) {
    var h = (r + u) / 2;
    return [
      e,
      h - (s - e) / 2,
      s,
      h + (s - e) / 2
    ];
  } else {
    var p = (e + s) / 2;
    return [
      p - (u - r) / 2,
      r,
      p + (u - r) / 2,
      u
    ];
  }
}
function yM(t, e) {
  if (e = e ?? {}, !Lo(e)) throw new Error("options is invalid");
  var r = e.precision, s = e.coordinates, u = e.mutate;
  if (r = r == null || isNaN(r) ? 6 : r, s = s == null || isNaN(s) ? 3 : s, !t) throw new Error("<geojson> is required");
  if (typeof r != "number")
    throw new Error("<precision> must be a number");
  if (typeof s != "number")
    throw new Error("<coordinates> must be a number");
  (u === !1 || u === void 0) && (t = JSON.parse(JSON.stringify(t)));
  var c = Math.pow(10, r);
  return Nr(t, function(f) {
    _M(f, c, s);
  }), t;
}
function _M(t, e, r) {
  t.length > r && t.splice(r, t.length);
  for (var s = 0; s < t.length; s++)
    t[s] = Math.round(t[s] * e) / e;
  return t;
}
function EM(t) {
  if (!t)
    throw new Error("geojson is required");
  const e = [];
  return Cr(t, (r) => {
    xM(r, e);
  }), nt(e);
}
function xM(t, e) {
  let r = [];
  const s = t.geometry;
  if (s !== null) {
    switch (s.type) {
      case "Polygon":
        r = qt(s);
        break;
      case "LineString":
        r = [qt(s)];
    }
    r.forEach((u) => {
      wM(u, t.properties).forEach((f) => {
        f.id = e.length, e.push(f);
      });
    });
  }
}
function wM(t, e) {
  const r = [];
  return t.reduce((s, u) => {
    const c = Hi([s, u], e);
    return c.bbox = kM(s, u), r.push(c), u;
  }), r;
}
function kM(t, e) {
  const r = t[0], s = t[1], u = e[0], c = e[1], f = r < u ? r : u, h = s < c ? s : c, p = r > u ? r : u, d = s > c ? s : c;
  return [f, h, p, d];
}
var SM = Object.defineProperty, MM = Object.defineProperties, IM = Object.getOwnPropertyDescriptors, Gf = Object.getOwnPropertySymbols, bM = Object.prototype.hasOwnProperty, LM = Object.prototype.propertyIsEnumerable, Bf = (t, e, r) => e in t ? SM(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Uf = (t, e) => {
  for (var r in e || (e = {}))
    bM.call(e, r) && Bf(t, r, e[r]);
  if (Gf)
    for (var r of Gf(e))
      LM.call(e, r) && Bf(t, r, e[r]);
  return t;
}, zf = (t, e) => MM(t, IM(e));
function TM(t, e, r = {}) {
  if (!t || !e)
    throw new Error("lines and pt are required arguments");
  const s = Qe(e);
  let u = zn([1 / 0, 1 / 0], {
    dist: 1 / 0,
    index: -1,
    multiFeatureIndex: -1,
    location: -1
  }), c = 0;
  return Cr(
    t,
    function(f, h, p) {
      const d = qt(f);
      for (let v = 0; v < d.length - 1; v++) {
        const _ = zn(d[v]);
        _.properties.dist = zt(e, _, r);
        const x = Qe(_), M = zn(d[v + 1]);
        M.properties.dist = zt(e, M, r);
        const S = Qe(M), C = zt(_, M, r);
        let F, O;
        x[0] === s[0] && x[1] === s[1] ? [F, , O] = [x, void 0, !1] : S[0] === s[0] && S[1] === s[1] ? [F, , O] = [S, void 0, !0] : [F, , O] = NM(
          _.geometry.coordinates,
          M.geometry.coordinates,
          Qe(e)
        );
        let I;
        F && (I = zn(F, {
          dist: zt(e, F, r),
          multiFeatureIndex: p,
          location: c + zt(_, F, r)
        })), I && I.properties.dist < u.properties.dist && (u = zf(Uf({}, I), {
          properties: zf(Uf({}, I.properties), {
            // Legacy behaviour where index progresses to next segment # if we
            // went with the end point this iteration.
            index: O ? v + 1 : v
          })
        })), c += C;
      }
    }
  ), u;
}
function AM(t, e) {
  const [r, s, u] = t, [c, f, h] = e;
  return r * c + s * f + u * h;
}
function CM(t, e) {
  const [r, s, u] = t, [c, f, h] = e;
  return [s * h - u * f, u * c - r * h, r * f - s * c];
}
function qf(t) {
  return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2));
}
function Jr(t, e) {
  const r = AM(t, e) / (qf(t) * qf(e));
  return Math.acos(Math.min(Math.max(r, -1), 1));
}
function _u(t) {
  const e = ut(t[1]), r = ut(t[0]);
  return [
    Math.cos(e) * Math.cos(r),
    Math.cos(e) * Math.sin(r),
    Math.sin(e)
  ];
}
function $r(t) {
  const [e, r, s] = t, u = ei(Math.asin(s));
  return [ei(Math.atan2(r, e)), u];
}
function NM(t, e, r) {
  const s = _u(t), u = _u(e), c = _u(r), [f, h, p] = c, [d, v, _] = CM(s, u), x = v * p - _ * h, M = _ * f - d * p, S = d * h - v * f, C = S * v - M * _, F = x * _ - S * d, O = M * d - x * v, I = 1 / Math.sqrt(Math.pow(C, 2) + Math.pow(F, 2) + Math.pow(O, 2)), H = [C * I, F * I, O * I], X = [-1 * C * I, -1 * F * I, -1 * O * I], J = Jr(s, u), U = Jr(s, H), W = Jr(u, H), E = Jr(s, X), w = Jr(u, X);
  let b;
  return U < E && U < w || W < E && W < w ? b = H : b = X, Jr(s, b) > J || Jr(u, b) > J ? zt($r(b), $r(s)) <= zt($r(b), $r(u)) ? [$r(s), !0, !1] : [$r(u), !1, !0] : [$r(b), !1, !1];
}
function PM(t, e) {
  if (!t) throw new Error("line is required");
  if (!e) throw new Error("splitter is required");
  var r = Hh(t), s = Hh(e);
  if (r !== "LineString") throw new Error("line must be LineString");
  if (s === "FeatureCollection")
    throw new Error("splitter cannot be a FeatureCollection");
  if (s === "GeometryCollection")
    throw new Error("splitter cannot be a GeometryCollection");
  var u = yM(e, { precision: 7 });
  switch (s) {
    case "Point":
      return al(t, u);
    case "MultiPoint":
      return Yf(t, u);
    case "LineString":
    case "MultiLineString":
    case "Polygon":
    case "MultiPolygon":
      return Yf(
        t,
        ia(t, u, {
          ignoreSelfIntersections: !0
        })
      );
  }
}
function Yf(t, e) {
  var r = [], s = Pp();
  return Cr(e, function(u) {
    if (r.forEach(function(h, p) {
      h.id = p;
    }), !r.length)
      r = al(t, u).features, r.forEach(function(h) {
        h.bbox || (h.bbox = vM(Bn(h)));
      }), s.load(nt(r));
    else {
      var c = s.search(u);
      if (c.features.length) {
        var f = Op(u, c);
        r = r.filter(function(h) {
          return h.id !== f.id;
        }), s.remove(f), Vn(al(f, u), function(h) {
          r.push(h), s.insert(h);
        });
      }
    }
  }), nt(r);
}
function al(t, e) {
  var r = [], s = qt(t)[0], u = qt(t)[t.geometry.coordinates.length - 1];
  if (Eu(s, Qe(e)) || Eu(u, Qe(e)))
    return nt([t]);
  var c = Pp(), f = EM(t);
  c.load(f);
  var h = c.search(e);
  if (!h.features.length) return nt([t]);
  var p = Op(e, h), d = [s], v = vk(
    f,
    function(_, x, M) {
      var S = qt(x)[1], C = Qe(e);
      return M === p.id ? (_.push(C), r.push(Hi(_)), Eu(C, S) ? [C] : [C, S]) : (_.push(S), _);
    },
    d
  );
  return v.length > 1 && r.push(Hi(v)), nt(r);
}
function Op(t, e) {
  if (!e.features.length) throw new Error("lines must contain features");
  if (e.features.length === 1) return e.features[0];
  var r, s = 1 / 0;
  return Vn(e, function(u) {
    var c = TM(u, t), f = c.properties.dist;
    f < s && (r = u, s = f);
  }), r;
}
function Eu(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
var OM = PM;
class RM extends ts {
  mode = "cut";
  lineDrawer = new Kl(this.gm, { snappingMarkers: "first", targetShape: "polygon" });
  cutShapesAllowed = ["circle", "ellipse", "line", "rectangle", "polygon"];
  eventHandlers = {
    [`${se}:draw`]: this.forwardLineDrawerEvent.bind(this),
    mousemove: this.onMouseMove.bind(this)
  };
  onStartAction() {
    this.lineDrawer.startAction(), this.lineDrawer.on("firstMarkerClick", this.cutPolygonFinished.bind(this));
  }
  onEndAction() {
    this.lineDrawer.endAction();
  }
  onMouseMove(e) {
    return je(e) ? (this.lineDrawer.featureData || this.fireMarkerPointerUpdateEvent(), { next: !0 }) : { next: !0 };
  }
  cutPolygonFinished(e) {
    this.lineDrawer.endShape();
    const r = Zl(e.geoJson), s = this.getBBoxFeaturesByPolygon(r);
    this.cutFeaturesByPolygon(s, r);
  }
  getBBoxFeaturesByPolygon(e) {
    const r = Hl(e), s = this.gm.mapAdapter.coordBoundsToScreenBounds(r);
    return this.gm.mapAdapter.queryFeaturesByScreenCoordinates({
      queryCoordinates: s,
      sourceNames: [K.main]
    });
  }
  cutFeaturesByPolygon(e, r) {
    e.forEach((s) => {
      if (s.getShapeProperty("disableEdit") !== !0) {
        if (Tf(s.getGeoJson(), r)) {
          this.gm.features.delete(s), this.fireFeatureRemovedEvent(s);
          return;
        }
        if (Ip(s.getGeoJson(), r) && this.cutShapesAllowed.includes(s.shape)) {
          if (s.shape === "line") {
            this.cutLineFeatureByPolygon(s, r);
            return;
          }
          this.cutPolygonFeatureByPolygon(s.id, r);
        }
      }
    });
  }
  cutLineFeatureByPolygon(e, r) {
    const s = e.getGeoJson(), u = DS(this.gm.mapAdapter, r), c = OM(s, r);
    if (!u || c.features.length === 0)
      return;
    const f = [];
    if (c.features.filter((h) => !Tf(h, u)).forEach((h) => {
      const p = this.createLineFeature(Hd(h));
      p && f.push(p);
    }), this.gm.features.delete(e), !Mp(f)) {
      te.error("cutLineFeatureByPolygon: resultFeatures not found", c);
      return;
    }
    this.fireFeatureUpdatedEvent({
      sourceFeatures: [e],
      targetFeatures: f
    });
  }
  createLineFeature(e) {
    const r = {
      ...e,
      properties: {
        shape: "line"
      }
    };
    return this.gm.features.createFeature({
      shapeGeoJson: r,
      sourceName: K.main
    });
  }
  cutPolygonFeatureByPolygon(e, r) {
    const s = this.gm.features.get(K.main, e);
    if (!s) {
      te.warn("cutPolygonFeatureByPolygon: featureData not found", e);
      return;
    }
    s.convertToPolygon();
    const u = s.getGeoJson(), c = this.getGeoJsonDifference(u, r);
    c && (s.updateGeoJsonGeometry(c.geometry), this.fireFeatureUpdatedEvent({
      sourceFeatures: [s],
      targetFeatures: [s]
    }));
  }
  getGeoJsonDifference(e, r) {
    const s = nt([e, r]), u = Np(s);
    return u ? u.type === "Feature" ? u : (u.type === "FeatureCollection" && te.error("getGeoJsonDifference: FeatureCollection detected (not supported)", u), null) : null;
  }
}
class DM extends ts {
  mode = "delete";
  allowedShapes = [...Wr];
  eventHandlers = {
    click: this.onMouseClick.bind(this)
  };
  onStartAction() {
    this.gm.markerPointer.enable({ invisibleMarker: !0 }), this.gm.markerPointer.pauseSnapping();
  }
  onEndAction() {
    this.gm.markerPointer.resumeSnapping(), this.gm.markerPointer.disable();
  }
  onMouseClick(e) {
    if (!je(e, { warning: !0 }))
      return { next: !1 };
    const r = this.getFeatureByMouseEvent({ event: e, sourceNames: [K.main] });
    return r && this.allowedShapes.includes(r.shape) && (this.gm.features.delete(r), this.fireFeatureRemovedEvent(r)), { next: !1 };
  }
}
class FM extends ec {
  mode = "drag";
  onStartAction() {
  }
  onEndAction() {
  }
  handleGmEdit(e) {
    return es(e) ? e.action === "marker_move" && e.lngLatStart && e.lngLatEnd ? (this.previousLngLat || (this.previousLngLat = e.lngLatStart), this.moveFeature(e.featureData, e.lngLatEnd), { next: !1 }) : (e.action === "marker_captured" ? (e.featureData.changeSource({ sourceName: K.temporary, atomic: !0 }), this.flags.actionInProgress = !0, this.fireFeatureEditStartEvent({ feature: e.featureData }), this.setCursorToPointer()) : e.action === "marker_released" && (this.previousLngLat = null, e.featureData.changeSource({ sourceName: K.main, atomic: !0 }), this.fireFeatureEditEndEvent({ feature: e.featureData }), this.flags.actionInProgress = !1), { next: !0 }) : (te.error("EditDrag.handleGmEdit: not an edit event", e), { next: !0 });
  }
}
class GM extends ec {
  mode = "rotate";
  allowedShapes = ["line", "rectangle", "polygon", "ellipse"];
  convertFeaturesTypes = ["rectangle"];
  shapeRotateHandlers = {
    marker: this.rotateFeature.bind(this),
    circle: this.rotateFeature.bind(this),
    circle_marker: this.rotateFeature.bind(this),
    text_marker: this.rotateFeature.bind(this),
    line: this.rotateFeature.bind(this),
    rectangle: this.rotateFeature.bind(this),
    polygon: this.rotateFeature.bind(this),
    ellipse: this.rotateEllipse.bind(this)
  };
  onStartAction() {
  }
  onEndAction() {
  }
  handleGmEdit(e) {
    return es(e) ? this.isFeatureAllowed(e) ? { next: !0 } : e.action === "marker_move" && e.lngLatStart && e.lngLatEnd ? (e.markerData?.type === "vertex" ? this.moveVertex(e) : this.moveSource(e.featureData, e.lngLatStart, e.lngLatEnd), { next: !1 }) : (e.action === "marker_captured" ? (e.featureData.changeSource({ sourceName: K.temporary, atomic: !0 }), this.setCursorToPointer(), this.flags.actionInProgress = !0, this.fireFeatureEditStartEvent({ feature: e.featureData })) : e.action === "marker_released" && (e.featureData.changeSource({ sourceName: K.main, atomic: !0 }), this.fireFeatureEditEndEvent({ feature: e.featureData }), this.flags.actionInProgress = !1), { next: !0 }) : (te.error("EditChange.handleGmEdit: not an edit event", e), { next: !1 });
  }
  isFeatureAllowed(e) {
    return "featureData" in e && !this.allowedShapes.includes(e.featureData.shape);
  }
  moveVertex(e) {
    const r = e.featureData, s = this.shapeRotateHandlers[r.shape]?.(e) || null;
    s ? (this.fireBeforeFeatureUpdate({
      features: [r],
      geoJsonFeatures: [s]
    }), this.updateFeatureGeoJson({ featureData: r, featureGeoJson: s }) && this.convertFeaturesTypes.includes(r.shape) && r.convertToPolygon()) : te.error("EditRotate.moveVertex: invalid geojson", s, e);
  }
  rotateEllipse(e) {
    const { featureData: r } = e;
    if (r.shape !== "ellipse")
      return te.error("EditRotate.rotateEllipse: invalid shape type", r), null;
    const s = r.getShapeProperty("center"), u = r.getShapeProperty("xSemiAxis"), c = r.getShapeProperty("ySemiAxis"), f = r.getShapeProperty("angle");
    if (!Array.isArray(s) || typeof u != "number" || typeof c != "number" || typeof f != "number")
      return te.error(
        "rotateEllipse: missing center, xSemiAxis, ySemiAxis or angle in the featureData",
        r
      ), null;
    const h = this.calculateRotationAngle(
      s,
      e.lngLatStart,
      e.lngLatEnd,
      !1
    );
    return Co({
      center: s,
      xSemiAxis: u,
      ySemiAxis: c,
      angle: f + h
    });
  }
  rotateFeature(e) {
    const r = e.featureData, s = sn(r.getGeoJson()), u = Zd(Ud(s)), c = this.calculateRotationAngle(u, e.lngLatStart, e.lngLatEnd);
    return s.geometry = bk(s, c, { pivot: u }).geometry, s;
  }
  calculateRotationAngle(e, r, s, u = !0) {
    const c = to(e, r), h = to(e, s) - c;
    return u ? (h + 360) % 360 : h;
  }
}
const ol = {
  drag: FM,
  change: qS,
  rotate: GM,
  scale: null,
  copy: null,
  cut: RM,
  split: null,
  union: null,
  difference: null,
  line_simplification: null,
  lasso: null,
  delete: DM
}, BM = (t, e) => ol[e] ? new ol[e](t) : (te.error(`Edit "${e}" is not available`), null);
class UM extends bo {
  eventHandlers = {
    [`${se}:edit`]: this.handleEditEvent.bind(this)
  };
  constructor(e, r) {
    super(e), r.attachEvents(this.eventHandlers);
  }
  handleEditEvent(e) {
    if (!es(e))
      return { next: !0 };
    const r = `${e.actionType}__${e.mode}`;
    return e.action === "mode_start" ? (this.trackExclusiveModes(e), this.start(r, e), this.trackRelatedModes(e)) : e.action === "mode_end" && (this.trackRelatedModes(e), this.end(r)), { next: !0 };
  }
  start(e, r) {
    if (r.action !== "mode_start")
      return;
    const s = BM(this.gm, r.mode);
    s && (e in this.gm.actionInstances && te.error(`Action instance "${e}" already exists`), this.gm.actionInstances[e] = s, s.startAction());
  }
  end(e) {
    const r = this.gm.actionInstances[e];
    r instanceof ts ? (r.endAction(), delete this.gm.actionInstances[e]) : console.error(
      `Wrong action instance for edit event "${e}": `,
      r
    );
  }
}
class zM extends Or {
  mode = "shape_markers";
  pinEnabled = this.gm.options.controls.helper.pin?.active || !1;
  previousPosition = null;
  activeMarker = null;
  activeFeatureData = null;
  sharedMarkers = [];
  allowedShapes = ["circle", "line", "rectangle", "polygon", "ellipse"];
  edgeMarkersAllowed = !1;
  edgeMarkerAllowedShapes = ["line", "rectangle", "polygon"];
  shapeMarkerAllowedModes = ["drag", "change", "cut", "split"];
  eventHandlers = {
    [`${se}:draw`]: this.handleGmDraw.bind(this),
    [`${se}:edit`]: this.handleGmEdit.bind(this),
    mousedown: this.onMouseDown.bind(this),
    touchstart: this.onMouseDown.bind(this),
    mouseup: this.onMouseUp.bind(this),
    touchend: this.onMouseUp.bind(this),
    mousemove: this.onMouseMove.bind(this),
    touchmove: this.onMouseMove.bind(this),
    contextmenu: this.onMouseRightButtonClick.bind(this)
  };
  throttledMethods = oi(
    {
      sendMarkerMoveEvent: this.sendMarkerMoveEvent,
      sendMarkerRightClickEvent: this.sendMarkerRightClickEvent
    },
    this,
    this.gm.options.settings.throttlingDelay
  );
  debouncedMethods = Yk(
    {
      refreshMarkers: this.refreshMarkers
    },
    this,
    this.gm.options.settings.throttlingDelay * 10
  );
  get pinHelperInstance() {
    return this.pinEnabled && Object.values(this.gm.actionInstances).find(jk) || null;
  }
  onStartAction() {
    this.isShapeMarkerAllowed() && this.gm.markerPointer.enable({ invisibleMarker: !0 }), this.edgeMarkersAllowed = this.gm.getActiveEditModes().includes("change"), this.addMarkers();
  }
  onEndAction() {
    this.gm.markerPointer.disable(), this.removeMarkers();
  }
  setPin(e) {
    this.pinEnabled = e;
  }
  onMouseDown(e) {
    const r = ["mousedown", "touchstart"];
    if (!je(e, { warning: !0 }) || !r.includes(e.type) || $k(e))
      return { next: !0 };
    if (e.type === "mousedown" && e.originalEvent.button !== 0)
      return { next: !0 };
    const s = this.getFeatureMarkerByMouseEvent(e);
    return this.activeMarker = s || null, this.activeFeatureData = s?.instance.parent || null, this.activeMarker && this.activeFeatureData ? (this.previousPosition = Ql(this.activeMarker.instance), this.gm.mapAdapter.setDragPan(!1), this.activeMarker.type === "edge" && this.sendMarkerEvent("edge_marker_click", this.activeFeatureData, this.activeMarker), this.pinEnabled && this.pinHelperInstance ? (this.sharedMarkers = this.pinHelperInstance.getSharedMarkers(
      this.activeMarker.position.coordinate
    ), this.sharedMarkers.forEach(
      (u) => this.snappingHelper?.addExcludedFeature(u.featureData)
    )) : this.snappingHelper?.addExcludedFeature(this.activeFeatureData), this.sendMarkerEvent("marker_captured", this.activeFeatureData, this.activeMarker), { next: !1 }) : { next: !0 };
  }
  onMouseUp() {
    if (!this.activeMarker)
      return { next: !0 };
    const e = {
      featureData: this.activeFeatureData,
      markerData: this.activeMarker
    };
    return this.activeMarker = null, this.activeFeatureData = null, this.sharedMarkers = [], this.snappingHelper?.clearExcludedFeatures(), this.previousPosition = null, this.gm.mapAdapter.setDragPan(!0), e.featureData && e.markerData ? (this.sendMarkerEvent("marker_released", e.featureData, e.markerData), { next: !1 }) : (te.debug("ShapeMarkersHelper.onMouseUp: no active marker or featureData", e), { next: !0 });
  }
  onMouseMove(e) {
    return !this.activeMarker || !je(e, { warning: !0 }) ? { next: !0 } : (this.throttledMethods.sendMarkerMoveEvent(e), { next: !1 });
  }
  onMouseRightButtonClick(e) {
    if (!je(e, { warning: !0 }))
      return { next: !0 };
    const r = this.getFeatureMarkerByMouseEvent(e);
    return r && r.instance.parent ? (this.throttledMethods.sendMarkerRightClickEvent(
      r.instance.parent,
      r
    ), { next: !1 }) : { next: !0 };
  }
  isShapeMarkerAllowed() {
    return xE(this.shapeMarkerAllowedModes, this.gm.getActiveEditModes()).length > 0;
  }
  convertToVertexMarker(e) {
    if (e.type === "edge" && e.instance.parent) {
      const r = e.position, s = e.instance.parent;
      this.removeMarker(e);
      const u = this.createMarker({
        type: "vertex",
        positionData: r,
        parentFeature: s
      }), c = s.getGeoJson(), f = Tk(c, r.coordinate);
      if (f) {
        const h = f.path.join("."), p = s.markers.get(h);
        return p && this.removeMarker(p), s.markers.set(h, u), u;
      }
    }
    return te.error("ShapeMarkersHelper.convertToVertexMarker: invalid marker type", e), e;
  }
  getFeatureMarkerByMouseEvent(e) {
    const r = this.gm.features.getFeatureByMouseEvent({
      event: e,
      sourceNames: [K.main]
    });
    if (r?.parent?.markers) {
      const s = GE(
        r.parent.markers,
        (u) => u.instance === r
      );
      if (s?.type !== "dom")
        return s;
    }
    return null;
  }
  addMarkers() {
    this.gm.features.forEach((e) => {
      if (!e || !this.allowedShapes.includes(e.shape) || e.getShapeProperty("disableEdit") === !0)
        return;
      this.addCenterMarker(e);
      const r = this.getAllShapeSegments(e);
      r.forEach((s, u) => {
        if (this.isMarkerIndexAllowed(
          e.shape,
          u,
          r.length
        )) {
          const f = this.createOrUpdateVertexMarker(s.segment.start, e);
          if (e.markers.set(f.markerKey, f.markerData), e.shape === "line" && u === r.length - 1) {
            const h = this.createOrUpdateVertexMarker(
              s.segment.end,
              e
            );
            e.markers.set(h.markerKey, h.markerData);
          }
        }
        if (this.isEdgeMarkerAllowed(e)) {
          const f = this.createOrUpdateEdgeMarker(s, e);
          e.markers.set(f.markerKey, f.markerData);
        }
      });
    });
  }
  addCenterMarker(e) {
    const r = e.getShapeProperty("center");
    if (r) {
      const s = this.createMarker({
        type: "center",
        positionData: {
          path: [],
          coordinate: r
        },
        parentFeature: e
      });
      e.markers.set("center", s);
    }
  }
  getAllShapeSegments(e) {
    const r = e.getGeoJson(), s = [];
    return Yl(r, (u, c) => {
      s.push({
        segment: u,
        middle: this.getSegmentMiddlePosition(u),
        edgeMarkerKey: this.getEdgeMarkerKey(c)
      });
    }), s;
  }
  isEdgeMarkerAllowed(e) {
    return this.edgeMarkersAllowed && this.edgeMarkerAllowedShapes.includes(e.shape);
  }
  isMarkerIndexAllowed(e, r, s) {
    const u = Math.floor(s / 4);
    return e === "circle" ? (r + u / 2) % u === 0 : e === "ellipse" ? r % u === 0 : !0;
  }
  getEdgeMarkerKey(e) {
    return `edge.${e}`;
  }
  getSegmentMiddlePosition(e) {
    const r = this.gm.mapAdapter.project(e.start.coordinate), s = this.gm.mapAdapter.project(e.end.coordinate), u = [
      (r[0] + s[0]) / 2,
      (r[1] + s[1]) / 2
    ], c = e.start.path.slice(0, e.start.path.length - 1).concat([-1]);
    return {
      coordinate: this.gm.mapAdapter.unproject(u),
      path: c
    };
  }
  removeMarkers() {
    this.gm.features.forEach((e, r) => {
      const s = this.gm.features.get(K.main, r);
      s && (s.markers.forEach((u) => {
        u.type !== "dom" ? this.gm.features.delete(u.instance) : te.error("Non a FeatureData marker", u);
      }), s.markers = /* @__PURE__ */ new Map());
    });
  }
  removeMarker(e) {
    if (e.type === "dom") {
      te.error("Wrong marker type", e);
      return;
    }
    const r = e.instance.parent;
    if (!r) {
      te.error("Missing parent feature data", e);
      return;
    }
    try {
      r.markers.forEach((s, u) => {
        if (s === e)
          throw this.gm.features.delete(s.instance), r.markers.delete(u), new Error("break");
      });
    } catch {
    }
  }
  handleGmDraw(e) {
    return Wl(e) ? (["feature_created", "mode_start"].includes(e.action) && this.debouncedMethods.refreshMarkers(), { next: !0 }) : (te.error("ShapeMarkersHelper.handleGmDraw: not a draw event", e), { next: !0 });
  }
  refreshMarkers() {
    this.removeMarkers(), this.addMarkers();
  }
  handleGmEdit(e) {
    return es(e) ? (e.action === "feature_updated" && this.handleShapeUpdate(e), { next: !0 }) : (te.error("ShapeMarkersHelper.handleGmEdit: not an edit event", e), { next: !0 });
  }
  handleShapeUpdate(e) {
    const r = e.targetFeatures[0];
    if (!r) {
      te.error("ShapeMarkersHelper.handleShapeUpdate: no featureData", e);
      return;
    }
    this.activeMarker?.type === "edge" && (this.activeMarker = this.convertToVertexMarker(this.activeMarker));
    const s = this.getAllShapeSegments(r), u = new Set(r.markers.keys());
    s.forEach((c, f) => {
      if (this.isMarkerIndexAllowed(
        r.shape,
        f,
        s.length
      )) {
        const p = this.createOrUpdateVertexMarker(c.segment.start, r);
        if (u.delete(p.markerKey), r.shape === "line" && f === s.length - 1) {
          const d = this.createOrUpdateVertexMarker(
            c.segment.end,
            r
          );
          u.delete(d.markerKey);
        }
      }
      if (this.isEdgeMarkerAllowed(r)) {
        const p = this.createOrUpdateEdgeMarker(c, r);
        u.delete(p.markerKey);
      }
    }), this.updateCenterMarkerPosition(r), u.delete("center"), u.forEach((c) => {
      const f = r.markers.get(c);
      f && f.type !== "dom" ? this.gm.features.delete(f.instance) : te.error("Non a FeatureData marker"), r.markers.delete(c);
    });
  }
  createOrUpdateVertexMarker(e, r) {
    const s = e.path.join(".");
    let u = r.markers.get(s) || null;
    if (u && u?.type !== "vertex")
      throw new Error(`Invalid marker type "${u?.type}" for edge marker`);
    return u ? (Vh(u.position.coordinate, e.coordinate) || this.gm.features.updateMarkerFeaturePosition(u.instance, e.coordinate), u.position = e) : (u = this.createMarker({
      type: "vertex",
      positionData: e,
      parentFeature: r
    }), r.markers.set(s, u)), { markerKey: s, markerData: u };
  }
  createOrUpdateEdgeMarker(e, r) {
    let s = r.markers.get(e.edgeMarkerKey) || null;
    if (s && s?.type !== "edge")
      throw new Error(`Invalid marker type "${s?.type}" for edge marker`);
    return s ? (Vh(s.position.coordinate, e.middle.coordinate) || s.instance.updateGeoJsonGeometry({
      type: "Point",
      coordinates: e.middle.coordinate
    }), s.position = e.middle, s.segment = e.segment) : (s = this.createMarker({
      type: "edge",
      positionData: e.middle,
      segment: e.segment,
      parentFeature: r
    }), r.markers.set(e.edgeMarkerKey, s)), { markerKey: e.edgeMarkerKey, markerData: s };
  }
  updateCenterMarkerPosition(e) {
    const r = e.markers.get("center") || null, s = e.getShapeProperty("center");
    r && r.type !== "dom" && s && (r.instance.updateGeoJsonGeometry({
      type: "Point",
      coordinates: s
    }), r.position.coordinate = s);
  }
  sendMarkerEvent(e, r, s) {
    const u = {
      name: `${se}:edit:marker`,
      level: "system",
      actionType: "edit",
      mode: "change",
      action: e,
      featureData: r,
      markerData: s
    };
    this.gm.events.fire(`${se}:edit`, u);
  }
  sendMarkerRightClickEvent(e, r) {
    const s = {
      name: `${se}:edit:marker`,
      level: "system",
      actionType: "edit",
      mode: "change",
      action: "marker_right_click",
      featureData: e,
      markerData: r
    };
    this.gm.events.fire(`${se}:edit`, s);
  }
  sendMarkerMoveEvent(e) {
    const r = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    this.activeMarker && this.activeFeatureData && (this.pinEnabled ? this.sharedMarkers : [
      {
        markerData: this.activeMarker,
        featureData: this.activeFeatureData
      }
    ]).forEach((u) => {
      if (this.previousPosition) {
        const c = {
          name: `${se}:edit:marker_move`,
          level: "system",
          actionType: "edit",
          mode: "drag",
          action: "marker_move",
          featureData: u.featureData,
          markerData: u.markerData,
          lngLatStart: this.previousPosition,
          lngLatEnd: r
        };
        this.gm.events.fire(`${se}:edit`, c);
      }
    }), this.previousPosition = r;
  }
  createMarker({
    type: e,
    segment: r,
    positionData: s,
    parentFeature: u
  }) {
    const c = s.coordinate, f = this.gm.features.createMarkerFeature({
      sourceName: u.sourceName,
      parentFeature: u,
      type: e,
      coordinate: c
    });
    if (!f)
      throw new Error(`Missine feature data for the "${e}" marker`);
    if (e === "edge" && r)
      return {
        type: e,
        instance: f,
        position: sn(s),
        segment: r
      };
    if (e === "vertex" || e === "center")
      return {
        type: e,
        instance: f,
        position: sn(s)
      };
    throw new Error(`Invalid marker type "${e}" with segment: ${r}`);
  }
}
class qM extends Or {
  mode = "snapping";
  tolerance = 18;
  lineSnappingShapes = [
    "circle",
    "line",
    "rectangle",
    "polygon",
    "snap_guide"
  ];
  eventHandlers = {};
  shapeSnappingHandlers = {
    marker: this.getPointsSnapping.bind(this),
    circle: this.getLineSnapping.bind(this),
    circle_marker: this.getPointsSnapping.bind(this),
    text_marker: this.getPointsSnapping.bind(this),
    line: this.getLineSnapping.bind(this),
    rectangle: this.getLineSnapping.bind(this),
    polygon: this.getLineSnapping.bind(this),
    snap_guide: this.getLineSnapping.bind(this)
  };
  excludedFeature = /* @__PURE__ */ new Set();
  customSnappingLngLats = /* @__PURE__ */ new Map();
  customSnappingFeatures = /* @__PURE__ */ new Set();
  onStartAction() {
    this.gm.markerPointer.setSnapping(!0);
  }
  onEndAction() {
    this.gm.markerPointer.setSnapping(!1);
  }
  addExcludedFeature(e) {
    this.excludedFeature.add(e);
  }
  clearExcludedFeatures() {
    this.excludedFeature.clear();
  }
  addCustomSnappingFeature(e) {
    this.customSnappingFeatures.add(e);
  }
  removeCustomSnappingFeature(e) {
    this.customSnappingFeatures.delete(e);
  }
  clearCustomSnappingFeature() {
    this.customSnappingFeatures.clear();
  }
  setCustomSnappingCoordinates(e, r) {
    this.customSnappingLngLats.set(e, r);
  }
  clearCustomSnappingCoordinates(e) {
    this.customSnappingLngLats.delete(e);
  }
  getSnappedLngLat(e, r) {
    let s = this.getCustomLngLatsSnapping(r);
    if (s)
      return s;
    const u = this.getFeaturesInPointBounds(r).filter(
      (c) => !this.excludedFeature.has(c)
    );
    return s = this.getFeaturePointsSnapping(u, e, r), s || (s = this.getFeatureLinesSnapping(u, e, r), s) ? s : e;
  }
  getCustomLngLatsSnapping(e) {
    const r = {
      distance: 1 / 0,
      lngLat: null
    };
    return this.customSnappingLngLats.forEach((s) => {
      s.forEach((u) => {
        const c = this.gm.mapAdapter.project(u), f = Ga(e, c);
        f < this.tolerance && f < r.distance && (r.distance = f, r.lngLat = u);
      });
    }), r.lngLat;
  }
  getFeaturePointsSnapping(e, r, s) {
    let u = e.map((c) => ({
      shape: c.shape,
      ...this.getPointsSnapping(c, r, s)
    })).filter((c) => c.distance < this.tolerance);
    return u.length ? (u = vh(u, ["distance"]), u[0].lngLat) : null;
  }
  getFeatureLinesSnapping(e, r, s) {
    let u = e.filter((c) => this.lineSnappingShapes.includes(c.shape)).map((c) => {
      const f = this.shapeSnappingHandlers[c.shape];
      return f ? {
        shape: c.shape,
        ...f(c, r, s)
      } : null;
    }).filter((c) => c !== null && c.distance < this.tolerance);
    return u.length ? (u = vh(u, ["distance"]), u[0].lngLat) : null;
  }
  getFeaturesInPointBounds(e) {
    const r = [
      [e[0] - this.tolerance, e[1] - this.tolerance],
      [e[0] + this.tolerance, e[1] + this.tolerance]
    ];
    return this.gm.features.getFeaturesByScreenBounds({ bounds: r, sourceNames: [K.main, K.temporary] }).filter((s) => s.temporary ? this.customSnappingFeatures.has(s) : !0) || [];
  }
  getPointsSnapping(e, r, s) {
    const u = e.getGeoJson(), c = {
      distance: 1 / 0,
      coord: null
      // lngLat coords
    };
    return na(
      u,
      (f) => {
        const h = this.gm.mapAdapter.project(f.coordinate), p = Ga(s, h);
        p < this.tolerance && p < c.distance && (c.distance = p, c.coord = f.coordinate);
      },
      !0
    ), {
      lngLat: c.coord ? c.coord : r,
      distance: c.distance
    };
  }
  getLineSnapping(e, r, s) {
    const u = e.getGeoJson();
    return this.getNearestLinePointData(u, r, s);
  }
  getNearestLinePointData(e, r, s) {
    const u = {
      lngLat: r,
      distance: 1 / 0
    }, c = this.gm.mapAdapter.getEuclideanNearestLngLat(e, r), f = this.gm.mapAdapter.project(c);
    return u.distance = Ga(f, s), u.distance < this.tolerance && (u.lngLat = c), u;
  }
}
class YM extends Or {
  mode = "zoom_to_features";
  eventHandlers = {};
  onStartAction() {
    this.fitMapToFeatures(), setTimeout(() => {
      this.gm.options.disableMode("helper", "zoom_to_features");
    });
  }
  onEndAction() {
  }
  fitMapToFeatures() {
    const e = this.gm.features.asGeoJsonFeatureCollection({
      sourceNames: [K.main, ...ht ? [K.standby] : []]
    }), r = Fd(e), s = [
      [r[0], r[1]],
      [r[2], r[3]]
    ];
    try {
      this.gm.mapAdapter.fitBounds(s, { padding: 20 });
    } catch {
      te.warn("Wrong bounds for zooming to features", s, e);
    }
  }
}
const ul = {
  shape_markers: zM,
  pin: null,
  snapping: qM,
  snap_guides: null,
  measurements: null,
  auto_trace: null,
  geofencing: null,
  zoom_to_features: YM,
  click_to_edit: null
}, HM = (t, e) => ul[e] ? new ul[e](t) : (te.error(`Helper "${e}" is not available`), null);
class JM extends bo {
  eventHandlers = {
    [`${se}:helper`]: this.handleHelperEvent.bind(this)
  };
  constructor(e, r) {
    super(e), r.attachEvents(this.eventHandlers);
  }
  handleHelperEvent(e) {
    if (!Vl(e))
      return { next: !0 };
    const r = `${e.actionType}__${e.mode}`;
    return e.action === "mode_start" ? (this.trackExclusiveModes(e), this.start(r, e), this.trackRelatedModes(e)) : e.action === "mode_end" && (this.trackRelatedModes(e), this.end(r)), { next: !0 };
  }
  start(e, r) {
    const s = HM(this.gm, r.mode);
    s && (e in this.gm.actionInstances && te.error(`Action instance "${e}" already exists`), this.gm.actionInstances[e] = s, s.startAction());
  }
  end(e) {
    const r = this.gm.actionInstances[e];
    r instanceof Or ? (r.endAction(), delete this.gm.actionInstances[e]) : console.error(`Wrong action instance for edit event "${e}":`, r);
  }
}
class $M {
  gm;
  bus;
  listeners = {};
  constructor(e) {
    this.gm = e, this.bus = new ck(this.gm), this.listeners = {
      draw: new B2(this.gm, this.bus),
      edit: new UM(this.gm, this.bus),
      helper: new JM(this.gm, this.bus),
      control: new hk(this.gm, this.bus)
    };
  }
  fire(e, r) {
    this.listeners[r.actionType] || te.error(`Can't find event listener for "${r.actionType}" event type`), this.bus.fireEvent(e, r);
  }
}
const Hf = 5e3;
class VM {
  gm;
  updateStorage;
  autoUpdatesEnabled = !0;
  delayedSourceUpdateMethods;
  constructor(e) {
    this.gm = e, this.updateStorage = Object.fromEntries(Hu(K).map((r) => [r, []])), this.delayedSourceUpdateMethods = Object.fromEntries(
      Hu(K).map((r) => [
        r,
        Mg(
          () => this.updateSourceActual(r),
          this.gm.options.settings.throttlingDelay
        )
      ])
    );
  }
  getFeatureId(e) {
    const r = e.properties?.[mn] ?? e.id;
    return r == null && console.warn("Feature id is null or undefined", e), r;
  }
  updateSource({
    sourceName: e,
    diff: r
  }) {
    r && this.updateStorage[e].push(r), this.delayedSourceUpdateMethods[e]();
  }
  updateSourceActual(e) {
    const r = this.gm.features.sources[e];
    if (this.autoUpdatesEnabled && r) {
      if (!r.loaded) {
        setTimeout(() => {
          this.updateSourceActual(e);
        }, this.gm.options.settings.throttlingDelay);
        return;
      }
      const s = this.getCombinedDiff(e);
      s && r.updateData(s), this.updateStorage[e].length > 0 && setTimeout(
        () => this.updateSourceActual(e),
        this.gm.options.settings.throttlingDelay
      );
    }
  }
  withAtomicSourcesUpdate(e) {
    try {
      return this.autoUpdatesEnabled = !1, e();
    } finally {
      tt(this.gm.features.sources).forEach((r) => {
        this.updateSource({ sourceName: r });
      }), this.autoUpdatesEnabled = !0;
    }
  }
  getCombinedDiff(e) {
    let r = {
      remove: [],
      add: [],
      update: []
    };
    for (let s = 0; s < Hf && this.updateStorage[e][s] !== void 0; s += 1)
      r = this.mergeGeoJsonDiff(r, this.updateStorage[e][s]);
    return this.updateStorage[e] = this.updateStorage[e].slice(Hf), Object.values(r).find((s) => s.length) ? r : null;
  }
  mergeGeoJsonDiff(e, r) {
    const s = e ?? { add: [], update: [], remove: [] }, u = r ?? { add: [], update: [], remove: [] }, c = new Set(u.remove), f = s.add?.filter((d) => !c.has(this.getFeatureId(d))) || [], h = s.update?.filter((d) => !c.has(this.getFeatureId(d))) || [], p = [];
    return u.update?.forEach((d) => {
      const v = f.findIndex(
        (x) => this.getFeatureId(x) === this.getFeatureId(d)
      ), _ = h.findIndex(
        (x) => this.getFeatureId(x) === this.getFeatureId(d)
      );
      if (v === -1 && _ === -1) {
        p.push(d);
        return;
      }
      v !== -1 && (f[v] = d), _ !== -1 && (h[_] = d);
    }), {
      add: [...f, ...u.add || []],
      update: [...h, ...p],
      remove: [...s.remove || [], ...u.remove || []]
    };
  }
}
class XM {
  isInstanceAvailable() {
    return this.sourceInstance ? !0 : (te.error("Source instance is not available"), !1);
  }
}
class WM {
  gm;
  featureCounter = 0;
  featureStore = /* @__PURE__ */ new Map();
  featureStoreAllowedSources = [K.main, K.temporary];
  sources;
  defaultSourceName = K.main;
  updateManager;
  layers;
  constructor(e) {
    this.gm = e, this.updateManager = new VM(e), this.sources = Object.fromEntries(
      Hu(K).map((r) => [r, null])
    ), this.layers = [];
  }
  get forEach() {
    return this.filteredForEach((e) => !e.temporary);
  }
  get tmpForEach() {
    return this.filteredForEach((e) => e.temporary);
  }
  init() {
    if (Object.values(this.sources).some((e) => e !== null)) {
      te.warn("features.init(): features are already initialized");
      return;
    }
    tt(this.sources).forEach((e) => {
      this.sources[e] = this.createSource(e);
    }), this.gm.options.settings.useDefaultLayers && (this.layers = this.createLayers());
  }
  getNewFeatureId(e) {
    if (this.featureCounter += 1, this.gm.options.settings.idGenerator)
      return this.gm.options.settings.idGenerator(e);
    let r = `feature-${this.featureCounter}`;
    for (; this.featureStore.has(r); )
      this.featureCounter += 1, r = `feature-${this.featureCounter}`;
    return r;
  }
  filteredForEach(e) {
    return (r) => {
      this.featureStore.forEach((s, u, c) => {
        e(s) && r(s, u, c);
      });
    };
  }
  has(e, r) {
    const s = this.featureStore.get(r);
    return !!s && s?.source === this.sources[e];
  }
  get(e, r) {
    const s = this.featureStore.get(r) || null;
    return s?.source === this.sources[e] ? s : null;
  }
  add(e) {
    if (this.featureStore.has(e.id)) {
      te.error(`features.add: feature with the id "${e.id}" already exists`);
      return;
    }
    this.featureStoreAllowedSources.includes(e.source.id) && this.featureStore.set(e.id, e);
  }
  setDefaultSourceName(e) {
    this.defaultSourceName = e;
  }
  createSource(e) {
    const r = this.gm.mapAdapter.addSource(e, {
      type: "FeatureCollection",
      features: []
    });
    if (r)
      return r;
    throw new Error(`Features: failed to create the source: "${e}"`);
  }
  delete(e) {
    let r;
    e instanceof ro ? r = e : r = this.featureStore.get(e) || null, r ? (this.featureStore.delete(r.id), r.delete()) : te.error(`features.delete: feature "${e}" not found`);
  }
  deleteAll() {
    this.featureStore.forEach((e) => {
      e.delete();
    }), this.featureStore.clear();
  }
  getFeatureByMouseEvent({
    event: e,
    sourceNames: r
  }) {
    if (!je(e, { warning: !0 }))
      return null;
    const s = [e.point.x, e.point.y], u = this.gm.mapAdapter.queryFeaturesByScreenCoordinates({
      queryCoordinates: s,
      sourceNames: r
    });
    return u.length ? u[0] : null;
  }
  getFeaturesByGeoJsonBounds({
    geoJson: e,
    sourceNames: r
  }) {
    const s = Hl(e), u = this.gm.mapAdapter.coordBoundsToScreenBounds(s);
    return this.getFeaturesByScreenBounds({ bounds: u, sourceNames: r });
  }
  getFeaturesByScreenBounds({
    bounds: e,
    sourceNames: r
  }) {
    return this.gm.mapAdapter.queryFeaturesByScreenCoordinates({
      queryCoordinates: e,
      sourceNames: r
    });
  }
  createFeature({
    featureId: e,
    shapeGeoJson: r,
    parent: s,
    sourceName: u,
    imported: c
  }) {
    const f = this.sources[u];
    if (!f)
      return te.error("Features.createFeature Missing source for feature creation"), null;
    const h = e ?? r.properties[mn] ?? this.getNewFeatureId(r);
    if (this.featureStore.get(h))
      return te.error(
        `Features.createFeature: feature with the id "${h}" already exists`,
        this.featureStore.get(h)
      ), null;
    const p = new ro({
      gm: this.gm,
      id: h,
      parent: s || null,
      source: f,
      geoJsonShapeFeature: sn(r)
    });
    return this.add(p), !p.temporary && !c && this.fireFeatureCreatedEvent(p), this.featureCounter += 1, p;
  }
  importGeoJson(e, r) {
    const s = "features" in e ? e.features : [e], u = {
      stats: {
        total: 0,
        success: 0,
        failed: 0
      },
      addedFeatures: []
    };
    return s.forEach((c) => {
      let f = null;
      u.stats.total += 1;
      const h = GS(c);
      if (h) {
        if (r) {
          const p = BS(h, r);
          p && (h.id = p);
        }
        f = this.importGeoJsonFeature(h);
      }
      f ? (u.addedFeatures.push(f), u.stats.success += 1) : u.stats.failed += 1;
    }), u;
  }
  importGeoJsonFeature(e) {
    const r = this.defaultSourceName, s = this.getFeatureShapeByGeoJson(e);
    return s ? this.createFeature({
      featureId: e.id,
      shapeGeoJson: e,
      sourceName: r,
      imported: !0
    }) : (te.error("features.addGeoJsonFeature: unknown shape", s), null);
  }
  getAll() {
    return this.exportGeoJson();
  }
  exportGeoJson({
    allowedShapes: e,
    idPropertyName: r
  } = { allowedShapes: void 0 }) {
    return this.asGeoJsonFeatureCollection({
      sourceNames: [K.main, ...ht ? [K.standby] : []],
      shapeTypes: e || [...Wr],
      idPropertyName: r
    });
  }
  getSourceGeoJson(e) {
    const r = this.sources[e];
    if (!r)
      throw new Error(`getSourceGeoJson: missing source "${e}"`);
    return r.getGeoJson();
  }
  setSourceGeoJson({ geoJson: e, sourceName: r }) {
    const s = this.sources[r];
    if (!s)
      throw new Error(`setSourceGeoJson: missing source "${r}"`);
    s.setGeoJson(e);
  }
  asGeoJsonFeatureCollection({
    shapeTypes: e,
    sourceNames: r,
    idPropertyName: s
  }) {
    const u = {
      type: "FeatureCollection",
      features: []
    };
    return s ??= mn, r.forEach((c) => {
      const f = this.sources[c];
      f && f.getGeoJson().features.filter((p) => !!p).forEach((p) => {
        const d = this.get(c, p.id);
        if (!d)
          return;
        const v = p.properties[mn];
        s !== mn && (p.properties[s] = v, delete p.properties[mn]), (e === void 0 || e.includes(d.shape)) && u.features.push({ ...p, id: v });
      });
    }), u;
  }
  convertSourceToGm(e) {
    const r = [], s = e.getGeoJson(), u = "features" in s ? s.features : [s];
    return this.gm.mapAdapter.getSource(e.id).remove(), u.forEach((f) => {
      const h = this.addGeoJsonFeature({
        shapeGeoJson: f,
        defaultSource: !0
      });
      h && r.push(h);
    }), r;
  }
  addGeoJsonFeature({
    shapeGeoJson: e,
    sourceName: r,
    defaultSource: s
  }) {
    let u;
    if (s ? (u = this.defaultSourceName, r && te.warn("features.addGeoJsonFeature: default source is set, sourceName is ignored")) : u = r || null, !u)
      return te.error("features.addGeoJsonFeature: missing sourceName"), null;
    const c = this.getFeatureShapeByGeoJson(e);
    return c ? this.createFeature({
      featureId: e.id,
      shapeGeoJson: {
        ...e,
        properties: { ...e.properties, shape: c }
      },
      sourceName: u
    }) : (te.error("features.addGeoJsonFeature: unknown shape", c), null);
  }
  createLayers() {
    const e = [];
    return tt(this.sources).forEach((r) => {
      tt(this.gm.options.layerStyles).forEach((s) => {
        this.gm.options.layerStyles[s][r].forEach((c) => {
          const f = this.createGenericLayer({
            sourceName: r,
            shapeNames: [s],
            partialStyle: c
          });
          f && e.push(f);
        });
      });
    }), e;
  }
  createGenericLayer({
    sourceName: e,
    shapeNames: r,
    partialStyle: s
  }) {
    const u = this.getGenericLayerName({ sourceName: e, shapeNames: r, partialStyle: s });
    if (!u)
      throw new Error(`Can't create a layer, for ${{ sourceName: e, shapeNames: r, partialStyle: s }}`);
    const c = {
      ...s,
      id: u,
      source: e,
      filter: ["in", ["get", `${It}shape`], ["literal", r]]
    };
    return this.gm.mapAdapter.addLayer(c);
  }
  getGenericLayerName({
    sourceName: e,
    shapeNames: r,
    partialStyle: s
  }) {
    const c = r.length === 1 ? r[0] : "mixed", f = (p) => `${e}-${c}__${s.type}-layer-${p}`;
    let h = null;
    for (let p = 0; p < 100; p += 1) {
      const d = f(p);
      if (!this.gm.mapAdapter.getLayer(d))
        return h = d, h;
    }
    return null;
  }
  getFeatureShapeByGeoJson(e) {
    const r = {
      Point: "marker",
      LineString: "line",
      Polygon: "polygon",
      MultiPolygon: "polygon"
    }, s = e.properties;
    return s?.shape && Wr.includes(s?.shape) ? s?.shape : r[e.geometry.type] || null;
  }
  createMarkerFeature({
    parentFeature: e,
    coordinate: r,
    type: s,
    sourceName: u
  }) {
    return this.createFeature({
      sourceName: u,
      parent: e,
      shapeGeoJson: {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: r
        },
        properties: {
          [`${It}shape`]: `${s}_marker`
        }
      }
    });
  }
  updateMarkerFeaturePosition(e, r) {
    e.updateGeoJsonGeometry({
      type: "Point",
      coordinates: r
    });
  }
  fireFeatureCreatedEvent(e) {
    if (Tr(e.shape, Wr)) {
      const r = {
        name: `${se}:draw:feature_created`,
        level: "system",
        actionType: "draw",
        mode: e.shape,
        action: "feature_created",
        featureData: e
      };
      this.gm.events.fire(`${se}:draw`, r);
    }
  }
}
class jM {
  getEuclideanNearestLngLat(e, r) {
    const s = this.project(r);
    let u = [0, 0], c = 1 / 0;
    return Yl(e, (f) => {
      const h = this.project(f.start.coordinate), p = this.project(f.end.coordinate), d = Pk(
        h,
        p,
        s
      ), v = Ga(s, d);
      v < c && (c = v, u = [d[0], d[1]]);
    }), this.unproject(u);
  }
  getDistance(e, r) {
    return Vd(e, r, { units: "meters" });
  }
}
class ZM {
  isInstanceAvailable() {
    return this.layerInstance ? !0 : (te.error("layerInstance is not available"), !1);
  }
}
class xu extends ZM {
  gm;
  layerInstance = null;
  mapInstance;
  constructor({
    gm: e,
    layerId: r,
    options: s
  }) {
    super(), this.gm = e, this.mapInstance = this.gm.mapAdapter.mapInstance, s ? this.layerInstance = this.createLayer(s) : this.layerInstance = this.mapInstance.getLayer(r) || null;
  }
  get id() {
    if (!this.isInstanceAvailable())
      throw new Error("Layer instance is not available");
    return this.layerInstance.id;
  }
  get source() {
    if (!this.isInstanceAvailable())
      throw new Error("Layer instance is not available");
    return this.layerInstance.source;
  }
  createLayer(e) {
    let r = this.mapInstance.getLayer(e.id);
    return r ? te.warn(`Layer "${e.id}" already exists, skipping`) : (this.mapInstance.addLayer(e), r = this.mapInstance.getLayer(e.id)), r ?? null;
  }
  remove() {
    this.isInstanceAvailable() && this.mapInstance.removeLayer(this.id), this.layerInstance = null;
  }
}
class KM extends Dl {
  markerInstance;
  constructor({
    mapInstance: e,
    options: r,
    lngLat: s
  }) {
    super(), this.markerInstance = new ll.Marker(r).setLngLat(s).addTo(e);
  }
  getElement() {
    return this.isMarkerInstanceAvailable() && this.markerInstance?.getElement() || null;
  }
  setLngLat(e) {
    this.isMarkerInstanceAvailable() && this.markerInstance?.setLngLat(e);
  }
  getLngLat() {
    return this.isMarkerInstanceAvailable() ? this.markerInstance?.getLngLat().toArray() || [0, 0] : [0, 0];
  }
  remove() {
    this.markerInstance?.remove();
  }
}
class QM {
  isInstanceAvailable() {
    return this.popupInstance ? !0 : (te.error("Popup instance is not available"), !1);
  }
}
class eI extends QM {
  popupInstance;
  constructor({
    mapInstance: e,
    options: r,
    lngLat: s
  }) {
    super(), this.popupInstance = new ll.Popup(r).addTo(e), s && this.setLngLat(s);
  }
  getLngLat() {
    return this.isInstanceAvailable() ? this.popupInstance.getLngLat().toArray() || [0, 0] : [0, 0];
  }
  setLngLat(e) {
    this.isInstanceAvailable() && this.popupInstance.setLngLat(e);
  }
  setHtml(e) {
    this.isInstanceAvailable() && this.popupInstance.setHTML(e);
  }
  remove() {
    this.isInstanceAvailable() && this.popupInstance.remove();
  }
}
class Jf extends XM {
  gm;
  mapInstance;
  sourceInstance;
  constructor({ gm: e, geoJson: r, sourceId: s }) {
    super(), this.gm = e, this.mapInstance = this.gm.mapAdapter.mapInstance, r ? this.sourceInstance = this.createSource({ geoJson: r, sourceId: s }) : this.sourceInstance = this.mapInstance.getSource(s) || null;
  }
  get id() {
    if (!this.isInstanceAvailable())
      throw new Error("Source instance is not available");
    return this.sourceInstance.id;
  }
  get loaded() {
    return this.mapInstance.isSourceLoaded(this.id);
  }
  async waitForLoad() {
    const e = "idle", r = new Promise((s) => {
      if (this.loaded) {
        s();
        return;
      }
      const u = () => {
        this.loaded && (this.mapInstance.off(e, u), s());
      };
      this.mapInstance.on(e, u);
    });
    await Vu(r, "Unable to wait for source to load");
  }
  createSource({ geoJson: e, sourceId: r }) {
    let s = this.mapInstance.getSource(r);
    return s ? te.warn(`Source "${s.id}" already exists, skipping`) : (this.mapInstance.addSource(r, {
      type: "geojson",
      data: e,
      promoteId: mn
    }), s = this.mapInstance.getSource(r)), s ?? null;
  }
  getGeoJson() {
    if (!this.isInstanceAvailable())
      throw new Error("Source instance is not available");
    return this.sourceInstance.serialize().data;
  }
  setGeoJson(e) {
    if (!this.isInstanceAvailable())
      throw new Error("Source instance is not available");
    return this.sourceInstance.setData(e);
  }
  updateData(e) {
    if (!this.isInstanceAvailable())
      return;
    const r = this.convertUniversalDiffToMlDiff(e);
    this.sourceInstance.updateData(r);
  }
  convertUniversalDiffToMlDiff(e) {
    return {
      add: e.add,
      update: e.update?.map(this.convertFeatureToMlUpdateDiff.bind(this)),
      remove: e.remove
    };
  }
  convertFeatureToMlUpdateDiff(e) {
    const r = [], s = [];
    return Object.entries(e.properties || {}).forEach(([u, c]) => {
      c === void 0 ? s.push(u) : r.push({ key: u, value: c });
    }), {
      id: e.properties?.[mn],
      newGeometry: e.geometry,
      addOrUpdateProperties: r,
      removeProperties: s
    };
  }
  remove() {
    this.isInstanceAvailable() && (this.gm.mapAdapter.eachLayer((e) => {
      e.source === this.sourceInstance.id && this.gm.mapAdapter.removeLayer(e.id);
    }), this.mapInstance.removeSource(this.sourceInstance.id));
  }
}
const tI = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "contextmenu",
  "touchstart",
  "touchend",
  "touchcancel"
], wu = (t) => tI.includes(t);
class nI extends jM {
  gm;
  mapType = "maplibre";
  mapInstance;
  constructor(e, r) {
    super(), this.gm = r, this.mapInstance = e;
  }
  getMapInstance() {
    return this.mapInstance;
  }
  isLoaded() {
    return this.mapInstance._loaded;
  }
  getContainer() {
    return this.mapInstance.getContainer();
  }
  getCanvas() {
    return this.mapInstance.getCanvas();
  }
  addControl(e) {
    this.mapInstance.addControl(e);
  }
  removeControl(e) {
    this.mapInstance.removeControl(e);
  }
  async loadImage({ id: e, image: r }) {
    if (!this.mapInstance.hasImage(e)) {
      const s = await this.mapInstance.loadImage(r);
      this.mapInstance.addImage(e, s.data);
    }
  }
  getBounds() {
    return this.mapInstance.getBounds().toArray();
  }
  fitBounds(e, r) {
    this.mapInstance.fitBounds(e, r);
  }
  setCursor(e) {
    this.mapInstance.getCanvas().style.cursor = e;
  }
  disableMapInteractions(e) {
    e.forEach((r) => {
      this.mapInstance[r].disable();
    });
  }
  enableMapInteractions(e) {
    e.forEach((r) => {
      this.mapInstance[r].enable();
    });
  }
  setDragPan(e) {
    e ? this.mapInstance.dragPan.enable() : this.mapInstance.dragPan.disable();
  }
  queryFeaturesByScreenCoordinates({
    queryCoordinates: e = void 0,
    sourceNames: r
  }) {
    return yh(
      this.mapInstance.queryRenderedFeatures(e).map((u) => ({
        featureId: u.properties[mn],
        featureSourceName: u.source
      })),
      Wi
    ).map(({ featureId: u, featureSourceName: c }) => u === void 0 || !r.includes(c) ? null : this.gm.features.get(c, u) || null).filter((u) => !!u);
  }
  queryGeoJsonFeatures({
    queryCoordinates: e = void 0,
    sourceNames: r
  }) {
    const s = (c, f) => c?.id === f?.id;
    return yh(
      this.mapInstance.queryRenderedFeatures(e).map((c) => {
        const f = this.convertToGeoJsonImportFeature(c);
        return f ? {
          id: c.properties[mn],
          sourceName: c.source,
          geoJson: f
        } : null;
      }),
      s
    ).filter((c) => !!c && c.id !== void 0 && c.geoJson && r.includes(c.sourceName));
  }
  convertToGeoJsonImportFeature(e) {
    const r = e.properties[mn];
    return r === void 0 || e.geometry.type === "GeometryCollection" ? null : {
      id: r,
      type: "Feature",
      properties: e.properties,
      geometry: e.geometry
    };
  }
  addSource(e, r) {
    return new Jf({ gm: this.gm, sourceId: e, geoJson: r });
  }
  getSource(e) {
    return new Jf({ gm: this.gm, sourceId: e });
  }
  addLayer(e) {
    const r = e.id;
    return new xu({ gm: this.gm, layerId: r, options: e });
  }
  getLayer(e) {
    return this.mapInstance.getLayer(e) ? new xu({ gm: this.gm, layerId: e }) : null;
  }
  removeLayer(e) {
    const r = this.getLayer(e);
    r && r.remove();
  }
  eachLayer(e) {
    this.mapInstance.getStyle().layers.forEach((r) => {
      e(new xu({ gm: this.gm, layerId: r.id }));
    });
  }
  createDomMarker(e, r) {
    return new KM({
      mapInstance: this.mapInstance,
      options: e,
      lngLat: r
    });
  }
  createPopup(e, r) {
    return new eI({
      mapInstance: this.mapInstance,
      options: e,
      lngLat: r
    });
  }
  project(e) {
    const r = this.mapInstance.project(e);
    return [r.x, r.y];
  }
  unproject(e) {
    const r = this.mapInstance.unproject(e);
    return [r.lng, r.lat];
  }
  coordBoundsToScreenBounds(e) {
    const r = new ll.LngLatBounds(e), s = this.project(r.getSouthWest().toArray()), u = this.project(r.getNorthEast().toArray());
    return [s, u];
  }
  fire(e, r) {
    this.mapInstance.fire(e, r);
  }
  on(e, r, s) {
    if (typeof r == "string" && s && wu(e))
      this.mapInstance.on(e, r, s);
    else if (typeof r == "function")
      this.mapInstance.on(e, r);
    else
      throw new Error("Invalid arguments passed to 'on' method");
  }
  once(e, r, s) {
    if (typeof r == "string" && s && wu(e))
      this.mapInstance.once(e, r, s);
    else if (typeof r == "function")
      this.mapInstance.once(e, r);
    else
      throw new Error("Invalid arguments passed to 'once' method.");
  }
  off(e, r, s) {
    if (typeof r == "string" && s && wu(e))
      this.mapInstance.off(e, r, s);
    else if (typeof r == "function")
      this.mapInstance.off(e, r);
    else
      throw new Error("Invalid arguments passed to 'off' method");
  }
}
const rI = (t, e) => new nI(e, t), iI = (t, e) => {
  if (!Array.isArray(t) || !Array.isArray(e))
    return;
  if (e.some((u) => !Vk(u))) {
    te.warn("Wrong partial layer detected for layer styles");
    return;
  }
  const r = wE(t, "type"), s = oE(e, "type");
  if (Object.values(s).some((u) => u > 1))
    throw new Error(
      'Multiple layers for the same shape are detected. Use "useDefaultLayers: false" and define layers manually.'
    );
  return e.forEach((u) => {
    r[u.type] ? kE(r[u.type], u) : r[u.type] = sn(u);
  }), vE(r);
};
class sI {
  gm;
  settings;
  controls;
  layerStyles;
  constructor(e, r) {
    this.gm = e;
    const s = this.getMergedOptions(r);
    this.settings = s.settings, this.controls = s.controls, this.layerStyles = s.layerStyles;
  }
  getMergedOptions(e = {}) {
    const r = Nu();
    return typeof e.settings?.controlsUiEnabledByDefault == "boolean" && (r.settings.controlsUiEnabledByDefault = e.settings.controlsUiEnabledByDefault), BE(r), gE(r, e, iI);
  }
  enableMode(e, r) {
    const s = this.isModeEnabled(e, r), u = this.isModeAvailable(e, r);
    if (u || te.warn(`Unable to enable mode, "${e}:${r}" is not available`), s || !u)
      return;
    const f = this.controls[e][r];
    f ? (f.active = !0, this.fireModeEvent(e, r, "mode_start"), this.fireControlEvent(e, r, "on"), this.fireModeEvent(e, r, "mode_started")) : te.error("Can't find control section for", e, r);
  }
  disableMode(e, r) {
    const s = this.isModeEnabled(e, r), u = this.isModeAvailable(e, r);
    if (!s || !u)
      return;
    const f = this.controls[e][r];
    f ? (f.active = !1, this.fireModeEvent(e, r, "mode_end"), this.fireControlEvent(e, r, "off"), this.fireModeEvent(e, r, "mode_ended")) : te.error("Can't find control section for", e, r);
  }
  syncModeState(e, r) {
    const u = this.controls[e][r], c = this.isModeAvailable(e, r);
    u && (c ? u.active ? this.enableMode(e, r) : this.disableMode(e, r) : (console.log(`Not available mode: ${e}:${r}`), u.active = !1, u.uiEnabled = !1));
  }
  toggleMode(e, r) {
    this.isModeEnabled(e, r) ? this.disableMode(e, r) : this.enableMode(e, r);
  }
  isModeEnabled(e, r) {
    return !!Object.entries(this.gm.actionInstances).find(([s, u]) => s === `${e}__${r}` && u);
  }
  isModeAvailable(e, r) {
    return e === "draw" && Tr(r, Nd) ? !!this.gm.drawClassMap[r] : e === "edit" && Tr(r, Od) ? !!this.gm.editClassMap[r] : e === "helper" && Tr(r, Pd) ? !!this.gm.helperClassMap[r] : !1;
  }
  getControlOptions({
    modeType: e,
    modeName: r
  }) {
    return e && r && this.controls[e][r] || null;
  }
  fireModeEvent(e, r, s) {
    const u = {
      name: `${se}:${r}:mode`,
      level: "system",
      actionType: e,
      mode: r,
      action: s
    };
    tc(u) && (Wl(u) ? this.gm.events.fire(`${se}:${e}`, u) : es(u) ? this.gm.events.fire(`${se}:${e}`, u) : Vl(u) ? this.gm.events.fire(`${se}:${e}`, u) : te.warn("Unknown mode event: ", u));
  }
  fireControlEvent(e, r, s) {
    const u = {
      name: `${se}:control:switch`,
      level: "system",
      actionType: "control",
      section: e,
      target: r,
      action: s
    };
    this.gm.events.fire(`${se}:control`, u);
  }
}
class aI {
  gm;
  marker = null;
  tmpMarker = null;
  snapping = !1;
  oldSnapping = void 0;
  constructor(e) {
    this.gm = e, this.initEventHandlers();
  }
  get snappingHelper() {
    return this.gm.actionInstances.helper__snapping || null;
  }
  initEventHandlers() {
    this.throttledMethods = oi(
      {
        onMouseMove: this.onMouseMove
      },
      this,
      this.gm.options.settings.throttlingDelay
    ), this.eventHandlers = {
      mousemove: this.throttledMethods.onMouseMove.bind(this)
    };
  }
  setSnapping(e) {
    if (e && !this.snappingHelper) {
      te.error("MarkerPointer: snapping is not available");
      return;
    }
    this.snapping = e;
  }
  pauseSnapping() {
    this.oldSnapping !== void 0 && te.error("MarkerPointer: snapping is already paused"), this.oldSnapping = this.snapping, this.setSnapping(!1);
  }
  resumeSnapping() {
    this.oldSnapping === void 0 ? (te.error("MarkerPointer: resumeSnapping is called before pauseSnapping"), this.setSnapping(!0)) : (this.setSnapping(this.oldSnapping), this.oldSnapping = void 0);
  }
  enable({ lngLat: e, customMarker: r, invisibleMarker: s } = {
    lngLat: [0, 0],
    customMarker: void 0,
    invisibleMarker: !1
  }) {
    if (!qk()) {
      if (r && s)
        throw new Error("MarkerPointer: customMarker and invisibleMarker can't be used together");
      if (this.marker)
        throw new Error("MarkerPointer: marker is already enabled");
      this.gm.events.bus.attachEvents(this.eventHandlers), s ? this.marker = this.createInvisibleMarker(e || [0, 0]) : this.marker = r || this.createMarker(e || [0, 0]), this.gm.getActiveDrawModes().length && this.gm.mapAdapter.setCursor("crosshair");
    }
  }
  disable() {
    this.marker && (this.gm.events.bus.detachEvents(this.eventHandlers), this.marker.remove(), this.marker = null), this.gm.mapAdapter.setCursor("");
  }
  createMarker(e = [0, 0]) {
    return this.gm.mapAdapter.createDomMarker(
      {
        anchor: "center",
        element: this.gm.createSvgMarkerElement("control", { pointerEvents: "none" })
      },
      e
    );
  }
  createInvisibleMarker(e = [0, 0]) {
    const r = document.createElement("div");
    return r.style.width = "0px", r.style.height = "0px", this.gm.mapAdapter.createDomMarker(
      {
        anchor: "center",
        element: r
      },
      e
    );
  }
  onMouseMove(e) {
    if (je(e, { warning: !0 }) && this.marker)
      if (this.snapping && this.snappingHelper) {
        const r = [e.point.x, e.point.y], s = this.snappingHelper.getSnappedLngLat(e.lngLat.toArray(), r);
        this.marker.setLngLat(s);
      } else
        this.marker.setLngLat(e.lngLat.toArray());
    return { next: !0 };
  }
  syncTmpMarker(e) {
    this.tmpMarker || (this.tmpMarker = this.createMarker(e)), this.tmpMarker.setLngLat(e);
  }
}
const SI = {
  type: "Feature",
  properties: {
    shape: "polygon"
  },
  geometry: {
    type: "MultiPolygon",
    coordinates: [
      [
        [
          [4, 51.2],
          [5.4, 52.4],
          [6.8, 51.2],
          [4, 51.2]
        ]
      ]
    ]
  }
}, MI = {
  type: "Feature",
  properties: {
    shape: "rectangle"
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-0.47, 51.67],
        [1.43, 51.67],
        [1.43, 53.32],
        [-0.47, 53.32],
        [-0.47, 51.67]
      ]
    ]
  }
}, II = (t) => kn(t) && t.name === `${se}:feature:before_create`, bI = (t) => kn(t) && t.name === `${se}:feature:before_update`;
function oI(t, e = {}) {
  const r = [];
  if (Pr(t, (u) => {
    r.push(u.coordinates);
  }), r.length < 2)
    throw new Error("Must have at least 2 geometries");
  const s = dM(r[0], ...r.slice(1));
  return s.length === 0 ? null : s.length === 1 ? or(s[0], e.properties) : Fl(s, e.properties);
}
var uI = oI;
class LI extends ts {
  features = [];
  featureData = null;
  eventHandlers = {
    click: this.onMouseClick.bind(this)
  };
  onStartAction() {
  }
  onEndAction() {
    this.features.forEach((e) => {
      e.changeSource({ sourceName: K.main, atomic: !0 });
    }), this.features = [];
  }
  onMouseClick(e) {
    if (!je(e))
      return { next: !0 };
    if (this.unselectFeature(e))
      return { next: !0 };
    const s = this.getAllowedFeatureByMouseEvent({ event: e, sourceNames: [K.main] });
    return s && this.isFeatureAllowedToGroup(s) && (s.changeSource({ sourceName: K.temporary, atomic: !0 }), this.features.push(s)), this.features.length > 1 ? (this.groupFeatures(), { next: !0 }) : { next: !0 };
  }
  unselectFeature(e) {
    const r = this.getAllowedFeatureByMouseEvent({
      event: e,
      sourceNames: [K.temporary]
    });
    if (r) {
      const s = this.features.findIndex((u) => u === r);
      return s > -1 && this.features.splice(s, 1), r.changeSource({ sourceName: K.main, atomic: !0 }), !0;
    }
    return !1;
  }
  getAllowedFeatureByMouseEvent({
    event: e,
    sourceNames: r
  }) {
    const s = this.getFeatureByMouseEvent({ event: e, sourceNames: r });
    return s && this.allowedShapeTypes.includes(s.shape) ? s : null;
  }
  isFeatureAllowedToGroup(e) {
    if (!this.allowedShapeTypes.includes(e.shape))
      return !1;
    if (this.features.length === 0)
      return !0;
    const r = e.getGeoJson();
    return this.features.every(
      (s) => Ip(s.getGeoJson(), r)
    );
  }
  groupFeatures() {
    if (!this.features.length) {
      te.error("BaseGroupEdit.groupFeatures: no features to group");
      return;
    }
    const e = {
      type: "FeatureCollection",
      features: this.features.map((s) => {
        const u = s.getGeoJson();
        return ["Polygon", "MultiPolygon"].includes(u.geometry.type) ? u : null;
      }).filter((s) => !!s)
    };
    let r = null;
    if (this.mode === "union" ? r = uI(e) : this.mode === "difference" && (r = Np(e)), r) {
      const s = this.gm.features.createFeature({
        shapeGeoJson: {
          ...r,
          properties: {
            ...r.properties,
            shape: "polygon"
          }
        },
        sourceName: K.main
      });
      this.features.forEach((u) => {
        this.gm.features.delete(u);
      }), s && Mp(this.features) && this.fireFeatureUpdatedEvent({
        sourceFeatures: this.features,
        targetFeatures: [s]
      }), this.features = [];
    }
  }
}
class lI {
  mapAdapterInstance = null;
  globalLngLatBounds = this.getGlobalLngLatBounds();
  features;
  loaded = !1;
  options;
  events;
  control;
  actionInstances = {};
  markerPointer;
  constructor(e, r = {}) {
    this.options = this.initCoreOptions(r), this.events = this.initCoreEvents(), this.features = this.initCoreFeatures(), this.control = this.initCoreControls(), this.markerPointer = this.initMarkerPointer();
    const s = Object.assign(e, { gm: this });
    this.mapAdapterInstance = rI(this, s), this.waitForBaseMap().then(this.init.bind(this));
  }
  get drawClassMap() {
    return Xu;
  }
  get editClassMap() {
    return ol;
  }
  get helperClassMap() {
    return ul;
  }
  get mapAdapter() {
    if (this.mapAdapterInstance)
      return this.mapAdapterInstance;
    throw te.trace("Map adapter is not initialized"), new Error("Map adapter is not initialized");
  }
  initCoreOptions(e = {}) {
    return new sI(this, e);
  }
  initCoreEvents() {
    return new $M(this);
  }
  initCoreFeatures() {
    return new WM(this);
  }
  initCoreControls() {
    return new ok(this);
  }
  initMarkerPointer() {
    return new aI(this);
  }
  addControls(e = void 0) {
    return new Promise((r) => {
      (async () => {
        e ? this.control.createControls(e) : this.mapAdapter.addControl(this.control), await this.onMapLoad(), r();
      })().then();
    });
  }
  async waitForBaseMap() {
    const e = this.mapAdapter.mapInstance;
    if (!Jk(e)) {
      te.error('Map instance does not have a "once" method', e);
      return;
    }
    return this.mapAdapter.isLoaded() || await Vu(
      new Promise((r) => {
        e.once("load", r);
      }),
      "waitForBaseMap failed"
    ), e;
  }
  async waitForGeomanLoaded() {
    if (this.loaded)
      return this;
    const e = await this.waitForBaseMap();
    if (!e) {
      te.error("Map instance is not available", e);
      return;
    }
    return await Vu(
      new Promise((r) => {
        e.once(`${ot}:loaded`, r);
      }),
      "waitForGeomanLoaded failed"
    ), this;
  }
  async init() {
    this.features.init(), await this.addControls();
  }
  async destroy({ removeSources: e } = { removeSources: !1 }) {
    if (await this.waitForGeomanLoaded(), this.removeControls(), this.events.bus.detachAllEvents(), e)
      for (const r of Object.values(this.features.sources))
        r && r.remove();
    "gm" in this.mapAdapter.mapInstance && delete this.mapAdapter.mapInstance.gm;
  }
  removeControls() {
    this.disableAllModes(), this.mapAdapter.removeControl(this.control);
  }
  async onMapLoad() {
    if (this.loaded)
      return;
    await this.mapAdapter.loadImage({
      id: "default-marker",
      image: Tm
    });
    const e = {
      name: `${se}:control:load`,
      level: "system",
      actionType: "control",
      action: "loaded"
    };
    this.events.fire(`${se}:control`, e), this.loaded = !0;
  }
  disableAllModes() {
    tt(this.actionInstances).forEach((e) => {
      const [r, s] = e.split("__");
      O2(r) && G2(s) && this.options.disableMode(r, s);
    });
  }
  getActiveDrawModes() {
    return tt(this.actionInstances).map((e) => {
      const r = this.actionInstances[e];
      return r instanceof dr ? r.mode : null;
    }).filter((e) => e !== null);
  }
  getActiveEditModes() {
    return tt(this.actionInstances).map((e) => {
      const r = this.actionInstances[e];
      return r instanceof ts ? r.mode : null;
    }).filter((e) => e !== null);
  }
  getActiveHelperModes() {
    return tt(this.actionInstances).map((e) => {
      const r = this.actionInstances[e];
      return r instanceof Or ? r.mode : null;
    }).filter((e) => e !== null);
  }
  getGlobalLngLatBounds() {
    const e = 85.051129;
    return [
      [-179.99999, -e],
      [179.99999, e]
    ];
  }
  setGlobalEventsListener(e = null) {
    this.events.bus.forwarder.globalEventsListener = e;
  }
  createSvgMarkerElement(e, r = void 0) {
    const s = this.options.settings.markerIcons;
    s[e] || te.error(`createMarkerElement: marker type "${e}" not found`);
    const u = document.createElement("div");
    u.classList.add("marker-wrapper"), u.style.lineHeight = "0", u.innerHTML = s[e] || "NO_ICON";
    const c = u.firstChild;
    if (typeof c != "object")
      throw te.error(`createMarkerElement: no icon "${e}" found`), new Error(`No icon "${e}" found`);
    return r && Object.assign(c.style, r), u;
  }
  enableMode(e, r) {
    this.options.enableMode(e, r);
  }
  disableMode(e, r) {
    this.options.disableMode(e, r);
  }
  toggleMode(e, r) {
    this.options.toggleMode(e, r);
  }
  isModeEnabled(e, r) {
    return this.options.isModeEnabled(e, r);
  }
  // helper methods for compatibility with the old API
  // draw (draw:*)
  enableDraw(e) {
    this.options.enableMode("draw", e);
  }
  disableDraw() {
    this.getActiveDrawModes().forEach((e) => this.options.disableMode("draw", e));
  }
  toggleDraw(e) {
    this.options.toggleMode("draw", e);
  }
  drawEnabled(e) {
    return this.options.isModeEnabled("draw", e);
  }
  // drag(edit:drag)
  enableGlobalDragMode() {
    this.options.enableMode("edit", "drag");
  }
  disableGlobalDragMode() {
    this.options.disableMode("edit", "drag");
  }
  toggleGlobalDragMode() {
    this.options.toggleMode("edit", "drag");
  }
  globalDragModeEnabled() {
    return this.options.isModeEnabled("edit", "drag");
  }
  // edit (edit:change)
  enableGlobalEditMode() {
    this.options.enableMode("edit", "change");
  }
  disableGlobalEditMode() {
    this.options.disableMode("edit", "change");
  }
  toggleGlobalEditMode() {
    this.options.toggleMode("edit", "change");
  }
  globalEditModeEnabled() {
    return this.options.isModeEnabled("edit", "change");
  }
  // rotate (edit:rotate)
  enableGlobalRotateMode() {
    this.options.enableMode("edit", "rotate");
  }
  disableGlobalRotateMode() {
    this.options.disableMode("edit", "rotate");
  }
  toggleGlobalRotateMode() {
    this.options.toggleMode("edit", "rotate");
  }
  globalRotateModeEnabled() {
    return this.options.isModeEnabled("edit", "rotate");
  }
  // cut (edit:cut)
  enableGlobalCutMode() {
    this.options.enableMode("edit", "cut");
  }
  disableGlobalCutMode() {
    this.options.disableMode("edit", "cut");
  }
  toggleGlobalCutMode() {
    this.options.toggleMode("edit", "cut");
  }
  globalCutModeEnabled() {
    return this.options.isModeEnabled("edit", "cut");
  }
  // remove (edit:delete)
  enableGlobalRemovalMode() {
    this.options.enableMode("edit", "delete");
  }
  disableGlobalRemovalMode() {
    this.options.disableMode("edit", "delete");
  }
  toggleGlobalRemovalMode() {
    this.options.toggleMode("edit", "delete");
  }
  globalRemovalModeEnabled() {
    return this.options.isModeEnabled("edit", "delete");
  }
}
const TI = async (t, e) => {
  const r = new lI(t, e);
  return await r.waitForGeomanLoaded(), r;
};
export {
  Xl as BaseAction,
  Dl as BaseDomMarker,
  ec as BaseDrag,
  dr as BaseDraw,
  ts as BaseEdit,
  LI as BaseGroupEdit,
  Or as BaseHelper,
  ZM as BaseLayer,
  jM as BaseMapAdapter,
  QM as BasePopup,
  XM as BaseSource,
  Nd as DRAW_MODES,
  Od as EDIT_MODES,
  dk as EXTRA_DRAW_MODES,
  mn as FEATURE_ID_PROPERTY,
  It as FEATURE_PROPERTY_PREFIX,
  ro as FeatureData,
  ot as GM_PREFIX,
  lI as Geoman,
  sI as GmOptions,
  Pd as HELPER_MODES,
  ht as IS_PRO,
  Kl as LineDrawer,
  aI as MarkerPointer,
  Wr as SHAPE_NAMES,
  K as SOURCES,
  zM as ShapeMarkersHelper,
  gI as boundsContains,
  Ak as boundsToBBox,
  dI as calculatePerimeter,
  wt as controlIcons,
  pI as convertToLineStringFeatureCollection,
  oi as convertToThrottled,
  TI as createGeomanInstance,
  MI as customShapeRectangle,
  SI as customShapeTriangle,
  sv as defaultLayerStyles,
  Xu as drawClassMap,
  na as eachCoordinateWithPath,
  Yl as eachSegmentWithPath,
  ol as editClassMap,
  Tk as findCoordinateWithPath,
  kI as formatArea,
  wI as formatDistance,
  Zd as geoJsonPointToLngLat,
  Ga as getEuclideanDistance,
  Pk as getEuclideanSegmentNearestPoint,
  lu as getGeoJsonCoordinatesCount,
  Kd as getGeoJsonFirstPoint,
  uu as getLngLatDiff,
  ul as helperClassMap,
  Tr as includesWithType,
  _I as isActionType,
  yI as isBaseMapEventName,
  R2 as isDrawModeName,
  D2 as isEditModeName,
  Vh as isEqualPosition,
  Tf as isGeoJsonFeatureInPolygon,
  Td as isGmControlEvent,
  Wl as isGmDrawEvent,
  mI as isGmDrawFreehandDrawerEvent,
  tp as isGmDrawLineDrawerEvent,
  ep as isGmDrawShapeEvent,
  es as isGmEditEvent,
  kn as isGmEvent,
  II as isGmFeatureBeforeCreateEvent,
  bI as isGmFeatureBeforeUpdateEvent,
  Vl as isGmHelperEvent,
  tc as isGmModeEvent,
  F2 as isHelperModeName,
  je as isMapPointerEvent,
  Jk as isMapWithOnceMethod,
  G2 as isModeName,
  ql as isMultiPolygonFeature,
  Mp as isNonEmptyArray,
  vI as isPointerEventName,
  zl as isPolygonFeature,
  Gk as lngLatToGeoJsonPoint,
  iI as mergeByTypeCustomizer,
  xI as moveFeatureData,
  RS as moveGeoJson,
  zS as toMod,
  fI as twoCoordsToLineString,
  tt as typedKeys
};
//# sourceMappingURL=maplibre-geoman.es.js.map
