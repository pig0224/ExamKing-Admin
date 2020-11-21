const deptList = {
  "pageIndex": 1,
  "pageSize": 10,
  "totalCount": 5,
  "totalPages": 1,
  "items": [
    {
      "id": 1,
      "deptName": "信息工程系",
      "createTime": "2020-10-26 21:44:25",
      "classes": [
        {
          "id": 1,
          "classesName": "软件1832",
          "deptld": 1,
          "createTime": "2020-10-26 22:13:52"
        },
        {
          "id": 3,
          "classesName": "软件1933",
          "deptld": 1,
          "createTime": "2020-10-27 15:45:41"
        },
        {
          "id": 4,
          "classesName": "软件1931",
          "deptld": 1,
          "createTime": "2020-10-27 17:07:56"
        }
      ]
    },
    {
      "id": 2,
      "deptName": "建筑系",
      "createTime": "2020-10-26 21:45:05",
      "classes": []
    },
    {
      "id": 3,
      "deptName": "公共基础系",
      "createTime": "2020-10-26 21:45:28",
      "classes": []
    },
    {
      "id": 4,
      "deptName": "土木工程系",
      "createTime": "2020-10-26 22:04:11",
      "classes": []
    },
    {
      "id": 5,
      "deptName": "信息系",
      "createTime": "2020-10-27 13:40:50",
      "classes": []
    }
  ],
  "hasPrevPages": false,
  "hasNextPages": false
};

module.exports = [
  // 获取系别列表
  {
    url: '/dept/dept-list',
    type: 'get',
    response: config => {
      return {
        statusCode: 200,
        data: deptList,
        successed: true,
        errors: null,
        extras: null
      }
    }
  },
]