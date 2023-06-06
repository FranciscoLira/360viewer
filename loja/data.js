var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.4366955418494456,
        "pitch": 0.2963784337037243,
        "fov": 1.0989799328023968
      },
      "linkHotspots": [
        {
          "yaw": -0.29785933575276147,
          "pitch": 0.13860194259680902,
          "rotation": 0,
          "target": "1-center"
        },
        {
          "yaw": 0.5583152065491852,
          "pitch": 0.12875778072393373,
          "rotation": 0,
          "target": "3-room-1"
        },
        {
          "yaw": 0.9256462137116905,
          "pitch": 0.231817248647733,
          "rotation": 0,
          "target": "2-window"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-center",
      "name": "center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5285830029695902,
          "pitch": 0.18452416103059122,
          "rotation": 0,
          "target": "3-room-1"
        },
        {
          "yaw": 2.296490173031435,
          "pitch": 0.19527903876885055,
          "rotation": 0,
          "target": "2-window"
        },
        {
          "yaw": 2.9696870738067567,
          "pitch": 0.24998325345885775,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -2.50483458645126,
          "pitch": 0.10126185586334024,
          "rotation": 0,
          "target": "4-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-window",
      "name": "window",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0042501168800086,
          "pitch": 0.23622200083890554,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -1.0277285609429558,
          "pitch": 0.20720198227465403,
          "rotation": 0,
          "target": "1-center"
        },
        {
          "yaw": -0.3176781115957148,
          "pitch": 0.2364125441562912,
          "rotation": 0,
          "target": "3-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-room-1",
      "name": "room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7065406953521975,
          "pitch": 0.20052083372030438,
          "rotation": 0,
          "target": "1-center"
        },
        {
          "yaw": 3.0670363116170645,
          "pitch": 0.22373922191880524,
          "rotation": 0,
          "target": "2-window"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-room-2",
      "name": "room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16939347336062305,
          "pitch": 0.20770498771262424,
          "rotation": 0,
          "target": "1-center"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
