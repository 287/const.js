const commonColors = [["柔和、明亮、温柔 ",["#FFFFCC","#CCFFFF","#FFCCCC","#FFFF99","#CCCCFF","#FF9966","#FF6666","#FFCC99","#CCFF99","#CCCCCC","#CCFFCC","#99CC99","#99CCCC"]],["柔和、洁净、爽朗 ",["#CCFF99","#99CCFF","#99CCCC","#CCFFCC","#66CCCC","#CCCCFF","#FFFFCC","#CCFFFF","#66CCFF","#6699CC"]],["可爱、快乐、有趣 ",["#66CCCC","#CCFF66","#FF99CC","#FF9999","#FFCC99","#FF6666","#FFFF66","#99CC66","#666699","#99CC33","#FF9900","#FFCC00","#FF0033","#FF9966","#CCFF00","#CC3399","#FF6600","#993366","#CCCC33","#666633"]],["活泼、快乐、有趣 ",["#CC9999","#FFFF99","#666699","#FF9900","#FFFF00","#0099CC","#CCCC99","#CC3399","#99CC00","#FF6666","#3399CC","#CC6600","#999999","#CCCC33","#FF9933","#FFFFCC","#009933","#CCCCCC","#FF6600","#FFFF66","#009966","#CC6633","#FFCC99","#CC0066","#009999","#FFCC33"]],["运动型、轻快 ",["#FF6666","#FFFF00","#006699","#FF9966","#0066CC","#339933","#FFCC33","#336699","#FF9900","#FFFFCC","#CC6600","#CCCC44","#99CC33","#0099CC","#99CCCC","#FF0033","#333399","#CCCC00","#33CC99"]],["轻快、华丽、动感 ",["#990066","#FFCC00","#CC0033","#FFCC33","#333399","#FF0033","#666699","#FFFF00","#006699","#FFFF33","#009999","#CC3366","#CCCC00","#FF9933","#663399","#336699","#CC3333","#FFCCCC","#99CC00","#003399","#FF6600"]],["狂野、充沛、动感 ",["#990066","#FFFF00","#003399","#CC0033","#F00000","#CC3333","#CCCCCC","#003366","#333333","#CCCC00","#99CC00","#FF0033","#FF9900","#009966","#666666","#FF6600","#993333","#663366"]],["华丽、花哨、女性化 ",["#FFFF99","#993399","#FF99CC","#FF6666","#339999","#003399","#CCFF00","#66CC99","#CC6699","#CC3399","#FFCC99","#FFCCCC","#993366","#FFFF00","#666699","#99CC66","#663366","#FF33CC","#CCCC99"]],["回味、女性化、优雅 ",["#CCCCCC","#CC99CC","#CC3399","#FFCCCC","#FF99CC","#CCCCFF","#9933CC","#9999CC","#FFFFCC","#663366","#FF9999","#996666","#CC9999","#996699"]],["高尚、自然、安稳 ",["#CCCC33","#FFFF99","#CC9933","#CC9966","#CCCC66","#669999","#FF9966","#996600","#CCCC00","#660033","#CC6600","#666600","#CCCCFF","#009999","#FFCC33","#999966","#CCCC99","#339999","#99CC99","#669933","#336633","#666633","#999933","#660000","#CC9900"]],["冷静、自然 ",["#FFFF99","#99CC99","#666600","#996633","#99CC66","#006600","#66CC66","#CCFF99","#CCCC66","#CCFFCC","#669933","#CCCC33","#663300","#666633","#999933","#CC9966","#003300","#CCCC99","#006633","#FFFFCC","#999999","#333300"]],["传统、高雅、优雅 ",["#999933","#FFFFCC","#CC99CC","#CC9966","#666666","#CC9999","#CCCC99","#333333","#9966CC","#996699","#669999","#999999","#339966","#CCCCCC","#663366","#CCCCFF","#9999CC","#663300"]],["传统、稳重、古典 ",["#6699CC","#663366","#CCCC99","#990033","#CCFF66","#FF9900","#666699","#660033","#99CC99","#663300","#FF9933","#FFFF66","#006633","#CCCC00","#999933","#660099","#993366","#CCCC33","#666633","#996600","#CCCC66","#666600","#009933","#CC9900","#666666","#CC3366"]],["忠厚、稳重、有品位 ",["#FFFFCC","#CC9933","#336666","#996633","#CCCC33","#336633","#990033","#FFCC99","#333366","#669999","#996600","#993333","#CC9966","#003300","#CCCC99","#663300","#999933","#333333","#663366","#666666","#999900","#CC99CC","#CCCCCC"]],["简单、洁净、进步 ",["#CCCCCC","#666699","#CCFF66","#003366","#99CCFF","#336699","#CCCC33","#0099FF","#FFFFCC","#99CC33","#0099CC","#666666","#3399CC","#ABCDEF"]],["简单、时尚、高雅 ",["#99CCFF","#FFFF66","#666666","#336666","#999999","#0099CC","#CCCCCC","#663366","#6699CC","#333366","#669999","#333333","#ABCDEF"]],["简单、进步、时尚 ",["#333366","#99CC33","#336699","#999999","#003366","#669999","#003399","#CCFF99","#333333","#999933","#666666","#3366CC","#CCCC66","#333300","#6699CC","#006699","#CCCCCC"]],["红色",["#FFFFCC","#CCFFFF","#FFCCCC","#99CCCC","#FFCC99","#FF9999","#996699","#CC9999","#CCCC99","#FFFF99","#CCCCFF","#0099CC","#CCCCCC","#FF6666","#FF9966","#CC9966","#666666","#FFFF66","#99CC66","#CC3333","#003366","#993333","#CCCC00","#663366","#FFFF00","#0066CC","#CC0033","#333333","#336633","#990033","#003300","#FF0033","#333399","#003399","#99CC00","#999933","#333300"]],["橙色",["#FFCC99","#FFFF99","#99CC99","#CCFF99","#CCCCCC","#FFFFCC","#99CCFF","#FF9966","#FF9900","#336699","#CCCC33","#CC9933","#996600","#FFCC33","#336666","#FFFF00","#0099CC","#99CC33","#FFCC00","#FF9933","#CC6699","#3366CC","#009966","#FF6600","#FFFF66","#990033","#CCFF66","#CCCC00","#CC6600","#999999","#999966","#663300"]],["黄色",["#FFFFCC","#CCFFFF","#FFCCCC","#FFFF00","#CCCC00","#99CCFF","#FFCC33","#FFFF33","#CCCCCC","#9933FF","#FFCC00","#66CC00","#FFFF99","#FF9900","#0099CC","#0000CC","#CC9999","#6666CC","#999933","#CC99CC","#666600","#FFFF66","#FF9966","#99CC99","#999966","#FFCC99","#FF6666","#333333","#006633","#333300","#CCCC99","#663300","#CCCC66"]],["黄绿色",["#33CC33","#6666CC","#CCCC33","#CCFFCC","#FFCC99","#CCFF99","#CCCCCC","#CCCC00","#999966","#FFFFCC","#336699","#999999","#CCFFFF","#00CC00","#0066CC","#99CCCC","#99CC33","#FF9900","#FFCC00","#CCCCFF","#663300","#993399","#CC6600","#CC9933","#FFFF99","#99CC99","#669933","#666600","#CCCC66","#333366","#666666","#003366","#003333","#996633","#99CC66"]],["绿色",["#009966","#FFFF00","#339933","#9933CC","#99CC00","#FFFFCC","#CCCC66","#336666","#99CC33","#FFFF66","#336600","#CC9900","#666666","#339966","#CCCCCC","#003366","#669933","#6699CC","#006633","#CCCC33","#CC9933","#666633","#FFCC33","#336699","#99CC99","#996633","#003300","#CCCC99","#990033","#FF9900","#333300","#663300","#993333","#CC9966"]],["青绿色",["#CCFF99","#66CCCC","#339999","#99CCFF","#66CC99","#666699","#009999","#CCFFFF","#CCFF66","#FF99CC","#FFFF00","#336699","#CC9933","#FFCC33","#FFCC00","#CC3333","#669999","#CCCCCC","#CC99CC","#003333","#99CC99","#FFFFCC","#CCFFCC","#996699","#CCCC99","#999966","#336666","#999999","#003366","#663333","#CCCC66","#333333","#3399CC","#666666"]],["蓝色",["#FFFFCC","#CCFFFF","#FFCCCC","#99CCCC","#3399CC","#CCFFCC","#CCCCFF","#99CCFF","#FFCC99","#336699","#CCFF99","#6699CC","#99CC33","#0099CC","#666699","#CCCCCC","#003366","#666666","#CCCC99","#006699","#999933","#333333"]],["蓝紫色",["#CCFFFF","#CCCCFF","#CCCCCC","#666699","#99CCFF","#333399","#6666CC","#FF9999","#9999FF","#FFCC33","#FFFFCC","#0099CC","#0000FF","#6699FF","#6666FF","#66CCFF","#CCFF66","#669999","#9999CC","#003399","#FFCCCC","#6699CC","#CC6666","#CCCC00","#000066","#CCFF99","#333333","#333366","#CC0033","#336699","#CCCC66","#333300","#FFFF99","#990066","#CCCC33","#CC3333","#999966"]],["紫色",["#FFFFCC","#FFFF99","#CCCCFF","#9999CC","#99CC99","#FFCCCC","#CCCC99","#FF99CC","#660066","#663333","#333333","#9966CC","#CCCC00","#FF9966","#663399","#996699","#CC99CC","#996666","#FFCC99","#FF9933","#663366","#333399","#CCCCCC","#CC9966","#999999","#330033","#666666","#669999","#FF33CC","#999966","#993333"]],["紫红色",["#FFCCCC","#99CC00","#FF99CC","#993366","#66CC99","#CC6699","#CC9999","#CC99CC","#FFFF99","#CCCCFF","#993399","#66CCCC","#CCFF66","#003399","#CCCC00","#FF9999","#669966","#FFCCFF","#CCCCCC","#CC3399","#FFCC99","#FF6666","#FF3399","#CCCC99","#663366","#FFFFCC","#990066","#FFCC00","#CC0033","#006699","#999900","#990033","#009966"]]]