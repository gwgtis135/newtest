package co.yedam.newtest;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/loginServlet")
public class loginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public loginServlet() {
    	
    }
  

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		String id = request.getParameter("userId");	//id?
		
		// {"retCode":"OK"} / {"retCode":"NG"}
				PrintWriter out = response.getWriter();
				
				signInDAO dao = signInDAO.getInstance();
				
				if(!(dao.checkId(id))) {
					// �Է��� ���̵�� �ű� ����.
					out.println("{\"retCode\":\"OK\"}");
				} else {
					// �ְų� �����߻�.
					out.println("{\"retCode\":\"NG\"}");
				}
		
		
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
