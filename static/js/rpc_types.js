//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
if (typeof Int64 === 'undefined' && typeof require === 'function') {
  var Int64 = require('node-int64');
}


User = function(args) {
  this.id = null;
  this.name = null;
  this.creacnt = null;
  this.fancnt = null;
  this.zancnt = null;
  this.commentcnt = null;
  this.visitcnt = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field id is unset!');
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field name is unset!');
    }
    if (args.creacnt !== undefined && args.creacnt !== null) {
      this.creacnt = args.creacnt;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field creacnt is unset!');
    }
    if (args.fancnt !== undefined && args.fancnt !== null) {
      this.fancnt = args.fancnt;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field fancnt is unset!');
    }
    if (args.zancnt !== undefined && args.zancnt !== null) {
      this.zancnt = args.zancnt;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field zancnt is unset!');
    }
    if (args.commentcnt !== undefined && args.commentcnt !== null) {
      this.commentcnt = args.commentcnt;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field commentcnt is unset!');
    }
    if (args.visitcnt !== undefined && args.visitcnt !== null) {
      this.visitcnt = args.visitcnt;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field visitcnt is unset!');
    }
  }
};
User.prototype = {};
User.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I32) {
        this.creacnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I32) {
        this.fancnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I32) {
        this.zancnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.I32) {
        this.commentcnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.I32) {
        this.visitcnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

User.prototype.write = function(output) {
  output.writeStructBegin('User');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.creacnt !== null && this.creacnt !== undefined) {
    output.writeFieldBegin('creacnt', Thrift.Type.I32, 10);
    output.writeI32(this.creacnt);
    output.writeFieldEnd();
  }
  if (this.fancnt !== null && this.fancnt !== undefined) {
    output.writeFieldBegin('fancnt', Thrift.Type.I32, 11);
    output.writeI32(this.fancnt);
    output.writeFieldEnd();
  }
  if (this.zancnt !== null && this.zancnt !== undefined) {
    output.writeFieldBegin('zancnt', Thrift.Type.I32, 12);
    output.writeI32(this.zancnt);
    output.writeFieldEnd();
  }
  if (this.commentcnt !== null && this.commentcnt !== undefined) {
    output.writeFieldBegin('commentcnt', Thrift.Type.I32, 13);
    output.writeI32(this.commentcnt);
    output.writeFieldEnd();
  }
  if (this.visitcnt !== null && this.visitcnt !== undefined) {
    output.writeFieldBegin('visitcnt', Thrift.Type.I32, 14);
    output.writeI32(this.visitcnt);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Blog = function(args) {
  this.bid = null;
  this.uname = null;
  this.iscopy = null;
  this.tname = null;
  this.title = null;
  this.content = null;
  this.readcnt = null;
  this.cdate = null;
  this.ccnt = null;
  if (args) {
    if (args.bid !== undefined && args.bid !== null) {
      this.bid = args.bid;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field bid is unset!');
    }
    if (args.uname !== undefined && args.uname !== null) {
      this.uname = args.uname;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field uname is unset!');
    }
    if (args.iscopy !== undefined && args.iscopy !== null) {
      this.iscopy = args.iscopy;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field iscopy is unset!');
    }
    if (args.tname !== undefined && args.tname !== null) {
      this.tname = args.tname;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field tname is unset!');
    }
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field title is unset!');
    }
    if (args.content !== undefined && args.content !== null) {
      this.content = args.content;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field content is unset!');
    }
    if (args.readcnt !== undefined && args.readcnt !== null) {
      this.readcnt = args.readcnt;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field readcnt is unset!');
    }
    if (args.cdate !== undefined && args.cdate !== null) {
      this.cdate = args.cdate;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field cdate is unset!');
    }
    if (args.ccnt !== undefined && args.ccnt !== null) {
      this.ccnt = args.ccnt;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field ccnt is unset!');
    }
  }
};
Blog.prototype = {};
Blog.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.bid = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.uname = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.iscopy = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.tname = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I32) {
        this.readcnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.STRING) {
        this.cdate = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.I32) {
        this.ccnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Blog.prototype.write = function(output) {
  output.writeStructBegin('Blog');
  if (this.bid !== null && this.bid !== undefined) {
    output.writeFieldBegin('bid', Thrift.Type.I32, 1);
    output.writeI32(this.bid);
    output.writeFieldEnd();
  }
  if (this.uname !== null && this.uname !== undefined) {
    output.writeFieldBegin('uname', Thrift.Type.STRING, 2);
    output.writeString(this.uname);
    output.writeFieldEnd();
  }
  if (this.iscopy !== null && this.iscopy !== undefined) {
    output.writeFieldBegin('iscopy', Thrift.Type.BOOL, 3);
    output.writeBool(this.iscopy);
    output.writeFieldEnd();
  }
  if (this.tname !== null && this.tname !== undefined) {
    output.writeFieldBegin('tname', Thrift.Type.STRING, 4);
    output.writeString(this.tname);
    output.writeFieldEnd();
  }
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 10);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 11);
    output.writeString(this.content);
    output.writeFieldEnd();
  }
  if (this.readcnt !== null && this.readcnt !== undefined) {
    output.writeFieldBegin('readcnt', Thrift.Type.I32, 12);
    output.writeI32(this.readcnt);
    output.writeFieldEnd();
  }
  if (this.cdate !== null && this.cdate !== undefined) {
    output.writeFieldBegin('cdate', Thrift.Type.STRING, 13);
    output.writeString(this.cdate);
    output.writeFieldEnd();
  }
  if (this.ccnt !== null && this.ccnt !== undefined) {
    output.writeFieldBegin('ccnt', Thrift.Type.I32, 14);
    output.writeI32(this.ccnt);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Tag = function(args) {
  this.uid = null;
  this.tid = null;
  this.tname = null;
  if (args) {
    if (args.uid !== undefined && args.uid !== null) {
      this.uid = args.uid;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field uid is unset!');
    }
    if (args.tid !== undefined && args.tid !== null) {
      this.tid = args.tid;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field tid is unset!');
    }
    if (args.tname !== undefined && args.tname !== null) {
      this.tname = args.tname;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field tname is unset!');
    }
  }
};
Tag.prototype = {};
Tag.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.uid = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.tid = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.tname = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Tag.prototype.write = function(output) {
  output.writeStructBegin('Tag');
  if (this.uid !== null && this.uid !== undefined) {
    output.writeFieldBegin('uid', Thrift.Type.I32, 1);
    output.writeI32(this.uid);
    output.writeFieldEnd();
  }
  if (this.tid !== null && this.tid !== undefined) {
    output.writeFieldBegin('tid', Thrift.Type.I32, 2);
    output.writeI32(this.tid);
    output.writeFieldEnd();
  }
  if (this.tname !== null && this.tname !== undefined) {
    output.writeFieldBegin('tname', Thrift.Type.STRING, 10);
    output.writeString(this.tname);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Comment = function(args) {
  this.bid = null;
  this.uname = null;
  this.content = null;
  this.date = null;
  this.zancnt = null;
  if (args) {
    if (args.bid !== undefined && args.bid !== null) {
      this.bid = args.bid;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field bid is unset!');
    }
    if (args.uname !== undefined && args.uname !== null) {
      this.uname = args.uname;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field uname is unset!');
    }
    if (args.content !== undefined && args.content !== null) {
      this.content = args.content;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field content is unset!');
    }
    if (args.date !== undefined && args.date !== null) {
      this.date = args.date;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field date is unset!');
    }
    if (args.zancnt !== undefined && args.zancnt !== null) {
      this.zancnt = args.zancnt;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field zancnt is unset!');
    }
  }
};
Comment.prototype = {};
Comment.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.bid = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.uname = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.date = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I32) {
        this.zancnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Comment.prototype.write = function(output) {
  output.writeStructBegin('Comment');
  if (this.bid !== null && this.bid !== undefined) {
    output.writeFieldBegin('bid', Thrift.Type.I32, 1);
    output.writeI32(this.bid);
    output.writeFieldEnd();
  }
  if (this.uname !== null && this.uname !== undefined) {
    output.writeFieldBegin('uname', Thrift.Type.STRING, 2);
    output.writeString(this.uname);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 3);
    output.writeString(this.content);
    output.writeFieldEnd();
  }
  if (this.date !== null && this.date !== undefined) {
    output.writeFieldBegin('date', Thrift.Type.STRING, 10);
    output.writeString(this.date);
    output.writeFieldEnd();
  }
  if (this.zancnt !== null && this.zancnt !== undefined) {
    output.writeFieldBegin('zancnt', Thrift.Type.I32, 12);
    output.writeI32(this.zancnt);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Intreq = function(args) {
  this.i = null;
  if (args) {
    if (args.i !== undefined && args.i !== null) {
      this.i = args.i;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field i is unset!');
    }
  }
};
Intreq.prototype = {};
Intreq.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.i = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Intreq.prototype.write = function(output) {
  output.writeStructBegin('Intreq');
  if (this.i !== null && this.i !== undefined) {
    output.writeFieldBegin('i', Thrift.Type.I32, 1);
    output.writeI32(this.i);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Int2req = function(args) {
  this.i1 = null;
  this.i2 = null;
  if (args) {
    if (args.i1 !== undefined && args.i1 !== null) {
      this.i1 = args.i1;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field i1 is unset!');
    }
    if (args.i2 !== undefined && args.i2 !== null) {
      this.i2 = args.i2;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field i2 is unset!');
    }
  }
};
Int2req.prototype = {};
Int2req.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.i1 = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.i2 = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Int2req.prototype.write = function(output) {
  output.writeStructBegin('Int2req');
  if (this.i1 !== null && this.i1 !== undefined) {
    output.writeFieldBegin('i1', Thrift.Type.I32, 1);
    output.writeI32(this.i1);
    output.writeFieldEnd();
  }
  if (this.i2 !== null && this.i2 !== undefined) {
    output.writeFieldBegin('i2', Thrift.Type.I32, 2);
    output.writeI32(this.i2);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Stringreq = function(args) {
  this.s = null;
  if (args) {
    if (args.s !== undefined && args.s !== null) {
      this.s = args.s;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field s is unset!');
    }
  }
};
Stringreq.prototype = {};
Stringreq.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.s = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Stringreq.prototype.write = function(output) {
  output.writeStructBegin('Stringreq');
  if (this.s !== null && this.s !== undefined) {
    output.writeFieldBegin('s', Thrift.Type.STRING, 1);
    output.writeString(this.s);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

