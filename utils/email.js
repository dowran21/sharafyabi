const database = require("../db/index")

const html = async ({item}) => {
  let str =  
 `
<!DOCTYPE html>    
<html>    
<head>

<title>Новости на сайте Sharafyabi</title>
<link rel="shortcut icon" href="favicon.ico">

<style type="text/css">
table[name="blk_permission"], table[name="blk_footer"] {display:none;} 
</style>

<meta name="googlebot" content="noindex" />
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW"/><link rel="stylesheet" href="/style/dhtmlwindow.css" type="text/css" />
<script type="text/javascript" src="/script/dhtmlwindow.js">
/***********************************************
* DHTML Window Widget- © Dynamic Drive (www.dynamicdrive.com)
* This notice must stay intact for legal use.
* Visit www.dynamicdrive.com for full source code
***********************************************/
</script>
<link rel="stylesheet" href="/style/modal.css" type="text/css" />
<script type="text/javascript" src="/script/modal.js"></script>
<script type="text/javascript">
	function show_popup(popup_name,popup_url,popup_title,width,height) {var widthpx = width +  "px";var heightpx = height +  "px";emailwindow = dhtmlmodal.open(popup_name , 'iframe', popup_url , popup_title , 'width=' + widthpx + ',height='+ heightpx + ',center=1,resize=0,scrolling=1');}
 function show_modal(popup_name,popup_url,popup_title,width,height){var widthpx = width +  "px";var heightpx = height +  "px";emailwindow = dhtmlmodal.open(popup_name , 'iframe', popup_url , popup_title , 'width=' + widthpx + ',height='+ heightpx + ',modal=1,center=1,resize=0,scrolling=1');}
var popUpWin=0;
	function popUpWindow(URLStr,PopUpName, width, height){if(popUpWin) { if(!popUpWin.closed) popUpWin.close();}var left = (screen.width - width) / 2;var top = (screen.height - height) / 2;popUpWin = open(URLStr, PopUpName,	'toolbar=0,location=0,directories=0,status=0,menub	ar=0,scrollbar=0,resizable=0,copyhistory=yes,width='+width+',height='+height+',left='+left+', 	top='+top+',screenX='+left+',screenY='+top+'');}
</script>
    
<meta content="width=device-width, initial-scale=1.0" name="viewport">    
<style type="text/css">    
/*** BMEMBF Start ***/    
[name=bmeMainBody]{min-height:1000px;}    
@media only screen and (max-width: 480px){table.blk, table.tblText, .bmeHolder, .bmeHolder1, table.bmeMainColumn{width:100% !important;} }        
@media only screen and (max-width: 480px){.bmeImageCard table.bmeCaptionTable td.tblCell{padding:0px 20px 20px 20px !important;} }        
@media only screen and (max-width: 480px){.bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td.tblCell{padding:20px 20px 0 20px !important;} }        
@media only screen and (max-width: 480px){table.bmeCaptionTable td.tblCell{padding:10px !important;} }        
@media only screen and (max-width: 480px){table.tblGtr{ padding-bottom:20px !important;} }        
@media only screen and (max-width: 480px){td.blk_container, .blk_parent, .bmeLeftColumn, .bmeRightColumn, .bmeColumn1, .bmeColumn2, .bmeColumn3, .bmeBody{display:table !important;max-width:600px !important;width:100% !important;} }        
@media only screen and (max-width: 480px){table.container-table, .bmeheadertext, .container-table { width: 95% !important; } }        
@media only screen and (max-width: 480px){.mobile-footer, .mobile-footer a{ font-size: 13px !important; line-height: 18px !important; } .mobile-footer{ text-align: center !important; } table.share-tbl { padding-bottom: 15px; width: 100% !important; } table.share-tbl td { display: block !important; text-align: center !important; width: 100% !important; } }        
@media only screen and (max-width: 480px){td.bmeShareTD, td.bmeSocialTD{width: 100% !important; } }        
@media only screen and (max-width: 480px){td.tdBoxedTextBorder{width: auto !important;}}    
@media only screen and (max-width: 480px){table.blk, table[name=tblText], .bmeHolder, .bmeHolder1, table[name=bmeMainColumn]{width:100% !important;} }    
@media only screen and (max-width: 480px){.bmeImageCard table.bmeCaptionTable td[name=tblCell]{padding:0px 20px 20px 20px !important;} }    
@media only screen and (max-width: 480px){.bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td[name=tblCell]{padding:20px 20px 0 20px !important;} }    
@media only screen and (max-width: 480px){table.bmeCaptionTable td[name=tblCell]{padding:10px !important;} }    
@media only screen and (max-width: 480px){table[name=tblGtr]{ padding-bottom:20px !important;} }    
@media only screen and (max-width: 480px){td.blk_container, .blk_parent, [name=bmeLeftColumn], [name=bmeRightColumn], [name=bmeColumn1], [name=bmeColumn2], [name=bmeColumn3], [name=bmeBody]{display:table !important;max-width:600px !important;width:100% !important;} }    
@media only screen and (max-width: 480px){table[class=container-table], .bmeheadertext, .container-table { width: 95% !important; } }    
@media only screen and (max-width: 480px){.mobile-footer, .mobile-footer a{ font-size: 13px !important; line-height: 18px !important; } .mobile-footer{ text-align: center !important; } table[class="share-tbl"] { padding-bottom: 15px; width: 100% !important; } table[class="share-tbl"] td { display: block !important; text-align: center !important; width: 100% !important; } }    
@media only screen and (max-width: 480px){td[name=bmeShareTD], td[name=bmeSocialTD]{width: 100% !important; } }    
@media only screen and (max-width: 480px){td[name=tdBoxedTextBorder]{width: auto !important;}}    
@media only screen and (max-width: 480px){.bmeImageCard table.bmeImageTable{height: auto !important; width:100% !important; padding:20px !important;clear:both; float:left !important; border-collapse: separate;} }    
@media only screen and (max-width: 480px){.bmeMblInline table.bmeImageTable{height: auto !important; width:100% !important; padding:10px !important;clear:both;} }    
@media only screen and (max-width: 480px){.bmeMblInline table.bmeCaptionTable{width:100% !important; clear:both;} }    
@media only screen and (max-width: 480px){table.bmeImageTable{height: auto !important; width:100% !important; padding:10px !important;clear:both; } }    
@media only screen and (max-width: 480px){table.bmeCaptionTable{width:100% !important;  clear:both;} }    
@media only screen and (max-width: 480px){table.bmeImageContainer{width:100% !important; clear:both; float:left !important;} }    
@media only screen and (max-width: 480px){table.bmeImageTable td{padding:0px !important; height: auto; } }    
@media only screen and (max-width: 480px){td.bmeImageContainerRow{padding:0px !important;}}    
@media only screen and (max-width: 480px){img.mobile-img-large{width:100% !important; height:auto !important;} }    
@media only screen and (max-width: 480px){img.bmeRSSImage{max-width:320px; height:auto !important;}}    
@media only screen and (min-width: 640px){img.bmeRSSImage{max-width:600px !important; height:auto !important;} }    
@media only screen and (max-width: 480px){.trMargin img{height:10px;} }    
@media only screen and (max-width: 480px){div.bmefooter, div.bmeheader{ display:block !important;} }    
@media only screen and (max-width: 480px){.tdPart{ width:100% !important; clear:both; float:left !important; } }    
@media only screen and (max-width: 480px){table.blk_parent1, table.tblPart {width: 100% !important; } }    
@media only screen and (max-width: 480px){.tblLine{min-width: 100% !important;}}     
@media only screen and (max-width: 480px){.bmeMblCenter img { margin: 0 auto; } }       
@media only screen and (max-width: 480px){.bmeMblCenter, .bmeMblCenter div, .bmeMblCenter span  { text-align: center !important; text-align: -webkit-center !important; } }    
@media only screen and (max-width: 480px){.bmeNoBr br, .bmeImageGutterRow, .bmeMblStackCenter .bmeShareItem .tdMblHide { display: none !important; } }    
@media only screen and (max-width: 480px){.bmeMblInline table.bmeImageTable, .bmeMblInline table.bmeCaptionTable, td.bmeMblInline { clear: none !important; width:50% !important; } }    
@media only screen and (max-width: 480px){.bmeMblInlineHide, .bmeShareItem .trMargin { display: none !important; } }    
@media only screen and (max-width: 480px){.bmeMblInline table.bmeImageTable img, .bmeMblShareCenter.tblContainer.mblSocialContain, .bmeMblFollowCenter.tblContainer.mblSocialContain{width: 100% !important; } }    
@media only screen and (max-width: 480px){.bmeMblStack> .bmeShareItem{width: 100% !important; clear: both !important;} }    
@media only screen and (max-width: 480px){.bmeShareItem{padding-top: 10px !important;} }    
@media only screen and (max-width: 480px){.tdPart.bmeMblStackCenter, .bmeMblStackCenter .bmeFollowItemIcon {padding:0px !important; text-align: center !important;} }    
@media only screen and (max-width: 480px){.bmeMblStackCenter> .bmeShareItem{width: 100% !important;} }    
@media only screen and (max-width: 480px){ td.bmeMblCenter {border: 0 none transparent !important;}}    
@media only screen and (max-width: 480px){.bmeLinkTable.tdPart td{padding-left:0px !important; padding-right:0px !important; border:0px none transparent !important;padding-bottom:15px !important;height: auto !important;}}    
@media only screen and (max-width: 480px){.tdMblHide{width:10px !important;} }    
@media only screen and (max-width: 480px){.bmeShareItemBtn{display:table !important;}}    
@media only screen and (max-width: 480px){.bmeMblStack td {text-align: left !important;}}    
@media only screen and (max-width: 480px){.bmeMblStack .bmeFollowItem{clear:both !important; padding-top: 10px !important;}}    
@media only screen and (max-width: 480px){.bmeMblStackCenter .bmeFollowItemText{padding-left: 5px !important;}}    
@media only screen and (max-width: 480px){.bmeMblStackCenter .bmeFollowItem{clear:both !important;align-self:center; float:none !important; padding-top:10px;margin: 0 auto;}}    
@media only screen and (max-width: 480px){    
.tdPart> table{width:100% !important;}    
}    
@media only screen and (max-width: 480px){.tdPart>table.bmeLinkContainer{ width:auto !important; }}    
@media only screen and (max-width: 480px){.tdPart.mblStackCenter>table.bmeLinkContainer{ width:100% !important;}}     
.blk_parent:first-child, .blk_parent{float:left;}    
.blk_parent:last-child{float:right;}    
/*** BMEMBF END ***/    
    
table[name="bmeMainBody"], body {background-color:#000000;}    
 td[name="bmePreHeader"] {background-color:transparent;}    
 td[name="bmeHeader"] {background:#ffffff;background-color:#000000;}    
 td[name="bmeBody"], table[name="bmeBody"] {background-color:#ffffff;}    
 td[name="bmePreFooter"] {background-color:#ffffff;}    
 td[name="bmeFooter"] {background-color:transparent;}    
 td[name="tblCell"], .blk {font-family:initial;font-weight:normal;font-size:initial;}    
 table[name="blk_blank"] td[name="tblCell"] {font-family:Arial, Helvetica, sans-serif;font-size:14px;}    
 [name=bmeMainContentParent] {border-color:#666666;border-width:0px;border-style:none;border-radius:0px;border-collapse:separate;border-spacing:0px;overflow:hidden;}    
 [name=bmeMainColumnParent] {border-color:transparent;border-width:0px;border-style:none;border-radius:0px;}    
 [name=bmeMainColumn] {border-color:transparent;border-width:0px;border-style:none;border-radius:0px;border-collapse:separate;border-spacing:0px;}    
 [name=bmeMainContent] {border-color:transparent;border-width:0px;border-style:none;border-radius:0px;border-collapse:separate;border-spacing:0px;}    
    
</style>    
</head>    
<body marginheight=0 marginwidth=0 topmargin=0 leftmargin=0 style="height: 100% !important; margin: 0; padding: 0; width: 100% !important;min-width: 100%;">    
    
<table width="100%" cellspacing="0" cellpadding="0" border="0" name="bmeMainBody" style="background-color: rgb(76, 132, 76);" bgcolor="#000000"><tbody><tr><td width="100%" valign="top" align="center">    
<table cellspacing="0" cellpadding="0" border="0" name="bmeMainColumnParentTable"><tbody><tr><td name="bmeMainColumnParent" style="border: 0px none transparent; border-radius: 0px; border-collapse: separate;">     
<table name="bmeMainColumn" class="bmeHolder bmeMainColumn" style="max-width: 600px; overflow: visible; border-radius: 0px; border-collapse: separate; border-spacing: 0px;" cellspacing="0" cellpadding="0" border="0" align="center">    <tbody><tr><td width="100%" class="blk_container bmeHolder" name="bmePreHeader" valign="top" align="center" style="color: rgb(102, 102, 102); border: 0px none transparent;" bgcolor=""></td></tr> <tr><td width="100%" class="bmeHolder" valign="top" align="center" name="bmeMainContentParent" style="border: 0px none rgb(102, 102, 102); border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: hidden;">     
<table name="bmeMainContent" style="border-radius: 0px; border-collapse: separate; border-spacing: 0px; border: 0px none transparent;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center"> <tbody><tr><td width="100%" class="blk_container bmeHolder" name="bmeHeader" valign="top" align="center" style="color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(0, 0, 0);" bgcolor="#000000"><div id="dv_1" class="blk_wrapper" style="">    
<table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_text"><tbody><tr><td>    
<table cellpadding="0" cellspacing="0" border="0" width="100%" class="bmeContainerRow"><tbody><tr><td class="tdPart" valign="top" align="center">    
<!-- <table cellspacing="0" cellpadding="0" border="0" width="600" name="tblText" style="float:left; background-color:transparent;" align="left" class="tblText"><tbody><tr><td valign="top" align="left" name="tblCell" style="padding: 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; color: rgb(56, 56, 56); text-align: left;" class="tblCell"><div style="line-height: 150%; text-align: center;"><span style="font-size: 12px; font-family: Helvetica, Arial, sans-serif; color: #939393; line-height: 150%;">Semi Annual </span><span style="font-size: 12px; font-family: Helvetica, Arial, sans-serif; color: #d63c3c; line-height: 150%;"><strong>Новости на сайте Sharafyabi</strong></span></div></td></tr></tbody>     -->
</table></td></tr></tbody>    
</table></td></tr></tbody>    
</table></div>
</td></tr> <tr><td width="100%" class="blk_container bmeHolder bmeBody" name="bmeBody" valign="top" align="center" style="color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(255, 255, 255);" bgcolor="#ffffff"><div id="dv_11" class="blk_wrapper" style="">    
<table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_divider" style=""><tbody><tr><td class="tblCellMain" style="padding: 10px 20px;">    
<table class="tblLine" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top-width: 0px; border-top-style: none; min-width: 1px;"><tbody><tr><td><span></span></td></tr></tbody>    
</table></td></tr></tbody>    
</table></div><div id="dv_3" class="blk_wrapper" style="">    
<table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_image"><tbody><tr><td>    
<table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td align="center" class="bmeImage" style="border-collapse: collapse; padding: 5px;display: flex; justify-content: center; align-items: center;"><img    
 src="https://sharafyabi.com/uploads/images/logo1.png" width="80" style="max-width: 80px; display: block; width: 80px;" alt="" border="0"><h1 style="color: rgb(76, 132, 76);">Sharafyabi</h1></td></tr></tbody>    
</table></td></tr></tbody>    
</table></div><div id="dv_9" class="blk_wrapper" style="">    
<table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_divider" style=""><tbody><tr><td class="tblCellMain" style="padding: 20px 0px;">    
<table class="tblLine" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top-width: 1px; border-top-color: rgb(223, 223, 223); border-top-style: solid; min-width: 1px;"><tbody><tr><td><span></span></td></tr></tbody>    
</table></td></tr></tbody>    
</table></div><div id="dv_12" class="blk_wrapper" style="">    
<table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_card"><tbody><tr><td class="bmeImageCard" align="center" style="padding-left:20px; padding-right:20px; padding-top:0px; padding-bottom:0px;">    
<table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td valign="top" class="bmeImageContainer" style="border-collapse: collapse; background-color: rgba(0, 0, 0, 0);" width="560">    
<table cellspacing="0" cellpadding="0" border="0" width="100%"><tbody><tr><td valign="top" align="center" class="tdPart">    
<br><span style="font-size: 30px; font-family: Helvetica, Arial, sans-serif; color: #d63c3c; line-height: 150%;">    
<em><strong>${item.title}</strong></em></span>    
<table cellspacing="0" cellpadding="0" border="0" class="bmeCaptionTable" style="float: left;" width="373" align="left"><tbody><tr><td style="padding: 20px 0px 20px 20px; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 14px; color: rgb(56, 56, 56); text-align: left;" name="tblCell" valign="top" align="left" class="tblCell"><div style="line-height: 150%;"><span style="font-size: 15px; font-family: Helvetica, Arial, sans-serif; color: #1e1e1e; line-height: 150%;"><strong>${item.article}</strong></span>    

<!-- <br><span style="font-size: 14px; font-family: Helvetica, Arial, sans-serif; color: #929292; line-height: 150%;"><strong>2 days only -</strong> Valid for all men's clothing</span>     -->
<br>    
<br>    
<br><span style="font-size: 14px; font-family: Helvetica, Arial, sans-serif; color: #929292; line-height: 150%;">Дата публикации: </span><span style="font-size: 14px; font-family: Helvetica, Arial, sans-serif; color: #d63c3c; line-height: 150%;"><strong>${item.created_at}</strong></span></div></td></tr></tbody>    
</table></td><td valign="top" align="center" class="tdPart">    
<table cellspacing="0" cellpadding="0" border="0" class="bmeImageTable" style="float: right; height: 222px;" align="right" dimension="30%" width="187" height="222"><tbody><tr><td name="bmeImgHolder" style="padding:20px;" align="left" valign="top" height="182"><img    
 src="https://sharafyabi.com/${item.destination}-big.webp" width="147" style="max-width: 250px; display: block;" alt="" border="0"></td></tr></tbody>    
</table></td></tr></tbody>    
</table></td></tr></tbody>    
</table></div><div id="dv_13" class="blk_wrapper" style="">    
<table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_button" style="padding:3px"><tbody><tr><td width="40"></td><td align="center">    
<table class="tblContainer" cellspacing="0" cellpadding="0" border="0" width="100%"><tbody><tr><td height="0"></td></tr><tr><td align="left">    
<table cellspacing="0" cellpadding="0" border="0" class="bmeButton" align="left" style="border-collapse: separate;"><tbody><tr><td style="border-radius: 20px; border: 0px none transparent; text-align: center; font-family: Arial, Helvetica, sans-serif; font-size: 14px; padding: 10px 40px; font-weight: bold; background-color: rgb(214, 60, 60);" class="bmeButtonText"><span style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: rgb(255, 255, 255);">    
<a href = "https://sharafyabi.com" style="color:#FFFFFF;text-decoration:none;" target="_blank">Перейти на сайт</a></span></td></tr></tbody>    
</table></td></tr><tr><td height="0"></td></tr>
</tbody>   
</body>    
</html>
`
return str;
}
  const nodemailer = require("nodemailer");

// const item = {}
const sendEmail = async ({item, emails})=>{
  // console.log(item)
  // console.log(emails)
  // const query_text = `
  // SELECT * FROM email_subscriptions
  // `
  // let emails = []
  // try {
  //   const {rows} = await database.query(query_text, [])
  // } catch (error) {
    
  // }
  // create reusable transporter object using the default SMTP transport
  console.log(emails)
  for(let i=0; i<emails?.length; i++){
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "order@sharafyabi.com", // generated ethereal user
          pass: "Order2022@", // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Новости на сайте Sharafyabi Online Shop " <order@sharafyabi.com>', // sender address
        to: `${emails[i]}`, // list of receivers
        subject: "Sharafyabi", // Subject line
        text: "Горячие новости на сайте Sharafyabi.com", // plain text body
        html:await html({item}), // html body
      });
      console.log(info?.id)
    } catch (e) {
      console.log(e)
    }
  }
  
}

module.exports = {sendEmail}
