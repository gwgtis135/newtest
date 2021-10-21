package minpro.DAO;

import java.util.ArrayList;
import java.util.List;

public class rest {
	private int id,corr,x_p,y_p,cnt;
	private double grade;
	private String name,image_loc,off_hours,addr,menu,phone_number,park,imglist;

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCorr() {
		return corr;
	}
	public void setCorr(int corr) {
		this.corr = corr;
	}
	public String getPark() {
		return park;
	}
	public void setPark(String park) {
		this.park = park;
	}
	public int getX_p() {
		return x_p;
	}
	public void setX_p(int x_p) {
		this.x_p = x_p;
	}
	public int getY_p() {
		return y_p;
	}
	public void setY_p(int y_p) {
		this.y_p = y_p;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImage_loc() {
		return image_loc;
	}
	public void setImage_loc(String image_loc) {
		this.image_loc = image_loc;
	}
	public String getOff_hours() {
		return off_hours;
	}
	public void setOff_hours(String off_hours) {
		this.off_hours = off_hours;
	}
	public double getGrade() {
		return grade;
	}
	public void setGrade(double grade) {
		this.grade = grade;
	}
	public String getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getMenu() {
		return menu;
	}
	public void setMenu(String menu) {
		this.menu = menu;
	}
	public String getImglist() {
		return imglist;
	}
	public void setImglist(String imglist) {
		this.imglist = imglist;
	}
	public int getCnt() {
		return cnt;
	}
	public void setCnt(int cnt) {
		this.cnt = cnt;
	}
	
}
