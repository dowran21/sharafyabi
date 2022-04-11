const nodemailer = require("nodemailer");
// EMAIL_PASSWORD
require('dotenv').config();

const SendEmail = async ({data}) =>{
    let totalPrice = 0;
    data.items?.map(item => {
        totalPrice += item.discount_value ? item.quantity*(100-item.discount_value)*0.01*item.price : item.quantity*item.price
    })
    let html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"
 xmlns:v="urn:schemas-microsoft-com:vml"
 xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
	<!--[if gte mso 9]><xml>
	<o:OfficeDocumentSettings>
	<o:AllowPNG/>
	<o:PixelsPerInch>96</o:PixelsPerInch>
	</o:OfficeDocumentSettings>
	</xml><![endif]-->
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="format-detection" content="date=no" />
	<meta name="format-detection" content="address=no" />
	<meta name="format-detection" content="telephone=no" />
	<title>Email Template</title>
	

	<style type="text/css" media="screen">
		/* Linked Styles */
		body { padding:0 !important; margin:0 !important; display:block !important; background:#1e1e1e; -webkit-text-size-adjust:none }
		a { color:#a88123; text-decoration:none }
		p { padding:0 !important; margin:0 !important } 

		/* Mobile styles */
		</style>
		<style media="only screen and (max-device-width: 480px), only screen and (max-width: 480px)" type="text/css">
		@media only screen and (max-device-width: 480px), only screen and (max-width: 480px) { 
			div[class='mobile-br-5'] { height: 5px !important; }
			div[class='mobile-br-10'] { height: 10px !important; }
			div[class='mobile-br-15'] { height: 15px !important; }
			div[class='mobile-br-20'] { height: 20px !important; }
			div[class='mobile-br-25'] { height: 25px !important; }
			div[class='mobile-br-30'] { height: 30px !important; }

			th[class='m-td'], 
			td[class='m-td'], 
			div[class='hide-for-mobile'], 
			span[class='hide-for-mobile'] { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }

			span[class='mobile-block'] { display: block !important; }

			div[class='wgmail'] img { min-width: 320px !important; width: 320px !important; }

			div[class='img-m-center'] { text-align: center !important; }

			div[class='fluid-img'] img,
			td[class='fluid-img'] img { width: 100% !important; max-width: 100% !important; height: auto !important; }

			table[class='mobile-shell'] { width: 100% !important; min-width: 100% !important; }
			td[class='td'] { width: 100% !important; min-width: 100% !important; }
			
			table[class='center'] { margin: 0 auto; }
			
			td[class='column-top'],
			th[class='column-top'],
			td[class='column'],
			th[class='column'] { float: left !important; width: 100% !important; display: block !important; }

			td[class='content-spacing'] { width: 15px !important; }

			div[class='h2'] { font-size: 44px !important; line-height: 48px !important; }
		} 
	</style>
</head>
<body class="body" style="padding:0 !important; margin:0 !important; display:block !important; background:#1e1e1e; -webkit-text-size-adjust:none">
	<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#1e1e1e">
		<tr>
			<td align="center" valign="top">

				<table width="600" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
					<tr>
						<td class="td" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; width:600px; min-width:600px; Margin:0" width="600">
							<!-- Header -->
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
									<td>
										<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="30" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

										<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="30" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>


												<a href="#" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none"><span class="link-white" style="color:#ffffff; text-decoration:none">CONTACT US</span></a>
											</div> -->
											<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="20" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

										</div>
									</td>
									<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
								</tr>
							</table>
							<!-- END Header -->

							<!-- Main -->
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td>

										<!-- Body -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
											<tr>
												<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
												<td>
												
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td align="center">
																<table width="210" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td align="center" bgcolor="#d2973b">
																			<table border="0" cellspacing="0" cellpadding="0">
																			
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<!-- END Button -->
													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="40" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>


													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top; Margin:0" valign="top" width="270">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td>
																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4">
																				<tr>
																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
																					<td>
																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																						<div class="text-1" style="color:#d2973b; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
																							<strong>Заказчик:</strong>
																						</div>
																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																					</td>
																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
																				</tr>
																			</table>
																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fafafa">
																				<tr>
																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
																					<td>
																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																						<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
																							<strong>${data.name}</strong>
																							<br />
																							${data.address}
																							<br />
																							+933 ${data.phone}
																							<br />
																							${data.comment}
																						</div>
																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																					</td>
																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</th>
															<th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top; Margin:0" valign="top" width="20">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td><div style="font-size:0pt; line-height:0pt;" class="mobile-br-15"></div>
</td>
																	</tr>
																</table>
															</th>
															<th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top; Margin:0" valign="top" width="270">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td>
																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4">
																				<tr>
																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
																					<td>
																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																						<div class="text-1" style="color:#d2973b; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
																							<strong>Номер заказ:</strong> <span style="color: #1e1e1e;">${data.id}</span>
																						</div>
																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																					</td>
																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
																				</tr>
																			</table>
																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="20" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>


																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4">
																				<tr>
																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
																					<td>
																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																						<div class="text-1" style="color:#d2973b; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
																							<strong>Дата заказа:</strong>
																						</div>
																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																					</td>
																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
																				</tr>
																			</table>
																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fafafa">
																				<tr>
																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
																					<td>
																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																						<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
																							${data.created_at} 
																						</div>
																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																					</td>
																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="40" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>


													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
															<td style="border-bottom: 1px solid #f4f4f4;" width="225">
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left"><strong>Товар</strong></div>
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

															</td>
															<td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
															<td style="border-bottom: 1px solid #f4f4f4;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left"><strong>Коль.</strong></div>
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

															</td>
                                                            <td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
															<td style="border-bottom: 1px solid #f4f4f4;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left"><strong>Скидка.</strong></div>
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

															</td>
															<td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
															<td style="border-bottom: 1px solid #f4f4f4;" width="60">
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																<div class="text-center" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:center"><strong>Сумма</strong></div>
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

															</td>
															<td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
														</tr>
                                                        ${data.items?.map(item => `
                                                            
														<tr>
															<td>&nbsp;</td>
															<td>
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">${item.name}</div>
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

															</td>
															<td>&nbsp;</td>
															<td>
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">${item.quantity}</div>
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

															</td>
															<td>&nbsp;</td>
															<td>
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">${item.discount_value ? `${item.discount_value}%` : "Нет скидки"}</div>
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

                                                            </td>
                                                            <td>&nbsp;</td>
                                                            <td>
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																<div class="text-center" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:center">${item.discount_value ? item.quantity*(100-item.discount_value)*0.01*item.price : item.quantity*item.price}</div>
																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

															</td>
															<td>&nbsp;</td>
														</tr>
                                                        `)}
													</table>
													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>


													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" height="1" bgcolor="#d2973b">&nbsp;</td>
														</tr>
													</table>
													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>


													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														
																	<tr>
																		<td>&nbsp;</td>
																		<td>
																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right"><strong>Итого:</strong></div>
																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																		</td>
																		<td>&nbsp;</td>
																		<td>
																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left"><strong>${data.total_price}</strong></div>
																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

																		</td>
																		<td>&nbsp;</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="35" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

												</td>
												<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
											</tr>
										</table>
						</td>
					</tr>
				</table>
				<div class="wgmail" style="font-size:0pt; line-height:0pt; text-align:center"><img src="https://d1pgqke3goo8l6.cloudfront.net/oD2XPM6QQiajFKLdePkw_gmail_fix.gif" width="600" height="1" style="min-width:600px" alt="" border="0" /></div>
			</td>
		</tr>
	</table>
</body>
</html>
`

    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.yandex.ru",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
            user: "order@sharafyabi.com", // generated ethereal user
            pass: process.env.EMAIL_PASSWORD, // generated ethereal password
            },
        });
        
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Пришел заказ на Sharafyabi " <order@sharafyabi.com>', // sender address
            to: "order@sharafyabi.com, dovran@takyk.com", // list of receivers
            subject: "Заказ", // Subject line
            text: "Был принять заказ пожалуйста посмотрите его", // plain text body
            html
        });
        // console.log("email message sent")
        console.log(info)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    SendEmail
}