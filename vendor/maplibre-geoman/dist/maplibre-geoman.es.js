import ll from "maplibre-gl";
const Am = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mLYpUHOwgopChOtlFRRxrFYpQIdQKrTqYXPoHTRqSFBdHwbXg4M9i1cHFWVcHV0EQ/AFxdnBSdJESv0sKLWK847iH97735e47QGhWmWaFEoCm22YmlRRz+VWx5xUhmmGMIi4zy5iTpDR8x9c9Any/i/Ms/7o/R79asBgQEIkTzDBt4g3imU3b4LxPHGVlWSU+J54w6YLEj1xXPH7jXHJZ4JlRM5uZJ44Si6UuVrqYlU2NeJo4pmo65Qs5j1XOW5y1ap2178lfGCnoK8tcpzWCFBaxBAkiFNRRQRU24rTrpFjI0HnSxz/s+iVyKeSqgJFjATVokF0/+B/87q1VnJr0kiJJIPziOB9jQM8u0Go4zvex47ROgOAzcKV3/LUmMPtJeqOjxY6AgW3g4rqjKXvA5Q4w9GTIpuxKQVpCsQi8n9E35YHBW6Bvzetb+xynD0CWepW+AQ4OgfESZa/7vLu3u2//1rT79wN2rHKoBaSKHQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+gEBAUlKJesuC4AABWbSURBVHja7Z3fcxTHEce/t1ohYekA2QaBDBgocGLHNmW7Kg4pV9l5SeUleci/4b9H/0aeU3mJXXEF5yEmEOw4hgKFH7JBtpEQwhLS3eVhunV9w+7tHWh3e2Z7q64OyZJ18+Mz3+7pme4W7Bn6tBdXWwD4lYj3FMA0gCkAswCOAJihrw8AOAfgdwDOAmgDmKDf3YunB6ADYB3AdQB/BnANwEMAWwA2ANwH8Ii+3gSwA6BLv8vvvfWPD/VslPOflnVBLhQQYKQCiEl6zQCYB/AigGMA3gBwGMB+guQQgFfpfZKg2sunC2AbwCqA/9H7FoCfAKwA+ArAtwB+BHCPoNmmFwOzw6AAgMFigIyrFhMChgMERJu+PkJQHCNI5un7qfi9F+i9VUJf88TeBvCY3js06TcIih8Jkq9IUTZIde6R2myI3zNVMUBGAiOlST1NrwMAjgM4BeAtAUKbIJklxZim35WAJSXB4UPSlROcINkkRXlEcKwLcP4NYAnAHQJlk17bUlUMlIYDkgHGPpr8BwEcJWVYAPA2AXKcwGAza0ooRiL6s1Vx//Yy3rtCUbaEebVOYCwBuAJgmZTmOwBrBNETA6XBgAwBYw7ACYLhbYLjRYLlIP3MpOest2oAYhxgep5zvk0QrBEUPxIkVwia2wAeGCgNBGQEME4DeIcAOUHm1bRwztMaVWIv1WVHOOubZGbdJkAuAbhpoDQIELErlRSAcZq+nhNqMeEpReh91vOUpSNU5QGBcbMAlG5Tdr1aDYGjRROdYxZFYOzzHO4Y+8o3w3YIgCJQOLbSaYKatBoAR0JKsB/Ay2Q+nRkRjKaYoL0RQblBZtj3cPGWbQDdmCFpRQyGVI0DcFuybwL4FVx0+6SBMRYot+Ci9p8DuAq3dfwwdjVpRQxHCheoO0xKcY7geJNgaRsYY4GyTlBcJUiukbKswAUqd2KEpBUhHBM06WfgotznAVwgQE6TmbWffiYxMEYCpUsA/ETm1U0C5CKAy3DR+g36mU5MkLQiAsM3qeYJjg/pfZ6+P4X+wUEDYzxQOmRSPYSLyF8G8Cm934vR5GpFBEeWSXWB4DiGwXNSMDieCRJg8LzXtwTHxVhNrlZEcMzCRb59k+owgZOaauypmuwQCCsZJtcy3HZw8JCkEcHxCoB3AXxkJlUli2oqVHmGFqIZsRDdZUjai6vBBhXTwOHgo+gMx2/ofcEzqQyMvYfEP7YzhcGjOCBINgBshwpJGigciYBjwYPjFQFHYnCUDgovQKzi/rMsIAkuqJgGCscU+kfSz5NZxXDMmr9ROSS8YPmQsLrwUfqt0CBpBQrHS+SE/xzArwmSBYNDjfP+iJTjMoC/A/ianPgf4LaBg4GkFRAcLbjI9xyA1wH8Fu6G31m4yLjtVOmC5DFc5P063A3GvwD4D9yxlScIZHcrCQgO9jmOknK8Re9Hvd0Tg6N+5z0tGKtJAC1xDcEAeU44UuGQnyez6iz6x0ZsG1cfJBPon6A+65nCuwuadkiSQODIinMcMTiCgeTIsM0UzZCkyjvZh0PGOV4wOILwbydorBbQP67Cz24wMeO/GSAF6iE71o9z2G5VWJDIhc536u8A2Ggvrqp02lPFcEzBHV+wOEeckPBu1xYrSHtxVd1R+UQhHGxaHYA7bHghy7kzOIL0SfzNlgs0xge0+iOpwo7kTpyHCwaew2BaT4MjfCXxx3eFlKSrzR9RoyCe33EsZ4Wxs1XhQ5LkWAjHeONFk4okiuBIPL+DbwIexuCRdXvCh2SiYKwTLZAkSuDgSHnuqmJwRAlJnrWgJtKuxcSSAaU8v8Oe+CDJ8kdkALjZCuKZVi+jn7dqYGcDcWY19EsX5L3kz8YGiL9jyWmZXtZiaqVKVpFZuIyHfgfFYlrllSfojdFPdZZXqMIf4QVyDS5Dyjr6JRt6jQMk4wj7GfSPrquR2D2Cwi9BwAEyruxUpPI8ieROntbSC89rYp+luXAHlGurvbjaqiuAmNa8erANegIuV+5JuIyHIZtWWdnT/SI2G/DS4xT0Eacz4qPiecV7QuwzGR9p0xx4By5TCt8dqU1FagEkQz1O02uOvhdivMNP18n1N7LKoN2HuzwkA2S9HLOKt0NfR7+Sblb5t0mEm0aV2+rPh9t1q0haY4f46nEi0F2rvITPsoJTViHNFfTTdfZG6KcryC8gKitghZpvOGtO1K4ilQMygnqEMqhFJQOWMFgD0C/FvAWvDPOQnZ4HBJQsQX0VT9dQDLmUQ968qFVFUiUrRWjqIZ3tvFoaS/S1rCK74znrow42A8WmyAO4JNJchfc6ATKs5kkSCCSqVKRSQCJQDz+J8yMUly3z65Dv7nCNuhpSv3VF32yLv79GCnWL/nZW1Sz2VbRfMFOnIqmCFSIU9cjKSbsEV3WpsPDlOED4j/i9ngcM1xfMUjEG5Qypi8xRDOWQqFGRyjpJRM33w12a+RDAH+HO4cyhX15Zs0nVwWDOp4tk3txCTRVhCyr3noSLK8g7NbN4uq67tofLVT+gfv4TXJmFu3A1SirLq1W1giRkNx8lxzIE9fDriy8D+ALAJzR4XIqsllLJ9Hd6BMq25xc9FDtn/Nn44tmkYkh8FXkbwH8hEs/FaGLxsYJpsfuye3JT6UCxv8G1xLlozCcEyTKZW9vsY9QV8c0AhQOUm56pt4N+5vtp6DzO45/wXqA5M00K3qnKzKoEkIwj7bLBE8rh4AyBN5BdA6MDRak0BShyQ+GugGMD7tTsGfQzUmqFJGtBXYNLhF2Js55W2FiWzOMkmUep8YlSOLq0+t4H8E8AnwH4BoFUUVr/+FCvvbjKO2eP4M42bdFnfw3ABwDeo3HYr9Tc8k3ya7RjV5mzXvrkzEjEcIpeB5WaV9LneEjK8RmAfwD4EoMFK1Xnl2U1wWDJtC+pLZ9R2x5KE1GpmXVQzJtKEzykFa8E83B5Wo8rdc6lWbJBPsc1Uo5lAKu0CgdTyTXD5OLP/Q21ja+5tqHvZLBvebwFd4btB1KRbhUTt8qVoE2QtBWrh5++/yKZVWuhwZEBCgc416hNmTUFlapILXOnKvtfVoSSW4xanXJ/K3clZDhyIFlB9o5cB/puL9Y2f0r9IxnZ2Y8oVQ/2O4ZOnBjqfgtIhi0EmvwRX0WOoMLs8GlFELL/8QY1cEqZgkjTaikA02OvTcmsBWxS0QLG92L4mP9VuMOapQcNkwro5+uiL8LdX9CWW5cd1ydwRxtuwB0fuS9NjhjUI2N3S8Z5rlPbdytAKVkU/DIYfAemkpwFpQGSUd+j0oY9w2q6AXfQ7xLc2ard7c+Y4PAgkdvZt6jtuydnlZlZuQttmWZW2QriS+M8dAUHffW4icGTo1HCkQFJXvs1pRuqxVSvwsRi+/Yw9CWgzlIPjSto0/ugVTCXggSEG8WX8aehKzBYpB69mNUjwx8JQUUYkmkMJvcI1sSqvEGmHtGrSKULbimAZMQ/KpPEMdVjGy6qvESvRqnHEBXh/lhD/1CgFkgy51RZjnpSMnwyp9Nh6Ip/8Gnd7+CyjzRVPfJU5Ar1zSYqvKCkbU6V7YNwinttDro8cvEjXLCMt3UbpR4ZKsLbvpyuiFOk1t0nWVZJ6XdZkhIbw///FP00mZrMK44kf0sTYRM6zyHVsXBsop/wTp4k0GRmyVzFKGtuVXWaV5NzzubVFlwE+Su4Y+2aTAkNpuc99LNBbinqmxaeznYflpM+RFG0rJJsSqzDS2rQRPMqw8xiX4TzCWty1CudU0lD54LMUsLJ3Uw9rH8aD0hIK6RKhW1aHzVRQeS9D78EgT3WR40HRB7zXjH/o9AP4Qwujdzha6KJxSskV31qamBwlL6SfdT1+tAAacAE6JrvUeiLdJvcP4lNAnusjwwQe+wxQOyxxwCxp+qnZYDY4NuT3TeVnXkyQHROAG2HKLX1T2WnZg0QXYqh8Ri+iifnNqjWGiIGSEmQZF7kqiKdfkDzQvNtUAPEBl+FeaU1XVN0gGhLhKw9mbYW51xjuqZK51RSUUO0HekIoRyDBgXRmq6psiMwScl0azwUWGs6/QAddG2VwCo9RJmU3JDMY+UKQNGeM7juvtFYrqKWY/hlNlrrpZu8rPOaS1JX2Tey9LK2chWVz6lSAMm5dKMtjaVMp881uCebamYNqWWvqVxF7pwq67JbUlGDNtGvSqrFWfdrcJ+Azsq7VTvmM9QX2mrZS+f8Cc2p0hfcJLYGPYOjLmtwz9GuTaNURKjHPuoD7g9ttewrX3CrUpANhY66v2K+02AV0d4XtZnsZQOiOTuGv2qeplejVCRDPZ7qByWLRS1zqTRAAsnSZyoSRh/Ulg0zqYh8rVn6ilbPJGYVobYlAahHbfMoqZN8xSpyEv1t3yghEXDwtu5J5epRiyVSlYJoztLnq8gZAGfhIsi79yBigkT4HXzs/wi1+Yxi9ahlDpUKSEDZwmVk/RSACwDOwwXLZiP0R2R7F6itF6jt2tpbazb+pMIVQHO2cDY3+J7IeQAfAXiXJtALACZiUBFqAyvHArXxI2qzvBujqa21zZ+0xhVgjuzfnpLB8CeOVL/d08jtxdVOqDl8BRxDFwKF6lGbBVKlgoRQ0SnP9DgNF1WeClVJPDgOUptCMCVrrXhVuoKsf3yo115czasJOKtsxeLPMUE7OfMAzgF4Da48MuBKI2+1F1c7CCAjvOeQMxwL1KZz1MYZMQ7aqoHl1kysou+TihuaWVUW+kp7ye3PMwA+APA+gF/AHQEP4oJVxgWoY9SG96lNZyC2s6G3VF5tVXerPKXp1yW/A711yRmSabgt0PcA/B7AHwD8EsBxYZKojJOIOAebjMfps/+B2vIetW0aOpPDSd/jDmqq216Fky7NrG0yUZbo9aqYaD1lgySd9qPIrve+DHerbbu9uNrVYHIJ1WAVzNqtmifl0HpJTKqHnC9rqLiWfVrzivAzAC9Bb9odhmQ/nk40x6bLfTIBngDYoYWgclAEGPy59hEERzJ2q2aUmlXqLI7KAPFURNqUGp31PJ+kDeAVz66/DuAWOfEbVYOSA8YM3Db6SbgIub9bNaEcDt85H/BZq1x80pobzrsSh6ArJpIHSUvY85z04QaASwBuAridBwovEnsIBYaAcQJuG/cdcsRPoZ9CVHsCuDznfBM11ElMa+gAua/9Je2qvAz92Q1bos/YD2kTLKcJkCxQtmlguwQLxgXGA0ICO4F+fi8fjNP09RxBLe+Wa47jqHDOawEksJhIHiS+E+xPTgZliUB5SO3jK8d8TVQCM46C8c7UNL0O0N8+lQHGDClLijDKGKhxzutUkDz78qByMyvPL8kzb5Zo9WMT4Z5QlG0MJtPrFQDJGwSTAsp59DOyvE2AZIHRQlhpVVWFA1IlnXCWBnsf+kkCEAAkLRq0LFBepV069rX4mMQG3HmiUe5V+1kO2+jnFH4D/ZxeR2mBCRkMVc55bYAMiYmcFLZ9L6CBzQNlFm4Le4vMybcIDD50599r6OWolMxEz2lSOWUq+xbT4m+HCIY657xuBZGO2G2y2eVVz8kABzgLlCka3IO0EcHm1QaZRY9HVBAZpGQzi2Mycss25Az1/pyo1TmvFRChIk9ot+cmvU4EqiJ5oMidpin084TN0YTvjDD4/P+Y8pxtP+N6yHdVWD14PtTunNetILGqiA8KPFh4kCUw4+5iIRIoiubCbSg4q1db3EFcx/VV5AF9T9sp371QlUS8UmGKDXtNCuVIEF/h0cJ5UOf5tlThyhGTihSpC2BVrdSqR60K0kAVsScw9agdkBBWEHuaPfa1A2IqYuqhVT20KIipiKmH2jFXAYipiKmHRvXQpCCmIqYeKsdaDSCmIqYe2tRDm4KYiph6qBtjVYCMoCJdgyR4OLqhqIdGBclbYW7BHRXXVFfEnmczrXZoLG+FYCGoAyRDRW7AZQ65D+AnuBOw9oT5dGgM79OY3tCsHkD9Z7GKVOQR3LHnz9G/Mcf5nEK4Y23PoGm1BeB7AFdpTJcgcu1q/OAqs4jQShJkh9oz8oJ3lcZ2C0BXaxLwRHnHDpNkc9jDdMyDMpnVAuKVb5NOnTns4TvmA2OouYSEagURppY57HE65l3t9VXSADrYHHZzzE1BnsFhvwm9RXjsCdgxDwqQHKm+Ri8ztcwxN0CEw85JxW5mrUimIuaYN1ZBLDZijrkBsgedb5DUrh6dmBaxoAApiI2Yw67HtMo1g0NSjyAVpCA2UpTr1p5yAeFT2Pdi2UhJAx8M3kK8iH5cZIL+HVP2wVBMq8dwpR4u05gMbMWHph6h+iC+w75CA/IpvQ8rKWBPOXAUjkWIcAQLiICkcNUySCrxO+T2+0Uai29pbDqhwhE0IDHbvYE9WQFcLjcXvD8YNCDerpYFEOszrbKOAAUVEIxVQaSpZWe16jWt/IWpEzocUQBSIPVmall/GyAjntWqrRBkhOpRqNgxqEdUCjLCsXi7gbh3plVU0fJhTxrhIGZJ/2G4moBc+swCiM8OSKN2DWPyQfJMraf25U1Fnsu0ii5a3hhAMkytvMiuQfLsfkd00fJGASIgGbbamT/yfH5HVNHypvkgRfay+SN704/RRMsbpyCeP7Jj/khpfkcU0fJGAuKZWuaPlON3dGKGI3pAzB8xv8N8EPNHzO8wBTF/xPwOA8T8EfM7DJAA/JGm3h/hAGvj/Y7GAjKifd1poNPeE+rReL+j0YAU+CPLaGaWRpklZrnpfkfTFSTPH/kEwBc0QZrktEuzc5n64JMm+x3ySdHQZ/3jQ7324qqcGJxHK4Xb+uVt3wnEu/070kLRVDgaDUiOaZHCJZ07TO8MSYwFeoY55U01Nc3EyvFHRnFOe5HBMdJmRZPVo/GACEiGraSxQeLDkeeUd5sOhwEymtN+NzJzQ5qVd80pNx/keZx2floAjiP8pNhZO1Z/NafcAHnW1ZXhiGFnq0kqaSZWyU57oX0e2EQa2c8y9TBAxoUk9J2tkdtjcBgg40ASw86W7VgZIKVCMqrN3lMOh+1YmZNeDiRDdrYA4BUAs6IfW8rhsB0rA6SUyebvbOVB0lL6mSUctmNlgOy5imAIJNpiJMNiHQNwmHoYIGVDoi1GMrLfZHCYk16G0645RmKxDgNEHSRaYiQW6zBAVEGiKUZisQ4DRCUkGmIkFuswJ121415njMRiHQaI+mecGMleQlIEh8U6DBA1KoKKIRkLDlMPA6RJkBgcBohBYnAYIAbJeJAYHAaIQWJwGCAGyXiQGBwGiEGSA4nBYYAYJDmQGBwGiEGSAwkMDgPEIBkOicFhgBgkGZDM0L83DA4DxCDpP1xi4Sh9/R2ASwaHAdJkSPjuRgJgEv167QBwFcDfAPwLdhuw1sfug9QAiXDCH8Pd+Psa7v7GHXpdpu/do58xOGp6/g9eQPkxBqxc0wAAAABJRU5ErkJggg==";
let ku;
try {
  ku = "free";
} catch {
  ku = process.env.VITE_GEOMAN_VERSION || null;
}
const ot = "gm", se = `_${ot}`, ht = ku === "pro", Xf = {
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
}, Tm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
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
`, Xm = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M44.698 2.661a1.644 1.644 0 0 1 2.328 0l9.866 9.866a1.644 1.644 0 0 1 0 2.329L24.004 47.744a1.644 1.644 0 0 1-.552.362L7.008 54.683a1.644 1.644 0 0 1-2.138-2.138l6.578-16.444a1.644 1.644 0 0 1 .362-.552zm-3.089 7.742 7.542 7.541 4.252-4.252-7.541-7.541zm5.216 9.866-7.54-7.54-21.378 21.376v.964h1.644a1.644 1.644 0 0 1 1.645 1.644v1.645h1.644a1.644 1.644 0 0 1 1.645 1.644v1.644h.963zM14.724 37.29l-.35.348L9.35 50.204l12.566-5.025.349-.35a1.644 1.644 0 0 1-1.07-1.538v-1.645h-1.644a1.644 1.644 0 0 1-1.644-1.644v-1.644h-1.644a1.644 1.644 0 0 1-1.54-1.07"/>
    <path stroke="currentColor" stroke-width="5.107"
          d="M6.298 59.53c3.44-1.692 6.88-3.384 10.558-4.319s7.594-1.111 11.719-.298c4.125.814 8.459 2.617 13.483 2.655 5.023.038 10.737-1.689 16.45-3.415"/>
</svg>
`, Vm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
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
  freehand: Xm,
  custom_shape: Hm,
  drag: Pm,
  change: Tm,
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
  geofencing: Vm,
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
], Xo = () => [
  {
    type: "symbol",
    layout: {
      "icon-image": "default-marker",
      "icon-size": 0.18,
      "icon-allow-overlap": !0,
      "icon-anchor": "bottom"
    }
  }
], Vt = (t) => [
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
], Vo = (t) => [
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
], It = `__${ot}_`, mn = `${It}id`, zc = 6e4, K = {
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
    [K.main]: Vt(Ge[K.main]),
    [K.temporary]: Vt(Ge[K.temporary]),
    ...ht && { [K.standby]: Vt(Ge[K.standby]) }
  },
  ellipse: {
    [K.main]: Vt(Ge[K.main]),
    [K.temporary]: Vt(Ge[K.temporary]),
    ...ht && { [K.standby]: Vt(Ge[K.standby]) }
  },
  rectangle: {
    [K.main]: Vt(Ge[K.main]),
    [K.temporary]: Vt(Ge[K.temporary]),
    ...ht && { [K.standby]: Vt(Ge[K.standby]) }
  },
  circle: {
    [K.main]: Vt(Ge[K.main]),
    [K.temporary]: Vt(Ge[K.temporary]),
    ...ht && { [K.standby]: Vt(Ge[K.standby]) }
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
    [K.temporary]: Xo(),
    [K.main]: Xo(),
    ...ht && { [K.standby]: Xo() }
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
    [K.main]: Vo(Ge[K.main]),
    [K.temporary]: Vo(Ge[K.temporary]),
    ...ht && {
      [K.standby]: Vo(Ge[K.standby])
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
var Wf = typeof global == "object" && global && global.Object === Object && global, lv = typeof self == "object" && self && self.Object === Object && self, Mn = Wf || lv || Function("return this")(), rn = Mn.Symbol, jf = Object.prototype, cv = jf.hasOwnProperty, hv = jf.toString, fs = rn ? rn.toStringTag : void 0;
function fv(t) {
  var e = cv.call(t, fs), n = t[fs];
  try {
    t[fs] = void 0;
    var s = !0;
  } catch {
  }
  var u = hv.call(t);
  return s && (e ? t[fs] = n : delete t[fs]), u;
}
var gv = Object.prototype, dv = gv.toString;
function pv(t) {
  return dv.call(t);
}
var mv = "[object Null]", vv = "[object Undefined]", qc = rn ? rn.toStringTag : void 0;
function ri(t) {
  return t == null ? t === void 0 ? vv : mv : qc && qc in Object(t) ? fv(t) : pv(t);
}
function Jn(t) {
  return t != null && typeof t == "object";
}
var yv = "[object Symbol]";
function Fi(t) {
  return typeof t == "symbol" || Jn(t) && ri(t) == yv;
}
function Ni(t, e) {
  for (var n = -1, s = t == null ? 0 : t.length, u = Array(s); ++n < s; )
    u[n] = e(t[n], n, t);
  return u;
}
var Lt = Array.isArray, Yc = rn ? rn.prototype : void 0, Hc = Yc ? Yc.toString : void 0;
function Zf(t) {
  if (typeof t == "string")
    return t;
  if (Lt(t))
    return Ni(t, Zf) + "";
  if (Fi(t))
    return Hc ? Hc.call(t) : "";
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
function At(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Jc = NaN, kv = /^[-+]0x[0-9a-f]+$/i, Sv = /^0b[01]+$/i, Mv = /^0o[0-7]+$/i, Iv = parseInt;
function $c(t) {
  if (typeof t == "number")
    return t;
  if (Fi(t))
    return Jc;
  if (At(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = At(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = wv(t);
  var n = Sv.test(t);
  return n || Mv.test(t) ? Iv(t.slice(2), n ? 2 : 8) : kv.test(t) ? Jc : +t;
}
function po(t) {
  return t;
}
var bv = "[object AsyncFunction]", Lv = "[object Function]", Av = "[object GeneratorFunction]", Tv = "[object Proxy]";
function cl(t) {
  if (!At(t))
    return !1;
  var e = ri(t);
  return e == Lv || e == Av || e == bv || e == Tv;
}
var Zo = Mn["__core-js_shared__"], Xc = (function() {
  var t = /[^.]+$/.exec(Zo && Zo.keys && Zo.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function Cv(t) {
  return !!Xc && Xc in t;
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
  if (!At(t) || Cv(t))
    return !1;
  var e = cl(t) ? Uv : Rv;
  return e.test(ii(t));
}
function qv(t, e) {
  return t?.[e];
}
function si(t, e) {
  var n = qv(t, e);
  return zv(n) ? n : void 0;
}
var Su = si(Mn, "WeakMap"), Vc = Object.create, Yv = /* @__PURE__ */ (function() {
  function t() {
  }
  return function(e) {
    if (!At(e))
      return {};
    if (Vc)
      return Vc(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
})();
function Hv(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
function Jv() {
}
function $v(t, e) {
  var n = -1, s = t.length;
  for (e || (e = Array(s)); ++n < s; )
    e[n] = t[n];
  return e;
}
var Xv = 800, Vv = 16, Wv = Date.now;
function jv(t) {
  var e = 0, n = 0;
  return function() {
    var s = Wv(), u = Vv - (s - n);
    if (n = s, u > 0) {
      if (++e >= Xv)
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
  for (var n = -1, s = t == null ? 0 : t.length; ++n < s && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function ty(t, e, n, s) {
  for (var u = t.length, c = n + -1; ++c < u; )
    if (e(t[c], c, t))
      return c;
  return -1;
}
function ny(t) {
  return t !== t;
}
function ry(t, e, n) {
  for (var s = n - 1, u = t.length; ++s < u; )
    if (t[s] === e)
      return s;
  return -1;
}
function iy(t, e, n) {
  return e === e ? ry(t, e, n) : ty(t, ny, n);
}
function Kf(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && iy(t, e, 0) > -1;
}
var sy = 9007199254740991, ay = /^(?:0|[1-9]\d*)$/;
function mo(t, e) {
  var n = typeof t;
  return e = e ?? sy, !!e && (n == "number" || n != "symbol" && ay.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Xs(t, e, n) {
  e == "__proto__" && $a ? $a(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Vs(t, e) {
  return t === e || t !== t && e !== e;
}
var oy = Object.prototype, uy = oy.hasOwnProperty;
function hl(t, e, n) {
  var s = t[e];
  (!(uy.call(t, e) && Vs(s, n)) || n === void 0 && !(e in t)) && Xs(t, e, n);
}
function ly(t, e, n, s) {
  var u = !n;
  n || (n = {});
  for (var c = -1, f = e.length; ++c < f; ) {
    var h = e[c], p = void 0;
    p === void 0 && (p = t[h]), u ? Xs(n, h, p) : hl(n, h, p);
  }
  return n;
}
var Wc = Math.max;
function cy(t, e, n) {
  return e = Wc(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var s = arguments, u = -1, c = Wc(s.length - e, 0), f = Array(c); ++u < c; )
      f[u] = s[e + u];
    u = -1;
    for (var h = Array(e + 1); ++u < e; )
      h[u] = s[u];
    return h[e] = n(f), Hv(t, this, h);
  };
}
function fl(t, e) {
  return Qv(cy(t, e, po), t + "");
}
var hy = 9007199254740991;
function gl(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= hy;
}
function Vi(t) {
  return t != null && gl(t.length) && !cl(t);
}
function Mu(t, e, n) {
  if (!At(n))
    return !1;
  var s = typeof e;
  return (s == "number" ? Vi(n) && mo(e, n.length) : s == "string" && e in n) ? Vs(n[e], t) : !1;
}
function Qf(t) {
  return fl(function(e, n) {
    var s = -1, u = n.length, c = u > 1 ? n[u - 1] : void 0, f = u > 2 ? n[2] : void 0;
    for (c = t.length > 3 && typeof c == "function" ? (u--, c) : void 0, f && Mu(n[0], n[1], f) && (c = u < 3 ? void 0 : c, u = 1), e = Object(e); ++s < u; ) {
      var h = n[s];
      h && t(e, h, s, c);
    }
    return e;
  });
}
var fy = Object.prototype;
function dl(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || fy;
  return t === n;
}
function gy(t, e) {
  for (var n = -1, s = Array(t); ++n < t; )
    s[n] = e(n);
  return s;
}
var dy = "[object Arguments]";
function jc(t) {
  return Jn(t) && ri(t) == dy;
}
var eg = Object.prototype, py = eg.hasOwnProperty, my = eg.propertyIsEnumerable, Fs = jc(/* @__PURE__ */ (function() {
  return arguments;
})()) ? jc : function(t) {
  return Jn(t) && py.call(t, "callee") && !my.call(t, "callee");
};
function vy() {
  return !1;
}
var tg = typeof exports == "object" && exports && !exports.nodeType && exports, Zc = tg && typeof module == "object" && module && !module.nodeType && module, yy = Zc && Zc.exports === tg, Kc = yy ? Mn.Buffer : void 0, _y = Kc ? Kc.isBuffer : void 0, Gs = _y || vy, Ey = "[object Arguments]", xy = "[object Array]", wy = "[object Boolean]", ky = "[object Date]", Sy = "[object Error]", My = "[object Function]", Iy = "[object Map]", by = "[object Number]", Ly = "[object Object]", Ay = "[object RegExp]", Ty = "[object Set]", Cy = "[object String]", Ny = "[object WeakMap]", Py = "[object ArrayBuffer]", Oy = "[object DataView]", Ry = "[object Float32Array]", Dy = "[object Float64Array]", Fy = "[object Int8Array]", Gy = "[object Int16Array]", By = "[object Int32Array]", Uy = "[object Uint8Array]", zy = "[object Uint8ClampedArray]", qy = "[object Uint16Array]", Yy = "[object Uint32Array]", He = {};
He[Ry] = He[Dy] = He[Fy] = He[Gy] = He[By] = He[Uy] = He[zy] = He[qy] = He[Yy] = !0;
He[Ey] = He[xy] = He[Py] = He[wy] = He[Oy] = He[ky] = He[Sy] = He[My] = He[Iy] = He[by] = He[Ly] = He[Ay] = He[Ty] = He[Cy] = He[Ny] = !1;
function Hy(t) {
  return Jn(t) && gl(t.length) && !!He[ri(t)];
}
function vo(t) {
  return function(e) {
    return t(e);
  };
}
var ng = typeof exports == "object" && exports && !exports.nodeType && exports, Ts = ng && typeof module == "object" && module && !module.nodeType && module, Jy = Ts && Ts.exports === ng, Ko = Jy && Wf.process, Gi = (function() {
  try {
    var t = Ts && Ts.require && Ts.require("util").types;
    return t || Ko && Ko.binding && Ko.binding("util");
  } catch {
  }
})(), Qc = Gi && Gi.isTypedArray, pl = Qc ? vo(Qc) : Hy, $y = Object.prototype, Xy = $y.hasOwnProperty;
function rg(t, e) {
  var n = Lt(t), s = !n && Fs(t), u = !n && !s && Gs(t), c = !n && !s && !u && pl(t), f = n || s || u || c, h = f ? gy(t.length, String) : [], p = h.length;
  for (var d in t)
    (e || Xy.call(t, d)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    u && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    c && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    mo(d, p))) && h.push(d);
  return h;
}
function ig(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Vy = ig(Object.keys, Object), Wy = Object.prototype, jy = Wy.hasOwnProperty;
function Zy(t) {
  if (!dl(t))
    return Vy(t);
  var e = [];
  for (var n in Object(t))
    jy.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function yo(t) {
  return Vi(t) ? rg(t) : Zy(t);
}
function Ky(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Qy = Object.prototype, e0 = Qy.hasOwnProperty;
function t0(t) {
  if (!At(t))
    return Ky(t);
  var e = dl(t), n = [];
  for (var s in t)
    s == "constructor" && (e || !e0.call(t, s)) || n.push(s);
  return n;
}
function sg(t) {
  return Vi(t) ? rg(t, !0) : t0(t);
}
var n0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r0 = /^\w*$/;
function ml(t, e) {
  if (Lt(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Fi(t) ? !0 : r0.test(t) || !n0.test(t) || e != null && t in Object(e);
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
    var n = e[t];
    return n === a0 ? void 0 : n;
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
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Bs && e === void 0 ? g0 : e, this;
}
function jr(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
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
  for (var n = t.length; n--; )
    if (Vs(t[n][0], e))
      return n;
  return -1;
}
var m0 = Array.prototype, v0 = m0.splice;
function y0(t) {
  var e = this.__data__, n = _o(e, t);
  if (n < 0)
    return !1;
  var s = e.length - 1;
  return n == s ? e.pop() : v0.call(e, n, 1), --this.size, !0;
}
function _0(t) {
  var e = this.__data__, n = _o(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function E0(t) {
  return _o(this.__data__, t) > -1;
}
function x0(t, e) {
  var n = this.__data__, s = _o(n, t);
  return s < 0 ? (++this.size, n.push([t, e])) : n[s][1] = e, this;
}
function lr(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
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
  var n = t.__data__;
  return k0(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
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
  var n = Eo(this, t), s = n.size;
  return n.set(t, e), this.size += n.size == s ? 0 : 1, this;
}
function cr(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
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
  var n = function() {
    var s = arguments, u = e ? e.apply(this, s) : s[0], c = n.cache;
    if (c.has(u))
      return c.get(u);
    var f = t.apply(this, s);
    return n.cache = c.set(u, f) || c, f;
  };
  return n.cache = new (vl.Cache || cr)(), n;
}
vl.Cache = cr;
var A0 = 500;
function T0(t) {
  var e = vl(t, function(s) {
    return n.size === A0 && n.clear(), s;
  }), n = e.cache;
  return e;
}
var C0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, N0 = /\\(\\)?/g, P0 = T0(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(C0, function(n, s, u, c) {
    e.push(u ? c.replace(N0, "$1") : s || n);
  }), e;
});
function O0(t) {
  return t == null ? "" : Zf(t);
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
  for (var n = 0, s = e.length; t != null && n < s; )
    t = t[Ws(e[n++])];
  return n && n == s ? t : void 0;
}
function Bi(t, e, n) {
  var s = t == null ? void 0 : _l(t, e);
  return s === void 0 ? n : s;
}
function ag(t, e) {
  for (var n = -1, s = e.length, u = t.length; ++n < s; )
    t[u + n] = e[n];
  return t;
}
var eh = rn ? rn.isConcatSpreadable : void 0;
function R0(t) {
  return Lt(t) || Fs(t) || !!(eh && t && t[eh]);
}
function D0(t, e, n, s, u) {
  var c = -1, f = t.length;
  for (n || (n = R0), u || (u = []); ++c < f; ) {
    var h = t[c];
    n(h) ? ag(u, h) : u[u.length] = h;
  }
  return u;
}
var og = ig(Object.getPrototypeOf, Object), F0 = "[object Object]", G0 = Function.prototype, B0 = Object.prototype, ug = G0.toString, U0 = B0.hasOwnProperty, z0 = ug.call(Object);
function lg(t) {
  if (!Jn(t) || ri(t) != F0)
    return !1;
  var e = og(t);
  if (e === null)
    return !0;
  var n = U0.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && ug.call(n) == z0;
}
function q0() {
  this.__data__ = new lr(), this.size = 0;
}
function Y0(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function H0(t) {
  return this.__data__.get(t);
}
function J0(t) {
  return this.__data__.has(t);
}
var $0 = 200;
function X0(t, e) {
  var n = this.__data__;
  if (n instanceof lr) {
    var s = n.__data__;
    if (!Us || s.length < $0 - 1)
      return s.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new cr(s);
  }
  return n.set(t, e), this.size = n.size, this;
}
function wn(t) {
  var e = this.__data__ = new lr(t);
  this.size = e.size;
}
wn.prototype.clear = q0;
wn.prototype.delete = Y0;
wn.prototype.get = H0;
wn.prototype.has = J0;
wn.prototype.set = X0;
var cg = typeof exports == "object" && exports && !exports.nodeType && exports, th = cg && typeof module == "object" && module && !module.nodeType && module, V0 = th && th.exports === cg, nh = V0 ? Mn.Buffer : void 0, rh = nh ? nh.allocUnsafe : void 0;
function hg(t, e) {
  if (e)
    return t.slice();
  var n = t.length, s = rh ? rh(n) : new t.constructor(n);
  return t.copy(s), s;
}
function W0(t, e) {
  for (var n = -1, s = t == null ? 0 : t.length, u = 0, c = []; ++n < s; ) {
    var f = t[n];
    e(f, n, t) && (c[u++] = f);
  }
  return c;
}
function j0() {
  return [];
}
var Z0 = Object.prototype, K0 = Z0.propertyIsEnumerable, ih = Object.getOwnPropertySymbols, Q0 = ih ? function(t) {
  return t == null ? [] : (t = Object(t), W0(ih(t), function(e) {
    return K0.call(t, e);
  }));
} : j0;
function e_(t, e, n) {
  var s = e(t);
  return Lt(t) ? s : ag(s, n(t));
}
function Iu(t) {
  return e_(t, yo, Q0);
}
var bu = si(Mn, "DataView"), Lu = si(Mn, "Promise"), Pi = si(Mn, "Set"), sh = "[object Map]", t_ = "[object Object]", ah = "[object Promise]", oh = "[object Set]", uh = "[object WeakMap]", lh = "[object DataView]", n_ = ii(bu), r_ = ii(Us), i_ = ii(Lu), s_ = ii(Pi), a_ = ii(Su), pn = ri;
(bu && pn(new bu(new ArrayBuffer(1))) != lh || Us && pn(new Us()) != sh || Lu && pn(Lu.resolve()) != ah || Pi && pn(new Pi()) != oh || Su && pn(new Su()) != uh) && (pn = function(t) {
  var e = ri(t), n = e == t_ ? t.constructor : void 0, s = n ? ii(n) : "";
  if (s)
    switch (s) {
      case n_:
        return lh;
      case r_:
        return sh;
      case i_:
        return ah;
      case s_:
        return oh;
      case a_:
        return uh;
    }
  return e;
});
var o_ = Object.prototype, u_ = o_.hasOwnProperty;
function l_(t) {
  var e = t.length, n = new t.constructor(e);
  return e && typeof t[0] == "string" && u_.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
var Xa = Mn.Uint8Array;
function El(t) {
  var e = new t.constructor(t.byteLength);
  return new Xa(e).set(new Xa(t)), e;
}
function c_(t, e) {
  var n = El(t.buffer);
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var h_ = /\w*$/;
function f_(t) {
  var e = new t.constructor(t.source, h_.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var ch = rn ? rn.prototype : void 0, hh = ch ? ch.valueOf : void 0;
function g_(t) {
  return hh ? Object(hh.call(t)) : {};
}
function fg(t, e) {
  var n = e ? El(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var d_ = "[object Boolean]", p_ = "[object Date]", m_ = "[object Map]", v_ = "[object Number]", y_ = "[object RegExp]", __ = "[object Set]", E_ = "[object String]", x_ = "[object Symbol]", w_ = "[object ArrayBuffer]", k_ = "[object DataView]", S_ = "[object Float32Array]", M_ = "[object Float64Array]", I_ = "[object Int8Array]", b_ = "[object Int16Array]", L_ = "[object Int32Array]", A_ = "[object Uint8Array]", T_ = "[object Uint8ClampedArray]", C_ = "[object Uint16Array]", N_ = "[object Uint32Array]";
function P_(t, e, n) {
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
    case A_:
    case T_:
    case C_:
    case N_:
      return fg(t, n);
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
function gg(t) {
  return typeof t.constructor == "function" && !dl(t) ? Yv(og(t)) : {};
}
var O_ = "[object Map]";
function R_(t) {
  return Jn(t) && pn(t) == O_;
}
var fh = Gi && Gi.isMap, D_ = fh ? vo(fh) : R_, F_ = "[object Set]";
function G_(t) {
  return Jn(t) && pn(t) == F_;
}
var gh = Gi && Gi.isSet, B_ = gh ? vo(gh) : G_, U_ = 1, dg = "[object Arguments]", z_ = "[object Array]", q_ = "[object Boolean]", Y_ = "[object Date]", H_ = "[object Error]", pg = "[object Function]", J_ = "[object GeneratorFunction]", $_ = "[object Map]", X_ = "[object Number]", mg = "[object Object]", V_ = "[object RegExp]", W_ = "[object Set]", j_ = "[object String]", Z_ = "[object Symbol]", K_ = "[object WeakMap]", Q_ = "[object ArrayBuffer]", e1 = "[object DataView]", t1 = "[object Float32Array]", n1 = "[object Float64Array]", r1 = "[object Int8Array]", i1 = "[object Int16Array]", s1 = "[object Int32Array]", a1 = "[object Uint8Array]", o1 = "[object Uint8ClampedArray]", u1 = "[object Uint16Array]", l1 = "[object Uint32Array]", qe = {};
qe[dg] = qe[z_] = qe[Q_] = qe[e1] = qe[q_] = qe[Y_] = qe[t1] = qe[n1] = qe[r1] = qe[i1] = qe[s1] = qe[$_] = qe[X_] = qe[mg] = qe[V_] = qe[W_] = qe[j_] = qe[Z_] = qe[a1] = qe[o1] = qe[u1] = qe[l1] = !0;
qe[H_] = qe[pg] = qe[K_] = !1;
function Oa(t, e, n, s, u, c) {
  var f, h = e & U_;
  if (f !== void 0)
    return f;
  if (!At(t))
    return t;
  var p = Lt(t);
  if (p)
    f = l_(t);
  else {
    var d = pn(t), v = d == pg || d == J_;
    if (Gs(t))
      return hg(t, h);
    if (d == mg || d == dg || v && !u)
      f = v ? {} : gg(t);
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
    f.add(Oa(S, e, n, S, t, c));
  }) : D_(t) && t.forEach(function(S, C) {
    f.set(C, Oa(S, e, n, C, t, c));
  });
  var x = Iu, M = p ? void 0 : x(t);
  return ey(M || t, function(S, C) {
    M && (C = S, S = t[C]), hl(f, C, Oa(S, e, n, C, t, c));
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
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new cr(); ++e < n; )
    this.add(t[e]);
}
Ui.prototype.add = Ui.prototype.push = g1;
Ui.prototype.has = d1;
function p1(t, e) {
  for (var n = -1, s = t == null ? 0 : t.length; ++n < s; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Va(t, e) {
  return t.has(e);
}
var m1 = 1, v1 = 2;
function vg(t, e, n, s, u, c) {
  var f = n & m1, h = t.length, p = e.length;
  if (h != p && !(f && p > h))
    return !1;
  var d = c.get(t), v = c.get(e);
  if (d && v)
    return d == e && v == t;
  var _ = -1, x = !0, M = n & v1 ? new Ui() : void 0;
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
        if (!Va(M, I) && (S === O || u(S, O, n, s, c)))
          return M.push(I);
      })) {
        x = !1;
        break;
      }
    } else if (!(S === C || u(S, C, n, s, c))) {
      x = !1;
      break;
    }
  }
  return c.delete(t), c.delete(e), x;
}
function y1(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(s, u) {
    n[++e] = [u, s];
  }), n;
}
function xl(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(s) {
    n[++e] = s;
  }), n;
}
var _1 = 1, E1 = 2, x1 = "[object Boolean]", w1 = "[object Date]", k1 = "[object Error]", S1 = "[object Map]", M1 = "[object Number]", I1 = "[object RegExp]", b1 = "[object Set]", L1 = "[object String]", A1 = "[object Symbol]", T1 = "[object ArrayBuffer]", C1 = "[object DataView]", dh = rn ? rn.prototype : void 0, Qo = dh ? dh.valueOf : void 0;
function N1(t, e, n, s, u, c, f) {
  switch (n) {
    case C1:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case T1:
      return !(t.byteLength != e.byteLength || !c(new Xa(t), new Xa(e)));
    case x1:
    case w1:
    case M1:
      return Vs(+t, +e);
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
      var v = vg(h(t), h(e), s, u, c, f);
      return f.delete(t), v;
    case A1:
      if (Qo)
        return Qo.call(t) == Qo.call(e);
  }
  return !1;
}
var P1 = 1, O1 = Object.prototype, R1 = O1.hasOwnProperty;
function D1(t, e, n, s, u, c) {
  var f = n & P1, h = Iu(t), p = h.length, d = Iu(e), v = d.length;
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
    if (!(H === void 0 ? O === I || u(O, I, n, s, c) : H)) {
      C = !1;
      break;
    }
    F || (F = x == "constructor");
  }
  if (C && !F) {
    var V = t.constructor, J = e.constructor;
    V != J && "constructor" in t && "constructor" in e && !(typeof V == "function" && V instanceof V && typeof J == "function" && J instanceof J) && (C = !1);
  }
  return c.delete(t), c.delete(e), C;
}
var F1 = 1, ph = "[object Arguments]", mh = "[object Array]", pa = "[object Object]", G1 = Object.prototype, vh = G1.hasOwnProperty;
function B1(t, e, n, s, u, c) {
  var f = Lt(t), h = Lt(e), p = f ? mh : pn(t), d = h ? mh : pn(e);
  p = p == ph ? pa : p, d = d == ph ? pa : d;
  var v = p == pa, _ = d == pa, x = p == d;
  if (x && Gs(t)) {
    if (!Gs(e))
      return !1;
    f = !0, v = !1;
  }
  if (x && !v)
    return c || (c = new wn()), f || pl(t) ? vg(t, e, n, s, u, c) : N1(t, e, p, n, s, u, c);
  if (!(n & F1)) {
    var M = v && vh.call(t, "__wrapped__"), S = _ && vh.call(e, "__wrapped__");
    if (M || S) {
      var C = M ? t.value() : t, F = S ? e.value() : e;
      return c || (c = new wn()), u(C, F, n, s, c);
    }
  }
  return x ? (c || (c = new wn()), D1(t, e, n, s, u, c)) : !1;
}
function xo(t, e, n, s, u) {
  return t === e ? !0 : t == null || e == null || !Jn(t) && !Jn(e) ? t !== t && e !== e : B1(t, e, n, s, xo, u);
}
var U1 = 1, z1 = 2;
function q1(t, e, n, s) {
  var u = n.length, c = u;
  if (t == null)
    return !c;
  for (t = Object(t); u--; ) {
    var f = n[u];
    if (f[2] ? f[1] !== t[f[0]] : !(f[0] in t))
      return !1;
  }
  for (; ++u < c; ) {
    f = n[u];
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
function yg(t) {
  return t === t && !At(t);
}
function Y1(t) {
  for (var e = yo(t), n = e.length; n--; ) {
    var s = e[n], u = t[s];
    e[n] = [s, u, yg(u)];
  }
  return e;
}
function _g(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function H1(t) {
  var e = Y1(t);
  return e.length == 1 && e[0][2] ? _g(e[0][0], e[0][1]) : function(n) {
    return n === t || q1(n, t, e);
  };
}
function J1(t, e) {
  return t != null && e in Object(t);
}
function $1(t, e, n) {
  e = yl(e, t);
  for (var s = -1, u = e.length, c = !1; ++s < u; ) {
    var f = Ws(e[s]);
    if (!(c = t != null && n(t, f)))
      break;
    t = t[f];
  }
  return c || ++s != u ? c : (u = t == null ? 0 : t.length, !!u && gl(u) && mo(f, u) && (Lt(t) || Fs(t)));
}
function X1(t, e) {
  return t != null && $1(t, e, J1);
}
var V1 = 1, W1 = 2;
function j1(t, e) {
  return ml(t) && yg(e) ? _g(Ws(t), e) : function(n) {
    var s = Bi(n, t);
    return s === void 0 && s === e ? X1(n, t) : xo(e, s, V1 | W1);
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
function Eg(t) {
  return typeof t == "function" ? t : t == null ? po : typeof t == "object" ? Lt(t) ? j1(t[0], t[1]) : H1(t) : Q1(t);
}
function eE(t, e, n, s) {
  for (var u = -1, c = t == null ? 0 : t.length; ++u < c; ) {
    var f = t[u];
    e(s, f, n(f), t);
  }
  return s;
}
function tE(t) {
  return function(e, n, s) {
    for (var u = -1, c = Object(e), f = s(e), h = f.length; h--; ) {
      var p = f[++u];
      if (n(c[p], p, c) === !1)
        break;
    }
    return e;
  };
}
var xg = tE();
function nE(t, e) {
  return t && xg(t, e, yo);
}
function rE(t, e) {
  return function(n, s) {
    if (n == null)
      return n;
    if (!Vi(n))
      return t(n, s);
    for (var u = n.length, c = -1, f = Object(n); ++c < u && s(f[c], c, f) !== !1; )
      ;
    return n;
  };
}
var wg = rE(nE);
function iE(t, e, n, s) {
  return wg(t, function(u, c, f) {
    e(s, u, n(u), f);
  }), s;
}
function kg(t, e) {
  return function(n, s) {
    var u = Lt(n) ? eE : iE, c = e ? e() : {};
    return u(n, t, Eg(s), c);
  };
}
var sE = Object.prototype, aE = sE.hasOwnProperty, oE = kg(function(t, e, n) {
  aE.call(t, n) ? ++t[n] : Xs(t, n, 1);
}), eu = function() {
  return Mn.Date.now();
}, uE = "Expected a function", lE = Math.max, cE = Math.min;
function wl(t, e, n) {
  var s, u, c, f, h, p, d = 0, v = !1, _ = !1, x = !0;
  if (typeof t != "function")
    throw new TypeError(uE);
  e = $c(e) || 0, At(n) && (v = !!n.leading, _ = "maxWait" in n, c = _ ? lE($c(n.maxWait) || 0, e) : c, x = "trailing" in n ? !!n.trailing : x);
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
  function V() {
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
  return J.cancel = H, J.flush = V, J;
}
function Au(t, e, n) {
  (n !== void 0 && !Vs(t[e], n) || n === void 0 && !(e in t)) && Xs(t, e, n);
}
function Sg(t) {
  return Jn(t) && Vi(t);
}
function Tu(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
function hE(t) {
  return ly(t, sg(t));
}
function fE(t, e, n, s, u, c, f) {
  var h = Tu(t, n), p = Tu(e, n), d = f.get(p);
  if (d) {
    Au(t, n, d);
    return;
  }
  var v = c ? c(h, p, n + "", t, e, f) : void 0, _ = v === void 0;
  if (_) {
    var x = Lt(p), M = !x && Gs(p), S = !x && !M && pl(p);
    v = p, x || M || S ? Lt(h) ? v = h : Sg(h) ? v = $v(h) : M ? (_ = !1, v = hg(p, !0)) : S ? (_ = !1, v = fg(p, !0)) : v = [] : lg(p) || Fs(p) ? (v = h, Fs(h) ? v = hE(h) : (!At(h) || cl(h)) && (v = gg(p))) : _ = !1;
  }
  _ && (f.set(p, v), u(v, p, s, c, f), f.delete(p)), Au(t, n, v);
}
function kl(t, e, n, s, u) {
  t !== e && xg(e, function(c, f) {
    if (u || (u = new wn()), At(c))
      fE(t, e, f, n, kl, s, u);
    else {
      var h = s ? s(Tu(t, f), c, f + "", t, e, u) : void 0;
      h === void 0 && (h = c), Au(t, f, h);
    }
  }, sg);
}
var gE = Qf(function(t, e, n, s) {
  kl(t, e, n, s);
});
function dE(t, e, n) {
  for (var s = -1, u = t == null ? 0 : t.length; ++s < u; )
    if (n(e, t[s]))
      return !0;
  return !1;
}
function pE(t, e) {
  var n = -1, s = Vi(t) ? Array(t.length) : [];
  return wg(t, function(u, c, f) {
    s[++n] = e(u, c, f);
  }), s;
}
function mE(t, e) {
  return Ni(e, function(n) {
    return t[n];
  });
}
function vE(t) {
  return t == null ? [] : mE(t, yo(t));
}
var yE = Math.min;
function _E(t, e, n) {
  for (var s = Kf, u = t[0].length, c = t.length, f = c, h = Array(c), p = 1 / 0, d = []; f--; ) {
    var v = t[f];
    p = yE(v.length, p), h[f] = u >= 120 && v.length >= 120 ? new Ui(f && v) : void 0;
  }
  v = t[0];
  var _ = -1, x = h[0];
  e:
    for (; ++_ < u && d.length < p; ) {
      var M = v[_], S = M;
      if (M = M !== 0 ? M : 0, !(x ? Va(x, S) : s(d, S))) {
        for (f = c; --f; ) {
          var C = h[f];
          if (!(C ? Va(C, S) : s(t[f], S)))
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
var wE = kg(function(t, e, n) {
  Xs(t, n, e);
}), kE = Qf(function(t, e, n) {
  kl(t, e, n);
});
function SE(t, e, n, s) {
  if (!At(t))
    return t;
  e = yl(e, t);
  for (var u = -1, c = e.length, f = c - 1, h = t; h != null && ++u < c; ) {
    var p = Ws(e[u]), d = n;
    if (p === "__proto__" || p === "constructor" || p === "prototype")
      return t;
    if (u != f) {
      var v = h[p];
      d = void 0, d === void 0 && (d = At(v) ? v : mo(e[u + 1]) ? [] : {});
    }
    hl(h, p, d), h = h[p];
  }
  return t;
}
function ME(t, e) {
  var n = t.length;
  for (t.sort(e); n--; )
    t[n] = t[n].value;
  return t;
}
function IE(t, e) {
  if (t !== e) {
    var n = t !== void 0, s = t === null, u = t === t, c = Fi(t), f = e !== void 0, h = e === null, p = e === e, d = Fi(e);
    if (!h && !d && !c && t > e || c && f && p && !h && !d || s && f && p || !n && p || !u)
      return 1;
    if (!s && !c && !d && t < e || d && n && u && !s && !c || h && n && u || !f && u || !p)
      return -1;
  }
  return 0;
}
function bE(t, e, n) {
  for (var s = -1, u = t.criteria, c = e.criteria, f = u.length, h = n.length; ++s < f; ) {
    var p = IE(u[s], c[s]);
    if (p) {
      if (s >= h)
        return p;
      var d = n[s];
      return p * (d == "desc" ? -1 : 1);
    }
  }
  return t.index - e.index;
}
function LE(t, e, n) {
  e.length ? e = Ni(e, function(c) {
    return Lt(c) ? function(f) {
      return _l(f, c.length === 1 ? c[0] : c);
    } : c;
  }) : e = [po];
  var s = -1;
  e = Ni(e, vo(Eg));
  var u = pE(t, function(c, f, h) {
    var p = Ni(e, function(d) {
      return d(c);
    });
    return { criteria: p, index: ++s, value: c };
  });
  return ME(u, function(c, f) {
    return bE(c, f, n);
  });
}
function AE(t, e, n) {
  return t == null ? t : SE(t, e, n);
}
var yh = fl(function(t, e) {
  if (t == null)
    return [];
  var n = e.length;
  return n > 1 && Mu(t, e[0], e[1]) ? e = [] : n > 2 && Mu(e[0], e[1], e[2]) && (e = [e[0]]), LE(t, D0(e), []);
}), TE = "Expected a function";
function Mg(t, e, n) {
  var s = !0, u = !0;
  if (typeof t != "function")
    throw new TypeError(TE);
  return At(n) && (s = "leading" in n ? !!n.leading : s, u = "trailing" in n ? !!n.trailing : u), wl(t, e, {
    leading: s,
    maxWait: e,
    trailing: u
  });
}
var CE = 1 / 0, NE = Pi && 1 / xl(new Pi([, -0]))[1] == CE ? function(t) {
  return new Pi(t);
} : Jv, PE = 200;
function OE(t, e, n) {
  var s = -1, u = Kf, c = t.length, f = !0, h = [], p = h;
  if (n)
    f = !1, u = dE;
  else if (c >= PE) {
    var d = NE(t);
    if (d)
      return xl(d);
    f = !1, u = Va, p = new Ui();
  } else
    p = h;
  e:
    for (; ++s < c; ) {
      var v = t[s], _ = v;
      if (v = n || v !== 0 ? v : 0, f && _ === _) {
        for (var x = p.length; x--; )
          if (p[x] === _)
            continue e;
        h.push(v);
      } else u(p, _, n) || (p !== h && p.push(_), h.push(v));
    }
  return h;
}
function _h(t, e) {
  return e = typeof e == "function" ? e : void 0, t && t.length ? OE(t, void 0, e) : [];
}
function Ig(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ra = { exports: {} }, RE = Ra.exports, Eh;
function DE() {
  return Eh || (Eh = 1, (function(t) {
    (function(e, n) {
      t.exports ? t.exports = n() : e.log = n();
    })(RE, function() {
      var e = function() {
      }, n = "undefined", s = typeof window !== n && typeof window.navigator !== n && /Trident\/|MSIE /.test(window.navigator.userAgent), u = [
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
        return C === "debug" && (C = "log"), typeof console === n ? !1 : C === "trace" && s ? p : console[C] !== void 0 ? h(console, C) : console.log !== void 0 ? h(console, "log") : e;
      }
      function v() {
        for (var C = this.getLevel(), F = 0; F < u.length; F++) {
          var O = u[F];
          this[O] = F < C ? e : this.methodFactory(O, C, this.name);
        }
        if (this.log = this.debug, typeof console === n && C < this.levels.SILENT)
          return "No console available for logging";
      }
      function _(C) {
        return function() {
          typeof console !== n && (v.call(this), this[C].apply(this, arguments));
        };
      }
      function x(C, F, O) {
        return d(C) || _.apply(this, arguments);
      }
      function M(C, F) {
        var O = this, I, H, V, J = "loglevel";
        typeof C == "string" ? J += ":" + C : typeof C == "symbol" && (J = void 0);
        function U(A) {
          var T = (u[A] || "silent").toUpperCase();
          if (!(typeof window === n || !J)) {
            try {
              window.localStorage[J] = T;
              return;
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(J) + "=" + T + ";";
            } catch {
            }
          }
        }
        function W() {
          var A;
          if (!(typeof window === n || !J)) {
            try {
              A = window.localStorage[J];
            } catch {
            }
            if (typeof A === n)
              try {
                var T = window.document.cookie, G = encodeURIComponent(J), R = T.indexOf(G + "=");
                R !== -1 && (A = /^([^;]+)/.exec(
                  T.slice(R + G.length + 1)
                )[1]);
              } catch {
              }
            return O.levels[A] === void 0 && (A = void 0), A;
          }
        }
        function E() {
          if (!(typeof window === n || !J)) {
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
        function w(A) {
          var T = A;
          if (typeof T == "string" && O.levels[T.toUpperCase()] !== void 0 && (T = O.levels[T.toUpperCase()]), typeof T == "number" && T >= 0 && T <= O.levels.SILENT)
            return T;
          throw new TypeError("log.setLevel() called with invalid level: " + A);
        }
        O.name = C, O.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5
        }, O.methodFactory = F || x, O.getLevel = function() {
          return V ?? H ?? I;
        }, O.setLevel = function(A, T) {
          return V = w(A), T !== !1 && U(V), v.call(O);
        }, O.setDefaultLevel = function(A) {
          H = w(A), W() || O.setLevel(A, !1);
        }, O.resetLevel = function() {
          V = null, E(), v.call(O);
        }, O.enableAll = function(A) {
          O.setLevel(O.levels.TRACE, A);
        }, O.disableAll = function(A) {
          O.setLevel(O.levels.SILENT, A);
        }, O.rebuild = function() {
          if (f !== O && (I = w(f.getLevel())), v.call(O), f === O)
            for (var A in c)
              c[A].rebuild();
        }, I = w(
          f ? f.getLevel() : "WARN"
        );
        var b = W();
        b != null && (V = w(b)), v.call(O);
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
      var S = typeof window !== n ? window.log : void 0;
      return f.noConflict = function() {
        return typeof window !== n && window.log === f && (window.log = S), f;
      }, f.getLoggers = function() {
        return c;
      }, f.default = f, f;
    });
  })(Ra)), Ra.exports;
}
var FE = DE();
const te = /* @__PURE__ */ Ig(FE), GE = (t, e) => {
  let n = null;
  try {
    t.forEach((s) => {
      if (e(s))
        throw n = s, new Error("found");
    });
  } catch {
  }
  return n;
};
function Cu(t, e, n = []) {
  e(t, n), Array.isArray(t) ? t.forEach((s, u) => Cu(s, e, [...n, u])) : lg(t) ? Object.entries(t).forEach(
    ([s, u]) => Cu(u, e, [...n, s])
  ) : t !== null && typeof t == "object" && te.warn(`forEachDeep: unknown collection type (${t}), path "${n.join(".")}"`);
}
const BE = (t) => {
  const e = ["shape_markers"], n = t.settings.controlsUiEnabledByDefault;
  Cu(t, (s, u) => {
    const c = u.at(2);
    if (u.length === 4 && u.at(-1) === "uiEnabled") {
      if (e.includes(c))
        return;
      AE(t, u, n);
    }
  });
}, Nu = () => sn(uv), bg = !1;
var Sl = Array.isArray, UE = Array.prototype.indexOf, Ml = Array.from, Lg = Object.defineProperty, Cs = Object.getOwnPropertyDescriptor, zE = Object.getOwnPropertyDescriptors, qE = Object.prototype, YE = Array.prototype, Ag = Object.getPrototypeOf, xh = Object.isExtensible;
function HE(t) {
  return typeof t == "function";
}
const vn = () => {
};
function JE(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Tg() {
  var t, e, n = new Promise((s, u) => {
    t = s, e = u;
  });
  return { promise: n, resolve: t, reject: e };
}
function Wa(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const s of t)
    if (n.push(s), n.length === e) break;
  return n;
}
const _t = 2, Il = 4, bl = 8, Wn = 16, hr = 32, ai = 64, wo = 128, mt = 1024, Dt = 2048, fr = 4096, Yt = 8192, Ir = 16384, ko = 32768, Zr = 65536, wh = 1 << 17, $E = 1 << 18, ji = 1 << 19, XE = 1 << 20, nn = 256, ja = 512, Za = 32768, Pu = 1 << 21, Ll = 1 << 22, Xr = 1 << 23, Ns = Symbol("$state"), VE = Symbol(""), Ai = new class extends Error {
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
function Zi(t, e = !1, n) {
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
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var s of n)
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
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Ti = [];
function px() {
  var t = Ti;
  Ti = [], JE(t);
}
function js(t) {
  if (Ti.length === 0) {
    var e = Ti;
    queueMicrotask(() => {
      e === Ti && px();
    });
  }
  Ti.push(t);
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
  const e = Ag(t);
  if (e !== qE && e !== YE)
    return t;
  var n = /* @__PURE__ */ new Map(), s = Sl(t), u = /* @__PURE__ */ gn(0), c = Vr, f = (h) => {
    if (Vr === c)
      return h();
    var p = Ie, d = Vr;
    Rt(null), Ah(c);
    var v = h();
    return Rt(p), Ah(d), v;
  };
  return s && n.set("length", /* @__PURE__ */ gn(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(h, p, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && ex();
        var v = n.get(p);
        return v === void 0 ? v = f(() => {
          var _ = /* @__PURE__ */ gn(d.value);
          return n.set(p, _), _;
        }) : pt(v, d.value, !0), !0;
      },
      deleteProperty(h, p) {
        var d = n.get(p);
        if (d === void 0) {
          if (p in h) {
            const v = f(() => /* @__PURE__ */ gn(dt));
            n.set(p, v), Ps(u);
          }
        } else
          pt(d, dt), Ps(u);
        return !0;
      },
      get(h, p, d) {
        if (p === Ns)
          return t;
        var v = n.get(p), _ = p in h;
        if (v === void 0 && (!_ || Cs(h, p)?.writable) && (v = f(() => {
          var M = xs(_ ? h[p] : dt), S = /* @__PURE__ */ gn(M);
          return S;
        }), n.set(p, v)), v !== void 0) {
          var x = we(v);
          return x === dt ? void 0 : x;
        }
        return Reflect.get(h, p, d);
      },
      getOwnPropertyDescriptor(h, p) {
        var d = Reflect.getOwnPropertyDescriptor(h, p);
        if (d && "value" in d) {
          var v = n.get(p);
          v && (d.value = we(v));
        } else if (d === void 0) {
          var _ = n.get(p), x = _?.v;
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
        var d = n.get(p), v = d !== void 0 && d.v !== dt || Reflect.has(h, p);
        if (d !== void 0 || be !== null && (!v || Cs(h, p)?.writable)) {
          d === void 0 && (d = f(() => {
            var x = v ? xs(h[p]) : dt, M = /* @__PURE__ */ gn(x);
            return M;
          }), n.set(p, d));
          var _ = we(d);
          if (_ === dt)
            return !1;
        }
        return v;
      },
      set(h, p, d, v) {
        var _ = n.get(p), x = p in h;
        if (s && p === "length")
          for (var M = d; M < /** @type {Source<number>} */
          _.v; M += 1) {
            var S = n.get(M + "");
            S !== void 0 ? pt(S, dt) : M in h && (S = f(() => /* @__PURE__ */ gn(dt)), n.set(M + "", S));
          }
        if (_ === void 0)
          (!x || Cs(h, p)?.writable) && (_ = f(() => /* @__PURE__ */ gn(void 0)), pt(_, xs(d)), n.set(p, _));
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
              n.get("length")
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
          var x = n.get(_);
          return x === void 0 || x.v !== dt;
        });
        for (var [d, v] of n)
          v.v !== dt && !(d in h) && p.push(d);
        return p;
      },
      setPrototypeOf() {
        tx();
      }
    }
  );
}
function kh(t) {
  try {
    if (t !== null && typeof t == "object" && Ns in t)
      return t[Ns];
  } catch {
  }
  return t;
}
function _x(t, e) {
  return Object.is(kh(t), kh(e));
}
var Sh, Gg, Bg, Ug;
function Ex() {
  if (Sh === void 0) {
    Sh = window, Gg = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Bg = Cs(e, "firstChild").get, Ug = Cs(e, "nextSibling").get, xh(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), xh(n) && (n.__t = void 0);
  }
}
function Tr(t = "") {
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
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ kr(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Zs(n) : n;
  }
}
function zs(t, e = 1, n = !1) {
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
    return Ie.f |= Xr, t;
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
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t;
}
const ma = /* @__PURE__ */ new Set();
let Ze = null, Da = null, yn = null, xr = [], Al = null, Ou = !1;
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
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const s of e)
      this.#i(s, n);
    this.is_fork || this.#l(), this.#r > 0 || this.is_fork ? (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects)) : (Da = this, Ze = null, Mh(n.render_effects), Mh(n.effects), Da = null, this.#u?.resolve()), yn = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #i(e, n) {
    e.f ^= mt;
    for (var s = e.first; s !== null; ) {
      var u = s.f, c = (u & (hr | ai)) !== 0, f = c && (u & mt) !== 0, h = f || (u & Yt) !== 0 || this.skipped_effects.has(s);
      if ((s.f & wo) !== 0 && s.b?.is_pending() && (n = {
        parent: n,
        effect: s,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !h && s.fn !== null) {
        c ? s.f ^= mt : (u & Il) !== 0 ? n.effects.push(s) : Qs(s) && ((s.f & Wn) !== 0 && n.block_effects.push(s), Ys(s));
        var p = s.first;
        if (p !== null) {
          s = p;
          continue;
        }
      }
      var d = s.parent;
      for (s = s.next; s === null && d !== null; )
        d === n.effect && (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), s = d.next, d = d.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(e) {
    for (const n of e)
      ((n.f & Dt) !== 0 ? this.#a : this.#o).push(n), yt(n, mt);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.previous.has(e) || this.previous.set(e, n), this.current.set(e, e.v), yn?.set(e, e.v);
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
      var e = yn, n = !0, s = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const u of ma) {
        if (u === this) {
          n = !1;
          continue;
        }
        const c = [];
        for (const [h, p] of this.current) {
          if (u.current.has(h))
            if (n && p !== u.current.get(h))
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
    return (this.#u ??= Tg()).promise;
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
    for (bh(!0); xr.length > 0; ) {
      var n = Un.ensure();
      if (e++ > 1e3) {
        var s, u;
        kx();
      }
      n.process(xr), br.clear();
    }
  } finally {
    Ou = !1, bh(t), Al = null;
  }
}
function kx() {
  try {
    QE();
  } catch (t) {
    qi(t, Al);
  }
}
let rr = null;
function Mh(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var s = t[n++];
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
function Yg(t, e, n, s) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const u of t.reactions) {
      const c = u.f;
      (c & _t) !== 0 ? Yg(
        /** @type {Derived} */
        u,
        e,
        n,
        s
      ) : (c & (Ll | Wn)) !== 0 && (c & Dt) === 0 && // we may have scheduled this one already
      Hg(u, e, s) && (yt(u, Dt), Kr(
        /** @type {Effect} */
        u
      ));
    }
}
function Hg(t, e, n) {
  const s = n.get(t);
  if (s !== void 0) return s;
  if (t.deps !== null)
    for (const u of t.deps) {
      if (e.includes(u))
        return !0;
      if ((u.f & _t) !== 0 && Hg(
        /** @type {Derived} */
        u,
        e,
        n
      ))
        return n.set(
          /** @type {Derived} */
          u,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function Kr(t) {
  for (var e = Al = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Ou && e === be && (n & Wn) !== 0)
      return;
    if ((n & (ai | hr)) !== 0) {
      if ((n & mt) === 0) return;
      e.f ^= mt;
    }
  }
  xr.push(e);
}
function Sx(t) {
  let e = 0, n = Qr(0), s;
  return () => {
    Ux() && (we(n), sd(() => (e === 0 && (s = ea(() => t(() => Ps(n)))), e += 1, () => {
      js(() => {
        e -= 1, e === 0 && (s?.(), s = void 0, Ps(n));
      });
    })));
  };
}
var Mx = Zr | ji | wo;
function Ix(t, e, n) {
  new bx(t, e, n);
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
  constructor(e, n, s) {
    this.#t = e, this.#r = n, this.#u = s, this.parent = /** @type {Effect} */
    be.b, this.#e = !!this.#r.pending, this.#a = Pl(() => {
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
      var n = this.#v();
      this.#o = this.#p(() => (Un.ensure(), dn(() => this.#u(n)))), this.#h > 0 ? this.#m() : (Ri(
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
    return this.#e && (this.#c = Tr(), this.#t.before(this.#c), e = this.#c), e;
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
    var n = be, s = Ie, u = vt;
    $n(this.#a), Rt(this.#a), zi(this.#a.ctx);
    try {
      return e();
    } catch (c) {
      return qg(c), null;
    } finally {
      $n(n), Rt(s), zi(u);
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
    var n = this.#r.onerror;
    let s = this.#r.failed;
    if (this.#d || !n && !s)
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
      Rt(null), c = !0, n?.(e, f), c = !1;
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
function Lx(t, e, n, s) {
  const u = Tl;
  if (n.length === 0 && t.length === 0) {
    s(e.map(u));
    return;
  }
  var c = Ze, f = (
    /** @type {Effect} */
    be
  ), h = Ax();
  function p() {
    Promise.all(n.map((d) => /* @__PURE__ */ Tx(d))).then((d) => {
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
function Ax() {
  var t = be, e = Ie, n = vt, s = Ze;
  return function(c = !0) {
    $n(t), Rt(e), zi(n), c && s?.activate();
  };
}
function Ka() {
  $n(null), Rt(null), zi(null);
}
// @__NO_SIDE_EFFECTS__
function Tl(t) {
  var e = _t | Dt, n = Ie !== null && (Ie.f & _t) !== 0 ? (
    /** @type {Derived} */
    Ie
  ) : null;
  return be === null || n !== null && (n.f & nn) !== 0 ? e |= nn : be.f |= ji, {
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
    parent: n ?? be,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Tx(t, e) {
  let n = (
    /** @type {Effect | null} */
    be
  );
  n === null && WE();
  var s = (
    /** @type {Boundary} */
    n.b
  ), u = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), c = Qr(
    /** @type {V} */
    dt
  ), f = !Ie, h = /* @__PURE__ */ new Map();
  return Yx(() => {
    var p = Tg();
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
      s.update_pending_count(1), d.increment(v), h.get(d)?.reject(Ai), h.delete(d), h.set(d, p);
    }
    const _ = (x, M = void 0) => {
      if (d.activate(), M)
        M !== Ai && (c.f |= Xr, Yi(c, M));
      else {
        (c.f & Xr) !== 0 && (c.f ^= Xr), Yi(c, x);
        for (const [S, C] of h) {
          if (h.delete(S), S === d) break;
          C.reject(Ai);
        }
      }
      f && (s.update_pending_count(-1), d.decrement(v));
    };
    p.promise.then(_, (x) => _(null, x || "unknown"));
  }), Nl(() => {
    for (const p of h.values())
      p.reject(Ai);
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
    for (var n = 0; n < e.length; n += 1)
      bt(
        /** @type {Effect} */
        e[n]
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
function Cl(t) {
  var e, n = be;
  $n(Nx(t));
  try {
    t.f &= ~Za, Jg(t), e = td(t);
  } finally {
    $n(n);
  }
  return e;
}
function $g(t) {
  var e = Cl(t);
  if (t.equals(e) || (t.v = e, t.wv = Qg()), !Qi)
    if (yn !== null)
      yn.set(t, t.v);
    else {
      var n = (Sr || (t.f & nn) !== 0) && t.deps !== null ? fr : mt;
      yt(t, n);
    }
}
let Ru = /* @__PURE__ */ new Set();
const br = /* @__PURE__ */ new Map();
let Xg = !1;
function Qr(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Cg,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function gn(t, e) {
  const n = Qr(t);
  return Zg(n), n;
}
// @__NO_SIDE_EFFECTS__
function Vg(t, e = !1, n = !0) {
  const s = Qr(t);
  return e || (s.equals = Pg), s;
}
function pt(t, e, n = !1) {
  Ie !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!_n || (Ie.f & wh) !== 0) && Fg() && (Ie.f & (_t | Wn | Ll | wh)) !== 0 && !sr?.includes(t) && nx();
  let s = n ? xs(e) : e;
  return Yi(t, s);
}
function Yi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    Qi ? br.set(t, e) : br.set(t, n), t.v = e;
    var s = Un.ensure();
    s.capture(t, n), (t.f & _t) !== 0 && ((t.f & Dt) !== 0 && Cl(
      /** @type {Derived} */
      t
    ), yt(t, (t.f & nn) === 0 ? mt : fr)), t.wv = Qg(), Wg(t, Dt), be !== null && (be.f & mt) !== 0 && (be.f & (hr | ai)) === 0 && (Qt === null ? Rx([t]) : Qt.push(t)), !s.is_fork && Ru.size > 0 && !Xg && Px();
  }
  return e;
}
function Px() {
  Xg = !1;
  const t = Array.from(Ru);
  for (const e of t)
    (e.f & mt) !== 0 && yt(e, fr), Qs(e) && Ys(e);
  Ru.clear();
}
function Ps(t) {
  pt(t, t.v + 1);
}
function Wg(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var s = n.length, u = 0; u < s; u++) {
      var c = n[u], f = c.f, h = (f & Dt) === 0;
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
let Ih = !1;
function Ox() {
  Ih || (Ih = !0, document.addEventListener(
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
  var e = Ie, n = be;
  Rt(null), $n(null);
  try {
    return t();
  } finally {
    Rt(e), $n(n);
  }
}
function jg(t, e, n, s = n) {
  t.addEventListener(e, () => Ks(n));
  const u = t.__on_r;
  u ? t.__on_r = () => {
    u(), s(!0);
  } : t.__on_r = () => s(!0), Ox();
}
let Oi = !1;
function bh(t) {
  Oi = t;
}
let Qi = !1;
function Lh(t) {
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
let Kg = 1, qs = 0, Vr = qs;
function Ah(t) {
  Vr = t;
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
    var n = t.deps, s = (e & nn) !== 0;
    if (e & _t && (t.f &= ~Za), n !== null) {
      var u, c, f = (e & ja) !== 0, h = s && be !== null && !Sr, p = n.length;
      if ((f || h) && (be === null || (be.f & Ir) === 0)) {
        var d = (
          /** @type {Derived} */
          t
        ), v = d.parent;
        for (u = 0; u < p; u++)
          c = n[u], (f || !c?.reactions?.includes(d)) && (c.reactions ??= []).push(d);
        f && (d.f ^= ja), h && v !== null && (v.f & nn) === 0 && (d.f ^= nn);
      }
      for (u = 0; u < p; u++)
        if (c = n[u], Qs(
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
function ed(t, e, n = !0) {
  var s = t.reactions;
  if (s !== null && !sr?.includes(t))
    for (var u = 0; u < s.length; u++) {
      var c = s[u];
      (c.f & _t) !== 0 ? ed(
        /** @type {Derived} */
        c,
        e,
        !1
      ) : e === c && (n ? yt(c, Dt) : (c.f & mt) !== 0 && yt(c, fr), Kr(
        /** @type {Effect} */
        c
      ));
    }
}
function td(t) {
  var e = Mt, n = Ut, s = Qt, u = Ie, c = Sr, f = sr, h = vt, p = _n, d = Vr, v = t.f;
  Mt = /** @type {null | Value[]} */
  null, Ut = 0, Qt = null, Sr = (v & nn) !== 0 && (_n || !Oi || Ie === null), Ie = (v & (hr | ai)) === 0 ? t : null, sr = null, zi(t.ctx), _n = !1, Vr = ++qs, t.ac !== null && (Ks(() => {
    t.ac.abort(Ai);
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
    Qt))), (t.f & Xr) !== 0 && (t.f ^= Xr), x;
  } catch (C) {
    return qg(C);
  } finally {
    t.f ^= Pu, Mt = e, Ut = n, Qt = s, Ie = u, Sr = c, sr = f, zi(h), _n = p, Vr = d;
  }
}
function Dx(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var s = UE.call(n, t);
    if (s !== -1) {
      var u = n.length - 1;
      u === 0 ? n = e.reactions = null : (n[s] = n[u], n.pop());
    }
  }
  n === null && (e.f & _t) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
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
  var n = t.deps;
  if (n !== null)
    for (var s = e; s < n.length; s++)
      Dx(t, n[s]);
}
function Ys(t) {
  var e = t.f;
  if ((e & Ir) === 0) {
    yt(t, mt);
    var n = be, s = Oi;
    be = t, Oi = !0;
    try {
      (e & Wn) !== 0 ? Hx(t) : od(t), ad(t);
      var u = td(t);
      t.teardown = typeof u == "function" ? u : null, t.wv = Kg;
      var c;
      bg && ix && (t.f & Dt) !== 0 && t.deps;
    } finally {
      Oi = s, be = n;
    }
  }
}
function we(t) {
  var e = t.f, n = (e & _t) !== 0;
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
  } else if (n && /** @type {Derived} */
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
    if (n) {
      f = /** @type {Derived} */
      t;
      var p = f.v;
      return ((f.f & mt) === 0 && f.reactions !== null || nd(f)) && (p = Cl(f)), br.set(f, p), p;
    }
  } else if (n) {
    if (f = /** @type {Derived} */
    t, yn?.has(f))
      return yn.get(f);
    Qs(f) && $g(f);
  }
  if (yn?.has(t))
    return yn.get(t);
  if ((t.f & Xr) !== 0)
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
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function gr(t, e, n, s = !0) {
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
  if (n)
    try {
      Ys(c), c.f |= ko;
    } catch (p) {
      throw bt(c), p;
    }
  else e !== null && Kr(c);
  if (s) {
    var f = c;
    if (n && f.deps === null && f.teardown === null && f.nodes_start === null && f.first === f.last && // either `null`, or a singular child
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
function Nl(t) {
  const e = gr(bl, null, !1);
  return yt(e, mt), e.teardown = t, e;
}
function zx(t) {
  Gx();
  var e = (
    /** @type {Effect} */
    be.f
  ), n = !Ie && (e & hr) !== 0 && (e & ko) === 0;
  if (n) {
    var s = (
      /** @type {ComponentContext} */
      vt
    );
    (s.e ??= []).push(t);
  } else
    return rd(t);
}
function rd(t) {
  return gr(Il | XE, t, !1);
}
function qx(t) {
  Un.ensure();
  const e = gr(ai | ji, t, !0);
  return (n = {}) => new Promise((s) => {
    n.outro ? Ri(e, () => {
      bt(e), s(void 0);
    }) : (bt(e), s(void 0));
  });
}
function id(t) {
  return gr(Il, t, !1);
}
function Yx(t) {
  return gr(Ll | ji, t, !0);
}
function sd(t, e = 0) {
  return gr(bl | e, t, !0);
}
function xn(t, e = [], n = [], s = []) {
  Lx(s, e, n, (u) => {
    gr(bl, () => t(...u.map(we)), !0);
  });
}
function Pl(t, e = 0) {
  var n = gr(Wn | e, t, !0);
  return n;
}
function dn(t, e = !0) {
  return gr(hr | ji, t, !0, e);
}
function ad(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Qi, s = Ie;
    Lh(!0), Rt(null);
    try {
      e.call(null);
    } finally {
      Lh(n), Rt(s);
    }
  }
}
function od(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const u = n.ac;
    u !== null && Ks(() => {
      u.abort(Ai);
    });
    var s = n.next;
    (n.f & ai) !== 0 ? n.parent = null : bt(n, e), n = s;
  }
}
function Hx(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & hr) === 0 && bt(e), e = n;
  }
}
function bt(t, e = !0) {
  var n = !1;
  (e || (t.f & $E) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (ud(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), od(t, e && !n), Qa(t, 0), yt(t, Ir);
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
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Zs(t)
    );
    t.remove(), t = n;
  }
}
function ld(t) {
  var e = t.parent, n = t.prev, s = t.next;
  n !== null && (n.next = s), s !== null && (s.prev = n), e !== null && (e.first === t && (e.first = s), e.last === t && (e.last = n));
}
function Ri(t, e, n = !0) {
  var s = [];
  Ol(t, s, !0), cd(s, () => {
    n && bt(t), e && e();
  });
}
function cd(t, e) {
  var n = t.length;
  if (n > 0) {
    var s = () => --n || e();
    for (var u of t)
      u.out(s);
  } else
    e();
}
function Ol(t, e, n) {
  if ((t.f & Yt) === 0) {
    if (t.f ^= Yt, t.transitions !== null)
      for (const f of t.transitions)
        (f.is_global || n) && e.push(f);
    for (var s = t.first; s !== null; ) {
      var u = s.next, c = (s.f & Zr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & hr) !== 0 && (t.f & Wn) !== 0;
      Ol(s, e, c ? n : !1), s = u;
    }
  }
}
function Rl(t) {
  hd(t, !0);
}
function hd(t, e) {
  if ((t.f & Yt) !== 0) {
    t.f ^= Yt, (t.f & mt) === 0 && (yt(t, Dt), Kr(t));
    for (var n = t.first; n !== null; ) {
      var s = n.next, u = (n.f & Zr) !== 0 || (n.f & hr) !== 0;
      hd(n, u ? e : !1), n = s;
    }
    if (t.transitions !== null)
      for (const c of t.transitions)
        (c.is_global || e) && c.in();
  }
}
function fd(t, e) {
  for (var n = t.nodes_start, s = t.nodes_end; n !== null; ) {
    var u = n === s ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Zs(n)
    );
    e.append(n), n = u;
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
  for (var n of Du)
    n(t);
}
let Th = null;
function va(t) {
  var e = this, n = (
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
        return c || n;
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
  var n = (
    /** @type {Effect} */
    be
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function on(t, e) {
  var n = (e & cx) !== 0, s = (e & hx) !== 0, u, c = !t.startsWith("<!>");
  return () => {
    u === void 0 && (u = dd(c ? t : "<!>" + t), n || (u = /** @type {Node} */
    /* @__PURE__ */ kr(u)));
    var f = (
      /** @type {TemplateNode} */
      s || Gg ? document.importNode(u, !0) : u.cloneNode(!0)
    );
    if (n) {
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
function Ch(t = "") {
  {
    var e = Tr(t + "");
    return Hs(e, e), e;
  }
}
function Lr() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Tr();
  return t.append(e, n), Hs(e, n), t;
}
function Ke(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let Fu = !0;
function Di(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Xx(t, e) {
  return Vx(t, e);
}
const ki = /* @__PURE__ */ new Map();
function Vx(t, { target: e, anchor: n, props: s = {}, events: u, context: c, intro: f = !0 }) {
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
  p(Ml(gd)), Du.add(p);
  var d = void 0, v = qx(() => {
    var _ = n ?? e.appendChild(Tr());
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
      Du.delete(p), _ !== n && _.parentNode?.removeChild(_);
    };
  });
  return Gu.set(d, v), d;
}
let Gu = /* @__PURE__ */ new WeakMap();
function Wx(t, e) {
  const n = Gu.get(t);
  return n ? (Gu.delete(t), n(e)) : Promise.resolve();
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
  constructor(e, n = !0) {
    this.anchor = e, this.#r = n;
  }
  #u = () => {
    var e = (
      /** @type {Batch} */
      Ze
    );
    if (this.#e.has(e)) {
      var n = (
        /** @type {Key} */
        this.#e.get(e)
      ), s = this.#t.get(n);
      if (s)
        Rl(s);
      else {
        var u = this.#n.get(n);
        u && (this.#t.set(n, u.effect), this.#n.delete(n), u.fragment.lastChild.remove(), this.anchor.before(u.fragment), s = u.effect);
      }
      for (const [c, f] of this.#e) {
        if (this.#e.delete(c), c === e)
          break;
        const h = this.#n.get(f);
        h && (bt(h.effect), this.#n.delete(f));
      }
      for (const [c, f] of this.#t) {
        if (c === n) continue;
        const h = () => {
          if (Array.from(this.#e.values()).includes(c)) {
            var d = document.createDocumentFragment();
            fd(f, d), d.append(Tr()), this.#n.set(c, { effect: f, fragment: d });
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
    const n = Array.from(this.#e.values());
    for (const [s, u] of this.#n)
      n.includes(s) || (bt(u.effect), this.#n.delete(s));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var s = (
      /** @type {Batch} */
      Ze
    ), u = zg();
    if (n && !this.#t.has(e) && !this.#n.has(e))
      if (u) {
        var c = document.createDocumentFragment(), f = Tr();
        c.append(f), this.#n.set(e, {
          effect: dn(() => n(f)),
          fragment: c
        });
      } else
        this.#t.set(
          e,
          dn(() => n(this.anchor))
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
function tn(t, e, n = !1) {
  var s = new jx(t), u = n ? Zr : 0;
  function c(f, h) {
    s.ensure(f, h);
  }
  Pl(() => {
    var f = !1;
    e((h, p = !0) => {
      f = !0, c(p, h);
    }), f || c(!1, null);
  }, u);
}
function Zx(t, e) {
  return e;
}
function Kx(t, e, n) {
  for (var s = t.items, u = [], c = e.length, f = 0; f < c; f++)
    Ol(e[f].e, u, !0);
  var h = c > 0 && u.length === 0 && n !== null;
  if (h) {
    var p = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    xx(p), p.append(
      /** @type {Element} */
      n
    ), s.clear(), Fn(t, e[0].prev, e[c - 1].next);
  }
  cd(u, () => {
    for (var d = 0; d < c; d++) {
      var v = e[d];
      h || (s.delete(v.k), Fn(t, v.prev, v.next)), bt(v.e, !h);
    }
  });
}
function Js(t, e, n, s, u, c = null) {
  var f = t, h = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, p = (e & Rg) !== 0;
  if (p) {
    var d = (
      /** @type {Element} */
      t
    );
    f = d.appendChild(Tr());
  }
  var v = null, _ = !1, x = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ Cx(() => {
    var O = n();
    return Sl(O) ? O : O == null ? [] : Ml(O);
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
      n
    ), c !== null && (S.length === 0 ? v ? Rl(v) : v = dn(() => c(f)) : v !== null && Ri(v, () => {
      v = null;
    }));
  }
  Pl(() => {
    C ??= /** @type {Effect} */
    be, S = /** @type {V[]} */
    we(M);
    var O = S.length;
    if (!(_ && O === 0)) {
      _ = O === 0;
      var I, H, V, J;
      if (zg()) {
        var U = /* @__PURE__ */ new Set(), W = (
          /** @type {Batch} */
          Ze
        );
        for (H = 0; H < O; H += 1) {
          V = S[H], J = s(V, H);
          var E = h.items.get(J) ?? x.get(J);
          E ? (e & (So | Mo)) !== 0 && pd(E, V, H, e) : (I = md(
            null,
            h,
            null,
            null,
            V,
            J,
            H,
            u,
            e,
            n,
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
function Qx(t, e, n, s, u, c, f, h, p) {
  var d = (f & sx) !== 0, v = (f & (So | Mo)) !== 0, _ = e.length, x = n.items, M = n.first, S = M, C, F = null, O, I = [], H = [], V, J, U, W;
  if (d)
    for (W = 0; W < _; W += 1)
      V = e[W], J = h(V, W), U = x.get(J), U !== void 0 && (U.a?.measure(), (O ??= /* @__PURE__ */ new Set()).add(U));
  for (W = 0; W < _; W += 1) {
    if (V = e[W], J = h(V, W), U = x.get(J), U === void 0) {
      var E = s.get(J);
      if (E !== void 0) {
        s.delete(J), x.set(J, E);
        var w = F ? F.next : S;
        Fn(n, F, E), Fn(n, E, w), tu(E, w, u), F = E;
      } else {
        var b = S ? (
          /** @type {TemplateNode} */
          S.e.nodes_start
        ) : u;
        F = md(
          b,
          n,
          F,
          F === null ? n.first : F.next,
          V,
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
    if (v && pd(U, V, W, f), (U.e.f & Yt) !== 0 && (Rl(U.e), d && (U.a?.unfix(), (O ??= /* @__PURE__ */ new Set()).delete(U))), U !== S) {
      if (C !== void 0 && C.has(U)) {
        if (I.length < H.length) {
          var A = H[0], T;
          F = A.prev;
          var G = I[0], R = I[I.length - 1];
          for (T = 0; T < I.length; T += 1)
            tu(I[T], A, u);
          for (T = 0; T < H.length; T += 1)
            C.delete(H[T]);
          Fn(n, G.prev, R.next), Fn(n, F, G), Fn(n, R, A), S = A, F = R, W -= 1, I = [], H = [];
        } else
          C.delete(U), tu(U, S, u), Fn(n, U.prev, U.next), Fn(n, U, F === null ? n.first : F.next), Fn(n, F, U), F = U;
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
    for (var P = C === void 0 ? [] : Ml(C); S !== null; )
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
      Kx(n, P, Y);
    }
  }
  d && js(() => {
    if (O !== void 0)
      for (U of O)
        U.a?.apply();
  }), t.first = n.first && n.first.e, t.last = F && F.e;
  for (var z of s.values())
    bt(z.e);
  s.clear();
}
function pd(t, e, n, s) {
  (s & So) !== 0 && Yi(t.v, e), (s & Mo) !== 0 ? Yi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function md(t, e, n, s, u, c, f, h, p, d, v) {
  var _ = (p & So) !== 0, x = (p & ax) === 0, M = _ ? x ? /* @__PURE__ */ Vg(u, !1, !1) : Qr(u) : u, S = (p & Mo) === 0 ? f : Qr(f), C = {
    i: S,
    v: M,
    k: c,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: s
  };
  try {
    if (t === null) {
      var F = document.createDocumentFragment();
      F.append(t = Tr());
    }
    return C.e = dn(() => h(
      /** @type {Node} */
      t,
      M,
      S,
      d
    ), yx), C.e.prev = n && n.e, C.e.next = s && s.e, n === null ? v || (e.first = C) : (n.next = C, n.e.next = C.e), s !== null && (s.prev = C, s.e.prev = C.e), C;
  } finally {
  }
}
function tu(t, e, n) {
  for (var s = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, u = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, c = (
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
function Fn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function vd(t, e, n = !1, s = !1, u = !1) {
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
      n ? p = `<svg>${p}</svg>` : s && (p = `<math>${p}</math>`);
      var d = dd(p);
      if ((n || s) && (d = /** @type {Element} */
      /* @__PURE__ */ kr(d)), Hs(
        /** @type {TemplateNode} */
        /* @__PURE__ */ kr(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), n || s)
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
  var e, n, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var u = t.length;
    for (e = 0; e < u; e++) t[e] && (n = yd(t[e])) && (s && (s += " "), s += n);
  } else for (n in t) t[n] && (s && (s += " "), s += n);
  return s;
}
function ew() {
  for (var t, e, n = 0, s = "", u = arguments.length; n < u; n++) (t = arguments[n]) && (e = yd(t)) && (s && (s += " "), s += e);
  return s;
}
function tw(t) {
  return typeof t == "object" ? ew(t) : t ?? "";
}
const Nh = [...` 	
\r\f \v\uFEFF`];
function nw(t, e, n) {
  var s = t == null ? "" : "" + t;
  if (e && (s = s ? s + " " + e : e), n) {
    for (var u in n)
      if (n[u])
        s = s ? s + " " + u : u;
      else if (s.length)
        for (var c = u.length, f = 0; (f = s.indexOf(u, f)) >= 0; ) {
          var h = f + c;
          (f === 0 || Nh.includes(s[f - 1])) && (h === s.length || Nh.includes(s[h])) ? s = (f === 0 ? "" : s.substring(0, f)) + s.substring(h + 1) : f = h;
        }
  }
  return s === "" ? null : s;
}
function Os(t, e, n, s, u, c) {
  var f = t.__className;
  if (f !== n || f === void 0) {
    var h = nw(n, s, c);
    h == null ? t.removeAttribute("class") : t.className = h, t.__className = n;
  } else if (c && u !== c)
    for (var p in c) {
      var d = !!c[p];
      (u == null || d !== !!u[p]) && t.classList.toggle(p, d);
    }
  return c;
}
function _d(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Sl(e))
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
  (!n || e !== void 0) && (t.selectedIndex = -1);
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
  }), Nl(() => {
    e.disconnect();
  });
}
function iw(t, e, n = e) {
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
    n(h), Ze !== null && s.add(Ze);
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
      h !== null && (c = Rs(h), n(c));
    }
    t.__value = c, u = !1;
  }), rw(t);
}
function Rs(t) {
  return "__value" in t ? t.__value : t.value;
}
const sw = Symbol("is custom element"), aw = Symbol("is html");
function Mr(t, e, n, s) {
  var u = ow(t);
  u[e] !== (u[e] = n) && (e === "loading" && (t[VE] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && uw(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
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
var Ph = /* @__PURE__ */ new Map();
function uw(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Ph.get(e);
  if (n) return n;
  Ph.set(e, n = []);
  for (var s, u = t, c = Element.prototype; c !== u; ) {
    s = zE(u);
    for (var f in s)
      s[f].set && n.push(f);
    u = Ag(u);
  }
  return n;
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
    promise: new Promise((n) => {
      ir.tasks.add(e = { c: t, f: n });
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
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Oh(t) {
  const e = {}, n = t.split(";");
  for (const s of n) {
    const [u, c] = s.split(":");
    if (!u || c === void 0) break;
    const f = hw(u.trim());
    e[f] = c.trim();
  }
  return e;
}
const fw = (t) => t;
function Rh(t, e, n, s) {
  var u = (t & ox) !== 0, c = (t & ux) !== 0, f = u && c, h = (t & lx) !== 0, p = f ? "both" : u ? "in" : "out", d, v = e.inert, _ = e.style.overflow, x, M;
  function S() {
    return Ks(() => d ??= n()(e, s?.() ?? /** @type {P} */
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
function Bu(t, e, n, s, u) {
  var c = s === 1;
  if (HE(e)) {
    var f, h = !1;
    return js(() => {
      if (!h) {
        var F = e({ direction: c ? "in" : "out" });
        f = Bu(t, F, n, s, u);
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
  if (n?.deactivate(), !e?.duration)
    return u(), {
      abort: vn,
      deactivate: vn,
      reset: vn,
      t: () => s
    };
  const { delay: p = 0, css: d, tick: v, easing: _ = fw } = e;
  var x = [];
  if (c && n === void 0 && (v && v(0, 1), d)) {
    var M = Oh(d(0, 1));
    x.push(M, M);
  }
  var S = () => 1 - s, C = t.animate(x, { duration: p, fill: "forwards" });
  return C.onfinish = () => {
    C.cancel();
    var F = n?.t() ?? 1 - s;
    n?.abort();
    var O = s - F, I = (
      /** @type {number} */
      e.duration * Math.abs(O)
    ), H = [];
    if (I > 0) {
      var V = !1;
      if (d)
        for (var J = Math.ceil(I / 16.666666666666668), U = 0; U <= J; U += 1) {
          var W = F + O * _(U / J), E = Oh(d(W, 1 - W));
          H.push(E), V ||= E.overflow === "hidden";
        }
      V && (t.style.overflow = "hidden"), S = () => {
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
function gw(t, e, n = e) {
  jg(t, "change", (s) => {
    var u = s ? t.defaultChecked : t.checked;
    n(u);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  ea(e) == null && n(t.checked), sd(() => {
    var s = e();
    t.checked = !!s;
  });
}
let Uu = Symbol();
function xd(t, e, n) {
  const s = n[e] ??= {
    store: null,
    source: /* @__PURE__ */ Vg(void 0),
    unsubscribe: vn
  };
  if (s.store !== t && !(Uu in n))
    if (s.unsubscribe(), s.store = t ?? null, t == null)
      s.source.v = void 0, s.unsubscribe = vn;
    else {
      var u = !0;
      s.unsubscribe = kd(t, (c) => {
        u ? s.source.v = c : pt(s.source, c);
      }), u = !1;
    }
  return t && Uu in n ? mw(t) : we(s.source);
}
function wd() {
  const t = {};
  function e() {
    Nl(() => {
      for (var n in t)
        t[n].unsubscribe();
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
function kd(t, e, n) {
  if (t == null)
    return e(void 0), vn;
  const s = ea(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return s.unsubscribe ? () => s.unsubscribe() : s;
}
const Si = [];
function pw(t, e = vn) {
  let n = null;
  const s = /* @__PURE__ */ new Set();
  function u(h) {
    if (Ng(t, h) && (t = h, n)) {
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
    return s.add(d), s.size === 1 && (n = e(u, c) || vn), h(
      /** @type {T} */
      t
    ), () => {
      s.delete(d), s.size === 0 && n && (n(), n = null);
    };
  }
  return { set: u, update: c, subscribe: f };
}
function mw(t) {
  let e;
  return kd(t, (n) => e = n)(), e;
}
const vw = {
  controls: sn(Xf),
  options: Nu().controls,
  settings: Nu().settings
}, Dl = pw(vw), yw = "5";
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
  let n = /* @__PURE__ */ gn("");
  dw(() => {
    e.actionOption && (e.actionOption.type === "select" ? pt(n, e.actionOption.value.value, !0) : e.actionOption.type === "toggle" && pt(n, e.actionOption.value, !0));
  });
  const s = (h) => {
    if (!e.actionInstance || !e.actionOption) {
      te.error("Can't apply option value", e.actionInstance, e.actionOption);
      return;
    }
    if (e.actionOption?.type === "toggle") {
      const p = h.target;
      pt(n, p.checked, !0);
    } else if (e.actionOption?.type === "select") {
      const p = h.target;
      pt(n, p.value, !0);
    }
    e.actionInstance.applyOptionValue(e.name, we(n));
  };
  var u = Lr(), c = Hn(u);
  {
    var f = (h) => {
      var p = Sw(), d = En(p);
      {
        var v = (x) => {
          var M = ww(), S = Hn(M), C = En(S), F = zs(S, 2);
          F.__change = s, Js(F, 21, () => e.actionOption.choices, Zx, (O, I) => {
            var H = xw(), V = En(H), J = {};
            xn(() => {
              Di(V, we(I).title), J !== (J = we(I).value) && (H.value = (H.__value = we(I).value) ?? "");
            }), Ke(O, H);
          }), xn(() => {
            Mr(S, "for", e.name), Di(C, e.actionOption.label), Mr(F, "id", e.name);
          }), iw(F, () => we(n), (O) => pt(n, O)), Ke(x, M);
        }, _ = (x) => {
          var M = Lr(), S = Hn(M);
          {
            var C = (F) => {
              var O = kw(), I = En(O);
              I.__change = s;
              var H = zs(I);
              xn(
                (V) => {
                  Mr(O, "for", e.name), Mr(I, "id", V), Di(H, ` ${e.actionOption.label ?? ""}`);
                },
                [() => String(e.name)]
              ), gw(I, () => we(n), (V) => pt(n, V)), Ke(F, O);
            };
            tn(
              S,
              (F) => {
                e.actionOption.type === "toggle" && typeof we(n) == "boolean" && F(C);
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
  const n = (f) => {
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
      h.__click = n;
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
function Aw(t, e) {
  Zi(e, !0);
  const n = Dg("gm"), s = e.control.type, u = e.control.targetMode;
  let c = /* @__PURE__ */ gn(null);
  s && u && pt(c, n.actionInstances[`${s}__${u}`] || null, !0);
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
  setPrototypeOf: Dh,
  isFrozen: Tw,
  getPrototypeOf: Cw,
  getOwnPropertyDescriptor: Nw
} = Object;
let {
  freeze: Tt,
  seal: an,
  create: zu
} = Object, {
  apply: qu,
  construct: Yu
} = typeof Reflect < "u" && Reflect;
Tt || (Tt = function(e) {
  return e;
});
an || (an = function(e) {
  return e;
});
qu || (qu = function(e, n) {
  for (var s = arguments.length, u = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++)
    u[c - 2] = arguments[c];
  return e.apply(n, u);
});
Yu || (Yu = function(e) {
  for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
    s[u - 1] = arguments[u];
  return new e(...s);
});
const _a = Ct(Array.prototype.forEach), Pw = Ct(Array.prototype.lastIndexOf), Fh = Ct(Array.prototype.pop), gs = Ct(Array.prototype.push), Ow = Ct(Array.prototype.splice), Fa = Ct(String.prototype.toLowerCase), nu = Ct(String.prototype.toString), ru = Ct(String.prototype.match), ds = Ct(String.prototype.replace), Rw = Ct(String.prototype.indexOf), Dw = Ct(String.prototype.trim), fn = Ct(Object.prototype.hasOwnProperty), kt = Ct(RegExp.prototype.test), ps = Fw(TypeError);
function Ct(t) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
      s[u - 1] = arguments[u];
    return qu(t, e, s);
  };
}
function Fw(t) {
  return function() {
    for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++)
      n[s] = arguments[s];
    return Yu(t, n);
  };
}
function Me(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fa;
  Dh && Dh(t, null);
  let s = e.length;
  for (; s--; ) {
    let u = e[s];
    if (typeof u == "string") {
      const c = n(u);
      c !== u && (Tw(e) || (e[s] = c), u = c);
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
  for (const [n, s] of Sd(t))
    fn(t, n) && (Array.isArray(s) ? e[n] = Gw(s) : s && typeof s == "object" && s.constructor === Object ? e[n] = nr(s) : e[n] = s);
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
  function n() {
    return null;
  }
  return n;
}
const Gh = Tt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), iu = Tt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), su = Tt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Bw = Tt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), au = Tt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Uw = Tt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Bh = Tt(["#text"]), Uh = Tt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ou = Tt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), zh = Tt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ea = Tt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), zw = an(/\{\{[\w\W]*|[\w\W]*\}\}/gm), qw = an(/<%[\w\W]*|[\w\W]*%>/gm), Yw = an(/\$\{[\w\W]*/gm), Hw = an(/^data-[\-\w.\u00B7-\uFFFF]+$/), Jw = an(/^aria-[\-\w]+$/), Md = an(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), $w = an(/^(?:\w+script|data):/i), Xw = an(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Id = an(/^html$/i), Vw = an(/^[a-z][.\w]*(-[.\w]+)+$/i);
var qh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Jw,
  ATTR_WHITESPACE: Xw,
  CUSTOM_ELEMENT: Vw,
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
}, jw = function(e, n) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let s = null;
  const u = "data-tt-policy-suffix";
  n && n.hasAttribute(u) && (s = n.getAttribute(u));
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
}, Yh = function() {
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
    document: n
  } = t;
  const s = n, u = s.currentScript, {
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
    const ge = n.createElement("template");
    ge.content && ge.content.ownerDocument && (n = ge.content.ownerDocument);
  }
  let V, J = "";
  const {
    implementation: U,
    createNodeIterator: W,
    createDocumentFragment: E,
    getElementsByTagName: w
  } = n, {
    importNode: b
  } = s;
  let A = Yh();
  e.isSupported = typeof Sd == "function" && typeof H == "function" && U && U.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: T,
    ERB_EXPR: G,
    TMPLIT_EXPR: R,
    DATA_ATTR: P,
    ARIA_ATTR: D,
    IS_SCRIPT_OR_DATA: Y,
    ATTR_WHITESPACE: z,
    CUSTOM_ELEMENT: j
  } = qh;
  let {
    IS_ALLOWED_URI: Z
  } = qh, re = null;
  const pe = Me({}, [...Gh, ...iu, ...su, ...au, ...Bh]);
  let le = null;
  const ae = Me({}, [...Uh, ...ou, ...zh, ...Ea]);
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
  let An = Me({}, ["mi", "mo", "mn", "ms", "mtext"]), Et = Me({}, ["annotation-xml"]);
  const aa = Me({}, ["title", "style", "font", "a", "script"]);
  let Tn = null;
  const Po = ["application/xhtml+xml", "text/html"], oa = "text/html";
  let Be = null, ie = null;
  const hi = n.createElement("form"), Br = function(B) {
    return B instanceof RegExp || B instanceof Function;
  }, jn = function() {
    let B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ie && ie === B)) {
      if ((!B || typeof B != "object") && (B = {}), B = nr(B), Tn = // eslint-disable-next-line unicorn/prefer-includes
      Po.indexOf(B.PARSER_MEDIA_TYPE) === -1 ? oa : B.PARSER_MEDIA_TYPE, Be = Tn === "application/xhtml+xml" ? nu : Fa, re = fn(B, "ALLOWED_TAGS") ? Me({}, B.ALLOWED_TAGS, Be) : pe, le = fn(B, "ALLOWED_ATTR") ? Me({}, B.ALLOWED_ATTR, Be) : ae, Gr = fn(B, "ALLOWED_NAMESPACES") ? Me({}, B.ALLOWED_NAMESPACES, nu) : Pt, ye = fn(B, "ADD_URI_SAFE_ATTR") ? Me(nr(sa), B.ADD_URI_SAFE_ATTR, Be) : sa, li = fn(B, "ADD_DATA_URI_TAGS") ? Me(nr(Se), B.ADD_DATA_URI_TAGS, Be) : Se, Ln = fn(B, "FORBID_CONTENTS") ? Me({}, B.FORBID_CONTENTS, Be) : ve, Ee = fn(B, "FORBID_TAGS") ? Me({}, B.FORBID_TAGS, Be) : nr({}), Ce = fn(B, "FORBID_ATTR") ? Me({}, B.FORBID_ATTR, Be) : nr({}), ln = fn(B, "USE_PROFILES") ? B.USE_PROFILES : !1, In = B.ALLOW_ARIA_ATTR !== !1, Le = B.ALLOW_DATA_ATTR !== !1, ce = B.ALLOW_UNKNOWN_PROTOCOLS || !1, N = B.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ne = B.SAFE_FOR_TEMPLATES || !1, De = B.SAFE_FOR_XML !== !1, ke = B.WHOLE_DOCUMENT || !1, pr = B.RETURN_DOM || !1, ne = B.RETURN_DOM_FRAGMENT || !1, Fr = B.RETURN_TRUSTED_TYPE || !1, Dr = B.FORCE_BODY || !1, rs = B.SANITIZE_DOM !== !1, bn = B.SANITIZE_NAMED_PROPS || !1, _e = B.KEEP_CONTENT !== !1, un = B.IN_PLACE || !1, Z = B.ALLOWED_URI_REGEXP || Md, mr = B.NAMESPACE || de, An = B.MATHML_TEXT_INTEGRATION_POINTS || An, Et = B.HTML_INTEGRATION_POINTS || Et, oe = B.CUSTOM_ELEMENT_HANDLING || {}, B.CUSTOM_ELEMENT_HANDLING && Br(B.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (oe.tagNameCheck = B.CUSTOM_ELEMENT_HANDLING.tagNameCheck), B.CUSTOM_ELEMENT_HANDLING && Br(B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (oe.attributeNameCheck = B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), B.CUSTOM_ELEMENT_HANDLING && typeof B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (oe.allowCustomizedBuiltInElements = B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ne && (Le = !1), ne && (pr = !0), ln && (re = Me({}, Bh), le = [], ln.html === !0 && (Me(re, Gh), Me(le, Uh)), ln.svg === !0 && (Me(re, iu), Me(le, ou), Me(le, Ea)), ln.svgFilters === !0 && (Me(re, su), Me(le, ou), Me(le, Ea)), ln.mathMl === !0 && (Me(re, au), Me(le, zh), Me(le, Ea))), B.ADD_TAGS && (typeof B.ADD_TAGS == "function" ? $.tagCheck = B.ADD_TAGS : (re === pe && (re = nr(re)), Me(re, B.ADD_TAGS, Be))), B.ADD_ATTR && (typeof B.ADD_ATTR == "function" ? $.attributeCheck = B.ADD_ATTR : (le === ae && (le = nr(le)), Me(le, B.ADD_ATTR, Be))), B.ADD_URI_SAFE_ATTR && Me(ye, B.ADD_URI_SAFE_ATTR, Be), B.FORBID_CONTENTS && (Ln === ve && (Ln = nr(Ln)), Me(Ln, B.FORBID_CONTENTS, Be)), _e && (re["#text"] = !0), ke && Me(re, ["html", "head", "body"]), re.table && (Me(re, ["tbody"]), delete Ee.tbody), B.TRUSTED_TYPES_POLICY) {
        if (typeof B.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ps('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof B.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ps('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        V = B.TRUSTED_TYPES_POLICY, J = V.createHTML("");
      } else
        V === void 0 && (V = jw(M, u)), V !== null && typeof J == "string" && (J = V.createHTML(""));
      Tt && Tt(B), ie = B;
    }
  }, ss = Me({}, [...iu, ...su, ...Bw]), fi = Me({}, [...au, ...Uw]), ua = function(B) {
    let Q = H(B);
    (!Q || !Q.tagName) && (Q = {
      namespaceURI: mr,
      tagName: "template"
    });
    const he = Fa(B.tagName), Ue = Fa(Q.tagName);
    return Gr[B.namespaceURI] ? B.namespaceURI === ci ? Q.namespaceURI === de ? he === "svg" : Q.namespaceURI === Nt ? he === "svg" && (Ue === "annotation-xml" || An[Ue]) : !!ss[he] : B.namespaceURI === Nt ? Q.namespaceURI === de ? he === "math" : Q.namespaceURI === ci ? he === "math" && Et[Ue] : !!fi[he] : B.namespaceURI === de ? Q.namespaceURI === ci && !Et[Ue] || Q.namespaceURI === Nt && !An[Ue] ? !1 : !fi[he] && (aa[he] || !ss[he]) : !!(Tn === "application/xhtml+xml" && Gr[B.namespaceURI]) : !1;
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
    Tn === "application/xhtml+xml" && mr === de && (B = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + B + "</body></html>");
    const Ue = V ? V.createHTML(B) : B;
    if (mr === de)
      try {
        Q = new x().parseFromString(Ue, Tn);
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
    return B && he && et.insertBefore(n.createTextNode(he), et.childNodes[0] || null), mr === de ? w.call(Q, ke ? "html" : "body")[0] : ke ? Q.documentElement : et;
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
    if ($e(A.beforeSanitizeElements, B, null), gi(B))
      return rt(B), !0;
    const he = Be(B.nodeName);
    if ($e(A.uponSanitizeElement, B, {
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
    return B instanceof p && !ua(B) || (he === "noscript" || he === "noembed" || he === "noframes") && kt(/<\/no(script|embed|frames)/i, B.innerHTML) ? (rt(B), !0) : (Ne && B.nodeType === vs.text && (Q = B.textContent, _a([T, G, R], (Ue) => {
      Q = ds(Q, Ue, " ");
    }), B.textContent !== Q && (gs(e.removed, {
      element: B.cloneNode()
    }), B.textContent = Q)), $e(A.afterSanitizeElements, B, null), !1);
  }, vr = function(B, Q, he) {
    if (rs && (Q === "id" || Q === "name") && (he in n || he in hi))
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
    $e(A.beforeSanitizeAttributes, B, null);
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
      if (he.attrName = Zn, he.attrValue = Re, he.keepAttr = !0, he.forceKeepAttr = void 0, $e(A.uponSanitizeAttribute, B, he), Re = he.attrValue, bn && (Zn === "id" || Zn === "name") && (Cn(ze, B), Re = No + Re), De && kt(/((--!?|])>)|<\/(style|title|textarea)/i, Re)) {
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
      Ne && _a([T, G, R], (pi) => {
        Re = ds(Re, pi, " ");
      });
      const Kn = Be(B.nodeName);
      if (!vr(Kn, Zn, Re)) {
        Cn(ze, B);
        continue;
      }
      if (V && typeof M == "object" && typeof M.getAttributeType == "function" && !it)
        switch (M.getAttributeType(Kn, Zn)) {
          case "TrustedHTML": {
            Re = V.createHTML(Re);
            break;
          }
          case "TrustedScriptURL": {
            Re = V.createScriptURL(Re);
            break;
          }
        }
      if (Re !== os)
        try {
          it ? B.setAttributeNS(it, ze, Re) : B.setAttribute(ze, Re), gi(B) ? rt(B) : Fh(e.removed);
        } catch {
          Cn(ze, B);
        }
    }
    $e(A.afterSanitizeAttributes, B, null);
  }, as = function ge(B) {
    let Q = null;
    const he = la(B);
    for ($e(A.beforeSanitizeShadowDOM, B, null); Q = he.nextNode(); )
      $e(A.uponSanitizeShadowNode, Q, null), di(Q), Pn(Q), Q.content instanceof c && ge(Q.content);
    $e(A.afterSanitizeShadowDOM, B, null);
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
        return V && Fr ? V.createHTML(ge) : ge;
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
` + it), Ne && _a([T, G, R], (Ft) => {
      it = ds(it, Ft, " ");
    }), V && Fr ? V.createHTML(it) : it;
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
    typeof B == "function" && gs(A[ge], B);
  }, e.removeHook = function(ge, B) {
    if (B !== void 0) {
      const Q = Pw(A[ge], B);
      return Q === -1 ? void 0 : Ow(A[ge], Q, 1)[0];
    }
    return Fh(A[ge]);
  }, e.removeHooks = function(ge) {
    A[ge] = [];
  }, e.removeAllHooks = function() {
    A = Yh();
  }, e;
}
var Ld = bd(), Zw = /* @__PURE__ */ on("<div><!></div>"), Kw = /* @__PURE__ */ on('<div><button type="button"><!></button> <!></div>');
function Qw(t, e) {
  Zi(e, !0);
  const n = () => xd(Dl, "$controlsStore", s), [s, u] = wd(), c = /* @__PURE__ */ wr(() => e.controlOptions?.icon ? Ld.sanitize(e.controlOptions.icon.trim()) : null), f = Dg("gm"), h = f.control.getDefaultPosition(), p = () => {
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
              var A = Ch();
              xn((T) => Di(A, T), [() => e.controlOptions.title.slice(0, 2)]), Ke(b, A);
            }, w = (b) => {
              var A = Ch();
              xn(() => Di(A, e.control.targetMode)), Ke(b, A);
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
        var V = (J) => {
          var U = Zw();
          let W;
          var E = En(U);
          Aw(E, {
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
          e.controlOptions.active && J(V);
        });
      }
      xn(() => {
        Os(M, 1, tw(n().settings.controlsStyles.controlContainerClass), "svelte-1q85gr9"), Mr(S, "id", `id_${e.control.type}_${e.control.targetMode}`), C = Os(S, 1, `${n().settings.controlsStyles.controlButtonClass} ${e.control.type}-${e.control.targetMode}`, "svelte-1q85gr9", C, { active: e.controlOptions.active }), Mr(S, "title", e.controlOptions.title);
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
function Hh(t, { delay: e = 0, duration: n = 400, easing: s = ek, axis: u = "y" } = {}) {
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
    duration: n,
    easing: s,
    css: (O) => `overflow: hidden;opacity: ${Math.min(O * 20, 1) * f};${h}: ${O * p}px;padding-${d[0]}: ${O * _}px;padding-${d[1]}: ${O * x}px;margin-${d[0]}: ${O * M}px;margin-${d[1]}: ${O * S}px;border-${d[0]}-width: ${O * C}px;border-${d[1]}-width: ${O * F}px;min-${h}: 0`
  };
}
var tk = /* @__PURE__ */ on('<div><button class="gm-control-button"><!></button></div>'), nk = /* @__PURE__ */ on("<div></div>"), rk = /* @__PURE__ */ on("<div></div>"), ik = /* @__PURE__ */ on('<div class="gm-reactive-controls svelte-qjysea"><!> <!></div>');
function sk(t, e) {
  Zi(e, !0);
  const n = () => xd(Dl, "$controlsStore", s), [s, u] = wd();
  let c = /* @__PURE__ */ gn(!0), f = /* @__PURE__ */ wr(() => n().settings.controlsCollapsible), h = /* @__PURE__ */ wr(() => n().settings.controlsStyles);
  const p = (F, O) => n().controls?.[F]?.[O] || null, d = () => {
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
      Js(O, 5, () => Object.entries(n().options), ([I, H]) => I, (I, H) => {
        var V = /* @__PURE__ */ wr(() => Wa(we(H), 2));
        let J = () => we(V)[0], U = () => we(V)[1];
        var W = nk();
        Js(W, 21, () => Object.entries(U()), ([E, w]) => E, (E, w) => {
          var b = /* @__PURE__ */ wr(() => Wa(we(w), 2));
          let A = () => we(b)[0], T = () => we(b)[1];
          const G = /* @__PURE__ */ wr(() => p(J(), A()));
          var R = Lr(), P = Hn(R);
          {
            var D = (Y) => {
              Qw(Y, {
                get control() {
                  return we(G);
                },
                get controlOptions() {
                  return T();
                }
              });
            };
            tn(P, (Y) => {
              we(G) && Y(D);
            });
          }
          Ke(E, R);
        }), xn(() => Os(W, 1, `${we(h).controlGroupClass} group-${J()}`, "svelte-qjysea")), Ke(I, W);
      }), Rh(1, O, () => Hh, () => ({ duration: 180 })), Rh(2, O, () => Hh, () => ({ duration: 140 })), Ke(F, O);
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
const tt = (t) => Object.keys(t), Hu = (t) => Object.values(t), Ar = (t, e) => e.includes(t);
class ok extends ak {
  controls = sn(Xf);
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
    return nc(e) ? (["mode_started", "mode_ended"].includes(e.action) && this.updateReactivePanel(), { next: !0 }) : { next: !0 };
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
    e.set("gm", this.gm), this.reactiveControls = Xx(sk, {
      target: this.container,
      context: e
    }), this.updateReactivePanel();
  }
  updateReactivePanel() {
    Dl.update(() => ({
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
    return tt(this.controls).forEach((n) => {
      const s = this.controls[n];
      return Object.keys(s).forEach((u) => {
        const c = u, f = this.getControl({ modeType: n, modeName: c }), h = this.gm.options.getControlOptions({
          modeType: n,
          modeName: c
        });
        f && h && e({ control: f, controlOptions: h });
      });
    });
  }
  getControl({
    modeType: e,
    modeName: n
  }) {
    return e && n && this.controls[e][n] || null;
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
  async processEvent(e, n) {
    await this.fireToMap({
      type: "system",
      eventName: e.split(":")[1],
      payload: {
        ...n,
        level: "user"
      }
    }), n.action === "mode_start" || n.action === "mode_end" ? await this.forwardModeToggledEvent(n) : n.action === "feature_created" ? await this.forwardFeatureCreated(n) : n.action === "feature_removed" ? await this.forwardFeatureRemoved(n) : n.action === "feature_updated" ? await this.forwardFeatureUpdated(n) : n.action === "feature_edit_start" ? await this.forwardFeatureEditStart(n) : n.action === "feature_edit_end" ? await this.forwardFeatureEditEnd(n) : (n.action === "loaded" || n.action === "unloaded") && await this.forwardGeomanLoaded(n);
  }
  async forwardModeToggledEvent(e) {
    const n = e.action === "mode_start";
    if (e.actionType === "draw") {
      const s = "globaldrawmodetoggled", u = {
        name: `${ot}:${s}`,
        actionType: e.actionType,
        action: e.action,
        enabled: n,
        shape: e.mode,
        map: this.map
      };
      await this.fireToMap({ type: "converted", eventName: s, payload: u });
      const c = n ? "drawstart" : "drawend", f = {
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
        enabled: n,
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
        enabled: n,
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
    const n = {
      name: `${ot}:create`,
      actionType: e.actionType,
      action: e.action,
      shape: e.mode,
      feature: e.featureData,
      map: this.map
    };
    await this.fireToMap({ type: "converted", eventName: "create", payload: n });
  }
  async forwardFeatureRemoved(e) {
    const n = {
      name: `${ot}:remove`,
      actionType: e.actionType,
      action: e.action,
      shape: e.mode,
      feature: e.featureData,
      map: this.map
    };
    await this.fireToMap({ type: "converted", eventName: "remove", payload: n });
  }
  async forwardFeatureUpdated(e) {
    const n = this.getConvertedEditModeName(e.mode), s = ["lasso"], u = {
      name: `${ot}:${n}`,
      actionType: e.actionType,
      action: e.action,
      map: this.map
    };
    e.sourceFeatures.length === 1 && !s.includes(e.mode) ? u.originalFeature = e.sourceFeatures[0] : u.originalFeatures = e.sourceFeatures, e.targetFeatures.length === 1 && !s.includes(e.mode) ? (u.feature = e.targetFeatures[0], u.shape = u.feature.shape) : u.features = e.targetFeatures, await this.fireToMap({ type: "converted", eventName: `${n}`, payload: u });
  }
  async forwardFeatureEditStart(e) {
    const n = this.getConvertedEditModeName(e.mode), s = {
      name: `${ot}:${n}start`,
      actionType: e.actionType,
      action: e.action,
      shape: e.feature.shape,
      feature: e.feature,
      map: this.map
    };
    await this.fireToMap({ type: "converted", eventName: `${n}start`, payload: s });
  }
  async forwardFeatureEditEnd(e) {
    const n = this.getConvertedEditModeName(e.mode), s = {
      name: `${ot}:${n}end`,
      actionType: e.actionType,
      action: e.action,
      shape: e.feature.shape,
      feature: e.feature,
      map: this.map
    };
    await this.fireToMap({ type: "converted", eventName: `${n}end`, payload: s });
  }
  async forwardGeomanLoaded(e) {
    const n = {
      name: `${ot}:${e.action}`,
      actionType: e.actionType,
      action: e.action,
      map: this.map,
      [ot]: this.gm
    };
    await this.fireToMap({
      type: "converted",
      eventName: `${n.action}`,
      payload: n
    });
  }
  async fireToMap({
    type: e,
    eventName: n,
    payload: s
  }) {
    const c = `${e === "system" ? se : ot}:${n}`;
    "feature" in s && s.feature?.source && await s.feature.source.waitForLoad(), this.globalEventsListener?.(s), this.gm.mapAdapter.fire(c, s);
  }
  getConvertedEditModeName(e) {
    return e === "change" ? "edit" : e;
  }
}
const Ad = (t) => kn(t) && t.name === `${se}:control:switch`, kn = (t) => !!(t && typeof t == "object" && ["level", "name", "actionType", "action"].every((n) => n in t)), lk = (t) => !!(t && typeof t == "object" && ["type", "originalEvent", "target"].every((n) => n in t));
class ck {
  gm;
  forwarder;
  mapEventHandlers = {};
  gmEventHandlers = {};
  constructor(e) {
    this.gm = e, this.forwarder = new uk(e);
  }
  fireEvent(e, n) {
    const s = this.gmEventHandlers[e];
    if (!s)
      return;
    const { controlHandler: u } = s;
    u(n), this.forwarder.processEvent(e, n).then();
  }
  attachEvents(e) {
    tt(e).forEach((n) => {
      const s = e[n];
      s && this.on(n, s);
    });
  }
  detachEvents(e) {
    tt(e).forEach((n) => {
      const s = e[n];
      s && this.off(n, s);
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
  on(e, n) {
    e.startsWith(se) ? this.onGmEvent(e, n) : this.onMapEvent(e, n);
  }
  onGmEvent(e, n) {
    this.gmEventHandlers[e] || (this.gmEventHandlers[e] = this.createEventSection(e)), this.gmEventHandlers[e]?.handlers.unshift(n);
  }
  onMapEvent(e, n) {
    if (!this.mapEventHandlers[e]) {
      const s = this.createEventSection(e);
      this.gm.mapAdapter.on(e, s.controlHandler), this.mapEventHandlers[e] = s;
    }
    this.mapEventHandlers[e]?.handlers.unshift(n);
  }
  off(e, n) {
    e.startsWith(`${se}`) ? this.offGmEvent(e, n) : this.offMapEvent(e, n);
  }
  offGmEvent(e, n) {
    const s = this.gmEventHandlers[e]?.handlers || [], u = s.findIndex((c) => n === c);
    u === -1 ? te.warn("MapEvents: handler not found", e, n) : (s.splice(u, 1), s.length === 0 && delete this.gmEventHandlers[e]);
  }
  offMapEvent(e, n) {
    const s = this.mapEventHandlers[e]?.handlers || [], u = s.findIndex((c) => n === c);
    if (u === -1)
      te.warn("MapEvents: handler not found", e, n);
    else if (s.splice(u, 1), s.length === 0) {
      const c = this.mapEventHandlers[e]?.controlHandler;
      c && this.gm.mapAdapter.off(e, c), delete this.mapEventHandlers[e];
    }
  }
  createEventSection(e) {
    return {
      handlers: [],
      controlHandler: (n) => {
        let s;
        if (kn(n) && e.startsWith(`${se}`) ? s = this.gmEventHandlers[e] : s = this.mapEventHandlers[e], !s) {
          te.debug(`No handlers for eventName: "${e}"`);
          return;
        }
        s.handlers.some((u) => {
          let c;
          return kn(n) || lk(n) ? c = u(n) : te.error("EventsBus: unknown event type", n), c && typeof c == "object" && "next" in c ? !c.next : (te.error('EventsBus: handler should return an object with a "next" property'), !1);
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
    const { sectionName: n, modeName: s } = this.getControlIds(e) || {};
    this.getControl(e)?.settings.exclusive && this.gm.control.eachControlWithOptions((c) => {
      const f = c.control.type, h = c.control.targetMode;
      f === n && h === s || c.controlOptions.active && c.control.settings.exclusive && this.gm.options.disableMode(f, h);
    });
  }
  trackRelatedModes(e) {
    nc(e) && this.gm.control.eachControlWithOptions((n) => {
      const s = n.control, { type: u, targetMode: c } = s;
      s.settings.enabledBy?.includes(e.mode) && (e.action === "mode_start" ? (this.gm.options.isModeEnabled(u, c) && this.gm.options.disableMode(u, c), this.gm.options.enableMode(u, c)) : e.action === "mode_end" ? this.gm.options.disableMode(u, c) : te.error("Unknown mode action", e.action));
    });
  }
  getControl(e) {
    const { modeName: n, sectionName: s } = this.getControlIds(e) || {};
    return n && s ? this.gm.control.getControl({ modeType: s, modeName: n }) : null;
  }
  getControlOptions(e) {
    const { modeName: n, sectionName: s } = this.getControlIds(e) || {};
    return n && s ? this.gm.options.getControlOptions({ modeType: s, modeName: n }) : null;
  }
  getControlIds(e) {
    let n = null, s = null;
    return e.action === "mode_start" ? (n = e.actionType, s = e.mode) : Ad(e) && (n = e.section, s = e.target), n && s ? { sectionName: n, modeName: s } : null;
  }
}
class hk extends bo {
  eventHandlers = {
    [`${se}:control`]: this.handleControlEvent.bind(this)
  };
  constructor(e, n) {
    super(e), n.attachEvents(this.eventHandlers);
  }
  handleControlEvent(e) {
    return Ad(e) ? (this.getControl(e) || te.error("Control not found, event payload", e), { next: !0 }) : { next: !0 };
  }
}
const Td = ["draw", "edit", "helper"], fk = [...Td, "control"], Wr = [
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
  shape: (t) => typeof t == "string" && Ar(t, Cd),
  center: (t) => pk(t),
  xSemiAxis: (t) => typeof t == "number",
  ySemiAxis: (t) => typeof t == "number",
  angle: (t) => typeof t == "number",
  text: (t) => typeof t == "string",
  disableEdit: (t) => typeof t == "boolean"
};
class Fl {
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
function Sn(t, e, n = {}) {
  const s = { type: "Feature" };
  return (n.id === 0 || n.id) && (s.id = n.id), n.bbox && (s.bbox = n.bbox), s.properties = e || {}, s.geometry = t, s;
}
function zn(t, e, n = {}) {
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
  }, e, n);
}
function or(t, e, n = {}) {
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
  }, e, n);
}
function Hi(t, e, n = {}) {
  if (t.length < 2)
    throw new Error("coordinates must be an array of two or more positions");
  return Sn({
    type: "LineString",
    coordinates: t
  }, e, n);
}
function nt(t, e = {}) {
  const n = { type: "FeatureCollection" };
  return e.id && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.features = t, n;
}
function mk(t, e, n = {}) {
  return Sn({
    type: "MultiLineString",
    coordinates: t
  }, e, n);
}
function Gl(t, e, n = {}) {
  return Sn({
    type: "MultiPolygon",
    coordinates: t
  }, e, n);
}
function Bl(t, e = "kilometers") {
  const n = Rd[e];
  if (!n)
    throw new Error(e + " units is invalid");
  return t * n;
}
function Ul(t, e = "kilometers") {
  const n = Rd[e];
  if (!n)
    throw new Error(e + " units is invalid");
  return t / n;
}
function ei(t) {
  return t % (2 * Math.PI) * 180 / Math.PI;
}
function ut(t) {
  return t % 360 * Math.PI / 180;
}
function Dd(t, e = "kilometers", n = "kilometers") {
  if (!(t >= 0))
    throw new Error("length must be a positive number");
  return Bl(Ul(t, e), n);
}
function eo(t) {
  return !isNaN(t) && t !== null && !Array.isArray(t);
}
function Lo(t) {
  return t !== null && typeof t == "object" && !Array.isArray(t);
}
function Nr(t, e, n) {
  if (t !== null)
    for (var s, u, c, f, h, p, d, v = 0, _ = 0, x, M = t.type, S = M === "FeatureCollection", C = M === "Feature", F = S ? t.features.length : 1, O = 0; O < F; O++) {
      d = S ? t.features[O].geometry : C ? t.geometry : t, x = d ? d.type === "GeometryCollection" : !1, h = x ? d.geometries.length : 1;
      for (var I = 0; I < h; I++) {
        var H = 0, V = 0;
        if (f = x ? d.geometries[I] : d, f !== null) {
          p = f.coordinates;
          var J = f.type;
          switch (v = n && (J === "Polygon" || J === "MultiPolygon") ? 1 : 0, J) {
            case null:
              break;
            case "Point":
              if (e(
                p,
                _,
                O,
                H,
                V
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
                  V
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
                    V
                  ) === !1)
                    return !1;
                  _++;
                }
                J === "MultiLineString" && H++, J === "Polygon" && V++;
              }
              J === "Polygon" && H++;
              break;
            case "MultiPolygon":
              for (s = 0; s < p.length; s++) {
                for (V = 0, u = 0; u < p[s].length; u++) {
                  for (c = 0; c < p[s][u].length - v; c++) {
                    if (e(
                      p[s][u][c],
                      _,
                      O,
                      H,
                      V
                    ) === !1)
                      return !1;
                    _++;
                  }
                  V++;
                }
                H++;
              }
              break;
            case "GeometryCollection":
              for (s = 0; s < f.geometries.length; s++)
                if (Nr(f.geometries[s], e, n) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Xn(t, e) {
  if (t.type === "Feature")
    e(t, 0);
  else if (t.type === "FeatureCollection")
    for (var n = 0; n < t.features.length && e(t.features[n], n) !== !1; n++)
      ;
}
function vk(t, e, n) {
  var s = n;
  return Xn(t, function(u, c) {
    c === 0 && n === void 0 ? s = u : s = e(s, u, c);
  }), s;
}
function Pr(t, e) {
  var n, s, u, c, f, h, p, d, v, _, x = 0, M = t.type === "FeatureCollection", S = t.type === "Feature", C = M ? t.features.length : 1;
  for (n = 0; n < C; n++) {
    for (h = M ? t.features[n].geometry : S ? t.geometry : t, d = M ? t.features[n].properties : S ? t.properties : {}, v = M ? t.features[n].bbox : S ? t.bbox : void 0, _ = M ? t.features[n].id : S ? t.id : void 0, p = h ? h.type === "GeometryCollection" : !1, f = p ? h.geometries.length : 1, u = 0; u < f; u++) {
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
function yk(t, e, n) {
  var s = n;
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
  Pr(t, function(n, s, u, c, f) {
    var h = n === null ? null : n.type;
    switch (h) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Sn(n, u, { bbox: c, id: f }),
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
    for (var d = 0; d < n.coordinates.length; d++) {
      var v = n.coordinates[d], _ = {
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
  const n = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Nr(t, (s) => {
    n[0] > s[0] && (n[0] = s[0]), n[1] > s[1] && (n[1] = s[1]), n[2] < s[0] && (n[2] = s[0]), n[3] < s[1] && (n[3] = s[1]);
  }), n;
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
function Jh(t, e) {
  return t.type === "FeatureCollection" ? "FeatureCollection" : t.type === "GeometryCollection" ? "GeometryCollection" : t.type === "Feature" && t.geometry !== null ? t.geometry.type : t.type;
}
function Gd(t, e, n, s = {}) {
  const u = Qe(t), c = ut(u[0]), f = ut(u[1]), h = ut(n), p = Ul(e, s.units), d = Math.asin(
    Math.sin(f) * Math.cos(p) + Math.cos(f) * Math.sin(p) * Math.cos(h)
  ), v = c + Math.atan2(
    Math.sin(h) * Math.sin(p) * Math.cos(f),
    Math.cos(p) - Math.sin(f) * Math.sin(d)
  ), _ = ei(v), x = ei(d);
  return zn([_, x], s.properties);
}
function _k(t, e, n = {}) {
  const s = n.steps || 64, u = n.properties ? n.properties : !Array.isArray(t) && t.type === "Feature" && t.properties ? t.properties : {}, c = [];
  for (let f = 0; f < s; f++)
    c.push(
      Gd(t, e, f * -360 / s, n).geometry.coordinates
    );
  return c.push(c[0]), or([c], u);
}
var Ek = _k;
function Bd(t, e = {}) {
  let n = 0, s = 0, u = 0;
  return Nr(
    t,
    function(c) {
      n += c[0], s += c[1], u++;
    },
    !0
  ), zn([n / u, s / u], e.properties);
}
var Ud = Bd;
function xk(t, e, n = {}) {
  let s;
  return n.final ? s = $h(Qe(e), Qe(t)) : s = $h(Qe(t), Qe(e)), s > 180 ? -(360 - s) : s;
}
function $h(t, e) {
  const n = ut(t[1]), s = ut(e[1]);
  let u = ut(e[0] - t[0]);
  u > Math.PI && (u -= 2 * Math.PI), u < -Math.PI && (u += 2 * Math.PI);
  const c = Math.log(
    Math.tan(s / 2 + Math.PI / 4) / Math.tan(n / 2 + Math.PI / 4)
  ), f = Math.atan2(u, c);
  return (ei(f) + 360) % 360;
}
function wk(t, e, n = {}) {
  const s = Qe(t), u = Qe(e);
  u[0] += u[0] - s[0] > 180 ? -360 : s[0] - u[0] > 180 ? 360 : 0;
  const c = kk(s, u);
  return Dd(c, "meters", n.units);
}
function kk(t, e, n) {
  n = n === void 0 ? at : Number(n);
  const s = n, u = t[1] * Math.PI / 180, c = e[1] * Math.PI / 180, f = c - u;
  let h = Math.abs(e[0] - t[0]) * Math.PI / 180;
  h > Math.PI && (h -= 2 * Math.PI);
  const p = Math.log(
    Math.tan(c / 2 + Math.PI / 4) / Math.tan(u / 2 + Math.PI / 4)
  ), d = Math.abs(p) > 1e-11 ? f / p : Math.cos(u);
  return Math.sqrt(
    f * f + d * d * h * h
  ) * s;
}
function Sk(t, e, n, s = {}) {
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
    n
  );
  return h[0] += h[0] - f[0] > 180 ? -360 : f[0] - h[0] > 180 ? 360 : 0, zn(h, s.properties);
}
function Mk(t, e, n, s) {
  s = s === void 0 ? at : Number(s);
  const u = e / s, c = t[0] * Math.PI / 180, f = ut(t[1]), h = ut(n), p = u * Math.cos(h);
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
function Ao(t) {
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
      return zl(t);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function zd(t) {
  const e = { type: "Feature" };
  return Object.keys(t).forEach((n) => {
    switch (n) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        e[n] = t[n];
    }
  }), e.properties = qd(t.properties), t.geometry == null ? e.geometry = null : e.geometry = zl(t.geometry), e;
}
function qd(t) {
  const e = {};
  return t && Object.keys(t).forEach((n) => {
    const s = t[n];
    typeof s == "object" ? s === null ? e[n] = null : Array.isArray(s) ? e[n] = s.map((u) => u) : e[n] = qd(s) : e[n] = s;
  }), e;
}
function Ik(t) {
  const e = { type: "FeatureCollection" };
  return Object.keys(t).forEach((n) => {
    switch (n) {
      case "type":
      case "features":
        return;
      default:
        e[n] = t[n];
    }
  }), e.features = t.features.map((n) => zd(n)), e;
}
function zl(t) {
  const e = { type: t.type };
  return t.bbox && (e.bbox = t.bbox), t.type === "GeometryCollection" ? (e.geometries = t.geometries.map((n) => zl(n)), e) : (e.coordinates = Yd(t.coordinates), e);
}
function Yd(t) {
  const e = t;
  return typeof e[0] != "object" ? e.slice() : e.map((n) => Yd(n));
}
var Hd = Ao;
function Jd(t, e, n) {
  if (n = n || {}, !Lo(n)) throw new Error("options is invalid");
  const s = n.pivot, u = n.mutate;
  if (!t) throw new Error("geojson is required");
  if (e == null || isNaN(e))
    throw new Error("angle is required");
  if (e === 0) return t;
  const c = s ?? Bd(t);
  return (u === !1 || u === void 0) && (t = Ao(t)), Nr(t, function(f) {
    const p = xk(c, f) + e, d = wk(c, f), v = qt(
      Sk(c, d, p)
    );
    f[0] = v[0], f[1] = v[1];
  }), t;
}
var bk = Jd;
function Xh(t, e, n, s) {
  s = s || {};
  let u = s.steps || 64;
  const c = s.units || "kilometers";
  let f = s.angle || 0;
  const h = s.pivot || t, p = s.properties || {};
  if (!t) throw new Error("center is required");
  if (!e) throw new Error("xSemiAxis is required");
  if (!n) throw new Error("ySemiAxis is required");
  if (!Lo(s)) throw new Error("options must be an object");
  if (!eo(u)) throw new Error("steps must be a number");
  if (!eo(f)) throw new Error("angle must be a number");
  const d = Qe(Jd(zn(Qe(t)), f, { pivot: h }));
  f = -90 + f, u = Math.ceil(u / 4);
  const v = [], _ = [], x = e, M = n, S = M, C = (x - M) / (Math.PI / 2), F = (x + M) * Math.PI / 4, O = 0.5, I = u;
  let H = 0, V = 0;
  for (let U = 0; U < u; U++)
    V += H, C === 0 ? H = F / I / S : H = (-(C * V + S) + Math.sqrt(Math.pow(C * V + S, 2) - 4 * (O * C) * -(F / I))) / (2 * (O * C)), V != 0 && v.push(V);
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
function $d(t, e, n = {}) {
  if (n.final === !0)
    return Lk(t, e);
  const s = Qe(t), u = Qe(e), c = ut(s[0]), f = ut(u[0]), h = ut(s[1]), p = ut(u[1]), d = Math.sin(f - c) * Math.cos(p), v = Math.cos(h) * Math.sin(p) - Math.sin(h) * Math.cos(p) * Math.cos(f - c);
  return ei(Math.atan2(d, v));
}
function Lk(t, e) {
  let n = $d(e, t);
  return n = (n + 180) % 360, n;
}
var to = $d;
function zt(t, e, n = {}) {
  var s = Qe(t), u = Qe(e), c = ut(u[1] - s[1]), f = ut(u[0] - s[0]), h = ut(s[1]), p = ut(u[1]), d = Math.pow(Math.sin(c / 2), 2) + Math.pow(Math.sin(f / 2), 2) * Math.cos(h) * Math.cos(p);
  return Bl(
    2 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d)),
    n.units
  );
}
var Xd = zt;
function Ju(t, e = {}) {
  const n = ta(t);
  switch (!e.properties && t.type === "Feature" && (e.properties = t.properties), n.type) {
    case "Polygon":
      return Vd(n, e);
    case "MultiPolygon":
      return Wd(n, e);
    default:
      throw new Error("invalid poly");
  }
}
function Vd(t, e = {}) {
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
const Vh = (t, e) => t[0] === e[0] && t[1] === e[1], Ds = (t) => t.type === "Feature" && t.geometry.type === "LineString", Wh = (t) => t.type === "Feature" && t.geometry.type === "MultiLineString", ql = (t) => t.type === "Feature" && t.geometry.type === "Polygon", Yl = (t) => t.type === "Feature" && t.geometry.type === "MultiPolygon", jh = (t) => ({
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
}), no = (t) => Array.isArray(t) && t.length >= 2 && t.length <= 3 && t.every((e) => typeof e == "number"), na = (t, e, n = !1) => {
  let s = 0;
  const u = ["features", "geometries", "geometry", "coordinates"], c = (f, h, p = !1) => {
    no(f) ? (e({ coordinate: f, path: h }, s), s += 1) : Array.isArray(f) ? f.forEach((d, v) => {
      p && n && v === f.length - 1 && no(d) || c(d, [...h, v], p);
    }) : typeof f == "object" && f !== null && tt(f).forEach((d) => {
      const v = f[d];
      if (u.includes(d) && v) {
        const _ = "type" in f && f.type, x = _ === "Polygon" || _ === "MultiPolygon";
        c(v, [...h, d], x);
      }
    });
  };
  c(t, []);
}, Ak = (t, e) => {
  let n = { coordinate: [0, 0], path: [] }, s = -1;
  try {
    na(t, (u, c) => {
      if (e[0] === u.coordinate[0] && e[1] === u.coordinate[1])
        throw s = c, n = u, new Error("stop");
    });
  } catch {
    if (n)
      return {
        index: s,
        coordinate: n.coordinate,
        path: n.path
      };
  }
  return null;
}, Hl = (t, e) => {
  let n = 0;
  const s = ["features", "geometries", "geometry", "coordinates"], u = (c, f, h, p) => {
    no(c) && no(f) ? (e(
      {
        start: { coordinate: [...c], path: h },
        end: { coordinate: [...f], path: p }
      },
      n
    ), n += 1) : Array.isArray(c) ? c.forEach((d, v) => {
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
}, To = (t, e) => {
  let n = {
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
          throw n = { absCoordIndex: u, featureIndex: c, multiFeatureIndex: f, geometryIndex: h }, new Error("found");
      }
    );
  } catch {
  }
  return n;
}, fI = (t, e, n = {}) => ({
  type: "Feature",
  properties: n,
  geometry: {
    type: "LineString",
    coordinates: [t, e]
  }
}), bi = (t, e) => {
  const [n, s] = t, [u, c] = e, f = Math.min(n, u), h = Math.min(s, c), p = Math.max(n, u), d = Math.max(s, c);
  return [f, h, p, d];
}, $u = (t, e) => {
  const n = bi(t, e), s = [n[0], n[1]], u = [n[2], n[3]], c = s[0], f = s[1], h = u[0], p = u[1];
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
}, Zd = (t) => [t.geometry.coordinates[0], t.geometry.coordinates[1]], Jl = (t) => {
  const e = Fd(t);
  return [
    [e[0], e[1]],
    // South-West (min-x, min-y)
    [e[2], e[3]]
    // North-East (max-x, max-y)
  ];
}, Tk = (t) => [t[0][0], t[0][1], t[1][0], t[1][1]], Ck = (t, e) => {
  const [n, s, u, c] = t, [f, h] = e;
  return f >= n && f <= u && h >= s && h <= c;
}, gI = (t, e) => {
  const n = Tk(t);
  return Ck(n, e);
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
    (n) => {
      e.push([n[0], n[1]]);
    },
    !0
  ), e;
}, $l = (t) => {
  const e = Nk(t);
  return e.some((n) => !Wi(e[0], n));
}, Kd = (t) => {
  let e = null;
  try {
    na(t, (n) => {
      throw e = n.coordinate, new Error("found");
    });
  } catch {
    return e;
  }
  return null;
}, Ga = (t, e) => Math.sqrt((t[0] - e[0]) ** 2 + (t[1] - e[1]) ** 2), Pk = (t, e, n) => {
  const [s, u] = [t[0], t[1]], [c, f] = [e[0], e[1]], [h, p] = [n[0], n[1]], d = c - s, v = f - u, _ = h - s, x = p - u, M = _ * d + x * v, S = d * d + v * v;
  let C = M / S;
  return C = Math.max(0, Math.min(1, C)), [s + C * d, u + C * v];
}, Ok = (t, e) => {
  const { absCoordIndex: n } = To(t, e);
  return n !== -1 ? (t.geometry.coordinates.splice(n, 1), !0) : !1;
}, Rk = (t, e) => {
  const n = To(t, e);
  if (n.absCoordIndex !== -1) {
    const s = [n.geometryIndex], u = Bi(
      t.geometry.coordinates,
      s
    ), c = u.findIndex((f) => Wi(f, e));
    return u.length <= 4 ? (t.geometry.coordinates.splice(n.geometryIndex, 1), !0) : (u.splice(c, 1), c === 0 && (u[u.length - 1] = [...u[0]]), !0);
  }
  return !1;
}, Dk = (t, e) => {
  const n = To(t, e);
  if (n.absCoordIndex !== -1) {
    const s = [
      n.multiFeatureIndex,
      n.geometryIndex
    ], u = Bi(
      t.geometry.coordinates,
      s
    ), c = u.findIndex((f) => Wi(f, e));
    if (u.length <= 4) {
      s.pop();
      const f = Bi(
        t.geometry.coordinates,
        n.multiFeatureIndex
      );
      return f.splice(n.geometryIndex, 1), f.length === 0 && t.geometry.coordinates.splice(n.multiFeatureIndex, 1), !0;
    }
    return u.splice(c, 1), c === 0 && (u[u.length - 1] = [...u[0]]), !0;
  }
  return !1;
}, Fk = (t, e) => Ds(t) ? Ok(t, e) : ql(t) ? Rk(t, e) : Yl(t) ? Dk(t, e) : !1, dI = (t) => {
  let e = 0;
  return Hl(t, (n) => {
    e += zt(n.start.coordinate, n.end.coordinate, {
      units: "meters"
    });
  }), e;
}, pI = (t) => {
  const e = {
    type: "FeatureCollection",
    features: []
  };
  return t.features.forEach((n) => {
    if (Ds(n))
      e.features.push(n);
    else if (ql(n)) {
      const s = Vd(n);
      Ds(s) ? e.features.push(s) : Wh(s) && jh(s).features.forEach((c) => {
        e.features.push(c);
      });
    } else Yl(n) ? Wd(n).features.forEach((u) => {
      Ds(u) ? e.features.push(u) : Wh(u) && jh(u).features.forEach((f) => {
        e.features.push(f);
      });
    }) : te.warn("AutoTraceHelper.getFeaturesGeoJsonAsLines: Feature is not supported", n);
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
}), Xl = ({
  center: t,
  radius: e,
  steps: n = 80
}) => {
  const s = Ek(t, e, {
    steps: n,
    units: "meters"
  });
  return s.geometry.coordinates[0][0] = [...s.geometry.coordinates[0][0]], s;
}, Zh = ({
  center: t,
  xSemiAxisLngLat: e,
  rimLngLat: n
}) => {
  let s = zt(t, e, { units: "meters" });
  s === 0 && (s = 1);
  const u = to(t, e) - 90;
  let c = 0;
  if (n) {
    const h = -u * Math.PI / 180, d = -(to(t, n) - 90) * Math.PI / 180, v = zt(t, n, { units: "meters" }), _ = v * Math.cos(d), x = v * Math.sin(d), M = _ * Math.cos(h) + x * Math.sin(h), S = _ * -Math.sin(h) + x * Math.cos(h), C = M * M / (s * s);
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
  ySemiAxis: n,
  angle: s,
  properties: u = {}
}) => {
  const c = {
    steps: Qd,
    angle: s,
    units: "meters"
  };
  if (n === void 0 || n === 0) {
    const h = Xh(t, e, 1, c);
    return Hi(h.geometry.coordinates[0].slice(0, 41), {
      shape: "line"
    });
  }
  const f = Xh(t, e, n, {
    ...c,
    properties: {
      ...u,
      [`${It}shape`]: "ellipse",
      [`${It}center`]: t,
      [`${It}xSemiAxis`]: e,
      [`${It}ySemiAxis`]: n,
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
    if (typeof e == "string" && Ar(e, Cd))
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
  getShapeProperty(e, n) {
    const s = n?.properties || this._geoJson?.properties || {}, u = xa[e], c = s[`${It}${e}`] ?? s[e];
    if (u && u(c))
      return c;
  }
  setShapeProperty(e, n) {
    if (!this._geoJson) {
      te.error("FeatureData.setShapeProperty(): geojson is not set");
      return;
    }
    this._geoJson.properties[`${It}${e}`] = n, this.updateGeoJsonProperties(this._geoJson.properties);
  }
  deleteShapeProperty(e) {
    if (!this._geoJson) {
      te.error("FeatureData.deleteShapeProperty(): geojson is not set");
      return;
    }
    delete this._geoJson.properties[`${It}${e}`], this.updateGeoJsonProperties(this._geoJson.properties);
  }
  parseGmShapeProperties(e) {
    const n = this.getShapeProperty("shape", e) || this.gm.features.getFeatureShapeByGeoJson(e);
    n || te.error(`FeatureData.importGmShapeProperties(): unknown shape: ${n}`);
    const u = {
      ...Object.fromEntries(
        tt(xa).map((c) => [c, this.getShapeProperty(c, e)])
      ),
      id: this.id,
      shape: n || void 0
    };
    return Object.fromEntries(
      tt(u).filter((c) => u[c] !== void 0).map((c) => [`${It}${c}`, u[c]])
    );
  }
  parseExtraProperties(e) {
    const n = sn(e.properties) || {};
    return tt(xa).forEach((s) => {
      delete n[s], delete n[`${It}${s}`];
    }), n;
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
      e.instance instanceof Fl ? e.instance.remove() : this.gm.features.delete(e.instance);
    }), this.markers = /* @__PURE__ */ new Map();
  }
  updateGeoJsonGeometry(e) {
    const n = this.getGeoJson();
    if (!n)
      throw new Error(`Feature not found: "${this.id}"`);
    this._geoJson = { ...n, geometry: e };
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
    const n = { update: [this._geoJson] };
    this.gm.features.updateManager.updateSource({
      diff: n,
      sourceName: this.sourceName
    });
  }
  setGeoJsonCustomProperties(e) {
    if (!this._geoJson)
      throw new Error(`Feature not found: "${this.id}"`);
    const n = this.parseGmShapeProperties(this._geoJson);
    this._geoJson.properties = { ...e, ...n };
    const s = { update: [this._geoJson] };
    this.gm.features.updateManager.updateSource({
      diff: s,
      sourceName: this.sourceName
    });
  }
  updateGeoJsonCustomProperties(e) {
    if (!this._geoJson)
      throw new Error(`Feature not found: "${this.id}"`);
    const n = this.parseGmShapeProperties(this._geoJson);
    this._geoJson.properties = {
      ...this._geoJson.properties,
      ...e,
      ...n
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
    const n = tt(xa).map(
      (f) => `${It}${f}`
    ), s = e.filter((f) => !n.includes(f)), u = { ...this._geoJson.properties };
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
      const n = Zd(Ud(e));
      this.setShapeProperty("center", n);
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
  changeSource({ sourceName: e, atomic: n }) {
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
      c.instance instanceof ro && c.instance.changeSource({ sourceName: e, atomic: n });
    });
  }
  fireFeatureUpdatedEvent({ mode: e }) {
    const n = {
      name: `${se}:edit:feature_updated`,
      level: "system",
      actionType: "edit",
      action: "feature_updated",
      mode: e,
      sourceFeatures: [this],
      targetFeatures: [this],
      markerData: null
    };
    this.gm.events.fire(`${se}:edit`, n);
  }
  delete() {
    this.removeGeoJson(), this.removeMarkers();
  }
}
const Vl = (t) => kn(t) && t.actionType === "helper", Uk = (t) => kn(t) && t.name === `${se}:helper:geofencing_violation`;
class Wl {
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
    const n = this.options[e];
    if (!n)
      throw new Error(`Option ${e} not found`);
    if (["toggle", "hidden"].includes(n.type))
      return n.value;
    if (n.type === "select")
      return n.value.value;
    throw new Error(`Unknown option type: ${JSON.stringify(n)}`);
  }
  getSettingValue(e) {
    if (e in this.settings)
      return this.settings[e];
  }
  applyOptionValue(e, n) {
    const s = this.options[e];
    if (!s) {
      te.error("Option not found", e, n);
      return;
    }
    if (s.type === "toggle" && typeof n == "boolean")
      s.value = n;
    else if (s.type === "select") {
      const u = s.choices.find((c) => c.value === n);
      u && (s.value = u);
    } else s.type === "hidden" ? s.value = n : te.error("Can't apply option value", e, n, s);
  }
  handleHelperEvent(e) {
    return Uk(e) ? this.handleGeofencingViolationEvent(e) : { next: !0 };
  }
  handleGeofencingViolationEvent(e) {
    return e.actionType === "draw" ? this.flags.featureCreateAllowed = !1 : e.actionType === "edit" && (this.flags.featureUpdateAllowed = !1), { next: !0 };
  }
}
const jl = (t) => kn(t) && t.actionType === "draw", ep = (t) => kn(t) && (t.name === `${se}:draw:shape` || t.name === `${se}:draw:shape_with_data`), tp = (t) => ep(t) && t.variant === "line_drawer", mI = (t) => ep(t) && t.variant === "freehand_drawer";
class dr extends Wl {
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
    forceMode: n = void 0
  }) {
    this.flags.featureCreateAllowed = !0;
    const s = {
      name: `${se}:feature:before_create`,
      level: "system",
      actionType: "draw",
      mode: n || this.mode,
      action: "before_create",
      geoJsonFeatures: e
    };
    this.gm.events.fire(`${se}:${this.actionType}`, s);
  }
  fireMarkerPointerStartEvent() {
    if (!this.gm.markerPointer.marker || !this.shape)
      return;
    const e = this.gm.markerPointer.marker, n = {
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
    this.gm.events.fire(`${se}:draw`, n);
  }
  fireMarkerPointerUpdateEvent() {
    if (!this.gm.markerPointer.marker || !this.shape)
      return;
    const e = this.gm.markerPointer.marker, n = {
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
    this.gm.events.fire(`${se}:draw`, n);
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
      const n = {
        name: `${se}:draw:shape_with_data`,
        level: "system",
        actionType: "draw",
        mode: this.shape,
        variant: null,
        action: e.action,
        featureData: e.featureData,
        markerData: e.markerData
      };
      this.gm.events.fire(`${se}:draw`, n);
    } else if (e.action === "finish" || e.action === "cancel") {
      const n = {
        name: `${se}:draw:shape`,
        level: "system",
        actionType: "draw",
        mode: this.shape,
        variant: null,
        action: e.action
      };
      this.gm.events.fire(`${se}:draw`, n);
    }
    return { next: !0 };
  }
  fireStartEvent(e, n = null) {
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
      markerData: n
    };
    this.gm.events.fire(`${se}:draw`, s);
  }
  fireUpdateEvent(e, n = null) {
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
      markerData: n
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
class Zl extends dr {
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
    const n = e.firstChild;
    return n.style.color = "#278cda", n.style.width = "28px", n.style.height = "28px", n.style.pointerEvents = "none", this.gm.mapAdapter.createDomMarker(
      {
        draggable: !1,
        anchor: "center",
        element: n
      },
      [0, 0]
    );
  }
}
class zk extends Zl {
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
    const n = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    return this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(n)] }), this.flags.featureCreateAllowed && (this.featureData = this.createFeature(), this.circleCenterLngLat = n, this.circleCenterPoint = this.gm.mapAdapter.project(this.circleCenterLngLat), this.updateFeaturePosition(this.circleCenterLngLat), this.saveFeature()), { next: !1 };
  }
  updateFeaturePosition(e) {
    if (!this.featureData)
      return;
    const n = this.getFeatureGeoJson(e);
    this.featureData.updateGeoJsonGeometry(n.geometry);
  }
}
const qk = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || matchMedia("(hover: none)").matches ? !0 : "msMaxTouchPoints" in navigator && typeof navigator.msMaxTouchPoints == "number" && navigator.msMaxTouchPoints > 0, oi = (t, e, n = 10) => {
  const s = { ...t };
  return tt(t).forEach((u) => {
    const c = t[u];
    typeof c == "function" ? s[u] = Mg(c.bind(e), n, {
      leading: !0,
      trailing: !1
    }) : te.error("convertToThrottled: item is not a function", t[u]);
  }), s;
}, Yk = (t, e, n = 10) => {
  const s = { ...t };
  return tt(t).forEach((u) => {
    const c = t[u];
    typeof c == "function" ? s[u] = wl(c.bind(e), n, {
      leading: !1,
      trailing: !0
    }) : te.error("convertToDebounced: item is not a function", t[u]);
  }), s;
}, Xu = async (t, e) => {
  const n = "Promise race timeout";
  await Promise.race([
    t,
    new Promise((s, u) => {
      setTimeout(
        () => u(
          new Error(
            `Timeout ${zc / 1e3} seconds: ${e || n}`
          )
        ),
        zc
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
  const n = typeof t == "object" && "lngLat" in t && "point" in t && "type" in t && "originalEvent" in t && typeof t.type == "string" && np.includes(t.type);
  return !n && e.warning && te.warn("Not a pointer event", t), n;
}, $k = (t) => t.originalEvent.ctrlKey || t.originalEvent.shiftKey || t.originalEvent.altKey || t.originalEvent.metaKey, Xk = (t) => {
  const e = ["symbol", "fill", "line", "circle"];
  return !!t && typeof t == "object" && "type" in t && e.includes(t.type);
};
class Vk extends Zl {
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
    const n = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    if (this.circleCenterPoint && this.circleCenterLngLat)
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [this.getCircleGeoJson(this.circleCenterLngLat, n)]
      }), this.flags.featureCreateAllowed && (this.saveCircleFeature(n), this.circleCenterLngLat = null, this.circleCenterPoint = null, this.fireFinishEvent());
    else if (this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(n)] }), this.flags.featureCreateAllowed) {
      this.circleCenterLngLat = n, this.circleCenterPoint = this.gm.mapAdapter.project(this.circleCenterLngLat), this.featureData = this.createFeature();
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
      const n = this.getCircleGeoJson(this.circleCenterLngLat, e);
      this.featureData.updateGeoJsonGeometry(n.geometry);
      const s = this.getControlMarkerData();
      s && this.fireUpdateEvent(this.featureData, s);
    }
  }
  saveCircleFeature(e) {
    if (this.circleCenterLngLat && this.featureData) {
      const n = this.gm.markerPointer.marker?.getLngLat() || e;
      this.updateFeatureGeoJson(n), this.featureData.setShapeProperty("center", this.circleCenterLngLat), this.isFeatureGeoJsonValid() ? this.saveFeature() : this.removeTmpFeature();
    }
  }
  isFeatureGeoJsonValid() {
    return this.featureData ? $l(this.featureData.getGeoJson()) : !1;
  }
  getCircleGeoJson(e, n) {
    const s = this.gm.mapAdapter.getDistance(e, n);
    return {
      ...Xl({ center: e, radius: s }),
      properties: {
        shape: this.shape
      }
    };
  }
}
class Or extends Wl {
  actionType = "helper";
}
const rp = (t) => !!t && typeof t == "object" && t instanceof Or && "removeSnapGuides" in t && "updateSnapGuides" in t && t.mode === "snap_guides" && typeof t.removeSnapGuides == "function" && typeof t.updateSnapGuides == "function", Wk = (t) => !!t && typeof t == "object" && t instanceof Or && "getShortestPath" in t && t.mode === "auto_trace" && typeof t.getShortestPath == "function", jk = (t) => !!t && typeof t == "object" && t instanceof Or && "getSharedMarkers" in t && t.mode === "pin" && typeof t.getSharedMarkers == "function";
function Zk(t, e = {}) {
  var n, s, u, c = e.properties, f = (n = e.autoComplete) != null ? n : !0, h = (s = e.orderCoords) != null ? s : !0, p = (u = e.mutate) != null ? u : !1;
  switch (p || (t = Ao(t)), t.type) {
    case "FeatureCollection":
      var d = [];
      return t.features.forEach(function(v) {
        d.push(
          qt(Kh(v, {}, f, h))
        );
      }), Gl(d, c);
    default:
      return Kh(t, c, f, h);
  }
}
function Kh(t, e, n, s) {
  e = e || (t.type === "Feature" ? t.properties : {});
  var u = ta(t), c = u.coordinates, f = u.type;
  if (!c.length) throw new Error("line must contain coordinates");
  switch (f) {
    case "LineString":
      return n && (c = Qh(c)), or([c], e);
    case "MultiLineString":
      var h = [], p = 0;
      return c.forEach(function(d) {
        if (n && (d = Qh(d)), s) {
          var v = Kk(Bn(Hi(d)));
          v > p ? (h.unshift(d), p = v) : h.push(d);
        } else
          h.push(d);
      }), or(h, e);
    default:
      throw new Error("geometry type " + f + " is not supported");
  }
}
function Qh(t) {
  var e = t[0], n = e[0], s = e[1], u = t[t.length - 1], c = u[0], f = u[1];
  return (n !== c || s !== f) && t.push(e), t;
}
function Kk(t) {
  var e = t[0], n = t[1], s = t[2], u = t[3];
  return Math.abs(e - s) * Math.abs(n - u);
}
var Kl = Zk;
class Ql extends dr {
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
  constructor(e, n = {
    snappingMarkers: "none",
    targetShape: "line"
  }) {
    super(e), this.drawOptions = n;
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
  on(e, n) {
    this.drawerEventHandlers[e] = n;
  }
  onMouseClick(e) {
    if (!je(e, { warning: !0 }))
      return { next: !0 };
    const n = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    if (this.featureData) {
      const s = this.getClickedMarkerInfo(e);
      this.handleNextVertex(n, s);
    } else this.isFeatureAllowed(Gk(n)) && this.startShape(n);
    return this.updateSnapGuides(), { next: !0 };
  }
  handleNextVertex(e, n) {
    if (!this.featureData) {
      te.error("LineDrawer.handleNextVertex: no featureData");
      return;
    }
    const s = this.featureData.markers.size, u = this.getMarkerClickEventData(n.index);
    n.index < s - 1 && this.addPoint(e, n), n.index !== -1 && (n.index === 0 ? this.drawerEventHandlers.firstMarkerClick?.(u) : n.index > 0 && n.index === s - 1 && this.drawerEventHandlers.lastMarkerClick?.(u), n.index >= 0 && this.drawerEventHandlers.nMarkerClick?.(u));
  }
  getMarkerClickEventData(e) {
    const n = this.getFeatureGeoJson({ withControlMarker: !1 });
    return {
      markerIndex: e,
      shapeCoordinates: this.getShapeCoordinates({ withControlMarker: !1 }),
      geoJson: n,
      bounds: Jl(n)
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
    const n = {
      type: "dom",
      instance: this.createMarker(e),
      position: {
        coordinate: e,
        path: ["geometry", "coordinates", 0]
      }
    };
    this.featureData && (this.featureData.markers.set(n.position.path.join("."), n), this.setSnapping(), this.fireStartEvent(this.featureData, n)), this.gm.mapAdapter.disableMapInteractions(["doubleClickZoom"]);
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
    let n = 0, s = null;
    try {
      this.featureData.markers.forEach((u, c) => {
        if (u.instance instanceof Fl) {
          const f = u.instance.getElement() || null, h = e.originalEvent.target, p = h instanceof Element ? h : null;
          if (f && f.contains(p))
            throw s = c, new Error("stop");
        }
        n += 1;
      });
    } catch {
      if (s)
        return { index: n, path: s };
    }
    return { index: -1, path: null };
  }
  addPoint(e, n) {
    const s = this.featureData;
    if (!s) {
      te.error("LineDrawer.addPoint: no featureData");
      return;
    }
    const u = this.getAddedLngLats(e, n), c = this.getFeatureGeoJsonWithType({
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
  getAddedLngLats(e, n) {
    if (!this.featureData)
      return te.error("LineDrawer.getCurrentLngLats: no featureData"), [];
    const u = this.getMarkerInfoLngLat(n) || e;
    return [...this.getAutoTracePath(u)?.slice(1, -1) || [], u];
  }
  getAutoTracePath(e) {
    const n = this.shapeLngLats.at(-1);
    return this.autoTraceEnabled && this.autoTraceHelperInstance && n && this.autoTraceHelperInstance.getShortestPath(n, e) || null;
  }
  getMarkerInfoLngLat(e) {
    if (this.featureData && e.path) {
      const n = this.featureData.markers.get(e.path);
      if (n && n.type === "dom")
        return n.instance.getLngLat();
      te.error("LineDrawer.addPoint: no markerData", e);
    }
    return null;
  }
  addMarker(e, n) {
    const s = {
      type: "dom",
      instance: this.createMarker(e),
      position: {
        coordinate: e,
        path: ["geometry", "coordinates", this.shapeLngLats.length]
      }
    };
    return n.markers.set(s.position.path.join("."), {
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
    coordinates: n = void 0
  }) {
    return {
      type: "Feature",
      properties: {
        shape: "line"
      },
      geometry: {
        type: "LineString",
        coordinates: n || this.getShapeCoordinates({ withControlMarker: e })
      }
    };
  }
  getFeatureGeoJsonWithType({
    withControlMarker: e,
    coordinates: n = void 0
  }) {
    const s = this.getFeatureGeoJson({ withControlMarker: e, coordinates: n });
    return this.drawOptions.targetShape === "polygon" && s.geometry.coordinates.length > 3 ? Kl(s, {
      properties: s.properties
    }) : s;
  }
  getShapeCoordinates({ withControlMarker: e }) {
    const n = [...this.shapeLngLats];
    return e && this.gm.markerPointer.marker && n.push(this.gm.markerPointer.marker.getLngLat()), n;
  }
  fireStartEvent(e, n) {
    const s = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: "line",
      variant: "line_drawer",
      action: "start",
      featureData: e,
      markerData: n
    };
    this.gm.events.fire(`${se}:draw`, s);
  }
  fireUpdateEvent(e, n) {
    const s = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: "line",
      variant: "line_drawer",
      action: "update",
      featureData: e,
      markerData: n
    };
    this.gm.events.fire(`${se}:draw`, s);
  }
  fireStopEvent(e) {
    const n = {
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
    this.gm.events.fire(`${se}:draw`, n);
  }
}
class Qk extends dr {
  mode = "line";
  shape = "line";
  lineDrawer = new Ql(this.gm, { snappingMarkers: "first", targetShape: "line" });
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
    let n = e.shapeCoordinates;
    return e.markerIndex > 0 && (n = n.slice(0, e.markerIndex + 1)), n.length < 2 ? null : this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(n),
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
    const n = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray(), s = this.getFeatureGeoJson(n);
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
  return Xn(t, (n) => {
    var s;
    switch ((s = n.geometry) == null ? void 0 : s.type) {
      case "Point":
        e.MultiPoint.coordinates.push(n.geometry.coordinates), e.MultiPoint.properties.push(n.properties);
        break;
      case "MultiPoint":
        e.MultiPoint.coordinates.push(...n.geometry.coordinates), e.MultiPoint.properties.push(n.properties);
        break;
      case "LineString":
        e.MultiLineString.coordinates.push(n.geometry.coordinates), e.MultiLineString.properties.push(n.properties);
        break;
      case "MultiLineString":
        e.MultiLineString.coordinates.push(
          ...n.geometry.coordinates
        ), e.MultiLineString.properties.push(n.properties);
        break;
      case "Polygon":
        e.MultiPolygon.coordinates.push(n.geometry.coordinates), e.MultiPolygon.properties.push(n.properties);
        break;
      case "MultiPolygon":
        e.MultiPolygon.coordinates.push(...n.geometry.coordinates), e.MultiPolygon.properties.push(n.properties);
        break;
    }
  }), nt(
    Object.keys(e).filter(function(n) {
      return e[n].coordinates.length;
    }).sort().map(function(n) {
      var s = { type: n, coordinates: e[n].coordinates }, u = { collectedProperties: e[n].properties };
      return Sn(s, u);
    })
  );
}
var n2 = t2;
function r2(t, e, n, s, u) {
  ip(t, e, n || 0, s || t.length - 1, u || i2);
}
function ip(t, e, n, s, u) {
  for (; s > n; ) {
    if (s - n > 600) {
      var c = s - n + 1, f = e - n + 1, h = Math.log(c), p = 0.5 * Math.exp(2 * h / 3), d = 0.5 * Math.sqrt(h * p * (c - p) / c) * (f - c / 2 < 0 ? -1 : 1), v = Math.max(n, Math.floor(e - f * p / c + d)), _ = Math.min(s, Math.floor(e + (c - f) * p / c + d));
      ip(t, e, v, _, u);
    }
    var x = t[e], M = n, S = s;
    for (ys(t, n, e), u(t[s], x) > 0 && ys(t, n, s); M < S; ) {
      for (ys(t, M, S), M++, S--; u(t[M], x) < 0; ) M++;
      for (; u(t[S], x) > 0; ) S--;
    }
    u(t[n], x) === 0 ? ys(t, n, S) : (S++, ys(t, S, s)), S <= e && (n = S + 1), e <= S && (s = S - 1);
  }
}
function ys(t, e, n) {
  var s = t[e];
  t[e] = t[n], t[n] = s;
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
    let n = this.data;
    const s = [];
    if (!ka(e, n)) return s;
    const u = this.toBBox, c = [];
    for (; n; ) {
      for (let f = 0; f < n.children.length; f++) {
        const h = n.children[f], p = n.leaf ? u(h) : h;
        ka(e, p) && (n.leaf ? s.push(h) : hu(e, p) ? this._all(h, s) : c.push(h));
      }
      n = c.pop();
    }
    return s;
  }
  collides(e) {
    let n = this.data;
    if (!ka(e, n)) return !1;
    const s = [];
    for (; n; ) {
      for (let u = 0; u < n.children.length; u++) {
        const c = n.children[u], f = n.leaf ? this.toBBox(c) : c;
        if (ka(e, f)) {
          if (n.leaf || hu(e, f)) return !0;
          s.push(c);
        }
      }
      n = s.pop();
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
    let n = this._build(e.slice(), 0, e.length - 1, 0);
    if (!this.data.children.length)
      this.data = n;
    else if (this.data.height === n.height)
      this._splitRoot(this.data, n);
    else {
      if (this.data.height < n.height) {
        const s = this.data;
        this.data = n, n = s;
      }
      this._insert(n, this.data.height - n.height - 1, !0);
    }
    return this;
  }
  insert(e) {
    return e && this._insert(e, this.data.height - 1), this;
  }
  clear() {
    return this.data = Li([]), this;
  }
  remove(e, n) {
    if (!e) return this;
    let s = this.data;
    const u = this.toBBox(e), c = [], f = [];
    let h, p, d;
    for (; s || c.length; ) {
      if (s || (s = c.pop(), p = c[c.length - 1], h = f.pop(), d = !0), s.leaf) {
        const v = s2(e, s.children, n);
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
  compareMinX(e, n) {
    return e.minX - n.minX;
  }
  compareMinY(e, n) {
    return e.minY - n.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(e) {
    return this.data = e, this;
  }
  _all(e, n) {
    const s = [];
    for (; e; )
      e.leaf ? n.push(...e.children) : s.push(...e.children), e = s.pop();
    return n;
  }
  _build(e, n, s, u) {
    const c = s - n + 1;
    let f = this._maxEntries, h;
    if (c <= f)
      return h = Li(e.slice(n, s + 1)), Mi(h, this.toBBox), h;
    u || (u = Math.ceil(Math.log(c) / Math.log(f)), f = Math.ceil(c / Math.pow(f, u - 1))), h = Li([]), h.leaf = !1, h.height = u;
    const p = Math.ceil(c / f), d = p * Math.ceil(Math.sqrt(f));
    ef(e, n, s, d, this.compareMinX);
    for (let v = n; v <= s; v += d) {
      const _ = Math.min(v + d - 1, s);
      ef(e, v, _, p, this.compareMinY);
      for (let x = v; x <= _; x += p) {
        const M = Math.min(x + p - 1, _);
        h.children.push(this._build(e, x, M, u - 1));
      }
    }
    return Mi(h, this.toBBox), h;
  }
  _chooseSubtree(e, n, s, u) {
    for (; u.push(n), !(n.leaf || u.length - 1 === s); ) {
      let c = 1 / 0, f = 1 / 0, h;
      for (let p = 0; p < n.children.length; p++) {
        const d = n.children[p], v = cu(d), _ = u2(e, d) - v;
        _ < f ? (f = _, c = v < c ? v : c, h = d) : _ === f && v < c && (c = v, h = d);
      }
      n = h || n.children[0];
    }
    return n;
  }
  _insert(e, n, s) {
    const u = s ? e : this.toBBox(e), c = [], f = this._chooseSubtree(u, this.data, n, c);
    for (f.children.push(e), ks(f, u); n >= 0 && c[n].children.length > this._maxEntries; )
      this._split(c, n), n--;
    this._adjustParentBBoxes(u, c, n);
  }
  // split overflowed node into two
  _split(e, n) {
    const s = e[n], u = s.children.length, c = this._minEntries;
    this._chooseSplitAxis(s, c, u);
    const f = this._chooseSplitIndex(s, c, u), h = Li(s.children.splice(f, s.children.length - f));
    h.height = s.height, h.leaf = s.leaf, Mi(s, this.toBBox), Mi(h, this.toBBox), n ? e[n - 1].children.push(h) : this._splitRoot(s, h);
  }
  _splitRoot(e, n) {
    this.data = Li([e, n]), this.data.height = e.height + 1, this.data.leaf = !1, Mi(this.data, this.toBBox);
  }
  _chooseSplitIndex(e, n, s) {
    let u, c = 1 / 0, f = 1 / 0;
    for (let h = n; h <= s - n; h++) {
      const p = ws(e, 0, h, this.toBBox), d = ws(e, h, s, this.toBBox), v = l2(p, d), _ = cu(p) + cu(d);
      v < c ? (c = v, u = h, f = _ < f ? _ : f) : v === c && _ < f && (f = _, u = h);
    }
    return u || s - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(e, n, s) {
    const u = e.leaf ? this.compareMinX : a2, c = e.leaf ? this.compareMinY : o2, f = this._allDistMargin(e, n, s, u), h = this._allDistMargin(e, n, s, c);
    f < h && e.children.sort(u);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(e, n, s, u) {
    e.children.sort(u);
    const c = this.toBBox, f = ws(e, 0, n, c), h = ws(e, s - n, s, c);
    let p = wa(f) + wa(h);
    for (let d = n; d < s - n; d++) {
      const v = e.children[d];
      ks(f, e.leaf ? c(v) : v), p += wa(f);
    }
    for (let d = s - n - 1; d >= n; d--) {
      const v = e.children[d];
      ks(h, e.leaf ? c(v) : v), p += wa(h);
    }
    return p;
  }
  _adjustParentBBoxes(e, n, s) {
    for (let u = s; u >= 0; u--)
      ks(n[u], e);
  }
  _condense(e) {
    for (let n = e.length - 1, s; n >= 0; n--)
      e[n].children.length === 0 ? n > 0 ? (s = e[n - 1].children, s.splice(s.indexOf(e[n]), 1)) : this.clear() : Mi(e[n], this.toBBox);
  }
}
function s2(t, e, n) {
  if (!n) return e.indexOf(t);
  for (let s = 0; s < e.length; s++)
    if (n(t, e[s])) return s;
  return -1;
}
function Mi(t, e) {
  ws(t, 0, t.children.length, e, t);
}
function ws(t, e, n, s, u) {
  u || (u = Li(null)), u.minX = 1 / 0, u.minY = 1 / 0, u.maxX = -1 / 0, u.maxY = -1 / 0;
  for (let c = e; c < n; c++) {
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
  const n = Math.max(t.minX, e.minX), s = Math.max(t.minY, e.minY), u = Math.min(t.maxX, e.maxX), c = Math.min(t.maxY, e.maxY);
  return Math.max(0, u - n) * Math.max(0, c - s);
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
function ef(t, e, n, s, u) {
  const c = [e, n];
  for (; c.length; ) {
    if (n = c.pop(), e = c.pop(), n - e <= s) continue;
    const f = e + Math.ceil((n - e) / s / 2) * s;
    r2(t, f, e, n, u), c.push(e, f, f, n);
  }
}
function c2(t) {
  return yk(
    t,
    (e, n) => e + h2(n),
    0
  );
}
function h2(t) {
  let e = 0, n;
  switch (t.type) {
    case "Polygon":
      return tf(t.coordinates);
    case "MultiPolygon":
      for (n = 0; n < t.coordinates.length; n++)
        e += tf(t.coordinates[n]);
      return e;
    case "Point":
    case "MultiPoint":
    case "LineString":
    case "MultiLineString":
      return 0;
  }
  return 0;
}
function tf(t) {
  let e = 0;
  if (t && t.length > 0) {
    e += Math.abs(nf(t[0]));
    for (let n = 1; n < t.length; n++)
      e -= Math.abs(nf(t[n]));
  }
  return e;
}
var f2 = at * at / 2, fu = Math.PI / 180;
function nf(t) {
  const e = t.length - 1;
  if (e <= 2) return 0;
  let n = 0, s = 0;
  for (; s < e; ) {
    const u = t[s], c = t[s + 1 === e ? 0 : s + 1], f = t[s + 2 >= e ? (s + 2) % e : s + 2], h = u[0] * fu, p = c[1] * fu, d = f[0] * fu;
    n += (d - h) * Math.sin(p), s++;
  }
  return n * f2;
}
const ar = 11102230246251565e-32, gt = 134217729, g2 = (3 + 8 * ar) * ar;
function gu(t, e, n, s, u) {
  let c, f, h, p, d = e[0], v = s[0], _ = 0, x = 0;
  v > d == v > -d ? (c = d, d = e[++_]) : (c = v, v = s[++x]);
  let M = 0;
  if (_ < t && x < n)
    for (v > d == v > -d ? (f = d + c, h = c - (f - d), d = e[++_]) : (f = v + c, h = c - (f - v), v = s[++x]), c = f, h !== 0 && (u[M++] = h); _ < t && x < n; )
      v > d == v > -d ? (f = c + d, p = f - c, h = c - (f - p) + (d - p), d = e[++_]) : (f = c + v, p = f - c, h = c - (f - p) + (v - p), v = s[++x]), c = f, h !== 0 && (u[M++] = h);
  for (; _ < t; )
    f = c + d, p = f - c, h = c - (f - p) + (d - p), d = e[++_], c = f, h !== 0 && (u[M++] = h);
  for (; x < n; )
    f = c + v, p = f - c, h = c - (f - p) + (v - p), v = s[++x], c = f, h !== 0 && (u[M++] = h);
  return (c !== 0 || M === 0) && (u[M++] = c), M;
}
function d2(t, e) {
  let n = e[0];
  for (let s = 1; s < t; s++) n += e[s];
  return n;
}
function ra(t) {
  return new Float64Array(t);
}
const p2 = (3 + 16 * ar) * ar, m2 = (2 + 12 * ar) * ar, v2 = (9 + 64 * ar) * ar * ar, Ii = ra(4), rf = ra(8), sf = ra(12), af = ra(16), St = ra(4);
function y2(t, e, n, s, u, c, f) {
  let h, p, d, v, _, x, M, S, C, F, O, I, H, V, J, U, W, E;
  const w = t - u, b = n - u, A = e - c, T = s - c;
  V = w * T, x = gt * w, M = x - (x - w), S = w - M, x = gt * T, C = x - (x - T), F = T - C, J = S * F - (V - M * C - S * C - M * F), U = A * b, x = gt * A, M = x - (x - A), S = A - M, x = gt * b, C = x - (x - b), F = b - C, W = S * F - (U - M * C - S * C - M * F), O = J - W, _ = J - O, Ii[0] = J - (O + _) + (_ - W), I = V + O, _ = I - V, H = V - (I - _) + (O - _), O = H - U, _ = H - O, Ii[1] = H - (O + _) + (_ - U), E = I + O, _ = E - I, Ii[2] = I - (E - _) + (O - _), Ii[3] = E;
  let G = d2(4, Ii), R = m2 * f;
  if (G >= R || -G >= R || (_ = t - w, h = t - (w + _) + (_ - u), _ = n - b, d = n - (b + _) + (_ - u), _ = e - A, p = e - (A + _) + (_ - c), _ = s - T, v = s - (T + _) + (_ - c), h === 0 && p === 0 && d === 0 && v === 0) || (R = v2 * f + g2 * Math.abs(G), G += w * v + T * h - (A * d + b * p), G >= R || -G >= R)) return G;
  V = h * T, x = gt * h, M = x - (x - h), S = h - M, x = gt * T, C = x - (x - T), F = T - C, J = S * F - (V - M * C - S * C - M * F), U = p * b, x = gt * p, M = x - (x - p), S = p - M, x = gt * b, C = x - (x - b), F = b - C, W = S * F - (U - M * C - S * C - M * F), O = J - W, _ = J - O, St[0] = J - (O + _) + (_ - W), I = V + O, _ = I - V, H = V - (I - _) + (O - _), O = H - U, _ = H - O, St[1] = H - (O + _) + (_ - U), E = I + O, _ = E - I, St[2] = I - (E - _) + (O - _), St[3] = E;
  const P = gu(4, Ii, 4, St, rf);
  V = w * v, x = gt * w, M = x - (x - w), S = w - M, x = gt * v, C = x - (x - v), F = v - C, J = S * F - (V - M * C - S * C - M * F), U = A * d, x = gt * A, M = x - (x - A), S = A - M, x = gt * d, C = x - (x - d), F = d - C, W = S * F - (U - M * C - S * C - M * F), O = J - W, _ = J - O, St[0] = J - (O + _) + (_ - W), I = V + O, _ = I - V, H = V - (I - _) + (O - _), O = H - U, _ = H - O, St[1] = H - (O + _) + (_ - U), E = I + O, _ = E - I, St[2] = I - (E - _) + (O - _), St[3] = E;
  const D = gu(P, rf, 4, St, sf);
  V = h * v, x = gt * h, M = x - (x - h), S = h - M, x = gt * v, C = x - (x - v), F = v - C, J = S * F - (V - M * C - S * C - M * F), U = p * d, x = gt * p, M = x - (x - p), S = p - M, x = gt * d, C = x - (x - d), F = d - C, W = S * F - (U - M * C - S * C - M * F), O = J - W, _ = J - O, St[0] = J - (O + _) + (_ - W), I = V + O, _ = I - V, H = V - (I - _) + (O - _), O = H - U, _ = H - O, St[1] = H - (O + _) + (_ - U), E = I + O, _ = E - I, St[2] = I - (E - _) + (O - _), St[3] = E;
  const Y = gu(D, sf, 4, St, af);
  return af[Y - 1];
}
function _2(t, e, n, s, u, c) {
  const f = (e - c) * (n - u), h = (t - u) * (s - c), p = f - h, d = Math.abs(f + h);
  return Math.abs(p) >= p2 * d ? p : -y2(t, e, n, s, u, c, d);
}
function E2(t, e) {
  var n, s, u = 0, c, f, h, p, d, v, _, x = t[0], M = t[1], S = e.length;
  for (n = 0; n < S; n++) {
    s = 0;
    var C = e[n], F = C.length - 1;
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
function ti(t, e, n = {}) {
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
    if (v === 0) return !n.ignoreBoundary;
    v && (p = !0);
  }
  return p;
}
function x2(t, e) {
  return e[0] <= t[0] && e[1] <= t[1] && e[2] >= t[0] && e[3] >= t[1];
}
function w2(t, e, n) {
  if (t.geometry.type !== "Polygon")
    throw new Error("The input feature must be a Polygon");
  n === void 0 && (n = 1);
  var s = t.geometry.coordinates, u = [], c = {};
  if (n) {
    for (var f = [], h = 0; h < s.length; h++)
      for (var p = 0; p < s[h].length - 1; p++)
        f.push(F(h, p));
    var d = new Kt();
    d.load(f);
  }
  for (var v = 0; v < s.length; v++)
    for (var _ = 0; _ < s[v].length - 1; _++)
      if (n) {
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
  function C(O, I, H, V) {
    var J = s[O][I], U = s[O][I + 1], W = s[H][V], E = s[H][V + 1], w = k2(J, U, W, E);
    if (w !== null) {
      var b, A;
      if (U[0] !== J[0] ? b = (w[0] - J[0]) / (U[0] - J[0]) : b = (w[1] - J[1]) / (U[1] - J[1]), E[0] !== W[0] ? A = (w[0] - W[0]) / (E[0] - W[0]) : A = (w[1] - W[1]) / (E[1] - W[1]), !(b >= 1 || b <= 0 || A >= 1 || A <= 0)) {
        var T = w, G = !c[T];
        G && (c[T] = !0), e ? u.push(
          e(
            w,
            O,
            I,
            J,
            U,
            b,
            H,
            V,
            W,
            E,
            A,
            G
          )
        ) : u.push(w);
      }
    }
  }
  function F(O, I) {
    var H = s[O][I], V = s[O][I + 1], J, U, W, E;
    return H[0] < V[0] ? (J = H[0], U = V[0]) : (J = V[0], U = H[0]), H[1] < V[1] ? (W = H[1], E = V[1]) : (W = V[1], E = H[1]), {
      minX: J,
      minY: W,
      maxX: U,
      maxY: E,
      ring: O,
      edge: I
    };
  }
}
function k2(t, e, n, s) {
  if (Ss(t, n) || Ss(t, s) || Ss(e, n) || Ss(s, n))
    return null;
  var u = t[0], c = t[1], f = e[0], h = e[1], p = n[0], d = n[1], v = s[0], _ = s[1], x = (u - f) * (d - _) - (c - h) * (p - v);
  if (x === 0) return null;
  var M = ((u * h - c * f) * (p - v) - (u - f) * (p * _ - d * v)) / x, S = ((u * h - c * f) * (d - _) - (c - h) * (p * _ - d * v)) / x;
  return [M, S];
}
function Ss(t, e) {
  if (!t || !e || t.length !== e.length) return !1;
  for (var n = 0, s = t.length; n < s; n++)
    if (t[n] instanceof Array && e[n] instanceof Array) {
      if (!Ss(t[n], e[n])) return !1;
    } else if (t[n] !== e[n])
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
  for (var e = t.geometry.coordinates.length, n = [], I = 0; I < e; I++) {
    var s = t.geometry.coordinates[I];
    Ms(s[0], s[s.length - 1]) || s.push(s[0]);
    for (var u = 0; u < s.length - 1; u++)
      n.push(s[u]);
  }
  if (!I2(n))
    throw new Error(
      "The input polygon may not have duplicate vertices (except for the first and last vertex of each ring)"
    );
  var c = n.length, f = w2(
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
        new of(
          t.geometry.coordinates[I][Ci(u + 1, t.geometry.coordinates[I].length - 1)],
          1,
          [I, u],
          [I, Ci(u + 1, t.geometry.coordinates[I].length - 1)],
          void 0
        )
      ]), d.push(
        new uf(
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
      new of(
        f[I][0],
        f[I][5],
        [f[I][1], f[I][2]],
        [f[I][6], f[I][7]],
        void 0
      )
    ), f[I][11] && d.push(
      new uf(
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
    for (var V = d[H].nxtIsectAlongRingAndEdge2, M = 0; M < d.length; M++)
      if (d[M].nxtIsectAlongRingAndEdge1 == H || d[M].nxtIsectAlongRingAndEdge2 == H) {
        var J = M;
        break;
      }
    var U = Ba(
      [
        d[J].coord,
        d[H].coord,
        d[V].coord
      ],
      !0
    ) ? 1 : -1;
    O.push({ isect: H, parent: -1, winding: U });
  }
  O.sort(function(le, ae) {
    return d[le.isect].coord > d[ae.isect].coord ? -1 : 1;
  });
  for (var W = []; O.length > 0; ) {
    var E = O.pop(), w = E.isect, b = E.parent, A = E.winding, T = W.length, G = [d[w].coord], R = w;
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
            A == 1
          ) ? (z.parent = b, z.winding = -A) : (z.parent = T, z.winding = A), O.push(z);
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
            A == 1
          ) ? (z.parent = b, z.winding = -A) : (z.parent = T, z.winding = A), O.push(z);
        }
        R = D, D = d[D].nxtIsectAlongRingAndEdge1;
      }
    }
    G.push(d[D].coord), W.push(
      or([G], {
        index: T,
        parent: b,
        winding: A,
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
var of = function(t, e, n, s, u) {
  this.coord = t, this.param = e, this.ringAndEdgeIn = n, this.ringAndEdgeOut = s, this.nxtIsectAlongEdgeIn = u;
}, uf = function(t, e, n, s, u, c, f) {
  this.coord = t, this.ringAndEdge1 = e, this.ringAndEdge2 = n, this.nxtIsectAlongRingAndEdge1 = s, this.nxtIsectAlongRingAndEdge2 = u, this.ringAndEdge1Walkable = c, this.ringAndEdge2Walkable = f;
};
function Ba(t, e) {
  if (typeof e > "u" && (e = !0), t.length != 3)
    throw new Error("This function requires an array of three points [x,y]");
  var n = (t[1][0] - t[0][0]) * (t[2][1] - t[0][1]) - (t[1][1] - t[0][1]) * (t[2][0] - t[0][0]);
  return n >= 0 == e;
}
function M2(t) {
  for (var e = 0, n = 0; n < t.length - 1; n++)
    t[n][0] < t[e][0] && (e = n);
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
  for (var n = 0, s = t.length; n < s; n++)
    if (t[n] instanceof Array && e[n] instanceof Array) {
      if (!Ms(t[n], e[n])) return !1;
    } else if (t[n] != e[n])
      return !1;
  return !0;
}
function Ci(t, e) {
  return (t % e + e) % e;
}
function I2(t) {
  for (var e = {}, n = 1, s = 0, u = t.length; s < u; ++s) {
    if (Object.prototype.hasOwnProperty.call(e, t[s])) {
      n = 0;
      break;
    }
    e[t[s]] = 1;
  }
  return n;
}
function b2(t) {
  var e = [];
  return Cr(t, function(n) {
    n.geometry.type === "Polygon" && Xn(S2(n), function(s) {
      e.push(or(s.geometry.coordinates, n.properties));
    });
  }), nt(e);
}
var L2 = b2;
class A2 extends dr {
  mode = "polygon";
  shape = "polygon";
  lineDrawer = new Ql(this.gm, { snappingMarkers: "first", targetShape: "polygon" });
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
    const n = this.fixShapeGeoJson(Kl(e.geoJson));
    n && this.gm.features.createFeature({
      shapeGeoJson: {
        ...n,
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
class T2 extends dr {
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
    const n = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    if (this.startLngLat) {
      const s = this.getFeatureGeoJson(bi(this.startLngLat, n));
      this.fireBeforeFeatureCreate({ geoJsonFeatures: [s] }), this.flags.featureCreateAllowed && this.finishShape(n);
    } else {
      const s = this.getFeatureGeoJson(bi(n, n));
      if (this.fireBeforeFeatureCreate({ geoJsonFeatures: [s] }), this.flags.featureCreateAllowed) {
        const u = this.startShape(n);
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
    const n = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray(), s = bi(this.startLngLat, n), u = this.getFeatureGeoJson(s);
    return this.fireBeforeFeatureCreate({ geoJsonFeatures: [u] }), this.flags.featureCreateAllowed && this.throttledMethods.updateFeaturePosition(s), { next: !1 };
  }
  startShape(e) {
    this.startLngLat = e;
    const n = bi(this.startLngLat, this.startLngLat);
    return this.featureData = this.createFeature(n), this.featureData;
  }
  finishShape(e) {
    if (this.startLngLat) {
      const n = bi(this.startLngLat, e);
      this.throttledMethods.updateFeaturePosition(n);
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
    return this.featureData ? $l(this.featureData.getGeoJson()) : !1;
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
    const n = $u(
      [e[0], e[1]],
      [e[2], e[3]]
    );
    this.featureData.updateGeoJsonGeometry(n.geometry);
    const s = this.getControlMarkerData(["geometry", "coordinates", 4]);
    this.fireUpdateEvent(this.featureData, s);
  }
  getControlMarkerData(e) {
    const n = this.gm.markerPointer.marker;
    return n ? {
      type: "dom",
      instance: n,
      position: {
        coordinate: n.getLngLat(),
        path: e
      }
    } : null;
  }
  fireStartEvent(e, n) {
    const s = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "start",
      featureData: e,
      markerData: n
    };
    this.gm.events.fire(`${se}:draw`, s);
  }
  fireUpdateEvent(e, n) {
    const s = {
      name: `${se}:draw:shape_with_data`,
      level: "system",
      actionType: "draw",
      mode: this.shape,
      variant: null,
      action: "update",
      featureData: e,
      markerData: n
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
      const n = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
      this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(n)] }), this.flags.featureCreateAllowed && (this.featureData = this.createFeature(n), this.gm.markerPointer.disable(), this.fireMarkerPointerFinishEvent());
    }
    return { next: !1 };
  }
  createFeature(e) {
    const n = this.gm.mapAdapter.project(e);
    return this.createTextarea(n), this.gm.features.createFeature({
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
class N2 extends Zl {
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
    const n = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
    if (this.circleCenterLngLat && this.xSemiAxisLngLat)
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [
          this.getEllipseGeoJson(this.circleCenterLngLat, this.xSemiAxisLngLat, n)
        ]
      }), this.flags.featureCreateAllowed && (this.saveEllipseFeature(n), this.circleCenterLngLat = null, this.circleCenterPoint = null, this.xSemiAxisPoint = null, this.xSemiAxisLngLat = null, this.fireFinishEvent());
    else if (this.circleCenterLngLat)
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [this.getEllipseGeoJson(this.circleCenterLngLat, n)]
      }), this.flags.featureCreateAllowed && (this.xSemiAxisLngLat = n, this.xSemiAxisPoint = this.gm.mapAdapter.project(this.circleCenterLngLat));
    else if (this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(n)] }), this.flags.featureCreateAllowed) {
      this.circleCenterLngLat = n, this.circleCenterPoint = this.gm.mapAdapter.project(this.circleCenterLngLat), this.featureData = this.createFeature();
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
    const n = this.xSemiAxisLngLat ? this.getEllipseGeoJson(this.circleCenterLngLat, this.xSemiAxisLngLat, e) : this.getEllipseGeoJson(this.circleCenterLngLat, e);
    this.featureData.updateGeoJsonGeometry(n.geometry), this.featureData.updateGeoJsonProperties({
      shape: n.properties.shape
    });
    const s = this.getControlMarkerData();
    s && this.fireUpdateEvent(this.featureData, s);
  }
  saveEllipseFeature(e) {
    if (!(!this.circleCenterLngLat || !this.xSemiAxisLngLat) && this.featureData) {
      const n = this.gm.markerPointer.marker?.getLngLat() || e;
      this.updateFeatureGeoJson(n);
      const { xSemiAxis: s, ySemiAxis: u, angle: c } = Zh({
        center: this.circleCenterLngLat,
        xSemiAxisLngLat: this.xSemiAxisLngLat,
        rimLngLat: n
      });
      this.featureData.setShapeProperty("center", this.circleCenterLngLat), this.featureData.setShapeProperty("xSemiAxis", s), this.featureData.setShapeProperty("ySemiAxis", u), this.featureData.setShapeProperty("angle", c), this.isFeatureGeoJsonValid() ? this.saveFeature() : this.removeTmpFeature();
    }
  }
  isFeatureGeoJsonValid() {
    return this.featureData ? $l(this.featureData.getGeoJson()) : !1;
  }
  getEllipseGeoJson(e, n, s) {
    const { xSemiAxis: u, ySemiAxis: c, angle: f } = Zh({
      center: e,
      xSemiAxisLngLat: n,
      rimLngLat: s
    });
    return Co({ center: e, xSemiAxis: u, ySemiAxis: c, angle: f });
  }
}
const Vu = {
  marker: e2,
  ellipse: N2,
  circle: Vk,
  circle_marker: zk,
  text_marker: C2,
  line: Qk,
  rectangle: T2,
  polygon: A2,
  freehand: null,
  custom_shape: null
}, P2 = (t, e) => Vu[e] ? new Vu[e](t) : (te.error(`Draw "${e}" is not available`), null), es = (t) => kn(t) && t.actionType === "edit", O2 = (t) => Td.includes(t), _I = (t) => fk.includes(t), R2 = (t) => Nd.includes(t), D2 = (t) => Od.includes(t), F2 = (t) => Pd.includes(t), G2 = (t) => R2(t) || D2(t) || F2(t);
class B2 extends bo {
  eventHandlers = {
    [`${se}:draw`]: this.handleDrawEvent.bind(this)
  };
  constructor(e, n) {
    super(e), n.attachEvents(this.eventHandlers);
  }
  handleDrawEvent(e) {
    if (!jl(e))
      return { next: !0 };
    const n = `${e.actionType}__${e.mode}`;
    return e.action === "mode_start" ? (this.trackExclusiveModes(e), this.start(n, e), this.trackRelatedModes(e)) : e.action === "mode_end" && (this.trackRelatedModes(e), this.end(n)), { next: !0 };
  }
  start(e, n) {
    const s = P2(this.gm, n.mode);
    s && (e in this.gm.actionInstances && te.error(`Action instance "${e}" already exists`), this.gm.actionInstances[e] = s, s.startAction());
  }
  end(e) {
    const n = this.gm.actionInstances[e];
    n instanceof dr ? (n.endAction(), delete this.gm.actionInstances[e]) : console.error(`Wrong action instance for draw event "${e}":`, n);
  }
}
class ts extends Wl {
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
    sourceNames: n
  }) {
    const s = this.gm.features.getFeatureByMouseEvent({
      event: e,
      sourceNames: n
    });
    return !s || s.getShapeProperty("disableEdit") === !0 ? null : s;
  }
  setEventsForLayers(e, n) {
    this.gm.features.layers.map((u) => u.id).filter(
      (u) => !this.cursorExcludedLayerIds.some((c) => u.includes(c))
    ).forEach((u) => {
      this.gm.mapAdapter.on(e, u, n), this.layerEventHandlersData.push({ eventName: e, layerId: u, callback: n });
    });
  }
  clearEventsForLayers() {
    this.layerEventHandlersData.forEach(({ eventName: e, layerId: n, callback: s }) => {
      this.gm.mapAdapter.off(e, n, s);
    }), this.layerEventHandlersData = [];
  }
  updateFeatureGeoJson({
    featureData: e,
    featureGeoJson: n,
    forceMode: s = void 0
  }) {
    return this.flags.featureUpdateAllowed ? (e.updateGeoJsonGeometry(n.geometry), Wi(e.getGeoJson().properties, n.properties) || e.updateGeoJsonProperties(n.properties), this.fireFeatureUpdatedEvent({
      sourceFeatures: [e],
      targetFeatures: [e],
      forceMode: s
    }), !0) : !1;
  }
  fireBeforeFeatureUpdate({
    features: e,
    geoJsonFeatures: n,
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
      geoJsonFeatures: n
    };
    this.gm.events.fire(`${se}:${this.actionType}`, u);
  }
  fireFeatureUpdatedEvent({
    sourceFeatures: e,
    targetFeatures: n,
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
      targetFeatures: n,
      markerData: s || null
    };
    this.gm.events.fire(`${se}:edit`, c);
  }
  fireFeatureEditStartEvent({
    feature: e,
    forceMode: n = void 0
  }) {
    const s = {
      name: `${se}:edit:feature_edit_start`,
      level: "system",
      actionType: "edit",
      action: "feature_edit_start",
      mode: n || this.mode,
      feature: e
    };
    this.gm.events.fire(`${se}:edit`, s);
  }
  fireFeatureEditEndEvent({
    feature: e,
    forceMode: n = void 0
  }) {
    const s = {
      name: `${se}:edit:feature_edit_end`,
      level: "system",
      actionType: "edit",
      action: "feature_edit_end",
      mode: n || this.mode,
      feature: e
    };
    this.gm.events.fire(`${se}:edit`, s);
  }
  fireMarkerPointerUpdateEvent() {
    if (!this.gm.markerPointer.marker)
      return;
    const e = this.gm.markerPointer.marker, n = {
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
    this.gm.events.fire(`${se}:draw`, n);
  }
  forwardLineDrawerEvent(e) {
    if (!tp(e) || !["cut", "split"].includes(this.mode))
      return { next: !0 };
    if (e.action === "start" || e.action === "update") {
      const n = {
        name: `${se}:draw:shape_with_data`,
        level: "system",
        actionType: "draw",
        mode: this.getLineDrawerMode(),
        variant: null,
        action: e.action,
        featureData: e.featureData,
        markerData: e.markerData
      };
      this.gm.events.fire(`${se}:draw`, n);
    } else if (e.action === "finish" || e.action === "cancel") {
      const n = {
        name: `${se}:draw:shape`,
        level: "system",
        actionType: "draw",
        mode: this.getLineDrawerMode(),
        variant: null,
        action: e.action
      };
      this.gm.events.fire(`${se}:draw`, n);
    }
    return { next: !0 };
  }
  fireFeatureRemovedEvent(e) {
    if (Ar(e.shape, Wr)) {
      const n = {
        name: `${se}:edit:feature_removed`,
        level: "system",
        actionType: "edit",
        mode: e.shape,
        action: "feature_removed",
        featureData: e
      };
      this.gm.events.fire(`${se}:edit`, n);
    }
  }
  getLineDrawerMode() {
    return this.mode === "cut" ? "polygon" : (this.mode === "split", "line");
  }
}
function U2(t, e = {}) {
  const n = Bn(t), s = (n[0] + n[2]) / 2, u = (n[1] + n[3]) / 2;
  return zn([s, u], e.properties, e);
}
var Ua = { exports: {} }, z2 = Ua.exports, lf;
function q2() {
  return lf || (lf = 1, (function(t, e) {
    (function(n, s) {
      t.exports = s();
    })(z2, (function() {
      function n(o, r) {
        (r == null || r > o.length) && (r = o.length);
        for (var i = 0, a = Array(r); i < r; i++) a[i] = o[i];
        return a;
      }
      function s(o, r, i) {
        return r = v(r), (function(a, l) {
          if (l && (typeof l == "object" || typeof l == "function")) return l;
          if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
          return (function(g) {
            if (g === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g;
          })(a);
        })(o, x() ? Reflect.construct(r, i || [], v(o).constructor) : r.apply(o, i));
      }
      function u(o, r) {
        if (!(o instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function c(o, r, i) {
        if (x()) return Reflect.construct.apply(null, arguments);
        var a = [null];
        a.push.apply(a, r);
        var l = new (o.bind.apply(o, a))();
        return i && M(l, i.prototype), l;
      }
      function f(o, r) {
        for (var i = 0; i < r.length; i++) {
          var a = r[i];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(o, F(a.key), a);
        }
      }
      function h(o, r, i) {
        return r && f(o.prototype, r), i && f(o, i), Object.defineProperty(o, "prototype", { writable: !1 }), o;
      }
      function p(o, r) {
        var i = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
        if (!i) {
          if (Array.isArray(o) || (i = O(o)) || r) {
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
        return d = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(o, r, i) {
          var a = (function(g, m) {
            for (; !{}.hasOwnProperty.call(g, m) && (g = v(g)) !== null; ) ;
            return g;
          })(o, r);
          if (a) {
            var l = Object.getOwnPropertyDescriptor(a, r);
            return l.get ? l.get.call(arguments.length < 3 ? o : i) : l.value;
          }
        }, d.apply(null, arguments);
      }
      function v(o) {
        return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }, v(o);
      }
      function _(o, r) {
        if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
        o.prototype = Object.create(r && r.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, "prototype", { writable: !1 }), r && M(o, r);
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
      function M(o, r) {
        return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, a) {
          return i.__proto__ = a, i;
        }, M(o, r);
      }
      function S(o, r, i, a) {
        var l = d(v(1 & a ? o.prototype : o), r, i);
        return 2 & a && typeof l == "function" ? function(g) {
          return l.apply(i, g);
        } : l;
      }
      function C(o) {
        return (function(r) {
          if (Array.isArray(r)) return n(r);
        })(o) || (function(r) {
          if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
        })(o) || O(o) || (function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        })();
      }
      function F(o) {
        var r = (function(i, a) {
          if (typeof i != "object" || !i) return i;
          var l = i[Symbol.toPrimitive];
          if (l !== void 0) {
            var g = l.call(i, a);
            if (typeof g != "object") return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(i);
        })(o, "string");
        return typeof r == "symbol" ? r : r + "";
      }
      function O(o, r) {
        if (o) {
          if (typeof o == "string") return n(o, r);
          var i = {}.toString.call(o).slice(8, -1);
          return i === "Object" && o.constructor && (i = o.constructor.name), i === "Map" || i === "Set" ? Array.from(o) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(o, r) : void 0;
        }
      }
      function I(o) {
        var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
        return I = function(i) {
          if (i === null || !(function(l) {
            try {
              return Function.toString.call(l).indexOf("[native code]") !== -1;
            } catch {
              return typeof l == "function";
            }
          })(i)) return i;
          if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
          if (r !== void 0) {
            if (r.has(i)) return r.get(i);
            r.set(i, a);
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
        } }, { key: "setQuadrantSegments", value: function(r) {
          this._quadrantSegments = r, this._quadrantSegments === 0 && (this._joinStyle = o.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = o.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), r <= 0 && (this._quadrantSegments = 1), this._joinStyle !== o.JOIN_ROUND && (this._quadrantSegments = o.DEFAULT_QUADRANT_SEGMENTS);
        } }, { key: "getJoinStyle", value: function() {
          return this._joinStyle;
        } }, { key: "setJoinStyle", value: function(r) {
          this._joinStyle = r;
        } }, { key: "setSimplifyFactor", value: function(r) {
          this._simplifyFactor = r < 0 ? 0 : r;
        } }, { key: "getSimplifyFactor", value: function() {
          return this._simplifyFactor;
        } }, { key: "getQuadrantSegments", value: function() {
          return this._quadrantSegments;
        } }, { key: "setEndCapStyle", value: function(r) {
          this._endCapStyle = r;
        } }, { key: "getMitreLimit", value: function() {
          return this._mitreLimit;
        } }, { key: "setMitreLimit", value: function(r) {
          this._mitreLimit = r;
        } }, { key: "setSingleSided", value: function(r) {
          this._isSingleSided = r;
        } }], [{ key: "constructor_", value: function() {
          if (this._quadrantSegments = o.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = o.CAP_ROUND, this._joinStyle = o.JOIN_ROUND, this._mitreLimit = o.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = o.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
            if (arguments.length === 1) {
              var r = arguments[0];
              this.setQuadrantSegments(r);
            } else if (arguments.length === 2) {
              var i = arguments[0], a = arguments[1];
              this.setQuadrantSegments(i), this.setEndCapStyle(a);
            } else if (arguments.length === 4) {
              var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3];
              this.setQuadrantSegments(l), this.setEndCapStyle(g), this.setJoinStyle(m), this.setMitreLimit(y);
            }
          }
        } }, { key: "bufferDistanceError", value: function(r) {
          var i = Math.PI / 2 / r;
          return 1 - Math.cos(i / 2);
        } }]);
      })();
      H.CAP_ROUND = 1, H.CAP_FLAT = 2, H.CAP_SQUARE = 3, H.JOIN_ROUND = 1, H.JOIN_MITRE = 2, H.JOIN_BEVEL = 3, H.DEFAULT_QUADRANT_SEGMENTS = 8, H.DEFAULT_MITRE_LIMIT = 5, H.DEFAULT_SIMPLIFY_FACTOR = 0.01;
      var V = (function(o) {
        function r(i) {
          var a;
          return u(this, r), (a = s(this, r, [i])).name = Object.keys({ Exception: r })[0], a;
        }
        return _(r, o), h(r, [{ key: "toString", value: function() {
          return this.message;
        } }]);
      })(I(Error)), J = (function(o) {
        function r(i) {
          var a;
          return u(this, r), (a = s(this, r, [i])).name = Object.keys({ IllegalArgumentException: r })[0], a;
        }
        return _(r, o), h(r);
      })(V), U = (function() {
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
      var b, A, T, G, R, P, D, Y, z = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "equalsWithTolerance", value: function(o, r, i) {
          return Math.abs(o - r) <= i;
        } }]);
      })(), j = (function() {
        return h((function o(r, i) {
          u(this, o), this.low = i || 0, this.high = r || 0;
        }), null, [{ key: "toBinaryString", value: function(o) {
          var r, i = "";
          for (r = 2147483648; r > 0; r >>>= 1) i += (o.high & r) === r ? "1" : "0";
          for (r = 2147483648; r > 0; r >>>= 1) i += (o.low & r) === r ? "1" : "0";
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
        var r = 0 | Y[0], i = 0 | Y[1];
        return (i & P) === P && 1048575 & i && r !== 0 && (r = 0, i = 2146959360), new j(i, r);
      }, Z.longBitsToDouble = function(o) {
        return Y[0] = o.low, Y[1] = o.high, D[0];
      }) : (b = 1023, A = Math.log2, T = Math.floor, G = Math.pow, R = (function() {
        for (var o = 53; o > 0; o--) {
          var r = G(2, o) - 1;
          if (T(A(r)) + 1 === o) return r;
        }
        return 0;
      })(), Z.doubleToLongBits = function(o) {
        var r, i, a, l, g, m, y, k, L;
        if (o < 0 || 1 / o === Number.NEGATIVE_INFINITY ? (m = 1 << 31, o = -o) : m = 0, o === 0) return new j(k = m, L = 0);
        if (o === 1 / 0) return new j(k = 2146435072 | m, L = 0);
        if (o != o) return new j(k = 2146959360, L = 0);
        if (l = 0, L = 0, (r = T(o)) > 1) if (r <= R) (l = T(A(r))) <= 20 ? (L = 0, k = r << 20 - l & 1048575) : (L = r % (i = G(2, a = l - 20)) << 32 - a, k = r / i & 1048575);
        else for (a = r, L = 0; (a = T(i = a / 2)) !== 0; ) l++, L >>>= 1, L |= (1 & k) << 31, k >>>= 1, i !== a && (k |= 524288);
        if (y = l + b, g = r === 0, r = o - r, l < 52 && r !== 0) for (a = 0; ; ) {
          if ((i = 2 * r) >= 1 ? (r = i - 1, g ? (y--, g = !1) : (a <<= 1, a |= 1, l++)) : (r = i, g ? --y == 0 && (l++, g = !1) : (a <<= 1, l++)), l === 20) k |= a, a = 0;
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
        var r, i, a, l, g = o.high, m = o.low, y = g & 1 << 31 ? -1 : 1;
        for (a = ((2146435072 & g) >> 20) - b, l = 0, i = 1 << 19, r = 1; r <= 20; r++) g & i && (l += G(2, -r)), i >>>= 1;
        for (i = 1 << 31, r = 21; r <= 52; r++) m & i && (l += G(2, -r)), i >>>= 1;
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
        function r(i) {
          var a;
          return u(this, r), (a = s(this, r, [i])).name = Object.keys({ RuntimeException: r })[0], a;
        }
        return _(r, o), h(r);
      })(V), le = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, null, [{ key: "constructor_", value: function() {
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
            var r = arguments[0];
            throw new le("Should never reach here" + (r !== null ? ": " + r : ""));
          }
        } }, { key: "isTrue", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            o.isTrue(r, null);
          } else if (arguments.length === 2) {
            var i = arguments[1];
            if (!arguments[0]) throw i === null ? new le() : new le(i);
          }
        } }, { key: "equals", value: function() {
          if (arguments.length === 2) {
            var r = arguments[0], i = arguments[1];
            o.equals(r, i, null);
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
        } }, { key: "setOrdinate", value: function(r, i) {
          switch (r) {
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
              throw new J("Invalid ordinate index: " + r);
          }
        } }, { key: "equals2D", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            return this.x === r.x && this.y === r.y;
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return !!z.equalsWithTolerance(this.x, i.x, a) && !!z.equalsWithTolerance(this.y, i.y, a);
          }
        } }, { key: "setM", value: function(r) {
          throw new J("Invalid ordinate index: " + o.M);
        } }, { key: "getZ", value: function() {
          return this.z;
        } }, { key: "getOrdinate", value: function(r) {
          switch (r) {
            case o.X:
              return this.x;
            case o.Y:
              return this.y;
            case o.Z:
              return this.getZ();
          }
          throw new J("Invalid ordinate index: " + r);
        } }, { key: "equals3D", value: function(r) {
          return this.x === r.x && this.y === r.y && (this.getZ() === r.getZ() || Z.isNaN(this.getZ()) && Z.isNaN(r.getZ()));
        } }, { key: "equals", value: function(r) {
          return r instanceof o && this.equals2D(r);
        } }, { key: "equalInZ", value: function(r, i) {
          return z.equalsWithTolerance(this.getZ(), r.getZ(), i);
        } }, { key: "setX", value: function(r) {
          this.x = r;
        } }, { key: "compareTo", value: function(r) {
          var i = r;
          return this.x < i.x ? -1 : this.x > i.x ? 1 : this.y < i.y ? -1 : this.y > i.y ? 1 : 0;
        } }, { key: "getX", value: function() {
          return this.x;
        } }, { key: "setZ", value: function(r) {
          this.z = r;
        } }, { key: "clone", value: function() {
          try {
            return null;
          } catch (r) {
            if (r instanceof CloneNotSupportedException) return ae.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
            throw r;
          }
        } }, { key: "copy", value: function() {
          return new o(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ", " + this.getZ() + ")";
        } }, { key: "distance3D", value: function(r) {
          var i = this.x - r.x, a = this.y - r.y, l = this.getZ() - r.getZ();
          return Math.sqrt(i * i + a * a + l * l);
        } }, { key: "getY", value: function() {
          return this.y;
        } }, { key: "setY", value: function(r) {
          this.y = r;
        } }, { key: "distance", value: function(r) {
          var i = this.x - r.x, a = this.y - r.y;
          return Math.sqrt(i * i + a * a);
        } }, { key: "hashCode", value: function() {
          var r = 17;
          return r = 37 * (r = 37 * r + o.hashCode(this.x)) + o.hashCode(this.y);
        } }, { key: "setCoordinate", value: function(r) {
          this.x = r.x, this.y = r.y, this.z = r.getZ();
        } }, { key: "interfaces_", get: function() {
          return [W, E, w];
        } }], [{ key: "constructor_", value: function() {
          if (this.x = null, this.y = null, this.z = null, arguments.length === 0) o.constructor_.call(this, 0, 0);
          else if (arguments.length === 1) {
            var r = arguments[0];
            o.constructor_.call(this, r.x, r.y, r.getZ());
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            o.constructor_.call(this, i, a, o.NULL_ORDINATE);
          } else if (arguments.length === 3) {
            var l = arguments[0], g = arguments[1], m = arguments[2];
            this.x = l, this.y = g, this.z = m;
          }
        } }, { key: "hashCode", value: function(r) {
          return Ee[0] = r, Ce[0] ^ Ce[1];
        } }]);
      })(), In = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "compare", value: function(r, i) {
          var a = o.compare(r.x, i.x);
          if (a !== 0) return a;
          var l = o.compare(r.y, i.y);
          return l !== 0 ? l : this._dimensionsToTest <= 2 ? 0 : o.compare(r.getZ(), i.getZ());
        } }, { key: "interfaces_", get: function() {
          return [re];
        } }], [{ key: "constructor_", value: function() {
          if (this._dimensionsToTest = 2, arguments.length === 0) o.constructor_.call(this, 2);
          else if (arguments.length === 1) {
            var r = arguments[0];
            if (r !== 2 && r !== 3) throw new J("only 2 or 3 dimensions may be specified");
            this._dimensionsToTest = r;
          }
        } }, { key: "compare", value: function(r, i) {
          return r < i ? -1 : r > i ? 1 : Z.isNaN(r) ? Z.isNaN(i) ? 0 : -1 : Z.isNaN(i) ? 1 : 0;
        } }]);
      })();
      $.DimensionalComparator = In, $.NULL_ORDINATE = Z.NaN, $.X = 0, $.Y = 1, $.Z = 2, $.M = 3;
      var Le = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getArea", value: function() {
          return this.getWidth() * this.getHeight();
        } }, { key: "equals", value: function(r) {
          if (!(r instanceof o)) return !1;
          var i = r;
          return this.isNull() ? i.isNull() : this._maxx === i.getMaxX() && this._maxy === i.getMaxY() && this._minx === i.getMinX() && this._miny === i.getMinY();
        } }, { key: "intersection", value: function(r) {
          if (this.isNull() || r.isNull() || !this.intersects(r)) return new o();
          var i = this._minx > r._minx ? this._minx : r._minx, a = this._miny > r._miny ? this._miny : r._miny;
          return new o(i, this._maxx < r._maxx ? this._maxx : r._maxx, a, this._maxy < r._maxy ? this._maxy : r._maxy);
        } }, { key: "isNull", value: function() {
          return this._maxx < this._minx;
        } }, { key: "getMaxX", value: function() {
          return this._maxx;
        } }, { key: "covers", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof $) {
              var r = arguments[0];
              return this.covers(r.x, r.y);
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
              var r = arguments[0];
              return !this.isNull() && !r.isNull() && !(r._minx > this._maxx || r._maxx < this._minx || r._miny > this._maxy || r._maxy < this._miny);
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
          var r = this.getWidth(), i = this.getHeight();
          return Math.sqrt(r * r + i * i);
        } }, { key: "getMinX", value: function() {
          return this._minx;
        } }, { key: "expandToInclude", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof $) {
              var r = arguments[0];
              this.expandToInclude(r.x, r.y);
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
          var r = this.getWidth(), i = this.getHeight();
          return r < i ? r : i;
        } }, { key: "getWidth", value: function() {
          return this.isNull() ? 0 : this._maxx - this._minx;
        } }, { key: "compareTo", value: function(r) {
          var i = r;
          return this.isNull() ? i.isNull() ? 0 : -1 : i.isNull() ? 1 : this._minx < i._minx ? -1 : this._minx > i._minx ? 1 : this._miny < i._miny ? -1 : this._miny > i._miny ? 1 : this._maxx < i._maxx ? -1 : this._maxx > i._maxx ? 1 : this._maxy < i._maxy ? -1 : this._maxy > i._maxy ? 1 : 0;
        } }, { key: "translate", value: function(r, i) {
          if (this.isNull()) return null;
          this.init(this.getMinX() + r, this.getMaxX() + r, this.getMinY() + i, this.getMaxY() + i);
        } }, { key: "copy", value: function() {
          return new o(this);
        } }, { key: "toString", value: function() {
          return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
        } }, { key: "setToNull", value: function() {
          this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
        } }, { key: "disjoint", value: function(r) {
          return !(!this.isNull() && !r.isNull()) || r._minx > this._maxx || r._maxx < this._minx || r._miny > this._maxy || r._maxy < this._miny;
        } }, { key: "getHeight", value: function() {
          return this.isNull() ? 0 : this._maxy - this._miny;
        } }, { key: "maxExtent", value: function() {
          if (this.isNull()) return 0;
          var r = this.getWidth(), i = this.getHeight();
          return r > i ? r : i;
        } }, { key: "expandBy", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            this.expandBy(r, r);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            if (this.isNull()) return null;
            this._minx -= i, this._maxx += i, this._miny -= a, this._maxy += a, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
          }
        } }, { key: "contains", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var r = arguments[0];
              return this.covers(r);
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
              var r = arguments[0];
              this.init(r.x, r.x, r.y, r.y);
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
        } }, { key: "distance", value: function(r) {
          if (this.intersects(r)) return 0;
          var i = 0;
          this._maxx < r._minx ? i = r._minx - this._maxx : this._minx > r._maxx && (i = this._minx - r._maxx);
          var a = 0;
          return this._maxy < r._miny ? a = r._miny - this._maxy : this._miny > r._maxy && (a = this._miny - r._maxy), i === 0 ? a : a === 0 ? i : Math.sqrt(i * i + a * a);
        } }, { key: "hashCode", value: function() {
          var r = 17;
          return r = 37 * (r = 37 * (r = 37 * (r = 37 * r + $.hashCode(this._minx)) + $.hashCode(this._maxx)) + $.hashCode(this._miny)) + $.hashCode(this._maxy);
        } }, { key: "interfaces_", get: function() {
          return [W, w];
        } }], [{ key: "constructor_", value: function() {
          if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0) this.init();
          else if (arguments.length === 1) {
            if (arguments[0] instanceof $) {
              var r = arguments[0];
              this.init(r.x, r.x, r.y, r.y);
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
            var r = arguments[0], i = arguments[1], a = arguments[2];
            return a.x >= (r.x < i.x ? r.x : i.x) && a.x <= (r.x > i.x ? r.x : i.x) && a.y >= (r.y < i.y ? r.y : i.y) && a.y <= (r.y > i.y ? r.y : i.y);
          }
          if (arguments.length === 4) {
            var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3], k = Math.min(m.x, y.x), L = Math.max(m.x, y.x), q = Math.min(l.x, g.x), X = Math.max(l.x, g.x);
            return !(q > L) && !(X < k) && (k = Math.min(m.y, y.y), L = Math.max(m.y, y.y), q = Math.min(l.y, g.y), X = Math.max(l.y, g.y), !(q > L) && !(X < k));
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
        } }, { key: "getGeometryN", value: function(r) {
          return this;
        } }, { key: "getArea", value: function() {
          return 0;
        } }, { key: "isRectangle", value: function() {
          return !1;
        } }, { key: "equalsExact", value: function(r) {
          return this === r || this.equalsExact(r, 0);
        } }, { key: "geometryChanged", value: function() {
          this.apply(o.geometryChangedFilter);
        } }, { key: "geometryChangedAction", value: function() {
          this._envelope = null;
        } }, { key: "equalsNorm", value: function(r) {
          return r !== null && this.norm().equalsExact(r.norm());
        } }, { key: "getLength", value: function() {
          return 0;
        } }, { key: "getNumGeometries", value: function() {
          return 1;
        } }, { key: "compareTo", value: function() {
          var r;
          if (arguments.length === 1) {
            var i = arguments[0];
            return r = i, this.getTypeCode() !== r.getTypeCode() ? this.getTypeCode() - r.getTypeCode() : this.isEmpty() && r.isEmpty() ? 0 : this.isEmpty() ? -1 : r.isEmpty() ? 1 : this.compareToSameClass(i);
          }
          if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            return r = a, this.getTypeCode() !== r.getTypeCode() ? this.getTypeCode() - r.getTypeCode() : this.isEmpty() && r.isEmpty() ? 0 : this.isEmpty() ? -1 : r.isEmpty() ? 1 : this.compareToSameClass(a, l);
          }
        } }, { key: "getUserData", value: function() {
          return this._userData;
        } }, { key: "getSRID", value: function() {
          return this._SRID;
        } }, { key: "getEnvelope", value: function() {
          return this.getFactory().toGeometry(this.getEnvelopeInternal());
        } }, { key: "checkNotGeometryCollection", value: function(r) {
          if (r.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION) throw new J("This method does not support GeometryCollection arguments");
        } }, { key: "equal", value: function(r, i, a) {
          return a === 0 ? r.equals(i) : r.distance(i) <= a;
        } }, { key: "norm", value: function() {
          var r = this.copy();
          return r.normalize(), r;
        } }, { key: "reverse", value: function() {
          var r = this.reverseInternal();
          return this.envelope != null && (r.envelope = this.envelope.copy()), r.setSRID(this.getSRID()), r;
        } }, { key: "copy", value: function() {
          var r = this.copyInternal();
          return r.envelope = this._envelope == null ? null : this._envelope.copy(), r._SRID = this._SRID, r._userData = this._userData, r;
        } }, { key: "getPrecisionModel", value: function() {
          return this._factory.getPrecisionModel();
        } }, { key: "getEnvelopeInternal", value: function() {
          return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new Le(this._envelope);
        } }, { key: "setSRID", value: function(r) {
          this._SRID = r;
        } }, { key: "setUserData", value: function(r) {
          this._userData = r;
        } }, { key: "compare", value: function(r, i) {
          for (var a = r.iterator(), l = i.iterator(); a.hasNext() && l.hasNext(); ) {
            var g = a.next(), m = l.next(), y = g.compareTo(m);
            if (y !== 0) return y;
          }
          return a.hasNext() ? 1 : l.hasNext() ? -1 : 0;
        } }, { key: "hashCode", value: function() {
          return this.getEnvelopeInternal().hashCode();
        } }, { key: "isEquivalentClass", value: function(r) {
          return this.getClass() === r.getClass();
        } }, { key: "isGeometryCollectionOrDerived", value: function() {
          return this.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION || this.getTypeCode() === o.TYPECODE_MULTIPOINT || this.getTypeCode() === o.TYPECODE_MULTILINESTRING || this.getTypeCode() === o.TYPECODE_MULTIPOLYGON;
        } }, { key: "interfaces_", get: function() {
          return [E, W, w];
        } }, { key: "getClass", value: function() {
          return o;
        } }], [{ key: "hasNonEmptyElements", value: function(r) {
          for (var i = 0; i < r.length; i++) if (!r[i].isEmpty()) return !0;
          return !1;
        } }, { key: "hasNullElements", value: function(r) {
          for (var i = 0; i < r.length; i++) if (r[i] === null) return !0;
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
        return h(o, null, [{ key: "toLocationSymbol", value: function(r) {
          switch (r) {
            case o.EXTERIOR:
              return "e";
            case o.BOUNDARY:
              return "b";
            case o.INTERIOR:
              return "i";
            case o.NONE:
              return "-";
          }
          throw new J("Unknown location value: " + r);
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
        function r(i) {
          var a;
          return u(this, r), (a = s(this, r, [i])).name = Object.keys({ NoSuchElementException: r })[0], a;
        }
        return _(r, o), h(r);
      })(V), ke = (function(o) {
        function r(i) {
          var a;
          return u(this, r), (a = s(this, r, [i])).name = Object.keys({ UnsupportedOperationException: r })[0], a;
        }
        return _(r, o), h(r);
      })(V), ui = (function(o) {
        function r() {
          return u(this, r), s(this, r, arguments);
        }
        return _(r, o), h(r, [{ key: "contains", value: function() {
        } }]);
      })(Ne), Dr = (function(o) {
        function r(i) {
          var a;
          return u(this, r), (a = s(this, r)).map = /* @__PURE__ */ new Map(), i instanceof Ne && a.addAll(i), a;
        }
        return _(r, o), h(r, [{ key: "contains", value: function(i) {
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
        return h((function o(r) {
          u(this, o), this.iterator = r.values();
          var i = this.iterator.next(), a = i.done, l = i.value;
          this.done = a, this.value = l;
        }), [{ key: "next", value: function() {
          if (this.done) throw new De();
          var o = this.value, r = this.iterator.next(), i = r.done, a = r.value;
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
        return h(o, null, [{ key: "opposite", value: function(r) {
          return r === o.LEFT ? o.RIGHT : r === o.RIGHT ? o.LEFT : r;
        } }]);
      })();
      ne.ON = 0, ne.LEFT = 1, ne.RIGHT = 2;
      var Fr = (function(o) {
        function r(i) {
          var a;
          return u(this, r), (a = s(this, r, [i])).name = Object.keys({ EmptyStackException: r })[0], a;
        }
        return _(r, o), h(r);
      })(V), rs = (function(o) {
        function r(i) {
          var a;
          return u(this, r), (a = s(this, r, [i])).name = Object.keys({ IndexOutOfBoundsException: r })[0], a;
        }
        return _(r, o), h(r);
      })(V), bn = (function(o) {
        function r() {
          return u(this, r), s(this, r, arguments);
        }
        return _(r, o), h(r, [{ key: "get", value: function() {
        } }, { key: "set", value: function() {
        } }, { key: "isEmpty", value: function() {
        } }]);
      })(Ne), No = (function(o) {
        function r() {
          var i;
          return u(this, r), (i = s(this, r)).array = [], i;
        }
        return _(r, o), h(r, [{ key: "add", value: function(i) {
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
      function _e(o, r) {
        return o.interfaces_ && o.interfaces_.indexOf(r) > -1;
      }
      var un = (function() {
        return h((function o(r) {
          u(this, o), this.str = r;
        }), [{ key: "append", value: function(o) {
          this.str += o;
        } }, { key: "setCharAt", value: function(o, r) {
          this.str = this.str.substr(0, o) + r + this.str.substr(o + 1);
        } }, { key: "toString", value: function() {
          return this.str;
        } }]);
      })(), ln = (function() {
        function o(r) {
          u(this, o), this.value = r;
        }
        return h(o, [{ key: "intValue", value: function() {
          return this.value;
        } }, { key: "compareTo", value: function(r) {
          return this.value < r ? -1 : this.value > r ? 1 : 0;
        } }], [{ key: "compare", value: function(r, i) {
          return r < i ? -1 : r > i ? 1 : 0;
        } }, { key: "isNan", value: function(r) {
          return Number.isNaN(r);
        } }, { key: "valueOf", value: function(r) {
          return new o(r);
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
        return h(o, [{ key: "le", value: function(r) {
          return this._hi < r._hi || this._hi === r._hi && this._lo <= r._lo;
        } }, { key: "extractSignificantDigits", value: function(r, i) {
          var a = this.abs(), l = o.magnitude(a._hi), g = o.TEN.pow(l);
          (a = a.divide(g)).gt(o.TEN) ? (a = a.divide(o.TEN), l += 1) : a.lt(o.ONE) && (a = a.multiply(o.TEN), l -= 1);
          for (var m = l + 1, y = new un(), k = o.MAX_PRINT_DIGITS - 1, L = 0; L <= k; L++) {
            r && L === m && y.append(".");
            var q = Math.trunc(a._hi);
            if (q < 0) break;
            var X = !1, ee = 0;
            q > 9 ? (X = !0, ee = "9") : ee = "0" + q, y.append(ee), a = a.subtract(o.valueOf(q)).multiply(o.TEN), X && a.selfAdd(o.TEN);
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
            var r = arguments[0];
            return this.add(r.negate());
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return this.add(-i);
          }
        } }, { key: "equals", value: function() {
          if (arguments.length === 1 && arguments[0] instanceof o) {
            var r = arguments[0];
            return this._hi === r._hi && this._lo === r._lo;
          }
        } }, { key: "isZero", value: function() {
          return this._hi === 0 && this._lo === 0;
        } }, { key: "selfSubtract", value: function() {
          if (arguments[0] instanceof o) {
            var r = arguments[0];
            return this.isNaN() ? this : this.selfAdd(-r._hi, -r._lo);
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return this.isNaN() ? this : this.selfAdd(-i, 0);
          }
        } }, { key: "getSpecialNumberString", value: function() {
          return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
        } }, { key: "min", value: function(r) {
          return this.le(r) ? this : r;
        } }, { key: "selfDivide", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var r = arguments[0];
              return this.selfDivide(r._hi, r._lo);
            }
            if (typeof arguments[0] == "number") {
              var i = arguments[0];
              return this.selfDivide(i, 0);
            }
          } else if (arguments.length === 2) {
            var a, l, g, m, y = arguments[0], k = arguments[1], L = null, q = null, X = null, ee = null;
            return g = this._hi / y, ee = (L = (X = o.SPLIT * g) - (L = X - g)) * (q = (ee = o.SPLIT * y) - (q = ee - y)) - (m = g * y) + L * (l = y - q) + (a = g - L) * q + a * l, ee = g + (X = (this._hi - m - ee + this._lo - g * k) / y), this._hi = ee, this._lo = g - ee + X, this;
          }
        } }, { key: "dump", value: function() {
          return "DD<" + this._hi + ", " + this._lo + ">";
        } }, { key: "divide", value: function() {
          if (arguments[0] instanceof o) {
            var r, i, a, l, g = arguments[0], m = null, y = null, k = null, L = null;
            return r = (a = this._hi / g._hi) - (m = (k = o.SPLIT * a) - (m = k - a)), L = m * (y = (L = o.SPLIT * g._hi) - (y = L - g._hi)) - (l = a * g._hi) + m * (i = g._hi - y) + r * y + r * i, new o(L = a + (k = (this._hi - l - L + this._lo - a * g._lo) / g._hi), a - L + k);
          }
          if (typeof arguments[0] == "number") {
            var q = arguments[0];
            return Z.isNaN(q) ? o.createNaN() : o.copy(this).selfDivide(q, 0);
          }
        } }, { key: "ge", value: function(r) {
          return this._hi > r._hi || this._hi === r._hi && this._lo >= r._lo;
        } }, { key: "pow", value: function(r) {
          if (r === 0) return o.valueOf(1);
          var i = new o(this), a = o.valueOf(1), l = Math.abs(r);
          if (l > 1) for (; l > 0; ) l % 2 == 1 && a.selfMultiply(i), (l /= 2) > 0 && (i = i.sqr());
          else a = i;
          return r < 0 ? a.reciprocal() : a;
        } }, { key: "ceil", value: function() {
          if (this.isNaN()) return o.NaN;
          var r = Math.ceil(this._hi), i = 0;
          return r === this._hi && (i = Math.ceil(this._lo)), new o(r, i);
        } }, { key: "compareTo", value: function(r) {
          var i = r;
          return this._hi < i._hi ? -1 : this._hi > i._hi ? 1 : this._lo < i._lo ? -1 : this._lo > i._lo ? 1 : 0;
        } }, { key: "rint", value: function() {
          return this.isNaN() ? this : this.add(0.5).floor();
        } }, { key: "setValue", value: function() {
          if (arguments[0] instanceof o) {
            var r = arguments[0];
            return this.init(r), this;
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return this.init(i), this;
          }
        } }, { key: "max", value: function(r) {
          return this.ge(r) ? this : r;
        } }, { key: "sqrt", value: function() {
          if (this.isZero()) return o.valueOf(0);
          if (this.isNegative()) return o.NaN;
          var r = 1 / Math.sqrt(this._hi), i = this._hi * r, a = o.valueOf(i), l = this.subtract(a.sqr())._hi * (0.5 * r);
          return a.add(l);
        } }, { key: "selfAdd", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var r = arguments[0];
              return this.selfAdd(r._hi, r._lo);
            }
            if (typeof arguments[0] == "number") {
              var i, a, l, g, m, y = arguments[0], k = null;
              return k = (l = this._hi + y) - (g = l - this._hi), a = (m = (k = y - g + (this._hi - k)) + this._lo) + (l - (i = l + m)), this._hi = i + a, this._lo = a + (i - this._hi), this;
            }
          } else if (arguments.length === 2) {
            var L, q, X, ee, ue = arguments[0], fe = arguments[1], me = null, Te = null, Ae = null;
            X = this._hi + ue, q = this._lo + fe, Te = X - (Ae = X - this._hi), me = q - (ee = q - this._lo);
            var Fe = (L = X + (Ae = (Te = ue - Ae + (this._hi - Te)) + q)) + (Ae = (me = fe - ee + (this._lo - me)) + (Ae + (X - L))), ct = Ae + (L - Fe);
            return this._hi = Fe, this._lo = ct, this;
          }
        } }, { key: "selfMultiply", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var r = arguments[0];
              return this.selfMultiply(r._hi, r._lo);
            }
            if (typeof arguments[0] == "number") {
              var i = arguments[0];
              return this.selfMultiply(i, 0);
            }
          } else if (arguments.length === 2) {
            var a, l, g = arguments[0], m = arguments[1], y = null, k = null, L = null, q = null;
            y = (L = o.SPLIT * this._hi) - this._hi, q = o.SPLIT * g, y = L - y, a = this._hi - y, k = q - g;
            var X = (L = this._hi * g) + (q = y * (k = q - k) - L + y * (l = g - k) + a * k + a * l + (this._hi * m + this._lo * g)), ee = q + (y = L - X);
            return this._hi = X, this._lo = ee, this;
          }
        } }, { key: "selfSqr", value: function() {
          return this.selfMultiply(this);
        } }, { key: "floor", value: function() {
          if (this.isNaN()) return o.NaN;
          var r = Math.floor(this._hi), i = 0;
          return r === this._hi && (i = Math.floor(this._lo)), new o(r, i);
        } }, { key: "negate", value: function() {
          return this.isNaN() ? this : new o(-this._hi, -this._lo);
        } }, { key: "clone", value: function() {
          try {
            return null;
          } catch (r) {
            if (r instanceof CloneNotSupportedException) return null;
            throw r;
          }
        } }, { key: "multiply", value: function() {
          if (arguments[0] instanceof o) {
            var r = arguments[0];
            return r.isNaN() ? o.createNaN() : o.copy(this).selfMultiply(r);
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
          var r = o.magnitude(this._hi);
          return r >= -3 && r <= 20 ? this.toStandardNotation() : this.toSciNotation();
        } }, { key: "toStandardNotation", value: function() {
          var r = this.getSpecialNumberString();
          if (r !== null) return r;
          var i = new Array(1).fill(null), a = this.extractSignificantDigits(!0, i), l = i[0] + 1, g = a;
          if (a.charAt(0) === ".") g = "0" + a;
          else if (l < 0) g = "0." + o.stringOfChar("0", -l) + a;
          else if (a.indexOf(".") === -1) {
            var m = l - a.length;
            g = a + o.stringOfChar("0", m) + ".0";
          }
          return this.isNegative() ? "-" + g : g;
        } }, { key: "reciprocal", value: function() {
          var r, i, a, l, g = null, m = null, y = null, k = null;
          r = (a = 1 / this._hi) - (g = (y = o.SPLIT * a) - (g = y - a)), m = (k = o.SPLIT * this._hi) - this._hi;
          var L = a + (y = (1 - (l = a * this._hi) - (k = g * (m = k - m) - l + g * (i = this._hi - m) + r * m + r * i) - a * this._lo) / this._hi);
          return new o(L, a - L + y);
        } }, { key: "toSciNotation", value: function() {
          if (this.isZero()) return o.SCI_NOT_ZERO;
          var r = this.getSpecialNumberString();
          if (r !== null) return r;
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
        } }, { key: "lt", value: function(r) {
          return this._hi < r._hi || this._hi === r._hi && this._lo < r._lo;
        } }, { key: "add", value: function() {
          if (arguments[0] instanceof o) {
            var r = arguments[0];
            return o.copy(this).selfAdd(r);
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return o.copy(this).selfAdd(i);
          }
        } }, { key: "init", value: function() {
          if (arguments.length === 1) {
            if (typeof arguments[0] == "number") {
              var r = arguments[0];
              this._hi = r, this._lo = 0;
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this._hi = i._hi, this._lo = i._lo;
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            this._hi = a, this._lo = l;
          }
        } }, { key: "gt", value: function(r) {
          return this._hi > r._hi || this._hi === r._hi && this._lo > r._lo;
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
              var r = arguments[0];
              this.init(r);
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
            var r = arguments[0], i = arguments[1], a = arguments[2], l = arguments[3];
            return o.determinant(o.valueOf(r), o.valueOf(i), o.valueOf(a), o.valueOf(l));
          }
          if (arguments[3] instanceof o && arguments[2] instanceof o && arguments[0] instanceof o && arguments[1] instanceof o) {
            var g = arguments[1], m = arguments[2], y = arguments[3];
            return arguments[0].multiply(y).selfSubtract(g.multiply(m));
          }
        } }, { key: "sqr", value: function(r) {
          return o.valueOf(r).selfMultiply(r);
        } }, { key: "valueOf", value: function() {
          if (typeof arguments[0] == "string") {
            var r = arguments[0];
            return o.parse(r);
          }
          if (typeof arguments[0] == "number") return new o(arguments[0]);
        } }, { key: "sqrt", value: function(r) {
          return o.valueOf(r).sqrt();
        } }, { key: "parse", value: function(r) {
          for (var i = 0, a = r.length; Ln.isWhitespace(r.charAt(i)); ) i++;
          var l = !1;
          if (i < a) {
            var g = r.charAt(i);
            g !== "-" && g !== "+" || (i++, g === "-" && (l = !0));
          }
          for (var m = new o(), y = 0, k = 0, L = 0, q = !1; !(i >= a); ) {
            var X = r.charAt(i);
            if (i++, Ln.isDigit(X)) {
              var ee = X - "0";
              m.selfMultiply(o.TEN), m.selfAdd(ee), y++;
            } else {
              if (X !== ".") {
                if (X === "e" || X === "E") {
                  var ue = r.substring(i);
                  try {
                    L = ln.parseInt(ue);
                  } catch (Fe) {
                    throw Fe instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + ue + " in string " + r) : Fe;
                  }
                  break;
                }
                throw new NumberFormatException("Unexpected character '" + X + "' at position " + i + " in string " + r);
              }
              k = y, q = !0;
            }
          }
          var fe = m;
          q || (k = y);
          var me = y - k - L;
          if (me === 0) fe = m;
          else if (me > 0) {
            var Te = o.TEN.pow(me);
            fe = m.divide(Te);
          } else if (me < 0) {
            var Ae = o.TEN.pow(-me);
            fe = m.multiply(Ae);
          }
          return l ? fe.negate() : fe;
        } }, { key: "createNaN", value: function() {
          return new o(Z.NaN, Z.NaN);
        } }, { key: "copy", value: function(r) {
          return new o(r);
        } }, { key: "magnitude", value: function(r) {
          var i = Math.abs(r), a = Math.log(i) / Math.log(10), l = Math.trunc(Math.floor(a));
          return 10 * Math.pow(10, l) <= i && (l += 1), l;
        } }, { key: "stringOfChar", value: function(r, i) {
          for (var a = new un(), l = 0; l < i; l++) a.append(r);
          return a.toString();
        } }]);
      })();
      ve.PI = new ve(3.141592653589793, 12246467991473532e-32), ve.TWO_PI = new ve(6.283185307179586, 24492935982947064e-32), ve.PI_2 = new ve(1.5707963267948966, 6123233995736766e-32), ve.E = new ve(2.718281828459045, 14456468917292502e-32), ve.NaN = new ve(Z.NaN, Z.NaN), ve.EPS = 123259516440783e-46, ve.SPLIT = 134217729, ve.MAX_PRINT_DIGITS = 32, ve.TEN = ve.valueOf(10), ve.ONE = ve.valueOf(1), ve.SCI_NOT_EXPONENT_CHAR = "E", ve.SCI_NOT_ZERO = "0.0E0";
      var li = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "orientationIndex", value: function(r, i, a) {
          var l = o.orientationIndexFilter(r, i, a);
          if (l <= 1) return l;
          var g = ve.valueOf(i.x).selfAdd(-r.x), m = ve.valueOf(i.y).selfAdd(-r.y), y = ve.valueOf(a.x).selfAdd(-i.x), k = ve.valueOf(a.y).selfAdd(-i.y);
          return g.selfMultiply(k).selfSubtract(m.selfMultiply(y)).signum();
        } }, { key: "signOfDet2x2", value: function() {
          if (arguments[3] instanceof ve && arguments[2] instanceof ve && arguments[0] instanceof ve && arguments[1] instanceof ve) {
            var r = arguments[1], i = arguments[2], a = arguments[3];
            return arguments[0].multiply(a).selfSubtract(r.multiply(i)).signum();
          }
          if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3], k = ve.valueOf(l), L = ve.valueOf(g), q = ve.valueOf(m), X = ve.valueOf(y);
            return k.multiply(X).selfSubtract(L.multiply(q)).signum();
          }
        } }, { key: "intersection", value: function(r, i, a, l) {
          var g = new ve(r.y).selfSubtract(i.y), m = new ve(i.x).selfSubtract(r.x), y = new ve(r.x).selfMultiply(i.y).selfSubtract(new ve(i.x).selfMultiply(r.y)), k = new ve(a.y).selfSubtract(l.y), L = new ve(l.x).selfSubtract(a.x), q = new ve(a.x).selfMultiply(l.y).selfSubtract(new ve(l.x).selfMultiply(a.y)), X = m.multiply(q).selfSubtract(L.multiply(y)), ee = k.multiply(y).selfSubtract(g.multiply(q)), ue = g.multiply(L).selfSubtract(k.multiply(m)), fe = X.selfDivide(ue).doubleValue(), me = ee.selfDivide(ue).doubleValue();
          return Z.isNaN(fe) || Z.isInfinite(fe) || Z.isNaN(me) || Z.isInfinite(me) ? null : new $(fe, me);
        } }, { key: "orientationIndexFilter", value: function(r, i, a) {
          var l = null, g = (r.x - a.x) * (i.y - a.y), m = (r.y - a.y) * (i.x - a.x), y = g - m;
          if (g > 0) {
            if (m <= 0) return o.signum(y);
            l = g + m;
          } else {
            if (!(g < 0) || m >= 0) return o.signum(y);
            l = -g - m;
          }
          var k = o.DP_SAFE_EPSILON * l;
          return y >= k || -y >= k ? o.signum(y) : 2;
        } }, { key: "signum", value: function(r) {
          return r > 0 ? 1 : r < 0 ? -1 : 0;
        } }]);
      })();
      li.DP_SAFE_EPSILON = 1e-15;
      var Se = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "getM", value: function(o) {
          if (this.hasM()) {
            var r = this.getDimension() - this.getMeasures();
            return this.getOrdinate(o, r);
          }
          return Z.NaN;
        } }, { key: "setOrdinate", value: function(o, r, i) {
        } }, { key: "getZ", value: function(o) {
          return this.hasZ() ? this.getOrdinate(o, 2) : Z.NaN;
        } }, { key: "size", value: function() {
        } }, { key: "getOrdinate", value: function(o, r) {
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
        return h(o, null, [{ key: "index", value: function(r, i, a) {
          return li.orientationIndex(r, i, a);
        } }, { key: "isCCW", value: function() {
          if (arguments[0] instanceof Array) {
            var r = arguments[0], i = r.length - 1;
            if (i < 3) throw new J("Ring has fewer than 4 points, so orientation cannot be determined");
            for (var a = r[0], l = 0, g = 1; g <= i; g++) {
              var m = r[g];
              m.y > a.y && (a = m, l = g);
            }
            var y = l;
            do
              (y -= 1) < 0 && (y = i);
            while (r[y].equals2D(a) && y !== l);
            var k = l;
            do
              k = (k + 1) % i;
            while (r[k].equals2D(a) && k !== l);
            var L = r[y], q = r[k];
            if (L.equals2D(a) || q.equals2D(a) || L.equals2D(q)) return !1;
            var X = o.index(L, a, q);
            return X === 0 ? L.x > q.x : X > 0;
          }
          if (_e(arguments[0], Se)) {
            var ee = arguments[0], ue = ee.size() - 1;
            if (ue < 3) throw new J("Ring has fewer than 4 points, so orientation cannot be determined");
            for (var fe = ee.getCoordinate(0), me = 0, Te = 1; Te <= ue; Te++) {
              var Ae = ee.getCoordinate(Te);
              Ae.y > fe.y && (fe = Ae, me = Te);
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
        } }, { key: "getRightmostSide", value: function(o, r) {
          var i = this.getRightmostSideOfSegment(o, r);
          return i < 0 && (i = this.getRightmostSideOfSegment(o, r - 1)), i < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(o)), i;
        } }, { key: "findRightmostEdgeAtVertex", value: function() {
          var o = this._minDe.getEdge().getCoordinates();
          ae.isTrue(this._minIndex > 0 && this._minIndex < o.length, "rightmost point expected to be interior vertex of edge");
          var r = o[this._minIndex - 1], i = o[this._minIndex + 1], a = ye.index(this._minCoord, i, r), l = !1;
          (r.y < this._minCoord.y && i.y < this._minCoord.y && a === ye.COUNTERCLOCKWISE || r.y > this._minCoord.y && i.y > this._minCoord.y && a === ye.CLOCKWISE) && (l = !0), l && (this._minIndex = this._minIndex - 1);
        } }, { key: "getRightmostSideOfSegment", value: function(o, r) {
          var i = o.getEdge().getCoordinates();
          if (r < 0 || r + 1 >= i.length || i[r].y === i[r + 1].y) return -1;
          var a = ne.LEFT;
          return i[r].y < i[r + 1].y && (a = ne.RIGHT), a;
        } }, { key: "getEdge", value: function() {
          return this._orientedDe;
        } }, { key: "checkForRightmostCoordinate", value: function(o) {
          for (var r = o.getEdge().getCoordinates(), i = 0; i < r.length - 1; i++) (this._minCoord === null || r[i].x > this._minCoord.x) && (this._minDe = o, this._minIndex = i, this._minCoord = r[i]);
        } }, { key: "findRightmostEdgeAtNode", value: function() {
          var o = this._minDe.getNode().getEdges();
          this._minDe = o.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
        } }, { key: "findEdge", value: function(o) {
          for (var r = o.iterator(); r.hasNext(); ) {
            var i = r.next();
            i.isForward() && this.checkForRightmostCoordinate(i);
          }
          ae.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === ne.LEFT && (this._orientedDe = this._minDe.getSym());
        } }], [{ key: "constructor_", value: function() {
          this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
        } }]);
      })(), Nt = (function(o) {
        function r(i, a) {
          var l;
          return u(this, r), (l = s(this, r, [a ? i + " [ " + a + " ]" : i])).pt = a ? new $(a) : void 0, l.name = Object.keys({ TopologyException: r })[0], l;
        }
        return _(r, o), h(r, [{ key: "getCoordinate", value: function() {
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
        function r(i) {
          var a;
          return u(this, r), (a = s(this, r)).array = [], i instanceof Ne && a.addAll(i), a;
        }
        return _(r, o), h(r, [{ key: "interfaces_", get: function() {
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
        return h((function o(r) {
          u(this, o), this.arrayList = r, this.position = 0;
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
          for (var r = null, i = o.getEdges().iterator(); i.hasNext(); ) {
            var a = i.next();
            if (a.isVisited() || a.getSym().isVisited()) {
              r = a;
              break;
            }
          }
          if (r === null) throw new Nt("unable to find edge to compute depths at " + o.getCoordinate());
          o.getEdges().computeDepths(r);
          for (var l = o.getEdges().iterator(); l.hasNext(); ) {
            var g = l.next();
            g.setVisited(!0), this.copySymDepths(g);
          }
        } }, { key: "computeDepth", value: function(o) {
          this.clearVisitedEdges();
          var r = this._finder.getEdge();
          r.getNode(), r.getLabel(), r.setEdgeDepths(ne.RIGHT, o), this.copySymDepths(r), this.computeDepths(r);
        } }, { key: "create", value: function(o) {
          this.addReachable(o), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
        } }, { key: "findResultEdges", value: function() {
          for (var o = this._dirEdgeList.iterator(); o.hasNext(); ) {
            var r = o.next();
            r.getDepth(ne.RIGHT) >= 1 && r.getDepth(ne.LEFT) <= 0 && !r.isInteriorAreaEdge() && r.setInResult(!0);
          }
        } }, { key: "computeDepths", value: function(o) {
          var r = new Dr(), i = new ci(), a = o.getNode();
          for (i.addLast(a), r.add(a), o.setVisited(!0); !i.isEmpty(); ) {
            var l = i.removeFirst();
            r.add(l), this.computeNodeDepth(l);
            for (var g = l.getEdges().iterator(); g.hasNext(); ) {
              var m = g.next().getSym();
              if (!m.isVisited()) {
                var y = m.getNode();
                r.contains(y) || (i.addLast(y), r.add(y));
              }
            }
          }
        } }, { key: "compareTo", value: function(o) {
          var r = o;
          return this._rightMostCoord.x < r._rightMostCoord.x ? -1 : this._rightMostCoord.x > r._rightMostCoord.x ? 1 : 0;
        } }, { key: "getEnvelope", value: function() {
          if (this._env === null) {
            for (var o = new Le(), r = this._dirEdgeList.iterator(); r.hasNext(); ) for (var i = r.next().getEdge().getCoordinates(), a = 0; a < i.length - 1; a++) o.expandToInclude(i[a]);
            this._env = o;
          }
          return this._env;
        } }, { key: "addReachable", value: function(o) {
          var r = new No();
          for (r.add(o); !r.empty(); ) {
            var i = r.pop();
            this.add(i, r);
          }
        } }, { key: "copySymDepths", value: function(o) {
          var r = o.getSym();
          r.setDepth(ne.LEFT, o.getDepth(ne.RIGHT)), r.setDepth(ne.RIGHT, o.getDepth(ne.LEFT));
        } }, { key: "add", value: function(o, r) {
          o.setVisited(!0), this._nodes.add(o);
          for (var i = o.getEdges().iterator(); i.hasNext(); ) {
            var a = i.next();
            this._dirEdgeList.add(a);
            var l = a.getSym().getNode();
            l.isVisited() || r.push(l);
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
        }), null, [{ key: "intersection", value: function(o, r, i, a) {
          var l = o.x < r.x ? o.x : r.x, g = o.y < r.y ? o.y : r.y, m = o.x > r.x ? o.x : r.x, y = o.y > r.y ? o.y : r.y, k = i.x < a.x ? i.x : a.x, L = i.y < a.y ? i.y : a.y, q = i.x > a.x ? i.x : a.x, X = i.y > a.y ? i.y : a.y, ee = ((l > k ? l : k) + (m < q ? m : q)) / 2, ue = ((g > L ? g : L) + (y < X ? y : X)) / 2, fe = o.x - ee, me = o.y - ue, Te = r.x - ee, Ae = r.y - ue, Fe = i.x - ee, ct = i.y - ue, ft = a.x - ee, Yr = a.y - ue, hs = me - Ae, Rc = Te - fe, Dc = fe * Ae - Te * me, Fc = ct - Yr, Gc = ft - Fe, Bc = Fe * Yr - ft * ct, Uc = hs * Gc - Fc * Rc, Yo = (Rc * Bc - Gc * Dc) / Uc, Ho = (Fc * Dc - hs * Bc) / Uc;
          return Z.isNaN(Yo) || Z.isInfinite(Yo) || Z.isNaN(Ho) || Z.isInfinite(Ho) ? null : new $(Yo + ee, Ho + ue);
        } }]);
      })(), Pt = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "arraycopy", value: function(o, r, i, a, l) {
          for (var g = 0, m = r; m < r + l; m++) i[a + g] = o[m], g++;
        } }, { key: "getProperty", value: function(o) {
          return { "line.separator": `
` }[o];
        } }]);
      })(), An = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "log10", value: function(r) {
          var i = Math.log(r);
          return Z.isInfinite(i) || Z.isNaN(i) ? i : i / o.LOG_10;
        } }, { key: "min", value: function(r, i, a, l) {
          var g = r;
          return i < g && (g = i), a < g && (g = a), l < g && (g = l), g;
        } }, { key: "clamp", value: function() {
          if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var r = arguments[0], i = arguments[1], a = arguments[2];
            return r < i ? i : r > a ? a : r;
          }
          if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var l = arguments[0], g = arguments[1], m = arguments[2];
            return l < g ? g : l > m ? m : l;
          }
        } }, { key: "wrap", value: function(r, i) {
          return r < 0 ? i - -r % i : r % i;
        } }, { key: "max", value: function() {
          if (arguments.length === 3) {
            var r = arguments[1], i = arguments[2], a = arguments[0];
            return r > a && (a = r), i > a && (a = i), a;
          }
          if (arguments.length === 4) {
            var l = arguments[1], g = arguments[2], m = arguments[3], y = arguments[0];
            return l > y && (y = l), g > y && (y = g), m > y && (y = m), y;
          }
        } }, { key: "average", value: function(r, i) {
          return (r + i) / 2;
        } }]);
      })();
      An.LOG_10 = Math.log(10);
      var Et = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "segmentToSegment", value: function(r, i, a, l) {
          if (r.equals(i)) return o.pointToSegment(r, a, l);
          if (a.equals(l)) return o.pointToSegment(l, r, i);
          var g = !1;
          if (Le.intersects(r, i, a, l)) {
            var m = (i.x - r.x) * (l.y - a.y) - (i.y - r.y) * (l.x - a.x);
            if (m === 0) g = !0;
            else {
              var y = (r.y - a.y) * (l.x - a.x) - (r.x - a.x) * (l.y - a.y), k = ((r.y - a.y) * (i.x - r.x) - (r.x - a.x) * (i.y - r.y)) / m, L = y / m;
              (L < 0 || L > 1 || k < 0 || k > 1) && (g = !0);
            }
          } else g = !0;
          return g ? An.min(o.pointToSegment(r, a, l), o.pointToSegment(i, a, l), o.pointToSegment(a, r, i), o.pointToSegment(l, r, i)) : 0;
        } }, { key: "pointToSegment", value: function(r, i, a) {
          if (i.x === a.x && i.y === a.y) return r.distance(i);
          var l = (a.x - i.x) * (a.x - i.x) + (a.y - i.y) * (a.y - i.y), g = ((r.x - i.x) * (a.x - i.x) + (r.y - i.y) * (a.y - i.y)) / l;
          if (g <= 0) return r.distance(i);
          if (g >= 1) return r.distance(a);
          var m = ((i.y - r.y) * (a.x - i.x) - (i.x - r.x) * (a.y - i.y)) / l;
          return Math.abs(m) * Math.sqrt(l);
        } }, { key: "pointToLinePerpendicular", value: function(r, i, a) {
          var l = (a.x - i.x) * (a.x - i.x) + (a.y - i.y) * (a.y - i.y), g = ((i.y - r.y) * (a.x - i.x) - (i.x - r.x) * (a.y - i.y)) / l;
          return Math.abs(g) * Math.sqrt(l);
        } }, { key: "pointToSegmentString", value: function(r, i) {
          if (i.length === 0) throw new J("Line array must contain at least one vertex");
          for (var a = r.distance(i[0]), l = 0; l < i.length - 1; l++) {
            var g = o.pointToSegment(r, i[l], i[l + 1]);
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
              var o = arguments[0], r = arguments[1];
              return this.create(o, r);
            }
          }
        } }]);
      })(), Tn = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "filter", value: function(o) {
        } }]);
      })(), Po = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "ofLine", value: function(o) {
          var r = o.size();
          if (r <= 1) return 0;
          var i = 0, a = new $();
          o.getCoordinate(0, a);
          for (var l = a.x, g = a.y, m = 1; m < r; m++) {
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
        return h(o, null, [{ key: "copyCoord", value: function(r, i, a, l) {
          for (var g = Math.min(r.getDimension(), a.getDimension()), m = 0; m < g; m++) a.setOrdinate(l, m, r.getOrdinate(i, m));
        } }, { key: "isRing", value: function(r) {
          var i = r.size();
          return i === 0 || !(i <= 3) && r.getOrdinate(0, Se.X) === r.getOrdinate(i - 1, Se.X) && r.getOrdinate(0, Se.Y) === r.getOrdinate(i - 1, Se.Y);
        } }, { key: "scroll", value: function() {
          if (arguments.length === 2) {
            if (_e(arguments[0], Se) && Number.isInteger(arguments[1])) {
              var r = arguments[0], i = arguments[1];
              o.scroll(r, i, o.isRing(r));
            } else if (_e(arguments[0], Se) && arguments[1] instanceof $) {
              var a = arguments[0], l = arguments[1], g = o.indexOf(l, a);
              if (g <= 0) return null;
              o.scroll(a, g);
            }
          } else if (arguments.length === 3) {
            var m = arguments[0], y = arguments[1], k = arguments[2];
            if (y <= 0) return null;
            for (var L = m.copy(), q = k ? m.size() - 1 : m.size(), X = 0; X < q; X++) for (var ee = 0; ee < m.getDimension(); ee++) m.setOrdinate(X, ee, L.getOrdinate((y + X) % q, ee));
            if (k) for (var ue = 0; ue < m.getDimension(); ue++) m.setOrdinate(q, ue, m.getOrdinate(0, ue));
          }
        } }, { key: "isEqual", value: function(r, i) {
          var a = r.size();
          if (a !== i.size()) return !1;
          for (var l = Math.min(r.getDimension(), i.getDimension()), g = 0; g < a; g++) for (var m = 0; m < l; m++) {
            var y = r.getOrdinate(g, m), k = i.getOrdinate(g, m);
            if (r.getOrdinate(g, m) !== i.getOrdinate(g, m) && (!Z.isNaN(y) || !Z.isNaN(k))) return !1;
          }
          return !0;
        } }, { key: "minCoordinateIndex", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            return o.minCoordinateIndex(r, 0, r.size() - 1);
          }
          if (arguments.length === 3) {
            for (var i = arguments[0], a = arguments[2], l = -1, g = null, m = arguments[1]; m <= a; m++) {
              var y = i.getCoordinate(m);
              (g === null || g.compareTo(y) > 0) && (g = y, l = m);
            }
            return l;
          }
        } }, { key: "extend", value: function(r, i, a) {
          var l = r.create(a, i.getDimension()), g = i.size();
          if (o.copy(i, 0, l, 0, g), g > 0) for (var m = g; m < a; m++) o.copy(i, g - 1, l, m, 1);
          return l;
        } }, { key: "reverse", value: function(r) {
          for (var i = r.size() - 1, a = Math.trunc(i / 2), l = 0; l <= a; l++) o.swap(r, l, i - l);
        } }, { key: "swap", value: function(r, i, a) {
          if (i === a) return null;
          for (var l = 0; l < r.getDimension(); l++) {
            var g = r.getOrdinate(i, l);
            r.setOrdinate(i, l, r.getOrdinate(a, l)), r.setOrdinate(a, l, g);
          }
        } }, { key: "copy", value: function(r, i, a, l, g) {
          for (var m = 0; m < g; m++) o.copyCoord(r, i + m, a, l + m);
        } }, { key: "ensureValidRing", value: function(r, i) {
          var a = i.size();
          return a === 0 ? i : a <= 3 ? o.createClosedRing(r, i, 4) : i.getOrdinate(0, Se.X) === i.getOrdinate(a - 1, Se.X) && i.getOrdinate(0, Se.Y) === i.getOrdinate(a - 1, Se.Y) ? i : o.createClosedRing(r, i, a + 1);
        } }, { key: "indexOf", value: function(r, i) {
          for (var a = 0; a < i.size(); a++) if (r.x === i.getOrdinate(a, Se.X) && r.y === i.getOrdinate(a, Se.Y)) return a;
          return -1;
        } }, { key: "createClosedRing", value: function(r, i, a) {
          var l = r.create(a, i.getDimension()), g = i.size();
          o.copy(i, 0, l, 0, g);
          for (var m = g; m < a; m++) o.copy(i, 0, l, m, 1);
          return l;
        } }, { key: "minCoordinate", value: function(r) {
          for (var i = null, a = 0; a < r.size(); a++) {
            var l = r.getCoordinate(a);
            (i === null || i.compareTo(l) > 0) && (i = l);
          }
          return i;
        } }]);
      })(), ie = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "toDimensionSymbol", value: function(r) {
          switch (r) {
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
          throw new J("Unknown dimension value: " + r);
        } }, { key: "toDimensionValue", value: function(r) {
          switch (Ln.toUpperCase(r)) {
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
          throw new J("Unknown dimension symbol: " + r);
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
        }), [{ key: "filter", value: function(o, r) {
        } }, { key: "isDone", value: function() {
        } }, { key: "isGeometryChanged", value: function() {
        } }]);
      })(), jn = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "computeEnvelopeInternal", value: function() {
          return this.isEmpty() ? new Le() : this._points.expandEnvelope(new Le());
        } }, { key: "isRing", value: function() {
          return this.isClosed() && this.isSimple();
        } }, { key: "getCoordinates", value: function() {
          return this._points.toCoordinateArray();
        } }, { key: "copyInternal", value: function() {
          return new r(this._points.copy(), this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            if (!this.isEquivalentClass(i)) return !1;
            var l = i;
            if (this._points.size() !== l._points.size()) return !1;
            for (var g = 0; g < this._points.size(); g++) if (!this.equal(this._points.getCoordinate(g), l._points.getCoordinate(g), a)) return !1;
            return !0;
          }
          return S(r, "equalsExact", this, 1).apply(this, arguments);
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
          if (_e(arguments[0], Tn)) for (var i = arguments[0], a = 0; a < this._points.size(); a++) i.filter(this._points.getCoordinate(a));
          else if (_e(arguments[0], Br)) {
            var l = arguments[0];
            if (this._points.size() === 0) return null;
            for (var g = 0; g < this._points.size() && (l.filter(this._points, g), !l.isDone()); g++) ;
            l.isGeometryChanged() && this.geometryChanged();
          } else _e(arguments[0], hi) ? arguments[0].filter(this) : _e(arguments[0], U) && arguments[0].filter(this);
        } }, { key: "getBoundary", value: function() {
          throw new ke();
        } }, { key: "isEquivalentClass", value: function(i) {
          return i instanceof r;
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
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "computeEnvelopeInternal", value: function() {
          if (this.isEmpty()) return new Le();
          var i = new Le();
          return i.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), i;
        } }, { key: "getCoordinates", value: function() {
          return this.isEmpty() ? [] : [this.getCoordinate()];
        } }, { key: "copyInternal", value: function() {
          return new r(this._coordinates.copy(), this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && (!(!this.isEmpty() || !i.isEmpty()) || this.isEmpty() === i.isEmpty() && this.equal(i.getCoordinate(), this.getCoordinate(), a));
          }
          return S(r, "equalsExact", this, 1).apply(this, arguments);
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
          if (_e(arguments[0], Tn)) {
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
            var r = arguments[0];
            return Math.abs(o.ofRingSigned(r));
          }
          if (_e(arguments[0], Se)) {
            var i = arguments[0];
            return Math.abs(o.ofRingSigned(i));
          }
        } }, { key: "ofRingSigned", value: function() {
          if (arguments[0] instanceof Array) {
            var r = arguments[0];
            if (r.length < 3) return 0;
            for (var i = 0, a = r[0].x, l = 1; l < r.length - 1; l++) {
              var g = r[l].x - a, m = r[l + 1].y;
              i += g * (r[l - 1].y - m);
            }
            return i / 2;
          }
          if (_e(arguments[0], Se)) {
            var y = arguments[0], k = y.size();
            if (k < 3) return 0;
            var L = new $(), q = new $(), X = new $();
            y.getCoordinate(0, q), y.getCoordinate(1, X);
            var ee = q.x;
            X.x -= ee;
            for (var ue = 0, fe = 1; fe < k - 1; fe++) L.y = q.y, q.x = X.x, q.y = X.y, y.getCoordinate(fe + 1, X), X.x -= ee, ue += q.x * (L.y - X.y);
            return ue / 2;
          }
        } }]);
      })(), rt = (function() {
        return h((function o() {
          u(this, o);
        }), null, [{ key: "sort", value: function() {
          var o = arguments, r = arguments[0];
          if (arguments.length === 1) r.sort((function(ee, ue) {
            return ee.compareTo(ue);
          }));
          else if (arguments.length === 2) r.sort((function(ee, ue) {
            return o[1].compare(ee, ue);
          }));
          else if (arguments.length === 3) {
            var i = r.slice(arguments[1], arguments[2]);
            i.sort();
            var a = r.slice(0, arguments[1]).concat(i, r.slice(arguments[2], r.length));
            r.splice(0, r.length);
            var l, g = p(a);
            try {
              for (g.s(); !(l = g.n()).done; ) {
                var m = l.value;
                r.push(m);
              }
            } catch (ee) {
              g.e(ee);
            } finally {
              g.f();
            }
          } else if (arguments.length === 4) {
            var y = r.slice(arguments[1], arguments[2]);
            y.sort((function(ee, ue) {
              return o[3].compare(ee, ue);
            }));
            var k = r.slice(0, arguments[1]).concat(y, r.slice(arguments[2], r.length));
            r.splice(0, r.length);
            var L, q = p(k);
            try {
              for (q.s(); !(L = q.n()).done; ) {
                var X = L.value;
                r.push(X);
              }
            } catch (ee) {
              q.e(ee);
            } finally {
              q.f();
            }
          }
        } }, { key: "asList", value: function(o) {
          var r, i = new de(), a = p(o);
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var l = r.value;
              i.add(l);
            }
          } catch (g) {
            a.e(g);
          } finally {
            a.f();
          }
          return i;
        } }, { key: "copyOf", value: function(o, r) {
          return o.slice(0, r);
        } }]);
      })(), Cn = h((function o() {
        u(this, o);
      })), Ur = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "computeEnvelopeInternal", value: function() {
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
          return new r(i, a, this._factory);
        } }, { key: "isRectangle", value: function() {
          if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5) return !1;
          for (var i = this._shell.getCoordinateSequence(), a = this.getEnvelopeInternal(), l = 0; l < 5; l++) {
            var g = i.getX(l);
            if (g !== a.getMinX() && g !== a.getMaxX()) return !1;
            var m = i.getY(l);
            if (m !== a.getMinY() && m !== a.getMaxY()) return !1;
          }
          for (var y = i.getX(0), k = i.getY(0), L = 1; L <= 4; L++) {
            var q = i.getX(L), X = i.getY(L);
            if (q !== y == (X !== k)) return !1;
            y = q, k = X;
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
          return S(r, "equalsExact", this, 1).apply(this, arguments);
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
            for (var q = this.getNumInteriorRing(), X = m.getNumInteriorRing(), ee = 0; ee < q && ee < X; ) {
              var ue = this.getInteriorRingN(ee), fe = m.getInteriorRingN(ee), me = ue.compareToSameClass(fe, g);
              if (me !== 0) return me;
              ee++;
            }
            return ee < q ? 1 : ee < X ? -1 : 0;
          }
        } }, { key: "apply", value: function() {
          if (_e(arguments[0], Tn)) {
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
        function r() {
          return u(this, r), s(this, r, arguments);
        }
        return _(r, o), h(r);
      })(ui), gi = (function(o) {
        function r(i) {
          var a;
          return u(this, r), (a = s(this, r)).array = [], i instanceof Ne && a.addAll(i), a;
        }
        return _(r, o), h(r, [{ key: "contains", value: function(i) {
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
        return h((function o(r) {
          u(this, o), this.array = r, this.position = 0;
        }), [{ key: "next", value: function() {
          if (this.position === this.array.length) throw new De();
          return this.array[this.position++];
        } }, { key: "hasNext", value: function() {
          return this.position < this.array.length;
        } }, { key: "remove", value: function() {
          throw new ke();
        } }]);
      })(), $e = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "computeEnvelopeInternal", value: function() {
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
          return new r(i, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            if (!this.isEquivalentClass(i)) return !1;
            var l = i;
            if (this._geometries.length !== l._geometries.length) return !1;
            for (var g = 0; g < this._geometries.length; g++) if (!this._geometries[g].equalsExact(l._geometries[g], a)) return !1;
            return !0;
          }
          return S(r, "equalsExact", this, 1).apply(this, arguments);
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
              var q = this.getGeometryN(L), X = m.getGeometryN(L), ee = q.compareToSameClass(X, g);
              if (ee !== 0) return ee;
              L++;
            }
            return L < y ? 1 : L < k ? -1 : 0;
          }
        } }, { key: "apply", value: function() {
          if (_e(arguments[0], Tn)) for (var i = arguments[0], a = 0; a < this._geometries.length; a++) this._geometries[a].apply(i);
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
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new r(i, this._factory);
        } }, { key: "isValid", value: function() {
          return !0;
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && S(r, "equalsExact", this, 1).call(this, i, a);
          }
          return S(r, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "getCoordinate", value: function() {
          if (arguments.length === 1 && Number.isInteger(arguments[0])) {
            var i = arguments[0];
            return this._geometries[i].getCoordinate();
          }
          return S(r, "getCoordinate", this, 1).apply(this, arguments);
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
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "copyInternal", value: function() {
          return new r(this._points.copy(), this._factory);
        } }, { key: "getBoundaryDimension", value: function() {
          return ie.FALSE;
        } }, { key: "isClosed", value: function() {
          return !!this.isEmpty() || S(r, "isClosed", this, 1).call(this);
        } }, { key: "reverseInternal", value: function() {
          var i = this._points.copy();
          return Be.reverse(i), this.getFactory().createLinearRing(i);
        } }, { key: "getTypeCode", value: function() {
          return ce.TYPECODE_LINEARRING;
        } }, { key: "validateConstruction", value: function() {
          if (!this.isEmpty() && !S(r, "isClosed", this, 1).call(this)) throw new J("Points of LinearRing do not form a closed linestring");
          if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < r.MINIMUM_VALID_SIZE) throw new J("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
        } }, { key: "getGeometryType", value: function() {
          return ce.TYPENAME_LINEARRING;
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          jn.constructor_.call(this, i, a), this.validateConstruction();
        } }]);
      })(jn);
      vr.MINIMUM_VALID_SIZE = 4;
      var Nn = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "setOrdinate", value: function(i, a) {
          switch (i) {
            case r.X:
              this.x = a;
              break;
            case r.Y:
              this.y = a;
              break;
            default:
              throw new J("Invalid ordinate index: " + i);
          }
        } }, { key: "getZ", value: function() {
          return $.NULL_ORDINATE;
        } }, { key: "getOrdinate", value: function(i) {
          switch (i) {
            case r.X:
              return this.x;
            case r.Y:
              return this.y;
          }
          throw new J("Invalid ordinate index: " + i);
        } }, { key: "setZ", value: function(i) {
          throw new J("CoordinateXY dimension 2 does not support z-ordinate");
        } }, { key: "copy", value: function() {
          return new r(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ")";
        } }, { key: "setCoordinate", value: function(i) {
          this.x = i.x, this.y = i.y, this.z = i.getZ();
        } }], [{ key: "constructor_", value: function() {
          if (arguments.length === 0) $.constructor_.call(this);
          else if (arguments.length === 1) {
            if (arguments[0] instanceof r) {
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
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "getM", value: function() {
          return this._m;
        } }, { key: "setOrdinate", value: function(i, a) {
          switch (i) {
            case r.X:
              this.x = a;
              break;
            case r.Y:
              this.y = a;
              break;
            case r.M:
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
            case r.X:
              return this.x;
            case r.Y:
              return this.y;
            case r.M:
              return this._m;
          }
          throw new J("Invalid ordinate index: " + i);
        } }, { key: "setZ", value: function(i) {
          throw new J("CoordinateXY dimension 2 does not support z-ordinate");
        } }, { key: "copy", value: function() {
          return new r(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + " m=" + this.getM() + ")";
        } }, { key: "setCoordinate", value: function(i) {
          this.x = i.x, this.y = i.y, this.z = i.getZ(), this._m = i.getM();
        } }], [{ key: "constructor_", value: function() {
          if (this._m = null, arguments.length === 0) $.constructor_.call(this), this._m = 0;
          else if (arguments.length === 1) {
            if (arguments[0] instanceof r) {
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
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "getM", value: function() {
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
          return new r(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ", " + this.getZ() + " m=" + this.getM() + ")";
        } }, { key: "setCoordinate", value: function(i) {
          this.x = i.x, this.y = i.y, this.z = i.getZ(), this._m = i.getM();
        } }], [{ key: "constructor_", value: function() {
          if (this._m = null, arguments.length === 0) $.constructor_.call(this), this._m = 0;
          else if (arguments.length === 1) {
            if (arguments[0] instanceof r) {
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
        return h(o, null, [{ key: "measures", value: function(r) {
          return r instanceof Nn ? 0 : r instanceof Pn || r instanceof as ? 1 : 0;
        } }, { key: "dimension", value: function(r) {
          return r instanceof Nn ? 2 : r instanceof Pn ? 3 : r instanceof as ? 4 : 3;
        } }, { key: "create", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            return o.create(r, 0);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return i === 2 ? new Nn() : i === 3 && a === 0 ? new $() : i === 3 && a === 1 ? new Pn() : i === 4 && a === 1 ? new as() : new $();
          }
        } }]);
      })(), B = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "getCoordinate", value: function(i) {
          return this.get(i);
        } }, { key: "addAll", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "boolean" && _e(arguments[0], Ne)) {
            for (var i = arguments[1], a = !1, l = arguments[0].iterator(); l.hasNext(); ) this.add(l.next(), i), a = !0;
            return a;
          }
          return S(r, "addAll", this, 1).apply(this, arguments);
        } }, { key: "clone", value: function() {
          for (var i = S(r, "clone", this, 1).call(this), a = 0; a < this.size(); a++) i.add(a, this.get(a).clone());
          return i;
        } }, { key: "toCoordinateArray", value: function() {
          if (arguments.length === 0) return this.toArray(r.coordArrayType);
          if (arguments.length === 1) {
            if (arguments[0]) return this.toArray(r.coordArrayType);
            for (var i = this.size(), a = new Array(i).fill(null), l = 0; l < i; l++) a[l] = this.get(i - l - 1);
            return a;
          }
        } }, { key: "add", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0];
            return S(r, "add", this, 1).call(this, i);
          }
          if (arguments.length === 2) {
            if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
              var a = arguments[0], l = arguments[1];
              return this.add(a, l, !0), !0;
            }
            if (arguments[0] instanceof $ && typeof arguments[1] == "boolean") {
              var g = arguments[0];
              if (!arguments[1] && this.size() >= 1 && this.get(this.size() - 1).equals2D(g)) return null;
              S(r, "add", this, 1).call(this, g);
            } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
              var m = arguments[0], y = arguments[1];
              return this.add(m, y), !0;
            }
          } else if (arguments.length === 3) {
            if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
              var k = arguments[0], L = arguments[1];
              if (arguments[2]) for (var q = 0; q < k.length; q++) this.add(k[q], L);
              else for (var X = k.length - 1; X >= 0; X--) this.add(k[X], L);
              return !0;
            }
            if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof $) {
              var ee = arguments[0], ue = arguments[1];
              if (!arguments[2]) {
                var fe = this.size();
                if (fe > 0 && (ee > 0 && this.get(ee - 1).equals2D(ue) || ee < fe && this.get(ee).equals2D(ue)))
                  return null;
              }
              S(r, "add", this, 1).call(this, ee, ue);
            }
          } else if (arguments.length === 4) {
            var me = arguments[0], Te = arguments[1], Ae = arguments[2], Fe = arguments[3], ct = 1;
            Ae > Fe && (ct = -1);
            for (var ft = Ae; ft !== Fe; ft += ct) this.add(me[ft], Te);
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
        return h(o, null, [{ key: "isRing", value: function(r) {
          return !(r.length < 4) && !!r[0].equals2D(r[r.length - 1]);
        } }, { key: "ptNotInList", value: function(r, i) {
          for (var a = 0; a < r.length; a++) {
            var l = r[a];
            if (o.indexOf(l, i) < 0) return l;
          }
          return null;
        } }, { key: "scroll", value: function(r, i) {
          var a = o.indexOf(i, r);
          if (a < 0) return null;
          var l = new Array(r.length).fill(null);
          Pt.arraycopy(r, a, l, 0, r.length - a), Pt.arraycopy(r, 0, l, r.length - a, a), Pt.arraycopy(l, 0, r, 0, r.length);
        } }, { key: "equals", value: function() {
          if (arguments.length === 2) {
            var r = arguments[0], i = arguments[1];
            if (r === i) return !0;
            if (r === null || i === null || r.length !== i.length) return !1;
            for (var a = 0; a < r.length; a++) if (!r[a].equals(i[a])) return !1;
            return !0;
          }
          if (arguments.length === 3) {
            var l = arguments[0], g = arguments[1], m = arguments[2];
            if (l === g) return !0;
            if (l === null || g === null || l.length !== g.length) return !1;
            for (var y = 0; y < l.length; y++) if (m.compare(l[y], g[y]) !== 0) return !1;
            return !0;
          }
        } }, { key: "intersection", value: function(r, i) {
          for (var a = new B(), l = 0; l < r.length; l++) i.intersects(r[l]) && a.add(r[l], !0);
          return a.toCoordinateArray();
        } }, { key: "measures", value: function(r) {
          if (r === null || r.length === 0) return 0;
          var i, a = 0, l = p(r);
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
        } }, { key: "hasRepeatedPoints", value: function(r) {
          for (var i = 1; i < r.length; i++) if (r[i - 1].equals(r[i])) return !0;
          return !1;
        } }, { key: "removeRepeatedPoints", value: function(r) {
          return o.hasRepeatedPoints(r) ? new B(r, !1).toCoordinateArray() : r;
        } }, { key: "reverse", value: function(r) {
          for (var i = r.length - 1, a = Math.trunc(i / 2), l = 0; l <= a; l++) {
            var g = r[l];
            r[l] = r[i - l], r[i - l] = g;
          }
        } }, { key: "removeNull", value: function(r) {
          for (var i = 0, a = 0; a < r.length; a++) r[a] !== null && i++;
          var l = new Array(i).fill(null);
          if (i === 0) return l;
          for (var g = 0, m = 0; m < r.length; m++) r[m] !== null && (l[g++] = r[m]);
          return l;
        } }, { key: "copyDeep", value: function() {
          if (arguments.length === 1) {
            for (var r = arguments[0], i = new Array(r.length).fill(null), a = 0; a < r.length; a++) i[a] = r[a].copy();
            return i;
          }
          if (arguments.length === 5) for (var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3], k = arguments[4], L = 0; L < k; L++) m[y + L] = l[g + L].copy();
        } }, { key: "isEqualReversed", value: function(r, i) {
          for (var a = 0; a < r.length; a++) {
            var l = r[a], g = i[r.length - a - 1];
            if (l.compareTo(g) !== 0) return !1;
          }
          return !0;
        } }, { key: "envelope", value: function(r) {
          for (var i = new Le(), a = 0; a < r.length; a++) i.expandToInclude(r[a]);
          return i;
        } }, { key: "toCoordinateArray", value: function(r) {
          return r.toArray(o.coordArrayType);
        } }, { key: "dimension", value: function(r) {
          if (r === null || r.length === 0) return 3;
          var i, a = 0, l = p(r);
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
        } }, { key: "atLeastNCoordinatesOrNothing", value: function(r, i) {
          return i.length >= r ? i : [];
        } }, { key: "indexOf", value: function(r, i) {
          for (var a = 0; a < i.length; a++) if (r.equals(i[a])) return a;
          return -1;
        } }, { key: "increasingDirection", value: function(r) {
          for (var i = 0; i < Math.trunc(r.length / 2); i++) {
            var a = r.length - 1 - i, l = r[i].compareTo(r[a]);
            if (l !== 0) return l;
          }
          return 1;
        } }, { key: "compare", value: function(r, i) {
          for (var a = 0; a < r.length && a < i.length; ) {
            var l = r[a].compareTo(i[a]);
            if (l !== 0) return l;
            a++;
          }
          return a < i.length ? -1 : a < r.length ? 1 : 0;
        } }, { key: "minCoordinate", value: function(r) {
          for (var i = null, a = 0; a < r.length; a++) (i === null || i.compareTo(r[a]) > 0) && (i = r[a]);
          return i;
        } }, { key: "extract", value: function(r, i, a) {
          i = An.clamp(i, 0, r.length);
          var l = (a = An.clamp(a, -1, r.length)) - i + 1;
          a < 0 && (l = 0), i >= r.length && (l = 0), a < i && (l = 0);
          var g = new Array(l).fill(null);
          if (l === 0) return g;
          for (var m = 0, y = i; y <= a; y++) g[m++] = r[y];
          return g;
        } }]);
      })(), he = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "compare", value: function(o, r) {
          var i = o, a = r;
          return Q.compare(i, a);
        } }, { key: "interfaces_", get: function() {
          return [re];
        } }]);
      })(), Ue = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "compare", value: function(o, r) {
          var i = o, a = r;
          if (i.length < a.length) return -1;
          if (i.length > a.length) return 1;
          if (i.length === 0) return 0;
          var l = Q.compare(i, a);
          return Q.isEqualReversed(i, a) ? 0 : l;
        } }, { key: "OLDcompare", value: function(o, r) {
          var i = o, a = r;
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
        return h((function o(r) {
          u(this, o), this.str = r;
        }), [{ key: "append", value: function(o) {
          this.str += o;
        } }, { key: "setCharAt", value: function(o, r) {
          this.str = this.str.substr(0, o) + r + this.str.substr(o + 1);
        } }, { key: "toString", value: function() {
          return this.str;
        } }]);
      })(), ze = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getM", value: function(r) {
          return this.hasM() ? this._coordinates[r].getM() : Z.NaN;
        } }, { key: "setOrdinate", value: function(r, i, a) {
          switch (i) {
            case Se.X:
              this._coordinates[r].x = a;
              break;
            case Se.Y:
              this._coordinates[r].y = a;
              break;
            default:
              this._coordinates[r].setOrdinate(i, a);
          }
        } }, { key: "getZ", value: function(r) {
          return this.hasZ() ? this._coordinates[r].getZ() : Z.NaN;
        } }, { key: "size", value: function() {
          return this._coordinates.length;
        } }, { key: "getOrdinate", value: function(r, i) {
          switch (i) {
            case Se.X:
              return this._coordinates[r].x;
            case Se.Y:
              return this._coordinates[r].y;
            default:
              return this._coordinates[r].getOrdinate(i);
          }
        } }, { key: "getCoordinate", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            return this._coordinates[r];
          }
          if (arguments.length === 2) {
            var i = arguments[0];
            arguments[1].setCoordinate(this._coordinates[i]);
          }
        } }, { key: "getCoordinateCopy", value: function(r) {
          var i = this.createCoordinate();
          return i.setCoordinate(this._coordinates[r]), i;
        } }, { key: "createCoordinate", value: function() {
          return ge.create(this.getDimension(), this.getMeasures());
        } }, { key: "getDimension", value: function() {
          return this._dimension;
        } }, { key: "getX", value: function(r) {
          return this._coordinates[r].x;
        } }, { key: "getMeasures", value: function() {
          return this._measures;
        } }, { key: "expandEnvelope", value: function(r) {
          for (var i = 0; i < this._coordinates.length; i++) r.expandToInclude(this._coordinates[i]);
          return r;
        } }, { key: "copy", value: function() {
          for (var r = new Array(this.size()).fill(null), i = 0; i < this._coordinates.length; i++) {
            var a = this.createCoordinate();
            a.setCoordinate(this._coordinates[i]), r[i] = a;
          }
          return new o(r, this._dimension, this._measures);
        } }, { key: "toString", value: function() {
          if (this._coordinates.length > 0) {
            var r = new et(17 * this._coordinates.length);
            r.append("("), r.append(this._coordinates[0]);
            for (var i = 1; i < this._coordinates.length; i++) r.append(", "), r.append(this._coordinates[i]);
            return r.append(")"), r.toString();
          }
          return "()";
        } }, { key: "getY", value: function(r) {
          return this._coordinates[r].y;
        } }, { key: "toCoordinateArray", value: function() {
          return this._coordinates;
        } }, { key: "interfaces_", get: function() {
          return [Se, w];
        } }], [{ key: "constructor_", value: function() {
          if (this._dimension = 3, this._measures = 0, this._coordinates = null, arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var r = arguments[0];
              o.constructor_.call(this, r, Q.dimension(r), Q.measures(r));
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
              var X = arguments[0], ee = arguments[1], ue = arguments[2];
              this._dimension = ee, this._measures = ue, this._coordinates = X === null ? new Array(0).fill(null) : X;
            } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
              var fe = arguments[0], me = arguments[1], Te = arguments[2];
              this._coordinates = new Array(fe).fill(null), this._dimension = me, this._measures = Te;
              for (var Ae = 0; Ae < fe; Ae++) this._coordinates[Ae] = this.createCoordinate();
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
              var r = arguments[1];
              return r > 3 && (r = 3), r < 2 && (r = 2), new ze(arguments[0], r);
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
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new r(i, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && S(r, "equalsExact", this, 1).call(this, i, a);
          }
          return S(r, "equalsExact", this, 1).apply(this, arguments);
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
        function r() {
          var i;
          return u(this, r), (i = s(this, r)).map = /* @__PURE__ */ new Map(), i;
        }
        return _(r, o), h(r, [{ key: "get", value: function(i) {
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
        return h(o, [{ key: "equals", value: function(r) {
          if (!(r instanceof o)) return !1;
          var i = r;
          return this._modelType === i._modelType && this._scale === i._scale;
        } }, { key: "compareTo", value: function(r) {
          var i = r, a = this.getMaximumSignificantDigits(), l = i.getMaximumSignificantDigits();
          return ln.compare(a, l);
        } }, { key: "getScale", value: function() {
          return this._scale;
        } }, { key: "isFloating", value: function() {
          return this._modelType === o.FLOATING || this._modelType === o.FLOATING_SINGLE;
        } }, { key: "getType", value: function() {
          return this._modelType;
        } }, { key: "toString", value: function() {
          var r = "UNKNOWN";
          return this._modelType === o.FLOATING ? r = "Floating" : this._modelType === o.FLOATING_SINGLE ? r = "Floating-Single" : this._modelType === o.FIXED && (r = "Fixed (Scale=" + this.getScale() + ")"), r;
        } }, { key: "makePrecise", value: function() {
          if (typeof arguments[0] == "number") {
            var r = arguments[0];
            return Z.isNaN(r) || this._modelType === o.FLOATING_SINGLE ? r : this._modelType === o.FIXED ? Math.round(r * this._scale) / this._scale : r;
          }
          if (arguments[0] instanceof $) {
            var i = arguments[0];
            if (this._modelType === o.FLOATING) return null;
            i.x = this.makePrecise(i.x), i.y = this.makePrecise(i.y);
          }
        } }, { key: "getMaximumSignificantDigits", value: function() {
          var r = 16;
          return this._modelType === o.FLOATING ? r = 16 : this._modelType === o.FLOATING_SINGLE ? r = 6 : this._modelType === o.FIXED && (r = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), r;
        } }, { key: "setScale", value: function(r) {
          this._scale = Math.abs(r);
        } }, { key: "interfaces_", get: function() {
          return [w, W];
        } }], [{ key: "constructor_", value: function() {
          if (this._modelType = null, this._scale = null, arguments.length === 0) this._modelType = o.FLOATING;
          else if (arguments.length === 1) {
            if (arguments[0] instanceof Kn) {
              var r = arguments[0];
              this._modelType = r, r === o.FIXED && this.setScale(1);
            } else if (typeof arguments[0] == "number") {
              var i = arguments[0];
              this._modelType = o.FIXED, this.setScale(i);
            } else if (arguments[0] instanceof o) {
              var a = arguments[0];
              this._modelType = a._modelType, this._scale = a._scale;
            }
          }
        } }, { key: "mostPrecise", value: function(r, i) {
          return r.compareTo(i) >= 0 ? r : i;
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
          var r = arguments[0];
          this._name = r, o.nameToTypeMap.put(r, this);
        } }]);
      })();
      Kn.nameToTypeMap = new os(), Re.Type = Kn, Re.FIXED = new Kn("FIXED"), Re.FLOATING = new Kn("FLOATING"), Re.FLOATING_SINGLE = new Kn("FLOATING SINGLE"), Re.maximumPreciseValue = 9007199254740992;
      var pi = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new r(i, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof ce) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && S(r, "equalsExact", this, 1).call(this, i, a);
          }
          return S(r, "equalsExact", this, 1).apply(this, arguments);
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
        return h(o, [{ key: "createEmpty", value: function(r) {
          switch (r) {
            case -1:
              return this.createGeometryCollection();
            case 0:
              return this.createPoint();
            case 1:
              return this.createLineString();
            case 2:
              return this.createPolygon();
            default:
              throw new J("Invalid dimension: " + r);
          }
        } }, { key: "toGeometry", value: function(r) {
          return r.isNull() ? this.createPoint() : r.getMinX() === r.getMaxX() && r.getMinY() === r.getMaxY() ? this.createPoint(new $(r.getMinX(), r.getMinY())) : r.getMinX() === r.getMaxX() || r.getMinY() === r.getMaxY() ? this.createLineString([new $(r.getMinX(), r.getMinY()), new $(r.getMaxX(), r.getMaxY())]) : this.createPolygon(this.createLinearRing([new $(r.getMinX(), r.getMinY()), new $(r.getMinX(), r.getMaxY()), new $(r.getMaxX(), r.getMaxY()), new $(r.getMaxX(), r.getMinY()), new $(r.getMinX(), r.getMinY())]), null);
        } }, { key: "createLineString", value: function() {
          if (arguments.length === 0) return this.createLineString(this.getCoordinateSequenceFactory().create([]));
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var r = arguments[0];
              return this.createLineString(r !== null ? this.getCoordinateSequenceFactory().create(r) : null);
            }
            if (_e(arguments[0], Se)) return new jn(arguments[0], this);
          }
        } }, { key: "createMultiLineString", value: function() {
          return arguments.length === 0 ? new pi(null, this) : arguments.length === 1 ? new pi(arguments[0], this) : void 0;
        } }, { key: "buildGeometry", value: function(r) {
          for (var i = null, a = !1, l = !1, g = r.iterator(); g.hasNext(); ) {
            var m = g.next(), y = m.getTypeCode();
            i === null && (i = y), y !== i && (a = !0), m instanceof $e && (l = !0);
          }
          if (i === null) return this.createGeometryCollection();
          if (a || l) return this.createGeometryCollection(o.toGeometryArray(r));
          var k = r.iterator().next();
          if (r.size() > 1) {
            if (k instanceof Ur) return this.createMultiPolygon(o.toPolygonArray(r));
            if (k instanceof jn) return this.createMultiLineString(o.toLineStringArray(r));
            if (k instanceof fi) return this.createMultiPoint(o.toPointArray(r));
            ae.shouldNeverReachHere("Unhandled geometry type: " + k.getGeometryType());
          }
          return k;
        } }, { key: "createMultiPointFromCoords", value: function(r) {
          return this.createMultiPoint(r !== null ? this.getCoordinateSequenceFactory().create(r) : null);
        } }, { key: "createPoint", value: function() {
          if (arguments.length === 0) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
          if (arguments.length === 1) {
            if (arguments[0] instanceof $) {
              var r = arguments[0];
              return this.createPoint(r !== null ? this.getCoordinateSequenceFactory().create([r]) : null);
            }
            if (_e(arguments[0], Se)) return new fi(arguments[0], this);
          }
        } }, { key: "getCoordinateSequenceFactory", value: function() {
          return this._coordinateSequenceFactory;
        } }, { key: "createPolygon", value: function() {
          if (arguments.length === 0) return this.createPolygon(null, null);
          if (arguments.length === 1) {
            if (_e(arguments[0], Se)) {
              var r = arguments[0];
              return this.createPolygon(this.createLinearRing(r));
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
              var r = arguments[0];
              return this.createLinearRing(r !== null ? this.getCoordinateSequenceFactory().create(r) : null);
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
              var r = arguments[0];
              if (r === null) return this.createMultiPoint(new Array(0).fill(null));
              for (var i = new Array(r.size()).fill(null), a = 0; a < r.size(); a++) {
                var l = this.getCoordinateSequenceFactory().create(1, r.getDimension(), r.getMeasures());
                Be.copy(r, a, l, 0, 1), i[a] = this.createPoint(l);
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
              var r = arguments[0];
              o.constructor_.call(this, new Re(), 0, r);
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
        } }, { key: "toMultiPolygonArray", value: function(r) {
          var i = new Array(r.size()).fill(null);
          return r.toArray(i);
        } }, { key: "toGeometryArray", value: function(r) {
          if (r === null) return null;
          var i = new Array(r.size()).fill(null);
          return r.toArray(i);
        } }, { key: "getDefaultCoordinateSequenceFactory", value: function() {
          return it.instance();
        } }, { key: "toMultiLineStringArray", value: function(r) {
          var i = new Array(r.size()).fill(null);
          return r.toArray(i);
        } }, { key: "toLineStringArray", value: function(r) {
          var i = new Array(r.size()).fill(null);
          return r.toArray(i);
        } }, { key: "toMultiPointArray", value: function(r) {
          var i = new Array(r.size()).fill(null);
          return r.toArray(i);
        } }, { key: "toLinearRingArray", value: function(r) {
          var i = new Array(r.size()).fill(null);
          return r.toArray(i);
        } }, { key: "toPointArray", value: function(r) {
          var i = new Array(r.size()).fill(null);
          return r.toArray(i);
        } }, { key: "toPolygonArray", value: function(r) {
          var i = new Array(r.size()).fill(null);
          return r.toArray(i);
        } }, { key: "createPointFromInternalCoord", value: function(r, i) {
          return i.getPrecisionModel().makePrecise(r), i.getFactory().createPoint(r);
        } }]);
      })(), Oo = "XY", Rp = "XYZ", Dp = "XYM", Fp = "XYZM", rc = { POINT: "Point", LINE_STRING: "LineString", LINEAR_RING: "LinearRing", POLYGON: "Polygon", MULTI_POINT: "MultiPoint", MULTI_LINE_STRING: "MultiLineString", MULTI_POLYGON: "MultiPolygon", GEOMETRY_COLLECTION: "GeometryCollection", CIRCLE: "Circle" }, ic = "EMPTY", ha = 1, Qn = 2, yr = 3, sc = 4, vi = 5, Gp = 6;
      for (var Bp in rc) rc[Bp].toUpperCase();
      var Up = (function() {
        return h((function o(r) {
          u(this, o), this.wkt = r, this.index_ = -1;
        }), [{ key: "isAlpha_", value: function(o) {
          return o >= "a" && o <= "z" || o >= "A" && o <= "Z";
        } }, { key: "isNumeric_", value: function(o, r) {
          return o >= "0" && o <= "9" || o == "." && !(r !== void 0 && r);
        } }, { key: "isWhiteSpace_", value: function(o) {
          return o == " " || o == "	" || o == "\r" || o == `
`;
        } }, { key: "nextChar_", value: function() {
          return this.wkt.charAt(++this.index_);
        } }, { key: "nextToken", value: function() {
          var o, r = this.nextChar_(), i = this.index_, a = r;
          if (r == "(") o = Qn;
          else if (r == ",") o = vi;
          else if (r == ")") o = yr;
          else if (this.isNumeric_(r) || r == "-") o = sc, a = this.readNumber_();
          else if (this.isAlpha_(r)) o = ha, a = this.readText_();
          else {
            if (this.isWhiteSpace_(r)) return this.nextToken();
            if (r !== "") throw new Error("Unexpected character: " + r);
            o = Gp;
          }
          return { position: i, value: a, type: o };
        } }, { key: "readNumber_", value: function() {
          var o, r = this.index_, i = !1, a = !1;
          do
            o == "." ? i = !0 : o != "e" && o != "E" || (a = !0), o = this.nextChar_();
          while (this.isNumeric_(o, i) || !a && (o == "e" || o == "E") || a && (o == "-" || o == "+"));
          return parseFloat(this.wkt.substring(r, this.index_--));
        } }, { key: "readText_", value: function() {
          var o, r = this.index_;
          do
            o = this.nextChar_();
          while (this.isAlpha_(o));
          return this.wkt.substring(r, this.index_--).toUpperCase();
        } }]);
      })(), zp = (function() {
        return h((function o(r, i) {
          u(this, o), this.lexer_ = r, this.token_, this.layout_ = Oo, this.factory = i;
        }), [{ key: "consume_", value: function() {
          this.token_ = this.lexer_.nextToken();
        } }, { key: "isTokenType", value: function(o) {
          return this.token_.type == o;
        } }, { key: "match", value: function(o) {
          var r = this.isTokenType(o);
          return r && this.consume_(), r;
        } }, { key: "parse", value: function() {
          return this.consume_(), this.parseGeometry_();
        } }, { key: "parseGeometryLayout_", value: function() {
          var o = Oo, r = this.token_;
          if (this.isTokenType(ha)) {
            var i = r.value;
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
          for (var o = [], r = this.layout_.length, i = 0; i < r; ++i) {
            var a = this.token_;
            if (!this.match(sc)) break;
            o.push(a.value);
          }
          if (o.length == r) return o;
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
          var o = this.isTokenType(ha) && this.token_.value == ic;
          return o && this.consume_(), o;
        } }, { key: "formatErrorMessage_", value: function() {
          return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
        } }, { key: "parseGeometry_", value: function() {
          var o = this.factory, r = function(me) {
            return c($, C(me));
          }, i = function(me) {
            var Te = me.map((function(Ae) {
              return o.createLinearRing(Ae.map(r));
            }));
            return Te.length > 1 ? o.createPolygon(Te[0], Te.slice(1)) : o.createPolygon(Te[0]);
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
                var y = this.parseLineStringText_().map(r);
                return o.createLineString(y);
              case "LINEARRING":
                var k = this.parseLineStringText_().map(r);
                return o.createLinearRing(k);
              case "POLYGON":
                var L = this.parsePolygonText_();
                return L && L.length !== 0 ? i(L) : o.createPolygon();
              case "MULTIPOINT":
                var q = this.parseMultiPointText_();
                if (!q || q.length === 0) return o.createMultiPoint();
                var X = q.map(r).map((function(me) {
                  return o.createPoint(me);
                }));
                return o.createMultiPoint(X);
              case "MULTILINESTRING":
                var ee = this.parseMultiLineStringText_().map((function(me) {
                  return o.createLineString(me.map(r));
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
      function ac(o) {
        if (o.isEmpty()) return "";
        var r = o.getCoordinate(), i = [r.x, r.y];
        return r.z === void 0 || Number.isNaN(r.z) || i.push(r.z), r.m === void 0 || Number.isNaN(r.m) || i.push(r.m), i.join(" ");
      }
      function us(o) {
        for (var r = o.getCoordinates().map((function(g) {
          var m = [g.x, g.y];
          return g.z === void 0 || Number.isNaN(g.z) || m.push(g.z), g.m === void 0 || Number.isNaN(g.m) || m.push(g.m), m;
        })), i = [], a = 0, l = r.length; a < l; ++a) i.push(r[a].join(" "));
        return i.join(", ");
      }
      function oc(o) {
        var r = [];
        r.push("(" + us(o.getExteriorRing()) + ")");
        for (var i = 0, a = o.getNumInteriorRing(); i < a; ++i) r.push("(" + us(o.getInteriorRingN(i)) + ")");
        return r.join(", ");
      }
      var qp = { Point: ac, LineString: us, LinearRing: us, Polygon: oc, MultiPoint: function(o) {
        for (var r = [], i = 0, a = o.getNumGeometries(); i < a; ++i) r.push("(" + ac(o.getGeometryN(i)) + ")");
        return r.join(", ");
      }, MultiLineString: function(o) {
        for (var r = [], i = 0, a = o.getNumGeometries(); i < a; ++i) r.push("(" + us(o.getGeometryN(i)) + ")");
        return r.join(", ");
      }, MultiPolygon: function(o) {
        for (var r = [], i = 0, a = o.getNumGeometries(); i < a; ++i) r.push("(" + oc(o.getGeometryN(i)) + ")");
        return r.join(", ");
      }, GeometryCollection: function(o) {
        for (var r = [], i = 0, a = o.getNumGeometries(); i < a; ++i) r.push(uc(o.getGeometryN(i)));
        return r.join(", ");
      } };
      function uc(o) {
        var r = o.getGeometryType(), i = qp[r];
        r = r.toUpperCase();
        var a = (function(l) {
          var g = "";
          if (l.isEmpty()) return g;
          var m = l.getCoordinate();
          return m.z === void 0 || Number.isNaN(m.z) || (g += "Z"), m.m === void 0 || Number.isNaN(m.m) || (g += "M"), g;
        })(o);
        return a.length > 0 && (r += " " + a), o.isEmpty() ? r + " " + ic : r + " (" + i(o) + ")";
      }
      var Yp = (function() {
        return h((function o(r) {
          u(this, o), this.geometryFactory = r || new mi(), this.precisionModel = this.geometryFactory.getPrecisionModel();
        }), [{ key: "read", value: function(o) {
          var r = new Up(o);
          return new zp(r, this.geometryFactory).parse();
        } }, { key: "write", value: function(o) {
          return uc(o);
        } }]);
      })(), Ro = (function() {
        return h((function o(r) {
          u(this, o), this.parser = new Yp(r);
        }), [{ key: "write", value: function(o) {
          return this.parser.write(o);
        } }], [{ key: "toLineString", value: function(o, r) {
          if (arguments.length !== 2) throw new Error("Not implemented");
          return "LINESTRING ( " + o.x + " " + o.y + ", " + r.x + " " + r.y + " )";
        } }]);
      })(), Je = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getIndexAlongSegment", value: function(r, i) {
          return this.computeIntLineIndex(), this._intLineIndex[r][i];
        } }, { key: "getTopologySummary", value: function() {
          var r = new et();
          return this.isEndPoint() && r.append(" endpoint"), this._isProper && r.append(" proper"), this.isCollinear() && r.append(" collinear"), r.toString();
        } }, { key: "computeIntersection", value: function(r, i, a, l) {
          this._inputLines[0][0] = r, this._inputLines[0][1] = i, this._inputLines[1][0] = a, this._inputLines[1][1] = l, this._result = this.computeIntersect(r, i, a, l);
        } }, { key: "getIntersectionNum", value: function() {
          return this._result;
        } }, { key: "computeIntLineIndex", value: function() {
          if (arguments.length === 0) this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map((function() {
            return Array(2);
          })), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
          else if (arguments.length === 1) {
            var r = arguments[0];
            this.getEdgeDistance(r, 0) > this.getEdgeDistance(r, 1) ? (this._intLineIndex[r][0] = 0, this._intLineIndex[r][1] = 1) : (this._intLineIndex[r][0] = 1, this._intLineIndex[r][1] = 0);
          }
        } }, { key: "isProper", value: function() {
          return this.hasIntersection() && this._isProper;
        } }, { key: "setPrecisionModel", value: function(r) {
          this._precisionModel = r;
        } }, { key: "isInteriorIntersection", value: function() {
          if (arguments.length === 0) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);
          if (arguments.length === 1) {
            for (var r = arguments[0], i = 0; i < this._result; i++) if (!this._intPt[i].equals2D(this._inputLines[r][0]) && !this._intPt[i].equals2D(this._inputLines[r][1])) return !0;
            return !1;
          }
        } }, { key: "getIntersection", value: function(r) {
          return this._intPt[r];
        } }, { key: "isEndPoint", value: function() {
          return this.hasIntersection() && !this._isProper;
        } }, { key: "hasIntersection", value: function() {
          return this._result !== o.NO_INTERSECTION;
        } }, { key: "getEdgeDistance", value: function(r, i) {
          return o.computeEdgeDistance(this._intPt[i], this._inputLines[r][0], this._inputLines[r][1]);
        } }, { key: "isCollinear", value: function() {
          return this._result === o.COLLINEAR_INTERSECTION;
        } }, { key: "toString", value: function() {
          return Ro.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + Ro.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
        } }, { key: "getEndpoint", value: function(r, i) {
          return this._inputLines[r][i];
        } }, { key: "isIntersection", value: function(r) {
          for (var i = 0; i < this._result; i++) if (this._intPt[i].equals2D(r)) return !0;
          return !1;
        } }, { key: "getIntersectionAlongSegment", value: function(r, i) {
          return this.computeIntLineIndex(), this._intPt[this._intLineIndex[r][i]];
        } }], [{ key: "constructor_", value: function() {
          this._result = null, this._inputLines = Array(2).fill().map((function() {
            return Array(2);
          })), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new $(), this._intPt[1] = new $(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
        } }, { key: "computeEdgeDistance", value: function(r, i, a) {
          var l = Math.abs(a.x - i.x), g = Math.abs(a.y - i.y), m = -1;
          if (r.equals(i)) m = 0;
          else if (r.equals(a)) m = l > g ? l : g;
          else {
            var y = Math.abs(r.x - i.x), k = Math.abs(r.y - i.y);
            (m = l > g ? y : k) !== 0 || r.equals(i) || (m = Math.max(y, k));
          }
          return ae.isTrue(!(m === 0 && !r.equals(i)), "Bad distance calculation"), m;
        } }, { key: "nonRobustComputeEdgeDistance", value: function(r, i, a) {
          var l = r.x - i.x, g = r.y - i.y, m = Math.sqrt(l * l + g * g);
          return ae.isTrue(!(m === 0 && !r.equals(i)), "Invalid distance calculation"), m;
        } }]);
      })();
      Je.DONT_INTERSECT = 0, Je.DO_INTERSECT = 1, Je.COLLINEAR = 2, Je.NO_INTERSECTION = 0, Je.POINT_INTERSECTION = 1, Je.COLLINEAR_INTERSECTION = 2;
      var zr = (function(o) {
        function r() {
          return u(this, r), s(this, r);
        }
        return _(r, o), h(r, [{ key: "isInSegmentEnvelopes", value: function(i) {
          var a = new Le(this._inputLines[0][0], this._inputLines[0][1]), l = new Le(this._inputLines[1][0], this._inputLines[1][1]);
          return a.contains(i) && l.contains(i);
        } }, { key: "computeIntersection", value: function() {
          if (arguments.length !== 3) return S(r, "computeIntersection", this, 1).apply(this, arguments);
          var i = arguments[0], a = arguments[1], l = arguments[2];
          if (this._isProper = !1, Le.intersects(a, l, i) && ye.index(a, l, i) === 0 && ye.index(l, a, i) === 0) return this._isProper = !0, (i.equals(a) || i.equals(l)) && (this._isProper = !1), this._result = Je.POINT_INTERSECTION, null;
          this._result = Je.NO_INTERSECTION;
        } }, { key: "intersection", value: function(i, a, l, g) {
          var m = this.intersectionSafe(i, a, l, g);
          return this.isInSegmentEnvelopes(m) || (m = new $(r.nearestEndpoint(i, a, l, g))), this._precisionModel !== null && this._precisionModel.makePrecise(m), m;
        } }, { key: "checkDD", value: function(i, a, l, g, m) {
          var y = li.intersection(i, a, l, g), k = this.isInSegmentEnvelopes(y);
          Pt.out.println("DD in env = " + k + "  --------------------- " + y), m.distance(y) > 1e-4 && Pt.out.println("Distance = " + m.distance(y));
        } }, { key: "intersectionSafe", value: function(i, a, l, g) {
          var m = Gr.intersection(i, a, l, g);
          return m === null && (m = r.nearestEndpoint(i, a, l, g)), m;
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
        return h(o, [{ key: "countSegment", value: function(r, i) {
          if (r.x < this._p.x && i.x < this._p.x) return null;
          if (this._p.x === i.x && this._p.y === i.y) return this._isPointOnSegment = !0, null;
          if (r.y === this._p.y && i.y === this._p.y) {
            var a = r.x, l = i.x;
            return a > l && (a = i.x, l = r.x), this._p.x >= a && this._p.x <= l && (this._isPointOnSegment = !0), null;
          }
          if (r.y > this._p.y && i.y <= this._p.y || i.y > this._p.y && r.y <= this._p.y) {
            var g = ye.index(r, i, this._p);
            if (g === ye.COLLINEAR) return this._isPointOnSegment = !0, null;
            i.y < r.y && (g = -g), g === ye.LEFT && this._crossingCount++;
          }
        } }, { key: "isPointInPolygon", value: function() {
          return this.getLocation() !== N.EXTERIOR;
        } }, { key: "getLocation", value: function() {
          return this._isPointOnSegment ? N.BOUNDARY : this._crossingCount % 2 == 1 ? N.INTERIOR : N.EXTERIOR;
        } }, { key: "isOnSegment", value: function() {
          return this._isPointOnSegment;
        } }], [{ key: "constructor_", value: function() {
          this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
          var r = arguments[0];
          this._p = r;
        } }, { key: "locatePointInRing", value: function() {
          if (arguments[0] instanceof $ && _e(arguments[1], Se)) {
            for (var r = arguments[1], i = new o(arguments[0]), a = new $(), l = new $(), g = 1; g < r.size(); g++) if (r.getCoordinate(g, a), r.getCoordinate(g - 1, l), i.countSegment(a, l), i.isOnSegment()) return i.getLocation();
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
            for (var r = arguments[0], i = arguments[1], a = new zr(), l = new $(), g = new $(), m = i.size(), y = 1; y < m; y++) if (i.getCoordinate(y - 1, l), i.getCoordinate(y, g), a.computeIntersection(r, l, g), a.hasIntersection()) return !0;
            return !1;
          }
          if (arguments[0] instanceof $ && arguments[1] instanceof Array) {
            for (var k = arguments[0], L = arguments[1], q = new zr(), X = 1; X < L.length; X++) {
              var ee = L[X - 1], ue = L[X];
              if (q.computeIntersection(k, ee, ue), q.hasIntersection()) return !0;
            }
            return !1;
          }
        } }, { key: "locateInRing", value: function(r, i) {
          return Hp.locatePointInRing(r, i);
        } }, { key: "isInRing", value: function(r, i) {
          return o.locateInRing(r, i) !== N.EXTERIOR;
        } }]);
      })(), Ht = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "setAllLocations", value: function(r) {
          for (var i = 0; i < this.location.length; i++) this.location[i] = r;
        } }, { key: "isNull", value: function() {
          for (var r = 0; r < this.location.length; r++) if (this.location[r] !== N.NONE) return !1;
          return !0;
        } }, { key: "setAllLocationsIfNull", value: function(r) {
          for (var i = 0; i < this.location.length; i++) this.location[i] === N.NONE && (this.location[i] = r);
        } }, { key: "isLine", value: function() {
          return this.location.length === 1;
        } }, { key: "merge", value: function(r) {
          if (r.location.length > this.location.length) {
            var i = new Array(3).fill(null);
            i[ne.ON] = this.location[ne.ON], i[ne.LEFT] = N.NONE, i[ne.RIGHT] = N.NONE, this.location = i;
          }
          for (var a = 0; a < this.location.length; a++) this.location[a] === N.NONE && a < r.location.length && (this.location[a] = r.location[a]);
        } }, { key: "getLocations", value: function() {
          return this.location;
        } }, { key: "flip", value: function() {
          if (this.location.length <= 1) return null;
          var r = this.location[ne.LEFT];
          this.location[ne.LEFT] = this.location[ne.RIGHT], this.location[ne.RIGHT] = r;
        } }, { key: "toString", value: function() {
          var r = new un();
          return this.location.length > 1 && r.append(N.toLocationSymbol(this.location[ne.LEFT])), r.append(N.toLocationSymbol(this.location[ne.ON])), this.location.length > 1 && r.append(N.toLocationSymbol(this.location[ne.RIGHT])), r.toString();
        } }, { key: "setLocations", value: function(r, i, a) {
          this.location[ne.ON] = r, this.location[ne.LEFT] = i, this.location[ne.RIGHT] = a;
        } }, { key: "get", value: function(r) {
          return r < this.location.length ? this.location[r] : N.NONE;
        } }, { key: "isArea", value: function() {
          return this.location.length > 1;
        } }, { key: "isAnyNull", value: function() {
          for (var r = 0; r < this.location.length; r++) if (this.location[r] === N.NONE) return !0;
          return !1;
        } }, { key: "setLocation", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            this.setLocation(ne.ON, r);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.location[i] = a;
          }
        } }, { key: "init", value: function(r) {
          this.location = new Array(r).fill(null), this.setAllLocations(N.NONE);
        } }, { key: "isEqualOnSide", value: function(r, i) {
          return this.location[i] === r.location[i];
        } }, { key: "allPositionsEqual", value: function(r) {
          for (var i = 0; i < this.location.length; i++) if (this.location[i] !== r) return !1;
          return !0;
        } }], [{ key: "constructor_", value: function() {
          if (this.location = null, arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var r = arguments[0];
              this.init(r.length);
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
          var r = 0;
          return this.elt[0].isNull() || r++, this.elt[1].isNull() || r++, r;
        } }, { key: "setAllLocations", value: function(r, i) {
          this.elt[r].setAllLocations(i);
        } }, { key: "isNull", value: function(r) {
          return this.elt[r].isNull();
        } }, { key: "setAllLocationsIfNull", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            this.setAllLocationsIfNull(0, r), this.setAllLocationsIfNull(1, r);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.elt[i].setAllLocationsIfNull(a);
          }
        } }, { key: "isLine", value: function(r) {
          return this.elt[r].isLine();
        } }, { key: "merge", value: function(r) {
          for (var i = 0; i < 2; i++) this.elt[i] === null && r.elt[i] !== null ? this.elt[i] = new Ht(r.elt[i]) : this.elt[i].merge(r.elt[i]);
        } }, { key: "flip", value: function() {
          this.elt[0].flip(), this.elt[1].flip();
        } }, { key: "getLocation", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            return this.elt[r].get(ne.ON);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return this.elt[i].get(a);
          }
        } }, { key: "toString", value: function() {
          var r = new un();
          return this.elt[0] !== null && (r.append("A:"), r.append(this.elt[0].toString())), this.elt[1] !== null && (r.append(" B:"), r.append(this.elt[1].toString())), r.toString();
        } }, { key: "isArea", value: function() {
          if (arguments.length === 0) return this.elt[0].isArea() || this.elt[1].isArea();
          if (arguments.length === 1) {
            var r = arguments[0];
            return this.elt[r].isArea();
          }
        } }, { key: "isAnyNull", value: function(r) {
          return this.elt[r].isAnyNull();
        } }, { key: "setLocation", value: function() {
          if (arguments.length === 2) {
            var r = arguments[0], i = arguments[1];
            this.elt[r].setLocation(ne.ON, i);
          } else if (arguments.length === 3) {
            var a = arguments[0], l = arguments[1], g = arguments[2];
            this.elt[a].setLocation(l, g);
          }
        } }, { key: "isEqualOnSide", value: function(r, i) {
          return this.elt[0].isEqualOnSide(r.elt[0], i) && this.elt[1].isEqualOnSide(r.elt[1], i);
        } }, { key: "allPositionsEqual", value: function(r, i) {
          return this.elt[r].allPositionsEqual(i);
        } }, { key: "toLine", value: function(r) {
          this.elt[r].isArea() && (this.elt[r] = new Ht(this.elt[r].location[0]));
        } }], [{ key: "constructor_", value: function() {
          if (this.elt = new Array(2).fill(null), arguments.length === 1) {
            if (Number.isInteger(arguments[0])) {
              var r = arguments[0];
              this.elt[0] = new Ht(r), this.elt[1] = new Ht(r);
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
            var k = arguments[0], L = arguments[1], q = arguments[2], X = arguments[3];
            this.elt[0] = new Ht(N.NONE, N.NONE, N.NONE), this.elt[1] = new Ht(N.NONE, N.NONE, N.NONE), this.elt[k].setLocations(L, q, X);
          }
        } }, { key: "toLineLabel", value: function(r) {
          for (var i = new o(N.NONE), a = 0; a < 2; a++) i.setLocation(a, r.getLocation(a));
          return i;
        } }]);
      })(), fa = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "computeRing", value: function() {
          if (this._ring !== null) return null;
          for (var o = new Array(this._pts.size()).fill(null), r = 0; r < this._pts.size(); r++) o[r] = this._pts.get(r);
          this._ring = this._geometryFactory.createLinearRing(o), this._isHole = ye.isCCW(this._ring.getCoordinates());
        } }, { key: "isIsolated", value: function() {
          return this._label.getGeometryCount() === 1;
        } }, { key: "computePoints", value: function(o) {
          this._startDe = o;
          var r = o, i = !0;
          do {
            if (r === null) throw new Nt("Found null DirectedEdge");
            if (r.getEdgeRing() === this) throw new Nt("Directed Edge visited twice during ring-building at " + r.getCoordinate());
            this._edges.add(r);
            var a = r.getLabel();
            ae.isTrue(a.isArea()), this.mergeLabel(a), this.addPoints(r.getEdge(), r.isForward(), i), i = !1, this.setEdgeRing(r, this), r = this.getNext(r);
          } while (r !== this._startDe);
        } }, { key: "getLinearRing", value: function() {
          return this._ring;
        } }, { key: "getCoordinate", value: function(o) {
          return this._pts.get(o);
        } }, { key: "computeMaxNodeDegree", value: function() {
          this._maxNodeDegree = 0;
          var o = this._startDe;
          do {
            var r = o.getNode().getEdges().getOutgoingDegree(this);
            r > this._maxNodeDegree && (this._maxNodeDegree = r), o = this.getNext(o);
          } while (o !== this._startDe);
          this._maxNodeDegree *= 2;
        } }, { key: "addPoints", value: function(o, r, i) {
          var a = o.getCoordinates();
          if (r) {
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
          var r = this.getLinearRing();
          if (!r.getEnvelopeInternal().contains(o) || !Do.isInRing(o, r.getCoordinates())) return !1;
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
            var r = arguments[1], i = arguments[0].getLocation(r, ne.RIGHT);
            if (i === N.NONE) return null;
            if (this._label.getLocation(r) === N.NONE) return this._label.setLocation(r, i), null;
          }
        } }, { key: "setShell", value: function(o) {
          this._shell = o, o !== null && o.addHole(this);
        } }, { key: "toPolygon", value: function(o) {
          for (var r = new Array(this._holes.size()).fill(null), i = 0; i < this._holes.size(); i++) r[i] = this._holes.get(i).getLinearRing();
          return o.createPolygon(this.getLinearRing(), r);
        } }], [{ key: "constructor_", value: function() {
          if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new de(), this._pts = new de(), this._label = new Jt(N.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new de(), this._geometryFactory = null, arguments.length !== 0) {
            if (arguments.length === 2) {
              var o = arguments[0], r = arguments[1];
              this._geometryFactory = r, this.computePoints(o), this.computeRing();
            }
          }
        } }]);
      })(), Jp = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "setEdgeRing", value: function(i, a) {
          i.setMinEdgeRing(a);
        } }, { key: "getNext", value: function(i) {
          return i.getNextMin();
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          fa.constructor_.call(this, i, a);
        } }]);
      })(fa), $p = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "buildMinimalRings", value: function() {
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
      })(fa), lc = (function() {
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
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "isIncidentEdgeInResult", value: function() {
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
          if (arguments.length !== 2 || !Number.isInteger(arguments[1]) || !Number.isInteger(arguments[0])) return S(r, "setLabel", this, 1).apply(this, arguments);
          var i = arguments[0], a = arguments[1];
          this._label === null ? this._label = new Jt(i, a) : this._label.setLocation(i, a);
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "mergeLabel", value: function() {
          if (arguments[0] instanceof r) {
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
      })(lc), Xp = (function(o) {
        function r() {
          return u(this, r), s(this, r, arguments);
        }
        return _(r, o), h(r);
      })(Zn);
      function cc(o) {
        return o == null ? 0 : o.color;
      }
      function Oe(o) {
        return o == null ? null : o.parent;
      }
      function On(o, r) {
        o !== null && (o.color = r);
      }
      function Fo(o) {
        return o == null ? null : o.left;
      }
      function hc(o) {
        return o == null ? null : o.right;
      }
      var ls = (function(o) {
        function r() {
          var i;
          return u(this, r), (i = s(this, r)).root_ = null, i.size_ = 0, i;
        }
        return _(r, o), h(r, [{ key: "get", value: function(i) {
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
          for (i.color = 1; i != null && i !== this.root_ && i.parent.color === 1; ) Oe(i) === Fo(Oe(Oe(i))) ? cc(a = hc(Oe(Oe(i)))) === 1 ? (On(Oe(i), 0), On(a, 0), On(Oe(Oe(i)), 1), i = Oe(Oe(i))) : (i === hc(Oe(i)) && (i = Oe(i), this.rotateLeft(i)), On(Oe(i), 0), On(Oe(Oe(i)), 1), this.rotateRight(Oe(Oe(i)))) : cc(a = Fo(Oe(Oe(i)))) === 1 ? (On(Oe(i), 0), On(a, 0), On(Oe(Oe(i)), 1), i = Oe(Oe(i))) : (i === Fo(Oe(i)) && (i = Oe(i), this.rotateRight(i)), On(Oe(i), 0), On(Oe(Oe(i)), 1), this.rotateLeft(Oe(Oe(i))));
          this.root_.color = 0;
        } }, { key: "values", value: function() {
          var i = new de(), a = this.getFirstEntry();
          if (a !== null) for (i.add(a.value); (a = r.successor(a)) !== null; ) i.add(a.value);
          return i;
        } }, { key: "entrySet", value: function() {
          var i = new Dr(), a = this.getFirstEntry();
          if (a !== null) for (i.add(a); (a = r.successor(a)) !== null; ) i.add(a);
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
      })(Xp), fc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "find", value: function(o) {
          return this.nodeMap.get(o);
        } }, { key: "addNode", value: function() {
          if (arguments[0] instanceof $) {
            var o = arguments[0], r = this.nodeMap.get(o);
            return r === null && (r = this.nodeFact.createNode(o), this.nodeMap.put(o, r)), r;
          }
          if (arguments[0] instanceof ga) {
            var i = arguments[0], a = this.nodeMap.get(i.getCoordinate());
            return a === null ? (this.nodeMap.put(i.getCoordinate(), i), i) : (a.mergeLabel(i), a);
          }
        } }, { key: "print", value: function(o) {
          for (var r = this.iterator(); r.hasNext(); )
            r.next().print(o);
        } }, { key: "iterator", value: function() {
          return this.nodeMap.values().iterator();
        } }, { key: "values", value: function() {
          return this.nodeMap.values();
        } }, { key: "getBoundaryNodes", value: function(o) {
          for (var r = new de(), i = this.iterator(); i.hasNext(); ) {
            var a = i.next();
            a.getLabel().getLocation(o) === N.BOUNDARY && r.add(a);
          }
          return r;
        } }, { key: "add", value: function(o) {
          var r = o.getCoordinate();
          this.addNode(r).add(o);
        } }], [{ key: "constructor_", value: function() {
          this.nodeMap = new ls(), this.nodeFact = null;
          var o = arguments[0];
          this.nodeFact = o;
        } }]);
      })(), xt = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "isNorthern", value: function(r) {
          return r === o.NE || r === o.NW;
        } }, { key: "isOpposite", value: function(r, i) {
          return r !== i && (r - i + 4) % 4 === 2;
        } }, { key: "commonHalfPlane", value: function(r, i) {
          if (r === i) return r;
          if ((r - i + 4) % 4 === 2) return -1;
          var a = r < i ? r : i;
          return a === 0 && (r > i ? r : i) === 3 ? 3 : a;
        } }, { key: "isInHalfPlane", value: function(r, i) {
          return i === o.SE ? r === o.SE || r === o.SW : r === i || r === i + 1;
        } }, { key: "quadrant", value: function() {
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var r = arguments[0], i = arguments[1];
            if (r === 0 && i === 0) throw new J("Cannot compute the quadrant for point ( " + r + ", " + i + " )");
            return r >= 0 ? i >= 0 ? o.NE : o.SE : i >= 0 ? o.NW : o.SW;
          }
          if (arguments[0] instanceof $ && arguments[1] instanceof $) {
            var a = arguments[0], l = arguments[1];
            if (l.x === a.x && l.y === a.y) throw new J("Cannot compute the quadrant for two identical points " + a);
            return l.x >= a.x ? l.y >= a.y ? o.NE : o.SE : l.y >= a.y ? o.NW : o.SW;
          }
        } }]);
      })();
      xt.NE = 0, xt.NW = 1, xt.SW = 2, xt.SE = 3;
      var gc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "compareDirection", value: function(r) {
          return this._dx === r._dx && this._dy === r._dy ? 0 : this._quadrant > r._quadrant ? 1 : this._quadrant < r._quadrant ? -1 : ye.index(r._p0, r._p1, this._p1);
        } }, { key: "getDy", value: function() {
          return this._dy;
        } }, { key: "getCoordinate", value: function() {
          return this._p0;
        } }, { key: "setNode", value: function(r) {
          this._node = r;
        } }, { key: "print", value: function(r) {
          var i = Math.atan2(this._dy, this._dx), a = this.getClass().getName(), l = a.lastIndexOf("."), g = a.substring(l + 1);
          r.print("  " + g + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + i + "   " + this._label);
        } }, { key: "compareTo", value: function(r) {
          var i = r;
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
          var r = Math.atan2(this._dy, this._dx), i = this.getClass().getName(), a = i.lastIndexOf(".");
          return "  " + i.substring(a + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + r + "   " + this._label;
        } }, { key: "computeLabel", value: function(r) {
        } }, { key: "init", value: function(r, i) {
          this._p0 = r, this._p1 = i, this._dx = i.x - r.x, this._dy = i.y - r.y, this._quadrant = xt.quadrant(this._dx, this._dy), ae.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
            var r = arguments[0];
            this._edge = r;
          } else if (arguments.length === 3) {
            var i = arguments[0], a = arguments[1], l = arguments[2];
            o.constructor_.call(this, i, a, l, null);
          } else if (arguments.length === 4) {
            var g = arguments[0], m = arguments[1], y = arguments[2], k = arguments[3];
            o.constructor_.call(this, g), this.init(m, y), this._label = k;
          }
        } }]);
      })(), Go = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "getNextMin", value: function() {
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
          S(r, "print", this, 1).call(this, i), i.print(" " + this._depth[ne.LEFT] + "/" + this._depth[ne.RIGHT]), i.print(" (" + this.getDepthDelta() + ")"), this._isInResult && i.print(" inResult");
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
          if (gc.constructor_.call(this, i), this._isForward = a, a) this.init(i.getCoordinate(0), i.getCoordinate(1));
          else {
            var l = i.getNumPoints() - 1;
            this.init(i.getCoordinate(l), i.getCoordinate(l - 1));
          }
          this.computeDirectedLabel();
        } }, { key: "depthFactor", value: function(i, a) {
          return i === N.EXTERIOR && a === N.INTERIOR ? 1 : i === N.INTERIOR && a === N.EXTERIOR ? -1 : 0;
        } }]);
      })(gc), dc = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "createNode", value: function(o) {
          return new ga(o, null);
        } }]);
      })(), pc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "printEdges", value: function(o) {
          o.println("Edges:");
          for (var r = 0; r < this._edges.size(); r++) {
            o.println("edge " + r + ":");
            var i = this._edges.get(r);
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
            var r = arguments[0];
            return this._nodes.addNode(r);
          }
        } }, { key: "getNodeIterator", value: function() {
          return this._nodes.iterator();
        } }, { key: "linkResultDirectedEdges", value: function() {
          for (var o = this._nodes.iterator(); o.hasNext(); )
            o.next().getEdges().linkResultDirectedEdges();
        } }, { key: "debugPrintln", value: function(o) {
          Pt.out.println(o);
        } }, { key: "isBoundaryNode", value: function(o, r) {
          var i = this._nodes.find(r);
          if (i === null) return !1;
          var a = i.getLabel();
          return a !== null && a.getLocation(o) === N.BOUNDARY;
        } }, { key: "linkAllDirectedEdges", value: function() {
          for (var o = this._nodes.iterator(); o.hasNext(); )
            o.next().getEdges().linkAllDirectedEdges();
        } }, { key: "matchInSameDirection", value: function(o, r, i, a) {
          return !!o.equals(i) && ye.index(o, r, a) === ye.COLLINEAR && xt.quadrant(o, r) === xt.quadrant(i, a);
        } }, { key: "getEdgeEnds", value: function() {
          return this._edgeEndList;
        } }, { key: "debugPrint", value: function(o) {
          Pt.out.print(o);
        } }, { key: "getEdgeIterator", value: function() {
          return this._edges.iterator();
        } }, { key: "findEdgeInSameDirection", value: function(o, r) {
          for (var i = 0; i < this._edges.size(); i++) {
            var a = this._edges.get(i), l = a.getCoordinates();
            if (this.matchInSameDirection(o, r, l[0], l[1]) || this.matchInSameDirection(o, r, l[l.length - 1], l[l.length - 2])) return a;
          }
          return null;
        } }, { key: "insertEdge", value: function(o) {
          this._edges.add(o);
        } }, { key: "findEdgeEnd", value: function(o) {
          for (var r = this.getEdgeEnds().iterator(); r.hasNext(); ) {
            var i = r.next();
            if (i.getEdge() === o) return i;
          }
          return null;
        } }, { key: "addEdges", value: function(o) {
          for (var r = o.iterator(); r.hasNext(); ) {
            var i = r.next();
            this._edges.add(i);
            var a = new Go(i, !0), l = new Go(i, !1);
            a.setSym(l), l.setSym(a), this.add(a), this.add(l);
          }
        } }, { key: "add", value: function(o) {
          this._nodes.add(o), this._edgeEndList.add(o);
        } }, { key: "getNodes", value: function() {
          return this._nodes.values();
        } }, { key: "findEdge", value: function(o, r) {
          for (var i = 0; i < this._edges.size(); i++) {
            var a = this._edges.get(i), l = a.getCoordinates();
            if (o.equals(l[0]) && r.equals(l[1])) return a;
          }
          return null;
        } }], [{ key: "constructor_", value: function() {
          if (this._edges = new de(), this._nodes = null, this._edgeEndList = new de(), arguments.length === 0) this._nodes = new fc(new dc());
          else if (arguments.length === 1) {
            var o = arguments[0];
            this._nodes = new fc(o);
          }
        } }, { key: "linkResultDirectedEdges", value: function(o) {
          for (var r = o.iterator(); r.hasNext(); )
            r.next().getEdges().linkResultDirectedEdges();
        } }]);
      })(), Vp = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "sortShellsAndHoles", value: function(r, i, a) {
          for (var l = r.iterator(); l.hasNext(); ) {
            var g = l.next();
            g.isHole() ? a.add(g) : i.add(g);
          }
        } }, { key: "computePolygons", value: function(r) {
          for (var i = new de(), a = r.iterator(); a.hasNext(); ) {
            var l = a.next().toPolygon(this._geometryFactory);
            i.add(l);
          }
          return i;
        } }, { key: "placeFreeHoles", value: function(r, i) {
          for (var a = i.iterator(); a.hasNext(); ) {
            var l = a.next();
            if (l.getShell() === null) {
              var g = o.findEdgeRingContaining(l, r);
              if (g === null) throw new Nt("unable to assign hole to a shell", l.getCoordinate(0));
              l.setShell(g);
            }
          }
        } }, { key: "buildMinimalEdgeRings", value: function(r, i, a) {
          for (var l = new de(), g = r.iterator(); g.hasNext(); ) {
            var m = g.next();
            if (m.getMaxNodeDegree() > 2) {
              m.linkDirectedEdgesForMinimalEdgeRings();
              var y = m.buildMinimalRings(), k = this.findShell(y);
              k !== null ? (this.placePolygonHoles(k, y), i.add(k)) : a.addAll(y);
            } else l.add(m);
          }
          return l;
        } }, { key: "buildMaximalEdgeRings", value: function(r) {
          for (var i = new de(), a = r.iterator(); a.hasNext(); ) {
            var l = a.next();
            if (l.isInResult() && l.getLabel().isArea() && l.getEdgeRing() === null) {
              var g = new $p(l, this._geometryFactory);
              i.add(g), g.setInResult();
            }
          }
          return i;
        } }, { key: "placePolygonHoles", value: function(r, i) {
          for (var a = i.iterator(); a.hasNext(); ) {
            var l = a.next();
            l.isHole() && l.setShell(r);
          }
        } }, { key: "getPolygons", value: function() {
          return this.computePolygons(this._shellList);
        } }, { key: "findShell", value: function(r) {
          for (var i = 0, a = null, l = r.iterator(); l.hasNext(); ) {
            var g = l.next();
            g.isHole() || (a = g, i++);
          }
          return ae.isTrue(i <= 1, "found two shells in MinimalEdgeRing list"), a;
        } }, { key: "add", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            this.add(r.getEdgeEnds(), r.getNodes());
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            pc.linkResultDirectedEdges(a);
            var l = this.buildMaximalEdgeRings(i), g = new de(), m = this.buildMinimalEdgeRings(l, this._shellList, g);
            this.sortShellsAndHoles(m, this._shellList, g), this.placeFreeHoles(this._shellList, g);
          }
        } }], [{ key: "constructor_", value: function() {
          this._geometryFactory = null, this._shellList = new de();
          var r = arguments[0];
          this._geometryFactory = r;
        } }, { key: "findEdgeRingContaining", value: function(r, i) {
          for (var a = r.getLinearRing(), l = a.getEnvelopeInternal(), g = a.getCoordinateN(0), m = null, y = null, k = i.iterator(); k.hasNext(); ) {
            var L = k.next(), q = L.getLinearRing(), X = q.getEnvelopeInternal();
            if (!X.equals(l) && X.contains(l)) {
              g = Q.ptNotInList(a.getCoordinates(), q.getCoordinates());
              var ee = !1;
              Do.isInRing(g, q.getCoordinates()) && (ee = !0), ee && (m === null || y.contains(X)) && (y = (m = L).getLinearRing().getEnvelopeInternal());
            }
          }
          return m;
        } }]);
      })(), mc = (function() {
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
          return [mc, w];
        } }], [{ key: "constructor_", value: function() {
          this._bounds = null, this._item = null;
          var o = arguments[0], r = arguments[1];
          this._bounds = o, this._item = r;
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
          for (var r = null, i = this._items.get(o); 2 * o <= this._size && ((r = 2 * o) !== this._size && this._items.get(r + 1).compareTo(this._items.get(r)) < 0 && r++, this._items.get(r).compareTo(i) < 0); o = r) this._items.set(o, this._items.get(r));
          this._items.set(o, i);
        } }, { key: "clear", value: function() {
          this._size = 0, this._items.clear();
        } }, { key: "peek", value: function() {
          return this.isEmpty() ? null : this._items.get(1);
        } }, { key: "isEmpty", value: function() {
          return this._size === 0;
        } }, { key: "add", value: function(o) {
          this._items.add(null), this._size += 1;
          var r = this._size;
          for (this._items.set(0, o); o.compareTo(this._items.get(Math.trunc(r / 2))) < 0; r /= 2) this._items.set(r, this._items.get(Math.trunc(r / 2)));
          this._items.set(r, o);
        } }], [{ key: "constructor_", value: function() {
          this._size = null, this._items = null, this._size = 0, this._items = new de(), this._items.add(null);
        } }]);
      })(), Wp = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "insert", value: function(o, r) {
        } }, { key: "remove", value: function(o, r) {
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
          return [mc, w];
        } }], [{ key: "constructor_", value: function() {
          if (this._childBoundables = new de(), this._bounds = null, this._level = null, arguments.length !== 0) {
            if (arguments.length === 1) {
              var o = arguments[0];
              this._level = o;
            }
          }
        } }]);
      })(), yi = { reverseOrder: function() {
        return { compare: function(o, r) {
          return r.compareTo(o);
        } };
      }, min: function(o) {
        return yi.sort(o), o.get(0);
      }, sort: function(o, r) {
        var i = o.toArray();
        r ? rt.sort(i, r) : rt.sort(i);
        for (var a = o.iterator(), l = 0, g = i.length; l < g; l++) a.next(), a.set(i[l]);
      }, singletonList: function(o) {
        var r = new de();
        return r.add(o), r;
      } }, jp = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "maxDistance", value: function(r, i, a, l, g, m, y, k) {
          var L = o.distance(r, i, g, m);
          return L = Math.max(L, o.distance(r, i, y, k)), L = Math.max(L, o.distance(a, l, g, m)), L = Math.max(L, o.distance(a, l, y, k));
        } }, { key: "distance", value: function(r, i, a, l) {
          var g = a - r, m = l - i;
          return Math.sqrt(g * g + m * m);
        } }, { key: "maximumDistance", value: function(r, i) {
          var a = Math.min(r.getMinX(), i.getMinX()), l = Math.min(r.getMinY(), i.getMinY()), g = Math.max(r.getMaxX(), i.getMaxX()), m = Math.max(r.getMaxY(), i.getMaxY());
          return o.distance(a, l, g, m);
        } }, { key: "minMaxDistance", value: function(r, i) {
          var a = r.getMinX(), l = r.getMinY(), g = r.getMaxX(), m = r.getMaxY(), y = i.getMinX(), k = i.getMinY(), L = i.getMaxX(), q = i.getMaxY(), X = o.maxDistance(a, l, a, m, y, k, y, q);
          return X = Math.min(X, o.maxDistance(a, l, a, m, y, k, L, k)), X = Math.min(X, o.maxDistance(a, l, a, m, L, q, y, q)), X = Math.min(X, o.maxDistance(a, l, a, m, L, q, L, k)), X = Math.min(X, o.maxDistance(a, l, g, l, y, k, y, q)), X = Math.min(X, o.maxDistance(a, l, g, l, y, k, L, k)), X = Math.min(X, o.maxDistance(a, l, g, l, L, q, y, q)), X = Math.min(X, o.maxDistance(a, l, g, l, L, q, L, k)), X = Math.min(X, o.maxDistance(g, m, a, m, y, k, y, q)), X = Math.min(X, o.maxDistance(g, m, a, m, y, k, L, k)), X = Math.min(X, o.maxDistance(g, m, a, m, L, q, y, q)), X = Math.min(X, o.maxDistance(g, m, a, m, L, q, L, k)), X = Math.min(X, o.maxDistance(g, m, g, l, y, k, y, q)), X = Math.min(X, o.maxDistance(g, m, g, l, y, k, L, k)), X = Math.min(X, o.maxDistance(g, m, g, l, L, q, y, q)), X = Math.min(X, o.maxDistance(g, m, g, l, L, q, L, k));
        } }]);
      })(), _i = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "maximumDistance", value: function() {
          return jp.maximumDistance(this._boundable1.getBounds(), this._boundable2.getBounds());
        } }, { key: "expandToQueue", value: function(r, i) {
          var a = o.isComposite(this._boundable1), l = o.isComposite(this._boundable2);
          if (a && l) return o.area(this._boundable1) > o.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, !1, r, i), null) : (this.expand(this._boundable2, this._boundable1, !0, r, i), null);
          if (a) return this.expand(this._boundable1, this._boundable2, !1, r, i), null;
          if (l) return this.expand(this._boundable2, this._boundable1, !0, r, i), null;
          throw new J("neither boundable is composite");
        } }, { key: "isLeaves", value: function() {
          return !(o.isComposite(this._boundable1) || o.isComposite(this._boundable2));
        } }, { key: "compareTo", value: function(r) {
          var i = r;
          return this._distance < i._distance ? -1 : this._distance > i._distance ? 1 : 0;
        } }, { key: "expand", value: function(r, i, a, l, g) {
          for (var m = r.getChildBoundables().iterator(); m.hasNext(); ) {
            var y = m.next(), k = null;
            (k = a ? new o(i, y, this._itemDistance) : new o(y, i, this._itemDistance)).getDistance() < g && l.add(k);
          }
        } }, { key: "getBoundable", value: function(r) {
          return r === 0 ? this._boundable1 : this._boundable2;
        } }, { key: "getDistance", value: function() {
          return this._distance;
        } }, { key: "distance", value: function() {
          return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
          var r = arguments[0], i = arguments[1], a = arguments[2];
          this._boundable1 = r, this._boundable2 = i, this._itemDistance = a, this._distance = this.distance();
        } }, { key: "area", value: function(r) {
          return r.getBounds().getArea();
        } }, { key: "isComposite", value: function(r) {
          return r instanceof $t;
        } }]);
      })(), vc = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "visitItem", value: function(o) {
        } }]);
      })(), Ei = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "queryInternal", value: function() {
          if (_e(arguments[2], vc) && arguments[0] instanceof Object && arguments[1] instanceof $t) for (var r = arguments[0], i = arguments[2], a = arguments[1].getChildBoundables(), l = 0; l < a.size(); l++) {
            var g = a.get(l);
            this.getIntersectsOp().intersects(g.getBounds(), r) && (g instanceof $t ? this.queryInternal(r, g, i) : g instanceof er ? i.visitItem(g.getItem()) : ae.shouldNeverReachHere());
          }
          else if (_e(arguments[2], bn) && arguments[0] instanceof Object && arguments[1] instanceof $t) for (var m = arguments[0], y = arguments[2], k = arguments[1].getChildBoundables(), L = 0; L < k.size(); L++) {
            var q = k.get(L);
            this.getIntersectsOp().intersects(q.getBounds(), m) && (q instanceof $t ? this.queryInternal(m, q, y) : q instanceof er ? y.add(q.getItem()) : ae.shouldNeverReachHere());
          }
        } }, { key: "getNodeCapacity", value: function() {
          return this._nodeCapacity;
        } }, { key: "lastNode", value: function(r) {
          return r.get(r.size() - 1);
        } }, { key: "size", value: function() {
          if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
          if (arguments.length === 1) {
            for (var r = 0, i = arguments[0].getChildBoundables().iterator(); i.hasNext(); ) {
              var a = i.next();
              a instanceof $t ? r += this.size(a) : a instanceof er && (r += 1);
            }
            return r;
          }
        } }, { key: "removeItem", value: function(r, i) {
          for (var a = null, l = r.getChildBoundables().iterator(); l.hasNext(); ) {
            var g = l.next();
            g instanceof er && g.getItem() === i && (a = g);
          }
          return a !== null && (r.getChildBoundables().remove(a), !0);
        } }, { key: "itemsTree", value: function() {
          if (arguments.length === 0) {
            this.build();
            var r = this.itemsTree(this._root);
            return r === null ? new de() : r;
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
        } }, { key: "insert", value: function(r, i) {
          ae.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new er(r, i));
        } }, { key: "boundablesAtLevel", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0], i = new de();
            return this.boundablesAtLevel(r, this._root, i), i;
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
            var r = arguments[0];
            this.build();
            var i = new de();
            return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), r) && this.queryInternal(r, this._root, i), i;
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
            var r = arguments[0], i = arguments[1];
            return this.build(), !!this.getIntersectsOp().intersects(this._root.getBounds(), r) && this.remove(r, this._root, i);
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
        } }, { key: "createHigherLevels", value: function(r, i) {
          ae.isTrue(!r.isEmpty());
          var a = this.createParentBoundables(r, i + 1);
          return a.size() === 1 ? a.get(0) : this.createHigherLevels(a, i + 1);
        } }, { key: "depth", value: function() {
          if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
          if (arguments.length === 1) {
            for (var r = 0, i = arguments[0].getChildBoundables().iterator(); i.hasNext(); ) {
              var a = i.next();
              if (a instanceof $t) {
                var l = this.depth(a);
                l > r && (r = l);
              }
            }
            return r + 1;
          }
        } }, { key: "createParentBoundables", value: function(r, i) {
          ae.isTrue(!r.isEmpty());
          var a = new de();
          a.add(this.createNode(i));
          var l = new de(r);
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
            var r = arguments[0];
            ae.isTrue(r > 1, "Node capacity must be greater than 1"), this._nodeCapacity = r;
          }
        } }, { key: "compareDoubles", value: function(r, i) {
          return r > i ? 1 : r < i ? -1 : 0;
        } }]);
      })();
      Ei.IntersectsOp = function() {
      }, Ei.DEFAULT_NODE_CAPACITY = 10;
      var Zp = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "distance", value: function(o, r) {
        } }]);
      })(), Rn = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "createParentBoundablesFromVerticalSlices", value: function(i, a) {
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
            return r.getItems(k);
          }
        } }, { key: "createNode", value: function(i) {
          return new yc(i);
        } }, { key: "size", value: function() {
          return arguments.length === 0 ? S(r, "size", this, 1).call(this) : S(r, "size", this, 1).apply(this, arguments);
        } }, { key: "insert", value: function() {
          if (!(arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof Le)) return S(r, "insert", this, 1).apply(this, arguments);
          var i = arguments[0], a = arguments[1];
          if (i.isNull()) return null;
          S(r, "insert", this, 1).call(this, i, a);
        } }, { key: "getIntersectsOp", value: function() {
          return r.intersectsOp;
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
            return S(r, "query", this, 1).call(this, i);
          }
          if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            S(r, "query", this, 1).call(this, a, l);
          }
        } }, { key: "getComparator", value: function() {
          return r.yComparator;
        } }, { key: "createParentBoundablesFromVerticalSlice", value: function(i, a) {
          return S(r, "createParentBoundables", this, 1).call(this, i, a);
        } }, { key: "remove", value: function() {
          if (arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof Le) {
            var i = arguments[0], a = arguments[1];
            return S(r, "remove", this, 1).call(this, i, a);
          }
          return S(r, "remove", this, 1).apply(this, arguments);
        } }, { key: "depth", value: function() {
          return arguments.length === 0 ? S(r, "depth", this, 1).call(this) : S(r, "depth", this, 1).apply(this, arguments);
        } }, { key: "createParentBoundables", value: function(i, a) {
          ae.isTrue(!i.isEmpty());
          var l = Math.trunc(Math.ceil(i.size() / this.getNodeCapacity())), g = new de(i);
          yi.sort(g, r.xComparator);
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
              var q = arguments[0], X = arguments[1];
              if (this.isEmpty() || q.isEmpty()) return null;
              var ee = new _i(this.getRoot(), q.getRoot(), X);
              return this.nearestNeighbour(ee);
            }
            if (arguments.length === 3) {
              var ue = arguments[2], fe = new er(arguments[0], arguments[1]), me = new _i(this.getRoot(), fe, ue);
              return this.nearestNeighbour(me)[0];
            }
            if (arguments.length === 4) {
              var Te = arguments[2], Ae = arguments[3], Fe = new er(arguments[0], arguments[1]), ct = new _i(this.getRoot(), Fe, Te);
              return this.nearestNeighbourK(ct, Ae);
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
            var k = arguments[0], L = arguments[1], q = arguments[2], X = new _i(this.getRoot(), k.getRoot(), L);
            return this.isWithinDistance(X, q);
          }
        } }, { key: "interfaces_", get: function() {
          return [Wp, w];
        } }], [{ key: "constructor_", value: function() {
          if (arguments.length === 0) r.constructor_.call(this, r.DEFAULT_NODE_CAPACITY);
          else if (arguments.length === 1) {
            var i = arguments[0];
            Ei.constructor_.call(this, i);
          }
        } }, { key: "centreX", value: function(i) {
          return r.avg(i.getMinX(), i.getMaxX());
        } }, { key: "avg", value: function(i, a) {
          return (i + a) / 2;
        } }, { key: "getItems", value: function(i) {
          for (var a = new Array(i.size()).fill(null), l = 0; !i.isEmpty(); ) {
            var g = i.poll();
            a[l] = g.getBoundable(0).getItem(), l++;
          }
          return a;
        } }, { key: "centreY", value: function(i) {
          return r.avg(i.getMinY(), i.getMaxY());
        } }]);
      })(Ei), yc = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "computeBounds", value: function() {
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
      Rn.STRtreeNode = yc, Rn.xComparator = new ((function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "interfaces_", get: function() {
          return [re];
        } }, { key: "compare", value: function(o, r) {
          return Ei.compareDoubles(Rn.centreX(o.getBounds()), Rn.centreX(r.getBounds()));
        } }]);
      })())(), Rn.yComparator = new ((function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "interfaces_", get: function() {
          return [re];
        } }, { key: "compare", value: function(o, r) {
          return Ei.compareDoubles(Rn.centreY(o.getBounds()), Rn.centreY(r.getBounds()));
        } }]);
      })())(), Rn.intersectsOp = new ((function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "interfaces_", get: function() {
          return [IntersectsOp];
        } }, { key: "intersects", value: function(o, r) {
          return o.intersects(r);
        } }]);
      })())(), Rn.DEFAULT_NODE_CAPACITY = 10;
      var Kp = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "relativeSign", value: function(r, i) {
          return r < i ? -1 : r > i ? 1 : 0;
        } }, { key: "compare", value: function(r, i, a) {
          if (i.equals2D(a)) return 0;
          var l = o.relativeSign(i.x, a.x), g = o.relativeSign(i.y, a.y);
          switch (r) {
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
        } }, { key: "compareValue", value: function(r, i) {
          return r < 0 ? -1 : r > 0 ? 1 : i < 0 ? -1 : i > 0 ? 1 : 0;
        } }]);
      })(), Qp = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getCoordinate", value: function() {
          return this.coord;
        } }, { key: "print", value: function(o) {
          o.print(this.coord), o.print(" seg # = " + this.segmentIndex);
        } }, { key: "compareTo", value: function(o) {
          var r = o;
          return this.segmentIndex < r.segmentIndex ? -1 : this.segmentIndex > r.segmentIndex ? 1 : this.coord.equals2D(r.coord) ? 0 : this._isInterior ? r._isInterior ? Kp.compare(this._segmentOctant, this.coord, r.coord) : 1 : -1;
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
          var o = arguments[0], r = arguments[1], i = arguments[2], a = arguments[3];
          this._segString = o, this.coord = new $(r), this.segmentIndex = i, this._segmentOctant = a, this._isInterior = !r.equals2D(o.getCoordinate(i));
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
          for (var r = this.iterator(), i = r.next(); r.hasNext(); ) {
            var a = r.next();
            this.addEdgeCoordinates(i, a, o), i = a;
          }
          return o.toCoordinateArray();
        } }, { key: "addCollapsedNodes", value: function() {
          var o = new de();
          this.findCollapsesFromInsertedNodes(o), this.findCollapsesFromExistingVertices(o);
          for (var r = o.iterator(); r.hasNext(); ) {
            var i = r.next().intValue();
            this.add(this._edge.getCoordinate(i), i);
          }
        } }, { key: "createSplitEdgePts", value: function(o, r) {
          var i = r.segmentIndex - o.segmentIndex + 2;
          if (i === 2) return [new $(o.coord), new $(r.coord)];
          var a = this._edge.getCoordinate(r.segmentIndex), l = r.isInterior() || !r.coord.equals2D(a);
          l || i--;
          var g = new Array(i).fill(null), m = 0;
          g[m++] = new $(o.coord);
          for (var y = o.segmentIndex + 1; y <= r.segmentIndex; y++) g[m++] = this._edge.getCoordinate(y);
          return l && (g[m] = new $(r.coord)), g;
        } }, { key: "print", value: function(o) {
          o.println("Intersections:");
          for (var r = this.iterator(); r.hasNext(); )
            r.next().print(o);
        } }, { key: "findCollapsesFromExistingVertices", value: function(o) {
          for (var r = 0; r < this._edge.size() - 2; r++) {
            var i = this._edge.getCoordinate(r);
            this._edge.getCoordinate(r + 1);
            var a = this._edge.getCoordinate(r + 2);
            i.equals2D(a) && o.add(ln.valueOf(r + 1));
          }
        } }, { key: "addEdgeCoordinates", value: function(o, r, i) {
          var a = this.createSplitEdgePts(o, r);
          i.add(a, !1);
        } }, { key: "iterator", value: function() {
          return this._nodeMap.values().iterator();
        } }, { key: "addSplitEdges", value: function(o) {
          this.addEndpoints(), this.addCollapsedNodes();
          for (var r = this.iterator(), i = r.next(); r.hasNext(); ) {
            var a = r.next(), l = this.createSplitEdge(i, a);
            o.add(l), i = a;
          }
        } }, { key: "findCollapseIndex", value: function(o, r, i) {
          if (!o.coord.equals2D(r.coord)) return !1;
          var a = r.segmentIndex - o.segmentIndex;
          return r.isInterior() || a--, a === 1 && (i[0] = o.segmentIndex + 1, !0);
        } }, { key: "findCollapsesFromInsertedNodes", value: function(o) {
          for (var r = new Array(1).fill(null), i = this.iterator(), a = i.next(); i.hasNext(); ) {
            var l = i.next();
            this.findCollapseIndex(a, l, r) && o.add(ln.valueOf(r[0])), a = l;
          }
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "addEndpoints", value: function() {
          var o = this._edge.size() - 1;
          this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(o), o);
        } }, { key: "createSplitEdge", value: function(o, r) {
          var i = this.createSplitEdgePts(o, r);
          return new qr(i, this._edge.getData());
        } }, { key: "add", value: function(o, r) {
          var i = new Qp(this._edge, o, r, this._edge.getSegmentOctant(r)), a = this._nodeMap.get(i);
          return a !== null ? (ae.isTrue(a.coord.equals2D(o), "Found equal nodes with different coordinates"), a) : (this._nodeMap.put(i, i), i);
        } }, { key: "checkSplitEdgesCorrectness", value: function(o) {
          var r = this._edge.getCoordinates(), i = o.get(0).getCoordinate(0);
          if (!i.equals2D(r[0])) throw new pe("bad split edge start point at " + i);
          var a = o.get(o.size() - 1).getCoordinates(), l = a[a.length - 1];
          if (!l.equals2D(r[r.length - 1])) throw new pe("bad split edge end point at " + l);
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
            var r = arguments[0], i = arguments[1];
            if (r === 0 && i === 0) throw new J("Cannot compute the octant for point ( " + r + ", " + i + " )");
            var a = Math.abs(r), l = Math.abs(i);
            return r >= 0 ? i >= 0 ? a >= l ? 0 : 1 : a >= l ? 7 : 6 : i >= 0 ? a >= l ? 3 : 2 : a >= l ? 4 : 5;
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
        }), [{ key: "addIntersection", value: function(o, r) {
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
        } }, { key: "getCoordinate", value: function(r) {
          return this._pts[r];
        } }, { key: "isClosed", value: function() {
          return this._pts[0].equals(this._pts[this._pts.length - 1]);
        } }, { key: "getSegmentOctant", value: function(r) {
          return r === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(r), this.getCoordinate(r + 1));
        } }, { key: "setData", value: function(r) {
          this._data = r;
        } }, { key: "safeOctant", value: function(r, i) {
          return r.equals2D(i) ? 0 : nm.octant(r, i);
        } }, { key: "getData", value: function() {
          return this._data;
        } }, { key: "addIntersection", value: function() {
          if (arguments.length === 2) {
            var r = arguments[0], i = arguments[1];
            this.addIntersectionNode(r, i);
          } else if (arguments.length === 4) {
            var a = arguments[1], l = arguments[3], g = new $(arguments[0].getIntersection(l));
            this.addIntersection(g, a);
          }
        } }, { key: "toString", value: function() {
          return Ro.toLineString(new ze(this._pts));
        } }, { key: "getNodeList", value: function() {
          return this._nodeList;
        } }, { key: "addIntersectionNode", value: function(r, i) {
          var a = i, l = a + 1;
          if (l < this._pts.length) {
            var g = this._pts[l];
            r.equals2D(g) && (a = l);
          }
          return this._nodeList.add(r, a);
        } }, { key: "addIntersections", value: function(r, i, a) {
          for (var l = 0; l < r.getIntersectionNum(); l++) this.addIntersection(r, i, a, l);
        } }, { key: "interfaces_", get: function() {
          return [im];
        } }], [{ key: "constructor_", value: function() {
          this._nodeList = new tm(this), this._pts = null, this._data = null;
          var r = arguments[0], i = arguments[1];
          this._pts = r, this._data = i;
        } }, { key: "getNodedSubstrings", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0], i = new de();
            return o.getNodedSubstrings(r, i), i;
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
            var r = arguments[0], i = ye.index(this.p0, this.p1, r.p0), a = ye.index(this.p0, this.p1, r.p1);
            return i >= 0 && a >= 0 || i <= 0 && a <= 0 ? Math.max(i, a) : 0;
          }
          if (arguments[0] instanceof $) {
            var l = arguments[0];
            return ye.index(this.p0, this.p1, l);
          }
        } }, { key: "toGeometry", value: function(r) {
          return r.createLineString([this.p0, this.p1]);
        } }, { key: "isVertical", value: function() {
          return this.p0.x === this.p1.x;
        } }, { key: "equals", value: function(r) {
          if (!(r instanceof o)) return !1;
          var i = r;
          return this.p0.equals(i.p0) && this.p1.equals(i.p1);
        } }, { key: "intersection", value: function(r) {
          var i = new zr();
          return i.computeIntersection(this.p0, this.p1, r.p0, r.p1), i.hasIntersection() ? i.getIntersection(0) : null;
        } }, { key: "project", value: function() {
          if (arguments[0] instanceof $) {
            var r = arguments[0];
            if (r.equals(this.p0) || r.equals(this.p1)) return new $(r);
            var i = this.projectionFactor(r), a = new $();
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
        } }, { key: "getCoordinate", value: function(r) {
          return r === 0 ? this.p0 : this.p1;
        } }, { key: "distancePerpendicular", value: function(r) {
          return Et.pointToLinePerpendicular(r, this.p0, this.p1);
        } }, { key: "minY", value: function() {
          return Math.min(this.p0.y, this.p1.y);
        } }, { key: "midPoint", value: function() {
          return o.midPoint(this.p0, this.p1);
        } }, { key: "projectionFactor", value: function(r) {
          if (r.equals(this.p0)) return 0;
          if (r.equals(this.p1)) return 1;
          var i = this.p1.x - this.p0.x, a = this.p1.y - this.p0.y, l = i * i + a * a;
          return l <= 0 ? Z.NaN : ((r.x - this.p0.x) * i + (r.y - this.p0.y) * a) / l;
        } }, { key: "closestPoints", value: function(r) {
          var i = this.intersection(r);
          if (i !== null) return [i, i];
          var a = new Array(2).fill(null), l = Z.MAX_VALUE, g = null, m = this.closestPoint(r.p0);
          l = m.distance(r.p0), a[0] = m, a[1] = r.p0;
          var y = this.closestPoint(r.p1);
          (g = y.distance(r.p1)) < l && (l = g, a[0] = y, a[1] = r.p1);
          var k = r.closestPoint(this.p0);
          (g = k.distance(this.p0)) < l && (l = g, a[0] = this.p0, a[1] = k);
          var L = r.closestPoint(this.p1);
          return (g = L.distance(this.p1)) < l && (l = g, a[0] = this.p1, a[1] = L), a;
        } }, { key: "closestPoint", value: function(r) {
          var i = this.projectionFactor(r);
          return i > 0 && i < 1 ? this.project(r) : this.p0.distance(r) < this.p1.distance(r) ? this.p0 : this.p1;
        } }, { key: "maxX", value: function() {
          return Math.max(this.p0.x, this.p1.x);
        } }, { key: "getLength", value: function() {
          return this.p0.distance(this.p1);
        } }, { key: "compareTo", value: function(r) {
          var i = r, a = this.p0.compareTo(i.p0);
          return a !== 0 ? a : this.p1.compareTo(i.p1);
        } }, { key: "reverse", value: function() {
          var r = this.p0;
          this.p0 = this.p1, this.p1 = r;
        } }, { key: "equalsTopo", value: function(r) {
          return this.p0.equals(r.p0) && this.p1.equals(r.p1) || this.p0.equals(r.p1) && this.p1.equals(r.p0);
        } }, { key: "lineIntersection", value: function(r) {
          return Gr.intersection(this.p0, this.p1, r.p0, r.p1);
        } }, { key: "maxY", value: function() {
          return Math.max(this.p0.y, this.p1.y);
        } }, { key: "pointAlongOffset", value: function(r, i) {
          var a = this.p0.x + r * (this.p1.x - this.p0.x), l = this.p0.y + r * (this.p1.y - this.p0.y), g = this.p1.x - this.p0.x, m = this.p1.y - this.p0.y, y = Math.sqrt(g * g + m * m), k = 0, L = 0;
          if (i !== 0) {
            if (y <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
            k = i * g / y, L = i * m / y;
          }
          return new $(a - L, l + k);
        } }, { key: "setCoordinates", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            this.setCoordinates(r.p0, r.p1);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.p0.x = i.x, this.p0.y = i.y, this.p1.x = a.x, this.p1.y = a.y;
          }
        } }, { key: "segmentFraction", value: function(r) {
          var i = this.projectionFactor(r);
          return i < 0 ? i = 0 : (i > 1 || Z.isNaN(i)) && (i = 1), i;
        } }, { key: "toString", value: function() {
          return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
        } }, { key: "isHorizontal", value: function() {
          return this.p0.y === this.p1.y;
        } }, { key: "reflect", value: function(r) {
          var i = this.p1.getY() - this.p0.getY(), a = this.p0.getX() - this.p1.getX(), l = this.p0.getY() * (this.p1.getX() - this.p0.getX()) - this.p0.getX() * (this.p1.getY() - this.p0.getY()), g = i * i + a * a, m = i * i - a * a, y = r.getX(), k = r.getY();
          return new $((-m * y - 2 * i * a * k - 2 * i * l) / g, (m * k - 2 * i * a * y - 2 * a * l) / g);
        } }, { key: "distance", value: function() {
          if (arguments[0] instanceof o) {
            var r = arguments[0];
            return Et.segmentToSegment(this.p0, this.p1, r.p0, r.p1);
          }
          if (arguments[0] instanceof $) {
            var i = arguments[0];
            return Et.pointToSegment(i, this.p0, this.p1);
          }
        } }, { key: "pointAlong", value: function(r) {
          var i = new $();
          return i.x = this.p0.x + r * (this.p1.x - this.p0.x), i.y = this.p0.y + r * (this.p1.y - this.p0.y), i;
        } }, { key: "hashCode", value: function() {
          var r = Z.doubleToLongBits(this.p0.x);
          r ^= 31 * Z.doubleToLongBits(this.p0.y);
          var i = Math.trunc(r) ^ Math.trunc(r >> 32), a = Z.doubleToLongBits(this.p1.x);
          return a ^= 31 * Z.doubleToLongBits(this.p1.y), i ^ (Math.trunc(a) ^ Math.trunc(a >> 32));
        } }, { key: "interfaces_", get: function() {
          return [W, w];
        } }], [{ key: "constructor_", value: function() {
          if (this.p0 = null, this.p1 = null, arguments.length === 0) o.constructor_.call(this, new $(), new $());
          else if (arguments.length === 1) {
            var r = arguments[0];
            o.constructor_.call(this, r.p0, r.p1);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.p0 = i, this.p1 = a;
          } else if (arguments.length === 4) {
            var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3];
            o.constructor_.call(this, new $(l, g), new $(m, y));
          }
        } }, { key: "midPoint", value: function(r, i) {
          return new $((r.x + i.x) / 2, (r.y + i.y) / 2);
        } }]);
      })(), sm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "overlap", value: function() {
          if (arguments.length !== 2) {
            if (arguments.length === 4) {
              var o = arguments[1], r = arguments[2], i = arguments[3];
              arguments[0].getLineSegment(o, this._overlapSeg1), r.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
            }
          }
        } }], [{ key: "constructor_", value: function() {
          this._overlapSeg1 = new Gt(), this._overlapSeg2 = new Gt();
        } }]);
      })(), _c = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getLineSegment", value: function(o, r) {
          r.p0 = this._pts[o], r.p1 = this._pts[o + 1];
        } }, { key: "computeSelect", value: function(o, r, i, a) {
          var l = this._pts[r], g = this._pts[i];
          if (i - r == 1) return a.select(this, r), null;
          if (!o.intersects(l, g)) return null;
          var m = Math.trunc((r + i) / 2);
          r < m && this.computeSelect(o, r, m, a), m < i && this.computeSelect(o, m, i, a);
        } }, { key: "getCoordinates", value: function() {
          for (var o = new Array(this._end - this._start + 1).fill(null), r = 0, i = this._start; i <= this._end; i++) o[r++] = this._pts[i];
          return o;
        } }, { key: "computeOverlaps", value: function() {
          if (arguments.length === 2) {
            var o = arguments[0], r = arguments[1];
            this.computeOverlaps(this._start, this._end, o, o._start, o._end, r);
          } else if (arguments.length === 6) {
            var i = arguments[0], a = arguments[1], l = arguments[2], g = arguments[3], m = arguments[4], y = arguments[5];
            if (a - i == 1 && m - g == 1) return y.overlap(this, i, l, g), null;
            if (!this.overlaps(i, a, l, g, m)) return null;
            var k = Math.trunc((i + a) / 2), L = Math.trunc((g + m) / 2);
            i < k && (g < L && this.computeOverlaps(i, k, l, g, L, y), L < m && this.computeOverlaps(i, k, l, L, m, y)), k < a && (g < L && this.computeOverlaps(k, a, l, g, L, y), L < m && this.computeOverlaps(k, a, l, L, m, y));
          }
        } }, { key: "setId", value: function(o) {
          this._id = o;
        } }, { key: "select", value: function(o, r) {
          this.computeSelect(o, this._start, this._end, r);
        } }, { key: "getEnvelope", value: function() {
          if (this._env === null) {
            var o = this._pts[this._start], r = this._pts[this._end];
            this._env = new Le(o, r);
          }
          return this._env;
        } }, { key: "overlaps", value: function(o, r, i, a, l) {
          return Le.intersects(this._pts[o], this._pts[r], i._pts[a], i._pts[l]);
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
          var o = arguments[0], r = arguments[1], i = arguments[2], a = arguments[3];
          this._pts = o, this._start = r, this._end = i, this._context = a;
        } }]);
      })(), am = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "findChainEnd", value: function(r, i) {
          for (var a = i; a < r.length - 1 && r[a].equals2D(r[a + 1]); ) a++;
          if (a >= r.length - 1) return r.length - 1;
          for (var l = xt.quadrant(r[a], r[a + 1]), g = i + 1; g < r.length && !(!r[g - 1].equals2D(r[g]) && xt.quadrant(r[g - 1], r[g]) !== l); )
            g++;
          return g - 1;
        } }, { key: "getChains", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            return o.getChains(r, null);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1], l = new de(), g = 0;
            do {
              var m = o.findChainEnd(i, g), y = new _c(i, g, m, a);
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
      })(), Ec = (function() {
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
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "getMonotoneChains", value: function() {
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
          for (var i = new xc(this._segInt), a = this._monoChains.iterator(); a.hasNext(); ) for (var l = a.next(), g = this._index.query(l.getEnvelope()).iterator(); g.hasNext(); ) {
            var m = g.next();
            if (m.getId() > l.getId() && (l.computeOverlaps(m, i), this._nOverlaps++), this._segInt.isDone()) return null;
          }
        } }], [{ key: "constructor_", value: function() {
          if (this._monoChains = new de(), this._index = new Rn(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, arguments.length !== 0) {
            if (arguments.length === 1) {
              var i = arguments[0];
              Ec.constructor_.call(this, i);
            }
          }
        } }]);
      })(Ec), xc = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "overlap", value: function() {
          if (arguments.length !== 4) return S(r, "overlap", this, 1).apply(this, arguments);
          var i = arguments[1], a = arguments[2], l = arguments[3], g = arguments[0].getContext(), m = a.getContext();
          this._si.processIntersections(g, i, m, l);
        } }], [{ key: "constructor_", value: function() {
          this._si = null;
          var i = arguments[0];
          this._si = i;
        } }]);
      })(sm);
      Uo.SegmentOverlapAction = xc;
      var cn = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isDeletable", value: function(r, i, a, l) {
          var g = this._inputLine[r], m = this._inputLine[i], y = this._inputLine[a];
          return !!this.isConcave(g, m, y) && !!this.isShallow(g, m, y, l) && this.isShallowSampled(g, m, r, a, l);
        } }, { key: "deleteShallowConcavities", value: function() {
          for (var r = 1, i = this.findNextNonDeletedIndex(r), a = this.findNextNonDeletedIndex(i), l = !1; a < this._inputLine.length; ) {
            var g = !1;
            this.isDeletable(r, i, a, this._distanceTol) && (this._isDeleted[i] = o.DELETE, g = !0, l = !0), r = g ? a : i, i = this.findNextNonDeletedIndex(r), a = this.findNextNonDeletedIndex(i);
          }
          return l;
        } }, { key: "isShallowConcavity", value: function(r, i, a, l) {
          return ye.index(r, i, a) === this._angleOrientation && Et.pointToSegment(i, r, a) < l;
        } }, { key: "isShallowSampled", value: function(r, i, a, l, g) {
          var m = Math.trunc((l - a) / o.NUM_PTS_TO_CHECK);
          m <= 0 && (m = 1);
          for (var y = a; y < l; y += m) if (!this.isShallow(r, i, this._inputLine[y], g)) return !1;
          return !0;
        } }, { key: "isConcave", value: function(r, i, a) {
          var l = ye.index(r, i, a) === this._angleOrientation;
          return l;
        } }, { key: "simplify", value: function(r) {
          this._distanceTol = Math.abs(r), r < 0 && (this._angleOrientation = ye.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
          var i = !1;
          do
            i = this.deleteShallowConcavities();
          while (i);
          return this.collapseLine();
        } }, { key: "findNextNonDeletedIndex", value: function(r) {
          for (var i = r + 1; i < this._inputLine.length && this._isDeleted[i] === o.DELETE; ) i++;
          return i;
        } }, { key: "isShallow", value: function(r, i, a, l) {
          return Et.pointToSegment(i, r, a) < l;
        } }, { key: "collapseLine", value: function() {
          for (var r = new B(), i = 0; i < this._inputLine.length; i++) this._isDeleted[i] !== o.DELETE && r.add(this._inputLine[i]);
          return r.toCoordinateArray();
        } }], [{ key: "constructor_", value: function() {
          this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = ye.COUNTERCLOCKWISE;
          var r = arguments[0];
          this._inputLine = r;
        } }, { key: "simplify", value: function(r, i) {
          return new o(r).simplify(i);
        } }]);
      })();
      cn.INIT = 0, cn.DELETE = 1, cn.KEEP = 1, cn.NUM_PTS_TO_CHECK = 10;
      var wc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getCoordinates", value: function() {
          return this._ptList.toArray(o.COORDINATE_ARRAY_TYPE);
        } }, { key: "setPrecisionModel", value: function(r) {
          this._precisionModel = r;
        } }, { key: "addPt", value: function(r) {
          var i = new $(r);
          if (this._precisionModel.makePrecise(i), this.isRedundant(i)) return null;
          this._ptList.add(i);
        } }, { key: "reverse", value: function() {
        } }, { key: "addPts", value: function(r, i) {
          if (i) for (var a = 0; a < r.length; a++) this.addPt(r[a]);
          else for (var l = r.length - 1; l >= 0; l--) this.addPt(r[l]);
        } }, { key: "isRedundant", value: function(r) {
          if (this._ptList.size() < 1) return !1;
          var i = this._ptList.get(this._ptList.size() - 1);
          return r.distance(i) < this._minimimVertexDistance;
        } }, { key: "toString", value: function() {
          return new mi().createLineString(this.getCoordinates()).toString();
        } }, { key: "closeRing", value: function() {
          if (this._ptList.size() < 1) return null;
          var r = new $(this._ptList.get(0)), i = this._ptList.get(this._ptList.size() - 1);
          if (r.equals(i)) return null;
          this._ptList.add(r);
        } }, { key: "setMinimumVertexDistance", value: function(r) {
          this._minimimVertexDistance = r;
        } }], [{ key: "constructor_", value: function() {
          this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new de();
        } }]);
      })();
      wc.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);
      var Bt = (function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "toDegrees", value: function(r) {
          return 180 * r / Math.PI;
        } }, { key: "normalize", value: function(r) {
          for (; r > Math.PI; ) r -= o.PI_TIMES_2;
          for (; r <= -Math.PI; ) r += o.PI_TIMES_2;
          return r;
        } }, { key: "angle", value: function() {
          if (arguments.length === 1) {
            var r = arguments[0];
            return Math.atan2(r.y, r.x);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1], l = a.x - i.x, g = a.y - i.y;
            return Math.atan2(g, l);
          }
        } }, { key: "isAcute", value: function(r, i, a) {
          var l = r.x - i.x, g = r.y - i.y;
          return l * (a.x - i.x) + g * (a.y - i.y) > 0;
        } }, { key: "isObtuse", value: function(r, i, a) {
          var l = r.x - i.x, g = r.y - i.y;
          return l * (a.x - i.x) + g * (a.y - i.y) < 0;
        } }, { key: "interiorAngle", value: function(r, i, a) {
          var l = o.angle(i, r), g = o.angle(i, a);
          return Math.abs(g - l);
        } }, { key: "normalizePositive", value: function(r) {
          if (r < 0) {
            for (; r < 0; ) r += o.PI_TIMES_2;
            r >= o.PI_TIMES_2 && (r = 0);
          } else {
            for (; r >= o.PI_TIMES_2; ) r -= o.PI_TIMES_2;
            r < 0 && (r = 0);
          }
          return r;
        } }, { key: "angleBetween", value: function(r, i, a) {
          var l = o.angle(i, r), g = o.angle(i, a);
          return o.diff(l, g);
        } }, { key: "diff", value: function(r, i) {
          var a = null;
          return (a = r < i ? i - r : r - i) > Math.PI && (a = 2 * Math.PI - a), a;
        } }, { key: "toRadians", value: function(r) {
          return r * Math.PI / 180;
        } }, { key: "getTurn", value: function(r, i) {
          var a = Math.sin(i - r);
          return a > 0 ? o.COUNTERCLOCKWISE : a < 0 ? o.CLOCKWISE : o.NONE;
        } }, { key: "angleBetweenOriented", value: function(r, i, a) {
          var l = o.angle(i, r), g = o.angle(i, a) - l;
          return g <= -Math.PI ? g + o.PI_TIMES_2 : g > Math.PI ? g - o.PI_TIMES_2 : g;
        } }]);
      })();
      Bt.PI_TIMES_2 = 2 * Math.PI, Bt.PI_OVER_2 = Math.PI / 2, Bt.PI_OVER_4 = Math.PI / 4, Bt.COUNTERCLOCKWISE = ye.COUNTERCLOCKWISE, Bt.CLOCKWISE = ye.CLOCKWISE, Bt.NONE = ye.COLLINEAR;
      var cs = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "addNextSegment", value: function(r, i) {
          if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = r, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
          var a = ye.index(this._s0, this._s1, this._s2), l = a === ye.CLOCKWISE && this._side === ne.LEFT || a === ye.COUNTERCLOCKWISE && this._side === ne.RIGHT;
          a === 0 ? this.addCollinear(i) : l ? this.addOutsideTurn(a, i) : this.addInsideTurn(a, i);
        } }, { key: "addLineEndCap", value: function(r, i) {
          var a = new Gt(r, i), l = new Gt();
          this.computeOffsetSegment(a, ne.LEFT, this._distance, l);
          var g = new Gt();
          this.computeOffsetSegment(a, ne.RIGHT, this._distance, g);
          var m = i.x - r.x, y = i.y - r.y, k = Math.atan2(y, m);
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
              var q = new $(l.p1.x + L.x, l.p1.y + L.y), X = new $(g.p1.x + L.x, g.p1.y + L.y);
              this._segList.addPt(q), this._segList.addPt(X);
          }
        } }, { key: "getCoordinates", value: function() {
          return this._segList.getCoordinates();
        } }, { key: "addMitreJoin", value: function(r, i, a, l) {
          var g = Gr.intersection(i.p0, i.p1, a.p0, a.p1);
          if (g !== null && (l <= 0 ? 1 : g.distance(r) / Math.abs(l)) <= this._bufParams.getMitreLimit()) return this._segList.addPt(g), null;
          this.addLimitedMitreJoin(i, a, l, this._bufParams.getMitreLimit());
        } }, { key: "addOutsideTurn", value: function(r, i) {
          if (this._offset0.p1.distance(this._offset1.p0) < this._distance * o.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
          this._bufParams.getJoinStyle() === H.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === H.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (i && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, r, this._distance), this._segList.addPt(this._offset1.p0));
        } }, { key: "createSquare", value: function(r) {
          this._segList.addPt(new $(r.x + this._distance, r.y + this._distance)), this._segList.addPt(new $(r.x + this._distance, r.y - this._distance)), this._segList.addPt(new $(r.x - this._distance, r.y - this._distance)), this._segList.addPt(new $(r.x - this._distance, r.y + this._distance)), this._segList.closeRing();
        } }, { key: "addSegments", value: function(r, i) {
          this._segList.addPts(r, i);
        } }, { key: "addFirstSegment", value: function() {
          this._segList.addPt(this._offset1.p0);
        } }, { key: "addCornerFillet", value: function(r, i, a, l, g) {
          var m = i.x - r.x, y = i.y - r.y, k = Math.atan2(y, m), L = a.x - r.x, q = a.y - r.y, X = Math.atan2(q, L);
          l === ye.CLOCKWISE ? k <= X && (k += 2 * Math.PI) : k >= X && (k -= 2 * Math.PI), this._segList.addPt(i), this.addDirectedFillet(r, k, X, l, g), this._segList.addPt(a);
        } }, { key: "addLastSegment", value: function() {
          this._segList.addPt(this._offset1.p1);
        } }, { key: "initSideSegments", value: function(r, i, a) {
          this._s1 = r, this._s2 = i, this._side = a, this._seg1.setCoordinates(r, i), this.computeOffsetSegment(this._seg1, a, this._distance, this._offset1);
        } }, { key: "addLimitedMitreJoin", value: function(r, i, a, l) {
          var g = this._seg0.p1, m = Bt.angle(g, this._seg0.p0), y = Bt.angleBetweenOriented(this._seg0.p0, g, this._seg1.p1) / 2, k = Bt.normalize(m + y), L = Bt.normalize(k + Math.PI), q = l * a, X = a - q * Math.abs(Math.sin(y)), ee = g.x + q * Math.cos(L), ue = g.y + q * Math.sin(L), fe = new $(ee, ue), me = new Gt(g, fe), Te = me.pointAlongOffset(1, X), Ae = me.pointAlongOffset(1, -X);
          this._side === ne.LEFT ? (this._segList.addPt(Te), this._segList.addPt(Ae)) : (this._segList.addPt(Ae), this._segList.addPt(Te));
        } }, { key: "addDirectedFillet", value: function(r, i, a, l, g) {
          var m = l === ye.CLOCKWISE ? -1 : 1, y = Math.abs(i - a), k = Math.trunc(y / this._filletAngleQuantum + 0.5);
          if (k < 1) return null;
          for (var L = y / k, q = new $(), X = 0; X < k; X++) {
            var ee = i + m * X * L;
            q.x = r.x + g * Math.cos(ee), q.y = r.y + g * Math.sin(ee), this._segList.addPt(q);
          }
        } }, { key: "computeOffsetSegment", value: function(r, i, a, l) {
          var g = i === ne.LEFT ? 1 : -1, m = r.p1.x - r.p0.x, y = r.p1.y - r.p0.y, k = Math.sqrt(m * m + y * y), L = g * a * m / k, q = g * a * y / k;
          l.p0.x = r.p0.x - q, l.p0.y = r.p0.y + L, l.p1.x = r.p1.x - q, l.p1.y = r.p1.y + L;
        } }, { key: "addInsideTurn", value: function(r, i) {
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
        } }, { key: "createCircle", value: function(r) {
          var i = new $(r.x + this._distance, r.y);
          this._segList.addPt(i), this.addDirectedFillet(r, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
        } }, { key: "addBevelJoin", value: function(r, i) {
          this._segList.addPt(r.p1), this._segList.addPt(i.p0);
        } }, { key: "init", value: function(r) {
          this._distance = r, this._maxCurveSegmentError = r * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new wc(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(r * o.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
        } }, { key: "addCollinear", value: function(r) {
          this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === H.JOIN_BEVEL || this._bufParams.getJoinStyle() === H.JOIN_MITRE ? (r && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, ye.CLOCKWISE, this._distance));
        } }, { key: "closeRing", value: function() {
          this._segList.closeRing();
        } }, { key: "hasNarrowConcaveAngle", value: function() {
          return this._hasNarrowConcaveAngle;
        } }], [{ key: "constructor_", value: function() {
          this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new Gt(), this._seg1 = new Gt(), this._offset0 = new Gt(), this._offset1 = new Gt(), this._side = 0, this._hasNarrowConcaveAngle = !1;
          var r = arguments[0], i = arguments[1], a = arguments[2];
          this._precisionModel = r, this._bufParams = i, this._li = new zr(), this._filletAngleQuantum = Math.PI / 2 / i.getQuadrantSegments(), i.getQuadrantSegments() >= 8 && i.getJoinStyle() === H.JOIN_ROUND && (this._closingSegLengthFactor = o.MAX_CLOSING_SEG_LEN_FACTOR), this.init(a);
        } }]);
      })();
      cs.OFFSET_SEGMENT_SEPARATION_FACTOR = 1e-3, cs.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = 1e-3, cs.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, cs.MAX_CLOSING_SEG_LEN_FACTOR = 80;
      var om = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getOffsetCurve", value: function(r, i) {
          if (this._distance = i, i === 0) return null;
          var a = i < 0, l = Math.abs(i), g = this.getSegGen(l);
          r.length <= 1 ? this.computePointCurve(r[0], g) : this.computeOffsetCurve(r, a, g);
          var m = g.getCoordinates();
          return a && Q.reverse(m), m;
        } }, { key: "computeSingleSidedBufferCurve", value: function(r, i, a) {
          var l = this.simplifyTolerance(this._distance);
          if (i) {
            a.addSegments(r, !0);
            var g = cn.simplify(r, -l), m = g.length - 1;
            a.initSideSegments(g[m], g[m - 1], ne.LEFT), a.addFirstSegment();
            for (var y = m - 2; y >= 0; y--) a.addNextSegment(g[y], !0);
          } else {
            a.addSegments(r, !1);
            var k = cn.simplify(r, l), L = k.length - 1;
            a.initSideSegments(k[0], k[1], ne.LEFT), a.addFirstSegment();
            for (var q = 2; q <= L; q++) a.addNextSegment(k[q], !0);
          }
          a.addLastSegment(), a.closeRing();
        } }, { key: "computeRingBufferCurve", value: function(r, i, a) {
          var l = this.simplifyTolerance(this._distance);
          i === ne.RIGHT && (l = -l);
          var g = cn.simplify(r, l), m = g.length - 1;
          a.initSideSegments(g[m - 1], g[0], i);
          for (var y = 1; y <= m; y++) {
            var k = y !== 1;
            a.addNextSegment(g[y], k);
          }
          a.closeRing();
        } }, { key: "computeLineBufferCurve", value: function(r, i) {
          var a = this.simplifyTolerance(this._distance), l = cn.simplify(r, a), g = l.length - 1;
          i.initSideSegments(l[0], l[1], ne.LEFT);
          for (var m = 2; m <= g; m++) i.addNextSegment(l[m], !0);
          i.addLastSegment(), i.addLineEndCap(l[g - 1], l[g]);
          var y = cn.simplify(r, -a), k = y.length - 1;
          i.initSideSegments(y[k], y[k - 1], ne.LEFT);
          for (var L = k - 2; L >= 0; L--) i.addNextSegment(y[L], !0);
          i.addLastSegment(), i.addLineEndCap(y[1], y[0]), i.closeRing();
        } }, { key: "computePointCurve", value: function(r, i) {
          switch (this._bufParams.getEndCapStyle()) {
            case H.CAP_ROUND:
              i.createCircle(r);
              break;
            case H.CAP_SQUARE:
              i.createSquare(r);
          }
        } }, { key: "getLineCurve", value: function(r, i) {
          if (this._distance = i, this.isLineOffsetEmpty(i)) return null;
          var a = Math.abs(i), l = this.getSegGen(a);
          if (r.length <= 1) this.computePointCurve(r[0], l);
          else if (this._bufParams.isSingleSided()) {
            var g = i < 0;
            this.computeSingleSidedBufferCurve(r, g, l);
          } else this.computeLineBufferCurve(r, l);
          return l.getCoordinates();
        } }, { key: "getBufferParameters", value: function() {
          return this._bufParams;
        } }, { key: "simplifyTolerance", value: function(r) {
          return r * this._bufParams.getSimplifyFactor();
        } }, { key: "getRingCurve", value: function(r, i, a) {
          if (this._distance = a, r.length <= 2) return this.getLineCurve(r, a);
          if (a === 0) return o.copyCoordinates(r);
          var l = this.getSegGen(a);
          return this.computeRingBufferCurve(r, i, l), l.getCoordinates();
        } }, { key: "computeOffsetCurve", value: function(r, i, a) {
          var l = this.simplifyTolerance(this._distance);
          if (i) {
            var g = cn.simplify(r, -l), m = g.length - 1;
            a.initSideSegments(g[m], g[m - 1], ne.LEFT), a.addFirstSegment();
            for (var y = m - 2; y >= 0; y--) a.addNextSegment(g[y], !0);
          } else {
            var k = cn.simplify(r, l), L = k.length - 1;
            a.initSideSegments(k[0], k[1], ne.LEFT), a.addFirstSegment();
            for (var q = 2; q <= L; q++) a.addNextSegment(k[q], !0);
          }
          a.addLastSegment();
        } }, { key: "isLineOffsetEmpty", value: function(r) {
          return r === 0 || r < 0 && !this._bufParams.isSingleSided();
        } }, { key: "getSegGen", value: function(r) {
          return new cs(this._precisionModel, this._bufParams, r);
        } }], [{ key: "constructor_", value: function() {
          this._distance = 0, this._precisionModel = null, this._bufParams = null;
          var r = arguments[0], i = arguments[1];
          this._precisionModel = r, this._bufParams = i;
        } }, { key: "copyCoordinates", value: function(r) {
          for (var i = new Array(r.length).fill(null), a = 0; a < i.length; a++) i[a] = new $(r[a]);
          return i;
        } }]);
      })(), kc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "findStabbedSegments", value: function() {
          if (arguments.length === 1) {
            for (var o = arguments[0], r = new de(), i = this._subgraphs.iterator(); i.hasNext(); ) {
              var a = i.next(), l = a.getEnvelope();
              o.y < l.getMinY() || o.y > l.getMaxY() || this.findStabbedSegments(o, a.getDirectedEdges(), r);
            }
            return r;
          }
          if (arguments.length === 3) {
            if (_e(arguments[2], bn) && arguments[0] instanceof $ && arguments[1] instanceof Go) {
              for (var g = arguments[0], m = arguments[1], y = arguments[2], k = m.getEdge().getCoordinates(), L = 0; L < k.length - 1; L++)
                if (this._seg.p0 = k[L], this._seg.p1 = k[L + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse(), !(Math.max(this._seg.p0.x, this._seg.p1.x) < g.x || this._seg.isHorizontal() || g.y < this._seg.p0.y || g.y > this._seg.p1.y || ye.index(this._seg.p0, this._seg.p1, g) === ye.RIGHT)) {
                  var q = m.getDepth(ne.LEFT);
                  this._seg.p0.equals(k[L]) || (q = m.getDepth(ne.RIGHT));
                  var X = new Sc(this._seg, q);
                  y.add(X);
                }
            } else if (_e(arguments[2], bn) && arguments[0] instanceof $ && _e(arguments[1], bn)) for (var ee = arguments[0], ue = arguments[2], fe = arguments[1].iterator(); fe.hasNext(); ) {
              var me = fe.next();
              me.isForward() && this.findStabbedSegments(ee, me, ue);
            }
          }
        } }, { key: "getDepth", value: function(o) {
          var r = this.findStabbedSegments(o);
          return r.size() === 0 ? 0 : yi.min(r)._leftDepth;
        } }], [{ key: "constructor_", value: function() {
          this._subgraphs = null, this._seg = new Gt();
          var o = arguments[0];
          this._subgraphs = o;
        } }]);
      })(), Sc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "compareTo", value: function(o) {
          var r = o;
          if (this._upwardSeg.minX() >= r._upwardSeg.maxX()) return 1;
          if (this._upwardSeg.maxX() <= r._upwardSeg.minX()) return -1;
          var i = this._upwardSeg.orientationIndex(r._upwardSeg);
          return i !== 0 || (i = -1 * r._upwardSeg.orientationIndex(this._upwardSeg)) !== 0 ? i : this._upwardSeg.compareTo(r._upwardSeg);
        } }, { key: "compareX", value: function(o, r) {
          var i = o.p0.compareTo(r.p0);
          return i !== 0 ? i : o.p1.compareTo(r.p1);
        } }, { key: "toString", value: function() {
          return this._upwardSeg.toString();
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._upwardSeg = null, this._leftDepth = null;
          var o = arguments[0], r = arguments[1];
          this._upwardSeg = new Gt(o), this._leftDepth = r;
        } }]);
      })();
      kc.DepthSegment = Sc;
      var Mc = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, null, [{ key: "constructor_", value: function() {
          V.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
        } }]);
      })(V), zo = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getY", value: function() {
          var r = this.y / this.w;
          if (Z.isNaN(r) || Z.isInfinite(r)) throw new Mc();
          return r;
        } }, { key: "getX", value: function() {
          var r = this.x / this.w;
          if (Z.isNaN(r) || Z.isInfinite(r)) throw new Mc();
          return r;
        } }, { key: "getCoordinate", value: function() {
          var r = new $();
          return r.x = this.getX(), r.y = this.getY(), r;
        } }], [{ key: "constructor_", value: function() {
          if (this.x = null, this.y = null, this.w = null, arguments.length === 0) this.x = 0, this.y = 0, this.w = 1;
          else if (arguments.length === 1) {
            var r = arguments[0];
            this.x = r.x, this.y = r.y, this.w = 1;
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
            var X = arguments[0], ee = arguments[1], ue = arguments[2], fe = arguments[3], me = X.y - ee.y, Te = ee.x - X.x, Ae = X.x * ee.y - ee.x * X.y, Fe = ue.y - fe.y, ct = fe.x - ue.x, ft = ue.x * fe.y - fe.x * ue.y;
            this.x = Te * ft - ct * Ae, this.y = Fe * Ae - me * ft, this.w = me * ct - Fe * Te;
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
        } }, { key: "interpolateZ", value: function(r) {
          if (r === null) throw new J("Supplied point is null.");
          return o.interpolateZ(r, this.p0, this.p1, this.p2);
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
          var r = arguments[0], i = arguments[1], a = arguments[2];
          this.p0 = r, this.p1 = i, this.p2 = a;
        } }, { key: "area", value: function(r, i, a) {
          return Math.abs(((a.x - r.x) * (i.y - r.y) - (i.x - r.x) * (a.y - r.y)) / 2);
        } }, { key: "signedArea", value: function(r, i, a) {
          return ((a.x - r.x) * (i.y - r.y) - (i.x - r.x) * (a.y - r.y)) / 2;
        } }, { key: "det", value: function(r, i, a, l) {
          return r * l - i * a;
        } }, { key: "interpolateZ", value: function(r, i, a, l) {
          var g = i.x, m = i.y, y = a.x - g, k = l.x - g, L = a.y - m, q = l.y - m, X = y * q - k * L, ee = r.x - g, ue = r.y - m, fe = (q * ee - k * ue) / X, me = (-L * ee + y * ue) / X;
          return i.getZ() + fe * (a.getZ() - i.getZ()) + me * (l.getZ() - i.getZ());
        } }, { key: "longestSideLength", value: function(r, i, a) {
          var l = r.distance(i), g = i.distance(a), m = a.distance(r), y = l;
          return g > y && (y = g), m > y && (y = m), y;
        } }, { key: "circumcentreDD", value: function(r, i, a) {
          var l = ve.valueOf(r.x).subtract(a.x), g = ve.valueOf(r.y).subtract(a.y), m = ve.valueOf(i.x).subtract(a.x), y = ve.valueOf(i.y).subtract(a.y), k = ve.determinant(l, g, m, y).multiply(2), L = l.sqr().add(g.sqr()), q = m.sqr().add(y.sqr()), X = ve.determinant(g, L, y, q), ee = ve.determinant(l, L, m, q), ue = ve.valueOf(a.x).subtract(X.divide(k)).doubleValue(), fe = ve.valueOf(a.y).add(ee.divide(k)).doubleValue();
          return new $(ue, fe);
        } }, { key: "isAcute", value: function(r, i, a) {
          return !!Bt.isAcute(r, i, a) && !!Bt.isAcute(i, a, r) && !!Bt.isAcute(a, r, i);
        } }, { key: "circumcentre", value: function(r, i, a) {
          var l = a.x, g = a.y, m = r.x - l, y = r.y - g, k = i.x - l, L = i.y - g, q = 2 * o.det(m, y, k, L), X = o.det(y, m * m + y * y, L, k * k + L * L), ee = o.det(m, m * m + y * y, k, k * k + L * L);
          return new $(l - X / q, g + ee / q);
        } }, { key: "perpendicularBisector", value: function(r, i) {
          var a = i.x - r.x, l = i.y - r.y, g = new zo(r.x + a / 2, r.y + l / 2, 1), m = new zo(r.x - l + a / 2, r.y + a + l / 2, 1);
          return new zo(g, m);
        } }, { key: "angleBisector", value: function(r, i, a) {
          var l = i.distance(r), g = l / (l + i.distance(a)), m = a.x - r.x, y = a.y - r.y;
          return new $(r.x + g * m, r.y + g * y);
        } }, { key: "area3D", value: function(r, i, a) {
          var l = i.x - r.x, g = i.y - r.y, m = i.getZ() - r.getZ(), y = a.x - r.x, k = a.y - r.y, L = a.getZ() - r.getZ(), q = g * L - m * k, X = m * y - l * L, ee = l * k - g * y, ue = q * q + X * X + ee * ee, fe = Math.sqrt(ue) / 2;
          return fe;
        } }, { key: "centroid", value: function(r, i, a) {
          var l = (r.x + i.x + a.x) / 3, g = (r.y + i.y + a.y) / 3;
          return new $(l, g);
        } }, { key: "inCentre", value: function(r, i, a) {
          var l = i.distance(a), g = r.distance(a), m = r.distance(i), y = l + g + m, k = (l * r.x + g * i.x + m * a.x) / y, L = (l * r.y + g * i.y + m * a.y) / y;
          return new $(k, L);
        } }]);
      })(), lm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "addRingSide", value: function(o, r, i, a, l) {
          if (r === 0 && o.length < vr.MINIMUM_VALID_SIZE) return null;
          var g = a, m = l;
          o.length >= vr.MINIMUM_VALID_SIZE && ye.isCCW(o) && (g = l, m = a, i = ne.opposite(i));
          var y = this._curveBuilder.getRingCurve(o, i, r);
          this.addCurve(y, g, m);
        } }, { key: "addRingBothSides", value: function(o, r) {
          this.addRingSide(o, r, ne.LEFT, N.EXTERIOR, N.INTERIOR), this.addRingSide(o, r, ne.RIGHT, N.INTERIOR, N.EXTERIOR);
        } }, { key: "addPoint", value: function(o) {
          if (this._distance <= 0) return null;
          var r = o.getCoordinates(), i = this._curveBuilder.getLineCurve(r, this._distance);
          this.addCurve(i, N.EXTERIOR, N.INTERIOR);
        } }, { key: "addPolygon", value: function(o) {
          var r = this._distance, i = ne.LEFT;
          this._distance < 0 && (r = -this._distance, i = ne.RIGHT);
          var a = o.getExteriorRing(), l = Q.removeRepeatedPoints(a.getCoordinates());
          if (this._distance < 0 && this.isErodedCompletely(a, this._distance) || this._distance <= 0 && l.length < 3) return null;
          this.addRingSide(l, r, i, N.EXTERIOR, N.INTERIOR);
          for (var g = 0; g < o.getNumInteriorRing(); g++) {
            var m = o.getInteriorRingN(g), y = Q.removeRepeatedPoints(m.getCoordinates());
            this._distance > 0 && this.isErodedCompletely(m, -this._distance) || this.addRingSide(y, r, ne.opposite(i), N.INTERIOR, N.EXTERIOR);
          }
        } }, { key: "isTriangleErodedCompletely", value: function(o, r) {
          var i = new um(o[0], o[1], o[2]), a = i.inCentre();
          return Et.pointToSegment(a, i.p0, i.p1) < Math.abs(r);
        } }, { key: "addLineString", value: function(o) {
          if (this._curveBuilder.isLineOffsetEmpty(this._distance)) return null;
          var r = Q.removeRepeatedPoints(o.getCoordinates());
          if (Q.isRing(r) && !this._curveBuilder.getBufferParameters().isSingleSided()) this.addRingBothSides(r, this._distance);
          else {
            var i = this._curveBuilder.getLineCurve(r, this._distance);
            this.addCurve(i, N.EXTERIOR, N.INTERIOR);
          }
        } }, { key: "addCurve", value: function(o, r, i) {
          if (o === null || o.length < 2) return null;
          var a = new qr(o, new Jt(0, N.BOUNDARY, r, i));
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
        } }, { key: "isErodedCompletely", value: function(o, r) {
          var i = o.getCoordinates();
          if (i.length < 4) return r < 0;
          if (i.length === 4) return this.isTriangleErodedCompletely(i, r);
          var a = o.getEnvelopeInternal(), l = Math.min(a.getHeight(), a.getWidth());
          return r < 0 && 2 * Math.abs(r) > l;
        } }, { key: "addCollection", value: function(o) {
          for (var r = 0; r < o.getNumGeometries(); r++) {
            var i = o.getGeometryN(r);
            this.add(i);
          }
        } }], [{ key: "constructor_", value: function() {
          this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new de();
          var o = arguments[0], r = arguments[1], i = arguments[2];
          this._inputGeom = o, this._distance = r, this._curveBuilder = i;
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
          var r = this._parent.getGeometryN(this._index++);
          return r instanceof $e ? (this._subcollectionIterator = new o(r), this._subcollectionIterator.next()) : r;
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
          var r = arguments[0];
          this._parent = r, this._atStart = !0, this._index = 0, this._max = r.getNumGeometries();
        } }, { key: "isAtomic", value: function(r) {
          return !(r instanceof $e);
        } }]);
      })(), fm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "locate", value: function(r) {
          return o.locate(r, this._geom);
        } }, { key: "interfaces_", get: function() {
          return [cm];
        } }], [{ key: "constructor_", value: function() {
          this._geom = null;
          var r = arguments[0];
          this._geom = r;
        } }, { key: "locatePointInPolygon", value: function(r, i) {
          if (i.isEmpty()) return N.EXTERIOR;
          var a = i.getExteriorRing(), l = o.locatePointInRing(r, a);
          if (l !== N.INTERIOR) return l;
          for (var g = 0; g < i.getNumInteriorRing(); g++) {
            var m = i.getInteriorRingN(g), y = o.locatePointInRing(r, m);
            if (y === N.BOUNDARY) return N.BOUNDARY;
            if (y === N.INTERIOR) return N.EXTERIOR;
          }
          return N.INTERIOR;
        } }, { key: "locatePointInRing", value: function(r, i) {
          return i.getEnvelopeInternal().intersects(r) ? Do.locateInRing(r, i.getCoordinates()) : N.EXTERIOR;
        } }, { key: "containsPointInPolygon", value: function(r, i) {
          return N.EXTERIOR !== o.locatePointInPolygon(r, i);
        } }, { key: "locateInGeometry", value: function(r, i) {
          if (i instanceof Ur) return o.locatePointInPolygon(r, i);
          if (i instanceof $e) for (var a = new hm(i); a.hasNext(); ) {
            var l = a.next();
            if (l !== i) {
              var g = o.locateInGeometry(r, l);
              if (g !== N.EXTERIOR) return g;
            }
          }
          return N.EXTERIOR;
        } }, { key: "isContained", value: function(r, i) {
          return N.EXTERIOR !== o.locate(r, i);
        } }, { key: "locate", value: function(r, i) {
          return i.isEmpty() ? N.EXTERIOR : i.getEnvelopeInternal().intersects(r) ? o.locateInGeometry(r, i) : N.EXTERIOR;
        } }]);
      })(), gm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getNextCW", value: function(o) {
          this.getEdges();
          var r = this._edgeList.indexOf(o), i = r - 1;
          return r === 0 && (i = this._edgeList.size() - 1), this._edgeList.get(i);
        } }, { key: "propagateSideLabels", value: function(o) {
          for (var r = N.NONE, i = this.iterator(); i.hasNext(); ) {
            var a = i.next().getLabel();
            a.isArea(o) && a.getLocation(o, ne.LEFT) !== N.NONE && (r = a.getLocation(o, ne.LEFT));
          }
          if (r === N.NONE) return null;
          for (var l = r, g = this.iterator(); g.hasNext(); ) {
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
          for (var r = this.iterator(); r.hasNext(); )
            r.next().print(o);
        } }, { key: "isAreaLabelsConsistent", value: function(o) {
          return this.computeEdgeEndLabels(o.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
        } }, { key: "checkAreaLabelsConsistent", value: function(o) {
          var r = this.getEdges();
          if (r.size() <= 0) return !0;
          var i = r.size() - 1, a = r.get(i).getLabel().getLocation(o, ne.LEFT);
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
          for (var r = 0; r < this._edgeList.size(); r++)
            if (this._edgeList.get(r) === o) return r;
          return -1;
        } }, { key: "iterator", value: function() {
          return this.getEdges().iterator();
        } }, { key: "getEdges", value: function() {
          return this._edgeList === null && (this._edgeList = new de(this._edgeMap.values())), this._edgeList;
        } }, { key: "getLocation", value: function(o, r, i) {
          return this._ptInAreaLocation[o] === N.NONE && (this._ptInAreaLocation[o] = fm.locate(r, i[o].getGeometry())), this._ptInAreaLocation[o];
        } }, { key: "toString", value: function() {
          var o = new un();
          o.append("EdgeEndStar:   " + this.getCoordinate()), o.append(`
`);
          for (var r = this.iterator(); r.hasNext(); ) {
            var i = r.next();
            o.append(i), o.append(`
`);
          }
          return o.toString();
        } }, { key: "computeEdgeEndLabels", value: function(o) {
          for (var r = this.iterator(); r.hasNext(); )
            r.next().computeLabel(o);
        } }, { key: "computeLabelling", value: function(o) {
          this.computeEdgeEndLabels(o[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
          for (var r = [!1, !1], i = this.iterator(); i.hasNext(); ) for (var a = i.next().getLabel(), l = 0; l < 2; l++) a.isLine(l) && a.getLocation(l) === N.BOUNDARY && (r[l] = !0);
          for (var g = this.iterator(); g.hasNext(); ) for (var m = g.next(), y = m.getLabel(), k = 0; k < 2; k++) if (y.isAnyNull(k)) {
            var L = N.NONE;
            if (r[k]) L = N.EXTERIOR;
            else {
              var q = m.getCoordinate();
              L = this.getLocation(k, q, o);
            }
            y.setAllLocationsIfNull(k, L);
          }
        } }, { key: "getDegree", value: function() {
          return this._edgeMap.size();
        } }, { key: "insertEdgeEnd", value: function(o, r) {
          this._edgeMap.put(o, r), this._edgeList = null;
        } }], [{ key: "constructor_", value: function() {
          this._edgeMap = new ls(), this._edgeList = null, this._ptInAreaLocation = [N.NONE, N.NONE];
        } }]);
      })(), dm = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "linkResultDirectedEdges", value: function() {
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
          S(r, "computeLabelling", this, 1).call(this, i), this._label = new Jt(N.NONE);
          for (var a = this.iterator(); a.hasNext(); ) for (var l = a.next().getEdge().getLabel(), g = 0; g < 2; g++) {
            var m = l.getLocation(g);
            m !== N.INTERIOR && m !== N.BOUNDARY || this._label.setLocation(g, N.INTERIOR);
          }
        } }], [{ key: "constructor_", value: function() {
          this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
        } }]);
      })(gm), pm = (function(o) {
        function r() {
          return u(this, r), s(this, r);
        }
        return _(r, o), h(r, [{ key: "createNode", value: function(i) {
          return new ga(i, new dm());
        } }]);
      })(dc), Ic = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "compareTo", value: function(r) {
          var i = r;
          return o.compareOriented(this._pts, this._orientation, i._pts, i._orientation);
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this._pts = null, this._orientation = null;
          var r = arguments[0];
          this._pts = r, this._orientation = o.orientation(r);
        } }, { key: "orientation", value: function(r) {
          return Q.increasingDirection(r) === 1;
        } }, { key: "compareOriented", value: function(r, i, a, l) {
          for (var g = i ? 1 : -1, m = l ? 1 : -1, y = i ? r.length : -1, k = l ? a.length : -1, L = i ? 0 : r.length - 1, q = l ? 0 : a.length - 1; ; ) {
            var X = r[L].compareTo(a[q]);
            if (X !== 0) return X;
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
          for (var r = 0; r < this._edges.size(); r++) {
            var i = this._edges.get(r);
            r > 0 && o.print(","), o.print("(");
            for (var a = i.getCoordinates(), l = 0; l < a.length; l++) l > 0 && o.print(","), o.print(a[l].x + " " + a[l].y);
            o.println(")");
          }
          o.print(")  ");
        } }, { key: "addAll", value: function(o) {
          for (var r = o.iterator(); r.hasNext(); ) this.add(r.next());
        } }, { key: "findEdgeIndex", value: function(o) {
          for (var r = 0; r < this._edges.size(); r++) if (this._edges.get(r).equals(o)) return r;
          return -1;
        } }, { key: "iterator", value: function() {
          return this._edges.iterator();
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "get", value: function(o) {
          return this._edges.get(o);
        } }, { key: "findEqualEdge", value: function(o) {
          var r = new Ic(o.getCoordinates());
          return this._ocaMap.get(r);
        } }, { key: "add", value: function(o) {
          this._edges.add(o);
          var r = new Ic(o.getCoordinates());
          this._ocaMap.put(r, o);
        } }], [{ key: "constructor_", value: function() {
          this._edges = new de(), this._ocaMap = new ls();
        } }]);
      })(), bc = (function() {
        return h((function o() {
          u(this, o);
        }), [{ key: "processIntersections", value: function(o, r, i, a) {
        } }, { key: "isDone", value: function() {
        } }]);
      })(), vm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isTrivialIntersection", value: function(r, i, a, l) {
          if (r === a && this._li.getIntersectionNum() === 1) {
            if (o.isAdjacentSegments(i, l)) return !0;
            if (r.isClosed()) {
              var g = r.size() - 1;
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
        } }, { key: "processIntersections", value: function(r, i, a, l) {
          if (r === a && i === l) return null;
          this.numTests++;
          var g = r.getCoordinates()[i], m = r.getCoordinates()[i + 1], y = a.getCoordinates()[l], k = a.getCoordinates()[l + 1];
          this._li.computeIntersection(g, m, y, k), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(r, i, a, l) || (this._hasIntersection = !0, r.addIntersections(this._li, i, 0), a.addIntersections(this._li, l, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
        } }, { key: "hasIntersection", value: function() {
          return this._hasIntersection;
        } }, { key: "isDone", value: function() {
          return !1;
        } }, { key: "hasInteriorIntersection", value: function() {
          return this._hasInterior;
        } }, { key: "interfaces_", get: function() {
          return [bc];
        } }], [{ key: "constructor_", value: function() {
          this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
          var r = arguments[0];
          this._li = r;
        } }, { key: "isAdjacentSegments", value: function(r, i) {
          return Math.abs(r - i) === 1;
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
          var r = o;
          return this.compare(r.segmentIndex, r.dist);
        } }, { key: "isEndPoint", value: function(o) {
          return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === o;
        } }, { key: "toString", value: function() {
          return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
        } }, { key: "getDistance", value: function() {
          return this.dist;
        } }, { key: "compare", value: function(o, r) {
          return this.segmentIndex < o ? -1 : this.segmentIndex > o ? 1 : this.dist < r ? -1 : this.dist > r ? 1 : 0;
        } }, { key: "interfaces_", get: function() {
          return [W];
        } }], [{ key: "constructor_", value: function() {
          this.coord = null, this.segmentIndex = null, this.dist = null;
          var o = arguments[0], r = arguments[1], i = arguments[2];
          this.coord = new $(o), this.segmentIndex = r, this.dist = i;
        } }]);
      })(), _m = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "print", value: function(o) {
          o.println("Intersections:");
          for (var r = this.iterator(); r.hasNext(); )
            r.next().print(o);
        } }, { key: "iterator", value: function() {
          return this._nodeMap.values().iterator();
        } }, { key: "addSplitEdges", value: function(o) {
          this.addEndpoints();
          for (var r = this.iterator(), i = r.next(); r.hasNext(); ) {
            var a = r.next(), l = this.createSplitEdge(i, a);
            o.add(l), i = a;
          }
        } }, { key: "addEndpoints", value: function() {
          var o = this.edge.pts.length - 1;
          this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[o], o, 0);
        } }, { key: "createSplitEdge", value: function(o, r) {
          var i = r.segmentIndex - o.segmentIndex + 2, a = this.edge.pts[r.segmentIndex], l = r.dist > 0 || !r.coord.equals2D(a);
          l || i--;
          var g = new Array(i).fill(null), m = 0;
          g[m++] = new $(o.coord);
          for (var y = o.segmentIndex + 1; y <= r.segmentIndex; y++) g[m++] = this.edge.pts[y];
          return l && (g[m] = r.coord), new Ac(g, new Jt(this.edge._label));
        } }, { key: "add", value: function(o, r, i) {
          var a = new ym(o, r, i), l = this._nodeMap.get(a);
          return l !== null ? l : (this._nodeMap.put(a, a), a);
        } }, { key: "isIntersection", value: function(o) {
          for (var r = this.iterator(); r.hasNext(); )
            if (r.next().coord.equals(o)) return !0;
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
          if (arguments.length === 1) for (var r = arguments[0], i = 0; i < r.length; i++) {
            var a = Math.trunc(i / 3), l = i % 3;
            this._matrix[a][l] = ie.toDimensionValue(r.charAt(i));
          }
          else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1], y = arguments[2];
            this._matrix[g][m] = y;
          }
        } }, { key: "isContains", value: function() {
          return o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && this._matrix[N.EXTERIOR][N.INTERIOR] === ie.FALSE && this._matrix[N.EXTERIOR][N.BOUNDARY] === ie.FALSE;
        } }, { key: "setAtLeast", value: function() {
          if (arguments.length === 1) for (var r = arguments[0], i = 0; i < r.length; i++) {
            var a = Math.trunc(i / 3), l = i % 3;
            this.setAtLeast(a, l, ie.toDimensionValue(r.charAt(i)));
          }
          else if (arguments.length === 3) {
            var g = arguments[0], m = arguments[1], y = arguments[2];
            this._matrix[g][m] < y && (this._matrix[g][m] = y);
          }
        } }, { key: "setAtLeastIfValid", value: function(r, i, a) {
          r >= 0 && i >= 0 && this.setAtLeast(r, i, a);
        } }, { key: "isWithin", value: function() {
          return o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && this._matrix[N.INTERIOR][N.EXTERIOR] === ie.FALSE && this._matrix[N.BOUNDARY][N.EXTERIOR] === ie.FALSE;
        } }, { key: "isTouches", value: function(r, i) {
          return r > i ? this.isTouches(i, r) : (r === ie.A && i === ie.A || r === ie.L && i === ie.L || r === ie.L && i === ie.A || r === ie.P && i === ie.A || r === ie.P && i === ie.L) && this._matrix[N.INTERIOR][N.INTERIOR] === ie.FALSE && (o.isTrue(this._matrix[N.INTERIOR][N.BOUNDARY]) || o.isTrue(this._matrix[N.BOUNDARY][N.INTERIOR]) || o.isTrue(this._matrix[N.BOUNDARY][N.BOUNDARY]));
        } }, { key: "isOverlaps", value: function(r, i) {
          return r === ie.P && i === ie.P || r === ie.A && i === ie.A ? o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && o.isTrue(this._matrix[N.INTERIOR][N.EXTERIOR]) && o.isTrue(this._matrix[N.EXTERIOR][N.INTERIOR]) : r === ie.L && i === ie.L && this._matrix[N.INTERIOR][N.INTERIOR] === 1 && o.isTrue(this._matrix[N.INTERIOR][N.EXTERIOR]) && o.isTrue(this._matrix[N.EXTERIOR][N.INTERIOR]);
        } }, { key: "isEquals", value: function(r, i) {
          return r === i && o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && this._matrix[N.INTERIOR][N.EXTERIOR] === ie.FALSE && this._matrix[N.BOUNDARY][N.EXTERIOR] === ie.FALSE && this._matrix[N.EXTERIOR][N.INTERIOR] === ie.FALSE && this._matrix[N.EXTERIOR][N.BOUNDARY] === ie.FALSE;
        } }, { key: "toString", value: function() {
          for (var r = new et("123456789"), i = 0; i < 3; i++) for (var a = 0; a < 3; a++) r.setCharAt(3 * i + a, ie.toDimensionSymbol(this._matrix[i][a]));
          return r.toString();
        } }, { key: "setAll", value: function(r) {
          for (var i = 0; i < 3; i++) for (var a = 0; a < 3; a++) this._matrix[i][a] = r;
        } }, { key: "get", value: function(r, i) {
          return this._matrix[r][i];
        } }, { key: "transpose", value: function() {
          var r = this._matrix[1][0];
          return this._matrix[1][0] = this._matrix[0][1], this._matrix[0][1] = r, r = this._matrix[2][0], this._matrix[2][0] = this._matrix[0][2], this._matrix[0][2] = r, r = this._matrix[2][1], this._matrix[2][1] = this._matrix[1][2], this._matrix[1][2] = r, this;
        } }, { key: "matches", value: function(r) {
          if (r.length !== 9) throw new J("Should be length 9: " + r);
          for (var i = 0; i < 3; i++) for (var a = 0; a < 3; a++) if (!o.matches(this._matrix[i][a], r.charAt(3 * i + a))) return !1;
          return !0;
        } }, { key: "add", value: function(r) {
          for (var i = 0; i < 3; i++) for (var a = 0; a < 3; a++) this.setAtLeast(i, a, r.get(i, a));
        } }, { key: "isDisjoint", value: function() {
          return this._matrix[N.INTERIOR][N.INTERIOR] === ie.FALSE && this._matrix[N.INTERIOR][N.BOUNDARY] === ie.FALSE && this._matrix[N.BOUNDARY][N.INTERIOR] === ie.FALSE && this._matrix[N.BOUNDARY][N.BOUNDARY] === ie.FALSE;
        } }, { key: "isCrosses", value: function(r, i) {
          return r === ie.P && i === ie.L || r === ie.P && i === ie.A || r === ie.L && i === ie.A ? o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && o.isTrue(this._matrix[N.INTERIOR][N.EXTERIOR]) : r === ie.L && i === ie.P || r === ie.A && i === ie.P || r === ie.A && i === ie.L ? o.isTrue(this._matrix[N.INTERIOR][N.INTERIOR]) && o.isTrue(this._matrix[N.EXTERIOR][N.INTERIOR]) : r === ie.L && i === ie.L && this._matrix[N.INTERIOR][N.INTERIOR] === 0;
        } }, { key: "interfaces_", get: function() {
          return [E];
        } }], [{ key: "constructor_", value: function() {
          if (this._matrix = null, arguments.length === 0) this._matrix = Array(3).fill().map((function() {
            return Array(3);
          })), this.setAll(ie.FALSE);
          else if (arguments.length === 1) {
            if (typeof arguments[0] == "string") {
              var r = arguments[0];
              o.constructor_.call(this), this.set(r);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              o.constructor_.call(this), this._matrix[N.INTERIOR][N.INTERIOR] = i._matrix[N.INTERIOR][N.INTERIOR], this._matrix[N.INTERIOR][N.BOUNDARY] = i._matrix[N.INTERIOR][N.BOUNDARY], this._matrix[N.INTERIOR][N.EXTERIOR] = i._matrix[N.INTERIOR][N.EXTERIOR], this._matrix[N.BOUNDARY][N.INTERIOR] = i._matrix[N.BOUNDARY][N.INTERIOR], this._matrix[N.BOUNDARY][N.BOUNDARY] = i._matrix[N.BOUNDARY][N.BOUNDARY], this._matrix[N.BOUNDARY][N.EXTERIOR] = i._matrix[N.BOUNDARY][N.EXTERIOR], this._matrix[N.EXTERIOR][N.INTERIOR] = i._matrix[N.EXTERIOR][N.INTERIOR], this._matrix[N.EXTERIOR][N.BOUNDARY] = i._matrix[N.EXTERIOR][N.BOUNDARY], this._matrix[N.EXTERIOR][N.EXTERIOR] = i._matrix[N.EXTERIOR][N.EXTERIOR];
            }
          }
        } }, { key: "matches", value: function() {
          if (Number.isInteger(arguments[0]) && typeof arguments[1] == "string") {
            var r = arguments[0], i = arguments[1];
            return i === ie.SYM_DONTCARE || i === ie.SYM_TRUE && (r >= 0 || r === ie.TRUE) || i === ie.SYM_FALSE && r === ie.FALSE || i === ie.SYM_P && r === ie.P || i === ie.SYM_L && r === ie.L || i === ie.SYM_A && r === ie.A;
          }
          if (typeof arguments[0] == "string" && typeof arguments[1] == "string") {
            var a = arguments[1];
            return new o(arguments[0]).matches(a);
          }
        } }, { key: "isTrue", value: function(r) {
          return r >= 0 || r === ie.TRUE;
        } }]);
      })(), xm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "size", value: function() {
          return this._size;
        } }, { key: "addAll", value: function(r) {
          return r === null || r.length === 0 ? null : (this.ensureCapacity(this._size + r.length), Pt.arraycopy(r, 0, this._data, this._size, r.length), void (this._size += r.length));
        } }, { key: "ensureCapacity", value: function(r) {
          if (r <= this._data.length) return null;
          var i = Math.max(r, 2 * this._data.length);
          this._data = rt.copyOf(this._data, i);
        } }, { key: "toArray", value: function() {
          var r = new Array(this._size).fill(null);
          return Pt.arraycopy(this._data, 0, r, 0, this._size), r;
        } }, { key: "add", value: function(r) {
          this.ensureCapacity(this._size + 1), this._data[this._size] = r, ++this._size;
        } }], [{ key: "constructor_", value: function() {
          if (this._data = null, this._size = 0, arguments.length === 0) o.constructor_.call(this, 10);
          else if (arguments.length === 1) {
            var r = arguments[0];
            this._data = new Array(r).fill(null);
          }
        } }]);
      })(), wm = (function() {
        function o() {
          u(this, o);
        }
        return h(o, [{ key: "getChainStartIndices", value: function(r) {
          var i = 0, a = new xm(Math.trunc(r.length / 2));
          a.add(i);
          do {
            var l = this.findChainEnd(r, i);
            a.add(l), i = l;
          } while (i < r.length - 1);
          return a.toArray();
        } }, { key: "findChainEnd", value: function(r, i) {
          for (var a = xt.quadrant(r[i], r[i + 1]), l = i + 1; l < r.length && xt.quadrant(r[l - 1], r[l]) === a; )
            l++;
          return l - 1;
        } }, { key: "OLDgetChainStartIndices", value: function(r) {
          var i = 0, a = new de();
          a.add(i);
          do {
            var l = this.findChainEnd(r, i);
            a.add(l), i = l;
          } while (i < r.length - 1);
          return o.toIntArray(a);
        } }], [{ key: "toIntArray", value: function(r) {
          for (var i = new Array(r.size()).fill(null), a = 0; a < i.length; a++) i[a] = r.get(a).intValue();
          return i;
        } }]);
      })(), km = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "getCoordinates", value: function() {
          return this.pts;
        } }, { key: "getMaxX", value: function(o) {
          var r = this.pts[this.startIndex[o]].x, i = this.pts[this.startIndex[o + 1]].x;
          return r > i ? r : i;
        } }, { key: "getMinX", value: function(o) {
          var r = this.pts[this.startIndex[o]].x, i = this.pts[this.startIndex[o + 1]].x;
          return r < i ? r : i;
        } }, { key: "computeIntersectsForChain", value: function() {
          if (arguments.length === 4) {
            var o = arguments[0], r = arguments[1], i = arguments[2], a = arguments[3];
            this.computeIntersectsForChain(this.startIndex[o], this.startIndex[o + 1], r, r.startIndex[i], r.startIndex[i + 1], a);
          } else if (arguments.length === 6) {
            var l = arguments[0], g = arguments[1], m = arguments[2], y = arguments[3], k = arguments[4], L = arguments[5];
            if (g - l == 1 && k - y == 1) return L.addIntersections(this.e, l, m.e, y), null;
            if (!this.overlaps(l, g, m, y, k)) return null;
            var q = Math.trunc((l + g) / 2), X = Math.trunc((y + k) / 2);
            l < q && (y < X && this.computeIntersectsForChain(l, q, m, y, X, L), X < k && this.computeIntersectsForChain(l, q, m, X, k, L)), q < g && (y < X && this.computeIntersectsForChain(q, g, m, y, X, L), X < k && this.computeIntersectsForChain(q, g, m, X, k, L));
          }
        } }, { key: "overlaps", value: function(o, r, i, a, l) {
          return Le.intersects(this.pts[o], this.pts[r], i.pts[a], i.pts[l]);
        } }, { key: "getStartIndexes", value: function() {
          return this.startIndex;
        } }, { key: "computeIntersects", value: function(o, r) {
          for (var i = 0; i < this.startIndex.length - 1; i++) for (var a = 0; a < o.startIndex.length - 1; a++) this.computeIntersectsForChain(i, o, a, r);
        } }], [{ key: "constructor_", value: function() {
          this.e = null, this.pts = null, this.startIndex = null;
          var o = arguments[0];
          this.e = o, this.pts = o.getCoordinates();
          var r = new wm();
          this.startIndex = r.getChainStartIndices(this.pts);
        } }]);
      })(), Lc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getDepth", value: function(r, i) {
          return this._depth[r][i];
        } }, { key: "setDepth", value: function(r, i, a) {
          this._depth[r][i] = a;
        } }, { key: "isNull", value: function() {
          if (arguments.length === 0) {
            for (var r = 0; r < 2; r++) for (var i = 0; i < 3; i++) if (this._depth[r][i] !== o.NULL_VALUE) return !1;
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
          for (var r = 0; r < 2; r++) if (!this.isNull(r)) {
            var i = this._depth[r][1];
            this._depth[r][2] < i && (i = this._depth[r][2]), i < 0 && (i = 0);
            for (var a = 1; a < 3; a++) {
              var l = 0;
              this._depth[r][a] > i && (l = 1), this._depth[r][a] = l;
            }
          }
        } }, { key: "getDelta", value: function(r) {
          return this._depth[r][ne.RIGHT] - this._depth[r][ne.LEFT];
        } }, { key: "getLocation", value: function(r, i) {
          return this._depth[r][i] <= 0 ? N.EXTERIOR : N.INTERIOR;
        } }, { key: "toString", value: function() {
          return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
        } }, { key: "add", value: function() {
          if (arguments.length === 1) for (var r = arguments[0], i = 0; i < 2; i++) for (var a = 1; a < 3; a++) {
            var l = r.getLocation(i, a);
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
          for (var r = 0; r < 2; r++) for (var i = 0; i < 3; i++) this._depth[r][i] = o.NULL_VALUE;
        } }, { key: "depthAtLocation", value: function(r) {
          return r === N.EXTERIOR ? 0 : r === N.INTERIOR ? 1 : o.NULL_VALUE;
        } }]);
      })();
      Lc.NULL_VALUE = -1;
      var Ac = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "getDepth", value: function() {
          return this._depth;
        } }, { key: "getCollapsedEdge", value: function() {
          var i = new Array(2).fill(null);
          return i[0] = this.pts[0], i[1] = this.pts[1], new r(i, Jt.toLineLabel(this._label));
        } }, { key: "isIsolated", value: function() {
          return this._isIsolated;
        } }, { key: "getCoordinates", value: function() {
          return this.pts;
        } }, { key: "setIsolated", value: function(i) {
          this._isIsolated = i;
        } }, { key: "setName", value: function(i) {
          this._name = i;
        } }, { key: "equals", value: function(i) {
          if (!(i instanceof r)) return !1;
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
          r.updateIM(this._label, i);
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
          if (this.pts = null, this._env = null, this.eiList = new _m(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new Lc(), this._depthDelta = 0, arguments.length === 1) {
            var i = arguments[0];
            r.constructor_.call(this, i, null);
          } else if (arguments.length === 2) {
            var a = arguments[0], l = arguments[1];
            this.pts = a, this._label = l;
          }
        } }, { key: "updateIM", value: function() {
          if (!(arguments.length === 2 && arguments[1] instanceof Em && arguments[0] instanceof Jt)) return S(r, "updateIM", this).apply(this, arguments);
          var i = arguments[0], a = arguments[1];
          a.setAtLeastIfValid(i.getLocation(0, ne.ON), i.getLocation(1, ne.ON), 1), i.isArea() && (a.setAtLeastIfValid(i.getLocation(0, ne.LEFT), i.getLocation(1, ne.LEFT), 2), a.setAtLeastIfValid(i.getLocation(0, ne.RIGHT), i.getLocation(1, ne.RIGHT), 2));
        } }]);
      })(lc), Tc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "setWorkingPrecisionModel", value: function(r) {
          this._workingPrecisionModel = r;
        } }, { key: "insertUniqueEdge", value: function(r) {
          var i = this._edgeList.findEqualEdge(r);
          if (i !== null) {
            var a = i.getLabel(), l = r.getLabel();
            i.isPointwiseEqual(r) || (l = new Jt(r.getLabel())).flip(), a.merge(l);
            var g = o.depthDelta(l), m = i.getDepthDelta() + g;
            i.setDepthDelta(m);
          } else this._edgeList.add(r), r.setDepthDelta(o.depthDelta(r.getLabel()));
        } }, { key: "buildSubgraphs", value: function(r, i) {
          for (var a = new de(), l = r.iterator(); l.hasNext(); ) {
            var g = l.next(), m = g.getRightmostCoordinate(), y = new kc(a).getDepth(m);
            g.computeDepth(y), g.findResultEdges(), a.add(g), i.add(g.getDirectedEdges(), g.getNodes());
          }
        } }, { key: "createSubgraphs", value: function(r) {
          for (var i = new de(), a = r.getNodes().iterator(); a.hasNext(); ) {
            var l = a.next();
            if (!l.isVisited()) {
              var g = new is();
              g.create(l), i.add(g);
            }
          }
          return yi.sort(i, yi.reverseOrder()), i;
        } }, { key: "createEmptyResultGeometry", value: function() {
          return this._geomFact.createPolygon();
        } }, { key: "getNoder", value: function(r) {
          if (this._workingNoder !== null) return this._workingNoder;
          var i = new Uo(), a = new zr();
          return a.setPrecisionModel(r), i.setSegmentIntersector(new vm(a)), i;
        } }, { key: "buffer", value: function(r, i) {
          var a = this._workingPrecisionModel;
          a === null && (a = r.getPrecisionModel()), this._geomFact = r.getFactory();
          var l = new om(a, this._bufParams), g = new lm(r, i, l).getCurves();
          if (g.size() <= 0) return this.createEmptyResultGeometry();
          this.computeNodedEdges(g, a), this._graph = new pc(new pm()), this._graph.addEdges(this._edgeList.getEdges());
          var m = this.createSubgraphs(this._graph), y = new Vp(this._geomFact);
          this.buildSubgraphs(m, y);
          var k = y.getPolygons();
          return k.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(k);
        } }, { key: "computeNodedEdges", value: function(r, i) {
          var a = this.getNoder(i);
          a.computeNodes(r);
          for (var l = a.getNodedSubstrings().iterator(); l.hasNext(); ) {
            var g = l.next(), m = g.getCoordinates();
            if (m.length !== 2 || !m[0].equals2D(m[1])) {
              var y = g.getData(), k = new Ac(g.getCoordinates(), new Jt(y));
              this.insertUniqueEdge(k);
            }
          }
        } }, { key: "setNoder", value: function(r) {
          this._workingNoder = r;
        } }], [{ key: "constructor_", value: function() {
          this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new mm();
          var r = arguments[0];
          this._bufParams = r;
        } }, { key: "depthDelta", value: function(r) {
          var i = r.getLocation(0, ne.LEFT), a = r.getLocation(0, ne.RIGHT);
          return i === N.INTERIOR && a === N.EXTERIOR ? 1 : i === N.EXTERIOR && a === N.INTERIOR ? -1 : 0;
        } }, { key: "convertSegStrings", value: function(r) {
          for (var i = new mi(), a = new de(); r.hasNext(); ) {
            var l = r.next(), g = i.createLineString(l.getCoordinates());
            a.add(g);
          }
          return i.buildGeometry(a);
        } }]);
      })(), Sm = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "rescale", value: function() {
          if (_e(arguments[0], Ne)) for (var r = arguments[0].iterator(); r.hasNext(); ) {
            var i = r.next();
            this.rescale(i.getCoordinates());
          }
          else if (arguments[0] instanceof Array) {
            for (var a = arguments[0], l = 0; l < a.length; l++) a[l].x = a[l].x / this._scaleFactor + this._offsetX, a[l].y = a[l].y / this._scaleFactor + this._offsetY;
            a.length === 2 && a[0].equals2D(a[1]) && Pt.out.println(a);
          }
        } }, { key: "scale", value: function() {
          if (_e(arguments[0], Ne)) {
            for (var r = arguments[0], i = new de(r.size()), a = r.iterator(); a.hasNext(); ) {
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
          var r = this._noder.getNodedSubstrings();
          return this._isScaled && this.rescale(r), r;
        } }, { key: "computeNodes", value: function(r) {
          var i = r;
          this._isScaled && (i = this.scale(r)), this._noder.computeNodes(i);
        } }, { key: "interfaces_", get: function() {
          return [Bo];
        } }], [{ key: "constructor_", value: function() {
          if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
            var r = arguments[0], i = arguments[1];
            o.constructor_.call(this, r, i, 0, 0);
          } else if (arguments.length === 4) {
            var a = arguments[0], l = arguments[1];
            this._noder = a, this._scaleFactor = l, this._isScaled = !this.isIntegerPrecision();
          }
        } }]);
      })(), Cc = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "checkEndPtVertexIntersections", value: function() {
          if (arguments.length === 0) for (var r = this._segStrings.iterator(); r.hasNext(); ) {
            var i = r.next().getCoordinates();
            this.checkEndPtVertexIntersections(i[0], this._segStrings), this.checkEndPtVertexIntersections(i[i.length - 1], this._segStrings);
          }
          else if (arguments.length === 2) {
            for (var a = arguments[0], l = arguments[1].iterator(); l.hasNext(); ) for (var g = l.next().getCoordinates(), m = 1; m < g.length - 1; m++) if (g[m].equals(a)) throw new pe("found endpt/interior pt intersection at index " + m + " :pt " + a);
          }
        } }, { key: "checkInteriorIntersections", value: function() {
          if (arguments.length === 0) for (var r = this._segStrings.iterator(); r.hasNext(); ) for (var i = r.next(), a = this._segStrings.iterator(); a.hasNext(); ) {
            var l = a.next();
            this.checkInteriorIntersections(i, l);
          }
          else if (arguments.length === 2) for (var g = arguments[0], m = arguments[1], y = g.getCoordinates(), k = m.getCoordinates(), L = 0; L < y.length - 1; L++) for (var q = 0; q < k.length - 1; q++) this.checkInteriorIntersections(g, L, m, q);
          else if (arguments.length === 4) {
            var X = arguments[0], ee = arguments[1], ue = arguments[2], fe = arguments[3];
            if (X === ue && ee === fe) return null;
            var me = X.getCoordinates()[ee], Te = X.getCoordinates()[ee + 1], Ae = ue.getCoordinates()[fe], Fe = ue.getCoordinates()[fe + 1];
            if (this._li.computeIntersection(me, Te, Ae, Fe), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, me, Te) || this.hasInteriorIntersection(this._li, Ae, Fe))) throw new pe("found non-noded intersection at " + me + "-" + Te + " and " + Ae + "-" + Fe);
          }
        } }, { key: "checkValid", value: function() {
          this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
        } }, { key: "checkCollapses", value: function() {
          if (arguments.length === 0) for (var r = this._segStrings.iterator(); r.hasNext(); ) {
            var i = r.next();
            this.checkCollapses(i);
          }
          else if (arguments.length === 1) for (var a = arguments[0].getCoordinates(), l = 0; l < a.length - 2; l++) this.checkCollapse(a[l], a[l + 1], a[l + 2]);
        } }, { key: "hasInteriorIntersection", value: function(r, i, a) {
          for (var l = 0; l < r.getIntersectionNum(); l++) {
            var g = r.getIntersection(l);
            if (!g.equals(i) && !g.equals(a)) return !0;
          }
          return !1;
        } }, { key: "checkCollapse", value: function(r, i, a) {
          if (r.equals(a)) throw new pe("found non-noded collapse at " + o.fact.createLineString([r, i, a]));
        } }], [{ key: "constructor_", value: function() {
          this._li = new zr(), this._segStrings = null;
          var r = arguments[0];
          this._segStrings = r;
        } }]);
      })();
      Cc.fact = new mi();
      var qo = (function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "intersectsScaled", value: function(r, i) {
          var a = Math.min(r.x, i.x), l = Math.max(r.x, i.x), g = Math.min(r.y, i.y), m = Math.max(r.y, i.y), y = this._maxx < a || this._minx > l || this._maxy < g || this._miny > m;
          if (y) return !1;
          var k = this.intersectsToleranceSquare(r, i);
          return ae.isTrue(!(y && k), "Found bad envelope test"), k;
        } }, { key: "initCorners", value: function(r) {
          var i = 0.5;
          this._minx = r.x - i, this._maxx = r.x + i, this._miny = r.y - i, this._maxy = r.y + i, this._corner[0] = new $(this._maxx, this._maxy), this._corner[1] = new $(this._minx, this._maxy), this._corner[2] = new $(this._minx, this._miny), this._corner[3] = new $(this._maxx, this._miny);
        } }, { key: "intersects", value: function(r, i) {
          return this._scaleFactor === 1 ? this.intersectsScaled(r, i) : (this.copyScaled(r, this._p0Scaled), this.copyScaled(i, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
        } }, { key: "scale", value: function(r) {
          return Math.round(r * this._scaleFactor);
        } }, { key: "getCoordinate", value: function() {
          return this._originalPt;
        } }, { key: "copyScaled", value: function(r, i) {
          i.x = this.scale(r.x), i.y = this.scale(r.y);
        } }, { key: "getSafeEnvelope", value: function() {
          if (this._safeEnv === null) {
            var r = o.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
            this._safeEnv = new Le(this._originalPt.x - r, this._originalPt.x + r, this._originalPt.y - r, this._originalPt.y + r);
          }
          return this._safeEnv;
        } }, { key: "intersectsPixelClosure", value: function(r, i) {
          return this._li.computeIntersection(r, i, this._corner[0], this._corner[1]), !!this._li.hasIntersection() || (this._li.computeIntersection(r, i, this._corner[1], this._corner[2]), !!this._li.hasIntersection() || (this._li.computeIntersection(r, i, this._corner[2], this._corner[3]), !!this._li.hasIntersection() || (this._li.computeIntersection(r, i, this._corner[3], this._corner[0]), !!this._li.hasIntersection())));
        } }, { key: "intersectsToleranceSquare", value: function(r, i) {
          var a = !1, l = !1;
          return this._li.computeIntersection(r, i, this._corner[0], this._corner[1]), !!this._li.isProper() || (this._li.computeIntersection(r, i, this._corner[1], this._corner[2]), !!this._li.isProper() || (this._li.hasIntersection() && (a = !0), this._li.computeIntersection(r, i, this._corner[2], this._corner[3]), !!this._li.isProper() || (this._li.hasIntersection() && (l = !0), this._li.computeIntersection(r, i, this._corner[3], this._corner[0]), !!this._li.isProper() || !(!a || !l) || !!r.equals(this._pt) || !!i.equals(this._pt))));
        } }, { key: "addSnappedNode", value: function(r, i) {
          var a = r.getCoordinate(i), l = r.getCoordinate(i + 1);
          return !!this.intersects(a, l) && (r.addIntersection(this.getCoordinate(), i), !0);
        } }], [{ key: "constructor_", value: function() {
          this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
          var r = arguments[0], i = arguments[1], a = arguments[2];
          if (this._originalPt = r, this._pt = r, this._scaleFactor = i, this._li = a, i <= 0) throw new J("Scale factor must be non-zero");
          i !== 1 && (this._pt = new $(this.scale(r.x), this.scale(r.y)), this._p0Scaled = new $(), this._p1Scaled = new $()), this.initCorners(this._pt);
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
      })(), Nc = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "snap", value: function() {
          if (arguments.length === 1) {
            var o = arguments[0];
            return this.snap(o, null, -1);
          }
          if (arguments.length === 3) {
            var r = arguments[0], i = arguments[1], a = arguments[2], l = r.getSafeEnvelope(), g = new Pc(r, i, a);
            return this._index.query(l, new ((function() {
              return h((function m() {
                u(this, m);
              }), [{ key: "interfaces_", get: function() {
                return [vc];
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
      })(), Pc = (function(o) {
        function r() {
          var i;
          return u(this, r), i = s(this, r), r.constructor_.apply(i, arguments), i;
        }
        return _(r, o), h(r, [{ key: "isNodeAdded", value: function() {
          return this._isNodeAdded;
        } }, { key: "select", value: function() {
          if (!(arguments.length === 2 && Number.isInteger(arguments[1]) && arguments[0] instanceof _c)) return S(r, "select", this, 1).apply(this, arguments);
          var i = arguments[1], a = arguments[0].getContext();
          if (this._parentEdge === a && (i === this._hotPixelVertexIndex || i + 1 === this._hotPixelVertexIndex)) return null;
          this._isNodeAdded |= this._hotPixel.addSnappedNode(a, i);
        } }], [{ key: "constructor_", value: function() {
          this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
          var i = arguments[0], a = arguments[1], l = arguments[2];
          this._hotPixel = i, this._parentEdge = a, this._hotPixelVertexIndex = l;
        } }]);
      })(Mm);
      Nc.HotPixelSnapAction = Pc;
      var Im = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "processIntersections", value: function(o, r, i, a) {
          if (o === i && r === a) return null;
          var l = o.getCoordinates()[r], g = o.getCoordinates()[r + 1], m = i.getCoordinates()[a], y = i.getCoordinates()[a + 1];
          if (this._li.computeIntersection(l, g, m, y), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
            for (var k = 0; k < this._li.getIntersectionNum(); k++) this._interiorIntersections.add(this._li.getIntersection(k));
            o.addIntersections(this._li, r, 0), i.addIntersections(this._li, a, 1);
          }
        } }, { key: "isDone", value: function() {
          return !1;
        } }, { key: "getInteriorIntersections", value: function() {
          return this._interiorIntersections;
        } }, { key: "interfaces_", get: function() {
          return [bc];
        } }], [{ key: "constructor_", value: function() {
          this._li = null, this._interiorIntersections = null;
          var o = arguments[0];
          this._li = o, this._interiorIntersections = new de();
        } }]);
      })(), bm = (function() {
        return h((function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }), [{ key: "checkCorrectness", value: function(o) {
          var r = qr.getNodedSubstrings(o), i = new Cc(r);
          try {
            i.checkValid();
          } catch (a) {
            if (!(a instanceof V)) throw a;
            a.printStackTrace();
          }
        } }, { key: "getNodedSubstrings", value: function() {
          return qr.getNodedSubstrings(this._nodedSegStrings);
        } }, { key: "snapRound", value: function(o, r) {
          var i = this.findInteriorIntersections(o, r);
          this.computeIntersectionSnaps(i), this.computeVertexSnaps(o);
        } }, { key: "findInteriorIntersections", value: function(o, r) {
          var i = new Im(r);
          return this._noder.setSegmentIntersector(i), this._noder.computeNodes(o), i.getInteriorIntersections();
        } }, { key: "computeVertexSnaps", value: function() {
          if (_e(arguments[0], Ne)) for (var o = arguments[0].iterator(); o.hasNext(); ) {
            var r = o.next();
            this.computeVertexSnaps(r);
          }
          else if (arguments[0] instanceof qr) for (var i = arguments[0], a = i.getCoordinates(), l = 0; l < a.length; l++) {
            var g = new qo(a[l], this._scaleFactor, this._li);
            this._pointSnapper.snap(g, i, l) && i.addIntersection(a[l], l);
          }
        } }, { key: "computeNodes", value: function(o) {
          this._nodedSegStrings = o, this._noder = new Uo(), this._pointSnapper = new Nc(this._noder.getIndex()), this.snapRound(o, this._li);
        } }, { key: "computeIntersectionSnaps", value: function(o) {
          for (var r = o.iterator(); r.hasNext(); ) {
            var i = r.next(), a = new qo(i, this._scaleFactor, this._li);
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
        return h(o, [{ key: "bufferFixedPrecision", value: function(r) {
          var i = new Sm(new bm(new Re(1)), r.getScale()), a = new Tc(this._bufParams);
          a.setWorkingPrecisionModel(r), a.setNoder(i), this._resultGeometry = a.buffer(this._argGeom, this._distance);
        } }, { key: "bufferReducedPrecision", value: function() {
          if (arguments.length === 0) {
            for (var r = o.MAX_PRECISION_DIGITS; r >= 0; r--) {
              try {
                this.bufferReducedPrecision(r);
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
          var r = this._argGeom.getFactory().getPrecisionModel();
          r.getType() === Re.FIXED ? this.bufferFixedPrecision(r) : this.bufferReducedPrecision();
        } }, { key: "setQuadrantSegments", value: function(r) {
          this._bufParams.setQuadrantSegments(r);
        } }, { key: "bufferOriginalPrecision", value: function() {
          try {
            var r = new Tc(this._bufParams);
            this._resultGeometry = r.buffer(this._argGeom, this._distance);
          } catch (i) {
            if (!(i instanceof pe)) throw i;
            this._saveException = i;
          }
        } }, { key: "getResultGeometry", value: function(r) {
          return this._distance = r, this.computeGeometry(), this._resultGeometry;
        } }, { key: "setEndCapStyle", value: function(r) {
          this._bufParams.setEndCapStyle(r);
        } }], [{ key: "constructor_", value: function() {
          if (this._argGeom = null, this._distance = null, this._bufParams = new H(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
            var r = arguments[0];
            this._argGeom = r;
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this._argGeom = i, this._bufParams = a;
          }
        } }, { key: "bufferOp", value: function() {
          if (arguments.length === 2) {
            var r = arguments[1];
            return new o(arguments[0]).getResultGeometry(r);
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
        } }, { key: "precisionScaleFactor", value: function(r, i, a) {
          var l = r.getEnvelopeInternal(), g = An.max(Math.abs(l.getMaxX()), Math.abs(l.getMaxY()), Math.abs(l.getMinX()), Math.abs(l.getMinY())) + 2 * (i > 0 ? i : 0), m = a - Math.trunc(Math.log(g) / Math.log(10) + 1);
          return Math.pow(10, m);
        } }]);
      })();
      xi.CAP_ROUND = H.CAP_ROUND, xi.CAP_BUTT = H.CAP_FLAT, xi.CAP_FLAT = H.CAP_FLAT, xi.CAP_SQUARE = H.CAP_SQUARE, xi.MAX_PRECISION_DIGITS = 12;
      var Lm = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], Oc = (function() {
        return h((function o(r) {
          u(this, o), this.geometryFactory = r || new mi();
        }), [{ key: "read", value: function(o) {
          var r, i = (r = typeof o == "string" ? JSON.parse(o) : o).type;
          if (!Xt[i]) throw new Error("Unknown GeoJSON type: " + r.type);
          return Lm.indexOf(i) !== -1 ? Xt[i].call(this, r.coordinates) : i === "GeometryCollection" ? Xt[i].call(this, r.geometries) : Xt[i].call(this, r);
        } }, { key: "write", value: function(o) {
          var r = o.getGeometryType();
          if (!Dn[r]) throw new Error("Geometry is not supported");
          return Dn[r].call(this, o);
        } }]);
      })(), Xt = { Feature: function(o) {
        var r = {};
        for (var i in o) r[i] = o[i];
        if (o.geometry) {
          var a = o.geometry.type;
          if (!Xt[a]) throw new Error("Unknown GeoJSON type: " + o.type);
          r.geometry = this.read(o.geometry);
        }
        return o.bbox && (r.bbox = Xt.bbox.call(this, o.bbox)), r;
      }, FeatureCollection: function(o) {
        var r = {};
        if (o.features) {
          r.features = [];
          for (var i = 0; i < o.features.length; ++i) r.features.push(this.read(o.features[i]));
        }
        return o.bbox && (r.bbox = this.parse.bbox.call(this, o.bbox)), r;
      }, coordinates: function(o) {
        for (var r = [], i = 0; i < o.length; ++i) {
          var a = o[i];
          r.push(c($, C(a)));
        }
        return r;
      }, bbox: function(o) {
        return this.geometryFactory.createLinearRing([new $(o[0], o[1]), new $(o[2], o[1]), new $(o[2], o[3]), new $(o[0], o[3]), new $(o[0], o[1])]);
      }, Point: function(o) {
        var r = c($, C(o));
        return this.geometryFactory.createPoint(r);
      }, MultiPoint: function(o) {
        for (var r = [], i = 0; i < o.length; ++i) r.push(Xt.Point.call(this, o[i]));
        return this.geometryFactory.createMultiPoint(r);
      }, LineString: function(o) {
        var r = Xt.coordinates.call(this, o);
        return this.geometryFactory.createLineString(r);
      }, MultiLineString: function(o) {
        for (var r = [], i = 0; i < o.length; ++i) r.push(Xt.LineString.call(this, o[i]));
        return this.geometryFactory.createMultiLineString(r);
      }, Polygon: function(o) {
        for (var r = Xt.coordinates.call(this, o[0]), i = this.geometryFactory.createLinearRing(r), a = [], l = 1; l < o.length; ++l) {
          var g = o[l], m = Xt.coordinates.call(this, g), y = this.geometryFactory.createLinearRing(m);
          a.push(y);
        }
        return this.geometryFactory.createPolygon(i, a);
      }, MultiPolygon: function(o) {
        for (var r = [], i = 0; i < o.length; ++i) {
          var a = o[i];
          r.push(Xt.Polygon.call(this, a));
        }
        return this.geometryFactory.createMultiPolygon(r);
      }, GeometryCollection: function(o) {
        for (var r = [], i = 0; i < o.length; ++i) {
          var a = o[i];
          r.push(this.read(a));
        }
        return this.geometryFactory.createGeometryCollection(r);
      } }, Dn = { coordinate: function(o) {
        var r = [o.x, o.y];
        return o.z && r.push(o.z), o.m && r.push(o.m), r;
      }, Point: function(o) {
        return { type: "Point", coordinates: Dn.coordinate.call(this, o.getCoordinate()) };
      }, MultiPoint: function(o) {
        for (var r = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], l = Dn.Point.call(this, a);
          r.push(l.coordinates);
        }
        return { type: "MultiPoint", coordinates: r };
      }, LineString: function(o) {
        for (var r = [], i = o.getCoordinates(), a = 0; a < i.length; ++a) {
          var l = i[a];
          r.push(Dn.coordinate.call(this, l));
        }
        return { type: "LineString", coordinates: r };
      }, MultiLineString: function(o) {
        for (var r = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], l = Dn.LineString.call(this, a);
          r.push(l.coordinates);
        }
        return { type: "MultiLineString", coordinates: r };
      }, Polygon: function(o) {
        var r = [], i = Dn.LineString.call(this, o._shell);
        r.push(i.coordinates);
        for (var a = 0; a < o._holes.length; ++a) {
          var l = o._holes[a], g = Dn.LineString.call(this, l);
          r.push(g.coordinates);
        }
        return { type: "Polygon", coordinates: r };
      }, MultiPolygon: function(o) {
        for (var r = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], l = Dn.Polygon.call(this, a);
          r.push(l.coordinates);
        }
        return { type: "MultiPolygon", coordinates: r };
      }, GeometryCollection: function(o) {
        for (var r = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], l = a.getGeometryType();
          r.push(Dn[l].call(this, a));
        }
        return { type: "GeometryCollection", geometries: r };
      } };
      return { BufferOp: xi, GeoJSONReader: (function() {
        return h((function o(r) {
          u(this, o), this.parser = new Oc(r || new mi());
        }), [{ key: "read", value: function(o) {
          return this.parser.read(o);
        } }]);
      })(), GeoJSONWriter: (function() {
        return h((function o() {
          u(this, o), this.parser = new Oc(this.geometryFactory);
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
    cf(Sa, t, this.t), cf(this, Sa.s, this.s), this.s ? this.t += Sa.t : this.s = Sa.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var Sa = new io();
function cf(t, e, n) {
  var s = t.s = e + n, u = s - e, c = s - u;
  t.t = e - c + (n - u);
}
var Ye = 1e-6, Pe = Math.PI, qn = Pe / 2, hf = Pe / 4, Vn = Pe * 2, _r = 180 / Pe, en = Pe / 180, lt = Math.abs, J2 = Math.atan, Ji = Math.atan2, Ve = Math.cos, We = Math.sin, ns = Math.sqrt;
function sp(t) {
  return t > 1 ? 0 : t < -1 ? Pe : Math.acos(t);
}
function ni(t) {
  return t > 1 ? qn : t < -1 ? -qn : Math.asin(t);
}
function Is() {
}
function so(t, e) {
  t && gf.hasOwnProperty(t.type) && gf[t.type](t, e);
}
var ff = {
  Feature: function(t, e) {
    so(t.geometry, e);
  },
  FeatureCollection: function(t, e) {
    for (var n = t.features, s = -1, u = n.length; ++s < u; ) so(n[s].geometry, e);
  }
}, gf = {
  Sphere: function(t, e) {
    e.sphere();
  },
  Point: function(t, e) {
    t = t.coordinates, e.point(t[0], t[1], t[2]);
  },
  MultiPoint: function(t, e) {
    for (var n = t.coordinates, s = -1, u = n.length; ++s < u; ) t = n[s], e.point(t[0], t[1], t[2]);
  },
  LineString: function(t, e) {
    Wu(t.coordinates, e, 0);
  },
  MultiLineString: function(t, e) {
    for (var n = t.coordinates, s = -1, u = n.length; ++s < u; ) Wu(n[s], e, 0);
  },
  Polygon: function(t, e) {
    df(t.coordinates, e);
  },
  MultiPolygon: function(t, e) {
    for (var n = t.coordinates, s = -1, u = n.length; ++s < u; ) df(n[s], e);
  },
  GeometryCollection: function(t, e) {
    for (var n = t.geometries, s = -1, u = n.length; ++s < u; ) so(n[s], e);
  }
};
function Wu(t, e, n) {
  var s = -1, u = t.length - n, c;
  for (e.lineStart(); ++s < u; ) c = t[s], e.point(c[0], c[1], c[2]);
  e.lineEnd();
}
function df(t, e) {
  var n = -1, s = t.length;
  for (e.polygonStart(); ++n < s; ) Wu(t[n], e, 1);
  e.polygonEnd();
}
function $2(t, e) {
  t && ff.hasOwnProperty(t.type) ? ff[t.type](t, e) : so(t, e);
}
Rr();
Rr();
function ju(t) {
  return [Ji(t[1], t[0]), ni(t[2])];
}
function $i(t) {
  var e = t[0], n = t[1], s = Ve(n);
  return [s * Ve(e), s * We(e), We(n)];
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
  function n(s, u) {
    return s = t(s, u), e(s[0], s[1]);
  }
  return t.invert && e.invert && (n.invert = function(s, u) {
    return s = e.invert(s, u), s && t.invert(s[0], s[1]);
  }), n;
}
function Ku(t, e) {
  return [t > Pe ? t - Vn : t < -Pe ? t + Vn : t, e];
}
Ku.invert = Ku;
function X2(t, e, n) {
  return (t %= Vn) ? e || n ? ap(mf(t), vf(e, n)) : mf(t) : e || n ? vf(e, n) : Ku;
}
function pf(t) {
  return function(e, n) {
    return e += t, [e > Pe ? e - Vn : e < -Pe ? e + Vn : e, n];
  };
}
function mf(t) {
  var e = pf(t);
  return e.invert = pf(-t), e;
}
function vf(t, e) {
  var n = Ve(t), s = We(t), u = Ve(e), c = We(e);
  function f(h, p) {
    var d = Ve(p), v = Ve(h) * d, _ = We(h) * d, x = We(p), M = x * n + v * s;
    return [
      Ji(_ * u - M * c, v * n - x * s),
      ni(M * u + _ * c)
    ];
  }
  return f.invert = function(h, p) {
    var d = Ve(p), v = Ve(h) * d, _ = We(h) * d, x = We(p), M = x * u - _ * c;
    return [
      Ji(_ * u + x * c, v * n + M * s),
      ni(M * n - v * s)
    ];
  }, f;
}
function V2(t, e, n, s, u, c) {
  if (n) {
    var f = Ve(e), h = We(e), p = s * n;
    u == null ? (u = e + s * Vn, c = e - p / 2) : (u = yf(f, u), c = yf(f, c), (s > 0 ? u < c : u > c) && (u += s * Vn));
    for (var d, v = u; s > 0 ? v > c : v < c; v -= p)
      d = ju([f, -h * Ve(v), -h * We(v)]), t.point(d[0], d[1]);
  }
}
function yf(t, e) {
  e = $i(e), e[0] -= t, Zu(e);
  var n = sp(-e[1]);
  return ((-e[2] < 0 ? -n : n) + Vn - Ye) % Vn;
}
function op() {
  var t = [], e;
  return {
    point: function(n, s) {
      e.push([n, s]);
    },
    lineStart: function() {
      t.push(e = []);
    },
    lineEnd: Is,
    rejoin: function() {
      t.length > 1 && t.push(t.pop().concat(t.shift()));
    },
    result: function() {
      var n = t;
      return t = [], e = null, n;
    }
  };
}
function W2(t, e, n, s, u, c) {
  var f = t[0], h = t[1], p = e[0], d = e[1], v = 0, _ = 1, x = p - f, M = d - h, S;
  if (S = n - f, !(!x && S > 0)) {
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
function ba(t, e, n, s) {
  this.x = t, this.z = e, this.o = n, this.e = s, this.v = !1, this.n = this.p = null;
}
function up(t, e, n, s, u) {
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
    for (f.sort(e), _f(c), _f(f), h = 0, p = f.length; h < p; ++h)
      f[h].e = n = !n;
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
function _f(t) {
  if (e = t.length) {
    for (var e, n = 0, s = t[0], u; ++n < e; )
      s.n = u = t[n], u.p = s, s = u;
    s.n = u = t[0], u.p = s;
  }
}
function lp(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function j2(t) {
  return t.length === 1 && (t = Z2(t)), {
    left: function(e, n, s, u) {
      for (s == null && (s = 0), u == null && (u = e.length); s < u; ) {
        var c = s + u >>> 1;
        t(e[c], n) < 0 ? s = c + 1 : u = c;
      }
      return s;
    },
    right: function(e, n, s, u) {
      for (s == null && (s = 0), u == null && (u = e.length); s < u; ) {
        var c = s + u >>> 1;
        t(e[c], n) > 0 ? u = c : s = c + 1;
      }
      return s;
    }
  };
}
function Z2(t) {
  return function(e, n) {
    return lp(t(e), n);
  };
}
j2(lp);
function cp(t) {
  for (var e = t.length, n, s = -1, u = 0, c, f; ++s < e; ) u += t[s].length;
  for (c = new Array(u); --e >= 0; )
    for (f = t[e], n = f.length; --n >= 0; )
      c[--u] = f[n];
  return c;
}
var bs = 1e9, La = -bs;
function K2(t, e, n, s) {
  function u(d, v) {
    return t <= d && d <= n && e <= v && v <= s;
  }
  function c(d, v, _, x) {
    var M = 0, S = 0;
    if (d == null || (M = f(d, _)) !== (S = f(v, _)) || p(d, v) < 0 ^ _ > 0)
      do
        x.point(M === 0 || M === 3 ? t : n, M > 1 ? s : e);
      while ((M = (M + _ + 4) % 4) !== S);
    else
      x.point(v[0], v[1]);
  }
  function f(d, v) {
    return lt(d[0] - t) < Ye ? v > 0 ? 0 : 3 : lt(d[0] - n) < Ye ? v > 0 ? 2 : 1 : lt(d[1] - e) < Ye ? v > 0 ? 1 : 0 : v > 0 ? 3 : 2;
  }
  function h(d, v) {
    return p(d.x, v.x);
  }
  function p(d, v) {
    var _ = f(d, 1), x = f(v, 1);
    return _ !== x ? _ - x : _ === 0 ? v[1] - d[1] : _ === 1 ? d[0] - v[0] : _ === 2 ? d[1] - v[1] : v[0] - d[0];
  }
  return function(d) {
    var v = d, _ = op(), x, M, S, C, F, O, I, H, V, J, U, W = {
      point: E,
      lineStart: T,
      lineEnd: G,
      polygonStart: b,
      polygonEnd: A
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
    function A() {
      var P = w(), D = U && P, Y = (x = cp(x)).length;
      (D || Y) && (d.polygonStart(), D && (d.lineStart(), c(null, null, 1, d), d.lineEnd()), Y && up(x, h, P, c, d), d.polygonEnd()), v = d, x = M = S = null;
    }
    function T() {
      W.point = R, M && M.push(S = []), J = !0, V = !1, I = H = NaN;
    }
    function G() {
      x && (R(C, F), O && V && _.rejoin(), x.push(_.result())), W.point = E, V && v.lineEnd();
    }
    function R(P, D) {
      var Y = u(P, D);
      if (M && S.push([P, D]), J)
        C = P, F = D, O = Y, J = !1, Y && (v.lineStart(), v.point(P, D));
      else if (Y && V) v.point(P, D);
      else {
        var z = [I = Math.max(La, Math.min(bs, I)), H = Math.max(La, Math.min(bs, H))], j = [P = Math.max(La, Math.min(bs, P)), D = Math.max(La, Math.min(bs, D))];
        W2(z, j, t, e, n, s) ? (V || (v.lineStart(), v.point(z[0], z[1])), v.point(j[0], j[1]), Y || v.lineEnd(), U = !1) : Y && (v.lineStart(), v.point(P, D), U = !1);
      }
      I = P, H = D, V = Y;
    }
    return W;
  };
}
var pu = Rr();
function Q2(t, e) {
  var n = e[0], s = e[1], u = [We(n), -Ve(n), 0], c = 0, f = 0;
  pu.reset();
  for (var h = 0, p = t.length; h < p; ++h)
    if (v = (d = t[h]).length)
      for (var d, v, _ = d[v - 1], x = _[0], M = _[1] / 2 + hf, S = We(M), C = Ve(M), F = 0; F < v; ++F, x = I, S = V, C = J, _ = O) {
        var O = d[F], I = O[0], H = O[1] / 2 + hf, V = We(H), J = Ve(H), U = I - x, W = U >= 0 ? 1 : -1, E = W * U, w = E > Pe, b = S * V;
        if (pu.add(Ji(b * W * We(E), C * J + b * Ve(E))), c += w ? U + W * Vn : U, w ^ x >= n ^ I >= n) {
          var A = ao($i(_), $i(O));
          Zu(A);
          var T = ao(u, A);
          Zu(T);
          var G = (w ^ U >= 0 ? -1 : 1) * ni(T[2]);
          (s > G || s === G && (A[0] || A[1])) && (f += w ^ U >= 0 ? 1 : -1);
        }
      }
  return (c < -Ye || c < Ye && pu < -Ye) ^ f & 1;
}
Rr();
function Ef(t) {
  return t;
}
Rr();
Rr();
var Xi = 1 / 0, oo = Xi, $s = -Xi, uo = $s, xf = {
  point: eS,
  lineStart: Is,
  lineEnd: Is,
  polygonStart: Is,
  polygonEnd: Is,
  result: function() {
    var t = [[Xi, oo], [$s, uo]];
    return $s = uo = -(oo = Xi = 1 / 0), t;
  }
};
function eS(t, e) {
  t < Xi && (Xi = t), t > $s && ($s = t), e < oo && (oo = e), e > uo && (uo = e);
}
Rr();
function hp(t, e, n, s) {
  return function(u, c) {
    var f = e(c), h = u.invert(s[0], s[1]), p = op(), d = e(p), v = !1, _, x, M, S = {
      point: C,
      lineStart: O,
      lineEnd: I,
      polygonStart: function() {
        S.point = H, S.lineStart = V, S.lineEnd = J, x = [], _ = [];
      },
      polygonEnd: function() {
        S.point = C, S.lineStart = O, S.lineEnd = I, x = cp(x);
        var U = Q2(_, h);
        x.length ? (v || (c.polygonStart(), v = !0), up(x, nS, U, n, c)) : U && (v || (c.polygonStart(), v = !0), c.lineStart(), n(null, null, 1, c), c.lineEnd()), v && (c.polygonEnd(), v = !1), x = _ = null;
      },
      sphere: function() {
        c.polygonStart(), c.lineStart(), n(null, null, 1, c), c.lineEnd(), c.polygonEnd();
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
    function V() {
      d.lineStart(), M = [];
    }
    function J() {
      H(M[0][0], M[0][1]), d.lineEnd();
      var U = d.clean(), W = p.result(), E, w = W.length, b, A, T;
      if (M.pop(), _.push(M), M = null, !!w) {
        if (U & 1) {
          if (A = W[0], (b = A.length - 1) > 0) {
            for (v || (c.polygonStart(), v = !0), c.lineStart(), E = 0; E < b; ++E) c.point((T = A[E])[0], T[1]);
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
const wf = hp(
  function() {
    return !0;
  },
  rS,
  sS,
  [-Pe, -qn]
);
function rS(t) {
  var e = NaN, n = NaN, s = NaN, u;
  return {
    lineStart: function() {
      t.lineStart(), u = 1;
    },
    point: function(c, f) {
      var h = c > 0 ? Pe : -Pe, p = lt(c - e);
      lt(p - Pe) < Ye ? (t.point(e, n = (n + f) / 2 > 0 ? qn : -qn), t.point(s, n), t.lineEnd(), t.lineStart(), t.point(h, n), t.point(c, n), u = 0) : s !== h && p >= Pe && (lt(e - s) < Ye && (e -= s * Ye), lt(c - h) < Ye && (c -= h * Ye), n = iS(e, n, c, f), t.point(s, n), t.lineEnd(), t.lineStart(), t.point(h, n), u = 0), t.point(e = c, n = f), s = h;
    },
    lineEnd: function() {
      t.lineEnd(), e = n = NaN;
    },
    clean: function() {
      return 2 - u;
    }
  };
}
function iS(t, e, n, s) {
  var u, c, f = We(t - n);
  return lt(f) > Ye ? J2((We(e) * (c = Ve(s)) * We(n) - We(s) * (u = Ve(e)) * We(t)) / (u * c * f)) : (e + s) / 2;
}
function sS(t, e, n, s) {
  var u;
  if (t == null)
    u = n * qn, s.point(-Pe, u), s.point(0, u), s.point(Pe, u), s.point(Pe, 0), s.point(Pe, -u), s.point(0, -u), s.point(-Pe, -u), s.point(-Pe, 0), s.point(-Pe, u);
  else if (lt(t[0] - e[0]) > Ye) {
    var c = t[0] < e[0] ? Pe : -Pe;
    u = n * c / 2, s.point(-c, u), s.point(0, u), s.point(c, u);
  } else
    s.point(e[0], e[1]);
}
function aS(t, e) {
  var n = Ve(t), s = n > 0, u = lt(n) > Ye;
  function c(v, _, x, M) {
    V2(M, t, e, x, v, _);
  }
  function f(v, _) {
    return Ve(v) * Ve(_) > n;
  }
  function h(v) {
    var _, x, M, S, C;
    return {
      lineStart: function() {
        S = M = !1, C = 1;
      },
      point: function(F, O) {
        var I = [F, O], H, V = f(F, O), J = s ? V ? 0 : d(F, O) : V ? d(F + (F < 0 ? Pe : -Pe), O) : 0;
        if (!_ && (S = M = V) && v.lineStart(), V !== M && (H = p(_, I), (!H || za(_, H) || za(I, H)) && (I[0] += Ye, I[1] += Ye, V = f(I[0], I[1]))), V !== M)
          C = 0, V ? (v.lineStart(), H = p(I, _), v.point(H[0], H[1])) : (H = p(_, I), v.point(H[0], H[1]), v.lineEnd()), _ = H;
        else if (u && _ && s ^ V) {
          var U;
          !(J & x) && (U = p(I, _, !0)) && (C = 0, s ? (v.lineStart(), v.point(U[0][0], U[0][1]), v.point(U[1][0], U[1][1]), v.lineEnd()) : (v.point(U[1][0], U[1][1]), v.lineEnd(), v.lineStart(), v.point(U[0][0], U[0][1])));
        }
        V && (!_ || !za(_, I)) && v.point(I[0], I[1]), _ = I, M = V, x = J;
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
    var V = n * O / H, J = -n * I / H, U = ao(C, F), W = Ia(C, V), E = Ia(F, J);
    du(W, E);
    var w = U, b = Ma(W, w), A = Ma(w, w), T = b * b - A * (Ma(W, W) - 1);
    if (!(T < 0)) {
      var G = ns(T), R = Ia(w, (-b - G) / A);
      if (du(R, W), R = ju(R), !x) return R;
      var P = v[0], D = _[0], Y = v[1], z = _[1], j;
      D < P && (j = P, P = D, D = j);
      var Z = D - P, re = lt(Z - Pe) < Ye, pe = re || Z < Ye;
      if (!re && z < Y && (j = Y, Y = z, z = j), pe ? re ? Y + z > 0 ^ R[1] < (lt(R[0] - P) < Ye ? Y : z) : Y <= R[1] && R[1] <= z : Z > Pe ^ (P <= R[0] && R[0] <= D)) {
        var le = Ia(w, (-b + G) / A);
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
    var n = new Qu();
    for (var s in t) n[s] = t[s];
    return n.stream = e, n;
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
function gp(t, e, n) {
  var s = e[1][0] - e[0][0], u = e[1][1] - e[0][1], c = t.clipExtent && t.clipExtent();
  t.scale(150).translate([0, 0]), c != null && t.clipExtent(null), $2(n, t.stream(xf));
  var f = xf.result(), h = Math.min(s / (f[1][0] - f[0][0]), u / (f[1][1] - f[0][1])), p = +e[0][0] + (s - h * (f[1][0] + f[0][0])) / 2, d = +e[0][1] + (u - h * (f[1][1] + f[0][1])) / 2;
  return c != null && t.clipExtent(c), t.scale(h * 150).translate([p, d]);
}
function oS(t, e, n) {
  return gp(t, [[0, 0], e], n);
}
var kf = 16, uS = Ve(30 * en);
function Sf(t, e) {
  return +e ? cS(t, e) : lS(t);
}
function lS(t) {
  return fp({
    point: function(e, n) {
      e = t(e, n), this.stream.point(e[0], e[1]);
    }
  });
}
function cS(t, e) {
  function n(s, u, c, f, h, p, d, v, _, x, M, S, C, F) {
    var O = d - s, I = v - u, H = O * O + I * I;
    if (H > 4 * e && C--) {
      var V = f + x, J = h + M, U = p + S, W = ns(V * V + J * J + U * U), E = ni(U /= W), w = lt(lt(U) - 1) < Ye || lt(c - _) < Ye ? (c + _) / 2 : Ji(J, V), b = t(w, E), A = b[0], T = b[1], G = A - s, R = T - u, P = I * G - O * R;
      (P * P / H > e || lt((O * G + I * R) / H - 0.5) > 0.3 || f * x + h * M + p * S < uS) && (n(s, u, c, f, h, p, A, T, w, V /= W, J /= W, U, C, F), F.point(A, T), n(A, T, w, V, J, U, d, v, _, x, M, S, C, F));
    }
  }
  return function(s) {
    var u, c, f, h, p, d, v, _, x, M, S, C, F = {
      point: O,
      lineStart: I,
      lineEnd: V,
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
      var b = $i([E, w]), A = t(E, w);
      n(_, x, v, M, S, C, _ = A[0], x = A[1], v = E, M = b[0], S = b[1], C = b[2], kf, s), s.point(_, x);
    }
    function V() {
      F.point = O, s.lineEnd();
    }
    function J() {
      I(), F.point = U, F.lineEnd = W;
    }
    function U(E, w) {
      H(u = E, w), c = _, f = x, h = M, p = S, d = C, F.point = H;
    }
    function W() {
      n(_, x, v, M, S, C, c, f, u, h, p, d, kf, s), F.lineEnd = V, V();
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
  var e, n = 150, s = 480, u = 250, c, f, h = 0, p = 0, d = 0, v = 0, _ = 0, x, M, S = null, C = wf, F = null, O, I, H, V = Ef, J = 0.5, U = Sf(A, J), W, E;
  function w(R) {
    return R = M(R[0] * en, R[1] * en), [R[0] * n + c, f - R[1] * n];
  }
  function b(R) {
    return R = M.invert((R[0] - c) / n, (f - R[1]) / n), R && [R[0] * _r, R[1] * _r];
  }
  function A(R, P) {
    return R = e(R, P), [R[0] * n + c, f - R[1] * n];
  }
  w.stream = function(R) {
    return W && E === R ? W : W = hS(C(x, U(V(E = R))));
  }, w.clipAngle = function(R) {
    return arguments.length ? (C = +R ? aS(S = R * en, 6 * en) : (S = null, wf), G()) : S * _r;
  }, w.clipExtent = function(R) {
    return arguments.length ? (V = R == null ? (F = O = I = H = null, Ef) : K2(F = +R[0][0], O = +R[0][1], I = +R[1][0], H = +R[1][1]), G()) : F == null ? null : [[F, O], [I, H]];
  }, w.scale = function(R) {
    return arguments.length ? (n = +R, T()) : n;
  }, w.translate = function(R) {
    return arguments.length ? (s = +R[0], u = +R[1], T()) : [s, u];
  }, w.center = function(R) {
    return arguments.length ? (h = R[0] % 360 * en, p = R[1] % 360 * en, T()) : [h * _r, p * _r];
  }, w.rotate = function(R) {
    return arguments.length ? (d = R[0] % 360 * en, v = R[1] % 360 * en, _ = R.length > 2 ? R[2] % 360 * en : 0, T()) : [d * _r, v * _r, _ * _r];
  }, w.precision = function(R) {
    return arguments.length ? (U = Sf(A, J = R * R), G()) : ns(J);
  }, w.fitExtent = function(R, P) {
    return gp(w, R, P);
  }, w.fitSize = function(R, P) {
    return oS(w, R, P);
  };
  function T() {
    M = ap(x = X2(d, v, _), e);
    var R = e(h, p);
    return c = s - R[0] * n, f = u + R[1] * n, G();
  }
  function G() {
    return W = E = null, w;
  }
  return function() {
    return e = t.apply(this, arguments), w.invert = e.invert && b, T();
  };
}
function dp(t) {
  return function(e, n) {
    var s = Ve(e), u = Ve(n), c = t(s * u);
    return [
      c * u * We(e),
      c * We(n)
    ];
  };
}
function pp(t) {
  return function(e, n) {
    var s = ns(e * e + n * n), u = t(s), c = We(u), f = Ve(u);
    return [
      Ji(e * c, s * f),
      ni(s && n * c / s)
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
function Mf(t, e) {
  return [t, e];
}
Mf.invert = Mf;
var { BufferOp: mS, GeoJSONReader: vS, GeoJSONWriter: yS } = H2;
function _S(t, e, n) {
  n = n || {};
  var s = n.units || "kilometers", u = n.steps || 8;
  if (!t) throw new Error("geojson is required");
  if (typeof n != "object") throw new Error("options must be an object");
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
      return Xn(t, function(f) {
        var h = qa(f, e, s, u);
        h && Xn(h, function(p) {
          p && c.push(p);
        });
      }), nt(c);
  }
  return qa(t, e, s, u);
}
function qa(t, e, n, s) {
  var u = t.properties || {}, c = t.type === "Feature" ? t.geometry : t;
  if (c.type === "GeometryCollection") {
    var f = [];
    return Pr(t, function(C) {
      var F = qa(C, e, n, s);
      F && f.push(F);
    }), nt(f);
  }
  var h = ES(c), p = {
    type: c.type,
    coordinates: yp(c.coordinates, h)
  }, d = new vS(), v = d.read(p), _ = Bl(Ul(e, n), "meters"), x = mS.bufferOp(v, _, s), M = new yS();
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
  return typeof t[0] != "object" ? e(t) : t.map(function(n) {
    return yp(n, e);
  });
}
function _p(t, e) {
  return typeof t[0] != "object" ? e.invert(t) : t.map(function(n) {
    return _p(n, e);
  });
}
function ES(t) {
  var e = U2(t).geometry.coordinates, n = [-e[0], -e[1]];
  return pS().rotate(n).scale(at);
}
var xS = _S;
class Ep {
  constructor(e = [], n = wS) {
    if (this.data = e, this.length = this.data.length, this.compare = n, this.length > 0)
      for (let s = (this.length >> 1) - 1; s >= 0; s--) this._down(s);
  }
  push(e) {
    this.data.push(e), this.length++, this._up(this.length - 1);
  }
  pop() {
    if (this.length === 0) return;
    const e = this.data[0], n = this.data.pop();
    return this.length--, this.length > 0 && (this.data[0] = n, this._down(0)), e;
  }
  peek() {
    return this.data[0];
  }
  _up(e) {
    const { data: n, compare: s } = this, u = n[e];
    for (; e > 0; ) {
      const c = e - 1 >> 1, f = n[c];
      if (s(u, f) >= 0) break;
      n[e] = f, e = c;
    }
    n[e] = u;
  }
  _down(e) {
    const { data: n, compare: s } = this, u = this.length >> 1, c = n[e];
    for (; e < u; ) {
      let f = (e << 1) + 1, h = n[f];
      const p = f + 1;
      if (p < this.length && s(n[p], h) < 0 && (f = p, h = n[p]), s(h, c) >= 0) break;
      n[e] = h, e = f;
    }
    n[e] = c;
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
class If {
  constructor(e, n, s, u) {
    this.p = {
      x: e[0],
      y: e[1]
    }, this.featureId = n, this.ringId = s, this.eventId = u, this.otherEvent = null, this.isLeftEndpoint = null;
  }
  isSamePoint(e) {
    return this.p.x === e.p.x && this.p.y === e.p.y;
  }
}
function SS(t, e) {
  if (t.type === "FeatureCollection") {
    const n = t.features;
    for (let s = 0; s < n.length; s++)
      bf(n[s], e);
  } else
    bf(t, e);
}
let Aa = 0, Ta = 0, Ca = 0;
function bf(t, e) {
  const n = t.type === "Feature" ? t.geometry : t;
  let s = n.coordinates;
  (n.type === "Polygon" || n.type === "MultiLineString") && (s = [s]), n.type === "LineString" && (s = [[s]]);
  for (let u = 0; u < s.length; u++)
    for (let c = 0; c < s[u].length; c++) {
      let f = s[u][c][0], h = null;
      Ta = Ta + 1;
      for (let p = 0; p < s[u][c].length - 1; p++) {
        h = s[u][c][p + 1];
        const d = new If(f, Aa, Ta, Ca), v = new If(h, Aa, Ta, Ca + 1);
        d.otherEvent = v, v.otherEvent = d, xp(d, v) > 0 ? (v.isLeftEndpoint = !0, d.isLeftEndpoint = !1) : (d.isLeftEndpoint = !0, v.isLeftEndpoint = !1), e.push(d), e.push(v), f = h, Ca = Ca + 1;
      }
    }
  Aa = Aa + 1;
}
let MS = class {
  constructor(e) {
    this.leftSweepEvent = e, this.rightSweepEvent = e.otherEvent;
  }
};
function IS(t, e) {
  if (t === null || e === null || t.leftSweepEvent.ringId === e.leftSweepEvent.ringId && (t.rightSweepEvent.isSamePoint(e.leftSweepEvent) || t.rightSweepEvent.isSamePoint(e.leftSweepEvent) || t.rightSweepEvent.isSamePoint(e.rightSweepEvent) || t.leftSweepEvent.isSamePoint(e.leftSweepEvent) || t.leftSweepEvent.isSamePoint(e.rightSweepEvent))) return !1;
  const n = t.leftSweepEvent.p.x, s = t.leftSweepEvent.p.y, u = t.rightSweepEvent.p.x, c = t.rightSweepEvent.p.y, f = e.leftSweepEvent.p.x, h = e.leftSweepEvent.p.y, p = e.rightSweepEvent.p.x, d = e.rightSweepEvent.p.y, v = (d - h) * (u - n) - (p - f) * (c - s), _ = (p - f) * (s - h) - (d - h) * (n - f), x = (u - n) * (s - h) - (c - s) * (n - f);
  if (v === 0)
    return !1;
  const M = _ / v, S = x / v;
  if (M >= 0 && M <= 1 && S >= 0 && S <= 1) {
    const C = n + M * (u - n), F = s + M * (c - s);
    return [C, F];
  }
  return !1;
}
function bS(t, e) {
  e = e || !1;
  const n = [], s = new Ep([], kS);
  for (; t.length; ) {
    const u = t.pop();
    if (u.isLeftEndpoint) {
      const c = new MS(u);
      for (let f = 0; f < s.data.length; f++) {
        const h = s.data[f];
        if (e && h.leftSweepEvent.featureId === u.featureId)
          continue;
        const p = IS(c, h);
        p !== !1 && n.push(p);
      }
      s.push(c);
    } else u.isLeftEndpoint === !1 && s.pop();
  }
  return n;
}
function LS(t, e) {
  const n = new Ep([], xp);
  return SS(t, n), bS(n, e);
}
var AS = LS;
function ia(t, e, n = {}) {
  const { removeDuplicates: s = !0, ignoreSelfIntersections: u = !0 } = n;
  let c = [];
  t.type === "FeatureCollection" ? c = c.concat(t.features) : t.type === "Feature" ? c.push(t) : (t.type === "LineString" || t.type === "Polygon" || t.type === "MultiLineString" || t.type === "MultiPolygon") && c.push(Sn(t)), e.type === "FeatureCollection" ? c = c.concat(e.features) : e.type === "Feature" ? c.push(e) : (e.type === "LineString" || e.type === "Polygon" || e.type === "MultiLineString" || e.type === "MultiPolygon") && c.push(Sn(e));
  const f = AS(
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
var TS = ia;
function el(t) {
  const e = qt(t);
  let n = 0, s = 1, u, c;
  for (; s < e.length; )
    u = c || e[0], c = e[s], n += (c[0] - u[0]) * (c[1] + u[1]), s++;
  return n > 0;
}
function CS(t, e = {}) {
  var n, s;
  if (e = e || {}, !Lo(e)) throw new Error("options is invalid");
  const u = (n = e.mutate) != null ? n : !1, c = (s = e.reverse) != null ? s : !1;
  if (!t) throw new Error("<geojson> is required");
  if (typeof c != "boolean")
    throw new Error("<reverse> must be a boolean");
  if (typeof u != "boolean")
    throw new Error("<mutate> must be a boolean");
  !u && t.type !== "Point" && t.type !== "MultiPoint" && (t = Ao(t));
  const f = [];
  switch (t.type) {
    case "GeometryCollection":
      return Pr(t, function(h) {
        Ya(h, c);
      }), t;
    case "FeatureCollection":
      return Xn(t, function(h) {
        const p = Ya(h, c);
        Xn(p, function(d) {
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
      return Lf(qt(t), e), t;
    case "Polygon":
      return Af(qt(t), e), t;
    case "MultiLineString":
      return qt(t).forEach(function(s) {
        Lf(s, e);
      }), t;
    case "MultiPolygon":
      return qt(t).forEach(function(s) {
        Af(s, e);
      }), t;
    case "Point":
    case "MultiPoint":
      return t;
  }
}
function Lf(t, e) {
  el(t) === e && t.reverse();
}
function Af(t, e) {
  el(t[0]) !== e && t[0].reverse();
  for (let n = 1; n < t.length; n++)
    el(t[n]) === e && t[n].reverse();
}
var NS = CS;
const PS = ["Point", "MultiPoint"], OS = [
  "LineString",
  "MultiLineString",
  "Polygon",
  "MultiPolygon"
], wp = (t) => PS.includes(t.geometry.type), tl = (t) => OS.includes(t.geometry.type), RS = (t, e) => (na(t, (n) => {
  const s = n.coordinate;
  s[0] += e.lng, s[1] += e.lat;
}), t), DS = (t, e) => {
  const s = t.getBounds(), u = Xd(s[0], s[1], { units: "meters" });
  return xS(e, u * 1e-4, { units: "meters" }) || null;
}, kp = (t, e) => {
  const n = sn(t.getGeoJson());
  return RS(n, e), n;
}, xI = (t, e) => {
  const n = kp(t, e), s = t.getShapeProperty("center");
  s && (t.setShapeProperty("center", s[0] + e.lng), t.setShapeProperty("center", s[1] + e.lat)), t.updateGeoJsonGeometry(n.geometry);
}, FS = (t, e) => {
  try {
    na(t, (n) => {
      if (!ti(n.coordinate, e))
        throw new Error("stop");
    });
  } catch {
    return !1;
  }
  return !0;
}, Tf = (t, e) => {
  const n = FS(t, e);
  return wp(t) ? n : n && tl(t) ? !TS(t, e, { ignoreSelfIntersections: !0 }).features.length : !1;
}, ec = (t) => {
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
  const n = t.properties?.[e];
  return typeof n == "string" || typeof n == "number" ? n : null;
};
class tc extends ts {
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
    const n = this.getFeatureByMouseEvent({ event: e, sourceNames: [K.main] });
    return n && this.getUpdatedGeoJsonHandlers[n.shape] ? (this.featureData = n, this.featureData.changeSource({ sourceName: K.temporary, atomic: !0 }), this.gm.mapAdapter.setDragPan(!1), this.flags.actionInProgress = !0, this.snappingHelper?.addExcludedFeature(this.featureData), this.isPointBasedShape() && this.alignShapeCenterWithControlMarker(this.featureData, e), this.fireFeatureEditStartEvent({ feature: this.featureData, forceMode: "drag" }), { next: !1 }) : { next: !0 };
  }
  onMouseUp(e) {
    return !this.featureData || !je(e, { warning: !0 }) ? { next: !0 } : (this.snappingHelper?.clearExcludedFeatures(), this.featureData.changeSource({ sourceName: K.main, atomic: !0 }), this.previousLngLat = null, this.gm.mapAdapter.setDragPan(!0), this.fireFeatureEditEndEvent({ feature: this.featureData, forceMode: "drag" }), this.flags.actionInProgress = !1, this.featureData = null, { next: !0 });
  }
  onMouseMove(e) {
    if (!this.flags.actionInProgress || !je(e, { warning: !0 }))
      return { next: !0 };
    if (this.featureData) {
      const n = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
      this.moveFeature(this.featureData, n);
    }
    return { next: !1 };
  }
  isPointBasedShape() {
    return !!this.featureData && this.pointBasedShapes.includes(this.featureData.shape);
  }
  alignShapeCenterWithControlMarker(e, n) {
    const s = ec(e);
    s && (this.gm.markerPointer.marker?.setLngLat(s), this.onMouseMove(n));
  }
  moveFeature(e, n) {
    if (!this.flags.actionInProgress)
      return;
    if (!this.previousLngLat) {
      this.previousLngLat = n;
      return;
    }
    const s = this.getUpdatedGeoJsonHandlers[e.shape];
    if (s) {
      const u = s(e, this.previousLngLat, n);
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
      Wi(e.getGeoJson().properties, u.properties) || e.updateGeoJsonProperties(u.properties), c && (this.previousLngLat = n);
    }
  }
  moveSource(e, n, s) {
    const u = uu(n, s);
    return kp(e, u);
  }
  moveEllipse(e, n, s) {
    if (e.shape !== "ellipse")
      return te.error("BaseDrag.moveCircle: invalid shape type", e), null;
    const u = e.getShapeProperty("center"), c = e.getShapeProperty("xSemiAxis"), f = e.getShapeProperty("ySemiAxis"), h = e.getShapeProperty("angle");
    if (!Array.isArray(u) || typeof c != "number" || typeof f != "number" || typeof h != "number")
      return te.error(
        "BaseDrag.moveEllipse: missing center, xSemiAxis, ySemiAxis or angle in the featureData",
        e
      ), null;
    const p = uu(n, s), d = [
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
  moveCircle(e, n, s) {
    if (e.shape !== "circle")
      return te.error("BaseDrag.moveCircle: invalid shape type", e), null;
    const u = e.getShapeProperty("center");
    if (!Array.isArray(u))
      return te.error("BaseDrag.moveCircle: missing center in the featureData", e), null;
    const c = e.getGeoJson(), f = uu(n, s), h = Kd(c);
    if (!h)
      return te.error("BaseDrag.moveCircle: missing center circleRimLngLat"), null;
    const p = [
      u[0] + f.lng,
      u[1] + f.lat
    ];
    e.setShapeProperty("center", p);
    const d = Xl({
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
class qS extends tc {
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
    const n = e.featureData, s = n.shape, u = this.shapeUpdateHandlers[s]?.(e) || null;
    u ? (this.fireBeforeFeatureUpdate({
      features: [n],
      geoJsonFeatures: [u]
    }), this.updateFeatureGeoJson({ featureData: n, featureGeoJson: u })) : te.error("EditChange.moveVertex: invalid geojson", u, e);
  }
  cutVertex(e) {
    const n = e.featureData;
    if (e.markerData.type !== "vertex" || !this.cutVertexShapeTypes.includes(n.shape))
      return;
    let s = !1;
    const u = n.getGeoJson(), c = e.markerData.instance;
    if (Ds(u)) {
      if (lu(u) <= 2) {
        this.gm.features.delete(n);
        return;
      }
    } else if (Yl(u)) {
      if (lu(u) <= 3) {
        this.gm.features.delete(n);
        return;
      }
    } else if (ql(u) && lu(u) <= 3) {
      this.gm.features.delete(n);
      return;
    }
    const f = ec(c);
    f && (s = Fk(u, f)), s ? (n.convertToPolygon(), n.updateGeoJsonGeometry(u.geometry), this.fireFeatureUpdatedEvent({
      sourceFeatures: [n],
      targetFeatures: [n],
      markerData: e.markerData
    })) : te.error("EditChange.cutVertex: feature not updated", e);
  }
  insertVertex(e) {
    if (e.markerData.type !== "edge")
      return;
    const n = e.featureData.getGeoJson(), s = e.markerData.segment.end.path, u = s.pop(), c = Bi(n, s);
    typeof u == "number" && (c.splice(u, 0, [...e.markerData.position.coordinate]), e.featureData.updateGeoJsonGeometry(n.geometry), e.featureData.convertToPolygon(), this.fireFeatureUpdatedEvent({
      sourceFeatures: [e.featureData],
      targetFeatures: [e.featureData],
      markerData: e.markerData
    }));
  }
  updateSingleVertex({ featureData: e, lngLatEnd: n, markerData: s }) {
    const u = sn(e.getGeoJson()), c = sn(s.position.path), f = c.pop(), h = Bi(u, c);
    return Array.isArray(h) && typeof f == "number" ? (h[f] = [...n], f === 0 && e.shape === "polygon" && (h[h.length - 1] = [...n])) : te.error("BaseDrag.moveSingleVertex: invalid coordinates", u, c), u;
  }
  updateCircle({ featureData: e, lngLatEnd: n }) {
    const s = e.getShapeProperty("center");
    if (e.shape !== "circle" || !s)
      return te.error("BaseDrag.moveCircle: invalid shape type / missing center", e), null;
    const u = Xl({
      center: s,
      radius: this.gm.mapAdapter.getDistance(s, n)
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
    const { featureData: n, lngLatEnd: s, markerData: u } = e;
    if (n.shape !== "ellipse")
      return te.error("EditChange.updateEllipse: invalid shape type", n), null;
    const c = n.getShapeProperty("center");
    let f = n.getShapeProperty("xSemiAxis"), h = n.getShapeProperty("ySemiAxis");
    const p = n.getShapeProperty("angle");
    if (!Array.isArray(c) || typeof f != "number" || typeof h != "number" || typeof p != "number")
      return te.error(
        "updateEllipse: missing center, xSemiAxis, ySemiAxis or angle in the featureData",
        n
      ), null;
    const d = this.gm.mapAdapter.getDistance(c, s), v = u.position.path[3], _ = Math.floor(v / Qd * 4);
    return (_ === 0 || _ === 2 ? "x" : "y") === "x" ? f = d : h = d, Co({
      center: c,
      xSemiAxis: f,
      ySemiAxis: h,
      angle: p
    });
  }
  updateRectangle({ featureData: e, lngLatStart: n, lngLatEnd: s }) {
    const c = e.getGeoJson(), f = c.geometry.coordinates[0], { absCoordIndex: h } = To(c, n);
    if (h === -1)
      return te.error("EditChange.updateRectangle: start vertex not found", e), null;
    const p = zS(h - 2, 4), d = f[p];
    return $u(s, d);
  }
}
const YS = ["mode_start", "mode_started", "mode_end", "mode_ended"], nc = (t) => kn(t) && Ar(t.action, YS), Mp = (t) => t.length > 0;
function HS(t, e, {
  ignoreSelfIntersections: n = !0
} = { ignoreSelfIntersections: !0 }) {
  let s = !0;
  return Cr(t, (u) => {
    Cr(e, (c) => {
      if (s === !1)
        return !1;
      s = JS(
        u.geometry,
        c.geometry,
        n
      );
    });
  }), s;
}
function JS(t, e, n) {
  switch (t.type) {
    case "Point":
      switch (e.type) {
        case "Point":
          return !WS(t.coordinates, e.coordinates);
        case "LineString":
          return !Cf(e, t);
        case "Polygon":
          return !ti(t, e);
      }
      break;
    case "LineString":
      switch (e.type) {
        case "Point":
          return !Cf(t, e);
        case "LineString":
          return !$S(t, e, n);
        case "Polygon":
          return !Nf(e, t, n);
      }
      break;
    case "Polygon":
      switch (e.type) {
        case "Point":
          return !ti(e, t);
        case "LineString":
          return !Nf(t, e, n);
        case "Polygon":
          return !XS(e, t, n);
      }
  }
  return !1;
}
function Cf(t, e) {
  for (let n = 0; n < t.coordinates.length - 1; n++)
    if (VS(
      t.coordinates[n],
      t.coordinates[n + 1],
      e.coordinates
    ))
      return !0;
  return !1;
}
function $S(t, e, n) {
  return ia(t, e, {
    ignoreSelfIntersections: n
  }).features.length > 0;
}
function Nf(t, e, n) {
  for (const u of e.coordinates)
    if (ti(u, t))
      return !0;
  return ia(e, Ju(t), {
    ignoreSelfIntersections: n
  }).features.length > 0;
}
function XS(t, e, n) {
  for (const u of t.coordinates[0])
    if (ti(u, e))
      return !0;
  for (const u of e.coordinates[0])
    if (ti(u, t))
      return !0;
  return ia(
    Ju(t),
    Ju(e),
    { ignoreSelfIntersections: n }
  ).features.length > 0;
}
function VS(t, e, n) {
  const s = n[0] - t[0], u = n[1] - t[1], c = e[0] - t[0], f = e[1] - t[1];
  return s * f - u * c !== 0 ? !1 : Math.abs(c) >= Math.abs(f) ? c > 0 ? t[0] <= n[0] && n[0] <= e[0] : e[0] <= n[0] && n[0] <= t[0] : f > 0 ? t[1] <= n[1] && n[1] <= e[1] : e[1] <= n[1] && n[1] <= t[1];
}
function WS(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function jS(t, e, {
  ignoreSelfIntersections: n = !0
} = {}) {
  let s = !1;
  return Cr(t, (u) => {
    Cr(e, (c) => {
      if (s === !0)
        return !0;
      s = !HS(u.geometry, c.geometry, {
        ignoreSelfIntersections: n
      });
    });
  }), s;
}
var Ip = jS, ZS = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mu = Math.ceil, jt = Math.floor, Ot = "[BigNumber Error] ", Pf = Ot + "Number primitive has more than 15 significant digits: ", hn = 1e14, xe = 14, vu = 9007199254740991, yu = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Er = 1e7, st = 1e9;
function bp(t) {
  var e, n, s, u = I.prototype = { constructor: I, toString: null, valueOf: null }, c = new I(1), f = 20, h = 4, p = -7, d = 21, v = -1e7, _ = 1e7, x = !1, M = 1, S = 0, C = {
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
    var b, A, T, G, R, P, D, Y, z = this;
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
      if (Xe(w, 2, F.length, "Base"), w == 10 && O)
        return z = new I(E), U(z, f + z.e + 1, h);
      if (Y = String(E), P = typeof E == "number") {
        if (E * 0 != 0) return s(z, Y, P, w);
        if (z.s = 1 / E < 0 ? (Y = Y.slice(1), -1) : 1, I.DEBUG && Y.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Pf + E);
      } else
        z.s = Y.charCodeAt(0) === 45 ? (Y = Y.slice(1), -1) : 1;
      for (b = F.slice(0, w), G = R = 0, D = Y.length; R < D; R++)
        if (b.indexOf(A = Y.charAt(R)) < 0) {
          if (A == ".") {
            if (R > G) {
              G = D;
              continue;
            }
          } else if (!T && (Y == Y.toUpperCase() && (Y = Y.toLowerCase()) || Y == Y.toLowerCase() && (Y = Y.toUpperCase()))) {
            T = !0, R = -1, G = 0;
            continue;
          }
          return s(z, String(E), P, w);
        }
      P = !1, Y = n(Y, w, 10, z.s), (G = Y.indexOf(".")) > -1 ? Y = Y.replace(".", "") : G = Y.length;
    }
    for (R = 0; Y.charCodeAt(R) === 48; R++) ;
    for (D = Y.length; Y.charCodeAt(--D) === 48; ) ;
    if (Y = Y.slice(R, ++D)) {
      if (D -= R, P && I.DEBUG && D > 15 && (E > vu || E !== jt(E)))
        throw Error(Pf + z.s * E);
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
        if (E.hasOwnProperty(w = "DECIMAL_PLACES") && (b = E[w], Xe(b, 0, st, w), f = b), E.hasOwnProperty(w = "ROUNDING_MODE") && (b = E[w], Xe(b, 0, 8, w), h = b), E.hasOwnProperty(w = "EXPONENTIAL_AT") && (b = E[w], b && b.pop ? (Xe(b[0], -st, 0, w), Xe(b[1], 0, st, w), p = b[0], d = b[1]) : (Xe(b, -st, st, w), p = -(d = b < 0 ? -b : b))), E.hasOwnProperty(w = "RANGE"))
          if (b = E[w], b && b.pop)
            Xe(b[0], -st, -1, w), Xe(b[1], 1, st, w), v = b[0], _ = b[1];
          else if (Xe(b, -st, st, w), b)
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
        if (E.hasOwnProperty(w = "MODULO_MODE") && (b = E[w], Xe(b, 0, 9, w), M = b), E.hasOwnProperty(w = "POW_PRECISION") && (b = E[w], Xe(b, 0, st, w), S = b), E.hasOwnProperty(w = "FORMAT"))
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
    var w, b, A = E.c, T = E.e, G = E.s;
    e: if ({}.toString.call(A) == "[object Array]") {
      if ((G === 1 || G === -1) && T >= -st && T <= st && T === jt(T)) {
        if (A[0] === 0) {
          if (T === 0 && A.length === 1) return !0;
          break e;
        }
        if (w = (T + 1) % xe, w < 1 && (w += xe), String(A[0]).length == w) {
          for (w = 0; w < A.length; w++)
            if (b = A[w], b < 0 || b >= hn || b !== jt(b)) break e;
          if (b !== 0) return !0;
        }
      }
    } else if (A === null && T === null && (G === null || G === 1 || G === -1))
      return !0;
    throw Error(Ot + "Invalid BigNumber: " + E);
  }, I.maximum = I.max = function() {
    return V(arguments, -1);
  }, I.minimum = I.min = function() {
    return V(arguments, 1);
  }, I.random = (function() {
    var E = 9007199254740992, w = Math.random() * E & 2097151 ? function() {
      return jt(Math.random() * E);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(b) {
      var A, T, G, R, P, D = 0, Y = [], z = new I(c);
      if (b == null ? b = f : Xe(b, 0, st), R = mu(b / xe), x)
        if (crypto.getRandomValues) {
          for (A = crypto.getRandomValues(new Uint32Array(R *= 2)); D < R; )
            P = A[D] * 131072 + (A[D + 1] >>> 11), P >= 9e15 ? (T = crypto.getRandomValues(new Uint32Array(2)), A[D] = T[0], A[D + 1] = T[1]) : (Y.push(P % 1e14), D += 2);
          D = R / 2;
        } else if (crypto.randomBytes) {
          for (A = crypto.randomBytes(R *= 7); D < R; )
            P = (A[D] & 31) * 281474976710656 + A[D + 1] * 1099511627776 + A[D + 2] * 4294967296 + A[D + 3] * 16777216 + (A[D + 4] << 16) + (A[D + 5] << 8) + A[D + 6], P >= 9e15 ? crypto.randomBytes(7).copy(A, D) : (Y.push(P % 1e14), D += 7);
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
  }, n = /* @__PURE__ */ (function() {
    var E = "0123456789";
    function w(b, A, T, G) {
      for (var R, P = [0], D, Y = 0, z = b.length; Y < z; ) {
        for (D = P.length; D--; P[D] *= A) ;
        for (P[0] += G.indexOf(b.charAt(Y++)), R = 0; R < P.length; R++)
          P[R] > T - 1 && (P[R + 1] == null && (P[R + 1] = 0), P[R + 1] += P[R] / T | 0, P[R] %= T);
      }
      return P.reverse();
    }
    return function(b, A, T, G, R) {
      var P, D, Y, z, j, Z, re, pe, le = b.indexOf("."), ae = f, oe = h;
      for (le >= 0 && (z = S, S = 0, b = b.replace(".", ""), pe = new I(A), Z = pe.pow(b.length - le), S = z, pe.c = w(
        tr(Wt(Z.c), Z.e, "0"),
        10,
        T,
        E
      ), pe.e = pe.c.length), re = w(b, A, T, R ? (P = F, E) : (P = E, F)), Y = z = re.length; re[--z] == 0; re.pop()) ;
      if (!re[0]) return P.charAt(0);
      if (le < 0 ? --Y : (Z.c = re, Z.e = Y, Z.s = G, Z = e(Z, pe, ae, oe, T), re = Z.c, j = Z.r, Y = Z.e), D = Y + ae + 1, le = re[D], z = T / 2, j = j || D < 0 || re[D + 1] != null, j = oe < 4 ? (le != null || j) && (oe == 0 || oe == (Z.s < 0 ? 3 : 2)) : le > z || le == z && (oe == 4 || j || oe == 6 && re[D - 1] & 1 || oe == (Z.s < 0 ? 8 : 7)), D < 1 || !re[0])
        b = j ? tr(P.charAt(1), -ae, P.charAt(0)) : P.charAt(0);
      else {
        if (re.length = D, j)
          for (--T; ++re[--D] > T; )
            re[D] = 0, D || (++Y, re = [1].concat(re));
        for (z = re.length; !re[--z]; ) ;
        for (le = 0, b = ""; le <= z; b += P.charAt(re[le++])) ;
        b = tr(b, Y, P.charAt(0));
      }
      return b;
    };
  })(), e = /* @__PURE__ */ (function() {
    function E(A, T, G) {
      var R, P, D, Y, z = 0, j = A.length, Z = T % Er, re = T / Er | 0;
      for (A = A.slice(); j--; )
        D = A[j] % Er, Y = A[j] / Er | 0, R = re * D + Y * Z, P = Z * D + R % Er * Er + z, z = (P / G | 0) + (R / Er | 0) + re * Y, A[j] = P % G;
      return z && (A = [z].concat(A)), A;
    }
    function w(A, T, G, R) {
      var P, D;
      if (G != R)
        D = G > R ? 1 : -1;
      else
        for (P = D = 0; P < G; P++)
          if (A[P] != T[P]) {
            D = A[P] > T[P] ? 1 : -1;
            break;
          }
      return D;
    }
    function b(A, T, G, R) {
      for (var P = 0; G--; )
        A[G] -= P, P = A[G] < T[G] ? 1 : 0, A[G] = P * R + A[G] - T[G];
      for (; !A[0] && A.length > 1; A.splice(0, 1)) ;
    }
    return function(A, T, G, R, P) {
      var D, Y, z, j, Z, re, pe, le, ae, oe, Ee, Ce, $, In, Le, ce, N, Ne = A.s == T.s ? 1 : -1, De = A.c, ke = T.c;
      if (!De || !De[0] || !ke || !ke[0])
        return new I(
          // Return NaN if either NaN, or both Infinity or 0.
          !A.s || !T.s || (De ? ke && De[0] == ke[0] : !ke) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            De && De[0] == 0 || !ke ? Ne * 0 : Ne / 0
          )
        );
      for (le = new I(Ne), ae = le.c = [], Y = A.e - T.e, Ne = G + Y + 1, P || (P = hn, Y = Zt(A.e / xe) - Zt(T.e / xe), Ne = Ne / xe | 0), z = 0; ke[z] == (De[z] || 0); z++) ;
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
  function H(E, w, b, A) {
    var T, G, R, P, D;
    if (b == null ? b = h : Xe(b, 0, 8), !E.c) return E.toString();
    if (T = E.c[0], R = E.e, w == null)
      D = Wt(E.c), D = A == 1 || A == 2 && (R <= p || R >= d) ? Pa(D, R) : tr(D, R, "0");
    else if (E = U(new I(E), w, b), G = E.e, D = Wt(E.c), P = D.length, A == 1 || A == 2 && (w <= G || G <= p)) {
      for (; P < w; D += "0", P++) ;
      D = Pa(D, G);
    } else if (w -= R + (A === 2 && G > R), D = tr(D, G, "0"), G + 1 > P) {
      if (--w > 0) for (D += "."; w--; D += "0") ;
    } else if (w += G - P, w > 0)
      for (G + 1 == P && (D += "."); w--; D += "0") ;
    return E.s < 0 && T ? "-" + D : D;
  }
  function V(E, w) {
    for (var b, A, T = 1, G = new I(E[0]); T < E.length; T++)
      A = new I(E[T]), (!A.s || (b = Hr(G, A)) === w || b === 0 && G.s === w) && (G = A);
    return G;
  }
  function J(E, w, b) {
    for (var A = 1, T = w.length; !w[--T]; w.pop()) ;
    for (T = w[0]; T >= 10; T /= 10, A++) ;
    return (b = A + b * xe - 1) > _ ? E.c = E.e = null : b < v ? E.c = [E.e = 0] : (E.e = b, E.c = w), E;
  }
  s = /* @__PURE__ */ (function() {
    var E = /^(-?)0([xbo])(?=\w[\w.]*$)/i, w = /^([^.]+)\.$/, b = /^\.([^.]+)$/, A = /^-?(Infinity|NaN)$/, T = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(G, R, P, D) {
      var Y, z = P ? R : R.replace(T, "");
      if (A.test(z))
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
  function U(E, w, b, A) {
    var T, G, R, P, D, Y, z, j = E.c, Z = yu;
    if (j) {
      e: {
        for (T = 1, P = j[0]; P >= 10; P /= 10, T++) ;
        if (G = w - T, G < 0)
          G += xe, R = w, D = j[Y = 0], z = jt(D / Z[T - R - 1] % 10);
        else if (Y = mu((G + 1) / xe), Y >= j.length)
          if (A) {
            for (; j.length <= Y; j.push(0)) ;
            D = z = 0, T = 1, G %= xe, R = G - xe + 1;
          } else
            break e;
        else {
          for (D = P = j[Y], T = 1; P >= 10; P /= 10, T++) ;
          G %= xe, R = G - xe + T, z = R < 0 ? 0 : jt(D / Z[T - R - 1] % 10);
        }
        if (A = A || w < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        j[Y + 1] != null || (R < 0 ? D : D % Z[T - R - 1]), A = b < 4 ? (z || A) && (b == 0 || b == (E.s < 0 ? 3 : 2)) : z > 5 || z == 5 && (b == 4 || A || b == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (G > 0 ? R > 0 ? D / Z[T - R] : 0 : j[Y - 1]) % 10 & 1 || b == (E.s < 0 ? 8 : 7)), w < 1 || !j[0])
          return j.length = 0, A ? (w -= E.e + 1, j[0] = Z[(xe - w % xe) % xe], E.e = -w || 0) : j[0] = E.e = 0, E;
        if (G == 0 ? (j.length = Y, P = 1, Y--) : (j.length = Y + 1, P = Z[xe - G], j[Y] = R > 0 ? jt(D / Z[T - R] % Z[R]) * P : 0), A)
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
    var b, A, T, G = this;
    if (E != null)
      return Xe(E, 0, st), w == null ? w = h : Xe(w, 0, 8), U(new I(G), E + G.e + 1, w);
    if (!(b = G.c)) return null;
    if (A = ((T = b.length - 1) - Zt(this.e / xe)) * xe, T = b[T]) for (; T % 10 == 0; T /= 10, A--) ;
    return A < 0 && (A = 0), A;
  }, u.dividedBy = u.div = function(E, w) {
    return e(this, new I(E, w), f, h);
  }, u.dividedToIntegerBy = u.idiv = function(E, w) {
    return e(this, new I(E, w), 0, 1);
  }, u.exponentiatedBy = u.pow = function(E, w) {
    var b, A, T, G, R, P, D, Y, z, j = this;
    if (E = new I(E), E.c && !E.isInteger())
      throw Error(Ot + "Exponent not an integer: " + W(E));
    if (w != null && (w = new I(w)), P = E.e > 14, !j.c || !j.c[0] || j.c[0] == 1 && !j.e && j.c.length == 1 || !E.c || !E.c[0])
      return z = new I(Math.pow(+W(j), P ? E.s * (2 - Na(E)) : +W(E))), w ? z.mod(w) : z;
    if (D = E.s < 0, w) {
      if (w.c ? !w.c[0] : !w.s) return new I(NaN);
      A = !D && j.isInteger() && w.isInteger(), A && (j = j.mod(w));
    } else {
      if (E.e > 9 && (j.e > 0 || j.e < -1 || (j.e == 0 ? j.c[0] > 1 || P && j.c[1] >= 24e7 : j.c[0] < 8e13 || P && j.c[0] <= 9999975e7)))
        return G = j.s < 0 && Na(E) ? -0 : 0, j.e > -1 && (G = 1 / G), new I(D ? 1 / G : G);
      S && (G = mu(S / xe + 2));
    }
    for (P ? (b = new I(0.5), D && (E.s = 1), Y = Na(E)) : (T = Math.abs(+W(E)), Y = T % 2), z = new I(c); ; ) {
      if (Y) {
        if (z = z.times(j), !z.c) break;
        G ? z.c.length > G && (z.c.length = G) : A && (z = z.mod(w));
      }
      if (T) {
        if (T = jt(T / 2), T === 0) break;
        Y = T % 2;
      } else if (E = E.times(b), U(E, E.e + 1, 1), E.e > 14)
        Y = Na(E);
      else {
        if (T = +W(E), T === 0) break;
        Y = T % 2;
      }
      j = j.times(j), G ? j.c && j.c.length > G && (j.c.length = G) : A && (j = j.mod(w));
    }
    return A ? z : (D && (z = c.div(z)), w ? z.mod(w) : G ? U(z, S, h, R) : z);
  }, u.integerValue = function(E) {
    var w = new I(this);
    return E == null ? E = h : Xe(E, 0, 8), U(w, w.e + 1, E);
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
    var b, A, T, G, R = this, P = R.s;
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
      for ((G = P < 0) ? (P = -P, T = z) : (Y = D, T = j), T.reverse(), w = P; w--; T.push(0)) ;
      T.reverse();
    } else
      for (A = (G = (P = z.length) < (w = j.length)) ? P : w, P = w = 0; w < A; w++)
        if (z[w] != j[w]) {
          G = z[w] < j[w];
          break;
        }
    if (G && (T = z, z = j, j = T, E.s = -E.s), w = (A = j.length) - (b = z.length), w > 0) for (; w--; z[b++] = 0) ;
    for (w = hn - 1; A > P; ) {
      if (z[--A] < j[A]) {
        for (b = A; b && !z[--b]; z[b] = w) ;
        --z[b], z[A] += hn;
      }
      z[A] -= j[A];
    }
    for (; z[0] == 0; z.splice(0, 1), --Y) ;
    return z[0] ? J(E, z, Y) : (E.s = h == 3 ? -1 : 1, E.c = [E.e = 0], E);
  }, u.modulo = u.mod = function(E, w) {
    var b, A, T = this;
    return E = new I(E, w), !T.c || !E.s || E.c && !E.c[0] ? new I(NaN) : !E.c || T.c && !T.c[0] ? new I(T) : (M == 9 ? (A = E.s, E.s = 1, b = e(T, E, 0, 3), E.s = A, b.s *= A) : b = e(T, E, 0, M), E = T.minus(b.times(E)), !E.c[0] && M == 1 && (E.s = T.s), E);
  }, u.multipliedBy = u.times = function(E, w) {
    var b, A, T, G, R, P, D, Y, z, j, Z, re, pe, le, ae, oe = this, Ee = oe.c, Ce = (E = new I(E, w)).c;
    if (!Ee || !Ce || !Ee[0] || !Ce[0])
      return !oe.s || !E.s || Ee && !Ee[0] && !Ce || Ce && !Ce[0] && !Ee ? E.c = E.e = E.s = null : (E.s *= oe.s, !Ee || !Ce ? E.c = E.e = null : (E.c = [0], E.e = 0)), E;
    for (A = Zt(oe.e / xe) + Zt(E.e / xe), E.s *= oe.s, D = Ee.length, j = Ce.length, D < j && (pe = Ee, Ee = Ce, Ce = pe, T = D, D = j, j = T), T = D + j, pe = []; T--; pe.push(0)) ;
    for (le = hn, ae = Er, T = j; --T >= 0; ) {
      for (b = 0, Z = Ce[T] % ae, re = Ce[T] / ae | 0, R = D, G = T + R; G > T; )
        Y = Ee[--R] % ae, z = Ee[R] / ae | 0, P = re * Y + z * Z, Y = Z * Y + P % ae * ae + pe[G] + b, b = (Y / le | 0) + (P / ae | 0) + re * z, pe[G--] = Y % le;
      pe[G] = b;
    }
    return b ? ++A : pe.splice(0, 1), J(E, pe, A);
  }, u.negated = function() {
    var E = new I(this);
    return E.s = -E.s || null, E;
  }, u.plus = function(E, w) {
    var b, A = this, T = A.s;
    if (E = new I(E, w), w = E.s, !T || !w) return new I(NaN);
    if (T != w)
      return E.s = -w, A.minus(E);
    var G = A.e / xe, R = E.e / xe, P = A.c, D = E.c;
    if (!G || !R) {
      if (!P || !D) return new I(T / 0);
      if (!P[0] || !D[0]) return D[0] ? E : new I(P[0] ? A : T * 0);
    }
    if (G = Zt(G), R = Zt(R), P = P.slice(), T = G - R) {
      for (T > 0 ? (R = G, b = D) : (T = -T, b = P), b.reverse(); T--; b.push(0)) ;
      b.reverse();
    }
    for (T = P.length, w = D.length, T - w < 0 && (b = D, D = P, P = b, w = T), T = 0; w; )
      T = (P[--w] = P[w] + D[w] + T) / hn | 0, P[w] = hn === P[w] ? 0 : P[w] % hn;
    return T && (P = [T].concat(P), ++R), J(E, P, R);
  }, u.precision = u.sd = function(E, w) {
    var b, A, T, G = this;
    if (E != null && E !== !!E)
      return Xe(E, 1, st), w == null ? w = h : Xe(w, 0, 8), U(new I(G), E, w);
    if (!(b = G.c)) return null;
    if (T = b.length - 1, A = T * xe + 1, T = b[T]) {
      for (; T % 10 == 0; T /= 10, A--) ;
      for (T = b[0]; T >= 10; T /= 10, A++) ;
    }
    return E && G.e + 1 > A && (A = G.e + 1), A;
  }, u.shiftedBy = function(E) {
    return Xe(E, -vu, vu), this.times("1e" + E);
  }, u.squareRoot = u.sqrt = function() {
    var E, w, b, A, T, G = this, R = G.c, P = G.s, D = G.e, Y = f + 4, z = new I("0.5");
    if (P !== 1 || !R || !R[0])
      return new I(!P || P < 0 && (!R || R[0]) ? NaN : R ? G : 1 / 0);
    if (P = Math.sqrt(+W(G)), P == 0 || P == 1 / 0 ? (w = Wt(R), (w.length + D) % 2 == 0 && (w += "0"), P = Math.sqrt(+w), D = Zt((D + 1) / 2) - (D < 0 || D % 2), P == 1 / 0 ? w = "5e" + D : (w = P.toExponential(), w = w.slice(0, w.indexOf("e") + 1) + D), b = new I(w)) : b = new I(P + ""), b.c[0]) {
      for (D = b.e, P = D + Y, P < 3 && (P = 0); ; )
        if (T = b, b = z.times(T.plus(e(G, T, Y, 1))), Wt(T.c).slice(0, P) === (w = Wt(b.c)).slice(0, P))
          if (b.e < D && --P, w = w.slice(P - 3, P + 1), w == "9999" || !A && w == "4999") {
            if (!A && (U(T, T.e + f + 2, 0), T.times(T).eq(G))) {
              b = T;
              break;
            }
            Y += 4, P += 4, A = 1;
          } else {
            (!+w || !+w.slice(1) && w.charAt(0) == "5") && (U(b, b.e + f + 2, 1), E = !b.times(b).eq(G));
            break;
          }
    }
    return U(b, b.e + f + 1, h, E);
  }, u.toExponential = function(E, w) {
    return E != null && (Xe(E, 0, st), E++), H(this, E, w, 1);
  }, u.toFixed = function(E, w) {
    return E != null && (Xe(E, 0, st), E = E + this.e + 1), H(this, E, w);
  }, u.toFormat = function(E, w, b) {
    var A, T = this;
    if (b == null)
      E != null && w && typeof w == "object" ? (b = w, w = null) : E && typeof E == "object" ? (b = E, E = w = null) : b = C;
    else if (typeof b != "object")
      throw Error(Ot + "Argument not an object: " + b);
    if (A = T.toFixed(E, w), T.c) {
      var G, R = A.split("."), P = +b.groupSize, D = +b.secondaryGroupSize, Y = b.groupSeparator || "", z = R[0], j = R[1], Z = T.s < 0, re = Z ? z.slice(1) : z, pe = re.length;
      if (D && (G = P, P = D, D = G, pe -= G), P > 0 && pe > 0) {
        for (G = pe % P || P, z = re.substr(0, G); G < pe; G += P) z += Y + re.substr(G, P);
        D > 0 && (z += Y + re.slice(G)), Z && (z = "-" + z);
      }
      A = j ? z + (b.decimalSeparator || "") + ((D = +b.fractionGroupSize) ? j.replace(
        new RegExp("\\d{" + D + "}\\B", "g"),
        "$&" + (b.fractionGroupSeparator || "")
      ) : j) : z;
    }
    return (b.prefix || "") + A + (b.suffix || "");
  }, u.toFraction = function(E) {
    var w, b, A, T, G, R, P, D, Y, z, j, Z, re = this, pe = re.c;
    if (E != null && (P = new I(E), !P.isInteger() && (P.c || P.s !== 1) || P.lt(c)))
      throw Error(Ot + "Argument " + (P.isInteger() ? "out of range: " : "not an integer: ") + W(P));
    if (!pe) return new I(re);
    for (w = new I(c), Y = b = new I(c), A = D = new I(c), Z = Wt(pe), G = w.e = Z.length - re.e - 1, w.c[0] = yu[(R = G % xe) < 0 ? xe + R : R], E = !E || P.comparedTo(w) > 0 ? G > 0 ? w : Y : P, R = _, _ = 1 / 0, P = new I(Z), D.c[0] = 0; z = e(P, w, 0, 1), T = b.plus(z.times(A)), T.comparedTo(E) != 1; )
      b = A, A = T, Y = D.plus(z.times(T = Y)), D = T, w = P.minus(z.times(T = w)), P = T;
    return T = e(E.minus(b), A, 0, 1), D = D.plus(T.times(Y)), b = b.plus(T.times(A)), D.s = Y.s = re.s, G = G * 2, j = e(Y, A, G, h).minus(re).abs().comparedTo(
      e(D, b, G, h).minus(re).abs()
    ) < 1 ? [Y, A] : [D, b], _ = R, j;
  }, u.toNumber = function() {
    return +W(this);
  }, u.toPrecision = function(E, w) {
    return E != null && Xe(E, 1, st), H(this, E, w, 2);
  }, u.toString = function(E) {
    var w, b = this, A = b.s, T = b.e;
    return T === null ? A ? (w = "Infinity", A < 0 && (w = "-" + w)) : w = "NaN" : (E == null ? w = T <= p || T >= d ? Pa(Wt(b.c), T) : tr(Wt(b.c), T, "0") : E === 10 && O ? (b = U(new I(b), f + T + 1, h), w = tr(Wt(b.c), b.e, "0")) : (Xe(E, 2, F.length, "Base"), w = n(tr(Wt(b.c), T, "0"), 10, E, A, !0)), A < 0 && b.c[0] && (w = "-" + w)), w;
  }, u.valueOf = u.toJSON = function() {
    return W(this);
  }, u._isBigNumber = !0, u[Symbol.toStringTag] = "BigNumber", u[Symbol.for("nodejs.util.inspect.custom")] = u.valueOf, t != null && I.set(t), I;
}
function Zt(t) {
  var e = t | 0;
  return t > 0 || t === e ? e : e - 1;
}
function Wt(t) {
  for (var e, n, s = 1, u = t.length, c = t[0] + ""; s < u; ) {
    for (e = t[s++] + "", n = xe - e.length; n--; e = "0" + e) ;
    c += e;
  }
  for (u = c.length; c.charCodeAt(--u) === 48; ) ;
  return c.slice(0, u + 1 || 1);
}
function Hr(t, e) {
  var n, s, u = t.c, c = e.c, f = t.s, h = e.s, p = t.e, d = e.e;
  if (!f || !h) return null;
  if (n = u && !u[0], s = c && !c[0], n || s) return n ? s ? 0 : -h : f;
  if (f != h) return f;
  if (n = f < 0, s = p == d, !u || !c) return s ? 0 : !u ^ n ? 1 : -1;
  if (!s) return p > d ^ n ? 1 : -1;
  for (h = (p = u.length) < (d = c.length) ? p : d, f = 0; f < h; f++) if (u[f] != c[f]) return u[f] > c[f] ^ n ? 1 : -1;
  return p == d ? 0 : p > d ^ n ? 1 : -1;
}
function Xe(t, e, n, s) {
  if (t < e || t > n || t !== jt(t))
    throw Error(Ot + (s || "Argument") + (typeof t == "number" ? t < e || t > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(t));
}
function Na(t) {
  var e = t.c.length - 1;
  return Zt(t.e / xe) == e && t.c[e] % 2 != 0;
}
function Pa(t, e) {
  return (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) + (e < 0 ? "e" : "e+") + e;
}
function tr(t, e, n) {
  var s, u;
  if (e < 0) {
    for (u = n + "."; ++e; u += n) ;
    t = u + t;
  } else if (s = t.length, ++e > s) {
    for (u = n, e -= s; --e; u += n) ;
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
    let n = null, s = null, u = null, c = null, f = e;
    const h = this.compare;
    let p;
    for (; ; )
      if (p = h(f.key, t), p > 0) {
        let d = f.left;
        if (d == null || (p = h(d.key, t), p > 0 && (f.left = d.right, d.right = f, f = d, d = f.left, d == null)))
          break;
        n == null ? s = f : n.left = f, n = f, f = d;
      } else if (p < 0) {
        let d = f.right;
        if (d == null || (p = h(d.key, t), p < 0 && (f.right = d.left, d.left = f, f = d, d = f.right, d == null)))
          break;
        u == null ? c = f : u.right = f, u = f, f = d;
      } else
        break;
    return u != null && (u.right = f.left, f.left = c), n != null && (n.left = f.right, f.right = s), this.root !== f && (this.root = f, this.splayCount++), p;
  }
  splayMin(t) {
    let e = t, n = e.left;
    for (; n != null; ) {
      const s = n;
      e.left = s.right, s.right = e, e = s, n = e.left;
    }
    return e;
  }
  splayMax(t) {
    let e = t, n = e.right;
    for (; n != null; ) {
      const s = n;
      e.right = s.left, s.left = e, e = s, n = e.right;
    }
    return e;
  }
  _delete(t) {
    if (this.root == null || this.splay(t) != 0) return null;
    let n = this.root;
    const s = n, u = n.left;
    if (this.size--, u == null)
      this.root = n.right;
    else {
      const c = n.right;
      n = this.splayMax(u), n.right = c, this.root = n;
    }
    return this.modificationCount++, s;
  }
  addNewRoot(t, e) {
    this.size++, this.modificationCount++;
    const n = this.root;
    if (n == null) {
      this.root = t;
      return;
    }
    e < 0 ? (t.left = n, t.right = n.right, n.right = null) : (t.right = n, t.left = n.left, n.left = null), this.root = t;
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
  constructor(e, n) {
    super(), this.compare = e ?? this.defaultCompare(), this.validKey = n ?? ((s) => s != null && s != null);
  }
  delete(e) {
    return this.validKey(e) ? this._delete(e) != null : !1;
  }
  deleteAll(e) {
    for (const n of e)
      this.delete(n);
  }
  forEach(e) {
    const n = this[Symbol.iterator]();
    let s;
    for (; s = n.next(), !s.done; )
      e(s.value, s.value, this);
  }
  add(e) {
    const n = this.splay(e);
    return n != 0 && this.addNewRoot(new _s(e), n), this;
  }
  addAndReturn(e) {
    const n = this.splay(e);
    return n != 0 && this.addNewRoot(new _s(e), n), this.root.key;
  }
  addAll(e) {
    for (const n of e)
      this.add(n);
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
    const n = new Ls(this.compare, this.validKey), s = this.modificationCount;
    for (const u of e) {
      if (s != this.modificationCount)
        throw "Concurrent modification during iteration.";
      this.validKey(u) && this.splay(u) == 0 && n.add(this.root.key);
    }
    n.size != this.size && (this.root = n.root, this.size = n.size, this.modificationCount++);
  }
  lookup(e) {
    return !this.validKey(e) || this.splay(e) != 0 ? null : this.root.key;
  }
  intersection(e) {
    const n = new Ls(this.compare, this.validKey);
    for (const s of this)
      e.has(s) && n.add(s);
    return n;
  }
  difference(e) {
    const n = new Ls(this.compare, this.validKey);
    for (const s of this)
      e.has(s) || n.add(s);
    return n;
  }
  union(e) {
    const n = this.clone();
    return n.addAll(e), n;
  }
  clone() {
    const e = new Ls(this.compare, this.validKey);
    return e.size = this.size, e.root = this.copyNode(this.root), e;
  }
  copyNode(e) {
    if (e == null) return null;
    function n(u, c) {
      let f, h;
      do {
        if (f = u.left, h = u.right, f != null) {
          const p = new _s(f.key);
          c.left = p, n(f, p);
        }
        if (h != null) {
          const p = new _s(h.key);
          c.right = p, u = h, c = p;
        }
      } while (h != null);
    }
    const s = new _s(e.key);
    return n(e, s), s;
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
        let n = this.tree.getRoot();
        for (; n != null; )
          this.path.push(n), n = n.left;
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
}, Ap = (t) => () => t, nl = (t) => {
  const e = t ? (n, s) => s.minus(n).abs().isLessThanOrEqualTo(t) : Ap(!1);
  return (n, s) => e(n, s) ? 0 : n.comparedTo(s);
};
function nM(t) {
  const e = t ? (n, s, u, c, f) => n.exponentiatedBy(2).isLessThanOrEqualTo(
    c.minus(s).exponentiatedBy(2).plus(f.minus(u).exponentiatedBy(2)).times(t)
  ) : Ap(!1);
  return (n, s, u) => {
    const c = n.x, f = n.y, h = u.x, p = u.y, d = f.minus(p).times(s.x.minus(h)).minus(c.minus(h).times(s.y.minus(p)));
    return e(d, c, f, h, p) ? 0 : d.comparedTo(0);
  };
}
var rM = (t) => t, iM = (t) => {
  if (t) {
    const e = new co(nl(t)), n = new co(nl(t)), s = (c, f) => f.addAndReturn(c), u = (c) => ({
      x: s(c.x, e),
      y: s(c.y, n)
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
  const n = t.ll.x.isLessThan(e.ll.x) ? e.ll.x : t.ll.x, s = t.ur.x.isLessThan(e.ur.x) ? t.ur.x : e.ur.x, u = t.ll.y.isLessThan(e.ll.y) ? e.ll.y : t.ll.y, c = t.ur.y.isLessThan(e.ur.y) ? t.ur.y : e.ur.y;
  return { ll: { x: n, y: u }, ur: { x: s, y: c } };
}, Ha = (t, e) => t.x.times(e.y).minus(t.y.times(e.x)), Tp = (t, e) => t.x.times(e.x).plus(t.y.times(e.y)), ho = (t) => Tp(t, t).sqrt(), sM = (t, e, n) => {
  const s = { x: e.x.minus(t.x), y: e.y.minus(t.y) }, u = { x: n.x.minus(t.x), y: n.y.minus(t.y) };
  return Ha(u, s).div(ho(u)).div(ho(s));
}, aM = (t, e, n) => {
  const s = { x: e.x.minus(t.x), y: e.y.minus(t.y) }, u = { x: n.x.minus(t.x), y: n.y.minus(t.y) };
  return Tp(u, s).div(ho(u)).div(ho(s));
}, Of = (t, e, n) => e.y.isZero() ? null : { x: t.x.plus(e.x.div(e.y).times(n.minus(t.y))), y: n }, Rf = (t, e, n) => e.x.isZero() ? null : { x: n, y: t.y.plus(e.y.div(e.x).times(n.minus(t.x))) }, oM = (t, e, n, s) => {
  if (e.x.isZero()) return Rf(n, s, t.x);
  if (s.x.isZero()) return Rf(t, e, n.x);
  if (e.y.isZero()) return Of(n, s, t.y);
  if (s.y.isZero()) return Of(t, e, n.y);
  const u = Ha(e, s);
  if (u.isZero()) return null;
  const c = { x: n.x.minus(t.x), y: n.y.minus(t.y) }, f = Ha(c, e).div(u), h = Ha(c, s).div(u), p = t.x.plus(h.times(e.x)), d = n.x.plus(f.times(s.x)), v = t.y.plus(h.times(e.y)), _ = n.y.plus(f.times(s.y)), x = p.plus(d).div(2), M = v.plus(_).div(2);
  return { x, y: M };
}, Gn = class Cp {
  point;
  isLeft;
  segment;
  otherSE;
  consumedBy;
  // for ordering sweep events in the sweep event queue
  static compare(e, n) {
    const s = Cp.comparePoints(e.point, n.point);
    return s !== 0 ? s : (e.point !== n.point && e.link(n), e.isLeft !== n.isLeft ? e.isLeft ? 1 : -1 : go.compare(e.segment, n.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(e, n) {
    return e.x.isLessThan(n.x) ? -1 : e.x.isGreaterThan(n.x) ? 1 : e.y.isLessThan(n.y) ? -1 : e.y.isGreaterThan(n.y) ? 1 : 0;
  }
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(e, n) {
    e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = n;
  }
  link(e) {
    if (e.point === this.point)
      throw new Error("Tried to link already linked events");
    const n = e.point.events;
    for (let s = 0, u = n.length; s < u; s++) {
      const c = n[s];
      this.point.events.push(c), c.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const e = this.point.events.length;
    for (let n = 0; n < e; n++) {
      const s = this.point.events[n];
      if (s.segment.consumedBy === void 0)
        for (let u = n + 1; u < e; u++) {
          const c = this.point.events[u];
          c.consumedBy === void 0 && s.otherSE.point.events === c.otherSE.point.events && s.segment.consume(c.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const e = [];
    for (let n = 0, s = this.point.events.length; n < s; n++) {
      const u = this.point.events[n];
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
    const n = /* @__PURE__ */ new Map(), s = (u) => {
      const c = u.otherSE;
      n.set(u, {
        sine: sM(this.point, e.point, c.point),
        cosine: aM(this.point, e.point, c.point)
      });
    };
    return (u, c) => {
      n.has(u) || s(u), n.has(c) || s(c);
      const { sine: f, cosine: h } = n.get(u), { sine: p, cosine: d } = n.get(c);
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
    const n = [];
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
            F.unshift(F[0].otherSE), n.push(new sl(F.reverse()));
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
      n.push(new sl(d));
    }
    return n;
  }
  constructor(e) {
    this.events = e;
    for (let n = 0, s = e.length; n < s; n++)
      e[n].segment.ringOut = this;
    this.poly = null;
  }
  getGeom() {
    let e = this.events[0].point;
    const n = [e];
    for (let d = 1, v = this.events.length - 1; d < v; d++) {
      const _ = this.events[d].point, x = this.events[d + 1].point;
      ur.orient(_, e, x) !== 0 && (n.push(_), e = _);
    }
    if (n.length === 1) return null;
    const s = n[0], u = n[1];
    ur.orient(s, e, u) === 0 && n.shift(), n.push(n[0]);
    const c = this.isExteriorRing() ? 1 : -1, f = this.isExteriorRing() ? 0 : n.length - 1, h = this.isExteriorRing() ? n.length : -1, p = [];
    for (let d = f; d != h; d += c)
      p.push([n[d].x.toNumber(), n[d].y.toNumber()]);
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
    let n = e.segment.prevInResult(), s = n ? n.prevInResult() : null;
    for (; ; ) {
      if (!n) return null;
      if (!s) return n.ringOut;
      if (s.ringOut !== n.ringOut)
        return s.ringOut?.enclosingRing() !== n.ringOut ? n.ringOut : n.ringOut?.enclosingRing();
      n = s.prevInResult(), s = n ? n.prevInResult() : null;
    }
  }
}, Df = class {
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
    for (let n = 0, s = this.interiorRings.length; n < s; n++) {
      const u = this.interiorRings[n].getGeom();
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
    for (let e = 0, n = this.polys.length; e < n; e++) {
      const s = this.polys[e].getGeom();
      s !== null && t.push(s);
    }
    return t;
  }
  _composePolys(t) {
    const e = [];
    for (let n = 0, s = t.length; n < s; n++) {
      const u = t[n];
      if (!u.poly)
        if (u.isExteriorRing()) e.push(new Df(u));
        else {
          const c = u.enclosingRing();
          c?.poly || e.push(new Df(c)), c?.poly?.addInterior(u);
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
    const e = t.segment, n = [];
    if (t.consumedBy)
      return t.isLeft ? this.queue.delete(t.otherSE) : this.tree.delete(e), n;
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
            n.push(p[d]);
        }
      }
      let f = null;
      if (u) {
        const h = u.getIntersection(e);
        if (h !== null && (e.isAnEndpoint(h) || (f = h), !u.isAnEndpoint(h))) {
          const p = this._splitSafely(u, h);
          for (let d = 0, v = p.length; d < v; d++)
            n.push(p[d]);
        }
      }
      if (c !== null || f !== null) {
        let h = null;
        c === null ? h = f : f === null ? h = c : h = Gn.comparePoints(
          c,
          f
        ) <= 0 ? c : f, this.queue.delete(e.rightSE), n.push(e.rightSE);
        const p = e.split(h);
        for (let d = 0, v = p.length; d < v; d++)
          n.push(p[d]);
      }
      n.length > 0 ? (this.tree.delete(e), n.push(t)) : (this.segments.push(e), e.prev = s);
    } else {
      if (s && u) {
        const c = s.getIntersection(u);
        if (c !== null) {
          if (!s.isAnEndpoint(c)) {
            const f = this._splitSafely(s, c);
            for (let h = 0, p = f.length; h < p; h++)
              n.push(f[h]);
          }
          if (!u.isAnEndpoint(c)) {
            const f = this._splitSafely(u, c);
            for (let h = 0, p = f.length; h < p; h++)
              n.push(f[h]);
          }
        }
      }
      this.tree.delete(e);
    }
    return n;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(t, e) {
    this.tree.delete(t);
    const n = t.rightSE;
    this.queue.delete(n);
    const s = t.split(e);
    return s.push(n), t.consumedBy === void 0 && this.tree.add(t), s;
  }
}, hM = class {
  type;
  numMultiPolys;
  run(t, e, n) {
    As.type = t;
    const s = [new Gf(e, !0)];
    for (let d = 0, v = n.length; d < v; d++)
      s.push(new Gf(n[d], !1));
    if (As.numMultiPolys = s.length, As.type === "difference") {
      const d = s[0];
      let v = 1;
      for (; v < s.length; )
        il(s[v].bbox, d.bbox) !== null ? v++ : s.splice(v, 1);
    }
    if (As.type === "intersection")
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
}, As = new hM(), fo = As, fM = 0, go = class Ja {
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
  static compare(e, n) {
    const s = e.leftSE.point.x, u = n.leftSE.point.x, c = e.rightSE.point.x, f = n.rightSE.point.x;
    if (f.isLessThan(s)) return 1;
    if (c.isLessThan(u)) return -1;
    const h = e.leftSE.point.y, p = n.leftSE.point.y, d = e.rightSE.point.y, v = n.rightSE.point.y;
    if (s.isLessThan(u)) {
      if (p.isLessThan(h) && p.isLessThan(d)) return 1;
      if (p.isGreaterThan(h) && p.isGreaterThan(d)) return -1;
      const _ = e.comparePoint(n.leftSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
      const x = n.comparePoint(e.rightSE.point);
      return x !== 0 ? x : -1;
    }
    if (s.isGreaterThan(u)) {
      if (h.isLessThan(p) && h.isLessThan(v)) return -1;
      if (h.isGreaterThan(p) && h.isGreaterThan(v)) return 1;
      const _ = n.comparePoint(e.leftSE.point);
      if (_ !== 0) return _;
      const x = e.comparePoint(n.rightSE.point);
      return x < 0 ? 1 : x > 0 ? -1 : 1;
    }
    if (h.isLessThan(p)) return -1;
    if (h.isGreaterThan(p)) return 1;
    if (c.isLessThan(f)) {
      const _ = n.comparePoint(e.rightSE.point);
      if (_ !== 0) return _;
    }
    if (c.isGreaterThan(f)) {
      const _ = e.comparePoint(n.rightSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
    }
    if (!c.eq(f)) {
      const _ = d.minus(h), x = c.minus(s), M = v.minus(p), S = f.minus(u);
      if (_.isGreaterThan(x) && M.isLessThan(S)) return 1;
      if (_.isLessThan(x) && M.isGreaterThan(S)) return -1;
    }
    return c.isGreaterThan(f) ? 1 : c.isLessThan(f) || d.isLessThan(v) ? -1 : d.isGreaterThan(v) ? 1 : e.id < n.id ? -1 : e.id > n.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, n, s, u) {
    this.id = ++fM, this.leftSE = e, e.segment = this, e.otherSE = n, this.rightSE = n, n.segment = this, n.otherSE = e, this.rings = s, this.windings = u;
  }
  static fromRing(e, n, s) {
    let u, c, f;
    const h = Gn.comparePoints(e, n);
    if (h < 0)
      u = e, c = n, f = 1;
    else if (h > 0)
      u = n, c = e, f = -1;
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
    const e = this.leftSE.point.y, n = this.rightSE.point.y;
    return {
      ll: { x: this.leftSE.point.x, y: e.isLessThan(n) ? e : n },
      ur: { x: this.rightSE.point.x, y: e.isGreaterThan(n) ? e : n }
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
    const n = this.bbox(), s = e.bbox(), u = il(n, s);
    if (u === null) return null;
    const c = this.leftSE.point, f = this.rightSE.point, h = e.leftSE.point, p = e.rightSE.point, d = Es(n, h) && this.comparePoint(h) === 0, v = Es(s, c) && e.comparePoint(c) === 0, _ = Es(n, p) && this.comparePoint(p) === 0, x = Es(s, f) && e.comparePoint(f) === 0;
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
    const n = [], s = e.events !== void 0, u = new Gn(e, !0), c = new Gn(e, !1), f = this.rightSE;
    this.replaceRightSE(c), n.push(c), n.push(u);
    const h = new Ja(
      u,
      f,
      this.rings.slice(),
      this.windings.slice()
    );
    return Gn.comparePoints(h.leftSE.point, h.rightSE.point) > 0 && h.swapEvents(), Gn.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), s && (u.checkForConsuming(), c.checkForConsuming()), n;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const e = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let n = 0, s = this.windings.length; n < s; n++)
      this.windings[n] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(e) {
    let n = this, s = e;
    for (; n.consumedBy; ) n = n.consumedBy;
    for (; s.consumedBy; ) s = s.consumedBy;
    const u = Ja.compare(n, s);
    if (u !== 0) {
      if (u > 0) {
        const c = n;
        n = s, s = c;
      }
      if (n.prev === s) {
        const c = n;
        n = s, s = c;
      }
      for (let c = 0, f = s.rings.length; c < f; c++) {
        const h = s.rings[c], p = s.windings[c], d = n.rings.indexOf(h);
        d === -1 ? (n.rings.push(h), n.windings.push(p)) : n.windings[d] += p;
      }
      s.rings = null, s.windings = null, s.consumedBy = n, s.leftSE.consumedBy = n.leftSE, s.rightSE.consumedBy = n.rightSE;
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
    const n = this._afterState.rings, s = this._afterState.windings, u = this._afterState.multiPolys;
    for (let h = 0, p = this.rings.length; h < p; h++) {
      const d = this.rings[h], v = this.windings[h], _ = n.indexOf(d);
      _ === -1 ? (n.push(d), s.push(v)) : s[_] += v;
    }
    const c = [], f = [];
    for (let h = 0, p = n.length; h < p; h++) {
      if (s[h] === 0) continue;
      const d = n[h], v = d.poly;
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
    const e = this.beforeState().multiPolys, n = this.afterState().multiPolys;
    switch (fo.type) {
      case "union": {
        const s = e.length === 0, u = n.length === 0;
        this._isInResult = s !== u;
        break;
      }
      case "intersection": {
        let s, u;
        e.length < n.length ? (s = e.length, u = n.length) : (s = n.length, u = e.length), this._isInResult = u === fo.numMultiPolys && s < u;
        break;
      }
      case "xor": {
        const s = Math.abs(e.length - n.length);
        this._isInResult = s % 2 === 1;
        break;
      }
      case "difference": {
        const s = (u) => u.length === 1 && u[0].isSubject;
        this._isInResult = s(e) !== s(n);
        break;
      }
    }
    return this._isInResult;
  }
}, Ff = class {
  poly;
  isExterior;
  segments;
  bbox;
  constructor(t, e, n) {
    if (!Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = n, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
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
    for (let e = 0, n = this.segments.length; e < n; e++) {
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
    this.exteriorRing = new Ff(t[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let n = 1, s = t.length; n < s; n++) {
      const u = new Ff(t[n], this, !1);
      u.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = u.bbox.ll.x), u.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = u.bbox.ll.y), u.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = u.bbox.ur.x), u.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = u.bbox.ur.y), this.interiorRings.push(u);
    }
    this.multiPoly = e;
  }
  getSweepEvents() {
    const t = this.exteriorRing.getSweepEvents();
    for (let e = 0, n = this.interiorRings.length; e < n; e++) {
      const s = this.interiorRings[e].getSweepEvents();
      for (let u = 0, c = s.length; u < c; u++)
        t.push(s[u]);
    }
    return t;
  }
}, Gf = class {
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
    for (let n = 0, s = t.length; n < s; n++) {
      const u = new gM(t[n], this);
      u.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = u.bbox.ll.x), u.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = u.bbox.ll.y), u.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = u.bbox.ur.x), u.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = u.bbox.ur.y), this.polys.push(u);
    }
    this.isSubject = e;
  }
  getSweepEvents() {
    const t = [];
    for (let e = 0, n = this.polys.length; e < n; e++) {
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
  const n = t.features[0].properties || {}, s = pM(e[0], ...e.slice(1));
  return s.length === 0 ? null : s.length === 1 ? or(s[0], n) : Gl(s, n);
}
var Np = mM;
function Pp(t) {
  var e = new Kt(t);
  return e.insert = function(n) {
    if (n.type !== "Feature") throw new Error("invalid feature");
    return n.bbox = n.bbox ? n.bbox : Bn(n), Kt.prototype.insert.call(this, n);
  }, e.load = function(n) {
    var s = [];
    return Array.isArray(n) ? n.forEach(function(u) {
      if (u.type !== "Feature") throw new Error("invalid features");
      u.bbox = u.bbox ? u.bbox : Bn(u), s.push(u);
    }) : Xn(n, function(u) {
      if (u.type !== "Feature") throw new Error("invalid features");
      u.bbox = u.bbox ? u.bbox : Bn(u), s.push(u);
    }), Kt.prototype.load.call(this, s);
  }, e.remove = function(n, s) {
    if (n.type !== "Feature") throw new Error("invalid feature");
    return n.bbox = n.bbox ? n.bbox : Bn(n), Kt.prototype.remove.call(this, n, s);
  }, e.clear = function() {
    return Kt.prototype.clear.call(this);
  }, e.search = function(n) {
    var s = Kt.prototype.search.call(this, this.toBBox(n));
    return nt(s);
  }, e.collides = function(n) {
    return Kt.prototype.collides.call(this, this.toBBox(n));
  }, e.all = function() {
    var n = Kt.prototype.all.call(this);
    return nt(n);
  }, e.toJSON = function() {
    return Kt.prototype.toJSON.call(this);
  }, e.fromJSON = function(n) {
    return Kt.prototype.fromJSON.call(this, n);
  }, e.toBBox = function(n) {
    var s;
    if (n.bbox) s = n.bbox;
    else if (Array.isArray(n) && n.length === 4) s = n;
    else if (Array.isArray(n) && n.length === 6)
      s = [n[0], n[1], n[3], n[4]];
    else if (n.type === "Feature") s = Bn(n);
    else if (n.type === "FeatureCollection") s = Bn(n);
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
  var e = t[0], n = t[1], s = t[2], u = t[3], c = zt(t.slice(0, 2), [s, n]), f = zt(t.slice(0, 2), [e, u]);
  if (c >= f) {
    var h = (n + u) / 2;
    return [
      e,
      h - (s - e) / 2,
      s,
      h + (s - e) / 2
    ];
  } else {
    var p = (e + s) / 2;
    return [
      p - (u - n) / 2,
      n,
      p + (u - n) / 2,
      u
    ];
  }
}
function yM(t, e) {
  if (e = e ?? {}, !Lo(e)) throw new Error("options is invalid");
  var n = e.precision, s = e.coordinates, u = e.mutate;
  if (n = n == null || isNaN(n) ? 6 : n, s = s == null || isNaN(s) ? 3 : s, !t) throw new Error("<geojson> is required");
  if (typeof n != "number")
    throw new Error("<precision> must be a number");
  if (typeof s != "number")
    throw new Error("<coordinates> must be a number");
  (u === !1 || u === void 0) && (t = JSON.parse(JSON.stringify(t)));
  var c = Math.pow(10, n);
  return Nr(t, function(f) {
    _M(f, c, s);
  }), t;
}
function _M(t, e, n) {
  t.length > n && t.splice(n, t.length);
  for (var s = 0; s < t.length; s++)
    t[s] = Math.round(t[s] * e) / e;
  return t;
}
function EM(t) {
  if (!t)
    throw new Error("geojson is required");
  const e = [];
  return Cr(t, (n) => {
    xM(n, e);
  }), nt(e);
}
function xM(t, e) {
  let n = [];
  const s = t.geometry;
  if (s !== null) {
    switch (s.type) {
      case "Polygon":
        n = qt(s);
        break;
      case "LineString":
        n = [qt(s)];
    }
    n.forEach((u) => {
      wM(u, t.properties).forEach((f) => {
        f.id = e.length, e.push(f);
      });
    });
  }
}
function wM(t, e) {
  const n = [];
  return t.reduce((s, u) => {
    const c = Hi([s, u], e);
    return c.bbox = kM(s, u), n.push(c), u;
  }), n;
}
function kM(t, e) {
  const n = t[0], s = t[1], u = e[0], c = e[1], f = n < u ? n : u, h = s < c ? s : c, p = n > u ? n : u, d = s > c ? s : c;
  return [f, h, p, d];
}
var SM = Object.defineProperty, MM = Object.defineProperties, IM = Object.getOwnPropertyDescriptors, Bf = Object.getOwnPropertySymbols, bM = Object.prototype.hasOwnProperty, LM = Object.prototype.propertyIsEnumerable, Uf = (t, e, n) => e in t ? SM(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, zf = (t, e) => {
  for (var n in e || (e = {}))
    bM.call(e, n) && Uf(t, n, e[n]);
  if (Bf)
    for (var n of Bf(e))
      LM.call(e, n) && Uf(t, n, e[n]);
  return t;
}, qf = (t, e) => MM(t, IM(e));
function AM(t, e, n = {}) {
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
        _.properties.dist = zt(e, _, n);
        const x = Qe(_), M = zn(d[v + 1]);
        M.properties.dist = zt(e, M, n);
        const S = Qe(M), C = zt(_, M, n);
        let F, O;
        x[0] === s[0] && x[1] === s[1] ? [F, , O] = [x, void 0, !1] : S[0] === s[0] && S[1] === s[1] ? [F, , O] = [S, void 0, !0] : [F, , O] = NM(
          _.geometry.coordinates,
          M.geometry.coordinates,
          Qe(e)
        );
        let I;
        F && (I = zn(F, {
          dist: zt(e, F, n),
          multiFeatureIndex: p,
          location: c + zt(_, F, n)
        })), I && I.properties.dist < u.properties.dist && (u = qf(zf({}, I), {
          properties: qf(zf({}, I.properties), {
            // Legacy behaviour where index progresses to next segment # if we
            // went with the end point this iteration.
            index: O ? v + 1 : v
          })
        })), c += C;
      }
    }
  ), u;
}
function TM(t, e) {
  const [n, s, u] = t, [c, f, h] = e;
  return n * c + s * f + u * h;
}
function CM(t, e) {
  const [n, s, u] = t, [c, f, h] = e;
  return [s * h - u * f, u * c - n * h, n * f - s * c];
}
function Yf(t) {
  return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2));
}
function Jr(t, e) {
  const n = TM(t, e) / (Yf(t) * Yf(e));
  return Math.acos(Math.min(Math.max(n, -1), 1));
}
function _u(t) {
  const e = ut(t[1]), n = ut(t[0]);
  return [
    Math.cos(e) * Math.cos(n),
    Math.cos(e) * Math.sin(n),
    Math.sin(e)
  ];
}
function $r(t) {
  const [e, n, s] = t, u = ei(Math.asin(s));
  return [ei(Math.atan2(n, e)), u];
}
function NM(t, e, n) {
  const s = _u(t), u = _u(e), c = _u(n), [f, h, p] = c, [d, v, _] = CM(s, u), x = v * p - _ * h, M = _ * f - d * p, S = d * h - v * f, C = S * v - M * _, F = x * _ - S * d, O = M * d - x * v, I = 1 / Math.sqrt(Math.pow(C, 2) + Math.pow(F, 2) + Math.pow(O, 2)), H = [C * I, F * I, O * I], V = [-1 * C * I, -1 * F * I, -1 * O * I], J = Jr(s, u), U = Jr(s, H), W = Jr(u, H), E = Jr(s, V), w = Jr(u, V);
  let b;
  return U < E && U < w || W < E && W < w ? b = H : b = V, Jr(s, b) > J || Jr(u, b) > J ? zt($r(b), $r(s)) <= zt($r(b), $r(u)) ? [$r(s), !0, !1] : [$r(u), !1, !0] : [$r(b), !1, !1];
}
function PM(t, e) {
  if (!t) throw new Error("line is required");
  if (!e) throw new Error("splitter is required");
  var n = Jh(t), s = Jh(e);
  if (n !== "LineString") throw new Error("line must be LineString");
  if (s === "FeatureCollection")
    throw new Error("splitter cannot be a FeatureCollection");
  if (s === "GeometryCollection")
    throw new Error("splitter cannot be a GeometryCollection");
  var u = yM(e, { precision: 7 });
  switch (s) {
    case "Point":
      return al(t, u);
    case "MultiPoint":
      return Hf(t, u);
    case "LineString":
    case "MultiLineString":
    case "Polygon":
    case "MultiPolygon":
      return Hf(
        t,
        ia(t, u, {
          ignoreSelfIntersections: !0
        })
      );
  }
}
function Hf(t, e) {
  var n = [], s = Pp();
  return Cr(e, function(u) {
    if (n.forEach(function(h, p) {
      h.id = p;
    }), !n.length)
      n = al(t, u).features, n.forEach(function(h) {
        h.bbox || (h.bbox = vM(Bn(h)));
      }), s.load(nt(n));
    else {
      var c = s.search(u);
      if (c.features.length) {
        var f = Op(u, c);
        n = n.filter(function(h) {
          return h.id !== f.id;
        }), s.remove(f), Xn(al(f, u), function(h) {
          n.push(h), s.insert(h);
        });
      }
    }
  }), nt(n);
}
function al(t, e) {
  var n = [], s = qt(t)[0], u = qt(t)[t.geometry.coordinates.length - 1];
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
      return M === p.id ? (_.push(C), n.push(Hi(_)), Eu(C, S) ? [C] : [C, S]) : (_.push(S), _);
    },
    d
  );
  return v.length > 1 && n.push(Hi(v)), nt(n);
}
function Op(t, e) {
  if (!e.features.length) throw new Error("lines must contain features");
  if (e.features.length === 1) return e.features[0];
  var n, s = 1 / 0;
  return Xn(e, function(u) {
    var c = AM(u, t), f = c.properties.dist;
    f < s && (n = u, s = f);
  }), n;
}
function Eu(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
var OM = PM;
class RM extends ts {
  mode = "cut";
  lineDrawer = new Ql(this.gm, { snappingMarkers: "first", targetShape: "polygon" });
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
    const n = Kl(e.geoJson), s = this.getBBoxFeaturesByPolygon(n);
    this.cutFeaturesByPolygon(s, n);
  }
  getBBoxFeaturesByPolygon(e) {
    const n = Jl(e), s = this.gm.mapAdapter.coordBoundsToScreenBounds(n);
    return this.gm.mapAdapter.queryFeaturesByScreenCoordinates({
      queryCoordinates: s,
      sourceNames: [K.main]
    });
  }
  cutFeaturesByPolygon(e, n) {
    e.forEach((s) => {
      if (s.getShapeProperty("disableEdit") !== !0) {
        if (Tf(s.getGeoJson(), n)) {
          this.gm.features.delete(s), this.fireFeatureRemovedEvent(s);
          return;
        }
        if (Ip(s.getGeoJson(), n) && this.cutShapesAllowed.includes(s.shape)) {
          if (s.shape === "line") {
            this.cutLineFeatureByPolygon(s, n);
            return;
          }
          this.cutPolygonFeatureByPolygon(s.id, n);
        }
      }
    });
  }
  cutLineFeatureByPolygon(e, n) {
    const s = e.getGeoJson(), u = DS(this.gm.mapAdapter, n), c = OM(s, n);
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
    const n = {
      ...e,
      properties: {
        shape: "line"
      }
    };
    return this.gm.features.createFeature({
      shapeGeoJson: n,
      sourceName: K.main
    });
  }
  cutPolygonFeatureByPolygon(e, n) {
    const s = this.gm.features.get(K.main, e);
    if (!s) {
      te.warn("cutPolygonFeatureByPolygon: featureData not found", e);
      return;
    }
    s.convertToPolygon();
    const u = s.getGeoJson(), c = this.getGeoJsonDifference(u, n);
    c && (s.updateGeoJsonGeometry(c.geometry), this.fireFeatureUpdatedEvent({
      sourceFeatures: [s],
      targetFeatures: [s]
    }));
  }
  getGeoJsonDifference(e, n) {
    const s = nt([e, n]), u = Np(s);
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
    const n = this.getFeatureByMouseEvent({ event: e, sourceNames: [K.main] });
    return n && this.allowedShapes.includes(n.shape) && (this.gm.features.delete(n), this.fireFeatureRemovedEvent(n)), { next: !1 };
  }
}
class FM extends tc {
  mode = "drag";
  onStartAction() {
  }
  onEndAction() {
  }
  handleGmEdit(e) {
    return es(e) ? e.action === "marker_move" && e.lngLatStart && e.lngLatEnd ? (this.previousLngLat || (this.previousLngLat = e.lngLatStart), this.moveFeature(e.featureData, e.lngLatEnd), { next: !1 }) : (e.action === "marker_captured" ? (e.featureData.changeSource({ sourceName: K.temporary, atomic: !0 }), this.flags.actionInProgress = !0, this.fireFeatureEditStartEvent({ feature: e.featureData }), this.setCursorToPointer()) : e.action === "marker_released" && (this.previousLngLat = null, e.featureData.changeSource({ sourceName: K.main, atomic: !0 }), this.fireFeatureEditEndEvent({ feature: e.featureData }), this.flags.actionInProgress = !1), { next: !0 }) : (te.error("EditDrag.handleGmEdit: not an edit event", e), { next: !0 });
  }
}
class GM extends tc {
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
    const n = e.featureData, s = this.shapeRotateHandlers[n.shape]?.(e) || null;
    s ? (this.fireBeforeFeatureUpdate({
      features: [n],
      geoJsonFeatures: [s]
    }), this.updateFeatureGeoJson({ featureData: n, featureGeoJson: s }) && this.convertFeaturesTypes.includes(n.shape) && n.convertToPolygon()) : te.error("EditRotate.moveVertex: invalid geojson", s, e);
  }
  rotateEllipse(e) {
    const { featureData: n } = e;
    if (n.shape !== "ellipse")
      return te.error("EditRotate.rotateEllipse: invalid shape type", n), null;
    const s = n.getShapeProperty("center"), u = n.getShapeProperty("xSemiAxis"), c = n.getShapeProperty("ySemiAxis"), f = n.getShapeProperty("angle");
    if (!Array.isArray(s) || typeof u != "number" || typeof c != "number" || typeof f != "number")
      return te.error(
        "rotateEllipse: missing center, xSemiAxis, ySemiAxis or angle in the featureData",
        n
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
    const n = e.featureData, s = sn(n.getGeoJson()), u = Zd(Ud(s)), c = this.calculateRotationAngle(u, e.lngLatStart, e.lngLatEnd);
    return s.geometry = bk(s, c, { pivot: u }).geometry, s;
  }
  calculateRotationAngle(e, n, s, u = !0) {
    const c = to(e, n), h = to(e, s) - c;
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
  constructor(e, n) {
    super(e), n.attachEvents(this.eventHandlers);
  }
  handleEditEvent(e) {
    if (!es(e))
      return { next: !0 };
    const n = `${e.actionType}__${e.mode}`;
    return e.action === "mode_start" ? (this.trackExclusiveModes(e), this.start(n, e), this.trackRelatedModes(e)) : e.action === "mode_end" && (this.trackRelatedModes(e), this.end(n)), { next: !0 };
  }
  start(e, n) {
    if (n.action !== "mode_start")
      return;
    const s = BM(this.gm, n.mode);
    s && (e in this.gm.actionInstances && te.error(`Action instance "${e}" already exists`), this.gm.actionInstances[e] = s, s.startAction());
  }
  end(e) {
    const n = this.gm.actionInstances[e];
    n instanceof ts ? (n.endAction(), delete this.gm.actionInstances[e]) : console.error(
      `Wrong action instance for edit event "${e}": `,
      n
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
    const n = ["mousedown", "touchstart"];
    if (!je(e, { warning: !0 }) || !n.includes(e.type) || $k(e))
      return { next: !0 };
    if (e.type === "mousedown" && e.originalEvent.button !== 0)
      return { next: !0 };
    const s = this.getFeatureMarkerByMouseEvent(e);
    return this.activeMarker = s || null, this.activeFeatureData = s?.instance.parent || null, this.activeMarker && this.activeFeatureData ? (this.previousPosition = ec(this.activeMarker.instance), this.gm.mapAdapter.setDragPan(!1), this.activeMarker.type === "edge" && this.sendMarkerEvent("edge_marker_click", this.activeFeatureData, this.activeMarker), this.pinEnabled && this.pinHelperInstance ? (this.sharedMarkers = this.pinHelperInstance.getSharedMarkers(
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
    const n = this.getFeatureMarkerByMouseEvent(e);
    return n && n.instance.parent ? (this.throttledMethods.sendMarkerRightClickEvent(
      n.instance.parent,
      n
    ), { next: !1 }) : { next: !0 };
  }
  isShapeMarkerAllowed() {
    return xE(this.shapeMarkerAllowedModes, this.gm.getActiveEditModes()).length > 0;
  }
  convertToVertexMarker(e) {
    if (e.type === "edge" && e.instance.parent) {
      const n = e.position, s = e.instance.parent;
      this.removeMarker(e);
      const u = this.createMarker({
        type: "vertex",
        positionData: n,
        parentFeature: s
      }), c = s.getGeoJson(), f = Ak(c, n.coordinate);
      if (f) {
        const h = f.path.join("."), p = s.markers.get(h);
        return p && this.removeMarker(p), s.markers.set(h, u), u;
      }
    }
    return te.error("ShapeMarkersHelper.convertToVertexMarker: invalid marker type", e), e;
  }
  getFeatureMarkerByMouseEvent(e) {
    const n = this.gm.features.getFeatureByMouseEvent({
      event: e,
      sourceNames: [K.main]
    });
    if (n?.parent?.markers) {
      const s = GE(
        n.parent.markers,
        (u) => u.instance === n
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
      const n = this.getAllShapeSegments(e);
      n.forEach((s, u) => {
        if (this.isMarkerIndexAllowed(
          e.shape,
          u,
          n.length
        )) {
          const f = this.createOrUpdateVertexMarker(s.segment.start, e);
          if (e.markers.set(f.markerKey, f.markerData), e.shape === "line" && u === n.length - 1) {
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
    const n = e.getShapeProperty("center");
    if (n) {
      const s = this.createMarker({
        type: "center",
        positionData: {
          path: [],
          coordinate: n
        },
        parentFeature: e
      });
      e.markers.set("center", s);
    }
  }
  getAllShapeSegments(e) {
    const n = e.getGeoJson(), s = [];
    return Hl(n, (u, c) => {
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
  isMarkerIndexAllowed(e, n, s) {
    const u = Math.floor(s / 4);
    return e === "circle" ? (n + u / 2) % u === 0 : e === "ellipse" ? n % u === 0 : !0;
  }
  getEdgeMarkerKey(e) {
    return `edge.${e}`;
  }
  getSegmentMiddlePosition(e) {
    const n = this.gm.mapAdapter.project(e.start.coordinate), s = this.gm.mapAdapter.project(e.end.coordinate), u = [
      (n[0] + s[0]) / 2,
      (n[1] + s[1]) / 2
    ], c = e.start.path.slice(0, e.start.path.length - 1).concat([-1]);
    return {
      coordinate: this.gm.mapAdapter.unproject(u),
      path: c
    };
  }
  removeMarkers() {
    this.gm.features.forEach((e, n) => {
      const s = this.gm.features.get(K.main, n);
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
    const n = e.instance.parent;
    if (!n) {
      te.error("Missing parent feature data", e);
      return;
    }
    try {
      n.markers.forEach((s, u) => {
        if (s === e)
          throw this.gm.features.delete(s.instance), n.markers.delete(u), new Error("break");
      });
    } catch {
    }
  }
  handleGmDraw(e) {
    return jl(e) ? (["feature_created", "mode_start"].includes(e.action) && this.debouncedMethods.refreshMarkers(), { next: !0 }) : (te.error("ShapeMarkersHelper.handleGmDraw: not a draw event", e), { next: !0 });
  }
  refreshMarkers() {
    this.removeMarkers(), this.addMarkers();
  }
  handleGmEdit(e) {
    return es(e) ? (e.action === "feature_updated" && this.handleShapeUpdate(e), { next: !0 }) : (te.error("ShapeMarkersHelper.handleGmEdit: not an edit event", e), { next: !0 });
  }
  handleShapeUpdate(e) {
    const n = e.targetFeatures[0];
    if (!n) {
      te.error("ShapeMarkersHelper.handleShapeUpdate: no featureData", e);
      return;
    }
    this.activeMarker?.type === "edge" && (this.activeMarker = this.convertToVertexMarker(this.activeMarker));
    const s = this.getAllShapeSegments(n), u = new Set(n.markers.keys());
    s.forEach((c, f) => {
      if (this.isMarkerIndexAllowed(
        n.shape,
        f,
        s.length
      )) {
        const p = this.createOrUpdateVertexMarker(c.segment.start, n);
        if (u.delete(p.markerKey), n.shape === "line" && f === s.length - 1) {
          const d = this.createOrUpdateVertexMarker(
            c.segment.end,
            n
          );
          u.delete(d.markerKey);
        }
      }
      if (this.isEdgeMarkerAllowed(n)) {
        const p = this.createOrUpdateEdgeMarker(c, n);
        u.delete(p.markerKey);
      }
    }), this.updateCenterMarkerPosition(n), u.delete("center"), u.forEach((c) => {
      const f = n.markers.get(c);
      f && f.type !== "dom" ? this.gm.features.delete(f.instance) : te.error("Non a FeatureData marker"), n.markers.delete(c);
    });
  }
  createOrUpdateVertexMarker(e, n) {
    const s = e.path.join(".");
    let u = n.markers.get(s) || null;
    if (u && u?.type !== "vertex")
      throw new Error(`Invalid marker type "${u?.type}" for edge marker`);
    return u ? (Vh(u.position.coordinate, e.coordinate) || this.gm.features.updateMarkerFeaturePosition(u.instance, e.coordinate), u.position = e) : (u = this.createMarker({
      type: "vertex",
      positionData: e,
      parentFeature: n
    }), n.markers.set(s, u)), { markerKey: s, markerData: u };
  }
  createOrUpdateEdgeMarker(e, n) {
    let s = n.markers.get(e.edgeMarkerKey) || null;
    if (s && s?.type !== "edge")
      throw new Error(`Invalid marker type "${s?.type}" for edge marker`);
    return s ? (Vh(s.position.coordinate, e.middle.coordinate) || s.instance.updateGeoJsonGeometry({
      type: "Point",
      coordinates: e.middle.coordinate
    }), s.position = e.middle, s.segment = e.segment) : (s = this.createMarker({
      type: "edge",
      positionData: e.middle,
      segment: e.segment,
      parentFeature: n
    }), n.markers.set(e.edgeMarkerKey, s)), { markerKey: e.edgeMarkerKey, markerData: s };
  }
  updateCenterMarkerPosition(e) {
    const n = e.markers.get("center") || null, s = e.getShapeProperty("center");
    n && n.type !== "dom" && s && (n.instance.updateGeoJsonGeometry({
      type: "Point",
      coordinates: s
    }), n.position.coordinate = s);
  }
  sendMarkerEvent(e, n, s) {
    const u = {
      name: `${se}:edit:marker`,
      level: "system",
      actionType: "edit",
      mode: "change",
      action: e,
      featureData: n,
      markerData: s
    };
    this.gm.events.fire(`${se}:edit`, u);
  }
  sendMarkerRightClickEvent(e, n) {
    const s = {
      name: `${se}:edit:marker`,
      level: "system",
      actionType: "edit",
      mode: "change",
      action: "marker_right_click",
      featureData: e,
      markerData: n
    };
    this.gm.events.fire(`${se}:edit`, s);
  }
  sendMarkerMoveEvent(e) {
    const n = this.gm.markerPointer.marker?.getLngLat() || e.lngLat.toArray();
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
          lngLatEnd: n
        };
        this.gm.events.fire(`${se}:edit`, c);
      }
    }), this.previousPosition = n;
  }
  createMarker({
    type: e,
    segment: n,
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
    if (e === "edge" && n)
      return {
        type: e,
        instance: f,
        position: sn(s),
        segment: n
      };
    if (e === "vertex" || e === "center")
      return {
        type: e,
        instance: f,
        position: sn(s)
      };
    throw new Error(`Invalid marker type "${e}" with segment: ${n}`);
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
  setCustomSnappingCoordinates(e, n) {
    this.customSnappingLngLats.set(e, n);
  }
  clearCustomSnappingCoordinates(e) {
    this.customSnappingLngLats.delete(e);
  }
  getSnappedLngLat(e, n) {
    let s = this.getCustomLngLatsSnapping(n);
    if (s)
      return s;
    const u = this.getFeaturesInPointBounds(n).filter(
      (c) => !this.excludedFeature.has(c)
    );
    return s = this.getFeaturePointsSnapping(u, e, n), s || (s = this.getFeatureLinesSnapping(u, e, n), s) ? s : e;
  }
  getCustomLngLatsSnapping(e) {
    const n = {
      distance: 1 / 0,
      lngLat: null
    };
    return this.customSnappingLngLats.forEach((s) => {
      s.forEach((u) => {
        const c = this.gm.mapAdapter.project(u), f = Ga(e, c);
        f < this.tolerance && f < n.distance && (n.distance = f, n.lngLat = u);
      });
    }), n.lngLat;
  }
  getFeaturePointsSnapping(e, n, s) {
    let u = e.map((c) => ({
      shape: c.shape,
      ...this.getPointsSnapping(c, n, s)
    })).filter((c) => c.distance < this.tolerance);
    return u.length ? (u = yh(u, ["distance"]), u[0].lngLat) : null;
  }
  getFeatureLinesSnapping(e, n, s) {
    let u = e.filter((c) => this.lineSnappingShapes.includes(c.shape)).map((c) => {
      const f = this.shapeSnappingHandlers[c.shape];
      return f ? {
        shape: c.shape,
        ...f(c, n, s)
      } : null;
    }).filter((c) => c !== null && c.distance < this.tolerance);
    return u.length ? (u = yh(u, ["distance"]), u[0].lngLat) : null;
  }
  getFeaturesInPointBounds(e) {
    const n = [
      [e[0] - this.tolerance, e[1] - this.tolerance],
      [e[0] + this.tolerance, e[1] + this.tolerance]
    ];
    return this.gm.features.getFeaturesByScreenBounds({ bounds: n, sourceNames: [K.main, K.temporary] }).filter((s) => s.temporary ? this.customSnappingFeatures.has(s) : !0) || [];
  }
  getPointsSnapping(e, n, s) {
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
      lngLat: c.coord ? c.coord : n,
      distance: c.distance
    };
  }
  getLineSnapping(e, n, s) {
    const u = e.getGeoJson();
    return this.getNearestLinePointData(u, n, s);
  }
  getNearestLinePointData(e, n, s) {
    const u = {
      lngLat: n,
      distance: 1 / 0
    }, c = this.gm.mapAdapter.getEuclideanNearestLngLat(e, n), f = this.gm.mapAdapter.project(c);
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
    }), n = Fd(e), s = [
      [n[0], n[1]],
      [n[2], n[3]]
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
  constructor(e, n) {
    super(e), n.attachEvents(this.eventHandlers);
  }
  handleHelperEvent(e) {
    if (!Vl(e))
      return { next: !0 };
    const n = `${e.actionType}__${e.mode}`;
    return e.action === "mode_start" ? (this.trackExclusiveModes(e), this.start(n, e), this.trackRelatedModes(e)) : e.action === "mode_end" && (this.trackRelatedModes(e), this.end(n)), { next: !0 };
  }
  start(e, n) {
    const s = HM(this.gm, n.mode);
    s && (e in this.gm.actionInstances && te.error(`Action instance "${e}" already exists`), this.gm.actionInstances[e] = s, s.startAction());
  }
  end(e) {
    const n = this.gm.actionInstances[e];
    n instanceof Or ? (n.endAction(), delete this.gm.actionInstances[e]) : console.error(`Wrong action instance for edit event "${e}":`, n);
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
  fire(e, n) {
    this.listeners[n.actionType] || te.error(`Can't find event listener for "${n.actionType}" event type`), this.bus.fireEvent(e, n);
  }
}
const Jf = 5e3;
class XM {
  gm;
  updateStorage;
  autoUpdatesEnabled = !0;
  delayedSourceUpdateMethods;
  constructor(e) {
    this.gm = e, this.updateStorage = Object.fromEntries(Hu(K).map((n) => [n, []])), this.delayedSourceUpdateMethods = Object.fromEntries(
      Hu(K).map((n) => [
        n,
        {
          throttled: this.getDelayedSourceUpdateMethod({
            sourceName: n,
            type: "throttled"
          }),
          debounced: this.getDelayedSourceUpdateMethod({
            sourceName: n,
            type: "debounced"
          })
        }
      ])
    );
  }
  getFeatureId(e) {
    const n = e.properties?.[mn] ?? e.id;
    return n == null && console.warn("Feature id is null or undefined", e), n;
  }
  getDelayedSourceUpdateMethod({
    sourceName: e,
    type: n
  }) {
    if (n === "throttled")
      return Mg(
        () => this.updateSourceActual(e),
        this.gm.options.settings.throttlingDelay,
        { leading: !1, trailing: !0 }
      );
    if (n === "debounced")
      return wl(
        () => this.updateSourceActual(e),
        this.gm.options.settings.throttlingDelay,
        { leading: !0, trailing: !1 }
      );
    throw new Error("Features: getDelayedSourceUpdateMethod: invalid type");
  }
  updateSource({
    sourceName: e,
    diff: n
  }) {
    n && this.updateStorage[e].push(n), this.delayedSourceUpdateMethods[e].throttled(), this.delayedSourceUpdateMethods[e].debounced();
  }
  updateSourceActual(e) {
    const n = this.gm.features.sources[e];
    if (this.autoUpdatesEnabled && n) {
      if (!n.loaded) {
        setTimeout(() => {
          this.updateSourceActual(e);
        }, this.gm.options.settings.throttlingDelay);
        return;
      }
      const s = this.getCombinedDiff(e);
      s && n.updateData(s), this.updateStorage[e].length > 0 && setTimeout(
        () => this.updateSourceActual(e),
        this.gm.options.settings.throttlingDelay
      );
    }
  }
  withAtomicSourcesUpdate(e) {
    try {
      return this.autoUpdatesEnabled = !1, e();
    } finally {
      tt(this.gm.features.sources).forEach((n) => {
        this.updateSource({ sourceName: n });
      }), this.autoUpdatesEnabled = !0;
    }
  }
  getCombinedDiff(e) {
    let n = {
      remove: [],
      add: [],
      update: []
    };
    for (let s = 0; s < Jf && this.updateStorage[e][s] !== void 0; s += 1)
      n = this.mergeGeoJsonDiff(n, this.updateStorage[e][s]);
    return this.updateStorage[e] = this.updateStorage[e].slice(Jf), Object.values(n).find((s) => s.length) ? n : null;
  }
  mergeGeoJsonDiff(e, n) {
    const s = e ?? { add: [], update: [], remove: [] }, u = n ?? { add: [], update: [], remove: [] }, c = new Set(u.remove), f = s.add?.filter((d) => !c.has(this.getFeatureId(d))) || [], h = s.update?.filter((d) => !c.has(this.getFeatureId(d))) || [], p = [];
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
class VM {
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
    this.gm = e, this.updateManager = new XM(e), this.sources = Object.fromEntries(
      Hu(K).map((n) => [n, null])
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
    let n = `feature-${this.featureCounter}`;
    for (; this.featureStore.has(n); )
      this.featureCounter += 1, n = `feature-${this.featureCounter}`;
    return n;
  }
  filteredForEach(e) {
    return (n) => {
      this.featureStore.forEach((s, u, c) => {
        e(s) && n(s, u, c);
      });
    };
  }
  has(e, n) {
    const s = this.featureStore.get(n);
    return !!s && s?.source === this.sources[e];
  }
  get(e, n) {
    const s = this.featureStore.get(n) || null;
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
    const n = this.gm.mapAdapter.addSource(e, {
      type: "FeatureCollection",
      features: []
    });
    if (n)
      return n;
    throw new Error(`Features: failed to create the source: "${e}"`);
  }
  delete(e) {
    let n;
    e instanceof ro ? n = e : n = this.featureStore.get(e) || null, n ? (this.featureStore.delete(n.id), n.delete()) : te.error(`features.delete: feature "${e}" not found`);
  }
  deleteAll() {
    this.featureStore.forEach((e) => {
      e.delete();
    }), this.featureStore.clear();
  }
  getFeatureByMouseEvent({
    event: e,
    sourceNames: n
  }) {
    if (!je(e, { warning: !0 }))
      return null;
    const s = [e.point.x, e.point.y], u = this.gm.mapAdapter.queryFeaturesByScreenCoordinates({
      queryCoordinates: s,
      sourceNames: n
    });
    return u.length ? u[0] : null;
  }
  getFeaturesByGeoJsonBounds({
    geoJson: e,
    sourceNames: n
  }) {
    const s = Jl(e), u = this.gm.mapAdapter.coordBoundsToScreenBounds(s);
    return this.getFeaturesByScreenBounds({ bounds: u, sourceNames: n });
  }
  getFeaturesByScreenBounds({
    bounds: e,
    sourceNames: n
  }) {
    return this.gm.mapAdapter.queryFeaturesByScreenCoordinates({
      queryCoordinates: e,
      sourceNames: n
    });
  }
  createFeature({
    featureId: e,
    shapeGeoJson: n,
    parent: s,
    sourceName: u,
    imported: c
  }) {
    const f = this.sources[u];
    if (!f)
      return te.error("Features.createFeature Missing source for feature creation"), null;
    const h = e ?? n.properties[mn] ?? this.getNewFeatureId(n);
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
      geoJsonShapeFeature: sn(n)
    });
    return this.add(p), !p.temporary && !c && this.fireFeatureCreatedEvent(p), this.featureCounter += 1, p;
  }
  importGeoJson(e, n) {
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
        if (n) {
          const p = BS(h, n);
          p && (h.id = p);
        }
        f = this.importGeoJsonFeature(h);
      }
      f ? (u.addedFeatures.push(f), u.stats.success += 1) : u.stats.failed += 1;
    }), u;
  }
  importGeoJsonFeature(e) {
    const n = this.defaultSourceName, s = this.getFeatureShapeByGeoJson(e);
    return s ? this.createFeature({
      featureId: e.id,
      shapeGeoJson: e,
      sourceName: n,
      imported: !0
    }) : (te.error("features.addGeoJsonFeature: unknown shape", s), null);
  }
  getAll() {
    return this.exportGeoJson();
  }
  exportGeoJson({
    allowedShapes: e,
    idPropertyName: n
  } = { allowedShapes: void 0 }) {
    return this.asGeoJsonFeatureCollection({
      sourceNames: [K.main, ...ht ? [K.standby] : []],
      shapeTypes: e || [...Wr],
      idPropertyName: n
    });
  }
  getSourceGeoJson(e) {
    const n = this.sources[e];
    if (!n)
      throw new Error(`getSourceGeoJson: missing source "${e}"`);
    return n.getGeoJson();
  }
  setSourceGeoJson({ geoJson: e, sourceName: n }) {
    const s = this.sources[n];
    if (!s)
      throw new Error(`setSourceGeoJson: missing source "${n}"`);
    s.setGeoJson(e);
  }
  asGeoJsonFeatureCollection({
    shapeTypes: e,
    sourceNames: n,
    idPropertyName: s
  }) {
    const u = {
      type: "FeatureCollection",
      features: []
    };
    return s ??= mn, n.forEach((c) => {
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
    const n = [], s = e.getGeoJson(), u = "features" in s ? s.features : [s];
    return this.gm.mapAdapter.getSource(e.id).remove(), u.forEach((f) => {
      const h = this.addGeoJsonFeature({
        shapeGeoJson: f,
        defaultSource: !0
      });
      h && n.push(h);
    }), n;
  }
  addGeoJsonFeature({
    shapeGeoJson: e,
    sourceName: n,
    defaultSource: s
  }) {
    let u;
    if (s ? (u = this.defaultSourceName, n && te.warn("features.addGeoJsonFeature: default source is set, sourceName is ignored")) : u = n || null, !u)
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
    return tt(this.sources).forEach((n) => {
      tt(this.gm.options.layerStyles).forEach((s) => {
        this.gm.options.layerStyles[s][n].forEach((c) => {
          const f = this.createGenericLayer({
            sourceName: n,
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
    shapeNames: n,
    partialStyle: s
  }) {
    const u = this.getGenericLayerName({ sourceName: e, shapeNames: n, partialStyle: s });
    if (!u)
      throw new Error(`Can't create a layer, for ${{ sourceName: e, shapeNames: n, partialStyle: s }}`);
    const c = {
      ...s,
      id: u,
      source: e,
      filter: ["in", ["get", `${It}shape`], ["literal", n]]
    };
    return this.gm.mapAdapter.addLayer(c);
  }
  getGenericLayerName({
    sourceName: e,
    shapeNames: n,
    partialStyle: s
  }) {
    const c = n.length === 1 ? n[0] : "mixed", f = (p) => `${e}-${c}__${s.type}-layer-${p}`;
    let h = null;
    for (let p = 0; p < 100; p += 1) {
      const d = f(p);
      if (!this.gm.mapAdapter.getLayer(d))
        return h = d, h;
    }
    return null;
  }
  getFeatureShapeByGeoJson(e) {
    const n = {
      Point: "marker",
      LineString: "line",
      Polygon: "polygon",
      MultiPolygon: "polygon"
    }, s = e.properties;
    return s?.shape && Wr.includes(s?.shape) ? s?.shape : n[e.geometry.type] || null;
  }
  createMarkerFeature({
    parentFeature: e,
    coordinate: n,
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
          coordinates: n
        },
        properties: {
          [`${It}shape`]: `${s}_marker`
        }
      }
    });
  }
  updateMarkerFeaturePosition(e, n) {
    e.updateGeoJsonGeometry({
      type: "Point",
      coordinates: n
    });
  }
  fireFeatureCreatedEvent(e) {
    if (Ar(e.shape, Wr)) {
      const n = {
        name: `${se}:draw:feature_created`,
        level: "system",
        actionType: "draw",
        mode: e.shape,
        action: "feature_created",
        featureData: e
      };
      this.gm.events.fire(`${se}:draw`, n);
    }
  }
}
class jM {
  getEuclideanNearestLngLat(e, n) {
    const s = this.project(n);
    let u = [0, 0], c = 1 / 0;
    return Hl(e, (f) => {
      const h = this.project(f.start.coordinate), p = this.project(f.end.coordinate), d = Pk(
        h,
        p,
        s
      ), v = Ga(s, d);
      v < c && (c = v, u = [d[0], d[1]]);
    }), this.unproject(u);
  }
  getDistance(e, n) {
    return Xd(e, n, { units: "meters" });
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
    layerId: n,
    options: s
  }) {
    super(), this.gm = e, this.mapInstance = this.gm.mapAdapter.mapInstance, s ? this.layerInstance = this.createLayer(s) : this.layerInstance = this.mapInstance.getLayer(n) || null;
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
    let n = this.mapInstance.getLayer(e.id);
    return n ? te.warn(`Layer "${e.id}" already exists, skipping`) : (this.mapInstance.addLayer(e), n = this.mapInstance.getLayer(e.id)), n ?? null;
  }
  remove() {
    this.isInstanceAvailable() && this.mapInstance.removeLayer(this.id), this.layerInstance = null;
  }
}
class KM extends Fl {
  markerInstance;
  constructor({
    mapInstance: e,
    options: n,
    lngLat: s
  }) {
    super(), this.markerInstance = new ll.Marker(n).setLngLat(s).addTo(e);
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
    options: n,
    lngLat: s
  }) {
    super(), this.popupInstance = new ll.Popup(n).addTo(e), s && this.setLngLat(s);
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
class $f extends VM {
  gm;
  mapInstance;
  sourceInstance;
  constructor({ gm: e, geoJson: n, sourceId: s }) {
    super(), this.gm = e, this.mapInstance = this.gm.mapAdapter.mapInstance, n ? this.sourceInstance = this.createSource({ geoJson: n, sourceId: s }) : this.sourceInstance = this.mapInstance.getSource(s) || null;
  }
  get id() {
    if (!this.isInstanceAvailable())
      throw new Error("Source instance is not available");
    return this.sourceInstance.id;
  }
  get loaded() {
    return !!this.sourceInstance?.loaded();
  }
  async waitForLoad() {
    const e = new Promise((n) => {
      if (this.loaded) {
        n();
        return;
      }
      const s = (u) => {
        u.sourceId !== this.id || u.sourceId !== this.id || this.loaded && (this.mapInstance.off("data", s), n());
      };
      this.mapInstance.on("data", s);
    });
    await Xu(e, "Unable to wait for source to load");
  }
  createSource({ geoJson: e, sourceId: n }) {
    let s = this.mapInstance.getSource(n);
    return s ? te.warn(`Source "${s.id}" already exists, skipping`) : (this.mapInstance.addSource(n, {
      type: "geojson",
      data: e,
      promoteId: mn
    }), s = this.mapInstance.getSource(n)), s ?? null;
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
    const n = this.convertUniversalDiffToMlDiff(e);
    this.sourceInstance.updateData(n);
  }
  convertUniversalDiffToMlDiff(e) {
    return {
      add: e.add,
      update: e.update?.map(this.convertFeatureToMlUpdateDiff.bind(this)),
      remove: e.remove
    };
  }
  convertFeatureToMlUpdateDiff(e) {
    const n = [], s = [];
    return Object.entries(e.properties || {}).forEach(([u, c]) => {
      c === void 0 ? s.push(u) : n.push({ key: u, value: c });
    }), {
      id: e.properties?.[mn],
      newGeometry: e.geometry,
      addOrUpdateProperties: n,
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
  constructor(e, n) {
    super(), this.gm = n, this.mapInstance = e;
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
  async loadImage({ id: e, image: n }) {
    if (!this.mapInstance.hasImage(e)) {
      const s = await this.mapInstance.loadImage(n);
      this.mapInstance.addImage(e, s.data);
    }
  }
  getBounds() {
    return this.mapInstance.getBounds().toArray();
  }
  fitBounds(e, n) {
    this.mapInstance.fitBounds(e, n);
  }
  setCursor(e) {
    this.mapInstance.getCanvas().style.cursor = e;
  }
  disableMapInteractions(e) {
    e.forEach((n) => {
      this.mapInstance[n].disable();
    });
  }
  enableMapInteractions(e) {
    e.forEach((n) => {
      this.mapInstance[n].enable();
    });
  }
  setDragPan(e) {
    e ? this.mapInstance.dragPan.enable() : this.mapInstance.dragPan.disable();
  }
  queryFeaturesByScreenCoordinates({
    queryCoordinates: e = void 0,
    sourceNames: n
  }) {
    return _h(
      this.mapInstance.queryRenderedFeatures(e).map((u) => ({
        featureId: u.properties[mn],
        featureSourceName: u.source
      })),
      Wi
    ).map(({ featureId: u, featureSourceName: c }) => u === void 0 || !n.includes(c) ? null : this.gm.features.get(c, u) || null).filter((u) => !!u);
  }
  queryGeoJsonFeatures({
    queryCoordinates: e = void 0,
    sourceNames: n
  }) {
    const s = (c, f) => c?.id === f?.id;
    return _h(
      this.mapInstance.queryRenderedFeatures(e).map((c) => {
        const f = this.convertToGeoJsonImportFeature(c);
        return f ? {
          id: c.properties[mn],
          sourceName: c.source,
          geoJson: f
        } : null;
      }),
      s
    ).filter((c) => !!c && c.id !== void 0 && c.geoJson && n.includes(c.sourceName));
  }
  convertToGeoJsonImportFeature(e) {
    const n = e.properties[mn];
    return n === void 0 || e.geometry.type === "GeometryCollection" ? null : {
      id: n,
      type: "Feature",
      properties: e.properties,
      geometry: e.geometry
    };
  }
  addSource(e, n) {
    return new $f({ gm: this.gm, sourceId: e, geoJson: n });
  }
  getSource(e) {
    return new $f({ gm: this.gm, sourceId: e });
  }
  addLayer(e) {
    const n = e.id;
    return new xu({ gm: this.gm, layerId: n, options: e });
  }
  getLayer(e) {
    return this.mapInstance.getLayer(e) ? new xu({ gm: this.gm, layerId: e }) : null;
  }
  removeLayer(e) {
    const n = this.getLayer(e);
    n && n.remove();
  }
  eachLayer(e) {
    this.mapInstance.getStyle().layers.forEach((n) => {
      e(new xu({ gm: this.gm, layerId: n.id }));
    });
  }
  createDomMarker(e, n) {
    return new KM({
      mapInstance: this.mapInstance,
      options: e,
      lngLat: n
    });
  }
  createPopup(e, n) {
    return new eI({
      mapInstance: this.mapInstance,
      options: e,
      lngLat: n
    });
  }
  project(e) {
    const n = this.mapInstance.project(e);
    return [n.x, n.y];
  }
  unproject(e) {
    const n = this.mapInstance.unproject(e);
    return [n.lng, n.lat];
  }
  coordBoundsToScreenBounds(e) {
    const n = new ll.LngLatBounds(e), s = this.project(n.getSouthWest().toArray()), u = this.project(n.getNorthEast().toArray());
    return [s, u];
  }
  fire(e, n) {
    this.mapInstance.fire(e, n);
  }
  on(e, n, s) {
    if (typeof n == "string" && s && wu(e))
      this.mapInstance.on(e, n, s);
    else if (typeof n == "function")
      this.mapInstance.on(e, n);
    else
      throw new Error("Invalid arguments passed to 'on' method");
  }
  once(e, n, s) {
    if (typeof n == "string" && s && wu(e))
      this.mapInstance.once(e, n, s);
    else if (typeof n == "function")
      this.mapInstance.once(e, n);
    else
      throw new Error("Invalid arguments passed to 'once' method.");
  }
  off(e, n, s) {
    if (typeof n == "string" && s && wu(e))
      this.mapInstance.off(e, n, s);
    else if (typeof n == "function")
      this.mapInstance.off(e, n);
    else
      throw new Error("Invalid arguments passed to 'off' method");
  }
}
const rI = (t, e) => new nI(e, t), iI = (t, e) => {
  if (!Array.isArray(t) || !Array.isArray(e))
    return;
  if (e.some((u) => !Xk(u))) {
    te.warn("Wrong partial layer detected for layer styles");
    return;
  }
  const n = wE(t, "type"), s = oE(e, "type");
  if (Object.values(s).some((u) => u > 1))
    throw new Error(
      'Multiple layers for the same shape are detected. Use "useDefaultLayers: false" and define layers manually.'
    );
  return e.forEach((u) => {
    n[u.type] ? kE(n[u.type], u) : n[u.type] = sn(u);
  }), vE(n);
};
class sI {
  gm;
  settings;
  controls;
  layerStyles;
  constructor(e, n) {
    this.gm = e;
    const s = this.getMergedOptions(n);
    this.settings = s.settings, this.controls = s.controls, this.layerStyles = s.layerStyles;
  }
  getMergedOptions(e = {}) {
    const n = Nu();
    return typeof e.settings?.controlsUiEnabledByDefault == "boolean" && (n.settings.controlsUiEnabledByDefault = e.settings.controlsUiEnabledByDefault), BE(n), gE(n, e, iI);
  }
  enableMode(e, n) {
    const s = this.isModeEnabled(e, n), u = this.isModeAvailable(e, n);
    if (u || te.warn(`Unable to enable mode, "${e}:${n}" is not available`), s || !u)
      return;
    const f = this.controls[e][n];
    f ? (f.active = !0, this.fireModeEvent(e, n, "mode_start"), this.fireControlEvent(e, n, "on"), this.fireModeEvent(e, n, "mode_started")) : te.error("Can't find control section for", e, n);
  }
  disableMode(e, n) {
    const s = this.isModeEnabled(e, n), u = this.isModeAvailable(e, n);
    if (!s || !u)
      return;
    const f = this.controls[e][n];
    f ? (f.active = !1, this.fireModeEvent(e, n, "mode_end"), this.fireControlEvent(e, n, "off"), this.fireModeEvent(e, n, "mode_ended")) : te.error("Can't find control section for", e, n);
  }
  syncModeState(e, n) {
    const u = this.controls[e][n], c = this.isModeAvailable(e, n);
    u && (c ? u.active ? this.enableMode(e, n) : this.disableMode(e, n) : (console.log(`Not available mode: ${e}:${n}`), u.active = !1, u.uiEnabled = !1));
  }
  toggleMode(e, n) {
    this.isModeEnabled(e, n) ? this.disableMode(e, n) : this.enableMode(e, n);
  }
  isModeEnabled(e, n) {
    return !!Object.entries(this.gm.actionInstances).find(([s, u]) => s === `${e}__${n}` && u);
  }
  isModeAvailable(e, n) {
    return e === "draw" && Ar(n, Nd) ? !!this.gm.drawClassMap[n] : e === "edit" && Ar(n, Od) ? !!this.gm.editClassMap[n] : e === "helper" && Ar(n, Pd) ? !!this.gm.helperClassMap[n] : !1;
  }
  getControlOptions({
    modeType: e,
    modeName: n
  }) {
    return e && n && this.controls[e][n] || null;
  }
  fireModeEvent(e, n, s) {
    const u = {
      name: `${se}:${n}:mode`,
      level: "system",
      actionType: e,
      mode: n,
      action: s
    };
    nc(u) && (jl(u) ? this.gm.events.fire(`${se}:${e}`, u) : es(u) ? this.gm.events.fire(`${se}:${e}`, u) : Vl(u) ? this.gm.events.fire(`${se}:${e}`, u) : te.warn("Unknown mode event: ", u));
  }
  fireControlEvent(e, n, s) {
    const u = {
      name: `${se}:control:switch`,
      level: "system",
      actionType: "control",
      section: e,
      target: n,
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
  enable({ lngLat: e, customMarker: n, invisibleMarker: s } = {
    lngLat: [0, 0],
    customMarker: void 0,
    invisibleMarker: !1
  }) {
    if (!qk()) {
      if (n && s)
        throw new Error("MarkerPointer: customMarker and invisibleMarker can't be used together");
      if (this.marker)
        throw new Error("MarkerPointer: marker is already enabled");
      this.gm.events.bus.attachEvents(this.eventHandlers), s ? this.marker = this.createInvisibleMarker(e || [0, 0]) : this.marker = n || this.createMarker(e || [0, 0]), this.gm.getActiveDrawModes().length && this.gm.mapAdapter.setCursor("crosshair");
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
    const n = document.createElement("div");
    return n.style.width = "0px", n.style.height = "0px", this.gm.mapAdapter.createDomMarker(
      {
        anchor: "center",
        element: n
      },
      e
    );
  }
  onMouseMove(e) {
    if (je(e, { warning: !0 }) && this.marker)
      if (this.snapping && this.snappingHelper) {
        const n = [e.point.x, e.point.y], s = this.snappingHelper.getSnappedLngLat(e.lngLat.toArray(), n);
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
  const n = [];
  if (Pr(t, (u) => {
    n.push(u.coordinates);
  }), n.length < 2)
    throw new Error("Must have at least 2 geometries");
  const s = dM(n[0], ...n.slice(1));
  return s.length === 0 ? null : s.length === 1 ? or(s[0], e.properties) : Gl(s, e.properties);
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
    const n = this.getAllowedFeatureByMouseEvent({
      event: e,
      sourceNames: [K.temporary]
    });
    if (n) {
      const s = this.features.findIndex((u) => u === n);
      return s > -1 && this.features.splice(s, 1), n.changeSource({ sourceName: K.main, atomic: !0 }), !0;
    }
    return !1;
  }
  getAllowedFeatureByMouseEvent({
    event: e,
    sourceNames: n
  }) {
    const s = this.getFeatureByMouseEvent({ event: e, sourceNames: n });
    return s && this.allowedShapeTypes.includes(s.shape) ? s : null;
  }
  isFeatureAllowedToGroup(e) {
    if (!this.allowedShapeTypes.includes(e.shape))
      return !1;
    if (this.features.length === 0)
      return !0;
    const n = e.getGeoJson();
    return this.features.every(
      (s) => Ip(s.getGeoJson(), n)
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
    let n = null;
    if (this.mode === "union" ? n = uI(e) : this.mode === "difference" && (n = Np(e)), n) {
      const s = this.gm.features.createFeature({
        shapeGeoJson: {
          ...n,
          properties: {
            ...n.properties,
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
  constructor(e, n = {}) {
    this.options = this.initCoreOptions(n), this.events = this.initCoreEvents(), this.features = this.initCoreFeatures(), this.control = this.initCoreControls(), this.markerPointer = this.initMarkerPointer();
    const s = Object.assign(e, { gm: this });
    this.mapAdapterInstance = rI(this, s), this.waitForBaseMap().then(this.init.bind(this));
  }
  get drawClassMap() {
    return Vu;
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
    return new Promise((n) => {
      (async () => {
        e ? this.control.createControls(e) : this.mapAdapter.addControl(this.control), await this.onMapLoad(), n();
      })().then();
    });
  }
  async waitForBaseMap() {
    const e = this.mapAdapter.mapInstance;
    if (!Jk(e)) {
      te.error('Map instance does not have a "once" method', e);
      return;
    }
    return this.mapAdapter.isLoaded() || await Xu(
      new Promise((n) => {
        e.once("load", n);
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
    return await Xu(
      new Promise((n) => {
        e.once(`${ot}:loaded`, n);
      }),
      "waitForGeomanLoaded failed"
    ), this;
  }
  async init() {
    this.features.init(), await this.addControls();
  }
  async destroy({ removeSources: e } = { removeSources: !1 }) {
    if (await this.waitForGeomanLoaded(), this.removeControls(), this.events.bus.detachAllEvents(), e)
      for (const n of Object.values(this.features.sources))
        n && n.remove();
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
      image: Am
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
      const [n, s] = e.split("__");
      O2(n) && G2(s) && this.options.disableMode(n, s);
    });
  }
  getActiveDrawModes() {
    return tt(this.actionInstances).map((e) => {
      const n = this.actionInstances[e];
      return n instanceof dr ? n.mode : null;
    }).filter((e) => e !== null);
  }
  getActiveEditModes() {
    return tt(this.actionInstances).map((e) => {
      const n = this.actionInstances[e];
      return n instanceof ts ? n.mode : null;
    }).filter((e) => e !== null);
  }
  getActiveHelperModes() {
    return tt(this.actionInstances).map((e) => {
      const n = this.actionInstances[e];
      return n instanceof Or ? n.mode : null;
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
  createSvgMarkerElement(e, n = void 0) {
    const s = this.options.settings.markerIcons;
    s[e] || te.error(`createMarkerElement: marker type "${e}" not found`);
    const u = document.createElement("div");
    u.classList.add("marker-wrapper"), u.style.lineHeight = "0", u.innerHTML = s[e] || "NO_ICON";
    const c = u.firstChild;
    if (typeof c != "object")
      throw te.error(`createMarkerElement: no icon "${e}" found`), new Error(`No icon "${e}" found`);
    return n && Object.assign(c.style, n), u;
  }
  enableMode(e, n) {
    this.options.enableMode(e, n);
  }
  disableMode(e, n) {
    this.options.disableMode(e, n);
  }
  toggleMode(e, n) {
    this.options.toggleMode(e, n);
  }
  isModeEnabled(e, n) {
    return this.options.isModeEnabled(e, n);
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
const AI = async (t, e) => {
  const n = new lI(t, e);
  return await n.waitForGeomanLoaded(), n;
};
export {
  Wl as BaseAction,
  Fl as BaseDomMarker,
  tc as BaseDrag,
  dr as BaseDraw,
  ts as BaseEdit,
  LI as BaseGroupEdit,
  Or as BaseHelper,
  ZM as BaseLayer,
  jM as BaseMapAdapter,
  QM as BasePopup,
  VM as BaseSource,
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
  Ql as LineDrawer,
  aI as MarkerPointer,
  Wr as SHAPE_NAMES,
  K as SOURCES,
  zM as ShapeMarkersHelper,
  gI as boundsContains,
  Tk as boundsToBBox,
  dI as calculatePerimeter,
  wt as controlIcons,
  pI as convertToLineStringFeatureCollection,
  oi as convertToThrottled,
  AI as createGeomanInstance,
  MI as customShapeRectangle,
  SI as customShapeTriangle,
  sv as defaultLayerStyles,
  Vu as drawClassMap,
  na as eachCoordinateWithPath,
  Hl as eachSegmentWithPath,
  ol as editClassMap,
  Ak as findCoordinateWithPath,
  kI as formatArea,
  wI as formatDistance,
  Zd as geoJsonPointToLngLat,
  Ga as getEuclideanDistance,
  Pk as getEuclideanSegmentNearestPoint,
  lu as getGeoJsonCoordinatesCount,
  Kd as getGeoJsonFirstPoint,
  uu as getLngLatDiff,
  ul as helperClassMap,
  Ar as includesWithType,
  _I as isActionType,
  yI as isBaseMapEventName,
  R2 as isDrawModeName,
  D2 as isEditModeName,
  Vh as isEqualPosition,
  Tf as isGeoJsonFeatureInPolygon,
  Ad as isGmControlEvent,
  jl as isGmDrawEvent,
  mI as isGmDrawFreehandDrawerEvent,
  tp as isGmDrawLineDrawerEvent,
  ep as isGmDrawShapeEvent,
  es as isGmEditEvent,
  kn as isGmEvent,
  II as isGmFeatureBeforeCreateEvent,
  bI as isGmFeatureBeforeUpdateEvent,
  Vl as isGmHelperEvent,
  nc as isGmModeEvent,
  F2 as isHelperModeName,
  je as isMapPointerEvent,
  Jk as isMapWithOnceMethod,
  G2 as isModeName,
  Yl as isMultiPolygonFeature,
  Mp as isNonEmptyArray,
  vI as isPointerEventName,
  ql as isPolygonFeature,
  Gk as lngLatToGeoJsonPoint,
  iI as mergeByTypeCustomizer,
  xI as moveFeatureData,
  RS as moveGeoJson,
  zS as toMod,
  fI as twoCoordsToLineString,
  tt as typedKeys
};
//# sourceMappingURL=maplibre-geoman.es.js.map
