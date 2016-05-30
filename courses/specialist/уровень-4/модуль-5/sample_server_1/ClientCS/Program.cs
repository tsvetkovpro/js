using System;
using System.Collections.Generic;
using System.Text;

namespace ClientCS
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                SampleServer.SampleServer1Service client = 
                    new ClientCS.SampleServer.SampleServer1Service();
                Console.WriteLine(client.getTime());
                Console.WriteLine(client.sayHello("������������"));
                Console.WriteLine("������� [Enter] ��� ����������...");
                Console.ReadLine();
            }
            catch (Exception ex)
            {
                Console.WriteLine("������: " + ex.Message);
            }
        }
    }
}
