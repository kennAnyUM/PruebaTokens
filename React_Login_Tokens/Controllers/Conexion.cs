using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React_Login_Tokens.Controllers
{
    public class Conexion
    {
        private const string ConnectionString = "Data Source=DESKTOP-22D0PS6\\SQL2017_BELCEBU;" +
                                  "Initial Catalog=ProyectoAnderson;" +
                                  "Integrated security=True;";

        public Conexion()
        {

        }

        public string getConnection()
        {
            return ConnectionString;
        }
    }
}
