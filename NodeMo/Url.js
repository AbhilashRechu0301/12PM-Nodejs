const url = require("url");

const data = url.parse("https://www.amazon.de/-/en/Privacy-Windows-Drilling-Klemmfix-Mounting/dp/B09JCCH352/?_encoding=UTF8&pd_rd_w=Rq9yJ&content-id=amzn1.sym.70472a85-b71b-48a7-bbf8-79ece2a5355a&pf_rd_p=70472a85-b71b-48a7-bbf8-79ece2a5355a&pf_rd_r=6V315MVTFTM3T4BFQXSR&pd_rd_wg=VT4Bw&pd_rd_r=e857a8b2-11e7-4f52-9a8a-c17fa1ca6611&ref_=pd_gw_ci_mcx_mr_hp_atf_m")

console.log(data.href.toString())