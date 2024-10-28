## 地图
### 1.国内的常用坐标系

1、WGS-84坐标系：地心坐标系，GPS原始坐标体系

在中国，任何一个地图产品都不允许使用GPS坐标，据说是为了保密。

2、GCJ-02 坐标系：国测局坐标，火星坐标系

1）国测局02年发布的坐标体系，它是一种对经纬度数据的加密算法，即加入随机的偏差。

2）互联网地图在国内必须至少使用GCJ-02进行首次加密，不允许直接使用WGS-84坐标下的地理数据，同时任何坐标系均不可转换为WGS-84坐标。

3）是国内最广泛使用的坐标体系，高德、腾讯、Google中国地图都使用它。

3、CGCS2000坐标系：国家大地坐标系

该坐标系是通过中国GPS 连续运行基准站、 空间大地控制网以及天文大地网与空间地网联合平差建立的地心大地坐标系统。

4、BD-09坐标系

百度中国地图所采用的坐标系，由GCJ-02进行进一步的偏移算法得到。

5、搜狗坐标系

搜狗地图所采用的坐标系，由GCJ-02进行进一步的偏移算法得到。

6、图吧坐标系

图吧地图所采用的坐标系，由GCJ-02进行进一步的偏移算法得到。

### 2.国内地图软件所采用的坐标系简介

1、百度地图

1）境内（包括港澳台）：BD09

a、在GCJ-02坐标系基础上再次加密

b、支持WGS-84、GCJ-02转换成BD09，反向不支持，并且批量转换一次有条数限制

2）境外：WGS-84



2、高德地图:

1）境内：GCJ-02

a、WGS-84——>GCJ-02（高德有接口提供，反过来没有）

2）境外：暂不支持

3）AMap 就是高德地图，是高德地图在纳斯达克上市用的名字，主要面向互联网企业或个人提供免费API服务

4）MapABC 是高德集团底下的图盟公司，主要面向大众型企业或政府机关，并提供付费的有偿服务

5）Amap和MapABC，数据和服务都是共享的，所以Mapabc用Amap的API是正常的

3、google地图

1）境内：GCJ-02

a、数据来源于高德，两者互通

2）境外：WGS-84



4、天地图

全球统一：CGCS2000

5、腾讯地图：soso地图

境内：GCJ02



6、微软bing地图：BingMap

全球统一：WGS-84

7、搜狗地图

境内：搜狗坐标系

a、在GCJ-02坐标系基础上再次加密

b、支持WGS-84、GCJ-02、BD09转换成搜狗坐标，反向不支持



8、图吧地图: MapBar

境内：图吧坐标系

a、在GCJ-02坐标系基础上再次加密

9、阿里云地图

境内：GCJ-02



10、灵图地图：51ditu

境内：GCJ-02

