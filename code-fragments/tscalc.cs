        static void Main(string[] args)
        {
            string error = String.Join(
      "", "Invalid Response. Please try again.", Environment.NewLine);
            redo: string unix; bool bunix; bunix = false;
            Console.WriteLine("Would you like to enable Unix Timestamp Mode?"); Console.WriteLine("Type Y/N");
            Console.Write("");
            unix = Console.ReadLine();
            {
                if (unix.ToUpper() == "Y") { bunix = true; } 
                else if (unix.ToUpper() == "N") { bunix = false; }
                else {Console.WriteLine(error); goto redo;}
            }
            if (bunix == true)
            {
                long unixSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();
                Console.WriteLine(); Console.WriteLine(unixSeconds); Console.WriteLine();
                Console.ReadLine(); goto end;
            }
        end:;
        }
