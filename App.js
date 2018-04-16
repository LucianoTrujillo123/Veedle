
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';
 
import { DrawerNavigator } from 'react-navigation';
 
import { StackNavigator } from 'react-navigation'
 
class HamburgerIcon extends Component {
 
  toggleDrawer=()=>{
 
    console.log(this.props.navigationProps);
    
    this.props.navigationProps.navigate('DrawerOpen');
 
  }
 
  render() {
 
    return (
 
      <View style={{flexDirection: 'row'}}>
 
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
 
          <Image
            source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
            style={{ width: 25, height: 25, marginLeft: 5}}
          />
 
        </TouchableOpacity>
 
      </View>
    
    );
  
  
  }
}
 
class MainActivity extends Component {
 
  constructor(props) {
 
    super(props);
  
    YellowBox.ignoreWarnings([
     'Warning: componentWillMount is deprecated',
     'Warning: componentWillReceiveProps is deprecated',
   ]);
  
  }
 
   render()
   {
      return(
 
         <View style = { styles.MainContainer }>
 
            <Text style={{fontSize: 23}}> This is Activity - 1 </Text>
          
         </View>
      );
   }
}
 
class SecondActivity extends Component {
 
  constructor(props) {
 
    super(props);
  
    YellowBox.ignoreWarnings([
     'Warning: componentWillMount is deprecated',
     'Warning: componentWillReceiveProps is deprecated',
   ]);
  
  }
   
     render()
     {
        return(
   
           <View style = { styles.MainContainer }>
   
              <Text style={{fontSize: 23}}> This is Activity - 2 </Text>
            
           </View>
        );
     }
  }
 
  class ThirdActivity extends Component {
 
    constructor(props) {
 
      super(props);
    
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);
    
    }
 
       render()
       {
          return(
     
             <View style = { styles.MainContainer }>
     
                <Text style={{fontSize: 23}}> This is Activity - 3 </Text>
              
             </View>
          );
       }
    }
 
    const FirstActivity_StackNavigator = StackNavigator({
      First: { 
        screen: MainActivity, 
        navigationOptions: ({ navigation }) => ({
          title: 'MainActivity',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
 
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
    });
 
 
    const SecondActivity_StackNavigator = StackNavigator({
      Second: { 
        screen: SecondActivity, 
        navigationOptions: ({ navigation }) => ({
          title: 'SecondActivity',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
 
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
    });
 
 
    const ThirdActivity_StackNavigator = StackNavigator({
      Third: { 
        screen: ThirdActivity, 
        navigationOptions: ({ navigation }) => ({
          title: 'ThirdActivity',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
 
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
    });
    
export default MyDrawerNavigator = DrawerNavigator({
  MainStack: { 
    screen: FirstActivity_StackNavigator
  },
 
  SecondStack: { 
    screen: SecondActivity_StackNavigator
  },
 
  ThirdStack: { 
    screen: ThirdActivity_StackNavigator
  }
});
 
    
const styles = StyleSheet.create({
    
 MainContainer :{
 
  flex:1,
  paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  alignItems: 'center',
  justifyContent: 'center',
    
  }
 
});