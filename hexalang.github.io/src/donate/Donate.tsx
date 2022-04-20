import { Header } from '../home/Header'
import { Footer } from '../home/Footer'
import { useEffect } from 'react'
import liberapay from './liberapay.svg'
import { StyledDonate } from './StyledDonate'

export const Donate = () => {
	useEffect(() => {
		document.title = 'Donate to Hexa'
	}, [])

	return <StyledDonate>
		<div className="page shadow">
			<Header compact={false} />

			<div className="container flex-column pad">
				<div className="card donate-card">
					<div className="card-header">
						<p>To accelerate closing of issues and implementation of new/requested features <strong>you</strong> can become a <i>collaborator</i> or make some donation here:</p>
					</div>
				</div>
				{false && `
            <div className="donate-section-header">
                Payment processors
            </div>
            <div className="flex-row">
                <div className="donate-card-container col-1 col-sm-2">
                    <div className="card donate-card">
                        <div className="card-header">
                            PayPal — USD
                        </div>
                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=______________&source=url">
                        <div className="card-body">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbIAAABmCAMAAACZdeSjAAABL1BMVEUAAAAea6sWm9ckOoAWm9clO4AXm9clO4AkOoAkO4EXm9cWm9glO4AWmtYlO4AXm9gWm9ckO4AkO4AkOoAkOoAkO4AXm9gXm9gXm9gkOn8kOoAWm9cXm9ckO4AkOoAWmtUlO4AkO4AWm9ckO4AWm9clO4AWm9gWm9gkOn8kOoAlO4AkO4AkO4AXm9gWm9cWm9cXm9ckOoAkOoAXm9clO4AkO4AXm9gkOoAlO4AkO4AWm9cXm9clO4AWm9cXm9cXm9cXm9gXm9clO4AlO4AXm9glO4AXm9gWntsaerglO4AXm9ciLWUlPIMWntslPYYkOn8mPokWod8Xo+IWmdUXpOUWoN0kOH0Yp+gjOXkhKGAiJFwdUIwhL2kWkc0bbKkdXpsiNXQiMm4YhcEgRoUkNHgBCEFzAAAASXRSTlMAAvz77Ow556z4HecdCziZS9y2gWLNxhfOEzEwI/JAEgnjq49nF/TZDb6dcUjgs6FfVphvasa5eCbUdlZOQY8piH8rIb6k1Pj+zFHtTwAAFSJJREFUeNrsm2lbGjEQgGcSKaJi5VREVLyPivbQarXWWrVPaHZZVo4e9LDt//8NFS1mExbYuBTs8/D2Q1tW1ui7M5lMAigsxw4o6wBlmYNIYngjFp/dhzoIA/rGWMLirCMFxjk3TctiwcRwfB8BcGCtT+CwFaLMA/QWdi2O0/XNMRjQFxCmJWEe1THTCmxMD9JjP0B4YgllOt64lYmlBs76waZJ2X2gjJmJcRjQezY4ZfeEmpn4IM56z66kTBczDgN6zHzQjzJKQ09gQG85zTBf8MA7GNBDEI4oo8wH1IwOZrNegvDSpMwXlB8NSpAegvDMCvlVtjsw1ksw6jfKGGVPBmHWQ5Yj3Lcy69lAWc9A2M8w38r4wRoM6BEIsxZlvuGnMKA9D6DDKNf5g5qxZyA8491Q9gIG9AiE9a4oiw2irGdg1l1ZgRU6wwp+lWFrHtoxBcSeDrb13fddO4zCRlsa2v5RlP1Xp0u6bA3bbElT1iLKKh/bUqlU7rxR8+U9lU2Pt2Z/DB/SUa70o9bMTIa7/YjNOO8/51AmCkY1en7UPrSnVqtdXf34WCncf9PsXTRDWxOMJKKLT8fwQUib2VshrRndmsodH450TRrCxCgR5JMjjkuLrh3GCvvxwSO1qx8Vas7eZ6jzuxZrA+emZfJMNJ7qv7Rwsppvg2EUS7axklua7M5QEc6qRNyeVF+BIOoeZRURY16sFU7vM9Lp9sUqrcOYaWZjy9BXEB4ZhLRR9jcYbHvrZK4LzhDCF2VJ2Y64mDrg1C3IKh90+PQxOXGPcT31tIqnlFuRI+gnCDvioW9rziitTnTj+70ZMojjtvnXjtnErcNYn8n0lP0yjOOw9uMV89h4oYzzl/0tHk9sSVkbaWXjLaBvZa8NZ5AZo28cHUaTupaLeso+fy9f2meTuuPS2faxYtBPFook7w2Sr/p2hrAkTWXFqbC4GOduU1mFXelF2bfyJSklNeMMDzSU0f6e5LoQT72HQNvxHWfHtlNZac9ZMLpOZYVCTUtZ7Wf+khB7W2+kY1mdXhkPjkHfmFvxIkvksRHwSa7oVGYfd8pNBVap6VUf+cub+D0E1Nn2CRU0lFFrEfoEwiOSJxrOSo99hhmuynPZkuNShLvW+B/18uJ340ZZeVWjwkWRlD1BWaZfpT7CjkGIVphN+nM2KX03uWAMMNco+62n7Kdxeft07egoi2meE+L9OkuOcFIieQ1IcQnQV8Go3G/SmZvclf3Qy4tf87fKiknQ4LwpKZs3cM7dRkWt4b4pW6gSJY6KN5QNI0/cMuO2P2VLcl5cDYtLL0zXgrFwpZcXy5eNu8/otKs4lR+UzHr0mt1INsMtt5oxMQ/9IZyUl2WXxtBZbm8vl9zaGjJKzdKI4ajK9UGlYCzmsFNuKrCaXr1oXDaGqpEZU3JSpiww3ZB5Gj+nvHkyy76DfoAws2UQychQuiHzzc42MYiqLD/kZzJDyJWkGv/YcbPhLhSMn74Yl45qFL13GJUgOgcH4xGuKiuEpvuSGRHSciARe8E5kEdCqJA6A+ijwzhVlDqMjplxLeHeYdQrGH8KZaWc95E+5VRW9lLa4DsNcqqWjNPQDxAOS7Ky4ltEx87mm1GDdFXZzKjUYTQmxM3GAu4dxt86zarrIBNRlkTvHUZFmfUUUCoozQeiDOCtTWQhh9JQlev+lb1+T4gzDb8BbFya9t9hFEF2WzKi56GqSVlNe6cPJTECbBcVZWlwgJjOe1OGAKi9b0CKF2HAjh3GTxodYWFML8oSkjLKs0pDao2q5UdgHxQQe3JKZMogcnExBxIjSmYk+ZXJppGi9M/2y0C5w5gElHKPW4fxSn9NJpThvT4LQM1dpYRPqcr4QcrlQMtaHRQveULP79yQHELlJHZQZkh9oIaicB10vIQtRrUgdxgfA/ruMKppUT8xIozLq3hqnQO2jzJzHeUfb35281k0UWd9eDH+ryY6hPSKlPiIva18wciQoqy8pww1/Oj549xUnbOFk6W0zr4BKT8HFLsfeh1G910X6YfZA/S6Ja1WH+q5uvGm7seG42mD1NFwkJqWxevU/w5FYtP1K++Gs0FB9PQ2ZDfEi9lg4gW2KmOjjjdnE7O3BaPcYSSNDTHhtEha9oURIDyxMEqKVbtYLhbLdqlqrKyepG9UL4w62Evf7RtIyqSCMeiqjH3Uncj0GzUIL6VVPKUsDqh0jdXzBJviK1KxA9PkjAoY41ZocRnw3GL8DmZF8bZnwLgDa7FVp9rkzjdHUjcFoVLjq/thuKMqsxuBgQBzry5s28gTQd4wSu8fzwFuVw0H1T282zdwQkb8dxhFfZ/Py8qK3jdkNyy59xEaVytKiyrjmm0MHF9kTU7vLgvtVuId1NeatPEKNXexcZCM3n0vSkP74MJ+pv4MU3HD7DIAwnZVrj7Ia/npEnOP+hUIsDRql0WQitMcpYsZSF6/jzimyDBg074BMbbCjmeqxRnGKw1jQplewwrVzwIE1pRfX0DJnDw431ibrJvimtqHPA0095IRjhTB5mbzQHF+3TVZ45ktt6u2pG4U4ow6lRlbc42UeWbLWVVIs6fSWwaReiroVjAW9zp2GCveOoyfrnfJmgfieQW5FmRULgfVT+SYrEVDK55pcwDBPKAFlw94rEU4lU2i226Q4nV9vv7y5Kpc4xenUA6yxyJxKg2tnRVbEiaLvZBFV08A1X0Ddb/0vEWUeVH2ufatMY8JRAx3ZF8VMixXu3FGVRm33RFc5NIlFS79726KXDSVHvQYqMyG5FDkgdPbA2rvlc2wHEjLwcOmhbR9CFj/c1zOS8ZUZ8q7/rYSMSlFWdVRMM4ntM8wihD79VXUis6nyytHjDIlGpxshppWZZFlMQe2QX3feOMoWdMDoJCKqH3qG9sIE2qH8QSci6vn70UQynlxWwkxFZcJsEOHMaXbYRTC/nR3LUptG1F0d2VDDKbYDn5QCJjwdIBQynMglPBIW1xJWMLGTTshbdL//4Zaxvho764irUOnMWcmMxnLlmUd7u695z70+10dNhay4eTJ2AO6bbzBsex2zVVXvEXGuyMvYAoJcJ1Zw98nsWoCuhL3FmLOdnziMOZCQfTxvqcaWcBpsF6aVR+kyr39jyiMM4wj+3FtojCCsL/uOiamYay+MpPYx6eLsr0+t9HB1PrBq9qC66q9UpnD3lyZ64hKcEDaInk/qLBkZ2aN+PduxpKt+kFrmaQK485JroOlnaPJ0qYPS5JuA2dHnoYxEUBPWWuVc+QN9ELK9gAK4/s/fvt898EJfHvNulhKrvTtEcqu7Qe4Dfjv0pyKwPHL6Fz7bgyFA7IxYbYrWYrl9u5smk5T64cUlZYgW3YXrZbnwx0kAlOgxtc1rr3T8hzyGXiGPe/jyJf8yArJfiRRGEHX+79///jppgW2yJcexRsZNg5LaxYRFmMvXDDOlhdstfa7cZXO50czDReUSG46+SNBjZ2kAhZc8sGD/rFx5wutE/oqRs7hZuL9XttJba6Oi6YPNukWSfMGwptMkpLukCPj/fuO4f31+ePdJ6flgDCKldnk84xpL0B8/zwPXA/ldXvvYON8eu1ibuqZ5WqMc4rxficdWTKrpM2O+Pf8IbRKJa1hhOOncfyF75R2cqfzE7MjS6+FrzHOh5i2IiuMR6H7VozoU+rI85//lPDx7u7XDx9uHO+eL3BmqlZhPJ2dkCwExIGSTA3QLcxxiJJ7qg1ac/1rOqRB6HcMH31B/fsLNOfVhVHZ6cvgUkfIsigcbz+HSx0peUKhbOT+UidSkQrjcl7v4//zd2ez8mS0HMcBVxEe6y8jySlbb2RMbKw4fb8skNXyxS7yGJyx6juXUjZ6SIZ16cIKPk3cSetqG5d65BsxVppnnPOXNI+9ssTvW9ZZ8I9NbPmCVvj0ZIgZ8nWzNPuhWtlfv/r1GwUJFoQkdR/wqC0TxpZ10r6dnqMpp5pLoj1MauJsl6yMxX6WDXE2ZnJB22gLg1WxMtZdTKmClRphXMrH8FKLhA6VDtfIG2BnnI9tyLuFOp8IMLKZ5JQZTBuxrEYtsDEOmuHTcbpF0iRcIfSW5Z5qiVKS3sEN4qJKI7n4fmIrE6J5Wb4PyXwh3xsIySQJRxVG6jB6l5xmP1TKfh2MsuZbA8aqUBhjYNn2u2k0ylBll4IufiG3kPf9LTiFwUHqh1rWi9AuB4UxFqLlbd3HUPPjRJXcYVytVZRpbf/U8/G3qMIIvNLX6tx+MKMMXWsG5RcXCJVj1KdGfhurQuTcTix+tvym3TBlb1xlwC62SPK3gAK1lYQW5virx6y/tsm1w+qt4STJJloPCuOlTxrbcTF7+kj684eBlsWVEWaAjXiyOkBnO7Y/ohJTzBHG53AoMKcrS0rRZZGCCjMpF6jFrov3ne3e+FlZ3f6gEgNIZUsKY45xJW8gpPq7NSiMYdz+eVO/MWcMidpkDqOthlASuhMkrNp6aH4EHFzoSQq+J2X+y2Qmr6XovudpspGNymXkS6o7LqPueJ4vLo/m+5c6UXFUyUntYJdO7KTGNHuccMIa4KF+bfrnozMAY4l1D9w7+qCtRhhuR9Eo7H4frvvLWnFtMKAMvFblaPCK2hPnNVeZbS0nwyhlwmkC7bZfT22+3pkJPxtsjJSKIF5VKYP6z3tW3RRR6dQ3tqWl7M4zpUw4zg4zQ61BY+KFd6/6eH4wtYHH2mEtlaxMP4JpQ779BeL15OVzjGbVtOYiKRKgQa/wNieBt0c/5E57Nxs9nxIZwj/SUnYivat1ibyB5CIwDodRS9m1scMohPOLaQPcGi3tsl9NR87xgmNBJlBT4FfBYdSPrcDkz++haOobojjpkRCBVxgzcmyJ6Mg5LWVHspT40IAyKb8MC0X2Q8at/cmMMlFvrp4wQ5xjH0WKBNDOyjtwpZsLxyLayc80dhkncRtZXYtE40LZP2amUO9PKvwIoCUDEHrKEO+FU9IMITapf+K8pqUscBhvjHaxelDdZfrENJr/jZ0AztkiWcE2tGpzWjYaOgy+2pPzsYVKhSJd9ZmM/xJ1JXyKbeiTDAVWpgmlQdlJT2FESIeJAVAYtQ5jYiPrurbO5QhLzBgWOdx+hE9xOVHpMyhq1Lg1KPA4Z0BEO00Y7jPOaQusLwy7oDmT9UPdXgaBhCqMpyuym4CmF2Q/DOUq8OX4vniZG6SBAZoeVrloQAe0SO6SAlJ/ZCBwjuMq8P6QxdAaxlw8ZW89QbV9RjGyIiTv4+eewpgTQsjFBZxmP6j3cRdFmQDqdafVbKYqZ6cDDrgskC5pK2s68MoKyp+oRWCGGpz45A9rsyxkagAiKzkda4jFUUtQjZ5e6jxppvFf857DKPuRpYlw9sOKUBijPPlmu4um7zn1ldLkfS8AH2yeMfE+8jzBlBBypaqZrRXc2C0Sa3KymdYTDx0NCJ94fHtYi/bpKp21l2S9bU8yDuFE37DxY5TCqKfsxk/tv+xi8mwnNzPPv6anazlzRcOnWKhdFfZzXAEPomi4Fl/Y7y5oHwLeXauq2u3YCu1TSvBXOuMI8qmz4FJxz2YQ7BHhmMOqacMGL0QojKCMlFuePtakZg4hEOFTPNZeKPf4XRYXsvw8DRsjWyQt9dcvi7ThEFExDZ/iUCalB0I4W2O41PJZijIGhRGjM2nBfHXBjlAY9YwFFf6AOVuq3A5YCJ8SNeqC6vTiRjbIRh9uL2oIu77SbZFTtt7IMLuHrHHmY3OQk4YCMv42Nxtko2ePJ8d9JZ3jrMz28wZCEtvxdRfRCiNIIwUIBjAKsa7tDZZkM8OnkJq5Gs0Xi/m03cDuiKP5tfhxI7R5LTrEQvgUAw4pOWRn7fr4aqWymnKajhBqVRaHVdNZWNDiDBRGIcqP2RVZaFgDTBrIpm0NLXZ3ghJYoFkUFQjwov17TGX2hJxjStQnUu7Hw0Cg+Pu+px+g5JT0CuNq6NvWDRRGDFF6DGDaCO2Bjo/MDAof1WmAKKDQnATdbWTInkyZ83OZcYMxZXGFjyhW1AonHiI6pKRpeRUURtLr8Yg4JH1KjVrsbUDtRnJkGsRhjNZ98GgGdWYKDZ9MZ63EA12fnO1HKYzMQGFE59PjgKMpiGwjccCQND3oQe1TXVH2o39mb4zCGDsbEzqX+BJHlLIc48gbgDI4jNAJKGUKYxiiZAAjP8IidTeR4FznoENCca3rRFvknMLtwmFUUEwVxp2kl4r4SsWN8IS+/2Q25UjxHFLSRgpjvLD2tbPWN5LvghrOIIfs6UsNKDjxGS2UkSh7kqwwivgbAUWqKSJNzH95KYdfq2WNVYuguAAOo4HCiCFKj4RndA7jBUuKbLERsSa69nO+IOc39/R3U2kf6ehaUaABVudGJEW55Ec0SXvOmayDCX+fIzogCiOUNoMaRuE9qsPI8zYReKssMabfua6liYPdvTl2kZG7pF8xgPbXxk/mRN0N0AufEtrZlg9TCtHjl05YGRsQtkjkDZACiFcYIxzGS8YfkzIyg+OAmWA7GPjRdez7xViuW5zijGctO3RiN6Pdymih6TUKTXWUNR15MofRA8iOK82WQ4qx/MoSZ7xcbzmAL0Z6lJ2163jZkwSMWjKFEVHDY+JNPh3CwnPOjDA9VUvbDff+xgcNhOnC9lr3Fq2PpoE9skPqG8ksOD9aj3EzFUZplhlxNvHDfspp+w/MtJ3U6+OJrkK8M54C8MCc2csUUDlmIaBlUVYYSdkphig9KqrZEPgAj887nFosFO9HFhUWp5b7SaDpC5yX6XHgxiSiiZ2NhTHApZ4uTe5XxgMETzgrB68qJw7nsCK/LW9nLBW3H+t6hfHkf39+mDpQbW25g+kqXlGhz1sT/z5rMlGOD/JcSj5RDjCBl+iJeIJv37UbGtzetaIUxm8MnJP/Gvb7Yi7WdgwNnPEeBkzn0kulJ1Yn/EV825tnOkQpjPPsiQAdE6Rh+j/Ff/kAX8glcqv8t7Qsfg3o0C67WGVDA67DqWxkGNP+TW1lAyOociTzpc/ZUIOznGxkaHF6GpRViy4dczDkP4yjmIt4H7kh/2WoS/02niFjAJMqV2mI0rD/tA64MnsumGM25OCspKWstTnBngDO0zbJZm+wIQdn86t6h7H0BIwMDRShQtNhRzD5R0/Z5FOgbFGZaMqH/ldxltMG0qL5FLyPQ2Xi0ZD79w81Jpq9zGlvDT9hwSPP5Yy1vf0E/g47OFlVKBOVnSfx09jUaNjMittsyPAvlYlHXx1OVsQAAAAASUVORK5CYII=" width="217" height="51"/>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="donate-card-container col-1 col-sm-2">
                    <div className="card donate-card">
                        <div className="card-header">
                            PayPal — EUR
                        </div>
                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=______________&source=url">
                        <div className="card-body">
                            <img src="data:image/png;base64,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" width="217" height="51"/>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            `}

				<div className="donate-section-header">
					Recurring donations
				</div>
				<div className="flex-row">
					<div className="donate-card-container col-1 col-sm-2">
						<div className="card donate-card" css='text-align: center'>
							<div className="card-header">
								Patreon
							</div>
							<a href="https://www.patreon.com/PeyTy">
								<div className="card-body center">
									<img
										css='border-radius: 4px'
										alt="Become a Patron"
										className=""
										src="data:image/png;base64,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"
										width="217"
										height="51"
									/>
								</div>
							</a>
						</div>
					</div>
					<div className="donate-card-container col-1 col-sm-2">
						<div className="card donate-card" css='text-align: center'>
							<div className="card-header">
								Liberapay
							</div>
							<a href="https://liberapay.com/PeyTy">
								<div className="card-body center">
									<img
										src={liberapay}
										width="140"
										alt="Become a Patron"
										className=""
									/>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="donate-section-header">
					Cryptocurrencies
				</div>
				<div className="flex-row">
					<div className="donate-card-container col-1 col-sm-2">
						<div className="card donate-card">
							<div className="mobile card-header">Bitcoin</div>
							<div className="card-body">
								<div className="donate-qr">
									<img alt='qr' className="qr-code" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUAQMAAABP8pKXAAAABlBMVEX///8AAABVwtN+AAABBElEQVRIx82VwZHDMAwD1QH67xId4BZWfA0gj9CkSexDpBXO5Py8JXH6pnTFyIyLUrKNmFlsisChFTtjXiF0vsWEpM9XWPGd2RUrC/W/IVZWs7gE2jx6ZP7cgqVg6JmJFu+wlBu7TXp4V31nEmGRigEjC+YjLLajlSldIpkWkTQzBLXVBo2ViQfzewceWVpKopKcrIyjPxOfWJoZr8o8TUwamfhqgW4AVhbM5I5O9saISHd0PT/UxoCx72YKpZmJ00u75LY8sghPw0noM7La+/1Pt5ElsSPJMZYzMuPSHdw8M4vx8jgp3ZkcGXqvYGd3d0LGV4ZLSRrolVHZ3aT3P3Riv25/8WqviQ2TmrUAAAAASUVORK5CYII=" />
								</div>
								<div className="donate-description">
									<div className="donate-wallet-name non-mobile">Bitcoin</div>
									<div className="donate-wallet-description">
										<div className="donate-wallet">
											3Gp6D7c7XwNEvrFB2CeMtbDTHoQawMjo4n
										</div>
										<a className="btn btn-blue btn-large space-between" href="bitcoin:3Gp6D7c7XwNEvrFB2CeMtbDTHoQawMjo4n?message=Donation">
											Open in wallet
											<svg className="svg-inline" aria-hidden="true" data-prefix="far" data-icon="external-link"
												role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
												<path d="M576 14.4l-.174 163.2c0 7.953-6.447 14.4-14.4 14.4H528.12c-8.067 0-14.56-6.626-14.397-14.691l2.717-73.627-2.062-2.062-278.863 278.865c-4.686 4.686-12.284 4.686-16.971 0l-23.029-23.029c-4.686-4.686-4.686-12.284 0-16.971L474.379 61.621l-2.062-2.062-73.626 2.717C390.626 62.44 384 55.946 384 47.879V14.574c0-7.953 6.447-14.4 14.4-14.4L561.6 0c7.953 0 14.4 6.447 14.4 14.4zM427.515 233.74l-24 24a12.002 12.002 0 0 0-3.515 8.485V458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h301.976c10.691 0 16.045-12.926 8.485-20.485l-24-24A12.002 12.002 0 0 0 331.976 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V242.225c0-10.691-12.926-16.045-20.485-8.485z"></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="donate-card-container col-1 col-sm-2">
						<div className="card donate-card">
							<div className="mobile card-header">Monero</div>
							<div className="card-body">
								<div className="donate-qr">
									<img alt='qr' className="qr-code" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAADUAQMAAADeEJ9bAAAABlBMVEX///8AAABVwtN+AAAB/UlEQVRYw9zVsZXjQAwEUWRQ+WfZGfQVMU/WOefAOYgkevDXGJHSav77apvQCcO3hEy+4ZHFQ3HwjRcb+5l9SYTp202Jw0srtHqCUObYXI8DPSPOqe1RGIRh/8DJlX35r3J4Y692E5O8LfUNjyylRDBZGXAIObLamQpD7eELmTvbep9ZqxY1nNns/QVVp2Y9R2awJ+S9cTysnJlXfs+4JQ97ZUztOjGK73kzV5Zipd0wE8UjRzadBDrstlwZk1xZxGoE13zoonNl9r7b7JnYRPuVkU4ijYb6NfMc2XQLyBBPbX87jsxMndLfP9cySa+sszt579+LlA1H5nRCkQz1wKAeWXgfoLqMCjvhyKwdNNSwu/Na+405q7nyFlqtKyPgOZqrrC7cWfPNKER9t4Mjs/U7k/eFMalhcmS1JeTr0P4e9Jl1KJ3Je8IZ7OHKTNG9JDaRmM4svvCw2izOjo/sfVHSZPO8e35n0L1S0PA15jvb3Ywrdhc0JF6PLB2JAdM3/y7qlTlt+rYyOlbHurI6eb9SI/N5Ds3gIkxoO9RYBzkyy6xk8j7IX5COrC7i8c7CJodH5vmbZTr03Q7myprAQKkVe+xzaSnzvv7E9M36z/Zn5MiBQxwkA0lRQMxAMzlITQ9p6YN7GEACqIpGcoi0xA8Z0gNKQJodNJEb7gAAxd4xazZN4/gAAAAASUVORK5CYII=" />
								</div>
								<div className="donate-description">
									<div className="donate-wallet-name non-mobile">Monero</div>
									<div className="donate-wallet-description">
										<div className="donate-wallet">
											4B1CTHZprSj8W1AHSaY7FeSh3TicnpBSNJaJ6PiELXkcQYbp7gR2sTy9FCZsh23MmXNn7TeB37b2RTAVRWPN48u1KHU1Wwj
										</div>
										<a className="btn btn-blue btn-large space-between" href="monero:4B1CTHZprSj8W1AHSaY7FeSh3TicnpBSNJaJ6PiELXkcQYbp7gR2sTy9FCZsh23MmXNn7TeB37b2RTAVRWPN48u1KHU1Wwj?tx_description=Donation">
											Open in wallet
											<svg className="svg-inline" aria-hidden="true" data-prefix="far" data-icon="external-link"
												role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
												<path d="M576 14.4l-.174 163.2c0 7.953-6.447 14.4-14.4 14.4H528.12c-8.067 0-14.56-6.626-14.397-14.691l2.717-73.627-2.062-2.062-278.863 278.865c-4.686 4.686-12.284 4.686-16.971 0l-23.029-23.029c-4.686-4.686-4.686-12.284 0-16.971L474.379 61.621l-2.062-2.062-73.626 2.717C390.626 62.44 384 55.946 384 47.879V14.574c0-7.953 6.447-14.4 14.4-14.4L561.6 0c7.953 0 14.4 6.447 14.4 14.4zM427.515 233.74l-24 24a12.002 12.002 0 0 0-3.515 8.485V458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h301.976c10.691 0 16.045-12.926 8.485-20.485l-24-24A12.002 12.002 0 0 0 331.976 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V242.225c0-10.691-12.926-16.045-20.485-8.485z"></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="donate-card-container col-1 col-sm-2">
						<div className="card donate-card">
							<div className="mobile card-header">Ethereum</div>
							<div className="card-body">
								<div className="donate-qr">
									<img alt='qr' className="qr-code" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUAQMAAABP8pKXAAAABlBMVEX///8AAABVwtN+AAABAklEQVRIx83UwbFDIQxDUXeg/rtUB/fLDvMbUBYhDNhnETPwYH6+AbbHCXRJaU63xozkJLWRCLHoS3qzrNnkS6YEePwV266BxAutAf5vSUq7Ziw0n7Q0k9QO3ebKtY1G20WM1u500GwZZW4NSybzWAOqLSLM3Z312mazJOSn2jS7ZG9we9Ea5v5+ox1aG8vazBqHXZq3hia4o10bSh73u9KljXiPhJVQrflWGhfaSq3Be6wlQaLSBkPyBHdYrWld9+QsTWsWjli3/khp52OCd6dbA7xF3tbW5nRLyOkDteFlMFfOtb15S93cG/ft7CBPa9s/l49dvksjEbpt5Y69sZ9vfwJzu/XLhSIzAAAAAElFTkSuQmCC" />
								</div>
								<div className="donate-description">
									<div className="donate-wallet-name non-mobile">Ethereum</div>
									<div className="donate-wallet-description">
										<div className="donate-wallet">
											0x27e9254b61b1cd8da37a7617ac7714a8c33fddd4
										</div>
										<a className="btn btn-blue btn-large space-between" href="ethereum:0x27e9254b61b1cd8da37a7617ac7714a8c33fddd4">
											Open in wallet
											<svg className="svg-inline" aria-hidden="true" data-prefix="far" data-icon="external-link"
												role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
												<path d="M576 14.4l-.174 163.2c0 7.953-6.447 14.4-14.4 14.4H528.12c-8.067 0-14.56-6.626-14.397-14.691l2.717-73.627-2.062-2.062-278.863 278.865c-4.686 4.686-12.284 4.686-16.971 0l-23.029-23.029c-4.686-4.686-4.686-12.284 0-16.971L474.379 61.621l-2.062-2.062-73.626 2.717C390.626 62.44 384 55.946 384 47.879V14.574c0-7.953 6.447-14.4 14.4-14.4L561.6 0c7.953 0 14.4 6.447 14.4 14.4zM427.515 233.74l-24 24a12.002 12.002 0 0 0-3.515 8.485V458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h301.976c10.691 0 16.045-12.926 8.485-20.485l-24-24A12.002 12.002 0 0 0 331.976 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V242.225c0-10.691-12.926-16.045-20.485-8.485z"></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="donate-card-container col-1 col-sm-2">
						<div className="card donate-card">
							<div className="mobile card-header">Litecoin</div>
							<div className="card-body">
								<div className="donate-qr">
									<img alt='qr' className="qr-code" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0AQMAAAAHA5RxAAAABlBMVEX///8AAABVwtN+AAABcklEQVRYw9XVwY3DMAxEUXYw/Xc5Hcx+UsECuc8lim2RTwEIhTIyPz+SmEvM0sReKDo3sRmjEB80PUgUPYqBtida0gXuu6yPQG3nuk+QkRabnsRfAyj6jbyeZ5IHRXeWbL3TypBcdJ5XMxpNHCVp+pax3oHdnt/+ip7kjtVtbfH63vP7wTR3bHGJuOjA0eRas4mqPk4kFLyfj7DpKHvz3NENk4P2nBleYCaRXPVggQxFgFgtukhZ+bxyyN5FN/pKMz+0iy5i8Hqjl8E9x8SwlW1LbndFJ7GuapSrmUzR3x+OWHpFb4dFl7cuqnNBbvqEG4jgwcGm28Bmb2syUdMHImMSwjPSFF2hHEsEIQzSdWeXJPm+FE3Vl5W1ZQFO05klkYS9EcQkRb92v2UeuTE9v8G2EgGvRXLRyQzMO7nKvYY9J/0/TPLtsezZcJYFOXHavo2J5AmsqO7KKBtc+bjpXIrA6/f1fYqeQFR6xe8I9Pznxx+N4Wk27V+W/QAAAABJRU5ErkJggg==" />
								</div>
								<div className="donate-description">
									<div className="donate-wallet-name non-mobile">Litecoin</div>
									<div className="donate-wallet-description">
										<div className="donate-wallet">
											MJpWH3vENaBzx64sCjGfdStuomTZkiwQfc
										</div>
										<a className="btn btn-blue btn-large space-between" href="litecoin:MJpWH3vENaBzx64sCjGfdStuomTZkiwQfc?amount=0.10&label=Donation&message=Thank%20you%21">
											Open in wallet
											<svg className="svg-inline" aria-hidden="true" data-prefix="far" data-icon="external-link"
												role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
												<path d="M576 14.4l-.174 163.2c0 7.953-6.447 14.4-14.4 14.4H528.12c-8.067 0-14.56-6.626-14.397-14.691l2.717-73.627-2.062-2.062-278.863 278.865c-4.686 4.686-12.284 4.686-16.971 0l-23.029-23.029c-4.686-4.686-4.686-12.284 0-16.971L474.379 61.621l-2.062-2.062-73.626 2.717C390.626 62.44 384 55.946 384 47.879V14.574c0-7.953 6.447-14.4 14.4-14.4L561.6 0c7.953 0 14.4 6.447 14.4 14.4zM427.515 233.74l-24 24a12.002 12.002 0 0 0-3.515 8.485V458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h301.976c10.691 0 16.045-12.926 8.485-20.485l-24-24A12.002 12.002 0 0 0 331.976 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V242.225c0-10.691-12.926-16.045-20.485-8.485z"></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	</StyledDonate>
}
