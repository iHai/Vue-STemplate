<template>
    <div style="background: #0d2a42;">
        <el-row :gutter="20">
            <el-col :span="7">
                <el-card shadow="hover" >
                   	<div >
		         		<label class="text_image" style="padding-left:10px">片区漏损统计</label>
		         		<div class="common_text">漏损值</div>
		         		<div class="common_text">漏损率</div>
		         		<div class="common_text" style="margin-top: 15px">25 <font color="#e2b23d" >吨</font> </div>
		         		<div class="common_text" style="margin-top: 15px">23%</div>
		         		<div id="echarts-dom" style="width: 30vw;height: 30vw;top: -70px;left:-45px;position: relative;"></div>
      					</div>
			    </el-card>
			    <el-card shadow="hover">
			        <div >
			         	<label class="text_image" style="padding-left:10px">片区漏损统计</label>
			         	<div class="common_text">漏损值</div>
			         	<div class="common_text">漏损率</div>
			         	<div class="common_text" style="margin-top: 15px">25 <font color="#e2b23d" >吨</font> </div>
			         	<div class="common_text" style="margin-top: 15px">23%</div>
			         	<div id="echarts-dom2" style="width: 30vw;height: 30vw;top: -70px;left:-45px;position: relative;"></div>
      				</div>
                </el-card>
            </el-col>
            <el-col :span="10">
                 <el-card shadow="hover">
                    <div class="text_image">
    					<label style="padding-left:10px">当前小区：何母桥（共2只表）</label>
  					</div>
  					<div style="width: 100%;height: 800px;top: 70px;position: relative;">
  						<ginkgo-map ref="map" class="gingo-map" :gmapObj.sync="gmap" :options="mapOptions" :zoom.sync="zoom" :center.sync="center"
        :markers="markers" :polylines="polylines" :polygons="polygons" :circles="circles" :rectangles="rectangles" :texts="texts"
        :trackData="trackData" :trackOptions="trackOptions" :tracker.sync="tracker"
        :editData.sync="editData" :editer.sync="editer" :imageLayers="imageLayers">
    </ginkgo-map>
  					</div>
                </el-card>
            </el-col>
            <el-col :span="7">
            	 <el-card shadow="hover">
                    <div class="text_image">
   						<label style="padding-left:10px">智能小区表计用水</label>
					</div>
					<div class="table_data">
   						<dl>
   							<dt class="titles"><strong>类型</strong></dt>
    						<dd class="titles"><strong>口径</strong></dd>
    						<dd class="titles"><strong>型号</strong></dd>
    						<dd class="titles"><strong>数量</strong></dd>
    						<dd class="titles"><strong>用水量</strong></dd>
    						<dt class="titles1-1 bg">中国</dt>
    						<dd class="titles1-1 bg">688</dd>
    						<dd class="titles1-1 bg" >xssssssssssssssssssssssssssssx</dd>
    						<dd class="titles1-1 bg">-</dd>
    						<dd class="titles1-1 bg">-</dd>
    						<dt class="titles1-1">中国</dt>
    						<dd class="titles1-1">688</dd>
    						<dd class="titles1-1" >xssssssssssssssssssssssssssssx</dd>
    						<dd class="titles1-1">-</dd>
    						<dd class="titles1-1 ">-</dd>
   						 	<dt class="titles1-1 bg">中国</dt>
    						<dd class="titles1-1 bg">688</dd>
   						 	<dd class="titles1-1 bg">xssssssssssssssssssssssssssssx</dd>
   							<dd class="titles1-1 bg">-</dd>
    						<dd class="titles1-1 bg">-</dd>
   						 	<dt class="titles1-1">中国</dt>
  						 	<dd class="titles1-1">688</dd>
  						  	<dd class="titles1-1">xssssssssssssssssssssssssssssx</dd>
  						  	<dd class="titles1-1">-</dd>
  						  	<dd class="titles1-1 ">-</dd>
    						<dt class="titles1-1 bg">中国</dt>
  						 	<dd class="titles1-1 bg">688</dd>
  						 	<dd class="titles1-1 bg">xssssssssssssssssssssssssssssx</dd>
 						    <dd class="titles1-1 bg">-</dd>
   						    <dd class="titles1-1 bg">-</dd>
   						    <dt class="titles1-1">中国</dt>
    						<dd class="titles1-1">688</dd>
						    <dd class="titles1-1">xssssssssssssssssssssssssssssx</dd>
   						    <dd class="titles1-1">-</dd>
  						    <dd class="titles1-1 ">-</dd>
    						<dt class="titles1-1 bg">中国</dt>
  						    <dd class="titles1-1 bg">688</dd>
    						<dd class="titles1-1 bg">xssssssssssssssssssssssssssssx</dd>
   						    <dd class="titles1-1 bg">-</dd>
  						    <dd class="titles1-1 bg">-</dd>
 						</dl>
					</div>
            	</el-card>
                <el-card shadow="hover">
                  	<div class="text_image ">
   						<label style="padding-left:10px">近七天漏损</label>
					</div>        
 					<div id="right_bottom_line" style="width: 26vw;height: 26vw;top: 20px;position: relative;left:-45px;"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import echarts from 'echarts'
    import pie from './../common/pie.js'
    import line_option from './../common/line_option.js'
    export default {
    	name:'echarts',
    	data(){
    		  return {}
    	},
        mounted() {
            let myEcharts = echarts.init(document.getElementById('echarts-dom'))
            let myEcharts2 = echarts.init(document.getElementById('echarts-dom2'))
            let myEcharts3 = echarts.init(document.getElementById('right_bottom_line'))
            myEcharts.setOption(pie)
            myEcharts2.setOption(pie)
            myEcharts3.setOption(line_option)
        }
    }
</script>

<style scoped>
  .el-card{
  	background: transparent;
  	border: 0;
  }
.text_image{
	background:#0a4566;
	padding: 10px;
	color: #c4e9f8;
	font-weight: bold;
	float: left;
    width: 100%;
    box-shadow: 5px 5px 10px #000;
}
.bg{
	background: rgb(0, 59, 81);
}
.common_text{
	color: black;
	font-size: 25px;
	float: left;
	width: 50%;
	text-align: center;
	margin-top: 50px;
	color:white;
}
.table_data{
	position: relative;
	top: 5px;
}
.table_data dl{
	width: 100%;
	background:  #0a2732;
	float: left;
}

.titles{
	float: left;
	width: 20%;
	text-align: center;
	background: #00baff;
	color: white;
	padding: 20px 0 20px 0;
	font-size: 18px;
}
.titles1-1{
	float: left;
	width: 20%;
	text-align: center;
	color: white;
	padding: 10px 0 10px 0;
	font-size: 16px;
	word-wrap: break-word;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	height: 30px;
	line-height: 30px;
}
.mymap{
	width: 100%;
	height: 100%;
	margin-top: 10px;
	background: #fff;
}
</style>