### 3.各个坐标系之间的转换
```text

1、以下代码，提供的转换算法如下：

1）WGS-84 ——> GCJ02

2）GCJ02 ——> WGS-84

3）GCJ02 ——> BD09

4）BD09 ——> GCJ02

5）BD09 ——> WGS-84

package com.xy;

/**
 * 各地图API坐标系统比较与转换;
 * WGS84坐标系：即地球坐标系，国际上通用的坐标系。设备一般包含GPS芯片或者北斗芯片获取的经纬度为WGS84地理坐标系,
 * 谷歌地图采用的是WGS84地理坐标系（中国范围除外）;
 * GCJ02坐标系：即火星坐标系，是由中国国家测绘局制订的地理信息系统的坐标系统。由WGS84坐标系经加密后的坐标系。
 * 谷歌中国地图和搜搜中国地图采用的是GCJ02地理坐标系; BD09坐标系：即百度坐标系，GCJ02坐标系经加密后的坐标系;
 * 搜狗坐标系、图吧坐标系等，估计也是在GCJ02基础上加密而成的。
**/

public class PositionUtil {
    public static final String BAIDU_LBS_TYPE = "bd09ll";
    public static double pi = 3.1415926535897932384626;
    public static double a = 6378245.0;
    public static double ee = 0.00669342162296594323;
  /**
   * 84 to 火星坐标系 (GCJ-02) World Geodetic System ==> Mars Geodetic System
   * @param lat
   * @param lon
   * @return
  **/
    public static Gps gps84_To_Gcj02(double lat, double lon) {
        if (outOfChina(lat, lon)) {
            return null;
        }
        double dLat = transformLat(lon - 105.0, lat - 35.0);
        double dLon = transformLon(lon - 105.0, lat - 35.0);
        double radLat = lat / 180.0 * pi;
        double magic = Math.sin(radLat);
        magic = 1 - ee * magic * magic;
        double sqrtMagic = Math.sqrt(magic);
        dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
        dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
        double mgLat = lat + dLat;
        double mgLon = lon + dLon;
        return new Gps(mgLat, mgLon);
    }
    /**
     *  火星坐标系 (GCJ-02) to 84 * * @param lon * @param lat * @return
    **/

    public static Gps gcj_To_Gps84(double lat, double lon) {
        Gps gps = transform(lat, lon);
        double lontitude = lon * 2 - gps.getWgLon();
        double latitude = lat * 2 - gps.getWgLat();
        return new Gps(latitude, lontitude);
    }

    /**
     * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换算法 将 GCJ-02 坐标转换成 BD-09 坐标
     * @param gg_lat
     * @param gg_lon
    **/

    public static Gps gcj02_To_Bd09(double gg_lat, double gg_lon) {
        double x = gg_lon, y = gg_lat;
        double z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * pi);
        double theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * pi);
        double bd_lon = z * Math.cos(theta) + 0.0065;
        double bd_lat = z * Math.sin(theta) + 0.006;
        return new Gps(bd_lat, bd_lon);
    }

    /**
     * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换算法 * * 将 BD-09 坐标转换成GCJ-02 坐标 * * @param
     * bd_lat * @param bd_lon * @return
    **/

    public static Gps bd09_To_Gcj02(double bd_lat, double bd_lon) {
        double x = bd_lon - 0.0065, y = bd_lat - 0.006;
        double z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * pi);
        double theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * pi);
        double gg_lon = z * Math.cos(theta);
        double gg_lat = z * Math.sin(theta);
        return new Gps(gg_lat, gg_lon);
    }

    /**
     * (BD-09)-->84
     * @param bd_lat
     * @param bd_lon
     * @return
    **/

    public static Gps bd09_To_Gps84(double bd_lat, double bd_lon) {
        Gps gcj02 = PositionUtil.bd09_To_Gcj02(bd_lat, bd_lon);
        Gps map84 = PositionUtil.gcj_To_Gps84(gcj02.getWgLat(),
        gcj02.getWgLon());
        return map84;
    }

     public static boolean outOfChina(double lat, double lon) {
        if (lon < 72.004 || lon > 137.8347)
            return true;
        if (lat < 0.8293 || lat > 55.8271)
            return true;
        return false;
    }

    public static Gps transform(double lat, double lon) {
        if (outOfChina(lat, lon)) {
            return new Gps(lat, lon);
        }
        double dLat = transformLat(lon - 105.0, lat - 35.0);
        double dLon = transformLon(lon - 105.0, lat - 35.0);
        double radLat = lat / 180.0 * pi;
        double magic = Math.sin(radLat);
        magic = 1 - ee * magic * magic;
        double sqrtMagic = Math.sqrt(magic);
        dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
        dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
        double mgLat = lat + dLat;
        double mgLon = lon + dLon;
        return new Gps(mgLat, mgLon);
    }

    public static double transformLat(double x, double y) {
        double ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y
        + 0.2 * Math.sqrt(Math.abs(x));
        ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(y * pi) + 40.0 * Math.sin(y / 3.0 * pi)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(y / 12.0 * pi) + 320 * Math.sin(y * pi / 30.0)) * 2.0 / 3.0;
        return ret;
    }

    public static double transformLon(double x, double y) {
        double ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1
        * Math.sqrt(Math.abs(x));
        ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(x * pi) + 40.0 * Math.sin(x / 3.0 * pi)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(x / 12.0 * pi) + 300.0 * Math.sin(x / 30.0
        * pi)) * 2.0 / 3.0;
        return ret;
    }

    public static void main(String[] args) {
        // 北斗芯片获取的经纬度为WGS84地理坐标 31.426896,119.496145  
        Gps gps = new Gps(31.426896, 119.496145);
        System.out.println("gps :" + gps);
        Gps gcj = gps84_To_Gcj02(gps.getWgLat(), gps.getWgLon());
        System.out.println("gcj :" + gcj);
        Gps star = gcj_To_Gps84(gcj.getWgLat(), gcj.getWgLon());
        System.out.println("star:" + star);
        Gps bd = gcj02_To_Bd09(gcj.getWgLat(), gcj.getWgLon());
        System.out.println("bd  :" + bd);
        Gps gcj2 = bd09_To_Gcj02(bd.getWgLat(), bd.getWgLon());
        System.out.println("gcj :" + gcj2);
    }

}
/**
2、百度在线转换API

    1.http://api.map.baidu.com/ag/coord/convert?from=0&to=4&x=longitude&y=latitude   

    2.from: 来源坐标系（0表示WGS-84坐标，2表示GCJ-02坐标）  

    3.to: 转换后的坐标（4就是百度自己啦，这个必须是4才行）  

    4.x: 精度

    5.y: 纬度

得到的经纬度需要进一步转换才能得到BD-09坐标
**/

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.net.URLConnection;
import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;

public class BaiduAPIConverter extends Thread {
    public static void testPost(String x, String y) throws IOException {
        try {
            URL url = new URL("http://api.map.baidu.com/ag/coord/convert?from=2&to=4&x="+
            x + "&y=" + y);
            URLConnection connection = url.openConnection();
            connection.setDoOutput(true);
            OutputStreamWriter out = new OutputStreamWriter(connection.getOutputStream(), "utf-8");
            // remember to clean up   
            out.flush();
            out.close();
            // 一旦发送成功，用以下方法就可以得到服务器的回应：   
            String sCurrentLine, sTotalString;
            sCurrentLine = sTotalString = "";
            InputStream l_urlStream;
            l_urlStream = connection.getInputStream();
            BufferedReader l_reader = new BufferedReader(new InputStreamReader(l_urlStream));
            while ((sCurrentLine = l_reader.readLine()) != null) {
                if (!sCurrentLine.equals(""))
                    sTotalString += sCurrentLine;
                }
            sTotalString = sTotalString.substring(1, sTotalString.length() - 1);
            String[] results = sTotalString.split("\\,");
            if (results.length == 3) {
                if (results[0].split("\\:")[1].equals("0")) {
                String mapX = results[1].split("\\:")[1];
                String mapY = results[2].split("\\:")[1];
                mapX = mapX.substring(1, mapX.length() - 1);
                mapY = mapY.substring(1, mapY.length() - 1);
                mapX = new String(Base64.decode(mapX));
                mapY = new String(Base64.decode(mapY));
                System.out.println("\t" + mapX + "\t" + mapY);
               }
            } 
            sleep(10000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block   
            e.printStackTrace();
        }
    }

    /**
     * @param args
     * @throws IOException
    **/

    public static void main(String[] args) throws IOException {
        testPost("120.151379", "30.184678");
        System.out.println("ok");
    }

}
```