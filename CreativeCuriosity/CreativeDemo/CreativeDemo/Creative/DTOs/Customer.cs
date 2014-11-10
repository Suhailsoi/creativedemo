﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ember.n.SignalR.DTOs
{
    [Serializable]
    public class Customer
    {
        public Guid? Id { get; set; }
        public string Name { get; set; }

        public string Brand { get; set; }
        public string Category { get; set; }
        public string StockType { get; set; }
        public string StockID { get; set; }
        public string Quantity { get; set; }
        public string Cost_Unit { get; set; }
        public string Ssa { get; set; }
        public string Date { get; set; }
        public string Components { get; set; }
        public string Image { get; set; }
        
        
    }
}