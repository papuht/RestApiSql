﻿namespace RestApiSql.Models
{
    public class Member
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        public DateTime BirthDate { get; set; }

        public int AddressKey { get; set; }

        public int SSn { get; set; }

    }
}
