const express = require("express");
const Items = require("./items-model");

const router = express.Router();

router.get("/", (req, res) => {
  Items.find()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get items" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Items.findById(id)
    .then((item) => {
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ message: "Could not find item with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get item" });
    });
});

router.post("/", (req, res) => {
  const newItem = req.body;

  Items.add(newItem)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new item" });
    });
});

router.put("/:id", async (req, res, next) => {
    try {
        Items.update(req.params.id, req.body)
            .then(updatedItem => {
                if(updatedItem) {
                    res.status(200).json({updatedItem, message: "You have successfully updated your item"})
                } else {
                    res.status(404).json({
                        message: "Could not find item with given ID"
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: "Failed to update item"
                })
            })
    } catch(err) {
        next(err)
    }
})

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Items.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find item with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete item" });
    });
});

module.exports = router;
