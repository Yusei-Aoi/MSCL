﻿using System;

namespace MSCL_Displacement_Example_CSharp
{
    class Example4
    {
        public static void setToIdle(mscl.DisplacementNode node)
        {
            node.setToIdle();

            //Note: you can also disable the datastream for each class/category
            //      seperately if desired, by using the enableDataStream command shown in
            //      the startSampling example, but passing a second parameter of 'false'
        }
    }
}